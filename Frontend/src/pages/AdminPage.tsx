import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { FileText, Clock, Briefcase, BookOpen, BotMessageSquare, Plus, Trash2, GraduationCap, LogOut } from 'lucide-react';
import { API_BASE } from '../config';
import { PrimaryButton } from '../components/PrimaryButton';
import { Lab } from '../App';
import { ChatbotBuilderTab } from './ChatbotBuilderTab';

interface TimeSlot {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
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

  const [activeTab, setActiveTab] = useState('info'); // 'info' or 'chatbot'

  // State for basic info
  const [labId, setLabId] = useState<string | null>(null); // To store the lab's string ID

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

  // State for papers
  const [papers, setPapers] = useState<Paper[]>([
    { id: 1, title: '', journal: '', year: '' }
  ]);

  // Loading state and initial profile fetch moved inside component
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE}api/lab/my-profile/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // 로그인 세션(쿠키)을 보내기 위해 필수
        });

        if (response.ok) {
          const data = await response.json();

          setLabId(data.id ? String(data.id) : null);
          setLabName(data.lab_name || '');
          setProfessorName(data.professor_name || '');
          setLabDescription(data.lab_description || '');
          setEmail(data.email || '');
          setSelectedCategories(data.categories || []);
          setTimeSlots(data.time_slots || []);
          setPapers(data.papers || []);
        } else {
          console.error('프로필을 불러오지 못했습니다.');
        }
      } catch (err) {
        console.error('서버 연결 오류:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSaveAll = async () => {
    const profileData = {
      lab_name: labName,
      professor_name: professorName,
      lab_description: labDescription,
      email: email,
      categories: selectedCategories,
      time_slots: timeSlots,
      //job_postings: jobPostings,
      //papers: papers,
    };

    try {
      const response = await fetch(`${API_BASE}api/lab/my-profile/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        alert('성공적으로 저장되었습니다.');
        const savedData = await response.json();
      } else {
        const errorData = await response.json();
        alert('저장에 실패했습니다: ' + JSON.stringify(errorData));
      }
    } catch (err: any) {
      alert('서버 오류: ' + err?.message);
    }
  };

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

  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      {/* Header with Logout */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <PageContainer>
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-br...">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#A1121A] font-[Paperlogy]">KuNnect 관리자</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/admin/job-postings')}
                className="flex items-center gap-2 px-4 py-2 bg-[#A1121A] text-white rounded-lg hover:bg-[#8A0F16] transition-colors text-sm font-medium"
              >
                <Briefcase className="w-4 h-4" />
                모집 공고 올리기
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-[#364153] hover:text-[#A1121A] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                로그아웃
              </button>
            </div>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="py-12">
          <div className="mb-8 border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('info')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'info' ? 'border-[#A1121A] text-[#A1121A]' : 'border-transparent text-[#4a5565] hover:text-gray-700 hover:border-gray-300'}`}
              >
                <FileText className="w-5 h-5" />
                기본 정보 관리
              </button>
              
              <button
                onClick={() => setActiveTab('chatbot')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'chatbot' ? 'border-[#A1121A] text-[#A1121A]' : 'border-transparent text-[#4a5565] hover:text-gray-700 hover:border-gray-300'}`}
              >
                <BotMessageSquare className="w-5 h-5" />
                챗봇 빌더
              </button>
            </nav>
          </div>

          <div>
            {activeTab === 'info' && (
              <>
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
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategories.includes(category)
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

                {/* Save All Button */}
                <div className="mt-8 flex justify-center">
                  <button onClick={handleSaveAll}
                    className="px-8 py-3 bg-[#A1121A] text-white rounded-lg hover:bg-[#8A0F16] transition-colors font-medium shadow-sm">
                    모든 변경사항 저장하기
                  </button>
                </div>
              </>
            )}

            {isLoading ? (
              <p>Loading lab data...</p>
            ) : labId ? (
              <ChatbotBuilderTab labId={labId} />
            ) : (
              <div className="text-center p-8 bg-white rounded-lg border">
                <p className="text-gray-600">챗봇 빌더를 위한 연구실 ID를 불러오지 못했습니다.</p>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
