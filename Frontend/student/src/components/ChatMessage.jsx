import React from 'react';
import { User } from 'lucide-react';

export function ChatMessage({ message, isUser = false }) {
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden
        ${isUser ? 'bg-gray-200' : 'bg-[#A1121A]'}
      `}>
        {isUser ? (
          <User className="w-4 h-4 text-[#4A5565]" />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
            <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" fill="currentColor" fillOpacity="0.2"/>
            <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
            <path d="M8 6L6 4M16 6L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9 14C9 14 10 16 12 16C14 16 15 14 15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 11C7 11 7 12 6 12M17 11C17 11 17 12 18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </div>

      {/* Message */}
      <div className={`
        px-4 py-2 rounded-lg max-w-[80%]
        ${isUser 
          ? 'bg-gray-100 text-[#1E2939]' 
          : 'bg-red-50 text-[#1E2939] border border-[#FFE2E2]'
        }
      `}>
        <p>{message}</p>
      </div>
    </div>
  );
}
