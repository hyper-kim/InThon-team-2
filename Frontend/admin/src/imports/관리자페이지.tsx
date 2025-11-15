import svgPaths from "./svg-yfncfzhrme";

function Heading1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Paperlogy:7_Bold',sans-serif] leading-[54px] left-[529.5px] not-italic text-[#101828] text-[40px] text-center top-0 translate-x-[-50%] w-[1059px]">연구실 관리자 페이지</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[468px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[527px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] tracking-[-0.3125px] translate-x-[-50%] w-[1054px]">이 페이지에서 연구실 기본 정보, 면담 가능 시간, 모집 공고를 수정할 수 있습니다.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f2f5de] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">기본 정보 수정</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">연구실의 기본 정보를 업데이트하세요</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[234.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[234.008px]">
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-white h-[86px] relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[86px] items-center pl-[24px] pr-0 py-0 relative w-[1057px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">연구실 이름</p>
    </div>
  );
}

function Input() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f3f3f5] relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">연구실 이름을 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">교수명</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f3f3f5] relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">교수명을 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">연구실 설명</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f3f3f5] relative rounded-[10px] shrink-0" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">연구실에 대한 설명을 입력하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[142px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Textarea />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">이메일</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f3f3f5] relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">example@korea.ac.kr</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function AdminDashboard1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start pb-0 pt-[24px] px-[24px] relative w-[1057px]">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[566px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[566px] items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <AdminDashboard />
        <AdminDashboard1 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_992)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_6_992">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#ece0d9] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">면담 가능 시간 관리</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">학생들이 면담 신청할 수 있는 시간대를 설정하세요</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[40px] relative shrink-0 w-[315.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[315.766px]">
        <CardTitle1 />
        <CardDescription1 />
      </div>
    </div>
  );
}

function AdminDashboard2() {
  return (
    <div className="bg-white h-[86px] relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[86px] items-center pl-[24px] pr-0 py-0 relative w-[1057px]">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.328px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">요일</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.328px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[314.328px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">월요일</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[314.328px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.336px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">시작 시간</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.336px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[62px] left-[330.33px] top-0 w-[314.336px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.336px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">종료 시간</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.336px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[62px] left-[660.66px] top-0 w-[314.336px]" data-name="Container">
      <PrimitiveLabel6 />
      <Input5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[62px] left-[17px] top-[17px] w-[975px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[32px] left-[917.77px] rounded-[8px] top-[91px] w-[74.227px]" data-name="Button">
      <Icon2 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#a1121a] text-[14px] text-nowrap top-[6.5px] tracking-[-0.1504px] whitespace-pre">삭제</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#fbfbf9] h-[140px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container12 />
      <Button />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.328px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">요일</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.328px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[314.328px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">수요일</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[62px] left-0 top-0 w-[314.328px]" data-name="Container">
      <PrimitiveLabel7 />
      <Input6 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.336px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">시작 시간</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.336px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[62px] left-[330.33px] top-0 w-[314.336px]" data-name="Container">
      <PrimitiveLabel8 />
      <Input7 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[14px] items-center left-0 top-0 w-[314.336px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">종료 시간</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-[22px] w-[314.336px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[62px] left-[660.66px] top-0 w-[314.336px]" data-name="Container">
      <PrimitiveLabel9 />
      <Input8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[62px] left-[17px] top-[17px] w-[975px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[32px] left-[917.77px] rounded-[8px] top-[91px] w-[74.227px]" data-name="Button">
      <Icon3 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#a1121a] text-[14px] text-nowrap top-[6.5px] tracking-[-0.1504px] whitespace-pre">삭제</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#fbfbf9] h-[140px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container17 />
      <Button1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[448.49px] size-[16px] top-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon4 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[480.49px] not-italic text-[14px] text-neutral-950 text-nowrap top-[15.5px] tracking-[-0.1504px] whitespace-pre">새 시간대 추가</p>
    </div>
  );
}

function AdminDashboard3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start pb-0 pt-[24px] px-[24px] relative w-[1057px]">
        <Container13 />
        <Container18 />
        <Button2 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[522px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[522px] items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <AdminDashboard2 />
        <AdminDashboard3 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#e9ddf3] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon5 />
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">모집 공고 관리</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">학생 모집 공고를 작성하고 관리하세요</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[40px] relative shrink-0 w-[238.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[238.195px]">
        <CardTitle2 />
        <CardDescription2 />
      </div>
    </div>
  );
}

function AdminDashboard4() {
  return (
    <div className="bg-white h-[86px] relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[86px] items-center pl-[24px] pr-0 py-0 relative w-[1057px]">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 제목</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">예: 2024 봄학기 학부연구생 모집</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] left-0 top-0 w-[959px]" data-name="Container">
      <PrimitiveLabel10 />
      <Input9 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">모집 분야</p>
    </div>
  );
}

function Input10() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">예: 머신러닝, 딥러닝</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] left-0 top-[88px] w-[959px]" data-name="Container">
      <PrimitiveLabel11 />
      <Input10 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 내용</p>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 내용을 자세히 작성하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[142px] left-0 top-[176px] w-[959px]" data-name="Container">
      <PrimitiveLabel12 />
      <Textarea1 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">모집 인원</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_1] gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] relative shrink-0" data-name="Container">
      <PrimitiveLabel13 />
      <Input11 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">마감일</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_2] gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] relative shrink-0" data-name="Container">
      <PrimitiveLabel14 />
      <Input12 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[62px] left-0 top-[334px] w-[959px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[412px] w-[959px]" data-name="Primitive.div" />;
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[36px] left-[850.88px] rounded-[8px] top-[429px] w-[108.125px]" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#a1121a] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">공고 삭제</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[465px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
      <Container26 />
      <PrimitiveDiv />
      <Button3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#fbfbf9] h-[515px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[515px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveLabel15() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 제목</p>
    </div>
  );
}

function Input13() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">예: 대학원생 모집</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] left-0 top-0 w-[959px]" data-name="Container">
      <PrimitiveLabel15 />
      <Input13 />
    </div>
  );
}

function PrimitiveLabel16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">모집 분야</p>
    </div>
  );
}

function Input14() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">예: 컴퓨터비전, 자연어처리</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[72px] left-0 top-[88px] w-[959px]" data-name="Container">
      <PrimitiveLabel16 />
      <Input14 />
    </div>
  );
}

function PrimitiveLabel17() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 내용</p>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">공고 내용을 자세히 작성하세요</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] h-[142px] left-0 top-[176px] w-[959px]" data-name="Container">
      <PrimitiveLabel17 />
      <Textarea2 />
    </div>
  );
}

function PrimitiveLabel18() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">모집 인원</p>
    </div>
  );
}

function Input15() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="[grid-area:1_/_1] gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] relative shrink-0" data-name="Container">
      <PrimitiveLabel18 />
      <Input15 />
    </div>
  );
}

function PrimitiveLabel19() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Primitive.label">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">마감일</p>
    </div>
  );
}

function Input16() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[10px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_2] gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[14px_minmax(0px,_1fr)] relative shrink-0" data-name="Container">
      <PrimitiveLabel19 />
      <Input16 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[62px] left-0 top-[334px] w-[959px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[412px] w-[959px]" data-name="Primitive.div" />;
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #A1121A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[36px] left-[850.88px] rounded-[8px] top-[429px] w-[108.125px]" data-name="Button">
      <Icon7 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#a1121a] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">공고 삭제</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[465px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
      <Container34 />
      <PrimitiveDiv1 />
      <Button4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#fbfbf9] h-[515px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[515px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[440.59px] size-[16px] top-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon8 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[472.59px] not-italic text-[14px] text-neutral-950 text-nowrap top-[15.5px] tracking-[-0.1504px] whitespace-pre">새 모집 공고 추가</p>
    </div>
  );
}

function AdminDashboard5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-[1057px]" data-name="AdminDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start pb-0 pt-[24px] px-[24px] relative w-[1057px]">
        <Container28 />
        <Container36 />
        <Button5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[1288px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[1288px] items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <AdminDashboard4 />
        <AdminDashboard5 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[2520px] items-start relative shrink-0 w-full" data-name="Form">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function AdminDashboard6() {
  return (
    <div className="absolute bg-[#fbfbf9] box-border content-stretch flex flex-col gap-[32px] h-[2859px] items-start left-0 pb-0 pt-[109px] px-[24px] top-0 w-[1107px]" data-name="AdminDashboard">
      <Container />
      <Form />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[449.27px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#a1121a] h-[56px] left-[24px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[755px] w-[1059px]" data-name="Button">
      <Icon9 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] left-[481.27px] not-italic text-[14px] text-nowrap text-white top-[18.5px] tracking-[-0.1504px] whitespace-pre">모든 변경사항 저장하기</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-gradient-to-b from-[#a1121a] relative rounded-[10px] shrink-0 size-[40px] to-[#8a0f16]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Paperlogy:7_Bold',sans-serif] leading-[24px] left-0 not-italic text-[#a1121a] text-[16px] text-nowrap top-[0.5px] whitespace-pre">KuNnect</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">연구실 관리 시스템</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[44px] relative shrink-0 w-[104.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[104.461px]">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function AdminDashboard7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[77px] items-start left-0 pb-px pt-[16px] px-[24px] top-0 w-[1107px]" data-name="AdminDashboard">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container39 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="관리자 페이지">
      <AdminDashboard6 />
      <Button6 />
      <AdminDashboard7 />
    </div>
  );
}