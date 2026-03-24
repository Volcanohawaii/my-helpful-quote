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
    1: "태초의 빛이 만물을 깨우는 형상으로, 강력한 독립심과 개척 정신을 타고난 리더의 명식입니다. 스스로 길을 개척하여 대업을 성취하는 에너지가 매우 강합니다. 다만, 지나친 자신감이 독단으로 흐를 수 있으니 주변의 조언을 수용하는 포용력을 기르십시오.",
    2: "재능이 뛰어나고 감각이 예리하여 창의적인 분야에서 두각을 나타낼 수 있는 기운입니다. 하지만 주변 환경이나 인간관계에서 변동이 잦을 수 있습니다. 꾸준한 인내심과 정서적 안정을 최우선으로 삼는다면 불안정한 흐름을 기회로 바꿀 수 있습니다.",
    3: "만물이 생동하는 봄날의 새순처럼 활기찬 생명력과 지혜를 가졌으며, 명예와 지위가 자연스럽게 따르는 길한 운수입니다. 사회적 성취도가 매우 높습니다. 다만, 화려함을 쫓다 내실을 놓칠 수 있으니 마무리에 힘을 쏟는다면 더 큰 성공을 거머쥘 것입니다.",
    4: "위기 상황에서 놀라운 돌파력을 발휘하는 승부사적 기질이 있으며, 파괴 뒤에 새로운 창조를 이끄는 에너지가 있습니다. 기초를 단단히 다지는 것이 성공의 열쇠입니다. 성급한 확장은 공든 탑을 무너뜨릴 수 있으니 매사에 신중함이 필요합니다.",
    5: "만물이 조화롭게 어우러져 복이 넝쿨째 들어오는 형국입니다. 인덕과 재복이 모두 풍족하여 주변의 도움으로 순탄하게 목표를 달성하는 행운아입니다. 지나치게 안일함에 빠지지 않도록 자기 혁신을 게을리하지 않는다면 그 풍요로움은 대대로 이어질 것입니다.",
    6: "조상의 덕과 신뢰를 바탕으로 안정적인 성장을 이루는 계승자의 운명입니다. 책임감이 강해 조직의 중심에서 큰 역할을 수행하며 안정을 누립니다. 변화에 보수적일 수 있으니, 가끔은 과감한 도전을 통해 새로운 성장 동력을 찾아야 정체를 막을 수 있습니다.",
    7: "강철 같은 의지와 치밀한 계획력으로 한 번 세운 목표는 반드시 달성하고야 마는 장인 정신의 소유자입니다. 자수성가하여 전문가로서 존경받을 기운입니다. 고집이 강해 주변과 마찰이 생길 수 있으니 유연한 대화 기법을 익힌다면 더 넓은 세상을 품을 수 있습니다.",
    8: "흙 속에서 빛나는 황금을 찾아내는 명식으로, 끈기 있게 기회를 기다릴 줄 아는 지혜와 재물을 모으는 탁월한 능력을 갖췄습니다. 실무적 능력이 매우 뛰어납니다. 결과에 대한 집착이 스트레스를 유발할 수 있으니 가끔은 과정 자체를 즐기는 여유가 필요합니다.",
    9: "천재적인 두뇌와 예리한 직관력을 지녀 시대를 앞서가는 선구자적 면모를 보입니다. 고독한 탐구의 시간 끝에 위대한 발견을 할 명식입니다. 운명의 부침이 심할 수 있으니 마음의 평정심을 유지하기 위한 명상이나 운동을 병행하여 위기를 관리하십시오.",
    10: "재주가 비상하고 다재다능하여 어떤 분야에서든 빠르게 적응하는 유연함을 가졌습니다. 팔방미인이라는 소리를 듣기에 충분합니다. 하지만 방향성을 잃기 쉬우니, 하나의 명확한 목표에 집중하는 '선택과 집중'이 절실히 요구됩니다.",
    11: "가문을 다시 일으켜 세우고 새로운 부흥을 이끄는 개척자의 운명입니다. 신념이 뚜렷하고 사람들의 신망을 얻어 안정적인 성공을 거둡니다. 자신의 틀에 갇히면 성장이 멈출 수 있으니, 항상 새로운 지식을 습득하고 세상을 넓게 보는 안목을 유지하십시오.",
    12: "섬세한 감수성과 높은 지능을 바탕으로 예술이나 학문에서 독보적인 세계를 구축할 수 있습니다. 하지만 주변의 도움 없이 홀로 서야 하는 고독함이 따를 수 있습니다. 내면의 힘을 기르고 타인에게 먼저 다가가는 유연함을 배운다면 성장을 완성할 수 있습니다.",
    13: "하늘이 내린 총명함과 지혜로 어떤 문제든 명쾌하게 해결하는 해결사의 운명입니다. 언변이 좋고 사교적이라 주변에 늘 사람이 따릅니다. 다만, 자신의 재능을 과신하여 타인을 무시할 수 있으니 겸손함을 갖출 때 진정한 권위가 완성됩니다.",
    14: "남들이 보지 못하는 이면을 꿰뚫는 통찰력이 있으며, 복잡한 문제를 단순화하는 천재적인 능력이 있습니다. 정신적인 영역에서 큰 성취를 이룹니다. 다만 감정의 기복이 심해 번뇌에 빠지기 쉬우니, 규칙적인 생활 루틴을 통해 감정의 중심을 잡으십시오.",
    15: "부귀와 건강, 그리고 명예를 모두 거머쥐는 복수쌍전의 운명입니다. 부드러운 카리스마로 사람들을 이끌며 조직의 수장이 될 상입니다. 지나친 완벽주의가 주변을 지치게 할 수 있으니 10%의 여백을 두는 지혜를 발휘한다면 만인의 존경을 받을 것입니다.",
    16: "덕망이 높고 사람을 끌어당기는 자비로운 성품을 지녀, 주변의 추대로 명예로운 자리에 오를 명식입니다. 재물운이 끊이지 않는 안정된 삶입니다. 다만 남의 부탁을 거절하지 못해 손해를 볼 수 있으니 공과 사를 명확히 구분하는 결단력이 필요합니다.",
    17: "강직한 의지와 불굴의 투지로 어떠한 역경도 뚫고 나가는 전사의 운명입니다. 정직하고 정의로워 리더의 신뢰를 한 몸에 받습니다. 성격이 너무 곧아 부러질 수 있으니, 때로는 부드러움이 강함을 이긴다는 유능제강(柔能制剛)의 도리를 새기십시오.",
    18: "견고한 의지와 흔들림 없는 신념으로 계획한 바를 현실로 만들어내는 실행력의 화신입니다. 중년 이후 거대한 발전을 이룩합니다. 다만 지나치게 고집스러운 면이 성공의 걸림돌이 될 수 있으니 다수의 의견을 경청하는 유연성을 갖추십시오.",
    19: "비상한 재능과 예술적 감각으로 천재성을 발휘하지만, 운명의 파동이 커서 고독을 느끼기 쉬운 명식입니다. 전문성을 갈고닦는 데 집중하십시오. 현실적인 감각을 잃지 않도록 재무 관리나 법률적인 공부를 병행하는 것이 불운을 막는 열쇠입니다.",
    20: "이상과 포부가 원대하며 한 시대를 풍미할 수 있는 거대한 야망을 가진 영혼입니다. 거시적인 안목이 탁월합니다. 하지만 기반이 약하면 모래 위에 지은 성이 될 수 있으니, 화려한 겉모습보다는 내실을 채우는 기초 작업에 더 많은 공을 들이십시오.",
    21: "우뚝 솟은 산처럼 흔들림 없는 두령의 기운으로, 독립적인 권위와 리더십을 발휘하여 조직을 장악하는 힘이 탁월합니다. 만인의 존경을 받습니다. 다만 아랫사람에게 위압적으로 비칠 수 있으니 덕을 베푸는 따뜻한 통솔력을 기르십시오.",
    22: "재주는 많으나 인간관계에서 예상치 못한 마찰이 발생할 수 있는 기운입니다. 자신만의 독창적인 전문 기술을 갖추는 것이 생존 전략입니다. 언행을 신중히 하고 비밀을 잘 지킨다면 오해를 사지 않고 자신의 자리를 지킬 수 있습니다.",
    23: "태양과 같은 정열로 자신의 아이디어를 세상에 발산하며 화려한 명성을 얻게 될 명식입니다. 창의적인 혁신가에게 자주 나타나는 수입니다. 다만 열정이 지나쳐 실수를 할 수 있으니 매사에 한 템포 쉬어가는 여유를 가져보십시오.",
    24: "성실한 노력과 철저한 관리 능력으로 무에서 유를 창조하며 막대한 재산을 축적하는 거부의 운명입니다. 경제적 감각이 타고났습니다. 다만 돈에 너무 집착하면 인심을 잃을 수 있으니 사회적 기여를 통해 부의 품격을 높이십시오.",
    25: "비상한 재치와 유연함으로 어떤 혼돈 속에서도 질서를 찾아내는 지략가의 명식입니다. 수완이 좋아 성공의 기회를 놓치지 않습니다. 하지만 이익에만 밝으면 신뢰를 잃을 수 있으니 도덕적인 원칙을 먼저 세우는 것이 장기적인 성공의 비결입니다.",
    26: "영웅적인 기질과 파란만장한 삶을 동시에 지닌 명식으로, 시련을 겪을수록 보석처럼 빛나는 존재가 됩니다. 불굴의 투지가 당신의 무기입니다. 다만 독선적인 태도가 적을 만들 수 있으니 겸허한 자세로 주변과 화합하십시오.",
    27: "예리한 분석력과 통찰력을 가졌으나 인간관계의 갈등으로 중도에 좌절할 위험이 있는 흐름입니다. 내면의 평화를 찾는 것이 급선무입니다. 타인을 비판하기보다 칭찬하는 습관을 들인다면 닫혔던 행운의 문이 다시 열릴 것입니다.",
    28: "거친 파도를 헤쳐 나가는 선장처럼 파란곡절이 많으나, 그만큼 담력이 크고 경험치가 풍부한 노련한 지도자입니다. 큰 승부를 즐깁니다. 하지만 고난이 계속되면 지칠 수 있으니 든든한 조력자를 곁에 두고 의지하는 지혜를 발휘하십시오.",
    29: "원숙한 지혜와 높은 완성도를 통해 사회적 신망을 얻으며 평온한 성공을 누리는 운명입니다. 말년으로 갈수록 운이 더욱 좋아집니다. 다만 변화를 거부하고 정체될 수 있으니 항상 젊은 사고방식을 유지하려 노력하십시오.",
    30: "성공과 실패가 교차하며 인생의 사계절을 모두 겪게 되는 파란의 운명입니다. 역경을 기회로 바꾸는 개척 에너지가 좋습니다. 다만 마음의 안정이 깨지기 쉬우니 종교나 철학적 사색을 통해 정신적인 지지대를 구축하십시오.",
    31: "관계의 힘을 통해 협력의 시너지를 극대화하며 자수성가하는 자비로운 리더의 명식입니다. 인복이 많아 위기의 순간마다 귀인이 나타납니다. 지나치게 타인에게 의존하지 않도록 본인만의 독립적인 기술도 함께 갖추십시오.",
    32: "순풍에 돛을 단 듯 예기치 못한 행운과 재물이 따르는 복 많은 운명입니다. 소통 능력이 뛰어나 영업이나 중재 분야에서 큰 결실을 봅니다. 다만 행운을 당연하게 여기면 방만해질 수 있으니 항상 감사하는 마음과 성실함을 유지하십시오.",
    33: "제왕의 기상을 타고나 강력한 추진력과 야망으로 세상의 중심에 서게 될 명식입니다. 큰 꿈을 현실로 만드는 실현력이 무섭습니다. 권위주의가 강해지면 주변 사람이 떠날 수 있으니 겸손함을 갖춰 진정한 덕장이 되십시오.",
    34: "폭풍우 속에서도 뿌리를 지탱해야 하는 연단의 시기를 겪게 되는 명식입니다. 인내심 하나로 대성할 수 있는 기운입니다. 건강 관리에 유의하고 작은 성취에도 기뻐하는 긍정적인 마인드를 가진다면 결국 해뜰날이 올 것입니다.",
    35: "대지처럼 넓은 포용력과 온화한 성품으로 주변의 평화를 지키는 수호자의 운명입니다. 안정적이고 보수적인 성공을 거둡니다. 도전 정신이 부족해 큰 기회를 놓칠 수 있으니 가끔은 과감한 모험을 즐겨보십시오.",
    36: "의리가 넘치고 헌신적인 태도로 사람들의 마음을 얻어 사회적 대우를 받는 협객의 운명입니다. 공적인 이익을 우선시합니다. 다만 남을 돕다 본인의 살림이 거덜 날 수 있으니 본인의 기반을 먼저 다진 후 베푸는 지혜가 필요합니다.",
    37: "이면을 꿰뚫는 깊은 통찰과 장인 정신으로 특정 분야의 최고 권위자가 될 명식입니다. 독립성이 강해 혼자서도 대업을 이룹니다. 하지만 지나치게 냉철하여 인간미가 부족해 보일 수 있으니 따뜻한 공감 능력을 키우십시오.",
    38: "강력한 추진력으로 이상을 현실로 바꾸며 실질적인 결과물을 내놓는 성취의 달인입니다. 문학이나 예술적 재능도 겸비했습니다. 다만 목표를 위해 수단을 가리지 않을 수 있으니 과정의 정의로움을 항상 체크하십시오.",
    39: "완성과 도약을 상징하며 부귀와 영광을 누리며 타의 귀감이 되는 최고의 길수입니다. 지혜가 깊어 모든 일을 원만하게 처리합니다. 다만 운이 너무 좋아 자만하기 쉬우니 늘 낮은 자세로 세상을 대하십시오.",
    40: "개척의 기운은 강하나 성급한 판단으로 인해 운세가 요동칠 수 있는 흐름입니다. 감정 조절이 성공의 관건입니다. 투기적인 일보다는 안정적인 사업에 투자하고 장기적인 안목을 기른다면 번영을 유지할 수 있습니다.",
    41: "대업을 완수할 수 있는 강력한 통솔력과 인덕을 겸비한 지도자의 파동입니다. 주변과 협력하여 거대한 부를 일굽니다. 다만 책임감이 너무 강해 건강을 해칠 수 있으니 휴식과 업무의 균형을 잘 맞추십시오.",
    42: "화려한 아이디어는 많으나 현실적인 시련이 잦아 인내심이 필요한 담금질의 시기입니다. 자력갱생의 아이콘입니다. 포기하지 않고 끝까지 완주한다면 중년 이후 최고의 반전 성공을 맞이하게 될 것입니다.",
    43: "겉은 화려하고 번듯하나 속이 비기 쉬운 외화내빈의 형국입니다. 실속을 챙기는 경제 관념을 기르는 것이 필수입니다. 과시욕을 버리고 본질적인 가치에 투자한다면 안정적인 삶을 영위할 수 있습니다.",
    44: "방향을 잃고 헤매는 미궁의 기운이 있으나, 이를 극복하면 세상을 놀라게 할 혁신적인 성과를 낼 수 있습니다. 통찰력을 기르십시오. 부정적인 생각에 빠지지 않도록 활동적인 취미를 가지는 것이 도움이 됩니다.",
    45: "조상의 덕과 본인의 성실함이 만나 만물을 통합하는 거물급 인사가 될 운명입니다. 높은 명예와 신뢰를 얻습니다. 다만 명예를 지키기 위해 무리한 행동을 할 수 있으니 항상 정직과 원칙을 최우선으로 하십시오.",
    46: "통찰력은 예리하나 방황으로 인해 에너지를 소모하기 쉬운 흐름입니다. 마음의 중심을 잡는 수양이 필요합니다. 자신을 믿고 한 우물을 판다면 결국 본인만의 독보적인 영역을 구축하게 될 것입니다.",
    47: "오랜 인내 끝에 거대한 결실을 맺어 생의 참된 의미를 증명해내는 대기만성형 명식입니다. 구체적인 성과로 인정받습니다. 성공이 늦다고 조급해하지 마십시오. 당신의 운은 뒤로 갈수록 강력해집니다.",
    48: "만물을 통합하고 조화롭게 이끄는 지도자적 자질이 뛰어납니다. 지혜로운 조언자로 존경받을 운명입니다. 다만 지나치게 타인의 일에 간섭하여 구설에 오를 수 있으니 적절한 거리 두기를 연습하십시오.",
    49: "변화가 무쌍하여 길흉이 상반되지만, 변화에 민감하게 대응하는 순발력이 탁월합니다. 유연한 생존자입니다. 환경 탓을 하기보다 스스로 환경을 바꾸려는 적극적인 의지를 가질 때 운이 풀립니다.",
    50: "협력의 운은 좋으나 성패가 극명하게 갈릴 수 있어 세밀한 리스크 관리가 필요한 운명입니다. 평정심이 재산입니다. 도박이나 투기성 짙은 사업은 피하고 확실한 증거를 바탕으로 의사결정을 하십시오.",
    51: "인생의 사계를 모두 경험하며 파란만장하게 성장하는 기운입니다. 고난을 겪을수록 내면이 단단해집니다. 역경 속에서도 유머를 잃지 않는 여유를 가진다면 결국 승리자의 미소를 짓게 될 것입니다.",
    52: "견고한 내실과 기회 포착 능력이 결합되어 중년 이후 대업을 성취하는 지지대를 갖게 됩니다. 철저한 자기관리가 무기입니다. 다만 건강 과신으로 위기를 맞을 수 있으니 주기적인 검진과 휴식을 잊지 마십시오.",
    53: "겉모습은 화려하지만 실속이 부족할 수 있으니 내실을 다지는 데 주력해야 하는 명식입니다. 내면 수양이 성공의 열쇠입니다. 화려한 인맥보다 진심 어린 친구 한 명을 얻는 데 공을 들이십시오.",
    54: "책임감은 누구보다 강하지만 기반이 무너져 계획이 틀어질 위험이 있는 흐름입니다. 기초부터 다시 점검하십시오. 신의를 지키는 태도를 끝까지 유지한다면 반전의 기회가 반드시 찾아옵니다.",
    55: "예리한 통찰력을 가졌지만 겉치레에 치중하여 주변의 진심을 놓칠 수 있는 명식입니다. 따뜻한 마음을 회복하십시오. 겸손하고 소박한 태도로 세상을 대한다면 당신의 천재성이 비로소 빛을 발할 것입니다.",
    56: "성과를 내는 힘은 좋으나 결정적인 순간에 주저하여 기회를 놓칠 수 있습니다. 추진력과 현실 감각을 조화시키십시오. 일단 시작했다면 끝을 보겠다는 강력한 실행 의지가 당신의 운명을 바꿀 것입니다.",
    57: "시련을 극복하고 새로운 질서를 세우는 개척의 파동으로, 고난 끝에 귀감이 되는 성취를 이룹니다. 의지가 남다릅니다. 다만 과거의 성공에 안주하면 다시 위기가 올 수 있으니 항상 혁신하는 자세를 가지십시오.",
    58: "성실하게 재산을 축적하여 자수성가하는 안정된 운세입니다. 끈기와 인내로 거대한 성을 쌓는 기운입니다. 다만 인색하다는 평을 들을 수 있으니 재물을 사회와 나누는 지혜를 발휘하십시오.",
    59: "변화의 기운은 강하지만 의지가 약해 방향을 잃기 쉬운 흐름입니다. 자신만의 확실한 루틴을 만드십시오. 명확한 목표를 세우고 주변의 유혹을 뿌리치는 단호함을 길러야 성공에 도달합니다.",
    60: "내실은 있으나 주변 관계나 상하 관계의 불안으로 흔들릴 수 있는 형국입니다. 기반을 단단히 하십시오. 사람을 얻는 것이 가장 큰 투자임을 명심하고 인간관계 관리에 더 많은 에너지를 쏟으십시오.",
    61: "지혜가 충만하여 어떤 혼돈 속에서도 길을 찾아내는 현명한 지도자의 운명입니다. 조직의 핵심 축입니다. 다만 자신의 지혜를 과시하면 적이 생길 수 있으니 말수를 줄이고 행동으로 보여주십시오.",
    62: "책임감은 깊으나 예상치 못한 악재로 고전할 수 있는 흐름입니다. 유연한 태도로 위기를 넘기십시오. 이타적인 마음으로 타인을 돕다 보면 그 선행이 복이 되어 당신의 위기를 해결해 줄 것입니다.",
    63: "예리한 통찰과 꾸준한 노력이 만나 부귀영화를 누리는 아주 원만한 명식입니다. 인내의 끝에 달콤한 결실이 있습니다. 다만 풍족함에 젖어 게을러질 수 있으니 끊임없이 새로운 목표를 설정하십시오.",
    64: "지혜는 있으나 변화무쌍한 환경 탓에 잠시 정체될 수 있는 운세입니다. 슬기롭게 주변을 정리하십시오. 도약의 시기를 기다리며 실력을 쌓는 데 집중한다면 곧 거대한 기회의 문이 열릴 것입니다.",
    65: "창조의 파동이 완성과 만나 만물이 평온해지는 운명입니다. 자신의 가치를 널리 알려 명성을 얻습니다. 안정 속에서 자만하지 말고 초심을 유지한다면 그 영광은 영원히 지속될 것입니다.",
    66: "협력의 기운은 좋으나 예기치 못한 실수로 신용을 잃을 수 있습니다. 중심을 잡고 거절의 선을 분명히 하십시오. 보증이나 무리한 투자는 피하고 확실한 자기 중심을 지키는 것이 번영의 지름길입니다.",
    67: "화려한 표현력과 예술적 감각으로 대업을 완수하고 태평성대를 누리는 명식입니다. 영혼의 깊이가 남다릅니다. 다만 화려함 뒤의 고독을 느낄 수 있으니 깊은 유대감을 나눌 소중한 인연을 잘 관리하십시오.",
    68: "견고한 내실과 탁월한 지모를 결합한 창업자의 명식입니다. 흔들리지 않는 지지대를 구축하여 성공을 유지합니다. 다만 너무 엄격한 기준이 주변을 숨막히게 할 수 있으니 인간적인 여유를 보여주십시오.",
    69: "리더십은 있으나 기반이 약해 잠시 정체될 수 있는 기운입니다. 기초 체력과 내실을 보강하십시오. 통찰력을 발휘해 다가올 위기를 미리 감지하고 대비하는 신중함을 갖출 때 다시 도약할 수 있습니다.",
    70: "신의는 깊으나 공허함이 서려 계획이 무너지기 쉬운 흐름입니다. 헌신적인 태도로 명예를 얻으십시오. 보이지 않는 가치를 추구하며 타인을 돕는 활동에 매진한다면 삶의 의미를 찾고 운도 풀릴 것입니다.",
    71: "통찰력과 흔들리지 않는 내실이 결합된 완벽한 명식으로, 전문성을 바탕으로 큰 부와 명예를 누립니다. 다만 높은 위치에서 오만해지면 모든 것을 잃을 수 있으니 항상 낮은 곳을 살피는 덕을 쌓으십시오.",
    72: "추진력은 좋으나 성패의 기복이 심해 현실 감각과 리스크 관리가 절실히 필요한 명식입니다. 지혜를 짜내십시오. 감정적인 투자보다는 숫자에 기반한 냉철한 판단력을 기르는 것이 부를 지키는 비결입니다.",
    73: "지혜롭게 한 시대를 마무리하고 새로운 질서를 세우는 개척의 운명입니다. 높은 가치를 스스로 증명해냅니다. 다만 과거의 영광에 집착하면 앞길이 막힐 수 있으니 항상 미래를 향해 시선을 두십시오.",
    74: "시작의 에너지는 좋으나 만사가 불우한 마장의 흐름입니다. 인내력이 유일한 생존법입니다. 역경 속에서 스스로 길을 찾는 강인함을 기른다면 언젠가 찾아올 운명의 반전 기회를 잡을 수 있습니다.",
    75: "균형의 파동을 통해 완벽한 안정을 창출하는 통솔의 기운입니다. 협력을 통해 거대한 결실을 손에 거머쥡니다. 다만 지나친 중립이 우유부단함으로 비칠 수 있으니 결정적인 순간에는 카리스마를 보이십시오.",
    76: "표현력은 좋으나 내우외환으로 흩어지기 쉬운 영혼입니다. 중심을 잡고 성장을 완성하는 데 집중하십시오. 내실을 다지고 가족이나 가까운 사람들과의 유대를 강화하는 것이 불운을 막는 방패가 됩니다.",
    77: "내실은 있으나 성패가 교차하여 운명이 요동칩니다. 기초를 단단히 하고 지지대를 보강하십시오. 흔들리는 환경 속에서도 변치 않는 자신만의 원칙을 고수한다면 결국 최후의 승자가 될 것입니다.",
    78: "조직을 이끄는 힘은 좋으나 초반엔 길하고 후반엔 흉한 기운이 있습니다. 통찰력과 중심을 잃지 마십시오. 성공했을 때 실패를 대비하는 유비무환의 자세가 당신의 번영을 영원하게 만들어 줄 것입니다.",
    79: "신의는 있으나 안개 속에서 헤매는 정체불명의 운입니다. 유연함을 기르고 명확한 목표를 세우십시오. 실력을 감추고 때를 기다리는 은둔의 지혜를 발휘한다면 결국 명예로운 자리에 오르게 될 것입니다.",
    80: "통찰력은 깊으나 종말의 기운으로 은둔하기 쉬운 명식입니다. 유연함을 회복하고 세상과의 접점을 유지하십시오. 당신의 지혜를 사회에 환원하려는 적극적인 자세가 삶에 활력을 불어넣어 줄 것입니다.",
    81: "수리의 완성이자 무한한 순환을 의미하는 가장 성스러운 수입니다. 궁극의 지혜와 환희가 당신의 삶에 가득합니다. 모든 복을 누리되 자만하지 말고, 받은 만큼 베푸는 삶을 살 때 비로소 신의 축복이 완성됩니다."
};

const detailedDesc81En = {
    1: "A pioneer with divine leadership. You possess the energy to carve your own path. [Advice] Avoid dogmatism and listen to others.",
    2: "Gifted and intuitive. [Advantage] Creative excellence. [Caution] Environmental instability. Focus on emotional balance.",
    3: "Vibrant as a spring sprout. [Advantage] Natural fame and status. [Advice] Ensure substance behind the flashiness.",
    4: "A crisis-breaker with creative destruction. [Advantage] Breakthrough spirit. [Advice] Build a solid foundation first.",
    5: "Blessings flow naturally. [Advantage] Abundant luck and financial virtue. [Advice] Avoid complacency through self-innovation.",
    6: "A trusted successor. [Advantage] Steady growth and organizational stability. [Advice] Embrace bold challenges to avoid stagnation.",
    7: "A master with an iron will. [Advantage] Self-made expertise. [Advice] Practice flexible communication to avoid friction.",
    8: "Discovering gold in the soil. [Advantage] Extraordinary wealth accumulation. [Advice] Learn to enjoy the process, not just results.",
    9: "A pioneer with genius intellect. [Advantage] Great discoveries. [Caution] Turbulent fate. Maintain inner peace via meditation.",
    10: "Versatile and flexible. [Advantage] Adapts quickly to any field. [Advice] Focus on 'Selection and Focus' to find direction.",
    11: "A pioneer reviving a legacy. [Advantage] Earns profound trust and success. [Advice] Keep an open mind to the wider world.",
    12: "Intellectual solitude. [Advantage] Built-in artistic/academic depth. [Advice] Approach others first with flexibility.",
    13: "A divine problem-solver. [Advantage] Radiant intelligence and social charm. [Advice] Stay humble to complete your authority.",
    14: "A mental giant. [Advantage] Insightful and strategic. [Caution] Emotional volatility. Establish a strict life routine.",
    15: "Ultimate prosperity and health. [Advantage] Natural charisma and leadership. [Advice] Leave room for mistakes for others.",
    16: "A benevolent pillar. [Advantage] High virtue and financial luck. [Advice] Learn to say 'No' to avoid personal loss.",
    17: "A resolute warrior. [Advantage] Honest and courageous. [Advice] Remember that softness often overcomes hardness.",
    18: "Execution incarnate. [Advantage] Transforms plans into reality. [Advice] Listen to diverse opinions to grow further.",
    19: "An artistic genius with high sensitivity. [Advantage] Creative brilliance. [Caution] Solitude. Maintain practical fiscal skills.",
    20: "A visionary with grand ambitions. [Advantage] Macro insight. [Advice] Focus on the foundation rather than appearances.",
    21: "Majestic leader. [Advantage] Unshakable authority. [Advice] Temper your command with warmth and virtue.",
    22: "A technical expert with unique talent. [Advantage] Inventive. [Caution] Social friction. Practice careful speech.",
    23: "Solar passion radiating fame. [Advantage] Creative innovation. [Advice] Take a step back and breathe before acting.",
    24: "A wealth-builder starting from scratch. [Advantage] Natural fiscal sense. [Advice] Use your wealth for social contribution.",
    25: "A brilliant strategist finding order in chaos. [Advantage] High resourcefulness. [Advice] Prioritize ethical principles for longevity.",
    26: "A heroic figure forged by storms. [Advantage] Invincible willpower. [Advice] Cooperate with others to avoid isolation.",
    27: "A sharp analyst prone to conflict. [Advantage] Deep insight. [Advice] Practice praising others to unlock your luck.",
    28: "A weathered captain. [Advantage] Bravery in big games. [Advice] Rely on a trusted partner during long hardships.",
    29: "Established reputation and mature wisdom. [Advantage] Late-life prosperity. [Advice] Keep a youthful and open mindset.",
    30: "Fate of all seasons. [Advantage] Resilience in shifts. [Advice] Build a spiritual anchor through philosophy.",
    31: "Synergy leader. [Advantage] Success through harmony and mentors. [Advice] Cultivate independent skills to avoid over-reliance.",
    32: "Fortune-favored soul. [Advantage] Natural wealth and social success. [Advice] Maintain sincerity to keep your luck flowing.",
    33: "Imperial majesty with fierce drive. [Advantage] Formidable manifestation. [Advice] Equip yourself with humility to lead truly.",
    34: "Root-deep endurance. [Advantage] Achieving greatness after trials. [Advice] Maintain a positive mindset for the sun to rise.",
    35: "A peaceful guardian like the earth. [Advantage] Organizational harmony. [Advice] Take bold risks occasionally to leap higher.",
    36: "A dedicated knight. [Advantage] High social respect and loyalty. [Advice] Solidify your own base before helping others.",
    37: "Expert precision. [Advantage] Ultimate authority in your niche. [Advice] Develop warm empathy to connect with others.",
    38: "Achievement master. [Advantage] Artistic sense and drive. [Advice] Ensure the justice of the process matches the result.",
    39: "Exemplary peak of completion. [Advantage] Wisdom and glory. [Advice] Always maintain a humble stance at your peak.",
    40: "Pioneer fire with fluctuation. [Advantage] Strong drive. [Caution] Impatience. Focus on stable, long-term investments.",
    41: "Powerful command with human virtue. [Advantage] Achieving mass prosperity. [Advice] Balance work and rest for your health.",
    42: "Icon of self-reliance. [Advantage] Brilliant ideas tested by trials. [Advice] Complete your journey to see late-life success.",
    43: "Outer radiance meeting inner vacancy. [Advantage] Polished showmanship. [Advice] Prioritize substance over spectacle.",
    44: "Labyrinth walker turned innovator. [Advantage] Thinking outside the box. [Advice] Engage in active hobbies to ward off negativity.",
    45: "Universal integration. [Advantage] Inherited virtue and honor. [Advice] Keep honesty as your primary guiding principle.",
    46: "Insight prone to wandering. [Advantage] Keen perception. [Advice] Trust yourself and dig one well to succeed.",
    47: "Powerhouse of late-blooming success. [Advantage] Proving worth through grit. [Advice] Do not rush; your luck peaks late.",
    48: "A wise mentor guiding universal peace. [Advantage] Respect and virtue. [Advice] Practice healthy boundaries in guidance.",
    49: "Flexible survivor. [Advantage] Rapid adaptation to change. [Advice] Take an active role in changing your environment.",
    50: "Unitary luck with sharp risks. [Advantage] Good partnerships. [Advice] Avoid speculation and base decisions on facts.",
    51: "Storm-tested powerhouse. [Advantage] Inner strength through hardship. [Advice] Maintain your sense of humor during trials.",
    52: "Fortress-like solidity. [Advantage] Meticulous management for great success. [Advice] Do not over-rely on your health alone.",
    53: "Outer show but needs inner work. [Advantage] Charisma. [Advice] Invest in one true friendship over many acquaintances.",
    54: "Strong duty with shaky base. [Advantage] Loyalty. [Advice] Re-check your foundations to turn the tide for success.",
    55: "Genius clouded by vanity. [Advantage] Sharp perception. [Advice] Embrace simplicity and modesty to let your brilliance shine.",
    56: "Strong drive but prone to hesitation. [Advantage] High potential. [Advice] Commit fully once you begin the journey.",
    57: "Pioneer wave of resurrection. [Advantage] Forging new order from trials. [Advice] Innovate constantly to maintain success.",
    58: "Fortress of wealth. [Advantage] Accumulating steady prosperity. [Advice] Share your wealth to increase its noble value.",
    59: "Strong change with weak will. [Advantage] Adaptability. [Advice] Establish a firm routine and stick to your goals.",
    60: "Substance meeting shaky relations. [Advantage] Internal strength. [Advice] Managing human connections is your best investment.",
    61: "Wise leader finding order in chaos. [Advantage] Core organizational pillar. [Advice] Lead by action rather than showy words.",
    62: "Deep duty tested by woes. [Advantage] Sacrifice for others. [Advice] Your altruism will eventually be your salvation.",
    63: "Sharp insight meeting steady luck. [Advantage] Harmonious prosperity. [Advice] Set new goals constantly to avoid laziness.",
    64: "Stagnant wisdom. [Advantage] Deep potential. [Advice] Clear your surroundings and wait for the leap year.",
    65: "Primordial completion meeting peace. [Advantage] Fame and value. [Advice] Maintain your original intentions to stay glorious.",
    66: "Unity waves prone to errors. [Advantage] Collaborative spirit. [Advice] Avoid excessive risk-taking or guarantees.",
    67: "Radiant expression. [Advantage] Completing great works with depth. [Advice] Manage your close bonds to avoid late-life solitude.",
    68: "Founding strategist. [Advantage] Building a lasting legacy. [Advice] Show some human weakness to relate to others.",
    69: "Leader fire prone to standstill. [Advantage] Potential command. [Advice] Reinforce your base to prepare for the next leap.",
    70: "Faith meeting emptiness. [Advantage] High integrity. [Advice] Seek meaning in altruistic service to unlock your fate.",
    71: "Master's precision and strength. [Advantage] High wealth and expertise. [Advice] Stay grounded as you reach higher positions.",
    72: "Strong drive with sharp fluctuation. [Advantage] Strategic wit. [Advice] Use data-based logic over emotional impulse.",
    73: "Pioneer closing cycles wisely. [Advantage] Proving high value through creation. [Advice] Focus on the future, not past glory.",
    74: "Pioneer fire lost in misery. [Advantage] Survival grit. [Advice] Cultivate endurance; your turnaround will be legendary.",
    75: "Universal harmony creator. [Advantage] Success through total unity. [Advice] Be decisive in critical moments.",
    76: "Radiant but dispersed soul. [Advantage] Polished expression. [Advice] Strengthen your inner circle to block misfortune.",
    77: "Inner substance but turbulent fate. [Advantage] Unshakable principles. [Advice] Your consistency will make you the final winner.",
    78: "Leader's fire with mixed outcomes. [Advantage] Early success. [Advice] Prepare for the lean years during your peak.",
    79: "Deep faith lost in the mist. [Advantage] Quiet integrity. [Advice] Master the wisdom of seclusion to wait for your time.",
    80: "Deep insight prone to seclusion. [Advantage] Hidden sage. [Advice] Restore social connection to revitalize your energy.",
    81: "Ultimate bliss meeting completion. [Advantage] Sacred luck and wisdom. [Advice] Live a life of giving to complete the cycle."
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
/* [이름 생성 로직: 이름 (시대 지역) 형식] */
function makePastNameKo(num, strong, lack, month) {
    const name = syllableKo1[num % syllableKo1.length] + syllableKo2[(num + 7) % syllableKo2.length];
    const era = eraPastKo[num % eraPastKo.length];
    const region = regionPastKo[(num + month) % regionPastKo.length];
    return `${name}`;
}
function makePastNameEn(num, strong, lack, month) {
    const name = nameRootEn[num % nameRootEn.length] + nameTailEn[(num + 5) % nameTailEn.length];
    const era = eraPastEn[num % eraPastEn.length];
    const region = regionPastEn[(num + month) % regionPastEn.length];
    return `${name})`;
}
function makeNextLifeNameKo(num, strong, lack, month) {
    const name = syllableKo1[(num + 10) % syllableKo1.length] + syllableKo2[(num + 15) % syllableKo2.length];
    const era = eraNextKo[num % eraNextKo.length];
    const region = regionNextKo[(num + month) % regionNextKo.length];
    return `${name}`;
}
function makeNextLifeNameEn(num, strong, lack, month) {
    const name = nameRootEn[(num + 20) % nameRootEn.length] + nameTailEn[(num + 25) % nameTailEn.length];
    const era = eraNextEn[num % eraNextEn.length];
    const region = regionNextEn[(num + month) % regionNextEn.length];
    return `${name})`;
}
