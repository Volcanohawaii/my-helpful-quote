/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 1. i18n 라벨 업데이트 (전생/내세 활동 중심지 항목 추가)
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
        pastDest: "전생 활동 중심지", // 추가
        pastJob: "전생의 에너지 역할", 
        pastHomework: "영혼의 과업", 
        nextDest: "내세 활동 중심지", 
        nextObj: "내세의 에너지 역할", 
        nextMission: "핵심 미션"
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
        pastDest: "Activity Center", 
        pastJob: "Karmic Role", 
        pastHomework: "Homework", 
        nextDest: "Future Domain", 
        nextObj: "Future Occupation", 
        nextMission: "Core Mission"
    }
};
/* [필수 데이터: 영문 성함 재료] */
const nameRootEn = ["Al", "Be", "Ro", "Lu", "Ma", "E", "I", "Ka", "Kh", "Ph", "Ri", "Ni", "San", "Ben", "Pha", "Di", "Le", "Mi", "Nel", "Bel", "An", "El", "O", "U", "Cl", "Fl", "Br", "Te", "St", "Ke", "Me", "Jo", "Je", "Ca", "Pi", "Ba", "Sha", "Ta", "Na", "Whi", "Lin", "Ky", "Da", "On", "Yu", "Jun", "Yun", "Sul", "Ye", "Jin", "Hye"];
const nameTailEn = ["to", "ra", "na", "a", "ri", "el", "on", "ro", "s", "nel", "d", "k", "te", "sha", "lu", "ni", "bel", "run", "in", "um", "tis", "ti", "na", "sia", "an", "더", "ell", "en", "i", "o", "a", "ta", "카", "de", "le", "mi", "pi", "st", "tr", "반", "sen", "kan", "yan", "lin", "ron", "rill", "lan", "le", "ra", "na", "no"];

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

/* [1] 글로벌 감성 음절 (알베르토, 루시아 등 외국인 느낌 한글이름) */
const syllableKo1 = ["알", "베", "로", "루", "마", "에", "이", "카", "크", "프", "리", "니", "산", "벤", "파", "디", "레", "미", "넬", "벨", "아", "안", "엘", "오", "우", "클", "플", "브", "테", "스", "켈", "멜", "조", "제", "카", "피", "바", "샤", "타", "나", "휘", "린", "겸", "담", "온", "율", "준", "윤", "설", "예", "진", "현", "헤", "메", "세", "데", "게", "베", "페", "체", "제", "레", "네", "솔", "별", "얀", "실", "데", "모", "자", "바", "티", "피"];
const syllableKo2 = ["토", "라", "나", "아", "리", "엘", "온", "로", "스", "넬", "드", "크", "테", "샤", "루", "니", "벨", "룬", "인", "움", "리스", "티", "나", "시아", "안", "더", "엘", "엔", "이", "오", "아", "타", "카", "데", "레", "미", "피", "스", "트", "넬", "반", "센", "칸", "얀", "린", "론", "릴", "란", "레", "라", "나", "노", "네", "니", "누", "우", "재", "준", "솔", "아", "늘", "담", "린", "온", "율", "호", "스", "타", "포", "노", "뮤", "주"];

/* [2] 시대 및 지역 데이터 대확장 (전생: 역사 / 내세: 미래) */
const eraPastKo = ["로마 제국", "고대 이집트", "중국 송나라", "에도 막부 시대", "아즈텍 제국", "바이킹 시대", "르네상스 이탈리아", "메소포타미아", "고대 그리스", "대한제국기", "고려 왕조", "조선 시대", "마야 문명", "페르시아 제국", "잉카 제국", "비잔티움 제국", "중세 프랑스", "고대 인도", "고대 수메르", "북유럽 신화 시대"];
const regionPastKo = ["콜로세움 인근", "나일강 하류", "낙양 성내", "교토 인근 마을", "테노치티틀란", "스칸디나비아 해안", "피렌체 광장", "바빌론 정원", "아테네 광장", "한양 육조거리", "개경 저잣거리", "서라벌 중심지", "유카탄 반도 정글", "페르세폴리스", "마추픽추 인근", "콘스탄티노플", "파리 센강변", "갠지스 강가", "우루크 신전", "피오르드 해안"];

const eraPastEn = ["Roman Empire", "Ancient Egypt", "Mesopotamia", "Aztec Empire", "Viking Age", "Renaissance Italy", "Ancient Greece", "Chosun Dynasty", "Mayan Civilization", "Persian Empire", "Industrial Revolution", "Byzantine Empire", "Medieval France", "Ancient India"];
const regionPastEn = ["near Colosseum", "lower Nile", "Babylon", "Tenochtitlan", "Scandinavia", "Florence", "Acropolis", "Yucatan", "Hanyang", "Persepolis", "Paris", "Varanasi"];

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

/* [월간 데이터 - 운명 서사 확장판] */
const birthMonthData = {
    1: { 
        ko: "맹추위를 뚫고 솟아오르는 '동토의 생명력'을 가졌습니다. 겉으로는 고요하고 차가워 보일 수 있으나, 내면에는 가장 뜨거운 생존 의지가 용트림하고 있습니다. 어떤 역경 속에서도 결국 스스로의 길을 열어젖히는 강인한 개척자의 기운입니다.", 
        en: "You possess the 'Vitality of Frozen Earth' that pierces through deep winter. While appearing calm and cold on the outside, a powerful will to survive stirs within. It is the energy of a resilient pioneer who eventually carves out their own path against all odds." 
    },
    2: { 
        ko: "만물이 기지개를 켜는 '초봄의 유연함'을 품고 있습니다. 딱딱한 대지를 뚫고 나오는 새순처럼, 주변 환경에 부드럽게 적응하면서도 자신의 존재감을 확실히 드러냅니다. 변화를 두려워하지 않는 호기심과 무한한 잠재력이 당신의 무기입니다.", 
        en: "You embody the 'Flexibility of Early Spring' as all things awaken. Like a sprout breaking through hard ground, you adapt gently to your surroundings while establishing a clear presence. Your curiosity and boundless potential are your greatest strengths." 
    },
    3: { 
        ko: "대지를 적시는 봄비와 같은 '성장의 자양분'을 타고났습니다. 스스로 빛나기보다 타인과 세상을 성장시키는 데 탁월한 능력을 발휘하며, 그 과정에서 본인의 가치 또한 거대하게 확장됩니다. 생명력 넘치는 추진력으로 만물의 흐름을 주도하는 기운입니다.", 
        en: "You were born with the 'Nutrient of Growth,' much like spring rain soaking the earth. You excel at nurturing others and the world, and in that process, your own value expands immensely. You possess the energy to lead the flow of existence with vibrant momentum." 
    },
    4: { 
        ko: "화려하게 피어나는 '만개의 에너지'를 지녔습니다. 인생의 가장 찬란한 순간을 포착하고 표현하는 능력이 뛰어나며, 사람들의 시선을 사로잡는 선천적인 매력을 가졌습니다. 당신이 머무는 곳은 언제나 활기가 넘치고 새로운 가능성이 꽃피우게 됩니다.", 
        en: "You carry the 'Energy of Full Bloom' radiating brilliance. You have an exceptional ability to capture and express life's most radiant moments, possessing an innate charm that draws people in. Wherever you go, vitality overflows and new possibilities begin to flower." 
    },
    5: { 
        ko: "뜨거운 태양 아래 무르익는 '초여름의 열정'이 가득합니다. 이상향을 향한 추진력이 남다르며, 목표가 정해지면 뒤를 돌아보지 않고 전진하는 불꽃 같은 기질을 가졌습니다. 당신의 야망은 주변을 전염시키며 거대한 변화의 파동을 만들어냅니다.", 
        en: "You are filled with the 'Passion of Early Summer' ripening under the sun. Your drive toward your ideals is extraordinary, and once a goal is set, you advance with a fiery spirit. Your ambition is contagious, creating vast waves of transformation." 
    },
    6: { 
        ko: "만물을 성장시키는 '풍요의 절정'에 서 있는 기운입니다. 에너지의 밀도가 가장 높은 시기에 태어나, 어떤 일을 하든 그 결과물의 완성도가 매우 높습니다. 세상을 따뜻하게 품는 포용력과 체계적으로 질서를 세우는 통찰력을 동시에 갖췄습니다.", 
        en: "You stand at the 'Peak of Abundance' fueling the growth of all things. Born when energy is at its highest density, you achieve a remarkable level of completion in everything you do. You possess both the warmth to embrace the world and the insight to establish order." 
    },
    7: { 
        ko: "단단하게 굳어가는 '열매의 견고함'을 지닌 명식입니다. 화려한 겉모습보다는 실질적인 가치와 내실을 중시하며, 세월이 흐를수록 깊어지는 지혜를 가졌습니다. 어떠한 흔들림에도 흔들리지 않는 내면의 중심을 지탱하며 성과를 완성해가는 기운입니다.", 
        en: "You possess the 'Firmness of Fruit' as it hardens with substance. You value practical worth and inner strength over flashy appearances, gaining wisdom that deepens over time. Your energy allows you to complete achievements while maintaining an unshakable inner center." 
    },
    8: { 
        ko: "황금빛 들판을 완성하는 '결실의 파동'이 흐릅니다. 노력에 대한 정당한 보상을 끌어당기는 힘이 강하며, 복잡한 상황 속에서도 핵심을 찾아내 결론을 짓는 능력이 탁월합니다. 수확의 기쁨을 주변과 나눌 줄 아는 고귀한 리더십의 소유자입니다.", 
        en: "The 'Vibration of Harvest' flows through you, completing golden fields. You have a strong power to attract rightful rewards for your efforts and excel at finding the core of complex situations to bring them to a conclusion. You possess a noble leadership that shares the joy of harvest." 
    },
    9: { 
        ko: "서리발처럼 날카로운 '숙살(肅殺)의 기운'을 품고 있습니다. 불필요한 것을 쳐내고 본질만을 남기는 단호함과 냉철한 분석력이 당신의 천성입니다. 정의롭지 못한 것에 타협하지 않으며, 혼란스러운 세상 속에서 명확한 질서를 세우는 심판자의 기운입니다.", 
        en: "You harbor the 'Energy of Frosty Resolution' as sharp as a blade. Your nature is defined by the decisiveness and cold analytical power to cut away the unnecessary and leave only the essence. You never compromise with injustice, acting as a judge who establishes clear order in a chaotic world." 
    },
    10: { 
        ko: "만물이 저장되는 '창고의 지혜'를 지닌 기운입니다. 방대한 지식과 경험을 자신의 것으로 소화하여 내면의 자산으로 만드는 능력이 뛰어납니다. 겉으로 드러내지 않아도 깊이 있는 통찰을 지녔으며, 위기의 순간에 가장 결정적인 해답을 제시하는 인물입니다.", 
        en: "You possess the 'Wisdom of Storage' where all things are gathered. You excel at digesting vast knowledge and experience, turning them into your own internal assets. Even when quiet, your insight is deep, and you are the one to provide the most decisive answers in times of crisis." 
    },
    11: { 
        ko: "어둠 속에서 빛을 기다리는 '근원의 지혜'를 타고났습니다. 보이지 않는 가치를 탐구하고 인간의 심연을 이해하는 능력이 탁월합니다. 고독을 두려워하지 않고 사색을 통해 진리를 찾아내며, 세상에 새로운 영감의 불씨를 던지는 철학적인 기운입니다.", 
        en: "You were born with 'Primal Wisdom' waiting for light in the dark. You excel at exploring invisible values and understanding the depths of the human psyche. Unafraid of solitude, you find truth through contemplation and cast sparks of new inspiration upon the world." 
    },
    12: { 
        ko: "새로움을 준비하는 '침묵의 힘'이 서려 있습니다. 한 사이클의 마무리를 상징하며, 정화를 통해 과거를 정리하고 다음 차원으로 넘어가는 지혜를 상징합니다. 고요함 속에 가장 거대한 폭발력을 숨기고 있는, 만물의 끝이자 시작을 담당하는 신비로운 기운입니다.", 
        en: "The 'Power of Silence' preparing for rebirth resides within you. Representing the conclusion of a cycle, you symbolize the wisdom of clearing the past through purification to leap into the next dimension. Yours is a mysterious energy that hides the greatest explosive potential within stillness—the end and the beginning of all things." 
    }
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
    1: "<b>[태초의 개척]</b> 강한 목(木)의 추진력이 집중되어 스스로 길을 여는 독립심이 강점입니다. 다만 수(水)의 유연함이 부족해 독단에 빠져 고립될 리스크가 있으니 주변 조언을 수용하는 포용력을 기르십시오.",
    2: "<b>[분리의 적응]</b> 목(木)의 기운이 흩어져 환경 변화에 민감한 적응력이 좋습니다. 하지만 토(土)의 응집력이 약해 마무리가 흔들릴 수 있으니, 변치 않는 루틴을 통해 기초 지지대를 확보하는 것이 필수입니다.",
    3: "<b>[희망의 발복]</b> 화(火)의 기운이 상승하며 명예와 인기를 끌어당기는 발산력이 탁월합니다. 다만 금(金)의 결단력이 약해 허례허식에 에너지를 낭비할 수 있으니 실속을 챙기는 전문성을 강화하십시오.",
    4: "<b>[파괴적 변동]</b> 화(火)의 열기가 과열되어 혁신성이 좋으나, 수(水)의 냉정함이 부족해 감정 조절 실패로 위기를 자초할 수 있습니다. 급진적 변화보다는 점진적 안정을 목표로 에너지 소모를 제어하십시오.",
    5: "<b>[중용의 풍요]</b> 토(土)의 기운이 중심을 잡아 인덕과 재복이 안정적입니다. 안정감은 좋으나 목(木)의 개척 정신이 상대적으로 약해 정체될 우려가 있으니 꾸준한 자기 혁신으로 운을 갱신하십시오.",
    6: "<b>[신뢰의 계승]</b> 토(土)의 포용력이 강해 주변의 신뢰를 얻고 자산을 지킵니다. 반면 화(火)의 순발력이 약해 보수적인 판단으로 기회를 놓칠 수 있으니 현대적 트렌드를 적극 수용하는 자세가 필요합니다.",
    7: "<b>[강직한 성취]</b> 금(金)의 날카로움이 집중되어 결단력이 독보적입니다. 그러나 목(木)의 유연함이 부족해 인간관계가 차가워질 리스크가 있으니 부드러운 대화 기법을 전략적으로 연마하십시오.",
    8: "<b>[견고한 축적]</b> 금(金)의 기운이 내실을 다져 자산 형성에 탁월합니다. 다만 수(水)의 소통 에너지가 약해 고집스러운 이미지를 줄 수 있으니 효율성만큼 정서적 교류를 중요 지표로 관리하십시오.",
    9: "<b>[직관적 공허]</b> 수(水)의 기운이 깊어 지능이 비상합니다. 하지만 화(火)의 현실적 열정이 부족해 고독감에 빠지거나 현실 도피를 할 우려가 있으니 실체화해 줄 현실적 파트너를 확보하십시오.",
    10: "<b>[만물의 수용]</b> 수(水)의 포용력이 극대화되어 지식을 빠르게 흡수합니다. 반면 토(土)의 중심축이 약해 에너지가 공허하게 흩어질 수 있으니 매일 한 가지 목표에만 집중하는 원칙을 고수하십시오.",
    11: "<b>[부흥의 새순]</b> 목(木)의 생명력이 재생되어 침체된 환경을 살리는 활력이 강점입니다. 다만 초기 성공 후 화(火)의 절제력이 약하면 자만심이 운을 꺾을 수 있으니 성취 후의 겸손을 데이터화하십시오.",
    12: "<b>[고립된 재능]</b> 목(木)의 기운이 위축되어 내적인 사고는 깊으나 금(金)의 결단이 약합니다. 기회를 잡는 힘이 부족해 이용당할 리스크가 있으니 자신만의 명확한 경계선을 설계하십시오.",
    13: "<b>[지혜의 달변]</b> 화(火)의 기운이 지성으로 변모하여 언변이 뛰어납니다. 단점은 수(水)의 깊이가 얕아 가벼워 보일 수 있으니 경청을 통해 신뢰를 쌓는 침묵의 기술을 익히는 것이 좋습니다.",
    14: "<b>[이면의 투시]</b> 화(火)의 열기가 분석으로 치우쳐 이면을 잘 보지만, 토(土)의 완충지대가 부족해 스스로 스트레스를 자초합니다. 명상과 규칙적 수면으로 뇌 에너지를 주기적으로 리셋하십시오.",
    15: "<b>[덕망의 포용]</b> 토(土)의 조화가 인덕으로 발현되어 만인을 이끕니다. 다만 목(木)의 공격성이 없어 우유부단해 보일 수 있으니 결정적 순간에는 카리스마 넘치는 단호함을 보여주십시오.",
    16: "<b>[자비의 재복]</b> 토(土)의 기운이 풍요를 불러와 재물이 스스로 쌓입니다. 반면 금(金)의 냉철함이 부족해 거절을 못 하고 손해를 보는 약점이 있으니 공과 사의 경계선을 명확히 설계하십시오.",
    17: "<b>[강직한 돌파]</b> 금(金)의 기운이 투지로 발현되어 고난을 정면 돌파합니다. 다만 목(木)의 유연함이 전혀 없어 부러지기 쉽습니다. 때로는 돌아가는 길이 지름길임을 인식하는 지혜가 필요합니다.",
    18: "<b>[의지의 완성]</b> 금(金)의 기운이 신념으로 굳어져 끈기가 강력합니다. 하지만 화(火)의 융통성이 부족해 고립된 전문가가 될 우려가 있으니 외부 전문가의 피드백을 데이터로 수용하십시오.",
    19: "<b>[예술적 고독]</b> 수(水)의 기운이 감성으로 흘러 천재성이 돋보입니다. 그러나 토(土)의 현실 지지대가 약해 경제 기반이 흔들리기 쉬우니 현실의 지지대를 구축한 뒤 창의성을 발휘하십시오.",
    20: "<b>[대양의 이상]</b> 수(水)의 기운이 바다처럼 넓어 포부가 원대합니다. 다만 목(木)의 실행 에너지가 결핍되어 계획에 비해 실천력이 떨어지기 쉬우니 거대한 목표를 100개의 할 일로 쪼개십시오.",
    21: "<b>[두령의 위엄]</b> 목(木)의 에너지가 산처럼 솟아 리더십이 타고났습니다. 단점은 금(金)의 지원 기운이 약해 독선적으로 보일 수 있으니 명령보다는 소통으로 팀을 이끄는 덕장이 되십시오.",
    22: "<b>[기교의 단절]</b> 목(木)의 기운이 꼬여 있어 재능은 좋으나 토(土)적 화합이 어렵습니다. 인간관계 마찰로 성과가 폄하될 수 있으니 입을 무겁게 하고 비밀을 지키는 것이 본인을 보호하는 길입니다.",
    23: "<b>[태양의 성취]</b> 화(火)의 열기가 정점에 달해 명성이 폭발합니다. 단점은 수(水)의 조절 장치가 약해 한순간의 실수로 명성을 태울 수 있으니 중요한 결정 전에는 24시간의 냉각기를 가지십시오.",
    24: "<b>[축재의 연금술]</b> 화(火)의 에너지가 이익으로 변환되어 재물 축적에 천부적입니다. 하지만 금(金)의 절제미가 부족하면 탐욕으로 비칠 수 있으니 일정 비율을 사회에 환원하여 부의 품격을 높이십시오.",
    25: "<b>[지략의 조화]</b> 토(土)의 중재 능력이 지략과 결합되어 위기를 넘깁니다. 다만 목(木)의 솔직함이 약해 신뢰를 잃기 쉬우니 상생의 공식을 먼저 제안하여 네트워크의 힘을 활용하십시오.",
    26: "<b>[영웅적 풍파]</b> 토(土)의 기운이 풍파를 겪으며 단단해집니다. 단점은 화(火)의 평온함이 결핍되어 스스로 고난을 자처하는 성향이 있으니 불필요한 투쟁을 피하고 에너지를 비축하십시오.",
    27: "<b>[냉철한 중단]</b> 금(金)의 기운이 비판으로 흘러 분석력은 최고입니다. 하지만 수(水)의 포용력이 약해 사람을 잃기 쉬우니 비판의 언어를 격려와 대안의 언어로 변환하는 연습을 하십시오.",
    28: "<b>[대범한 파란]</b> 금(金)의 기운이 팽창하여 사업적 담력이 좋습니다. 하지만 토(土)의 세밀한 관리가 부족해 한순간에 무너질 위험이 크니 꼼꼼한 실무 파트너를 통해 시스템의 구멍을 막으십시오.",
    29: "<b>[신망의 평온]</b> 수(水)의 기운이 지혜로 승화되어 안정을 거머쥡니다. 다만 목(木)의 도전 에너지가 약해져 성장이 멈출 수 있으니 새로운 트렌드를 배우는 러닝 머신이 되어 운을 젊게 유지하십시오.",
    30: "<b>[역전의 파동]</b> 수(水)의 기운이 요동치며 성패가 드라마틱합니다. 화(火)의 평정심이 결핍되어 감정 기복이 심하니 마음의 중심을 잡아줄 확고한 철학적 기반을 구축하십시오.",
    31: "<b>[자수성가]</b> 목(木)의 생명력이 인복과 만나 주변 도움으로 성공합니다. 단점은 수(水)의 주관이 약해지면 타인에게 휘둘릴 수 있으니 자신만의 독보적 실력을 확보한 뒤 시너지를 도모하십시오.",
    32: "<b>[순풍의 행운]</b> 목(木)의 기운이 소통으로 발현되어 재물이 따릅니다. 다만 금(金)의 성실함이 부족하면 행운을 실력으로 착각해 방만해질 수 있으니 행운이 왔을 때 더욱 치열하게 내실을 다지십시오.",
    33: "<b>[제왕의 위엄]</b> 화(火)의 에너지가 최정점에 달해 실현력이 무시무시합니다. 반면 수(水)의 겸손함이 약해 독선으로 고립될 위험이 크니 권력은 타인이 주는 것임을 명심하고 낮은 곳을 살피십시오.",
    34: "<b>[인내의 연단]</b> 화(火)의 기운이 시련으로 작용해 인내가 요구됩니다. 견디면 대기만성하나 토(土)의 긍정 에너지가 약하면 자포자기할 수 있으니 긍정적 확언으로 마음의 데이터를 관리하십시오.",
    35: "<b>[평화의 수호]</b> 토(土)의 기운이 온화해 주변을 편안하게 만듭니다. 안정감은 좋으나 화(火)의 개척력이 부족해 기회를 놓치는 소극성이 단점입니다. 가끔은 안전지대를 벗어나 파격적인 시도를 하십시오.",
    36: "<b>[의리의 협객]</b> 토(土)의 기운이 헌신으로 변모해 명예를 얻습니다. 다만 수(水)의 실속 에너지가 부족해 남만 돕다 손해를 봅니다. 자신의 성공이 곧 선행의 밑거름임을 깨닫고 기반을 먼저 다지십시오.",
    37: "<b>[장인의 전문성]</b> 금(金)의 기운이 집중되어 특정 분야의 권위자가 됩니다. 독립성은 좋으나 목(木)의 소통력이 약해 차가운 이미지를 주기 쉬우니 고차원 지식을 쉬운 언어로 대중과 공유하십시오.",
    38: "<b>[성취의 문학]</b> 금(金)의 예리함이 감성과 만나 성과를 냅니다. 단점은 화(火)의 결과 중심성이 너무 강해 절차적 정의를 놓치거나 건강을 해칠 수 있습니다. 과정의 공정성을 체크리스트로 관리하십시오.",
    39: "<b>[찬란한 영광]</b> 수(水)의 지혜가 완성에 달해 부귀와 명예가 따릅니다. 길한 수이나 토(土)의 경각심이 부족해지면 성공에 도취될 수 있으니 최고의 자리에 있을 때 최악의 시나리오를 대비하십시오.",
    40: "<b>[변동의 파란]</b> 수(水)의 요동이 심해 의지는 강하나 기반이 불안합니다. 화(火)의 중심 기운이 약해 투기적인 일로 공든 탑을 무너뜨릴 위험이 있으니 3년 이상의 장기 데이터를 보고 움직이십시오.",
    41: "<b>[통솔의 거물]</b> 목(木)의 통솔력이 인덕과 결합되어 조직을 이끕니다. 다만 금(金)의 자기 관리력이 약해지면 책임감에 짓눌려 건강을 잃을 수 있으니 일과 삶의 균형을 성공 지표에 포함하십시오.",
    42: "<b>[고행의 자력]</b> 목(木)의 기운이 억눌려 고생 끝에 자력으로 일어섭니다. 하지만 토(土)의 지지 기반이 약해 주변 도움 없이 외로운 싸움을 합니다. 실패를 학습 데이터로 정의하고 포기하지 마십시오.",
    43: "<b>[외화내빈]</b> 화(火)의 기운이 과시적으로 흘러 겉은 화려하나 실속이 부족합니다. 수(水)의 축적 에너지가 약해 경제 안정이 힘든 구조이니 보여지는 것보다 쌓이는 자산에 에너지를 할당하십시오.",
    44: "<b>[미궁의 혁신]</b> 화(火)의 에너지가 혼돈 속에 갇혀 고난이 많으나 극복 시 혁신가가 됩니다. 토(土)의 평정심이 결핍되어 멘탈이 쉽게 무너질 수 있으니 회복탄력성에 집중하여 터널을 지나십시오.",
    45: "<b>[통합의 대성]</b> 토(土)의 기운이 만물을 통합해 성공합니다. 장점은 두터운 신망이나 목(木)의 비판력이 부족해 잘못된 조언을 가려내지 못할 수 있습니다. 정직과 투명한 소통으로 권위를 공고히 하십시오.",
    46: "<b>[방황의 통찰]</b> 토(土)의 기운이 흔들려 통찰은 좋으나 실천이 약합니다. 금(金)의 응집력이 부족해 재능을 낭비할 수 있으니 스스로를 믿는 자기 신뢰를 회복하고 오직 한 가지 목표에 집중하십시오.",
    47: "<b>[대기만성]</b> 금(金)의 견고함이 인내로 승화되어 말년에 부를 쌓습니다. 단점은 화(火)의 발산력이 약해 젊은 시절 고생이 길고 냉소적으로 변할 수 있습니다. 현재의 걸음이 거대한 성의 기초임을 믿으십시오.",
    48: "<b>[현명한 조언]</b> 금(金)의 예리함이 덕망과 만나 지도자의 스승이 됩니다. 다만 수(水)의 유연함이 부족해 본인의 잣대를 강요하여 구설에 오를 수 있으니 조언은 요청받았을 때만 하고 평소엔 침묵하십시오.",
    49: "<b>[유연한 변신]</b> 수(水)의 기운이 변화에 특화되어 생존력이 좋습니다. 하지만 토(土)의 주관이 결핍되어 기회주의적 면모로 신의를 잃을 수 있으니 변하지 않는 당신만의 핵심 가치를 문서화하십시오.",
    50: "<b>[위험한 협력]</b> 수(水)의 기운이 도박사적 기질로 흘러 한탕주의에 빠집니다. 화(火)의 통제가 약해 배신당하거나 무리한 투자를 할 리스크가 크니 신뢰보다 정밀 데이터와 법적 계약을 우선하십시오.",
    51: "<b>[인생 사계]</b> 목(木)의 기운이 굴곡을 겪으며 성패가 빈번합니다. 경험은 풍부하나 금(金)의 유지가 약해 늘 새로 시작해야 할 수 있습니다. 변화 자체를 즐기는 유목민 마인드로 적응력을 키우십시오.",
    52: "<b>[준비된 도약]</b> 목(木)의 내실이 탄탄해 기회가 오면 대업을 이룹니다. 하지만 수(水)의 휴식이 부족해 건강을 돌보지 않다가 위기를 맞을 우려가 크니 건강 상태를 수치화하여 정기 점검하십시오.",
    53: "<b>[내실 부족]</b> 화(火)의 기운이 겉으로만 쏠려 화려한 인맥 속에 진심이 없습니다. 토(土)의 진중함이 부족해 사기꾼의 타겟이 되기 쉬우니 진솔한 소수의 인맥 구축에 더 많은 공을 들이십시오.",
    54: "<b>[고난의 신의]</b> 화(火)의 기운이 억눌려 책임감은 강하나 환경이 안 도와줍니다. 금(金)의 금전 운이 약해 무리한 확장은 절대 금물입니다. 기초를 다시 닦고 신의를 지키면 결국 반전의 조력자가 옵니다.",
    55: "<b>[겸손의 광채]</b> 토(土)의 기운이 지혜 속에 숨어 겸손할 때 큰 명예가 옵니다. 반면 목(木)의 과시욕이 고개를 들면 성취가 한순간에 무너질 수 있으니 겸손과 소박함을 전략적 브랜드로 삼으십시오.",
    56: "<b>[주저하는 재능]</b> 토(土)의 기운이 우유부단함으로 작용해 재능은 있으나 결정적 순간에 멈춥니다. 화(火)의 결단력이 부족해 조연에 그칠 수 있으니 완벽보다 빠른 실행을 우선하는 훈련을 하십시오.",
    57: "<b>[질서의 개척]</b> 금(金)의 기운이 새 질서를 세우는 데 최적화되어 고난 끝에 성공합니다. 하지만 수(水)의 포용력이 부족해 독단적 경영으로 반란을 초래할 수 있으니 성취 후 즉시 혁신 과제를 설정하십시오.",
    58: "<b>[축적의 미학]</b> 금(金)의 기운이 끈기로 발현되어 자수성가하나 목(木)의 베풂이 부족합니다. 인색하다는 평으로 노년에 고립될 수 있으니 자산을 사회적 영향력으로 변환하는 베풂의 지혜를 발휘하십시오.",
    59: "<b>[인내력 결핍]</b> 수(水)의 기운이 방랑으로 흘러 재주는 많으나 끈기가 없습니다. 토(土)의 지탱력이 부족해 유혹에 약하니 환경을 강제로 통제하는 루틴과 데드라인을 외부에서 수혈하십시오.",
    60: "<b>[관계의 파란]</b> 수(水)의 기운이 인간관계 요동으로 작용해 배신이 잦습니다. 화(火)의 안목이 부족해 남의 일에 참견하다 망할 수 있으니 사람 얻는 것을 가장 큰 자산 가치로 여기고 갈등 관리에 힘쓰십시오.",
    61: "<b>[현명한 수장]</b> 목(木)의 지혜가 완성되어 조직의 핵심이 됩니다. 단점은 금(金)의 냉정함이 부족해 정에 이끌려 공적인 일을 그르칠 수 있습니다. 말수를 줄이고 성과로만 말하여 침묵의 권위를 만드십시오.",
    62: "<b>[연단의 헌신]</b> 목(木)의 기운이 희생으로 작용해 남을 돕다 본인이 지칩니다. 토(土)의 자기방어가 약해 기반이 무너질 위험이 있으니 본인의 멘탈과 체력을 먼저 보호해야 이타적 가치도 완성됩니다.",
    63: "<b>[원만한 결실]</b> 화(火)의 기운이 노력과 만나 부귀영화를 누립니다. 단점은 수(水)의 경각심이 약해져 안일함에 빠지면 내부부터 무너질 수 있으니 항상 다음 목표를 설정하여 기운을 생생하게 유지하십시오.",
    64: "<b>[정체된 지혜]</b> 화(火)의 기운이 안개에 갇힌 형국이라 잠재력 발휘가 안 됩니다. 금(金)의 정리 능력이 부족해 주변이 늘 어수선하니 단순화 작업을 통해 도약의 에너지를 모으는 데 집중하십시오.",
    65: "<b>[평온의 영광]</b> 토(土)의 기운이 완성되어 명예를 얻습니다. 가장 무서운 적은 목(木)의 오만함입니다. 높은 자리에 올랐을 때 아랫사람을 무시하면 한순간에 추락하니 항상 낮은 곳에 임하십시오.",
    66: "<b>[위태로운 신용]</b> 토(土)의 기운이 흔들려 사람을 잘못 믿어 신용이 추락합니다. 수(水)의 유연함이 독이 되어 무리한 부탁을 들어주다 망할 수 있으니 금전 관계에서는 냉정할 정도로 원칙을 지키십시오.",
    67: "<b>[예술적 통솔]</b> 금(金)의 섬세함이 리더십과 만나 독창적 조직을 이끕니다. 단점은 화(火)의 사교 에너지가 부족해 속마음을 안 드러내 고립되기 쉬우니 감정을 공유할 소수의 진실한 인연을 관리하십시오.",
    68: "<b>[창업의 지략]</b> 금(金)의 기운이 전략으로 승화되어 무너지지 않는 시스템을 구축합니다. 다만 목(木)의 인간미가 부족해 주변을 숨 막히게 할 수 있으니 가끔은 허허실실의 여유를 보여 사람을 얻으십시오.",
    69: "<b>[불안한 리더]</b> 수(水)의 기운이 불안정해 꿈은 크나 실행 데이터가 부족합니다. 토(土)의 지지력이 없어 조급함으로 무리수를 두다 패망하기 쉬우니 다시 기초 실력을 닦아 위기를 대비하십시오.",
    70: "<b>[공허한 헌신]</b> 수(水)의 기운이 멸절로 흘러 일해도 보상이 없습니다. 화(火)의 밝은 기운이 결핍되어 목적을 잃고 방황하기 쉬우니 물질보다 정신적 봉사나 공익적 가치에서 본인의 의미를 재정립하십시오.",
    71: "<b>[완벽한 내실]</b> 목(木)의 기운이 전문성으로 응집되어 부와 명예를 누립니다. 단점은 금(金)의 융통성이 결여되어 자기 기준에 안 맞는 사람을 배척해 적을 만드니 항상 타인의 고충을 살피는 덕을 쌓으십시오.",
    72: "<b>[요동치는 열정]</b> 목(木)의 기운이 과열되어 추진력은 좋으나 성패 기복이 심합니다. 수(水)의 리스크 관리가 안 되어 감정적 투자로 손실을 보기 쉬우니 모든 결정을 데이터와 숫자에 근거하여 내리십시오.",
    73: "<b>[질서의 마무리]</b> 화(火)의 기운이 지혜롭게 마감되어 새 시대를 엽니다. 단점은 토(土)의 현실 안주 기운이 강해지면 과거 영광에 사로잡혀 미래를 놓칠 수 있으니 오늘의 성공은 어제의 데이터임을 믿고 전진하십시오.",
    74: "<b>[불우한 인내]</b> 화(火)의 에너지가 고난으로 작용해 만사가 안 풀립니다. 목(木)의 희망 에너지가 고갈되면 비관적 선택을 할 수 있으니 시련을 필수 학습 과정으로 여기고 강인함을 기르십시오.",
    75: "<b>[균형의 통치]</b> 토(土)의 기운이 완벽한 중용을 지켜 안정을 창출합니다. 단점은 금(金)의 결단력이 부족해 결정적 타이밍을 놓칠 리스크가 있습니다. 평소엔 부드럽되 위기 시에는 단호한 결단을 내리십시오.",
    76: "<b>[에너지 분산]</b> 토(土)의 기운이 흩어져 실속 없이 에너지가 샙니다. 수(水)의 응집력이 결여되어 밑 빠진 독에 물 붓기 식의 삶이 될 수 있으니 가장 신뢰할 소수에게 집중하고 내실을 먼저 다지십시오.",
    77: "<b>[원칙의 투쟁]</b> 금(金)의 기운이 고집으로 발현되어 외부와 충돌합니다. 장점은 확고한 철학이나 목(木)의 조화 기운이 약해 평생 투쟁해야 하는 피로감이 있으니 자신만의 확고한 철학을 고수하되 유연함을 섞으십시오.",
    78: "<b>[유비무환]</b> 금(金)의 기운이 조심성으로 흘러 초반은 좋으나 후반을 대비해야 합니다. 화(火)의 낙천적 에너지가 부족해 늘 걱정하며 과감한 도전을 못 하니 잘 나갈 때 창고를 채우고 리스크 지표를 점검하십시오.",
    79: "<b>[은둔의 지혜]</b> 수(水)의 깊은 지혜가 안개 속에 있어 인정을 늦게 받습니다. 토(토)의 자기 PR 기운이 약해 실력은 좋으나 알아주는 이가 없어 고독할 수 있으니 명확한 비전을 수립하고 묵묵히 정진하십시오.",
    80: "<b>[종말의 성찰]</b> 수(水)의 기운이 끝에 닿아 정신적 고결함은 높으나 세속 운이 약합니다. 화(火)의 생기가 부족해 현실과 괴리된 삶을 살기 쉬우니 깨달은 지혜를 필요로 하는 이들을 위해 세상과 연결되십시오.",
    81: "<b>[환희의 순환]</b> 모든 오행이 조화를 이루어 사이클을 마감하고 새로 시작합니다. 가장 완벽한 길수이나 자만심(木)이 고개를 들면 고난으로 회귀하니 받은 복을 세상에 환원하는 순환의 삶을 사십시오."
};

const detailedDesc81En = {
    1: "<b>[Primordial Pioneer]</b> Strong Wood drive fuels unrivaled independence. Lack of Water’s flexibility risks isolation. Success is completed when you learn to embrace supporting data from others.",
    2: "<b>[Adaptive Flux]</b> Dispersed Wood energy allows fast environmental sensing. Weak Earth cohesion may lead to unfinished projects. Secure your foundation through consistent, unshakeable routines.",
    3: "<b>[Radiant Rise]</b> Rising Fire energy attracts fame and status. Weak Metal decisiveness risks wasting resources on superficial appearances. Prioritize internal expertise over external brilliance.",
    4: "<b>[Radical Shift]</b> High Fire intensity drives innovation but lacks Water’s calm, risking collapse through emotional volatility. Target gradual stability over sudden radical changes to manage energy.",
    5: "<b>[Balanced Wealth]</b> Central Earth energy stabilizes fortune and social virtue. Weak Wood drive risks stagnation. Consistently innovate to renew your luck’s expiration date.",
    6: "<b>[Trusted Heritage]</b> Broad Earth energy builds deep trust and steady growth. Lacks Fire’s agility, risking missed opportunities due to conservatism. Integrate modern trends with traditional values.",
    7: "<b>[Steely Success]</b> Concentrated Metal energy grants expert decisiveness. Lacks Wood’s flexibility, risking social friction. Strategically refine communication skills to convey your logic with grace.",
    8: "<b>[Solid Accumulation]</b> Firm Metal energy excels at gathering substance. Lacks Water’s flow, risking a reputation for stubbornness. Manage emotional bonds and trust as key performance indicators.",
    9: "<b>[Intuitive Void]</b> Deep Water energy grants brilliant foresight. Lacks Fire’s practical passion, risking retreat into lonely idealism. Partner with realistic executors to manifest your visions.",
    10: "<b>[Universal Vessel]</b> Vast Water energy absorbs all knowledge. Lacks Earth’s center, causing energy to scatter into emptiness. Adhere to 'Selection and Focus' to find a concrete direction.",
    11: "<b>[Revival Sprout]</b> Renewed Wood vitality revives stagnant environments. Weak Fire-regulation risks arrogance after early success. Maintain humility to ensure sustainable prosperity.",
    12: "<b>[Solitary Talent]</b> Contracted Wood energy creates intellectual depth but lacks Metal’s decisiveness. Vulnerable to exploitation; build clear boundaries and proactive social habits.",
    13: "<b>[Eloquent Wisdom]</b> Fire energy transforms into brilliant speech. Lacks Water’s depth, risking trust through superficiality. Master the art of listening to build deeper authority than mere cleverness.",
    14: "<b>[Piercing Insight]</b> Analytical Fire sees hidden truths but lacks Earth’s emotional buffer. Prone to high mental fatigue; periodically reset neural energy through meditation and regular sleep.",
    15: "<b>[Benevolent Command]</b> Perfect Earth harmony manifests as natural leadership. Lacks Wood’s aggression, risking indecision. Practice 'loose leadership' by delegating authority and allowing room for error.",
    16: "<b>[Compassionate Wealth]</b> Earth energy naturally attracts wealth and virtue. Lacks Metal’s cold logic, risking personal loss due to an inability to say 'No'. Design clear boundaries for your resources.",
    17: "<b>[Rigid Breakthrough]</b> Metal energy manifests as invincible will. Lacks Wood’s flexibility, making you prone to breaking under pressure. Recognize that detours are sometimes the fastest shortcuts.",
    18: "<b>[Finished Will]</b> Firm Metal energy creates unstoppable persistence. Lacks Fire’s adaptability, risking isolation within your expertise. Accept external expert feedback to upgrade your convictions.",
    19: "<b>[Artistic Solitude]</b> Sensitive Water energy sparks genius but lacks Earth’s realistic support. High risk of financial fragility; secure a practical foundation as a safety net for your creative genius.",
    20: "<b>[Grand Ambition]</b> Vast Water energy creates high ideals but lacks Wood’s execution foundation. Plans risk staying in the air. Split grand visions into detailed, precise implementation checklists.",
    21: "<b>[Majestic Leader]</b> Rising Wood energy grants natural authority. Lacks Metal’s grounding for subordinates, risking a reputation for arrogance. Lead through empathy and communication rather than command.",
    22: "<b>[Twisted Talent]</b> Complex Wood energy creates unique skills but lacks Earth’s harmony. Social friction risks devaluing your work. Maintain discretion and prove your worth through results alone.",
    23: "<b>[Solar Success]</b> Peak Fire energy explodes into fame and creativity. Lacks Water’s cooling effect, risking sudden ruin through passionate errors. Take intentional pauses before making major moves.",
    24: "<b>[Alchemical Wealth]</b> Fire energy manifests as fiscal mastery. Lacks Metal’s moderation, risking greed or neglect of health. Circulate a portion of wealth for social value to elevate your dignity.",
    25: "<b>[Strategic Harmony]</b> Intelligent Earth energy navigates crisis through strategy. Lacks Wood’s sincerity, risking a reputation for being opportunistic. Utilize network power by proposing Win-Win formulas first.",
    26: "<b>[Heroic Storms]</b> Hardened Earth energy shines in crisis. Lacks Fire’s peace, risking a life of self-imposed struggles. Avoid unnecessary battles to save energy for the truly decisive win.",
    27: "<b>[Cold Interruption]</b> Sharp Metal excels at analysis but lacks Water’s embrace. Interpersonal friction risks stalling your career mid-way. Transform critical language into words of encouragement.",
    28: "<b>[Bold Surge]</b> Massive Metal energy grants daring spirit. Lacks Earth’s meticulous detail, risking collapse via unstable foundations. Keep a meticulous practical partner to plug system holes.",
    29: "<b>[Calm Reputation]</b> Wise Water energy secures status and peace. Lacks Wood’s drive for challenge, risking stagnation through complacency. Be a 'learning machine' to keep your luck young.",
    30: "<b>[Turnaround Wave]</b> Fluctuating Water energy creates a dramatic fate. Lacks Fire’s composure, risking instability through emotional swings. Build a firm philosophical foundation to anchor your mind.",
    31: "<b>[Self-Made Growth]</b> Wood vitality meets social support for self-made success. Lacks Water’s firm convictions, risking loss of identity through over-reliance. Secure your unique expertise first.",
    32: "<b>[Lucky Breeze]</b> Wood energy manifests as social luck. Lacks Metal’s diligence, risking failure by relying solely on fleeting fortune. Practice intensely to solidify luck into permanent skill.",
    33: "<b>[Imperial Majesty]</b> Peak Fire energy manifests fearsome ambition. Lacks Water’s humility, risking isolation through arrogance. True authority is granted by others; stay grounded.",
    34: "<b>[Tempered Patience]</b> Fire trials require immense endurance. Lacks Earth’s optimism, risking surrender to pessimism. Believe the data: dawn is closest when it is darkest; use positive affirmations.",
    35: "<b>[Peaceful Guardian]</b> Gentle Earth energy masters mediation and harmony. Lacks Fire’s pioneer spirit, risking missed opportunities due to passivity. Step out of your comfort zone for radical attempts.",
    36: "<b>[Loyal Knight]</b> Earth energy manifests as dedication and honor. Lacks Water’s practicality, risking personal loss by over-helping. Solidify your own foundation first to make your altruism sustainable.",
    37: "<b>[Master Precision]</b> Concentrated Metal grants niche authority but lacks Wood’s empathy. Robotic reputation hinders social growth. Translate your knowledge into warm, accessible language to connect.",
    38: "<b>[Master of Achievement]</b> Metal precision meets powerful drive for results. Over-dominant Fire-drive may risk ethical lapses or burnout. Manage process transparency to ensure 무결점 success.",
    39: "<b>[Radiant Glory]</b> Complete Water wisdom brings prestige and leaps. Lacks Earth’s vigilance, risking a sudden fall through complacency. Prepare for worst-case scenarios while at your peak.",
    40: "<b>[Turbulent Shifts]</b> Unstable Water energy drives pioneering but lacks Fire’s center. Speculative impulses ruin progress. Rely on long-term data over impulse to build an unshakable fort.",
    41: "<b>[Grand Commander]</b> Wood leadership meets human virtue for mass prosperity. Lacks Metal’s self-preservation, risking health collapse from duty. Include 'Work-Life Balance' in your core success metrics.",
    42: "<b>[Self-Reliant Trial]</b> Suppressed Wood energy requires self-made success after trials. Lacks Earth’s support, leading to solitary struggle. View failure as learning data; luck turns in mid-life.",
    43: "<b>[Surface Radiance]</b> Showy Fire energy lacks Water’s accumulation. Risk of financial instability despite high income. Allocate more energy to real asset building than social branding.",
    44: "<b>[Labyrinth Innovation]</b> Fire energy trapped in chaos requires breakthrough innovation. Lacks Earth’s serenity, risking mental collapse. Secure a mentor to guide you through the fog of crisis.",
    45: "<b>[Grand Integration]</b> Earth energy unifies all for honorable success. Lacks Wood’s critical eye, risking failure by trusting deceptive advisors. Use transparency as your primary defense strategy.",
    46: "<b>[Insightful Wanderer]</b> Shaky Earth energy grants insight but lacks Metal’s focus. Risk of wasted talent through constant shifting. Recharge self-conviction to dig one well for the hidden gem.",
    47: "<b>[Triumph of Grit]</b> Firm Metal energy creates powerful late-life wealth. Lacks Fire’s expansion, risking a long, bitter youth. Believe every step today is the foundation of a monumental castle.",
    48: "<b>[Wise Advisor]</b> Metal precision meets virtue for guiding others. Lacks Water’s flexibility, risking social woe by imposing strict moral standards. Give advice only when requested to maintain authority.",
    49: "<b>[Flexible Persona]</b> Adaptable Water energy survives crises with agility. Lacks Earth’s conviction, risking a reputation for opportunism. Document your unchanging core values to maintain consistency.",
    50: "<b>[Risky Partnership]</b> Speculative Water energy leads to gambling instincts. Lacks Fire’s control, risking total loss via misplaced trust. Prioritize legal data and contracts over emotional impulse.",
    51: "<b>[Seasons of Life]</b> Shifting Wood energy creates frequent ups and downs. Lacks Metal’s stability, causing fatigue from constant restarts. Use a nomadic mindset to turn adaptability into your true skill.",
    52: "<b>[Prepared Leap]</b> Solid Wood substance seizes success at the peak. Lacks Water’s rest, risking sudden health failure. Systematically digitize and monitor your health and stress levels.",
    53: "<b>[Hollow Radiance]</b> Outward Fire energy lacks Earth’s gravity. Risk of loneliness and vulnerability to deception despite high sociality. Invest in a small, sincere network over showy acquaintances.",
    54: "<b>[Faith in Hardship]</b> Suppressed Fire energy creates duty but lacks Metal’s luck. Environmental constraints delay results. Re-check foundations and keep faith; a turnaround helper will eventually appear.",
    55: "<b>[Humble Radiance]</b> Hidden Earth wisdom shines through modesty. Dominant Wood-vanity invites jealousy, risking collapse. Use simplicity as your strategic brand to unlock your genius value.",
    56: "<b>[Hesitant Talent]</b> Earth energy creates indecision at critical moments. Lacks Fire’s decisiveness, risking a life of supporting roles. Train the '3-second decision' rule to change your destiny.",
    57: "<b>[Architect of Order]</b> Metal energy excels at forging new systems from trials. Lacks Water’s embrace, risking failure through cold management. Set a new innovation goal immediately after succeeding.",
    58: "<b>[Steady Accumulation]</b> Metal persistence builds a legacy of self-made wealth. Lacks Wood’s generosity, risking a lonely old age. Exercise the 'wisdom of giving' to turn wealth into lasting influence.",
    59: "<b>[Lack of Patience]</b> Wandering Water energy lacks Earth’s grit. High vulnerability to temptation or addiction. Establish a rigid, externally controlled life routine and deadline system to succeed.",
    60: "<b>[Interpersonal Storms]</b> Turbulent Water energy attracts relationship friction. Lacks Fire’s discernment, risking failure by prioritizing others' affairs. Gaining hearts is your best asset value.",
    61: "<b>[Wise Chieftain]</b> Refined Wood wisdom earns respect as a core axis. Lacks Metal’s cold logic, risking ruin by letting emotion override duty. Speak less and lead through concrete results.",
    62: "<b>[Devotion Trial]</b> Sacrificial Wood energy exhausts the self while serving others. Lacks Earth’s self-defense, risking health failure. You must protect your own energy to complete altruistic goals.",
    63: "<b>[Harmonious Harvest]</b> Consistent Fire effort brings harmonious wealth. Lacks Water’s vigilance, risking domestic collapse through complacency. Set a new peak to keep your vital energy active.",
    64: "<b>[Stagnant Potential]</b> Fire energy trapped in fog remains unexpressed. Lacks Metal’s organization, risking missed success. Boldly simplify your surroundings to create the energy for a leap.",
    65: "<b>[Calm Eminence]</b> Perfected Earth energy brings honor and stable value. Wood-arrogance is the enemy; disregarding subordinates invites a fall. Maintain a low stance to ensure legacy succession.",
    66: "<b>[Fragile Credit]</b> Shaky Earth energy invites misplaced trust and credit loss. Excessive Water-flexibility risks ruin via fraud. Hold cold, rigid principles in all fiscal dealings.",
    67: "<b>[Creative Command]</b> Detailed Metal meets leadership for artistic achievement. Lacks Fire’s sociality, risking isolation. Sincerely manage a few true bonds to ensure mental rest and support.",
    68: "<b>[Founding Strategy]</b> Strategic Metal builds unshakable systems. Lacks Wood’s humanity, risking loss of loyalty through robotic management. Show human vulnerability occasionally to gain hearts.",
    69: "<b>[Anxious Visionary]</b> Unstable Water energy lacks execution data despite grand dreams. Lacks Earth’s support, risking ruin via desperate gambles. Re-polish basic skills to prepare for the leap.",
    70: "<b>[Hollow Sacrifice]</b> Fading Water energy yields no reward for effort. Lacks Fire’s brightness, risking depression. Find meaning in spiritual values or altruistic service to revitalize your energy.",
    71: "<b>[Impenetrable Essence]</b> Concentrated Wood expertise builds wealth. Lacks Metal’s flexibility, risking conflict by excluding outliers. Humility is the castle wall protecting your success.",
    72: "<b>[Turbulent Passion]</b> Overheated Wood creates drive but extreme swings. Lacks Water’s risk management. Base all decisions on hard data and numbers, not emotional impulse or heat.",
    73: "<b>[Wise Conclusion]</b> Refined Fire energy bridges eras and closes cycles wisely. Over-dominant Earth-complacency risks losing future power. Focus on the future, not yesterday's successes.",
    74: "<b>[Resilient Struggle]</b> Fire energy manifests as hardship and trial. Dwindling Wood-hope risks dark choices. Build strength through spiritual anchors; your turnaround will be legendary.",
    75: "<b>[Balanced Reign]</b> Perfect Earth neutrality creates total stability. Lacks Metal’s decisiveness, risking missed opportunities through hesitation. Show decisive charisma at critical turning points.",
    76: "<b>[Leaking Energy]</b> Scattered Earth energy lacks substance. Lacks Water’s cohesion, risking a lifestyle of zero accumulation despite high income. Strengthen bonds with your family and inner circle.",
    77: "<b>[Struggle of Principles]</b> Metal stubbornness creates constant conflict. Lacks Wood’s harmony, risking a weary life of constant battle. Hold onto your philosophy, but principles win only with persistence.",
    78: "<b>[Constant Precaution]</b> Metal caution secures early success. Lacks Fire’s optimism, risking limited achievement. Fill the warehouse and check risk indicators while times are good.",
    79: "<b>[Hidden Insight]</b> Deep Water wisdom remains unacknowledged in the mist. Lacks Earth’s self-promotion, risking lonely resentment. Master the wisdom of seclusion to wait for your honor.",
    80: "<b>[Final Reflection]</b> Closing Water energy brings spiritual height but lacks Fire’s vitality. Risk of detachment from reality. Connecting with the world through sharing revitalizes your existence.",
    81: "<b>[Infinite Bliss]</b> Harmonious Five Elements complete and restart the cycle. Sacred joy and virtue. Wood-arrogance risks returning to trial; live a life of giving to complete the blessing."
};

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

/* [전생 데이터: 81개 수리별 다변화 및 오행 분석 버전] */
const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    // [1] 오행 판별 데이터
    let elInfo = "";
    if ([1, 2].includes(lastDigit)) elInfo = { name: "목(木)", trait: "강한 추진력과 생명력", reason: "새로운 질서를 설계하거나 생명을 돌보고 키우는 일에 전념했을 가능성이 매우 높습니다." };
    else if ([3, 4].includes(lastDigit)) elInfo = { name: "화(火)", trait: "발산하는 열정과 에너지", reason: "만인을 계몽하거나 화려한 예술적 성취를 통해 어두운 세상을 밝히는 중추적 역할을 맡았을 것으로 보입니다." };
    else if ([5, 6].includes(lastDigit)) elInfo = { name: "토(土)", trait: "두터운 중용과 응집력", reason: "제국의 기반을 닦거나 방대한 지식을 집대성하여 후대에 전하는 관리자 혹은 기록자의 임무를 수행했을 것입니다." };
    else if ([7, 8].includes(lastDigit)) elInfo = { name: "금(金)", trait: "예리한 결단과 강직함", reason: "엄격한 법률을 집행하거나 강철 같은 의지로 공동체의 안전과 정의를 수호하는 파수꾼의 삶을 살았을 것으로 분석됩니다." };
    else elInfo = { name: "수(水)", trait: "심오한 지혜와 유연함", reason: "보이지 않는 진리를 탐구하거나 거친 바다와 대륙을 횡단하며 지식의 지평을 넓히는 선구적인 탐험가의 길을 걸었을 확률이 큽니다." };

    // [2] 수식어(Mods) - 30개
    const mods = [
        "고독하게 하늘을 읽던", "무너진 질서를 바로잡던", "금지된 진리를 탐구하던", "미학적 가치에 집착하던", "자유를 찾아 대륙을 유랑하던", 
        "침묵 속에 칼날을 갈던", "치밀하게 왕국을 설계하던", "자비로운 마음으로 생명을 품던", "거친 파도를 잠재우던", "운명의 실타래를 풀던",
        "비밀스러운 전설을 기록하던", "정의로운 신념으로 맞서던", "광기 어린 천재성을 발휘하던", "고결한 정신으로 기도하던", "기민한 감각으로 기회를 잡던",
        "우아한 몸짓으로 대중을 홀리던", "엄격한 규율로 조직을 다스리던", "따뜻한 미소로 상처를 치유하던", "용맹한 기개로 전장을 누비던", "냉철한 이성으로 핵심을 뚫던",
        "끊임없는 호기심으로 세상을 보던", "신비로운 영감에 몸을 맡기던", "끈질긴 집념으로 결실을 맺던", "명예로운 가문을 지탱하던", "부드러운 소통으로 화합을 이끌던",
        "숨겨진 보물을 찾아 헤매던", "대범한 지략으로 승리를 쟁취하던", "숭고한 희생으로 평화를 지키던", "민첩한 수완으로 부를 축적하던", "신중한 판단으로 위기를 넘기던"
    ];

    // [3] 직업(Jobs) - 30개
    const jobs = [
        "천문 기록관", "대제국의 설계자", "비단길의 대상", "약초 치유사", "잊혀진 성의 파수꾼", 
        "운명의 조율사", "고대의 서지학자", "영혼의 안무가", "강철의 연금술사", "심해의 항해사",
        "비밀 정보관", "고결한 수도승", "왕실 유리 세공사", "광야의 예언자", "전설적인 대장장이",
        "수정구슬 점성술사", "동방의 악사", "제국의 법관", "부유한 약재상", "유랑 극단의 단장",
        "고서 수집가", "정복 전쟁의 참모", "심연의 잠수부", "화려한 정원사", "대륙의 외교관",
        "그림자 자객", "신전의 조각가", "신비주의 철학자", "새벽의 파수꾼", "황금 도시의 통치자"
    ];

    // [4] 과업(Homework) - 20개 (과거형)
    const homeworks = [
        "지식을 자비로 바꾸는 법을 배우는 것이었습니다.", "지나친 소유욕을 버리고 평온을 찾는 일에 전념했습니다.", "타인의 고통을 진심으로 공감하는 법을 익히고자 했습니다.",
        "자신의 재능을 사회적 가치로 환원하는 것이 숙제였습니다.", "고독을 이겨내고 세상과 소통하는 용기를 내는 것이 과업이었습니다.", "권위보다 덕으로 사람을 이끄는 리더십을 연마하는 삶이었습니다.",
        "과거의 상처를 스스로 치유하고 현재에 집중하는 법을 배웠습니다.", "물질적 풍요보다 정신적 완성을 추구하는 것이 영혼의 무대였습니다.", "내면의 분노를 다스리고 용서의 미덕을 배우는 데 힘썼습니다.",
        "스스로의 한계를 인정하고 겸손함을 갖추는 것이 목표였습니다.", "보이지 않는 가치를 믿고 끝까지 인내하는 법을 수련했습니다.", "진정한 독립과 자아의 정체성을 확립하는 과정이었습니다.",
        "사람 사이의 갈등을 중재하고 평화를 수호하는 역할을 맡았습니다.", "편견을 버리고 세상을 있는 그대로 바라보는 지혜를 닦았습니다.", "가진 것을 나누며 공생의 가치를 실현하는 것이 마지막 과업이었습니다.",
        "진실을 말하는 용기를 통해 영혼의 자유를 얻고자 했습니다.", "집착에서 벗어나 흐르는 물처럼 사는 지혜를 깨닫는 중이었습니다.", "모든 생명을 존중하고 보호하는 고결한 의무를 수행했습니다.",
        "인내의 시간을 거쳐 영광의 결실을 맺는 법을 증명해냈습니다.", "타인의 성장을 돕고 그 안에서 자신의 가치를 발견했습니다."
    ];

    return { 
        job: `${mods[i % mods.length]} ${jobs[i % jobs.length]}`, 
        desc: `성명학적으로 당신은 <b>${elInfo.name}</b>의 <b>${elInfo.trait}</b>이 두드러지는 명식입니다. 이로 인해 과거 생애에서 ${elInfo.reason}`, 
        homework: homeworks[i % homeworks.length] 
    };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    let elInfoEn = "";
    if ([1, 2].includes(lastDigit)) elInfoEn = { name: "Wood", trait: "pioneering drive", reason: "dedicated yourself to designing new orders or nurturing life." };
    else if ([3, 4].includes(lastDigit)) elInfoEn = { name: "Fire", trait: "radiant passion", reason: "likely focused on enlightening the public or leaving brilliant artistic achievements." };
    else if ([5, 6].includes(lastDigit)) elInfoEn = { name: "Earth", trait: "stable cohesion", reason: "probably held pivotal roles in building foundations or archiving vast knowledge." };
    else if ([7, 8].includes(lastDigit)) elInfoEn = { name: "Metal", trait: "sharp decisiveness", reason: "likely lived as a guardian or official upholding justice with an iron will." };
    else elInfoEn = { name: "Water", trait: "profound wisdom", reason: "explored invisible truths or navigated rough seas to expand the horizons of knowledge." };

    const modsEn = [
        "A Solitary", "A Rigorous", "A Forbidden", "An Aesthetic", "A Wandering", 
        "A Silent", "A Meticulous", "A Compassionate", "A Fearless", "A Mystic",
        "A Secretive", "A Righteous", "A Madly Genius", "A Noble", "A Keen",
        "An Elegant", "A Strict", "A Warm-hearted", "A Valiant", "A Cold-rational",
        "A Curious", "A Divinely Inspired", "A Persistent", "An Honorable", "A Harmonic",
        "A Treasure-seeking", "A Strategic", "A Sublime", "An Agile", "A Prudent"
    ];

    const jobsEn = [
        "Astronomer", "Empire Architect", "Silk Road Merchant", "Herbal Healer", "Ruins Sentinel", 
        "Fate Arbiter", "Ancient Librarian", "Soul Choreographer", "Steel Alchemist", "Deep Sea Navigator",
        "Secret Agent", "Devoted Monk", "Glass Artisan", "Desert Prophet", "Legendary Blacksmith",
        "Crystal Astrologer", "Eastern Musician", "Imperial Judge", "Rich Herbalist", "Troupe Leader",
        "Scroll Collector", "War Strategist", "Abyss Diver", "Palace Gardener", "Continental Diplomat",
        "Shadow Assassin", "Temple Sculptor", "Mystic Philosopher", "Sentinel of Dawn", "Golden City Ruler"
    ];
    
    const homeworksEn = [
        "The mission was to turn knowledge into compassion.", "Devoted life to letting go of greed and finding inner peace.", "Sought to master true empathy for the suffering of others.",
        "Tasked with returning personal talents back to social values.", "The challenge was to overcome solitude and communicate with the world.", "Refined leadership through virtue rather than mere authority.",
        "Focused on healing past wounds and staying in the present.", "Pursued spiritual completion over material wealth.", "Strived to control inner anger and learn forgiveness.",
        "Aim was to acknowledge personal limits and remain humble.", "Practiced believing in invisible values and enduring to the end.", "In the process of establishing true independence and identity.",
        "Took the role of mediating conflicts and protecting peace.", "Cultivated the wisdom to see the world without prejudice.", "The final task was realizing the value of symbiosis by sharing.",
        "Sought the freedom of the soul through the courage to tell the truth.", "Learned the wisdom of living like flowing water without obsession.", "Fulfilled the noble duty of respecting and protecting all life.",
        "Proved how to bear glorious fruits through long endurance.", "Found personal value while empowering others' growth."
    ];

    return { 
        job: `${modsEn[i % modsEn.length]} ${jobsEn[i % jobsEn.length]}`, 
        desc: `Based on Suri analysis, your name possesses powerful <b>${elInfoEn.name}</b> energy and <b>${elInfoEn.trait}</b>. Consequently, in your past life, you likely ${elInfoEn.reason}`, 
        homework: homeworksEn[i % homeworksEn.length] 
    };
});

/* [내세 데이터: 81개 수리별 미래 에너지 분석 버전] */
const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    // [1] 미래 에너지 예측 데이터 (오행 기반)
    let elInfo = "";
    if ([1, 2].includes(lastDigit)) elInfo = { name: "목(木)", trait: "무한한 확장성과 생명력", role: "새로운 행성의 생태계를 설계하거나 영혼의 진화 코드를 생성하는" };
    else if ([3, 4].includes(lastDigit)) elInfo = { name: "화(火)", trait: "발산하는 지성과 광채", role: "차원 간의 에너지를 증폭시키거나 문명의 빛을 전파하는" };
    else if ([5, 6].includes(lastDigit)) elInfo = { name: "토(土)", trait: "안정적인 중용과 관리력", role: "우주의 방대한 데이터를 아카이빙하거나 시공간의 질서를 조율하는" };
    else if ([7, 8].includes(lastDigit)) elInfo = { name: "금(金)", trait: "정밀한 판단과 정의감", role: "영혼의 궤적을 엄격히 감찰하거나 차원의 경계를 수호하는" };
    else elInfo = { name: "수(水)", trait: "심오한 통찰과 정화력", role: "무의식의 심연을 정화하거나 흩어진 지혜의 파동을 하나로 모으는" };

    // [2] 장소(Places) - 30개
    const places = [
        "수정 도서관", "에테르 데이터 센터", "비의 정원", "바람의 고원", "고요한 사찰", 
        "빛의 연산소", "산호 초원", "구름 위의 섬", "철학자의 숲", "창조의 광장", 
        "영원의 해변", "안개의 도시", "무지개 폭포", "별의 요람", "지혜의 탑", 
        "시간의 회랑", "은하수의 끝", "새벽의 숲", "거울의 호수", "황금 사막", 
        "천상의 정원", "양자 파동 허브", "기억의 보관소", "차원 게이트 07", "에메랄드 성소",
        "침묵의 망루", "무지개 공명실", "코스모스 센터", "미래 설계실", "영혼의 정거장"
    ];

    // [3] 직업(Jobs) - 30개
    const jobs = [
        "지혜를 분류하는 수호자", "백색 왜성의 정원사", "차원의 균형을 맞추는 조율사", "빛의 파동을 기록하는 자", "영혼의 궤적을 그리는 화가", 
        "에너지를 정화하는 연금술사", "시간의 흐름을 지키는 파수꾼", "기억의 조각을 모으는 수집가", "진리를 노래하는 전령사", "생명의 코드를 설계하는 공학자", 
        "꿈의 경계를 지키는 안내자", "평화의 파동을 송출하는 안테나", "우주의 질서를 세우는 설계자", "진화의 방향을 결정하는 관찰자", "감정의 입자를 조절하는 조율사",
        "은하계 소통 전문가", "성운 아카이브 관리자", "다차원 평화 유지군", "영적 진동 설계자", "환생 시퀀스 관리관",
        "빛의 언어 해석가", "우주 중력 조정자", "에테르 문명 컨설턴트", "별빛 항로 도선사", "양자 얽힘 코디네이터",
        "감정 데이터 정제사", "평행 우주 감시자", "진화 가이드", "공명 주파수 탐지기", "우주 근원 연구원"
    ];

    // [4] 핵심 미션(Missions) - 30개
    const missions = [
        "멸망해가는 행성의 고대 언어를 해석하여 보존하십시오.", "메마른 은하계에 생명수를 뿌려 씨앗을 깨우십시오.", "방황하는 영혼들에게 보이지 않는 빛의 길을 안내하십시오.",
        "평화의 파동을 전 우주에 송출하여 충돌을 방지하십시오.", "미래 세대가 사용할 새로운 에너지원을 연산하십시오.", "심해 속 고대 지혜의 파편을 찾아 현재와 연결하십시오.",
        "우주 역사의 왜곡을 감시하고 인과율을 되돌리십시오.", "잊혀진 근원적 질문들에 대한 해답을 탐험하십시오.", "예술과 기술이 융합된 새로운 유토피아를 설계하십시오.",
        "시공간의 저울을 평형 상태로 유지하여 붕괴를 막으십시오.", "지성체들이 영적 안식을 취할 수 있는 쉼터를 지으십시오.", "작고 소중한 생명의 목소리를 하나도 빠짐없이 기록하십시오.",
        "길 잃은 어린 별들을 안전한 궤도로 인도하십시오.", "사랑과 신뢰를 바탕으로 한 새로운 질서의 기둥을 세우십시오.", "잠들어 있던 거대 지혜를 깨워 갈등을 종식시키십시오.",
        "오염된 에너지를 정제하여 우주의 순수성을 수호하십시오.", "손상된 기억 데이터를 복구하여 사라진 역사를 재건하십시오.", "행성 간 마찰을 조율하여 평화 조약을 체결하십시오.",
        "영혼들이 다시 태어날 용기를 얻도록 성소를 관리하십시오.", "차원 이동의 경계선을 순찰하며 운명의 간섭을 차단하십시오.", "진화의 임계점에 도달한 문명에 지혜의 징표를 남기십시오.",
        "성운의 먼지를 모아 새로운 태양 탄생의 환경을 조성하십시오.", "우주의 모든 감정 입자를 분석하여 슬픔을 치유하십시오.", "환생 시스템의 효율성을 극대화하는 코드를 작성하십시오.",
        "우주 전체의 공명 주파수를 조정하여 조화로운 시대를 여십시오.", "시간 속 비밀 통로를 찾아 미래의 위협을 방지하십시오.", "스스로 빛을 내지 못하는 행성들에 지혜의 불꽃을 전하십시오.",
        "우주의 끝에서 들려오는 미지의 신호를 해독하십시오.", "감정의 불균형으로 무너지는 문명을 재건하십시오.", "영원한 생명의 순환 고리를 완성하십시오."
    ];

    return { 
        place: places[i % places.length], 
        job: jobs[i % jobs.length], 
        // 📍 desc 부분에 미래 에너지 예측 근거 포함
        desc: `성명학적 설계 데이터에 따르면 귀하의 미래 에너지는 <b>${elInfo.name}</b>의 <b>${elInfo.trait}</b>이 지배적일 것으로 예측됩니다. 이로 인해 내세에서는 <b>${elInfo.role}</b> 임무를 맡게 될 것입니다.`, 
        mission: missions[i % missions.length] 
    };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    let elInfoEn = "";
    if ([1, 2].includes(lastDigit)) elInfoEn = { name: "Wood", trait: "limitless scalability and vitality", role: "designing ecosystems for new planets or generating evolution codes for souls" };
    else if ([3, 4].includes(lastDigit)) elInfoEn = { name: "Fire", trait: "radiant intelligence and brilliance", role: "amplifying energies between dimensions or spreading the light of civilization" };
    else if ([5, 6].includes(lastDigit)) elInfoEn = { name: "Earth", trait: "stable moderation and management", role: "archiving vast cosmic data or coordinating the order of spacetime" };
    else if ([7, 8].includes(lastDigit)) elInfoEn = { name: "Metal", trait: "precise judgment and justice", role: "strictly monitoring soul trajectories or guarding dimensional boundaries" };
    else elInfoEn = { name: "Water", trait: "profound insight and purification", role: "purifying the abyss of the subconscious or gathering scattered waves of wisdom" };

    const placesEn = [
        "Crystal Library", "Ether Data Center", "Garden of Rain", "Wind Plateau", "Silent Temple", 
        "Lab of Light", "Coral Meadow", "Cloud Island", "Philosopher's Forest", "Creation Square", 
        "Eternal Beach", "Mist City", "Rainbow Fall", "Star Cradle", "Tower of Wisdom", 
        "Corridor of Time", "Galaxy's End", "Forest of Dawn", "Mirror Lake", "Golden Desert", 
        "Celestial Garden", "Quantum Hub", "Memory Archive", "Portal 07", "Emerald Sanctuary",
        "Tower of Silence", "Resonance Chamber", "Cosmos Center", "Future Design Lab", "Soul Station"
    ];

    const jobsEn = [
        "Wisdom Guardian", "Star Gardener", "Dimensional Balancer", "Vibration Recorder", "Soul Painter", 
        "Energy Alchemist", "Timeline Sentinel", "Memory Collector", "Truth Herald", "Life Engineer", 
        "Dream Guide", "Peace Antenna", "Order Architect", "Evolution Observer", "Emotion Tuner",
        "Galactic Communicator", "Nebula Archivist", "Multidimensional Peacekeeper", "Vibration Designer", "Rebirth Manager",
        "Light Language Decoder", "Gravity Regulator", "Ether Consultant", "Starlight Navigator", "Quantum Coordinator",
        "Emotion Purifier", "Parallel Watcher", "Evolutionary Guide", "Resonance Detector", "Source Researcher"
    ];
    
    const missionsEn = [
        "Decode and preserve the ancient languages of dying planets.", "Sprinkle life water on barren galaxies to awaken seeds.", "Guide lost souls toward the path of invisible light.",
        "Broadcast peace waves to prevent interstellar conflicts.", "Calculate new energy sources for future generations.", "Find ancient fragments in the deep sea and connect them to now.",
        "Monitor history distortions and reverse the law of causality.", "Explore answers to the forgotten primal questions.", "Design a new utopia merging art and high-tech.",
        "Maintain the balance of spacetime scales to prevent collapse.", "Build spiritual sanctuaries for sentient beings to rest.", "Record every small and precious voice of life without exception.",
        "Guide young stars lost in the dark back to their safe orbits.", "Build pillars of a new order based on love and trust.", "Wake the ancient sleeping wisdom to end ignorance.",
        "Purify polluted energy to protect the purity of the universe.", "Reconstruct lost history via memory data recovery.", "Harmonize planetary frictions via peace treaties.",
        "Manage healing sanctuaries for rebirth courage.", "Patrol dimensional borders to block unauthorized interference.", "Leave tokens of wisdom for evolving civilizations.",
        "Collect nebula dust for new suns to be born.", "Analyze emotional particles to heal cosmic sorrow.", "Write code to maximize reincarnation efficiency.",
        "Fine-tune the resonance frequencies of space for a new era.", "Find hidden passages in time to prevent threats.", "Deliver the flame of wisdom to dark planets.",
        "Decode unknown signals coming from the edge of the universe.", "Rebuild civilizations collapsing from emotional imbalance.", "Complete the cycle of eternal life."
    ];

    return { 
        place: placesEn[i % placesEn.length], 
        job: jobsEn[i % jobsEn.length], 
        desc: `According to Suri design data, your future energy is predicted to be dominated by <b>${elInfoEn.name}</b>'s <b>${elInfoEn.trait}</b>. Consequently, you will be tasked with <b>${elInfoEn.role}</b> in the afterlife.`, 
        mission: missionsEn[i % missionsEn.length] 
    };
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

/* [오류 수정된 이름 생성 함수] */
function makePastNameKo(num, strong, lack, month) {
    const name = syllableKo1[num % syllableKo1.length] + syllableKo2[(num + 7) % syllableKo2.length];
    return `${name}`;
}
function makePastNameEn(num, strong, lack, month) {
    const name = nameRootEn[num % nameRootEn.length] + nameTailEn[(num + 5) % nameTailEn.length];
    return `${name}`; 
}
function makeNextLifeNameKo(num, strong, lack, month) {
    const name = syllableKo1[(num + 10) % syllableKo1.length] + syllableKo2[(num + 15) % syllableKo2.length];
    return `${name}`;
}
function makeNextLifeNameEn(num, strong, lack, month) {
    const name = nameRootEn[(num + 20) % nameRootEn.length] + nameTailEn[(num + 25) % nameTailEn.length];
    return `${name}`;
}
