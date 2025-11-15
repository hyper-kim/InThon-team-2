import React from 'react';
import { SearchInput } from './SearchInput';
import { TagChip } from './TagChip';

export function FilterBar({
  searchQuery,
  onSearchChange,
  tags,
  selectedTags,
  onTagToggle
}) {
  // Tag colors matching the Figma design
  const tagColors = {
    '인공지능': 'bg-[#F2F5DE]',
    '뇌공학': 'bg-[#ECE0D9]',
    '데이터사이언스': 'bg-[#F0EFED]',
    '컴퓨터비전': 'bg-[#E9DDF3]',
    'HCI': 'bg-[#F6DCE4]'
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <SearchInput 
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="연구실, 키워드 또는 분야를 검색하세요"
      />
      
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <TagChip
            key={tag}
            label={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => onTagToggle(tag)}
            className={selectedTags.includes(tag) ? 'bg-gray-100' : tagColors[tag]}
          />
        ))}
      </div>
    </div>
  );
}
