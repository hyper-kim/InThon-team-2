import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { PrimaryButton } from '../components/PrimaryButton';
import { Plus, Trash2, Calendar, Users } from 'lucide-react';

interface JobPosting {
  id: number;
  title: string;
  field: string;
  description: string;
  capacity: string;
  deadline: string;
}

interface JobPostingsTabProps {
  labId: string;
}

export function JobPostingsTab({ labId }: JobPostingsTabProps) {
  const navigate = useNavigate();

  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    { id: 1, title: '', field: '', description: '', capacity: '', deadline: '' }
  ]);

  const addJobPosting = () => {
    setJobPostings([...jobPostings, { id: Date.now(), title: '', field: '', description: '', capacity: '', deadline: '' }]);
  };

  const deleteJobPosting = (id: number) => {
    setJobPostings(jobPostings.filter(posting => posting.id !== id));
  };

  const handleSaveAll = () => {
    console.log('저장할 공고 데이터:', jobPostings);
    alert('✅ 모집 공고가 저장되었습니다!');
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <PageContainer>

        {/* Job Postings List */}
        <div className="space-y-6">
          {jobPostings.map((posting, index) => (
            <div key={posting.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-[#364153] text-sm font-medium mb-2">
                    공고 제목 <span className="text-[#A1121A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={posting.title}
                    onChange={(e) => {
                      const newPostings = [...jobPostings];
                      newPostings[index].title = e.target.value;
                      setJobPostings(newPostings);
                    }}
                    placeholder="예: 2024 봄학기 학부연구생 모집"
                    className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                  />
                </div>

                {/* Field */}
                <div>
                  <label className="block text-[#364153] text-sm font-medium mb-2">
                    모집 분야 <span className="text-[#A1121A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={posting.field}
                    onChange={(e) => {
                      const newPostings = [...jobPostings];
                      newPostings[index].field = e.target.value;
                      setJobPostings(newPostings);
                    }}
                    placeholder="예: 머신러닝, 딥러닝, 컴퓨터비전"
                    className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[#364153] text-sm font-medium mb-2">
                    공고 내용 <span className="text-[#A1121A]">*</span>
                  </label>
                  <textarea
                    value={posting.description}
                    onChange={(e) => {
                      const newPostings = [...jobPostings];
                      newPostings[index].description = e.target.value;
                      setJobPostings(newPostings);
                    }}
                    placeholder="모집 공고 내용을 자세히 작성하세요&#10;&#10;예시:&#10;- 지원 자격: 학부 3학년 이상&#10;- 연구 주제: AI 기반 영상 분석&#10;- 활동 기간: 2024년 3월 ~ 6월&#10;- 우대 사항: Python, PyTorch 경험자"
                    rows={8}
                    className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent resize-none"
                  />
                </div>

                {/* Capacity and Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#A1121A]" />
                      모집 인원 <span className="text-[#A1121A]">*</span>
                    </label>
                    <input
                      type="number"
                      value={posting.capacity}
                      onChange={(e) => {
                        const newPostings = [...jobPostings];
                        newPostings[index].capacity = e.target.value;
                        setJobPostings(newPostings);
                      }}
                      placeholder="0"
                      min="1"
                      className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#A1121A]" />
                      마감일 <span className="text-[#A1121A]">*</span>
                    </label>
                    <input
                      type="date"
                      value={posting.deadline}
                      onChange={(e) => {
                        const newPostings = [...jobPostings];
                        newPostings[index].deadline = e.target.value;
                        setJobPostings(newPostings);
                      }}
                      className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Delete Button */}
                <div className="flex justify-end pt-2 border-t border-gray-100">
                  <button
                    onClick={() => deleteJobPosting(posting.id)}
                    className="flex items-center gap-2 px-4 py-2 text-[#A1121A] hover:bg-[#FEF2F2] rounded-lg text-sm font-medium transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    공고 삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Posting Button */}
        <div className="mt-6">
          <button
            onClick={addJobPosting}
            className="w-full py-4 bg-white border-2 border-dashed border-[#D1D5DC] rounded-xl text-sm font-medium text-[#364153] hover:border-[#A1121A] hover:text-[#A1121A] hover:bg-[#FEF2F2] transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            새 모집 공고 추가
          </button>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <PrimaryButton onClick={handleSaveAll}>
            모든 공고 저장하기
          </PrimaryButton>
        </div>
      </PageContainer>
    </div>
  );
}
