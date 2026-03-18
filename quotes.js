/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 0) 언어 데이터 (i18n)
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

// 1) 오행 맵핑 데이터
const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

// 2) 81수 기본 구조 (Pioneer, Harmony 등)
const baseKo = [{key:"개척",core:"시작·독립",risk:"독단"},{key:"조화",core:"협력·중재",risk:"의존"},{key:"발전",core:"성장·표현",risk:"산만"},{key:"기반",core:"안정·축적",risk:"완고"},{key:"중심",core:"균형·통합",risk:"통제"},{key:"책임",core:"의무·봉사",risk:"과부담"},{key:"탐구",core:"분석·통찰",risk:"고립"},{key:"성과",core:"현실·재물",risk:"집착"},{key:"완성",core:"마무리·지혜",risk:"허무"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

// 3) 이름 생성 유틸리티 데이터 (중복 선언 에러 방지를 위해 딱 한 번만 정의)
const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현","보","유","라","휘","린","겸","담","준","채","온"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성","람","빛","솔","진","담","율","아","늘","준","온"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin","Mira","Elian","Nova","Cairn","Sola","Riven","Lumen","Astra","Veyra","Neris","Kaia"];
const nameTailEn = ["is","a","en","or","el","yn","on","ia","us","ar","eth","iel","ara","eus","ir","ae"];

const epithetKoByElement = { "木": ["푸른", "개척의"], "火": ["태양의", "불꽃의"], "土": ["대지의", "기반의"], "金": ["은빛의", "철율의"], "水": ["물결의", "심해의"] };
const epithetEnByElement = { "木": ["Verdant", "Pathfinding"], "火": ["Solar", "Ember"], "土": ["Earthforged", "Rooted"], "金": ["Silver-edged", "Ironlaw"], "水": ["Tideborn", "Abyssal"] };

const reasonKo = { "木": "성장과 기획의 기운이 짙습니다.", "火": "열정과 확산의 기운이 짙습니다.", "土": "안정과 포용의 기운이 짙습니다.", "金": "원칙과 결단의 기운이 짙습니다.", "水": "통찰과 유연의 기운이 짙습니다." };
const reasonEn = { "木": "Growth and planning trace.", "火": "Passion and expansion trace.", "土": "Stability and support trace.", "金": "Logic and decision trace.", "水": "Insight and flexibility trace." };

// 4) 핵심 로직 함수 (HTML에서 호출하는 것들)
function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function get81CoreKo(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseKo[a].key, stage:stageKo[b]}; }
function get81CoreEn(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseEn[a].key, stage:stageEn[b]}; }

function makePastNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)}${pickFrom(["공","랑","도령","낭","장","선생"], n)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)} ${info.base}의 ${info.stage}`; }
function makePastNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)} ${info.base} (${info.stage})`; }
function makePastNameReasonKo(n, s, l, m){ return `81수(${n}수)와 ${s} 기운이 조합된 전생의 호칭입니다.`; }
function makePastNameReasonEn(n, s, l, m){ return `Derived from No.${n} and dominant ${s}.`; }

function makeNextLifeNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)} ${info.base}의 ${info.stage}`; }
function makeNextLifeNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)} ${info.base} (${info.stage})`; }
function makeNextNameReasonKo(n, s, l, m){ return `부족한 ${l} 기운을 보완하는 방향으로 구성되었습니다.`; }
function makeNextNameReasonEn(n, s, l, m){ return `Designed to reinforce your lacking ${l} energy.`; }

function pickCategoryByElement(s, l, n) { const map={"木":"nature","火":"deity","土":"thing","金":"thing","水":"animal"}; return map[s]||"thing"; }

// 5) 메인 데이터셋 및 12단계 처방
const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a=(n-1)%9, b=Math.floor((n-1)/9);
        out[n] = { title: `${String(n).padStart(2,"0")}수·${baseKo[a].key}(${stageKo[b]})`, desc: `${baseKo[a].core}의 기운이 발현됩니다.`, titleEn: `No.${n}·${baseEn[a].key}(${stageEn[b]})`, descEn: `Your energy is in the ${stageEn[b]} phase.` };
    }
    return out;
})();

const elementPrescriptions12 = {
    "木": ["초심☆ 행동.", "기초☆ 루틴.", "안정☆ 피드백.", "정진☆ 우선순위.", "성장☆ 기준.", "확장☆ 품질.", "숙련☆ 자동화.", "완성☆ 정리.", "정점☆ 표준.", "초월☆ 핵심.", "대성☆ 로드맵.", "궁극☆ 시스템."],
    "火": ["초심☆ 실행.", "기초☆ 기록.", "안정☆ 블록.", "정진☆ 집중.", "성장☆ 근거.", "확장☆ 휴식.", "숙련☆ 조절.", "완성☆ 마무리.", "정점☆ 톤.", "초월☆ 신뢰.", "대성☆ 책임.", "궁극☆ 규칙."],
    "土": ["초심☆ 기반.", "기초☆ 정리.", "안정☆ 경계.", "정진☆ 마감.", "성장☆ 역할.", "확장☆ 분배.", "숙련☆ 관리.", "완성☆ 변화.", "정점☆ 정중동.", "초월☆ 실험.", "대성☆ 자산.", "궁극☆ 유지."],
    "金": ["초심☆ 기준.", "기초☆ 결정.", "안정☆ 근거.", "정진☆ 루틴.", "성장☆ 개선.", "확장☆ 핵심.", "숙련☆ 조절.", "완성☆ 마감.", "정점☆ 유연.", "초월☆ 공감.", "대성☆ 밸런스.", "궁극☆ 조화."],
    "水": ["초심☆ 실행.", "기초☆ 제한.", "안정☆ 결론.", "정진☆ 임시.", "성장☆ 구조.", "확장☆ 싱글.", "숙련☆ 리셋.", "완성☆ 확정.", "정점☆ 조용.", "초월☆ 방패.", "대성☆ 지혜.", "궁극☆ 흐름."]
};
const enPrescriptions12 = elementPrescriptions12;

const elementAttributesKo = { "木": { name: "나무", trait: "성장" }, "火": { name: "불", trait: "열정" }, "土": { name: "흙", trait: "안정" }, "金": { name: "쇠", trait: "결단" }, "水": { name: "물", trait: "지혜" } };
const elementAttributesEn = { "木": { name: "Wood", trait: "Growth" }, "火": { name: "Fire", trait: "Passion" }, "土": { name: "Earth", trait: "Stability" }, "金": { name: "Metal", trait: "Logic" }, "水": { name: "Water", trait: "Wisdom" } };

const pastJobsKo = ["기록관","훈장","전령","의원","무역상","조향사","장인","수행자","관측자"];
const pastJobsEn = ["Archivist","Tutor","Messenger","Healer","Merchant","Perfumer","Artisan","Temple","Observer"];
const nextPlacesKo = ["서재","등대","목장","연구소","도시","작업실","우주","호수","촬영장"];
const nextPlacesEn = ["Study","Lighthouse","Ranch","Lab","City","Studio","Space","Lake","Set"];
const nextObjectPoolsKo = { thing:["기록서"], animal:["늑대"], human:["치유사"], deity:["지혜신"], insect:["꿀벌"], microbe:["효모"], nature:["바다"] };
const nextObjectPoolsEn = { thing:["Book"], animal:["Wolf"], human:["Healer"], deity:["Deity"], insect:["Bee"], microbe:["Yeast"], nature:["Ocean"] };

const pastLifeData = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsKo[i%9], desc: `${i+1}수 성향.`, homework: "평정심 유지." }));
const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => ({ job: pastJobsEn[i%9], desc: `No.${i+1} trace.`, homework: "Keep balance." }));
const reincarnationData = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesKo[i%9], mission: "에너지 완성." }));
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => ({ place: nextPlacesEn[i%9], mission: "Complete energy." }));

const sideEffects = ["디저트 흡입", "말끝에 토 달기", "멍함", "양말 실종"];
const sideEffectsEn = ["Dessert cravings", "Back-talking", "Zoning out", "Lost socks"];

const quoteData = { "인생": [{ text: "꽃은 제 시간에 핀다." }, { text: "방향이 중요하다." }] };
const quoteDataEn = { "life": [{ text: "Every flower blooms in its time." }, { text: "Direction matters." }] };

// 6) HTML 크래시 방지용 닉네임 (81수 시스템에서는 title을 쓰지만 안전장치로 유지)
const nicknamesKo = { "木": { veryStrong: "개척자", strong: "기획자", normal: "중재자", weak: "싹", veryWeak: "가지" }, "火": { veryStrong: "태양", strong: "리더", normal: "등불", weak: "별빛", veryWeak: "온기" }, "土": { veryStrong: "산", strong: "수호자", normal: "관리자", weak: "언덕", veryWeak: "정령" }, "金": { veryStrong: "심판자", strong: "검객", normal: "조각가", weak: "세공사", veryWeak: "철학자" }, "水": { veryStrong: "소용돌이", strong: "항해사", normal: "시냇물", weak: "예술가", veryWeak: "연못" } };
const nicknamesEn = nicknamesKo;
