import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, FileText, Users, Clock } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { TagChip } from '../components/TagChip';
import { labsData } from '../App';
import { ChatPanel } from '../components/ChatPanel';

export function LabDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lab = labsData.find(l => l.id === parseInt(id || '0'));

  if (!lab) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500 mb-4">연구실을 찾을 수 없습니다</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#A1121A] hover:underline"
          >
            홈으로 돌아가기
          </button>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className="bg-[#FBFBF9] min-h-screen pb-20">
      <PageContainer>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#364153] hover:text-[#A1121A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>돌아가기</span>
        </button>

        {/* Lab Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl mb-3 font-[Paperlogy]">{lab.name}</h1>
              <div className="flex items-center gap-2 text-[#4a5565] mb-4">
                <Users className="w-5 h-5" />
                <span className="text-lg">{lab.professor}</span>
                <span className="mx-2">•</span>
                <Mail className="w-4 h-4" />
                <a href={`mailto:${lab.professorEmail}`} className="hover:text-[#A1121A] transition-colors">
                  {lab.professorEmail}
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {lab.tags.map(tag => (
                  <TagChip key={tag} label={tag} className="bg-gray-100" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lab Introduction */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6 shadow-sm">
          <h2 className="text-2xl mb-4 font-[Paperlogy]">연구실 소개</h2>
          <p className="text-[#364153] leading-relaxed">{lab.fullDescription}</p>
          <p className="text-[#4a5565] mt-4 leading-relaxed">{lab.description}</p>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-[#A1121A]" />
            <h2 className="text-2xl font-[Paperlogy]">모집 공고</h2>
          </div>
          {lab.openPositions.length > 0 ? (
            <div className="space-y-4">
              {lab.openPositions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-[#101828]">{position.title}</h3>
                    <span className="px-3 py-1 bg-[#F2F5DE] text-[#364153] rounded-full text-sm">
                      마감: {position.deadline}
                    </span>
                  </div>
                  <p className="text-[#4a5565]">
                    <strong>요구사항:</strong> {position.requirements}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#4a5565]">현재 모집 중인 포지션이 없습니다.</p>
          )}
        </div>

        {/* Papers */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-[#A1121A]" />
            <h2 className="text-2xl font-[Paperlogy]">주요 논문</h2>
          </div>
          <div className="space-y-4">
            {lab.papers.map((paper, index) => (
              <div key={index} className="border-l-4 border-[#A1121A] pl-4 py-2">
                <h3 className="text-lg text-[#101828] mb-1">{paper.title}</h3>
                <p className="text-[#4a5565]">
                  {paper.journal} • {paper.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Schedule */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-[#A1121A]" />
            <h2 className="text-2xl font-[Paperlogy]">상담 일정</h2>
          </div>
          <div className="space-y-3">
            {lab.consultationSchedule.map((schedule, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-[#A1121A]" />
                <div className="flex-1">
                  <span className="font-medium text-[#101828]">{schedule.day}</span>
                  <span className="mx-3 text-[#4a5565]">•</span>
                  <span className="text-[#4a5565]">{schedule.time}</span>
                </div>
                <span className="text-[#4a5565]">{schedule.location}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#FFF9F0] border border-[#FFE2B8] rounded-lg">
            <p className="text-[#364153]">
              💡 <strong>상담 예약:</strong> 이메일로 사전 예약을 부탁드립니다. ({lab.professorEmail})
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${lab.professorEmail}?subject=연구실 문의: ${lab.name}`}
            className="px-8 py-4 bg-[#A1121A] text-white rounded-lg hover:bg-[#8A0F16] transition-colors shadow-md text-lg"
          >
            교수님께 문의하기
          </a>
        </div>
      </PageContainer>

      <ChatPanel labId={ id } />
    </div>
  );
}
