import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = '' }: PrimaryButtonProps) {
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
