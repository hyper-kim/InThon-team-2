import React, { useState, useEffect } from 'react';
import { PageContainer } from '../components/PageContainer';
import { FilterBar } from '../components/FilterBar';
import { LabCard } from '../components/LabCard';
import { HeroBanner } from '../components/HeroBanner';
import { labsData } from '../App';

const allTags = ['인공지능', '뇌공학', '데이터사이언스', '컴퓨터비전', 'HCI'];

export function HomePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [labsData, setLabsData] = useState<any[]>([]); // 3. 랩 데이터 상태 추가
  
  // 4. Django API에서 랩 목록을 가져오는 로직
  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch('https://shiny-system-v6j7j46w4g65cpqrj-8000.app.github.dev/api/lab/public/');
        if (!response.ok) {
          throw new Error('Failed to fetch labs');
        }
        const data = await response.json();
        
        // Django API 응답 형식에 맞게 데이터 가공
        // (주의: Serializer 필드명과 React 컴포넌트 prop 이름이 다를 수 있음)
        const formattedData = data.map((lab: any) => ({
          id: lab.id,
          name: lab.lab_name,
          // ... (lab.jobposting_set, lab.availability_slots 등을 파싱...)
          // 지금은 App.tsx의 목 데이터 형식과 다르므로 
          // LabCard.tsx 또는 이 부분을 수정해야 합니다.
          // 우선 간단하게 이름과 설명만 매핑합니다.
          description: lab.lab_instruction || '설명 없음', // (models.py에 lab_instruction 필드 사용)
          professor: lab.user ? `Prof. ${lab.user}` : '교수 정보 없음', // (Serializer에 user가 포함되어 있음)
          tags: ['인공지능'], // (이 부분은 API 스펙에 맞게 수정 필요)
        }));

        setLabsData(formattedData);

      } catch (error) {
        console.error('Error fetching labs:', error);
      }
    };

    fetchLabs();
  }, []); // 빈 배열: 컴포넌트가 처음 마운트될 때 1번만 실행
  
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
