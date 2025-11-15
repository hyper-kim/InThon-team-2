import React from 'react';

interface TagChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function TagChip({ label, isSelected = false, onClick, className }: TagChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full transition-all
        ${className || 'bg-gray-100'}
        ${isSelected ? 'ring-2 ring-[#A1121A]' : ''}
        hover:shadow-md
      `}
    >
      <span className="text-[#364153]">{label}</span>
    </button>
  );
}
