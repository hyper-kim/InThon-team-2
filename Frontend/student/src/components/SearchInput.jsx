import React from 'react';
import { Search } from 'lucide-react';

export function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-[50px] pl-12 pr-4 py-3 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[rgba(10,10,10,0.5)]"
      />
    </div>
  );
}
