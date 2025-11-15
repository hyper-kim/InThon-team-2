import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, Lock, Mail, CheckCircle2, XCircle, AlertCircle, BookOpen } from 'lucide-react';

type UserType = 'student' | 'admin';

export function SignupPage() {
  const [userType, setUserType] = useState<UserType>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [student_id, setStudent_id] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    hasLetter: false,
    hasNumber: false,
    hasSpecial: false
  });
  const navigate = useNavigate();

  // Password 형식 검증
  const validatePassword = (pwd: string) => {
    const validation = {
      length: pwd.length >= 8,
      hasLetter: /[a-zA-Z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecial: /[!@#$%^&*(),.?\":{}|<>]/.test(pwd)
    };
    setPasswordValidation(validation);
    return Object.values(validation).every(v => v);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    validatePassword(pwd);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Common validation - Email
    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // Password validation
    if (!validatePassword(password)) {
      alert('비밀번호 형식을 확인해주세요.');
      return;
    }

    // Student-specific validation
    if (userType === 'student') {
      if (!name.trim()) {
        alert('이름을 입력해주세요.');
        return;
      }

      if (!major.trim()) {
        alert('전공을 입력해주세요.');
        return;
      }

      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // Success for student
      alert(`회원가입 완료!\n환영합니다, ${name}님!`);
    } else {
      // Success for admin
      alert('관리자 회원가입 완료!\n환영합니다!');
    }

    navigate('/login');
  };

  const isPasswordValid = Object.values(passwordValidation).every(v => v);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAE8E8] via-[#FFF5F5] to-[#E8F0FA] flex items-center justify-center p-4">
      {/* Signup Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/50">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#A1121A] to-[#8A0F16] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl mb-2 font-[Paperlogy]">KuNnect 회원가입</h1>
        <p className="text-center text-[#4a5565] mb-8 text-sm">
          고려대학교 연구실 탐색 플랫폼에 가입하세요
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

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Student Mode Fields */}
          {userType === 'student' && (
            <>
              {/* Name Input */}
              <div>
                <label className="block text-sm text-[#4a5565] mb-2 ml-1">이름</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF]"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm text-[#4a5565] mb-2 ml-1">이메일</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@korea.ac.kr"
                    className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF]"
                  />
                </div>
              </div>

              {/* Major Input */}
              <div>
                <label className="block text-sm text-[#4a5565] mb-2 ml-1">전공</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                  <input
                    type="text"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder="컴퓨터학과"
                    className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF]"
                  />
                </div>
              </div>
          
            {/* Student_id Input */}
              <div>
                <label className="block text-sm text-[#4a5565] mb-2 ml-1">학번</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                  <input
                    type="intager"
                    value={student_id}
                    onChange={(e) => setStudent_id(e.target.value)}
                    placeholder="2025XXXXXX"
                    className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF]"
                  />
                </div>
              </div>
            </>



          )}

          {/* Admin Mode Fields */}
          {userType === 'admin' && (
            <>
              {/* Email Input */}
              <div>
                <label className="block text-sm text-[#4a5565] mb-2 ml-1">이메일</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@korea.ac.kr"
                    className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF]"
                  />
                </div>
              </div>
            </>
          )}

          {/* Password Input with Validation (Both modes) */}
          <div>
            <label className="block text-sm text-[#4a5565] mb-2 ml-1">비밀번호</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="8자 이상 (영문, 숫자, 특수문자)"
                className={`w-full h-12 pl-12 pr-10 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF] ${
                  password && isPasswordValid
                    ? 'border-green-500'
                    : password
                    ? 'border-red-500'
                    : 'border-gray-200'
                }`}
              />
              {password && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isPasswordValid ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            
            {/* Password Requirements */}
            {password && (
              <div className="mt-2 space-y-1 bg-gray-50 p-3 rounded-lg">
                <p className="text-xs mb-1 text-[#4a5565]">비밀번호 요구사항:</p>
                <div className="flex items-center gap-2">
                  {passwordValidation.length ? (
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  ) : (
                    <XCircle className="w-3 h-3 text-gray-400" />
                  )}
                  <span className={`text-xs ${passwordValidation.length ? 'text-green-600' : 'text-gray-500'}`}>
                    8자 이상
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.hasLetter ? (
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  ) : (
                    <XCircle className="w-3 h-3 text-gray-400" />
                  )}
                  <span className={`text-xs ${passwordValidation.hasLetter ? 'text-green-600' : 'text-gray-500'}`}>
                    영문 포함
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.hasNumber ? (
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  ) : (
                    <XCircle className="w-3 h-3 text-gray-400" />
                  )}
                  <span className={`text-xs ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                    숫자 포함
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.hasSpecial ? (
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  ) : (
                    <XCircle className="w-3 h-3 text-gray-400" />
                  )}
                  <span className={`text-xs ${passwordValidation.hasSpecial ? 'text-green-600' : 'text-gray-500'}`}>
                    특수문자 포함
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Input (Student mode only) */}
          {userType === 'student' && (
            <div>
              <label className="block text-sm text-[#4a5565] mb-2 ml-1">비밀번호 확인</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호 재입력"
                  className={`w-full h-12 pl-12 pr-10 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A1121A] focus:border-transparent text-[#364153] placeholder:text-[#99A1AF] ${
                    password && confirmPassword && password === confirmPassword
                      ? 'border-green-500'
                      : password && confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-200'
                  }`}
                />
                {password && confirmPassword && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {password === confirmPassword ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-[#A1121A] to-[#8A0F16] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6 font-medium"
          >
            <GraduationCap className="w-5 h-5" />
            회원가입 완료
          </button>
        </form>

        {/* Link to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#4a5565]">
            이미 계정이 있으신가요?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#A1121A] hover:underline font-medium"
            >
              로그인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
