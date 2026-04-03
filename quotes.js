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
        l1Desc: "성명을 단순 문자가 아닌 고유 주파수를 가진 에너지로 변환합니다. 발음 오행이 개인의 기운에 간섭하는 데이터를 수치화했습니다.",
        l2Title: "🗓️ 시계열 지표 대입 (Solar Term Time-series)",
        l2Desc: "탄생 순간의 계절적 배경을 '선천적 변수'로 설정합니다. 24절기별 에너지 밀도를 분석하여 당신의 근원적 환경을 도출합니다.",
        l3Title: "🧬 81수리 상호작용 엔진",
        l3Desc: "선천적 절기 기운과 후천적 성명 에너지의 '상생·상극' 조합을 통해 도출된 알고리즘으로 전생과 내세의 시나리오를 연산합니다."
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

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start",risk:"rigidity"},{key:"Harmony",core:"cooperation",risk:"dependency"},{key:"Growth",core:"expansion",risk:"scattered"},{key:"Foundation",core:"stability",risk:"stagnation"},{key:"Center",core:"balance",risk:"control"},{key:"Duty",core:"responsibility",risk:"overload"},{key:"Research",core:"analysis",risk:"isolation"},{key:"Result",core:"wealth",risk:"greed"},{key:"Completion",core:"closure",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

const elementPrescriptions24 = {
    "목(木)": [
        "0. 대한의 혹한을 뚫고 올라오는 강인한 자생력이 성명에 깃들어 위기에 강한 해결사 기질을 도출했습니다. 당신은 <b>신규 사업 기획자나 리스크 매니저</b>로서 무에서 유를 창조하는 선구자적 과업을 수행하게 됩니다.",
        "1. 입춘의 시작하는 기운이 성명과 만나 강력한 탄생의 에너지가 형성되었습니다. <b>스타트업 창업가나 혁신 전략가</b>로서 새로운 패러다임을 제시하고 조직을 선두에서 이끄는 사명을 완수하십시오.",
        "2. 우수의 유연함이 이름과 만나 사람의 마음을 녹이는 중재 능력을 완성했습니다. <b>인사 관리(HR) 전문가나 기업 교육 담당자</b>로서 조직의 질서를 세우고 인재를 적재적소에 배치하는 역할을 수행하십시오.",
        "3. 경칩의 각성 주파수가 이름과 결합하여 정체된 분위기를 반전시키는 혁신 감각을 도출했습니다. <b>브랜드 디렉터나 마케팅 디렉터</b>로서 정체된 조직에 새로운 생명력을 불어넣는 과업이 기다립니다.",
        "4. 춘분의 완벽한 균형이 성명에 깃들어 본질을 꿰뚫는 논리적 설계 능력이 완성되었습니다. <b>웹 아키텍트나 시스템 설계자</b>로서 복잡한 데이터를 구조화하고 시스템의 근간을 세우는 과업을 수행하십시오.",
        "5. 청명의 맑은 통찰력이 이름과 만나 타인의 잠재력을 찾아내는 가이드의 운명을 부여받았습니다. <b>전문 라이프 코치나 인재 개발 전문가</b>로서 사람의 가치를 높이고 성장을 돕는 스승의 길을 걷게 됩니다.",
        "6. 곡우의 대지를 적시는 지혜가 이름과 만나 정보를 실용적 가치로 바꾸는 능력을 도출했습니다. <b>시장 분석가나 지식 큐레이터</b>로서 방대한 데이터에서 황금을 캐내는 독보적인 전문성을 발휘하십시오.",
        "7. 입하의 푸르름이 이름과 만나 고결한 이상을 추구하는 예술적 에너지를 완성했습니다. <b>디자이너나 문화 콘텐츠 기획자</b>로서 사회에 도덕적 가치와 미학적 즐거움을 전파하는 사명을 완수하십시오.",
        "8. 소만의 성장을 돕는 햇살처럼 성명이 가진 거시적 안목이 만나 조직을 장악하는 리더십이 도출되었습니다. <b>중견기업 CEO나 고위 행정직</b>으로서 큰 흐름을 주도하며 성공의 정점에 오를 운명입니다.",
        "9. 망종의 분주함 속에서 기회를 포착하는 예리한 직관이 이름에 새겨져 승부사적 기질이 탁월합니다. <b>영업 전략 전문가나 전문 투자자</b>로서 부를 증폭시키고 실질적인 성과를 일구는 삶을 살게 됩니다.",
        "10. 하지의 강렬한 빛이 이름과 만나 불필요한 것을 쳐내고 명품을 만드는 분석력을 완성했습니다. <b>도시 설계자나 정책 기획 전문가</b>로서 완벽한 결과물을 만들어내고 본질에 집중하는 리더로 성장하십시오.",
        "11. 소서의 서서히 달궈지는 열기가 이름과 만나 내실 있는 성장을 이루는 인내심을 도출했습니다. <b>에듀테크 기획자나 서비스 운영 리더</b>로서 보이지 않는 곳에서 큰 성취를 일구는 일꾼이 되십시오.",
        "12. 대서의 극한 압박을 견디는 강인함이 이름과 만나 압박 속에서 빛나는 경영 능력을 완성했습니다. <b>구조조정 전문가나 전문 경영인</b>으로서 난제를 해결하고 조직을 회생시키는 해결사가 되십시오.",
        "13. 입추의 서늘한 판단력이 이름과 만나 완벽한 질서를 수호하는 정밀함을 도출했습니다. <b>품질 관리 실장이나 감사직 공무원</b>으로서 조직의 기준을 세우고 결함을 잡아내는 파수꾼의 역할을 수행하십시오.",
        "14. 처서의 정리하는 기운이 이름과 만나 핵심 정보를 체계화하는 분석력을 완성했습니다. <b>데이터 사이언티스트나 기록물 전문가</b>로서 지식의 체계를 세우고 정보의 가치를 극대화하는 사명을 다하십시오.",
        "15. 백로의 투명함이 이름과 만나 미세한 부분까지 놓치지 않는 장인의 에너지를 도출했습니다. <b>정밀 기계 설계자나 전문 기술 고문</b>으로서 한 분야의 대가가 되어 독보적인 명성을 떨치십시오.",
        "16. 추분의 공정함이 이름과 만나 사회적 균형을 수호하는 정의의 기운을 완성했습니다. <b>법관이나 변호사</b>로서 법과 원칙을 수호하며 회색 지대가 없는 명확한 판결로 세상의 중심을 잡는 과업을 수행하십시오.",
        "17. 한로의 서늘한 지성이 이름과 만나 미래를 대비하는 치밀한 전략적 사고 능력을 도출했습니다. <b>금융 분석가나 알고리즘 개발자</b>로서 복잡한 사회 흐름을 읽고 대안을 제시하는 책사가 되십시오.",
        "18. 상강의 엄격함이 이름과 만나 조직의 안위를 지키는 청렴한 수호자 기질을 완성했습니다. <b>보안 책임자나 사이버 수사관</b>으로서 악을 멀리하고 질서를 지키는 단단한 삶을 사십시오.",
        "19. 입동의 에너지를 비축하는 환경이 이름과 만나 깊은 곳을 꿰뚫는 지혜를 도출했습니다. <b>전략 컨설턴트나 심리 프로파일러</b>로서 인간사와 비즈니스의 이면을 읽는 핵심 인재로 활약하십시오.",
        "20. 소설의 섬세한 기운이 이름과 만나 사람의 마음을 움직이는 스토리텔링 능력을 완성했습니다. <b>예술 치료사나 방송 작가</b>로서 타인의 영혼을 어루만지고 감동적인 서사를 만드는 치유자가 되십시오.",
        "21. 대설의 포용력이 이름과 만나 지식을 나누고 세상을 깨우는 스승의 에너지를 도출했습니다. <b>대학교수나 베스트셀러 작가</b>로서 자신의 철학을 세상에 전파하고 후학을 양성하는 사명을 수행하십시오.",
        "22. 소한 전의 차가운 지혜가 이름과 만나 위기 상황에서 해답을 찾아내는 책사의 기질을 완성했습니다. <b>리스크 매니저나 보안 전문가</b>로서 조직의 뿌리를 지키고 안전한 미래를 설계하십시오.",
        "23. 소한의 극한을 뚫고 나오는 자생력이 이름에 깃들어 무에서 유를 창조하는 기획력을 도출했습니다. <b>신규 사업 개발자나 벤처 투자자</b>로서 성공의 길을 개척하는 인물이 될 운명입니다."
    ],
    "화(火)": [
        "0. 대한의 냉기를 녹이는 화로처럼 성명의 에너지가 결합하여 대중을 매료시키는 홍보 감각이 도출되었습니다. <b>광고 기획자나 스타일리스트</b>로서 트렌드의 중심에서 활약하십시오.",
        "1. 입춘의 봄 햇살과 성명의 화려함이 만나 상상력을 시각화하는 독보적인 표현력을 완성했습니다. <b>영상 크리에이터나 웹툰 작가</b>로서 자신만의 독창적인 세계를 구축하고 대중의 눈을 사로잡으십시오.",
        "2. 우수의 따뜻한 기운이 이름의 사교성과 만나 좌중을 압도하는 뛰어난 커뮤니케이션 능력을 도출했습니다. <b>행사 MC나 방송인</b>으로서 대중 앞에 설 때 당신의 가치가 가장 밝게 빛나게 됩니다.",
        "3. 경칩의 깨어나는 에너지가 이름의 기민함과 만나 변화를 포착하는 안목이 극대화되었습니다. <b>트렌드 분석가나 미디어 리포터</b>로서 새로운 흐름을 가장 먼저 알리는 시대의 메신저가 되십시오.",
        "4. 춘분의 균형 잡힌 빛이 이름과 만나 뚜렷한 존재감과 강력한 실행력을 갖춘 리더의 기질을 완성했습니다. <b>영업 팀장이나 마케팅 본부장</b>으로서 큰 성취를 거두고 조직을 주도하십시오.",
        "5. 청명의 맑은 시야가 이름의 미적 감각과 만나 공간에 생명을 불어넣는 예술적 안목을 도출했습니다. <b>인테리어 디자이너나 뷰티 디렉터</b>로서 세상을 화려하게 수놓는 미의 전도사로 활약하십시오.",
        "6. 곡우의 변화무쌍한 에너지가 이름과 만나 어떠한 상황에서도 자신을 빛나게 하는 적응력을 완성했습니다. <b>콘텐츠 기획자나 자유직 기획자</b>로서 상황에 휩쓸리지 않는 독보적인 성취를 이루십시오.",
        "7. 입하의 시작되는 열기가 이름과 만나 목표를 향해 돌진하는 압도적인 실천력을 도출했습니다. <b>기업 경영인이나 전문 사업가</b>로서 불가능해 보이던 목표를 현실로 만드는 과업을 수행하십시오.",
        "8. 소만의 번영하는 햇살과 이름의 고결함이 상호작용하여 높은 명예를 수호하는 지도자의 기질이 완성되었습니다. <b>법관이나 교육계 지도자</b>로서 존경받는 삶을 살며 사회의 어둠을 밝히십시오.",
        "9. 망종의 연결되는 기운과 이름의 사교성이 결합하여 사람을 연결하는 허브의 능력을 도출했습니다. <b>커뮤니티 매니저나 매니지먼트 대표</b>로서 최고의 수완을 발휘하며 인적 네트워크를 장악하십시오.",
        "10. 하지의 절정에 달한 빛이 성명의 스타성과 만나 자신을 브랜드화하는 강력한 감각을 완성했습니다. <b>브랜드 총괄 디렉터나 패션 디렉터</b>로서 시대를 리드하며 대중의 선망을 받는 인물이 되십시오.",
        "11. 소서의 지열 에너지가 이름과 만나 새로운 기준을 제시하는 비판적인 지적 힘을 도출했습니다. <b>사회 비평가나 정책 평론가</b>로서 세상을 일깨우고 올바른 가치를 제안하는 사명을 다하십시오.",
        "12. 대서의 극한 열기를 다스리는 성명의 제어력이 결합하여 뜨거운 가슴과 차가운 머리를 지닌 지략가를 완성했습니다. <b>M&A 전문가나 기업 전략가</b>로서 복잡한 이해관계를 풀어내는 인재가 되십시오.",
        "13. 입추의 서늘함에 대항하는 온기가 이름에 깃들어 타인의 아픔을 어루만지는 따뜻한 치유 능력을 도출했습니다. <b>심리 상담가나 복지 전문가</b>로서 소외된 곳에 온기를 전하는 삶을 사십시오.",
        "14. 처서의 정돈된 기운이 이름의 명료함과 만나 복잡한 지식을 체계화하여 전달하는 교육자 기질을 완성했습니다. <b>전문 강사나 지식 에디터</b>로서 정보의 가치를 높이고 지식을 전파하십시오.",
        "15. 백로의 투명한 이슬을 비추는 이름의 빛이 시각적 완성도를 추구하는 미학자의 재능을 도출했습니다. <b>VMD나 패션 스타일리스트</b>로서 시각적 혁명을 일으키는 아티스트로 성장하십시오.",
        "16. 추분의 공정함 속에서 이름의 판단력이 결합하여 옳고 그름을 가려내는 단호한 심판관 기질을 완성했습니다. <b>준법 감시인이나 노무사</b>로서 사회적 약속을 지키는 명예로운 과업을 수행하십시오.",
        "17. 한로의 서늘한 시기에 이름의 온기가 더해져 사람의 마음을 움직이는 강력한 메시지의 힘을 도출했습니다. <b>카피라이터나 홍보 전문가</b>로서 대중의 심장에 박히는 문장을 창조하십시오.",
        "18. 상강의 엄격한 기운 속에서도 빛나는 창의성이 공간에 생명을 불어넣는 뛰어난 능력을 완성했습니다. <b>무대 디자이너나 전시 기획자</b>로서 무에서 유를 창조하는 공간의 마술사가 되십시오.",
        "19. 입동의 에너지를 비축하는 시기에 이름의 통찰력이 결합하여 미래를 내다보는 예리한 직관을 도출했습니다. <b>트렌드 예측가나 투자 분석가</b>로서 남들이 보지 못하는 다음 기회를 선점하십시오.",
        "20. 소설의 정적인 분위기 속에서 이름의 극적인 에너지가 사람을 웃고 울리는 스토리텔링 능력을 완성했습니다. <b>시나리오 작가나 영화 감독</b>으로서 사람들의 영혼을 울리는 예술을 펼치십시오.",
        "21. 대설의 거대한 포용력과 이름의 지혜가 결합하여 지식을 체계화하고 전수하는 교육 리더의 자질을 도출했습니다. <b>대학교수나 명예로운 학자</b>로서 지성계의 거목이 되어 존경받는 삶을 사십시오.",
        "22. 소한 전의 어둠을 뚫고 나오는 이름의 빛이 고난 속에서도 희망을 제시하는 리더의 삶을 부여했습니다. <b>정치 전략가나 사회 운동가</b>로서 세상을 바꾸고 새로운 질서를 세우는 인물이 되십시오.",
        "23. 소한의 냉기를 녹이는 따뜻한 열기가 이름과 만나 대중의 마음을 움직이는 감성적 리더의 기질을 도출했습니다. <b>광고 디렉터나 홍보 전문가</b>로서 트렌드의 중심에서 명성을 쌓으십시오."
    ],
    "토(土)": [
        "0. 대한의 혹한 속에서도 모든 생명을 품는 성명의 포용력이 조직을 지탱하는 듬직한 수호자의 기질을 도출했습니다. <b>금융인이나 자산 관리사</b>로서 안정적인 경제적 터전을 구축하십시오.",
        "1. 입춘의 시작하는 기운과 대지 같은 성명이 만나 만물을 기르는 따뜻한 관리자의 자질을 완성했습니다. <b>교육 행정가나 사회복지 전문가</b>로서 공동체의 성장을 돕는 든든한 토양이 되십시오.",
        "2. 우수의 부드러운 비를 머금은 토양처럼 성명이 갈등을 흡수하는 뛰어난 중재 능력을 도출했습니다. <b>인사(HR) 매니저나 커뮤니티 개발자</b>로서 사람들 사이의 화합과 공존을 이끄십시오.",
        "3. 경칩의 역동성을 든든하게 받쳐주는 이름의 신중함이 결합하여 어떤 상황에서도 흔들리지 않는 계획가의 면모를 완성했습니다. <b>건설 감리사나 부동산 전문가</b>로서 사업의 기초를 닦으십시오.",
        "4. 춘분의 균형이 대지 위에 내려앉아 확고한 원칙과 신용을 지키는 신뢰의 아이콘 기질을 도출했습니다. <b>세무사나 공인 회계사</b>로서 독보적인 전문성을 인정받으며 질서를 수호하십시오.",
        "5. 청명의 맑은 기운 아래에서 시스템을 운영하는 성명이 비효율을 걷어내고 최적의 운영 환경을 완성했습니다. <b>일반 사무직 리더나 공인중개사</b>로서 실무의 정점에서 조직의 안정을 책임지십시오.",
        "6. 곡우의 풍요로움을 지켜내는 대지 같은 성명이 당신에게 어떠한 시련에도 굴하지 않는 전문가 기질을 부여했습니다. <b>수석 엔지니어 혹은 전문 기술 장인</b>으로서 한 분야의 대가가 되십시오.",
        "7. 입하의 시작되는 열기를 받아들이는 넓은 평원처럼 이름의 수용력이 자산 가치를 꿰뚫는 안목을 도출했습니다. <b>부동산 개발자나 감정평가사</b>로서 흔들리지 않는 부의 기초를 닦으십시오.",
        "8. 소만의 성장을 뒷받침하는 묵직한 존재감이 이름의 깊이와 만나 타인을 이끄는 멘토의 에너지를 완성했습니다. <b>대학교수나 정책 자문 위원</b>으로서 존경받는 삶을 살며 방향을 제시하십시오.",
        "9. 망종의 분주함 속에서도 전통의 가치를 보존하는 이름의 기운이 안목 있는 관리자의 감각을 도출했습니다. <b>박물관 큐레이터나 문화재 전문가</b>로서 인류의 유산을 지키는 사명을 다하십시오.",
        "10. 하지의 강렬한 에너지 아래에서 오차 없이 계산하는 성명이 감정에 휘둘리지 않는 치밀한 살림꾼의 강점을 완성했습니다. <b>예산 기획 공무원이나 세무 조사관</b>으로서 자원을 효율적으로 관리하십시오.",
        "11. 소서의 만물을 성숙시키는 인내심과 이름의 온화함이 결합하여 소외된 이들을 품고 세상의 온도를 높이는 자질을 도출했습니다. <b>사회적 기업가나 복지 전문가</b>로서 헌신하는 삶을 사십시오.",
        "12. 대서의 뜨거운 열기를 견디며 단단하게 굳어진 성명이 어떠한 압박 속에서도 흔들리지 않는 의지력을 완성했습니다. <b>현장 안전 관리자나 기술 책임자</b>로서 거대한 산업 현장을 수호하십시오.",
        "13. 입추의 결과물을 갈무리하는 냉철한 관리 능력이 이름의 정밀함과 만나 효율적인 시스템 구축의 역량을 도출했습니다. <b>공급망 관리자(SCM)나 물류 책임자</b>로서 조직의 유통을 최적화하십시오.",
        "14. 처서의 정돈된 기운과 성명의 무게감이 만나 방대한 자료를 체계적으로 분류하고 보관하는 기록자의 기질을 완성했습니다. <b>데이터 센터장이나 도서관장</b>으로서 지식의 가치를 보존하십시오.",
        "15. 백로의 투명한 이슬이 대지를 적실 때 이름의 정밀함이 세밀한 부분까지 놓치지 않는 장인의 감각을 도출했습니다. <b>치과 전문의나 정밀 기공 전문가</b>로서 섬세한 기술로 명성을 얻으십시오.",
        "16. 추분의 공정함 속에서 모두에게 공평한 기회를 제공하고 균형을 맞추는 사회적 중재자의 역량을 완성했습니다. <b>노사 조정관이나 평화 활동가</b>로서 갈등이 있는 곳에 상생의 길을 여십시오.",
        "17. 한로의 대지 속에 숨겨진 보석을 찾아내듯 이름의 투시력이 가치 있는 것을 발굴해내는 감정력을 도출했습니다. <b>골동품 감정사나 전문 투자 분석가</b>로서 안목의 대가로 인정받으십시오.",
        "18. 상강의 엄격한 기운이 이름의 강직함과 만나 흐트러진 질서를 바로잡고 원칙을 세우는 법치의 기운을 완성했습니다. <b>법무사나 행정 공무원</b>으로서 국가와 조직의 체계를 수호하십시오.",
        "19. 입동의 근본을 탐구하고 기초를 다지는 연구자의 자질이 이름의 학구열과 만나 지식의 구도자 기운을 도출했습니다. <b>고전학자나 지질학자</b>로서 세상을 지탱하는 본질적인 원리를 탐구하십시오.",
        "20. 소설의 정적인 분위기 속에서 대지 같은 성명이 사람들의 불안을 잠재우고 평온을 선사하는 상담가의 에너지를 완성했습니다. <b>명상 전문가나 상담가</b>로서 사람들의 지친 마음을 치유하십시오.",
        "21. 대설의 세상을 덮는 포용력이 이름과 만나 수많은 사람을 가르치고 키워내는 교육 공동체의 수장 역할을 도출했습니다. <b>재단 이사장이나 학교 설립자</b>로서 다음 세대의 토양을 마련하십시오.",
        "22. 소한 전의 보이지 않는 곳에서 큰 일을 도모하고 성공시키는 지략가의 면모가 이름의 신중함과 결합하여 완성되었습니다. <b>정치 전략가나 정책 연구원</b>으로서 국가의 미래를 설계하십시오.",
        "23. 소한의 차가운 땅을 지탱하는 단단한 신뢰가 성명에 깃들어 조직의 근간을 세우는 수호자의 기질을 도출했습니다. <b>자산 관리사나 행정직 공무원</b>으로서 안정적인 삶의 터전을 구축하십시오."
    ],
    "금(金)": [
        "0. 대한의 혹한 속에서 더욱 단단하게 벼려진 성명이 위기에 강한 해결사 기질을 도출했습니다. <b>경찰 간부나 외과 전문의</b>로서 승부처를 장악하고 생명과 질서를 지키는 파수꾼이 되십시오.",
        "1. 입춘의 새 기운을 정돈하는 이름의 예리함은 완벽을 추구하는 장인의 면모와 타협하지 않는 정의감을 완성했습니다. <b>감사직 공무원이나 법조인</b>으로서 사회의 부정을 걸러내는 사명을 다하십시오.",
        "2. 우수의 유연함을 단단하게 고정하는 실행력이 성명에 깃들어 구체적인 성과를 내는 실천가의 무기를 도출했습니다. <b>기술직 공무원이나 정보 보안 전문가</b>로서 결과로 가치를 증명하십시오.",
        "3. 경칩의 혼란 속에서 질서를 세우는 이름의 논리성이 무질서에서 규칙을 찾아내는 시스템 정리가의 역량을 완성했습니다. <b>데이터 관리직이나 공정 설계자</b>로서 효율적인 구조를 만드십시오.",
        "4. 춘분의 균형을 수호하는 이름의 강직함이 사회적 약속을 지키고 공정함을 실천하는 정의의 파수꾼 기질을 도출했습니다. <b>판사나 헌법 전문가</b>로서 법과 원칙을 수호하는 삶을 사십시오.",
        "5. 청명의 맑은 기운과 이름의 예리함이 만나 숙련된 기술을 가진 장인의 감각을 완성했습니다. <b>정밀 기계 설계자나 보석 세공사</b>로서 한 치의 오차도 허용하지 않는 명품 결과물을 만들어내십시오.",
        "6. 곡우의 변화를 통제하는 이름의 카리스마가 조직을 효율적으로 이끄는 강력한 리더십을 도출했습니다. <b>군 장교나 대기업 임원</b>으로서 큰 권한을 쥐었을 때 최고의 능력을 발휘하십시오.",
        "7. 입하의 열기를 견고한 결과물로 바꾸는 정밀한 안목이 당신을 디테일 전문가로 완성했습니다. <b>안과 의사나 정밀 기기 공학자</b>로서 미시적인 영역에서 거대한 성취를 이루는 전문가가 되십시오.",
        "8. 소만의 성숙함을 지켜주는 이름의 강직함이 조직 내 모순을 바로잡는 청렴한 수호자 기질을 도출했습니다. <b>준법 감시인이나 사이버 수사관</b>으로서 조직의 투명성을 책임지는 주역이 되십시오.",
        "9. 망종의 분주한 데이터를 분석하여 명쾌한 정답을 내놓는 이름의 냉철함이 리스크 예측 능력을 완성했습니다. <b>금융 분석가나 퀀트 매니저</b>로서 숫자의 흐름 속에서 승기를 잡는 지략가가 되십시오.",
        "10. 하지의 화려함 속에서도 흔들림 없는 중심을 지키며 시스템의 본질을 수호하는 강력한 방어력을 도출했습니다. <b>네트워크 보안 전문가나 하드웨어 설계자</b>로서 세상을 지탱하는 기둥이 되십시오.",
        "11. 소서의 원석을 제련하듯 스스로를 채찍질하며 한계에 도전하는 불굴의 의지력을 이름의 단련력으로 완성했습니다. <b>특수 부대원이나 스포츠 선수</b>로서 인간 승리의 드라마를 쓰는 삶을 사십시오.",
        "12. 대서의 극한 압박을 이겨내며 날카롭게 벼려진 이름의 에너지가 위기에서 빛나는 결단력을 도출했습니다. <b>구조조정 본부장이나 긴급 구호 팀장</b>으로서 혼란을 잠재우고 생명을 구하십시오.",
        "13. 입추의 결실을 가려내는 예리한 칼날처럼 옥석을 구분하고 명확한 보상을 실천하는 공정한 평가 역량을 완성했습니다. <b>벤처 캐피털리스트나 감사관</b>으로서 숨겨진 가치를 발굴하십시오.",
        "14. 처서의 본질만 남기는 시기에 이름의 명료함이 복잡한 현상을 단순화하여 해결책을 제시하는 지혜를 도출했습니다. <b>경영 컨설턴트나 프로세스 혁신 전문가</b>로서 변화를 주도하십시오.",
        "15. 백로의 투명한 이슬을 지키는 단단한 바위처럼 자신의 신념을 관철하는 강력한 독립심을 이름이 완성했습니다. <b>1인 기업가나 전문 기술 경영인</b>으로서 자신만의 확고한 제국을 건설하십시오.",
        "16. 추분의 공정함이 절정에 달했을 때 이름의 엄격함이 법과 정의를 집행하는 집행관의 기질을 도출했습니다. <b>교정직 공무원이나 세관장</b>으로서 국가의 경계를 지키는 공직자로 활약하십시오.",
        "17. 한로의 서늘한 지성이 이름과 만나 세상의 난제를 해결하는 수학적 사고와 논리적 완결성을 완성했습니다. <b>알고리즘 개발자나 수석 연구원</b>으로서 기술 발전을 선도하는 인재가 되십시오.",
        "18. 상강의 진실과 거짓을 가려내는 프로파일링 감각이 엄격한 환경과 이름의 투시력으로 도출되었습니다. <b>심리 프로파일러나 과학 수사관</b>으로서 미궁에 빠진 사건의 실마리를 찾아내십시오.",
        "19. 입동의 핵심 정보를 지키고 은밀하게 작전을 수행하는 보안 능력이 이름의 기밀성으로 완성되었습니다. <b>국가 정보 요원이나 보안 자산 관리사</b>로서 보이지 않는 곳에서 국가를 지키십시오.",
        "20. 소설의 냉철한 감성으로 시대를 풍자하고 비판하는 날카로운 필력이 이름의 예리함과 만나 도출되었습니다. <b>사회 비평가나 시사 논설위원</b>으로서 글 하나로 세상을 일깨우는 지성인이 되십시오.",
        "21. 대설의 거대한 조직 기강을 세우고 미래를 설계하는 총괄 설계자의 역량을 성명이 완성했습니다. <b>국회의원이나 정당 대표</b>로서 큰 정치를 실천하며 국가의 미래를 열어가는 지도자가 되십시오.",
        "22. 소한 전의 어둠을 뚫고 나오는 다이아몬드 같은 절대적 가치가 이름의 강직함과 결합하여 전설을 만듭니다. <b>분야별 독보적인 권위자나 외과 수술의 대가</b>로서 인류의 지적 지평을 넓히십시오.",
        "23. 소한의 차가운 냉기를 이겨낸 명검처럼 이름의 결단력이 위기 속에서 조직을 구하는 해결사 기상을 완성했습니다. <b>특수직 전문가나 검찰직 공무원</b>으로서 정의를 지키는 삶을 사십시오."
    ],
    "수(水)": [
        "0. 대한의 응축된 흐름이 성명의 지혜와 만나 <b>글로벌 유통망 설계자나 무역 전략가</b>의 자질이 도출되었습니다. 보이지 않는 물자와 자본의 흐름을 읽어 실질적인 부를 창출하는 사명을 수행하십시오.",
        "1. 입춘의 시작하는 물줄기처럼 이름이 개입하여 타인의 앞길을 여는 <b>비즈니스 컨설턴트나 여행 기획자</b>의 역량을 완성했습니다. 새로운 세계로 사람들을 인도하는 삶을 살게 됩니다.",
        "2. 우수의 비처럼 유연한 성명이 당신에게 <b>국제 물류 전문가나 외교적 중재자</b>의 능력을 부여했습니다. 복잡한 이해관계를 조율하여 국가 간, 기업 간 실질적인 이익을 창출하십시오.",
        "3. 경칩의 변화를 뚫고 흐르는 강물처럼 이름의 에너지가 당신을 <b>시장 개척자나 유통망 분석가</b>로 만들었습니다. 변화의 파도를 타고 가장 먼저 기회를 선점하는 승부사적 삶이 기다립니다.",
        "4. 춘분의 수평선처럼 정밀한 이름의 주파수가 <b>글로벌 물류 기획자나 자산 운용가</b>의 자질을 도출했습니다. 리스크를 계산하고 자원의 최적 이동 경로를 설계하는 전략가가 되십시오.",
        "5. 청명의 맑은 샘물 같은 이름의 통찰이 <b>정보 분석가나 탐사 리포터</b>의 자질을 완성했습니다. 숨겨진 진실과 가치 있는 정보를 발굴하여 세상에 알리는 신뢰의 메신저가 되십시오.",
        "6. 곡우의 지혜가 이름과 만나 방대한 데이터를 자산으로 바꾸는 <b>플랫폼 운영자나 지식 큐레이터</b>의 역량을 도출했습니다. 정보의 흐름을 통제하여 실질적인 가치를 창출하십시오.",
        "7. 입하의 열기를 식히는 이름의 냉철함이 당신을 <b>M&A 전문가나 기업 전략 컨설턴트</b>로 성장시켰습니다. 과열된 시장 환경에서도 냉정하게 승기를 잡고 해답을 제시하는 역할을 하십시오.",
        "8. 소만의 성장을 돕는 수(水) 기운이 이름과 만나 <b>인사(HR) 디렉터나 매니지먼트 전문가</b>의 리더십을 완성했습니다. 사람과 자본의 흐름을 최적화하여 조직의 가치를 높이십시오.",
        "9. 망종의 분주함 속에서도 고유한 길을 내는 성명이 <b>공급망 관리(SCM) 전문가나 물류 시스템 설계자</b>의 자질을 도출했습니다. 전 세계를 잇는 거대한 유통 체계를 구축하십시오.",
        "10. 하지의 빛을 지혜로 바꾸는 이름의 주파수가 <b>글로벌 비즈니스 전략가나 지식 공유 리더</b>의 운명을 완성했습니다. 큰 판을 짜고 사람들을 올바른 길로 이끄는 거목이 되십시오.",
        "11. 소서의 지열을 다스리는 깊은 물처럼 이름의 정화력이 <b>인사(HR) 컨설턴트나 심리 상담가</b>의 자질을 도출했습니다. 조직의 갈등을 씻어내고 평화를 유지하는 과업을 수행하십시오.",
        "12. 대서의 극한 압박 속 오아시스 같은 이름의 생명력이 <b>기업 위기 관리자나 전문 지략가</b>의 역량을 완성했습니다. 난제를 해결하고 최선의 해답을 제시하는 지혜의 안내자가 되십시오.",
        "13. 입추의 가치를 갈무리하는 지성이 이름과 만나 <b>국가 기록물 관리사나 지식 사학자</b>의 능력을 도출했습니다. 지혜를 보존하여 미래의 이정표를 세우는 사명을 다하십시오.",
        "14. 처서의 정돈된 기운 아래 흐르는 이름의 선별력이 <b>프라이빗 뱅커(PB)나 럭셔리 마케터</b>의 안목을 완성했습니다. 가치 있는 소수와 깊은 신뢰를 쌓고 자산을 증식시키는 일을 수행하십시오.",
        "15. 백로의 투명한 이슬처럼 영롱한 직관이 이름과 만나 <b>작곡가나 시공간 디자이너</b>의 예술적 재능을 도출했습니다. 새로운 서사를 창조하여 대중의 영혼을 울리는 아티스트의 길을 걸으십시오.",
        "16. 추분의 공정함 속에서 법의 정신을 해석하는 이름의 지혜가 <b>인권 변호사나 국제법 전문가</b>의 과업을 완성했습니다. 사람의 권리를 수호하는 법의 정수를 실천하는 인물이 되십시오.",
        "17. 한로의 심리를 수학적으로 분석하는 능력이 이름의 데이터 분석력과 만나 <b>UX 전략가나 행동 분석가</b>의 자질을 도출했습니다. 디지털 시대의 마음의 지도를 그리는 전문가가 되십시오.",
        "18. 상강의 서리가 내리는 시기에 생명을 복원하는 치유력이 <b>재활 전문의나 유물 복원가</b>의 역량을 완성했습니다. 사라져가는 것들에 숨을 불어넣는 숭고한 복원자의 길을 가십시오.",
        "19. 입동의 에너지를 비축하는 시기에 이름의 통찰력이 더해져 <b>양자 물리학자나 미래 기술 연구원</b>의 자질을 도출했습니다. 세상의 근본적인 해답을 탐구하는 지식의 구도자가 되십시오.",
        "20. 소설의 정적 속에서 인생의 허무를 지혜로 승화시키는 통찰이 <b>인문학 스승이나 수필가</b>의 기질을 완성했습니다. 현대인들에게 멈춤과 사색의 가치를 전하는 과업을 수행하십시오.",
        "21. 대설의 세상을 덮는 포용력과 이름의 지혜가 <b>지식 플랫폼 CEO나 도서관장</b>의 역량을 도출했습니다. 인류의 지적 유산을 체계화하여 널리 공유하는 지식의 거물이 되십시오.",
        "22. 소한 전의 미지의 영역을 개척하는 신비로운 에너지가 이름과 만나 <b>특수직 전문가나 창의적 예술가</b>의 운명을 완성했습니다. 세상을 놀라게 할 독창성을 발휘하는 삶이 기다립니다.",
        "23. 소한의 차가운 물속 깊은 지혜가 이름과 만나 위기에 강한 <b>글로벌 유통 관리자나 무역 정책가</b>의 기상을 완성했습니다. 복잡한 정세 속에서 명쾌한 답을 제시하십시오."
    ]
};
const enPrescriptions24 = {
    "목(木)": [
        "0. Major Cold (Daehan): The condensed vitality of the extreme cold, combined with your name, has derived an energy for creating something from nothing as a <b>New Business Builder or Risk Manager</b>. You will fulfill the pioneer mission of paving your own path under pressure.",
        "1. Start of Spring (Ipchun): The budding energy of spring met the life force of your name to form a powerful creative drive. Take the lead as a <b>Startup Founder or Innovation Strategist</b> to suggest new paradigms and lead your organization.",
        "2. Rain Water (Usu): The flexible energy of the earth-soaking rain met your name to complete a superior mediation ability. Serve as an <b>HR Strategist or Corporate Trainer</b> to establish order and place the right talent in the right positions.",
        "3. Insects Awaken (Gyeongchip): The awakening frequency of nature combined with your name's pulse to derive an innovative sense that reverses stagnant situations. Your mission is to breathe new life into organizations as a <b>Brand or Marketing Director</b>.",
        "4. Spring Equinox (Chunbun): The perfect balance of day and night resides in your name, deriving a precise design capability to structuralize the essence. Fulfill your role as a <b>Web Architect or Systems Designer</b> to build the foundations of complex systems.",
        "5. Bright and Clear (Cheongmyeong): The clear insight of the season met your name's Wood energy, granting you the destiny of a compassionate guide. Live a life of growing others as a <b>Professional Life Coach or Talent Development Expert</b>.",
        "6. Grain Rain (Gogu): The environment of the 'Rain for Grain' met your name to derive the ability to turn information into practical value. Demonstrate your unique expertise as a <b>Market Analyst or Knowledge Curator</b> to find gold in vast data.",
        "7. Start of Summer (Ipha): The starting heat met your name to complete an execution power that rushes toward goals. Perform the task of expanding business scales as a <b>Sales Director or Project Manager</b>.",
        "8. Grain Full (Soman): The macroscopic perspective of your name met the growth-accelerating sunlight to derive leadership that commands an organization. You are destined to reach the peak of success as a <b>CEO or High-level Administrator</b>.",
        "9. Grain in Ear (Mangjong): A sharp intuition to seize opportunities in a busy flow is engraved in your name, showing a superior gambler's temperament. Live a life of amplifying wealth as a <b>Professional Investor or Sales Strategist</b>.",
        "10. Summer Solstice (Haji): Even under intense light, your name completed a precise analytical power to filter out the unnecessary. Grow as a leader focusing on the essence as an <b>Urban Planner or Policy Planning Expert</b>.",
        "11. Minor Heat (Soseo): The gradually heating energy met your name to derive the persistence for substantial growth. Become a worker achieving real results behind the scenes as an <b>Edutech Planner or Service Operations Leader</b>.",
        "12. Major Heat (Daeseo): The resilience to withstand extreme pressure met your name to complete a management ability that shines in crises. Become a solver who revitalizes organizations as a <b>Restructuring Specialist or Crisis Manager</b>.",
        "13. Start of Autumn (Ipchu): The cool judgment predicting the harvest met your name to derive a precision that protects perfect order. Serve as a <b>Quality Assurance Manager or Audit Official</b> to set standards and catch flaws.",
        "14. End of Heat (Cheoseo): The organizing energy met your name to complete an analytical power to structuralize core information. Fulfill the mission of maximizing information value as a <b>Data Scientist or Records Specialist</b>.",
        "15. White Dew (Baekro): The transparency of the dew met your name's perfectionism to derive the energy of a sophisticated master. Reach the pinnacle of your field as a <b>Precision Machine Designer or Technical Consultant</b>.",
        "16. Autumn Equinox (Chubun): In an environment ruled by fairness, your name added uprightness to derive an energy of social balance. Perform the task of protecting laws and principles as a <b>Judge or Lawyer</b> with clear judgment.",
        "17. Cold Dew (Hallo): The cool intelligence met your name to derive a sophisticated strategic thinking ability for the future. Become a brain reading complex social flows as a <b>Financial Analyst or Policy Planner</b>.",
        "18. Frost Descends (Sanggang): The strictness of the frost met your name to derive a clean guardian's temperament protecting the organization. Live a solid life of maintaining order as a <b>Security Chief or Cyber Investigator</b>.",
        "19. Start of Winter (Ipdong): The static environment of storing energy met your name to derive a wisdom that pierces deep into the truth. Act as a key talent reading the hidden sides of business as a <b>Strategy Consultant or Profiler</b>.",
        "20. Light Snow (Soseol): The sensitive atmosphere met your name's artistic pulse to complete a storytelling ability that moves hearts. Become a healer who touches souls as an <b>Art Therapist or Scriptwriter</b>.",
        "21. Heavy Snow (Daeseol): The tolerance of the snow met your name to derive the energy of a teacher who shares knowledge. Perform the mission of spreading your philosophy as a <b>University Professor or Bestselling Author</b>.",
        "22. Before Minor Cold: The cold wisdom before the peak winter met your name to complete a strategist's temperament. Protect the roots of your organization as a <b>Risk Manager or Security Expert</b>.",
        "23. Minor Cold (Sohan): The resilience to pierce through frozen ground met your name to complete a planning power for creating from nothing. You are destined to pave the way for success as a <b>New Business Developer or Venture Capitalist</b>."
    ],
    "화(火)": [
        "0. Major Cold (Daehan): Your name acts as a furnace melting the chill, deriving a promotional sense that fascinates the public. Shine at the center of trends as an <b>Advertising Planner or Stylist</b>.",
        "1. Start of Spring (Ipchun): The spring warmth and your name's brilliance met to complete a unique expression that visualizes imagination. Build your own world as a <b>Video Creator or Webtoon Artist</b>.",
        "2. Rain Water (Usu): Warm energy met your name's sociability to derive superior communication skills. Your value shines brightest when standing before the public as an <b>Event MC or Broadcaster</b>.",
        "3. Insects Awaken (Gyeongchip): Awakening energy met your name's agility to maximize your eye for catching trends. Become a messenger of the era as a <b>Trend Analyst or Media Reporter</b>.",
        "4. Spring Equinox (Chunbun): Balanced light met your name to complete a leader's temperament with a strong presence. Lead the organization's growth as a <b>Sales Lead or Marketing Director</b>.",
        "5. Bright and Clear (Cheongmyeong): Clear vision met your name's aesthetic sense to derive an artistic eye for breathing life into spaces. Act as an <b>Interior Designer or Beauty Director</b>.",
        "6. Grain Rain (Gogu): Versatile energy met your name to complete a breakthrough adaptability. Achieve unique results as a <b>Content Planner or Freelance Strategist</b> regardless of the situation.",
        "7. Start of Summer (Ipha): Starting heat met your name to derive an overwhelming passion. Perform the task of turning impossible goals into reality as a <b>Professional CEO or Entrepreneur</b>.",
        "8. Grain Full (Soman): Prosperous sunlight and your name's nobility interacted to complete a leader's temperament. Live a respected life as a <b>Judge or Educational Leader</b>.",
        "9. Grain in Ear (Mangjong): Connecting energy and your name's sociability derived a hub's capability. Demonstrate the best skills in networking as a <b>Community Manager or Management CEO</b>.",
        "10. Summer Solstice (Haji): Peak light met your name's stardom to complete a powerful branding sense. Become a figure leading the era as a <b>Brand Director or Influencer</b>.",
        "11. Minor Heat (Soseo): Ground heat energy met your name to derive an intellectual power. Fulfill your mission as a <b>Social Critic or Policy Commentator</b> who awakens the world.",
        "12. Major Heat (Daeseo): Your name's control over extreme heat completed a strategist with a hot heart and a cool head. Act as an <b>M&A Specialist or Corporate Strategist</b>.",
        "13. Start of Autumn (Ipchu): Warmth against the coolness resides in your name to derive a healing ability for others' pain. Live as a <b>Psychological Counselor or Welfare Specialist</b>.",
        "14. End of Heat (Cheoseo): Organized energy met your name's clarity to complete an educator's temperament. Grow as an expert increasing information value as a <b>Professional Lecturer or Knowledge Editor</b>.",
        "15. White Dew (Baekro): The light of your name shining on transparent dew derived an aesthetician's talent. Grow as an artist creating a visual revolution as a <b>VMD or Fashion Stylist</b>.",
        "16. Autumn Equinox (Chubun): In fairness, your name's judgment combined to complete a firm judge's temperament. Perform the honorable task of realizing social justice as a <b>Compliance Officer or Labor Attorney</b>.",
        "17. Cold Dew (Hallo): Warmth in a cool season derived a powerful message that moves hearts. Create sentences that pierce the public's heart as a <b>Copywriter or PR Specialist</b>.",
        "18. Frost Descends (Sanggang): Brilliant creativity even in strict air completed a superior ability to create spatial aesthetics. Become a master of space as a <b>Stage Designer or Exhibition Curator</b>.",
        "19. Start of Winter (Ipdong): Energy storage period met your name's insight to derive a sharp intuition for the future. Suggest advanced visions as a <b>Trend Predictor or Investment Analyst</b>.",
        "20. Light Snow (Soseol): In a static atmosphere, your name's dramatic energy completed a storytelling ability. Realize your self as a <b>Scriptwriter or Movie Director</b>.",
        "21. Heavy Snow (Daeseol): Immense tolerance and your name's wisdom derived the quality of an educational leader. Live a respected life as a <b>University Professor or Scholar</b>.",
        "22. Before Minor Cold: Your name's fire shining in the dark gave you a leader's life that suggests hope in hardship. Become a <b>Political Strategist or Social Activist</b> setting new order.",
        "23. Minor Cold (Sohan): Warm heat melting the chill met your name to derive an emotional leader's temperament. Build fame at the center of trends as an <b>Advertising Director or PR Expert</b>."
    ],
    "토(土)": [
        "0. Major Cold (Daehan): Your name's tolerance in extreme cold derived a reliable guardian's temperament. Build a stable economic foundation as a <b>Financial Professional or Asset Manager</b>.",
        "1. Start of Spring (Ipchun): Budding energy met your Earth-like name to complete a warm manager's quality. Become a solid soil for community growth as an <b>Educational Administrator or Welfare Specialist</b>.",
        "2. Rain Water (Usu): Like fertile soil soaking in rain, your name derived a superior mediation ability. Lead harmony and coexistence as an <b>HR Manager or Community Developer</b>.",
        "3. Insects Awaken (Gyeongchip): Your name's prudence supporting the dynamic energy completed a flawless planner's face. Lay the foundation for business as an <b>Architect or Urban Planner</b>.",
        "4. Spring Equinox (Chunbun): Balance descending on the earth derived a trusted icon temperament. Establish unique professional credibility as a <b>Tax Accountant or CPA</b>.",
        "5. Bright and Clear (Cheongmyeong): Your name, operating systems under clear air, completed the ability to optimize operations. Take responsibility for stability at the peak of practice as a <b>Office Leader or Realtor</b>.",
        "6. Grain Rain (Gogu): Earth-like name protecting the abundance gave you a persistent expert temperament. Become a master of one field as a <b>Chief Engineer or Technical Master</b>.",
        "7. Start of Summer (Ipha): Like a wide plain accepting the heat, your name's receptivity derived an eye for asset value. Lay the foundation for wealth as a <b>Real Estate Developer or Appraiser</b>.",
        "8. Grain Full (Soman): Heavy presence supporting growth met your name's depth to complete a mentor's energy. Live as a respected leader as a <b>University Professor or Policy Advisor</b>.",
        "9. Grain in Ear (Mangjong): Your name's energy preserving tradition in a busy flow derived a savvy manager's sense. Protect human legacy as a <b>Museum Curator or Cultural Heritage Expert</b>.",
        "10. Summer Solstice (Haji): Under intense energy, your name's precision completed a meticulous housekeeper's strength. Manage resources efficiently as a <b>Budget Planning Official or Tax Investigator</b>.",
        "11. Minor Heat (Soseo): Endurance maturing all things and your name's gentleness derived a welfare expert's quality. Live a life of devotion as a <b>Social Entrepreneur or Welfare Director</b>.",
        "12. Major Heat (Daeseo): Your name, hardened by intense heat, completed an iron-like will. Protect huge industrial sites as a <b>Safety Manager or Technical Lead</b>.",
        "13. Start of Autumn (Ipchu): Cool management ability to organize results met your name's precision to derive logistics expertise. Optimize distribution as a <b>Supply Chain Manager (SCM) or Logistics Chief</b>.",
        "14. End of Heat (Cheoseo): Organized energy and your name's weight met to complete a recorder's temperament. Preserve the value of knowledge as a <b>Data Center Chief or Library Director</b>.",
        "15. White Dew (Baekro): When clear dew soaks the earth, your name's precision derived a master's sense. Demonstrate luxury skills as a <b>Dentist or Precision Specialist</b>.",
        "16. Autumn Equinox (Chubun): In fairness, your name completed a social mediator's capability to provide equal opportunity. Open the path to win-win as a <b>Labor Mediator or Peace Activist</b>.",
        "17. Cold Dew (Hallo): Like finding jewels in the earth, your name's X-ray vision derived appraisal skills. Be recognized as a master of insight as an <b>Antique Appraiser or Investment Analyst</b>.",
        "18. Frost Descends (Sanggang): Strict energy met your name's uprightness to complete a legal energy. Protect national and organizational systems as a <b>Judicial Scrivener or Administrative Official</b>.",
        "19. Start of Winter (Ipdong): Researcher's quality to explore roots met your name's academic passion. Explore fundamental principles as a <b>Classicist or Geologist</b>.",
        "20. Light Snow (Soseol): In a static atmosphere, your Earth-like name completed a counselor's energy. Heal people's tired minds as a <b>Meditation Expert or Counselor</b>.",
        "21. Heavy Snow (Daeseol): Immense tolerance met your name to derive the role of a leader in a huge educational community. Lay the soil for the next generation as a <b>Foundation Chairperson or School Founder</b>.",
        "22. Before Minor Cold: A strategist's face to plan and succeed secretly combined with your name's prudence. Design the nation's future as a <b>Political Strategist or Policy Researcher</b>.",
        "23. Minor Cold (Sohan): Firm trust supporting the cold ground resides in your name to derive a guardian's temperament. Build a stable foundation as an <b>Asset Manager or Administrative Official</b>."
    ],
    "금(金)": [
        "0. Major Cold (Daehan): Your name, hardened in extreme cold, derived a solver's temperament in crises. Become a resolute guardian of justice as a <b>Police Official or Surgeon</b>.",
        "1. Start of Spring (Ipchun): Your name's sharpness organizing new energy completed a master's face and uncompromising justice. Filter out social corruption as an <b>Audit Official or Legal Professional</b>.",
        "2. Rain Water (Usu): Execution power firmly fixing flexibility resides in your name to derive a practitioner's weapon. Prove your value with results as a <b>Technical Official or Security Specialist</b>.",
        "3. Insects Awaken (Gyeongchip): In chaos, your name's logic completed a system organizer's capability to find rules in disorder. Create efficient structures as a <b>Data Scientist or Process Designer</b>.",
        "4. Spring Equinox (Chunbun): Your name's uprightness protecting balance derived a justice guardian's temperament. Live a life of protecting laws as a <b>Judge or Constitutional Expert</b>.",
        "5. Bright and Clear (Cheongmyeong): Clear energy and your name's sharpness met to complete a master's sense with skilled technology. Create masterworks without a single error as a <b>Precision Machine Designer or Jeweler</b>.",
        "6. Grain Rain (Gogu): Your name's charisma controlling changing energy derived powerful leadership. Demonstrate your best abilities as a <b>Military Officer or Corporate Executive</b>.",
        "7. Start of Summer (Ipha): Precise eye turning heat into solid results completed you as a detail expert. Achieve great success in microscopic areas as an <b>Ophthalmologist or Precision Engineer</b>.",
        "8. Grain Full (Soman): Your name's uprightness protecting maturity derived a noble guardian's temperament. Take responsibility for transparency as a <b>Compliance Officer or Cyber Investigator</b>.",
        "9. Grain in Ear (Mangjong): Your name's cold brain analyzing busy data completed a risk prediction ability. Become a cool strategist winning in the flow of numbers as a <b>Financial Analyst or Quant Manager</b>.",
        "10. Summer Solstice (Haji): Even in brilliance, your name's Metal energy derived a powerful defense to protect systems. Support the world as a <b>Network Security Specialist or Hardware Designer</b>.",
        "11. Minor Heat (Soseo): Refining raw ore in heat, your name completed an indomitable will to challenge limits. Live a life of overcoming limits as a <b>Special Forces Member or Athlete</b>.",
        "12. Major Heat (Daeseo): Sharp Metal energy withstanding extreme pressure derived bold decisiveness. Save lives and calm chaos as a <b>Restructuring Chief or Emergency Relief Lead</b>.",
        "13. Start of Autumn (Ipchu): Like a sharp blade in harvest, your name completed a fair evaluator's capability to distinguish gold from dross. Discover hidden values as a <b>Venture Capitalist or Auditor</b>.",
        "14. End of Heat (Cheoseo): In the season of essence, your name's clarity derived wisdom to simplify complex phenomena. Lead change as a <b>Management Consultant or Process Innovation Expert</b>.",
        "15. White Dew (Baekro): Like a hard rock protecting dew, your name completed a strong independence to pursue beliefs. Build your own empire as a <b>Creative Artist or Solopreneur</b>.",
        "16. Autumn Equinox (Chubun): When fairness peaks, your name's strictness derived a firm executioner's temperament. Protect national borders as a <b>Correctional Official or Customs Chief</b>.",
        "17. Cold Dew (Hallo): Cool intelligence met your name to complete mathematical thinking and logical perfection. Lead technological progress as an <b>Algorithm Developer or Chief Researcher</b>.",
        "18. Frost Descends (Sanggang): Profiling sense to distinguish truth from lies was derived by strict air and your name's X-ray vision. Find clues in mysteries as a <b>Profiler or Forensic Scientist</b>.",
        "19. Start of Winter (Ipdong): Security ability to protect core info and perform secret operations was completed by your name. Contribute to national security as an <b>Intelligence Agent or Asset Manager</b>.",
        "20. Light Snow (Soseol): Sharp writing power to satirize and criticize the era was derived by your name's sharpness. Become an intellectual checking power with your pen as a <b>Social Critic or Columnist</b>.",
        "21. Heavy Snow (Daeseol): General designer capability to establish order and plan the future was completed by your name. Become a leader opening the nation's future as a <b>National Assembly Member or Party Leader</b>.",
        "22. Before Minor Cold: Absolute value like a diamond breaking through darkness creates a legend with your name's uprightness. Contribute to humanity as a <b>Legendary Master or Authority in Surgery</b>.",
        "23. Minor Cold (Sohan): Like a master sword that overcame the chill, your name's decisiveness completed a solver's spirit. Protect justice as a <b>Special Ops Specialist or Prosecution Official</b>."
    ],
    "수(水)": [
        "0. Major Cold (Daehan): Your condensed wisdom met your name to derive a strategist's temperament. Create real wealth by circulating goods and capital as a <b>Global Logistics Architect or Trade Strategist</b>.",
        "1. Start of Spring (Ipchun): Like a budding stream, your name intervened to complete a guide's capability. Lead people to new worlds as a <b>Business Consultant or Travel Planner</b>.",
        "2. Rain Water (Usu): Your flexible name gave you an international talent's capability like the soaking rain. Maximize interests by mediating complex relations as an <b>International Logistics Expert or Diplomat</b>.",
        "3. Insects Awaken (Gyeongchip): Your name's energy made you a pioneer like a river breaking through changes. A gambler's life of seizing opportunities first awaits you as a <b>Market Pioneer or Supply Chain Analyst</b>.",
        "4. Spring Equinox (Chunbun): Like a calm horizon, your name's precision completed a strategist's quality. Become a strategist designing the optimal distribution routes as a <b>Global Logistics Planner or Asset Manager</b>.",
        "5. Bright and Clear (Cheongmyeong): Transparent insight like a clear spring resides in your name to derive an analyst's quality. Discover and share hidden truths as an <b>Information Analyst or Investigative Reporter</b>.",
        "6. Grain Rain (Gogu): The 'Rain of Wisdom' completed the ability to turn data into assets with your name. Create value by controlling the flow of information as a <b>Platform Operator or Knowledge Curator</b>.",
        "7. Start of Summer (Ipha): Your name's coolness cooling the heat grew you into a strategist. Seize victory in overheated markets as an <b>M&A Specialist or Corporate Strategy Consultant</b>.",
        "8. Grain Full (Soman): Nutrient-like Water energy met your name's wisdom to complete leadership. Optimize the flow of people and capital as an <b>HR Director or Management Expert</b>.",
        "9. Grain in Ear (Mangjong): Your name's power to carve its own path in a busy flow derived an intelligence capability. Build huge global distribution systems as a <b>Supply Chain Management (SCM) Expert</b>.",
        "10. Summer Solstice (Haji): Your name's frequency sublimating light into wisdom completed a leader's destiny. Design the big picture and lead people as a <b>Global Business Strategist or Thought Leader</b>.",
        "11. Minor Heat (Soseo): Deep water controlling ground heat derived a purification ability. Maintain peace by washing away organizational conflicts as an <b>HR Consultant or Psychological Counselor</b>.",
        "12. Major Heat (Daeseo): Life force like an oasis in extreme pressure completed a solver's capability. Resolve difficulties and suggest the best answers as a <b>Crisis Manager or Professional Strategist</b>.",
        "13. Start of Autumn (Ipchu): Intelligence maturing values met your name to derive a keeper's ability. Preserve wisdom as a <b>National Records Manager or Knowledge Historian</b>.",
        "14. End of Heat (Cheoseo): Discriminating insight flowing under organized energy completed an eye for quality. Build deep trust with elite networks as a <b>Private Banker (PB) or Luxury Marketer</b>.",
        "15. White Dew (Baekro): 영롱한 (Brilliant) artistic intuition like transparent dew met your name to derive artistic talent. Move people's souls as a <b>Composer or Space Designer</b>.",
        "16. Autumn Equinox (Chubun): Wisdom of interpretation in fairness completed a human rights mission. Practice the essence of law beyond text as a <b>Human Rights Lawyer or International Law Expert</b>.",
        "17. Cold Dew (Hallo): Mathematical analysis of psychology met your name's data analytics to derive a strategist's quality. Design the maps of minds as a <b>UX Strategist or Behavioral Analyst</b>.",
        "18. Frost Descends (Sanggang): Healing wisdom to restore life in the frost season was derived by your name. Go the path of a restorer as a <b>Rehab Specialist or Cultural Heritage Restorer</b>.",
        "19. Start of Winter (Ipdong): Insight added in the energy storage season derived a seeker's quality. Explore the fundamental answers of the world as a <b>Quantum Physicist or Future Tech Researcher</b>.",
        "20. Light Snow (Soseol): Insight sublimating life's futility into wisdom completed an intellectual temperament. Share the value of 사색 (contemplation) as a <b>Humanities Teacher or Essayist</b>.",
        "21. Heavy Snow (Daeseol): Immense tolerance and wisdom met to derive the capability of an intellectual giant. Systematize human knowledge as a <b>Knowledge Platform CEO or Library Director</b>.",
        "22. Before Minor Cold: Mysterious energy pioneering unknown areas completed an artist's destiny. Demonstrate originality that surprises the world as a <b>Special Ops Specialist or Creative Artist</b>.",
        "23. Minor Cold (Sohan): Deep wisdom in cold water met your name to complete a solver's spirit. Suggest clear answers in complex global affairs as a <b>Global Distribution Lead or Trade Policy Planner</b>."
    ]
};
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

const solarTermData = {
    0: { 
        ko: "수(水)의 침잠하는 기운이 토(土)의 절제력을 만나 생명의 불꽃을 깊은 곳에 응축하는 시기입니다. 당신은 어떤 극한의 환경에서도 본연의 빛을 잃지 않는 고결한 생존 본능과 집념을 가졌습니다. 겉으로는 고요한 호수 같으나 내면에는 거대한 지각 변동을 일으킬 뜨거운 화(火)의 에너지가 용트림하고 있는 외유내강의 전형입니다.", 
        en: "A period where the sinking energy of Water meets the restraint of Earth to condense the flame of life deep within. You possess a noble survival instinct and tenacity that never loses its brilliance even in extremes. While calm like a still lake on the surface, you are the epitome of inner strength, harboring a fiery energy capable of shifting grand tectonic plates." 
    },
    1: { 
        ko: "차가운 토(土)를 뚫고 목(木)의 생명력이 솟구치며 새로운 우주의 시작을 알리는 때입니다. 당신은 무(無)에서 유(U)를 설계하는 탁월한 선구자적 감각을 지녔습니다. 겨울의 시련을 이겨낸 강인한 목기(木氣)는 남들이 보지 못하는 가능성을 먼저 발견하며, 당신의 발걸음은 주변의 정체된 흐름을 깨우는 강력한 파동이 됩니다.", 
        en: "A time when the vitality of Wood pierces through the frozen Earth, signaling the start of a new universe. You possess an exceptional pioneering sense for designing existence from nothingness. Your strong Wood energy, having endured winter, discovers possibilities unseen by others, and your every step creates a powerful wave that awakens stagnant surroundings." 
    },
    2: { 
        ko: "수(水)의 유연함이 목(木)의 성장판을 적시며 대지를 부드럽게 녹이는 시기입니다. 이 기운을 타고난 당신은 굳어있는 상황을 유연하게 해소하는 천부적인 중재 능력을 갖추었습니다. 어떤 환경에서도 물처럼 스며들어 최선의 결과를 도출해내는 처세술과, 타인의 마음을 어루만지는 깊은 공감 능력이 당신의 가장 큰 무기입니다.", 
        en: "A period where the flexibility of Water moistens the growth plates of Wood, gently melting the earth. Born with this vibration, you have a natural talent for resolving rigid situations. Your greatest weapons are the social wit to seep into any environment like water to draw out the best results, and a deep empathy that touches the hearts of others." 
    },
    3: { 
        ko: "지하에 갇혔던 목(木)의 에너지가 화(火)의 섬광을 만나 폭발적으로 도약하는 역동적인 때입니다. 당신은 정체된 분위기를 단숨에 반전시키는 강력한 혁신가적 기질을 가졌습니다. 남들이 망설일 때 가장 먼저 행동으로 옮기는 용기는 주변을 이끌어 새로운 차원의 변화를 만들어내는 강력한 엔진이 됩니다.", 
        en: "A dynamic time when the Wood energy trapped underground meets the flash of Fire to take an explosive leap. You possess a powerful innovator's temperament that can reverse stagnation in an instant. Your courage to act while others hesitate serves as a mighty engine that leads others to create new dimensions of change." 
    },
    4: { 
        ko: "음과 양이 완벽한 균형을 이루며 목(木)의 에너지가 가장 순수하게 집중되는 정점의 시기입니다. 당신은 굽히지 않는 소신과 타인을 올바른 길로 인도하는 고귀한 교육적 자질을 타고났습니다. 본인의 가치관을 명확히 세워 흔들림 없이 나아가는 강직한 성품은 혼탁한 세상에서 만인의 귀감이 됩니다.", 
        en: "The peak moment when Yin and Yang reach perfect balance, and Wood energy is concentrated in its purest form. You are born with unyielding convictions and a noble gift for guiding others onto the right path. Your rigid integrity in pursuing clear values makes you a role model for all in a turbulent world." 
    },
    5: { 
        ko: "목(木)의 이상이 토(土)의 현실감을 만나 만물의 형체가 선명해지는 청명한 때입니다. 당신은 티 없이 맑은 통찰력과 높은 도덕적 기준을 부여받았습니다. 복잡한 세상의 본질을 꿰뚫어 보고 가장 정의로운 길을 제시하는 현명한 가이드로서, 당신이 머무는 곳은 언제나 질서와 밝은 기운이 충만합니다.", 
        en: "A lucid time when the ideals of Wood meet the realism of Earth, making the forms of all things distinct. Endowed with untainted insight and high moral standards, you act as a wise guide who pierces through world complexities to show the most righteous path, filling wherever you stay with order and brilliance." 
    },
    6: { 
        ko: "목(木)의 성장이 토(土)의 풍요로 변모하며 화(火)의 발산을 준비하는 지혜가 모이는 시기입니다. 당신은 성장의 에너지를 실질적인 자산과 성과로 바꾸는 탁월한 경영 능력을 가졌습니다. 변화하는 환경에 맞춰 자신을 최적화하는 유연한 감각은 당신을 어떤 경쟁 속에서도 최후의 승자로 만듭니다.", 
        en: "A period where Wood's growth transforms into Earth's abundance, gathering wisdom to prepare for Fire's radiation. You possess exceptional managerial skills to turn growth energy into realistic assets. Your flexible sense for optimizing yourself according to the environment ensures you emerge as the ultimate victor in any competition." 
    },
    7: { 
        ko: "목(木)의 생명력이 화(火)의 열기로 전이되어 이상향을 향해 돌진하는 에너지의 시기입니다. 당신은 주변의 기운을 한순간에 고조시키는 뜨거운 열정과 긍정적인 파동을 지녔습니다. 존재만으로도 조직에 활력을 불어넣고 대중을 매료시키는 태양과 같은 강력한 카리스마를 발휘하게 됩니다.", 
        en: "A time of energy where Wood's vitality transfers into the heat of Fire, dashing toward a utopia. You possess a burning passion and positive vibrations that instantly elevate the energy around you. You command a powerful solar charisma that energizes organizations and fascinates the masses by your mere presence." 
    },
    8: { 
        ko: "화(火)의 열기가 토(土)의 수용성을 만나 내실을 기하며 조금씩 채워지기 시작하는 충만한 때입니다. 당신은 성급한 성공보다 차근차근 기초를 다져 거대한 성을 쌓는 신중함과 끈기를 가졌습니다. 성실함을 바탕으로 쌓아 올린 당신의 명성과 자산은 세월의 풍파 속에서도 결코 흔들리지 않는 견고함을 자랑합니다.", 
        en: "A fulfilling time when Fire's heat meets Earth's receptivity to begin filling with internal substance. You possess the prudence and grit to build a grand castle by strengthening foundations step by step. The reputation and assets you build on sincerity remain unshakeable even amidst the storms of time." 
    },
    9: { 
        ko: "화(火)의 몰입도가 정점에 달해 금(金)의 결실을 준비하는 명확한 통찰이 필요한 시기입니다. 당신은 한 가지 목표가 정해지면 놀라운 집중력을 발휘하여 정밀한 결과물을 만들어내는 전문가적 기질을 가졌습니다. 본인의 분야에서 대체 불가능한 권위를 구축하여 세상을 이끄는 핵심 인재로 활약합니다.", 
        en: "A period requiring clear insight as Fire's immersion peaks to prepare for the fruits of Metal. Once a goal is set, you demonstrate incredible focus and professional temperament to produce precision results. You act as a core talent, establishing irreplaceable authority in your field to lead the world." 
    },
    10: { 
        ko: "양(陽)의 화(火) 에너지가 정점에 달해 세상을 밝게 비추나, 내면에는 음(陰)의 씨앗을 품기 시작하는 광채의 시기입니다. 당신은 화려한 자기표현과 빠른 판단력으로 좌중을 압도하는 천부적인 스타성을 지녔습니다. 창의적인 시각으로 세상을 재해석하여 큰 명예를 얻는 운명을 타고났습니다.", 
        en: "The moment of radiance where Fire's Yang energy reaches its zenith, yet begins to harbor the seed of Yin within. Endowed with innate star quality that overwhelms an audience through brilliant self-expression, you are destined to achieve grand honor by reinterpreting the world with your creative vision." 
    },
    11: { 
        ko: "화(火)의 무더위 속에서 토(土)가 기운을 갈무리하며 금(金)의 결실을 익혀가는 인내의 시기입니다. 당신은 극한의 압박 속에서도 평정심을 유지하며 장기적인 프로젝트를 완수해내는 무서운 집념을 가졌습니다. 고난을 거칠수록 더욱 원숙해지는 당신의 인격은 많은 이들의 존경과 신뢰를 자아냅니다.", 
        en: "A time of endurance where Earth gathers energy amidst Fire's heat to ripen the fruits of Metal. You possess fearsome grit to complete long-term projects while maintaining composure under extreme pressure. Your character, maturing through hardship, draws deep respect and trust from those around you." 
    },
    12: { 
        ko: "화(火)의 열기가 단단한 토(土)를 구워 금(金)이라는 귀한 그릇을 만드는 형국입니다. 당신은 화려한 발산보다는 실질적인 가치를 보존하고 지키는 묵직한 힘을 가졌습니다. 위기의 순간에 흩어진 에너지를 하나로 모으는 중재 능력이 탁월하여 공동체의 중심을 잡는 든든한 기둥 역할을 수행합니다.", 
        en: "A state where Fire's heat bakes the hard Earth into a precious vessel of Metal. You possess the heavy power to preserve and protect practical values. Your exceptional ability to unify scattered energy during crisis makes you the reliable pillar that stabilizes the center of your community." 
    },
    13: { 
        ko: "화(火)의 기운을 금(金)의 서늘함으로 쳐내어 본질만을 남기는 단호함의 시기입니다. 당신은 세상을 냉철하게 분석하여 자신만의 질서를 세우는 심판자의 기운을 타고났습니다. 정의롭지 못한 것에 타협하지 않는 강직함은 당신을 어떤 유혹에도 흔들리지 않는 완성된 인물로 만듭니다.", 
        en: "A time of decisiveness where Fire's aura is cut away by Metal's coolness to leave only the essence. Born with the aura of a judge who establishes order through cold analysis, your rigid integrity and refusal to compromise with injustice make you an unshakeable and complete individual." 
    },
    14: { 
        ko: "금(金)의 이성이 토(土)의 안정을 만나 만물이 평온을 되찾는 시기입니다. 당신은 복잡한 감정에 휘둘리지 않는 차가운 이성과 정확한 판단력을 가졌습니다. 흐트러진 시스템을 바로잡고 효율적인 환경을 구축하는 데 탁월한 능력을 발휘하여 조직을 승리로 이끄는 최고의 브레인 역할을 합니다.", 
        en: "A period when Metal's rationality meets Earth's stability, restoring peace to all. Possessing a cold reason and accurate judgment detached from emotion, you excel at optimizing disorganized systems and building efficient environments, serving as the top brain that leads organizations to victory." 
    },
    15: { 
        ko: "금(金)의 단단함이 수(水)의 이슬을 만나 고결한 정신적 완벽함을 지향하는 때입니다. 당신은 섬세한 감수성과 높은 미적 안목으로 세상을 조율하는 예술적 기질을 가졌습니다. 명품과 같은 완성도를 추구하는 당신의 손길은 평범한 소재를 특별한 가치의 유산으로 변화시키는 힘이 있습니다.", 
        en: "A moment aiming for noble spiritual perfection as Metal's hardness meets the dew of Water. You possess an artistic temperament to harmonize the world with delicate sensitivity and a high aesthetic eye. Your pursuit of masterpiece-level quality has the power to transform ordinary materials into legacies of value." 
    },
    16: { 
        ko: "양(陽)과 음(陰)이 다시 만나며 금(金)의 에너지가 가장 견고하게 집중되는 결실의 정점입니다. 당신은 약속을 생명처럼 여기는 강직한 신용과 티 없는 이성으로 완벽한 성취를 일구어냅니다. 본인의 전문성을 바탕으로 쌓아 올린 사회적 위치는 누구도 넘볼 수 없는 단단한 위엄을 가집니다.", 
        en: "The peak of fruition when Yin and Yang meet again, concentrating Metal energy into its most solid form. You achieve perfect success through crystal-clear reason and integrity that treats promises as sacred. The social status built on your expertise commands an impregnable and solid dignity." 
    },
    17: { 
        ko: "금(金)의 결실이 토(土)의 저장력을 만나 지혜가 응축되는 시기입니다. 당신은 인간의 심연을 꿰뚫는 분석력과 미래를 예측하는 신비로운 통찰력을 부여받았습니다. 세월이 흐를수록 깊어지는 당신의 내공은 주변 사람들에게 묵직하고 거부할 수 없는 카리스마로 다가갑니다.", 
        en: "A time when wisdom condenses as Metal's fruit meets the storage power of Earth. Endowed with analytical power to pierce the human abyss and mysterious foresight, your internal power deepens over time, manifesting as a heavy and irresistible charisma to those around you." 
    },
    18: { 
        ko: "금(金)의 결단력이 토(土)의 갈무리 기운을 만나 수(水)의 침잠을 준비하는 시기입니다. 당신은 방대한 데이터를 분류하고 핵심적인 가치를 보존하는 능력이 탁월합니다. 조직의 보이지 않는 뿌리 역할을 수행하며 세상을 지탱하는 전문가로서 누구보다 깊은 영향력을 행사합니다.", 
        en: "A period where Metal's decisiveness meets Earth's gathering energy to prepare for Water's sinking. You excel at classifying vast data and preserving core values. Acting as the invisible root of an organization, you exercise a deeper influence than anyone as a specialist sustaining the world." 
    },
    19: { 
        ko: "금(金)의 숙살지기가 수(水)의 지혜로 전환되어 깊은 휴식에 들어가는 태동기입니다. 당신은 조용하지만 심오한 지혜를 가졌으며, 보이지 않는 곳에서 거대한 판을 설계하는 전략가적 기질이 돋보입니다. 당신의 생각은 깊고 넓어 위기의 순간에 모두를 구할 결정적인 해답을 제시합니다.", 
        en: "The quickening of Water energy as Metal's cutting force transforms into wisdom, entering deep rest. Though quiet, you possess profound wisdom and a master strategist's temperament for designing grand schemes from the shadows. Your thoughts provide the decisive answers to save everyone in times of crisis." 
    },
    20: { 
        ko: "수(水)의 정화력이 금(金)의 결정을 덮어 본질적인 가치에만 집중하게 하는 때입니다. 당신은 정적인 환경에서 최고의 창의력을 발휘하는 맑은 영혼을 가졌습니다. 불필요한 군더더기를 제거하고 핵심만을 남기는 당신의 정리 능력은 복잡한 세상을 단순하고 아름답게 변화시킵니다.", 
        en: "A time where Water's purification covers Metal's crystals to focus only on essential values. You possess a pure soul that reaches its creative peak in quiet environments. Your ability to remove clutter to leave only the core transforms a complex world into something simple and beautiful." 
    },
    21: { 
        ko: "수(水)의 포용력이 극대화되어 모든 차별을 없애고 만물을 품어 안는 자비의 시기입니다. 당신은 무한한 포용력과 인덕을 지녔습니다. 보이지 않는 곳에서 묵묵히 선행을 실천하는 고귀한 성품은 상처받은 사람들의 마음을 치유하고 공동체를 하나로 묶는 강력한 접착제가 됩니다.", 
        en: "A time of compassion where Water's tolerance is maximized, embracing all without discrimination. Possessing infinite tolerance and social virtue, your noble nature of practicing good deeds from the shadows becomes the powerful glue that heals wounded hearts and unifies communities." 
    },
    22: { 
        ko: "수(水)의 응집력이 정점에 달해 어둠 속에서 화(火)의 씨앗을 잉태하는 전환점입니다. 당신은 인간의 심연을 꿰뚫는 철학적 사유와 위기에서 정답을 찾아내는 비범한 능력을 타고났습니다. 당신이 세상에 던지는 메시지는 길 잃은 영혼들에게 이정표가 되는 선구자적 가치를 가집니다.", 
        en: "The turning point where Water's cohesion reaches its peak, conceiving the seed of Fire in the darkness. Born with a philosophical mind piercing the human abyss and an extraordinary ability to find answers in crisis, your messages serve as a pioneering lighthouse for lost souls." 
    },
    23: { 
        ko: "수(水)의 지혜가 토(土)의 변화를 받아들여 목(木)의 도약을 준비하는 정화의 때입니다. 당신은 완숙한 지혜와 강인한 생명력을 동시에 보유하고 있습니다. 한 사이클을 완벽히 마무리하고 새로운 차원으로 넘어가기 위한 거대한 폭발력을 내면에 숨기고 있는 신비로운 존재입니다.", 
        en: "A time of purification where Water's wisdom accepts Earth's change to prepare for Wood's leap. You possess both mature wisdom and resilient vitality, a mysterious being hiding a massive explosive potential to conclude one cycle perfectly and leap into the next dimension." 
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
    1: "<b>목(木)의 발아와 독창성</b> 모든 숫자의 시작이자 태초의 생명력을 의미합니다. 당신의 이름 소리가 이 진동을 만나면 무에서 유를 창조하는 독보적인 독립심으로 발현됩니다. <b>장점</b>은 흔들리지 않는 추진력과 선구자적 기질이지만, <b>단점</b>으로는 주변의 조언을 무시하는 독단에 빠질 우려가 있습니다. 수(水)의 유연함을 받아들여 추진력에 윤활유를 더하십시오.",
    2: "<b>목(木)의 분산과 적응력</b> 하나의 생명이 둘로 나뉘며 환경에 적응하는 기운입니다. 이름의 파동이 이 수리를 통과하면 타인의 감정을 예민하게 읽는 공감 능력이 극대화됩니다. <b>장점</b>은 뛰어난 협동심과 유연함이지만, <b>단점</b>으로는 토(土)의 응집력이 약해 마무리가 흐려지거나 결단력이 부족할 수 있습니다. 자신만의 확고한 루틴을 설계하여 운의 지지대를 확보하십시오.",
    3: "<b>화(火)의 팽창과 명예</b> 불꽃이 피어오르듯 에너지가 사방으로 뻗어 나가는 형상입니다. 당신의 성명 에너지가 이 진동과 결합하면 대중의 시선을 사로잡는 화려한 스타성으로 나타납니다. <b>장점</b>은 창의적 자기표현과 빠른 두뇌 회전이지만, <b>단점</b>으로는 금(金)의 결단력이 부족하여 겉은 화려하나 실속이 없을 수 있습니다. 실질적인 성과를 수치화하여 관리하는 습관을 기르십시오.",
    4: "<b>화(火)의 과열과 변동</b> 열기가 너무 강해 기존의 질서가 타버리고 새로운 변화가 일어나는 기운입니다. 파괴적 혁신을 통해 시대를 앞서가는 감각을 부여합니다. <b>장점</b>은 기존 틀을 깨는 비범한 아이디어지만, <b>단점</b>으로는 수(水)의 냉정함이 결핍되어 감정의 기복으로 일을 그르칠 위험이 있습니다. 중요한 결정 전에는 반드시 24시간의 냉각기를 가지십시오.",
    5: "<b>토(土)의 중심과 안락</b> 대지가 만물을 품어 안듯 모든 기운이 중심으로 모여 안정을 이루는 수리입니다. 이름의 기운이 이 지점에서 균형을 잡으면 주변에 사람이 모이고 재물이 쌓입니다. <b>장점</b>은 두터운 신망과 평온한 가정운이지만, <b>단점</b>으로는 목(木)의 개척 정신이 약해져 매너리즘에 빠지기 쉽습니다. 일상에 작은 변화를 주어 운의 흐름이 고이지 않게 하십시오.",
    6: "<b>토(土)의 응집과 계승</b> 단단한 흙이 보석을 품듯 조상의 덕이나 기존의 기반을 지켜내는 힘이 강합니다. 성명의 파동이 이 안정을 만나면 조직의 핵심에서 신뢰받는 리더가 됩니다. <b>장점</b>은 풍부한 인덕과 성실함이지만, <b>단점</b>으로는 화(火)의 순발력이 부족해 변화의 타이밍을 놓칠 수 있습니다. 새로운 기술과 트렌드를 적극적으로 수용하여 기반을 현대화하십시오.",
    7: "<b>금(金)의 예리함과 성취</b> 정련된 칼날처럼 목표를 향해 날카롭게 파고드는 결단력의 상징입니다. 이름의 소리가 이 금속의 진동을 만나면 타의 추종을 불허하는 전문 지식과 권위를 갖게 됩니다. <b>장점</b>은 강인한 의지와 완벽주의적 성취지만, <b>단점</b>으로는 목(木)의 자비심이 부족해 주변에 적을 만들기 쉽습니다. 칼날을 칼집에 넣듯 부드러운 언어 기술을 연마하십시오.",
    8: "<b>금(金)의 축적과 끈기</b> 단단한 원석이 보석이 되기까지 견뎌내는 집념의 기운입니다. 당신의 이름 에너지가 이 진동과 결합하면 자수성가하여 거대한 부를 일구는 토대가 됩니다. <b>장점</b>은 성실한 자산 축적과 인내심이지만, <b>단점</b>으로는 수(水)의 소통력이 약해 고집불통의 이미지를 줄 수 있습니다. 번 만큼 베푸는 사회적 환원을 통해 명예의 품격을 높이십시오.",
    9: "<b>수(水)의 심연과 통찰</b> 깊은 밤의 바다처럼 보이지 않는 진리와 지혜를 탐구하는 영적인 수리입니다. 이름의 파동이 이 깊은 물을 통과하면 천재적인 직관력과 예술적 감수성을 갖게 됩니다. <b>장점</b>은 비상한 지능과 예리한 감각이지만, <b>단점</b>으로는 화(火)의 현실적 열정이 부족해 고독감과 허무주의에 빠질 수 있습니다. 당신의 아이디어를 실체화해 줄 현실적 파트너와 동행하십시오.",
    10: "<b>수(水)의 종결과 허망</b> 모든 물줄기가 바다에서 하나로 모여 사라지듯, 끝과 시작이 교차하는 공허의 기운입니다. 만물을 수용하는 넓은 마음을 부여하지만 현실적 결실은 약할 수 있습니다. <b>장점</b>은 다재다능함과 비범한 수용력이지만, <b>단점</b>으로는 토(土)의 중심축이 약해 성과가 흩어지기 쉽습니다. 분산된 에너지를 매일 한 가지의 구체적 목표에만 집중시키십시오.",
    11: "<b>목(木)의 재생과 부흥</b> 마른 가지에서 새순이 돋아나듯 위기를 기회로 바꾸는 강력한 생명력의 수리입니다. 이름의 에너지가 이 재생의 기운을 얻으면 정체된 삶에 혁신을 일으킵니다. <b>장점</b>은 빠른 회복력과 주도적인 리더십이지만, <b>단점</b>으로는 초기 성공 후 화(火)의 절제력이 약해져 자만할 수 있습니다. 성취의 순간에 고개를 숙이는 겸손을 시스템화하십시오.",
    12: "<b>목(木)의 고립과 인내</b> 거친 바위 틈에서 자라나는 나무처럼 환경의 제약이 많은 명식입니다. 내적인 사고는 깊어지나 외부와의 소통에서 마찰이 생길 수 있습니다. <b>장점</b>은 독보적인 전문 기술과 깊은 철학적 사고지만, <b>단점</b>으로는 금(金)의 결단력이 부족해 주변에 이용당할 위험이 있습니다. 자신만의 확실한 선을 긋고 주권을 설계하는 법을 배우십시오.",
    13: "<b>화(火)의 광채와 지략</b> 태양이 세상을 비추듯 지혜가 빛을 발하여 대중을 이끄는 달변가의 수리입니다. 이름의 소리가 이 빛의 진동을 만나면 뛰어난 처세술과 언변으로 명성을 얻습니다. <b>장점</b>은 총명함과 탁월한 사교력이지만, <b>단점</b>으로는 수(水)의 깊이가 부족하여 가벼워 보이거나 구설에 오를 수 있습니다. 경청을 통해 타인의 신뢰를 쌓는 침묵의 기술을 병행하십시오.",
    14: "<b>화(火)의 산란과 고민</b> 불꽃이 바람에 흔들리듯 예민한 감각이 분석으로 치우쳐 스스로를 괴롭히는 기운입니다. 사물의 이면을 꿰뚫는 투시 능력은 좋습니다. <b>장점</b>은 정밀한 분석력과 섬세한 감수성이지만, <b>단점</b>으로는 토(土)의 정서적 완충 지대가 부족해 극심한 스트레스를 자초합니다. 명상을 통해 뇌 에너지를 주기적으로 리셋하고 단순하게 사십시오.",
    15: "<b>토(土)의 조화와 덕망</b> 만물을 기르는 대지 위에 비가 내리듯 하늘의 복과 인간의 덕이 합치되는 길수입니다. 당신의 이름이 이 화합의 진동을 만나면 만인을 이끄는 부드러운 카리스마가 생깁니다. <b>장점</b>은 풍부한 인복과 원만한 성품이지만, <b>단점</b>으로는 목(木)의 공격적 추진력이 부족해 결정적 기회를 놓칠 수 있습니다. 가끔은 악역을 자처하더라도 단호한 결단을 연습하십시오.",
    16: "<b>토(土)의 재복과 자비</b> 두터운 흙 속에서 보물이 발견되듯 재물이 스스로 굴러 들어오는 안정된 복록의 상징입니다. 이름의 에너지가 이 지점에 도달하면 경제적 자립도가 급격히 상승합니다. <b>장점</b>은 뜻밖의 횡재수와 안정적인 자산 운영이지만, <b>단점</b>으로는 금(金)의 냉철함이 부족해 타인의 부탁을 거절 못 하고 손해를 봅니다. 공과 사를 칼같이 구분하여 주권적 경제 관념을 세우십시오.",
    17: "<b>금(金)의 투지와 돌파</b> 강철을 벼려 검을 만들듯 어떠한 고난도 정면으로 돌파하는 강력한 투쟁심의 수리입니다. 이름의 소리가 이 금속의 진동을 얻으면 권력과 명예를 동시에 쟁취합니다. <b>장점</b>은 독보적인 결단력과 용기지만, <b>단점</b>으로는 목(木)의 유연함이 결여되어 부러지기 쉬운 성향입니다. 우회로가 때로는 가장 빠른 길임을 명심하고 유연함을 기르십시오.",
    18: "<b>금(金)의 신념과 완성</b> 변치 않는 금석처럼 한 우물을 파서 결국 대업을 완수하는 강력한 의지의 상징입니다. 당신의 성명 에너지가 이 진동과 결합하면 분야의 마스터가 됩니다. <b>장점</b>은 흔들리지 않는 자기 신념과 성실함이지만, <b>단점</b>으로는 화(火)의 융통성이 부족하여 주변과 고립될 우려가 있습니다. 외부 전문가의 피드백을 데이터로 수용하여 자신의 논리를 업데이트하십시오.",
    19: "<b>수(水)의 심연과 직관</b> 수리상 '9'는 깊은 지혜와 영성을 상징하는 수(水)의 극치입니다. 당신의 이름 파동이 이 수리를 통과하면 남들이 보지 못하는 이면을 읽어내는 천재적인 통찰력으로 치환됩니다. <b>장점</b>은 독보적인 예술성과 직관력이지만, <b>단점</b>으로는 현실과의 괴리에서 오는 고독감과 정신적 예민함이 뒤따릅니다. 깊은 생각을 토(土)의 현실적 실행력으로 고정시키고 구체적인 결과물을 만드십시오.",
    20: "<b>수(水)의 범람과 이상</b> 바다와 같이 깊고 방대한 에너지가 내면에 잠재되어 있습니다. 에너지가 거대하다 보니 이를 현실에 안착시킬 정교한 제방(土)이 반드시 뒷받침 되어야 합니다. <b>장점</b>은 원대한 이상과 넓은 포용력이지만, <b>단점</b>으로는 에너지가 흩어져 중도 좌절할 기운이 서려 있습니다. 목(木)의 실행 에너지를 빌려 거대한 목표를 아주 작은 단위로 쪼개어 정복하십시오. 당신의 높은 이상을 실질적인 성과로 바꾸는 '디테일한 실행력'이 성공의 마침표가 될 것입니다.",
    21: "<b>목(木)의 두령과 위엄</b> 산 정상을 향해 뻗어가는 거대한 나무의 기상입니다. 조직을 이끄는 카리스마가 당신의 성명 에너지와 결합되어 강력한 권위로 나타납니다. <b>장점</b>은 탁월한 리더십과 책임감이지만, <b>단점</b>으로는 금(金)의 제어가 부족할 경우 독선적으로 비쳐 주변의 반발을 살 수 있습니다. 아랫사람의 의견을 데이터로 수집하고 분석하는 포용력 있는 덕장이 되십시오.",
    22: "<b>목(木)의 기교와 고난</b> 화려한 덩굴 식물이 가지를 뻗듯 재능은 많으나 지지대인 토(土)가 부족하여 늘 마음이 불안정한 기운입니다. <b>장점</b>은 섬세한 기술력과 창의적인 감각이지만, <b>단점</b>으로는 대인관계의 갈등으로 인해 본인의 성과가 저평가될 수 있습니다. 화려한 기교보다 정직한 성실함을 브랜드로 삼아 신뢰를 구축하십시오.",
    23: "<b>화(火)의 융성과 폭발</b> 한낮의 태양처럼 열기가 정점에 달해 창의성과 명예가 폭발하는 강력한 수리입니다. 이름의 파동이 이 불꽃을 만나면 세상의 중심에 서게 됩니다. <b>장점</b>은 압도적인 실행력과 스타성이지만, <b>단점</b>으로는 수(水)의 조절 장치가 약해 성공 후의 과열로 건강을 해칠 수 있습니다. 중요한 결정 전에는 반드시 혼자만의 시간을 가져 열기를 식히십시오.",
    24: "<b>화(火)의 결실과 축재</b> 뜨거운 열기로 황금을 제련하듯 에너지를 실질적인 부로 변환하는 천부적인 능력을 부여합니다. <b>장점</b>은 뛰어난 재무 감각과 안정적인 재산 축적이지만, <b>단점</b>으로는 금(金)의 절제력이 결여되면 탐욕으로 비쳐 명예가 훼손될 수 있습니다. 부의 가치를 높이기 위해 사회적 환원과 나눔을 병행하십시오.",
    25: "<b>토(土)의 조화와 지략</b> 단단한 흙이 물길을 내듯 어떤 위기 상황도 유연하게 넘기는 영리한 중재자의 기운입니다. <b>장점</b>은 빠른 상황 판단력과 대인관계의 원만함이지만, <b>단점</b>으로는 목(木)의 솔직함이 부족하여 기회주의자로 오해받을 수 있습니다. 투명한 소통 방식을 통해 본인의 진정성을 데이터로 증명하십시오.",
    26: "<b>토(土)의 풍파와 영웅</b> 거친 비바람을 견디며 단단해지는 명식으로 위기 속에서 비로소 진가를 발휘하는 영웅적 수리입니다. <b>장점</b>은 불굴의 의지와 위기 관리 능력이지만, <b>단점</b>으로는 화(火)의 평온함이 부족하여 스스로 힘든 길을 자처하는 성향이 있습니다. 불필요한 싸움은 피하고 에너지를 핵심 목표에만 효율적으로 배분하십시오.",
    27: "<b>금(金)의 비판과 고립</b> 정밀한 저울처럼 사물의 시비곡직을 가리는 힘이 최고조에 달한 기운입니다. 이름의 에너지가 이 금속을 만나면 분석의 대가가 됩니다. <b>장점</b>은 신랄한 비판 정신과 논리력이지만, <b>단점</b>으로는 수(水)의 포용력이 약해 주변 사람들과의 거리가 멀어질 수 있습니다. 비판 뒤에는 반드시 건설적인 대안을 제시하여 사람을 살리는 언어를 쓰십시오.",
    28: "<b>금(金)의 팽창과 파란</b> 거대한 쇳덩이가 부딪치듯 큰 사업과 큰 야망을 품는 담력이 좋은 수리입니다. <b>장점</b>은 대범한 지략과 넓은 활동 영역이지만, <b>단점</b>으로는 토(土)의 세밀한 관리력이 부족하여 시스템의 기초가 부실해질 수 있습니다. 디테일에 강한 참모를 곁에 두고 시스템의 구멍을 메우는 일에 집중하십시오.",
    29: "<b>수(水)의 지혜와 평온</b> 흐르는 강물이 바다에 도달하듯 지혜가 완성되어 사회적 지위와 안정을 동시에 거머쥐는 길수입니다. <b>장점</b>은 깊은 통찰력과 두터운 신망이지만, <b>단점</b>으로는 목(木)의 도전 에너지가 약해져 현실에 안주하기 쉽습니다. 끊임없이 새로운 분야를 학습하여 당신의 운세를 젊게 유지하십시오.",
    30: "<b>수(水)의 부침과 역전</b> 바다의 파도처럼 성패가 극단적으로 엇갈리는 드라마틱한 운명의 파동입니다. <b>장점</b>은 어떤 바닥에서도 다시 올라오는 회복력이지만, <b>단점</b>으로는 화(火)의 평정심이 부족하여 감정의 기복에 따라 운이 요동칩니다. 마음의 중심을 잡아줄 확고한 철학적 기반을 구축하여 흔들림을 방지하십시오.",
    31: "<b>목(木)의 인복과 자생</b> 푸른 숲이 비를 만나듯 주변의 도움을 받아 거대한 성취를 이루는 전형적인 자수성가 수리입니다. <b>장점</b>은 뛰어난 대인관계와 행운의 결합이지만, <b>단점</b>으로는 수(水)의 주관이 약해 타인의 의견에 휘둘릴 리스크가 있습니다. 결정적인 순간에는 타인의 조언보다 본인의 데이터를 믿으십시오.",
    32: "<b>목(木)의 통신과 기회</b> 바람을 타고 씨앗이 멀리 퍼지듯 정보와 사람이 당신을 찾아오는 순풍의 기운입니다. <b>장점</b>은 의외의 재물운과 탁월한 소통력이지만, <b>단점</b>으로는 금(金)의 성실함이 뒷받침되지 않으면 요행을 바라는 마음이 생길 수 있습니다. 운이 좋을 때일수록 실력을 더 치열하게 벼리는 내실을 다지십시오.",
    33: "<b>화(火)의 제왕과 실현</b> 태양이 머리 위에 있듯 야망과 실현력이 최고조에 달해 조직의 정점에 서는 수리입니다. <b>장점</b>은 압도적인 카리스마와 명예지만, <b>단점</b>으로는 수(水)의 겸손함이 결여되어 독단으로 적을 만들 위험이 큽니다. 성공의 공을 주변 동료들에게 적극적으로 돌려 당신의 성을 견고하게 지키십시오.",
    34: "<b>화(火)의 인내와 연단</b> 용광로 속에서 철을 녹이듯 뼈를 깎는 인내가 요구되는 명식입니다. 이 시련을 넘기면 위대한 마스터가 됩니다. <b>장점</b>은 극한의 상황을 견디는 정신력이지만, <b>단점</b>으로는 토(土)의 긍정 에너지가 약해지면 극심한 비관주의에 빠질 수 있습니다. 작은 성취를 꾸준히 축하하며 자신에게 긍정적인 데이터를 주입하십시오.",
    35: "<b>토(土)의 온화와 중재</b> 비옥한 들판처럼 평화롭고 온화한 기운이 흘러 주변 사람들을 편안하게 만드는 치유의 수리입니다. <b>장점</b>은 원만한 인간관계와 가정의 행복이지만, <b>단점</b>으로는 화(火)의 개척력이 부족하여 큰 기회를 놓칠 수 있습니다. 안전지대를 벗어나 가끔은 과감하고 파격적인 도전을 시도하십시오.",
    36: "<b>토(土)의 의리와 희생</b> 두터운 흙이 길을 내어 만인이 지나가게 하듯 헌신으로 명예를 쌓는 협객의 기운입니다. <b>장점</b>은 강한 의리와 타인의 추앙이지만, <b>단점</b>으로는 수(水)의 실속 에너지가 부족하여 남 좋은 일만 하다가 본인의 기반을 놓칠 수 있습니다. 자신의 성공이 타인을 돕는 가장 큰 밑천임을 잊지 마십시오.",
    37: "<b>금(金)의 장인과 권위</b> 보석을 깎아내는 정밀함으로 특정 분야의 대체 불가능한 권위자가 되는 전문가의 수리입니다. <b>장점</b>은 독보적인 실력과 독립심이지만, <b>단점</b>으로는 목(木)의 공감력이 결여된 차가운 성격으로 오해받을 수 있습니다. 당신의 기술을 따뜻한 인간적 언어로 공유하여 대중의 지지를 얻으십시오.",
    38: "<b>금(金)의 문학과 예술</b> 예리한 금속 촉으로 글을 쓰듯 감성과 이성이 조화되어 문화적 성취를 거두는 기운입니다. <b>장점</b>은 예리한 표현력과 결과 중심의 성과지만, <b>단점</b>으로는 화(火)의 조급함이 섞이면 절차를 무시하고 무리수를 둘 수 있습니다. 결과보다 과정의 정당성과 공정성을 매 순간 체크하며 나아가십시오.",
    39: "<b>수(水)의 완성과 영광</b> 모든 강물이 바다에 닿아 고요를 찾듯 부귀와 명예가 동시에 찾아오는 완성의 수리입니다. <b>장점</b>은 사회적 지위와 경제적 풍요지만, <b>단점</b>으로는 토(土)의 경각심이 부족해지면 성공의 함정에 빠져 방탕해질 수 있습니다. 최고의 자리에 있을 때 최악의 상황을 대비하는 리스크 관리를 멈추지 마십시오.",
    40: "<b>수(水)의 변동과 불안</b> 바다 한가운데서 폭풍을 만난 형상으로 개척 의지는 강하나 기반이 늘 요동치는 기운입니다. <b>장점</b>은 변화무쌍한 환경에 대한 빠른 적응력이지만, <b>단점</b>으로는 화(火)의 중심 기운이 약해 투기적인 일로 자산을 잃을 위험이 있습니다. 변동성이 큰 일보다는 장기적인 데이터를 기반으로 한 안정적인 길을 선택하십시오.",
    41: "<b>목(木)의 통솔과 성장</b> 거대한 나무가 숲을 이루듯 인덕과 리더십을 결합하여 큰 조직을 이끄는 거물의 수리입니다. <b>장점</b>은 탁월한 경영 능력과 대중의 신뢰지만, <b>단점</b>으로는 금(金)의 자기 관리력이 부족해 과로로 건강을 해칠 수 있습니다. 성공을 위해 몸을 혹사하기보다 휴식과 운동을 경영의 일부로 포함하십시오.",
    42: "<b>목(木)의 자력과 고행</b> 척박한 땅에 홀로 뿌리 내린 나무처럼 초반 고생은 많으나 결국 스스로 일어서는 기운입니다. <b>장점</b>은 누구에게도 의존하지 않는 자생력이지만, <b>단점</b>으로는 토(土)의 지지 기반이 약해 주변의 도움을 받기 힘듭니다. 자기 신뢰를 잃지 마십시오. 당신의 시련은 거대한 성의 단단한 주춧돌이 될 것입니다.",
    43: "<b>화(火)의 과시와 허상</b> 불꽃은 높이 솟으나 연료가 부족하여 겉은 화려하지만 속이 빈 형국의 수리입니다. <b>장점</b>은 뛰어난 브랜드 가치와 외적인 매력이지만, <b>단점</b>으로는 수(水)의 축적 에너지가 부족하여 실질적인 자산 관리에 취약합니다. 보여지는 이미지에 투자하는 돈의 절반을 실질적인 자산 확보에 쓰십시오.",
    44: "<b>화(火)의 미궁과 혁신</b> 에너지가 혼돈 속에 갇혀 방황이 많으나 이를 극복하면 시대를 바꾸는 혁신가가 됩니다. <b>장점</b>은 비범한 창의력과 반전의 드라마지만, <b>단점</b>으로는 토(土)의 평정심이 부족하여 부정적인 생각의 루프에 빠지기 쉽습니다. 부정적인 생각이 들 때는 몸을 움직여 강제로 뇌의 회로를 전환하십시오.",
    45: "<b>토(土)의 통합과 대성</b> 대지가 모든 생명을 하나로 묶어 꽃 피우듯 명예로운 성공과 안정을 동시에 누리는 길수입니다. <b>장점</b>은 두터운 신망과 통합적 리더십이지만, <b>단점</b>으로는 목(木)의 비판적 안목이 약해 주변의 아첨을 구별하지 못할 수 있습니다. 단소리보다 쓴소리를 하는 참모를 가까이 두어 현실 감각을 유지하십시오.",
    46: "<b>토(土)의 고민과 방황</b> 땅이 갈라지듯 내적인 갈등이 많아 통찰력은 좋으나 실천력이 따르지 못하는 기운입니다. <b>장점</b>은 깊은 사유와 이면을 읽는 능력이지만, <b>단점</b>으로는 금(金)의 응집력이 부족해 재능을 여러 곳에 낭비하기 쉽습니다. 오직 한 가지 목표를 정해 10년 이상 깊게 파고드는 집요함을 장착하십시오.",
    47: "<b>금(金)의 견고와 성공</b> 단단한 바위산 위에 핀 꽃처럼 인내의 시간을 거쳐 말년에 거대한 부를 쌓는 대기만성 수리입니다. <b>장점</b>은 변치 않는 신용과 장기적인 자산 형성력이지만, <b>단점</b>으로는 화(火)의 발산력이 약해 젊은 시절 고생이 길어질 수 있습니다. 현재의 시련을 당신의 가치를 증명하기 위한 필수 데이터로 여기십시오.",
    48: "<b>금(金)의 조언과 덕망</b> 예리한 칼을 정의롭게 쓰는 스승처럼 지도자의 참모 역할을 훌륭히 수행하는 인격의 수리입니다. <b>장점</b>은 현명한 판단력과 높은 도덕적 가치지만, <b>단점</b>으로는 수(水)의 유연함이 부족하여 본인의 엄격한 잣대를 타인에게 강요할 수 있습니다. 타인의 실수를 비판하기보다 보완해 주는 자비로운 태도를 기르십시오.",
    49: "<b>수(水)의 유연과 변신</b> 물이 그릇에 따라 모양을 바꾸듯 변화무쌍한 환경에서 최상의 생존력을 발휘하는 기운입니다. <b>장점</b>은 빠른 상황 적응력과 다재다능함이지만, <b>단점</b>으로는 토(土)의 주관이 부족하여 기회주의자로 보일 우려가 있습니다. 상황에 따라 변하더라도 절대 변하지 않는 당신만의 핵심 가치를 정립하십시오.",
    50: "<b>수(水)의 요동과 협력</b> 바다 한가운데서 큰 승부를 거는 도박사적 기질로 인해 성패가 드라마틱하게 나뉘는 수리입니다. <b>장점</b>은 큰 기회를 잡아채는 담력이지만, <b>단점</b>으로는 화(火)의 이성적 통제가 약해 무리한 투자나 배신의 리스크가 큽니다. 직관보다 법적 근거와 데이터적 증거를 우선하여 리스크를 차단하십시오.",
    51: "<b>목(木)의 곡절과 사계</b> 나무가 사계절을 겪으며 나이테를 새기듯 성패의 굴곡이 빈번한 드라마틱한 운명입니다. <b>장점</b>은 풍부한 경험과 변화를 즐기는 역동성이지만, <b>단점</b>으로는 금(金)의 유지력이 부족해 늘 새로 시작해야 할 수도 있습니다. 변화 자체를 당신의 전문 기술로 승화시켜 컨설턴트나 전략가로 활동하십시오.",
    52: "<b>목(木)의 준비와 도약</b> 깊은 숲에서 힘을 기르다 때가 되면 거대한 성취를 이루는 지략가형 수리입니다. <b>장점</b>은 탄탄한 내실과 결정적인 기회 포착 능력이지만, <b>단점</b>으로는 수(水)의 휴식 에너지가 결여되어 피로가 누적될 수 있습니다. 정기적인 건강 검진과 강제적인 휴식을 통해 장기전의 에너지를 비축하십시오.",
    53: "<b>화(火)의 외양과 내빈</b> 타오르는 불길이 겉만 비추어 인맥은 화려하나 진정으로 마음 나눌 곳이 부족한 기운입니다. <b>장점</b>은 뛰어난 사교술과 대중적 인지도지만, <b>단점</b>으로는 토(土)의 진중함이 부족해 사기를 당하거나 이용당할 리스크가 있습니다. 많은 사람보다 진솔한 소수의 관계를 깊게 다지는 것에 에너지를 쓰십시오.",
    54: "<b>화(火)의 억압과 고난</b> 불꽃이 흙에 덮여 빛을 발하지 못하듯 책임감은 강하나 환경이 받쳐주지 않는 형국입니다. <b>장점</b>은 극도의 성실함과 신의지만, <b>단점</b>으로는 금(金)의 재복이 약해 무리하게 사업을 확장하면 패망할 위험이 큽니다. 무리하게 앞서가지 말고 내실을 닦으며 조력자가 나타날 때를 기다리십시오.",
    55: "<b>토(土)의 겸손과 광채</b> 보석이 흙 속에 숨겨져 있어 겸손한 자세를 유지할 때 비로소 가치가 드러나는 수리입니다. <b>장점</b>은 깊은 내공과 신중함이지만, <b>단점</b>으로는 목(木)의 과시욕이 고개를 들면 주변의 시기로 공든 탑이 무너집니다. 화려함을 추구하기보다 '무거움'을 당신의 퍼스널 브랜드로 삼으십시오.",
    56: "<b>토(土)의 우유부단과 정체</b> 대지가 안개에 싸여 길을 찾지 못하듯 재능은 있으나 결정적 순간에 주저하는 기운입니다. <b>장점</b>은 넓은 포용력과 신중함이지만, <b>단점</b>으로는 화(火)의 결단력이 부족해 조연의 역할에 머무르기 쉽습니다. 완벽함보다 빠른 실행을 습관화하여 기회의 타이밍을 데이터로 잡으십시오.",
    57: "<b>금(金)의 질서와 개척</b> 차가운 칼날로 새 길을 내듯 무질서한 환경에서 완벽한 시스템을 세우는 데 성공하는 수리입니다. <b>장점</b>은 독보적인 개척 정신과 질서 수립 능력이지만, <b>단점</b>으로는 수(水)의 포용력이 부족해 독단적 리더가 될 수 있습니다. 성공의 결과물을 구성원들과 공정하게 나누어 내부의 저항을 관리하십시오.",
    58: "<b>금(金)의 끈기와 축적</b> 오랜 세월을 견딘 바위처럼 끈기 있게 노력하여 결국 자수성가하는 성취의 기운입니다. <b>장점</b>은 성실함과 견고한 자산 토대지만, <b>단점</b>으로는 목(木)의 베풂이 부족해 수전노라는 평을 들어 노년이 고립될 수 있습니다. 재물보다 사람을 남기는 투자를 통해 당신의 말년을 풍요롭게 설계하십시오.",
    59: "<b>수(水)의 방랑과 인내</b> 강물이 목적지 없이 흐르듯 재주는 많으나 한 곳에 뿌리 내리지 못하는 기운입니다. <b>장점</b>은 다방면의 비범한 재능과 높은 이상이지만, <b>단점</b>으로는 토(土)의 지탱력이 부족해 유혹에 약하고 끈기가 부족합니다. 강제적인 데드라인과 외부의 규율을 설정하여 당신의 재능을 규격화하십시오.",
    60: "<b>수(水)의 풍파와 갈등</b> 거센 파도가 들이치듯 인간관계에서 배신과 갈등이 잦을 수 있는 드라마틱한 명식입니다. <b>장점</b>은 위기를 겪으며 생기는 노련함과 통찰력이지만, <b>단점</b>으로는 화(火)의 안목이 부족해 사람의 옥석을 가리지 못합니다. 타인의 일에 깊이 개입하기보다 본인의 내면을 강화하는 것에 집중하십시오.",
    61: "<b>목(木)의 현명과 수장</b> 지혜가 완숙해져 조직의 핵심에서 존경받는 지도자 역할을 수행하는 명예의 수리입니다. <b>장점</b>은 고결한 품격과 원칙 준수지만, <b>단점</b>으로는 금(金)의 냉정함이 부족해 사적인 감정에 이끌려 대업을 망칠 수 있습니다. 감정 데이터보다 원칙과 수치 데이터를 최우선 가치로 삼으십시오.",
    62: "<b>목(木)의 연단과 희생</b> 땔감이 되어 불을 밝히듯 남을 돕는 일에 헌신하다 본인의 기운을 소진하기 쉬운 기운입니다. <b>장점</b>은 숭고한 봉사 정신과 자비심이지만, <b>단점</b>으로는 토(土)의 자기 방어 기운이 약해 실속 없이 지칠 수 있습니다. 타인을 돕기 전 본인의 체력과 경제적 기반을 먼저 견고하게 구축하십시오.",
    63: "<b>화(火)의 결실과 성공</b> 열매가 태양의 기운을 받아 빨갛게 익듯 노력에 대한 정당한 보상을 누리는 길수입니다. <b>장점</b>은 원만한 재물운과 사회적 명성이지만, <b>단점</b>으로는 수(水)의 경각심이 약해지면 내부 관리 소홀로 무너질 수 있습니다. 모든 것이 잘 풀릴 때 가장 취약한 부분을 점검하는 습관을 지키십시오.",
    64: "<b>화(火)의 안개와 정체</b> 불꽃이 짙은 안개에 갇혀 자신의 빛을 온전히 발휘하지 못하는 형상의 수리입니다. <b>장점</b>은 내밀한 사유와 신비로운 예술 감각이지만, <b>단점</b>으로는 금(金)의 정리 능력이 부족해 주변 환경이 늘 어수선합니다. 주변의 불필요한 물건과 인맥을 싹 비우고 오직 핵심 가치 하나에만 몰입하십시오.",
    65: "<b>토(土)의 평온과 영광</b> 대지가 만물을 완성하여 추수하듯 삶의 후반기에 높은 명예를 얻는 최고의 길수입니다. <b>장점</b>은 완벽한 복덕과 타인의 추앙이지만, <b>단점</b>으로는 목(木)의 오만함이 생겨 아랫사람의 마음을 잃을 수 있습니다. 높은 자리에 있을수록 가장 낮은 곳의 데이터를 살피는 자세를 유지하십시오.",
    66: "<b>토(土)의 동요와 신용</b> 지진이 일어난 땅처럼 사람을 잘못 믿어 그간 쌓아온 신용이 추락할 수 있는 기운입니다. <b>장점</b>은 유연한 상황 대처와 포용력이지만, <b>단점</b>으로는 수(水)의 유연함이 독이 되어 무리한 부탁을 거절하지 못합니다. 보증이나 금전 거래는 절대 금물이며, 모든 계약은 서류로 명확히 처리하십시오.",
    67: "<b>금(金)의 예술과 통솔</b> 정교한 악기를 연주하듯 섬세한 감각과 리더십을 결합하여 독창적 성취를 거두는 기운입니다. <b>장점</b>은 창의적 조직 운영과 미적 감각이지만, <b>단점</b>으로는 화(火)의 사교 에너지가 부족하여 소외감을 느낄 수 있습니다. 팀원들과 감정적 주파수를 맞추는 시간을 정기적으로 계획에 포함하십시오.",
    68: "<b>금(金)의 지략과 창업</b> 정밀한 설계도로 건물을 올리듯 완벽한 전략으로 시스템을 구축하여 성공하는 수리입니다. <b>장점</b>은 비범한 지모와 흔들리지 않는 경영 감각이지만, <b>단점</b>으로는 목(木)의 인간미가 결여되어 주변을 숨 막히게 할 수 있습니다. 효율적인 명령 체계 위에 인간적인 유머와 여유를 한 방울 섞으십시오.",
    69: "<b>수(水)의 고립과 정체</b> 물이 한곳에 고여 썩기 쉽듯 꿈은 원대하나 현실적인 실행 데이터가 뒷받침되지 않는 기운입니다. <b>장점</b>은 깊은 학문적 소양과 높은 정신 세계지만, <b>단점</b>으로는 토(土)의 지지력이 없어 조급함으로 무리수를 두기 쉽습니다. 기본기부터 다시 다지십시오. 당신의 운은 기초가 튼튼할 때 비로소 흐릅니다.",
    70: "<b>수(水)의 멸절과 공허</b> 모든 에너지가 소멸하고 휴식기에 접어든 형국으로 뼈 빠지게 일해도 보상이 적은 수리입니다. <b>장점</b>은 세속적 욕망에서 벗어난 고결한 정신성이지만, <b>단점</b>으로는 화(火)의 밝은 기운이 부족해 우울감에 빠질 수 있습니다. 종교나 명상, 봉사 활동을 통해 보이지 않는 가치를 삶의 의미로 삼으십시오.",
    71: "<b>목(木)의 내실과 완벽</b> 나무가 단단하게 굳어 재목이 되듯 전문성으로 응집되어 흔들리지 않는 부를 누리는 기운입니다. <b>장점</b>은 독보적인 전문가적 권위와 실리 추구지만, <b>단점</b>으로는 금(金)의 융통성이 결여되어 자기만의 성안에 갇힐 수 있습니다. 당신의 기준에 맞지 않는 사람들도 포용할 수 있는 바다와 같은 마음을 연습하십시오.",
    72: "<b>목(木)의 요동과 추진</b> 성장이 너무 빨라 내실이 약해질 수 있는 명식으로 추진력은 좋으나 기복이 심한 기운입니다. <b>장점</b>은 젊고 역동적인 에너지와 도전 정신이지만, <b>단점</b>으로는 수(水)의 리스크 관리가 안 되어 감정적 투자가 손실로 이어집니다. 모든 투자의 근거를 숫자에 기반하고, 열기가 오를 때 한 걸음 물러나십시오.",
    73: "<b>화(火)의 마무리와 질서</b> 불이 꺼지기 전 가장 밝은 빛을 내듯 지혜롭게 삶을 정돈하고 새 시대를 준비하는 수리입니다. <b>장점</b>은 원숙한 판단력과 명예로운 마무리지만, <b>단점</b>으로는 토(土)의 안주 기운이 강해지면 미래 권력을 놓치게 됩니다. 과거의 영광에 집착하지 말고 당신의 노하우를 후대에 전수하는 교육자가 되십시오.",
    74: "<b>화(火)의 쇠퇴와 고난</b> 연료가 떨어진 등불처럼 환경적 제약으로 인해 능력을 발휘하기 힘든 고단한 수리입니다. <b>장점</b>은 극한을 견디는 인내와 도덕적 자부심이지만, <b>단점</b>으로는 목(木)의 희망 에너지가 고갈되어 비관적 선택을 하기 쉽습니다. 철학이나 역사 공부를 통해 인간 삶의 거대한 인과율을 공부하고 멘탈을 강화하십시오.",
    75: "<b>토(土)의 균형과 평화</b> 대지가 완전한 평형을 이루어 만물이 안식하듯 평화롭고 안정적인 노년을 보장하는 길수입니다. <b>장점</b>은 높은 인격과 균형 잡힌 가치관이지만, <b>단점</b>으로는 금(金)의 결단력이 부족하여 결정적 순간에 실기를 할 수 있습니다. 인생의 중요 고비에서는 타인의 의견에 묻어가지 말고 단호한 결단을 내리십시오.",
    76: "<b>토(土)의 분산과 유출</b> 흙이 바람에 날리듯 실속 없이 에너지가 새어나가고 지출이 많은 불안정한 기운입니다. <b>장점</b>은 넓은 활동 범위와 대범한 씀씀이지만, <b>단점</b>으로는 수(水)의 응집력이 결여되어 버는 만큼 모이지 않는 고질적 병폐가 있습니다. 자산 관리 전문가의 도움을 받거나 강제적으로 돈을 묶어두는 시스템을 마련하십시오.",
    77: "<b>금(金)의 원칙과 투쟁</b> 칼과 칼이 부딪치듯 자신의 옳음만을 고집하여 외부와 끊임없이 마찰을 빚는 기운입니다. <b>장점</b>은 강직한 원칙 준수와 불의에 맞서는 용기지만, <b>단점</b>으로는 목(木)의 조화 기운이 약해 성패가 자주 엇갈립니다. '내가 옳다'는 생각보다 '함께 살아야 한다'는 상생의 가치를 제1원칙으로 삼으십시오.",
    78: "<b>금(金)의 신중과 예방</b> 칼을 칼집에 넣고 주변을 살피듯 극도의 조심성으로 초반 안정을 꾀하는 선길후흉의 기운입니다. <b>장점</b>은 완벽한 준비성과 리스크 관리력이지만, <b>단점</b>으로는 화(火)의 낙천적 에너지가 부족해 걱정만 하느라 도전하지 못합니다. 일어날 확률이 5% 미만인 걱정은 데이터로 삭제하고 과감히 세상 밖으로 나가십시오.",
    79: "<b>수(水)의 은둔과 지혜</b> 깊은 골짜기의 샘물처럼 지혜는 깊으나 알아주는 이가 없어 고독하게 세월을 보내는 기운입니다. <b>장점</b>은 명예를 탐하지 않는 고결함과 전문 지식이지만, <b>단점</b>으로는 토(土)의 자기 홍보력이 약해 능력을 썩히기 쉽습니다. 당신의 깊은 통찰을 세상과 나누십시오. 적극적으로 홍보할 때 당신의 명성이 비로소 흐릅니다.",
    80: "<b>수(水)의 종말과 성찰</b> 모든 물이 바다 끝에서 고요해지듯 정신적 고결함은 높으나 세속적인 운세는 약해진 기운입니다. <b>장점</b>은 우주의 진리를 깨닫는 명상적 지혜지만, <b>단점</b>으로는 화(火)의 생기가 부족해 현실 세계와 유리될 리스크가 큽니다. 소소한 일상의 기쁨을 찾아 매일 햇볕을 쬐고 몸의 감각을 일깨우는 습관을 가지십시오.",
    81: "<b>환희의 대순환과 완성</b> 81수리의 마지막이자 다시 1로 돌아가는 오행의 대화합 지점으로, 완벽한 복덕을 누리는 숫자입니다. 당신의 이름이 도달한 이 지점은 새로운 차원의 운명을 여는 환희의 문입니다. <b>장점</b>은 만물과의 조화와 최상의 명예운이지만, <b>단점</b>으로는 성공에 취해 목(木)의 자만심이 생겨 시련을 자초할 수 있습니다. 얻은 성취를 사회에 환원하는 순환의 법칙을 실천할 때 당신의 운명은 영원히 빛날 것입니다."
};
const detailedDesc81En = {
    1: "<b>Wood: Sprouting and Originality</b> This is the origin of all numbers, symbolizing primordial vital energy. When your name resonance meets this vibration, it manifests as unrivaled independence to create something from nothing. <b>Strengths</b> include relentless drive and a pioneering spirit, while <b>weaknesses</b> involve a tendency toward dogmatism, ignoring external feedback. Incorporate the flexibility of Water to lubricate your forward momentum.",
    2: "<b>Wood: Fragmentation and Adaptability</b> Represents a single life splitting into two to adapt to the environment. This resonance maximizes your empathetic ability to sense others' emotions. <b>Strengths</b> are exceptional cooperation and flexibility, but <b>weaknesses</b> include weak Earth-cohesion, leading to indecision or a lack of closure. Design a firm personal routine to secure a solid foundation for your fortune.",
    3: "<b>Fire: Expansion and Honor</b> Like a rising flame, this energy spreads in all directions. When combined with your name energy, it manifests as a radiant 'star quality' that draws public attention. <b>Strengths</b> include creative self-expression and quick wit, but <b>weaknesses</b> involve a lack of Metal-decisiveness, risking a flashy exterior with little substance. Develop a habit of quantifying and managing your practical achievements.",
    4: "<b>Fire: Overheating and Volatility</b> Excessive heat that burns old orders to spark new transformation. It grants a visionary sense ahead of its time. <b>Strengths</b> are radical innovation and extraordinary ideas, but <b>weaknesses</b> include a lack of Water-calm, risking failure through emotional instability. Establish a 24-hour 'cooling period' before making any major life decisions.",
    5: "<b>Earth: Centrality and Comfort</b> Like the earth embracing all life, all energies gather at the center to achieve stability. If your name balances here, people and wealth naturally accumulate. <b>Strengths</b> are deep public trust and a peaceful domestic life, but <b>weaknesses</b> involve a loss of Wood-pioneering spirit, leading to complacency. Introduce small changes into your daily life to prevent your luck from stagnating.",
    6: "<b>Earth: Cohesion and Heritage</b> Firm soil protecting jewels, symbolizing the power to preserve ancestral legacy or existing foundations. This vibration makes you a trusted leader at the core of an organization. <b>Strengths</b> are abundant social virtue and sincerity, but <b>weaknesses</b> involve a lack of Fire-agility, causing missed timings. Actively embrace new technologies and trends to modernize your foundations.",
    7: "<b>Metal: Sharpness and Achievement</b> Symbolizes a refined blade piercing through goals with sharp decisiveness. This resonance grants unrivaled expertise and authority. <b>Strengths</b> are invincible will and perfectionist achievement, but <b>weaknesses</b> involve a lack of Wood-mercy, making it easy to create enemies. Like a blade in a sheath, refine the art of soft and diplomatic communication.",
    8: "<b>Metal: Accumulation and Grit</b> The energy of persistence, where raw ore endures until it becomes a gem. When combined with your name, it forms the foundation for self-made wealth. <b>Strengths</b> are diligent asset accumulation and endurance, but <b>weaknesses</b> include weak Water-communication, risking a stubborn image. Enhance the dignity of your honor through social contribution and sharing.",
    9: "<b>Water: Abyss and Insight</b> A spiritual vibration exploring invisible truths and wisdom like the deep sea at night. It grants extraordinary intuition and artistic sensitivity. <b>Strengths</b> are brilliant intelligence and keen senses, but <b>weaknesses</b> involve a lack of Fire-passion, leading to solitude and nihilism. Walk alongside a realistic partner who can help manifest your abstract visions.",
    10: "<b>Water: Termination and Void</b> A state where all rivers meet the sea and vanish, symbolizing the intersection of ends and beginnings. It grants a vast heart but may yield weak practical results. <b>Strengths</b> are versatility and extraordinary receptivity, but <b>weaknesses</b> involve a weak Earth-axis, causing results to scatter. Focus your fragmented energy on a single, concrete goal every single day.",
    11: "<b>Wood: Revival and Prosperity</b> Like a sprout emerging from a dry branch, this is the power to turn crisis into opportunity. It brings innovation to a stagnant life. <b>Strengths</b> are fast recovery and proactive leadership, but <b>weaknesses</b> involve potential arrogance after initial success due to weak Fire-regulation. Systematize humility the moment you reach your peak of achievement.",
    12: "<b>Wood: Isolation and Endurance</b> Like a tree growing in a rock crevice, this profile faces many environmental constraints. While inner thought deepens, social friction may arise. <b>Strengths</b> are unrivaled technical expertise and deep philosophical thought, but <b>weaknesses</b> include a lack of Metal-decisiveness, risking exploitation. Learn to draw clear personal boundaries and design your own sovereignty.",
    13: "<b>Fire: Radiance and Strategy</b> Wisdom that shines like the sun to enlighten the masses. This resonance brings fame through exceptional eloquence and social wit. <b>Strengths</b> are brilliance and superb sociability, but <b>weaknesses</b> involve shallow Water-depth, risking a light image or scandals. Practice the art of silence and active listening to build deeper trust with others.",
    14: "<b>Fire: Scattering and Deliberation</b> A sensitive sense that flickers like a flame in the wind, often leading to over-analysis and self-torment. You see hidden truths well. <b>Strengths</b> are precise analytical power and delicate sensitivity, but <b>weaknesses</b> include a lack of Earth-buffer, causing extreme stress. Regularly reset your mental energy through meditation and keep your life simple.",
    15: "<b>Earth: Harmony and Prestige</b> A lucky state where divine blessing meets human virtue, like rain falling on fertile land. It creates a soft charisma that leads many. <b>Strengths</b> are abundant social luck and a harmonious nature, but <b>weaknesses</b> involve a lack of Wood-aggression, causing missed opportunities. Practice firm decisiveness even if you must occasionally play the 'tough' role.",
    16: "<b>Earth: Wealth and Compassion</b> Symbolizes stable fortune where wealth is discovered like treasure in the soil. This profile enjoys high financial independence. <b>Strengths</b> are unexpected windfalls and stable asset management, but <b>weaknesses</b> involve weak Metal-logic, risking personal loss by failing to say 'no.' Strictly separate business from personal sentiment to protect your assets.",
    17: "<b>Metal: Will and Breakthrough</b> A powerful competitive spirit that breaks through hardships like a forged sword. This profile acquires both power and honor. <b>Strengths</b> are unrivaled decisiveness and courage, but <b>weaknesses</b> involve a lack of Wood-flexibility, making you prone to snapping under pressure. Remember that detours are often shortcuts; cultivate strategic flexibility.",
    18: "<b>Metal: Conviction and Completion</b> Symbolizes an invincible will that digs 'one well' until a grand task is completed. You are destined to be a master of your field. <b>Strengths</b> are unshakeable self-belief and sincerity, but <b>weaknesses</b> involve a lack of Fire-adaptability, risking social isolation. Use external feedback as data to periodically update and upgrade your own logic.",
    19: "<b>Water: Deep Sea and Intuition</b> The number 9 represents the peak of Water, symbolizing profound wisdom and spirituality. This resonance creates a genius-level insight into the hidden side of things. <b>Strengths</b> are unique artistry and intuition, but <b>weaknesses</b> involve emotional sensitivity and detachment from reality. Ground your deep thoughts with Earth’s practical execution and create concrete results.",
    20: "<b>Water: Flood and Idealism</b> Possesses massive energy like the ocean, but lacks the levee (Earth) to contain it. Intelligence is high, but execution tends to scatter. <b>Strengths</b> are grand vision and vast tolerance, but <b>weaknesses</b> include a risk of mid-way collapse. Borrow Wood’s execution energy to break your grand goals into very small, manageable units.",
    21: "<b>Wood: Sovereignty and Dignity</b> The majestic image of a giant tree reaching the mountain peak. Your charisma and authority manifest powerfully. <b>Strengths</b> are superb leadership and responsibility, but <b>weaknesses</b> include potential dogmatism without Metal-regulation. Become a magnanimous leader who collects and analyzes the concerns of subordinates as vital data.",
    22: "<b>Wood: Artistry and Hardship</b> Like a flowering vine, you have much talent but lack the Earth-support, leading to emotional instability. <b>Strengths</b> are delicate technical skills and creative sense, but <b>weaknesses</b> involve relationship friction devaluing your achievements. Focus on honest sincerity over flashy tricks to build long-term trust as your brand.",
    23: "<b>Fire: Prosperity and Explosion</b> Like the midday sun, heat peaks to explode into creativity and fame. This profile puts you at the center of the world. <b>Strengths</b> are overwhelming execution and star power, but <b>weaknesses</b> include weak Water-cooling, risking health failure through over-exertion. Take intentional solo time to cool your inner heat before making major moves.",
    24: "<b>Fire: Fruition and Accumulation</b> Grants the innate talent to refine gold with heat, converting energy into tangible wealth. <b>Strengths</b> are superb fiscal sense and stable asset gathering, but <b>weaknesses</b> involve a lack of Metal-moderation, risking a greedy image. Balance your wealth building with social contribution to elevate your reputation.",
    25: "<b>Earth: Harmony and Resourcefulness</b> Like firm soil guiding water, you are a clever mediator navigating crises with ease. <b>Strengths</b> are fast judgment and social harmony, but <b>weaknesses</b> include a lack of Wood-sincerity, risking a reputation for opportunism. Use transparent communication to prove your integrity through consistent data.",
    26: "<b>Earth: Storms and Heroism</b> A heroic profile that becomes stronger through trials, truly shining in the face of crisis. <b>Strengths</b> are invincible will and crisis management, but <b>weaknesses</b> include a lack of Fire-serenity, often choosing the hard path for yourself. Avoid unnecessary battles and allocate your energy efficiently toward core goals.",
    27: "<b>Metal: Critique and Isolation</b> Like a precision scale, the power to distinguish right from wrong is at its peak. You are a master of analysis. <b>Strengths</b> are sharp critical spirit and logic, but <b>weaknesses</b> include weak Water-embrace, risking social distance from others. Transform your critical language into constructive alternatives that empower people.",
    28: "<b>Metal: Expansion and Surge</b> Daring spirit to launch grand businesses and embrace large ambitions. <b>Strengths</b> are bold strategy and a wide range of activity, but <b>weaknesses</b> include a lack of Earth-meticulousness, risking a shaky foundation. Keep a detailed-oriented partner by your side to focus on plugging the holes in your systems.",
    29: "<b>Water: Wisdom and Peace</b> Like a river reaching the sea, wisdom is completed to secure both status and stability. <b>Strengths</b> are deep insight and public trust, but <b>weaknesses</b> involve a lack of Wood-challenge, leading to complacency. Constantly learn new fields to keep your luck and your mindset young and vibrant.",
    30: "<b>Water: Flux and Turnaround</b> A dramatic fate where success and failure alternate like ocean waves. <b>Strengths</b> are resilience to rise from any bottom, but <b>weaknesses</b> include a lack of Fire-composure, causing your luck to swing with your mood. Build a firm philosophical foundation to stabilize your inner center against external shifts.",
    31: "<b>Wood: Social Luck and Self-Reliance</b> Like a forest meeting rain, you achieve grand success through the support of those around you. <b>Strengths</b> are superb interpersonal bonds and luck, but <b>weaknesses</b> involve weak Water-conviction, risking loss of identity to others' opinions. Trust your own data over others' advice at critical turning points.",
    32: "<b>Wood: Communication and Opportunity</b> Like seeds spreading via the wind, information and people naturally find you. <b>Strengths</b> are unexpected wealth and social talent, but <b>weaknesses</b> include a lack of Metal-sincerity, which may lead to relying solely on luck. Intensify your internal skills even more when luck is on your side to turn it into mastery.",
    33: "<b>Fire: Imperial Majesty and Manifestation</b> With the sun directly overhead, your ambition and realization are unmatched, leading you to the peak. <b>Strengths</b> are overwhelming charisma and honor, but <b>weaknesses</b> involve a lack of Water-humility, risking isolation. Actively attribute your success to your team to keep your castle walls strong and secure.",
    34: "<b>Fire: Endurance and Tempering</b> Requires immense patience, like melting iron in a furnace. Passing this trial makes you a true master. <b>Strengths</b> are mental fortitude under extreme conditions, but <b>weaknesses</b> involve a risk of deep pessimism if Earth-optimism fades. Celebrate small wins frequently to feed your mind with positive data points.",
    35: "<b>Earth: Gentleness and Mediation</b> Like fertile fields, a peaceful energy that makes everyone around you feel comfortable. <b>Strengths</b> are harmonious relationships and domestic bliss, but <b>weaknesses</b> involve a lack of Fire-pioneering, risking missed big leaps. Occasionally step out of your comfort zone and try a radical, bold challenge.",
    36: "<b>Earth: Loyalty and Sacrifice</b> Like a bridge made of soil, you build honor through dedication and serving others. <b>Strengths</b> are unshakeable loyalty and public respect, but <b>weaknesses</b> include a lack of Water-practicality, risking personal loss. Never forget that your own success is the primary fuel required to help others effectively.",
    37: "<b>Metal: Craftsmanship and Authority</b> A specialist profile, becoming an irreplaceable authority through precision. <b>Strengths</b> are unrivaled skill and independence, but <b>weaknesses</b> involve a lack of Wood-empathy, making you appear cold or unapproachable. Share your expert knowledge using warm, human language to gain mass support.",
    38: "<b>Metal: Literature and Art</b> Harmony of emotion and reason, producing achievements in both practical and artistic fields. <b>Strengths</b> are sharp expression and result-oriented performance, but <b>weaknesses</b> involve Fire-impatience, which may lead to cutting corners. Consistently check the justice and fairness of your process, not just the final result.",
    39: "<b>Water: Completion and Glory</b> Like all rivers reaching the ocean, this is a state of total completion bringing wealth and fame. <b>Strengths</b> are social status and fiscal abundance, but <b>weaknesses</b> include Fire-complacency, risking a fall from grace. Maintain risk management for worst-case scenarios even while enjoying your peak position.",
    40: "<b>Water: Volatility and Unrest</b> Like a storm at sea, your pioneering spirit is strong but your foundation is perpetually shaky. <b>Strengths</b> are fast adaptation to shifting environments, but <b>weaknesses</b> include weak Fire-center, risking asset loss through speculation. Choose the path of long-term data over momentary intuition or high-volatility deals.",
    41: "<b>Wood: Command and Growth</b> Like a forest growing together, you lead large organizations by merging virtue and leadership. <b>Strengths</b> are superb management and public trust, but <b>weaknesses</b> include weak Metal-self-care, risking health failure. Include rest and wellness as core components of your professional management strategy.",
    42: "<b>Wood: Self-Reliance and Trial</b> Like a tree rooted in barren soil, youth is difficult but you rise purely through your own strength. <b>Strengths</b> are unrivaled self-sufficiency, but <b>weaknesses</b> involve a lack of Earth-support, making help hard to find. Never lose self-trust. Your current trials are the solid bricks for your future castle.",
    43: "<b>Fire: Ostentation and Illusion</b> High flames but lacking fuel; flashy on the outside but hollow within. <b>Strengths</b> are high brand value and outward charm, but <b>weaknesses</b> include a lack of Water-accumulation, making you fiscally fragile. Allocate half of the energy you spend on your image toward building real, tangible assets.",
    44: "<b>Fire: Labyrinth and Innovation</b> Trapped in chaos with many hardships, but overcoming them makes you a world-changing innovator. <b>Strengths</b> are extraordinary creativity and dramatic turnarounds, but <b>weaknesses</b> involve Earth-instability, causing negative loops. When negative thoughts hit, move your body immediately to force a mental reset.",
    45: "<b>Earth: Integration and Mastery</b> Like the earth unifying all life, you enjoy honorable success and total stability. <b>Strengths</b> are deep trust and unified leadership, but <b>weaknesses</b> include a lack of Wood-critique, failing to spot deceptive flattery. Keep a 'devil's advocate' close to you to maintain a sharp sense of reality.",
    46: "<b>Earth: Deliberation and Wandering</b> Shaky ground with much inner conflict; insight is good but execution is weak. <b>Strengths</b> are deep 사유 and reading hidden meanings, but <b>weaknesses</b> include a lack of Metal-focus, wasting talent in many places. Choose just one goal and develop a 10-year obsession to achieve true mastery.",
    47: "<b>Metal: Fortitude and Success</b> Like a flower blooming on a rock, you accumulate massive wealth late in life through endurance. <b>Strengths</b> are unshakeable credit and long-term asset growth, but <b>weaknesses</b> involve weak Fire-expansion, making youth bitter. View your current trials as essential data points required to prove your eventual worth.",
    48: "<b>Metal: Advice and Virtue</b> Like a sage using a blade for justice, you excel as a mentor to leaders. <b>Strengths</b> are wise judgment and high moral values, but <b>weaknesses</b> involve a lack of Water-flexibility, imposing your standards on others. Cultivate a compassionate attitude that seeks to supplement others' flaws rather than just critiquing them.",
    49: "<b>Water: Flexibility and Transformation</b> Exceptional survival skills in shifting environments, like water changing to fit its vessel. <b>Strengths</b> are fast adaptation and versatility, but <b>weaknesses</b> include a lack of Earth-conviction, risking a reputation for opportunism. No matter how much you adapt, establish a core set of unchanging personal values.",
    50: "<b>Water: Surge and Partnership</b> Gambler's instinct on the high seas; success and failure are dramatic and extreme. <b>Strengths</b> are daring courage to seize big chances, but <b>weaknesses</b> include weak Fire-control, risking total loss via betrayal. Prioritize legal and data-driven evidence over intuition to block unnecessary risks.",
    51: "<b>Wood: Flux and the Four Seasons</b> Like a tree marking rings through the seasons, a dramatic fate with frequent ups and downs. <b>Strengths</b> are rich experience and dynamic energy, but <b>weaknesses</b> include a lack of Metal-stability, requiring frequent restarts. Transform change itself into your professional skill as a consultant or strategist.",
    52: "<b>Wood: Preparation and Leap</b> Nurturing strength in a deep forest until the time is right for a grand leap. <b>Strengths</b> are solid internal substance and perfect timing, but <b>weaknesses</b> include a lack of Water-rest, leading to burnout. Systematize mandatory rest to preserve your vital energy for the long-term journey.",
    53: "<b>Fire: Flash and Hollow</b> Outwardly burning bright but lacking sincerity in your social circle. <b>Strengths</b> are social wit and public recognition, but <b>weaknesses</b> involve a lack of Earth-prudence, risking fraud or exploitation. Focus your energy on deepening a few sincere relationships rather than managing many shallow ones.",
    54: "<b>Fire: Suppression and Trial</b> Like a flame covered by soil, responsibility is high but the environment is restrictive. <b>Strengths</b> are extreme sincerity and faith, but <b>weaknesses</b> involve weak Metal-wealth; over-expansion leads to ruin. Do not rush forward; polish your internal substance while waiting for the right ally to appear.",
    55: "<b>Earth: Modesty and Radiance</b> A jewel hidden in soil; value only shines when you maintain a humble posture. <b>Strengths</b> are deep internal power and prudence, but <b>weaknesses</b> involve Wood-vanity, which invites jealousy and collapse. Use 'simplicity' and 'gravitas' as your strategic personal brand to protect your success.",
    56: "<b>Earth: Indecision and Stagnation</b> Like land covered in fog, you have talent but hesitate at critical moments. <b>Strengths</b> are vast tolerance and caution, but <b>weaknesses</b> involve a lack of Fire-decisiveness, keeping you in supporting roles. Habituate fast execution over perfection to seize opportunities based on hard data.",
    57: "<b>Metal: Order and Pioneering</b> Like a sharp blade forging a new path, you succeed in establishing systems in chaos. <b>Strengths</b> are unique pioneering spirit and organizational skill, but <b>weaknesses</b> involve a lack of Water-embrace, risking a dogmatic image. Fairly share the fruits of your success with your team to manage internal resistance.",
    58: "<b>Metal: Persistence and Gathering</b> Like a rock enduring for ages, you eventually achieve self-made wealth through grit. <b>Strengths</b> are sincerity and a solid asset foundation, but <b>weaknesses</b> include a lack of Wood-generosity, risking a lonely old age. Invest in people as much as wealth to ensure your later years are socially rich.",
    59: "<b>Water: Wandering and Endurance</b> Like a river without a destination, you have many talents but lack a place to root them. <b>Strengths</b> are diverse skills and high ideals, but <b>weaknesses</b> include an Earth-instability, making you vulnerable to temptation. Establish rigid deadlines and external rules to standardize your natural talents.",
    60: "<b>Water: Storms and Friction</b> Dramatic fate with frequent relationship conflicts or betrayals like ocean surges. <b>Strengths</b> are veteran-level wisdom and foresight gained from trials, but <b>weaknesses</b> involve Fire-blindness to others' true nature. Focus on strengthening your own inner world rather than deeply involving yourself in others' affairs.",
    61: "<b>Wood: Wisdom and Chieftain</b> Completed wisdom leads you to a respected position at the core of an organization. <b>Strengths</b> are noble dignity and adherence to principles, but <b>weaknesses</b> include a lack of Metal-coldness, risking duty for emotion. Prioritize principles and numeric data over personal sentiment in all professional dealings.",
    62: "<b>Wood: Tempering and Sacrifice</b> Like wood becoming fuel for others' light, you risk exhausting yourself for others' sake. <b>Strengths</b> are noble altruism and compassion, but <b>weaknesses</b> involve weak Earth-self-defense, leading to burnout. Secure your own physical and financial foundation before fully committing to helping others.",
    63: "<b>Fire: Fruition and Success</b> Like fruit ripening under the sun, you enjoy rightful rewards for your consistent efforts. <b>Strengths</b> are harmonious wealth and social fame, but <b>weaknesses</b> involve Water-negligence, risking a sudden internal collapse. Keep a habit of auditing your weakest points even when everything is going perfectly.",
    64: "<b>Fire: Fog and Stagnation</b> A flame trapped in fog, unable to fully express its brilliance. <b>Strengths</b> are deep 사유 and mysterious artistic sense, but <b>weaknesses</b> include a lack of Metal-organization, keeping your life cluttered. Boldly cut away unnecessary items and social ties to focus entirely on one core value.",
    65: "<b>Earth: Peace and Glory</b> Like the earth harvesting all it has grown, you enjoy high honor late in life. <b>Strengths</b> are perfect divine blessing and public prestige, but <b>weaknesses</b> involve Wood-arrogance, losing the hearts of subordinates. Maintain a low-profile stance and look after the most vulnerable members of your circle.",
    66: "<b>Earth: Shaking and Credit</b> Like land hit by an earthquake, misplaced trust can cause a sudden fall in reputation or credit. <b>Strengths</b> are flexible response and tolerance, but <b>weaknesses</b> involve Water-flexibility becoming a toxin. Never provide financial guarantees or lend money based on sentiment; keep all deals strictly formal.",
    67: "<b>Metal: Art and Leadership</b> Like playing a precision instrument, you merge delicate sense with leadership for unique success. <b>Strengths</b> are creative management and aesthetic sense, but <b>weaknesses</b> involve Fire-sociality gaps, causing feelings of isolation. Systematically plan time to synchronize your emotional frequency with your team members.",
    68: "<b>Metal: Resourcefulness and Founding</b> Like building from perfect blueprints, you succeed via flawless strategic systems. <b>Strengths</b> are extraordinary intelligence and unshakeable managerial sense, but <b>weaknesses</b> involve a lack of Wood-humanity. Mix a drop of human humor and vulnerability into your efficient command structure.",
    69: "<b>Water: Isolation and Stagnation</b> Stagnant water prone to rotting; grand dreams lacking practical execution data. <b>Strengths</b> are deep academic knowledge and high spiritual world, but <b>weaknesses</b> include Earth-instability, risking desperate moves. Rebuild your basic skills from the ground up. Your luck only flows when your foundation is solid.",
    70: "<b>Water: Extinction and Emptiness</b> Fading energy yields low rewards for immense effort; a period for spiritual rest. <b>Strengths</b> are noble spirituality detached from worldly greed, but <b>weaknesses</b> include weak Fire-vitality, risking depression. Use altruism, meditation, or religion to find the true meaning of your existence beyond material gain.",
    71: "<b>Wood: Substance and Perfection</b> Hardened wood becoming a pillar; concentrated expertise yields unshakeable wealth. <b>Strengths</b> are unrivaled authority and practical gain, but <b>weaknesses</b> involve a lack of Metal-flexibility, becoming trapped in your own castle. Practice the 'wisdom of the sea' to embrace even those who do not meet your standards.",
    72: "<b>Wood: Volatility and Drive</b> Growth so fast that internal substance may be weak; strong drive but extreme swings. <b>Strengths</b> are young, dynamic energy and daring spirit, but <b>weaknesses</b> involve weak Water-risk management, causing fiscal loss. Base all investment on hard numbers and take a step back when your inner heat rises.",
    73: "<b>Fire: Conclusion and Order</b> Like the brightest light before a flame fades, you wisely organize life and prepare for a new era. <b>Strengths</b> are mature judgment and honorable closure, but <b>weaknesses</b> include Earth-complacency, risking future power loss. Do not obsess over past glory; become an educator who transfers know-how to the next generation.",
    74: "<b>Fire: Decline and Hardship</b> Like a lamp out of fuel, environmental constraints make it difficult to fully express your talent. <b>Strengths</b> are endurance under limits and moral pride, but <b>weaknesses</b> involve Wood-hope depletion. Strengthen your mental muscle by studying philosophy or history to understand the macro cycles of life.",
    75: "<b>Earth: Balance and Peace</b> Perfect equilibrium ensuring a peaceful and stable later life. <b>Strengths</b> are high character and balanced values, but <b>weaknesses</b> include Metal-indecision, risking missed timings at critical turns. At major life crossroads, do not follow the crowd; make a firm, personal, and decisive choice.",
    76: "<b>Earth: Dispersion and Leakage</b> Energy scattering like soil in the wind; high income but even higher expenses. <b>Strengths</b> are a wide range of activity and bold spending, but <b>weaknesses</b> include Water-cohesion failure, risking zero accumulation. Use a professional asset manager or an automated system to 'lock' your wealth away.",
    77: "<b>Metal: Principles and Struggle</b> Like blades clashing, you obsess over being 'right,' leading to constant external friction. <b>Strengths</b> are rigid integrity and courage against injustice, but <b>weaknesses</b> include weak Wood-harmony, causing frequent swings. Prioritize the value of 'coexistence' over being 'correct' as your primary life principle.",
    78: "<b>Metal: Caution and Precaution</b> Like a blade in a sheath, extreme caution brings early-life stability but may delay breakthroughs. <b>Strengths</b> are perfect preparation and risk management, but <b>weaknesses</b> include Fire-optimism lack. Delete all worries with less than a 5% chance of occurring and step boldly out into the world.",
    79: "<b>Water: Seclusion and Wisdom</b> Like a spring in a deep valley, wisdom is profound but goes unacknowledged for a long time. <b>Strengths</b> are niche expertise and a noble spirit, but <b>weaknesses</b> include weak Earth-self-promotion. Share your deep insights with the world. Your reputation only flows when you actively promote your vision.",
    80: "<b>Water: Finality and Reflection</b> Calm at the edge of the sea; spiritual height is high but worldly luck is fading. <b>Strengths</b> are meditative wisdom and cosmic understanding, but <b>weaknesses</b> include Fire-vitality lack. Find joy in small daily routines, get plenty of sunlight, and stay connected to the physical world.",
    81: "<b>Bliss: Grand Cycle and Completion</b> The final point of 81 numerology and the restart of the cycle; perfect harmony. When your name reaches here, you open a new dimension of fate. <b>Strengths</b> are total harmony and supreme honor, but <b>weaknesses</b> involve Wood-arrogance causing new trials. Realize the 'law of circulation' by returning your achievements to society to keep your light eternal."
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

/* [전생 데이터: 81개 수리별 고도화 버전] */
const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    const jobPool = {
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

    const elKey = [1, 2].includes(lastDigit) ? "목(木)" : [3, 4].includes(lastDigit) ? "화(火)" : [5, 6].includes(lastDigit) ? "토(土)" : [7, 8].includes(lastDigit) ? "금(金)" : "수(水)";
    const elTraits = { "목(木)": "강한 추진력과 생명력", "화(火)": "발산하는 열정과 에너지", "토(土)": "두터운 중용과 응집력", "금(金)": "예리한 결단과 강직함", "수(水)": "심오한 지혜와 유연함" };
    const pool = jobPool[elKey];
    const match = pool[i % pool.length];
    const mods = ["달빛 아래 기도를 올리던", "금기된 고서를 해석하던", "별의 궤적을 쫓던", "침묵 속에 칼날을 갈던", "자비로운 마음으로 생명을 품던", "안개 너머 진실을 보던", "거친 파도를 잠재우던", "운명의 실타래를 풀던", "비밀스러운 전설을 기록하던", "정의로운 신념으로 맞서던"];

    // [4] 과업(Homework) - 30개로 확장
    const homeworks = [
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

   return { 
        job: `${mods[i % mods.length]} ${match.job}`, 
        desc: `성명학 분석 결과, 당신은 <b>${elKey}</b>의 <b>${elTraits[elKey]}</b>이 두드러지는 명식입니다. 이로 인해 과거 생애에서 ${match.desc}`, 
        homework: homeworks[i % homeworks.length] 
    };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    const jobPoolEn = {
        "Wood": [
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
        "Fire": [
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
        "Earth": [
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
        "Metal": [
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
        "Water": [
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

   const elKeyEn = [1, 2].includes(lastDigit) ? "Wood" : [3, 4].includes(lastDigit) ? "Fire" : [5, 6].includes(lastDigit) ? "Earth" : [7, 8].includes(lastDigit) ? "Metal" : "Water";
    const elTraitsEn = { "Wood": "vitality", "Fire": "passion", "Earth": "balance", "Metal": "integrity", "Water": "wisdom" };

    const poolEn = jobPoolEn[elKeyEn];
    const matchEn = poolEn[i % poolEn.length];
    const modsEn = ["Praying under the moonlight", "Decoding forbidden scrolls", "Chasing starlight", "Sharpening blades", "Embracing life", "Seeing the truth", "Calming the waves", "Unraveling fate", "Recording legends", "Standing righteous"];
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

return { 
        job: `${modsEn[i % modsEn.length]} ${matchEn.job}`, 
        desc: `Based on Suri analysis, your name possesses powerful <b>${elKeyEn}</b> energy. Consequently, in your past life, you ${matchEn.desc}`, 
        homework: homeworksEn[i % homeworksEn.length] 
    };
});

/* [내세 데이터: 81개 수리별 미래/개척시대 버전] */
const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    
    const futurePool = {
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
 // [2] 미래적 장소(Places) - 지구 복원지 + 우주 개척지 (30개)
    const places = [
        "네오-판교 테크 밸리", "태평양 수중 도시 '아틀란티스'", "화성 제4 거주 돔", "달 후면부 에너지 기지", "바이칼 호수 복원 센터", 
        "안드로메다 연락 사무소", "성층권 부유 연구소", "뉴-교토 홀로그램 정원", "적도 위 우주 엘리베이터 허브", "남극 빙하 속 종자 보관소",
        "금성 구름 위 테라스", "양자 컴퓨팅 공명실", "유로파 심해 연구소", "사하라 수직 도시", "지구 궤도 정거장 '새벽'",
        "실리콘 밸리 2.0 유적지", "알프스 산맥 기상 조절소", "아마존 스마트 밀림", "목성 고리 관측 데크", "나노 공정 자동화 공장",
        "무의식 데이터 아카이브", "다차원 관문 터미널", "기억 저장소 '메모리아'", "차원 전송 게이트 11", "에메랄드 포레스트 돔",
        "침묵의 데이터 망루", "무지개 공명 광장", "코스모스 평화 센터", "미래 기후 설계실", "영혼 전송 정거장"
    ];
 // [4] 핵심 미션(Missions) - 개척과 공생 (30개)
    const missions = [
        "지구의 멸종 위기 식물 유전자를 행성 X로 이식하십시오.", "화성의 물 부족 현상을 해결할 결빙 핵 기술을 전달하십시오.", "분열된 달 거주지들 사이의 평화 조약을 체결하십시오.",
        "인공지능과 인류 사이의 감정적 갈등을 중재하고 화해시키십시오.", "100년 전 손실된 인류의 디지털 기억을 복구하십시오.", "신개척 행성에 세워질 첫 번째 도서관의 책을 선별하십시오.",
        "지구 자기장의 불균형을 막아 대기 붕괴를 저지하십시오.", "미래 세대를 위한 완벽한 산소 공급 시스템을 설계하십시오.", "행성 간 이동 중 발생하는 시공간 멀미를 치료하는 주파수를 찾으십시오.",
        "안드로이드들에게 '인간의 따스함'을 가르치는 교육 프로그램을 완성하십시오.", "지구 바다의 오염된 나노 입자들을 정화하는 임무를 수행하십시오.", "달의 먼지를 이용해 거대한 에너지 패널을 건설하십시오.",
        "다른 은하계에서 온 미지의 조난 신호를 최초로 수신하십시오.", "인류의 마지막 남은 천연 숲을 보존하는 파수꾼이 되십시오.", "우주 정거장의 노후된 중력 발생 장치를 교체하십시오.",
        "지구형 행성 탐사대의 정신적 안정을 돕는 상담 시스템을 운영하십시오.", "행성 간 무역에서 발생하는 불공정 거래를 감시하십시오.", "사라진 미래 도시 '뉴-뉴욕'의 지도를 다시 그리십시오.",
        "시공간 가속 장치의 과부하를 막아 차원의 균형을 지키십시오.", "인류가 거주할 새로운 지하 도시의 광원 시스템을 설치하십시오.", "외계 지성체와의 최초의 문화 교류 축제를 기획하십시오.",
        "화성 토양에 자랄 수 있는 하이브리드 종자를 배양하십시오.", "우주의 모든 소리를 수집하여 지구의 옛 노래를 복원하십시오.", "환생 시스템의 데이터 오류를 수정하여 영혼들을 구제하십시오.",
        "성운의 에너지를 모아 인공 태양을 점화하는 작업에 참여하십시오.", "미래의 인류가 겪을 지독한 고독을 치유할 콘텐츠를 제작하십시오.", "스스로 빛을 내지 못하는 개척지에 지혜의 빛을 전하십시오.",
        "우주의 끝에서 날아오는 정체불명의 방사능을 차단하십시오.", "감정의 불균형으로 무너지는 돔 도시의 정신을 재건하십시오.", "영원한 평화와 공존의 시나리오를 완성하십시오."
    ];

   const elKey = [1, 2].includes(lastDigit) ? "목(木)" : [3, 4].includes(lastDigit) ? "화(火)" : [5, 6].includes(lastDigit) ? "토(土)" : [7, 8].includes(lastDigit) ? "금(金)" : "수(水)";
    const pool = futurePool[elKey];
    const match = pool[i % pool.length];

    // 🚩 return문에서 변수명 match와 elKey가 정확히 매칭됩니다.
    return { 
        place: places[i % places.length], 
        job: match.role, 
        desc: `분석 결과 당신의 미래는 <b>${elKey}</b>의 에너지가 주도합니다. 이 영향으로 내세에서는 <b>${match.job}</b>(으)로 활동할 운명입니다.`, 
        mission: missions[i % missions.length] 
    };
});

/* [내세 데이터 영문: Future/Colonization Version] */
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const num = i + 1;
    const lastDigit = num % 10;
    const futurePoolEn = {
        "Wood": [
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
        "Fire": [
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
        "Earth": [
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
        "Metal": [
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
        "Water": [
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

    const placesEn = [
        "Neo-Pangyo Tech Valley", "Underwater City 'Atlantis'", "Mars Residential Dome 04", "Far Side Lunar Energy Base", "Lake Baikal Restoration Center", 
        "Andromeda Liaison Office", "Stratospheric Floating Lab", "Neo-Kyoto Hologram Garden", "Equatorial Space Elevator Hub", "Antarctic Seed Vault",
        "Venus Cloud Terrace", "Quantum Computing Chamber", "Europa Deep Sea Lab", "Sahara Vertical City", "Earth Orbit Station 'Dawn'",
        "Silicon Valley 2.0 Ruins", "Alpine Weather Control Station", "Amazon Smart Jungle", "Jupiter Ring Observation Deck", "Nano-Process Auto Factory",
        "Unconscious Data Archive", "Multidimensional Gateway Terminal", "Memory Vault 'Memoria'", "Dimension Gate 11", "Emerald Forest Dome",
        "Silent Data Watchtower", "Rainbow Resonance Square", "Cosmos Peace Center", "Future Climate Design Lab", "Soul Transit Station"
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
    
    // 오행 기운 특성 번역
    const elTraitsEn = {
        "Wood": "limitless scalability and vitality",
        "Fire": "radiant intelligence and brilliance",
        "Earth": "stable moderation and management",
        "Metal": "precise judgment and justice",
        "Water": "profound insight and purification"
    };
const elKeyEn = [1, 2].includes(lastDigit) ? "Wood" : [3, 4].includes(lastDigit) ? "Fire" : [5, 6].includes(lastDigit) ? "Earth" : [7, 8].includes(lastDigit) ? "Metal" : "Water";
    const poolEn = futurePoolEn[elKeyEn];
    const matchEn = poolEn[i % poolEn.length];

    return { 
        place: placesEn[i % placesEn.length], 
        job: matchEn.role, 
        desc: `According to the analysis, your future will be driven by <b>${elKeyEn}</b> energy. Under this influence, in your afterlife, you will be <b>${matchEn.job}</b>.`, 
        mission: missionsEn[i % missionsEn.length] 
    };
});

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
