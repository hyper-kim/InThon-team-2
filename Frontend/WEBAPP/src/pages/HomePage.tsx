import React, { useState } from 'react';
import { PageContainer } from '../components/PageContainer';
import { FilterBar } from '../components/FilterBar';
import { LabCard } from '../components/LabCard';
import { HeroBanner } from '../components/HeroBanner';
import { labsData } from '../App';

const allTags = ['인공지능', '뇌공학', '데이터사이언스', '컴퓨터비전', 'HCI'];

export function HomePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Filter labs based on search and selected tags
  const filteredLabs = labsData.filter(lab => {
    const matchesSearch = searchQuery === '' || 
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => lab.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Main Content */}
      <PageContainer>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl mb-2 font-[Paperlogy] font-normal text-[32px]">랩실 탐색하기</h2>
          <p className="text-[#4a5565]">당신의 관심과 목표에 딱 맞는 연구실을 찾아보세요.</p>
        </div>

        {/* Search and Filter */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          tags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />

        {/* Lab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredLabs.map(lab => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No labs found matching your criteria
          </div>
        )}
      </PageContainer>
    </>
  );
}
