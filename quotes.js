/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

const i18n = {
    ko: {
        title: "운명공학 데이터 분석", 
        desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
        nameLabel: "성명(예: 강화산)", 
        birthLabel: "양력생일(예: 19901208)", 
        btn: "리포트 생성하기",
        loadSeal: "분석중", 
        loadTitle: "당신의 운명 에너지를 조합 중...",
        loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", 
        tab2Btn: "전생 기록", 
        tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료", 
        sec2: "약점 보완 전략", 
        advise: "현생 조언", 
        practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", 
        tab3Title: "내세 분석 자료", 
        pastJob: "전생의 직업", 
        pastHomework: "전생의 과업", 
        nextDest: "다음 목적지", 
        nextObj: "다음 생명체", 
        nextMission: "내세 행복을 위한 수행"
    },
    en: {
        title: "Destiny Engineering Analysis", 
        desc: "We extract your signature energy from your name and birth date.",
        nameLabel: "Name", 
        birthLabel: "Birth (YYYYMMDD)", 
        btn: "Generate Report",
        loadSeal: "Analyzing", 
        loadTitle: "Combining energy...",
        loadDesc: "Please wait a moment.",
        tab1Btn: "Fortune", 
        tab2Btn: "Past Life", 
        tab3Btn: "Afterlife",
        sec1: "Energy Analysis", 
        sec2: "Reinforcement", 
        advise: "Advice", 
        practice: "Practice", 
        sideEffect: "Side Effects",
        tab2Title: "Past-Life Report", 
        tab3Title: "Afterlife Report", 
        pastJob: "Occupation", 
        pastHomework: "Homework", 
        nextDest: "Destination", 
        nextObj: "Object", 
        nextMission: "Mission"
    }
};

const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

/* 약점 보완 조언 */
const elementPrescriptions12 = {
    "木": ["뿌리가 뽑힌 나무의 형국입니다. 목표를 하나로 줄이고 '첫 행동'을 실행하십시오.", "생존력이 바닥났습니다. 루틴을 군대처럼 고정하십시오.", "성장의 동력이 꺼졌습니다. 매일 아침 스스로에게 할 수 있다고 선포하십시오.", "성장이 멈춘 기형적인 상태입니다. 가지를 쳐내고 3개만 남기십시오.", "위태로운 고목의 모습입니다. 확장을 멈추고 내실을 다지십시오.", "의존이 심각합니다. 주도권을 당신이 직접 잡으십시오.", "아마추어의 에너지가 흐릅니다. 반복 작업을 자동화하십시오.", "마무리가 안 되는 고질병이 있습니다. 사용자 관점에서 정리하십시오.", "정점에 올랐으나 내려갈 준비가 안 됐습니다. 템플릿을 만드십시오.", "불필요한 욕심이 눈을 가립니다. 핵심만 남기십시오.", "로드맵이 없는 근시안적 태도가 문제입니다. 실행과 운영을 분리하십시오.", "궁극의 단계로 가야 합니다. 자동 시스템을 구축하십시오."],
    "火": ["내면의 열정이 식었습니다. 붉은색 아이템을 지니고 심박수를 올리십시오.", "기록이 없는 공허한 불꽃입니다. 메모를 생존 수단으로 삼으십시오.", "번아웃이 눈앞에 왔습니다. 휴식도 일정에 넣으십시오.", "집중 포인트가 없습니다. 대상을 단 하나로 좁히십시오.", "근거 없는 자신감이 화를 부릅니다. 데이터와 증거를 붙이십시오.", "스스로를 태워 죽이고 있습니다. 강제로 멈추고 숨을 고르십시오.", "감정 기복이 운명을 갉아먹습니다. 냉정함을 유지하십시오.", "열정은 있으나 성과물이 없습니다. 결과로 증명하십시오.", "독선적인 리더십이 문제입니다. 톤을 한 단계 낮추십시오.", "말을 줄이고 결과로 보여주십시오. 침묵이 강력한 에너지입니다.", "영향력은 크나 책임감이 비었습니다. 의무를 다하십시오.", "규칙 없는 불은 재앙입니다. 철저한 규칙을 만드십시오."],
    "土": ["디딜 땅이 없는 허공의 운명입니다. 오늘 할 일 딱 하나만 끝내십시오.", "주변이 어지러워 운이 막혔습니다. 정리정돈을 즉시 하십시오.", "이용당하기 쉬운 상태입니다. 거절의 선을 확실히 그으십시오.", "미루는 습관이 운명을 좀먹습니다. 마감 시간을 무조건 지키십시오.", "과부하가 걸렸습니다. 모든 짐을 혼자 지지 마십시오.", "정체가 성장을 막습니다. 자원을 적절히 배분하십시오.", "기초 체력이 무너졌습니다. 식사와 수면을 고정하십시오.", "썩어가는 고인물 상태입니다. 작은 변화부터 시도하십시오.", "소통이 부족합니다. 당신의 의도를 명확히 전달하십시오.", "완벽한 안전은 환상입니다. 새로운 실험을 허용하십시오.", "돈과 시간 관리가 안 되어 기반이 샙니다. 철저히 관리하십시오.", "정체된 에너지를 풀어주십시오. 유연함을 받아들여야 합니다."],
    "金": ["칼날이 무뎌졌습니다. 기준을 하나만 정하고 지키십시오.", "결정 장애에 빠졌습니다. 선택지를 반으로 줄이십시오.", "말이 길면 권위가 떨어집니다. 짧고 명확하게 말하십시오.", "정리되지 않은 삶은 위험합니다. 정산과 정리를 습관화하십시오.", "비판만 하고 대안이 없습니다. 개선안을 제시하십시오.", "규칙이 당신을 옥죄고 있습니다. 핵심만 남기고 파괴하십시오.", "주변을 다 베어버리고 있습니다. 한 박자 쉬고 말하십시오.", "완성도는 좋으나 마무리가 늦습니다. 마감력을 키우십시오.", "원칙에 매몰되어 상황 파악을 못 합니다. 유연함을 배우십시오.", "공감이 없는 논리는 고립을 부릅니다. 따뜻한 가슴을 회복하십시오.", "너무 팽팽한 활시위는 끊어집니다. 10%의 여백을 두십시오.", "공정함과 따뜻함의 균형이 필요합니다. 명검이 되기 위한 과정입니다."],
    "水": ["생각의 늪에 빠졌습니다. 당장 생각을 멈추고 움직이십시오.", "정보 과부하로 불안합니다. 입력을 차단하고 내면에 집중하십시오.", "깊이는 있으나 결론이 없습니다. 결론을 서면으로 남기십시오.", "기회가 썩어가고 있습니다. 임시 결론이라도 세우십시오.", "통찰을 구조화하지 못합니다. 머릿속 지도를 문서로 만드십시오.", "멀티태스킹은 독입니다. 한 번에 하나씩만 처리하십시오.", "과몰입으로 감각이 마비되었습니다. 산책과 잠으로 리셋하십시오.", "완성도는 마감에서 결정됩니다. 마감 시간을 엄수하십시오.", "소극적인 태도가 문제입니다. 목소리를 명확히 내십시오.", "감정의 바닥에 가기 전 루틴을 방패로 삼으십시오.", "지혜를 독점하지 말고 나누십시오. 운이 순환됩니다.", "집착을 내려놓으십시오. 물의 힘은 흐름에서 나옵니다."]
};

const enPrescriptions12 = {
    "木": Array(12).fill("Focus on action and ONE goal."),
    "火": Array(12).fill("Control your passion and document ideas."),
    "土": Array(12).fill("Solidify your foundation and clean your space."),
    "金": Array(12).fill("Be sharp, decisive, and clear."),
    "水": Array(12).fill("Stop overthinking and create flow.")
};

const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "양말 한 짝 실종", "리모컨 쥐고 찾기", "새벽 2시 방 정리"];
const sideEffectsEn = ["Dessert cravings", "Talking back", "Lost socks", "Remote search", "2 AM cleaning"];

const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin"];
const nameTailEn = ["is","a","en","or","el"];

const epithetKoByElement = { "木": ["푸른"], "火": ["태양의"], "土": ["대지의"], "金": ["은빛의"], "水": ["물결의"] };
const epithetEnByElement = { "木": ["Verdant"], "火": ["Solar"], "土": ["Earth"], "金": ["Silver"], "水": ["Tide"] };

const detailedDesc = {
    "개척": "무에서 유를 창조하는 시작의 에너지가 강합니다. 선구자적 기질이 있습니다.",
    "조화": "관계와 균형의 에너지가 핵심입니다. 협력을 통해 결실을 맺습니다.",
    "발전": "확장과 표현의 기운이 넘칩니다. 끊임없이 변화하며 성장합니다.",
    "기반": "안정과 내실을 기하는 힘이 강합니다. 단단한 지속력을 가집니다.",
    "중심": "통합과 리더십의 기운입니다. 중추적인 역할을 수행할 운명입니다.",
    "책임": "신뢰와 헌신의 에너지가 깊습니다. 명예로운 자리에 오릅니다.",
    "탐구": "분석과 통찰의 기운이 날카롭습니다. 독보적인 지식을 쌓습니다.",
    "성과": "실행과 결과의 에너지가 뚜렷합니다. 추진력이 강점입니다.",
    "완성": "마무리와 지혜의 기운이 성숙합니다. 타의 귀감이 되는 완성도를 가집니다."
};

const elementAttributesKo = { "木": { name: "나무" }, "火": { name: "불" }, "土": { name: "흙" }, "金": { name: "쇠" }, "水": { name: "물" } };
const elementAttributesEn = { "木": { name: "Wood" }, "火": { name: "Fire" }, "土": { name: "Earth" }, "金": { name: "Metal" }, "水": { name: "Water" } };

const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a = (n - 1) % 9; const b = Math.floor((n - 1) / 9);
        out[n] = { 
            title: `${String(n).padStart(2,"0")}수·${baseKo[a].key}(${stageKo[b]})`, 
            desc: `<b>[특성]</b> ${detailedDesc[baseKo[a].key]}<br><b>[상태]</b> '${stageKo[b]}'의 흐름입니다.`,
            titleEn: `No.${n} ${baseEn[a].key} (${stageEn[b]})`,
            descEn: `In the '${stageEn[b]}' phase.`
        };
    }
    return out;
})();

const pastLifeData = Array.from({ length: 81 }, (_, i) => { return { job: "전생의 지식인", desc: "기록과 통찰의 삶.", homework: "결핍을 채우는 연습." }; });
const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => { return { job: "Scholar", desc: "Life of insight.", homework: "Fill the void." }; });
const reincarnationData = Array.from({ length: 81 }, (_, i) => { return { place: "호숫가", mission: "내면의 평화 완성." }; });
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => { return { place: "Lakeside", mission: "Inner peace." }; });

function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function makePastNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)}`; }
function makePastNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)}`; }
function makeNextLifeNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)}`; }
function makeNextLifeNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)}`; }
function pickCategoryByElement(s, l, n) { return "nature"; }
