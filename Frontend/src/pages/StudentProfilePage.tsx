import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/PageContainer";
import {
  User,
  Sparkles,
  Mail,
  Github,
  Link as LinkIcon,
  Camera,
  X,
  CheckCircle2,
} from "lucide-react";

interface StudentProfilePageProps {
  onLogout: () => void;
}

const skillOptions = [
  "Python",
  "R",
  "C",
  "C++",
  "Java",
  "Pytorch",
  "TensorFlow",
  "LangChain",
  "ML",
  "NLP",
  "SQL",
  "GenAI",
];

// Skill color mapping based on categories
const getSkillColors = (skill: string) => {
  const colorMap: {
    [key: string]: {
      bg: string;
      text: string;
      selectedBg: string;
      shadow: string;
    };
  } = {
    Python: {
      bg: "bg-[#DBEAFE]",
      text: "text-[#1E40AF]",
      selectedBg:
        "bg-gradient-to-r from-[#3B82F6] to-[#2563EB]",
      shadow: "shadow-[#3B82F6]/30",
    },
    R: {
      bg: "bg-[#D1FAE5]",
      text: "text-[#065F46]",
      selectedBg:
        "bg-gradient-to-r from-[#10B981] to-[#059669]",
      shadow: "shadow-[#10B981]/30",
    },
    C: {
      bg: "bg-[#E0E7FF]",
      text: "text-[#3730A3]",
      selectedBg:
        "bg-gradient-to-r from-[#6366F1] to-[#4F46E5]",
      shadow: "shadow-[#6366F1]/30",
    },
    "C++": {
      bg: "bg-[#DDD6FE]",
      text: "text-[#5B21B6]",
      selectedBg:
        "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]",
      shadow: "shadow-[#8B5CF6]/30",
    },
    Java: {
      bg: "bg-[#FEE2E2]",
      text: "text-[#991B1B]",
      selectedBg:
        "bg-gradient-to-r from-[#EF4444] to-[#DC2626]",
      shadow: "shadow-[#EF4444]/30",
    },
    Pytorch: {
      bg: "bg-[#FCE7F3]",
      text: "text-[#9F1239]",
      selectedBg:
        "bg-gradient-to-r from-[#EC4899] to-[#DB2777]",
      shadow: "shadow-[#EC4899]/30",
    },
    TensorFlow: {
      bg: "bg-[#FED7AA]",
      text: "text-[#9A3412]",
      selectedBg:
        "bg-gradient-to-r from-[#F97316] to-[#EA580C]",
      shadow: "shadow-[#F97316]/30",
    },
    LangChain: {
      bg: "bg-[#FEF3C7]",
      text: "text-[#92400E]",
      selectedBg:
        "bg-gradient-to-r from-[#F59E0B] to-[#D97706]",
      shadow: "shadow-[#F59E0B]/30",
    },
    ML: {
      bg: "bg-[#FBCFE8]",
      text: "text-[#831843]",
      selectedBg:
        "bg-gradient-to-r from-[#F472B6] to-[#EC4899]",
      shadow: "shadow-[#F472B6]/30",
    },
    NLP: {
      bg: "bg-[#E9D5FF]",
      text: "text-[#6B21A8]",
      selectedBg:
        "bg-gradient-to-r from-[#A855F7] to-[#9333EA]",
      shadow: "shadow-[#A855F7]/30",
    },
    GenAI: {
      bg: "bg-[#FAE8FF]",
      text: "text-[#701A75]",
      selectedBg:
        "bg-gradient-to-r from-[#C084FC] to-[#A855F7]",
      shadow: "shadow-[#C084FC]/30",
    },
    SQL: {
      bg: "bg-[#CFFAFE]",
      text: "text-[#155E75]",
      selectedBg:
        "bg-gradient-to-r from-[#06B6D4] to-[#0891B2]",
      shadow: "shadow-[#06B6D4]/30",
    },
  };

  return (
    colorMap[skill] || {
      bg: "bg-[#F3F3F5]",
      text: "text-[#364153]",
      selectedBg:
        "bg-gradient-to-r from-[#6B7280] to-[#4B5563]",
      shadow: "shadow-[#6B7280]/30",
    }
  );
};

type Section = "basic" | "interests" | "contact";

export function StudentProfilePage({
  onLogout,
}: StudentProfilePageProps) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] =
    useState<Section>("basic");

  // Basic Info
  const [name, setName] = useState('홍길동');
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [academicStatus, setAcademicStatus] = useState("");
  const [profileImage, setProfileImage] = useState("");

  // Interests
  const [introduction, setIntroduction] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<
    string[]
  >([]);

  // Contact
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill],
    );
  };

  const handleSaveBasic = () => {
    if (
      !name.trim() ||
      !studentId.trim() ||
      !department.trim() ||
      !academicStatus
    ) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }
    alert("기본 정보가 저장되었습니다!");
  };

  const handleSaveInterests = () => {
    alert("관심 분야가 저장되었습니다!");
  };

  const handleSaveContact = () => {
    alert("연락처 정보가 저장되었습니다!");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const sidebarItems = [
    { id: "basic" as Section, label: "기본 정보", icon: User },
    {
      id: "interests" as Section,
      label: "관심 분야",
      icon: Sparkles,
    },
    {
      id: "contact" as Section,
      label: "연락처 정보",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Banner - Thinner */}
      <div className="relative bg-[rgba(136,118,119,0.34)] overflow-hidden h-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Profile Photo - Overlapping */}
      <div className="relative -mt-20 flex flex-col items-center">
        <div className="relative group">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#9CA3AF] via-[#6B7280] to-[#4B5563] p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-20 h-20 text-[#9CA3AF]" />
              )}
            </div>
          </div>
          <button className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Camera className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Name below profile photo */}
        <div className="mt-4 text-center">
          <h2 className="text-[#1F2937] font-semibold text-xl">
            {name}
          </h2>
        </div>
      </div>

      {/* Main Content Area */}
      <PageContainer>
        <div className="flex gap-8 py-12 min-h-[600px]">
          {/* Left Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-8">
              <h3 className="text-[#1F2937] font-semibold mb-4 px-2">
                프로필 설정
              </h3>
              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#F3F4F6] text-[#1F2937] font-medium shadow-sm"
                          : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#374151]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {/* Basic Info Section */}
              {activeSection === "basic" && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-[#1F2937] font-semibold mb-1">
                      기본 정보
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                      필수 정보를 입력해주세요
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#374151] text-sm font-medium mb-2">
                          이름{" "}
                          <span className="text-[#DC2626]">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                          placeholder="홍길동"
                          className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[#374151] text-sm font-medium mb-2">
                          학번{" "}
                          <span className="text-[#DC2626]">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          value={studentId}
                          onChange={(e) =>
                            setStudentId(e.target.value)
                          }
                          placeholder="2024123456"
                          className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        소속 / 전공{" "}
                        <span className="text-[#DC2626]">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        value={department}
                        onChange={(e) =>
                          setDepartment(e.target.value)
                        }
                        placeholder="컴퓨터학과"
                        className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        학년 / 학적 상태{" "}
                        <span className="text-[#DC2626]">
                          *
                        </span>
                      </label>
                      <select
                        value={academicStatus}
                        onChange={(e) =>
                          setAcademicStatus(e.target.value)
                        }
                        className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                      >
                        <option value="">선택하세요</option>
                        <option value="1학년">1학년</option>
                        <option value="2학년">2학년</option>
                        <option value="3학년">3학년</option>
                        <option value="4학년">4학년</option>
                        <option value="휴학">휴학</option>
                        <option value="졸업예정">
                          졸업예정
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2.5 bg-white border border-[#D1D5DB] text-[#374151] rounded-lg hover:bg-[#F9FAFB] transition-all text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveBasic}
                      className="px-6 py-2.5 bg-[#1F2937] text-white rounded-lg hover:bg-[#111827] transition-all text-sm font-medium shadow-sm"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}

              {/* Interests Section */}
              {activeSection === "interests" && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-[#1F2937] font-semibold mb-1">
                      관심 분야
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                      나의 경험과 관심사를 작성해주세요
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        자기소개
                      </label>
                      <p className="text-xs text-[#6B7280] mb-3">
                        경험, 프로젝트, 수강한 과목, 관심 분야
                        등 자유롭게 기입해주세요
                      </p>
                      <textarea
                        value={introduction}
                        onChange={(e) =>
                          setIntroduction(e.target.value)
                        }
                        placeholder="자기소개를 작성해주세요..."
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        스킬 스택
                      </label>
                      <p className="text-xs text-[#6B7280] mb-3">
                        보유하고 있는 기술을 모두 선택하세요
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillOptions.map((skill) => {
                          const colors = getSkillColors(skill);
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() =>
                                handleSkillToggle(skill)
                              }
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedSkills.includes(skill)
                                  ? `${colors.selectedBg} text-white shadow-lg ${colors.shadow} scale-105`
                                  : `${colors.bg} ${colors.text} hover:scale-105 border border-transparent`
                              }`}
                            >
                              {skill}
                            </button>
                          );
                        })}
                      </div>
                      {selectedSkills.length > 0 && (
                        <div className="mt-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-4 h-4 text-[#6B7280]" />
                            <p className="text-sm text-[#374151] font-medium">
                              선택된 스킬 (
                              {selectedSkills.length}개)
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedSkills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-[#1F2937] text-white rounded-full text-xs shadow-sm"
                              >
                                {skill}
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSkillToggle(skill)
                                  }
                                  className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2.5 bg-white border border-[#D1D5DB] text-[#374151] rounded-lg hover:bg-[#F9FAFB] transition-all text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveInterests}
                      className="px-6 py-2.5 bg-[#1F2937] text-white rounded-lg hover:bg-[#111827] transition-all text-sm font-medium shadow-sm"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeSection === "contact" && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-[#1F2937] font-semibold mb-1">
                      연락처 정보
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                      연락 가능한 정보를 입력해주세요
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        이메일
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          placeholder="example@korea.ac.kr"
                          className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        GitHub 링크
                      </label>
                      <div className="relative">
                        <Github className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                          type="url"
                          value={github}
                          onChange={(e) =>
                            setGithub(e.target.value)
                          }
                          placeholder="https://github.com/username"
                          className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-2">
                        포트폴리오 링크
                      </label>
                      <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                          type="url"
                          value={portfolio}
                          onChange={(e) =>
                            setPortfolio(e.target.value)
                          }
                          placeholder="https://myportfolio.com"
                          className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6B7280] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2.5 bg-white border border-[#D1D5DB] text-[#374151] rounded-lg hover:bg-[#F9FAFB] transition-all text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveContact}
                      className="px-6 py-2.5 bg-[#1F2937] text-white rounded-lg hover:bg-[#111827] transition-all text-sm font-medium shadow-sm"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}