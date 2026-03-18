/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 0) 언어 기본 설정 (i18n)
const i18n = {
    ko: {
        title: "운명공학 데이터 분석", desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
        nameLabel: "성명(예: 강화산)", birthLabel: "양력생일(예: 19900101)", btn: "리포트 생성하기",
        loadSeal: "분석중", loadTitle: "당신의 운명 에너지를 조합 중...",
        loadDesc: "당신의 에너지 보강(補强)에 필요한 아이템을 이미지를 보며 잠시 기다려 주세요.",
        tab1Btn: "현생 분석", tab2Btn: "전생 기록", tab3Btn: "내세 예약",
        sec1: "성명학 분석", sec2: "에너지 분석", sec3: "에너지 보강", advise: "현생 조언", practice: "실천 사항", sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", tab3Title: "내세 분석 자료", pastJob: "전생의 직업", pastHomework: "전생의 숙제", nextDest: "다음 목적지", nextObj: "다음 오브젝트", nextMission: "예약 확정을 위한 미션"
    },
    en: {
        title: "Destiny Engineering Analysis", desc: "We extract your signature energy from your name and birth date.",
        nameLabel: "Name (Full name)", birthLabel: "Birth (YYYYMMDD)", btn: "Generate Report",
        loadSeal: "Analyzing", loadTitle: "Combining destiny energy...",
        loadDesc: "Please wait a moment while we assemble your reinforcement items.",
        tab1Btn: "Present-Life Analysis", tab2Btn: "Past-Life Records", tab3Btn: "Afterlife Reservation",
        sec1: "Name Numerology Analysis", sec2: "Energy Analysis", sec3: "Energy Reinforcement", advise: "Advice for This Life", practice: "Action Items", sideEffect: "Caution: Side Effects of Over-Supplementing",
        tab2Title: "Past-Life Analysis Report", tab3Title: "Afterlife Analysis Report", pastJob: "Past-Life Occupation", pastHomework: "Past-Life Homework", nextDest: "Next Destination", nextObj: "Next Object", nextMission: "Complete the mission to confirm your afterlife reservation"
    }
};

// 1) 5원소 데이터
const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

// 2) 81수 기본 데이터
const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

// 3) 12단계 상세 조언 (풀 문장 복구)
const elementPrescriptions12 = {
    "木": ["초심이 중요합니다. 목표를 1개만 정하고 ‘첫 행동’을 실행하세요.", "기초가 중요합니다. 계획표를 단순화하고 루틴을 고정하세요.", "안정이 중요합니다. 성장 속도를 유지하되, 검증(피드백)을 붙이세요.", "정진이 중요합니다. 우선순위 3가지만 남기고 나머지는 보류하세요.", "성장이 중요합니다. 확장 전에 ‘완료 기준’을 문장으로 정의하세요.", "확장이 중요합니다. 협업과 외주로 속도를 올리되 품질 체크포인트를 두세요.", "숙련이 중요합니다. 반복 작업을 자동화해 리소스를 회수하세요.", "완성이 중요합니다. 한 번 더 ‘사용자 관점’에서 흐름을 정리하세요.", "정점이 중요합니다. 성과를 표준화(템플릿화)해 재현성을 만드세요.", "초월이 중요합니다. 불필요한 욕심을 덜고 핵심만 남기세요.", "대성이 중요합니다. 장기 로드맵과 단기 실행을 분리해 운영하세요.", "궁극이 중요합니다. “내가 안 해도 굴러가는 시스템”을 구축하세요."],
    "火": ["초심이 중요합니다. 감정 에너지를 ‘작은 실행’으로 전환하세요.", "기초가 중요합니다. 말보다 기록(메모,일지)이 과열을 잡습니다.", "안정이 중요합니다. 에너지 소비 시간을 블록으로 나누세요.", "정진이 중요합니다. 흥분 포인트를 줄이고 집중 포인트를 1개로.", "성장이 중요합니다. 설득과 표현은 강점이니 ‘근거’를 같이 붙이세요.", "확장이 중요합니다. 무리한 일정은 번아웃을 부릅니다. 휴식도 일정입니다.", "숙련이 중요합니다. 감정 기복이 오면 운동과 호흡으로 온도를 낮추세요.", "완성이 중요합니다. 열정을 ‘성과물’로 끝까지 마무리하세요.", "정점이 중요합니다. 주변을 태우지 않도록 톤을 한 단계 낮추세요.", "초월이 중요합니다. “덜 말하고 더 보여주기”로 신뢰를 올리세요.", "대성이 중요합니다. 영향력을 확장하되 책임 범위를 명확히 하세요.", "궁극이 중요합니다. 강한 불은 ‘관리’가 핵심입니다. 규칙을 만드세요."],
    "土": ["초심이 중요합니다. 오늘 할 일 1개만 완료해 기반을 만드세요.", "기초가 중요합니다. 정리정돈이 운의 흐름을 안정화합니다.", "안정이 중요합니다. 관계에서 경계(선)를 부드럽게 설정하세요.", "정진이 중요합니다. 미루는 습관을 끊기 위해 마감 시간을 정하세요.", "성장이 중요합니다. 책임을 지되 ‘내 몫’과 ‘남의 몫’을 구분하세요.", "확장이 중요합니다. 과도한 부담은 정체를 만듭니다. 분배하세요.", "숙련이 중요합니다. 체력·수면·식사, 3요소를 먼저 고정하세요.", "완성이 중요합니다. 안정감은 강점. 다만 변화도 작은 단위로 시도하세요.", "정점이 중요합니다. 조용히 끌고 가는 리더십이 빛납니다.", "초월이 중요합니다. ‘완벽한 안전’은 없습니다. 실험을 허용하세요.", "대성이 중요합니다. 기반을 키우려면 자원(시간,돈) 관리가 핵심입니다.", "궁극이 중요합니다. 큰 토는 ‘흐름’이 필요합니다. 정체를 풀어주세요."],
    "金": ["초심이 중요합니다. 기준을 1개 정하고 그 기준만 지키세요.", "기초가 중요합니다. 선택지를 줄이면 결정력이 살아납니다.", "안정이 중요합니다. 말은 짧게, 근거는 명확하게 제시하세요.", "정진이 중요합니다. 정리·정돈·정산이 강점입니다. 루틴화하세요.", "성장이 중요합니다. 과한 비판 대신 ‘개선안’까지 제시하면 신뢰가 커집니다.", "확장이 중요합니다. 규칙을 늘리기 전에 핵심 규칙 3개만 남기세요.", "숙련이 중요합니다. 관계에서 날이 서면 한 박자 쉬고 말하세요.", "완성이 중요합니다. 결과물의 완성도를 올리는 마감력이 강합니다.", "정점이 중요합니다. 원칙을 고집하기보다 ‘상황 적용’을 배우세요.", "초월이 중요합니다. 상대의 감정을 데이터로 취급하지 마세요. 공감이 필요합니다.", "대성이 중요합니다. 기준은 유지하되 유연성을 10%만 추가하세요.", "궁극이 중요합니다. 최고의 금은 ‘공정함+따뜻함’의 균형입니다."],
    "水": ["초심이 중요합니다. 생각을 멈추고 5분만 실행하세요.", "기초가 중요합니다. 불안을 줄이려면 정보 입력을 제한하세요.", "안정이 중요합니다. 깊이는 강점. 다만 ‘결론’을 반드시 적으세요.", "정진이 중요합니다. 선택 회피 대신 “임시 결론”을 세우세요.", "성장이 중요합니다. 통찰을 말로만 두지 말고 문서로 구조화하세요.", "확장이 중요합니다. 멀티태스킹은 감정 소모를 키웁니다. 한 번에 하나씩.", "숙련이 중요합니다. 과몰입 신호가 오면 산책과 수면으로 리셋하세요.", "완성이 중요합니다. 완성도는 ‘마감’에서 결정됩니다. 마감 시간을 정하세요.", "정점이 중요합니다. 조용한 영향력으로 주변을 설득할 수 있습니다.", "초월이 중요합니다. 감정의 바닥으로 내려가기 전에 ‘루틴’이 방패입니다.", "대성이 중요합니다. 지혜를 나누면 운이 커집니다. 코칭/공유가 좋습니다.", "궁극이 중요합니다. 물의 힘은 흐름. 집착을 내려놓을수록 강해집니다."]
};

const enPrescriptions12 = {
    "木": ["Initiative is important.", "A solid foundation is important.", "Stability is important.", "Discipline is important.", "Growth is important.", "Expansion is important.", "Mastery is important.", "Completion is important.", "The apex is important.", "Transcendence is important.", "Grandmastery is important.", "The ultimate goal is important."],
    "火": ["Initiative is important.", "A solid foundation is important.", "Stability is important.", "Discipline is important.", "Growth is important.", "Expansion is important.", "Mastery is important.", "Completion is important.", "The apex is important.", "Transcendence is important.", "Grandmastery is important.", "The ultimate goal is important."],
    "土": ["Initiative is important.", "A solid foundation is important.", "Stability is important.", "Discipline is important.", "Growth is important.", "Expansion is important.", "Mastery is important.", "Completion is important.", "The apex is important.", "Transcendence is important.", "Grandmastery is important.", "The ultimate goal is important."],
    "金": ["Initiative is important.", "A solid foundation is important.", "Stability is important.", "Discipline is important.", "Growth is important.", "Expansion is important.", "Mastery is important.", "Completion is important.", "The apex is important.", "Transcendence is important.", "Grandmastery is important.", "The ultimate goal is important."],
    "水": ["Initiative is important.", "A solid foundation is important.", "Stability is important.", "Discipline is important.", "Growth is important.", "Expansion is important.", "Mastery is important.", "Completion is important.", "The apex is important.", "Transcendence is important.", "Grandmastery is important.", "The ultimate goal is important."]
};

// 4) 이름 조각 데이터 (각 20개 전체 복구)
const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현","보","유","라","휘","린","겸","담","준","채","온"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성","람","빛","솔","진","담","율","아","늘","준","온"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin","Mira","Elian","Nova","Cairn","Sola","Riven","Lumen","Astra","Veyra","Neris","Kaia"];
const nameTailEn = ["is","a","en","or","el","yn","on","ia","us","ar","eth","iel","ara","eus","ir","ae"];

// 5) 수식어 데이터
const epithetKoByElement = { "木": ["푸른", "수림의", "새순의", "개척의"], "火": ["홍련의", "태양의", "불꽃의", "열망의"], "土": ["대지의", "황토의", "기반의", "성채의"], "金": ["은빛의", "철율의", "서약의", "검의"], "水": ["물결의", "안개의", "심해의", "거울의"] };
const epithetEnByElement = { "木": ["Verdant", "Forest-born", "Sprouting", "Pathfinding"], "火": ["Crimson", "Solar", "Ember", "Flamebound"], "土": ["Earthforged", "Rooted", "Stoneward", "Citadel"], "金": ["Silver-edged", "Oathbound", "Ironlaw", "Steelforged"], "水": ["Tideborn", "Mistveiled", "Abyssal", "Mirror-souled"] };

// 6) 상세 수식어 버전 (Past / Next)
const pastJobsKo = ["궁중의 신뢰로운 기록관", "산중 서당의 지혜로운 훈장님", "전장의 발빠른 전령", "약초를 다루는 전설적인 명의", "거친 파도를 누비는 해상 무역상", "아름다운 향기를 설계하는 조향사", "희귀한 귀금속을 다루는 장인 대장장이", "고요한 사찰의 신성한 수행자", "별자리와 행성의 궤적을 쫓는 관측자"];
const pastJobsEn = ["A Trusted Archivist of the Royal Court", "A Wise Scholar of a Secluded Mountain School", "A Swift-footed Messenger of the Battlefield", "A Legendary Physician Skilled in Herbal Wisdom", "An Adventurous Merchant of the High Seas", "A Master Perfumer Architecting Heavenly Scents", "A Master Smith Forging Rare and Precious Metals", "A Sacred Practitioner of a Silent Temple", "A Celestial Observer Tracking the Orbits of Stars"];

const nextPlacesKo = ["수만 권의 지혜가 잠든 도서관 서재", "끝없는 수평선을 비추는 바다 위 등대", "구름이 맞닿은 평화로운 산악 목장", "인류의 미지를 연구하는 최첨단 미래 연구소", "꽃과 기계가 공존하는 환상적인 정원 도시", "영감이 쏟아지는 비밀스러운 예술 작업실", "별들 사이를 고요히 항해하는 우주 정거장", "새벽 물안개가 피어오르는 고요한 호숫가", "빛과 이야기가 살아 숨 쉬는 영화 촬영장"];
const nextPlacesEn = ["A Grand Library Study Where Ancient Wisdom Sleeps", "A Lonely Lighthouse Illuminating the Endless Horizon", "A Peaceful Mountain Ranch Touching the Clouds", "A Cutting-edge Lab Deciphering the Unknown Future", "A Fantastic Garden City Where Nature and Tech Coexist", "A Secret Art Studio Brimming with Infinite Inspiration", "A Silent Space Station Drifting Among the Stars", "A Serene Lakeside Veiled in Morning Mist", "A Cinematic Set Where Light and Stories Come Alive"];

const nextObjectPoolsKo = {
    thing: ["운명을 기록한 황금 책", "길을 잃지 않게 돕는 나침반", "모든 것을 고치는 마법 도구 상자", "상처를 치유하는 신비로운 약병"],
    animal: ["지혜를 상징하는 흰 늑대", "밤을 지키는 영리한 올빼미", "바다의 노래를 아는 돌고래", "행운을 부르는 푸른 사슴"],
    human: ["모두를 보듬는 치유사", "평화를 수호하는 기사", "지식을 전파하는 기록관", "미지의 바다를 항해하는 선장"],
    deity: ["지혜를 관장하는 안내자", "풍요를 가져오는 정령", "바람의 흐름을 다스리는 신", "별의 궤도를 그리는 성좌"],
    insect: ["달빛 아래 춤추는 신비로운 반딧불이", "작은 날개로 세상을 연결하는 꿀벌"],
    microbe: ["생명의 근원을 품은 태초의 미생물", "보이지 않는 곳에서 변화를 만드는 효모"],
    nature: ["세상의 흐름을 바꾸는 조류", "가장 높은 곳의 바람길", "모든 것을 비추는 거울 호수", "천 년의 시간을 머금은 설산"]
};

const nextObjectPoolsEn = {
    thing: ["A Golden Ledger Recording Destiny", "A Compass That Never Fails the Lost", "A Mystical Toolbox That Fixes All", "A Sacred Vial of Healing Essence"],
    animal: ["A White Wolf Symbolizing Wisdom", "A Clever Owl Guarding the Night", "A Dolphin That Knows the Sea's Song", "A Azure Deer Bringing Good Fortune"],
    human: ["A Healer Embracing All Wounds", "A Guardian Protecting Eternal Peace", "An Archivist Spreading Ancient Knowledge", "A Captain Navigating Uncharted Seas"],
    deity: ["A Guide Presiding Over Wisdom", "A Spirit Bringing Abundance", "A Deity Governing the Wind's Path", "A Constellation Mapping the Stars"],
    insect: ["A Mysterious Firefly", "A World-connecting Bee"],
    microbe: ["A Primordial Microbe", "A Change-making Yeast"],
    nature: ["An Ocean Current Changing the World's Flow", "A High Altitude Windpath", "A Mirror Lake Reflecting All Truths", "A Snowy Peak Carrying a Thousand Years of Time"]
};

// 7) 부작용 30종 (전체 복구)
const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "전생이 바위였던 듯한 멍함", "양말 한 짝 영원히 실종", "냉장고 소스 유통기한 점검 강박", "뜬금없는 윙크 발사", "거울 속 내 모습에 취함", "왼쪽 콧구멍만 간지러움", "안경 쓰고 안경 찾기", "리모컨을 손에 쥐고 30분간 방황", "편의점 신상 과자 무조건 사야 함", "자기 전에 갑자기 이불킥", "길 가다 마주친 고양이에게 존댓말", "핸드폰 들고 핸드폰 찾기", "엘리베이터 버튼 여러 번 누르기", "장바구니에 담기만 하고 안 사기", "갑자기 분위기 싸해지는 아재개그", "남의 집 강아지랑 눈싸움하기", "배달 앱 메뉴 고르다 1시간 경과", "물건 사러 가서 엉뚱한 것만 사 오기", "혼자서 내적 댄스 폭발", "중요한 순간에만 터지는 딸꾹질", "이어폰 끼고 노래 안 틀기", "양치하다가 멍 때리기", "새벽 2시에 갑자기 방 정리하기", "비 안 오는데 우산 챙기기", "말할 때 손동작 과해짐", "아무도 없는데 인사하기", "카페 진동벨 들고 카운터 가서 주문하기", "약속 장소 다 와서 집 가고 싶어짐"];
const sideEffectsEn = ["Dessert cravings", "Back-talking", "Zoning out", "Lost socks", "Checking sauce dates", "Involuntary winking", "Dazzled by mirror", "Itchy nostril", "Finding glasses on head", "Remote control search", "New snack compulsion", "Late-night cringe", "Talking to cats", "Phone search while on it", "Elevator button panic", "Cart filling only", "Dad jokes", "Dog staring contests", "Menu paralysis", "Buying wrong items", "Internal dancing", "Timed hiccups", "Silent earbuds", "Toothbrush spacing", "2 AM cleaning", "Sunny day umbrella", "Excessive gestures", "Waving at strangers", "Pager order fail", "Arriving and wanting home"];

// 8) 로직 함수
function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function get81CoreKo(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseKo[a].key, stage:stageKo[b], core:baseKo[a].core, risk:baseKo[a].risk}; }
function get81CoreEn(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseEn[a].key, stage:stageEn[b]}; }

function makePastNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)}${pickFrom(["공","랑","도령","낭","장","선생"], n)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)} ${info.base}의 ${info.stage}`; }
function makePastNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)} ${info.base} (${info.stage})`; }
function makePastNameReasonKo(n, s, l, m){ return `81수(${n}수)와 ${s} 기운이 조합된 전생의 호칭입니다.`; }
function makePastNameReasonEn(n, s, l, m){ return `Derived from No.${n} and dominant ${s}.`; }

function makeNextLifeNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)} ${info.base}의 ${info.stage}`; }
function makeNextLifeNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)} ${info.base} (${info.stage})`; }
function makeNextNameReasonKo(n, s, l, m){ return `부족한 기운(${l}) 보충과 81수의 흐름을 반영한 다음생의 이름입니다.`; }
function makeNextNameReasonEn(n, s, l, m){ return `Designed to reinforce your lacking ${l} energy.`; }

function pickCategoryByElement(s, l, n) { 
    const map = { "木": ["nature", "animal"], "火": ["deity", "insect"], "土": ["thing", "nature"], "金": ["thing", "microbe"], "水": ["animal", "nature"] };
    const base = map[s] || ["thing", "animal"];
    return base[n % base.length];
}

// 9) 데이터 할당
const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const info=get81CoreKo(n);
        out[n] = { title: `${String(n).padStart(2,"0")}수·${info.base}(${info.stage})`, desc: `${info.core}의 기운이 ‘${info.stage}’ 국면으로 전개되는 흔적입니다.` };
    }
    return out;
})();

const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const n = i+1; const a=i%9; 
    return { job: pastJobsKo[a], desc: `${n}수 성향의 ${baseKo[a].core} 흐름이 전생에서 발현된 흔적입니다.`, homework: `${baseKo[a].risk}을(를) 조절하며 평정심 유지하기.` };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const n = i+1; const a=i%9;
    return { job: pastJobsEn[a], desc: `Trace of No.${n} pattern.`, homework: `Regulate ${baseEn[a].risk}.` };
});

const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const n = i+1; const a=i%9; const b=Math.floor(i/9);
    return { place: nextPlacesKo[b], mission: `(${String(n).padStart(2,"0")}수) ${baseKo[a].core} 에너지를 ‘${stageKo[b]}’ 국면으로 이끌어 결실 맺기.` };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const n = i+1; const a=i%9; const b=Math.floor(i/9);
    return { place: nextPlacesEn[b], mission: `(No.${n}) Leading ${baseEn[a].core} to the '${stageEn[b]}' phase.` };
});

const quoteData = { "인생": [{ text: "모든 꽃은 저마다의 시간에 핀다." }, { text: "속도보다 중요한 것은 방향이다." }, { text: "지금 그대로 당신은 충분하다." }, { text: "어두운 밤일수록 별은 빛난다." }] };
const quoteDataEn = { "life": [{ text: "Every flower blooms in its own time." }, { text: "Direction is more important than speed." }] };

const nicknamesKo = { "木": { veryStrong: "개척자" }, "火": { veryStrong: "태양" }, "土": { veryStrong: "산" }, "金": { veryStrong: "심판자" }, "水": { veryStrong: "소용돌이" } };
const nicknamesEn = nicknamesKo;
