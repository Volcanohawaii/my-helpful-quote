/* [Destiny Engineering Report - Global Final Dataset] */

// 0. i18n (✅ 너 메인 코드에서 반드시 필요)
const i18n = {
  ko: {
    title: "운명공학 데이터 분석",
    desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
    nameLabel: "성명(예: 강화산)",
    birthLabel: "양력생일(예: 19900101)",
    btn: "리포트 생성하기",
    loadSeal: "분석중",
    loadTitle: "당신의 운명 에너지를 조합 중...",
    loadDesc: "잠시만 기다려 주세요.",

    tab1Btn: "현생 분석",
    tab2Btn: "전생 기록",
    tab3Btn: "내세 예약",

    sec1: "성명학 분석",
    sec2: "에너지 분석",
    sec3: "에너지 보강",
    advise: "현생 조언",
    practice: "실천 사항",
    sideEffect: "과한 보충은 다음의 부작용이 있습니다.",

    tab2Title: "전생 분석 자료",
    tab3Title: "내세 분석 자료",
    pastJob: "전생의 직업",
    pastHomework: "전생의 숙제",
    nextDest: "다음 목적지",
    nextObj: "다음 오브젝트",
    nextMission: "예약 확정을 위한 미션"
  },
  en: {
    title: "Destiny Engineering Analysis",
    desc: "We extract your signature energy from your name and birth date.",
    nameLabel: "Name(Full name)",
    birthLabel: "Birth (YYYYMMDD)",
    btn: "Generate Report",
    loadSeal: "Analyzing",
    loadTitle: "Combining destiny energy...",
    loadDesc: "Please wait a moment.",

    tab1Btn: "Present-Life Analysis",
tab2Btn: "Past-Life Records",
tab3Btn: "Afterlife Reservation",

sec1: "Name Numerology Analysis",
sec2: "Energy Analysis",
sec3: "Energy Reinforcement",
advise: "Advice for This Life",
practice: "Action Items",
sideEffect: "Caution: Side Effects of Over-Supplementing",

tab2Title: "Past-Life Analysis Report",
tab3Title: "Afterlife Analysis Report",
pastJob: "Past-Life Occupation",
pastHomework: "Past-Life Homework",
nextDest: "Next Destination",
nextObj: "Next Object",
nextMission: "Complete the mission to confirm your afterlife reservation"
  }
};

// 1. 분석 기초 데이터
const hangulElements = { 'ㄱ': '木', 'ㄲ': '木', 'ㅋ': '木', 'ㄴ': '火', 'ㄷ': '火', 'ㄸ': '火', 'ㄹ': '火', 'ㅌ': '火', 'ㅇ': '土', 'ㅎ': '土', 'ㅅ': '金', 'ㅆ': '金', 'ㅈ': '金', 'ㅉ': '金', 'ㅊ': '金', 'ㅁ': '水', 'ㅂ': '水', 'ㅃ': '水', 'ㅍ': '水' };
const alphabetElements = { 'A': '木', 'E': '木', 'I': '木', 'O': '木', 'U': '木', 'Y': '木', 'B': '水', 'P': '水', 'M': '水', 'F': '水', 'W': '水', 'C': '火', 'G': '火', 'J': '火', 'L': '火', 'S': '火', 'D': '土', 'N': '土', 'T': '土', 'H': '土', 'K': '金', 'R': '金', 'V': '金', 'X': '金', 'Q': '金', 'Z': '金' };

// ✅ 2. 81수 성명학 데이터 (1~81) - 자동 생성(한/영)
// 9(기본 성향) × 9(전개/결과) = 81 조합

const baseKo = [
  { key:"개척", core:"시작·독립·결단", risk:"독단·조급" },
  { key:"조화", core:"협력·중재·관계", risk:"우유부단·의존" },
  { key:"발전", core:"성장·표현·확장", risk:"산만·과시" },
  { key:"기반", core:"안정·축적·관리", risk:"정체·완고" },
  { key:"중심", core:"균형·통합·리더십", risk:"완벽주의·통제" },
  { key:"책임", core:"의무·봉사·신뢰", risk:"과부담·걱정" },
  { key:"탐구", core:"분석·통찰·전문성", risk:"고립·냉정" },
  { key:"성과", core:"현실화·재물·결실", risk:"집착·과욕" },
  { key:"완성", core:"마무리·지혜·전환", risk:"허무·미련" }
];

const baseEn = [
  { key:"Pioneer", core:"start·independence·decision", risk:"rigidity·haste" },
  { key:"Harmony", core:"cooperation·mediation·relationships", risk:"indecision·dependency" },
  { key:"Growth", core:"expansion·expression·development", risk:"scattered·showy" },
  { key:"Foundation", core:"stability·accumulation·management", risk:"stagnation·stubborn" },
  { key:"Center", core:"balance·integration·leadership", risk:"perfectionism·control" },
  { key:"Duty", core:"responsibility·service·trust", risk:"overload·worry" },
  { key:"Research", core:"analysis·insight·expertise", risk:"isolation·coldness" },
  { key:"Result", core:"materialization·wealth·achievement", risk:"attachment·greed" },
  { key:"Completion", core:"closure·wisdom·transition", risk:"emptiness·regret" }
];

const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

const nameNumerology = (() => {
  const out = {};
  for (let n = 1; n <= 81; n++) {
    const code = String(n).padStart(2, "0");
    const a = (n - 1) % 9;           // 0~8 (기본)
    const b = Math.floor((n - 1) / 9); // 0~8 (전개)
    const ko = baseKo[a], en = baseEn[a];

    out[n] = {
      title: `${code}수 · ${ko.key}(${stageKo[b]})`,
      desc:
        `${ko.core}의 기운이 ‘${stageKo[b]}’ 국면으로 전개됩니다. ` +
        `강점은 ${ko.core}을(를) 구조화해 성과로 묶는 능력이며, ` +
        `주의점은 ${ko.risk} 성향이 과해질 때 흐름이 무너질 수 있다는 점입니다.`,
      titleEn: `No.${code} · ${en.key} (${stageEn[b]})`,
      descEn:
        `Your pattern of ${en.core} develops in the “${stageEn[b]}” phase. ` +
        `Strength: structuring ${en.core} into outcomes. ` +
        `Watch-out: imbalance may show as ${en.risk}.`
    };
  }
  return out;
})();

// 3. 처방 및 속성 (한영 매칭) 12단계(0~11) 처방: 5원소 × 12단계
const elementPrescriptions12 = {
  "木": [
    "초심: 목표를 1개만 정하고 ‘첫 행동’을 실행하세요.",
    "기초: 계획표를 단순화하고 루틴을 고정하세요.",
    "안정: 성장 속도를 유지하되, 검증(피드백)을 붙이세요.",
    "정진: 우선순위 3가지만 남기고 나머지는 보류하세요.",
    "성장: 확장 전에 ‘완료 기준’을 문장으로 정의하세요.",
    "확장: 협업/외주로 속도를 올리되 품질 체크포인트를 두세요.",
    "숙련: 반복 작업을 자동화해 리소스를 회수하세요.",
    "완성: 한 번 더 ‘사용자 관점’에서 흐름을 정리하세요.",
    "정점: 성과를 표준화(템플릿화)해 재현성을 만드세요.",
    "초월: 불필요한 욕심을 덜고 핵심만 남기세요.",
    "대성: 장기 로드맵과 단기 실행을 분리해 운영하세요.",
    "궁극: “내가 안 해도 굴러가는 시스템”을 구축하세요."
  ],
  "火": [
    "초심: 감정 에너지를 ‘작은 실행’으로 전환하세요.",
    "기초: 말보다 기록(메모/일지)이 과열을 잡습니다.",
    "안정: 에너지 소비 시간을 블록으로 나누세요.",
    "정진: 흥분 포인트를 줄이고 집중 포인트를 1개로.",
    "성장: 설득/표현은 강점이니 ‘근거’를 같이 붙이세요.",
    "확장: 무리한 일정은 번아웃을 부릅니다. 휴식도 일정입니다.",
    "숙련: 감정 기복이 오면 운동/호흡으로 온도를 낮추세요.",
    "완성: 열정을 ‘성과물’로 끝까지 마무리하세요.",
    "정점: 주변을 태우지 않도록 톤을 한 단계 낮추세요.",
    "초월: “덜 말하고 더 보여주기”로 신뢰를 올리세요.",
    "대성: 영향력을 확장하되 책임 범위를 명확히 하세요.",
    "궁극: 강한 불은 ‘관리’가 핵심입니다. 규칙을 만드세요."
  ],
  "土": [
    "초심: 오늘 할 일 1개만 완료해 기반을 만드세요.",
    "기초: 정리/청소/정돈이 운의 흐름을 안정화합니다.",
    "안정: 관계에서 경계(선)를 부드럽게 설정하세요.",
    "정진: 미루는 습관을 끊기 위해 마감 시간을 정하세요.",
    "성장: 책임을 지되 ‘내 몫’과 ‘남의 몫’을 구분하세요.",
    "확장: 과도한 부담은 정체를 만듭니다. 분배하세요.",
    "숙련: 체력·수면·식사, 3요소를 먼저 고정하세요.",
    "완성: 안정감은 강점. 다만 변화도 작은 단위로 시도하세요.",
    "정점: 조용히 끌고 가는 리더십이 빛납니다.",
    "초월: ‘완벽한 안전’은 없습니다. 실험을 허용하세요.",
    "대성: 기반을 키우려면 자원(시간/돈) 관리가 핵심입니다.",
    "궁극: 큰 토는 ‘흐름’이 필요합니다. 정체를 풀어주세요."
  ],
  "金": [
    "초심: 기준을 1개 정하고 그 기준만 지키세요.",
    "기초: 선택지를 줄이면 결정력이 살아납니다.",
    "안정: 말은 짧게, 근거는 명확하게 제시하세요.",
    "정진: 정리·정돈·정산이 강점입니다. 루틴화하세요.",
    "성장: 과한 비판 대신 ‘개선안’까지 제시하면 신뢰가 커집니다.",
    "확장: 규칙을 늘리기 전에 핵심 규칙 3개만 남기세요.",
    "숙련: 관계에서 날이 서면 한 박자 쉬고 말하세요.",
    "완성: 결과물의 완성도를 올리는 마감력이 강합니다.",
    "정점: 원칙을 고집하기보다 ‘상황 적용’을 배우세요.",
    "초월: 상대의 감정을 데이터로 취급하지 마세요. 공감이 필요합니다.",
    "대성: 기준은 유지하되 유연성을 10%만 추가하세요.",
    "궁극: 최고의 금은 ‘공정함+따뜻함’의 균형입니다."
  ],
  "水": [
    "초심: 생각을 멈추고 5분만 실행하세요.",
    "기초: 불안을 줄이려면 정보 입력을 제한하세요.",
    "안정: 깊이는 강점. 다만 ‘결론’을 반드시 적으세요.",
    "정진: 선택 회피 대신 “임시 결론”을 세우세요.",
    "성장: 통찰을 말로만 두지 말고 문서로 구조화하세요.",
    "확장: 멀티태스킹은 감정 소모를 키웁니다. 한 번에 하나씩.",
    "숙련: 과몰입 신호가 오면 산책/수분/수면으로 리셋하세요.",
    "완성: 완성도는 ‘마감’에서 결정됩니다. 마감 시간을 정하세요.",
    "정점: 조용한 영향력으로 주변을 설득할 수 있습니다.",
    "초월: 감정의 바닥으로 내려가기 전에 ‘루틴’이 방패입니다.",
    "대성: 지혜를 나누면 운이 커집니다. 코칭/공유가 좋습니다.",
    "궁극: 물의 힘은 흐름. 집착을 내려놓을수록 강해집니다."
  ]
};

const enPrescriptions12 = {
  "木": [
    "Initiate: Pick one goal and take the first action today.",
    "Foundation: Simplify plans and lock a repeatable routine.",
    "Stability: Keep pace, but add feedback checkpoints.",
    "Discipline: Keep only the top 3 priorities—pause the rest.",
    "Growth: Define a clear “done” criteria before expanding.",
    "Expansion: Scale via collaboration, but keep quality gates.",
    "Mastery: Automate repeat work to recover time.",
    "Completion: Re-check the flow from the user’s perspective.",
    "Apex: Template your wins to make results repeatable.",
    "Transcendence: Remove extra ambition—keep only the core.",
    "Grand Master: Separate long-term roadmap and short-term execution.",
    "Ultimate: Build a system that runs without you."
  ],
  "火": [
    "Initiate: Convert emotion into one small action.",
    "Foundation: Write it down—logs reduce overheating.",
    "Stability: Split energy usage into time blocks.",
    "Discipline: Reduce triggers; focus on one core point.",
    "Growth: Add evidence to your expression for credibility.",
    "Expansion: Rest is part of the schedule—avoid burnout.",
    "Mastery: Use breath/movement to cool down quickly.",
    "Completion: Turn passion into a finished deliverable.",
    "Apex: Lower the tone one step to protect relationships.",
    "Transcendence: Show more, say less—trust rises.",
    "Grand Master: Expand influence with clear responsibility boundaries.",
    "Ultimate: Strong fire needs rules—manage it."
  ],
  "土": [
    "Initiate: Finish one task today to build a base.",
    "Foundation: Declutter—order stabilizes your flow.",
    "Stability: Set soft boundaries in relationships.",
    "Discipline: Set deadlines to stop procrastination.",
    "Growth: Separate your role from others’ responsibilities.",
    "Expansion: Distribute load—excess weight creates stagnation.",
    "Mastery: Lock sleep, food, and movement first.",
    "Completion: Try change in small units, safely.",
    "Apex: Quiet leadership shines when you stay steady.",
    "Transcendence: Perfect safety doesn’t exist—allow experiments.",
    "Grand Master: Resource management is key (time/money).",
    "Ultimate: Keep flow—release stagnation."
  ],
  "金": [
    "Initiate: Choose one standard and follow it consistently.",
    "Foundation: Fewer options → clearer decisions.",
    "Stability: Speak short, reason clearly.",
    "Discipline: Routine your organization and clean-up cycles.",
    "Growth: Replace criticism with a concrete improvement plan.",
    "Expansion: Keep only 3 core rules before adding more.",
    "Mastery: Pause one beat before you speak when tension rises.",
    "Completion: Your finishing power is strong—close it cleanly.",
    "Apex: Learn situational flexibility, not just principles.",
    "Transcendence: Don’t treat feelings as data—add empathy.",
    "Grand Master: Keep standards, add 10% flexibility.",
    "Ultimate: The best Metal balances fairness and warmth."
  ],
  "水": [
    "Initiate: Stop thinking—execute for 5 minutes.",
    "Foundation: Limit input—too much info fuels anxiety.",
    "Stability: Depth is power, but write the conclusion.",
    "Discipline: Make a temporary conclusion instead of avoiding choice.",
    "Growth: Structure your insight into a document.",
    "Expansion: One thing at a time—multitasking drains you.",
    "Mastery: Reset with walk/water/sleep at over-immersion signals.",
    "Completion: Deadlines decide quality—set one.",
    "Apex: Quiet influence can persuade effectively.",
    "Transcendence: Routine is your shield before mood drops.",
    "Grand Master: Sharing wisdom grows your luck—teach/coach.",
    "Ultimate: Flow wins—release attachment."
  ]
};

// ✅ 3-1. 오행 속성
const elementAttributesKo = {
  "木": { name: "나무", trait: "성장과 기획" },
  "火": { name: "불", trait: "열정과 확산" },
  "土": { name: "흙", trait: "안정과 포용" },
  "金": { name: "쇠", trait: "결단과 원칙" },
  "水": { name: "물", trait: "지혜와 유연함" }
};

const elementAttributesEn = {
  "木": { name: "Wood", trait: "Growth & Planning" },
  "火": { name: "Fire", trait: "Passion & Expansion" },
  "土": { name: "Earth", trait: "Stability & Empathy" },
  "金": { name: "Metal", trait: "Logic & Integrity" },
  "水": { name: "Water", trait: "Wisdom & Flexibility" }
};
// ✅ 4. 전생/내세 81개 자동 생성(한/영) + 이유(근거) 포함

const pastJobsKo = [
  "궁중 기록관", "산중 서당 훈장", "전장의 전령", "약초를 다루던 의원", "해상 무역상",
  "조향사", "장인(목공/금속)", "사찰의 수행자", "별을 연구하던 관측자"
];

const pastJobsEn = [
  "Royal Archivist", "Mountain Tutor", "Battle Messenger", "Herbal Healer", "Sea Merchant",
  "Perfumer", "Craft Artisan", "Temple Practitioner", "Star Observer"
];

const nextPlacesKo = [
  "도서관의 서재", "바다 위 등대", "산악 목장", "미래 연구소", "정원 도시",
  "예술 작업실", "우주 정거장", "고요한 호숫가", "영화 촬영장"
];

const nextPlacesEn = [
  "Library Study", "Ocean Lighthouse", "Mountain Ranch", "Future Lab", "Garden City",
  "Art Studio", "Space Station", "Quiet Lakeside", "Movie Set"
];

const objectsKo = [
  "기록서", "나침반", "도구 상자", "약병", "무역 장부",
  "향수 병", "정밀한 칼", "염주", "망원경"
];

const objectsEn = [
  "Record Book", "Compass", "Toolbox", "Medicine Vial", "Trade Ledger",
  "Perfume Bottle", "Precision Blade", "Prayer Beads", "Telescope"
];

// 전생/내세의 “이유” 문장(오행 과다/부족을 신비롭게 설명)
const reasonKo = {
  "木": "성장과 확장의 기운이 강해 ‘개척/기획’ 계열의 전생 흔적이 짙습니다.",
  "火": "표현과 확산의 기운이 강해 ‘열정/무대’ 계열의 전생 흔적이 짙습니다.",
  "土": "기반과 포용의 기운이 강해 ‘돌봄/관리’ 계열의 전생 흔적이 짙습니다.",
  "金": "원칙과 결단의 기운이 강해 ‘정리/규율’ 계열의 전생 흔적이 짙습니다.",
  "水": "통찰과 유연의 기운이 강해 ‘탐구/치유’ 계열의 전생 흔적이 짙습니다."
};

const reasonEn = {
  "木": "Your energy leans toward growth and expansion, leaving a strong “pioneer/planner” past-life trace.",
  "火": "Your energy leans toward expression and spread, leaving a strong “passion/stage” past-life trace.",
  "土": "Your energy leans toward foundation and support, leaving a strong “care/management” past-life trace.",
  "金": "Your energy leans toward principles and decisions, leaving a strong “order/discipline” past-life trace.",
  "水": "Your energy leans toward insight and flexibility, leaving a strong “research/healing” past-life trace."
};

// 81개 만들기
const pastLifeData = Array.from({ length: 81 }, (_, i) => {
  const n = i + 1;
  const a = (n - 1) % 9;
  const b = Math.floor((n - 1) / 9);
  return {
    job: pastJobsKo[a],
    desc: `(${String(n).padStart(2,"0")}수 성향) ${baseKo[a].core} 흐름이 전생에서 ‘${stageKo[b]}’로 발현된 흔적입니다.`,
    homework: `이번 생의 숙제: ${baseKo[a].risk}을(를) 조절하며 ${baseKo[a].core}을(를) 성과로 고정하기.`
  };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
  const n = i + 1;
  const a = (n - 1) % 9;
  const b = Math.floor((n - 1) / 9);
  return {
    job: pastJobsEn[a],
    desc: `(No.${String(n).padStart(2,"0")}) Your ${baseEn[a].core} pattern showed a “${stageEn[b]}” past-life trace.`,
    homework: `Homework: regulate ${baseEn[a].risk} and stabilize ${baseEn[a].core} into outcomes.`
  };
});

const reincarnationData = Array.from({ length: 81 }, (_, i) => {
  const n = i + 1;
  const a = (n - 1) % 9;
  const b = Math.floor((n - 1) / 9);
  return {
    place: nextPlacesKo[b],
    object: objectsKo[a],
    mission: `(${String(n).padStart(2,"0")}수 미션) ${baseKo[a].core}을(를) ‘${stageKo[b]}’ 단계로 완성하기.`
  };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
  const n = i + 1;
  const a = (n - 1) % 9;
  const b = Math.floor((n - 1) / 9);
  return {
    place: nextPlacesEn[b],
    object: objectsEn[a],
    mission: `(No.${String(n).padStart(2,"0")}) Complete ${baseEn[a].core} to reach the “${stageEn[b]}” phase.`
  };
});

// 5. 부작용 및 명언
const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "전생이 바위였던 듯한 멍함", "양말 한 짝 영원히 실종", "냉장고 소스 유통기한 점검 강박", "뜬금없는 윙크 발사", "거울 속 내 모습에 취함", "왼쪽 콧구멍만 간지러움"];
const sideEffectsEn = ["Unstoppable dessert cravings", "Urge to back-talk everyone", "Spells of rock-like zoning out", "Mysterious loss of one sock forever", "Obsessive checking of sauce dates", "Involuntary winking syndrome", "Dazzled by your own mirror image", "An itch in specifically your left nostril"];

const quoteData = { "인생": [ { text: "모든 꽃은 저마다의 시간에 핀다." }, { text: "속도보다 중요한 것은 방향이다." }, { text: "지금 그대로 당신은 충분하다." }, { text: "어두운 밤일수록 별은 빛난다." } ] };
const quoteDataEn = { "life": [ { text: "Every flower blooms in its own time." }, { text: "Direction is more important than speed." }, { text: "You are enough exactly as you are." }, { text: "The darker the night, the brighter the stars." } ] };

// 6. 닉네임
const nicknamesKo60 = {
  "木": tierKo.map(t => `목(木)의 ${t} 설계자`),
  "火": tierKo.map(t => `화(火)의 ${t} 촉진자`),
  "土": tierKo.map(t => `토(土)의 ${t} 기반가`),
  "金": tierKo.map(t => `금(金)의 ${t} 결단자`),
  "水": tierKo.map(t => `수(水)의 ${t} 통찰가`)
};

const nicknamesEn60 = {
  "木": tierEn.map(t => `${t} Wood Architect`),
  "火": tierEn.map(t => `${t} Fire Catalyst`),
  "土": tierEn.map(t => `${t} Earth Builder`),
  "金": tierEn.map(t => `${t} Metal Decider`),
  "水": tierEn.map(t => `${t} Water Seer`)
};
