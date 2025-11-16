// Frontend/WEBAPP/src/App.tsx

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { LabDetailPage } from './pages/LabDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AdminPage } from './pages/AdminPage';
import { StudentProfilePage } from './pages/StudentProfilePage';
import { API_BASE } from './config';
import { JobPostingsPage } from './pages/JobPostingsPage';

// 인증 상태를 객체로 관리
interface AuthState {
  isLoggedIn: boolean;
  userType: 'student' | 'lab_admin' | null;
  userId: string;
}

interface OpenPosition {
  title: string;
  deadline: string;
  requirements: string;
}

export type Lab = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  professor: string;
  openPositions: OpenPosition[];
};

/**
 * useState의 '지연 초기화'에 사용될 함수입니다.
 * 이 함수는 앱이 처음 로드될 때 *단 한 번만* 실행됩니다.
 * @returns {AuthState} 초기 인증 상태 (로그아웃 상태로 시작, useEffect에서 검증)
 */
const getInitialAuthState = (): AuthState => {
  // 기본값 (로그아웃 상태)
  // useEffect에서 session-check API로 검증할 것이므로 여기선 항상 로그아웃으로 시작
  return {
    isLoggedIn: false,
    userType: null,
    userId: '',
  };
};

export default function App() {
  // useState에 값 대신 '함수'를 전달하여 지연 초기화를 실행합니다.
  const [auth, setAuth] = useState(getInitialAuthState);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // 세션 확인 중 상태

  // Lab data from backend
  const [labsData, setLabsData] = useState<Lab[]>([]);
  const [labsLoading, setLabsLoading] = useState(true);

  // 로그: 초기 상태
  console.log('[AUTH] 앱 마운트 - 초기 상태:', getInitialAuthState());

  // 앱 로드 시 백엔드 세션 상태 확인 (ground truth)
  useEffect(() => {
    console.log('[AUTH] useEffect 시작 - 세션 확인 시작');

    const checkAuthentication = async () => {
      console.log('[AUTH] checkAuthentication 함수 시작');
      console.log('[AUTH] API 엔드포인트:', `${API_BASE}api/auth/session-check/`);

      try {
        console.log('[AUTH] 백엔드에 세션 확인 요청 중...');
        const response = await fetch(`${API_BASE}api/auth/session-check/`, {
          method: 'GET',
          credentials: 'include', // 쿠키 포함
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log('[AUTH] 세션 확인 응답 상태:', response.status);
        console.log('[AUTH] 응답 OK?:', response.ok);

        if (response.ok) {
          const data = await response.json();
          console.log('[AUTH] 백엔드 응답 데이터:', data);

          if (data.is_authenticated) {
            // 백엔드에 로그인된 세션이 있음
            const newAuthState = {
              isLoggedIn: true,
              userType: data.role || 'student', // 백엔드에서 role 정보 수신
              userId: data.username || '',
            };
            console.log('[AUTH] 인증됨! 상태 업데이트:', newAuthState);
            setAuth(newAuthState);
          } else {
            console.log('[AUTH] 인증 안 됨 - 로그아웃 상태 유지');
          }
        } else {
          console.warn('[AUTH] 세션 확인 응답이 OK가 아님. 상태:', response.status);
        }
      } catch (error) {
        console.error('[AUTH] 세션 확인 중 에러:', error);
        console.error('[AUTH] 에러 메시지:', error instanceof Error ? error.message : String(error));
        // 에러 시에도 앱은 계속 진행 (로그아웃 상태 유지)
      } finally {
        console.log('[AUTH] checkAuthentication 함수 완료');
        setIsCheckingAuth(false);
      }
    };

    checkAuthentication();
  }, []);

  // Fetch labs from backend on mount
  useEffect(() => {
    console.log('[LABS] useEffect 시작 - 연구실 데이터 가져오기');
    const fetchLabs = async () => {
      setLabsLoading(true);
      try {
        const response = await fetch(`${API_BASE}api/lab/public/`);
        if (response.ok) {
          const data = await response.json();
          console.log('[LABS] Received data:', data);
          // Transform backend data to match component expectations
          const transformedData = data.map((lab: any) => ({
            id: lab.id,
            name: lab.lab_name,
            description: lab.lab_description || '',
            tags: lab.tags_list || [],
            professor: lab.professor_name,
            openPositions: (lab.jobposting_set || []).map((jp: any) => ({
              title: jp.title,
              deadline: jp.deadline || '',
              requirements: jp.description || ''
            })),
          }));
          setLabsData(transformedData);
        } else {
          setLabsData([]);
        }
      } catch (err) {
        console.error('[LABS] Error fetching labs:', err);
        setLabsData([]);
      } finally {
        setLabsLoading(false);
      }
    };
    fetchLabs();
  }, []);

  // 로그: 현재 auth 상태
  useEffect(() => {
    console.log('[AUTH] 현재 auth 상태:', {
      isLoggedIn: auth.isLoggedIn,
      userType: auth.userType,
      userId: auth.userId,
      isCheckingAuth,
    });
  }, [auth, isCheckingAuth]);

  // 로그인 핸들러: auth 상태를 업데이트하고 localStorage에 씁니다.
  const handleLogin = (type: 'student' | 'lab_admin', id: string) => {
    console.log('[AUTH] handleLogin 호출:', { type, id });

    const newState: AuthState = {
      isLoggedIn: true,
      userType: type,
      userId: id,
    };

    console.log('[AUTH] 새로운 auth 상태 설정:', newState);
    setAuth(newState);

    try {
      localStorage.setItem('userType', type);
      localStorage.setItem('userId', id);
      console.log('[AUTH] localStorage에 저장 완료:', { userType: type, userId: id });
    } catch (error) {
      console.error("[AUTH] localStorage 쓰기 실패:", error);
    }
  };

  // 로그아웃 핸들러: auth 상태를 초기화하고 localStorage에서 지웁니다.
  const handleLogout = async () => {
    console.log('[AUTH] handleLogout 호출 시작');

    try {
      // Django 백엔드 로그아웃 API 호출 (Session 무효화)
      console.log('[AUTH] 백엔드 로그아웃 API 호출 중...');
      const response = await fetch(`${API_BASE}api/auth/logout/`, {
        method: 'POST',
        credentials: 'include', // 쿠키(sessionid) 포함
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('[AUTH] 로그아웃 응답 상태:', response.status);

      if (response.ok) {
        console.log('[AUTH] 로그아웃 API 호출 성공');
      } else {
        console.warn('[AUTH] 로그아웃 API 호출 실패:', response.status);
      }
    } catch (error) {
      console.error('[AUTH] 로그아웃 API 호출 실패:', error);
      console.log('[AUTH] 프론트엔드 로그아웃은 계속 진행합니다.');
    }

    // State 초기화
    console.log('[AUTH] 프론트엔드 상태 초기화 중...');
    setAuth({
      isLoggedIn: false,
      userType: null,
      userId: ''
    });

    // localStorage 정리
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
    console.log('[AUTH] localStorage 정리 완료');

    // sessionStorage도 정리 (혹시 다른 데이터가 있을 경우 대비)
    sessionStorage.clear();
    console.log('[AUTH] sessionStorage 정리 완료');
    console.log('[AUTH] handleLogout 완료');
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#FBFBF9]">
        {/* 세션 확인 중 로딩 화면 */}
        {isCheckingAuth ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#A1121A]"></div>
              <p className="mt-4 text-[#4a5565]">인증 상태 확인 중...</p>
            </div>
          </div>
        ) : (
          <>
            {/* NavBar: 관리자 페이지가 아닐 때만 표시 */}
            {auth.userType !== 'lab_admin' && (
              <NavBar onLogout={handleLogout} isLoggedIn={auth.isLoggedIn} userType={auth.userType} />
            )}

            <Routes>
              <Route
                path="/login"
                element={
                  auth.isLoggedIn ? (
                    <Navigate to={auth.userType === 'lab_admin' ? '/admin' : '/'} replace />
                  ) : (
                    <LoginPage onLogin={handleLogin} />
                  )
                }
              />

              <Route
                path="/signup"
                element={
                  auth.isLoggedIn ? (
                    <Navigate to={auth.userType === 'lab_admin' ? '/admin' : '/'} replace />
                  ) : (
                    <SignupPage />
                  )
                }
              />

              {/* 메인 페이지: 로그인 없이도 접근 가능 */}
              <Route
                path="/"
                element={<HomePage labs={labsData} labsLoading={labsLoading} />}
              />

              <Route
                path="/lab/:id"
                element={
                  !auth.isLoggedIn ? (
                    <Navigate to="/login" replace />
                  ) : auth.userType === 'student' ? (
                    <LabDetailPage labs={labsData} />
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
                  ) : auth.userType === 'lab_admin' ? (
                    <AdminPage onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />

              <Route
                path="/student/profile"
                element={
                  !auth.isLoggedIn ? (
                    <Navigate to="/login" replace />
                  ) : auth.userType === 'student' ? (
                    <StudentProfilePage onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />

              <Route
                path="/admin/job-postings"
                element={
                  !auth.isLoggedIn ? (
                    <Navigate to="/login" replace />
                  ) : auth.userType === 'lab_admin' ? (
                    <JobPostingsPage />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}