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

// 1) 데이터 기본 맵
const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

// 2) 81수 기본 구조 (Pioneer, Harmony 등 상세 데이터)
const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

// 3) 이름 생성 유틸리티
const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현","보","유","라","휘","린","겸","담","준","채","온"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성","람","빛","솔","진","담","율","아","늘","준","온"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin","Mira","Elian","Nova","Cairn","Sola","Riven","Lumen","Astra","Veyra","Neris","Kaia"];
const nameTailEn = ["is","a","en","or","el","yn","on","ia","us","ar","eth","iel","ara","eus","ir","ae"];

const epithetKoByElement = { "木": ["푸른", "수림의", "새순의", "개척의"], "火": ["홍련의", "태양의", "불꽃의", "열망의"], "土": ["대지의", "황토의", "기반의", "성채의"], "金": ["은빛의", "철율의", "서약의", "검의"], "水": ["물결의", "안개의", "심해의", "거울의"] };
const epithetEnByElement = { "木": ["Verdant", "Forest-born", "Sprouting", "Pathfinding"], "火": ["Crimson", "Solar", "Ember", "Flamebound"], "土": ["Earthforged", "Rooted", "Stoneward", "Citadel"], "金": ["Silver-edged", "Oathbound", "Ironlaw", "Steelforged"], "水": ["Tideborn", "Mistveiled", "Abyssal", "Mirror-souled"] };

// 4) 핵심 로직 함수
function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function getSeasonKo(m){ return ([3,4,5].includes(m))?"봄":([6,7,8].includes(m))?"여름":([9,10,11].includes(m))?"가을":"겨울"; }
function getSeasonEn(m){ return ([3,4,5].includes(m))?"Spring":([6,7,8].includes(m))?"Summer":([9,10,11].includes(m))?"Autumn":"Winter"; }

function get81CoreKo(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseKo[a].key, stage:stageKo[b]}; }
function get81CoreEn(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseEn[a].key, stage:stageEn[b]}; }

function makePastNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)}${pickFrom(["공","랑","도령","낭","장","선생"], n)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)} ${info.base}의 ${info.stage}`; }
function makePastNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)} ${info.base} (${info.stage})`; }
function makePastNameReasonKo(n, s, l, m){ return `81수(${n}수)와 주 기운(${s})이 조합된 결과입니다.`; }
function makePastNameReasonEn(n, s, l, m){ return `Derived from No.${n} and dominant ${s}.`; }

function makeNextLifeNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)} ${info.base}의 ${info.stage}`; }
function makeNextLifeNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)} ${info.base} (${info.stage})`; }

// ✅ 누락된 함수 복구 (내세 예약 탭 정상 작동을 위해 필수)
function makeNextNameReasonKo(n, s, l, m){ return `부족한 기운(${l})을 보충하는 방향으로 구성된 다음 생의 호칭입니다.`; }
function makeNextNameReasonEn(n, s, l, m){ return `Designed to reinforce your lacking energy (${l}).`; }

// 5) 메인 데이터셋 및 상세 처방 (풍성한 문장 100% 유지)
const elementPrescriptions12 = {
    "木": ["초심☆ 목표를 1개만 정하고 ‘첫 행동’을 실행하세요.", "기초☆ 계획표를 단순화하고 루틴을 고정하세요.", "안정☆ 성장 속도를 유지하되, 검증(피드백)을 붙이세요.", "정진☆ 우선순위 3가지만 남기고 나머지는 보류하세요.", "성장☆ 확장 전에 ‘완료 기준’을 문장으로 정의하세요.", "확장☆ 협업과 외주로 속도를 올리되 품질 체크포인트를 두세요.", "숙련☆ 반복 작업을 자동화해 리소스를 회수하세요.", "완성☆ 한 번 더 ‘사용자 관점’에서 흐름을 정리하세요.", "정점☆ 성과를 표준화(템플릿화)해 재현성을 만드세요.", "초월☆ 불필요한 욕심을 덜고 핵심만 남기세요.", "대성☆ 장기 로드맵과 단기 실행을 분리해 운영하세요.", "궁극☆ “내가 안 해도 굴러가는 시스템”을 구축하세요."],
    "火": ["초심☆ 감정 에너지를 ‘작은 실행’으로 전환하세요.", "기초☆ 말보다 기록(메모,일지)이 과열을 잡습니다.", "안정☆ 에너지 소비 시간을 블록으로 나누세요.", "정진☆ 흥분 포인트를 줄이고 집중 포인트를 1개로.", "성장☆ 설득과 표현은 강점이니 ‘근거’를 같이 붙이세요.", "확장☆ 무리한 일정은 번아웃을 부릅니다. 휴식도 일정입니다.", "숙련☆ 감정 기복이 오면 운동과 호흡으로 온도를 낮추세요.", "완성☆ 열정을 ‘성과물’로 끝까지 마무리하세요.", "정점☆ 주변을 태우지 않도록 톤을 한 단계 낮추세요.", "초월☆ “덜 말하고 더 보여주기”로 신뢰를 올리세요.", "대성☆ 영향력을 확장하되 책임 범위를 명확히 하세요.", "궁극☆ 강한 불은 ‘관리’가 핵심입니다. 규칙을 만드세요."],
    "土": ["초심☆ 오늘 할 일 1개만 완료해 기반을 만드세요.", "기초☆ 정리정돈이 운의 흐름을 안정화합니다.", "안정☆ 관계에서 경계(선)를 부드럽게 설정하세요.", "정진☆ 미루는 습관을 끊기 위해 마감 시간을 정하세요.", "성장☆ 책임을 지되 ‘내 몫’과 ‘남의 몫’을 구분하세요.", "확장☆ 과도한 부담은 정체를 만듭니다. 분배하세요.", "숙련☆ 체력·수면·식사, 3요소를 먼저 고정하세요.", "완성☆ 안정감은 강점. 다만 변화도 작은 단위로 시도하세요.", "정점☆ 조용히 끌고 가는 리더십이 빛납니다.", "초월☆ ‘완벽한 안전’은 없습니다. 실험을 허용하세요.", "대성☆ 기반을 키우려면 자원(시간,돈) 관리가 핵심입니다.", "궁극☆ 큰 토는 ‘흐름’이 필요합니다. 정체를 풀어주세요."],
    "金": ["초심☆ 기준을 1개 정하고 그 기준만 지키세요.", "기초☆ 선택지를 줄이면 결정력이 살아납니다.", "안정☆ 말은 짧게, 근거는 명확하게 제시하세요.", "정진☆ 정리·정돈·정산이 강점입니다. 루틴화하세요.", "성장☆ 과한 비판 대신 ‘개선안’까지 제시하면 신뢰가 커집니다.", "확장☆ 규칙을 늘리기 전에 핵심 규칙 3개만 남기세요.", "숙련☆ 관계에서 날이 서면 한 박자 쉬고 말하세요.", "완성☆ 결과물의 완성도를 올리는 마감력이 강합니다.", "정점☆ 원칙을 고집하기보다 ‘상황 적용’을 배우세요.", "초월☆ 상대의 감정을 데이터로 취급하지 마세요. 공감이 필요합니다.", "대성☆ 기준은 유지하되 유연성을 10%만 추가하세요.", "궁극☆ 최고의 금은 ‘공정함+따뜻함’의 균형입니다."],
    "水": ["초심☆ 생각을 멈추고 5분만 실행하세요.", "기초☆ 불안을 줄이려면 정보 입력을 제한하세요.", "안정☆ 깊이는 강점. 다만 ‘결론’을 반드시 적으세요.", "정진☆ 선택 회피 대신 “임시 결론”을 세우세요.", "성장☆ 통찰을 말로만 두지 말고 문서로 구조화하세요.", "확장☆ 멀티태스킹은 감정 소모를 키웁니다. 한 번에 하나씩.", "숙련☆ 과몰입 신호가 오면 산책과 수면으로 리셋하세요.", "완성☆ 완성도는 ‘마감’에서 결정됩니다. 마감 시간을 정하세요.", "정점☆ 조용한 영향력으로 주변을 설득할 수 있습니다.", "초월☆ 감정의 바닥으로 내려가기 전에 ‘루틴’이 방패입니다.", "대성☆ 지혜를 나누면 운이 커집니다. 코칭/공유가 좋습니다.", "궁극☆ 물의 힘은 흐름. 집착을 내려놓을수록 강해집니다."]
};
const enPrescriptions12 = {
    "木": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "火": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "土": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "金": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "水": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"]
};

const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a=(n-1)%9, b=Math.floor((n-1)/9);
        out[n] = { title: `${String(n).padStart(2,"0")}수·${baseKo[a].key}(${stageKo[b]})`, desc: `${baseKo[a].core}의 기운이 발현됩니다.`, titleEn: `No.${n}·${baseEn[a].key}(${stageEn[b]})`, descEn: `Your energy is in the ${stageEn[b]} phase.` };
    }
    return out;
})();

const elementAttributesKo = { "木": { name: "나무", trait: "성장" }, "火": { name: "불", trait: "열정" }, "土": { name: "흙", trait: "안정" }, "金": { name: "쇠", trait: "결단" }, "水": { name: "물", trait: "지혜" } };
const elementAttributesEn = { "木": { name: "Wood", trait: "Growth" }, "火": { name: "Fire", trait: "Passion" }, "土": { name: "Earth", trait: "Stability" }, "金": { name: "Metal", trait: "Logic" }, "水": { name: "Water", trait: "Wisdom" } };

const pastJobsKo = ["궁중 기록관","산중 서당 훈장","전장의 전령","약초 의원","해상 무역상","조향사","금속 장인","사찰 수행자","별 관측자"];
const pastJobsEn = ["Archivist","Tutor","Messenger","Healer","Merchant","Perfumer","Artisan","Temple","Observer"];
const nextPlacesKo = ["도서관 서재","바다 위 등대","산악 목장","미래 연구소","정원 도시","예술 작업실","우주 정거장","고요한 호숫가","영화 촬영장"];
const nextPlacesEn = ["Study","Lighthouse","Ranch","Lab","City","Studio","Space","Lake","Set"];

const nextObjectPoolsKo = { thing: ["기록서", "나침반", "도구 상자"], animal: ["늑대", "올빼미", "돌고래"], human: ["치유사", "수호자", "장인"], deity: ["지혜의 신", "바람의 신"], insect: ["꿀벌", "반딧불이"], microbe: ["효모", "유산균"], nature: ["바다의 조류", "설산의 만년설"] };
const nextObjectPoolsEn = { thing: ["Record Book", "Compass", "Toolbox"], animal: ["Wolf", "Owl", "Dolphin"], human: ["Healer", "Guardian", "Artisan"], deity: ["Deity of Wisdom", "Deity of Wind"], insect: ["Honeybee", "Firefly"], microbe: ["Yeast", "Lactobacillus"], nature: ["Ocean Current", "Perennial Snow"] };

const reasonKo = { "木": "성장과 확장의 기운이 강합니다.", "火": "표현과 확산의 기운이 강합니다.", "土": "기반과 포용의 기운이 강합니다.", "金": "원칙과 결단의 기운이 강합니다.", "水": "통찰과 유연의 기운이 강합니다." };
const reasonEn = { "木": "Growth trace.", "火": "Passion trace.", "土": "Stability trace.", "金": "Logic trace.", "水": "Insight trace." };

const pastLifeData = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsKo[i%9], desc: `${i+1}수 흐름의 전생 흔적입니다.`, homework: "평정심 유지." }));
const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsEn[i%9], desc: `No.${i+1} trace.`, homework: "Keep balance." }));
const reincarnationData = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesKo[i%9], mission: "에너지 완성." }));
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesEn[i%9], mission: "Complete energy." }));

const sideEffects = ["디저트 무한 흡입 주의","모든 말끝에 토 달기","전생이 바위였던 듯한 멍함","양말 한 짝 영원히 실종","냉장고 소스 유통기한 점검 강박","뜬금없는 윙크 발사","거울 속 내 모습에 취함","왼쪽 콧구멍만 간지러움"];
const sideEffectsEn = ["Unstoppable dessert cravings","Urge to back-talk everyone","Spells of rock-like zoning out","Mysterious loss of one sock forever","Obsessive checking of sauce dates","Involuntary winking syndrome","Dazzled by your own mirror image","An itch in specifically your left nostril"];

const quoteData = { "인생": [{ text: "모든 꽃은 저마다의 시간에 핀다." }, { text: "속도보다 중요한 것은 방향이다." }, { text: "지금 그대로 당신은 충분하다." }, { text: "어두운 밤일수록 별은 빛난다." }] };
const quoteDataEn = { "life": [{ text: "Every flower blooms in its own time." }, { text: "Direction is more important than speed." }, { text: "You are enough exactly as you are." }, { text: "The darker the night, the brighter the stars." }] };

function pickCategoryByElement(s, l, n) { const map={"木":"nature","火":"deity","土":"thing","金":"thing","水":"animal"}; return map[s]||"thing"; }
const nicknamesKo = { "木": { veryStrong: "개척자", strong: "기획자", normal: "중재자", weak: "싹", veryWeak: "가지" }, "火": { veryStrong: "태양", strong: "리더", normal: "등불", weak: "별빛", veryWeak: "온기" }, "土": { veryStrong: "산", strong: "수호자", normal: "관리자", weak: "언덕", veryWeak: "정령" }, "金": { veryStrong: "심판자", strong: "검객", normal: "조각가", weak: "세공사", veryWeak: "철학자" }, "水": { veryStrong: "소용돌이", strong: "항해사", normal: "시냇물", weak: "예술가", veryWeak: "연못" } };
const nicknamesEn = nicknamesKo;
