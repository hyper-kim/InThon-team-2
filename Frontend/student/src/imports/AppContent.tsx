import svgPaths from "./svg-qnuy2gepap";
import imgPrimitiveImg from "figma:asset/9bbdfb06a5eae3ca01387e38cee556cb0ba93eb3.png";
import imgPrimitiveImg1 from "figma:asset/0d5da6ab018faf09b0940ac3e0ab4d6d514c431f.png";
import imgPrimitiveImg2 from "figma:asset/6037748207f9c7910c91db1bd9b0f380e0225194.png";
import imgPrimitiveImg3 from "figma:asset/53bd80f55573a725b754655d1ae653b287fc85d2.png";
import imgPrimitiveImg4 from "figma:asset/c63835773a05453d6506aec39d7d54c0bc4571da.png";

function Container() {
  return <div className="absolute bg-[rgba(5,150,105,0.03)] blur-3xl filter left-[273.25px] rounded-[1.67772e+07px] size-[320px] top-[274.44px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(5,150,105,0.02)] blur-3xl filter left-[563.75px] rounded-[1.67772e+07px] size-[256px] top-[567.31px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[1097.75px] left-0 overflow-clip top-0 w-[1093px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-emerald-600 relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[124px] not-italic text-[14px] text-center text-emerald-600 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Portal Resmi Pemerintah Kota Medan</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[25px] top-[13px] w-[267.625px]" data-name="HeroSection">
      <Container3 />
      <Text />
    </div>
  );
}

function UnifiedCard() {
  return (
    <div className="absolute bg-white h-[46px] left-[355.69px] rounded-[24px] top-[64px] w-[317.625px]" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[72.5px] items-start left-[142.71px] top-[76px] w-[335.523px]" data-name="Text">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[75px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0)] text-center text-nowrap tracking-[-1.5px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(5, 150, 105) 0%, rgb(0, 153, 102) 50%, rgb(0, 122, 85) 100%)" }}>
        Kota Medan
      </p>
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="HeroSection">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[75px] left-[310.25px] not-italic text-[#1d1d1f] text-[60px] text-center text-nowrap top-0 tracking-[-1.5px] translate-x-[-50%] whitespace-pre">Layanan Digital</p>
      <Text1 />
    </div>
  );
}

function HeroSection2() {
  return (
    <div className="absolute h-[32.5px] left-0 top-[40.5px] w-[620.953px]" data-name="HeroSection">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.5px] left-[310.55px] not-italic text-[#1d1d1f] text-[20px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Efisien • Transparan • Terpercaya</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[310px] not-italic text-[#8e8e93] text-[20px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Platform terpadu untuk mengakses seluruh layanan pemerintahan</p>
      <HeroSection2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[247px] items-start left-[204.02px] top-[142px] w-[620.953px]" data-name="Container">
      <HeroSection1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32c00400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f10900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[175.35px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-emerald-600 h-[40px] left-0 rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[207.352px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[48px] not-italic text-[16px] text-nowrap text-white top-[7px] whitespace-pre">Mulai Layanan</p>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[18px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1674)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[40px] left-[223.35px] rounded-[24px] top-0 w-[171.641px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon2 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[50px] not-italic text-[#1d1d1f] text-[16px] text-nowrap top-[7px] whitespace-pre">Bantuan 24/7</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[40px] left-[317px] top-[421px] w-[394.992px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[512.3px] not-italic text-[#1d1d1f] text-[20px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Layanan Utama</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[512.24px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Akses cepat ke layanan yang paling sering digunakan</p>
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb007f00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b58ab00} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection4() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] box-border content-stretch flex items-center justify-center left-[25px] p-px rounded-[24px] size-[48px] top-[25px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1d1f] text-[16px] top-[-1px] w-[117px]">Dokumen Kependudukan</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">e-KTP, KK, Akta</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[82.75px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[82.75px] items-start relative w-[188px]">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[188px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(5,150,105,0.7)] text-nowrap top-[0.5px] whitespace-pre">Dokumen</p>
      </div>
    </div>
  );
}

function HeroSection5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[98.75px] items-start justify-between left-[25px] top-[89px] w-[188px]" data-name="HeroSection">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] h-[26px] left-[182.77px] rounded-[12px] top-[-7px] w-[62.227px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative rounded-[inherit] w-[62.227px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-emerald-600 text-nowrap whitespace-pre">Populer</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UnifiedCard1() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[24px] shrink-0" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection4 />
      <HeroSection5 />
      <Badge />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1e533000} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 10H22" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection6() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] box-border content-stretch flex items-center justify-center left-[25px] p-px rounded-[24px] size-[48px] top-[25px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">Pembayaran Pajak</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">PBB, Kendaraan</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[62.75px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[62.75px] items-start relative w-[188px]">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[188px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(5,150,105,0.7)] text-nowrap top-[0.5px] whitespace-pre">Pajak</p>
      </div>
    </div>
  );
}

function HeroSection7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[98.75px] items-start justify-between left-[25px] top-[89px] w-[188px]" data-name="HeroSection">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] h-[26px] left-[182.77px] rounded-[12px] top-[-7px] w-[62.227px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative rounded-[inherit] w-[62.227px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-emerald-600 text-nowrap whitespace-pre">Populer</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UnifiedCard4() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[24px] shrink-0" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection6 />
      <HeroSection7 />
      <Badge1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 10H12.01" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 14H12.01" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 6H12.01" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 10H16.01" id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 14H16.01" id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 6H16.01" id="Vector_6" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10H8.01" id="Vector_7" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 14H8.01" id="Vector_8" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 6H8.01" id="Vector_9" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pe1a8d00} id="Vector_10" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pd5bb600} id="Vector_11" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection8() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[48px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">Perizinan Usaha</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">SIUP, TDP, NIB</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[62.75px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[62.75px] items-start relative w-[188px]">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[188px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(5,150,105,0.7)] text-nowrap top-[0.5px] whitespace-pre">Perizinan</p>
      </div>
    </div>
  );
}

function HeroSection9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[188px]" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start justify-between relative w-[188px]">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function UnifiedCard5() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[24px] shrink-0" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <HeroSection8 />
          <HeroSection9 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection10() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[48px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">{`Bantuan & Dukungan`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Call Center 24/7</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[62.75px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[62.75px] items-start relative w-[188px]">
        <Heading5 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[188px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(5,150,105,0.7)] text-nowrap top-[0.5px] whitespace-pre">Layanan</p>
      </div>
    </div>
  );
}

function HeroSection11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[188px]" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start justify-between relative w-[188px]">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function UnifiedCard6() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[24px] shrink-0" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <HeroSection10 />
          <HeroSection11 />
        </div>
      </div>
    </div>
  );
}

function HeroSection12() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[212.75px] relative shrink-0 w-full" data-name="HeroSection">
      <UnifiedCard1 />
      <UnifiedCard4 />
      <UnifiedCard5 />
      <UnifiedCard6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[300.75px] items-start left-[2.5px] top-[509px] w-[1024px]" data-name="Container">
      <HeroSection3 />
      <HeroSection12 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa5c9980} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection13() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[16px] size-[24px] top-[25px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[140.27px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Keamanan Data</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[140.5px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Terjamin</p>
    </div>
  );
}

function HeroSection14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[34px] items-start left-[25px] top-[53px] w-[280.664px]" data-name="HeroSection">
      <Container15 />
      <Container16 />
    </div>
  );
}

function UnifiedCard7() {
  return (
    <div className="absolute bg-white h-[112px] left-0 rounded-[24px] top-0 w-[330.664px]" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection13 />
      <HeroSection14 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1572)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1572">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroSection15() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[16px] size-[24px] top-[25px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[140.42px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Proses Cepat</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[140.27px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">{`< 15 menit`}</p>
    </div>
  );
}

function HeroSection16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[34px] items-start left-[25px] top-[53px] w-[280.664px]" data-name="HeroSection">
      <Container17 />
      <Container18 />
    </div>
  );
}

function UnifiedCard8() {
  return (
    <div className="absolute bg-white h-[112px] left-[346.66px] rounded-[24px] top-0 w-[330.664px]" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection15 />
      <HeroSection16 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p53d0300} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection17() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[16px] size-[24px] top-[25px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[140.36px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Mudah Digunakan</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[141.19px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">User friendly</p>
    </div>
  );
}

function HeroSection18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[34px] items-start left-[25px] top-[53px] w-[280.664px]" data-name="HeroSection">
      <Container19 />
      <Container20 />
    </div>
  );
}

function UnifiedCard9() {
  return (
    <div className="absolute bg-white h-[112px] left-[693.33px] rounded-[24px] top-0 w-[330.664px]" data-name="UnifiedCard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <HeroSection17 />
      <HeroSection18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[112px] left-[2.5px] top-[857.75px] w-[1024px]" data-name="Container">
      <UnifiedCard7 />
      <UnifiedCard8 />
      <UnifiedCard9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[1033.75px] left-[32px] top-0 w-[1029px]" data-name="Container">
      <UnifiedCard />
      <Container4 />
      <Container5 />
      <Container14 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(142,142,147,0.5)] h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[4px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start justify-center pb-px pt-[7.103px] px-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(142,142,147,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[32px] items-start left-[536.5px] pb-0 pt-[0.078px] px-0 top-[969.75px] w-[20px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[1033.75px] left-0 top-[64px] w-[1093px]" data-name="Container">
      <Container22 />
      <Container25 />
    </div>
  );
}

function HeroSection19() {
  return (
    <div className="absolute h-[1097.75px] left-0 overflow-clip top-0 w-[1093px]" data-name="HeroSection">
      <Container2 />
      <Container26 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Kontak Kami</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[3.92px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1659)" id="Icon">
          <path d={svgPaths.p20ccbd00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p21ac8380} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1659">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Balai Kota Medan</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Jl. Balai Kota No.1, Kesawan</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Medan Barat, Kota Medan</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Sumatera Utara 20111</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[78.4px] items-start left-[23.52px] top-0 w-[180.259px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[78.4px] relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Container27 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1656)" id="Icon">
          <path d={svgPaths.p16396400} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1656">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[93.307px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[93.307px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">(061) 4515000</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[19.6px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Text2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1645)" id="Icon">
          <path d={svgPaths.p392ce480} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p19f24f00} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1645">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[166.439px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[166.439px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">info@pemkotmedan.go.id</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[19.6px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text3 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1636)" id="Icon">
          <path d={svgPaths.p27f3d500} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p3d4589f0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.30667 7.84H14.3733" id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1636">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[165.482px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[165.482px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">www.pemkotmedan.go.id</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[19.6px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Text4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[11.76px] h-[172.48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.68px] h-[231.28px] items-start left-0 top-0 w-[228.585px]" data-name="Container">
      <Heading6 />
      <Container32 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Layanan Utama</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[139.022px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">{`KTP & Kartu Keluarga`}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[19.6px] left-0 top-0 w-[228.585px]" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[67.528px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Izin Usaha</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[27.44px] w-[228.585px]" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[85.474px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Pajak Daerah</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[54.88px] w-[228.585px]" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[118.442px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Pengaduan Online</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[82.32px] w-[228.585px]" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[126.481px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Layanan Kesehatan</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[109.76px] w-[228.585px]" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[71.586px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Pendidikan</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[137.2px] w-[228.585px]" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[156.8px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.68px] h-[231.28px] items-start left-[259.95px] top-0 w-[228.585px]" data-name="Container">
      <Heading7 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Informasi</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[85.16px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Berita Terkini</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute h-[19.6px] left-0 top-0 w-[228.585px]" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[89.287px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Pengumuman</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[27.44px] w-[228.585px]" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[110.434px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Agenda Kegiatan</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[54.88px] w-[228.585px]" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[82.113px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Profil Medan</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[82.32px] w-[228.585px]" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[124.215px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Struktur Organisasi</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[109.76px] w-[228.585px]" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[97.273px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Sejarah Medan</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[137.2px] w-[228.585px]" data-name="List Item">
      <Link11 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[156.8px] relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.68px] h-[231.28px] items-start left-[519.89px] top-0 w-[228.585px]" data-name="Container">
      <Heading8 />
      <List1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[27.44px] left-0 top-0 w-[228.585px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Transparansi</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[121.75px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">Laporan Keuangan</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="absolute h-[19.6px] left-0 top-0 w-[228.585px]" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[16.66px] items-start left-0 top-[1.47px] w-[74.495px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap whitespace-pre">APBD 2025</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[27.44px] w-[228.585px]" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[86.638px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">Data Terbuka</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[54.88px] w-[228.585px]" data-name="List Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute h-[16.66px] left-0 top-[1.47px] w-[59.619px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[-1px] whitespace-pre">e-LAPOR</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[82.32px] w-[228.585px]" data-name="List Item">
      <Link15 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute h-[101.92px] left-0 top-[43.12px] w-[228.585px]" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[168.56px] w-[228.585px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Media Sosial</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1622)" id="Icon">
          <path d={svgPaths.p2457a80} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1622">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.36px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1625)" id="Icon">
          <path d={svgPaths.p33e43680} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1625">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.36px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1603)" id="Icon">
          <path d={svgPaths.p447700} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p29c3af00} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M11.4333 4.24666H11.4399" id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1603">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.36px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.68px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1576)" id="Icon">
          <path d={svgPaths.p1b6bbc00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p30eda540} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1576">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.36px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[7.84px] h-[31.36px] items-start left-0 top-[199.92px] w-[228.585px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[231.28px] left-[779.84px] top-0 w-[228.585px]" data-name="Container">
      <Heading9 />
      <List2 />
      <Heading10 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[231.28px] left-[31.36px] top-[62.72px] w-[1008.42px]" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container37 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.08)] h-[0.98px] left-[31.36px] top-[341.04px] w-[1008.42px]" data-name="Primitive.div" />;
}

function Footer() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Aksesibilitas</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Ukuran Teks</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[31.36px] relative rounded-[12px] shrink-0 w-[40.823px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.36px] items-center justify-center px-[14px] py-[2px] relative w-[40.823px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">A-</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-emerald-600 h-[31.36px] relative rounded-[12px] shrink-0 w-[37.171px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-emerald-600 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.36px] items-center justify-center px-[14px] py-[2px] relative w-[37.171px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white h-[31.36px] relative rounded-[12px] shrink-0 w-[48.495px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.36px] items-center justify-center px-[14px] py-[2px] relative w-[48.495px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#1d1d1f] text-[16px] text-nowrap whitespace-pre">A+</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[31.36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[58.8px] items-start left-0 top-0 w-[228.095px]" data-name="Container">
      <Heading11 />
      <Container39 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Mode Tampilan</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[11.76px] size-[15.68px] top-[7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1554)" id="Icon">
          <path d={svgPaths.pf3d3280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M7.84 1.30667V2.61333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M7.84 13.0667V14.3733" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p164eae20} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1f107900} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.30667 7.84H2.61333" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M13.0667 7.84H14.3733" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p35e7be80} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p292f7100} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1554">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-emerald-600 h-[31.36px] relative rounded-[12px] shrink-0 w-[94.731px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-emerald-600 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.36px] relative w-[94.731px]">
        <Icon18 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37.24px] not-italic text-[14px] text-nowrap text-white top-[6.35px] whitespace-pre">Terang</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[11.76px] size-[15.68px] top-[7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1e27d200} id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[31.36px] relative rounded-[12px] shrink-0 w-[87.044px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.36px] relative w-[87.044px]">
        <Icon19 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37.24px] not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[6.35px] whitespace-pre">Gelap</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[31.36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[58.8px] items-start left-[243.78px] top-0 w-[228.095px]" data-name="Container">
      <Heading12 />
      <Container41 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Bahasa</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-emerald-600 h-[31.36px] relative rounded-[12px] shrink-0 w-[58.463px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-emerald-600 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.36px] items-center justify-center px-[14px] py-[2px] relative w-[58.463px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">🇮🇩 ID</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[31.36px] relative rounded-[12px] shrink-0 w-[63.47px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.36px] items-center justify-center px-[14px] py-[2px] relative w-[63.47px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1d1d1f] text-[14px] text-nowrap whitespace-pre">🇬🇧 EN</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[31.36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[58.8px] items-start left-[487.55px] top-0 w-[228.095px]" data-name="Container">
      <Heading13 />
      <Container43 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[19.6px] left-0 top-0 w-[228.095px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Dukungan Difabel</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white h-[31.36px] left-0 rounded-[12px] top-[27.44px] w-[128.901px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[13.72px] not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[6.35px] whitespace-pre">Panduan Akses</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[58.8px] left-[731.33px] top-0 w-[228.095px]" data-name="Container">
      <Heading14 />
      <Button13 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="h-[58.8px] relative shrink-0 w-full" data-name="Footer">
      <Container40 />
      <Container42 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function UnifiedCard3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col gap-[15.68px] h-[150.92px] items-start left-[31.36px] pb-px pt-[24.5px] px-[24.5px] rounded-[24px] top-[373.38px] w-[1008.42px]" data-name="UnifiedCard3">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Footer />
      <Footer1 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[504.68px] not-italic text-[#8e8e93] text-[14px] text-center top-[0.47px] translate-x-[-50%] w-[401px]">© 2025 Pemerintah Kota Medan. Seluruh hak cipta dilindungi.</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[109.921px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[109.921px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[55px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">Kebijakan Privasi</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[4.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[4.563px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[2.5px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[123.61px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[123.61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[62.5px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">{`Syarat & Ketentuan`}</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[64.78px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-[64.78px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.5px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">Peta Situs</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[15.68px] h-[19.6px] items-start justify-center pl-0 pr-[0.008px] py-0 relative w-full">
          <Link16 />
          <Text5 />
          <Link17 />
          <Text5 />
          <Link18 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[47.04px] items-start left-[31.36px] top-[555.66px] w-[1008.42px]" data-name="Container">
      <Paragraph10 />
      <Container46 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="absolute bg-[#f2f2f7] h-[665.42px] left-[10.93px] opacity-0 top-[7372.84px] w-[1071.14px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container38 />
      <PrimitiveDiv />
      <UnifiedCard3 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return <div className="absolute h-[1377.25px] left-0 opacity-5 top-0 w-[1093px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1093 1377.3\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -87.913 -87.913 0 546.5 688.63)\\\'><stop stop-color=\\\'rgba(29,29,31,1)\\\' offset=\\\'0.00091491\\\'/><stop stop-color=\\\'rgba(15,15,16,0.5)\\\' offset=\\\'0.00045746\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0\\\'/></radialGradient></defs></svg>')" }} />;
}

function QuickAccess() {
  return <div className="absolute bg-emerald-600 left-[17px] opacity-[0.999] rounded-[1.67772e+07px] size-[8px] top-[15px]" data-name="QuickAccess" />;
}

function QuickAccess1() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[9px] w-[115.953px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[58px] not-italic text-[#1d1d1f] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Layanan Prioritas</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[38px] left-[439.52px] rounded-[1.67772e+07px] top-0 w-[165.953px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <QuickAccess />
      <QuickAccess1 />
    </div>
  );
}

function QuickAccess2() {
  return (
    <div className="absolute h-[48px] left-0 top-[62px] w-[1045px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[522.38px] not-italic text-[#1d1d1f] text-[48px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Akses Cepat Layanan Digital</p>
    </div>
  );
}

function QuickAccess3() {
  return (
    <div className="absolute h-[65px] left-[138.5px] top-[134px] w-[768px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[384.22px] not-italic text-[#8e8e93] text-[20px] text-center top-[-1px] translate-x-[-50%] w-[730px]">Pilih layanan yang Anda butuhkan untuk mendapatkan bantuan dengan cepat dan efisien</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[199px] left-[24px] top-0 w-[1045px]" data-name="Container">
      <Container49 />
      <QuickAccess2 />
      <QuickAccess3 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-emerald-600 h-[24px] left-[250.77px] overflow-clip rounded-[12px] top-[17.5px] w-[60.227px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-nowrap text-white top-[4.5px] whitespace-pre">Populer</p>
    </div>
  );
}

function QuickAccess4() {
  return <div className="absolute h-[345.5px] left-0 opacity-0 top-0 w-[327px]" data-name="QuickAccess" />;
}

function QuickAccess5() {
  return <div className="absolute left-0 opacity-0 size-[64px] top-0" data-name="QuickAccess" />;
}

function Icon20() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p30f65280} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 13.3333H29.3333" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.05)] left-[32px] overflow-clip rounded-[24px] size-[64px] top-[32px]" data-name="Container">
      <QuickAccess5 />
      <Icon20 />
    </div>
  );
}

function QuickAccess6() {
  return (
    <div className="absolute h-[345.5px] left-0 rounded-[16px] top-0 w-[327px]" data-name="QuickAccess">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[263px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Dokumen Kependudukan</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[40px] w-[263px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] top-[0.5px] w-[201px]">{`e-KTP, KK, Akta, Birth & Death Certificate`}</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1628)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] top-[0.5px] w-[72px]">Est. 10 menit</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[91.563px]">
        <Icon21 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1667)" id="Icon">
          <path d={svgPaths.p1eea7700} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1667">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-emerald-600 top-[0.5px] w-[61px]">156 hari ini</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80.477px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[80.477px]">
        <Icon22 />
        <Text7 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[109.5px] w-[263px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function QuickAccess7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="QuickAccess">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-emerald-600 text-nowrap top-[0.5px] whitespace-pre">Mulai Sekarang</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 opacity-0 top-[149.5px] w-[127.375px]" data-name="Container">
      <QuickAccess7 />
      <Icon23 />
    </div>
  );
}

function QuickAccess8() {
  return (
    <div className="absolute h-[169.5px] left-[32px] top-[144px] w-[263px]" data-name="QuickAccess">
      <Heading15 />
      <Paragraph11 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] overflow-clip relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Card">
      <Badge2 />
      <QuickAccess4 />
      <Container51 />
      <QuickAccess6 />
      <QuickAccess8 />
    </div>
  );
}

function QuickAccess9() {
  return <div className="absolute h-[322.75px] left-0 opacity-0 top-0 w-[327px]" data-name="QuickAccess" />;
}

function QuickAccess10() {
  return <div className="absolute left-0 opacity-0 size-[64px] top-0" data-name="QuickAccess" />;
}

function Icon24() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p34cd2e00} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2a4f62c0} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-emerald-50 left-[32px] overflow-clip rounded-[24px] size-[64px] top-[32px]" data-name="Container">
      <QuickAccess10 />
      <Icon24 />
    </div>
  );
}

function QuickAccess11() {
  return (
    <div className="absolute h-[322.75px] left-0 rounded-[16px] top-0 w-[327px]" data-name="QuickAccess">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[263px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Pembayaran Pajak</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[40px] w-[263px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">PBB, Kendaraan, Regional Tax</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1628)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] top-[0.5px] w-[67px]">Est. 5 menit</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[86.234px]">
        <Icon25 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1686)" id="Icon">
          <path d={svgPaths.p334f80} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1686">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-emerald-600 top-[0.5px] w-[56px]">89 hari ini</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[75.898px]">
        <Icon26 />
        <Text9 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[86.75px] w-[263px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function QuickAccess12() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="QuickAccess">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-emerald-600 text-nowrap top-[0.5px] whitespace-pre">Mulai Sekarang</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 opacity-0 top-[126.75px] w-[127.375px]" data-name="Container">
      <QuickAccess12 />
      <Icon27 />
    </div>
  );
}

function QuickAccess13() {
  return (
    <div className="absolute h-[146.75px] left-[32px] top-[144px] w-[263px]" data-name="QuickAccess">
      <Heading16 />
      <Paragraph12 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] h-[322.75px] overflow-clip relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Card">
      <QuickAccess9 />
      <Container56 />
      <QuickAccess11 />
      <QuickAccess13 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-emerald-600 h-[24px] left-[250.77px] overflow-clip rounded-[12px] top-[17.5px] w-[60.227px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-nowrap text-white top-[4.5px] whitespace-pre">Populer</p>
    </div>
  );
}

function QuickAccess14() {
  return <div className="absolute h-[322.75px] left-0 opacity-0 top-0 w-[327px]" data-name="QuickAccess" />;
}

function QuickAccess15() {
  return <div className="absolute left-0 opacity-0 size-[64px] top-0" data-name="QuickAccess" />;
}

function Icon28() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 13.3333H16.0133" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 18.6667H16.0133" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 8H16.0133" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 13.3333H21.3467" id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 18.6667H21.3467" id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 8H21.3467" id="Vector_6" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 13.3333H10.68" id="Vector_7" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 18.6667H10.68" id="Vector_8" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 8H10.68" id="Vector_9" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c128780} id="Vector_10" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pdb69100} id="Vector_11" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.05)] left-[32px] overflow-clip rounded-[24px] size-[64px] top-[32px]" data-name="Container">
      <QuickAccess15 />
      <Icon28 />
    </div>
  );
}

function QuickAccess16() {
  return (
    <div className="absolute h-[322.75px] left-0 rounded-[16px] top-0 w-[327px]" data-name="QuickAccess">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[263px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Perizinan Usaha</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[40px] w-[263px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">SIUP, TDP, NIB, Disturbance Permit</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1628)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] top-[0.5px] w-[54px]">Est. 1 hari</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[16px] relative shrink-0 w-[73.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[73.938px]">
        <Icon29 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1686)" id="Icon">
          <path d={svgPaths.p334f80} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1686">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-emerald-600 top-[0.5px] w-[56px]">23 hari ini</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[75.766px]">
        <Icon30 />
        <Text11 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[86.75px] w-[263px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function QuickAccess17() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="QuickAccess">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-emerald-600 text-nowrap top-[0.5px] whitespace-pre">Mulai Sekarang</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 opacity-0 top-[126.75px] w-[127.375px]" data-name="Container">
      <QuickAccess17 />
      <Icon31 />
    </div>
  );
}

function QuickAccess18() {
  return (
    <div className="absolute h-[146.75px] left-[32px] top-[144px] w-[263px]" data-name="QuickAccess">
      <Heading17 />
      <Paragraph13 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] h-[322.75px] overflow-clip relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Card">
      <Badge3 />
      <QuickAccess14 />
      <Container61 />
      <QuickAccess16 />
      <QuickAccess18 />
    </div>
  );
}

function QuickAccess19() {
  return <div className="absolute h-[322.75px] left-0 opacity-0 top-0 w-[327px]" data-name="QuickAccess" />;
}

function QuickAccess20() {
  return <div className="absolute left-0 opacity-0 size-[64px] top-0" data-name="QuickAccess" />;
}

function Icon32() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1806000} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-emerald-50 left-[32px] overflow-clip rounded-[24px] size-[64px] top-[32px]" data-name="Container">
      <QuickAccess20 />
      <Icon32 />
    </div>
  );
}

function QuickAccess21() {
  return (
    <div className="absolute h-[322.75px] left-0 rounded-[16px] top-0 w-[327px]" data-name="QuickAccess">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[263px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Pengaduan</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[40px] w-[263px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`Reports, Complaints & Aspirations`}</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1628)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] top-[0.5px] w-[63px]">Est. 24 jam</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[16px] relative shrink-0 w-[82.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[82.719px]">
        <Icon33 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1677)" id="Icon">
          <path d={svgPaths.p1242ba00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1677">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-emerald-600 top-[0.5px] w-[56px]">67 hari ini</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[75.266px]">
        <Icon34 />
        <Text13 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[86.75px] w-[263px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function QuickAccess22() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="QuickAccess">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-emerald-600 text-nowrap top-[0.5px] whitespace-pre">Mulai Sekarang</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 opacity-0 top-[126.75px] w-[127.375px]" data-name="Container">
      <QuickAccess22 />
      <Icon35 />
    </div>
  );
}

function QuickAccess23() {
  return (
    <div className="absolute h-[146.75px] left-[32px] top-[144px] w-[263px]" data-name="QuickAccess">
      <Heading18 />
      <Paragraph14 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:2_/_1] overflow-clip relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Card">
      <QuickAccess19 />
      <Container66 />
      <QuickAccess21 />
      <QuickAccess23 />
    </div>
  );
}

function QuickAccess24() {
  return <div className="absolute h-[322.75px] left-0 opacity-0 top-0 w-[327px]" data-name="QuickAccess" />;
}

function QuickAccess25() {
  return <div className="absolute left-0 opacity-0 size-[64px] top-0" data-name="QuickAccess" />;
}

function Icon36() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 9.33333V14.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1188a00} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M18.6667 12H13.3333" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p375c4a00} id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pacc5d80} id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.05)] left-[32px] overflow-clip rounded-[24px] size-[64px] top-[32px]" data-name="Container">
      <QuickAccess25 />
      <Icon36 />
    </div>
  );
}

function QuickAccess26() {
  return (
    <div className="absolute h-[322.75px] left-0 rounded-[16px] top-0 w-[327px]" data-name="QuickAccess">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[263px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Layanan Kesehatan</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[40px] w-[263px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Info RS, Puskesmas, Faskes</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1628)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1628">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] top-[0.5px] w-[74px]">Est. Realtime</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[93.125px]">
        <Icon37 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1477)" id="Icon">
          <path d={svgPaths.p3ea2eb00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 5.5L6 7L11 2" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_1477">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-emerald-600 top-[0.5px] w-[64px]">234 hari ini</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[16px] relative shrink-0 w-[83.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[83.516px]">
        <Icon38 />
        <Text15 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[86.75px] w-[263px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function QuickAccess27() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="QuickAccess">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-emerald-600 text-nowrap top-[0.5px] whitespace-pre">Mulai Sekarang</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 opacity-0 top-[126.75px] w-[127.375px]" data-name="Container">
      <QuickAccess27 />
      <Icon39 />
    </div>
  );
}

function QuickAccess28() {
  return (
    <div className="absolute h-[146.75px] left-[32px] top-[144px] w-[263px]" data-name="QuickAccess">
      <Heading19 />
      <Paragraph15 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:2_/_2] overflow-clip relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Card">
      <QuickAccess24 />
      <Container71 />
      <QuickAccess26 />
      <QuickAccess28 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[345.5px_minmax(0px,_1fr)] h-[700.25px] left-[24px] top-[263px] w-[1045px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAccess29() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.5)] content-stretch flex items-center justify-center left-[79px] rounded-[20px] size-[48px] top-[25px]" data-name="QuickAccess">
      <Icon40 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[156px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[78.16px] not-italic text-[#1d1d1f] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">15,247</p>
    </div>
  );
}

function QuickAccess30() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[125px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[77.95px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Layanan Selesai</p>
    </div>
  );
}

function QuickAccess31() {
  return (
    <div className="absolute h-[16px] left-[25px] opacity-70 top-[149px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[78.02px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Bulan ini</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <QuickAccess29 />
      <Container77 />
      <QuickAccess30 />
      <QuickAccess31 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 6V12L16 14" id="Vector" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pace200} id="Vector_2" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAccess32() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.5)] content-stretch flex items-center justify-center left-[79px] rounded-[20px] size-[48px] top-[25px]" data-name="QuickAccess">
      <Icon41 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[156px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[78.41px] not-italic text-[#1d1d1f] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">2.3 menit</p>
    </div>
  );
}

function QuickAccess33() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[125px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.4px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Rata-rata Respon</p>
    </div>
  );
}

function QuickAccess34() {
  return (
    <div className="absolute h-[16px] left-[25px] opacity-70 top-[149px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[78.41px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Real-time</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <QuickAccess32 />
      <Container79 />
      <QuickAccess33 />
      <QuickAccess34 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAccess35() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.5)] content-stretch flex items-center justify-center left-[79px] rounded-[20px] size-[48px] top-[25px]" data-name="QuickAccess">
      <Icon42 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[156px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[78.56px] not-italic text-[#1d1d1f] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">98.5%</p>
    </div>
  );
}

function QuickAccess36() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[125px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.01px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Kepuasan Warga</p>
    </div>
  );
}

function QuickAccess37() {
  return (
    <div className="absolute h-[16px] left-[25px] opacity-70 top-[149px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[78.16px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Rating</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.8)] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <QuickAccess35 />
      <Container81 />
      <QuickAccess36 />
      <QuickAccess37 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 5L19 12L12 19" id="Vector_2" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuickAccess38() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.5)] content-stretch flex items-center justify-center left-[79px] rounded-[20px] size-[48px] top-[25px]" data-name="QuickAccess">
      <Icon43 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[156px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[78.38px] not-italic text-[#1d1d1f] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">24/7</p>
    </div>
  );
}

function QuickAccess39() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[125px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.03px] not-italic text-[#8e8e93] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Layanan Online</p>
    </div>
  );
}

function QuickAccess40() {
  return (
    <div className="absolute h-[16px] left-[25px] opacity-70 top-[149px] w-[156px]" data-name="QuickAccess">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[78.23px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Non-stop</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="[grid-area:1_/_4] bg-[rgba(255,255,255,0.8)] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <QuickAccess38 />
      <Container83 />
      <QuickAccess39 />
      <QuickAccess40 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[190px] left-[98.5px] top-[1027.25px] w-[896px]" data-name="Container">
      <Container78 />
      <Container80 />
      <Container82 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[1217.25px] left-0 top-[80px] w-[1093px]" data-name="Container">
      <Container50 />
      <Container76 />
      <Container85 />
    </div>
  );
}

function QuickAccess41() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ffffff] h-[1377.25px] left-0 overflow-clip to-[rgba(242,242,247,0.2)] top-0 w-[1093px]" data-name="QuickAccess">
      <Container48 />
      <Container86 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-0 w-[992px]" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[30px] text-center tracking-[-0.75px]">Kamu Warga, Kami Bantu</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[25.594px] left-[160px] top-[52px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[336.25px] not-italic text-[#8e8e93] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Layanan yang disesuaikan dengan kebutuhan spesifik setiap kelompok masyarakat</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[77.594px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph16 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2df9ab00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 13.3333V21.3333" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3858b240} id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] content-stretch flex items-center justify-center left-[58px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[180px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[90.84px] not-italic text-[#1d1d1f] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Mahasiswa</p>
    </div>
  );
}

function ServicesByPersona() {
  return (
    <div className="h-[108px] relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[108px] relative w-[180px]">
        <Container88 />
        <Heading20 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[115px]">Surat Keterangan Domisili</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text16 />
          <Badge4 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[122.453px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Legalisir Dokumen</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text17 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[115px]">Surat Keterangan Tidak Mampu</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text18 />
          <Badge6 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[114.289px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Beasiswa Daerah</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text19 />
          <Badge7 />
        </div>
      </div>
    </div>
  );
}

function ServicesByPersona1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[180px]">
        <Container89 />
        <Container90 />
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesByPersona />
          <ServicesByPersona1 />
        </div>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p7001700} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bg-[#d0fae5] content-stretch flex items-center justify-center left-[58px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[180px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[89.69px] not-italic text-[#1d1d1f] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Keluarga</p>
    </div>
  );
}

function ServicesByPersona2() {
  return (
    <div className="h-[108px] relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[108px] relative w-[180px]">
        <Container93 />
        <Heading21 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[95.133px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Akta Kelahiran</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text20 />
          <Badge8 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[97.586px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Kartu Keluarga</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text21 />
          <Badge9 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.672px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Surat Nikah</p>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text22 />
          <Badge10 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[70px]">Layanan Kesehatan</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text23 />
          <Badge11 />
        </div>
      </div>
    </div>
  );
}

function ServicesByPersona3() {
  return (
    <div className="h-[238px] relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[238px] items-start relative w-[180px]">
        <Container94 />
        <Container95 />
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">
          <ServicesByPersona2 />
          <ServicesByPersona3 />
        </div>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p9921600} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] content-stretch flex items-center justify-center left-[58px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[180px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[90.05px] not-italic text-[#1d1d1f] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Lansia</p>
    </div>
  );
}

function ServicesByPersona4() {
  return (
    <div className="h-[108px] relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[108px] relative w-[180px]">
        <Container98 />
        <Heading22 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[97.633px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Bantuan Sosial</p>
      </div>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text24 />
          <Badge12 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[113px]">Layanan Kesehatan Gratis</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text25 />
          <Badge13 />
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[103px]">Program Lansia Aktif</p>
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text26 />
          <Badge14 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[112.172px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Konsultasi Medis</p>
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text27 />
          <Badge15 />
        </div>
      </div>
    </div>
  );
}

function ServicesByPersona5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[180px]">
        <Container99 />
        <Container100 />
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesByPersona4 />
          <ServicesByPersona5 />
        </div>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p984d200} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p28e98400} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-[#d0fae5] content-stretch flex items-center justify-center left-[58px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute h-[28px] left-0 top-[80px] w-[180px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[90.78px] not-italic text-[#1d1d1f] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Pemilik Usaha</p>
    </div>
  );
}

function ServicesByPersona6() {
  return (
    <div className="h-[108px] relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[108px] relative w-[180px]">
        <Container103 />
        <Heading23 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.078px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`SIUP & TDP`}</p>
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text28 />
          <Badge16 />
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[96px]">Izin Gangguan (HO)</p>
      </div>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text29 />
          <Badge17 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[83.422px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Izin Reklame</p>
      </div>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[46px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[46px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text30 />
          <Badge18 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[40px] relative shrink-0 w-[126.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[126.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] top-[0.5px] w-[112px]">{`Pajak Restoran & Hotel`}</p>
      </div>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-[#f2f2f7] h-[22px] relative rounded-[12px] shrink-0 w-[29.023px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[29.023px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">→</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[rgba(242,242,247,0.5)] h-[64px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Text31 />
          <Badge19 />
        </div>
      </div>
    </div>
  );
}

function ServicesByPersona7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[180px]" data-name="ServicesByPersona">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[180px]">
        <Container104 />
        <Container105 />
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[20px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesByPersona6 />
          <ServicesByPersona7 />
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[462px] relative shrink-0 w-full" data-name="Container">
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function ServicesByPersona8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[48px] h-[587.594px] items-start left-[34.5px] px-[16px] py-0 top-[1441.25px] w-[1024px]" data-name="ServicesByPersona">
      <Container87 />
      <Container108 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-0 w-[992px]" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[30px] text-center tracking-[-0.75px]">Apa yang Baru di Kota Medan?</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[51.188px] left-[160px] top-[52px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[336.38px] not-italic text-[#8e8e93] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[634px]">Tetap update dengan berita terbaru dan pengumuman penting dari Pemerintah Kota Medan</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[103.188px] left-[50.5px] top-[64px] w-[992px]" data-name="Container">
      <Heading24 />
      <Paragraph17 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[29px] relative rounded-[20px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1d1d1f] text-[14px] text-nowrap whitespace-pre">📰 Berita</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_2] h-[29px] relative rounded-[20px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1d1d1f] text-[14px] text-nowrap whitespace-pre">📢 Pengumuman</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#f2f2f7] h-[36px] relative rounded-[20px] shrink-0 w-[896px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[36px] px-[3px] py-[3.5px] relative w-[896px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-[#f2f2f7] h-[22px] left-0 rounded-[12px] top-0 w-[81.516px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.516px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Pendidikan</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading25() {
  return (
    <div className="absolute h-[28px] left-0 top-[30px] w-[846px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Pembukaan Pendaftaran Program Beasiswa Kota Medan 2025</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[24px] left-0 top-[66px] w-[846px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#8e8e93] text-[16px] text-nowrap top-[-1px] whitespace-pre">Pemerintah Kota Medan membuka pendaftaran beasiswa untuk siswa berprestasi...</p>
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[98.328px]">
        <Icon48 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">5 Juni 2025</p>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1423)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1423">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[86.695px]">
        <Icon49 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">10:30 WIB</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-0 top-[102px] w-[846px]" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function NewsSection() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[846px]" data-name="NewsSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[846px]">
        <Badge20 />
        <Heading25 />
        <Paragraph18 />
        <Container112 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-white h-[172px] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[172px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <NewsSection />
        </div>
      </div>
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-[#f2f2f7] h-[22px] left-0 rounded-[12px] top-0 w-[73.852px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[73.852px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Teknologi</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading26() {
  return (
    <div className="absolute h-[28px] left-0 top-[30px] w-[846px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Launching Aplikasi Mobile Layanan Publik Digital</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[24px] left-0 top-[66px] w-[846px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#8e8e93] text-[16px] text-nowrap top-[-1px] whitespace-pre">Aplikasi baru memudahkan warga mengakses layanan publik melalui smartphone...</p>
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[98.672px]">
        <Icon50 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">3 Juni 2025</p>
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1423)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1423">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[87.094px]">
        <Icon51 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">14:00 WIB</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-0 top-[102px] w-[846px]" data-name="Container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function NewsSection1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[846px]" data-name="NewsSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[846px]">
        <Badge21 />
        <Heading26 />
        <Paragraph19 />
        <Container115 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-white h-[172px] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[172px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <NewsSection1 />
        </div>
      </div>
    </div>
  );
}

function Badge22() {
  return (
    <div className="absolute bg-[#f2f2f7] h-[22px] left-0 rounded-[12px] top-0 w-[60.789px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[60.789px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Budaya</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute h-[28px] left-0 top-[30px] w-[846px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-0 whitespace-pre">Festival Budaya Medan 2025 Segera Dimulai</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[24px] left-0 top-[66px] w-[846px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#8e8e93] text-[16px] text-nowrap top-[-1px] whitespace-pre">Rayakan keberagaman budaya Medan dalam festival tahunan yang meriah...</p>
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[95.719px]">
        <Icon52 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">1 Juni 2025</p>
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1423)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1423">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[89.867px]">
        <Icon53 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.5px] whitespace-pre">09:00 WIB</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-0 top-[102px] w-[846px]" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function NewsSection2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[846px]" data-name="NewsSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[846px]">
        <Badge22 />
        <Heading27 />
        <Paragraph20 />
        <Container118 />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="bg-white h-[172px] relative rounded-[20px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[172px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <NewsSection2 />
        </div>
      </div>
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[896px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start relative w-[896px]">
        <Card9 />
        <Card10 />
        <Card11 />
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[640px] items-start left-[98.5px] top-[215.19px] w-[896px]" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function NewsSection3() {
  return (
    <div className="absolute bg-white h-[919.188px] left-0 top-[2092.84px] w-[1093px]" data-name="NewsSection">
      <Container109 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute content-stretch flex h-[35.28px] items-start left-0 top-0 w-[972.16px]" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[30px] text-center tracking-[-0.75px]">Agenda Pemkot</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[25.082px] left-[156.8px] top-[50.96px] w-[658.56px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[330.08px] not-italic text-[#8e8e93] text-[16px] text-center text-nowrap top-[-1.06px] translate-x-[-50%] whitespace-pre">Transparansi kegiatan pemerintahan untuk membangun kepercayaan publik</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[76.042px] relative shrink-0 w-full" data-name="Container">
      <Heading28 />
      <Paragraph21 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[127.94px] not-italic text-[#1d1d1f] text-[18px] text-center text-nowrap top-[-0.06px] translate-x-[-50%] whitespace-pre">Juni 2025</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[31.36px] left-0 top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18.34px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Min</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18.84px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Sen</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[31.36px] left-[73.73px] top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.85px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Sel</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[31.36px] left-[110.59px] top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18.84px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Rab</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-[31.36px] left-[147.46px] top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[19.84px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Kam</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[31.36px] left-[184.32px] top-0 w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[19.84px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Jum</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[31.36px] left-[221.19px] top-0 w-[32.952px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18.84px] not-italic text-[#8e8e93] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">Sab</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[31.36px] left-0 rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.08px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.89px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute h-[31.36px] left-[73.73px] rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.84px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute h-[31.36px] left-[110.59px] rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.67px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">4</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute h-[31.36px] left-[147.46px] rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[15.98px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">5</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[31.36px] left-[184.32px] rounded-[4px] top-[35.28px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.82px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">6</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute bg-emerald-600 h-[31.36px] left-[221.19px] rounded-[4px] top-[35.28px] w-[32.952px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.65px] not-italic text-[12px] text-center text-nowrap text-white top-[8.33px] translate-x-[-50%] whitespace-pre">7</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] h-[31.36px] left-0 rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.83px] not-italic text-[12px] text-center text-emerald-600 text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">8</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.82px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">9</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] h-[31.36px] left-[73.73px] rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.37px] not-italic text-[12px] text-center text-emerald-600 text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">10</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[31.36px] left-[110.59px] rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.68px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">11</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[31.36px] left-[147.46px] rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.99px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">12</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[31.36px] left-[184.32px] rounded-[4px] top-[70.56px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.44px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">13</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute h-[31.36px] left-[221.19px] rounded-[4px] top-[70.56px] w-[32.952px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.28px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">14</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute bg-[rgba(5,150,105,0.1)] h-[31.36px] left-0 rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17.09px] not-italic text-[12px] text-center text-emerald-600 text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">15</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.43px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">16</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[31.36px] left-[73.73px] rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17.25px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">17</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-[31.36px] left-[110.59px] rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.94px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">18</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute h-[31.36px] left-[147.46px] rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.43px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">19</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute h-[31.36px] left-[184.32px] rounded-[4px] top-[105.84px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.67px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">20</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute h-[31.36px] left-[221.19px] rounded-[4px] top-[105.84px] w-[32.952px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">21</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute h-[31.36px] left-0 rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.79px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">22</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.75px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">23</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[31.36px] left-[73.73px] rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.68px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">24</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[31.36px] left-[110.59px] rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.89px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">25</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute h-[31.36px] left-[147.46px] rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.73px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">26</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[31.36px] left-[184.32px] rounded-[4px] top-[141.12px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17.06px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">27</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute h-[31.36px] left-[221.19px] rounded-[4px] top-[141.12px] w-[32.952px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.75px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">28</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute h-[31.36px] left-0 rounded-[4px] top-[176.4px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.73px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">29</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[31.36px] left-[36.86px] rounded-[4px] top-[176.4px] w-[32.945px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[16.13px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">30</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[207.76px] relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
      <Container125 />
      <Container126 />
      <Container127 />
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
      <Container137 />
      <Container138 />
      <Container139 />
      <Container140 />
      <Container141 />
      <Container142 />
      <Container143 />
      <Container144 />
      <Container145 />
      <Container146 />
      <Container147 />
      <Container148 />
      <Container149 />
      <Container150 />
      <Container151 />
      <Container152 />
      <Container153 />
      <Container154 />
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-emerald-600 relative rounded-[4px] shrink-0 size-[11.76px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.76px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-[38.687px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.68px] relative w-[38.687px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[19px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[0.49px] translate-x-[-50%] whitespace-pre">Hari ini</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[15.68px] items-center relative shrink-0 w-full" data-name="Container">
      <Container158 />
      <Text32 />
    </div>
  );
}

function Container160() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[4px] shrink-0 size-[11.76px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.76px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-[66.655px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.68px] relative w-[66.655px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[33px] not-italic text-[#1d1d1f] text-[12px] text-center text-nowrap top-[0.49px] translate-x-[-50%] whitespace-pre">Ada agenda</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex gap-[7.84px] h-[15.68px] items-center relative shrink-0 w-full" data-name="Container">
      <Container160 />
      <Text33 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col gap-[7.84px] h-[39.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container159 />
      <Container161 />
    </div>
  );
}

function AgendaSection() {
  return (
    <div className="h-[297.92px] relative shrink-0 w-[254.142px]" data-name="AgendaSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.84px] h-[297.92px] items-start relative w-[254.142px]">
        <Heading29 />
        <Container157 />
        <Container162 />
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[362.6px] items-start left-0 pb-px pl-[24.5px] pr-px pt-[24.5px] rounded-[20px] top-0 w-[303.142px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AgendaSection />
    </div>
  );
}

function Badge23() {
  return (
    <div className="absolute h-[21.56px] left-0 rounded-[12px] top-0 w-[49.949px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[21.56px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[49.949px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Rapat</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading30() {
  return (
    <div className="absolute h-[27.44px] left-0 top-[29.4px] w-[588.658px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Rapat Koordinasi Pembangunan Infrastruktur</p>
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1410)" id="Icon">
          <path d="M5.22666 1.30667V3.92" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M10.4533 1.30667V3.92" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1c412800} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.96 6.53333H13.72" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1410">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute h-[19.6px] left-0 top-0 w-[588.658px]" data-name="Container">
      <Icon54 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">8 Juni 2025</p>
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1440)" id="Icon">
          <path d={svgPaths.p10c136c0} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p27f3d500} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1440">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[27.44px] w-[588.658px]" data-name="Container">
      <Icon55 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">09:00 - 12:00 WIB</p>
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1533)" id="Icon">
          <path d={svgPaths.p38da1f00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p278afe00} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1533">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[54.88px] w-[588.658px]" data-name="Container">
      <Icon56 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Balai Kota Medan</p>
    </div>
  );
}

function Icon57() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1467)" id="Icon">
          <path d={svgPaths.p2fcb0960} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p3d3a7400} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p35e25000} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p39483b00} id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1467">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[19.6px] left-0 top-[82.32px] w-[588.658px]" data-name="Container">
      <Icon57 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">{`Kepala Dinas & Walikota`}</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute h-[101.92px] left-0 top-[68.6px] w-[588.658px]" data-name="Container">
      <Container163 />
      <Container164 />
      <Container165 />
      <Container166 />
    </div>
  );
}

function AgendaSection1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[588.658px]" data-name="AgendaSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[588.658px]">
        <Badge23 />
        <Heading30 />
        <Container167 />
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[219.52px] items-start left-0 pl-[24.5px] pr-px py-[24.5px] rounded-[20px] top-0 w-[637.659px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AgendaSection1 />
    </div>
  );
}

function Badge24() {
  return (
    <div className="absolute h-[21.56px] left-0 rounded-[12px] top-0 w-[90.65px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[21.56px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[90.65px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Dialog Publik</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading31() {
  return (
    <div className="absolute h-[27.44px] left-0 top-[29.4px] w-[588.658px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Dialog Publik Anggaran Daerah 2026</p>
    </div>
  );
}

function Icon58() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1410)" id="Icon">
          <path d="M5.22666 1.30667V3.92" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M10.4533 1.30667V3.92" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1c412800} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.96 6.53333H13.72" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1410">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon58 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">10 Juni 2025</p>
    </div>
  );
}

function Icon59() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1440)" id="Icon">
          <path d={svgPaths.p10c136c0} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p27f3d500} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1440">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon59 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">14:00 - 17:00 WIB</p>
    </div>
  );
}

function Icon60() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1533)" id="Icon">
          <path d={svgPaths.p38da1f00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p278afe00} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1533">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon60 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Auditorium Pemkot</p>
    </div>
  );
}

function Icon61() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1467)" id="Icon">
          <path d={svgPaths.p2fcb0960} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p3d3a7400} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p35e25000} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p39483b00} id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1467">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon61 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">{`Masyarakat & Pejabat`}</p>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[101.92px] items-start left-0 top-[68.6px] w-[588.658px]" data-name="Container">
      <Container168 />
      <Container169 />
      <Container170 />
      <Container171 />
    </div>
  );
}

function AgendaSection2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[588.658px]" data-name="AgendaSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[588.658px]">
        <Badge24 />
        <Heading31 />
        <Container172 />
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[219.52px] items-start left-0 pl-[24.5px] pr-px py-[24.5px] rounded-[20px] top-[235.2px] w-[637.659px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AgendaSection2 />
    </div>
  );
}

function Badge25() {
  return (
    <div className="absolute h-[21.56px] left-0 rounded-[12px] top-0 w-[88.169px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[21.56px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[88.169px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1d1d1f] text-[12px] text-nowrap whitespace-pre">Acara Publik</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading32() {
  return (
    <div className="absolute h-[27.44px] left-0 top-[29.4px] w-[588.658px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1d1d1f] text-[18px] text-nowrap top-[-0.06px] whitespace-pre">Launching Program Smart City Medan</p>
    </div>
  );
}

function Icon62() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1410)" id="Icon">
          <path d="M5.22666 1.30667V3.92" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M10.4533 1.30667V3.92" id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1c412800} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.96 6.53333H13.72" id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1410">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon62 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">15 Juni 2025</p>
    </div>
  );
}

function Icon63() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1440)" id="Icon">
          <path d={svgPaths.p10c136c0} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p27f3d500} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1440">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon63 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">10:00 - 16:00 WIB</p>
    </div>
  );
}

function Icon64() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1533)" id="Icon">
          <path d={svgPaths.p38da1f00} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p278afe00} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1533">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon64 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Lapangan Merdeka</p>
    </div>
  );
}

function Icon65() {
  return (
    <div className="absolute left-0 size-[15.68px] top-[1.96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1467)" id="Icon">
          <path d={svgPaths.p2fcb0960} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p3d3a7400} id="Vector_2" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p35e25000} id="Vector_3" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p39483b00} id="Vector_4" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1467">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Container">
      <Icon65 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.52px] not-italic text-[#8e8e93] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Seluruh Warga</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.84px] h-[101.92px] items-start left-0 top-[68.6px] w-[588.658px]" data-name="Container">
      <Container173 />
      <Container174 />
      <Container175 />
      <Container176 />
    </div>
  );
}

function AgendaSection3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[588.658px]" data-name="AgendaSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[588.658px]">
        <Badge25 />
        <Heading32 />
        <Container177 />
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[219.52px] items-start left-0 pl-[24.5px] pr-px py-[24.5px] rounded-[20px] top-[470.4px] w-[637.659px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AgendaSection3 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="absolute left-[12.74px] size-[15.68px] top-[9.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1585)" id="Icon">
          <path d="M5.22666 1.30667V3.92" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M10.4533 1.30667V3.92" id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1c412800} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M1.96 6.53333H13.72" id="Vector_4" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1585">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white h-[35.28px] left-[222.86px] rounded-[12px] top-[721.28px] w-[191.935px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon66 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.1px] not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[8.31px] whitespace-pre">Lihat Semua Agenda</p>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute h-[756.56px] left-[334.5px] top-0 w-[637.659px]" data-name="Container">
      <Card13 />
      <Card14 />
      <Card15 />
      <Button14 />
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[756.56px] relative shrink-0 w-full" data-name="Container">
      <Card12 />
      <Container178 />
    </div>
  );
}

function AgendaSection4() {
  return (
    <div className="bg-[rgba(242,242,247,0.2)] h-[879.642px] relative shrink-0 w-full" data-name="AgendaSection">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[47.04px] h-[879.642px] items-start px-[15.68px] py-0 relative w-full">
          <Container119 />
          <Container179 />
        </div>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[1005.08px] items-start left-[10.93px] opacity-0 pb-0 pt-[62.72px] px-[33.81px] top-[3062.29px] w-[1071.14px]" data-name="Container">
      <AgendaSection4 />
    </div>
  );
}

function Container181() {
  return <div className="absolute bg-[rgba(5,150,105,0.02)] blur-3xl filter left-[427.04px] rounded-[1.67772e+07px] size-[376.32px] top-[302.94px]" data-name="Container" />;
}

function Container182() {
  return <div className="absolute bg-[rgba(43,127,255,0.02)] blur-3xl filter left-[267.79px] rounded-[1.67772e+07px] size-[313.6px] top-[595.23px]" data-name="Container" />;
}

function Container183() {
  return (
    <div className="absolute h-[1211.77px] left-0 overflow-clip top-0 w-[1071.14px]" data-name="Container">
      <Container181 />
      <Container182 />
    </div>
  );
}

function Container184() {
  return (
    <div className="bg-emerald-600 relative rounded-[1.67772e+07px] shrink-0 size-[7.84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[7.84px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="basis-0 grow h-[19.6px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.6px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[65px] not-italic text-[14px] text-center text-emerald-600 text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">Transparansi Publik</p>
      </div>
    </div>
  );
}

function TransparencySection() {
  return (
    <div className="absolute content-stretch flex gap-[11.76px] h-[19.6px] items-center left-[24.5px] top-[12.74px] w-[148.784px]" data-name="TransparencySection">
      <Container184 />
      <Text34 />
    </div>
  );
}

function UnifiedCard2() {
  return (
    <div className="absolute bg-white h-[45.08px] left-[405.31px] rounded-[24px] top-0 w-[197.784px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[71.05px] items-start left-[226.87px] top-[74.48px] w-[554.672px]" data-name="Text">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[75px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0)] text-center text-nowrap tracking-[-1.5px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(5, 150, 105) 0%, rgb(21, 93, 252) 50%, rgb(20, 71, 230) 100%)" }}>
        Bertanggung Jawab
      </p>
    </div>
  );
}

function TransparencySection1() {
  return (
    <div className="absolute h-[147px] left-0 top-[68.6px] w-[1008.42px]" data-name="TransparencySection">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[75px] left-[504.64px] not-italic text-[#1d1d1f] text-[60px] text-center text-nowrap top-[-0.02px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre">Kami</p>
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[31.85px] left-0 top-[39.69px] w-[658.56px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.5px] left-[330.09px] not-italic text-[#1d1d1f] text-[20px] text-center text-nowrap top-[-1.08px] translate-x-[-50%] whitespace-pre">Terpercaya • Terbuka • Akuntabel</p>
    </div>
  );
}

function TransparencySection2() {
  return (
    <div className="absolute h-[71.54px] left-[174.93px] top-[239.12px] w-[658.56px]" data-name="TransparencySection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[329.61px] not-italic text-[20px] text-[rgba(29,29,31,0.7)] text-center text-nowrap top-[-1.08px] translate-x-[-50%] whitespace-pre">Transparansi dan akuntabilitas dalam setiap aspek pemerintahan</p>
      <Text36 />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute h-[310.66px] left-[31.36px] opacity-0 top-[29.4px] w-[1008.42px]" data-name="Container">
      <UnifiedCard2 />
      <TransparencySection1 />
      <TransparencySection2 />
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[21.168px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p381a6e00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d={svgPaths.p124a1100} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d="M8.82 7.938H7.056" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d="M14.112 11.466H7.056" id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d="M14.112 14.994H7.056" id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
        </g>
      </svg>
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[42.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[42.336px]">
        <Icon67 />
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M7.056 8.82V1.764" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p2a47e680} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p3d74d00} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[28.224px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28.224px]">
        <Icon68 />
      </div>
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p24268600} id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p282ee000} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p3abda300} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 grow h-[28.224px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28.224px] items-center justify-center relative w-full">
        <Icon69 />
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-[59.976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.528px] h-[28.224px] items-start relative w-[59.976px]">
        <Button15 />
        <Button16 />
      </div>
    </div>
  );
}

function TransparencySection3() {
  return (
    <div className="h-[42.336px] relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[42.336px] items-center justify-between relative w-[166.919px]">
        <Container186 />
        <Container187 />
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex h-[17.64px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">Laporan Keuangan</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[40.131px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(29,29,31,0.6)] top-[0.21px] w-[144px]">APBD 2025 dan realisasi anggaran</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="h-[64.827px] relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.056px] h-[64.827px] items-start relative w-[166.919px]">
        <Heading33 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[14.112px] opacity-0 relative shrink-0 w-[30.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[30.47px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d1d1f] text-[24px] text-nowrap top-[-1.56px] whitespace-pre">₹2.4T</p>
      </div>
    </div>
  );
}

function Icon70() {
  return (
    <div className="absolute left-[7.94px] size-[10.584px] top-[6.17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1618)" id="Icon">
          <path d={svgPaths.p1ad2ed80} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
          <path d={svgPaths.p190c0200} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
        </g>
        <defs>
          <clipPath id="clip0_1_1618">
            <rect fill="white" height="10.584" width="10.584" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] h-[22.932px] relative rounded-[1.67772e+07px] shrink-0 w-[67.321px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.932px] relative w-[67.321px]">
        <Icon70 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[22.05px] not-italic text-[#008236] text-[12px] text-nowrap top-[4.85px] whitespace-pre">+12.5%</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28.224px] items-center justify-between pl-[15.235px] pr-0 py-0 relative w-full">
          <Text37 />
          <Container189 />
        </div>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.5)] text-nowrap top-[0.44px] whitespace-pre">Total Anggaran</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[44.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[44.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] text-nowrap top-[0.44px] whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[23.566px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[23.566px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] top-[0.44px] w-[24px]">65%</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute content-stretch flex h-[14.112px] items-center justify-between left-0 top-0 w-[166.919px]" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function TransparencySection4() {
  return <div className="bg-gradient-to-r from-[#059669] h-[7.056px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container192() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[7.056px] items-start left-0 rounded-[1.67772e+07px] top-[21.17px] w-0" data-name="Container">
      <TransparencySection4 />
    </div>
  );
}

function Container193() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <Container191 />
      <Container192 />
    </div>
  );
}

function Container194() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container190 />
        <Paragraph23 />
        <Container193 />
      </div>
    </div>
  );
}

function TransparencySection5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container188 />
        <Container194 />
      </div>
    </div>
  );
}

function UnifiedCard10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[14.112px] h-[278.271px] items-start left-[11.72px] opacity-0 pl-[22.05px] pr-px py-[22.05px] rounded-[24px] top-[44.86px] w-[211.018px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection3 />
      <TransparencySection5 />
    </div>
  );
}

function Icon71() {
  return (
    <div className="relative shrink-0 size-[21.168px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d="M14.112 6.174H19.404V11.466" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d={svgPaths.p37460400} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
        </g>
      </svg>
    </div>
  );
}

function Container195() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[42.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[42.336px]">
        <Icon71 />
      </div>
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M7.05602 8.82002V1.764" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p673e360} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p14052e58} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[28.224px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28.224px]">
        <Icon72 />
      </div>
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M8.82 1.764H12.348V5.292" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d="M5.88 8.232L12.348 1.764" id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p3d233800} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="basis-0 grow h-[28.224px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28.224px] items-center justify-center relative w-full">
        <Icon73 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-[59.976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.528px] h-[28.224px] items-start relative w-[59.976px]">
        <Button17 />
        <Button18 />
      </div>
    </div>
  );
}

function TransparencySection6() {
  return (
    <div className="h-[42.336px] relative shrink-0 w-[166.918px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[42.336px] items-center justify-between relative w-[166.918px]">
        <Container195 />
        <Container196 />
      </div>
    </div>
  );
}

function Heading34() {
  return (
    <div className="content-stretch flex h-[17.64px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">Anggaran 2025</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20.066px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(29,29,31,0.6)] text-nowrap top-[0.21px] whitespace-pre">Alokasi dana pembangunan</p>
    </div>
  );
}

function Container197() {
  return (
    <div className="h-[44.762px] relative shrink-0 w-[166.918px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.056px] h-[44.762px] items-start relative w-[166.918px]">
        <Heading34 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[14.112px] opacity-0 relative shrink-0 w-[27.879px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[27.879px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d1d1f] text-[24px] text-nowrap top-[-1.56px] whitespace-pre">₹1.2T</p>
      </div>
    </div>
  );
}

function Icon74() {
  return (
    <div className="absolute left-[7.94px] size-[10.584px] top-[6.17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1618)" id="Icon">
          <path d={svgPaths.p1ad2ed80} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
          <path d={svgPaths.p190c0200} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
        </g>
        <defs>
          <clipPath id="clip0_1_1618">
            <rect fill="white" height="10.584" width="10.584" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container198() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] h-[22.932px] relative rounded-[1.67772e+07px] shrink-0 w-[63.001px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.932px] relative w-[63.001px]">
        <Icon74 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[22.05px] not-italic text-[#008236] text-[12px] text-nowrap top-[4.85px] whitespace-pre">+8.3%</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28.224px] items-center justify-between pl-[13.94px] pr-0 py-0 relative w-full">
          <Text40 />
          <Container198 />
        </div>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.5)] text-nowrap top-[0.44px] whitespace-pre">Pembangunan</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[44.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[44.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] text-nowrap top-[0.44px] whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[23.842px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[23.842px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] top-[0.44px] w-[24px]">45%</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex h-[14.112px] items-center justify-between left-0 top-0 w-[166.918px]" data-name="Container">
      <Text41 />
      <Text42 />
    </div>
  );
}

function TransparencySection7() {
  return <div className="bg-gradient-to-r from-[#059669] h-[7.056px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container201() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[7.056px] items-start left-0 rounded-[1.67772e+07px] top-[21.17px] w-0" data-name="Container">
      <TransparencySection7 />
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <Container200 />
      <Container201 />
    </div>
  );
}

function Container203() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.918px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.918px]">
        <Container199 />
        <Paragraph25 />
        <Container202 />
      </div>
    </div>
  );
}

function TransparencySection8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.918px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[34.177px] h-full items-start relative w-[166.918px]">
        <Container197 />
        <Container203 />
      </div>
    </div>
  );
}

function UnifiedCard11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[14.112px] h-[278.271px] items-start left-[269.71px] opacity-0 pl-[22.05px] pr-px py-[22.05px] rounded-[24px] top-[44.86px] w-[211.018px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection6 />
      <TransparencySection8 />
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[21.168px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p238fd700} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
        </g>
      </svg>
    </div>
  );
}

function Container204() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[42.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[42.336px]">
        <Icon75 />
      </div>
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M7.05597 8.81996V1.76399" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17599" />
          <path d={svgPaths.p1aedff00} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17599" />
          <path d={svgPaths.p76c6dc0} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17599" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[28.224px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28.224px]">
        <Icon76 />
      </div>
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M8.82 1.764H12.348V5.292" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d="M5.88 8.232L12.348 1.764" id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p3d233800} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="basis-0 grow h-[28.224px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28.224px] items-center justify-center relative w-full">
          <Icon77 />
        </div>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-[59.976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.528px] h-[28.224px] items-start relative w-[59.976px]">
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function TransparencySection9() {
  return (
    <div className="h-[42.336px] relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[42.336px] items-center justify-between relative w-[166.919px]">
        <Container204 />
        <Container205 />
      </div>
    </div>
  );
}

function Heading35() {
  return (
    <div className="content-stretch flex h-[17.64px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">e-LAPOR</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[40.131px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(29,29,31,0.6)] top-[0.21px] w-[140px]">Pengaduan dan aspirasi warga</p>
    </div>
  );
}

function Container206() {
  return (
    <div className="h-[64.827px] relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.056px] h-[64.827px] items-start relative w-[166.919px]">
        <Heading35 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[14.112px] opacity-0 relative shrink-0 w-[27.91px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[27.91px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d1d1f] text-[24px] text-nowrap top-[-1.56px] whitespace-pre">1,247</p>
      </div>
    </div>
  );
}

function Icon78() {
  return (
    <div className="absolute left-[7.94px] size-[10.584px] top-[6.17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1427)" id="Icon">
          <path d={svgPaths.p2e8b4140} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.882004" />
          <path d={svgPaths.p3537b980} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.882004" />
        </g>
        <defs>
          <clipPath id="clip0_1_1427">
            <rect fill="white" height="10.584" width="10.584" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container207() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] h-[22.932px] relative rounded-[1.67772e+07px] shrink-0 w-[54.14px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.932px] relative w-[54.14px]">
        <Icon78 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[22.05px] not-italic text-[#008236] text-[12px] text-nowrap top-[4.85px] whitespace-pre">+156</p>
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28.224px] items-center justify-between pl-[13.955px] pr-0 py-0 relative w-full">
          <Text43 />
          <Container207 />
        </div>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.5)] text-nowrap top-[0.44px] whitespace-pre">Laporan Masuk</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[44.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[44.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] text-nowrap top-[0.44px] whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[23.848px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[23.848px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] top-[0.44px] w-[24px]">89%</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex h-[14.112px] items-center justify-between left-0 top-0 w-[166.919px]" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function TransparencySection10() {
  return <div className="bg-gradient-to-r from-[#059669] h-[7.056px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container210() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[7.056px] items-start left-0 rounded-[1.67772e+07px] top-[21.17px] w-0" data-name="Container">
      <TransparencySection10 />
    </div>
  );
}

function Container211() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <Container209 />
      <Container210 />
    </div>
  );
}

function Container212() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container208 />
        <Paragraph27 />
        <Container211 />
      </div>
    </div>
  );
}

function TransparencySection11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container206 />
        <Container212 />
      </div>
    </div>
  );
}

function UnifiedCard12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[14.112px] h-[278.271px] items-start left-[527.69px] opacity-0 pl-[22.05px] pr-px py-[22.05px] rounded-[24px] top-[44.86px] w-[211.018px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection9 />
      <TransparencySection11 />
    </div>
  );
}

function Icon79() {
  return (
    <div className="relative shrink-0 size-[21.168px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p20883230} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d={svgPaths.p303d1480} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
          <path d={svgPaths.p3567b380} id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.764" />
        </g>
      </svg>
    </div>
  );
}

function Container213() {
  return (
    <div className="bg-[rgba(5,150,105,0.1)] relative rounded-[24px] shrink-0 size-[42.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(5,150,105,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[42.336px]">
        <Icon79 />
      </div>
    </div>
  );
}

function Icon80() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M7.056 8.82V1.764" id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p2a47e680} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
          <path d={svgPaths.p3d74d00} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.176" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[28.224px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28.224px]">
        <Icon80 />
      </div>
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[14.112px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p19765300} id="Vector" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17601" />
          <path d={svgPaths.pd6d5f20} id="Vector_2" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17601" />
          <path d={svgPaths.p2478d060} id="Vector_3" stroke="var(--stroke-0, #1D1D1F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.17601" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="basis-0 grow h-[28.224px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28.224px] items-center justify-center relative w-full">
          <Icon81 />
        </div>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-[59.976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.528px] h-[28.224px] items-start relative w-[59.976px]">
        <Button21 />
        <Button22 />
      </div>
    </div>
  );
}

function TransparencySection12() {
  return (
    <div className="h-[42.336px] relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[42.336px] items-center justify-between relative w-[166.919px]">
        <Container213 />
        <Container214 />
      </div>
    </div>
  );
}

function Heading36() {
  return (
    <div className="content-stretch flex h-[17.64px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[16px]">Data Terbuka</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[40.131px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(29,29,31,0.6)] top-[0.21px] w-[129px]">Akses data publik dan statistik</p>
    </div>
  );
}

function Container215() {
  return (
    <div className="h-[64.827px] relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.056px] h-[64.827px] items-start relative w-[166.919px]">
        <Heading36 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function AnimatedCounter() {
  return (
    <div className="content-stretch flex h-[13.01px] items-start relative shrink-0 w-full" data-name="AnimatedCounter">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#1d1d1f] text-[24px] text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[14.112px] opacity-0 relative shrink-0 w-[7.135px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[14.112px] items-start pb-0 pt-[0.441px] px-0 relative w-[7.135px]">
        <AnimatedCounter />
      </div>
    </div>
  );
}

function Icon82() {
  return (
    <div className="absolute left-[7.94px] size-[10.584px] top-[6.17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1618)" id="Icon">
          <path d={svgPaths.p1ad2ed80} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
          <path d={svgPaths.p190c0200} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.881999" />
        </g>
        <defs>
          <clipPath id="clip0_1_1618">
            <rect fill="white" height="10.584" width="10.584" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container216() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] h-[22.932px] relative rounded-[1.67772e+07px] shrink-0 w-[49.626px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.932px] relative w-[49.626px]">
        <Icon82 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[22.05px] not-italic text-[#008236] text-[12px] text-nowrap top-[4.85px] whitespace-pre">+23</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28.224px] items-center justify-between pl-[3.568px] pr-0 py-0 relative w-full">
          <Text46 />
          <Container216 />
        </div>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.5)] text-nowrap top-[0.44px] whitespace-pre">Dataset</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[44.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[44.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] text-nowrap top-[0.44px] whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[14.112px] relative shrink-0 w-[28.569px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.112px] relative w-[28.569px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-[rgba(29,29,31,0.6)] top-[0.44px] w-[29px]">100%</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute content-stretch flex h-[14.112px] items-center justify-between left-0 top-0 w-[166.919px]" data-name="Container">
      <Text47 />
      <Text48 />
    </div>
  );
}

function TransparencySection13() {
  return <div className="bg-gradient-to-r from-[#059669] h-[7.056px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container219() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[7.056px] items-start left-0 rounded-[1.67772e+07px] top-[21.17px] w-0" data-name="Container">
      <TransparencySection13 />
    </div>
  );
}

function Container220() {
  return (
    <div className="h-[28.224px] relative shrink-0 w-full" data-name="Container">
      <Container218 />
      <Container219 />
    </div>
  );
}

function Container221() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container217 />
        <Paragraph29 />
        <Container220 />
      </div>
    </div>
  );
}

function TransparencySection14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[166.919px]" data-name="TransparencySection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14.112px] h-full items-start relative w-[166.919px]">
        <Container215 />
        <Container221 />
      </div>
    </div>
  );
}

function UnifiedCard13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[14.112px] h-[278.271px] items-start left-[785.68px] opacity-0 pl-[22.05px] pr-px py-[22.05px] rounded-[24px] top-[44.86px] w-[211.019px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection12 />
      <TransparencySection14 />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute h-[309.19px] left-[31.36px] opacity-0 top-[373.38px] w-[1008.42px]" data-name="Container">
      <UnifiedCard10 />
      <UnifiedCard11 />
      <UnifiedCard12 />
      <UnifiedCard13 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[27.44px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[414.63px] not-italic text-[#1d1d1f] text-[20px] text-center text-nowrap top-[-0.53px] translate-x-[-50%] whitespace-pre">Portal Transparansi Real-time</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[414.11px] not-italic text-[14px] text-[rgba(29,29,31,0.6)] text-center text-nowrap top-[0.47px] translate-x-[-50%] whitespace-pre">Akses semua data dan laporan pemerintahan dalam satu dashboard interaktif</p>
    </div>
  );
}

function TransparencySection15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.68px] h-[62.72px] items-start left-[24.5px] top-[24.5px] w-[829.08px]" data-name="TransparencySection">
      <Heading37 />
      <Paragraph30 />
    </div>
  );
}

function AnimatedCounter1() {
  return (
    <div className="absolute h-[19.208px] left-[93.75px] top-[14.5px] w-[21.046px]" data-name="AnimatedCounter">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[11px] not-italic text-[#1d1d1f] text-[20px] text-center top-[-2px] translate-x-[-50%] w-[22px]">0T</p>
    </div>
  );
}

function TransparencySection16() {
  return (
    <div className="absolute h-[15.68px] left-[13.33px] top-[38.42px] w-[181.888px]" data-name="TransparencySection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[91.67px] not-italic text-[14px] text-[rgba(29,29,31,0.6)] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Anggaran Tersalur</p>
    </div>
  );
}

function TransparencySection17() {
  return <div className="bg-gradient-to-r from-[#059669] h-[3.136px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container223() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[3.136px] items-start left-[13.33px] rounded-[1.67772e+07px] top-[60.37px] w-0" data-name="Container">
      <TransparencySection17 />
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.3)] h-[76.832px] left-[26.07px] opacity-0 rounded-[20px] top-[9.6px] w-[208.544px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AnimatedCounter1 />
      <TransparencySection16 />
      <Container223 />
    </div>
  );
}

function AnimatedCounter2() {
  return (
    <div className="absolute content-stretch flex h-[19.208px] items-start left-[98.99px] top-[14.5px] w-[10.572px]" data-name="AnimatedCounter">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d1d1f] text-[20px] text-center text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function TransparencySection18() {
  return (
    <div className="absolute h-[15.68px] left-[13.33px] top-[38.42px] w-[181.888px]" data-name="TransparencySection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[91.49px] not-italic text-[14px] text-[rgba(29,29,31,0.6)] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Proyek Selesai</p>
    </div>
  );
}

function TransparencySection19() {
  return <div className="bg-gradient-to-r from-[#059669] h-[3.136px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container225() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[3.136px] items-start left-[13.33px] rounded-[1.67772e+07px] top-[60.37px] w-0" data-name="Container">
      <TransparencySection19 />
    </div>
  );
}

function Container226() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.3)] h-[76.832px] left-[310.27px] opacity-0 rounded-[20px] top-[9.6px] w-[208.544px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AnimatedCounter2 />
      <TransparencySection18 />
      <Container225 />
    </div>
  );
}

function AnimatedCounter3() {
  return (
    <div className="absolute content-stretch flex h-[19.208px] items-start left-[98.99px] top-[14.5px] w-[10.572px]" data-name="AnimatedCounter">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d1d1f] text-[20px] text-center text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function TransparencySection20() {
  return (
    <div className="absolute h-[15.68px] left-[13.33px] top-[38.42px] w-[181.888px]" data-name="TransparencySection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[91.5px] not-italic text-[14px] text-[rgba(29,29,31,0.6)] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Transparansi Skor</p>
    </div>
  );
}

function TransparencySection21() {
  return <div className="bg-gradient-to-r from-[#059669] h-[3.136px] rounded-[1.67772e+07px] shrink-0 to-[#155dfc] w-full" data-name="TransparencySection" />;
}

function Container227() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[3.136px] items-start left-[13.33px] rounded-[1.67772e+07px] top-[60.37px] w-0" data-name="Container">
      <TransparencySection21 />
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute bg-[rgba(242,242,247,0.3)] h-[76.832px] left-[594.47px] opacity-0 rounded-[20px] top-[9.6px] w-[208.544px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AnimatedCounter3 />
      <TransparencySection20 />
      <Container227 />
    </div>
  );
}

function TransparencySection22() {
  return (
    <div className="absolute h-[96.04px] left-[24.5px] top-[118.58px] w-[829.08px]" data-name="TransparencySection">
      <Container224 />
      <Container226 />
      <Container228 />
    </div>
  );
}

function Icon83() {
  return (
    <div className="absolute left-[15.68px] size-[15.68px] top-[11.76px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1580)" id="Icon">
          <path d={svgPaths.p37c5d700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p317ed6c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p1b5fc400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1580">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon84() {
  return (
    <div className="absolute left-[261.33px] size-[15.68px] top-[11.76px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9.8 1.96H13.72V5.88" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d="M6.53333 9.14666L13.72 1.96" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
          <path d={svgPaths.p2126e080} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-emerald-600 h-[39.2px] left-[292.69px] rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[245.98px] w-[292.691px]" data-name="Button">
      <Icon83 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[47.04px] not-italic text-[16px] text-nowrap text-white top-[6.8px] whitespace-pre">Akses Portal Transparansi</p>
      <Icon84 />
    </div>
  );
}

function UnifiedCard14() {
  return (
    <div className="absolute bg-white h-[309.68px] left-[96.53px] opacity-0 rounded-[24px] top-[784.49px] w-[878.08px]" data-name="UnifiedCard2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <TransparencySection15 />
      <TransparencySection22 />
      <Button23 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute h-[1054.97px] left-0 top-[78.4px] w-[1071.14px]" data-name="Container">
      <Container185 />
      <Container222 />
      <UnifiedCard14 />
    </div>
  );
}

function TransparencySection23() {
  return (
    <div className="absolute h-[1211.77px] left-[10.93px] opacity-0 overflow-clip top-[4089.99px] w-[1071.14px]" data-name="TransparencySection">
      <Container183 />
      <Container229 />
    </div>
  );
}

function Heading38() {
  return (
    <div className="absolute content-stretch flex h-[35.28px] items-start left-0 top-0 w-[972.16px]" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1f] text-[30px] text-center tracking-[-0.75px]">Testimoni dan Aspirasi Warga</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[50.164px] left-[156.8px] top-[50.96px] w-[658.56px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[329.34px] not-italic text-[#8e8e93] text-[16px] text-center top-[-1.06px] translate-x-[-50%] w-[649px]">Suara warga adalah prioritas kami. Berikut pengalaman mereka dengan layanan Pemkot Medan</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="h-[101.124px] relative shrink-0 w-full" data-name="Container">
      <Heading38 />
      <Paragraph31 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Budi Santoso</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Warga Medan Barat</p>
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[109.668px]" data-name="Container">
      <Heading39 />
      <Paragraph32 />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[47.04px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.04px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container231 />
      <PrimitiveSpan />
    </div>
  );
}

function Icon85() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d={svgPaths.p11bd8b80} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon86() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d={svgPaths.p11bd8b80} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon87() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon88() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon89() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1391)" id="Icon">
          <path d={svgPaths.p1540ad00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1391">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection1() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon85 />
      <Icon86 />
      <Icon87 />
      <Icon88 />
      <Icon89 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[58.8px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[231px]">{`"Saya ngurus izin usaha cuma 10 menit, mantap! Pelayanannya cepat dan petugas sangat membantu."`}</p>
    </div>
  );
}

function Icon90() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p387f6b00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p2db7580} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection2() {
  return (
    <div className="absolute h-[58.8px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph33 />
      <Icon90 />
    </div>
  );
}

function Card16() {
  return (
    <div className="absolute bg-white h-[264.6px] left-0 rounded-[20px] top-0 w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection />
      <TestimonialsSection1 />
      <TestimonialsSection2 />
    </div>
  );
}

function Heading40() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Siti Nurhaliza</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Ibu Rumah Tangga</p>
    </div>
  );
}

function Container232() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[103.62px]" data-name="Container">
      <Heading40 />
      <Paragraph34 />
    </div>
  );
}

function Text49() {
  return (
    <div className="basis-0 bg-[#f2f2f7] grow h-[47.04px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[47.04px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d1d1f] text-[16px] text-nowrap whitespace-pre">SN</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <Text49 />
    </div>
  );
}

function TestimonialsSection3() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container232 />
      <PrimitiveSpan1 />
    </div>
  );
}

function Icon91() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon92() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon93() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1569)" id="Icon">
          <path d={svgPaths.pbb9edf2} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1569">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon94() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon95() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection4() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon91 />
      <Icon92 />
      <Icon93 />
      <Icon94 />
      <Icon95 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[78.4px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[240px]">{`"Aplikasi e-LAPOR sangat membantu untuk melaporkan masalah di lingkungan. Respon cepat dan solusinya tepat."`}</p>
    </div>
  );
}

function Icon96() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3398c100} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p2fd17100} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection5() {
  return (
    <div className="absolute h-[78.4px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph35 />
      <Icon96 />
    </div>
  );
}

function Card17() {
  return (
    <div className="absolute bg-white h-[264.6px] left-[331.89px] rounded-[20px] top-0 w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection3 />
      <TestimonialsSection4 />
      <TestimonialsSection5 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Ahmad Rahman</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Pengusaha Lokal</p>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[101.974px]" data-name="Container">
      <Heading41 />
      <Paragraph36 />
    </div>
  );
}

function PrimitiveImg1() {
  return (
    <div className="basis-0 grow h-[47.04px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.04px] w-full" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <PrimitiveImg1 />
    </div>
  );
}

function TestimonialsSection6() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container233 />
      <PrimitiveSpan2 />
    </div>
  );
}

function Icon97() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon98() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon99() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon100() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon101() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1381)" id="Icon">
          <path d={svgPaths.p2ff97400} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1381">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection7() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon97 />
      <Icon98 />
      <Icon99 />
      <Icon100 />
      <Icon101 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[58.8px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[244px]">{`"Proses perpanjangan SIUP sekarang lebih mudah online. Tidak perlu antri lama seperti dulu."`}</p>
    </div>
  );
}

function Icon102() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p156c7300} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p1f6c6000} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection8() {
  return (
    <div className="absolute h-[58.8px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph37 />
      <Icon102 />
    </div>
  );
}

function Card18() {
  return (
    <div className="absolute bg-white h-[264.6px] left-[663.78px] rounded-[20px] top-0 w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection6 />
      <TestimonialsSection7 />
      <TestimonialsSection8 />
    </div>
  );
}

function Heading42() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Maria Simbolon</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Mahasiswa</p>
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[100.71px]" data-name="Container">
      <Heading42 />
      <Paragraph38 />
    </div>
  );
}

function PrimitiveImg2() {
  return (
    <div className="basis-0 grow h-[47.04px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.04px] w-full" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <PrimitiveImg2 />
    </div>
  );
}

function TestimonialsSection9() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container234 />
      <PrimitiveSpan3 />
    </div>
  );
}

function Icon103() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d={svgPaths.p11bd8b80} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon104() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d={svgPaths.p11bd8b80} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon105() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon106() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon107() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1391)" id="Icon">
          <path d={svgPaths.p1540ad00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1391">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection10() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon103 />
      <Icon104 />
      <Icon105 />
      <Icon106 />
      <Icon107 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[58.8px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[221px]">{`"Pelayanan pembuatan KTP untuk mahasiswa sangat dipermudah. Terima kasih Pemkot Medan!"`}</p>
    </div>
  );
}

function Icon108() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p387f6b00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p2db7580} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection11() {
  return (
    <div className="absolute h-[58.8px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph39 />
      <Icon108 />
    </div>
  );
}

function Card19() {
  return (
    <div className="absolute bg-white h-[245px] left-0 rounded-[20px] top-[288.12px] w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection9 />
      <TestimonialsSection10 />
      <TestimonialsSection11 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Ridho Tarigan</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Pensiunan</p>
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[89.157px]" data-name="Container">
      <Heading43 />
      <Paragraph40 />
    </div>
  );
}

function PrimitiveImg3() {
  return (
    <div className="basis-0 grow h-[47.04px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.04px] w-full" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <PrimitiveImg3 />
    </div>
  );
}

function TestimonialsSection12() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container235 />
      <PrimitiveSpan4 />
    </div>
  );
}

function Icon109() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon110() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon111() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1569)" id="Icon">
          <path d={svgPaths.pbb9edf2} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1569">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon112() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon113() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1450)" id="Icon">
          <path d={svgPaths.p346a3700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1450">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection13() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon109 />
      <Icon110 />
      <Icon111 />
      <Icon112 />
      <Icon113 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[58.8px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[219px]">{`"Program kesehatan gratis untuk lansia sangat membantu. Petugas ramah dan fasilitas lengkap."`}</p>
    </div>
  );
}

function Icon114() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3398c100} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p2fd17100} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection14() {
  return (
    <div className="absolute h-[58.8px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph41 />
      <Icon114 />
    </div>
  );
}

function Card20() {
  return (
    <div className="absolute bg-white h-[245px] left-[331.89px] rounded-[20px] top-[288.12px] w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection12 />
      <TestimonialsSection13 />
      <TestimonialsSection14 />
    </div>
  );
}

function Heading44() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1d1f] text-[14px] text-nowrap top-[0.47px] whitespace-pre">Linda Wijaya</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[15.68px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8e8e93] text-[12px] text-nowrap top-[0.49px] whitespace-pre">Pegawai Swasta</p>
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.28px] items-start left-[62.72px] top-[5.88px] w-[90.995px]" data-name="Container">
      <Heading44 />
      <Paragraph42 />
    </div>
  );
}

function PrimitiveImg4() {
  return (
    <div className="basis-0 grow h-[47.04px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.04px] w-full" />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[47.04px] top-0" data-name="Primitive.span">
      <PrimitiveImg4 />
    </div>
  );
}

function TestimonialsSection15() {
  return (
    <div className="absolute h-[47.04px] left-[24.5px] top-[24.5px] w-[259.371px]" data-name="TestimonialsSection">
      <Container236 />
      <PrimitiveSpan5 />
    </div>
  );
}

function Icon115() {
  return (
    <div className="absolute left-0 size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon116() {
  return (
    <div className="absolute left-[19.6px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon117() {
  return (
    <div className="absolute left-[39.2px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon118() {
  return (
    <div className="absolute left-[58.8px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1384)" id="Icon">
          <path d={svgPaths.p2ff97400} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1384">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon119() {
  return (
    <div className="absolute left-[78.4px] size-[15.68px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1381)" id="Icon">
          <path d={svgPaths.p2ff97400} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.30667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1381">
            <rect fill="white" height="15.68" width="15.68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TestimonialsSection16() {
  return (
    <div className="absolute h-[15.68px] left-[24.5px] top-[110.74px] w-[259.371px]" data-name="TestimonialsSection">
      <Icon115 />
      <Icon116 />
      <Icon117 />
      <Icon118 />
      <Icon119 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[58.8px] left-0 top-0 w-[259.371px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-[15.68px] text-[#8e8e93] text-[14px] top-[0.47px] w-[243px]">{`"Website baru lebih user-friendly dan informasinya lengkap. Mudah mencari layanan yang dibutuhkan."`}</p>
    </div>
  );
}

function Icon120() {
  return (
    <div className="absolute left-[-7.84px] size-[23.52px] top-[-7.84px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p156c7300} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
          <path d={svgPaths.p1f6c6000} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.96" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialsSection17() {
  return (
    <div className="absolute h-[58.8px] left-[24.5px] top-[161.7px] w-[259.371px]" data-name="TestimonialsSection">
      <Paragraph43 />
      <Icon120 />
    </div>
  );
}

function Card21() {
  return (
    <div className="absolute bg-white h-[245px] left-[663.78px] rounded-[20px] top-[288.12px] w-[308.371px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <TestimonialsSection15 />
      <TestimonialsSection16 />
      <TestimonialsSection17 />
    </div>
  );
}

function Container237() {
  return (
    <div className="h-[533.12px] relative shrink-0 w-full" data-name="Container">
      <Card16 />
      <Card17 />
      <Card18 />
      <Card19 />
      <Card20 />
      <Card21 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[23.52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[486.28px] not-italic text-[#8e8e93] text-[16px] text-center text-nowrap top-[-1.04px] translate-x-[-50%] whitespace-pre">Ingin berbagi pengalaman Anda?</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-emerald-600 h-[41.16px] relative rounded-[16px] shrink-0 w-[156.999px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[41.16px] relative w-[156.999px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[23.52px] not-italic text-[16px] text-nowrap text-white top-[7.78px] whitespace-pre">Tulis Testimoni</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[41.16px] relative rounded-[16px] shrink-0 w-[194.316px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-emerald-600 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[41.16px] relative w-[194.316px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24.5px] not-italic text-[16px] text-emerald-600 text-nowrap top-[7.78px] whitespace-pre">Sampaikan Aspirasi</p>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="h-[41.16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[15.68px] h-[41.16px] items-start justify-center relative w-full">
          <Button24 />
          <Button25 />
        </div>
      </div>
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col gap-[15.68px] h-[80.36px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph44 />
      <Container238 />
    </div>
  );
}

function Container240() {
  return (
    <div className="h-[808.684px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[47.04px] h-[808.684px] items-start px-[15.68px] py-0 relative w-full">
          <Container230 />
          <Container237 />
          <Container239 />
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[934.124px] items-start left-[10.93px] opacity-0 pb-0 pt-[62.72px] px-[33.81px] top-[5323.66px] w-[1071.14px]" data-name="TestimonialsSection">
      <Container240 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[6227.31px] left-0 top-[1097.75px] w-[1093px]" data-name="Main Content">
      <QuickAccess41 />
      <ServicesByPersona8 />
      <NewsSection3 />
      <Container180 />
      <TransparencySection23 />
      <TestimonialsSection18 />
    </div>
  );
}

function Container241() {
  return <div className="absolute h-0 left-0 top-0 w-[1093px]" data-name="Container" />;
}

export default function AppContent() {
  return (
    <div className="bg-white relative size-full" data-name="AppContent">
      <HeroSection19 />
      <Footer2 />
      <MainContent />
      <Container241 />
    </div>
  );
}