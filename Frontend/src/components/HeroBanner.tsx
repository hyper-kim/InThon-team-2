import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll
  const opacity = Math.max(0, 1 - scrollY / 400);
  const scale = Math.max(0.95, 1 - scrollY / 2000);

  return (
    <div className="relative bg-[#FBFBF9] pt-20 pb-32 overflow-hidden">
      {/* Decorative profile images with triangular accents */}
      <div
        className="absolute left-[10%] top-20 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden transition-transform duration-100"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <ImageWithFallback
          src="https://i.im.ge/2025/11/15/nGJgmL.Screenshot-2025-11-15-at-9-02-05PM.png"
          alt="Student"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#A1121A]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          }}
        ></div>
      </div>

      <div
        className="absolute right-[12%] top-32 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden transition-transform duration-100"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
          alt="Student"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute -top-2 -right-2 w-6 h-6 bg-[#A1121A]"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        ></div>
      </div>

      <div
        className="absolute left-[8%] bottom-32 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden transition-transform duration-100"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
          alt="Student"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#A1121A]"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div
        className="absolute right-[10%] bottom-40 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden transition-transform duration-100"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <ImageWithFallback
          src="https://i.im.ge/2025/11/15/nGJcOc.Screenshot-2025-11-15-at-8-55-35PM.png"
          alt="Student"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute -top-2 -left-2 w-8 h-8 bg-[#A1121A]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        ></div>
      </div>

      {/* Main content */}
      <div
        className="max-w-5xl mx-auto px-6 text-center relative z-10 transition-all duration-100"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-gray-200">
          <Sparkles className="w-4 h-4 text-[#A1121A]" />
          <span className="text-sm text-[#364153]">
            내 프로필 카드 작성하기
          </span>
        </div>

        {/* Main heading - 한글 */}
        <h1 className="text-6xl lg:text-7xl mb-6 leading-tight font-[Paperlogy]">
          <span className="text-[#101828]">
            나에게 맞는 연구실을
          </span>
          <br />
          <span className="text-[#101828]">발견하세요</span>
        </h1>

        {/* Description - 한글 */}
        <p className="text-lg md:text-xl text-[#4a5565] max-w-3xl mx-auto mb-10 leading-relaxed">
          KuNnect는 고려대학교 학생들이 최첨단 연구실을 쉽고
          친숙하게 탐색할 수 있도록 돕는
          <br />
          AI 기반 안내 플랫폼입니다. 당신에게 가장 잘 맞는
          연구실을 찾을 수 있도록 스마트한 인사이트를
          제공합니다.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FAFB] to-transparent transition-all duration-300 ease-out"
        style={{
          backdropFilter: `blur(${scrollY * 0.05}px)`,
        }}
      ></div>
    </div>
  );
}