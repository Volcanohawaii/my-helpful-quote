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

// ✅ 2. 성명학 수리 데이터 (1~60번) : 5원소 × 12단계 = 60격
const ELEMENTS = ["木","火","土","金","水"];

const tierKo = ["초심","기초","안정","정진","성장","확장","숙련","완성","정점","초월","대성","궁극"];
const tierEn = ["Initiate","Foundation","Stability","Discipline","Growth","Expansion","Mastery","Completion","Apex","Transcendence","Grand Master","Ultimate"];

const elementProfile = {
  "木": { ko:{name:"목(木)", key:"성장·기획·개척", risk:"조급함·독단"},
          en:{name:"Wood", key:"growth·planning·initiative", risk:"impatience·rigidity"} },
  "火": { ko:{name:"화(火)", key:"열정·표현·확산", risk:"번아웃·과열"},
          en:{name:"Fire", key:"passion·expression·expansion", risk:"burnout·overheat"} },
  "土": { ko:{name:"토(土)", key:"안정·포용·기반", risk:"정체·고집"},
          en:{name:"Earth", key:"stability·support·foundation", risk:"stagnation·stubbornness"} },
  "金": { ko:{name:"금(金)", key:"결단·원칙·정리", risk:"비판·냉정"},
          en:{name:"Metal", key:"decision·principle·order", risk:"harshness·over-critique"} },
  "水": { ko:{name:"수(水)", key:"지혜·유연·통찰", risk:"우울·과몰입"},
          en:{name:"Water", key:"wisdom·flexibility·insight", risk:"melancholy·overthinking"} }
};

const nameNumerology = (() => {
  const out = {};
  let idx = 1;
  for (const el of ELEMENTS) {
  for (let t = 0; t < 12; t++) {
    const p = elementProfile[el];
    const code = String(idx).padStart(2, "0");

    out[idx] = {
      title: `${code}격 · ${p.ko.name} ${tierKo[t]}형`,
      desc:
          `${p.ko.key} 성향이 ${tierKo[t]} 단계로 발현됩니다. ` +
          `강점은 ‘${p.ko.key}’의 구조화 능력이며, ` +
          `주의점은 ‘${p.ko.risk}’이 과해질 때 균형이 무너질 수 있다는 점입니다.`,
         titleEn: `Type ${code} · ${tierEn[t]} ${p.en.name}`,
        descEn:
          `Your ${p.en.key} pattern expresses at the ${tierEn[t]} level. ` +
          `Strength: structured use of ${p.en.key}. ` +
          `Watch-out: imbalance may appear as ${p.en.risk}.`
      };
      idx++;
    }
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
// 4. 전생/내세
const pastLifeData = [
  { job: "달빛 아래 시를 쓰던 선비", desc: "학문에 정진했으나 세상의 풍파는 피하려 했던 고결한 영혼이었습니다.", homework: "나의 재능을 세상에 당당히 드러내기" },
  { job: "궁궐의 낮잠 자던 삼색 고양이", desc: "평화로운 기운으로 주변을 치유했으나 자립심은 조금 부족했군요.", homework: "스스로 일어서는 독립심 기르기" },
  { job: "비밀 정원을 가꾸던 은둔 정원사", desc: "꽃들과 대화하며 조용히 자신만의 세계를 완성했습니다.", homework: "세상 밖으로 나와 사람들과 소통하기" },
  { job: "고려시대 차(茶)를 달이던 최고 장인", desc: "한 잔의 차에 온 우주를 담기 위해 평생을 바친 완벽주의자였습니다.", homework: "조급함을 버리고 기다림의 미학 배우기" },
  { job: "마을의 지혜로운 할머니 약사", desc: "풀뿌리와 꽃잎으로 이웃의 아픈 마음을 치유해 주던 성자였습니다.", homework: "배려하는 마음으로 주변 돌보기" },
  { job: "숲의 지혜를 지키던 파수꾼", desc: "수천 년을 살며 대자연의 흐름을 읽던 고대 숲의 수호신이었습니다.", homework: "새로운 변화를 두려워하지 않기" },
  { job: "장희빈의 비밀 조향사", desc: "사람의 마음을 홀리는 향기를 연구하던 매력적인 인물이었습니다.", homework: "누군가에게 휘둘리지 않는 주관 갖기" },
  { job: "궁중 무용의 주인공", desc: "아름다운 몸짓으로 왕의 마음까지 사로잡았던 전설의 무용수였습니다.", homework: "자신의 열정을 올바른 곳에 쏟기" },
  { job: "성가대의 목소리 좋은 솔리스트", desc: "천상의 목소리로 사람들의 영혼을 울리던 신의 목소리였습니다.", homework: "나의 진실된 목소리를 당당하게 내뱉기" },
  { job: "전장의 소식을 전하던 전령", desc: "밤낮없이 달려 약속을 지켰던 가장 책임감 있는 분이었습니다.", homework: "약속의 소중함을 끝까지 지키기" }
];

const pastLifeDataEn = [
  { job: "Scholar of the Silver Moon", desc: "A noble soul who sought wisdom in solitude but avoided life's chaos.", homework: "Boldly step out and show your true talents to the world." },
  { job: "The Palace Cat", desc: "A peaceful healer who brought comfort to royalty but lacked independence.", homework: "Develop a fierce independence and stand on your own feet." },
  { job: "Gardener of Secret Eden", desc: "An artist who built a private paradise while talking only to the flowers.", homework: "Step out of your sanctuary and connect with others." },
  { job: "Master of Celestial Tea", desc: "A perfectionist who spent lifetimes capturing the universe in a single cup.", homework: "Let go of urgency and master the art of divine patience." },
  { job: "Wise Village Herbalist", desc: "A saint-like figure who healed heartaches with roots and kindness.", homework: "Continue to nurture your empathy and care for those around you." },
  { job: "Guardian of Ancient Whispers", desc: "A timeless protector who read the natural flow of the world for millennia.", homework: "Do not fear the winds of change; embrace the unknown future." },
  { job: "Royal Court Perfumer", desc: "An enchanting creator who studied the scents that captivate souls.", homework: "Find your own center so you are never swayed by others." },
  { job: "Legendary Court Dancer", desc: "A graceful master who captured the King's heart with every move.", homework: "Direct your intense passion toward the highest good." },
  { job: "The Divine Soloist", desc: "A voice from the heavens that moved the spirits of everyone.", homework: "Speak your truth boldly and let your unique voice be heard." },
  { job: "The Battlefield Messenger", desc: "A soul of iron will who ran through fire to keep a single promise.", homework: "Treasure your integrity and keep your word until the end." }
];

const reincarnationData = [
  { place: "스위스 알프스 목장", object: "명품 젖소", mission: "신선한 공기 3번 마시고 힐링하기" },
  { place: "실리콘밸리 천재의 서재", object: "기계식 키보드", mission: "위대한 아이디어가 세상에 나오도록 돕기" },
  { place: "강남 재벌집 거실", object: "사랑받는 품종묘", mission: "느긋하게 스트레칭 3번 하기" },
  { place: "제주도 푸른 바다", object: "자유로운 돌고래", mission: "좋아하는 노래 한 소절 부르기" },
  { place: "북유럽 도서관", object: "베스트셀러 책", mission: "책 한 페이지 읽으며 지식 충전하기" },
  { place: "우주의 빛나는 행성", object: "지지 않는 꽃", mission: "거울 보고 밝게 한번 웃어보기" },
  { place: "미래의 화성 식민지", object: "최초의 사과나무", mission: "척박한 땅에 푸른 생명의 희망 심기" },
  { place: "영화 촬영장", object: "주인공의 대본", mission: "아름다운 이야기가 완성되도록 영감 주기" },
  { place: "안드로메다 은하", object: "차원 여행자", mission: "우주의 평화를 잇는 가교 역할 수행하기" },
  { place: "산토리니 지붕 위", object: "느긋한 고양이", mission: "바다를 보며 삶의 여유를 가르쳐주기" }
];

const reincarnationDataEn = [
  { place: "High Alps Ranch", object: "Elegant Bell-Cow", mission: "Spread peaceful vibes to travelers." },
  { place: "Silicon Valley Studio", object: "High-End Keyboard", mission: "Help bridge world-changing ideas." },
  { place: "Manhattan Penthouse", object: "A Pampered Cat", mission: "Bring ultimate joy to your owner." },
  { place: "The Shores of Maui", object: "A Spirit Dolphin", mission: "Ride the cosmic waves and explore." },
  { place: "Nordic Library", object: "A Global Bestseller", mission: "Comfort weary souls with wisdom." },
  { place: "A Glowing Planet", object: "Eternal Flower", mission: "Smile at your reflection in the stars." },
  { place: "Future Mars Colony", object: "First Apple Tree", mission: "Plant the hope of green life in a red world." },
  { place: "Hollywood Movie Set", object: "The Lead Actor's Script", mission: "Inspire the creation of a legendary story." },
  { place: "Andromeda Galaxy", object: "Dimensional Traveler", mission: "Become a bridge connecting different worlds." },
  { place: "Santorini Rooftops", object: "A Relaxed Blue-Eye Cat", mission: "Teach the world the art of leisure and calmness." }
];

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
