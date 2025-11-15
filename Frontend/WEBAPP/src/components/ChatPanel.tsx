import React, { useState } from 'react';
import { Send, MessageCircle, X, Minimize2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ImageWithFallback } from './figma/ImageWithFallback';

const initialMessages = [
  { id: 1, text: '안녕하세요! AI 조교입니다. 무엇을 도와드릴까요?', isUser: false },
  { id: 2, text: '내가 AI 관련 랩실에 들어갈 수 있을까?', isUser: true },
  { id: 3, text: '자기소개서와 관심 분야를 기반으로 랩실을 추천해드리겠습니다.', isUser: false }
];

export function ChatPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: 'I\'m analyzing your request. Let me help you find the best labs for your interests.',
          isUser: false
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
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
        <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 transition-all ${
          isMinimized ? 'w-80 h-14' : 'w-96 h-[600px]'
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
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map(msg => (
                  <ChatMessage key={msg.id} message={msg.text} isUser={msg.isUser} />
                ))}
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