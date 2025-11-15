import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Search, LogOut } from 'lucide-react';

interface NavBarProps {
  onLogout: () => void;
}

export function NavBar({ onLogout }: NavBarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#A1121A] to-[#8A0F16] rounded-lg flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[#A1121A] font-[Paperlogy]">KuNnect</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => navigate('/')}
              className="text-[#364153] hover:text-[#A1121A] transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              랩실 탐색하기
            </button>
            <a href="#" className="text-[#364153] hover:text-[#A1121A] transition-colors">
              내 프로필
            </a>
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="text-[#364153] hover:text-[#A1121A] transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
            
            {/* Profile Avatar */}
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover:from-gray-300 hover:to-gray-400 transition-all shadow-sm">
              <User className="w-5 h-5 text-[#4A5565]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}