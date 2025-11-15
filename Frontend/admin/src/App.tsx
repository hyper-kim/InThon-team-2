import { useState } from 'react';
import { Save, Building2, Clock, Briefcase, Plus, Trash2 } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Separator } from './components/ui/separator';

export default function AdminDashboard() {
  // Mock lab name - in Django this would come from the template context
  const labName = "AI & Machine Learning Lab";

  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-b from-[#a1121a] to-[#8a0f16] rounded-[10px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-['Paperlogy:7_Bold',sans-serif] text-[#a1121a] font-[Paperlogy]">KuNnect</h1>
              <p className="text-sm text-[#4a5565]">연구실 관리 시스템</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="font-['Paperlogy:7_Bold',sans-serif] text-[36px] text-[#101828] mb-2">
            연구실 관리 페이지
          </h2>
          <p className="text-[#4a5565]">
            이 페이지에서 연구실 기본 정보, 면담 가능 시간, 모집 공고를 수정할 수 있습니다.
          </p>
        </div>

        {/* Form sections - In Django, this would be inside a <form> tag */}
        <form className="space-y-6">
          {/* Section 1: Basic Information */}
          <Card className="border-gray-200 rounded-[10px] overflow-hidden">
            <CardHeader className="bg-white pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f2f5de] rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#a1121a]" />
                </div>
                <div>
                  <CardTitle className="text-[#101828]">기본 정보 수정</CardTitle>
                  <CardDescription className="text-[#4a5565]">
                    연구실의 기본 정보를 업데이트하세요
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              {/* In Django template: {{ form.as_p }} */}
              {/* For demo purposes, showing sample form fields */}
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="lab-name" className="text-[#364153]">연구실 이름</Label>
                  <Input 
                    id="lab-name" 
                    placeholder="연구실 이름을 입력하세요"
                    className="border-[#d1d5dc] rounded-[10px] h-[50px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="professor" className="text-[#364153]">교수명</Label>
                  <Input 
                    id="professor" 
                    placeholder="교수명을 입력하세요"
                    className="border-[#d1d5dc] rounded-[10px] h-[50px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-[#364153]">연구실 설명</Label>
                  <Textarea 
                    id="description" 
                    placeholder="연구실에 대한 설명을 입력하세요"
                    className="border-[#d1d5dc] rounded-[10px] min-h-[120px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#364153]">이메일</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="example@korea.ac.kr"
                    className="border-[#d1d5dc] rounded-[10px] h-[50px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Availability Management */}
          <Card className="border-gray-200 rounded-[10px] overflow-hidden">
            <CardHeader className="bg-white pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ece0d9] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#a1121a]" />
                </div>
                <div>
                  <CardTitle className="text-[#101828]">면담 가능 시간 관리</CardTitle>
                  <CardDescription className="text-[#4a5565]">
                    학생들이 면담 신청할 수 있는 시간대를 설정하세요
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              {/* In Django template: {{ formset_avail.management_form }} and loop */}
              <div className="space-y-4">
                {/* Sample availability item */}
                <div className="p-4 border border-[#d1d5dc] rounded-[10px] bg-[#fbfbf9]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">요일</Label>
                      <Input 
                        placeholder="월요일"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">시작 시간</Label>
                      <Input 
                        type="time"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">종료 시간</Label>
                      <Input 
                        type="time"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      className="text-[#a1121a] hover:bg-[#f6dce4]"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      삭제
                    </Button>
                  </div>
                </div>

                {/* Another sample availability item */}
                <div className="p-4 border border-[#d1d5dc] rounded-[10px] bg-[#fbfbf9]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">요일</Label>
                      <Input 
                        placeholder="수요일"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">시작 시간</Label>
                      <Input 
                        type="time"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">종료 시간</Label>
                      <Input 
                        type="time"
                        className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      className="text-[#a1121a] hover:bg-[#f6dce4]"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      삭제
                    </Button>
                  </div>
                </div>

                {/* Add new availability button */}
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full border-dashed border-2 border-[#d1d5dc] rounded-[10px] h-[50px] hover:bg-[#f2f5de] hover:border-[#a1121a]"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  새 시간대 추가
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Job Postings Management */}
          <Card className="border-gray-200 rounded-[10px] overflow-hidden">
            <CardHeader className="bg-white pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e9ddf3] rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#a1121a]" />
                </div>
                <div>
                  <CardTitle className="text-[#101828]">모집 공고 관리</CardTitle>
                  <CardDescription className="text-[#4a5565]">
                    학생 모집 공고를 작성하고 관리하세요
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              {/* In Django template: {{ formset_jobs.management_form }} and loop */}
              <div className="space-y-6">
                {/* Sample job posting item */}
                <div className="p-6 border border-[#d1d5dc] rounded-[10px] bg-[#fbfbf9]">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">공고 제목</Label>
                      <Input 
                        placeholder="예: 2024 봄학기 학부연구생 모집"
                        className="border-[#d1d5dc] rounded-[10px] h-[50px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">모집 분야</Label>
                      <Input 
                        placeholder="예: 머신러닝, 딥러닝"
                        className="border-[#d1d5dc] rounded-[10px] h-[50px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">공고 내용</Label>
                      <Textarea 
                        placeholder="공고 내용을 자세히 작성하세요"
                        className="border-[#d1d5dc] rounded-[10px] min-h-[120px] bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label className="text-[#364153]">모집 인원</Label>
                        <Input 
                          type="number"
                          placeholder="0"
                          className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label className="text-[#364153]">마감일</Label>
                        <Input 
                          type="date"
                          className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                        />
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        variant="ghost"
                        className="text-[#a1121a] hover:bg-[#f6dce4]"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        공고 삭제
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Another sample job posting item */}
                <div className="p-6 border border-[#d1d5dc] rounded-[10px] bg-[#fbfbf9]">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">공고 제목</Label>
                      <Input 
                        placeholder="예: 대학원생 모집"
                        className="border-[#d1d5dc] rounded-[10px] h-[50px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">모집 분야</Label>
                      <Input 
                        placeholder="예: 컴퓨터비전, 자연어처리"
                        className="border-[#d1d5dc] rounded-[10px] h-[50px] bg-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-[#364153]">공고 내용</Label>
                      <Textarea 
                        placeholder="공고 내용을 자세히 작성하세요"
                        className="border-[#d1d5dc] rounded-[10px] min-h-[120px] bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label className="text-[#364153]">모집 인원</Label>
                        <Input 
                          type="number"
                          placeholder="0"
                          className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label className="text-[#364153]">마감일</Label>
                        <Input 
                          type="date"
                          className="border-[#d1d5dc] rounded-[10px] h-[40px] bg-white"
                        />
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        variant="ghost"
                        className="text-[#a1121a] hover:bg-[#f6dce4]"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        공고 삭제
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Add new job posting button */}
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full border-dashed border-2 border-[#d1d5dc] rounded-[10px] h-[50px] hover:bg-[#e9ddf3] hover:border-[#a1121a]"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  새 모집 공고 추가
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button - Fixed at bottom */}
          <div className="sticky bottom-6 pt-4">
            <Button 
              type="submit"
              className="w-full bg-[#a1121a] hover:bg-[#8a0f16] text-white rounded-[10px] h-[56px] shadow-lg"
            >
              <Save className="w-5 h-5 mr-2" />
              모든 변경사항 저장하기
            </Button>
          </div>
        </form>
      </main>

      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  );
}