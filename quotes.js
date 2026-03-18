/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 0) i18n
const i18n = {
    ko: {
        title: "운명공학 데이터 분석",
        desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
        nameLabel: "성명(예: 강화산)",
        birthLabel: "양력생일(예: 19900101)",
        btn: "리포트 생성하기",
        loadSeal: "분석중",
        loadTitle: "당신의 운명 에너지를 조합 중...",
        loadDesc: "당신의 에너지 보강(補强)에 필요한 아이템을 이미지를 보며 잠시 기다려 주세요.",
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
        nameLabel: "Name (Full name)",
        birthLabel: "Birth (YYYYMMDD)",
        btn: "Generate Report",
        loadSeal: "Analyzing",
        loadTitle: "Combining destiny energy...",
        loadDesc: "Please wait a moment while we assemble your reinforcement items.",
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

// 1) Elements Map
const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

// 2) 81 Numerology Base
const baseKo = [
    { key:"개척", core:"시작·독립·결단", risk:"독단·조급" }, { key:"조화", core:"협력·중재·관계", risk:"우유부단·의존" }, { key:"발전", core:"성장·표현·확장", risk:"산만·과시" },
    { key:"기반", core:"안정·축적·관리", risk:"정체·완고" }, { key:"중심", core:"균형·통합·리더십", risk:"완벽주의·통제" }, { key:"책임", core:"의무·봉사·신뢰", risk:"과부담·걱정" },
    { key:"탐구", core:"분석·통찰·전문성", risk:"고립·냉정" }, { key:"성과", core:"현실화·재물·결실", risk:"집착·과욕" }, { key:"완성", core:"마무리·지혜·전환", risk:"허무·미련" }
];
const baseEn = [
    { key:"Pioneer", core:"start·independence·decision", risk:"rigidity·haste" }, { key:"Harmony", core:"cooperation·mediation·relationships", risk:"indecision·dependency" }, { key:"Growth", core:"expansion·expression·development", risk:"scattered·showy" },
    { key:"Foundation", core:"stability·accumulation·management", risk:"stagnation·stubborn" }, { key:"Center", core:"balance·integration·leadership", risk:"perfectionism·control" }, { key:"Duty", core:"responsibility·service·trust", risk:"overload·worry" },
    { key:"Research", core:"analysis·insight·expertise", risk:"isolation·coldness" }, { key:"Result", core:"materialization·wealth·achievement", risk:"attachment·greed" }, { key:"Completion", core:"closure·wisdom·transition", risk:"emptiness·regret" }
];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

// 3) Name Generation Utils
const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현","보","유","라","휘","린","겸","담","준","채","온"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성","람","빛","솔","진","담","율","아","늘","준","온"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin","Mira","Elian","Nova","Cairn","Sola","Riven","Lumen","Astra","Veyra","Neris","Kaia"];
const nameTailEn = ["is","a","en","or","el","yn","on","ia","us","ar","eth","iel","ara","eus","ir","ae"];

function getSeasonKo(m){ return ([3,4,5].includes(m))?"봄":([6,7,8].includes(m))?"여름":([9,10,11].includes(m))?"가을":"겨울"; }
function getSeasonEn(m){ return ([3,4,5].includes(m))?"Spring":([6,7,8].includes(m))?"Summer":([9,10,11].includes(m))?"Autumn":"Winter"; }

const epithetKoByElement = { "木": ["푸른", "수림의", "새순의", "개척의"], "火": ["홍련의", "태양의", "불꽃의", "열망의"], "土": ["대지의", "황토의", "기반의", "성채의"], "金": ["은빛의", "철율의", "서약의", "검의"], "水": ["물결의", "안개의", "심해의", "거울의"] };
const epithetEnByElement = { "木": ["Verdant", "Forest-born", "Sprouting", "Pathfinding"], "火": ["Crimson", "Solar", "Ember", "Flamebound"], "土": ["Earthforged", "Rooted", "Stoneward", "Citadel"], "金": ["Silver-edged", "Oathbound", "Ironlaw", "Steelforged"], "水": ["Tideborn", "Mistveiled", "Abyssal", "Mirror-souled"] };

function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }

function get81CoreKo(n){ const a = (n-1)%9, b = Math.floor((n-1)/9); return { base: baseKo[a].key, stage: stageKo[b], core: baseKo[a].core, risk: baseKo[a].risk }; }
function get81CoreEn(n){ const a = (n-1)%9, b = Math.floor((n-1)/9); return { base: baseEn[a].key, stage: stageEn[b], core: baseEn[a].core, risk: baseEn[a].risk }; }

function makePastNameKo(n, strongEl, lackEl, birthMonth=1){
    const s = getSeasonKo(birthMonth), info = get81CoreKo(n), epi = pickFrom(epithetKoByElement[strongEl]||["운명의"], n + (lackEl?lackEl.charCodeAt(0):0));
    return `${pickFrom(syllableKo1, n+birthMonth)}${pickFrom(syllableKo2, n+birthMonth+7)}${pickFrom(["공","랑","도령","낭","장","선생"], n)} · ${epi} ${info.base}의 ${info.stage} (${s})`;
}
function makePastNameEn(n, strongEl, lackEl, birthMonth=1){
    const s = getSeasonEn(birthMonth), info = get81CoreEn(n), epi = pickFrom(epithetEnByElement[strongEl]||["Fated"], n + (lackEl?lackEl.charCodeAt(0):0));
    return `${pickFrom(nameRootEn, n+birthMonth)}${pickFrom(nameTailEn, n+5)} · ${epi} ${info.base} (${info.stage}, ${s})`;
}
function makePastNameReasonKo(n, strongEl, lackEl, birthMonth=1){
    const info = get81CoreKo(n); return `81수(${String(n).padStart(2,"0")}수)의 ‘${info.base}·${info.stage}’ 흐름과 ${getSeasonKo(birthMonth)} 기운, 그리고 ${strongEl} 기운이 조합된 결과입니다.`;
}
function makePastNameReasonEn(n, strongEl, lackEl, birthMonth=1){
    const info = get81CoreEn(n); return `Derived from No.${String(n).padStart(2,"0")} (${info.base}·${info.stage}) and dominant ${strongEl}.`;
}

function makeNextLifeNameKo(n, strongEl, lackEl, birthMonth=1){
    const s = getSeasonKo(birthMonth), info = get81CoreKo(n), epi = pickFrom(epithetKoByElement[lackEl]||["새로운"], n+7);
    return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${epi} ${info.base}의 ${info.stage} (${s})`;
}
function makeNextLifeNameEn(n, strongEl, lackEl, birthMonth=1){
    const s = getSeasonEn(birthMonth), info = get81CoreEn(n), epi = pickFrom(epithetEnByElement[lackEl]||["Renewed"], n+13);
    return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${epi} ${info.base} (${info.stage}, ${s})`;
}
function makeNextNameReasonKo(n, strongEl, lackEl, birthMonth=1){
    const info = get81CoreKo(n); return `부족한 기운(${lackEl}) 보강과 81수(${String(n).padStart(2,"0")}수)의 ‘${info.base}→${info.stage}’ 전개를 반영했습니다.`;
}
function makeNextNameReasonEn(n, strongEl, lackEl, birthMonth=1){
    const info = get81CoreEn(n); return `Aligns No.${String(n).padStart(2,"0")} (${info.base}→${info.stage}) with lacking energy (${lackEl}).`;
}

// 4) Main Data Structures
const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const code = String(n).padStart(2, "0"), a = (n-1)%9, b = Math.floor((n-1)/9), ko = baseKo[a], en = baseEn[a];
        out[n] = { title: `${code}수 · ${ko.key}(${stageKo[b]})`, desc: `${ko.core}의 기운이 ‘${stageKo[b]}’ 국면으로 전개됩니다.`, titleEn: `No.${code} · ${en.key} (${stageEn[b]})`, descEn: `Your ${en.core} pattern is in the “${stageEn[b]}” phase.` };
    }
    return out;
})();

const elementPrescriptions12 = {
    "木": ["초심☆ 행동하세요.", "기초☆ 루틴화.", "안정☆ 피드백.", "정진☆ 우선순위.", "성장☆ 기준정의.", "확장☆ 품질체크.", "숙련☆ 자동화.", "완성☆ 흐름정리.", "정점☆ 표준화.", "초월☆ 핵심집중.", "대성☆ 로드맵.", "궁극☆ 시스템."],
    "火": ["초심☆ 실행전환.", "기초☆ 기록관리.", "안정☆ 시간블록.", "정진☆ 집중포인트.", "성장☆ 근거제시.", "확장☆ 휴식일정.", "숙련☆ 온도조절.", "완성☆ 마무리.", "정점☆ 톤조절.", "초월☆ 신뢰구축.", "대성☆ 책임명확.", "궁극☆ 규칙수립."],
    "土": ["초심☆ 기반형성.", "기초☆ 정리정돈.", "안정☆ 경계설정.", "정진☆ 마감준수.", "성장☆ 역할구분.", "확장☆ 자원분배.", "숙련☆ 건강관리.", "완성☆ 변화시도.", "정점☆ 정중동.", "초월☆ 실험허용.", "대성☆ 자산관리.", "궁극☆ 흐름유지."],
    "金": ["초심☆ 기준수립.", "기초☆ 결정단순.", "안정☆ 명확근거.", "정진☆ 정산루틴.", "성장☆ 개선제시.", "확장☆ 핵심규칙.", "숙련☆ 감정조절.", "완성☆ 마감완성.", "정점☆ 유연적용.", "초월☆ 공감추가.", "대성☆ 밸런스.", "궁극☆ 따뜻한법."],
    "水": ["초심☆ 즉시실행.", "기초☆ 정보제한.", "안정☆ 결론작성.", "정진☆ 임시결론.", "성장☆ 문서구조.", "확장☆ 싱글태스킹.", "숙련☆ 리셋산책.", "완성☆ 마감확정.", "정점☆ 조용한힘.", "초월☆ 루틴방패.", "대성☆ 지혜공유.", "궁극☆ 집착내림."]
};
const enPrescriptions12 = {
    "木": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "火": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "土": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "金": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"],
    "水": ["Initiate", "Foundation", "Stability", "Discipline", "Growth", "Expansion", "Mastery", "Completion", "Apex", "Transcendence", "Grand Master", "Ultimate"]
};

const elementAttributesKo = { "木": { name: "나무", trait: "성장" }, "火": { name: "불", trait: "열정" }, "土": { name: "흙", trait: "안정" }, "金": { name: "쇠", trait: "결단" }, "水": { name: "물", trait: "지혜" } };
const elementAttributesEn = { "木": { name: "Wood", trait: "Growth" }, "火": { name: "Fire", trait: "Passion" }, "土": { name: "Earth", trait: "Stability" }, "金": { name: "Metal", trait: "Logic" }, "水": { name: "Water", trait: "Wisdom" } };

const pastJobsKo = ["기록관","훈장","전령","의원","무역상","조향사","장인","수행자","관측자"];
const pastJobsEn = ["Archivist","Tutor","Messenger","Healer","Merchant","Perfumer","Artisan","Practitioner","Observer"];
const nextPlacesKo = ["서재","등대","목장","연구소","도시","작업실","정거장","호숫가","촬영장"];
const nextPlacesEn = ["Study","Lighthouse","Ranch","Lab","City","Studio","Station","Lakeside","Set"];

const nextObjectPoolsKo = { thing: ["기록서", "나침반"], animal: ["늑대", "올빼미"], human: ["치유사", "수호자"], deity: ["지혜의 신"], insect: ["꿀벌"], microbe: ["효모"], nature: ["바다"] };
const nextObjectPoolsEn = { thing: ["Book", "Compass"], animal: ["Wolf", "Owl"], human: ["Healer", "Guardian"], deity: ["Deity"], insect: ["Bee"], microbe: ["Yeast"], nature: ["Ocean"] };

const reasonKo = { "木": "성장의 기운.", "火": "열정의 기운.", "土": "안정의 기운.", "金": "결단의 기운.", "水": "통찰의 기운." };
const reasonEn = { "木": "Growth trace.", "火": "Passion trace.", "土": "Stability trace.", "金": "Order trace.", "水": "Insight trace." };

const pastLifeData = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsKo[i%9], desc: `${i+1}수의 흔적.`, homework: "평정심 유지." }));
const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsEn[i%9], desc: `No.${i+1} trace.`, homework: "Keep balance." }));
const reincarnationData = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesKo[i%9], mission: "에너지 완성." }));
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesEn[i%9], mission: "Complete energy." }));

const sideEffects = ["디저트 흡입", "말끝에 토 달기", "멍함", "양말 실종"];
const sideEffectsEn = ["Dessert cravings", "Back-talking", "Zoning out", "Lost socks"];
const quoteData = { "인생": [{ text: "꽃은 제 시간에 핀다." }] };
const quoteDataEn = { "life": [{ text: "Flowers bloom in time." }] };

// Utils
function pickCategoryByElement(s, l, n) { return "thing"; }
