import React from 'react';

export function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 bg-[#A1121A] text-white rounded-lg 
        hover:bg-[#8A0F16] transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}
