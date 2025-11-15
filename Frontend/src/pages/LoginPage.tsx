import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, Lock, LogIn } from 'lucide-react';
import { API_BASE } from '../config';

type UserType = 'student' | 'admin';

interface LoginPageProps {
  onLogin: (userType: UserType, userId: string) => void;
}

// [!!!] 1. csrftoken 쿠키 값을 읽는 헬퍼 함수 추가 (파일 상단)
function getCookie(name: string): string | null {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


export function LoginPage({ onLogin }: LoginPageProps) {
  const [userType, setUserType] = useState<UserType>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    setError('');
    setIsLoading(true);
    const csrfToken = getCookie('csrftoken');
    try {
      const response = await fetch(`${API_BASE}api/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken || '',
        },
        credentials: 'include', // Include cookies for session
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || '로그인에 실패했습니다.');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      
      // Call the login handler to update app state
      onLogin(userType, email);
      
      // Navigate based on user type
      if (userType === 'student') {
        navigate('/');
      } else {
        navigate('/admin');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('서버 연결에 실패했습니다. 다시 시도해주세요.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAE8E8] via-[#FFF5F5] to-[#E8F0FA] flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/50">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#A1121A] to-[#8A0F16] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl mb-2 font-[Paperlogy]">KuNnect에 로그인</h1>
        <p className="text-center text-[#4a5565] mb-8 text-sm">
          고려대학교 연구실 탐색 플랫폼
        </p>

        {/* User Type Selection */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setUserType('student')}
            className={`flex-1 py-3 rounded-lg transition-all font-bold text-center ${
              userType === 'student'
                ? 'bg-white text-[#A1121A] shadow-md'
                : 'text-[#4a5565] hover:text-[#A1121A]'
            }`}
          >
            학생
          </button>
          <button
            type="button"
            onClick={() => setUserType('admin')}
            className={`flex-1 py-3 rounded-lg transition-all font-bold text-center ${
              userType === 'admin'
                ? 'bg-white text-[#A1121A] shadow-md'
                : 'text-[#4a5565] hover:text-[#A1121A]'
            }`}
          >
            관리자
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@korea.ac.kr"
                disabled={isLoading}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={isLoading}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-gradient-to-r from-[#A1121A] to-[#8A0F16] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LogIn className="w-5 h-5" />
            {isLoading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-sm text-[#99A1AF] mt-6">
          {userType === 'student' 
            ? '학생용 연구실 탐색 플랫폼에 오신 것을 환영합니다'
            : '관리자 페이지에 접속합니다'
          }
        </p>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-[#4a5565]">
            아직 계정이 없으신가요?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-[#A1121A] hover:underline font-medium"
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}