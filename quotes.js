/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 1. i18n 라벨 업데이트 (전생/내세 활동 중심지 항목 추가)
const i18n = {
    ko: {
        title: "수리성명학 데이터 분석", 
        desc: "81수리 체계 성명의 파동과 탄생 시계열 지표를 바탕으로 당신의 시그니처 에너지 구조가 도출됩니다.",
        nameLabel: "성명", birthLabel: "양력 8자리(19901208)", hourLabel: "생시(시간) 선택", btn: "리포트 생성하기",
        loadSeal: "분석중", loadTitle: "당신의 운명 에너지를 조합 중...", loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", tab2Btn: "전생 기록", tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료(성명+월 시너지)", sec2: "약점 보완 전략", advise: "현생 조언", practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", tab3Title: "내세 분석 자료", 
        pastDest: "전생 활동 중심지", // 추가
        pastJob: "전생의 직업", 
        pastHomework: "전생의 과업", 
        nextDest: "내세 활동 중심지", 
        nextObj: "내세의 직업", 
        nextMission: "내세의 임무",
        logicTitle: "◈ Destiny Lab 분석 방법론",
        l1Title: "〰️ 소리 주파수 분석 (Name Vibrations)",
        l1Desc: "성명을 고유 주파수를 가진 에너지로 변환합니다. 발음 오행이 개인의 기운에 간섭하는 데이터를 수치화했습니다.",
        l2Title: "🗓️ 시계열 지표 대입 (Solar Term Time-series)",
        l2Desc: "탄생 순간의 배경을 '선천적 변수'로 설정합니다. 탄생 순간의 에너지 밀도를 분석하여 당신의 근원을 도출합니다.",
        l3Title: "🧬 81수리 상호작용 엔진",
        l3Desc: "선천적 기운과 후천적 성명 에너지의 조합 알고리즘으로 현생-전생-내세의 데이터를 연산합니다."
    },
    en: {
        title: "Suri Numerology Analysis", 
        desc: "Analyzes the 81-numerology system based on name vibrations and birth indicators to derive your signature energy structure.",
        nameLabel: "Name", birthLabel: "Birthdate (YYYYMMDD)", hourLabel: "Select Birth Hour", btn: "Generate Report",
        loadSeal: "Analyzing", loadTitle: "Combining your destiny energy...", loadDesc: "Please wait a moment.",
        tab1Btn: "Current Life", tab2Btn: "Past Life", tab3Btn: "Afterlife",
        sec1: "Five Elements Dynamics Profile", sec2: "Weakness Strategy", advise: "Life Advice", practice: "Action Plan", 
        sideEffect: "Note: Excessive compensation may cause side effects.",
        tab2Title: "Past-Life Analysis", tab3Title: "Afterlife Reservations", 
        pastDest: "Past Activity Center",
        pastJob: "Past Occupation", 
        pastHomework: "Past Mission", 
        nextDest: "Future Domain", 
        nextObj: "Future Occupation", 
        nextMission: "Future Assignment",
        logicTitle: "◈ Destiny Lab Methodology",
        l1Title: "〰️ Name Vibrations",
        l1Desc: "Converts names into energy with unique frequencies. We quantify how phonetic elements interfere with an individual's aura.",
        l2Title: "🗓️ Solar Term Time-series",
        l2Desc: "Sets the seasonal background at birth as an 'innate variable.' We derive your primal environment by analyzing 24 solar terms.",
        l3Title: "🧬 81-Suri Interaction Engine",
        l3Desc: "Calculates past and future scenarios using algorithms derived from the 'Harmony & Conflict' of innate and acquired energies."
    }
};
const elRelation = {
    "木": { sheng: "火", ke: "土", name: "목(木)" },
    "火": { sheng: "土", ke: "金", name: "화(火)" },
    "土": { sheng: "金", ke: "水", name: "토(土)" },
    "金": { sheng: "水", ke: "木", name: "금(金)" },
    "水": { sheng: "木", ke: "火", name: "수(水)" }
};
const hanjaMap = { "목(木)": "木", "화(火)": "火", "토(土)": "土", "금(金)": "金", "수(水)": "水" };

/* [필수 데이터: 영문 성함 재료] */
const nameRootEn = ["Al", "Be", "Ro", "Lu", "Ma", "E", "I", "Ka", "Kh", "Ph", "Ri", "Ni", "San", "Ben", "Pha", "Di", "Le", "Mi", "Nel", "Bel", "An", "El", "O", "U", "Cl", "Fl", "Br", "Te", "St", "Ke", "Me", "Jo", "Je", "Ca", "Pi", "Ba", "Sha", "Ta", "Na", "Whi", "Lin", "Ky", "Da", "On", "Yu", "Jun", "Yun", "Sul", "Ye", "Jin", "Hye"];
const nameTailEn = ["to", "ra", "na", "a", "ri", "el", "on", "ro", "s", "nel", "d", "k", "te", "sha", "lu", "ni", "bel", "run", "in", "um", "tis", "ti", "na", "sia", "an", "더", "ell", "en", "i", "o", "a", "ta", "카", "de", "le", "mi", "pi", "st", "tr", "반", "sen", "kan", "yan", "lin", "ron", "rill", "lan", "le", "ra", "na", "no"];

const hangulElements = { 
    'ㄱ': '목(木)','ㄲ': '목(木)','ㅋ': '목(木)', 
    'ㄴ': '화(火)','ㄷ': '화(火)','ㄸ': '화(火)','ㄹ': '화(火)','ㅌ': '화(火)', 
    'ㅇ': '토(土)','ㅎ': '토(土)', 
    'ㅅ': '금(金)','ㅆ': '금(金)','ㅈ': '금(金)','ㅉ': '금(金)','ㅊ': '금(金)', 
    'ㅁ': '수(水)','ㅂ': '수(水)','ㅃ': '수(水)','ㅍ': '수(水)' 
};
const alphabetElements = { 
    'A': '목(木)','E': '목(木)','I': '목(木)','O': '목(木)','U': '목(木)','Y': '목(木)', 
    'B': '수(水)','P': '수(水)','M': '수(水)','F': '수(水)','W': '수(水)', 
    'C': '화(火)','G': '화(火)','J': '화(火)','L': '화(火)','S': '화(火)', 
    'D': '토(土)','N': '토(土)','T': '토(土)','H': '토(土)', 
    'K': '금(金)','R': '금(金)','V': '금(金)','X': '금(金)','Q': '금(金)','Z': '금(金)' 
};
// 💡 [운명공학 4,500조합 동적 엔진 데이터]
const baseArchetypes = {
    "목(木)": "끊임없이 뻗어나가며 타인의 잠재력을 일깨우는 '성장과 개척의 선구자'",
    "화(火)": "특유의 열정으로 어둠을 밝히고 대중에게 명확한 비전을 제시하는 '영감과 통찰의 등대'",
    "토(土)": "흔들림 없는 신뢰를 바탕으로 사람과 사람을 연결하고 포용하는 '안정과 조화의 중재자'",
    "금(金)": "날카로운 판단력으로 불필요한 것을 잘라내고 흔들리지 않는 원칙을 세우는 '질서와 규범의 설계자'",
    "수(水)": "어떠한 환경에서도 유연하게 적응하며 막힌 곳을 뚫어내는 '지혜와 소통의 전략가'"
};

const baseArchetypesEn = {
    "목(木)": "a 'Pioneer of Growth and Exploration' who constantly expands and awakens the potential of others",
    "화(火)": "a 'Beacon of Inspiration and Insight' who illuminates the dark with unique passion and provides clear vision",
    "토(土)": "a 'Mediator of Stability and Harmony' who connects and embraces people based on unwavering trust",
    "금(金)": "an 'Architect of Order and Norms' who cuts away the unnecessary with sharp judgment and establishes unshakable principles",
    "수(水)": "a 'Strategist of Wisdom and Communication' who flexibly adapts to any environment and clears blocked paths"
};

const nameModifiers = [
    "이름의 주파수가 지닌 폭발적인 실행력이 더해져,",
    "당신의 성명에 깃든 섬세하고 예리한 분석력이 개입하여,",
    "이름이 뿜어내는 따뜻하고 부드러운 포용력이 시너지를 일으켜,",
    "성명의 파동이 가진 냉철하고 흔들림 없는 이성이 중심을 잡아주어,",
    "이름에 내재된 유연하고 감각적인 사교성이 날개를 달아주어,",
    "당신의 성명이 지닌 타협을 모르는 완벽주의가 결합되어,",
    "이름의 주파수가 부여하는 틀을 깨는 창의적 영감이 더해져,",
    "성명의 기운에 담긴 불굴의 의지와 끈기가 동력을 제공하여,",
    "이름이 이끄는 직관적이고 통찰력 있는 안목이 길을 밝혀주어,",
    "당신의 성명에 깃든 대중을 사로잡는 흡입력이 증폭되어,",
    "이름의 파동이 가진 치밀하고 전략적인 사고가 뼈대를 세워주어,",
    "성명의 기운에 스며든 타인을 치유하는 깊은 공감 능력이 발현되어,",
    "이름의 주파수가 만들어내는 압도적인 카리스마가 힘을 실어주어,",
    "당신의 성명에 내재된 리스크를 두려워하지 않는 대담함이 더해져,",
    "이름이 뿜어내는 순수하고 맑은 지적 호기심이 시야를 넓혀주어,",
    "성명의 파동에 담긴 흔들림 없는 강직한 신념이 뿌리를 내려주어,",
    "이름의 주파수가 지닌 만물을 조화롭게 엮어내는 융합력이 개입하여,",
    "당신의 성명에 깃든 본질을 꿰뚫어 보는 예리한 심미안이 더해져,",
    "이름이 이끄는 한계를 돌파하는 강인한 생명력이 시너지를 내어,",
    "성명의 기운이 가진 위기를 기회로 바꾸는 순발력이 결합되어,",
    "이름의 주파수가 부여하는 공정하고 투명한 도덕성이 중심을 잡아주어,",
    "당신의 성명이 지닌 미래를 앞서 읽는 선견지명이 날개를 달아주어,",
    "이름에 내재된 어떤 환경에도 스며드는 강한 적응력이 더해져,",
    "성명의 파동이 만들어내는 무에서 유를 창조하는 기획력이 발현되어,",
    "이름이 품고 있는 조용하지만 묵직한 배후의 통제력이 더해져,",
    "성명에 깃든 남들이 보지 못하는 이면의 가치를 발굴하는 힘이 개입하여,",
    "당신의 주파수가 지닌 한 번 물면 놓지 않는 지독한 집념이 동력이 되어,",
    "이름이 발산하는 누구와도 적을 만들지 않는 처세술이 윤활유가 되어,",
    "성명의 기운에 내재된 낡은 것을 부수고 새로 세우는 혁명적 기질이 더해져,",
    "이름의 파동이 이끄는 스스로를 객관화하고 끊임없이 쇄신하는 지혜가 발현되어,"
];

const nameModifiersEn = [
    "With the explosive execution power of your name's frequency,",
    "Intervened by the delicate and sharp analytical skills imbued in your name,",
    "Creating synergy with the warm and gentle embrace emitted by your name,",
    "Centered by the cool-headed and unwavering rationality of your name's wave,",
    "Given wings by the flexible and sensuous sociability inherent in your name,",
    "Combined with the uncompromising perfectionism of your name,",
    "Added with the groundbreaking creative inspiration granted by your name's frequency,",
    "Powered by the indomitable will and perseverance contained in your name's energy,",
    "Guided by the intuitive and insightful eye led by your name,",
    "Amplified by the captivating charisma imbued in your name,",
    "Framed by the meticulous and strategic thinking of your name's wave,",
    "Manifesting the deep empathy to heal others permeated in your name's energy,",
    "Empowered by the overwhelming charisma created by your name's frequency,",
    "Added with the boldness that does not fear risks inherent in your name,",
    "Broadened by the pure and clear intellectual curiosity emitted by your name,",
    "Rooted by the firm and unwavering conviction contained in your name's wave,",
    "Intervened by the harmonizing power of your name's frequency that weaves everything together,",
    "Added with the sharp aesthetic sense that pierces through the essence imbued in your name,",
    "Creating synergy with the strong vitality to break through limits led by your name,",
    "Combined with the quick-wittedness to turn crises into opportunities of your name's energy,",
    "Centered by the fair and transparent morality granted by your name's frequency,",
    "Given wings by the foresight to read the future imbued in your name,",
    "Added with the strong adaptability to permeate any environment inherent in your name,",
    "Manifesting the planning ability to create something out of nothing generated by your name's wave,",
    "Added with the quiet but heavy behind-the-scenes control harbored in your name,",
    "Intervened by the power to unearth hidden values unseen by others imbued in your name,",
    "Powered by the fierce tenacity of your frequency that never lets go once bitten,",
    "Lubricated by the diplomacy emitting from your name that makes no enemies,",
    "Added with the revolutionary temperament to destroy the old and build the new inherent in your name's energy,",
    "Manifesting the wisdom to objectify and constantly renew oneself led by your name's wave,"
];

const timeDirectives = [
    "탁상공론을 멈추고 현장에서 직접 발로 뛰며 실질적인 성과를 증명하는 것이 이번 생의 핵심 과업입니다.",
    "타인의 숨겨진 감정을 어루만지고 보이지 않는 갈등을 해소하여 공동체의 온도를 높이는 것이 당신의 진정한 과업입니다.",
    "기존의 낡은 관습과 비효율을 과감히 타파하고, 당신만의 합리적인 새로운 룰을 정립하는 것이 현생의 과업입니다.",
    "흩어진 정보와 자원을 하나로 모아, 누구도 무너뜨릴 수 없는 견고하고 안전한 시스템을 구축하는 것입니다.",
    "자신을 화려하게 드러내기보다 배후에서 치밀한 판을 짜고, 조직 전체를 성공으로 이끄는 킹메이커가 되는 것입니다.",
    "자신의 지식과 경험을 매뉴얼화하여 후학을 양성하고, 다음 세대의 성장을 돕는 든든한 멘토가 되는 것입니다.",
    "아무도 가지 않은 미지의 영역에 가장 먼저 깃발을 꽂고, 시대의 트렌드를 선도하는 개척자가 되는 것입니다.",
    "소외되고 약한 자들의 목소리를 대변하며, 사회의 기울어진 운동장을 평평하게 만드는 정의의 수호자가 되는 것입니다.",
    "머릿속의 영감을 시각적, 언어적 예술로 승화시켜 대중의 영혼에 깊은 울림을 주는 창작자가 되는 것입니다.",
    "방대한 데이터를 냉철하게 분석하여 리스크를 차단하고, 조직의 자산을 가장 효율적으로 증식시키는 것입니다.",
    "위기의 순간에 가장 먼저 나서서 혼란을 수습하고, 사람들에게 명확한 돌파구를 제시하는 구원자가 되는 것입니다.",
    "서로 다른 이해관계를 가진 집단들을 하나로 연결하여, 모두가 만족하는 최적의 합의점을 이끌어내는 것입니다.",
    "눈앞의 작은 이익에 연연하지 않고, 10년 뒤의 미래를 내다보는 거시적인 마스터플랜을 설계하는 것입니다.",
    "자신만의 독보적인 기술이나 장인정신을 극한으로 연마하여, 대체 불가능한 분야의 최고 권위자가 되는 것입니다.",
    "사람들의 재능과 장점을 단숨에 파악하여, 그들이 가장 빛날 수 있는 자리에 배치하는 안목을 발휘하는 것입니다.",
    "거친 환경 속에서도 포기하지 않고 기어이 결실을 맺어, 인간 승리의 표본으로서 타인에게 희망을 주는 것입니다.",
    "단순한 이윤 창출을 넘어, 철학과 가치가 담긴 브랜드를 구축하여 세상에 선한 영향력을 널리 퍼뜨리는 것입니다.",
    "복잡하게 얽힌 문제의 핵심을 꿰뚫고, 군더더기 없는 가장 간결하고 명쾌한 해결책을 세상에 내놓는 것입니다.",
    "국경과 언어, 문화의 장벽을 넘어 다양한 사람들과 교류하며 글로벌한 네트워크의 중심축이 되는 것입니다.",
    "지켜야 할 소중한 전통과 본질적인 가치를 훼손되지 않게 보존하고, 이를 현대적으로 재해석하여 계승하는 것입니다.",
    "자신의 약점마저 매력으로 승화시켜 대중의 사랑과 지지를 받는, 시대의 강력한 아이콘이자 인플루언서가 되는 것입니다.",
    "감정에 휘둘리지 않는 차가운 이성으로 공과 사를 명확히 구분하여, 투명하고 공정한 잣대를 세상에 세우는 것입니다.",
    "일상을 벗어난 자유로운 탐험과 경험을 통해 얻은 철학을 대중에게 친근하고 설득력 있는 언어로 전달하는 것입니다.",
    "생사가 오가는 치열한 경쟁 속에서도 평정심을 유지하며, 결국 최후의 승리를 거머쥐는 승부사가 되는 것입니다.",
    "세상의 소음에서 벗어나 스스로의 내면을 깊이 탐구하고, 타인에게 정신적 안식처를 제공하는 구도자가 되는 것입니다.",
    "파편화된 지식들을 하나로 꿰어내어, 시대를 관통하는 거대한 통찰력과 학문적 지평을 완성하는 것입니다.",
    "실패를 두려워하지 않는 과감한 투자와 베팅으로, 남들이 보지 못한 숨겨진 부의 흐름을 장악하는 것입니다.",
    "단 하나의 목표를 향해 모든 에너지를 쏟아부어, 그 누구도 넘볼 수 없는 압도적인 성과를 기록하는 것입니다.",
    "불필요한 인간관계를 과감히 정리하고, 진정으로 가치 있는 소수와의 깊은 신뢰를 통해 견고한 성을 쌓는 것입니다.",
    "변화하는 시대의 흐름에 유연하게 올라타, 위기를 성장의 발판으로 바꾸는 탁월한 위기관리자가 되는 것입니다."
];

const timeDirectivesEn = [
    "your ultimate mission in this life is to stop armchair theorizing and prove practical results by acting directly in the field.",
    "your true mission is to soothe the hidden emotions of others and resolve unseen conflicts to raise the warmth of the community.",
    "your mission in this life is to boldly break down old customs and inefficiencies, and establish your own rational new rules.",
    "your mission is to gather scattered information and resources to build a solid and safe system that no one can tear down.",
    "your mission is to be a kingmaker who meticulously plans behind the scenes and leads the entire organization to success, rather than showing off.",
    "your mission is to become a reliable mentor who helps the next generation grow by documenting your knowledge and experience.",
    "your mission is to be a pioneer who plants a flag in unknown territories and leads the trends of the times.",
    "your mission is to be a guardian of justice who represents the voices of the marginalized and levels the playing field of society.",
    "your mission is to be a creator who sublimates inspiration into visual and verbal art, giving deep resonance to the souls of the public.",
    "your mission is to coldly analyze vast amounts of data to block risks and multiply the organization's assets most efficiently.",
    "your mission is to be a savior who steps up first in moments of crisis to settle chaos and present clear breakthroughs.",
    "your mission is to connect groups with different interests and draw the optimal consensus that satisfies everyone.",
    "your mission is to design a macroscopic master plan that looks 10 years into the future, rather than clinging to small immediate gains.",
    "your mission is to polish your unique skills or craftsmanship to the extreme, becoming an irreplaceable top authority in your field.",
    "your mission is to exert the insight to instantly grasp people's talents and place them where they can shine the brightest.",
    "your mission is to endure harsh environments and eventually bear fruit, giving hope to others as a model of human triumph.",
    "your mission is to build a brand imbued with philosophy and value beyond simple profit generation, spreading good influence.",
    "your mission is to pierce through the core of complexly intertwined problems and present the most concise and clear solutions.",
    "your mission is to become a central axis of a global network, interacting with diverse people across borders, languages, and cultures.",
    "your mission is to preserve precious traditions and essential values, and inherit them by reinterpreting them in a modern way.",
    "your mission is to become a powerful icon and influencer of the times, sublimating even your weaknesses into charm to gain public love.",
    "your mission is to set a transparent and fair standard in the world by clearly distinguishing public and private matters with cold rationality.",
    "your mission is to deliver the philosophy gained through free exploration outside everyday life to the public in friendly and persuasive language.",
    "your mission is to be a competitor who maintains composure even in fierce life-and-death competition, ultimately seizing the final victory.",
    "your mission is to become a seeker who deeply explores your own inner self away from the noise of the world, providing a spiritual haven for others.",
    "your mission is to weave fragmented knowledge into one, completing a massive insight and academic horizon that pierces through the times.",
    "your mission is to dominate hidden flows of wealth that others cannot see through bold investments and betting without fearing failure.",
    "your mission is to pour all your energy into a single goal, recording overwhelming achievements that no one else can match.",
    "your mission is to boldly cut off unnecessary relationships and build a solid fortress through deep trust with a truly valuable few.",
    "your mission is to flexibly ride the changing trends of the times, becoming an outstanding crisis manager who turns crises into stepping stones for growth."
];
// 💡 [Destiny Lab 정밀 엔진 DB - 한국어 전용 풀버전]

const birthCoreKo = {
    "목(木)": [
        "당신은 정체된 환경을 뚫고 솟아오르는 독립심과 자생력을 영혼의 코어로 품고 태어났습니다. 타인의 간섭을 싫어하며 스스로 주도권을 쥐고 개척하는 환경에서 최상의 능력을 발휘하지만, 지나친 독단은 주변과의 마찰을 부를 수 있습니다.",
        "당신의 근본 에너지는 멈추지 않는 확장과 실전적 지도력을 상징합니다. 이론보다 현장에서 직접 발로 뛰며 성과를 내는 것을 즐기며, 완벽주의를 조금 내려놓을 때 비로소 유연한 성장이 가능합니다.",
        "사주 시계열 데이터상 당신은 상황을 연결하여 질서를 잡는 강직한 중재 에너지를 타고났습니다. 명확한 기준을 세우는 능력이 탁월하지만, 규칙 없이 무질서하거나 감정적 호소에만 휘둘리는 상황에서는 큰 스트레스를 받습니다.",
        "당신은 극한의 압박 속에서도 해답을 찾아내는 강인한 생존력을 상징합니다. 시련을 성장의 발판으로 삼는 해결사적 기질이 있으나, 때로는 타인의 도움을 거부하는 고립된 사고에 갇히기도 합니다.",
        "당신의 코어는 사물의 본질을 설계하고 원칙을 고수하는 논리적 설계 능력을 의미합니다. 이성적 판단이 매우 빠르지만, 비논리적인 감정을 강요받는 상황에서는 체질적인 거부감을 느낍니다.",
        "당신은 타인의 잠재력을 발견하여 올바른 길로 안내하는 네비게이터의 기질을 타고났습니다. 사람의 강점을 즉각 파악하지만, 변화 의지가 없는 사람을 상대할 때는 에너지가 급격히 소진됩니다.",
        "당신은 정보를 체계화하여 실용적 자산으로 전환하는 비즈니스적 지혜를 품고 있습니다. 가치 있는 정보를 선별하는 데 능하나, 실효성 없는 이론 공부에는 흥미를 느끼지 못합니다.",
        "당신은 고결한 이상을 실현하며 사회에 강력한 영향력을 주고자 하는 에너지를 가졌습니다. 명예를 중시하며 정의로운 아름다움을 추구하지만, 저속한 이기주의 앞에서는 분노를 숨기지 못합니다.",
        "당신의 에너지는 조직 전체의 흐름을 한눈에 장악하고 통제하는 거시적 리더십을 의미합니다. 큰 판을 짜는 데 능숙하지만, 사소한 잡무에 매몰되는 환경에서는 본연의 빛을 잃습니다.",
        "당신은 찰나의 기회를 포착하여 승리로 이끄는 예리한 직관을 품고 태어났습니다. 리스크를 즐기는 승부사적 기질이 있으나, 결과가 느린 업무에서는 쉽게 인내심을 잃는 단점이 있습니다.",
        "당신의 기질은 흔들리지 않는 중심을 바탕으로 군더더기를 걷어내는 정밀 분석력을 의미합니다. 결점 없는 시스템을 선호하며, 적당히 타협하는 적당주의와는 절대 공존할 수 없습니다.",
        "당신은 보이지 않는 곳에서 거대한 시스템을 지탱하는 인내심의 소유자입니다. 내실 있는 성장을 추구하지만, 겉만 화려하고 기초가 부실한 환경에서는 심한 불안감을 느낍니다.",
        "당신은 극한의 역경을 견디고 기어이 성공의 싹을 틔우는 강인한 자생력을 가졌습니다. 시련 속에서 단단해지는 타입이나, 타인에게 지나치게 엄격한 잣대를 들이대는 경향이 있습니다.",
        "당신은 결실의 가치를 미리 파악하고 질서를 수호하는 냉철한 판단력을 가졌습니다. 투명성을 지키는 수호자적 성향이 강해 공정성이 결여된 조직에서는 버티기 힘들어합니다.",
        "당신은 파편화된 정보를 하나로 묶어 가치를 극대화하는 갈무리 능력의 소유자입니다. 무질서 속에서 규칙을 찾아내는 데 능하며, 마무리가 불분명한 일 처리를 극도로 싫어합니다.",
        "당신은 미세한 틈조차 놓치지 않는 장인 정신과 하이엔드 감각을 타고났습니다. 오차 없는 정밀함을 추구하지만, 디테일을 무시하는 투박한 작업 방식에는 적응하지 못합니다.",
        "당신의 에너지는 사회적 균형을 수호하고 공정한 가치를 실천하는 정의감을 상징합니다. 약속과 규칙을 준수하나, 권력에 의해 원칙이 훼손되는 상황에서는 극심한 정신적 고통을 겪습니다.",
        "당신은 서늘한 지성으로 다가올 위기를 대비하는 치밀한 전략가입니다. 리스크를 예측하는 능력이 뛰어나지만, 대책 없는 낙관주의자들과는 소통에 큰 어려움을 겪습니다.",
        "당신은 조직의 기강을 수호하며 부정을 경계하는 강인한 가디언의 기질을 가졌습니다. 신념이 확고하지만, 때로는 자신의 신념을 굽혀야 하는 상황에서 큰 자괴감을 느낍니다.",
        "당신은 인간사와 비즈니스 이면에 숨겨진 본질을 꿰뚫어 보는 통찰력을 가졌습니다. 근본 원인을 탐구하는 것을 즐기며, 피상적인 대화만 오가는 얕은 관계는 지양합니다.",
        "당신은 사람의 마음을 움직여 위기 상황에서 희망을 주는 섬세한 조력자의 힘을 가졌습니다. 정서적 교감을 중시하나, 인간미 없는 기계적 소통 환경에서는 숨이 막혀 합니다.",
        "당신은 세상을 깨우는 지식을 보급하고 포용하는 거대한 교육자적 기운을 품고 있습니다. 지혜를 나누는 리더십이 탁월하며, 배움에 대한 열망이 없는 환경에서는 회의감을 느낍니다.",
        "당신은 어둠 속에서 가능성을 발견하고 새로운 패러다임을 제안하는 선지자적 에너지를 가졌습니다. 창의적 대안 제시에 능하나, 보수적이고 완고한 집단과는 사사건건 충돌합니다.",
        "당신은 극한의 시련 속에서도 실질적인 성취를 일구어내는 집념의 실행가입니다. 불가능에 도전하는 과정을 즐기지만, 의지가 약한 사람들과의 협업은 고역으로 여깁니다.",
        "당신은 조용하지만 묵직하게 상황 전체를 관망하며 기회를 노리는 매복의 명수입니다. 드러내지 않는 강인함이 있으나, 자신을 과도하게 포장해야 하는 자리는 기피합니다.",
        "당신은 주변의 에너지를 흡수하여 자신의 것으로 만드는 놀라운 학습 능력을 가졌습니다. 적응력이 뛰어나지만, 자신만의 고유한 색깔을 잃어버릴까 하는 두려움이 늘 존재합니다.",
        "당신은 타협하지 않는 순수성을 바탕으로 한 분야의 정점을 찍는 구도자적 기질이 있습니다. 명예를 중시하나, 세속적인 욕망만 가득한 곳에서는 환멸을 느끼기 쉽습니다.",
        "당신은 감각적인 직관으로 트렌드의 앞면을 읽어내는 현대적 감각을 타고났습니다. 변화무쌍한 환경을 즐기나, 정해진 루틴에 갇힌 반복 업무는 영혼을 갉아먹는 일이라 생각합니다.",
        "당신은 타인의 고통을 자신의 것처럼 느끼는 깊은 자비심의 소유자입니다. 헌신적 리더십을 발휘하지만, 자신의 호의를 이용하려는 무례한 사람들에게 큰 상처를 받습니다.",
        "당신은 무에서 유를 창조하는 창업가적 기질과 근원적인 생명력을 품고 있습니다. 개척 정신이 투철하나, 기반이 닦여있는 안정된 조직에서는 오히려 권태를 느낍니다."
    ],
    "화(火)": [
        "당신은 만물을 깨우는 태양의 열정과 확산하는 에너지를 품고 태어났습니다. 주변을 밝히는 존재감이 뚜렷하며 사람들을 매료시키는 힘이 강하지만, 감정 조절이 안 될 때 스스로를 태워버리는 경향이 있습니다.",
        "당신의 영혼은 끊임없이 변화하고 소통하는 불꽃의 성질을 가졌습니다. 시각적인 감각과 직관이 뛰어나 트렌드를 선도하나, 결과가 더디면 금세 흥미를 잃고 열정이 식어버리는 단점이 있습니다.",
        "사주 데이터상 당신은 어둠 속의 등불처럼 지혜를 전파하는 화려한 지성을 타고났습니다. 논리적인 변론에 능하고 예절을 중시하지만, 무례하거나 무지한 상대를 만날 때 극도의 혐오감을 느낍니다.",
        "당신은 과열된 분위기를 단숨에 반전시키는 강력한 폭발력의 소유자입니다. 위기 상황에서 전면에 나서는 용기가 가상하나, 가끔 앞뒤 가리지 않는 성급함으로 일을 그르치기도 합니다.",
        "당신의 기질은 문명과 예술을 꽃피우는 화려한 표현력을 의미합니다. 심미안이 탁월하고 세련된 삶을 추구하지만, 현실적인 경제 관념이 부족해 화려한 겉모습 뒤에 빈곤을 숨길 우려가 있습니다.",
        "당신은 사람과 사람 사이의 온기를 더하는 사교의 명수입니다. 모임의 중심에서 활력을 불어넣지만, 정작 본인은 타인의 시선에 지나치게 신경 쓰느라 진정한 자아를 잃어버릴 때가 많습니다.",
        "당신은 지적인 탐구심과 종교적인 경건함을 동시에 지닌 촛불과 같은 존재입니다. 내면 성찰에 능하나, 외부의 공격적인 자극에 심리적으로 매우 취약한 면모를 보입니다.",
        "당신의 코어는 세상을 변혁시키는 혁명적인 뜨거움을 상징합니다. 부조리에 맞서는 투쟁심이 강하지만, 유연함이 부족하여 아군마저 적으로 돌리는 강직함이 독이 되기도 합니다.",
        "당신은 정보의 확산과 미디어적 감각이 매우 뛰어난 시대의 등불입니다. 소식을 알리고 가공하는 데 능하나, 깊이 있는 고찰보다는 넓고 얕은 지식에 머무르기 쉽습니다.",
        "당신은 순수하고 투명한 열정으로 한 목표에 매진하는 집중력의 소유자입니다. 순수한 몰입이 장점이나, 목표가 사라졌을 때 찾아오는 허무함과 우울감의 깊이가 매우 깊습니다.",
        "당신의 에너지는 무대를 장악하고 대중을 압도하는 스타성을 상징합니다. 자신을 드러내는 데 거리낌이 없으나, 주목받지 못하는 상황에서는 존재의 의미를 잃고 방황합니다.",
        "당신은 차가운 냉기를 녹이는 온화함과 포용력을 지닌 난로와 같은 사람입니다. 주변을 편안하게 하나, 자신의 정당한 권리를 주장해야 할 때도 양보만 하다가 손해를 봅니다.",
        "당신은 상상을 현실로 시각화하는 능력이 탁월한 비주얼 리더입니다. 공간과 이미지 연출에 능하나, 보이지 않는 시스템의 디테일을 놓치는 경향이 있습니다.",
        "당신의 기질은 타오르는 불꽃처럼 경계를 넘나드는 자유로운 영혼을 의미합니다. 구속을 싫어하며 역동적인 삶을 추구하지만, 한곳에 뿌리를 내리지 못하는 불안정함이 따릅니다.",
        "당신은 감성이 풍부하고 드라마틱한 서사를 창조하는 스토리텔러입니다. 공감을 이끌어내는 힘이 크지만, 감정의 과잉으로 인해 객관적인 판단력을 잃을 때가 잦습니다.",
        "당신의 코어는 어떠한 역경도 빛으로 승화시키는 숭고한 희생 정신을 상징합니다. 공동체를 위해 헌신하지만, 자신의 희생이 당연시될 때 내면에서 조용히 무너집니다.",
        "당신은 날카로운 비판과 통찰로 사회의 모순을 꼬집는 지식인적 기질이 있습니다. 논쟁에서 지지 않는 예리함이 있으나, 정작 대안 없는 비난에 머무를 위험이 있습니다.",
        "당신은 뜨거운 열정 속에 차가운 계산을 숨긴 지략가적 화(火) 에너지의 소유자입니다. 승부처를 아는 영리함이 있으나, 사람을 도구로 보는 태도가 주변을 떠나게 만듭니다.",
        "당신은 보이지 않는 주파수를 읽어내는 영적인 감각과 직관이 발달했습니다. 예지력이 뛰어나나, 현실 세계의 복잡한 절차와 행정에는 무관심하거나 무능하기 쉽습니다.",
        "당신의 기질은 차분하게 열기를 갈무리하여 결실로 인도하는 인내의 불꽃입니다. 성숙한 리더십을 보이지만, 변화가 필요한 시점에도 과거의 방식을 고수하려 합니다.",
        "당신은 한 번 정한 길을 끝까지 타오르게 하는 지독한 집념의 소유자입니다. 인간 승리의 주인공이 되기 좋으나, 주변 사람들을 자신의 속도에 맞추느라 혹사시킵니다.",
        "당신은 따뜻한 온기로 얼어붙은 마음을 녹이는 치유자적 에너지를 가졌습니다. 상담과 위로에 능하나, 정작 자신의 상처는 돌보지 못해 마음의 병을 키우기도 합니다.",
        "당신의 코어는 화려함 속에 고독을 즐기는 고고한 예술가적 성품을 의미합니다. 독보적 세계관이 있으나, 대중과의 소통 접점을 찾지 못해 외로움을 자처합니다.",
        "당신은 찰나의 영감을 포착하여 비즈니스로 연결하는 감각적인 실전가입니다. 돈의 흐름을 읽는 눈이 밝으나, 도덕적 가치보다 수익을 앞세우는 유혹에 취약합니다.",
        "당신은 조직의 기강을 바로잡고 열정적인 문화를 전파하는 행동 대장입니다. 추진력이 압도적이나, 섬세한 조율이 필요한 업무에서는 거친 일 처리로 원성을 삽니다.",
        "당신의 에너지는 무에서 유를 창조하는 창조주의 불꽃과 같습니다. 기획력이 탁월하나, 아이디어 단계에서 멈추고 실행을 타인에게 떠넘기는 경향이 있습니다.",
        "당신은 소수 정예와 깊은 유대를 맺고 그들을 지키는 의리의 불꽃입니다. 내 편에게는 한없이 따뜻하나, 적이라고 판단되는 순간 무자비하게 태워버립니다.",
        "당신의 기질은 어떠한 환경에도 굴하지 않고 자신을 빛내는 자생적 스타성입니다. 밑바닥에서도 다시 일어서나, 자존심이 너무 강해 남의 도움을 받지 못합니다.",
        "당신은 세상을 관조하며 진리를 전파하는 구도자적 화(火) 기운을 가졌습니다. 지혜의 깊이가 깊으나, 현실의 경제적 결핍에 무감각하여 주변을 힘들게 할 수 있습니다.",
        "당신은 가장 어두운 순간에 태어난 희망의 불씨처럼 강인한 생명력을 가졌습니다. 시련이 클수록 빛나지만, 평온한 일상에서는 오히려 매너리즘에 빠져 방황합니다."
    ],
    "토(土)": [
        "당신은 모든 생명을 품고 균형을 잡아주는 묵직한 대지의 기운을 코어로 가졌습니다. 신용을 목숨처럼 여기며 조직의 든든한 기둥 역할을 하나, 변화를 극도로 싫어하는 보수성이 발목을 잡습니다.",
        "당신의 영혼은 만물을 양육하고 사람을 키워내는 비옥한 토양의 성질입니다. 포용력과 인내심이 장점이나, 거절을 못 하는 성격 탓에 타인의 짐까지 짊어지고 고통받습니다.",
        "사주 데이터상 당신은 흔들리지 않는 신념으로 거대 프로젝트의 기틀을 닦는 설계자입니다. 계획성이 철저하나, 돌발 상황이 닥치면 유연하게 대처하지 못하고 얼어버립니다.",
        "당신은 갈등을 흡수하고 평화를 정착시키는 중재자적 기질이 매우 강합니다. 화합을 이끌어내나, 정작 자신의 목소리를 내야 할 때 침묵하여 권리를 놓치기도 합니다.",
        "당신의 코어는 비효율을 걷어내고 시스템을 안정적으로 운영하는 실무 관리의 대가입니다. 내실을 기하는 데 능하나, 새로운 기술이나 트렌드 도입에는 보수적입니다.",
        "당신은 한 우물을 파서 깊이를 완성하는 집념의 전문가적 기질을 타고났습니다. 책임감이 압도적이나, 시야가 좁아져 전체의 흐름을 놓치는 맹점이 있습니다.",
        "당신은 자산의 숨겨진 가치를 읽어내고 부의 토대를 닦는 안목이 있는 수완가입니다. 경제적 감각이 좋으나, 모험보다는 안정을 택해 큰 기회를 놓칠 때가 많습니다.",
        "당신의 기질은 자신만의 철학을 확립하여 대중의 나침반이 되어주는 묵직한 멘토입니다. 존경받는 삶을 추구하나, 가끔은 자신의 생각이 정답이라고 고집하는 독선이 나타납니다.",
        "당신은 전통의 가치를 보존하고 시대의 유산을 지켜내는 안목 있는 수호자입니다. 본질 수호에 능하나, 구태의연한 방식에 집착하여 시대 뒤떨어진다는 평을 듣기도 합니다.",
        "당신의 에너지는 감정에 휘둘리지 않고 자원을 오차 없이 관리하는 치밀한 브레인입니다. 숫자와 통계에 강하나, 인간적인 감정의 변수를 무시하는 차가움이 있습니다.",
        "당신은 소외된 이들을 품고 세상의 온도를 높이는 따뜻한 사회적 혁신가입니다. 박애주의적이나, 정작 자신의 가족이나 가까운 사람들에게는 소홀하기 쉽습니다.",
        "당신의 코어는 어떠한 압박에도 흔들리지 않는 강철 같은 의지와 안전의 파수꾼입니다. 질서 수호에 사명감을 느끼나, 규정 위반에 대해 지나치게 결벽에 가까운 태도를 보입니다.",
        "당신은 물자의 흐름을 최적화하고 공급망을 장악하는 물류적 지혜의 소유자입니다. 효율 극대화에 능하나, 동료들의 정서적 피로도를 계산하지 못해 갈등을 빚습니다.",
        "당신은 방대한 자료를 체계화하고 영구히 보존하는 지식의 창고지기입니다. 아카이빙 능력이 탁월하나, 자료 수집에만 매몰되어 정작 실행이 늦어지는 경우가 많습니다.",
        "당신은 섬세한 손길로 가치를 창조하고 아름다움을 선물하는 장인적 살림꾼입니다. 기술적 완성도가 높으나, 대중적인 시장성보다는 자신의 만족을 우선시하는 경향이 있습니다.",
        "당신의 기질은 첨예한 이해관계를 상생의 길로 이끄는 평화 협상의 달인입니다. 공평한 분배를 중시하나, 모두를 만족시키려다 자신만 희생하는 결론을 맺기 일쑤입니다.",
        "당신은 대지 속 보석을 찾아내듯 탁월한 심미안과 가치 판단력을 가졌습니다. 감정 안목이 좋으나, 의심이 많아 좋은 인연이나 기회 앞에서 주춤하다 놓치기도 합니다.",
        "당신의 에너지는 국가와 조직의 기틀을 바로잡고 원칙을 세우는 법치의 수호자입니다. 기강 확립에 능하나, 예외 없는 적용 탓에 융통성 없다는 원성을 자주 듣습니다.",
        "당신은 세상을 지탱하는 근본 원리를 탐구하고 지식의 기초를 다지는 학자적 구도자입니다. 지적 깊이가 깊으나, 현실 경제 활동에는 무감각하여 생활고를 겪을 위험이 있습니다.",
        "당신의 코어는 사람들의 불안을 잠재우고 평온을 선사하는 정신적 안식처입니다. 치유와 상담에 능하나, 타인의 부정적인 감정에 쉽게 전염되어 번아웃을 겪습니다.",
        "당신은 수많은 사람을 교육하고 키워내는 거대한 교육 공동체의 기둥입니다. 인프라 구축에 능하나, 자신의 철학을 강요하는 꼰대적 기질이 나타나지 않도록 경계해야 합니다.",
        "당신의 기질은 보이지 않는 곳에서 거대한 판을 짜고 성공시키는 뛰어난 지략가입니다. 배후 설계에 능하나, 전면에 나서지 못해 자신의 공로를 빼앗기는 경우가 잦습니다.",
        "당신은 시련 속에서도 변치 않는 신뢰를 바탕으로 조직의 근간을 지키는 가디언입니다. 의리가 두터우나, 믿었던 사람에게 배신당했을 때 받는 타격이 남들보다 수십 배 큽니다.",
        "당신의 에너지는 실질적인 부를 창출하기 위해 땅을 일구는 실전적 경제가입니다. 근면 성실함이 무기나, 창의적인 발상보다 노동의 가치에만 집중하는 한계가 있습니다.",
        "당신은 겉은 부드러우나 속은 누구보다 단단한 외유내강의 전형입니다. 위기에서 진가를 발휘하나, 평소에는 지나치게 자신을 낮추어 저평가받는 경향이 있습니다.",
        "당신의 코어는 혼란 속에서도 평정심을 유지하며 상황을 정리하는 침착한 해결사입니다. 수습 능력이 좋으나, 일이 터지기 전에는 먼저 움직이지 않는 나태함이 있습니다.",
        "당신은 보수적인 틀 안에서 가장 현대적인 가치를 뽑아내는 온고지신의 리더입니다. 조화 능력이 좋으나, 양쪽의 눈치를 보느라 결정이 지체되는 단점이 있습니다. ",
        "당신의 기질은 묵묵히 자신의 자리를 지키며 때를 기다리는 신중한 승부사입니다. 기다림의 미학을 아나, 타이밍을 너무 늦게 잡아 버스가 떠난 뒤 손을 흔들기도 합니다.",
        "당신은 사소한 것에서 커다란 가치를 만들어내는 소박하지만 강한 생명력의 소유자입니다. 실속 관리에 능하나, 큰 기상보다는 눈앞의 현실에 안주하기 쉽습니다.",
        "당신의 에너지는 만물의 고통을 흡수하여 거름으로 만드는 숭고한 대지의 성품입니다. 희생적 리더십을 보이나, 스스로를 돌보지 않아 건강을 잃을 위험이 큽니다."
    ],
    "금(金)": [
        "당신은 시련 속에서 단단하게 벼려진 날카로운 결단력과 결기를 코어로 품고 태어났습니다. 혼란을 잠재우고 질서를 완벽히 바로잡는 해결사이나, 냉정함이 지나쳐 주변에 상처를 줍니다.",
        "당신의 영혼은 새 기운을 정돈하고 부정한 것을 걸러내는 완벽주의적 정의감의 상징입니다. 청렴함이 무기나, 비판적인 시각이 강해 적을 많이 만드는 단점이 있습니다.",
        "사주 데이터상 당신은 말보다 행동으로 가치를 증명하는 실천가의 무기를 가졌습니다. 실무 능력이 압도적이나, 감성적인 소통이 필요한 곳에서도 원칙만 내세워 갈등을 빚습니다.",
        "당신은 무질서 속에서 핵심 규칙을 찾아내는 논리적 분석력의 소유자입니다. 시스템 정비에 능하나, 데이터 없는 감정적 주장을 하는 사람들을 경멸하여 불통의 리더가 되기 쉽습니다.",
        "당신의 코어는 사회적 약속을 철저히 지키는 흔들림 없는 정의의 파수꾼입니다. 명예 수호에 사명감을 느끼나, 회색 지대를 인정하지 않는 흑백논리로 주변을 피곤하게 합니다.",
        "당신은 한 치의 오차도 허용하지 않는 정교한 손길과 숙련된 장인의 에너지를 타고났습니다. 명품 완성에 능하나, 기술의 가치를 모르는 저급한 환경에서는 자폭하듯 무너집니다.",
        "당신의 기질은 조직을 효율적으로 통솔하여 승리로 이끄는 카리스마 넘치는 지휘관입니다. 기강 확립에 능하나, 우유부단한 부하 직원들을 공개적으로 무안 주는 독설가 기질이 있습니다.",
        "당신은 미세한 결함까지 찾아내어 완벽을 완성하는 디테일의 화신입니다. 현미경적 정밀함이 무기나, 사소한 것에 목숨을 걸다 큰 판을 놓치는 우를 범하기도 합니다.",
        "당신의 에너지는 조직 내 모순을 바로잡고 청렴한 가치를 수호하는 고결한 감찰관입니다. 부정한 관행을 거부하나, 윗물과 타협하지 못해 승진이나 권력에서 밀려나기 쉽습니다.",
        "당신은 방대한 수치를 분석하여 리스크를 예측하는 냉철한 전략가입니다. 승기를 잡는 지략이 좋으나, 숫자 뒤에 숨겨진 사람의 마음을 읽지 못해 인심을 잃습니다.",
        "당신의 코어는 어떠한 풍파에도 시스템의 본질을 지켜내는 강력한 보안 방어력의 상징입니다. 기술 수호에 능하나, 새로운 기술 트렌드 유입에 폐쇄적일 수 있습니다.",
        "당신은 스스로를 채찍질하며 한계에 도전하는 불굴의 의지와 강인한 정신력의 소유자입니다. 투사적 기질이 있으나, 타인에게도 자신의 고통스러운 기준을 강요하는 폭군이 되기도 합니다.",
        "당신은 위기 상황에서 생명을 구하고 혼란을 잠재우는 결단력 있는 해결사입니다. 긴박함 속에서 빛나나, 평온하고 지루한 일상에서는 삶의 의미를 찾지 못해 방황합니다.",
        "당신의 기질은 옥석을 정확히 구분하여 잠재력에 투자하는 공정한 평가자입니다. 미래 보석 발굴에 능하나, 당장의 수익이 나지 않는 가치에는 냉담하게 돌아서는 면모가 있습니다.",
        "당신의 에너지는 복잡한 현상을 단순화하여 명쾌한 해결책을 제시하는 지혜로운 혁신가입니다. 프로세스 개선에 능하나, 관료주의적 절차를 지키지 않아 조직과 잦은 충돌을 빚습니다.",
        "당신은 누구에게도 휘둘리지 않고 신념을 관철하는 강력한 독립심의 소유자입니다. 개척자 정신이 투철하나, 자신의 강직함이 독선이 되어 고립된 제국을 건설할 위험이 있습니다.",
        "당신의 코어는 법과 정의를 엄격히 집행하여 사회 품격을 수호하는 고결한 공직자의 기운입니다. 질서 확립에 능하나, 법전의 자구에만 매몰되어 인본주의를 놓칠 우려가 큽니다.",
        "당신은 세상의 난제를 수학적으로 해결하는 논리적 완결성을 추구하는 인재입니다. 알고리즘 설계에 능하나, 앞뒤가 맞지 않는 모순된 상황을 보면 발작에 가까운 거부감을 보입니다.",
        "당신의 기질은 진실과 거짓을 가려내어 미궁에 빠진 사건의 실마리를 찾는 프로파일러입니다. 진실 규명에 능하나, 타인의 어두운 내면을 너무 많이 들여다봐 정서적으로 메마르기 쉽습니다.",
        "당신의 에너지는 핵심 기밀을 철저히 수호하고 은밀하게 과업을 완수하는 보안 인재입니다. 기밀 유지가 탁월하나, 비밀이 너무 많아 가족과도 진심 어린 소통이 어려운 고독이 따릅니다.",
        "당신은 냉철한 감성으로 시대를 풍자하고 권력을 견제하는 날카로운 논설가입니다. 문장력이 예리하나, 자신의 펜이 파괴적인 비난에만 쓰이지 않도록 끊임없이 경계해야 합니다.",
        "당신의 코어는 거대 조직의 기강을 세우고 국가 비전을 설계하는 총괄 설계자의 역량입니다. 국정 설계에 능하나, 당리당략에 휘둘릴 때 자존심이 꺾여 은둔을 선택하기도 합니다.",
        "당신은 역사에 기록될 독보적 성취와 절대적 가치를 실현하는 전설적 명장입니다. 불멸의 가치 창조에 능하나, 현실적인 세속의 욕망을 무시하여 주변을 고생시킬 수 있습니다.",
        "당신의 기질은 위기의 순간 가장 먼저 달려가 조직을 구하는 명검이자 수호자입니다. 정의 수호에 목숨을 거나, 절차 무시와 독단적 판단으로 공적 자산에 손실을 끼치기도 합니다.",
        "당신의 에너지는 차가운 바위 속에서 솟아나는 맑은 샘물처럼 순수한 지성을 의미합니다. 통찰력이 깊으나, 현실의 탁한 인간관계를 견디지 못해 결벽증적인 성향을 보입니다.",
        "당신은 정해진 목표를 향해 미사일처럼 날아가 명중시키는 정밀 타격형 인재입니다. 실천력이 최고이나, 방향이 잘못 설정되었을 때 멈추지 못해 대형 사고를 냅니다.",
        "당신의 코어는 단단한 금속이 서로 부딪치며 소리를 내듯 명쾌한 커뮤니케이션을 선호합니다. 결론부터 말하는 명확함이 있으나, 배려 없는 화법으로 인맥을 잃기도 합니다.",
        "당신의 기질은 한 번 제련되면 변치 않는 보석처럼 지조와 절개를 지키는 성품입니다. 충성심이 강하나, 시대의 변화에 발맞추지 못하고 과거의 의리에 매몰될 위험이 있습니다.",
        "당신의 에너지는 불필요한 감정을 걷어내고 기계처럼 완벽하게 작동하는 무결점의 인격체입니다. 실수 없는 완벽함이 장점이나, 주변 사람들에게 인간미 없는 기계 같다는 평을 듣습니다.",
        "당신은 가장 차가운 땅에서 피어난 꽃처럼 극한의 환경에서 피어나는 강인한 인내의 소유자입니다. 시련 속에서 빛나나, 고난이 없는 편안한 삶에서는 오히려 기운을 못 씁니다."
    ],
    "수(水)": [
        "당신은 보이지 않는 물자와 자본의 흐름을 읽어 부를 창출하는 지혜로운 수(水)의 기운을 코어로 가졌습니다. 글로벌 책사적 안목이 있으나, 생각이 너무 많아 실행 타이밍을 놓치기도 합니다.",
        "당신의 영혼은 만물의 성장을 돕는 생명의 근원이자 타인을 인도하는 자비로운 가이드의 성질입니다. 길잡이 역할에 능하나, 정작 자신의 삶의 방향은 갈팡질팡 정하지 못해 방황합니다.",
        "사주 데이터상 당신은 이해관계를 유연하게 조율하여 이익을 극대화하는 외교적 중재의 화신입니다. 화합에 능하나, 이득을 위해 박쥐처럼 입장을 바꾸는 기회주의자로 오해받기도 합니다.",
        "당신은 변화의 파도를 타고 가장 먼저 기회를 선점하는 시장의 선구자적 에너지를 가졌습니다. 선견지명이 탁월하나, 내면의 중심이 흔들릴 때 걷잡을 수 없이 방황하는 기복이 있습니다.",
        "당신의 코어는 리스크를 정밀히 계산하고 자원의 이동 경로를 설계하는 전략적 지능입니다. 설계 능력이 좋으나, 직관을 무시하고 오직 수치로만 세상을 보려다 낭패를 봅니다.",
        "당신은 사건의 본질을 꿰뚫고 가공되지 않은 진실을 전달하는 투명한 분석가입니다. 진실 발굴에 능하나, 비밀을 폭로하는 과정에서 불필요한 적을 많이 만드는 단점이 있습니다.",
        "당신의 기질은 지식과 정보를 수집하여 부의 자산으로 바꾸는 지식의 연금술사입니다. 플랫폼 기획에 능하나, 머릿속 지식을 현실의 자본으로 바꾸는 실전 근육이 부족할 때가 많습니다.",
        "당신은 과열된 경쟁 속에서도 냉정을 유지하며 거대 자본을 주도하는 지략가입니다. 승부사적 기질이 좋으나, 사람의 마음보다 돈의 흐름에만 집착하여 고독한 부자가 되기 쉽습니다.",
        "당신의 에너지는 조직 전체의 품격과 인재의 흐름을 최적화하는 인자한 리더십입니다. 매니지먼트에 능하나, 비전을 대중의 언어로 번역하는 소통력이 부족해 소외될 수 있습니다.",
        "당신은 전 세계를 잇는 거대한 유통 체계를 구축하고 시스템의 질서를 세우는 물류의 달인입니다. 공급망 설계에 능하나, 동선이 꼬인 상황을 보면 병적으로 예민해져 히스테리를 부립니다.",
        "당신의 코어는 지혜의 빛으로 대중을 계몽하고 사회의 품격을 높이는 고결한 지식 리더입니다. 교육자적 성품이 좋으나, 지식이 부족한 대중을 무시하는 오만함이 나타날 수 있습니다.",
        "당신의 기질은 조직 내 갈등을 씻어내고 평화를 유지하는 정화와 치유의 힘을 의미합니다. 정서적 정화에 능하나, 부정적인 에너지를 다 받아주다가 본인이 먼저 병드는 약점이 있습니다.",
        "당신은 극한의 압박 속에서도 시원한 오아시스를 만들어 해답을 주는 지혜로운 지략가입니다. 수습 능력이 좋으나, 주변에 의지하려는 사람만 모여들어 독박 책임을 지는 경우가 많습니다.",
        "당신의 에너지는 가치 있는 지혜를 기록하여 미래의 이정표를 세우는 기록의 수호자입니다. 기록 보존에 능하나, 과거의 데이터에만 매몰되어 현실의 변화를 읽지 못할 위험이 있습니다.",
        "당신은 소수 정예와 깊은 신뢰를 쌓고 하이엔드 자산을 증식시키는 럭셔리 보좌관입니다. 선별력이 좋으나, 일반 대중과의 소통을 거부하는 선민의식으로 인해 적이 생기기 쉽습니다.",
        "당신은 시공간을 초월하는 영감으로 새로운 서사를 창조하는 신비로운 아티스트입니다. 영혼을 울리는 창작에 능하나, 현실의 경제적 계산이나 행정 절차에는 어린아이처럼 무능합니다.",
        "당신의 코어는 법의 자구를 넘어 그 정신을 해석하고 인권을 수호하는 법의 정수입니다. 인권 보호에 능하나, 법전의 논리보다 감성이 앞서 판결의 공정성을 의심받기도 합니다.",
        "당신은 인간 심리를 수학적으로 분석하여 디지털 시대의 지도를 그리는 데이터 전략가입니다. 프로파일링에 능하나, 차가운 수치에 매몰되어 사람의 따뜻한 체온을 잊기 쉽습니다.",
        "당신의 기질은 사라져가는 것들에 숨을 불어넣어 다시 살려내는 재생의 마법사입니다. 복원과 브랜딩에 능하나, 새것에만 열광하는 대중의 변화 속도를 따라가기 힘겨워합니다.",
        "당신의 에너지는 우주의 원리를 깨닫고 근본 해답을 탐구하는 지식의 구도자입니다. 철학적 깊이가 깊으나, 현실 세계의 세속적 성공을 비웃다가 스스로 빈곤의 늪에 빠집니다.",
        "당신의 코어는 인생의 허무를 지혜로 승화시켜 사색의 가치를 전파하는 인문학적 스승입니다. 내면 탐구에 능하나, 쉼 없이 돌아가는 현대 사회에서 낙오자라는 불안감을 느깁니다.",
        "당신은 인류의 지적 유산을 체계화하여 공유하는 지식의 대양이자 거물입니다. 백과사전적 지식이 풍부하나, 자신의 지식을 사리사욕을 위해 쓰려는 모리배들에게 이용당하기 쉽습니다.",
        "당신의 기질은 미지의 영역을 개척하여 세상을 놀라게 할 독창성의 소유자입니다. 천재적 영감이 있으나, 자신의 비범함을 이해하지 못하는 세상을 향해 벽을 쌓는 단절이 따릅니다.",
        "당신의 에너지는 국제 정세의 해답을 찾아내는 지략가이자 글로벌 유통 리더입니다. 판을 짜는 지휘 능력이 좋으나, 상황이 복잡해질수록 단순한 원칙을 놓쳐 대패할 위험이 있습니다.",
        "당신은 깊은 심해처럼 속을 알 수 없는 비밀스러움과 거대한 잠재력을 지닌 인물입니다. 신중함이 무기나, 지나친 폐쇄성으로 인해 가장 가까운 사람과도 소외되는 외로움을 겪습니다.",
        "당신은 침투력이 좋아 어디든 스며들어 정보를 빼내고 판을 흔드는 첩보원적 기질이 있습니다. 기민함이 좋으나, 정체성이 불분명해져 스스로 누구인지 혼란을 겪는 일이 잦습니다.",
        "당신의 코어는 얼어붙은 땅 밑에서 봄을 기다리는 수분처럼 인내와 희망의 상징입니다. 때를 기다리는 힘이 크나, 너무 오래 기다리다가 기회를 썩히는 우유부단함이 있습니다.",
        "당신은 사람들의 욕망을 자극하여 거대한 유행을 만들어내는 트렌드의 술사입니다. 대중 심리 파악에 능하나, 본인의 삶 역시 유행처럼 덧없이 흘러가기 쉬운 단점이 있습니다.",
        "당신의 기질은 모든 더러운 것을 씻어내어 맑게 만드는 정화의 샘물과 같습니다. 도덕적 고결함을 추구하나, 세상의 더러운 꼴을 못 견뎌 히스테리적인 성향을 보일 수 있습니다.",
        "당신의 에너지는 극한의 고독 속에서 지혜의 진주를 빚어내는 고독한 철학자입니다. 정신적 성취는 위대하나, 현실적인 유대감과 경제적 기반이 늘 취약하여 삶이 위태롭습니다."
    ]
};

const nameSynergyKo = [
    "당신의 성명은 타고난 기질에 강력한 폭발력을 더해주는 가속기 역할을 합니다. 이는 빠른 성취를 돕지만, 과열될 경우 독단적인 결정을 내리게 할 수 있으니 주의하십시오.",
    "이름의 주파수가 당신의 선천적 기운을 예리하게 벼려주는 정밀 제어 역할을 수행합니다. 논리적 인과관계를 명확히 해주나, 때로는 지나치게 냉소적인 태도를 유발할 수 있습니다.",
    "성명의 파동이 당신의 강한 기운을 부드럽게 감싸는 완충재 역할을 합니다. 대인관계의 유연함을 높여주지만, 결정적인 순간에 우유부단함을 부를 수 있는 부작용이 있습니다.",
    "성명의 파동은 당신이 가진 잠재력을 수면 위로 끌어올리는 각성제와 같습니다. 묻혀있던 재능을 발굴하게 하나, 평소보다 예민한 감각으로 인해 쉽게 지칠 수 있습니다.",
    "이름의 에너지가 당신의 분산된 기운을 하나로 모으는 집속 렌즈 역할을 합니다. 목표 집중력을 극대화해주지만, 주변의 소중한 인연들을 놓치게 만드는 맹점이 있습니다.",
    "당신의 이름은 어떤 환경에서도 유연하게 흐를 수 있도록 돕는 윤활유와 같은 에너지를 뿜어냅니다. 처세술을 높여주나, 자신의 본질적인 신념을 희석시킬 위험이 있습니다.",
    "성명의 주파수는 보이지 않는 위협으로부터 당신을 보호하는 방어막 역할을 합니다. 안정감을 부여해주지만, 새로운 도전 앞에서 소극적으로 변하게 만드는 작용도 합니다.",
    "당신의 이름은 낡은 것을 부수고 새로움을 창조하는 혁신적 파동을 가졌습니다. 변화를 주도하게 하나, 삶의 안정적인 기반마저 흔들리게 할 수 있는 양날의 검입니다.",
    "이름의 에너지가 당신의 이성을 차갑게 식히는 냉각제 역할을 수행합니다. 냉철한 판단을 돕지만, 인간관계에서 차갑고 무정한 인상을 심어줄 우려가 있습니다.",
    "성명의 파동은 대중을 사로잡는 강력한 흡입력과 카리스마를 부여합니다. 주목받는 삶을 살게 하나, 타인의 시선에 지나치게 얽매이게 하는 부작용이 있습니다.",
    "당신의 이름은 흩어진 정보들을 하나로 꿰어내는 실과 같은 조율력을 제공합니다. 복합적인 업무 처리에 능하게 하나, 지나친 디테일 집착으로 속도가 느려질 수 있습니다.",
    "성명의 주파수가 당신에게 흔들리지 않는 묵직한 무게감을 더해줍니다. 신뢰도를 높여주지만, 생각의 전환이 느려지고 고집이 강해질 수 있는 효과를 줍니다.",
    "이름의 에너지가 당신의 감성을 자극하여 심미적 통찰력을 극대화합니다. 예술적 성취를 돕지만, 현실적인 경제 관념을 약화시킬 수 있는 맹점이 있습니다.",
    "당신의 이름은 어떠한 난관도 정면 돌파하게 만드는 강력한 투지를 부여합니다. 승부욕을 자극하나, 이기기 위해 무리한 선택을 하게 만드는 압박으로 작용하기도 합니다.",
    "성명의 파동이 당신의 내면에 평온과 안식을 주는 명상가적 기운을 더합니다. 정신적 성숙을 돕지만, 현실 세계에서의 경쟁력을 떨어뜨릴 우려가 공존합니다.",
    "이름의 주파수는 타인과 깊이 공감하고 소통하게 만드는 가교 역할을 합니다. 인맥을 넓혀주나, 타인의 고통을 자신의 것처럼 떠안아 심리적 번아웃을 부를 수 있습니다.",
    "성명의 에너지가 당신에게 철저한 원칙과 규율의 힘을 부여합니다. 조직 생활의 모범이 되게 하나, 창의적인 발상을 억누르는 틀이 될 수 있습니다.",
    "당신의 이름은 끊임없이 새로운 지식을 갈구하게 만드는 학구적 주파수를 가졌습니다. 지적 성장을 견인하나, 행동보다 생각이 앞서 실천력을 약화시킬 수 있습니다.",
    "이름의 파동이 당신에게 위기를 기회로 바꾸는 재치와 순발력을 더해줍니다. 임기응변에 능하게 하나, 장기적인 계획보다 단기 성과에 치중하게 할 수 있습니다.",
    "성명의 에너지는 당신의 존재를 하나의 고유한 브랜드로 만드는 차별성을 부여합니다. 독보적 가치를 만들어주나, 고독한 길을 걷게 할 수 있는 운명적 고립감이 따릅니다.",
    "당신의 이름은 타인을 치유하고 돌보는 자비로운 에너지를 발산합니다. 봉사와 헌신을 이끌어내나, 정작 자신의 건강과 이익을 챙기지 못하게 만드는 맹점이 있습니다.",
    "성명의 주파수는 거대한 자본과 물자를 통제할 수 있는 비즈니스적 직관을 더합니다. 경제적 풍요를 돕지만, 인간적인 정보다 계산적인 태도가 앞서게 할 수 있습니다.",
    "이름의 파동이 당신에게 시대를 앞서가는 선견지명과 통찰력을 부여합니다. 방향 제시자 역할을 수행하게 하나, 대중과의 공감대를 형성하는 데 어려움을 겪을 수 있습니다.",
    "당신의 이름은 보이지 않는 위협을 감지하고 대비하는 예리한 경계심을 부여합니다. 안정 수호에 능하나, 주변 사람들을 쉽게 신뢰하지 못하게 만드는 심리적 장벽을 세웁니다.",
    "성명의 에너지가 당신에게 군더더기를 제거하는 명쾌한 정리 능력을 더해줍니다. 효율성을 극대화하나, 과정의 즐거움과 여유를 앗아가는 차가운 칼날이 되기도 합니다.",
    "이름의 주파수는 불가능해 보이는 꿈을 현실로 실현하는 집념의 파동을 가졌습니다. 인간 승리를 가능케 하나, 스스로를 혹사시키는 지독한 완벽주의를 부추깁니다.",
    "당신의 이름은 사람들을 하나로 묶어 거대한 대의를 향해 나아가게 하는 결집력을 제공합니다. 공동체의 리더로 만드나, 개인의 사생활이 침해받는 결과를 초래할 수 있습니다.",
    "성명의 파동이 당신에게 낡은 관습에 저항하고 새로운 질서를 제안하는 혁명가적 기운을 부여합니다. 변화의 중심에 서게 하나, 기존 사회 시스템과의 충돌은 불가피합니다.",
    "이름의 에너지가 당신의 언어에 강력한 무게와 신뢰를 실어줍니다. 발언권과 권위를 높여주지만, 실언 하나에 모든 것을 잃을 수 있는 엄격한 도덕성을 요구받게 됩니다.",
    "성명의 주파수는 당신에게 극한의 평정심과 인내의 에너지를 공급합니다. 어떤 풍파에도 흔들리지 않게 하나, 변화의 타이밍을 놓치고 고립되는 결과를 낳을 수 있습니다."
];

const transitionKo = "이처럼 당신의 성명은 선천적 기질에 강력한 시너지를 주지만, 동시에 예상치 못한 에너지의 편중이나 부작용을 유발하기도 합니다. 이러한 편중된 효과를 지혜롭게 다스리고 운명의 밸런스를 완성하기 위해, 아래 제시된 당신만의 약점 보완 처방을 적극적으로 실천하시기 바랍니다.";

/**
 * 🇺🇸 [Destiny Lab Precision Engine DB - English Full Version]
 */

const birthCoreEn = {
    "목(木)": [
        "You were born with a spirit of independence and self-reliance as your core, like a tree breaking through a stagnant environment. You perform best in a self-directed environment where you can take the lead, but excessive dogmatism may cause friction.",
        "Your fundamental energy symbolizes unceasing expansion and practical leadership. You enjoy achieving results in the field rather than theory, and flexible growth is possible only when you let go of perfectionism.",
        "Based on seasonal time-series data, you were born with strong mediating energy to connect situations and establish order. You are excellent at setting clear standards, but feel stressed in disordered or emotionally charged situations.",
        "You symbolize strong survival power that finds answers even under extreme pressure. You have a problem-solver temperament using trials as stepping stones, but sometimes trap yourself in isolated thinking that rejects help.",
        "Your core means logical design ability that grasps essence and adheres to principles. Rational judgment is fast, but you feel constitutional resistance when forced into illogical emotional situations.",
        "You are a natural navigator who discovers potential in others and guides them. You instantly grasp strengths, but your energy drains quickly when dealing with people who have no will to change.",
        "You possess business wisdom that systematizes information into practical assets. You are good at selecting valuable info, but feel no interest in theoretical studies without utility.",
        "You possess energy to realize noble ideals and give strong social influence. You value honor and pursue righteous beauty, but cannot hide anger in the face of vulgar selfishness.",
        "Your energy signifies macroscopic leadership that grasps and controls the flow of an entire organization. You are skilled at planning large projects, but lose your light when buried in petty tasks.",
        "You were born with sharp intuition to seize fleeting opportunities for victory. You have a competitor's temperament enjoying risks, but tend to lose patience with slow-moving tasks.",
        "Your temperament signifies precise analytical power to remove clutter based on an unwavering center. You prefer flawless systems and can never coexist with mediocre compromise.",
        "You are an owner of patience who supports huge systems from behind the scenes. You pursue steady growth, but feel intense anxiety in flashy environments with weak foundations.",
        "You have strong self-reliance to endure extreme adversity and sprout success. You are the type to harden in trials, but tend to apply overly strict standards to others.",
        "You possess cool judgment to foresee the value of results and protect order. Your strong guardian nature makes it hard to endure organizations lacking transparency.",
        "You are an owner of finishing ability that maximizes value by uniting fragmented info. You are good at finding rules in disorder and hate unclear job processing.",
        "You were born with craftsmanship and high-end sense that misses not even a fine crack. You pursue error-free precision but cannot adapt to crude, detail-ignoring work.",
        "Your energy symbolizes justice that protects social balance and practices fair values. You obey promises and rules, but suffer mentally when principles are damaged by power.",
        "You are a meticulous strategist who prepares for upcoming crises with cool intelligence. You excel at predicting risks but struggle communicating with groundless optimists.",
        "You have a guardian temperament protecting discipline and guarding against corruption. Your conviction is firm, but you feel deep self-reproach when forced to bend it.",
        "You possess insight that sees through the hidden essence behind human affairs and business. You enjoy exploring root causes and avoid shallow relationships with empty talk.",
        "You have the power of a delicate helper who moves hearts and gives hope in crisis. You value emotional connection but feel suffocated in cold, mechanical communication.",
        "You harbor great educator energy that spreads knowledge and embraces. Your leadership in sharing wisdom is outstanding, but you feel skeptical in environments without desire to learn.",
        "You have prophetic energy to discover potential in the dark and propose new paradigms. You excel at proposing creative alternatives but clash with conservative, stubborn groups.",
        "You are a persistent executor who achieves practical results even in extreme trials. You enjoy challenging the impossible but find collaborating with weak-willed people a chore.",
        "You are a master of ambush who quietly but heavily observes the whole situation for opportunity. You have hidden strength but avoid positions requiring excessive self-promotion.",
        "You have amazing learning ability to absorb surrounding energy. You adapt well, but always fear losing your own unique color.",
        "You have a seeker's temperament to reach the peak of a field based on uncompromising purity. You value honor but feel disillusioned in places full of worldly desires.",
        "You were born with modern sense to read the front of trends with sensuous intuition. You enjoy changing environments but find repetitive routines soul-crushing.",
        "You are an owner of deep mercy who feels others' pain as your own. You show sacrificial leadership but are deeply hurt by rude people exploiting your kindness.",
        "You harbor entrepreneurial temperament to create something from nothing. You have pioneering spirit but feel boredom in well-established, stable organizations."
    ],
    "화(火)": [
        "You were born with the passion of the sun that awakens all things and an energy that expands. Your presence is clear, and your power to fascinate is strong, but you tend to burn yourself out when emotions are unchecked.",
        "Your soul has the property of a flame that constantly changes and communicates. Your visual sense and intuition are excellent, leading trends, but you lose interest quickly if results are slow.",
        "According to birth data, you were born with a brilliant intelligence that spreads wisdom like a lamp in the dark. You are good at logical debate and value etiquette, but feel extreme hatred for rude or ignorant people.",
        "You possess a powerful explosive force that instantly reverses an overheated atmosphere. Your courage to step forward in a crisis is commendable, but sometimes your haste ruins the work.",
        "Your temperament signifies a brilliant expressive power that makes civilization and art bloom. You have an outstanding aesthetic eye, but your lack of realistic economic sense may hide poverty behind a flashy exterior.",
        "You are a master of sociability who adds warmth between people. You bring vitality to the center of a group, but often lose your true self by caring too much about others' opinions.",
        "You are like a candle with both intellectual curiosity and religious reverence. You are good at inner reflection but psychologically vulnerable to aggressive external stimuli.",
        "Your core symbolizes the revolutionary heat that transforms the world. Your fighting spirit against injustice is strong, but your lack of flexibility can turn allies into enemies.",
        "You are a lamp of the era with excellent media sense and information dissemination. You excel at processing news, but tend to stay in broad and shallow knowledge rather than deep contemplation.",
        "You possess the focus to pursue a single goal with pure and transparent passion. Pure immersion is your strength, but the depth of emptiness and depression when the goal vanishes is very profound.",
        "Your energy symbolizes stardom that dominates the stage and overwhelms the public. You have no hesitation in revealing yourself, but wander aimlessly when not in the spotlight.",
        "You are like a heater with gentleness and inclusion that melts cold air. You make those around you comfortable, but often lose out by only yielding when you should claim your rights.",
        "You are a visual leader with an outstanding ability to visualize imagination into reality. You are skilled at directing space and imagery, but tend to overlook the details of invisible systems.",
        "Your temperament signifies a free soul that crosses boundaries like a burning flame. You hate restraint and pursue a dynamic life, but instability follows from not taking root.",
        "You are a storyteller who creates dramatic narratives with rich sensitivity. Your power to draw empathy is great, but you often lose objective judgment due to emotional excess.",
        "Your core symbolizes a noble sacrificial spirit that sublimates any adversity into light. You devote yourself to the community, but collapse quietly when your sacrifice is taken for granted.",
        "You have an intellectual temperament that pinpoints social contradictions with sharp criticism. You have a sharpness that doesn't lose in debate, but risk staying in criticism without alternatives.",
        "You possess strategist energy with cold calculation hidden in hot passion. You are smart enough to know the winning point, but a tendency to see people as tools drives them away.",
        "You have developed a spiritual sense and intuition to read invisible frequencies. Your foresight is great, but you are likely to be indifferent or incompetent in the complex procedures of the real world.",
        "Your temperament is a flame of patience that calmly wraps heat and leads to fruit. You show mature leadership, but try to stick to old ways even when change is needed.",
        "You possess a fierce tenacity that keeps you burning on a chosen path to the end. You are likely to be the hero of human triumph, but you overwork those around you to match your speed.",
        "You possess healer energy that melts frozen hearts with warm heat. You are good at counseling and comfort, but often neglect your own wounds, letting mental illness grow.",
        "Your core signifies a noble artistic character that enjoys solitude amidst splendor. You have a unique worldview, but struggle to find a point of communication with the public.",
        "You are a sensuous practitioner who captures fleeting inspiration and connects it to business. You have a bright eye for money flow, but are vulnerable to the temptation of putting profit before moral values.",
        "You are an action leader who rectifies organizational discipline and spreads a passionate culture. Your drive is overwhelming, but you draw resentment for crude work in tasks requiring delicate coordination.",
        "Your energy is like the flame of a creator that creates something from nothing. Your planning is excellent, but you tend to stop at the idea stage and pass the execution to others.",
        "You are a flame of loyalty who forms deep bonds with a selected few and protects them. You are infinitely warm to your side, but burn them mercilessly once judged as an enemy.",
        "Your temperament is a self-sustaining stardom that shines in any environment. You rise again even from the bottom, but your pride is too strong to accept help from others.",
        "You possess a seeker's energy that contemplates the world and spreads truth. Your wisdom is deep, but you can make those around you suffer due to your indifference to realistic economic lack.",
        "You possess strong vitality like an ember of hope born in the darkest moment. You shine more as trials grow, but wander in boredom during peaceful daily life."
    ],
    "토(土)": [
        "You possess the core energy of a heavy earth that embraces all life and maintains balance. You value credit as life and act as a solid pillar of the organization, but conservatism that hates change holds you back.",
        "Your soul has the property of fertile soil that nurtures all things and grows people. Inclusion and patience are strengths, but you suffer by carrying others' burdens because you cannot refuse.",
        "According to birth data, you are a designer who lays the foundation for huge projects with unshakable conviction. Your planning is thorough, but you freeze when sudden situations arise.",
        "You have a very strong mediator temperament that absorbs conflict and settles peace. You lead harmony, but sometimes miss your rights by remaining silent when you should speak up.",
        "Your core is a master of practical management who removes inefficiency and operates systems stably. You are good at internal substance but conservative in introducing new technologies or trends.",
        "You are born with a persistent expert temperament that digs one well to completion. Your responsibility is overwhelming, but your vision narrows, making you miss the overall flow.",
        "You are a resourceful person with an eye for reading the hidden value of assets and laying the foundation for wealth. Your economic sense is good, but you miss big opportunities by choosing stability over adventure.",
        "Your temperament is a heavy mentor who establishes their own philosophy and becomes a compass for the public. You pursue a respected life, but sometimes show dogmatism by insisting your thought is the only answer.",
        "You are an insightful guardian who preserves traditional values and protects the era's heritage. You are good at protecting essence, but are often criticized as outdated for clinging to old ways.",
        "Your energy is a meticulous brain that manages resources without error, unaffected by emotion. You are strong in numbers and statistics, but have a coldness that ignores human emotional variables.",
        "You are a warm social innovator who embraces the marginalized and raises the world's temperature. You are philanthropic, but tend to neglect your family or close people.",
        "Your core is an unshakable will and a guardian of safety. You feel a mission in maintaining order, but show a nearly obsessive attitude toward regulation violations.",
        "You possess logistical wisdom that optimizes the flow of goods and dominates supply chains. You are good at maximizing efficiency, but cause conflict by failing to calculate the emotional fatigue of colleagues.",
        "You are a warehouse keeper of knowledge who systematizes vast amounts of data and preserves it permanently. Your archiving is outstanding, but execution is often delayed because you are buried in data collection.",
        "You are a craftsman-like housekeeper who creates value with delicate hands and gifts beauty. Technical perfection is high, but you tend to prioritize your own satisfaction over public marketability.",
        "Your temperament is a master of peace negotiation who leads sharp interests to a path of coexistence. You value fair distribution, but often end up sacrificing only yourself while trying to satisfy everyone.",
        "You possess an outstanding aesthetic and value judgment, like finding jewels in the earth. Your appraisal eye is good, but you miss good relationships or opportunities because you are too suspicious.",
        "Your energy is a guardian of the rule of law that rectifies the foundations of nations and organizations. You are good at establishing discipline, but often hear complaints of being inflexible due to exception-free application.",
        "You are a scholarly seeker who explores fundamental principles and builds the foundation of knowledge. Your intellectual depth is great, but you risk financial hardship due to indifference to realistic economic activities.",
        "Your core is a spiritual haven that soothes people's anxiety and provides peace. You are good at healing and counseling, but catch others' negative emotions easily and suffer burnout.",
        "You are a pillar of a huge educational community that teaches and grows many people. You are good at infrastructure building, but must guard against becoming a 'Kkondae' who forces their philosophy.",
        "Your temperament is an outstanding strategist who plans and succeeds in huge projects behind the scenes. You are good at back-end design, but often have your merits stolen because you cannot step forward.",
        "You are a guardian who protects the organization's roots based on unwavering trust even in trials. Your loyalty is deep, but the hit you take from being betrayed by someone you trusted is dozens of times greater than others.",
        "Your energy is a practical economist who tills the land to create real wealth. Diligent sincerity is your weapon, but you have a limit of focusing only on the value of labor rather than creative ideas.",
        "You are the epitome of 'soft outside, hard inside.' You show your true value in a crisis, but tend to be undervalued because you lower yourself too much in normal times.",
        "Your core is a calm problem solver who maintains composure even in chaos and organizes situations. Your cleanup ability is good, but you have a laziness of not moving until a problem occurs.",
        "You are a leader who extracts the most modern values within a conservative framework. Your harmony ability is good, but decision-making is delayed because you care too much about both sides.",
        "Your temperament is a cautious competitor who silently keeps their place and waits for the right time. You know the aesthetics of waiting, but sometimes wait too long and miss the bus.",
        "You possess a humble but strong vitality that creates great value from small things. You are good at managing substance, but tend to settle for the immediate reality rather than a great spirit.",
        "Your energy is the noble character of the earth that absorbs all pain and turns it into fertilizer. You show sacrificial leadership, but carry a great risk of losing health by not taking care of yourself."
    ],
    "금(金)": [
        "You were born with a sharp core of determination and resolution hardened in trials. You are a problem solver who settles chaos and restores order, but your coldness can hurt those around you.",
        "Your soul symbolizes a perfectionist sense of justice that organizes new energy and filters out the corrupt. Integrity is your weapon, but you have a weakness of making many enemies due to your critical view.",
        "According to birth data, you possess the weapon of a practitioner who proves value through action rather than words. Practical ability is overwhelming, but you cause conflict by only pushing principles in places where emotional communication is needed.",
        "You possess logical analytical power to find core rules in disorder. You are good at system maintenance, but easily become a non-communicating leader because you despise those making groundless emotional claims.",
        "Your core is an unshakable guardian of justice who strictly keeps social promises. You feel a mission in protecting honor, but tire those around you with black-and-white logic that ignores gray areas.",
        "You were born with the energy of a skilled craftsman and a delicate hand that misses no error. You are good at completing luxury, but collapse in self-destruction in low-quality environments that don't know the value of skill.",
        "Your temperament is a charismatic commander who efficiently leads an organization to victory. You are good at establishing discipline, but have a sharp-tongued tendency to publicly embarrass indecisive subordinates.",
        "You are the incarnation of detail who finds even minute flaws to complete perfection. Microscopic precision is your weapon, but you risk missing the big picture by risking your life on small things.",
        "Your energy is a noble inspector who corrects organizational contradictions and protects integrity. You refuse corrupt practices, but are likely to be pushed out of power or promotion for not compromising with the top.",
        "You are a cold strategist who analyzes vast amounts of numerical data to predict risk. Your tactics to seize victory are good, but you lose people's hearts by failing to read the human heart behind the numbers.",
        "Your core symbolizes a strong security defense that protects the essence of a system despite any storm. You are good at technical protection, but can be closed to the influx of new tech trends.",
        "You possess an indomitable will and strong mental power, pushing yourself and challenging limits. You have a fighter's temperament, but can become a tyrant who forces your painful standards on others.",
        "You are a decisive problem solver who saves lives in crisis and settles chaos. You shine in tension, but wander aimlessly in peaceful and boring daily life, unable to find the meaning of life.",
        "Your temperament is a fair evaluator who correctly distinguishes jewels from stones and invests in potential. You are good at unearthing future jewels, but show a cold side turning away from values that don't yield immediate profit.",
        "Your energy is a wise innovator who simplifies complex phenomena and presents clear solutions. You are good at process improvement, but frequently clash with organizations for not following bureaucratic procedures.",
        "You possess a strong independence to carry out your conviction without being swayed by anyone. Pioneering spirit is thorough, but your rigidity risks building an isolated empire of dogmatism.",
        "Your core is the energy of a noble public official who strictly executes law and justice to protect social dignity. You are good at establishing order, but risk missing humanism by being buried in the wording of the law.",
        "You are a talent who pursues logical perfection to solve the world's difficult problems mathematically. You are good at algorithm design, but show a near-seizure reaction when seeing contradictory situations.",
        "Your temperament is a profiler who distinguishes truth from lies and finds clues to cases in a labyrinth. You are good at truth clarification, but easily become emotionally dry because you look too much into others' dark inner selves.",
        "Your energy is a security talent who strictly protects core secrets and secretly completes missions. Secret maintenance is outstanding, but a loneliness follows from the difficulty of sincere communication even with family due to too many secrets.",
        "You are a sharp editorialist who pinpoints social contradictions with cold sensitivity and checks power. Your writing is sharp, but you must constantly guard against your pen being used only for destructive criticism.",
        "Your core is the capacity of a general designer who establishes organizational discipline and designs national visions. You are good at national design, but sometimes choose seclusion when your pride is hurt by partisan politics.",
        "You are a legendary master who realizes unique achievements and absolute value recorded in history. You are good at creating immortal value, but can make those around you suffer by ignoring realistic worldly desires.",
        "Your temperament is a sword and guardian that rushes first to save an organization in moments of crisis. You risk your life for justice, but also cause loss to public assets through procedural neglect and dogmatic judgment.",
        "Your energy signifies pure intelligence like a clear spring rising from a cold rock. Insight is deep, but you show fastidious tendencies because you cannot endure the muddy human relationships of reality.",
        "You are a precision-strike talent who flies like a missile toward a set goal and hits it. Execution is top-tier, but you cause major accidents by being unable to stop when the direction is wrongly set.",
        "Your core prefers clear communication like solid metals clashing to make sound. You have the clarity to speak from the conclusion, but also lose networks due to a lack of consideration in speech.",
        "Your temperament is one of integrity and loyalty, like a jewel that never changes once refined. Loyalty is strong, but there is a risk of being buried in past obligations and failing to keep pace with the changing times.",
        "Your energy is a flawless personality that removes unnecessary emotions and operates perfectly like a machine. Error-free perfection is a strength, but you are judged as a machine-like person without human warmth.",
        "You possess a strong patience that blooms in extreme environments, like a flower in the coldest ground. You shine in trials, but cannot use your energy well in a comfortable life without hardship."
    ],
    "수(水)": [
        "You possess the core energy of a wise Water that reads the flow of goods and capital to create wealth. You have the eye of a global strategist, but sometimes miss the timing for execution due to overthinking.",
        "Your soul has the property of a benevolent guide who helps the growth of all things and leads others. You are good at the guide role, but wander aimlessly, unable to decide your own life's direction.",
        "According to birth data, you are the incarnation of diplomatic mediation who flexibly adjusts interests to maximize profit. You are good at harmony, but often misunderstood as an opportunist who changes sides like a bat for gain.",
        "You possess the entrepreneurial energy to catch the wave of change and seize opportunities first. Your foresight is outstanding, but you experience fluctuations of intense wandering when your inner center is shaken.",
        "Your core is a strategic intelligence that precisely calculates risks and designs resource paths. Your design is good, but you suffer losses by ignoring intuition and trying to see the world only through numbers.",
        "You are a transparent analyst who pierces through the essence of events and delivers raw truth. You are good at truth uncovering, but make many unnecessary enemies in the process of exposing secrets.",
        "Your temperament is an alchemist of knowledge who collects info and turns it into wealth assets. You are good at platform planning, but often lack the practical muscle to turn head knowledge into capital.",
        "You are a strategist who maintains composure even in overheated competition and leads massive capital. Your competitor temperament is good, but you risk becoming a lonely rich person by obsessing over money flow rather than people's hearts.",
        "Your energy is a benevolent leadership that optimizes the flow of an entire organization and its talents. You are good at management, but may be alienated due to a lack of communication to translate vision into the public's language.",
        "You are a master of logistics who builds huge distribution systems and establishes order. You are good at supply chain design, but become pathologically sensitive and hysterical when seeing a tangled flow.",
        "Your core is a noble knowledge leader who enlightens the public with the light of wisdom and raises social dignity. Your educator nature is good, but arrogance toward the unlearned public may appear.",
        "Your temperament signifies the power of purification and healing that washes away conflicts and maintains peace. You are good at emotional purification, but catch illness first by accepting all negative energy.",
        "You are a wise strategist who creates a cool oasis even under extreme pressure. Your cleanup ability is good, but you often take all responsibility because only people who want to depend on you gather around.",
        "Your energy is a guardian of records who records valuable wisdom to set up milestones for the future. You are good at preservation, but risk failing to read current changes by being buried in past data.",
        "You are a luxury aide who builds deep trust with a selected few and multiplies high-end assets. Your selection eye is good, but you easily make enemies due to an elitism that rejects communication with the general public.",
        "You are a mysterious artist who creates new narratives with inspiration that transcends time and space. You are good at soul-stirring creation, but are as incompetent as a child in realistic economic calculations or procedures.",
        "Your core is the essence of law that transcends wording to interpret its spirit and protect human rights. You are good at protection, but the fairness of your judgment is doubted because emotion precedes legal logic.",
        "You are a data strategist who mathematically analyzes human psychology to draw the map of the digital age. Profiling is good, but you easily forget human warmth while buried in cold statistics.",
        "Your temperament is a master of regeneration who breathes life into vanishing things. You are good at restoration and branding, but struggle to keep up with the speed of a public that only loves the new.",
        "Your energy is a seeker of knowledge who realizes the principles of the universe and explores fundamental answers. Your philosophical depth is great, but you fall into a pit of poverty while laughing at worldly success.",
        "Your core is an intellectual mentor who sublimates the futility of life into wisdom and spreads the value of contemplation. Good at inner exploration, but feel anxiety as an outcast in a non-stop modern society.",
        "You are a giant and ocean of knowledge who systematizes and shares the human intellectual heritage. Encyclopedic knowledge is rich, but you are easily exploited by schemers who want to use your knowledge for private gain.",
        "Your temperament is an owner of originality who will surprise the world by exploring unknown territories. You have genius inspiration, but a disconnection follows as you build a wall toward a world that doesn't understand you.",
        "Your energy is a strategist and global distribution leader who finds answers in international politics. Your directing power is good, but you risk major defeat by missing simple principles as situations become complex.",
        "You are a person of mysteriousness and huge potential, like the deep sea. Prudence is your weapon, but you experience loneliness from being alienated even from close ones due to excessive secrecy.",
        "You have a spy temperament, penetrating anywhere to extract info and shake the board. Agility is good, but your identity becomes unclear, leading to frequent confusion about who you are.",
        "Your core is a symbol of patience and hope, like moisture waiting for spring under frozen ground. Your power to wait is great, but indecisiveness often lets opportunities rot by waiting too long.",
        "You are a trend wizard who creates huge fads by stimulating people's desires. You are good at parsing public psychology, but your own life risks flowing away pointlessly like a fad.",
        "Your temperament is like a purifying spring that washes all filth and makes it clear. You pursue moral noble-mindedness, but can show hysterical tendencies because you can't stand the dirty sights of the world.",
        "Your energy is a lonely philosopher who crafts pearls of wisdom in extreme solitude. Spiritual achievement is great, but life is precarious because realistic ties and economic foundations are always weak."
    ]
};

const nameSynergyEn = [
    "Your name acts as an accelerator that adds explosive power to your innate temperament. It helps fast achievement, but be careful as overheating may lead to dogmatic decisions.",
    "Your name's frequency performs a precision control role, sharpening your innate energy. It clarifies logical causality, but can sometimes cause an overly cynical attitude.",
    "Your name's wave acts as a buffer, gently wrapping your strong energy. It increases flexibility in relationships, but may cause indecisiveness at crucial moments.",
    "Your name's wave is like a stimulant, bringing your potential to the surface. It unearths hidden talents, but you may tire easily due to sharper-than-usual senses.",
    "Your name's energy acts as a focusing lens, uniting your scattered spirit. It maximizes goal focus, but has a blind spot of making you miss precious relationships nearby.",
    "Your name emits energy like a lubricant, helping you flow flexibly in any environment. It improves social skills, but carries a risk of diluting your essential convictions.",
    "Your name's frequency acts as a shield, protecting you from unseen threats. It provides stability, but also makes you passive in the face of new challenges.",
    "Your name has innovative vibrations to break the old and create the new. It leads change, but is a double-edged sword that can shake the stable foundations of life.",
    "Your name's energy performs as a coolant, chilling your rationality. it aids cool judgment, but risks giving a cold and heartless impression in relationships.",
    "Your name's wave grants powerful suction and charisma to captivate the public. It leads to a life of attention, but makes you overly dependent on others' opinions.",
    "Your name provides coordinating power like a thread that weaves scattered info together. It aids complex task handling, but may slow speed due to detail obsession.",
    "Your name's frequency adds an unshakable weightiness to you. It increases reliability, but has the effect of slowing thought transitions and strengthening stubbornness.",
    "Your name's energy stimulates your sensitivity, maximizing aesthetic insight. It aids artistic achievement, but has a blind spot of weakening realistic economic sense.",
    "Your name grants strong fighting spirit to break through any obstacle. It stimulates competitive desire, but may act as pressure leading to reckless choices to win.",
    "Your name's wave adds meditative energy, giving peace and rest to your inner self. It aids spiritual growth, but risks lowering competitiveness in the real world.",
    "Your name's frequency acts as a bridge to deeply empathize and communicate. It widens networks, but can cause burnout by taking on others' pain as your own.",
    "Your name's energy grants power of thorough principles and discipline. It makes you a model for group life, but can be a frame that suppresses creative ideas.",
    "Your name has academic frequency, making you constantly crave new knowledge. It drives intellectual growth, but may weaken execution as thought precedes action.",
    "Your name's wave adds wit and quickness to turn crises into opportunities. It aids improvisation, but may lead to focusing on short-term gains over long-term plans.",
    "Your name's energy grants differentiation, making your existence a unique brand. It creates unrivaled value, but follows with fateful isolation of walking a lonely path.",
    "Your name radiates benevolent energy to heal and care for others. It draws out sacrifice and devotion, but has a blind spot of neglecting your own health and interests.",
    "Your name's frequency adds business intuition to control massive capital and goods. It aids economic abundance, but may let calculating attitude precede human warmth.",
    "Your name's wave grants foresight and insight that leads the era. it performs as a direction-giver, but you may struggle to find common ground with the public.",
    "Your name grants sharp vigilance to detect and prepare for unseen threats. It aids stability, but sets up psychological barriers making it hard to trust others.",
    "Your name's energy adds clear organizing ability to remove clutter. It maximizes efficiency, but can be a cold blade that takes away the joy and leisure of process.",
    "Your name's frequency has vibrations of tenacity to realize impossible dreams. It enables human triumph, but encourages toxic perfectionism that overworks yourself.",
    "Your name provides cohesive power to unite people toward a great cause. It makes you a community leader, but can result in infringement of personal privacy.",
    "Your name's wave grants revolutionary energy to resist old customs and propose new order. It places you at the center of change, but clashing with old systems is inevitable.",
    "Your name's energy adds powerful weight and trust to your language. It raises speaking power and authority, but demands strict morality where one slip can lose all.",
    "Your name's frequency supplies extreme composure and patient energy. It keeps you unshaken by any storm, but may result in missing the timing for change and being isolated."
];

const transitionEn = "In this way, your name provides a powerful synergy to your innate temperament, but can also induce unexpected energy biases or side effects. To manage these effects and complete the balance of your destiny, please actively practice the weakness compensation prescriptions provided below.";
const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start",risk:"rigidity"},{key:"Harmony",core:"cooperation",risk:"dependency"},{key:"Growth",core:"expansion",risk:"scattered"},{key:"Foundation",core:"stability",risk:"stagnation"},{key:"Center",core:"balance",risk:"control"},{key:"Duty",core:"responsibility",risk:"overload"},{key:"Research",core:"analysis",risk:"isolation"},{key:"Result",core:"wealth",risk:"greed"},{key:"Completion",core:"closure",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

const sideEffects = ["'만성적 신중함' 주의", "무의식적으로 턱 괴는 습관", "월요일 오전의 일시적 무기력", "핸드폰을 들고 핸드폰 찾기", "칭찬 들으면 AI처럼 고장남", "근거 없는 자신감과 이불킥", "새벽 2시의 근거 없는 명석함", "디저트 무한 흡입 현상", "발표 직전 소음에 예민해짐", "상대의 오타를 정정하고픈 강박"];
const sideEffectsEn = ["Chronic deliberation", "Jaw-resting habit", "Monday lethargy", "Searching phone while holding it", "Freezing at compliments", "Late-night regrets", "2 AM enlightenment", "Sugar cravings", "Auditory sensitivity", "Typo correction urge"];

/* [1] 글로벌 감성 음절 (알베르토, 루시아 등 외국인 느낌 한글이름) */
const syllableKo1 = ["알", "베", "로", "루", "마", "에", "이", "카", "크", "프", "리", "니", "산", "벤", "파", "디", "레", "미", "넬", "벨", "아", "안", "엘", "오", "우", "클", "플", "브", "테", "스", "켈", "멜", "조", "제", "카", "피", "바", "샤", "타", "나", "휘", "린", "겸", "담", "온", "율", "준", "윤", "설", "예", "진", "현", "헤", "메", "세", "데", "게", "베", "페", "체", "제", "레", "네", "솔", "별", "얀", "실", "데", "모", "자", "바", "티", "피"];
const syllableKo2 = ["토", "라", "나", "아", "리", "엘", "온", "로", "스", "넬", "드", "크", "테", "샤", "루", "니", "벨", "룬", "인", "움", "리스", "티", "나", "시아", "안", "더", "엘", "엔", "이", "오", "아", "타", "카", "데", "레", "미", "피", "스", "트", "넬", "반", "센", "칸", "얀", "린", "론", "릴", "란", "레", "라", "나", "노", "네", "니", "누", "우", "재", "준", "솔", "아", "늘", "담", "린", "온", "율", "호", "스", "타", "포", "노", "뮤", "주"];

/* [2] 시대 및 지역 데이터 대확장 (전생: 역사 / 내세: 미래) */
const eraPastKo = [
    "서기 250년경", "기원전 1350년경", "서기 1050년경", "서기 1650년경", "서기 1450년경", 
    "서기 850년경", "서기 1510년경", "기원전 1750년경", "기원전 450년경", "서기 1900년경", 
    "서기 1150년경", "서기 1780년경", "서기 650년경", "기원전 510년경", "서기 1490년경", 
    "서기 950년경", "서기 1250년경", "서기 450년경", "기원전 2500년경", "서기 750년경"
];

/* [전생 장소 데이터: 시대와 짝을 맞춤] */
const regionPastKo = [
    "로마 제국 콜로세움 인근", "고대 이집트 나일강 하류", "중국 송나라 낙양 성내", "일본 에도 막부 교토 인근", "아즈텍 제국 테노치티틀란", 
    "북유럽 스칸디나비아 해안", "르네상스 이탈리아 피렌체", "메소포타미아 바빌론 정원", "고대 그리스 아테네 광장", "대한제국 한양 육조거리", 
    "고려 왕조 개경 저잣거리", "조선 시대 한양 도성", "마야 문명 유카탄 정글", "페르시아 제국 페르세폴리스", "잉카 제국 마추픽추 인근", 
    "비잔티움 제국 콘스탄티노플", "중세 프랑스 파리 센강변", "고대 인도 갠지스 강가", "수메르 문명 우루크 신전", "신라 서라벌 중심지"
];

/* [영문 데이터도 동일하게 맞춤] */
const eraPastEn = [
    "Around 250 AD", "Around 1350 BC", "Around 1050 AD", "Around 1450 AD", "Around 850 AD", 
    "Around 1510 AD", "Around 450 BC", "Around 1780 AD", "Around 650 AD", "Around 510 BC", 
    "Around 1800 AD", "Around 950 AD", "Around 1250 AD", "Around 450 AD"
];
const regionPastEn = [
    "Roman Empire", "Ancient Egypt", "Song Dynasty, China", "Aztec Empire", "Viking Scandinavia", 
    "Renaissance Italy", "Ancient Greece", "Chosun Dynasty, Korea", "Mayan Civilization", "Persian Empire", 
    "Industrial England", "Byzantine Empire", "Medieval France", "Ancient India"
];

const eraNextKo = ["은하 연합 시대", "네오-서울 자치국", "화성 개척 시대", "에테르 차원기", "해저 돔 시티", "공중 부유섬 시대", "사이버펑크 암흑기", "성간 식민지 시대", "포스트-휴먼 시대", "디지털 클라우드기", "안드로메다 연맹", "양자 도약 시대", "테라포밍기"];
const regionNextKo = ["섹터 7", "중앙 허브", "올림푸스 기지", "차원 게이트 00", "아쿠아리스", "클라우드-9", "네온 스트리트", "타이탄 정거장", "안드로메다 게이트", "제 4 거주구역", "뉴 런던 Hub", "가상현실 그리드", "심해 캡슐"];

const eraNextEn = ["Galactic Alliance", "Neo-Seoul State", "Mars Frontier", "Ether Dimension", "Underwater Dome City", "Sky Island Era", "Cyber-Punk Age", "Interstellar Colony", "Post-Human Era", "Quantum Leap Era"];
const regionNextEn = ["Sector 7", "Central Hub", "Olympus Base", "Zone 00", "Aquarius City", "Cloud-9", "Neon-Street 01", "Titan Station", "Andromeda Gate", "Deep Sea Dome"];

const epithetKoByElement = { 
    "木": ["신성한 숲의 기운과 굽히지 않는 강인한 의지를 지닌", "태초의 생명력과 끝없이 뻗어 나가는 성장의 에너지를 지닌", "푸른 바람의 유연함과 세상을 치유하는 자비로운 성품을 지닌", "새벽 이슬의 청초함과 생명의 시작을 알리는 고결함을 지닌", "거대한 고목의 침묵과 만물을 품는 포용력 있는 기상을 지닌", "대지를 뚫고 솟아오르는 기백과 개척자의 날카로운 혼을 지닌", "신비로운 덩굴의 생명력과 끈질기게 살아남는 집념을 지닌", "숲을 수호하는 영험한 기운과 범접할 수 없는 위엄을 지닌", "하늘을 향해 뻗은 가지의 이상과 고귀한 철학적 깊이를 지닌", "대나무의 곧은 절개와 부러지지 않는 단단한 내면을 지닌", "꽃을 피우는 섬세한 감각과 세상을 매료시키는 아름다움을 지닌", "뿌리 깊은 안정감과 보이지 않는 곳에서 세상을 지탱하는"],
    "火": ["타오르는 태양의 혼과 세상을 밝히는 찬란한 영광을 지닌", "별빛의 섬세함과 어둠을 몰아내는 날카로운 통찰력을 지닌", "용암의 뜨거운 열정과 모든 것을 집어삼킬 파괴력을 지닌", "심장 깊은 곳의 불꽃과 변화를 두려워하지 않는 용기를 지닌", "등불의 은은한 온기와 지치지 않는 영혼의 안식을 지닌", "번개의 번뜩이는 천재성과 순식간에 운명을 바꾸는 힘을 지닌", "제단의 성스러운 불꽃과 진리를 수호하는 고귀한 사명을 지닌", "꺼지지 않는 열망의 증거와 불멸의 의지를 영혼에 새긴", "노을의 우아한 마감과 고독 속에서 빛나는 성숙함을 지닌", "불사조의 강인한 생명력과 다시 일어서는 부활의 운명을 지닌", "화려한 불꽃놀이의 기개와 순간의 영원을 포착하는 힘을 지닌", "빛의 근원을 탐구하는 갈망과 진실을 꿰뚫는 눈을 지닌"],
    "土": ["태초의 대지가 품은 고요함과 흔들리지 않는 안정을 지닌", "높은 산의 신비로운 정기와 만물을 내려다보는 지혜를 지닌", "황금 벌판의 풍요로움과 타인에게 아낌없이 베푸는 덕을 지닌", "사막의 고독한 강인함과 극한을 견뎌내는 인내심을 지닌", "깊은 동굴의 정지된 시간과 비밀을 간직한 신비로움을 지닌", "비옥한 토양의 부드러움과 생명을 잉태하는 숭고함을 지닌", "섬세한 도자기의 단단함과 세월이 빚어낸 우아한 기품을 지닌", "대륙을 가로지르는 거대한 흐름과 중재자의 침착함을 지닌", "지층에 새겨진 시간의 지혜와 우주의 기억을 공유하는", "바위의 묵직한 신뢰와 변치 않는 영원한 우정을 지닌", "안개의 모호함 속에 감춰진 거대한 실체와 신비함을 지닌", "지평선의 무한한 가능성과 경계가 없는 자유로움을 지닌"],
    "金": ["차가운 달빛의 예리함과 범접할 수 없는 고결한 기품을 지닌", "정련된 보석의 광채와 부서지지 않는 완벽한 질서를 지닌", "전설 속 명검의 서늘함과 운명을 단번에 베어내는 힘을 지닌", "흰 눈의 순수함과 세상을 정화하는 강력한 에너지를 지닌", "거울처럼 맑은 이성과 진실을 비추는 정직한 성품을 지닌", "황금 갑옷의 위풍당당함과 정의를 향한 굽히지 않는 기개를 지닌", "얼음 송곳의 냉철함과 한 치의 오차도 허용하지 않는 정밀함을 지닌", "가을 서리의 단호함과 맺고 끊음이 확실한 결단력을 지닌", "강철의 견고한 침묵과 어떤 시련도 튕겨내는 방어력을 지닌", "악기의 맑은 울림과 영혼을 울리는 공명감을 지닌", "바람을 가르는 화살의 신속함과 목표를 향한 집요함을 지닌", "보물지도의 신비로운 암호와 보이지 않는 부를 끌어당기는"],
    "水": ["영원한 심연의 지혜와 멈추지 않고 흐르는 유려함을 지닌", "대양의 거대한 포용력과 모든 것을 품어 안는 관용을 지닌", "맑은 샘물의 영험함과 영혼을 씻어내는 정화의 능력을 지닌", "빗방울의 섬세함과 감성을 자극하는 예술적 기질을 지닌", "짙은 안개의 신비로움과 속을 알 수 없는 깊은 통찰을 지닌", "폭포의 거침없는 기상과 장애물을 돌파하는 에너지를 지닌", "얼어붙은 호수의 정적과 폭풍 전야의 긴장된 지적 능력을 지닌", "이슬처럼 맑은 영혼과 순수하게 빛나는 지혜의 눈을 지닌", "검은 바다의 거대한 비밀과 운명을 읽어내는 직관력을 지닌", "강물의 끊임없는 탐구심과 지식의 바다로 향하는 열정을 지닌", "파도의 유연한 춤사위와 상황에 따라 변화하는 천재성을 지닌", "구름의 자유로운 비행과 구속받지 않는 영혼의 날개를 지닌"] 
};

const epithetEnByElement = { 
    "木": ["Possessing divine forest energy", "Possessing primordial vitality", "Possessing blue wind flexibility", "Possessing dawn dew purity", "Possessing ancient tree silence", "Possessing breakthrough spirit", "Possessing vine mystery", "Possessing forest energy", "Possessing high ideals", "Possessing bamboo integrity", "Possessing artistic sense", "Possessing rooted stability"],
    "火": ["Possessing solar soul", "Possessing starlight delicacy", "Possessing lava passion", "Possessing heart of flame", "Possessing lamp warmth", "Possessing lightning genius", "Possessing sacred flame", "Possessing proof of desire", "Possessing sunset grace", "Possessing phoenix vitality", "Possessing firework spirit", "Possessing light longing"],
    "土": ["Possessing primordial serenity", "Possessing mountain mystery", "Possessing golden field abundance", "Possessing desert strength", "Possessing cave stillness", "Possessing soil softness", "Possessing porcelain hardness", "Possessing continental flow", "Possessing strata wisdom", "Possessing rock trust", "Possessing hidden reality", "Possessing horizon potential"],
    "金": ["Possessing moonlight sharpness", "Possessing gem brilliance", "Possessing sword chill", "Possessing white snow purity", "Possessing clear reason", "Possessing armor dignity", "Possessing ice coldness", "Possessing frost decisiveness", "Possessing steel silence", "Possessing instrument resonance", "Possessing arrow speed", "Possessing map mystery"],
    "水": ["Possessing abyssal wisdom", "Possessing vast tolerance", "Possessing spring water divinity", "Possessing raindrop rhythm", "Possessing mist mystery", "Possessing waterfall spirit", "Possessing lake silence", "Possessing dew soul", "Possessing sea secrets", "Possessing river curiosity", "Possessing wave genius", "Possessing cloud flight"] 
};

// [1. 정밀화된 60갑자 일주(日柱) 계산기]
function getIlju(year, month, day) {
    const stems = [
        { name: "갑(甲)", el: "목(木)", id: "gap" }, { name: "을(乙)", el: "목(木)", id: "eul" },
        { name: "병(丙)", el: "화(火)", id: "byeong" }, { name: "정(丁)", el: "화(火)", id: "jeong" },
        { name: "무(戊)", el: "토(土)", id: "mu" }, { name: "기(己)", el: "토(土)", id: "gi" },
        { name: "경(庚)", el: "금(金)", id: "gyeong" }, { name: "신(辛)", el: "금(金)", id: "sin" },
        { name: "임(壬)", el: "수(水)", id: "im" }, { name: "계(癸)", el: "수(水)", id: "gye" }
    ];
    const branches = [
        { name: "자(子)", id: "ja" }, { name: "축(丑)", id: "chuk" },
        { name: "인(寅)", id: "in" }, { name: "묘(卯)", id: "myo" },
        { name: "진(辰)", id: "jin" }, { name: "사(巳)", id: "sa" },
        { name: "오(午)", id: "o" }, { name: "미(未)", id: "mi" },
        { name: "신(申)", id: "shin" }, { name: "유(酉)", id: "yu" },
        { name: "술(戌)", id: "sul" }, { name: "해(亥)", id: "hae" }
    ];
    
    const baseDate = new Date(Date.UTC(1900, 0, 1));
    const targetDate = new Date(Date.UTC(year, month - 1, day));
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    let iljuIndex = (diffDays + 10) % 60;
    if (iljuIndex < 0) iljuIndex += 60;
    
    const stem = stems[iljuIndex % 10];
    const branch = branches[iljuIndex % 12];
    
    return {
        stemName: stem.name, stemId: stem.id, el: stem.el,
        branchName: branch.name, branchId: branch.id,
        iljuName: stem.name[0] + branch.name[0]
    };
}

// [2. 운명공학 레고 블록 모음]
const stemTemplates = {
    gap: { ko: "하늘을 향해 곧게 뻗어 올라가는 '거대한 고목'", en: "a 'Giant Ancient Tree' reaching straight up toward the sky" },
    eul: { ko: "척박한 환경에서도 끈질기게 살아남는 '야생 덩굴'", en: "a 'Tenacious Wild Vine' surviving persistently even in harsh environments" },
    byeong: { ko: "세상을 공평하게 비추는 한낮의 '거대한 태양'", en: "a 'Massive Midday Sun' shining fairly upon the world" },
    jeong: { ko: "짙은 어둠을 따뜻하게 밝히는 '모닥불'", en: "a 'Warm Campfire' illuminating the deep darkness" },
    mu: { ko: "묵묵히 만물을 품어주는 '거대한 산맥'", en: "a 'Majestic Mountain Range' silently harboring all things" },
    gi: { ko: "수많은 생명을 정성껏 길러내는 '비옥한 정원'", en: "a 'Fertile Garden' carefully nurturing countless lives" },
    gyeong: { ko: "아직 제련되지 않은 거대한 '무쇠와 암석'", en: "massive 'Unrefined Iron and Solid Bedrock'" },
    sin: { ko: "장인의 손길로 정교하게 세공된 '빛나는 보석'", en: "a 'Shining Jewel' precisely crafted by a master artisan" },
    im: { ko: "그 속을 알 수 없는 깊고 '거대한 바다'", en: "a 'Deep and Vast Ocean' whose depths cannot be known" },
    gye: { ko: "메마른 만물을 조용히 적시는 '맑은 봄비'", en: "a 'Clear Spring Rain' quietly moistening all parched things" }
};

const branchTemplates = {
    ja: { ko: "한겨울의 고요하고 깊은 호수", en: "a quiet, deep lake in midwinter" },
    chuk: { ko: "생명을 품고 묵묵히 봄을 기다리는 언 땅", en: "frozen ground silently waiting for spring with life inside" },
    in: { ko: "만물이 생동하기 시작하는 초봄의 숲", en: "an early spring forest where all things begin to come alive" },
    myo: { ko: "생명력이 만발한 따뜻한 봄날의 들판", en: "a warm spring field blooming with vitality" },
    jin: { ko: "풍요로운 비를 머금은 거대한 습지", en: "a massive wetland retaining abundant rain" },
    sa: { ko: "태양이 작열하기 시작하는 초여름의 열기", en: "the early summer heat where the sun begins to scorch" },
    o: { ko: "만물을 뜨겁게 달구는 한여름의 용광로", en: "a midsummer furnace heating up everything" },
    mi: { ko: "열기를 가득 품은 건조하고 척박한 사막", en: "a dry and barren desert holding full heat" },
    shin: { ko: "서늘한 기운이 감도는 초가을의 단단한 바위산", en: "a solid rocky mountain in early autumn with a cool breeze" },
    yu: { ko: "찬 이슬이 맺히기 시작하는 예리한 가을 저녁", en: "a sharp autumn evening when cold dew begins to form" },
    sul: { ko: "추수를 마치고 고요해진 쓸쓸한 가을 들판", en: "a lonely autumn field grown quiet after the harvest" },
    hae: { ko: "만물을 깊은 곳으로 갈무리하는 겨울의 심해", en: "the winter deep sea storing all things deep within" }
};

const stemDescriptions = {
    gap: { ko: "순수한 명예욕과 굽히지 않는 리더십이 당신의 뼈대입니다. 비바람이 몰아쳐도 쉽게 흔들리지 않는 굳건한 신념을 지녔으며, 주변 사람들에게 든든한 휴식처가 되어주는 외유내강의 기질을 발휘합니다.", en: "Pure desire for honor and unyielding leadership form your backbone. You possess a firm conviction that is not easily shaken by storms, displaying an inner strength that provides a sturdy resting place for those around you." },
    eul: { ko: "뛰어난 환경 적응력과 질긴 생명력이 당신의 뼈대입니다. 사람과 사람 사이를 부드럽게 연결하는 네트워킹 능력이 탁월하며, 거친 세상 속에서도 낭만을 잃지 않고 끝끝내 살아남아 최후의 승자가 됩니다.", en: "Excellent adaptability and tough vitality form your backbone. You have outstanding networking skills that connect people smoothly, and you never lose romance in a rough world, ultimately surviving to become the final victor." },
    byeong: { ko: "숨김없는 솔직함과 만물을 길러내는 압도적인 스케일이 당신의 뼈대입니다. 음침하거나 계산적인 것을 혐오하며, 매사에 열정적이고 뒤끝이 없는 시원한 성격으로 조직의 분위기를 주도합니다.", en: "Unhidden honesty and an overwhelming scale that nurtures all things form your backbone. You despise anything gloomy or calculating, leading the organization's atmosphere with a passionate and refreshing personality that holds no grudges." },
    jeong: { ko: "좁고 깊게 파고드는 폭발적인 열정과 섬세한 영감이 당신의 뼈대입니다. 평소에는 다정하게 타인의 상처를 보듬지만, 한 번 집중한 일에는 자신의 모든 것을 불태우는 놀라운 몰입력을 보여줍니다.", en: "Explosive passion digging narrowly and deeply, along with delicate inspiration, form your backbone. Usually sweet in soothing others' wounds, you show amazing immersion, burning everything you have for a task once focused." },
    mu: { ko: "쉽게 감정을 드러내지 않는 묵직한 포용력과 만인이 기대고 싶어 하는 강렬한 신뢰감이 당신의 뼈대입니다. 다양한 사람들의 사연을 묵묵히 들어주고 중재해 주며, 어떤 비바람에도 변치 않는 든든한 울타리가 되어줍니다.", en: "A heavy embrace that doesn't easily reveal emotions and an intense trustworthiness that everyone wants to lean on form your backbone. You silently listen to and mediate diverse stories, becoming an unchanging, sturdy fence in any storm." },
    gi: { ko: "어머니 같은 온화함과 실속을 챙기는 치밀함이 당신의 뼈대입니다. 뜬구름 잡는 이상보다는 현실적이고 구체적인 결과를 만들어내는 감각이 탁월하며, 조직을 따뜻하게 윤활하는 역할을 완벽히 해냅니다.", en: "Motherly gentleness and the meticulousness to secure substance form your backbone. Rather than chasing vague ideals, you have an excellent sense for creating realistic results, perfectly lubricating the organization warmly." },
    gyeong: { ko: "불의와 타협하지 않는 강직함과 한 번 결심한 것은 우직하게 밀어붙이는 단호한 결단력이 당신의 뼈대입니다. 얕은 잔머리를 극도로 혐오하며, 오직 원칙과 의리를 목숨처럼 여기는 투사의 기질을 지녔습니다.", en: "A rigid integrity that never compromises with injustice and a firm decisiveness that pushes forward stubbornly form your backbone. You strictly despise petty tricks, possessing a fighter's temperament valuing principles and loyalty." },
    sin: { ko: "한 치의 오차도 허용하지 않는 예민한 완벽주의와 탁월한 미적 감각이 당신의 뼈대입니다. 대인관계에서 맺고 끊음이 칼같이 확실하며, 문제의 핵심을 단번에 찌르는 날카로운 통찰력을 발휘합니다.", en: "Sensitive perfectionism allowing no errors and an outstanding aesthetic sense form your backbone. You are razor-sharp in setting boundaries in relationships, displaying piercing insight that immediately hits the core of a problem." },
    im: { ko: "방대한 지혜와 멈추지 않는 지적 호기심, 그리고 어떤 환경이나 사람도 거뜬히 수용해 내는 스케일이 당신의 뼈대입니다. 평소에는 잔잔하지만, 한계에 다다랐을 때는 모든 것을 뒤엎어버리는 무서운 폭발력을 감추고 있습니다.", en: "Boundless wisdom, unstoppable intellectual curiosity, and a scale that easily embraces any environment form your backbone. Usually tranquil, you hide a terrifying explosive power capable of overturning everything when pushed to the limit." },
    gye: { ko: "타인의 닫힌 마음을 세밀하게 읽어내는 뛰어난 공감 능력과, 소리 없이 상황을 주도하는 치밀한 기획력이 당신의 뼈대입니다. 전면에 나서기보다는 뒤에서 조용히 영향력을 행사하며 완벽한 킹메이커의 역할을 해냅니다.", en: "Outstanding empathy carefully reading closed minds and meticulous planning that silently drives situations form your backbone. Rather than standing at the forefront, you quietly exercise influence from behind, acting as the perfect kingmaker." }
};

const strongTemplates = {
    "목(木)": { ko: "전체적인 탄생 에너지를 보면 나무(木)의 기운이 지배적이라, 당신에게 꺾이지 않는 고집과 강한 개척 정신을 무기로 부여했습니다.", en: "Looking at your overall birth energy, Wood is dominant, endowing you with unyielding stubbornness and a strong pioneering spirit as your weapons." },
    "화(火)": { ko: "전체적인 탄생 에너지를 보면 불(火)의 기운이 지배적이라, 폭발적인 추진력과 풍부한 감정 표현력을 무기로 부여했습니다.", en: "Looking at your overall birth energy, Fire is dominant, endowing you with explosive drive and rich emotional expression as your weapons." },
    "토(土)": { ko: "전체적인 탄생 에너지를 보면 흙(土)의 기운이 지배적이라, 당신에게 뛰어난 중재 능력과 환경을 안정시키는 무거운 책임감을 부여했습니다.", en: "Looking at your overall birth energy, Earth is dominant, endowing you with excellent mediation skills and a heavy sense of responsibility to stabilize your environment." },
    "금(金)": { ko: "전체적인 탄생 에너지를 보면 쇠(金)의 기운이 지배적이라, 당신에게 완벽주의적 성향과 차가운 이성을 무기로 부여했습니다.", en: "Looking at your overall birth energy, Metal is dominant, endowing you with perfectionist tendencies and cold rationality as your weapons." },
    "수(水)": { ko: "전체적인 탄생 에너지를 보면 물(水)의 기운이 지배적이라, 당신에게 사물의 이면을 꿰뚫어 보는 통찰력과 넓은 포용력을 무기로 부여했습니다.", en: "Looking at your overall birth energy, Water is dominant, endowing you with the insight to pierce the hidden side of things and broad tolerance as your weapons." }
};

const weakTemplates = {
    "목(木)": { ko: "다만, 나무(木)의 기운이 부족하여 새로운 일을 시작하는 결단력이나 스스로를 밀고 나가는 돌파력에서 종종 갈증을 느낄 수 있습니다.", en: "However, a lack of Wood energy may occasionally leave you thirsting for the decisiveness to start new things or the breakthrough power to push yourself forward." },
    "화(火)": { ko: "다만, 불(火)의 기운이 부족하여 매사에 열정을 꾸준히 유지하거나 스스로를 세상에 화려하게 드러내는 데에 한계를 느낄 수 있습니다.", en: "However, a lack of Fire energy may make you feel limited in consistently maintaining passion or showing yourself brilliantly to the world." },
    "토(土)": { ko: "다만, 흙(土)의 기운이 부족하여 삶의 무게중심을 굳건히 잡거나 주변을 안정적으로 포용하는 마음의 여유에서 갈증을 느낄 수 있습니다.", en: "However, a lack of Earth energy may leave you thirsting for the composure to firmly ground the center of your life or stably embrace your surroundings." },
    "금(金)": { ko: "다만, 쇠(金)의 기운이 부족하여 맺고 끊음이 확실한 단호함이나 목표를 끝까지 관철하는 뚝심에서 한계를 느낄 수 있습니다.", en: "However, a lack of Metal energy may make you feel limited in clear decisiveness or the perseverance to see goals through to the end." },
    "수(水)": { ko: "다만, 물(水)의 기운이 부족하여 유연하게 상황을 모면하거나 깊이 있는 사유로 돌파구를 찾는 지혜에서 갈증을 느낄 수 있습니다.", en: "However, a lack of Water energy may leave you thirsting for the wisdom to flexibly escape situations or find breakthroughs through deep thought." }
};

const jeolgiNames = {
    0: { ko: "대한(大寒)의 극한으로 응축된 기후", en: "the extremely condensed climate of Daehan (Major Cold)" },
    1: { ko: "입춘(立春)의 만물이 태동하는 생동감 넘치는 기후", en: "the vibrant climate of Ipchun (Beginning of Spring)" },
    2: { ko: "우수(雨水)의 싹을 틔우는 부드러운 해빙의 기후", en: "the soft thawing climate of Usu (Rain Water)" },
    3: { ko: "경칩(驚蟄)의 겨울잠을 깨우는 역동적인 기후", en: "the dynamic climate of Gyeongchip (Awakening of Insects)" },
    4: { ko: "춘분(春分)의 음양 에너지가 완벽히 균형 잡힌 기후", en: "the perfectly balanced Yin-Yang climate of Chunbun (Spring Equinox)" },
    5: { ko: "청명(淸明)의 생명력이 맑고 투명하게 뻗어가는 기후", en: "the clear and transparent growing climate of Cheongmyeong (Clear and Bright)" },
    6: { ko: "곡우(穀雨)의 대지를 적시며 성장을 돕는 풍요로운 기후", en: "the abundant climate of Gogu (Grain Rain)" },
    7: { ko: "입하(立夏)의 열기가 시작되며 위로 솟구치는 기후", en: "the surging climate of Ipha (Beginning of Summer)" },
    8: { ko: "소만(小滿)의 생장이 만발하여 에너지가 차오르는 기후", en: "the energy-filling climate of Soman (Grain Full)" },
    9: { ko: "망종(芒種)의 씨앗을 뿌리는 분주하고 폭발적인 기후", en: "the busy and explosive climate of Mangjong (Grain in Ear)" },
    10: { ko: "하지(夏至)의 빛의 에너지가 절정에 달한 강렬한 기후", en: "the intense climate of Haji (Summer Solstice)" },
    11: { ko: "소서(小暑)의 본격적인 맹위가 시작되는 뜨거운 기후", en: "the hot climate of Soseo (Minor Heat)" },
    12: { ko: "대서(大暑)의 한계를 시험하는 극한의 폭염 기후", en: "the extremely scorching climate of Daeseo (Major Heat)" },
    13: { ko: "입추(立秋)의 열기 속에서 서늘한 결실을 준비하는 기후", en: "the climate of Ipchu (Beginning of Autumn)" },
    14: { ko: "처서(處暑)의 더위가 꺾이고 에너지가 수렴되는 기후", en: "the converging climate of Cheoseo (End of Heat)" },
    15: { ko: "백로(白露)의 투명한 이슬이 맺히는 서늘하고 맑은 기후", en: "the cool and clear climate of Baekro (White Dew)" },
    16: { ko: "추분(秋分)의 성장을 멈추고 거둬들이는 공정한 기후", en: "the fair climate of Chubun (Autumn Equinox)" },
    17: { ko: "한로(寒露)의 찬 이슬이 맺히며 본질만 남기는 기후", en: "the climate of Hanro (Cold Dew)" },
    18: { ko: "상강(霜降)의 서리가 내리며 불필요한 것을 소멸시키는 기후", en: "the eradicating climate of Sanggang (Frost Descent)" },
    19: { ko: "입동(立冬)의 에너지를 깊은 곳으로 갈무리하는 기후", en: "the climate of Ipdong (Beginning of Winter)" },
    20: { ko: "소설(小雪)의 고요함 속에서 내실을 다지는 기후", en: "the climate of Soseol (Minor Snow)" },
    21: { ko: "대설(大雪)의 세상을 하얗게 덮으며 모든 것을 품는 기후", en: "the embracing climate of Daeseol (Major Snow)" },
    22: { ko: "소한(小寒)의 차가운 압박 속에서 생명력을 지키는 기후", en: "the climate of Sohan (Minor Cold)" },
    23: { ko: "소한(小寒)의 맹렬한 추위가 절정에 달한 기후", en: "the climate of Sohan (Minor Cold Peak)" }
};
const luckyTitles81 = {
    1: "기본격-만사휴태 (萬事休泰)", 2: "동요격-분리파란 (分離波瀾)", 3: "도약격-입신양명 (立身揚名)", 4: "부정격-파괴멸망 (破壞滅亡)", 5: "복덕격-성공발전 (成功發展)",
    6: "계승격-덕후유복 (德厚有福)", 7: "강건격-주도면밀 (周到綿密)", 8: "수전격-자수성가 (自手成家)", 9: "궁박격-불의재난 (不意災難)", 10: "공허격-다재다능 (多才多能)",
    11: "신성격-재래부흥 (再來復興)", 12: "박약격-고립무원 (孤立無援)", 13: "지혜격-총명발달 (聰明發達)", 14: "이산격-파괴번뇌 (破壞煩惱)", 15: "통솔격-복수쌍전 (福壽雙全)",
    16: "덕망격-재물유복 (財物有福)", 17: "건창격-강직투쟁 (剛直鬪爭)", 18: "발전격-의지견고 (意志堅固)", 19: "고난격-병약고독 (病弱孤獨)", 20: "허망격-중도좌절 (中途挫折)",
    21: "두령격-독립권위 (獨立權威)", 22: "중절격-부부운박 (夫婦運薄)", 23: "공명격-위세당당 (威勢堂堂)", 24: "입신격-축재풍부 (蓄財豊富)", 25: "건창격-재치민활 (才致敏活)",
    26: "영웅격-파란만장 (波瀾萬丈)", 27: "중단격-좌절중단 (挫折中斷)", 28: "파란격-파란곡절 (波瀾曲折)", 29: "성공격-신망두터 (信望厚厚)", 30: "부침격-길흉상반 (吉凶相半)",
    31: "융창격-자수성가 (自手成家)", 32: "순풍격-의외득재 (意外得財)", 33: "제왕격-위풍당당 (威風堂堂)", 34: "파멸격-파란곡절 (波瀾曲折)", 35: "안강격-평범온화 (平凡溫和)",
    36: "협객격-파란만장 (波瀾萬丈)", 37: "인덕격-유의유덕 (有意有德)", 38: "복록격-문학예술 (文學藝術)", 39: "장성격-부귀번영 (富貴繁榮)", 40: "파란격-변화무쌍 (變化無雙)",
    41: "고봉격-대업성취 (大業成就)", 42: "고행격-자력갱생 (自力更生)", 43: "성쇠격-외화내빈 (外華內貧)", 44: "마장격-미궁속황 (迷宮束徨)", 45: "대성격-만물통합 (萬物統合)",
    46: "미망격-방황고민 (彷徨苦悶)", 47: "출세격-득의만면 (得意滿面)", 48: "유덕격-지도역량 (指導力量)", 49: "변화격-길흉상반 (吉凶相半)", 50: "부침격-성패교차 (成敗交叉)",
    51: "춘추격-성패상반 (成敗相半)", 52: "약진격-기회포착 (機會捕捉)", 53: "내빈격-외화내빈 (外華內貧)", 54: "패망격-백계무책 (百計無策)", 55: "미달격-외양내허 (外樣內虛)",
    56: "부족격-진퇴유곡 (進退維谷)", 57: "재기격-시련극복 (試鍊克服)", 58: "후복격-자수성가 (自手成家)", 59: "불우격-의지박약 (意志薄弱)", 60: "동요격-상하불안 (上下不安)",
    61: "재화격-지혜충만 (智慧充滿)", 62: "쇠퇴격-내우외환 (內憂外患)", 63: "성공격-부귀영광 (富貴榮光)", 64: "침체격-변화무쌍 (變化無雙)", 65: "휘황격-만물평온 (萬物平溫)",
    66: "망신격-내우외환 (內憂外患)", 67: "승리격-천하태평 (天下泰平)", 68: "창업격-지모탁월 (智謀卓越)", 69: "정체격-병약곤궁 (病弱困窮)", 70: "공허격-멸망멸절 (滅亡滅絶)",
    71: "안정격-내실충실 (內實充實)", 72: "상반격-길흉상반 (吉凶相半)", 73: "평범격-자수성가 (自手成家)", 74: "불우격-만사불우 (萬事不遇)", 75: "안정격-평화온화 (平和溫和)",
    76: "이산격-내우외환 (內憂外患)", 77: "성패격-길흉상반 (吉凶相半)", 78: "선길격-평범온화 (平凡溫和)", 79: "불운격-정체불명 (正體不明)", 80: "종말격-은둔생활 (隱遁生活)",
    81: "환희격-복덕원만 (福德圓滿)"
};
const luckyTitles81En = { 1: "Origin", 2: "Turbulence", 3: "Ascent", 4: "Chaos", 5: "Prosperity", 6: "Heritage", 7: "Fortitude", 8: "Resilience", 9: "Adversity", 10: "Void", 11: "Revival", 12: "Frailty", 13: "Brilliance", 14: "Dispersion", 15: "Command", 16: "Prestige", 17: "Integrity", 18: "Expansion", 19: "Hardship", 20: "Illusion", 21: "Sovereignty", 22: "Interruption", 23: "Majesty", 24: "Accumulation", 25: "Sharpness", 26: "Hero", 27: "Cease", 28: "Surge", 29: "Success", 30: "Flux", 31: "Bloom", 32: "Breeze", 33: "Imperial", 34: "Ruin", 35: "Serenity", 36: "Wanderer", 37: "Benevolence", 38: "Artistry", 39: "General", 40: "Change", 41: "Summit", 42: "Penance", 43: "Fluctuation", 44: "Obstacle", 45: "Mastery", 46: "Delusion", 47: "Triumph", 48: "Mentor", 49: "Transformation", 50: "Wave", 51: "Seasons", 52: "Leap", 53: "Hidden", 54: "Failure", 55: "Surface", 56: "Dilemma", 57: "Recovery", 58: "Rebound", 59: "Misfortune", 60: "Shaking", 61: "Treasure", 62: "Decline", 63: "Glory", 64: "Stagnation", 65: "Radiance", 66: "Scandal", 67: "Victory", 68: "Founder", 69: "Standstill", 70: "Emptiness", 71: "Stability", 72: "Division", 73: "Simplicity", 74: "Misery", 75: "Calm", 76: "Departure", 77: "Balance", 78: "Omen", 79: "Mist", 80: "Hermit", 81: "Bliss" };

const detailedDesc81 = {
    1: "해당 성명은 1수로 분류됩니다. 흔들리지 않는 추진력과 선구자적 기질을 지녔다는 것이 훌륭한 장점입니다. 목(木)의 발아하는 성분과 태초의 생명력이 겹쳐 무에서 유를 창조하는 독보적인 독립심으로 발현되기 때문입니다. 다만, 이러한 강한 기운이 때로는 주변의 조언을 무시하는 독단으로 이어질 우려가 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 유연한 오행이 더해지면 넘치는 추진력에 훌륭한 윤활유가 되어 아주 좋습니다.</b>",
    2: "해당 성명은 2수로 분류됩니다. 뛰어난 협동심과 유연함을 발휘하는 것이 큰 장점입니다. 목(木)의 분산하는 성분과 환경에 적응하려는 성분이 강하게 작용하여 타인의 감정을 예민하게 읽어내는 공감 능력이 극대화되기 때문입니다. 다만, 응집력이 부족하여 마무리가 흐려지거나 결단력이 약해질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 단단한 오행이 더해지면 자신만의 확고한 루틴을 설계하고 운의 지지대를 확보하는 데 아주 좋습니다.</b>",
    3: "해당 성명은 3수로 분류됩니다. 대중의 시선을 사로잡는 스타성과 창의적인 자기표현, 그리고 빠른 두뇌 회전을 갖춘 것이 장점입니다. 화(火)의 팽창하는 성분과 명예를 지향하는 성분이 에너지를 사방으로 뻗어 나가게 하기 때문입니다. 다만, 맺고 끊음이 부족하여 겉은 화려하나 실속이 부족해질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 결단력 있는 오행이 더해지면 흩어지는 에너지를 실질적인 성과로 수치화하고 관리하는 데 아주 좋습니다.</b>",
    4: "해당 성명은 4수로 분류됩니다. 기존 틀을 깨는 비범한 아이디어를 지녀 파괴적 혁신으로 시대를 앞서간다는 훌륭한 장점이 있습니다. 화(火)의 과열된 성분과 변동을 일으키는 성분이 기존의 낡은 질서를 태우고 새로운 변화를 주도하기 때문입니다. 다만, 냉정함이 부족해 감정의 기복으로 일을 그르칠 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 차분한 오행이 더해지면 중요한 결정 앞에서 훌륭한 냉각기 역할을 해주어 아주 좋습니다.</b>",
    5: "해당 성명은 5수로 분류됩니다. 주변에 사람이 모이고 두터운 신망을 얻으며 평온한 가정운을 이룬다는 것이 큰 장점입니다. 토(土)의 중심을 잡는 성분과 안락함을 추구하는 성분이 작용하여 대지가 만물을 품듯 재물과 인복이 쌓이기 때문입니다. 다만, 안정에 치중하다 보니 개척 정신이 약해져 매너리즘에 빠지기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 뻗어나가는 오행이 더해지면 일상에 활력을 주어 운의 흐름이 고이지 않게 도와주어 아주 좋습니다.</b>",
    6: "해당 성명은 6수로 분류됩니다. 조직의 핵심에서 신뢰받는 리더로 자리 잡으며 풍부한 인덕과 성실함을 갖춘 것이 장점입니다. 토(土)의 응집하는 성분과 조상의 덕을 계승하는 성분이 작용하여 단단한 흙이 보석을 품듯 기존의 기반을 훌륭히 지켜내기 때문입니다. 다만, 순발력이 다소 부족해 변화의 타이밍을 놓칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 기민한 오행이 더해지면 새로운 기술과 트렌드를 적극적으로 수용하여 기반을 현대화하는 데 아주 좋습니다.</b>",
    7: "해당 성명은 7수로 분류됩니다. 타의 추종을 불허하는 전문 지식과 강인한 의지, 완벽주의적 성취력을 지녔다는 것이 장점입니다. 금(金)의 예리한 성분과 성취를 향한 기운이 작용하여 정련된 칼날처럼 목표를 향해 날카롭게 파고들기 때문입니다. 다만, 냉철함이 강해 자비심이 부족해 보이고 주변에 적을 만들기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 따뜻하고 부드러운 오행이 더해지면 날카로운 칼날을 품어주는 칼집처럼 인간관계를 유연하게 만들어 주어 아주 좋습니다.</b>",
    8: "해당 성명은 8수로 분류됩니다. 성실하게 자산을 축적하여 자수성가로 거대한 부를 일구는 놀라운 인내심이 큰 장점입니다. 금(金)의 축적하는 성분과 끈기의 기운이 작용하여 단단한 원석이 보석이 되기까지 견뎌내는 집념을 보여주기 때문입니다. 다만, 소통력이 약해 타인에게 고집불통의 이미지를 줄 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 부드럽게 흐르는 오행이 더해지면 꽉 막힌 소통의 통로를 열어주어 아주 좋습니다.</b>",
    9: "해당 성명은 9수로 분류됩니다. 천재적인 직관력과 예술적 감수성, 그리고 비상한 지능을 갖춘 것이 훌륭한 장점입니다. 수(水)의 심연을 파고드는 성분과 통찰의 기운이 강하게 작용하여 깊은 밤의 바다처럼 보이지 않는 진리와 지혜를 탐구하기 때문입니다. 다만, 현실적인 열정이 부족해 고독감과 허무주의에 빠질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 뜨거운 오행이 더해지면 아이디어를 현실 세계로 끌어내는 밝은 원동력이 되어 아주 좋습니다.</b>",
    10: "해당 성명은 10수로 분류됩니다. 만물을 수용하는 넓은 마음과 다재다능함, 비범한 수용력을 갖춘 것이 큰 장점입니다. 수(水)의 끝과 시작이 교차하는 기운이 작용하여 모든 것을 비워내고 새롭게 담아낼 수 있는 잠재력을 부여하기 때문입니다. 다만, 중심축이 약해 현실적인 결실이 흩어지거나 허무함을 느낄 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 굳건한 오행이 더해지면 분산된 에너지를 한곳으로 모아 구체적인 목표를 달성하는 데 아주 좋습니다.</b>",
    11: "해당 성명은 11수로 분류됩니다. 위기를 기회로 바꾸는 빠른 회복력과 주도적인 리더십이 훌륭한 장점입니다. 목(木)의 재생하는 성분과 부흥의 기운이 강하게 작용하여 마른 가지에서 새순이 돋아나듯 정체된 삶에 혁신을 일으키기 때문입니다. 다만, 초기 성공 후 절제력이 약해져 자만에 빠질 수 있다는 점을 주의해야 합니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 차분한 오행이 더해지면 들뜬 마음을 다스리고 겸손을 유지하게 해주어 아주 좋습니다.</b>",
    12: "해당 성명은 12수로 분류됩니다. 독보적인 전문 기술과 깊은 철학적 사고를 발달시키는 능력이 탁월한 것이 장점입니다. 목(木)의 인내하는 기운이 작용하여 거친 바위 틈에서 자라나는 나무처럼 척박한 환경 속에서도 훌륭한 내적 성장을 이뤄내기 때문입니다. 다만, 외부와의 소통에서 마찰이 생기거나 결단력 부족으로 타인에게 휩쓸릴 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 단호한 오행이 더해지면 자신만의 확실한 선을 긋고 주권을 설계하는 데 아주 좋습니다.</b>",
    13: "해당 성명은 13수로 분류됩니다. 총명함과 탁월한 사교력, 뛰어난 처세술로 세상에 명성을 얻는 것이 훌륭한 장점입니다. 화(火)의 광채와 지략의 기운이 강하게 작용하여 태양이 세상을 비추듯 지혜가 빛을 발해 대중을 이끌기 때문입니다. 다만, 화려함에 치우쳐 자칫 가벼워 보이거나 구설에 오를 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 깊이 있는 오행이 더해지면 화려한 언변 속에 진중한 통찰을 담을 수 있어 아주 좋습니다.</b>",
    14: "해당 성명은 14수로 분류됩니다. 사물의 이면을 꿰뚫는 정밀한 분석력과 남들이 갖지 못한 섬세한 감수성을 지녔다는 것이 장점입니다. 화(火)의 예민하고 분산되는 기운이 분석력으로 승화되어 천재적인 직관을 발휘하기 때문입니다. 다만, 정서적 완충 지대가 부족해 사소한 일에도 스스로 극심한 스트레스를 자초할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 넉넉한 오행이 더해지면 흔들리는 감정을 편안하게 잡아주는 든든한 휴식처가 되어 아주 좋습니다.</b>",
    15: "해당 성명은 15수로 분류됩니다. 만인을 이끄는 부드러운 카리스마와 풍부한 인복, 원만한 성품을 갖춘 것이 최고의 장점입니다. 토(土)의 조화로운 성분과 덕망의 기운이 작용하여 만물을 기르는 대지 위에 비가 내리듯 하늘의 복과 인간의 덕이 합치되기 때문입니다. 다만, 안정감을 중시하다 보니 공격적인 추진력이 다소 부족해 결정적인 기회를 놓칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 뻗어나가는 오행이 더해지면 단호한 결단력과 실행력을 보완해주어 아주 좋습니다.</b>",
    16: "해당 성명은 16수로 분류됩니다. 안정적인 자산 운영 능력과 뜻밖의 횡재수를 지녀 재물이 자연스레 모인다는 것이 큰 장점입니다. 토(土)의 재물복을 부르는 성분과 자비로운 기운이 강하게 작용하여 두터운 흙 속에서 보물을 발견하는 형상이기 때문입니다. 다만, 정이 많고 냉철함이 부족해 타인의 부탁을 거절하지 못하고 손해를 볼 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 맺고 끊는 오행이 더해지면 공과 사를 칼같이 구분하여 경제적 주권을 지키는 데 아주 좋습니다.</b>",
    17: "해당 성명은 17수로 분류됩니다. 권력과 명예를 동시에 쟁취하는 독보적인 결단력과 불굴의 용기를 갖춘 것이 장점입니다. 금(金)의 투지 넘치는 성분과 돌파의 기운이 작용하여 강철을 벼려 검을 만들듯 어떠한 고난도 정면으로 돌파해 내기 때문입니다. 다만, 유연함이 결여되어 타협하기보다 부러지기 쉬운 성향을 띠게 됩니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 부드러운 오행이 더해지면 한결 여유롭고 융통성 있는 처세술을 기르는 데 아주 좋습니다.</b>",
    18: "해당 성명은 18수로 분류됩니다. 흔들리지 않는 자기 신념과 끝없는 성실함으로 한 분야의 마스터가 되는 것이 훌륭한 장점입니다. 금(金)의 변치 않는 신념과 완성의 기운이 강하게 작용하여 한 우물을 파서 결국 대업을 완수해 내기 때문입니다. 다만, 융통성이 부족하고 고집이 강해 주변과 고립될 우려가 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 따뜻한 오행이 더해지면 차가운 신념을 대중과 친근하게 교감하게 만들어 아주 좋습니다.</b>",
    19: "해당 성명은 19수로 분류됩니다. 독보적인 예술성과 남들이 보지 못하는 이면을 읽어내는 예리한 직관력을 갖춘 것이 장점입니다. 수(水)의 깊은 심연과 통찰의 기운이 강하게 작용하여 천재적인 아이디어를 뿜어내기 때문입니다. 다만, 현실과의 괴리에서 오는 고독감과 정신적 예민함이 동반될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 현실적인 오행이 더해지면 깊은 생각들을 구체적인 결과물로 단단하게 고정시켜 아주 좋습니다.</b>",
    20: "해당 성명은 20수로 분류됩니다. 만물을 수용하는 넓은 포용력과 원대한 이상을 지녀 끝없이 큰 꿈을 꾼다는 것이 장점입니다. 수(水)의 방대한 기운이 내면에 잠재되어 있어 상상력과 스케일이 남다르기 때문입니다. 다만, 에너지가 지나치게 분산되어 중도에 좌절하거나 결실을 맺기 어려울 수 있습니다. <b>따라서 당신의 탄생 에너지에서 둑을 쌓아주는 토(土)의 오행이나 실행력을 돕는 목(木)의 오행이 더해지면 거대한 에너지를 구체적 성과로 바꾸는 데 아주 좋습니다.</b>",
    21: "해당 성명은 21수로 분류됩니다. 탁월한 리더십과 묵직한 책임감을 지녀 거대한 조직을 훌륭히 이끈다는 것이 큰 장점입니다. 목(木)의 두령 성분과 위엄의 기운이 강하게 작용하여 산 정상을 향해 뻗어가는 고목처럼 강력한 카리스마를 발휘하기 때문입니다. 다만, 지나치게 앞으로만 나가려 하여 독선적으로 비치거나 주변의 반발을 살 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 제어하는 오행이 더해지면 독단적인 면을 다듬고 아랫사람을 아우르는 덕장이 되기에 아주 좋습니다.</b>",
    22: "해당 성명은 22수로 분류됩니다. 섬세한 기술력과 창의적인 감각이 뛰어나 예술이나 전문 분야에서 매력을 뽐낼 수 있는 것이 장점입니다. 목(木)의 기교를 부리는 성분이 덩굴 식물처럼 화려한 재능으로 꽃피우기 때문입니다. 다만, 지지대가 부족하여 내면이 불안정하고 대인관계 갈등으로 성과가 저평가될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 단단한 오행이 더해지면 흔들리는 마음을 꽉 잡아주고 신뢰감 있는 기반을 다지는 데 아주 좋습니다.</b>",
    23: "해당 성명은 23수로 분류됩니다. 압도적인 실행력과 스타성으로 세상의 중심에 서게 만드는 강력한 힘이 장점입니다. 화(火)의 융성하는 성분과 폭발적인 기운이 한낮의 태양처럼 열기를 정점으로 끌어올려 창의성과 명예를 넓게 뻗어 나가게 하기 때문입니다. 다만, 조절 장치가 약해 성공 후의 과열로 건강을 해치거나 무리수를 둘 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 식혀주는 오행이 더해지면 지나친 열기를 식히고 안정적인 운영을 돕기에 아주 좋습니다.</b>",
    24: "해당 성명은 24수로 분류됩니다. 천부적인 재무 감각과 안정적인 재산 축적 능력으로 실질적인 부를 이룬다는 최고의 장점이 있습니다. 화(火)의 결실을 맺는 성분과 축재의 기운이 뜨거운 열기로 황금을 제련하듯 에너지를 재물로 완벽하게 변환하기 때문입니다. 다만, 절제력이 결여되면 탐욕으로 비쳐 명예가 훼손될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 절제하는 오행이 더해지면 나눔을 실천하며 부의 진정한 품격을 높이는 데 아주 좋습니다.</b>",
    25: "해당 성명은 25수로 분류됩니다. 빠른 상황 판단력과 대인관계의 원만함으로 어떤 위기 상황도 유연하게 넘기는 영리함이 뛰어난 장점입니다. 토(土)의 조화로운 성분과 지략의 기운이 단단한 흙 사이로 물길을 내듯 절묘한 처세술을 발휘하게 만들기 때문입니다. 다만, 솔직함이 다소 부족해 주변으로부터 이익만 좇는 기회주의자로 오해받을 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 곧은 오행이 더해지면 흔들리지 않는 진정성과 투명한 소통력을 더해주어 아주 좋습니다.</b>",
    26: "해당 성명은 26수로 분류됩니다. 어떤 시련도 이겨내는 불굴의 의지와 탁월한 위기관리 능력으로 영웅적인 면모를 발휘하는 것이 장점입니다. 토(土)의 거친 풍파를 견디는 기운이 작용하여 비바람 속에서 오히려 단단해지며 한계를 돌파해 내기 때문입니다. 다만, 평온함이 부족하여 스스로 힘들고 험난한 길을 자처하는 성향이 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 따뜻한 오행이 더해지면 굳어있는 긴장을 풀고 삶의 여유와 평화를 누리는 데 아주 좋습니다.</b>",
    27: "해당 성명은 27수로 분류됩니다. 꿰뚫어 보는 신랄한 비판 정신과 탄탄한 논리력을 바탕으로 사물의 옳고 그름을 완벽하게 가려내는 것이 장점입니다. 금(金)의 날카로운 분석 성분이 정밀한 저울처럼 작용하여 지적 능력이 최고조에 달하기 때문입니다. 다만, 타인을 수용하는 포용력이 약해 주변 사람들과 거리가 멀어지고 고립될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 포용하는 오행이 더해지면 예리한 논리 속에 따뜻한 이해심을 담을 수 있어 아주 좋습니다.</b>",
    28: "해당 성명은 28수로 분류됩니다. 대범한 지략을 바탕으로 넓은 활동 영역을 개척하며 큰 사업과 야망을 품는 배포가 훌륭한 장점입니다. 금(金)의 팽창하는 성분과 거대한 에너지가 부딪치며 폭발적인 성장의 원동력을 제공하기 때문입니다. 다만, 세밀한 관리력이 부족하여 시스템의 기초가 부실해지거나 마무리가 엉성해질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 꼼꼼한 오행이 더해지면 디테일을 채워주고 시스템의 구멍을 견고하게 메우는 데 아주 좋습니다.</b>",
    29: "해당 성명은 29수로 분류됩니다. 깊은 통찰력과 두터운 신망을 바탕으로 사회적 지위와 안정을 훌륭하게 거머쥐는 길운이 큰 장점입니다. 수(水)의 지혜로운 기운이 작용하여 흐르는 강물이 마침내 바다에 도달하듯 모든 것을 평온하게 완성하기 때문입니다. 다만, 도전 에너지가 약해져 현실에만 편안히 안주하려는 경향이 생길 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 생동감 있는 오행이 더해지면 끊임없이 새로운 성장을 도모하며 운세를 젊게 유지하기에 아주 좋습니다.</b>",
    30: "해당 성명은 30수로 분류됩니다. 인생의 거친 파도 속에서도 어떤 바닥에서든 다시 치고 올라오는 강인한 회복력이 탁월한 장점입니다. 수(水)의 부침이 심한 성분과 역전의 기운이 극적인 승부사 기질을 발휘하게 만들어 위기를 기회로 뒤집기 때문입니다. 다만, 평정심이 부족하여 감정의 기복에 따라 운이 심하게 요동칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 밝은 오행이나 토(土)의 묵직한 오행이 더해지면 흔들리는 마음의 중심을 단단하게 잡아주어 아주 좋습니다.</b>",
    31: "해당 성명은 31수로 분류됩니다. 뛰어난 대인관계와 뜻밖의 행운이 시너지를 내어 주변의 도움으로 거대한 성취를 이루는 자수성가의 기운이 큰 장점입니다. 목(木)의 뻗어나가는 성분과 인복을 부르는 기운이 푸른 숲에 넉넉한 비가 내리듯 긍정적으로 작용하기 때문입니다. 다만, 주관이 다소 약해 타인의 의견에 쉽게 휘둘릴 리스크가 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 지혜로운 오행이 더해지면 중심을 잃지 않고 본인만의 확실한 기준을 세우는 데 아주 좋습니다.</b>",
    32: "해당 성명은 32수로 분류됩니다. 탁월한 소통력과 의외의 재물운이 결합되어 정보와 사람이 알아서 찾아오는 순풍의 기운이 훌륭한 장점입니다. 목(木)의 소통하는 성분과 기회를 끌어당기는 능력이 바람을 타고 씨앗이 퍼지듯 자연스러운 확장을 돕기 때문입니다. 다만, 내실과 성실함이 뒷받침되지 않으면 요행만을 바라는 마음이 생길 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 성실한 오행이 더해지면 찾아온 행운을 날려 보내지 않고 단단한 실력으로 굳히는 데 아주 좋습니다.</b>",
    33: "해당 성명은 33수로 분류됩니다. 압도적인 카리스마로 주변을 이끌며 조직의 정점에 올라 드높은 명예를 얻는 제왕적 기운이 최고의 장점입니다. 화(火)의 실현하는 성분이 한낮의 태양처럼 야망을 최고조로 끌어올려 눈부신 성취를 이루게 하기 때문입니다. 다만, 겸손함이 결여되면 지나친 독단으로 적을 만들 위험이 매우 큽니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 자세를 낮추는 오행이 더해지면 타인의 공로를 인정하고 포용력을 갖추어 성공을 길게 유지하기에 아주 좋습니다.</b>",
    34: "해당 성명은 34수로 분류됩니다. 어떠한 극한의 상황도 견뎌내는 초인적인 정신력을 바탕으로 뼈를 깎는 인내를 거쳐 위대한 마스터로 성장한다는 장점이 있습니다. 화(火)의 억눌린 기운이 용광로 속에서 쇠를 녹이듯 스스로를 강력하게 연단하기 때문입니다. 다만, 긍정적인 에너지가 꺾이면 극심한 비관주의에 빠져 스스로를 갉아먹을 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 편안한 오행이 더해지면 스스로에게 여유를 허락하고 긍정적인 자기 확신을 불어넣는 데 아주 좋습니다.</b>",
    35: "해당 성명은 35수로 분류됩니다. 원만한 인간관계를 유지하고 평화롭고 부드러운 기운으로 주변 사람들을 넉넉히 품어내는 것이 훌륭한 장점입니다. 토(土)의 온화한 성분과 중재의 기운이 비옥한 들판처럼 작용하여 가정의 안락한 행복을 보장하기 때문입니다. 다만, 안정을 지나치게 중시하여 진취적인 개척력이 부족해 큰 성장의 기회를 놓칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 열정적인 오행이 더해지면 안전지대를 벗어나 가끔은 과감한 도전을 실행하는 용기를 얻기에 아주 좋습니다.</b>",
    36: "해당 성명은 36수로 분류됩니다. 약자를 돕는 강한 의리와 헌신으로 타인의 진심 어린 추앙을 받아 숭고한 명예를 쌓는 협객의 기운이 장점입니다. 토(土)의 묵직한 성분이 두터운 흙으로 길을 내어 만인이 지나가게 하는 듬직한 리더십을 발휘하기 때문입니다. 다만, 남 좋은 일만 하다가 챙겨야 할 실속 에너지가 부족하여 본인의 기반을 놓칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 실리적인 오행이 더해지면 타인을 돕기 전 자신의 경제적 기반을 먼저 단단히 지키는 데 아주 좋습니다.</b>",
    37: "해당 성명은 37수로 분류됩니다. 타협하지 않는 독보적인 실력과 강력한 독립심으로 특정 분야에서 대체 불가능한 권위자로 우뚝 서는 것이 장점입니다. 금(金)의 장인 성분과 권위의 기운이 보석을 깎아내는 정밀함으로 완벽주의적 성과를 이끌어내기 때문입니다. 다만, 타인에 대한 공감력이 결여되어 자칫 차갑고 매정한 성격으로 오해받을 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 따뜻한 오행이 더해지면 자신의 뛰어난 능력을 인간적인 언어로 나누어 대중의 지지를 얻기에 아주 좋습니다.</b>",
    38: "해당 성명은 38수로 분류됩니다. 세밀하고 예리한 표현력을 바탕으로 감성과 이성이 결합된 뛰어난 문학적, 예술적 성취를 거두는 것이 장점입니다. 금(金)의 예리한 성분이 날카로운 펜촉처럼 작용하여 고유의 미적 감각과 결과 중심의 성과를 이끌어내기 때문입니다. 다만, 조급함이 섞이면 정당한 절차를 무시하고 무리수를 두어 공든 탑이 무너질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 차분한 오행이나 토(土)의 느긋한 오행이 더해지면 결과보다 과정을 중시하는 공정성을 확보하기에 아주 좋습니다.</b>",
    39: "해당 성명은 39수로 분류됩니다. 높은 사회적 지위와 경제적 풍요를 평안하게 누리며 부귀와 명예가 동시에 찾아오는 완성의 기운이 최고의 장점입니다. 수(水)의 완성된 성분과 영광의 기운이 모든 강물이 바다에 닿아 고요를 찾듯 훌륭한 결실을 맺기 때문입니다. 다만, 성공에 취해 경각심이 부족해지면 일상이 방탕해지거나 오만함에 빠질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 제어하는 오행이 더해지면 최고의 자리에서도 긴장을 잃지 않고 철저한 리스크 관리를 해내는 데 아주 좋습니다.</b>",
    40: "해당 성명은 40수로 분류됩니다. 아무리 변화무쌍한 환경이라도 빠르게 적응해 내는 뛰어난 생존력과 강력한 모험심이 돋보이는 장점입니다. 수(水)의 변동하는 성분과 개척의 기운이 바다 한가운데서 폭풍을 만난 형상처럼 역동적인 돌파구를 찾아내기 때문입니다. 다만, 마음의 중심을 잡는 기운이 약해 투기적인 일로 귀한 자산을 한순간에 잃을 위험이 큽니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 밝은 오행이 더해지면 요행을 바라지 않고 장기적 데이터에 기반한 안정적인 안목을 기르기에 아주 좋습니다.</b>",
    41: "해당 성명은 41수로 분류됩니다. 탁월한 경영 능력으로 대중의 굳건한 신뢰를 받아 거대한 조직을 훌륭히 호령하는 거물의 기운이 장점입니다. 목(木)의 통솔하는 성분과 성장의 기운이 거대한 나무가 모여 숲을 이루듯 폭발적인 시너지를 내기 때문입니다. 다만, 철저한 자기 관리력이 부족해 성공을 향해 무리하게 달리다 과로로 건강을 크게 해칠 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 절제하는 오행이 더해지면 일과 휴식의 밸런스를 완벽하게 통제하여 롱런하는 데 아주 좋습니다.</b>",
    42: "해당 성명은 42수로 분류됩니다. 누구에게도 의존하지 않는 강력한 자생력과 끈기로 척박한 환경에서도 자신의 힘으로 꿋꿋하게 일어선다는 것이 훌륭한 장점입니다. 목(木)의 홀로 서는 성분과 고행의 기운이 초반의 고생을 값진 내공으로 승화시켜 단단한 자수성가를 이루게 하기 때문입니다. 다만, 주변의 지지 기반이 약해 어려울 때 타인의 조력을 쉽게 받기 힘들 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 넉넉한 오행이 더해지면 시련을 견뎌낼 든든한 마음의 토양과 귀인의 조력을 얻기에 아주 좋습니다.</b>",
    43: "해당 성명은 43수로 분류됩니다. 남들 눈에 띄는 뛰어난 브랜드 가치와 화려한 외적 매력을 갖추어 사람들의 시선을 사로잡는 것이 큰 장점입니다. 화(火)의 과시하는 성분이 불꽃을 높이 쏘아 올려 겉모습을 매력적이고 화려하게 포장하기 때문입니다. 다만, 실질적인 축적 에너지가 부족하여 알뜰한 자산 관리와 내실 다지기에 매우 취약할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 저장하는 오행이 더해지면 보여지는 이미지뿐만 아니라 꽉 찬 실속과 자산을 거머쥐는 데 아주 좋습니다.</b>",
    44: "해당 성명은 44수로 분류됩니다. 반전의 드라마를 쓰는 비범한 창의력과 반짝이는 아이디어를 뿜어내어 시대를 바꾸는 혁신가가 되는 것이 장점입니다. 화(火)의 요동치는 성분과 혁신의 기운이 에너지를 방황하게 하기도 하지만, 이를 극복하면 엄청난 추진력으로 승화되기 때문입니다. 다만, 평정심이 부족하여 한번 부정적인 생각에 빠지면 그 루프에서 벗어나기 힘들 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 안정적인 오행이 더해지면 불안한 뇌 회로를 차분하게 가라앉히고 긍정의 마인드를 유지하기에 아주 좋습니다.</b>",
    45: "해당 성명은 45수로 분류됩니다. 모두의 존경을 받는 두터운 신망과 통합적 리더십으로 명예로운 성공과 굳건한 안정을 동시에 누리는 길운이 최고의 장점입니다. 토(土)의 통합하는 성분과 대성의 기운이 대지가 모든 생명을 묶어 꽃피우듯 훌륭한 조화를 이루기 때문입니다. 다만, 날카로운 비판적 안목이 다소 약해 주변의 교묘한 아첨이나 거짓을 구별하지 못할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 꿰뚫어 보는 오행이 더해지면 단소리보다 쓴소리를 하는 참모를 곁에 두고 명확한 현실 감각을 유지하기에 아주 좋습니다.</b>",
    46: "해당 성명은 46수로 분류됩니다. 사물의 이면을 꿰뚫는 깊은 철학적 통찰력과 타인이 갖지 못한 놀라운 사유 능력을 지녔다는 것이 빛나는 장점입니다. 토(土)의 갈등하는 성분이 땅이 갈라지듯 내적 고민을 유발하지만, 그 사색의 깊이가 지적 성장으로 이어지기 때문입니다. 다만, 한 곳으로 힘을 모으는 응집력이 부족해 훌륭한 재능을 이리저리 낭비하기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 결단력 있는 오행이 더해지면 오직 한 가지 목표에만 역량을 집중하여 굵직한 결과를 맺는 데 아주 좋습니다.</b>",
    47: "해당 성명은 47수로 분류됩니다. 변치 않는 굳건한 신용과 장기적인 자산 형성 능력으로 오랜 인내 끝에 거대한 부를 훌륭히 쌓아 올린다는 것이 최고의 장점입니다. 금(金)의 견고한 성분과 성공의 기운이 단단한 바위산 위에 핀 꽃처럼 대기만성의 결실을 맺게 하기 때문입니다. 다만, 밖으로 뻗어나가는 발산력이 약해 젊은 시절의 고생과 시련이 길어질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 밝은 오행이 더해지면 힘든 시기에도 희망을 잃지 않고 자신의 가치를 화려하게 꽃피울 동력을 얻기에 아주 좋습니다.</b>",
    48: "해당 성명은 48수로 분류됩니다. 뛰어난 판단력과 타의 모범이 되는 높은 도덕적 가치관을 지녀 예리한 칼을 정의롭게 쓰는 훌륭한 참모의 역할을 수행하는 것이 장점입니다. 금(金)의 조언하는 성분과 덕망의 기운이 조화롭게 작용하여 지도자를 이끄는 올바른 인격적 기준을 세우기 때문입니다. 다만, 성품이 너무 엄격하여 본인의 잣대를 타인에게 무리하게 강요할 우려가 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 감싸 안는 오행이 더해지면 타인의 실수를 부드럽게 보듬어 주는 진정한 자비로움을 기르기에 아주 좋습니다.</b>",
    49: "해당 성명은 49수로 분류됩니다. 어떠한 변화무쌍한 환경에서도 물이 그릇에 따라 형태를 바꾸듯 놀랍도록 빠른 적응력과 다재다능함을 발휘하는 것이 큰 장점입니다. 수(水)의 유연한 성분과 변신의 기운이 최상의 생존력과 문제 해결 능력을 부여하기 때문입니다. 다만, 확고한 주관이 부족하여 상황에 따라 이리저리 휩쓸리는 기회주의자로 보일 우려가 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 뚝심 있는 오행이 더해지면 절대 변하지 않는 자신만의 핵심 가치를 단단하게 정립하는 데 아주 좋습니다.</b>",
    50: "해당 성명은 50수로 분류됩니다. 남들이 주저할 때 거침없이 큰 기회를 낚아채는 배포와 담력이 대단히 뛰어나 극적인 반전을 이끌어낸다는 장점이 있습니다. 수(水)의 요동치는 성분과 협력의 기운이 바다 한가운데서 큰 승부를 거는 도박사적 기질을 부여하기 때문입니다. 다만, 이성적 통제력이 약해 순간의 감정으로 무리한 투자를 감행하거나 배신을 당할 리스크가 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 냉철한 오행이나 논리가 더해지면 직관보다 객관적 데이터에 근거해 리스크를 완벽히 차단하는 데 아주 좋습니다.</b>",
    51: "해당 성명은 51수로 분류됩니다. 다양한 경험을 쌓으며 변화 그 자체를 즐기는 긍정적인 역동성과 노련함을 갖춘 것이 훌륭한 장점입니다. 목(木)의 곡절을 겪는 성분과 사계절의 기운이 나무가 나이테를 깊게 새기듯 성패의 굴곡을 통해 단단한 지혜를 선물하기 때문입니다. 다만, 안정을 굳히는 유지력이 부족해 이룬 것을 잃고 다시 시작해야 할 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 단단한 오행이 더해지면 롤러코스터 같은 변화 속에서도 실속을 챙기고 성과를 축적하는 데 아주 좋습니다.</b>",
    52: "해당 성명은 52수로 분류됩니다. 흔들리지 않는 탄탄한 내실과 결정적인 기회를 놓치지 않는 지략가적 능력이 탁월하다는 것이 훌륭한 장점입니다. 목(木)의 준비하는 성분과 도약의 기운이 깊은 숲에서 조용히 힘을 기르다 완벽한 때가 되면 거대한 성취를 폭발적으로 이루게 하기 때문입니다. 다만, 쉬어가는 에너지가 결여되어 목표를 향해 무리하게 달리다 극심한 피로가 누적될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 고요한 오행이 더해지면 강제적인 휴식 루틴을 만들어 장기전을 위한 원동력을 비축하기에 아주 좋습니다.</b>",
    53: "해당 성명은 53수로 분류됩니다. 뛰어난 사교술과 대중적 인지도를 빠르게 얻어내어 사람들의 시선을 사로잡는 능력이 탁월한 장점입니다. 화(火)의 외양을 중시하는 성분이 타오르는 불길처럼 겉모습을 매력적으로 비추며 넒은 인맥을 형성하기 때문입니다. 다만, 겉치레에 집중하다 보니 진정으로 마음 나눌 곳이 부족하고 사람을 보는 진중함이 얕아 사기를 당할 리스크가 큽니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 무거운 오행이 더해지면 허례허식을 줄이고 진솔한 소수의 관계에 에너지를 집중하는 데 아주 좋습니다.</b>",
    54: "해당 성명은 54수로 분류됩니다. 극한의 어려움 속에서도 포기하지 않는 극도의 성실함과 굳건한 신의를 지켰다는 것이 훌륭하고 고결한 장점입니다. 화(火)의 억압된 성분이 불꽃이 흙에 덮인 듯 당장의 화려함은 막지만, 그 속에서 타협하지 않는 단단한 책임감을 길러내기 때문입니다. 다만, 재물운이 다소 약해 무리하게 사업을 확장하거나 빚을 지면 크게 낭패를 볼 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 맺고 끊는 오행이 더해지면 과욕을 부리지 않고 내실을 굳건히 다지며 때를 기다리는 지혜를 얻기에 아주 좋습니다.</b>",
    55: "해당 성명은 55수로 분류됩니다. 속이 꽉 찬 깊은 내공과 섣불리 나서지 않는 신중함으로 결정적일 때 진정한 가치를 빛낸다는 훌륭한 장점이 있습니다. 토(土)의 겸손한 성분이 영롱한 보석이 흙 속에 조용히 숨겨진 것처럼 묵직한 품격을 더해주기 때문입니다. 다만, 마음 깊은 곳에 억눌린 과시욕이 고개를 들면 타인의 시기를 받아 공든 탑이 한순간에 무너질 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 제어하는 오행이 더해지면 섣부른 허영심을 베어내고 무거운 겸손을 최고의 무기로 삼기에 아주 좋습니다.</b>",
    56: "해당 성명은 56수로 분류됩니다. 타인의 의견을 편안하게 수용하는 넓은 포용력과 매사에 돌다리를 두드려보는 신중함이 돋보이는 훌륭한 장점입니다. 토(土)의 정체된 성분이 대지가 짙은 안개에 휩싸인 듯 조심성을 부여하여 치명적인 실수를 사전에 차단하기 때문입니다. 다만, 단호한 결단력이 부족해 재능이 출중함에도 결정적인 순간에 발걸음을 주저하여 조연에 머무르기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 폭발적인 오행이 더해지면 완벽함보다는 빠른 실행을 무기로 삼아 기회의 타이밍을 거머쥐기에 아주 좋습니다.</b>",
    57: "해당 성명은 57수로 분류됩니다. 타의 추종을 불허하는 독보적인 개척 정신과 질서 수립 능력으로 척박한 환경을 완벽한 시스템으로 뒤바꾸는 대단한 장점이 있습니다. 금(金)의 개척하는 성분과 질서의 기운이 차갑고 예리한 칼날처럼 작용하여 무질서를 단숨에 베어내기 때문입니다. 다만, 목표 지향성이 너무 강해 주변 사람들을 안고 가는 포용력이 부족하여 고독한 독단적 리더가 될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 부드러운 오행이 더해지면 성공의 열매를 공정하게 나누어 내부의 저항을 훌륭히 다독이기에 아주 좋습니다.</b>",
    58: "해당 성명은 58수로 분류됩니다. 요행을 바라지 않는 지독한 성실함과 견고한 자산 토대로 마침내 빛나는 자수성가를 이룩해 내는 것이 최고의 장점입니다. 금(金)의 축적하는 성분과 끈기의 기운이 오랜 세월 비바람을 견딘 바위처럼 묵묵한 인내를 부여하기 때문입니다. 다만, 베풀고 나누는 미덕이 부족해 자칫 수전노라는 혹평을 듣고 노년이 외롭게 고립될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 베푸는 오행이 더해지면 재물보다 사람의 마음을 얻는 투자를 통해 말년을 따뜻하게 설계하는 데 아주 좋습니다.</b>",
    59: "해당 성명은 59수로 분류됩니다. 다방면에 걸친 비범한 재능과 세속을 뛰어넘는 높은 이상을 품고 있어 틀에 얽매이지 않는 자유로운 창의성을 발휘하는 장점이 있습니다. 수(水)의 방랑하는 성분이 강물이 목적지 없이 흐르듯 자유분방한 상상력과 넓은 시야를 선사하기 때문입니다. 다만, 한 자리를 끈기 있게 버티는 지탱력이 부족해 변덕이 심하거나 유혹에 쉽게 흔들릴 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 제방 같은 오행이 더해지면 강제적인 데드라인과 규칙을 세워 흩어지는 재능을 단단하게 규격화하기에 아주 좋습니다.</b>",
    60: "해당 성명은 60수로 분류됩니다. 수많은 위기를 직접 부딪치며 겪으면서 쌓인 날카로운 노련함과 사람을 꿰뚫어 보는 생존형 통찰력이 매우 뛰어난 장점입니다. 수(水)의 풍파를 겪는 성분이 거센 파도처럼 치열한 인생의 굴곡을 통해 단단한 굳은살과 지혜를 길러내기 때문입니다. 다만, 정작 좋은 사람을 가려내는 안목이 부족해 곁에 두지 말아야 할 사람에게 큰 상처를 받거나 배신당할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 맑은 오행이 더해지면 타인의 문제에 휩쓸리지 않고 자신의 내면을 굳건하게 밝히는 데 아주 좋습니다.</b>",
    61: "해당 성명은 61수로 분류됩니다. 흔들리지 않는 원칙 준수와 고결한 품격으로 조직의 핵심에서 모두에게 존경받는 훌륭한 지도자 역할을 수행하는 장점이 있습니다. 목(木)의 현명한 성분과 수장의 기운이 지혜를 완숙하게 만들어 굽히지 않는 대나무처럼 올곧은 명예를 세우기 때문입니다. 다만, 사적인 감정을 끊어내는 냉정함이 부족해 온정주의에 이끌리다 애써 쌓은 대업을 그르칠 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 서늘한 오행이 더해지면 감정보다 객관적인 수치와 대의를 최우선 가치로 삼아 중심을 지키기에 아주 좋습니다.</b>",
    62: "해당 성명은 62수로 분류됩니다. 숭고한 봉사 정신과 조건 없는 자비심으로 어두운 세상을 밝히며 세상의 소금과 같은 역할을 하는 훌륭한 장점이 있습니다. 목(木)의 연단하는 성분과 희생의 기운이 스스로 땔감이 되어 타인을 돕는 따뜻한 온기로 작용하기 때문입니다. 다만, 스스로를 보호하는 방어 기제가 너무 약해 타인에게 무리하게 이용당하거나 실속 없이 방전될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 단단한 오행이 더해지면 남을 돕기 전 자신의 체력과 경제적 방어벽을 먼저 확고하게 구축하는 데 아주 좋습니다.</b>",
    63: "해당 성명은 63수로 분류됩니다. 막힘없이 흘러가는 원만한 재물운과 사회 전반에 떨치는 화려한 명성으로 빛나는 보상을 누리는 것이 최고의 장점입니다. 화(火)의 결실을 거두는 성분과 성공의 기운이 열매가 태양을 듬뿍 받아 익어가듯 모든 일을 성취로 이끌기 때문입니다. 다만, 지나치게 순탄한 환경 탓에 경각심이 약해져 내부 관리 소홀로 한순간에 무너질 리스크가 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 예민한 오행이 더해지면 모든 것이 완벽해 보일 때 가장 취약한 사각지대를 점검하는 습관을 들이기에 아주 좋습니다.</b>",
    64: "해당 성명은 64수로 분류됩니다. 남들이 흉내 내기 힘든 내밀한 사유 능력과 신비로운 예술적 감각을 지녀 독창적인 영감을 뿜어내는 훌륭한 장점이 있습니다. 화(火)의 정체된 성분이 불꽃을 짙은 안개에 가둬 당장의 발산은 막지만, 그 속에서 응축된 지적 깊이를 완성하기 때문입니다. 다만, 현실을 깔끔하게 정리하는 능력이 부족해 주변 환경이나 머릿속이 늘 복잡하고 어수선하게 꼬일 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 정리 정돈하는 오행이 더해지면 불필요한 생각과 인맥을 과감히 쳐내고 핵심 목표 하나에만 명확히 몰입하는 데 아주 좋습니다.</b>",
    65: "해당 성명은 65수로 분류됩니다. 모자람 없는 완벽한 복덕과 뭇사람들의 부러움 섞인 추앙을 받으며 누구도 넘볼 수 없는 명예를 획득하는 최고의 장점이 있습니다. 토(土)의 평온한 성분과 영광의 기운이 비옥한 대지가 만물을 풍성하게 추수하듯 삶의 후반기를 황금빛으로 채우기 때문입니다. 다만, 높은 자리에 오를수록 나태한 오만함이 피어나 애써 모은 아랫사람들의 마음을 잃을 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 스스로를 채찍질하는 오행이 더해지면 가장 낮은 곳의 소리를 경청하며 겸손한 권위를 유지하기에 아주 좋습니다.</b>",
    66: "해당 성명은 66수로 분류됩니다. 어떤 사람이라도 편안하게 품어주는 넓은 포용력과 둥글게 상황을 넘기는 부드러운 유연함이 돋보이는 인간적인 장점이 있습니다. 토(土)의 동요하는 성분이 고집을 꺾고 타인의 아픔을 이해하는 넉넉한 바탕을 마련해주기 때문입니다. 다만, 그 유연함이 오히려 독이 되어 타인의 무리한 부탁이나 금전 요구를 단호하게 거절하지 못해 큰 피해를 볼 수 있습니다. <b>따라서 당신의 탄생 에너지에서 무거운 토(土)나 화(火)의 밝은 오행이 더해지면 보증이나 사적인 금전 거래를 칼같이 거절하고 문서 중심의 명확한 삶을 살기에 아주 좋습니다.</b>",
    67: "해당 성명은 67수로 분류됩니다. 창의성을 잃지 않으면서도 조직을 체계적으로 운영하는 섬세한 미적 감각과 세련된 리더십이 탁월하게 조화된 훌륭한 장점이 있습니다. 금(金)의 예술적 성분과 통솔의 기운이 정교하고 예민한 악기를 조율하듯 상황을 매끄럽게 지휘하기 때문입니다. 다만, 감정을 교류하는 사교 에너지가 다소 부족하여 높은 자리에서 문득 짙은 고독과 소외감을 느낄 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 따뜻한 오행이 더해지면 차가운 이성을 내려놓고 팀원들과 정서적 주파수를 맞추며 화합하는 데 아주 좋습니다.</b>",
    68: "해당 성명은 68수로 분류됩니다. 상황에 흔들리지 않는 비범한 지모와 냉철하고 정확한 경영 감각으로 무적의 시스템을 구축해 내는 뛰어난 장점이 있습니다. 금(金)의 지략적 성분과 창업의 기운이 오차 없는 정밀한 설계도로 거대한 건물을 올리듯 치밀한 전략을 세워주기 때문입니다. 다만, 일 처리 과정에서 따뜻한 인간미가 결여되어 곁에 있는 참모들을 숨 막히게 하거나 압박할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 다정한 오행이 더해지면 효율적인 명령 체계 위에 부드러운 인간적 유머와 여유를 더해 충성심을 이끌어내기에 아주 좋습니다.</b>",
    69: "해당 성명은 69수로 분류됩니다. 깊고 심오한 학문적 소양과 타인이 범접하기 힘든 높은 정신세계를 지녀 비범한 사유의 영토를 넓혀간다는 장점이 있습니다. 수(水)의 고립된 성분과 정체의 기운이 혼자만의 고요한 시간 속에서 지성을 극한으로 끌어올리게 만들기 때문입니다. 다만, 현실의 단단한 지지력이 없어 늘 마음만 조급하고 무리수를 두어 현실적인 실패를 자초하기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 토(土)의 튼튼한 기반을 다지는 오행이 더해지면 조급함을 버리고 기본기부터 차근차근 다져 운의 물꼬를 트는 데 아주 좋습니다.</b>",
    70: "해당 성명은 70수로 분류됩니다. 물질에 얽매이지 않는 고결한 정신성과 철학적 사고를 지녀 세속적 욕망을 초월한 깊은 지혜를 갖춘 것이 장점입니다. 수(水)의 멸절하는 성분과 공허의 기운이 불필요한 에너지를 모두 비워내어 우주적 통찰에 닿을 수 있는 깨끗한 바탕을 제공하기 때문입니다. 다만, 삶을 긍정하는 밝은 생기가 부족해 깊은 우울감이나 허무주의의 늪에 빠져 현실을 도피할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 눈부시게 밝은 오행이 더해지면 종교나 명상, 봉사 등 보이지 않는 가치 속에서 삶의 진정한 기쁨을 발견하기에 아주 좋습니다.</b>",
    71: "해당 성명은 71수로 분류됩니다. 특정 분야에서의 독보적인 권위와 허례허식 없는 철저한 실리 추구로 흔들리지 않는 알짜배기 부를 누린다는 최고의 장점이 있습니다. 목(木)의 내실을 다지는 성분과 완벽의 기운이 오랜 시간을 버틴 나무가 귀한 재목이 되듯 빈틈없는 전문성을 응집시키기 때문입니다. 다만, 지나치게 자신의 방식만 고집하여 융통성이 결여되고 고집불통으로 자기만의 성안에 갇힐 우려가 큽니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 유연한 오행이 더해지면 나와 기준이 다른 사람들의 의견조차 포용하는 바다와 같은 넉넉함을 기르는 데 아주 좋습니다.</b>",
    72: "해당 성명은 72수로 분류됩니다. 누구보다 젊고 역동적인 에너지와 거침없는 도전 정신을 지녀 앞으로 치고 나가는 추진력이 압도적이라는 훌륭한 장점이 있습니다. 목(木)의 요동치는 성분과 폭발적인 추진의 기운이 한계를 모르는 팽창력과 열정의 엔진을 달아주기 때문입니다. 다만, 리스크를 차단하는 관리 능력이 부족해 감정적으로 저지른 투자가 막대한 손실로 돌아올 위험이 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 식혀주는 오행이 더해지면 모든 결정의 근거를 숫자에 기반하고 열기가 오를 때 이성적으로 한 걸음 물러서기에 아주 좋습니다.</b>",
    73: "해당 성명은 73수로 분류됩니다. 산전수전을 겪으며 완성된 원숙한 판단력과 지혜를 바탕으로 명예로운 결실을 맺고 세상을 평안하게 조율하는 장점이 있습니다. 화(火)의 마무리하는 성분과 질서의 기운이 등불이 꺼지기 직전 가장 따뜻하고 밝은 빛을 내듯 인생을 현명하게 정돈하기 때문입니다. 다만, 지나치게 현실에 안주하려는 기운이 강해지면 새로운 시대의 변화를 읽지 못하고 도태될 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 뻗어나가는 오행이 더해지면 과거의 영광에 집착하기보다 살아있는 노하우를 후대에 적극 전수하는 존경받는 스승이 되기에 아주 좋습니다.</b>",
    74: "해당 성명은 74수로 분류됩니다. 뼈를 깎는 극한의 상황에서도 절대 굴복하지 않는 엄청난 인내심과 타협하지 않는 도덕적 자부심을 지켰다는 고결한 장점이 있습니다. 화(火)의 쇠퇴하는 성분과 고난의 기운이 당장의 능력을 펼치는 것은 막지만, 그 속에서 불순물이 섞이지 않은 단단한 정신력을 제련해 주기 때문입니다. 다만, 시련이 길어지면 내일의 희망이 고갈되어 돌이킬 수 없는 비관적인 선택을 하거나 좌절할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 불씨를 살리는 오행이 더해지면 독서나 철학을 통해 인간 삶의 거대한 인과율을 깨닫고 강철 같은 멘탈을 회복하기에 아주 좋습니다.</b>",
    75: "해당 성명은 75수로 분류됩니다. 어디 한 곳 모난 데 없는 높은 인격과 균형 잡힌 가치관을 지녀 뭇사람들의 평화로운 안식처가 되어준다는 훌륭한 장점이 있습니다. 토(土)의 균형 잡힌 성분과 평화의 기운이 광활한 대지가 비바람을 멎게 하고 안정을 이루듯 평안한 노년까지 보장하기 때문입니다. 다만, 매사에 지나치게 원만함만 추구하다 보니 날카로운 결단력이 부족하여 인생의 결정적 순간에 기회를 날려버릴 수 있습니다. <b>따라서 당신의 탄생 에너지에서 금(金)의 칼 같은 오행이 더해지면 중요한 고비에서 타인에게 휩쓸리지 않고 단호하게 자신의 주권을 쟁취하기에 아주 좋습니다.</b>",
    76: "해당 성명은 76수로 분류됩니다. 넓은 활동 범위와 쪼잔하지 않은 대범한 씀씀이를 지녀 인간관계에서 쿨하고 매력적인 사람으로 각인되는 장점이 있습니다. 토(土)의 분산되는 성분과 유출의 기운이 에너지를 한곳에 고이지 않고 밖으로 뻗어 나가며 순환하게 돕기 때문입니다. 다만, 모아들이는 응집력이 심각하게 결여되어 벌어들인 재물이 실속 없이 새어 나가 재무 구조가 악화될 수 있는 치명적인 단점이 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 저장하는 오행이 더해지면 자산 전문가의 조언을 수용하고 강제적으로 돈을 묶어두는 방어 시스템을 구축하기에 아주 좋습니다.</b>",
    77: "해당 성명은 77수로 분류됩니다. 어떠한 외압에도 흔들리지 않는 강직한 원칙 준수와 불의에 결코 물러서지 않는 대단한 용기를 지녔다는 것이 장점입니다. 금(金)의 굽히지 않는 원칙 성분과 투쟁의 기운이 예리한 칼처럼 자신의 신념을 끝까지 수호하도록 강렬한 돌파력을 부여하기 때문입니다. 다만, 둥글게 섞이는 조화의 기운이 너무 약해 적군과 아군을 극단적으로 나누며 끊임없는 마찰을 빚어낼 수 있습니다. <b>따라서 당신의 탄생 에너지에서 목(木)의 품어주는 부드러운 오행이 더해지면 '내가 절대적으로 옳다'는 아집에서 벗어나 다 함께 상생하는 가치를 제1원칙으로 삼아 평화를 누리기에 아주 좋습니다.</b>",
    78: "해당 성명은 78수로 분류됩니다. 단 하나의 빈틈도 허용하지 않는 완벽한 준비성과 타의 추종을 불허하는 리스크 관리 능력을 지녀 초반의 불확실성을 완벽히 차단하는 장점이 있습니다. 금(金)의 신중한 성분과 예방의 기운이 칼을 굳게 칼집에 넣고 사방을 살피듯 극도의 꼼꼼함을 발휘하게 만들기 때문입니다. 다만, 무조건 잘될 거라는 낙천적 에너지가 부족해 일어나지도 않을 일을 걱정만 하느라 중요한 도전을 시도조차 못 할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 긍정적이고 밝은 오행이 더해지면 쓸데없는 걱정을 과감히 삭제하고 당당히 세상 밖으로 한 걸음 나아가기에 아주 좋습니다.</b>",
    79: "해당 성명은 79수로 분류됩니다. 세속의 헛된 명예를 탐하지 않는 고결함과 한 분야에 대한 깊이 있는 전문 지식을 쌓아 올려 보이지 않는 진리를 깨우치는 장점이 있습니다. 수(水)의 은둔하는 성분과 깊은 지혜의 기운이 첩첩산중 깊은 골짜기의 맑은 샘물처럼 속이 꽉 찬 지성을 길러내기 때문입니다. 다만, 자신의 능력을 화려하게 포장하여 밖으로 알리는 자기 홍보력이 약해 천금 같은 능력을 썩히고 고독해지기 쉽습니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 자신을 드러내는 오행이 더해지면 당신의 깊은 통찰을 세상과 적극적으로 공유하여 마침내 훌륭한 명성을 떨치기에 아주 좋습니다.</b>",
    80: "해당 성명은 80수로 분류됩니다. 우주의 이치와 진리를 단번에 깨닫는 명상적이고 철학적인 지혜가 빛나며 내면의 정신적 고결함이 최고조에 달하는 훌륭한 장점이 있습니다. 수(水)의 종말적 성분과 성찰의 기운이 천지를 굽이치던 물이 바다 끝에 이르러 완벽하게 고요해지듯 세속의 집착을 끊어내기 때문입니다. 다만, 살아 숨 쉬는 역동적인 생기가 부족해 자칫 현실 세계와 동떨어져 고립되거나 무기력해질 리스크가 큽니다. <b>따라서 당신의 탄생 에너지에서 화(火)의 따스하고 생동감 넘치는 오행이 더해지면 소소한 일상의 기쁨을 찾아 매일 햇볕을 쬐며 현실 감각을 활기차게 일깨우는 데 아주 좋습니다.</b>",
    81: "해당 성명은 81수로 분류됩니다. 만물과 완벽한 조화를 이루고 상상할 수 없는 최상의 명예운과 완벽한 복덕을 누려 인생의 거대한 성취를 거머쥐는 최고의 장점이 있습니다. 만물의 환희를 부르는 성분과 대순환의 기운이 81수리의 마지막이자 만물이 다시 태동하는 완벽한 대화합의 정점에 도달했기 때문입니다. 다만, 스스로 이룬 대단한 성공에 흠뻑 취해 자만심이 고개를 들면 오만함으로 인해 스스로 혹독한 시련을 자초할 수 있습니다. <b>따라서 당신의 탄생 에너지에서 수(水)의 몸을 낮추는 겸손한 오행이 더해지면 거둔 성취와 부를 사회의 가장 낮은 곳으로 기꺼이 환원하여 영원토록 빛나는 명성을 유지하기에 아주 좋습니다.</b>"
};

const detailedDesc81En = {
    1: "This name falls under the number 1 category. Your greatest advantage is an unshakable drive and a pioneering spirit. This is because the germinating nature of Wood and primal vitality combine to manifest an unrivaled independence that creates something out of nothing. However, this strong energy can sometimes lead to dogmatism, causing you to ignore the advice of others. <b>Therefore, if the flexible Water energy is added from your birth energy, it will serve as an excellent lubricant for your overflowing drive.</b>",
    2: "This name falls under the number 2 category. Your greatest advantage is exhibiting outstanding teamwork and flexibility. This is because the dispersing nature of Wood and its adapting energy strongly interact, maximizing your empathetic ability to sensitively read the emotions of others. However, a lack of cohesion may lead to weak conclusions or indecisiveness. <b>Therefore, if the solid Earth energy is added from your birth energy, it will be excellent for designing your own firm routines and securing a foundation for your fortune.</b>",
    3: "This name falls under the number 3 category. Your greatest advantage is having a star quality that captures public attention, creative self-expression, and quick thinking. This is because the expanding nature of Fire and its honor-seeking energy cause your brilliance to spread in all directions. However, a lack of closure might make you look glamorous on the outside but lack substance on the inside. <b>Therefore, if the decisive Metal energy is added from your birth energy, it will be excellent for quantifying and managing your scattered energy into practical results.</b>",
    4: "This name falls under the number 4 category. Your greatest advantage is possessing extraordinary ideas that break conventional molds and keep you ahead of the times through disruptive innovation. This is because the overheated nature of Fire and its volatile energy burn down existing orders to lead new changes. However, a lack of coolness poses the risk of ruining things due to emotional mood swings. <b>Therefore, if the calm Water energy is added from your birth energy, it will act as an excellent cooling period before you make important decisions.</b>",
    5: "This name falls under the number 5 category. Your greatest advantage is gaining deep trust, gathering people around you, and achieving a peaceful family life. This is because Earth's centering nature and comfort-seeking energy allow you to accumulate wealth and connections just as the ground embraces all things. However, focusing too much on stability may weaken your pioneering spirit, making you prone to falling into a rut. <b>Therefore, if the outward-reaching Wood energy is added from your birth energy, it will give vitality to your daily life and prevent your fortune from becoming stagnant.</b>",
    6: "This name falls under the number 6 category. Your greatest advantage is becoming a trusted leader at the core of an organization, endowed with abundant popularity and diligence. This is because Earth's cohesive nature and the energy of inheriting ancestral virtues admirably protect your existing foundation, just as hard soil holds a jewel. However, a slight lack of agility might cause you to miss the timing for change. <b>Therefore, if the swift Fire energy is added from your birth energy, it will be excellent for modernizing your foundation by actively embracing new technologies and trends.</b>",
    7: "This name falls under the number 7 category. Your greatest advantage is possessing unrivaled professional knowledge, a strong will, and a perfectionist drive for achievement. This is because Metal's sharp nature and achievement-oriented energy pierce sharply toward goals like a refined blade. However, your intense coolness may make you appear merciless and easily create enemies around you. <b>Therefore, if the warm and gentle Wood energy is added from your birth energy, it will act as a scabbard holding a sharp blade, making your human relations much more flexible.</b>",
    8: "This name falls under the number 8 category. Your greatest advantage is the incredible patience to diligently accumulate assets and build immense wealth from scratch. This is because Metal's accumulating nature and persevering energy show the tenacity required for a hard ore to become a jewel. However, weak communication skills may give others the impression that you are stubborn and unyielding. <b>Therefore, if the smoothly flowing Water energy is added from your birth energy, it will be excellent for opening up blocked channels of communication.</b>",
    9: "This name falls under the number 9 category. Your greatest advantage is possessing genius intuition, artistic sensitivity, and extraordinary intelligence. This is because Water's deep abyss and insightful energy strongly interact, exploring unseen truths and wisdom like the ocean in the dead of night. However, a lack of realistic passion may lead you into loneliness and nihilism. <b>Therefore, if the hot Fire energy is added from your birth energy, it will provide a bright driving force to bring your ideas into the real world.</b>",
    10: "This name falls under the number 10 category. Your greatest advantage is having a broad mind that embraces all things, versatility, and extraordinary receptiveness. This is because Water's energy, where endings and beginnings cross, grants you the potential to empty everything and fill it anew. However, a weak central axis can lead to scattered practical outcomes or feelings of emptiness. <b>Therefore, if the firm Earth energy is added from your birth energy, it will be excellent for gathering your dispersed energy into one place to achieve specific goals.</b>",
    11: "This name falls under the number 11 category. Your greatest advantage is a quick resilience that turns crises into opportunities and proactive leadership. This is because Wood's regenerating nature and reviving energy bring innovation to a stagnant life, just as new shoots sprout from a dry branch. However, you must be careful as your self-control may weaken after initial success, leading to arrogance. <b>Therefore, if the calm Water energy is added from your birth energy, it will be excellent for managing an excited mind and maintaining humility.</b>",
    12: "This name falls under the number 12 category. Your greatest advantage is an exceptional ability to develop unrivaled professional skills and deep philosophical thinking. This is because Wood's enduring energy achieves wonderful internal growth even in harsh environments, like a tree growing in a rocky crevice. However, you may experience friction in communicating with the outside world or be swayed by others due to a lack of decisiveness. <b>Therefore, if the resolute Metal energy is added from your birth energy, it will be excellent for drawing your own clear boundaries and designing your sovereignty.</b>",
    13: "This name falls under the number 13 category. Your greatest advantage is gaining worldly fame through brilliance, outstanding sociability, and excellent diplomacy. This is because Fire's brilliant light and strategic energy strongly interact, shining wisdom to lead the public just as the sun illuminates the world. However, leaning too much on glamour can make you appear superficial or subject to gossip. <b>Therefore, if the deep Water energy is added from your birth energy, it will be excellent for infusing your glamorous eloquence with earnest insight.</b>",
    14: "This name falls under the number 14 category. Your greatest advantage is having a precise analytical ability that pierces through the hidden side of things and delicate sensitivity unmatched by others. This is because Fire's scattered and sensitive energy sublimates into analytical power, demonstrating genius intuition. However, a lack of emotional buffering zones causes you to bring extreme stress upon yourself over trivial matters. <b>Therefore, if the generous Earth energy is added from your birth energy, it will act as a reliable resting place to comfortably steady your shaken emotions.</b>",
    15: "This name falls under the number 15 category. Your greatest advantage is having a gentle charisma that leads everyone, abundant social luck, and a well-rounded personality. This is because Earth's harmonious nature and honorable energy wonderfully unite heavenly blessings and human virtue, just as rain falls on the life-nurturing ground. However, focusing too much on stability might cause a slight lack of aggressive drive, missing decisive opportunities. <b>Therefore, if the outward-reaching Wood energy is added from your birth energy, it will be excellent for compensating with firm decisiveness and execution skills.</b>",
    16: "This name falls under the number 16 category. Your greatest advantage is having a stable asset management ability and unexpected financial windfalls, allowing wealth to gather naturally. This is because Earth's wealth-attracting nature and merciful energy act strongly, resembling finding treasures in thick soil. However, being too affectionate and lacking cold calculation makes it hard for you to refuse others' requests, potentially leading to financial losses. <b>Therefore, if the boundary-setting Metal energy is added from your birth energy, it will be excellent for strictly separating public and private matters to protect your economic sovereignty.</b>",
    17: "This name falls under the number 17 category. Your greatest advantage is having unrivaled decisiveness and indomitable courage to seize power and honor simultaneously. This is because Metal's fighting nature and breakthrough energy forge through any hardship head-on, like forging steel into a sword. However, a lack of flexibility means you are more prone to breaking than compromising. <b>Therefore, if the soft Wood energy is added from your birth energy, it will be excellent for developing a much more relaxed and adaptable approach to life.</b>",
    18: "This name falls under the number 18 category. Your greatest advantage is becoming a master of a field through unshakable self-belief and endless diligence. This is because Metal's unchanging conviction and completing energy strongly manifest a powerful will to dig one well and eventually accomplish great deeds. However, a lack of adaptability and strong stubbornness may cause you to become isolated from those around you. <b>Therefore, if the warm Fire energy is added from your birth energy, it will be excellent for making your cold convictions resonate more approachably with the public.</b>",
    19: "This name falls under the number 19 category. Your greatest advantage is possessing unrivaled artistry and a sharp intuition that reads hidden facets others cannot see. This is because Water's deep abyss and insightful energy strongly interact to emit genius ideas. However, this can be accompanied by loneliness and mental sensitivity stemming from a disconnect with reality. <b>Therefore, if the realistic Earth energy is added from your birth energy, it will be excellent for firmly anchoring your deep thoughts into tangible results.</b>",
    20: "This name falls under the number 20 category. Your greatest advantage is dreaming endlessly grand dreams with a broad embrace that accepts all things and far-reaching ideals. This is because Water's vast energy lies dormant within, giving you extraordinary imagination and scale. However, this energy easily scatters, making it difficult to bear fruit or causing you to give up halfway. <b>Therefore, if the dam-building Earth energy or the execution-assisting Wood energy is added from your birth energy, it will be excellent for converting massive energy into specific achievements.</b>",
    21: "This name falls under the number 21 category. Your greatest advantage is excellently leading a massive organization with outstanding leadership and a heavy sense of responsibility. This is because Wood's authoritative nature and majestic energy exert a powerful charisma, like an ancient tree reaching for the mountain peak. However, a tendency to push forward too aggressively may make you appear dogmatic or invite backlash from those around you. <b>Therefore, if the controlling Metal energy is added from your birth energy, it will be excellent for refining your dogmatic side and becoming a virtuous leader who embraces subordinates.</b>",
    22: "This name falls under the number 22 category. Your greatest advantage is having outstanding delicate technical skills and creative senses, allowing you to show off your charm in art or professional fields. This is because Wood's technical nature blooms into flashy talents like a climbing vine. However, a lack of a support system can lead to inner instability and frequent interpersonal conflicts, causing your performance to be undervalued. <b>Therefore, if the solid Earth energy is added from your birth energy, it will be excellent for holding your wavering mind tight and building a trustworthy foundation.</b>",
    23: "This name falls under the number 23 category. Your greatest advantage is the powerful force to stand at the center of the world with overwhelming execution power and star quality. This is because Fire's prospering nature and explosive energy push heat to its peak like the midday sun, vastly expanding creativity and honor. However, weak control mechanisms might lead to ruining your health or making unreasonable moves due to post-success overheating. <b>Therefore, if the cooling Water energy is added from your birth energy, it will be excellent for cooling down excessive heat and assisting in stable operations.</b>",
    24: "This name falls under the number 24 category. Your greatest advantage is achieving substantial wealth through an innate, outstanding financial sense and a stable wealth accumulation ability. This is because Fire's fruiting nature and wealth-accumulating energy perfectly convert energy into wealth, like refining gold with intense heat. However, a lack of restraint may make you appear greedy, damaging your hard-earned honor. <b>Therefore, if the moderating Metal energy is added from your birth energy, it will be excellent for practicing sharing and elevating the true dignity of your wealth.</b>",
    25: "This name falls under the number 25 category. Your greatest advantage is the exceptional cleverness to smoothly navigate any crisis with quick situational judgment and smooth interpersonal relationships. This is because Earth's harmonious nature and strategic energy cause you to exercise exquisite diplomacy, just as water carves a path through hard soil. However, a slight lack of straightforwardness may cause others to misunderstand you as an opportunist chasing only profit. <b>Therefore, if the upright Wood energy is added from your birth energy, it will be excellent for adding unshakable sincerity and transparent communication skills.</b>",
    26: "This name falls under the number 26 category. Your greatest advantage is displaying a heroic facet with an indomitable will to overcome any trial and excellent crisis management skills. This is because Earth's storm-weathering nature acts to make you stronger amidst harsh weather, breaking through limitations. However, a lack of tranquility gives you a tendency to volunteer for difficult and rugged paths yourself. <b>Therefore, if the warm Fire energy is added from your birth energy, it will be excellent for releasing your stiff tension and enjoying the leisure and peace of life.</b>",
    27: "This name falls under the number 27 category. Your greatest advantage is perfectly distinguishing right from wrong based on a piercingly harsh critical spirit and solid logic. This is because Metal's sharp analytical nature acts like a precise scale, bringing your intellectual capacity to its peak. However, weak tolerance to accept others can distance you from people around you and lead to isolation. <b>Therefore, if the embracing Water energy is added from your birth energy, it will be excellent for infusing your sharp logic with warm understanding.</b>",
    28: "This name falls under the number 28 category. Your greatest advantage is cultivating a broad scope of activity based on bold strategies, harboring the courage for large businesses and ambitions. This is because Metal's expanding nature and massive colliding energy provide the driving force for explosive growth. However, a lack of meticulous management skills can lead to a weak systemic foundation or sloppy finishing. <b>Therefore, if the meticulous Earth energy is added from your birth energy, it will be excellent for filling in the details and firmly plugging the holes in your system.</b>",
    29: "This name falls under the number 29 category. Your greatest advantage is the great fortune of wonderfully securing social status and stability based on deep insight and broad trust. This is because Water's wise energy acts to peacefully complete everything, just as a flowing river finally reaches the ocean. However, weak challenging energy can cause a tendency to settle comfortably in your current reality. <b>Therefore, if the lively Wood energy is added from your birth energy, it will be excellent for constantly seeking new growth and keeping your fortune youthful.</b>",
    30: "This name falls under the number 30 category. Your greatest advantage is an outstanding resilience to bounce back from any bottom, even amidst the rough waves of life. This is because Water's fluctuating nature and reversal energy bring out a dramatic gambler's temperament, flipping crises into opportunities. However, a lack of composure causes your fortune to fluctuate wildly depending on your emotional ups and downs. <b>Therefore, if the bright Fire energy or the heavy Earth energy is added from your birth energy, it will be excellent for firmly securing the center of your wavering mind.</b>",
    31: "This name falls under the number 31 category. Your greatest advantage is the energy of a self-made person who achieves massive success with the help of others, creating synergy through excellent interpersonal relationships and unexpected fortune. This is because Wood's expanding nature and luck-attracting energy act positively, like generous rain falling on a green forest. However, your subjective view may be somewhat weak, leaving you at risk of being easily swayed by others' opinions. <b>Therefore, if the wise Water energy is added from your birth energy, it will be excellent for setting your own clear standards without losing your center.</b>",
    32: "This name falls under the number 32 category. Your greatest advantage is a wonderful tailwind where information and people naturally come to you, combining excellent communication skills with unexpected financial luck. This is because Wood's communicating nature and opportunity-drawing ability aid natural expansion, just as seeds spread on the wind. However, if substance and diligence are not supporting you, you may develop a mindset that relies solely on luck. <b>Therefore, if the diligent Metal energy is added from your birth energy, it will be excellent for solidifying your luck with solid skills rather than letting it blow away.</b>",
    33: "This name falls under the number 33 category. Your greatest advantage is an imperial energy that leads those around you with overwhelming charisma, reaching the top of an organization to attain high honor. This is because Fire's realizing nature elevates your ambition to its peak like the midday sun, leading to dazzling achievements. However, if humility is lacking, there is a very high risk of making enemies through excessive dogmatism. <b>Therefore, if the humbling Water energy is added from your birth energy, it will be excellent for acknowledging others' contributions and maintaining your success long-term with an embracing attitude.</b>",
    34: "This name falls under the number 34 category. Your greatest advantage is growing into a great master through agonizing patience, based on a superhuman mental fortitude that endures any extreme situation. This is because Fire's suppressed energy powerfully refines itself, like melting iron in a furnace. However, if your positive energy wanes, you can fall into severe pessimism and consume yourself. <b>Therefore, if the comforting Earth energy is added from your birth energy, it will be excellent for granting yourself grace and infusing positive self-assurance.</b>",
    35: "This name falls under the number 35 category. Your greatest advantage is maintaining harmonious interpersonal relationships and generously embracing those around you with a peaceful and soft energy. This is because Earth's gentle nature and mediating energy act like a fertile field, guaranteeing the comforting happiness of home. However, valuing stability too much may cause a lack of aggressive pioneering spirit, leading you to miss major opportunities for growth. <b>Therefore, if the passionate Fire energy is added from your birth energy, it will be excellent for giving you the courage to step out of your comfort zone and occasionally execute bold challenges.</b>",
    36: "This name falls under the number 36 category. Your greatest advantage is the aura of a righteous wanderer who builds noble honor by receiving sincere admiration through strong loyalty and devotion to helping the weak. This is because Earth's heavy nature exercises reliable leadership, like thick soil paving a road for everyone to pass. However, doing all the good work for others might leave you lacking the practical energy to look after yourself, losing your own foundation. <b>Therefore, if the practical Water energy is added from your birth energy, it will be excellent for firmly securing your own economic base before helping others.</b>",
    37: "This name falls under the number 37 category. Your greatest advantage is standing tall as an irreplaceable authority in a specific field due to uncompromising, unrivaled skill and strong independence. This is because Metal's craftsmanship and authoritative energy draw out perfectionist results with the precision of cutting a jewel. However, a lack of empathy for others could lead to being misunderstood as having a cold and heartless personality. <b>Therefore, if the warm Wood energy is added from your birth energy, it will be excellent for sharing your outstanding abilities in human language to gain public support.</b>",
    38: "This name falls under the number 38 category. Your greatest advantage is achieving outstanding literary and artistic accomplishments combining emotion and reason, based on delicate and sharp expression. This is because Metal's sharp nature acts like a sharp pen nib, drawing out a unique aesthetic sense and result-oriented outcomes. However, if impatience mixes in, you might ignore proper procedures and make unreasonable moves, collapsing your hard-built tower. <b>Therefore, if the calm Water energy or relaxed Earth energy is added from your birth energy, it will be excellent for securing a fairness that values the process over just the results.</b>",
    39: "This name falls under the number 39 category. Your greatest advantage is the energy of completion where wealth and honor arrive simultaneously, peacefully enjoying high social status and economic abundance. This is because Water's completing nature and glorious energy bear wonderful fruits, just as all rivers reach the sea and find tranquility. However, if you lack vigilance intoxicated by success, your daily life may become dissipated or you may fall into arrogance. <b>Therefore, if the controlling Earth energy is added from your birth energy, it will be excellent for maintaining tension even at the top and executing thorough risk management.</b>",
    40: "This name falls under the number 40 category. Your greatest advantage is an outstanding survival ability and strong adventurous spirit to quickly adapt to any ever-changing environment. This is because Water's fluctuating nature and pioneering energy find dynamic breakthroughs, much like encountering a storm in the middle of the sea. However, weak energy to center your mind puts you at a high risk of losing precious assets instantly through speculative ventures. <b>Therefore, if the bright Fire energy is added from your birth energy, it will be excellent for developing stable foresight based on long-term data rather than hoping for mere luck.</b>",
    41: "This name falls under the number 41 category. Your greatest advantage is the energy of a prominent figure who commands a large organization superbly, receiving firm trust from the public through excellent management skills. This is because Wood's commanding nature and growing energy create explosive synergy, just as giant trees gather to form a forest. However, a lack of strict self-management could lead you to severely damage your health from overworking while pushing unreasonably toward success. <b>Therefore, if the regulating Metal energy is added from your birth energy, it will be excellent for perfectly controlling the balance of work and rest for a long-lasting career.</b>",
    42: "This name falls under the number 42 category. Your greatest advantage is standing up firmly on your own power even in barren environments, driven by a powerful self-reliance and tenacity that depends on no one. This is because Wood's standalone nature and hardship energy sublimate initial suffering into valuable inner strength, leading to solid self-made success. However, a weak surrounding support base might make it difficult to easily receive help from others in tough times. <b>Therefore, if the generous Earth energy is added from your birth energy, it will be excellent for gaining the mental soil to endure trials and the assistance of benefactors.</b>",
    43: "This name falls under the number 43 category. Your greatest advantage is capturing people's attention by possessing outstanding brand value and flashy external charm that stands out to others. This is because Fire's showing-off nature shoots flames high, packaging the exterior attractively and glamorously. However, a lack of actual accumulative energy can make you very vulnerable to frugal asset management and solidifying your inner substance. <b>Therefore, if the storing Water energy is added from your birth energy, it will be excellent for not only holding up a visible image but tightly grasping substantial assets.</b>",
    44: "This name falls under the number 44 category. Your greatest advantage is becoming an innovator who changes the times by exuding extraordinary creativity and sparkling ideas that write a drama of reversals. This is because Fire's turbulent nature and innovative energy may cause your energy to wander, but if overcome, it sublimates into immense driving force. However, a lack of composure makes it hard to escape the loop once you fall into negative thoughts. <b>Therefore, if the stable Earth energy is added from your birth energy, it will be excellent for calmly settling anxious brain circuits and maintaining a positive mindset.</b>",
    45: "This name falls under the number 45 category. Your greatest advantage is the supreme fortune of enjoying honorable success and firm stability simultaneously through deep trust respected by all and integrative leadership. This is because Earth's unifying nature and achieving energy create wonderful harmony, just as the earth binds all life to bloom. However, a somewhat weak sharp critical eye might prevent you from distinguishing subtle flattery or lies from those around you. <b>Therefore, if the piercing Wood energy is added from your birth energy, it will be excellent for keeping advisors who offer bitter truth rather than sweet lies to maintain a clear sense of reality.</b>",
    46: "This name falls under the number 46 category. Your greatest advantage is possessing a deep philosophical insight that pierces the hidden side of things and an astonishing thinking ability others do not have. This is because Earth's conflicting nature causes internal distress like cracking ground, but the depth of that contemplation leads to intellectual growth. However, a lack of cohesion to gather power in one place makes it easy to waste your wonderful talents here and there. <b>Therefore, if the decisive Metal energy is added from your birth energy, it will be excellent for concentrating your capacity on just one goal to bear substantial results.</b>",
    47: "This name falls under the number 47 category. Your greatest advantage is wonderfully building immense wealth in your later years after long patience, thanks to unchanging firm credit and long-term asset-building ability. This is because Metal's solid nature and success energy bear the fruits of a late bloomer, like a flower blooming on a hard rocky mountain. However, weak outward radiating power might prolong the hardships and trials of your youth. <b>Therefore, if the bright Fire energy is added from your birth energy, it will be excellent for gaining the power to brilliantly bloom your value without losing hope even in difficult times.</b>",
    48: "This name falls under the number 48 category. Your greatest advantage is flawlessly performing the role of an excellent advisor who righteously wields a sharp sword, possessing outstanding judgment and exemplary high moral values. This is because Metal's advising nature and virtuous energy harmoniously interact to establish the correct character standards for guiding a leader. However, your excessively strict nature might lead to the concern of unreasonably forcing your own standards onto others. <b>Therefore, if the embracing Water energy is added from your birth energy, it will be excellent for cultivating true mercy that gently embraces the mistakes of others.</b>",
    49: "This name falls under the number 49 category. Your greatest advantage is demonstrating surprisingly fast adaptability and versatility, changing shape according to the vessel like water in any ever-changing environment. This is because Water's flexible nature and transforming energy grant you peak survivability and problem-solving skills. However, a lack of firm subjectivity poses the risk of appearing as an opportunist who gets swayed here and there depending on the situation. <b>Therefore, if the persevering Earth energy is added from your birth energy, it will be excellent for firmly establishing your own core values that will never change.</b>",
    50: "This name falls under the number 50 category. Your greatest advantage is driving dramatic reversals through exceptional boldness and courage, fearlessly snatching big opportunities when others hesitate. This is because Water's turbulent nature and cooperating energy grant a gambler's temperament that places big bets in the middle of the sea. However, weak rational control poses the risk of executing unreasonable investments out of momentary emotion or suffering betrayal. <b>Therefore, if the cool-headed Fire energy or logic is added from your birth energy, it will be excellent for perfectly blocking risks based on objective data rather than intuition.</b>",
    51: "This name falls under the number 51 category. Your greatest advantage is possessing a positive dynamic and seasoned experience, building diverse experiences and enjoying change itself. This is because Wood's twisting nature and the energy of the four seasons grant solid wisdom through the ups and downs of success and failure, just as a tree deeply engraves its rings. However, a lack of maintenance power to secure stability poses the risk of losing what you've achieved and having to start over. <b>Therefore, if the solid Metal energy is added from your birth energy, it will be excellent for securing substance and accumulating achievements even amidst rollercoaster-like changes.</b>",
    52: "This name falls under the number 52 category. Your greatest advantage is having outstanding strategic ability to never miss a decisive opportunity, alongside unshakable solid inner substance. This is because Wood's preparing nature and leaping energy quietly build strength in a deep forest and explosively achieve giant success when the perfect time comes. However, a lack of resting energy could lead to severe fatigue accumulation while unreasonably running toward a goal. <b>Therefore, if the quiet Water energy is added from your birth energy, it will be excellent for creating forced rest routines to stock up driving force for the long run.</b>",
    53: "This name falls under the number 53 category. Your greatest advantage is an exceptional ability to capture people's attention by quickly gaining outstanding sociability and public recognition. This is because Fire's appearance-valuing nature attractively illuminates the exterior like blazing flames, forming a wide network. However, focusing too much on superficialities means you lack true places to share your heart, and a shallow seriousness in judging people poses a high risk of being scammed. <b>Therefore, if the heavy Earth energy is added from your birth energy, it will be excellent for reducing superficiality and focusing energy on a few sincere relationships.</b>",
    54: "This name falls under the number 54 category. Your noble and excellent advantage is keeping extreme diligence and firm loyalty without giving up even in extreme difficulties. This is because Fire's suppressed energy prevents immediate glamour, like a flame covered in dirt, but cultivates an uncompromising, solid sense of responsibility within. However, somewhat weak financial luck poses a risk of total ruin if you over-expand a business or take on debt. <b>Therefore, if the cutting-off Metal energy is added from your birth energy, it will be excellent for gaining the wisdom to wait for your time while firmly building substance without overreaching.</b>",
    55: "This name falls under the number 55 category. Your excellent advantage is shining your true value at decisive moments through solid inner depth and a prudence that avoids stepping out rashly. This is because Earth's humble nature adds a heavy dignity, like a brilliant jewel quietly hidden in dirt. However, if a repressed desire to show off raises its head deep inside, you can attract others' envy, and your hard-built tower may collapse in an instant. <b>Therefore, if the controlling Metal energy is added from your birth energy, it will be excellent for cutting away premature vanity and making heavy humility your best weapon.</b>",
    56: "This name falls under the number 56 category. Your excellent advantage is a standout prudence that tests every stepping stone, along with a broad embrace that comfortably accepts others' opinions. This is because Earth's stagnant nature grants caution, like a ground covered in thick fog, blocking fatal mistakes in advance. However, a lack of firm decisiveness makes it easy to stay in a supporting role, hesitating at decisive moments despite outstanding talent. <b>Therefore, if the explosive Fire energy is added from your birth energy, it will be excellent for grabbing the timing of opportunities by making quick execution your weapon rather than perfection.</b>",
    57: "This name falls under the number 57 category. Your tremendous advantage is transforming a barren environment into a perfect system through an unrivaled pioneering spirit and order-establishing ability. This is because Metal's pioneering nature and order energy act like a cold, sharp blade, instantly cutting away disorder. However, a goal orientation that is too strong can result in a lack of embrace to carry those around you, turning you into a lonely, dogmatic leader. <b>Therefore, if the soft Water energy is added from your birth energy, it will be excellent for fairly sharing the fruits of success to wonderfully soothe internal resistance.</b>",
    58: "This name falls under the number 58 category. Your best advantage is ultimately achieving a shining self-made success through fierce diligence that does not wish for luck, and a solid asset foundation. This is because Metal's accumulating nature and persevering energy grant silent endurance, like a rock that has weathered storms for a long time. However, a lack of the virtue of giving and sharing may earn you harsh criticism as a miser and leave you lonely and isolated in old age. <b>Therefore, if the giving Wood energy is added from your birth energy, it will be excellent for warmly designing your later years through investments that win people's hearts rather than just wealth.</b>",
    59: "This name falls under the number 59 category. Your advantage is demonstrating free creativity unbound by conventional frames, possessing extraordinary talent across various fields and harboring high ideals transcending the secular. This is because Water's wandering nature gifts you a free-spirited imagination and broad perspective, just as a river flows without a destination. However, a lack of holding power to patiently endure in one position can make you highly fickle or easily swayed by temptation. <b>Therefore, if the dam-like Earth energy is added from your birth energy, it will be excellent for firmly standardizing your scattering talents by setting forced deadlines and rules.</b>",
    60: "This name falls under the number 60 category. Your outstanding advantage is an extremely sharp seasoned experience and a survivalist insight into people, built through directly facing numerous crises. This is because Water's storm-weathering nature cultivates solid calluses and wisdom through the fierce curves of life, like crashing waves. However, a lack of an eye to distinguish genuinely good people means you can receive deep scars or be betrayed by people you shouldn't keep close. <b>Therefore, if the clear Fire energy is added from your birth energy, it will be excellent for firmly illuminating your own inner self without being swept away by others' problems.</b>",
    61: "This name falls under the number 61 category. Your advantage is perfectly performing the role of an excellent leader respected by all at the core of an organization through unshakable adherence to principles and noble dignity. This is because Wood's wise nature and leadership energy mature your wisdom, establishing an upright honor like unbending bamboo. However, a lack of coldness to cut off private emotions poses a risk of ruining a hard-built great cause due to paternalism. <b>Therefore, if the cool Metal energy is added from your birth energy, it will be excellent for maintaining your center by making objective data and the greater cause the highest values over emotions.</b>",
    62: "This name falls under the number 62 category. Your excellent advantage is acting as the salt of the earth, illuminating a dark world with a noble spirit of service and unconditional compassion. This is because Wood's refining nature and sacrificing energy act as a warm heat to help others, like becoming firewood yourself. However, your self-defense mechanisms are too weak, meaning you can be unreasonably used by others or pointlessly drained. <b>Therefore, if the solid Earth energy is added from your birth energy, it will be excellent for firmly building your own physical and economic defense walls before helping others.</b>",
    63: "This name falls under the number 63 category. Your best advantage is enjoying a shining reward through smoothly flowing, prosperous financial luck and glamorous fame spread throughout society. This is because Fire's fruiting nature and success energy lead everything to achievement, just as fruit delightfully ripens receiving plenty of sun. However, your vigilance may weaken in an overly smooth environment, causing a risk of collapsing in an instant due to internal management negligence. <b>Therefore, if the sensitive Water energy is added from your birth energy, it will be excellent for developing a habit of checking your most vulnerable blind spots when everything seems perfect.</b>",
    64: "This name falls under the number 64 category. Your wonderful advantage is exuding original inspiration, possessing a secret ability for contemplation and mysterious artistic sense that others find hard to mimic. This is because Fire's stagnant nature traps the flame in thick fog, blocking immediate radiation, but completes condensed intellectual depth within it. However, a lack of ability to neatly organize reality means your surroundings and mind can always be tangled, complex, and cluttered. <b>Therefore, if the organizing Metal energy is added from your birth energy, it will be excellent for boldly cutting away unnecessary thoughts and networks to clearly immerse yourself in just one core goal.</b>",
    65: "This name falls under the number 65 category. Your best advantage is acquiring an unapproachable honor, receiving perfect blessings without any lack and the envious admiration of the masses. This is because Earth's peaceful nature and glorious energy fill your later years with golden light, just as fertile land abundantly harvests all things. However, as you rise higher, a lazy arrogance may bloom, causing you to lose the hearts of your hard-earned subordinates. <b>Therefore, if the self-disciplining Metal energy is added from your birth energy, it will be excellent for maintaining humble authority by listening to voices from the lowest places.</b>",
    66: "This name falls under the number 66 category. Your human advantage is a standout broad embrace that comfortably accepts anyone and a soft flexibility that smoothly passes over situations. This is because Earth's disturbed nature breaks stubbornness and provides a generous foundation to understand others' pain. However, that flexibility ironically becomes poison, and you can suffer great damage because you cannot firmly refuse others' unreasonable favors or financial demands. <b>Therefore, if the heavy Earth or bright Fire energy is added from your birth energy, it will be excellent for strictly refusing private financial transactions or guarantees and living a clear, document-based life.</b>",
    67: "This name falls under the number 67 category. Your excellent advantage is an outstanding harmony of delicate aesthetic sense and sophisticated leadership, operating an organization systematically without losing creativity. This is because Metal's artistic nature and commanding energy smoothly conduct situations like tuning a precise and sensitive instrument. However, a somewhat lacking social energy for emotional exchange can cause you to suddenly feel deep solitude and alienation from a high position. <b>Therefore, if the warm Fire energy is added from your birth energy, it will be excellent for putting down cold reason and emotionally tuning in and harmonizing with your team members.</b>",
    68: "This name falls under the number 68 category. Your outstanding advantage is building an invincible system with extraordinary strategy unshaken by circumstances and cool, accurate management sense. This is because Metal's strategic nature and founding energy set up meticulous strategies, like raising a massive building with an error-free precision blueprint. However, a lack of warm human touch in your work process can suffocate or pressure the advisors next to you. <b>Therefore, if the affectionate Wood energy is added from your birth energy, it will be excellent for drawing out loyalty by adding soft human humor and leisure to an efficient chain of command.</b>",
    69: "This name falls under the number 69 category. Your advantage is expanding an extraordinary territory of thought by possessing deep, profound academic knowledge and a high mental world that others find hard to approach. This is because Water's isolated nature and stagnant energy make you elevate your intellect to the extreme during quiet alone time. However, a lack of solid support in reality means you are always impatient and prone to forcing unreasonable moves, bringing realistic failure upon yourself. <b>Therefore, if the foundation-building Earth energy is added from your birth energy, it will be excellent for opening up the flow of your fortune by discarding impatience and steadily building up from the basics.</b>",
    70: "This name falls under the number 70 category. Your advantage is possessing deep wisdom transcending worldly desires, fueled by highly noble spirituality and philosophical thought not bound by materialism. This is because Water's annihilating nature and empty energy empty out all unnecessary energy, providing a clean foundation to reach cosmic insight. However, a lack of bright, life-affirming energy can lead you to escape reality by falling into deep depression or a swamp of nihilism. <b>Therefore, if the dazzlingly bright Fire energy is added from your birth energy, it will be excellent for discovering true joy in life through unseen values like religion, meditation, or volunteering.</b>",
    71: "This name falls under the number 71 category. Your ultimate advantage is enjoying unshakable core wealth through unrivaled professional authority in a specific field and thorough pursuit of practical benefit without pretension. This is because Wood's substance-building nature and perfection energy condense flawless expertise, just as a tree that has endured a long time becomes precious timber. However, by overly insisting only on your own methods, there is a high risk of lacking flexibility and becoming trapped in your own castle as a stubborn person. <b>Therefore, if the flexible Water energy is added from your birth energy, it will be excellent for cultivating a generous, ocean-like heart that embraces even the opinions of people with different standards from your own.</b>",
    72: "This name falls under the number 72 category. Your excellent advantage is an overwhelming driving force to push forward, fueled by a younger, more dynamic energy than anyone and an unstoppable spirit of challenge. This is because Wood's fluctuating nature and explosive driving energy attach an engine of limitless expansiveness and passion. However, a lack of risk-blocking management skills poses a danger that emotionally driven investments will return as massive losses. <b>Therefore, if the cooling Water energy is added from your birth energy, it will be excellent for basing all decisions on numbers and rationally taking a step back when the heat rises.</b>",
    73: "This name falls under the number 73 category. Your advantage is bearing honorable fruits and peacefully coordinating the world based on mature judgment and wisdom perfected through going through thick and thin. This is because Fire's concluding nature and order energy wisely tidy up your life, just as a lamp emits its warmest and brightest light right before going out. However, if the tendency to settle for reality becomes too strong, you may fail to read the changes of the new era and fall behind. <b>Therefore, if the outward-reaching Wood energy is added from your birth energy, it will be excellent for becoming a respected teacher who actively passes on living know-how to the next generation rather than clinging to past glory.</b>",
    74: "This name falls under the number 74 category. Your noble advantage is keeping incredible patience that never yields even in agonizing extreme situations, along with an uncompromising moral pride. This is because Fire's declining nature and hardship energy block immediate display of abilities, but refine an unalloyed, solid mental fortitude within. However, if the trials drag on, tomorrow's hope gets depleted, making it easy to make irreversible pessimistic choices or succumb to despair. <b>Therefore, if the spark-reviving Wood energy is added from your birth energy, it will be excellent for recovering an iron-like mentality by realizing the grand causality of human life through reading or philosophy.</b>",
    75: "This name falls under the number 75 category. Your excellent advantage is becoming a peaceful sanctuary for the masses by possessing a high character with no sharp edges and excellently balanced values. This is because Earth's balanced nature and peaceful energy guarantee a comfortable old age, just as a vast land calms storms and achieves stability. However, because you pursue excessive amicability in everything, a lack of sharp decisiveness might cause you to blow opportunities at decisive moments in life. <b>Therefore, if the blade-like Metal energy is added from your birth energy, it will be excellent for resolutely claiming your sovereignty without being swept away by others at important hurdles.</b>",
    76: "This name falls under the number 76 category. Your advantage is being imprinted as a cool and attractive person in relationships due to a broad scope of activity and a generous spending habit that is not petty. This is because Earth's scattering nature and leaking energy help energy circulate outward rather than stagnating in one place. However, a fatal disadvantage is a chronic disease where earned wealth leaks away without substance, leading to a deteriorating financial structure due to a severe lack of gathering cohesion. <b>Therefore, if the storing Water energy is added from your birth energy, it will be excellent for accepting the advice of asset experts and building a defensive system that forcibly ties up your money.</b>",
    77: "This name falls under the number 77 category. Your advantage is an upright adherence to principles that does not shake under any external pressure, and immense courage to never back down from injustice. This is because Metal's unyielding principle nature and fighting energy grant an intense breakthrough power to protect your beliefs to the end, like a sharp sword. However, a very weak energy of harmonious blending can cause you to divide allies and enemies extremely, sparking continuous friction. <b>Therefore, if the softly embracing Wood energy is added from your birth energy, it will be excellent for enjoying peace by stepping away from the stubbornness that 'I am absolutely right' and making the value of co-existence your first principle.</b>",
    78: "This name falls under the number 78 category. Your advantage is perfectly blocking initial uncertainties by possessing flawless preparedness allowing not a single gap, and unrivaled risk management capabilities. This is because Metal's cautious nature and preventive energy cause you to exercise extreme meticulousness, like looking all around with the sword firmly in its sheath. However, a lack of optimistic energy believing things will unconditionally go well may prevent you from even attempting important challenges because you only worry about things that haven't happened. <b>Therefore, if the positive and bright Fire energy is added from your birth energy, it will be excellent for boldly deleting unnecessary worries and confidently stepping out into the world.</b>",
    79: "This name falls under the number 79 category. Your advantage is a nobility that does not covet vain worldly honors and an awakening to unseen truths by building deep professional knowledge in one field. This is because Water's hiding nature and deep wisdom energy cultivate a fully packed intellect, like clear spring water in a deep mountain valley. However, a weak self-promotional ability to glamorously package and announce your abilities to the outside makes it easy to let golden abilities rot and become lonely. <b>Therefore, if the self-revealing Fire energy is added from your birth energy, it will be excellent for finally making a wonderful name for yourself by actively sharing your deep insights with the world.</b>",
    80: "This name falls under the number 80 category. Your excellent advantage is a shining meditative and philosophical wisdom that grasps the logic and truth of the universe at once, bringing your inner mental nobility to its peak. This is because Water's concluding nature and reflective energy cut off worldly obsessions, just as water winding through the world becomes perfectly still at the edge of the sea. However, a lack of living, dynamic vitality creates a high risk of becoming isolated or lethargic, disconnected from the real world. <b>Therefore, if the warm and lively Fire energy is added from your birth energy, it will be excellent for vigorously awakening a sense of reality by finding small daily joys and soaking up the sun every day.</b>",
    81: "This name falls under the number 81 category. Your ultimate advantage is perfectly harmonizing with all things and enjoying unimaginable peak honor and perfect blessings to achieve massive life success. This is because the nature that calls forth the joy of all things and the energy of the grand cycle have reached the peak of perfect grand harmony, the end of the 81 numbers where all things are born anew. However, if arrogance rears its head, intoxicated by the incredible success you have achieved, you may invite harsh trials upon yourself due to haughtiness. <b>Therefore, if the humbling Water energy is added from your birth energy, it will be excellent for maintaining a brilliantly shining reputation forever by willingly returning the achievements and wealth you have gathered to the lowest places in society.</b>"
};

const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        // quotes.js에 baseKo, stageKo 등이 있다는 가정하에
        const a = (n - 1) % 9;
        const b = Math.floor((n - 1) / 9);
        
        out[n] = { 
            title: luckyTitles81[n], // 굳이 복잡하게 조합하지 않고 제목만 깔끔하게
            desc: detailedDesc81[n],
            titleEn: luckyTitles81En[n],
            descEn: detailedDesc81En[n]
        };
    }
    return out;
})();

// ============================================================================
// 1. [전생 데이터] 시그니처 오행 기반 동적 함수
// ============================================================================
function getPastLifeData(num, signature, lang) {
    const jobPoolKo = {
        "목(木)": [
            { job: "황실 정원사", desc: "생명을 피워내는 에너지가 강해 제국의 비원을 설계했습니다." },
            { job: "약초 치유사", desc: "생명 존중의 기운으로 험준한 산맥을 누비며 병자를 돌봤습니다." },
            { job: "비밀 건축가", desc: "성장의 기운을 담아 세상에 없던 신비로운 사원을 세웠습니다." },
            { job: "고대 서예가", desc: "붓 끝에 생명력을 담아 황제의 칙서를 기록하던 문장가였습니다." },
            { job: "비단길 직조공", desc: "유연한 결을 다스려 대륙을 잇는 가장 아름다운 비단을 짰습니다." },
            { job: "산맥의 수호자", desc: "거대한 숲의 기운을 받아 멸종해가는 영물들을 지켜냈습니다." },
            { job: "마을의 훈장", desc: "교육의 기운으로 어린 인재들을 키워 나라의 기틀을 닦았습니다." },
            { job: "목조 조각가", desc: "나무에 혼을 불어넣어 살아 움직이는 듯한 신상을 깎았습니다." },
            { job: "유랑 약재상", desc: "대지의 생명력을 찾아 대륙 곳곳에 치유의 뿌리를 전했습니다." },
            { job: "종이 제작자", desc: "지식의 바탕이 되는 종이를 만들어 문명의 전승을 도왔습니다." }
        ],
        "화(火)": [
            { job: "광야의 예언자", desc: "타오르는 지성으로 대중의 갈 길을 비추는 등불이 되었습니다." },
            { job: "유리 세공사", desc: "불의 기운으로 빛을 가두어 세상에서 가장 투명한 예술을 했습니다." },
            { job: "유랑극단 단장", desc: "발산하는 에너지로 민중의 슬픔을 축제로 바꾼 예술가였습니다." },
            { job: "태양의 사제", desc: "하늘의 열기를 빌려 가뭄을 막고 풍요를 기원하던 영적 리더였습니다." },
            { job: "궁정 요리사", desc: "불을 자유자재로 다스려 황제의 입맛을 사로잡은 연금술사였습니다." },
            { job: "전장의 신호수", desc: "치솟는 불꽃으로 아군의 사기를 높이고 승리의 길을 알렸습니다." },
            { job: "등대지기", desc: "어둠 속에서 꺼지지 않는 불을 지켜 길 잃은 배들을 구원했습니다." },
            { job: "불꽃놀이 장인", desc: "밤하늘에 찬란한 꽃을 피워 백성들에게 찰나의 기쁨을 주었습니다." },
            { job: "제련소 감독관", desc: "거대한 용광로의 열기를 조율하여 문명의 도구들을 만들어냈습니다." },
            { job: "화려한 무희", desc: "빛의 궤적처럼 움직이는 춤사위로 신전의 제사를 주관했습니다." }
        ],
        "토(土)": [
            { job: "제국의 법관", desc: "묵직한 중용의 기운으로 만인의 시시비비를 공정히 가렸습니다." },
            { job: "고대 서지학자", desc: "방대한 지식을 집대성하여 도서관의 기틀을 닦은 기록가였습니다." },
            { job: "황금도시 통치자", desc: "포용의 리더십으로 흩어진 부족들을 하나로 묶은 지도자였습니다." },
            { job: "도자기 장인", desc: "대지의 흙에 숨결을 불어넣어 천 년의 가치를 지닌 기물을 빚었습니다." },
            { job: "성벽 설계자", desc: "흔들리지 않는 견고함으로 침략으로부터 제국을 지킨 공학자였습니다." },
            { job: "대륙의 거상", desc: "신용과 무게감을 바탕으로 동서양의 물자를 연결한 무역가였습니다." },
            { job: "역사 기록관", desc: "변치 않는 흙의 성질처럼 사실만을 기록하여 후대에 전했습니다." },
            { job: "산소 파수꾼", desc: "조상의 안식처를 돌보며 가문의 뿌리와 예법을 수호했습니다." },
            { job: "곡식 저장관", desc: "풍요로운 대지의 결실을 관리하여 기근으로부터 백성을 구했습니다." },
            { job: "사막의 길잡이", desc: "모래바람 속에서도 대지의 방향을 읽어 상단을 인도했습니다." }
        ],
        "금(金)": [
            { job: "전설적 대장장이", desc: "강직한 의지로 어떠한 악도 뚫지 못할 보검을 벼려냈습니다." },
            { job: "비밀 정보관", desc: "예리한 판단력으로 적의 음모를 파헤치던 그림자 파수꾼이었습니다." },
            { job: "심판의 사자", desc: "단호한 결단력으로 흐트러진 질서를 바로잡던 엄격한 관리였습니다." },
            { job: "보석 감정사", desc: "투명한 통찰로 원석 속에 숨겨진 가치를 찾아내던 전문가였습니다." },
            { job: "왕실 호위대장", desc: "강철 같은 충성심으로 황제의 안위를 지켜낸 최후의 보루였습니다." },
            { job: "화폐 주조관", desc: "제국의 경제를 지탱하는 금속의 가치를 다루던 재무관이었습니다." },
            { job: "철갑 기사", desc: "부러지지 않는 신념으로 전장의 최전선을 지키던 용사였습니다." },
            { job: "금속 활자공", desc: "단단한 금속에 지식을 새겨 문명의 기록을 영원히 남겼습니다." },
            { job: "암벽 등반가", desc: "가장 높은 곳의 정기를 받기 위해 험준한 바위산을 올랐습니다." },
            { job: "조각 칼잡이", desc: "차가운 금속으로 부드러운 예술을 빚어낸 반전의 예술가였습니다." }
        ],
        "수(水)": [
            { job: "심해의 항해사", desc: "유연한 지성으로 거친 바다를 다스리며 신대륙을 발견했습니다." },
            { job: "신비주의 철학자", desc: "심오한 통찰로 세상의 근원적 질문에 답을 찾던 현자였습니다." },
            { job: "비밀 전령사", desc: "물처럼 어디든 스며들어 차단된 소식을 전하던 정보원이었습니다." },
            { job: "음유 시인", desc: "흐르는 노래에 세상의 지혜를 담아 마을마다 전파했습니다." },
            { job: "수정구 점술가", desc: "투명한 물에 비친 미래의 잔상을 읽어내던 신비가였습니다." },
            { job: "안개 속 자객", desc: "소리 없이 다가가 정의를 집행하던 물결 같은 존재였습니다." },
            { job: "운하 설계자", desc: "물의 흐름을 바꾸어 메마른 대지에 생명력을 공급했습니다." },
            { job: "심연의 잠수부", desc: "깊은 바닷속에 가라앉은 고대의 보물을 발굴하는 탐험가였습니다." },
            { job: "달빛의 화가", desc: "밤의 감성을 화폭에 담아 영혼을 치유하던 예술가였습니다." },
            { job: "지혜의 차사", desc: "생과 사의 강을 건너는 영혼들을 안내하던 신비로운 가이드였습니다." }
        ]
    };

    const jobPoolEn = {
        "목(木)": [
            { job: "Royal Gardener", desc: "possessed strong vital energy and designed the secret gardens of the Empire." },
            { job: "Herbal Healer", desc: "traversed rugged mountains to treat the sick with the energy of life and compassion." },
            { job: "Secret Architect", desc: "built mysterious temples that never existed before, fueled by growth energy." },
            { job: "Ancient Calligrapher", desc: "was a master who recorded imperial decrees with life in every brushstroke." },
            { job: "Silk Road Weaver", desc: "wove the most beautiful silks connecting continents by mastering flexible grains." },
            { job: "Mountain Guardian", desc: "protected endangered spiritual creatures with the vast energy of the forest." },
            { job: "Village Schoolmaster", desc: "laid the foundation of the nation by nurturing young talents with educational energy." },
            { job: "Wood Sculptor", desc: "carved statues that seemed alive by breathing soul into the timber." },
            { job: "Wandering Herbalist", desc: "delivered healing roots across the continent, seeking the life force of the earth." },
            { job: "Paper Maker", desc: "aided the transmission of civilization by producing the paper that became the base of knowledge." }
        ],
        "화(火)": [
            { job: "Prophet of the Wilderness", desc: "became a beacon of light for the masses with your radiant and burning intelligence." },
            { job: "Glass Artisan", desc: "practiced the most transparent art by capturing light through the power of fire." },
            { job: "Troupe Leader", desc: "was an artist who turned the sorrow of the people into a festival with your explosive energy." },
            { job: "Solar Priest", desc: "was a spiritual leader who prayed for abundance and prevented drought by harnessing celestial heat." },
            { job: "Court Chef", desc: "was an alchemist who captured the Emperor's palate by freely controlling the flames." },
            { job: "Battlefield Signaler", desc: "boosted the morale of allies and signaled the path to victory with soaring flares." },
            { job: "Lighthouse Keeper", desc: "saved lost ships by guarding the unquenchable fire in the deep darkness." },
            { job: "Fireworks Master", desc: "gave momentary joy to the people by blooming brilliant flowers in the night sky." },
            { job: "Smeltery Supervisor", desc: "created the tools of civilization by tuning the heat of a massive furnace." },
            { job: "Brilliant Dancer", desc: "presided over temple rituals with movements that traced the trajectory of light." }
        ],
        "토(土)": [
            { job: "Imperial Judge", desc: "fairly judged the rights and wrongs of all people with a heavy sense of moderation." },
            { job: "Ancient Bibliographer", desc: "was a recorder who laid the foundation for libraries by compiling vast amounts of knowledge." },
            { job: "Golden City Ruler", desc: "was a leader who united scattered tribes through your inclusive leadership." },
            { job: "Ceramic Artisan", desc: "crafted vessels of thousand-year value by breathing life into the clay of the earth." },
            { job: "Fortress Architect", desc: "was an engineer who protected the empire from invasion with unshakable sturdiness." },
            { job: "Continental Merchant", desc: "connected the goods of the East and West based on trust and a weighty presence." },
            { job: "History Recorder", desc: "passed down facts to future generations, as constant as the nature of the soil." },
            { job: "Ancestral Guardian", desc: "protected the roots and etiquette of the family by tending to ancestral resting places." },
            { job: "Grain Manager", desc: "saved the people from famine by managing the fruits of the fertile earth." },
            { job: "Desert Guide", desc: "led caravans by reading the direction of the earth even amidst sandstorms." }
        ],
        "금(金)": [
            { job: "Legendary Blacksmith", desc: "forged legendary swords that no evil could pierce, based on your iron will." },
            { job: "Secret Agent", desc: "was a shadow sentinel who uncovered the plots of enemies with sharp judgment." },
            { job: "Messenger of Judgment", desc: "was an upright official who restored broken order with decisive resolve." },
            { job: "Gem Appraiser", desc: "was an expert who found hidden value within raw stones through transparent insight." },
            { job: "Royal Guard Captain", desc: "was the final bastion who protected the Emperor's safety with iron-clad loyalty." },
            { job: "Currency Minter", desc: "was a financial officer who handled the value of metals supporting the empire's economy." },
            { job: "Ironclad Knight", desc: "was a warrior who guarded the front lines of the battlefield with unbreakable faith." },
            { job: "Movable Type Printer", desc: "permanently left records of civilization by engraving knowledge into hard metal." },
            { job: "Rock Climber", desc: "scaled rugged stone mountains to receive the spirit of the highest peaks." },
            { job: "Carving Master", desc: "was an artist who crafted soft art out of cold metal, a master of irony." }
        ],
        "수(水)": [
            { job: "Deep Sea Navigator", desc: "discovered new continents by commanding the rough seas with flexible intelligence." },
            { job: "Mystic Philosopher", desc: "was a sage who sought answers to the fundamental questions of the world through deep insight." },
            { job: "Secret Messenger", desc: "was an informant who delivered blocked news by permeating everywhere like water." },
            { job: "Bard", desc: "spread the wisdom of the world to every village through songs that flowed like a river." },
            { job: "Crystal Ball Diviner", desc: "was a mystic who read the residues of the future reflected in transparent water." },
            { job: "Shadow Assassin", desc: "was a wave-like presence who approached silently to execute justice." },
            { job: "Canal Designer", desc: "supplied life to the parched earth by changing the flow of water." },
            { job: "Deep Sea Diver", desc: "was an explorer who excavated ancient treasures submerged in the deep ocean." },
            { job: "Painter of Moonlight", desc: "was an artist who healed souls by capturing the sensitivity of the night on canvas." },
            { job: "Guide of Wisdom", desc: "was a mysterious guide who led souls crossing the river of life and death." }
        ]
    };

    const elTraitsKo = { "목(木)": "강한 추진력과 생명력", "화(火)": "발산하는 열정과 에너지", "토(土)": "두터운 중용과 응집력", "금(金)": "예리한 결단과 강직함", "수(水)": "심오한 지혜와 유연함" };
    const elTraitsEn = { "목(木)": "vitality", "화(火)": "passion", "토(土)": "balance", "금(金)": "integrity", "수(水)": "wisdom" };
    const elKeyEn = { "목(木)": "Wood", "화(火)": "Fire", "토(土)": "Earth", "금(金)": "Metal", "수(水)": "Water" }[signature];

    const pool = lang === 'ko' ? jobPoolKo[signature] : jobPoolEn[signature];
    const match = pool[num % 10];
    
    const modsKo = ["달빛 아래 기도를 올리던", "금기된 고서를 해석하던", "별의 궤적을 쫓던", "침묵 속에 칼날을 갈던", "자비로운 마음으로 생명을 품던", "안개 너머 진실을 보던", "거친 파도를 잠재우던", "운명의 실타래를 풀던", "비밀스러운 전설을 기록하던", "정의로운 신념으로 맞서던"];
    const modsEn = ["Praying under the moonlight", "Decoding forbidden scrolls", "Chasing starlight", "Sharpening blades", "Embracing life", "Seeing the truth", "Calming the waves", "Unraveling fate", "Recording legends", "Standing righteous"];
    const mod = lang === 'ko' ? modsKo[num % 10] : modsEn[num % 10];

    const homeworksKo = [
        "지식을 자비로 바꾸어 세상에 베푸는 것이었습니다.", "소유에 대한 집착을 버리고 내면의 평온을 찾는 일이었습니다.", "타인의 고통을 자신의 것처럼 느끼는 공감을 익히고자 했습니다.",
        "자신의 천부적 재능을 공동체의 이익으로 환원하는 것이었습니다.", "고독을 정체성으로 받아들이고 세상과 당당히 소통하는 것이었습니다.", "권위보다 덕과 진심으로 사람을 이끄는 법을 연마했습니다.",
        "과거의 기억에서 벗어나 오직 '현재'의 소중함을 깨닫는 과정이었습니다.", "물질적 가치를 넘어 정신적 완성의 기쁨을 증명하는 생이었습니다.", "내면의 들끓는 분노를 다스리고 용서의 미덕을 배웠습니다.",
        "자신의 한계를 인정하고 낮은 곳으로 임하는 겸손을 닦았습니다.", "눈에 보이지 않는 진실된 가치를 위해 끝까지 인내했습니다.", "진정한 정신적 독립과 자아의 중심을 잡는 과정이었습니다.",
        "갈등이 가득한 세상 속에서 중재자로 평화를 수호했습니다.", "모든 편견을 내려놓고 세상을 맑게 바라보는 법을 배웠습니다.", "가진 것을 아낌없이 나눔으로써 공생의 진리를 실현했습니다.",
        "침묵을 깨고 진실을 말하는 용기를 통해 영혼의 자유를 얻었습니다.", "집착을 끊어내고 흐르는 물처럼 유연하게 사는 지혜를 익혔습니다.", "모든 생명을 평등하게 존중하고 보호하는 의무를 다했습니다.",
        "기나긴 인내의 세월을 견뎌 마침내 영광의 결실을 맺었습니다.", "타인의 잠재력을 끌어올리고 그 안에서 자신의 보람을 찾았습니다.",
        "진정한 사랑의 의미를 정의하고 이를 실천하는 삶이었습니다.", "창조적인 영감을 기록으로 남겨 인류에게 영원한 선물을 주었습니다.", "두려움을 극복하고 미지의 영역에 발을 들이는 용기를 증명했습니다.",
        "복잡한 이해관계를 명쾌하게 풀이하여 상생의 길을 열었습니다.", "자신의 약점을 강점으로 승화시켜 불가능을 가능케 했습니다.",
        "내면의 빛을 발견하고 어두운 세상을 비추는 등대가 되었습니다.", "말보다는 행동으로 자신의 가치를 증명하는 묵직한 삶이었습니다.", "자연의 순리를 깨닫고 인간과 자연의 다리가 되었습니다.",
        "흔들리지 않는 평정심으로 극도의 혼란을 잠재웠습니다.", "자신의 명예보다는 타인의 안위를 먼저 살피는 고결함을 갖췄습니다."
    ];
    const homeworksEn = [
        "The mission was to turn knowledge into compassion.", "Devoted life to letting go of greed and finding inner peace.", "Sought to master true empathy for the suffering of others.",
        "Tasked with returning personal talents back to social values.", "The challenge was to overcome solitude and communicate with the world.", "Refined leadership through virtue rather than mere authority.",
        "Focused on healing past wounds and staying in the present.", "Pursued spiritual completion over material wealth.", "Strived to control inner anger and learn forgiveness.",
        "Aim was to acknowledge personal limits and remain humble.", "Practiced believing in invisible values and enduring to the end.", "In the process of establishing true independence and identity.",
        "Took the role of mediating conflicts and protecting peace.", "Cultivated the wisdom to see the world without prejudice.", "Realizing the value of symbiosis by sharing what you possessed.",
        "Sought freedom of the soul through the courage to tell the truth.", "Learned the wisdom of living like flowing water without obsession.", "Fulfilled the noble duty of respecting and protecting all life.",
        "Proved how to bear glorious fruits through long endurance.", "Found personal value while empowering others' growth.",
        "Defined the true meaning of love and practiced it.", "Left an eternal gift to humanity by recording divine inspirations.", "Proved the courage to step into the unknown by overcoming fear.",
        "Opened the path of symbiosis by solving complex interests.", "Sublimated weaknesses into strengths to make the impossible possible.",
        "Became a lighthouse shining in a dark world by finding inner light.", "Lived a weighty life proving value through action rather than words.", "Became a bridge between humans and nature by realizing natural laws.",
        "Quieted extreme chaos with an unshakable composure.", "Attained nobility by prioritizing others' safety over personal honor."
    ];
    const homework = lang === 'ko' ? homeworksKo[num % 30] : homeworksEn[num % 30];

    if (lang === 'ko') {
        return {
            job: `${mod} ${match.job}`,
            desc: `운명공학 분석 결과, 당신은 <b>${signature}</b>의 <b>${elTraitsKo[signature]}</b>이 두드러지는 시그니처를 가졌습니다. 이로 인해 과거 생애에서 ${match.desc}`,
            homework: homework
        };
    } else {
        return {
            job: `${mod} ${match.job}`,
            desc: `Based on the destiny analysis, your signature energy is <b>${elKeyEn}</b>, characterized by <b>${elTraitsEn[signature]}</b>. Consequently, in your past life, you ${match.desc}`,
            homework: homework
        };
    }
}


// ============================================================================
// 2. [내세 데이터] 시그니처 오행 기반 동적 함수
// ============================================================================
function getNextLifeData(num, signature, lang) {
    const futurePoolKo = {
        "목(木)": [
            { role: "행성 테라포밍 설계자", job: "개척 행성의 바이오 돔에서 멸종 위기종을 복원하는 전문가" },
            { role: "뉴럴 플랜트 가디언", job: "인간의 뇌파와 식물을 연결해 산소를 생성하는 시스템 관리자" },
            { role: "가상 현실 정원사", job: "디지털 세계에 영혼이 안식할 수 있는 자연 지대를 구축하는 자" },
            { role: "바이오 나노 공학자", job: "세포의 재생 능력을 극대화하여 인류의 수명을 연장하는 선구자" },
            { role: "대기 정화 기술자", job: "오염된 지구의 대기를 숲의 기운으로 다시 정화하는 임무" },
            { role: "은하계 씨앗 보관소장", job: "모든 행성의 생명 코드를 보관하고 전파하는 최종 보루" },
            { role: "감정 수목 치유사", job: "사람의 슬픔을 양분 삼아 꽃을 피우는 식물을 기르는 힐러" },
            { role: "양자 생태 학자", job: "차원 간의 생태적 균형을 연구하여 우주 공존을 돕는 학자" },
            { role: "태초의 숲 전령", job: "지구의 기억을 품은 나무를 개척지로 운반하는 인도자" },
            { role: "라이프 시퀀스 설계자", job: "새로운 생명체가 태어날 환경을 완벽하게 세팅하는 설계관" }
        ],
        "화(火)": [
            { role: "에너지 주파수 조율사", job: "다차원 문명의 에너지를 하나로 묶어 증폭시키는 전도사" },
            { role: "홀로그램 계몽가", job: "빛의 파동으로 잊혀진 인류의 지혜를 전파하는 미래의 교사" },
            { role: "성운 동력 발굴가", job: "별이 폭발할 때 생기는 에너지를 문명의 동력으로 바꾸는 주역" },
            { role: "차원간 빛의 전령", job: "서로 다른 차원에 메시지를 빛의 속도로 전달하는 통신 전문가" },
            { role: "양자 태양 관리관", job: "스스로 빛을 내지 못하는 행성에 인공 태양을 띄우는 관리자" },
            { role: "감정 데이터 조각가", job: "인간의 열정을 시각적인 빛의 예술로 승화시키는 거장" },
            { role: "초고속 항로 설계자", job: "빛의 굴절을 이용해 성간 이동 시간을 단축하는 네비게이터" },
            { role: "정신 가속 최적화원", job: "인류의 지능을 한 단계 업그레이드하는 에너지 관리자" },
            { role: "지성 아카이브 수호자", job: "모든 문명의 찬란한 성취를 빛의 입자로 저장하는 기록관" },
            { role: "은하 연합 홍보대사", job: "화려한 카리스마로 행성 간의 문화적 통합을 이끄는 리더" }
        ],
        "토(土)": [
            { role: "화성 기반 인프라 국장", job: "개척지의 토양을 안정시키고 거주 구역을 구축하는 총책임자" },
            { role: "시공간 데이터 보관소장", job: "우주의 방대한 정보를 묵직하게 지켜내는 최종 관리자" },
            { role: "중력 밸런스 조정관", job: "행성의 중력을 조절하여 인류가 살기 가장 좋은 환경을 만드는 이" },
            { role: "차원 통용 화폐 발행자", job: "은하 전체에서 신뢰받는 경제 체계를 구축하는 금융 가이드" },
            { role: "우주 연합 법무 장관", job: "흔들리지 않는 원칙으로 행성 간의 법적 갈등을 심판하는 자" },
            { role: "행성간 지각 공학자", job: "죽어가는 행성의 지질을 안정시켜 생명의 기틀을 다시 다지는 자" },
            { role: "지구 유적 보존 관리인", job: "미래 문명 속에서 고대 지구의 유적을 발굴하고 보호하는 이" },
            { role: "안전 거주구 설계자", job: "어떤 우주 재난에도 견딜 수 있는 견고한 쉘터를 만드는 설계관" },
            { role: "다국적 연합 기록관", job: "모든 행성의 역사를 왜곡 없이 공정하게 기록하는 역사가" },
            { role: "대륙간 수직도시 관리자", job: "지구의 좁은 영토를 극대화하여 평화로운 거주지를 관리하는 이" }
        ],
        "금(金)": [
            { role: "행성 방어 시스템 사령관", job: "정밀한 판단으로 외부의 위협으로부터 문명을 지키는 파수꾼" },
            { role: "사이버 법률 심판관", job: "가상과 현실 사이의 범죄를 단호하게 처단하는 정의의 화신" },
            { role: "양자 보안 설계자", job: "해킹이 불가능한 단단한 정보 보호 체계를 구축하는 기술자" },
            { role: "희귀 광물 탐사대장", job: "우주 깊은 곳에서 문명의 동력이 될 금속을 찾아내는 탐험가" },
            { role: "안드로이드 윤리 감독", job: "기계 지성이 넘지 말아야 할 선을 결정하고 감찰하는 심판관" },
            { role: "차원 게이트 수호자", job: "허가되지 않은 차원 이동을 차단하고 경계를 수호하는 파수꾼" },
            { role: "강철 의지 멘토", job: "인류가 겪는 정신적 나약함을 강한 정신력으로 치유하는 리더" },
            { role: "초전도체 소자 제작자", job: "미래 기술의 핵심이 되는 금속 소자를 정밀하게 빚는 장인" },
            { role: "우주 함대 감사관", job: "모든 시스템의 규율 준수 여부를 예리하게 파악하는 감사 전문가" },
            { role: "결단력 증폭 훈련관", job: "중요한 순간의 결단력을 높여주는 신경 훈련 시스템 운영자" }
        ],
        "수(水)": [
            { role: "뉴럴 링크 정화 전문가", job: "오염된 인류의 무의식 네트워크를 맑게 씻어내는 정화자" },
            { role: "딥스페이스 항해사", job: "심오한 통찰로 블랙홀 너머의 길을 찾아내는 선구적 도선사" },
            { role: "정보 파동 분석가", job: "우주 전체에 흩어진 데이터 입자들을 모아 지혜를 완성하는 이" },
            { role: "무의식 치료 상담사", job: "사람의 깊은 내면에 잠긴 트라우마를 유연하게 치유하는 힐러" },
            { role: "행성간 수자원 조율사", job: "물 부족 행성에 수자원을 공급하는 거대 흐름의 관리자" },
            { role: "꿈의 세계 가이드", job: "인류가 잠든 사이 무의식 속에서 안전하게 유영하도록 돕는 자" },
            { role: "투명성 감사 위원", job: "정보의 흐름이 막힘없이 맑게 유지되는지 감시하는 투명성 수호자" },
            { role: "데이터 복구 고고학자", job: "사라진 고대 지구의 서버를 복구하여 잃어버린 기억을 찾는 이" },
            { role: "고차원의 교육가", job: "고정관념을 깨고 창의적인 사고를 흐르게 하는 미래의 스승" },
            { role: "심연의 진리 전파자", job: "우주의 끝에서 발견한 근원적 비밀을 지혜로 승화시켜 전하는 이" }
        ]
    };

    const futurePoolEn = {
        "목(木)": [
            { role: "Planetary Terraforming Architect", job: "specialist restoring endangered species in bio-domes on frontier planets" },
            { role: "Neural Plant Guardian", job: "system manager connecting human brainwaves with plants to generate oxygen" },
            { role: "Virtual Reality Gardener", job: "creator of natural zones in the digital world for souls to find rest" },
            { role: "Bio-Nano Engineer", job: "pioneer extending human lifespan by maximizing cellular regeneration" },
            { role: "Atmospheric Purification Technician", job: "expert purifying Earth's polluted air with the essence of forests" },
            { role: "Galactic Seed Vault Manager", job: "the final bastion preserving and distributing life codes across all planets" },
            { role: "Emotional Arboretum Healer", job: "healer growing plants that bloom by feeding on human sorrow" },
            { role: "Quantum Ecologist", job: "scholar studying ecological balance between dimensions to aid cosmic coexistence" },
            { role: "Messenger of the Primal Forest", job: "guide carrying trees possessing Earth's memories to new frontiers" },
            { role: "Life Sequence Designer", job: "designer perfectly setting the environment for new life forms to be born" }
        ],
        "화(火)": [
            { role: "Energy Frequency Tuner", job: "evangelist who unites and amplifies the energies of multi-dimensional civilizations" },
            { role: "Hologram Enlightener", job: "future teacher spreading forgotten human wisdom through light waves" },
            { role: "Nebula Power Excavator", job: "key player converting the energy from exploding stars into civilizational power" },
            { role: "Inter-dimensional Messenger of Light", job: "communication expert delivering messages between dimensions at the speed of light" },
            { role: "Quantum Sun Manager", job: "manager launching artificial suns on planets that cannot produce their own light" },
            { role: "Emotional Data Sculptor", job: "master who sublimates human passion into visual light art" },
            { role: "Hyper-speed Route Designer", job: "navigator shortening interstellar travel time using light refraction" },
            { role: "Mental Acceleration Optimizer", job: "energy manager upgrading human intelligence to the next level" },
            { role: "Archivist of Intelligence", job: "recorder storing the brilliant achievements of all civilizations as light particles" },
            { role: "Galactic Union Ambassador", job: "leader guiding cultural integration between planets with brilliant charisma" }
        ],
        "토(土)": [
            { role: "Director of Mars Infrastructure", job: "head official in charge of stabilizing soil and building residential zones" },
            { role: "Spacetime Data Vault Manager", job: "final manager who heavily protects the vast information of the universe" },
            { role: "Gravity Balance Coordinator", job: "one who creates the best environment for humanity by adjusting planetary gravity" },
            { role: "Inter-dimensional Currency Issuer", job: "financial guide building a trusted economic system across the galaxy" },
            { role: "Cosmic Union Attorney General", job: "judge who adjudicates legal conflicts between planets with unshakable principles" },
            { role: "Inter-planetary Geological Engineer", job: "one who restabilizes the geology of dying planets to lay the foundation for life" },
            { role: "Earth Relic Preservationist", job: "one who excavates and protects ancient Earth relics within future civilizations" },
            { role: "Safe Habitation Zone Designer", job: "designer creating robust shelters that can withstand any cosmic disaster" },
            { role: "Multi-national Union Historian", job: "historian who fairly records the history of all planets without distortion" },
            { role: "Continental Vertical City Manager", job: "manager overseeing peaceful residences by maximizing Earth's narrow territory" }
        ],
        "금(金)": [
            { role: "Planetary Defense Commander", job: "sentinel protecting civilization from external threats with precise judgment" },
            { role: "Cyber Law Adjudicator", job: "embodiment of justice who resolutely punishes crimes between virtual and reality" },
            { role: "Quantum Security Architect", job: "technician building an unhackable, iron-clad information protection system" },
            { role: "Rare Mineral Scout Leader", job: "explorer finding metals in deep space that will power civilization" },
            { role: "Android Ethics Supervisor", job: "judge deciding and monitoring the lines that machine intelligence must not cross" },
            { role: "Dimensional Gate Guardian", job: "sentinel blocking unauthorized dimensional travel and guarding the borders" },
            { role: "Iron Will Mentor", job: "leader healing human mental weakness with strong willpower" },
            { role: "Superconductor Component Crafter", job: "artisan precisely forging the metal components at the heart of future tech" },
            { role: "Space Fleet Auditor", job: "audit expert who keenly identifies whether all systems comply with regulations" },
            { role: "Decision-making Amplifier Trainer", job: "operator of neural training systems that enhance decision-making in critical moments" }
        ],
        "수(水)": [
            { role: "Neural Link Purification Specialist", job: "purifier who cleanses the polluted subconscious networks of humanity" },
            { role: "Deep Space Navigator", job: "pioneering pilot finding paths beyond black holes with profound insight" },
            { role: "Information Wave Analyst", job: "one who completes wisdom by gathering data particles scattered across the universe" },
            { role: "Subconscious Therapy Counselor", job: "healer who flexibly treats trauma submerged in the deep psyche" },
            { role: "Inter-planetary Water Coordinator", job: "manager of massive flows supplying water resources to parched planets" },
            { role: "Dreamworld Guide", job: "one who helps humanity swim safely through their subconscious while asleep" },
            { role: "Transparency Audit Commissioner", job: "guardian of transparency monitoring the flow of information remains clear" },
            { role: "Data Recovery Archeologist", job: "one finding lost memories by recovering ancient Earth servers" },
            { role: "Flexible Thinking Educator", job: "future teacher who breaks stereotypes and lets creative thinking flow" },
            { role: "Propagator of Primal Truth", job: "one who sublimates the ultimate secrets found at the edge of the universe into wisdom" }
        ]
    };

    const missionsKo = [
        "지구의 멸종 위기 식물 유전자를 행성 X로 이식하십시오.", "화성의 물 부족 현상을 해결할 결빙 핵 기술을 전달하십시오.", "분열된 달 거주지들 사이의 평화 조약을 체결하십시오.",
        "인공지능과 인류 사이의 감정적 갈등을 중재하고 화해시키십시오.", "100년 전 손실된 인류의 디지털 기억을 복구하십시오.", "신개척 행성에 세워질 첫 번째 도서관의 책을 선별하십시오.",
        "지구 자기장의 불균형을 막아 대기 붕괴를 저지하십시오.", "미래 세대를 위한 완벽한 산소 공급 시스템을 설계하십시오.", "행성 간 이동 중 발생하는 시공간 멀미를 치료하는 주파수를 찾으십시오.",
        "안드로이드들에게 '인간의 따스함'을 가르치는 교육 프로그램을 완성하십시오.", "지구 바다의 오염된 나노 입자들을 정화하는 임무를 수행하십시오.", "달의 먼지를 이용해 거대한 에너지 패널을 건설하십시오.",
        "다른 은하계에서 온 미지의 조난 신호를 최초로 수신하십시오.", "인류의 마지막 남은 천연 숲을 보존하는 파수꾼이 되십시오.", "우주 정거장의 노후된 중력 발생 장치를 교체하십시오.",
        "지구형 행성 탐사대의 정신적 안정을 돕는 상담 시스템을 운영하십시오.", "행성 간 무역에서 발생하는 불공정 거래를 감시하십시오.", "사라진 미래 도시 'New-뉴욕'의 지도를 다시 그리십시오.",
        "시공간 가속 장치의 과부하를 막아 차원의 균형을 지키십시오.", "인류가 거주할 새로운 지하 도시의 광원 시스템을 설치하십시오.", "외계 지성체와의 최초의 문화 교류 축제를 기획하십시오.",
        "화성 토양에 자랄 수 있는 하이브리드 종자를 배양하십시오.", "우주의 모든 소리를 수집하여 지구의 옛 노래를 복원하십시오.", "환생 시스템의 데이터 오류를 수정하여 영혼들을 구제하십시오.",
        "성운의 에너지를 모아 인공 태양을 점화하는 작업에 참여하십시오.", "미래의 인류가 겪을 지독한 고독을 치유할 콘텐츠를 제작하십시오.", "스스로 빛을 내지 못하는 개척지에 지혜의 빛을 전하십시오.",
        "우주의 끝에서 날아오는 정체불명의 방사능을 차단하십시오.", "감정의 불균형으로 무너지는 돔 도시의 정신을 재건하십시오.", "영원한 평화와 공존의 시나리오를 완성하십시오."
    ];

    const missionsEn = [
        "Transplant endangered Earth plant genes to Planet X.", "Deliver ice-core technology to solve water shortages on Mars.", "Sign a peace treaty between divided Lunar colonies.",
        "Mediate emotional conflicts between AI and humanity.", "Recover human digital memories lost 100 years ago.", "Select books for the first library on a newly colonized planet.",
        "Prevent atmospheric collapse by stabilizing Earth's magnetic field.", "Design a perfect oxygen supply system for future generations.", "Find frequencies to cure spacetime sickness during travel.",
        "Teach androids the 'warmth of humanity' through education.", "Purify polluted nano-particles in Earth's oceans.", "Construct giant energy panels using lunar dust.",
        "Receive the first distress signal from a distant galaxy.", "Guard Earth's last remaining natural forests.", "Replace outdated gravity generators on the space station.",
        "Operate counseling systems for planetary explorers' mental health.", "Monitor unfair trade in interplanetary commerce.", "Redraw the map of the lost city 'New-New York'.",
        "Block unauthorized dimensional interference to protect the balance.", "Install light systems for new underground cities.", "Organize the first cultural exchange festival with extraterrestrials.",
        "Cultivate hybrid seeds that can grow in Martian soil.", "Restore ancient Earth songs by collecting cosmic sounds.", "Correct data errors in the reincarnation system.",
        "Participate in igniting an artificial sun using nebula energy.", "Create content to heal the profound loneliness of future humans.", "Deliver the flame of wisdom to dark colonies.",
        "Block unidentified radiation coming from the edge of space.", "Rebuild the spirit of dome cities collapsing from emotional imbalance.", "Complete the cycle of eternal life."
    ];

    const elKeyEn = { "목(木)": "Wood", "화(火)": "Fire", "토(土)": "Earth", "금(金)": "Metal", "수(水)": "Water" }[signature];

    const pool = lang === 'ko' ? futurePoolKo[signature] : futurePoolEn[signature];
    const match = pool[num % 10];
    const mission = lang === 'ko' ? missionsKo[num % 30] : missionsEn[num % 30];

    if (lang === 'ko') {
        return {
            job: match.role,
            desc: `운명공학 분석 결과, 당신의 내세는 <b>${signature}</b>의 에너지가 주도합니다. 이 영향으로 <b>${match.job}</b>(으)로 활동할 운명입니다.`,
            mission: mission
        };
    } else {
        return {
            job: match.role,
            desc: `According to the destiny analysis, your afterlife will be driven by <b>${elKeyEn}</b> energy. Under this influence, you will be <b>${match.job}</b>.`,
            mission: mission
        };
    }
}

/* [6. 정밀 처방전 & 헬퍼 함수] */
const suriPrescription = {
    getRemedy: (num, lackEls, lang) => {
        const safeLang = lang || 'ko';
        
        // [수정] 배열이 들어오면 첫 번째 오행만 딱 하나만 처리합니다. (그래야 4개가 안 나옵니다)
        const el = Array.isArray(lackEls) ? lackEls[0] : lackEls;
        const elIdx = { "목(木)": 0, "화(火)": 3, "토(土)": 6, "금(金)": 9, "수(水)": 12, "수(水)": 12 };
        const data = {
            ko: {
                actions: ["과감한 실행(木)", "추진력 강화(木)", "새로운 도전(木)", "창의적 발상(火)", "에너지 발산(火)", "소통 확대(火)", "중재와 화합(土)", "기반 축적(土)", "공간 정돈(土)", "독립적 결단(金)", "예리한 분석(金)", "원칙 준수(金)", "유연한 사고(水)", "지혜 습득(水)", "심연의 명상(水)"],
                socials: ["기본격(木)", "도약격(木)", "발전격(木)", "복덕격(火)", "공명격(火)", "성공격(火)", "계승격(土)", "통솔격(土)", "덕망격(土)", "강건격(金)", "수전격(金)", "건창격(金)", "신성격(水)", "지혜격(水)", "순풍격(水)"],
                foods: ["녹색 채소(木)", "키위(木)", "매실차(木)", "붉은 과일(火)", "고추(火)", "토마토(火)", "뿌리 채소(土)", "단호박(土)", "감자(土)", "견과류(金)", "양파(金)", "마늘(金)", "블랙푸드(水)", "미역(水)", "해조류(水)"],
                colors: ["그린(木)", "민트(木)", "라임(木)", "레드(火)", "오렌지(火)", "핑크(火)", "옐로우(土)", "베이지(土)", "브라운(土)", "화이트(金)", "실버(金)", "그레이(金)", "네이비(水)", "블랙(水)", "블루(水)"]
            },
            en: {
                actions: ["Bold Action", "Drive", "Challenge", "Creativity", "Expression", "Social", "Harmony", "Base", "Organizing", "Decision", "Analysis", "Rules", "Flexibility", "Wisdom", "Meditation"],
                socials: ["Origin", "Ascent", "Growth", "Prosperity", "Honor", "Success", "Heritage", "Command", "Prestige", "Fortitude", "Resilience", "Integrity", "Revival", "Brilliance", "Breeze"],
                foods: ["Green Veggies", "Kiwi", "Plum Tea", "Red Fruits", "Chili", "Tomato", "Root Veggies", "Pumpkin", "Potato", "Nuts", "Onion", "Garlic", "Black Food", "Seaweed", "Kelp"],
                colors: ["Green", "Mint", "Lime", "Red", "Orange", "Pink", "Yellow", "Beige", "Brown", "White", "Silver", "Gray", "Navy", "Black", "Blue"]
            }
        };
const d = (data[safeLang] || data['ko']);
        const base = elIdx[el] !== undefined ? elIdx[el] : 0;
        const idx = base + (num % 3);
        return {
            color: d.colors[idx],
            action: d.actions[idx],
            social: d.socials[idx],
            food: d.foods[idx]
        };
    }
};

function generateSuriName(num, s1, s2) {
    return s1[num % s1.length] + s2[(num + 7) % s2.length];
}

/* [더 정밀하게 조합되는 이름 생성 함수] */
function makePastNameKo(num, strong, lack, month) {
    // month와 num을 섞어서 인덱스를 결정하면 훨씬 다양한 이름이 나옵니다.
    const name = syllableKo1[(num + month) % syllableKo1.length] + syllableKo2[(num + 7) % syllableKo2.length];
    return `${name}`;
}

function makePastNameEn(num, strong, lack, month) {
    // 여기도 month를 섞어주면 생일마다 다른 영어 이름이 탄생합니다.
    const name = nameRootEn[(num + month) % nameRootEn.length] + nameTailEn[(num + 5) % nameTailEn.length];
    return `${name}`; 
}

function makeNextLifeNameKo(num, strong, lack, month) {
    // 강한 기운(strong)의 길이에 따라 인덱스를 변형해주는 공학적 기법
    const offset = strong.length + month;
    const name = syllableKo1[(num + offset) % syllableKo1.length] + syllableKo2[(num + 15) % syllableKo2.length];
    return `${name}`;
}

function makeNextLifeNameEn(num, strong, lack, month) {
    const offset = strong.length + month;
    const name = nameRootEn[(num + offset) % nameRootEn.length] + nameTailEn[(num + 25) % nameTailEn.length];
    return `${name}`;
}
