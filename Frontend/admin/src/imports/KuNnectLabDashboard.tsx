import svgPaths from "./svg-11dwzknerj";
import imgImageWithFallback from "figma:asset/179432017b8aa99523aa5b803b64a24cf225af37.png";
import imgImageWithFallback1 from "figma:asset/4bf9bd43789e1ca88722be496e42dcfdc7d6d9de.png";
import imgImageWithFallback2 from "figma:asset/fd7c45d873a7233f83d4debc44e7e809e553fbba.png";
import imgImageWithFallback3 from "figma:asset/cfc1845553d5f5393389f2f566f5fbef7000f264.png";

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[80px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#a1121a] left-[59.03px] size-[33.941px] top-[59.03px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-white left-[97.2px] overflow-clip rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-[80px]" data-name="Container">
      <ImageWithFallback />
      <Container />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 size-[80px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#a1121a] left-[64px] size-[24px] top-[-8px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-white left-[775.37px] overflow-clip rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-[128px]" data-name="Container">
      <ImageWithFallback1 />
      <Container2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-0 size-[80px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#a1121a] left-[-8px] size-[24px] top-[64px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute bg-white left-[77.76px] overflow-clip rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-[407px]" data-name="Container">
      <ImageWithFallback2 />
      <Container4 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute left-0 size-[80px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#a1121a] left-[-12.97px] size-[33.941px] top-[-12.97px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute bg-white left-[794.8px] overflow-clip rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-[375px]" data-name="Container">
      <ImageWithFallback3 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-gradient-to-t from-[#f9fafb] h-[128px] left-0 to-[rgba(0,0,0,0)] top-[487px] w-[972px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_198)" id="Icon">
          <path d={svgPaths.p1a8ec300} id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_198">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20px] left-[41px] top-[9px] w-[150.188px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[75.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">내 프로필 카드 작성하기</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white h-[38px] left-[381.91px] rounded-[1.67772e+07px] top-0 w-[208.188px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Icon />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[71px] items-start left-[249px] top-0 w-[517px]" data-name="Text">
      <p className="font-['Paperlogy:8_ExtraBold',sans-serif] leading-[75px] not-italic relative shrink-0 text-[#101828] text-[60px] text-center text-nowrap tracking-[0.2637px] whitespace-pre">나에게 맞는 연구실을</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute box-border content-stretch flex h-[70.5px] items-start left-[369px] pb-0 pt-[7px] px-0 top-[61px]" data-name="Text">
      <p className="font-['Paperlogy:8_ExtraBold',sans-serif] leading-[75px] not-italic relative shrink-0 text-[#101828] text-[60px] text-center text-nowrap tracking-[0.2637px] whitespace-pre">발견하세요</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[150px] left-[-2px] top-[70px] w-[924px]" data-name="Heading 1">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[98px] left-[102px] top-[244px] w-[688px]" data-name="Paragraph">
      <div className="absolute font-['Pretendard:Regular',sans-serif] leading-[32.5px] left-[385px] not-italic text-[#4a5565] text-[20px] text-center top-0 tracking-[-0.4492px] translate-x-[-50%] w-[670px]">
        <p className="mb-0">{`KuNnect는 고려대학교 학생들이 최첨단 연구실을 쉽고 친숙하게 탐색할 수 있도록 돕는 AI 기반 안내 플랫폼입니다. `}</p>
        <p>당신에게 가장 잘 맞는 연구실을 찾을 수 있도록 스마트한 인사이트를 제공합니다.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[407px] left-0 top-[80px] w-[972px]" data-name="Container">
      <Container9 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function HeroBanner() {
  return (
    <div className="bg-[#fbfbf9] h-[615px] overflow-clip relative shrink-0 w-full" data-name="HeroBanner">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p462d500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 10V16" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2b645f80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-gradient-to-b from-[#a1121a] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[40px] to-[#8a0f16]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[18.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Paperlogy:7_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a1121a] text-[16px] text-nowrap whitespace-pre">KuNnect</p>
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3px] h-[24px] items-start pb-0 pt-[3.5px] px-0 relative w-full">
        <Text3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[41px] relative shrink-0 w-[114.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[41px] items-center relative w-[114.641px]">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Icon2 />
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">랩실 탐색하기</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72.453px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[72.453px]">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[15.45px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">내 프로필</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[293.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[40px] items-center relative w-[293.508px]">
        <Link />
        <Link1 />
        <Button />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[65px] items-start pb-px pt-0 px-[24px] relative shrink-0 w-[972px]" data-name="NavBar">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container15 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-0 top-[54px] w-[924px]" data-name="Heading 2">
      <p className="absolute font-['Paperlogy:7_Bold',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-neutral-950 text-nowrap top-[0.5px] tracking-[0.3691px] whitespace-pre">랩실 탐색하기</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[102px] w-[924px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">당신의 관심과 목표에 딱 맞는 연구실을 찾아보세요.</p>
    </div>
  );
}

function App() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="App">
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[50px] left-0 rounded-[10px] top-0 w-[924px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[50px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[924px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">연구실, 키워드 또는 분야를 검색하세요</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="SearchInput">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function TagChip() {
  return (
    <div className="absolute bg-[#f2f5de] h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[87.367px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">인공지능</p>
    </div>
  );
}

function TagChip1() {
  return (
    <div className="absolute bg-[#ece0d9] h-[40px] left-[95.37px] rounded-[1.67772e+07px] top-0 w-[73.523px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">뇌공학</p>
    </div>
  );
}

function TagChip2() {
  return (
    <div className="absolute bg-[#f0efed] h-[40px] left-[176.89px] rounded-[1.67772e+07px] top-0 w-[128.883px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">데이터사이언스</p>
    </div>
  );
}

function TagChip3() {
  return (
    <div className="absolute bg-[#e9ddf3] h-[40px] left-[313.77px] rounded-[1.67772e+07px] top-0 w-[101.203px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">컴퓨터비전</p>
    </div>
  );
}

function TagChip4() {
  return (
    <div className="absolute bg-[#f6dce4] h-[40px] left-[422.98px] rounded-[1.67772e+07px] top-0 w-[58.672px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">HCI</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <TagChip />
      <TagChip1 />
      <TagChip2 />
      <TagChip3 />
      <TagChip4 />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[106px] items-start relative shrink-0 w-full" data-name="FilterBar">
      <SearchInput />
      <Container16 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`AI & Machine Learning Lab`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Kim</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[390px]">인공지능과 머신러닝 기술을 활용한 지능형 시스템 연구를 수행합니다.</p>
    </div>
  );
}

function TagChip5() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[87.367px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">인공지능</p>
    </div>
  );
}

function TagChip6() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[95.37px] rounded-[1.67772e+07px] top-0 w-[128.883px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">데이터사이언스</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[157px] w-[400px]" data-name="Container">
      <TagChip5 />
      <TagChip6 />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[213px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading2 />
      <Paragraph3 />
      <Paragraph4 />
      <Container17 />
      <PrimaryButton />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Brain-Computer Interface Lab</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Lee</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[48px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">뇌-컴퓨터 인터페이스 기술과 신경공학 연구를 진행합니다.</p>
    </div>
  );
}

function TagChip7() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[73.523px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">뇌공학</p>
    </div>
  );
}

function TagChip8() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[81.52px] rounded-[1.67772e+07px] top-0 w-[58.672px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">HCI</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[157px] w-[400px]" data-name="Container">
      <TagChip7 />
      <TagChip8 />
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[213px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading3 />
      <Paragraph5 />
      <Paragraph6 />
      <Container18 />
      <PrimaryButton1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Computer Vision Research Lab</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Park</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">영상 처리 및 컴퓨터 비전 기술 개발과 응용 연구를 수행합니다.</p>
    </div>
  );
}

function TagChip9() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[101.203px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">컴퓨터비전</p>
    </div>
  );
}

function TagChip10() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[109.2px] rounded-[1.67772e+07px] top-0 w-[87.367px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">인공지능</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[133px] w-[400px]" data-name="Container">
      <TagChip9 />
      <TagChip10 />
    </div>
  );
}

function PrimaryButton2() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[189px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard2() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading4 />
      <Paragraph7 />
      <Paragraph8 />
      <Container19 />
      <PrimaryButton2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`Data Science & Analytics Lab`}</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Choi</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">빅데이터 분석 및 데이터 기반 의사결정 시스템을 연구합니다.</p>
    </div>
  );
}

function TagChip11() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[128.883px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">데이터사이언스</p>
    </div>
  );
}

function TagChip12() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[136.88px] rounded-[1.67772e+07px] top-0 w-[87.367px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">인공지능</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[133px] w-[400px]" data-name="Container">
      <TagChip11 />
      <TagChip12 />
    </div>
  );
}

function PrimaryButton3() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[189px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard3() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading5 />
      <Paragraph9 />
      <Paragraph10 />
      <Container20 />
      <PrimaryButton3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Human-Computer Interaction Lab</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Jung</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">사용자 경험과 인터랙션 디자인을 연구하는 연구실입니다.</p>
    </div>
  );
}

function TagChip13() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[58.672px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">HCI</p>
    </div>
  );
}

function TagChip14() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[66.67px] rounded-[1.67772e+07px] top-0 w-[87.367px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">인공지능</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[133px] w-[400px]" data-name="Container">
      <TagChip13 />
      <TagChip14 />
    </div>
  );
}

function PrimaryButton4() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[189px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard4() {
  return (
    <div className="[grid-area:3_/_1] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading6 />
      <Paragraph11 />
      <Paragraph12 />
      <Container21 />
      <PrimaryButton4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[400px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Neural Engineering Lab</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[57px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prof. Han</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[93px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">신경 시스템 모델링 및 뇌 신호 처리 기술을 연구합니다.</p>
    </div>
  );
}

function TagChip15() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 rounded-[1.67772e+07px] top-0 w-[73.523px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">뇌공학</p>
    </div>
  );
}

function TagChip16() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-[81.52px] rounded-[1.67772e+07px] top-0 w-[128.883px]" data-name="TagChip">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[7.5px] tracking-[-0.3125px] whitespace-pre">데이터사이언스</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[40px] left-[25px] top-[133px] w-[400px]" data-name="Container">
      <TagChip15 />
      <TagChip16 />
    </div>
  );
}

function PrimaryButton5() {
  return (
    <div className="absolute bg-[#a1121a] h-[40px] left-[25px] rounded-[10px] top-[189px] w-[400px]" data-name="PrimaryButton">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[7.5px] tracking-[-0.3125px] whitespace-pre">View Lab</p>
    </div>
  );
}

function LabCard5() {
  return (
    <div className="[grid-area:3_/_2] bg-white relative rounded-[10px] shrink-0" data-name="LabCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading7 />
      <Paragraph13 />
      <Paragraph14 />
      <Container22 />
      <PrimaryButton5 />
    </div>
  );
}

function App1() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[278px_254px_minmax(0px,_1fr)] h-[834px] relative shrink-0 w-full" data-name="App">
      <LabCard />
      <LabCard1 />
      <LabCard2 />
      <LabCard3 />
      <LabCard4 />
      <LabCard5 />
    </div>
  );
}

function PageContainer() {
  return (
    <div className="bg-[rgba(41,40,40,0)] h-[1242px] relative shrink-0 w-full" data-name="PageContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[1242px] items-start pb-0 pt-[32px] px-[24px] relative w-full">
          <App />
          <FilterBar />
          <App1 />
        </div>
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="absolute bg-[#f7f7f8] box-border content-stretch flex flex-col h-[1922px] items-start left-0 pb-0 pt-[65px] px-0 top-0 w-[972px]" data-name="App">
      <HeroBanner />
      <NavBar />
      <PageContainer />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1a1dc120} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ChatPanel() {
  return (
    <div className="absolute bg-[#a1121a] box-border content-stretch flex items-center justify-center left-[892px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[873px]" data-name="ChatPanel">
      <Icon5 />
    </div>
  );
}

export default function KuNnectLabDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="KuNnect Lab Dashboard">
      <App2 />
      <ChatPanel />
    </div>
  );
}