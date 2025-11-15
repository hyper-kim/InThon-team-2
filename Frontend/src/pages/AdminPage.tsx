import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { FileText, Clock, Briefcase, BookOpen, Plus, Trash2, GraduationCap, LogOut } from 'lucide-react';

interface TimeSlot {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
}

interface JobPosting {
  id: number;
  title: string;
  field: string;
  description: string;
  capacity: string;
  deadline: string;
}

interface Paper {
  id: number;
  title: string;
  journal: string;
  year: string;
}

interface AdminPageProps {
  onLogout: () => void;
}

export function AdminPage({ onLogout }: AdminPageProps) {
  const navigate = useNavigate();

  // State for basic info
  const [labName, setLabName] = useState('');
  const [professorName, setProfessorName] = useState('');
  const [labDescription, setLabDescription] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // State for time slots
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: 1, day: '월요일', startTime: '', endTime: '' },
    { id: 2, day: '수요일', startTime: '', endTime: '' }
  ]);

  // State for job postings
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    { id: 1, title: '', field: '', description: '', capacity: '', deadline: '' }
  ]);

  // State for papers
  const [papers, setPapers] = useState<Paper[]>([
    { id: 1, title: '', journal: '', year: '' }
  ]);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { id: Date.now(), day: '', startTime: '', endTime: '' }]);
  };

  const deleteTimeSlot = (id: number) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  const addJobPosting = () => {
    setJobPostings([...jobPostings, { id: Date.now(), title: '', field: '', description: '', capacity: '', deadline: '' }]);
  };

  const deleteJobPosting = (id: number) => {
    setJobPostings(jobPostings.filter(posting => posting.id !== id));
  };

  const addPaper = () => {
    setPapers([...papers, { id: Date.now(), title: '', journal: '', year: '' }]);
  };

  const deletePaper = (id: number) => {
    setPapers(papers.filter(paper => paper.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      {/* Header with Logout */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <PageContainer>
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#A1121A] to-[#8A0F16] rounded-lg flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#A1121A] font-[Paperlogy]">KuNnect 관리자</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-[#364153] hover:text-[#A1121A] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="py-12">
          {/* Basic Info Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 p-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-[#F2F5DE] rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#A1121A]" />
              </div>
              <div>
                <h2 className="text-[#101828] font-bold">기본 정보 수정</h2>
                <p className="text-[#4a5565] text-sm">연구실의 기본 정보를 업데이트하세요</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[#364153] text-sm font-medium mb-2">연구실 이름</label>
                <input
                  type="text"
                  value={labName}
                  onChange={(e) => setLabName(e.target.value)}
                  placeholder="연구실 이름을 입력하세요"
                  className="w-full px-3 py-2 bg-[#F3F3F5] border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[#364153] text-sm font-medium mb-2">교수명</label>
                <input
                  type="text"
                  value={professorName}
                  onChange={(e) => setProfessorName(e.target.value)}
                  placeholder="교수명을 입력하세요"
                  className="w-full px-3 py-2 bg-[#F3F3F5] border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[#364153] text-sm font-medium mb-2">연구실 설명</label>
                <textarea
                  value={labDescription}
                  onChange={(e) => setLabDescription(e.target.value)}
                  placeholder="연구실에 대한 설명을 입력하세요"
                  rows={4}
                  className="w-full px-3 py-2 bg-[#F3F3F5] border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-[#364153] text-sm font-medium mb-2">이메일</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@korea.ac.kr"
                  className="w-full px-3 py-2 bg-[#F3F3F5] border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[#364153] text-sm font-medium mb-2">연구 분야 카테고리</label>
                <p className="text-xs text-[#717182] mb-3">해당하는 분야를 모두 선택하세요</p>
                <div className="flex flex-wrap gap-2">
                  {['인공지능', '뇌공학', '데이터사이언스', '컴퓨터비전', 'HCI'].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategories(prev =>
                          prev.includes(category)
                            ? prev.filter(c => c !== category)
                            : [...prev, category]
                        );
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategories.includes(category)
                          ? 'bg-[#A1121A] text-white shadow-md'
                          : 'bg-[#F3F3F5] text-[#364153] hover:bg-[#E8E8EA] border border-[#D1D5DC]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {selectedCategories.length > 0 && (
                  <p className="text-xs text-[#A1121A] mt-2">
                    선택된 카테고리: {selectedCategories.join(', ')}
                  </p>
                )}
              </div>
              
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="flex items-center gap-3 p-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-[#ECE0D9] rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#A1121A]" />
              </div>
              <div>
                <h2 className="text-[#101828] font-bold">면담 가능 시간 관리</h2>
                <p className="text-[#4a5565] text-sm">학생들이 면담 신청할 수 있는 시간대를 설정하세요</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {timeSlots.map((slot, index) => (
                <div key={slot.id} className="bg-[#FBFBF9] border border-[#D1D5DC] rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">요일</label>
                      <select
                        value={slot.day}
                        onChange={(e) => {
                          const newSlots = [...timeSlots];
                          newSlots[index].day = e.target.value;
                          setTimeSlots(newSlots);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      >
                        <option value="월요일">월요일</option>
                        <option value="화요일">화요일</option>
                        <option value="수요일">수요일</option>
                        <option value="목요일">목요일</option>
                        <option value="금요일">금요일</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">시작 시간</label>
                      <input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) => {
                          const newSlots = [...timeSlots];
                          newSlots[index].startTime = e.target.value;
                          setTimeSlots(newSlots);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">종료 시간</label>
                      <input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) => {
                          const newSlots = [...timeSlots];
                          newSlots[index].endTime = e.target.value;
                          setTimeSlots(newSlots);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => deleteTimeSlot(slot.id)}
                      className="flex items-center gap-1 text-[#A1121A] hover:text-[#8A0F16] text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      삭제
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={addTimeSlot}
                className="w-full py-3 bg-white border-2 border-[#D1D5DC] rounded-lg text-sm font-medium text-[#0A0A0A] hover:border-[#A1121A] hover:text-[#A1121A] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                새 시간대 추가
              </button>
            </div>
          </div>

          {/* Job Postings Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="flex items-center gap-3 p-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-[#E9DDF3] rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#A1121A]" />
              </div>
              <div>
                <h2 className="text-[#101828] font-bold">모집 공고 관리</h2>
                <p className="text-[#4a5565] text-sm">학생 모집 공고를 작성하고 관리하세요</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {jobPostings.map((posting, index) => (
                <div key={posting.id} className="space-y-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2">공고 제목</label>
                    <input
                      type="text"
                      value={posting.title}
                      onChange={(e) => {
                        const newPostings = [...jobPostings];
                        newPostings[index].title = e.target.value;
                        setJobPostings(newPostings);
                      }}
                      placeholder="예: 2024 봄학기 학부연구생 모집"
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2">모집 분야</label>
                    <input
                      type="text"
                      value={posting.field}
                      onChange={(e) => {
                        const newPostings = [...jobPostings];
                        newPostings[index].field = e.target.value;
                        setJobPostings(newPostings);
                      }}
                      placeholder="예: 머신러닝, 딥러닝"
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2">공고 내용</label>
                    <textarea
                      value={posting.description}
                      onChange={(e) => {
                        const newPostings = [...jobPostings];
                        newPostings[index].description = e.target.value;
                        setJobPostings(newPostings);
                      }}
                      placeholder="공고 내용을 자세히 작성하세요"
                      rows={4}
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">모집 인원</label>
                      <input
                        type="number"
                        value={posting.capacity}
                        onChange={(e) => {
                          const newPostings = [...jobPostings];
                          newPostings[index].capacity = e.target.value;
                          setJobPostings(newPostings);
                        }}
                        placeholder="0"
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">마감일</label>
                      <input
                        type="date"
                        value={posting.deadline}
                        onChange={(e) => {
                          const newPostings = [...jobPostings];
                          newPostings[index].deadline = e.target.value;
                          setJobPostings(newPostings);
                        }}
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => deleteJobPosting(posting.id)}
                      className="flex items-center gap-1 text-[#A1121A] hover:text-[#8A0F16] text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      공고 삭제
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={addJobPosting}
                className="w-full py-3 bg-white border-2 border-[#D1D5DC] rounded-lg text-sm font-medium text-[#0A0A0A] hover:border-[#A1121A] hover:text-[#A1121A] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                새 공고 추가
              </button>
            </div>
          </div>

          {/* Research Papers Section */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 p-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-[#F6DCE4] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#A1121A]" />
              </div>
              <div>
                <h2 className="text-[#101828] font-bold">연구 성과 관리</h2>
                <p className="text-[#4a5565] text-sm">연구실의 주요 논문을 관리하세요</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {papers.map((paper, index) => (
                <div key={paper.id} className="space-y-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div>
                    <label className="block text-[#364153] text-sm font-medium mb-2">논문 제목</label>
                    <input
                      type="text"
                      value={paper.title}
                      onChange={(e) => {
                        const newPapers = [...papers];
                        newPapers[index].title = e.target.value;
                        setPapers(newPapers);
                      }}
                      placeholder="예: 인공지능 기반 영상 인식"
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">저널명</label>
                      <input
                        type="text"
                        value={paper.journal}
                        onChange={(e) => {
                          const newPapers = [...papers];
                          newPapers[index].journal = e.target.value;
                          setPapers(newPapers);
                        }}
                        placeholder="예: IEEE Transactions"
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[#364153] text-sm font-medium mb-2">발표 연도</label>
                      <input
                        type="number"
                        value={paper.year}
                        onChange={(e) => {
                          const newPapers = [...papers];
                          newPapers[index].year = e.target.value;
                          setPapers(newPapers);
                        }}
                        placeholder="2024"
                        className="w-full px-3 py-2 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => deletePaper(paper.id)}
                      className="flex items-center gap-1 text-[#A1121A] hover:text-[#8A0F16] text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      논문 삭제
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={addPaper}
                className="w-full py-3 bg-white border-2 border-[#D1D5DC] rounded-lg text-sm font-medium text-[#0A0A0A] hover:border-[#A1121A] hover:text-[#A1121A] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                새 논문 추가
              </button>
            </div>
          </div>

          {/* Save All Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-[#A1121A] text-white rounded-lg hover:bg-[#8A0F16] transition-colors font-medium shadow-sm">
              모든 변경사항 저장하기
            </button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
