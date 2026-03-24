/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

const i18n = {
    ko: {
        title: "수리성명학 데이터 분석", 
        desc: "성명의 파동과 탄생 시계열 지표를 바탕으로 81수리 체계를 분석합니다. 당신의 시그니처 에너지 구조가 도출됩니다.",
        nameLabel: "성함", birthLabel: "양력 8자리(19901208)", btn: "리포트 생성하기",
        loadSeal: "분석중", loadTitle: "당신의 운명 에너지를 조합 중...", loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", tab2Btn: "전생 기록", tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료", sec2: "약점 보완 전략", advise: "현생 조언", practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", tab3Title: "내세 분석 자료", 
        pastJob: "전생의 직업", pastHomework: "전생의 과업", 
        nextDest: "활동 중심지", nextObj: "내세의 직업", nextMission: "핵심 미션"
    },
    en: {
        title: "Suri Analysis Report", 
        desc: "Analyzes the 81-numerology system based on unique name vibrations and birth indicators.",
        nameLabel: "Name", birthLabel: "Birth (YYYYMMDD)", btn: "Generate Report",
        loadSeal: "Analyzing", loadTitle: "Combining energy...", loadDesc: "Please wait.",
        tab1Btn: "Fortune", tab2Btn: "Past Life", tab3Btn: "Afterlife",
        sec1: "Energy Analysis", sec2: "Reinforcement", advise: "Advice", practice: "Practice", 
        sideEffect: "Side Effects",
        tab2Title: "Past-Life Report", tab3Title: "Afterlife Report", 
        pastJob: "Occupation", pastHomework: "Homework", 
        nextDest: "Activity Center", nextObj: "Future Occupation", nextMission: "Core Mission"
    }
};

const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start",risk:"rigidity"},{key:"Harmony",core:"cooperation",risk:"dependency"},{key:"Growth",core:"expansion",risk:"scattered"},{key:"Foundation",core:"stability",risk:"stagnation"},{key:"Center",core:"balance",risk:"control"},{key:"Duty",core:"responsibility",risk:"overload"},{key:"Research",core:"analysis",risk:"isolation"},{key:"Result",core:"wealth",risk:"greed"},{key:"Completion",core:"closure",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

const elementPrescriptions12 = {
    "木": ["추진력이 천성입니다. 목표를 좁혀 완결의 기쁨을 누리십시오.", "기획력이 뛰어난 선구자입니다. 루틴을 군대처럼 고정하십시오.", "따뜻한 리더십이 빛납니다. 자신만의 주권을 당당히 선포하십시오.", "성장이 강합니다. 불필요한 가지를 쳐내고 집중하십시오.", "외유내강의 전형입니다. 내실을 위해 '완료의 기준'을 정하십시오.", "상생을 위해 직접 검수하는 최종 체크포인트를 두십시오.", "학습 능력이 좋습니다. 시스템을 구축해 시간을 자유롭게 하십시오.", "고결한 이상을 가졌습니다. 사용자 관점에서 흐름을 정리하십시오.", "강력한 두령의 기운입니다. 자리에 없어도 돌아가는 시스템을 만드십시오.", "기회를 포착하는 눈이 있습니다. 욕심을 덜고 본질에 집중하십시오.", "설계자의 운명입니다. 실행과 운영을 철저히 분리하십시오.", "생태계를 창조할 기운입니다. 스스로 순환하는 구조를 만드십시오."],
    "火": ["뜨거운 열정이 무기입니다. 규칙적인 운동으로 에너지를 유지하십시오.", "영감이 샘솟는 재주꾼입니다. 모든 생각에 기록이라는 닻을 내리십시오.", "군중을 매료시킵니다. 번아웃 방지를 위해 에너지를 통제하십시오.", "빠른 몰입도가 강점입니다. 명확한 타겟에 전력을 다하십시오.", "설득력이 매력적입니다. 숫자의 힘과 증거를 더해 권위를 갖추십시오.", "폭발적 에너지입니다. 의도적인 멈춤으로 강약을 조절하십시오.", "예술적 성취의 기운입니다. 명상을 통해 평정심을 유지하십시오.", "열정가입니다. 인내심을 높여 반드시 '결과물'로 증명하십시오.", "리더의 상입니다. 겸손을 갖출 때 당신의 빛은 영원할 것입니다.", "소통에 능합니다. 때로는 침묵이 더 강한 메시지가 됨을 기억하십시오.", "주목받을 운명입니다. 책임의 범위를 명확히 할 때 더 큰 운이 옵니다.", "강력한 화기를 품고 있습니다. 철저한 자기 철칙을 세우십시오."],
    "土": ["듬직한 인물입니다. 오늘 할 일 하나를 완벽히 끝내 지지대를 만드십시오.", "만물을 기르는 풍요로운 기운입니다. 공간을 정돈해 운의 통로를 여십시오.", "따뜻한 심성입니다. 타인에게 이용당하지 않게 경계선을 그으십시오.", "신중함이 자산입니다. 80% 상태에서 과감히 완성하는 연습을 하십시오.", "책임감이 강합니다. 모든 짐을 혼자 지지 말고 분산하십시오.", "조직의 핵심입니다. 리소스를 배분하고 나누는 지혜를 발휘하십시오.", "결국 목표를 이룰 운명입니다. 식사와 수면 시간을 고정하십시오.", "안정감이 강점입니다. 아주 작은 변화부터 시도하며 흐름을 타십시오.", "끈기가 남다릅니다. 의도를 명확히 문서화하여 공유하십시오.", "신중함이 품격입니다. 실패를 두려워 말고 새로운 사람을 만나십시오.", "관리 능력이 뛰어납니다. 수치를 계산하며 미래를 철저히 대비하십시오.", "대지의 운명입니다. 고집을 유연함으로 바꾸어 세상을 품으십시오."],
    "金": ["타고난 승부사입니다. 자신만의 원칙을 칼같이 지키는 기백을 갖추십시오.", "핵심을 꿰뚫는 분석가입니다. 직관을 믿고 즉각 결단하십시오.", "묵직한 존재감을 가졌습니다. 표현은 짧고 간결하게 하십시오.", "정리 능력이 방패입니다. 루틴을 무기 삼아 완벽한 시스템을 갖추십시오.", "정의로운 시각을 가졌습니다. 비판 뒤에는 반드시 대안을 제시하십시오.", "스스로에게 엄격합니다. 유연함을 섞어야 부러지지 않습니다.", "카리스마 있는 지도자입니다. 날카로운 칼날을 부드러움 속에 감추십시오.", "장인 정신이 빛납니다. 완벽보다 완결이 우선임을 명심하십시오.", "원칙을 지키는 고결한 성품입니다. 10%의 유연성으로 대인이 되십시오.", "이성적인 태도가 강점입니다. 공감이라는 엔진을 장착하십시오.", "믿음직한 사람입니다. 인간적인 여백을 두어 사람의 마음을 얻으십시오.", "명검의 운명입니다. 차가운 이성에 뜨거운 열정을 더하십시오."],
    "水": ["지혜로운 현자의 기운입니다. 생각을 즉각 행동으로 루틴화하십시오.", "상상력이 재능입니다. 정보에 매몰되지 말고 내면의 소리를 들으십시오.", "철학적 사고를 즐깁니다. 도출된 결론을 반드시 서면으로 남기십시오.", "어디든 적응합니다. 기회가 썩지 않게 마디를 짓고 흐름을 만드십시오.", "직관력이 뛰어납니다. 머릿속 지도를 구체적인 문서로 구조화하십시오.", "조율하는 인물입니다. 고갈을 막기 위해 한 번에 하나씩만 하십시오.", "깊이 있는 사람입니다. 주기적인 산책과 수면으로 뇌를 리셋하십시오.", "섬세한 완벽주의자입니다. 마감 기한을 엄격히 부여해 가치를 높이십시오.", "조용한 카리스마가 있습니다. 뜻을 명확히 전달해 흐름을 타십시오.", "마음을 잘 읽습니다. 우울함이 올 땐 기계적인 루틴으로 움직이십시오.", "지혜를 공유할 운명입니다. 지식을 사회적으로 적극 순환시키십시오.", "지혜의 화신입니다. 집착을 버리고 흐름에 몸을 맡겨 자유를 얻으십시오."]
};

const sideEffects = ["'만성적 신중함' 주의", "무의식적으로 턱 괴는 습관", "월요일 오전의 일시적 무기력", "핸드폰을 들고 핸드폰 찾기", "칭찬 들으면 AI처럼 고장남", "근거 없는 자신감과 이불킥", "새벽 2시의 근거 없는 명석함", "디저트 무한 흡입 현상", "발표 직전 소음에 예민해짐", "상대의 오타를 정정하고픈 강박"];
const sideEffectsEn = ["Chronic deliberation", "Jaw-resting habit", "Monday lethargy", "Searching phone while holding it", "Freezing at compliments", "Late-night regrets", "2 AM enlightenment", "Sugar cravings", "Auditory sensitivity", "Typo correction urge"];

/* [1] 글로벌 감성 한글 음절 (외국인 이름 느낌) */
const syllableKo1 = [
    "알", "베", "로", "루", "마", "에", "이", "카", "크", "프", "리", "니", "산", "벤", "파", "디", "레", "미", "넬", "벨",
    "아", "안", "엘", "오", "우", "클", "플", "브", "테", "스", "켈", "멜", "조", "제", "카", "피", "바", "샤", "타", "나",
    "휘", "린", "겸", "담", "온", "율", "가", "서", "도", "해", "준", "채", "윤", "설", "예", "태", "희", "진", "현", "명",
    "헤", "메", "세", "데", "게", "베", "페", "체", "제", "레", "네", "아", "오", "우", "에", "이", "카", "키", "쿠", "코"
];
const syllableKo2 = [
    "토", "라", "나", "아", "리", "엘", "온", "로", "스", "넬", "드", "크", "테", "샤", "루", "니", "벨", "룬", "인", "움",
    "리스", "티", "나", "시아", "안", "더", "엘", "엔", "이", "오", "아", "타", "카", "데", "레", "미", "피", "스", "트", "넬",
    "우", "재", "준", "솔", "아", "늘", "담", "린", "온", "율", "호", "민", "성", "윤", "하", "연", "빈", "경", "석", "찬",
    "반", "센", "칸", "얀", "린", "론", "릴", "란", "레", "라", "나", "노", "네", "니", "누", "네", "노", "나", "라", "리"
];

/* [2] 영어/라틴 성명 데이터 */
const nameRootEn = ["Aether", "Lumen", "Vesper", "Caelum", "Eon", "Zion", "Kyros", "Nova", "Astra", "Solis", "Terra", "Aqua", "Ignis", "Ventus", "Physis", "Ethos", "Pathos", "Logos", "Chronos", "Gaia", "Riven", "Lumi", "Seren", "Orin", "Kalen", "Lyra", "Mira", "Elian", "Sola", "Aura", "Nyx", "Helio", "Thal", "Pyro", "Geo", "Atmo", "Xeno", "Zephyr", "Onyx", "Titan", "Valer", "Amon", "Eros", "Kael", "Doran", "Juno", "Silas", "Vael", "Koda", "Rhodes"];
const nameTailEn = ["is", "os", "ium", "on", "eth", "iel", "eus", "ara", "ia", "us", "as", "er", "en", "el", "yn", "ar", "ir", "ae", "is", "ax", "ith", "onus", "ius", "ora", "is", "ox", "ex", "un", "ix", "an"];

/* [3] 시대 및 지역 데이터 (전생) */
const eraPastKo = ["조선 시대", "고려 왕조", "통일 신라", "고구려 연맹", "백제 부흥기", "대한제국기", "발해 무역로", "중국 송나라", "일본 에도 막부", "중국 당나라", "고대 마야", "잉카 제국", "고대 이집트", "페르시아 제국", "고대 그리스"];
const regionPastKo = ["한양 육조거리", "개경 저잣거리", "서라벌 중심지", "요동성 인근", "금강 인근 부락", "평양성 외곽", "강화도 해안가", "장안성 동쪽", "교토 인근 마을", "낙양 성내", "유카탄 반도", "마추픽추 인근", "테베 나일강변", "페르세폴리스", "아테네 광장"];

const eraPastEn = ["Roman Empire", "Ancient Greece", "Mesopotamia", "Aztec Empire", "Viking Age", "Renaissance Italy", "Ancient Egypt", "Medieval England", "Celtic Age", "Ottoman Empire", "Industrial Revolution", "Golden Age of Piracy"];
const regionPastEn = ["Rome", "Athens", "Babylon", "Tenochtitlan", "Scandinavia", "Florence", "Alexandria", "London", "Ireland", "Constantinople", "Paris", "Caribbean Sea"];

/* [4] 내세 배경 데이터 */
const eraNext = ["Galactic Alliance", "Neo-Seoul State", "Mars Frontier", "Ether Dimension", "Underwater Dome City", "Sky Island Era", "Cyber-Punk Age", "Interstellar Colony", "Post-Human Era", "Deep-Space Ark", "Quantum Singularity Era"];
const regionNext = ["Sector 7", "Central Hub", "Olympus Mons Base", "Zone 00", "Aquarius City", "Cloud-9", "Neon-Street 01", "Titan Station", "Memory-Cloud", "Omega Point", "Andromeda Gate"];


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

/* [월간 데이터] */
const birthMonthData = {
    1: { ko: "맹추위를 뚫고 솟아오르는 '동토의 생명력'을 가졌습니다.", en: "Vitality of Frozen Earth piercing through deep winter." },
    2: { ko: "만물이 기지개를 켜는 '초봄의 유연함'을 품고 있습니다.", en: "Flexibility of Early Spring as all things awaken." },
    3: { ko: "대지를 적시는 봄비와 같은 '성장의 자양분'을 타고났습니다.", en: "Nutrient of Growth like spring rain soaking the earth." },
    4: { ko: "화려하게 피어나는 '만개의 에너지'를 지녔습니다.", en: "Energy of Full Bloom radiating brilliance." },
    5: { ko: "뜨거운 태양 아래 무르익는 '초여름의 열정'이 가득합니다.", en: "Passion of Early Summer ripening under the sun." },
    6: { ko: "만물을 성장시키는 '풍요의 절정'에 서 있는 기운입니다.", en: "Peak of Abundance fueling the growth of all things." },
    7: { ko: "단단하게 굳어가는 '열매의 견고함'을 지닌 명식입니다.", en: "Firmness of Fruit as it hardens with substance." },
    8: { ko: "황금빛 들판을 완성하는 '결실의 파동'이 흐릅니다.", en: "Vibration of Harvest completing golden fields." },
    9: { ko: "서리발처럼 날카로운 '숙살(肅殺)의 기운'을 품고 있습니다.", en: "Energy of Frosty Resolution sharp as a blade." },
    10: { ko: "만물이 저장되는 '창고의 지혜'를 지닌 기운입니다.", en: "Wisdom of Storage where all things are gathered." },
    11: { ko: "어둠 속에서 빛을 기다리는 '근원의 지혜'를 타고났습니다.", en: "Primal Wisdom waiting for light in the dark." },
    12: { ko: "새로움을 준비하는 '침묵의 힘'이 서려 있습니다.", en: "Power of Silence preparing for rebirth." }
};
const luckyTitles81 = { 1: "기본격-만사휴태", 2: "동요격-분리파란", 3: "도약격-입신양명", 4: "부정격-파괴멸망", 5: "복덕격-성공발전", 6: "계승격-덕후유복", 7: "강건격-주도면밀", 8: "수전격-자수성가", 9: "궁박격-불의재난", 10: "공허격-다재다능", 11: "신성격-재래부흥", 12: "박약격-고립무원", 13: "지혜격-총명발달", 14: "이산격-파괴번뇌", 15: "통솔격-복수쌍전", 16: "덕망격-재물유복", 17: "건창격-강직투쟁", 18: "발전격-의지견고", 19: "고난격-병약고독", 20: "허망격-중도좌절", 21: "두령격-독립권위", 22: "중절격-부부운박", 23: "공명격-위세당당", 24: "입신격-축재풍부", 25: "건창격-재치민활", 26: "영웅격-파란만장", 27: "중단격-좌절중단", 28: "파란격-파란곡절", 29: "성공격-신망두터", 30: "부침격-길흉상반", 31: "융창격-자수성가", 32: "순풍격-의외득재", 33: "제왕격-위풍당당", 34: "파멸격-파란곡절", 35: "안강격-평범온화", 36: "협객격-파란만장", 37: "인덕격-유의유덕", 38: "복록격-문학예술", 39: "장성격-부귀번영", 40: "파란격-변화무쌍", 41: "고봉격-대업성취", 42: "고행격-자력갱생", 43: "성쇠격-외화내빈", 44: "마장격-미궁속황", 45: "대성격-만물통합", 46: "미망격-방황고민", 47: "출세격-득의만면", 48: "유덕격-지도역량", 49: "변화격-길흉상반", 50: "부침격-성패교차", 51: "춘추격-성패상반", 52: "약진격-기회포착", 53: "내빈격-외화내빈", 54: "패망격-백계무책", 55: "미달격-외양내허", 56: "부족격-진퇴유곡", 57: "재기격-시련극복", 58: "후복격-자수성가", 59: "불우격-의지박약", 60: "동요격-상하불안", 61: "재화격-지혜충만", 62: "쇠퇴격-내우외환", 63: "성공격-부귀영광", 64: "침체격-변화무쌍", 65: "휘황격-만물평온", 66: "망신격-내우외환", 67: "승리격-천하태평", 68: "창업격-지모탁월", 69: "정체격-병약곤궁", 70: "공허격-멸망멸절", 71: "안정격-내실충실", 72: "상반격-길흉상반", 73: "평범격-자수성가", 74: "불우격-만사불우", 75: "안정격-평화온화", 76: "이산격-내우외환", 77: "성패격-길흉상반", 78: "선길격-평범온화", 79: "불운격-정체불명", 80: "종말격-은둔생활", 81: "환희격-복덕원만" };
const luckyTitles81En = { 1: "Origin", 2: "Turbulence", 3: "Ascent", 4: "Chaos", 5: "Prosperity", 6: "Heritage", 7: "Fortitude", 8: "Resilience", 9: "Adversity", 10: "Void", 11: "Revival", 12: "Frailty", 13: "Brilliance", 14: "Dispersion", 15: "Command", 16: "Prestige", 17: "Integrity", 18: "Expansion", 19: "Hardship", 20: "Illusion", 21: "Sovereignty", 22: "Interruption", 23: "Majesty", 24: "Accumulation", 25: "Sharpness", 26: "Hero", 27: "Cease", 28: "Surge", 29: "Success", 30: "Flux", 31: "Bloom", 32: "Breeze", 33: "Imperial", 34: "Ruin", 35: "Serenity", 36: "Wanderer", 37: "Benevolence", 38: "Artistry", 39: "General", 40: "Change", 41: "Summit", 42: "Penance", 43: "Fluctuation", 44: "Obstacle", 45: "Mastery", 46: "Delusion", 47: "Triumph", 48: "Mentor", 49: "Transformation", 50: "Wave", 51: "Seasons", 52: "Leap", 53: "Hidden", 54: "Failure", 55: "Surface", 56: "Dilemma", 57: "Recovery", 58: "Rebound", 59: "Misfortune", 60: "Shaking", 61: "Treasure", 62: "Decline", 63: "Glory", 64: "Stagnation", 65: "Radiance", 66: "Scandal", 67: "Victory", 68: "Founder", 69: "Standstill", 70: "Emptiness", 71: "Stability", 72: "Division", 73: "Simplicity", 74: "Misery", 75: "Calm", 76: "Departure", 77: "Balance", 78: "Omen", 79: "Mist", 80: "Hermit", 81: "Bliss" };

const detailedDesc81 = { 1: "태초의 빛이 만물을 깨우는 형상입니다. 독립심과 개척 정신이 강하며 스스로 길을 열어 대업을 성취합니다.", 2: "뿌리가 흔들리는 고립의 기운입니다. 재능은 있으나 주변과의 조화가 깨지기 쉬우니 내실을 다져야 합니다.", 3: "새순이 돋아 하늘로 뻗어가는 생명력의 정점입니다. 지혜와 명예가 따르며 입신양명의 기운이 강합니다.", 4: "거친 파도가 앞길을 가로막는 흐름입니다. 파괴와 창조가 공존하니 성급한 확장보다는 기초가 우선입니다.", 5: "만물이 조화롭게 무르익어 복이 들어오는 형국입니다. 인덕과 재복이 함께하며 성공이 따르는 길수입니다.", 6: "조상의 덕이 흐르고 대를 이어 번영하는 파동입니다. 책임감이 강하며 신뢰를 바탕으로 안정을 누립니다.", 7: "강철 같은 의지와 면밀함으로 목표를 관철합니다. 독립심이 강해 자수성가하며 전문가의 위치에 오릅니다.", 8: "흙 속의 황금을 찾아내어 빛을 발하는 명식입니다. 꾸준한 노력 끝에 재물을 모으고 지키는 힘이 탁월합니다.", 9: "능력은 천재적이나 운명의 부침이 심한 기운입니다. 고독한 탐구자의 길을 걷기 쉬우니 평정심이 숙제입니다.", 10: "재주는 비상하나 안개가 자욱해 방향을 잃기 쉽습니다. 공허함을 경계하고 명확한 목표를 세워야 합니다.", 11: "메마른 땅에 비가 내려 새 생명이 움트듯, 가문을 부흥시키고 새로운 가치를 창출하는 개척자의 운명입니다.", 12: "홀로 거친 세상에 서야 하는 고립의 흐름입니다. 내면의 힘을 기르고 유연함을 배워야 성장을 완성합니다.", 13: "하늘이 내린 총명함과 지혜가 머무는 자리입니다. 어떤 문제든 명쾌한 해답을 찾아내며 귀감이 됩니다.", 14: "에너지가 분산되어 안정이 필요한 파동입니다. 마음의 중심을 잡고 환경을 정돈하는 것이 최우선 과제입니다.", 15: "복과 인덕이 함께하니 전체를 조망하고 이끄는 리더의 기운입니다. 부귀와 명예가 따르는 상서로운 수입니다.", 16: "덕망으로 사람의 마음을 얻어 대업을 완수합니다. 많은 이들의 신뢰를 얻어 명예로운 자리에 오를 명식입니다.", 17: "강직한 의지와 날카로운 논리로 진리를 탐구합니다. 전문성이 독보적이나 부드러움을 더해야 완벽해집니다.", 18: "굳건한 추진력으로 현실적인 결실을 맺습니다. 역경을 기회로 바꾸며 반드시 성과를 증명해내는 운명입니다.", 19: "재능은 비상하나 고독의 기운이 흐르는 영혼입니다. 현실과의 조화를 찾고 지혜를 나누는 것이 삶의 열쇠입니다.", 20: "이상은 높으나 기반이 약해 중도 좌절하기 쉬운 형국입니다. 내실을 다지고 성급함을 경계해야 번영합니다.", 21: "우뚝 솟은 산처럼 흔들림 없는 두령의 기운입니다. 독립심과 권위가 따르며 조직의 핵심을 담당할 운명입니다.", 22: "재주는 많으나 관계가 불안정해 이용당하기 쉬운 흐름입니다. 중심을 잡고 거절의 선을 지키는 법을 익히십시오.", 23: "태양 같은 열정으로 자신의 아이디어를 세상에 발산합니다. 끊임없는 변화를 통해 명성과 성장을 얻게 됩니다.", 24: "성실한 축적과 철저한 관리로 황금빛 결실을 맺습니다. 물질적 풍요와 지속적인 안정력을 동시에 갖춥니다.", 25: "비상한 재치와 유연함으로 혼돈 속에서 질서를 찾습니다. 많은 이들을 올바른 방향으로 이끄는 중추적 사명입니다.", 26: "영웅적 기질을 가졌으나 파란이 많은 담금질의 형국입니다. 시련을 이겨낼 때 비로소 진가가 드러나는 명식입니다.", 27: "예리한 통찰력이 있으나 고립으로 인해 중단되기 쉬운 흐름입니다. 따뜻한 마음을 회복해야 운이 열립니다.", 28: "거친 바다를 항해하는 선장처럼 파란곡절이 많습니다. 집착을 버리고 흐름을 타야 큰 성과를 거둡니다.", 29: "지혜와 완성도를 통해 세상의 신망을 얻는 원숙한 운명입니다. 전환의 시기를 슬기롭게 넘겨 도약합니다.", 30: "길흉이 교차하여 부침이 심한 형국입니다. 다시 일어서는 개척의 에너지는 좋으나 내실을 더 기해야 합니다.", 31: "관계의 에너지를 통해 무에서 유를 창조합니다. 협력을 바탕으로 혼자보다 거대한 결실을 맺는 명식입니다.", 32: "순풍에 돛을 단 듯 예기치 못한 기회가 찾아옵니다. 유연한 소통을 통해 운명의 크기를 무한히 확장합니다.", 33: "제왕의 위엄과 강력한 리더십을 지녔습니다. 화려함 뒤의 책임을 다할 때 비로소 대업이 완성됩니다.", 34: "폭풍이 닥쳐 기반이 흔들리는 고난의 형국입니다. 기초 체력을 기르고 내실을 다져 삶을 지탱해야 합니다.", 35: "대지처럼 포용력이 넓고 평온한 운명입니다. 조직의 안정적인 중심축 역할을 하며 평화를 유지합니다.", 36: "덕으로 사람의 마음을 얻어 명예를 지키는 에너지입니다. 헌신을 통해 사회적 신뢰와 높은 보상을 얻습니다.", 37: "이면을 꿰뚫는 통찰과 장인 정신으로 전문성을 인정받습니다. 고결한 독립성을 유지하며 지식을 쌓습니다.", 38: "강력한 추진력으로 이상을 현실로 만듭니다. 구체적인 결과물로 본인의 가치를 증명해내는 성취의 운명입니다.", 39: "원을 완벽히 닫고 다음 차원으로 도약하는 지혜입니다. 부귀와 영광을 누리며 타의 귀감이 되는 명식입니다.", 40: "개척의 기운이 있으나 성급함으로 인해 요동칩니다. 평정심을 유지하고 기반을 다져야 번영을 유지합니다.", 41: "조직을 대업으로 이끄는 강력한 통솔력의 파동입니다. 협력을 통해 거대한 성과를 현실화하는 운명입니다.", 42: "아이디어는 화려하나 시련이 많은 담금질의 시기입니다. 변화를 두려워하지 말고 성장의 발판으로 삼으십시오.", 43: "겉은 화려하나 속이 비기 쉬운 외화내빈의 명식입니다. 기초를 단단히 다지고 실속을 챙기는 지혜가 필요합니다.", 44: "리더십은 있으나 방향을 잃고 헤매는 마장의 기운입니다. 통찰력을 길러 혼돈 속에서 질서를 찾아야 합니다.", 45: "책임감과 조상의 덕이 결합되어 전체를 통합합니다. 이타적인 헌신으로 높은 명예와 신뢰를 얻게 됩니다.", 46: "통찰력은 있으나 방황으로 인해 독립성을 잃기 쉽습니다. 중심을 잡고 유연함을 회복해야 운이 풀립니다.", 47: "인내 끝에 결실을 맺어 생의 참된 의미를 깨닫는 운명입니다. 구체적인 성과로 가치를 증명하는 명식입니다.", 48: "만물을 통합하는 리더십으로 타인을 이끄는 중추적 사명을 지녔습니다. 지혜로운 조언자로 존경받는 운명입니다.", 49: "변화가 극심하여 길흉이 상반되는 흐름입니다. 환경 변화에 민감하게 대응하며 내실을 다지는 것이 생존법입니다.", 50: "협력의 파동은 좋으나 성패가 교차하여 불안정합니다. 평정심을 유지하고 기반을 튼튼히 해야 무너지지 않습니다.", 51: "성장의 기운은 넘치나 인생의 사계를 모두 경험하는 형국입니다. 역경을 통해 대기만성형으로 성장합니다.", 52: "견고한 내실과 기회 포착 능력이 결합된 강한 운입니다. 철저한 자기관리로 대업을 성취하는 지지대를 갖습니다.", 53: "겉은 번듯하나 실속이 부족해 성패가 교차합니다. 외양보다는 내실을 중시해야 중심을 잡을 수 있습니다.", 54: "책임감은 강하나 기반이 무너져 계획이 틀어지기 쉽습니다. 기초부터 다시 점검하고 신의를 지키십시오.", 55: "통찰은 예리하나 겉치레에 치중해 실속이 없는 명식입니다. 따뜻한 가슴과 유연함을 길러야 사람을 얻습니다.", 56: "성과를 내는 힘은 좋으나 결정적인 순간에 주저하기 쉽습니다. 추진력과 현실 감각을 조화시켜 마침표를 찍으십시오.", 57: "시련을 극복하고 새로운 질서를 세우는 개척의 파동입니다. 고난 끝에 귀감이 되는 성취를 이루는 명식입니다.", 58: "성실히 축적하여 중년 이후 자수성가하는 안정된 운입니다. 인내의 시간 끝에 거대한 결실을 맺게 됩니다.", 59: "변화의 기운은 강하나 의지가 약해 방향을 잃기 쉽습니다. 루틴을 고정하고 명확한 목표에 집중해야 합니다.", 60: "내실은 있으나 상하 관계의 불안으로 흔들리는 형국입니다. 기반을 단단히 하고 자기관리에 집중하십시오.", 61: "지혜가 충만하여 조직의 핵심 축 역할을 수행합니다. 혼돈 속에서도 길을 찾아내는 현명한 지도자의 운명입니다.", 62: "책임감은 깊으나 내우외환으로 쇠퇴하기 쉬운 흐름입니다. 유연함을 기르고 이타적인 태도로 위기를 넘기십시오.", 63: "예리한 통찰과 꾸준한 성과가 만나 부귀영화를 누립니다. 인내 끝에 최고의 결실을 보는 원만한 명식입니다.", 64: "지혜는 있으나 변화무쌍한 운명으로 인해 정체되기 쉽습니다. 슬기롭게 정리하고 도약의 발판을 마련하십시오.", 65: "창조의 파동이 완성과 만나 만물이 평온해지는 운명입니다. 안정 속에서 자신의 가치를 널리 알리는 명식입니다.", 66: "협력의 기운은 좋으나 예기치 못한 실수로 망신을 살 수 있습니다. 중심을 잡고 거절의 선을 분명히 하십시오.", 67: "화려한 표현력을 바탕으로 대업을 완수하고 태평성대를 누립니다. 역경을 딛고 영혼의 고저를 높이는 운명입니다.", 68: "견고한 내실과 탁월한 지모가 결합된 창업자의 명식입니다. 흔들리지 않는 지지대를 구축해 성공을 유지합니다.", 69: "리더십은 있으나 기반이 약해 정체되기 쉬운 기운입니다. 기초 체력을 보강하고 통찰력을 길러 위기를 대비하십시오.", 70: "신의는 깊으나 공허함이 서려 계획이 무너지기 쉽습니다. 헌신적인 태도로 명예를 얻어야 삶이 풀립니다.", 71: "통찰력과 흔들리지 않는 내실이 결합된 완벽한 명식입니다. 전문성을 바탕으로 안정적인 부와 명예를 누립니다.", 72: "추진력은 좋으나 성패의 기복이 심한 형국입니다. 현실 감각을 잃지 말고 리스크를 관리하는 지혜가 필요합니다.", 73: "지혜롭게 마무리를 짓고 새로운 질서를 세우는 개척의 운명입니다. 스스로의 힘으로 높은 가치를 증명해냅니다.", 74: "시작의 에너지는 좋으나 만사가 불우한 마장의 흐름입니다. 역경 속에서 스스로 길을 찾는 인내력이 생존법입니다.", 75: "균형의 파동을 통해 완벽한 안정을 창출하는 통솔의 기운입니다. 협력을 통해 거대한 결실을 손에 거머쥡니다.", 76: "표현력은 좋으나 내우외환으로 이산하기 쉬운 영혼입니다. 중심을 잡고 성장을 완성하는 데 집중하십시오.", 77: "내실은 있으나 성패가 교차하여 운명이 요동칩니다. 기초를 단단히 하고 지지대를 보강해야 무너지지 않습니다. ",
    78: "조직을 이끄는 힘은 좋으나 선길후흉의 기운이 있습니다. 통찰력과 중심을 잃지 않아야 번영을 유지합니다.", 79: "신의는 있으나 안개 속에서 헤매는 정체불명의 운입니다. 유연함을 기르고 명확한 목표를 세워야 명예를 얻습니다.", 80: "통찰력은 깊으나 종말의 기운으로 은둔하기 쉬운 명식입니다. 유연함을 회복하고 세상과의 접점을 유지하십시오.", 81: "궁극의 지혜와 환희가 만나 복덕원만한 완성의 명식입니다. 부귀를 누리며 타의 귀감이 되는 최고의 운명입니다." 
};
const detailedDesc81En = { 1: "Primordial light awakening existence. A strong pioneer spirit achieving great success.", 2: "Shaky roots and isolation. Needs internal harmony to prevent scattering of energy.", 3: "Vitality reaching for the sky. Wisdom and fame accompany your name.", 4: "Rough waves blocking the path. Focus on foundations before expansion.", 5: "Perfect ripeness where blessings overflow. Abundant luck and virtue lead to shared success.", 6: "Inherited virtue and lasting prosperity. A trusted pillar of any organization.", 7: "Iron-willed strategy. Born to be self-made, reaching the peak of expertise.", 8: "Finding gold in the earth. Accumulate and protect wealth through steady effort.", 9: "Brilliant but turbulent energy. Maintaining inner peace is your life's homework.", 10: "Extraordinary wit clouded by mist. Set crystal-clear goals to find your path.", 11: "New creation igniting parched land. A pioneer leading a spiritual revival.", 12: "Standing alone against waves. Cultivate inner strength and accept fluidity.", 13: "Divine wisdom and brilliance. A radiant mind serving as a beacon for others.", 14: "Scattered energy requiring stability. Finding your inner center is priority one.", 15: "Fortunate command and virtue. You integrate your environment with reputation.", 16: "Winning hearts with honor. Destined for a prestigious life through trust.", 17: "Sharp logic seeking truth. Must master emotional connection.", 18: "Firm will manifesting success. Transforming adversity into concrete achievements.", 19: "Brilliant yet solitary soul. Finding harmony with reality is the key.", 20: "High ideals on shaky foundations. Focus on substance to prosper.", 21: "Majestic like a peak. An independent leader with high authority.", 22: "Great talent but fragile boundaries. Protect your center and say 'No'.", 23: "Solar passion radiating ideas. Achieving fame through constant evolution.", 24: "Meticulous management achieving ripeness. Possessing lasting strength.", 25: "Brilliant wit finding order in chaos. Guiding others to the correct path.", 26: "Heroic vibration tested by storms. Revealed worth through conquering trials.", 27: "Sharp insight prone to isolation. Restore empathy to unlock your fate.", 28: "Navigating waves like a captain. Let go of obsession to succeed.", 29: "Established reputation and integrity. Refining turning points to leap higher.", 30: "Mixed fate with sharp fluctuations. Needs more internal solidity.", 31: "Creating from nothing through unity. Achieving success by harmonizing.", 32: "Opportunities like a breeze. Elevating your soul through communication.", 33: "Imperial majesty and leadership. Fulfill duties to complete your work.", 34: "Rough storms disrupting fate. Solidify foundations to withstand pressure.", 35: "Fortress-like strength and peace. Maintaining organizational harmony.", 36: "Winning hearts with virtue. Gaining social trust through dedication.", 37: "Expert precision piercing appearances. Maintaining high soulful integrity.", 38: "Manifesting visions into triumphs. Proving worth through practical success.", 39: "Closing the cycle to leap higher. Serving as a radiant beacon of light.", 40: "Pioneer fire but prone to shifts. Maintain serenity to maintain prosperity.", 41: "Powerful command leading collective triumphs. Harmonizing connections.", 42: "Radiant ideas tested by trials. Use change as a stepping stone.", 43: "Outer radiance but inner decay. Prioritize substance over spectacle.", 44: "Leader's fire lost in a labyrinth. Seek order in chaos for direction.", 45: "Duty and merit integrating unity. Gaining honor through dedication.", 46: "Insight prone to delusion. Regain your center to unlock your path.", 47: "Proving worth through success. Finding meaning through grit.", 48: "Ultimate completion guiding others. A trusted mentor for universal peace.", 49: "Extreme changes and mixed fate. Adapt quickly to survive and thrive.", 50: "Good unity but unstable fluctuations. Maintain serenity to prevent collapse.", 51: "Abundant growth experiencing all seasons. Growing into a powerhouse.", 52: "Fortress-like solidity. Achieving works through meticulous management.", 53: "Outer show but inner poverty. Prioritize substance over appearance.", 54: "Strong duty but shaky foundations. Re-examine your base to overcome.", 55: "Sharp insight but hollow spectacle. Cultivate warmth to win people over.", 56: "Strong drive but prone to indecision. Harmonize execution with reality.", 57: "Pioneer waves resurrecting from trials. Exemplary success after hardship.", 58: "Accumulating wealth through effort. Reaching ripeness via grit.", 59: "Strong change but weak will. Fix your routine to find your way.", 60: "Inner substance but unstable relations. Solidify your base first.", 61: "Divine wisdom guiding the core axis. A wise leader finding order.", 62: "Deep duty tested by woes. Use fluidity to navigate through crises.", 63: "Sharp insight meeting steady results. Success through patience.", 64: "Wisdom prone to stagnation. Refine turning points for the next leap.", 65: "Primordial creation meeting completion. Radiating value from peace.", 66: "Unity waves prone to fatal errors. Guard your center to protect yourself.", 67: "Radiant expression achieving peace. Elevating soul's altitude through trials.", 68: "Fortress solidity and brilliant strategy. Building a lasting legacy.", 69: "Leader's fire but prone to standstill. Reinforce basic strength.", 70: "Deep faith but prone to emptiness. Gain honor through dedication.", 71: "Master's precision and strength. Enjoying stable wealth and expertise.", 72: "Strong drive but sharp fluctuations. Use wisdom to manage risks.", 73: "Pioneer fire closing cycles wisely. Proving high value through creation.", 74: "Pioneer fire lost in misery. Survival depends on the grit to find a path.", 75: "Universal harmony creating total peace. Success through cooperation.", 76: "Radiant expression prone to dispersion. Guard your center for growth.", 77: "Inner substance but turbulent fate. Reinforce base to prevent collapse.", 78: "Leader's fire with mixed outcomes. Maintain insight for prosperity.", 79: "Deep faith lost in the mist. Cultivate clear goals for honor.", 80: "Deep insight prone to seclusion. Restore connection with the world.", 81: "Ultimate bliss meeting completion. Reaching the peak as a beacon." };

const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a = (n - 1) % 9;
        const b = Math.floor((n - 1) / 9);
        out[n] = { 
            title: `${luckyTitles81[n]} · ${baseKo[a].key}(${stageKo[b]})`, 
            desc: `<b>[운명 격]</b> ${luckyTitles81[n]}<br><b>[상세 분석]</b> ${detailedDesc81[n]}`,
            titleEn: `${luckyTitles81En[n]} · ${baseEn[a].key}(${stageEn[b]})`,
            descEn: `<b>[Type]</b> ${luckyTitles81En[n]}<br><b>[Analysis]</b> ${detailedDesc81En[n]}`
        };
    }
    return out;
})();

const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const mods = ["고독하게 하늘을 읽는", "무너진 질서를 바로잡던", "금지된 진리를 탐구하던", "미학적 가치에 집착했던", "자유를 찾아 대륙을 유랑하던", "침묵 속에 칼날을 갈던", "치밀하게 왕국을 설계하던", "자비로운 마음으로 생명을 품던", "거친 파도를 잠재우던", "운명의 실타래를 풀던"];
    const jobs = ["천문 기록관", "대제국의 설계자", "비단길의 대상", "약초 치유사", "잊혀진 성의 파수꾼", "운명의 조율사", "고대의 서지학자", "영혼의 안무가", "강철의 연금술사", "심해의 항해사"];
    const descs = ["밤마다 망루에 올라 별의 변주를 기록했습니다.", "폐허 위에 황금비율의 도시를 설계했습니다.", "모래바람 속에서도 나침반을 놓지 않았습니다.", "풀꽃의 치유력을 믿으며 고통을 돌보았습니다.", "주인 없는 성을 지키며 신의를 다했습니다.", "사람들의 얽힌 인연을 실타래처럼 풀며 균형을 맞추었습니다.", "먼지 쌓인 고문서 속에서 잊혀진 지혜를 찾았습니다.", "몸짓 하나에 영혼의 울림을 담아 비를 내렸습니다.", "인간 내면을 정화하는 궁극의 공식을 평생 찾았습니다.", "아무도 가본 적 없는 심해의 심연을 탐험했습니다."];
    return { job: `${mods[i % mods.length]} ${jobs[i % jobs.length]}`, desc: descs[i % descs.length], homework: "지식을 자비로 바꾸는 법 배우기" };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const mods = ["A Solitary", "A Rigorous", "A Forbidden", "An Aesthetic", "A Wandering", "A Silent", "A Meticulous", "A Compassionate", "A Fearless", "A Mystic"];
    const jobs = ["Astronomer", "Empire Architect", "Silk Road Merchant", "Herbal Healer", "Ruins Sentinel", "Fate Arbiter", "Ancient Librarian", "Soul Choreographer", "Steel Alchemist", "Deep Sea Navigator"];
    const descs = ["You recorded star trajectories from a lonely tower.", "You designed cities of golden ratios on ruins.", "You never lost the compass in sandstorms.", "You cared for the suffering with wildflowers.", "You guarded a masterless castle with loyalty.", "You balanced the world by unraveling threads of fate.", "You found forgotten wisdom in dusty scrolls.", "You poured soul resonance into every gesture.", "You sought the formula to purify the human heart.", "You explored the abyss, filling the gaps in the world map."];
    return { job: `${mods[i % mods.length]} ${jobs[i % jobs.length]}`, desc: descs[i % descs.length], homework: "Turning knowledge into compassion." };
});

/* [5. 내세 데이터: 1:1 완벽 대응 버전] */
const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const places = ["수정 도서관", "에테르 데이터 센터", "비의 정원", "바람의 고원", "고요한 사찰", "빛의 연산소", "산호 초원", "구름 위의 섬", "철학자의 숲", "창조의 광장", "영원의 해변", "안개의 도시", "무지개 폭포", "별의 요람", "지혜의 탑", "시간의 회랑", "은하수의 끝", "새벽의 숲", "거울의 호수", "황금 사막", "천상의 정원"];
    const jobs = ["지혜를 분류하는 수호자", "백색 왜성의 정원사", "차원의 균형을 맞추는 조율사", "빛의 파동을 기록하는 자", "영혼의 궤적을 그리는 화가", "에너지를 정화하는 연금술사", "시간의 흐름을 지키는 파수꾼", "기억의 조각을 모으는 수집가", "진리를 노래하는 전령사", "생명의 코드를 설계하는 공학자", "꿈의 경계를 지키는 안내자", "평화의 파동을 송출하는 안테나", "우주의 질서를 세우는 설계자", "진화의 방향을 결정하는 관찰자", "감정의 입자를 조절하는 조율사"];
    const descs = ["우주 탄생의 비밀부터 모든 기록을 지키며 지혜를 전달합니다.", "죽어가는 별에 에테르 꽃을 피워 새로운 생태계를 심습니다.", "뒤엉킨 시공간을 정렬하고 우주의 붕괴를 막는 임무를 수행합니다.", "모든 빛의 스펙트럼을 분석하여 문명의 데이터를 보존합니다.", "성운의 가루를 물감 삼아 새로운 은하의 밑그림을 그립니다.", "오염된 에너지를 정제하여 우주의 수명을 연장하는 연금술을 펼칩니다.", "역사의 왜곡을 감시하며 운명의 흐름이 올바르게 흐르도록 합니다.", "사라져가는 별들의 기억 조각들을 모아 도서관에 아카이빙합니다.", "진리의 공명음을 노래로 만들어 영적 각성을 촉구합니다.", "영혼의 프로그래밍 언어를 다루며 생명의 최적 설계를 구축합니다.", "무의식의 경계에서 길 잃은 영혼들이 환생하도록 안내합니다.", "평화의 주파수를 증폭시켜 차원 간의 갈등을 해소합니다.", "성단의 중력과 궤도를 계산하여 새로운 태양계의 기반을 닦습니다.", "종의 탄생과 멸종을 지켜보며 우주의 진화를 기록하고 판단합니다.", "고통의 입자를 중화시키고 기쁨과 평온의 입자로 변환하여 풍요를 돕습니다."];
    const missions = ["멸망해가는 행성의 고대 언어를 해석하여 보존하십시오.", "메마른 은하계에 생명수를 뿌려 씨앗을 깨우십시오.", "방황하는 영혼들에게 보이지 않는 빛의 길을 안내하십시오.", "평화의 파동을 전 우주에 송출하여 충돌을 방지하십시오.", "미래 세대가 사용할 새로운 에너지원을 연산하십시오.", "심해 속 고대 지혜의 파편을 찾아 현재와 연결하십시오.", "우주 역사의 왜곡을 감시하고 인과율을 되돌리십시오.", "잊혀진 근원적 질문들에 대한 해답을 탐험하십시오.", "예술과 기술이 융합된 새로운 유토피아를 설계하십시오.", "시공간의 저울을 평형 상태로 유지하여 붕괴를 막으십시오.", "지성체들이 영적 안식을 취할 수 있는 쉼터를 지으십시오.", "작고 소중한 생명의 목소리를 하나도 빠짐없이 기록하십시오.", "길 잃은 어린 별들을 안전한 궤도로 인도하십시오.", "사랑과 신뢰를 바탕으로 한 새로운 질서의 기둥을 세우십시오.", "잠들어 있던 거대 지혜를 깨워 갈등을 종식시키십시오.", "오염된 에너지를 정제하여 우주의 순수성을 수호하십시오.", "손상된 기억 데이터를 복구하여 사라진 역사를 재건하십시오.", "행성 간 마찰을 조율하여 평화 조약을 체결하십시오.", "영혼들이 다시 태어날 용기를 얻도록 성소를 관리하십시오.", "차원 이동의 경계선을 순찰하며 운명의 간섭을 차단하십시오.", "진화의 임계점에 도달한 문명에 지혜의 징표를 남기십시오.", "성운의 먼지를 모아 새로운 태양 탄생의 환경을 조성하십시오.", "우주의 모든 감정 입자를 분석하여 슬픔을 치유하십시오.", "환생 시스템의 효율성을 극대화하는 코드를 작성하십시오.", "우주 전체의 공명 주파수를 조정하여 조화로운 시대를 여십시오.", "시간 속 비밀 통로를 찾아 미래의 위협을 방지하십시오.", "스스로 빛을 내지 못하는 행성들에 지혜의 불꽃을 전하십시오."];
    return { place: places[i % places.length], job: jobs[i % jobs.length], desc: descs[i % descs.length], mission: missions[i % missions.length] };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const places = ["Crystal Library", "Ether Data Center", "Garden of Rain", "Wind Plateau", "Silent Temple", "Lab of Light", "Coral Meadow", "Cloud Island", "Philosopher's Forest", "Creation Square", "Eternal Beach", "Mist City", "Rainbow Fall", "Star Cradle", "Tower of Wisdom", "Corridor of Time", "Galaxy's End", "Forest of Dawn", "Mirror Lake", "Golden Desert", "Celestial Garden"];
    const jobs = ["Wisdom Guardian", "Star Gardener", "Dimensional Balancer", "Vibration Recorder", "Soul Trajectory Painter", "Energy Alchemist", "Timeline Sentinel", "Memory Collector", "Truth Herald", "Life Engineer", "Dream Guide", "Peace Antenna", "Order Architect", "Evolution Observer", "Emotion Tuner"];
    const descs = ["Protects cosmic records and transfers essential wisdom.", "Cultivates ether flowers on cooling stars for new life.", "Aligns multi-dimensional spacetimes to prevent collapse.", "Analyzes light spectrums to record the rise of civilizations.", "Visualizes inspiration by sketching galaxies in the sky.", "Purifies dimensional energy to extend the cosmic lifespan.", "Monitors cracks in time to guide the flow of destiny.", "Archives the final memory fragments of fading stars.", "Promotes spiritual awakening via resonance frequencies.", "Builds optimal designs for life using soul programming.", "Guides lost souls toward the correct gate of rebirth.", "Resolves dimensional conflicts by amplifying peace.", "Calculates orbits for the stability of new solar systems.", "Observes species evolution and judges the process.", "Neutralizes pain particles and converts them into joy."];
    const missions = ["Decode ancient languages of dying planets.", "Sprinkle life water on barren galaxies.", "Guide lost souls toward the path of light.", "Broadcast peace waves to prevent conflicts.", "Calculate new energy sources for the future.", "Find ancient fragments in the deep sea.", "Monitor cosmic history distortions.", "Explore dimensional edges for primal answers.", "Design a utopia merging art and high-tech.", "Maintain the balance of spacetime scales.", "Build 4th-dimensional spiritual sanctuaries.", "Record every small and precious voice of life.", "Guide young stars lost in the dark back to orbit.", "Build pillars of new order based on love.", "Wake the ancient wisdom to end ignorance.", "Purify polluted energy from other dimensions.", "Reconstruct lost history via memory data.", "Harmonize planetary frictions via peace treaties.", "Manage healing sanctuaries for rebirth courage.", "Patrol borders to block unauthorized interference.", "Leave tokens of wisdom for evolving civilizations.", "Collect nebula dust for new suns to be born.", "Analyze emotional particles to heal sorrow.", "Write code to maximize reincarnation efficiency.", "Fine-tune the resonance frequencies of space.", "Find hidden passages in time to prevent threats.", "Deliver the flame of wisdom to dark planets."];
    return { place: places[i % places.length], job: jobs[i % jobs.length], desc: descs[i % descs.length], mission: missions[i % missions.length] };
});

/* [6. 정밀 처방전 & 헬퍼 함수] */
const suriPrescription = {
    getRemedy: (num, lackEls, lang) => {
        const safeLang = lang || 'ko';
        
        // 1. 부족 기운이 1개만 들어올 경우를 대비해 2개를 확보합니다.
        const safeLacks = (Array.isArray(lackEls) && lackEls.length >= 1) 
            ? (lackEls.length === 1 ? [lackEls[0], lackEls[0]] : lackEls) 
            : ["木", "火"];

        // 2. 각 오행 데이터의 시작 인덱스 (기운당 3개씩)
        const elIdx = { "木": 0, "火": 3, "土": 6, "金": 9, "水": 12 };

        const data = {
            ko: {
                actions: ["과감한 실행(木)", "추진력 강화(木)", "새로운 도전(木)", "창의적 발상(火)", "에너지 발산(火)", "소통 확대(火)", "중재와 화합(土)", "기반 축적(土)", "공간 정돈(土)", "독립적 결단(金)", "예리한 분석(金)", "원칙 준수(金)", "유연한 사고(水)", "지혜 습득(水)", "심연의 명상(水)"],
                socials: ["기본격(木)", "도약격(木)", "발전격(木)", "복덕격(火)", "공명격(火)", "성공격(火)", "계승격(土)", "통솔격(土)", "덕망격(土)", "강건격(金)", "수전격(金)", "건창격(金)", "신성격(水)", "지혜격(수)", "순풍격(水)"],
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

        // 3. 인덱스 계산 함수 (중요: 괄호 닫기 해결)
        const getIdx = (el, offset) => {
            const base = elIdx[el] !== undefined ? elIdx[el] : 0;
            return (base + ((num + offset) % 3));
        }; // <-- 이 닫는 괄호가 빠져있었습니다!

        const idx1 = getIdx(safeLacks[0], 0);
        const idx2 = getIdx(safeLacks[1], 1);

        // 4. 두 기운의 처방을 합치는 함수
        const combine = (arr, i1, i2) => {
            if (i1 === i2) return arr[i1];
            return `${arr[i1]}<br>${arr[i2]}`;
        };

        return {
            color: combine(d.colors, idx1, idx2),
            action: combine(d.actions, idx1, idx2),
            social: combine(d.socials, idx1, idx2),
            food: combine(d.foods, idx1, idx2)
        };
    }
};

function generateSuriName(num, s1, s2) {
    return s1[num % s1.length] + s2[(num + 7) % s2.length];
}
/* [이름 생성 로직 업그레이드] */
function makePastNameKo(num, strong, lack, month) {
    const era = eraPastKo[num % eraPastKo.length];
    const region = regionPastKo[(num + month) % regionPastKo.length];
    const name = generateSuriName(num, syllableKo1, syllableKo2);
    return `${name} (${era} ${region})`;
}

function makePastNameEn(num, strong, lack, month) {
    const era = eraPastEn[num % eraPastEn.length];
    const region = regionPastEn[(num + month) % regionPastEn.length];
    const name = nameRootEn[num % nameRootEn.length] + nameTailEn[(num + 5) % nameTailEn.length];
    return `${name} (${era}, ${region} region)`;
}

function makeNextLifeNameKo(num, strong, lack, month) {
    const era = eraNext[num % eraNext.length];
    const region = regionNext[(num + month) % regionNext.length];
    const name = generateSuriName(num + 10, syllableKo1, syllableKo2);
    return `${name} (${era} ${region})`;
}

function makeNextLifeNameEn(num, strong, lack, month) {
    const era = eraNext[num % eraNext.length];
    const region = regionNext[(num + month) % regionNext.length];
    const name = nameRootEn[(num + 20) % nameRootEn.length] + nameTailEn[(num + 25) % nameTailEn.length];
    return `${name} (${era}, ${region})`;
}
