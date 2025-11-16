// Frontend/WEBAPP/src/components/ChatbotBuilderTab.tsx

import React, { useState } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { Link, FileText, Fingerprint, Loader2 } from 'lucide-react';
import { CHATBOT_API_BASE } from '../config';

interface ChatbotBuilderTabProps {
  labId: string;
}

export function ChatbotBuilderTab({ labId }: ChatbotBuilderTabProps) {
  const [introUrls, setIntroUrls] = useState('');
  const [publicationUrl, setPublicationUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleApiCall = async (endpoint: string, successMessage: string, loadingMessage: string) => {
    setIsLoading(true);
    setStatusMessage(loadingMessage);

    const urls = introUrls.split('\n').filter(url => url.trim() !== '');

    try {
      const response = await fetch(`${CHATBOT_API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lab_id: labId,
          intro_urls: urls,
          publication_url: publicationUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(successMessage.replace('{lab_id}', data.lab_id));
        setStatusMessage(`[성공] 최종 업데이트: ${new Date().toLocaleTimeString()}`);
      } else {
        throw new Error(data.detail || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      alert(`❌ 작업 실패: ${errorMessage}`);
      setStatusMessage(`[실패] 오류가 발생했습니다.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadLabInfo = () => {
    if (!labId || !introUrls || !publicationUrl) {
      alert('⚠️ 모든 필수 필드를 입력해주세요.');
      return;
    }
    handleApiCall('load_lab_info', '✅ 정보 수집 완료! (Lab ID: {lab_id})', '연구실 정보를 수집하고 있습니다...');
  };

  const handleCreateEmbedding = () => {
    if (!labId) {
      alert('⚠️ 연구실 ID를 찾을 수 없습니다.');
      return;
    }
    handleApiCall('create_embedding', '✅ 임베딩 생성 완료! (Lab ID: {lab_id})', '임베딩을 생성하고 있습니다. 이 작업은 몇 분 정도 소요될 수 있습니다...');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="space-y-5">
        <div>
          <label className="block text-[#364153] text-sm font-medium mb-2 flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-[#A1121A]" />
            대상 연구실 ID
          </label>
          <input
            type="text"
            value={labId}
            readOnly
            className="w-full px-4 py-2.5 bg-gray-100 border border-[#D1D5DC] rounded-lg text-sm text-[#4a5565] focus:outline-none cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-[#364153] text-sm font-medium mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#A1121A]" />
            연구실 소개 페이지 URL 목록 <span className="text-[#A1121A]">*</span>
          </label>
          <textarea
            value={introUrls}
            onChange={(e) => setIntroUrls(e.target.value)}
            placeholder="연구실 소개, 교수진, 연구 분야 등 정보가 담긴 URL을 한 줄에 하나씩 입력하세요."
            rows={6}
            className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-[#364153] text-sm font-medium mb-2 flex items-center gap-2">
            <Link className="w-4 h-4 text-[#A1121A]" />
            논문/출판물 정보 페이지 URL <span className="text-[#A1121A]">*</span>
          </label>
          <input
            type="text"
            value={publicationUrl}
            onChange={(e) => setPublicationUrl(e.target.value)}
            placeholder="Google Scholar, DBLP 등 논문 목록 페이지 URL을 입력하세요."
            className="w-full px-4 py-2.5 bg-white border border-[#D1D5DC] rounded-lg text-sm text-[#364153] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <PrimaryButton onClick={handleLoadLabInfo} disabled={isLoading}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : '1. 연구실 정보 수집'}
        </PrimaryButton>

        <PrimaryButton onClick={handleCreateEmbedding} disabled={isLoading}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : '2. 챗봇 임베딩 생성'}
        </PrimaryButton>
      </div>

      {statusMessage && (
        <div className="mt-6 text-center text-sm text-[#4a5565]">
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  );
}
