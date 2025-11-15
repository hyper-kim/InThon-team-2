import React, { useState } from 'react';
import { Send, MessageCircle, X, Minimize2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

const initialMessages = [
  { id: 1, text: '안녕하세요! AI 조교입니다. 무엇을 도와드릴까요?', isUser: false },
  { id: 2, text: 'I\'m interested in AI and computer vision research.', isUser: true },
  { id: 3, text: 'Great! I recommend checking out the AI & Machine Learning Lab and the Computer Vision Research Lab. Would you like more details about either of these?', isUser: false }
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
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" fill="currentColor" fillOpacity="0.2"/>
                  <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
                  <path d="M8 6L6 4M16 6L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 14C9 14 10 16 12 16C14 16 15 14 15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 11C7 11 7 12 6 12M17 11C17 11 17 12 18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
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
