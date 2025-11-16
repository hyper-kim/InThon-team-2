import React, { useState } from 'react';
import { CHATBOT_API_BASE } from '../config';
import { Send, MessageCircle, X, Minimize2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ImageWithFallback } from './figma/ImageWithFallback';

const initialMessages = [
  { id: 1, text: '안녕하세요! AI 조교입니다. 무엇을 도와드릴까요?', isUser: false },
];

type ChatPanelProps = { labId?: string };

export function ChatPanel({ labId = '' }: ChatPanelProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isMinimized, isOpen, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { id: Date.now(), text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const base = CHATBOT_API_BASE.replace(/\/$/, '');
      const resp = await fetch(`${base}/chat_general`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lab_id: labId || '', question: userMessage.text })
      });

      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(errText || 'Network response was not ok');
      }

      const data = await resp.json();
      const aiText = data.answer || '죄송합니다. 응답을 받지 못했습니다.';
      const aiMessage = { id: Date.now() + 1, text: aiText, isUser: false };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Chat API error:', err);
      setMessages(prev => [...prev, { id: Date.now() + 2, text: '오류가 발생했습니다. 다시 시도해 주세요.', isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#A1121A] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8A0F16] transition-all hover:scale-110 z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 transition-all ${isMinimized ? 'w-80 h-14' : 'w-96 h-[600px]'
          }`}>
          {/* Header */}
          <div className="px-5 py-3 border-b border-gray-200 bg-gradient-to-r from-[#A1121A] to-[#8A0F16] text-white rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-0.5">
                <ImageWithFallback
                  src="https://i.im.ge/2025/11/15/nGJVBy.logo.png"
                  alt="KuNnect AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm">AI 조교</h3>
                {!isMinimized && <p className="text-xs text-white/80">Online</p>}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-7 h-7 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* ⭐ MESSAGE AREA with auto-scroll anchor */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map(msg => (
                  <ChatMessage key={msg.id} message={msg.text} isUser={msg.isUser} />
                ))}

                {/* ⭐ AUTO-SCROLL TARGET */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-sm placeholder:text-[rgba(10,10,10,0.5)]"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 bg-[#A1121A] text-white rounded-lg flex items-center justify-center hover:bg-[#8A0F16] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}