// Frontend/WEBAPP/src/App.tsx

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { LabDetailPage } from './pages/LabDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AdminPage } from './pages/AdminPage';
import { ChatPanel } from './components/ChatPanel';

// Mock lab data
export const labsData = [
  {
    id: 1,
    name: 'AI & Machine Learning Lab',
    description: '인공지능과 머신러닝 기술을 활용한 지능형 시스템 연구를 수행합니다.',
    fullDescription: '우리 연구실은 최신 인공지능 및 머신러닝 기술을 활용하여 지능형 시스템을 개발하고 연구합니다. 딥러닝, 강화학습, 자연어 처리 등 다양한 AI 분야에서 세계적 수준의 연구를 진행하고 있습니다.',
    tags: ['인공지능', '데이터사이언스'],
    professor: 'Prof. Kim',
    professorEmail: 'kim@korea.ac.kr',
    openPositions: [
      { title: 'PhD Student', deadline: '2025년 3월 31일', requirements: '컴퓨터공학 석사 학위 소지자, Python 능숙' },
      { title: 'Master Student', deadline: '2025년 2월 28일', requirements: '컴퓨터공학 학사 학위, 머신러닝 기초 지식' }
    ],
    papers: [
      { title: 'Deep Learning for Computer Vision: A Comprehensive Survey', year: 2024, journal: 'IEEE Transactions on AI' },
      { title: 'Reinforcement Learning in Robotics', year: 2024, journal: 'Nature Machine Intelligence' },
      { title: 'Attention Mechanisms in Neural Networks', year: 2023, journal: 'ICML 2023' }
    ],
    consultationSchedule: [
      { day: '월요일', time: '14:00 - 16:00', location: '공학관 301호' },
      { day: '수요일', time: '10:00 - 12:00', location: '공학관 301호' }
    ]
  },
  {
    id: 2,
    name: 'Brain-Computer Interface Lab',
    description: '뇌-컴퓨터 인터페이스 기술과 신경공학 연구를 진행합니다.',
    fullDescription: '뇌-컴퓨터 인터페이스(BCI) 기술을 활용하여 인간의 뇌 신호를 분석하고, 이를 통해 새로운 의료 기기와 보조 기술을 개발합니다.',
    tags: ['뇌공학', 'HCI'],
    professor: 'Prof. Lee',
    professorEmail: 'lee@korea.ac.kr',
    openPositions: [
      { title: 'PhD Student', deadline: '2025년 4월 15일', requirements: '신경과학 또는 컴퓨터공학 배경' }
    ],
    papers: [
      { title: 'Neural Signal Processing for BCI Applications', year: 2024, journal: 'Journal of Neural Engineering' },
      { title: 'Real-time Brain Activity Monitoring', year: 2023, journal: 'NeuroImage' }
    ],
    consultationSchedule: [
      { day: '화요일', time: '13:00 - 15:00', location: '생명과학관 205호' },
      { day: '목요일', time: '15:00 - 17:00', location: '생명과학관 205호' }
    ]
  },
  {
    id: 3,
    name: 'Computer Vision Research Lab',
    description: '영상 처리 및 컴퓨터 비전 기술 개발과 응용 연구를 수행합니다.',
    fullDescription: '컴퓨터 비전 기술을 이용한 이미지 인식, 객체 탐지, 영상 분석 등의 연구를 수행하며, 자율주행, 의료 영상 분석 등에 응용합니다.',
    tags: ['컴퓨터비전', '인공지능'],
    professor: 'Prof. Park',
    professorEmail: 'park@korea.ac.kr',
    openPositions: [
      { title: 'Master Student', deadline: '2025년 3월 20일', requirements: '영상처리 기초 지식, C++ 또는 Python' }
    ],
    papers: [
      { title: 'Advanced Object Detection in Complex Scenes', year: 2024, journal: 'CVPR 2024' },
      { title: '3D Reconstruction from Multiple Views', year: 2023, journal: 'ICCV 2023' }
    ],
    consultationSchedule: [
      { day: '월요일', time: '10:00 - 12:00', location: '공학관 402호' }
    ]
  },
  {
    id: 4,
    name: 'Data Science & Analytics Lab',
    description: '빅데이터 분석 및 데이터 기반 의사결정 시스템을 연구합니다.',
    fullDescription: '대규모 데이터를 분석하고 인사이트를 도출하는 데이터 과학 기술을 연구하며, 비즈니스 인텔리전스와 예측 모델링에 적용합니다.',
    tags: ['데이터사이언스', '인공지능'],
    professor: 'Prof. Choi',
    professorEmail: 'choi@korea.ac.kr',
    openPositions: [
      { title: 'PhD Student', deadline: '2025년 4월 30일', requirements: '통계학 또는 컴퓨터공학 석사' }
    ],
    papers: [
      { title: 'Big Data Analytics for Business Intelligence', year: 2024, journal: 'ACM SIGKDD' },
      { title: 'Predictive Modeling using Machine Learning', year: 2023, journal: 'Data Mining and Knowledge Discovery' }
    ],
    consultationSchedule: [
      { day: '수요일', time: '14:00 - 16:00', location: '경영관 501호' }
    ]
  },
  {
    id: 5,
    name: 'Human-Computer Interaction Lab',
    description: '사용자 경험과 인터랙션 디자인을 연구하는 연구실입니다.',
    fullDescription: 'HCI 연구를 통해 사용자 중심의 인터페이스와 인터랙션을 설계하고, 새로운 사용자 경험을 창출합니다.',
    tags: ['HCI', '인공지능'],
    professor: 'Prof. Jung',
    professorEmail: 'jung@korea.ac.kr',
    openPositions: [
      { title: 'Master Student', deadline: '2025년 3월 15일', requirements: '디자인 또는 컴퓨터공학 배경' }
    ],
    papers: [
      { title: 'User Experience in Virtual Reality', year: 2024, journal: 'CHI 2024' },
      { title: 'Interaction Design for Mobile Devices', year: 2023, journal: 'UIST 2023' }
    ],
    consultationSchedule: [
      { day: '화요일', time: '10:00 - 12:00', location: '디자인관 301호' }
    ]
  },
  {
    id: 6,
    name: 'Neural Engineering Lab',
    description: '신경 시스템 모델링 및 뇌 신호 처리 기술을 연구합니다.',
    fullDescription: '신경공학 기술을 활용하여 뇌의 작동 원리를 이해하고, 이를 바탕으로 신경 질환 치료 기술을 개발합니다.',
    tags: ['뇌공학', '데이터사이언스'],
    professor: 'Prof. Han',
    professorEmail: 'han@korea.ac.kr',
    openPositions: [],
    papers: [
      { title: 'Neural Network Modeling of Brain Function', year: 2024, journal: 'Nature Neuroscience' },
      { title: 'Signal Processing for Neural Prosthetics', year: 2023, journal: 'IEEE Transactions on Biomedical Engineering' }
    ],
    consultationSchedule: [
      { day: '목요일', time: '14:00 - 16:00', location: '생명과학관 401호' }
    ]
  }
];

// 인증 상태를 객체로 관리
interface AuthState {
  isLoggedIn: boolean;
  userType: 'student' | 'admin' | null;
  userId: string;
}

/**
 * useState의 '지연 초기화'에 사용될 함수입니다.
 * 이 함수는 앱이 처음 로드될 때 *단 한 번만* 실행됩니다.
 * localStorage 접근 시 발생할 수 있는 오류를 try...catch로 처리합니다.
 * @returns {AuthState} localStorage에서 읽어온 초기 인증 상태
 */
const getInitialAuthState = (): AuthState => {
  // ⚠️ localStorage 자동 로그인 기능을 비활성화하려면 아래를 주석 처리하세요
  // 개발 중에는 매번 로그인 페이지에서 시작하는 것이 편리합니다.

  /* 자동 로그인 활성화하려면 이 주석을 해제하세요
  try {
    const savedUserType = localStorage.getItem('userType');
    const savedUserId = localStorage.getItem('userId');

    if (savedUserType && savedUserId) {
      return {
        isLoggedIn: true,
        userType: savedUserType as 'student' | 'admin',
        userId: savedUserId,
      };
    }
  } catch (error) {
    console.error("localStorage 접근 실패:", error);
    // localStorage 접근에 실패하면(예: 브라우저 설정)
    // 앱이 멈추지 않고 로그아웃 상태로 강제 진행합니다.
  }
  */

  // 기본값 (로그아웃 상태)
  return {
    isLoggedIn: false,
    userType: null,
    userId: '',
  };
};

export default function App() {
  // useState에 값 대신 '함수'를 전달하여 지연 초기화를 실행합니다.
  const [auth, setAuth] = useState(getInitialAuthState);

  // 로그인 핸들러: auth 상태를 업데이트하고 localStorage에 씁니다.
  const handleLogin = (type: 'student' | 'admin', id: string) => {
    const newState: AuthState = {
      isLoggedIn: true,
      userType: type,
      userId: id,
    };
    setAuth(newState);
    try {
      localStorage.setItem('userType', type);
      localStorage.setItem('userId', id);
    } catch (error) {
      console.error("localStorage 쓰기 실패:", error);
    }
  };

  // 로그아웃 핸들러: auth 상태를 초기화하고 localStorage에서 지웁니다.
  const handleLogout = async () => {
    // 백엔드가 준비되면 아래 주석을 해제하세요
    /*
    try {
      // Django 백엔드 로그아웃 API 호출 (Session 무효화)
      await fetch('http://127.0.0.1:8000/api/auth/logout/', {
        method: 'POST',
        credentials: 'include', // 쿠키(sessionid) 포함
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('로그아웃 API 호출 성공');
    } catch (error) {
      console.error('로그아웃 API 호출 실패:', error);
      console.log('프론트엔드 로그아웃은 계속 진행합니다.');
    }
    */

    // State 초기화
    setAuth({
      isLoggedIn: false,
      userType: null,
      userId: ''
    });

    // localStorage 정리
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');

    // sessionStorage도 정리 (혹시 다른 데이터가 있을 경우 대비)
    sessionStorage.clear();
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#FBFBF9]">
        {/* NavBar: 관리자 페이지가 아닐 때만 표시 */}
        {auth.userType !== 'admin' && (
          <NavBar onLogout={handleLogout} isLoggedIn={auth.isLoggedIn} userType={auth.userType} />
        )}

        <Routes>
          <Route
            path="/login"
            element={
              auth.isLoggedIn ? (
                <Navigate to={auth.userType === 'admin' ? '/admin' : '/'} replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              auth.isLoggedIn ? (
                <Navigate to={auth.userType === 'admin' ? '/admin' : '/'} replace />
              ) : (
                <SignupPage />
              )
            }
          />

          {/* 메인 페이지: 로그인 없이도 접근 가능 */}
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/lab/:id"
            element={
              !auth.isLoggedIn ? (
                <Navigate to="/login" replace />
              ) : auth.userType === 'student' ? (
                <LabDetailPage />
              ) : (
                <Navigate to="/admin" replace />
              )
            }
          />

          <Route
            path="/admin"
            element={
              !auth.isLoggedIn ? (
                <Navigate to="/login" replace />
              ) : auth.userType === 'admin' ? (
                <AdminPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* AI Assistant Panel: 로그인한 학생만 표시 */}
        {auth.isLoggedIn && auth.userType === 'student' && <ChatPanel />}
      </div>
    </Router>
  );
}