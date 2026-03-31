/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

// 1. i18n 라벨 업데이트 (전생/내세 활동 중심지 항목 추가)
const i18n = {
    ko: {
        title: "수리성명학 데이터 분석", 
        desc: "성명의 파동과 탄생 시계열 지표를 바탕으로 81수리 체계를 분석합니다. 당신의 시그니처 에너지 구조가 도출됩니다.",
        nameLabel: "성명", birthLabel: "양력 8자리(19901208)", btn: "리포트 생성하기",
        loadSeal: "분석중", loadTitle: "당신의 운명 에너지를 조합 중...", loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", tab2Btn: "전생 기록", tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료", sec2: "약점 보완 전략", advise: "현생 조언", practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", tab3Title: "내세 분석 자료", 
        pastDest: "전생 활동 중심지", // 추가
        pastJob: "전생의 직업", 
        pastHomework: "전생의 과업", 
        nextDest: "내세 활동 중심지", 
        nextObj: "내세의 직업", 
        nextMission: "내세의 임무"
    },
    en: {
        title: "Suri Numerology Analysis", 
        desc: "Analyzes the 81-numerology system based on name vibrations and birth indicators to derive your signature energy structure.",
        nameLabel: "Name", birthLabel: "Birthdate (YYYYMMDD)", btn: "Generate Report",
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
        nextMission: "Future Assignment"
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

/* [현생 과업: 오행 역학 통합 분석 시스템] */
const elementPrescriptions12 = {
    "목(木)": [
        "강한 <b>목(木)</b>의 추진력으로 선구자적 기질이 뚜렷하지만, 상대적으로 수(水)의 유연함이 부족해 독단에 빠지기 쉽습니다. 기획과 시작에는 능하나 감정적 소통에 서툰 편입니다. <b>전략가나 벤처 창업가</b>가 잘 어울리며, 타인의 피드백을 데이터로 수용하여 설계를 수정하는 것이 당신의 핵심 과업입니다.",
        "성장의 에너지가 넘쳐 늘 새로운 도전을 즐기나, 토(土)의 응집력이 약해 마무리가 흐려지는 경향이 있습니다. 아이디어는 뱅크 수준이나 실행의 지속성이 숙제입니다. <b>교육자나 신규 프로젝트 매니저</b>가 적합하며, 루틴을 시스템화하여 끝까지 완수하는 습관을 기르는 것이 현생의 미션입니다.",
        "뿌리 깊은 나무처럼 주관이 뚜렷하고 리더십이 강하지만, 금(金)의 결단력이 부족해 맺고 끊음이 약할 수 있습니다. 사람을 잘 믿고 품지만 실속을 놓치기 쉽습니다. <b>인사 관리나 복지 전문가</b>가 어울리며, 공과 사의 경계를 명확히 하여 주권을 지키는 것이 가장 큰 과업입니다.",
        "위로 뻗어가는 생명력이 강해 조직의 활력을 불어넣지만, 화(火)의 조절력이 약하면 의욕만 앞서 번아웃될 위험이 있습니다. 열정은 높으나 에너지 분배에 서툽니다. <b>창의적 디자이너나 기획자</b>가 천직이며, 자신의 에너지를 수치화하여 효율적으로 배분하는 법을 익히는 것이 과업입니다.",
        "외유내강의 전형으로 내면의 독립심이 강하나, 주변과의 융합 에너지가 약해 고립된 섬처럼 느껴질 때가 있습니다. 전문성은 독보적이나 협업에서 스트레스를 받습니다. <b>기술 아키텍트나 연구원</b>이 어울리며, 고립에서 벗어나 네트워크를 구축하는 것이 영혼의 숙제입니다.",
        "상생의 기운이 강해 주변을 돕는 것을 즐기나, 자기 방어 기제인 금(金)이 약해 이용당하거나 상처받기 쉬운 구조입니다. 타인의 성장을 돕는 데 탁월한 재능이 있습니다. <b>컨설턴트나 멘토</b>가 잘 맞으며, '아니오'라고 말할 수 있는 단호함을 갖추는 것이 현생의 생존 과업입니다.",
        "습득 능력이 매우 뛰어나 지식의 흡수가 빠르지만, 토(土)의 안정감이 부족해 배운 것을 현실의 수익으로 연결하는 힘이 약합니다. 이론에는 강하나 실전 재테크에 취약할 수 있습니다. <b>학자나 정보 분석가</b>가 적합하며, 지식을 자본으로 전환하는 실전 감각을 익히는 것이 과업입니다.",
        "고결한 이상주의자로 도덕적 가치를 중시하지만, 화(火)의 현실적 발산력이 약해 본인의 가치를 세상에 알리는 데 소극적입니다. 실력은 있으나 PR이 부족합니다. <b>비영리 단체 리더나 예술가</b>가 어울리며, 대중의 언어로 자신의 가치를 당당히 증명하는 것이 과업입니다.",
        "강력한 두령의 기운을 타고나 조직을 장악하는 힘이 좋으나, 수(水)의 정화 작용이 부족해 성공 후 적을 만들기 쉬운 기질입니다. 카리스마는 넘치나 포용력이 변수입니다. <b>정치인이나 CEO</b>가 천직이며, 높은 자리에 있을수록 낮은 곳을 살피며 적을 친구로 만드는 것이 과업입니다.",
        "기회를 포착하는 직관이 예리하지만, 목(木)의 과다한 경쟁심으로 인해 정작 소중한 사람들과의 관계를 놓칠 수 있습니다. 성취욕은 극상이나 정서적 허기가 있습니다. <b>영업 전문가나 투자가</b>가 어울리며, 승리보다 공존의 가치를 먼저 계산하는 법을 배우는 것이 과업입니다.",
        "완벽한 설계도를 그리는 능력이 탁월하지만, 금(金)의 정리 능력이 약해 주변이 늘 어수선하고 핵심을 놓칠 때가 있습니다. 큰 그림은 잘 보나 디테일에 약합니다. <b>도시 설계자나 시스템 엔지니어</b>가 적합하며, 불필요한 것을 쳐내고 핵심에 집중하는 '단순화'가 당신의 현생 과업입니다.",
        "스스로 생태계를 창조할 만큼 에너지가 거대하지만, 토(土)의 중재 능력이 결여되면 주변 사람들을 본인의 속도에 맞추려다 숨막히게 할 수 있습니다. <b>문화 콘텐츠 제작자나 예술 감독</b>이 어울리며, 타인의 속도를 존중하고 기다려주는 인내를 배우는 것이 최종 미션입니다."
    ],
    "화(火)": [
        "폭발적인 열정과 추진력이 무기이지만, 수(水)의 냉정함이 결핍되어 감정 기복에 따라 업무 효율이 극명하게 갈리는 편입니다. 몰입도는 최상이나 뒷심이 약합니다. <b>마케터나 광고 기획자</b>가 잘 어울리며, 뜨거운 가슴을 차가운 루틴으로 통제하는 법을 배우는 것이 과업입니다.",
        "영감이 샘솟는 재주꾼이나, 금(金)의 규율 에너지가 약해 창의적인 생각들을 결과물로 매듭짓지 못하고 흩뿌리는 경향이 있습니다. <b>예술가나 콘텐츠 크리에이터</b>가 적합하며, 모든 아이디어를 문서로 기록하고 끝을 보는 끈기를 갖추는 것이 현생의 미션입니다.",
        "군중을 매료시키는 화려한 언변을 가졌으나, 토(土)의 신중함이 부족해 말실수로 공든 탑을 무너뜨릴 리스크가 상존합니다. 사교성은 최고이나 입이 가벼울 수 있습니다. <b>방송인이나 대변인</b>이 어울리며, 때로는 침묵이 가장 강력한 메시지임을 깨닫고 무게감을 지키는 것이 과업입니다.",
        "빠른 정보 처리와 순발력이 돋보이지만, 목(木)의 지속적인 성장 기운이 약해 깊이 있는 전문성을 쌓기보다 넓고 얕은 지식에 머물기 쉽습니다. <b>IT 트렌드 분석가나 기자</b>가 천직이며, 한 우물을 깊게 파서 자신만의 독보적인 영역을 구축하는 것이 과업입니다.",
        "설득력이 매력적이고 존재감이 뚜렷하지만, 수(水)의 겸손 기운이 약해 본의 아니게 오만하다는 오해를 받기 쉬운 구조입니다. 리더십은 좋으나 독단이 적입니다. <b>영업 리더나 정치인</b>이 적합하며, 숫자의 힘과 객관적 증거로 권위를 세우고 고개를 숙이는 법을 익히는 것이 과업입니다.",
        "감성이 풍부하고 예술적 감각이 탁월하지만, 금(金)의 현실 감각이 부족해 경제적 기반이 흔들리거나 사기를 당할 우려가 있습니다. <b>순수 예술가나 종교인</b>이 어울리며, 현실의 영수증을 꼼꼼히 챙기고 자산의 토대를 스스로 구축하는 것이 생존 과업입니다.",
        "변화무쌍한 적응력과 에너지를 가졌으나, 토(土)의 중심축이 약해 한 곳에 정착하지 못하고 방황할 확률이 높은 명식입니다. 재능은 많으나 정체성이 모호합니다. <b>여행 작가나 프리랜서</b>가 어울리며, 자신만의 확고한 철학적 닻을 내려 삶의 기준점을 세우는 것이 과업입니다.",
        "불멸의 의지와 열정을 타고났지만, 목(木)의 자비심이 결핍되면 목표 달성을 위해 주변을 희생시키는 냉혈한이 될 수 있습니다. 성과는 독보적이나 주변이 외롭습니다. <b>전문 경영인이나 펀드 매니저</b>가 어울리며, 사람의 마음을 얻는 것이 진짜 성공임을 증명하는 것이 과업입니다.",
        "태양처럼 세상을 밝히는 명예 중심의 삶이나, 화(火)의 기운이 과열되면 건강(심혈관)을 소홀히 하고 일에 중독될 위험이 큽니다. 사회적 지위는 높으나 속은 타들어갑니다. <b>고위 공직자나 교수</b>가 적합하며, 의도적인 멈춤과 휴식을 통해 내면의 화기를 다스리는 것이 미션입니다.",
        "소통의 달인으로 네트워크가 방대하지만, 수(水)의 깊은 통찰이 부족해 진실한 인연보다 화려한 인맥에만 집착할 수 있습니다. <b>이벤트 기획자나 홍보 전문가</b>가 잘 맞으며, 화려한 조명 뒤의 고독을 즐기고 자아의 깊이를 더하는 사색의 시간을 갖는 것이 과업입니다.",
        "책임감이 강하고 주목받는 운명이나, 금(金)의 비판력이 결여되면 주변의 아첨을 가려내지 못해 위기를 자초할 수 있습니다. <b>브랜드 디렉터나 연예인</b>이 어울리며, 자신에 대한 냉정한 평가를 데이터로 직시하고 끊임없이 재창조하는 것이 과업입니다.",
        "강력한 카리스마와 지성을 겸비했으나, 토(土)의 포용력이 약해 본인의 기준에 미치지 못하는 사람들을 배척하는 냉정한 면모가 있습니다. <b>비평가나 법률가</b>가 어울리며, 타인의 부족함을 품고 함께 성장하는 대인이 되는 것이 현생의 최종 숙제입니다."
    ],
    "토(土)": [
        "듬직하고 신뢰감 주는 성품이나, 목(木)의 개척 정신이 부족해 변화하는 시대에 뒤처지거나 매너리즘에 빠지기 쉬운 기질입니다. 안정감은 최고이나 혁신이 부족합니다. <b>금융인이나 공무원</b>이 잘 어울리며, 매일 새로운 것 하나를 시도하며 운의 정체를 막는 것이 과업입니다.",
        "만물을 기르는 포용력이 강점이나, 수(水)의 정밀함이 약해 남 좋은 일만 하다가 본인의 실속은 하나도 챙기지 못하는 '호인'의 전형입니다. <b>사회 복지사나 상담가</b>가 적합하며, 자신의 공간과 자산을 먼저 정돈하고 남을 돕는 '건강한 이기주의'를 배우는 것이 과업입니다.",
        "따뜻한 심성으로 사람들을 연결하지만, 금(金)의 결단력이 결여되어 거절을 못 하고 스트레스를 혼자 짊어지는 구조입니다. <b>인사 운영자나 커뮤니티 리더</b>가 어울리며, 인간관계의 명확한 경계선을 긋고 본인의 에너지를 보호하는 법을 익히는 것이 미션입니다.",
        "신중함이 최대 자산이나, 화(火)의 실행 에너지가 약해 완벽을 기하다가 타이밍을 놓치고 주저하는 경우가 많습니다. 준비는 철저하나 시작이 어렵습니다. <b>기록물 관리사나 박물관 큐레이터</b>가 적합하며, 80%의 준비 상태에서 과감히 세상에 내놓는 연습을 하는 것이 과업입니다.",
        "책임감이 강해 조직의 기둥 역할을 수행하지만, 목(木)의 유연함이 부족해 고집스럽고 보수적이라는 평을 듣기 쉽습니다. <b>감사 업무나 보안 전문가</b>가 어울리며, 타인의 새로운 아이디어를 비판 없이 수용하고 조직의 유연성을 높이는 중재자가 되는 것이 과업입니다.",
        "리소스 배분과 관리에 탁월한 재능이 있으나, 수(水)의 창의적 발상 기운이 약해 기존 시스템을 유지하는 데만 에너지를 쏟는 경향이 있습니다. <b>물류 전문가나 운영 이사</b>가 잘 맞으며, 데이터 뒤의 숨겨진 트렌드를 읽어내어 시스템을 업그레이드하는 것이 현생의 숙제입니다.",
        "결국 목표를 이루는 끈기가 남다르지만, 화(火)의 열정이 부족해 과정 자체를 즐기기보다 의무감에 짓눌려 무기력해질 때가 많습니다. <b>장기 프로젝트 매니저나 장인</b>이 어울리며, 사소한 성취를 기념하고 자신에게 보상을 주어 즐겁게 일하는 법을 배우는 것이 과업입니다.",
        "안정적인 환경에서 최고의 능력을 발휘하나, 금(金)의 도전 기운이 약해 안전지대를 벗어나는 것을 극도로 두려워합니다. <b>부동산 전문가나 관제사</b>가 적합하며, 인생에 찾아오는 불확실성을 기회로 보고 배팅할 수 있는 담력을 키우는 것이 과업입니다.",
        "확고한 신념과 묵직한 존재감을 가졌지만, 수(水)의 소통력이 결여되면 본인의 의도를 오해받거나 불통의 아이콘이 될 수 있습니다. <b>전략 수립가나 법관</b>이 어울리며, 자신의 철학을 친절한 문서와 언어로 공유하여 대중의 동의를 얻어내는 것이 미션입니다.",
        "품격 있고 신중하나, 목(木)의 추진력이 약해 결론을 내는 속도가 느려 경쟁에서 밀릴 리스크가 있습니다. <b>자산 관리사나 골동품 감정사</b>가 잘 맞으며, 결정적인 순간에 본능을 믿고 빠르게 움직이는 '동물적 감각'을 훈련하는 것이 과업입니다.",
        "관리 능력과 수치 계산이 정확하지만, 화(火)의 감성 에너지가 부족해 주변 사람들을 로봇처럼 대할 수 있습니다. 결과는 좋으나 인심을 잃기 쉽습니다. <b>회계사나 데이터 분석가</b>가 천직이며, 사람의 마음에도 따뜻한 온기가 필요함을 인정하고 정서적 투자를 늘리는 것이 과업입니다.",
        "대지처럼 만물을 품는 위대한 운명이나, 금(金)의 날카로운 안목이 부족해 곁에 둔 사람들의 옥석을 가리지 못하고 손해를 볼 수 있습니다. <b>자선가나 교육 재단 운영자</b>가 어울리며, 고집을 버리고 진정한 지혜를 가진 멘토를 찾아 조언을 구하는 유연함을 갖추는 것이 과업입니다."
    ],
    "금(金)": [
        "타고난 승부사로 결단력과 용기가 독보적이지만, 목(木)의 자비심이 부족해 주변에 적을 만들거나 냉혈한이라는 평을 듣기 쉬운 명식입니다. <b>검사나 프로 운동선수</b>가 잘 어울리며, 칼날 같은 원칙에 따뜻한 인간미를 한 방울 섞어 대중의 지지를 얻는 것이 현생의 과업입니다.",
        "핵심을 꿰뚫는 분석력이 최고 수준이나, 수(水)의 포용력이 약해 본인의 기준에 미치지 못하는 타인을 날카롭게 비판하여 스스로 고립됩니다. <b>회계 감사나 평론가</b>가 적합하며, 비판 뒤에 반드시 건설적인 대안을 제시하여 사람을 살리는 언어를 쓰는 것이 과업입니다.",
        "묵직한 존재감과 강한 정의감을 가졌지만, 화(火)의 사교성이 부족해 본인의 진심을 표현하지 못하고 묵묵히 일만 하는 스타일입니다. <b>엔지니어나 기술직 공무원</b>이 어울리며, 짧고 간결하되 진심이 담긴 칭찬과 표현으로 주변의 온도를 높이는 것이 미션입니다.",
        "정리 능력이 신의 경지로 시스템 구축에 능하나, 토(土)의 완충력이 약해 작은 오차에도 예민하게 반응하고 스스로를 볶아댑니다. <b>품질 관리사나 프로그래머</b>가 천직이며, 10%의 여백과 불완전함을 인정하고 정서적 안정을 찾는 법을 익히는 것이 과업입니다.",
        "정의롭고 강직한 성품이나, 수(水)의 유연함이 결여되어 융통성 없는 사람으로 비치기 쉽습니다. 옳고 그름에 너무 집착합니다. <b>법조인이나 인권 활동가</b>가 잘 맞으며, 세상에는 흑백 외에도 수많은 회색 지대가 있음을 인정하고 포용하는 것이 현생의 숙제입니다.",
        "스스로에게 엄격하여 높은 성취를 이루지만, 목(木)의 성장에너지가 약하면 현재의 성공에 갇혀 더 큰 기회를 보지 못할 수 있습니다. <b>전문 장인이나 고위 기술직</b>이 어울리며, 끊임없이 새로운 분야를 배우고 자신을 리셋하여 '낡은 칼'이 되지 않도록 벼르는 것이 과업입니다.",
        "카리스마 있는 지도자이나, 화(火)의 발산력이 과하면 본인의 권위를 지나치게 내세워 아랫사람의 창의성을 죽일 수 있습니다. <b>군인이나 경찰 리더</b>가 적합하며, 부드러움 속에 예리함을 감추는 '외유내강'의 리더십을 완성하는 것이 미션입니다.",
        "장인 정신이 빛나고 디테일에 강하지만, 토(土)의 넓은 시야가 부족해 숲을 보지 못하고 나무만 보다가 큰 흐름을 놓칩니다. <b>세공사나 정밀 기계 공학자</b>가 어울리며, 주기적으로 일에서 벗어나 거시적인 트렌드를 살피는 거시적 안목을 기르는 것이 과업입니다.",
        "고결한 성품으로 원칙을 지키나, 목(木)의 융통성이 부족해 조직 생활에서 갈등의 핵이 될 위험이 있습니다. <b>교정 전문가나 윤리 경영관</b>이 잘 맞으며, 10%의 유연성을 발휘해 타협할 줄 아는 '정치적 감각'을 갖추는 것이 대인이 되는 과업입니다.",
        "이성적이고 차가운 지성을 가졌으나, 화(火)의 공감 엔진이 약해 타인의 슬픔에 공감하지 못해 인간관계가 건조합니다. <b>금융 분석가나 의사(외과)</b>가 어울리며, 감정 데이터를 읽는 능력을 길러 사람의 마음을 치유하는 기술을 장착하는 것이 현생의 숙제입니다.",
        "믿음직하고 견고한 인물이나, 수(水)의 변화 기운이 결여되면 시대의 변화를 거부하고 고립된 전문가로 남을 수 있습니다. <b>보안 설계자나 금속 공예가</b>가 적합하며, 최신 기술과 디지털 트렌드를 적극 수용하여 자신의 고전적 가치를 현대화하는 것이 과업입니다.",
        "천하의 명검과 같은 운명이나, 토(土)의 지지 기반이 약하면 휘두를 곳을 찾지 못하고 방황하거나 자신을 상처 입힐 수 있습니다. <b>특수직 전문가나 칼럼니스트</b>가 어울리며, 뜨거운 열정(火)과 단단한 기초(土)를 먼저 닦아 자신의 예리함을 세상을 위해 바르게 쓰는 것이 최종 과업입니다."
    ],
    "수(水)": [
        "지혜로운 현자의 기운으로 통찰력이 깊지만, 화(火)의 실행력이 약해 생각만 하다가 기회를 흘려보내는 '몽상가' 기질이 있습니다. <b>학자나 전략가</b>가 어울리며, 머릿속 지도를 즉각 행동으로 옮기는 기계적인 루틴을 구축하는 것이 현생의 과업입니다.",
        "상상력이 천부적이나, 토(土)의 지지력이 부족해 현실과 동떨어진 이상에 매몰되거나 정서적 불안감을 느끼기 쉬운 구조입니다. <b>작가나 심리학자</b>가 적합하며, 명확한 경제적 목표와 현실적인 체크리스트를 만들어 발을 지면에 붙이는 법을 배우는 것이 미션입니다.",
        "철학적 사고와 심오한 대화를 즐기나, 금(金)의 결단력이 약해 인간관계에서 우유부단하게 행동하다 오해를 살 수 있습니다. <b>상담가나 인문학자</b>가 어울리며, 자신의 생각과 결론을 명확히 문서화하고 단호하게 의사를 표현하는 법을 익히는 것이 과업입니다.",
        "어디든 적응하는 유연함이 강점이나, 목(木)의 주관이 약하면 타인의 의견에 휩쓸려 본인의 색깔을 잃는 '액체' 같은 삶을 살기 쉽습니다. <b>외교관이나 무역가</b>가 천직이며, 자신만의 변치 않는 핵심 가치(Anchor)를 설정하고 중심을 지키는 것이 과업입니다.",
        "직관력이 뛰어나 보이지 않는 흐름을 잘 읽지만, 화(火)의 열정이 부족해 본인의 지혜를 세상에 드러내는 데 인색합니다. <b>점성술사나 연구원</b>이 어울리며, 자신의 지식과 직관을 구체적인 서비스나 상품으로 구조화하여 사회적 기여도를 높이는 것이 숙제입니다.",
        "조율하고 중재하는 데 탁월하나, 수(水)의 기운이 과다하면 모든 일을 혼자 떠맡아 에너지가 고갈되고 우울감에 빠질 수 있습니다. <b>오케스트라 지휘자나 조정자</b>가 잘 맞으며, 리소스를 분산하고 타인에게 권한을 위임하는 '덜어내기' 기술을 배우는 것이 과업입니다.",
        "깊이 있는 성찰과 고결한 정신을 가졌으나, 토(土)의 현실 기반이 결여되어 경제적인 고난을 겪거나 현실을 외면할 리스크가 큽니다. <b>철학자나 시인</b>이 어울리며, 주기적인 산책과 규칙적인 생활로 뇌를 리셋하고 현실의 안정을 최우선 지표로 관리하는 것이 과업입니다.",
        "섬세한 완벽주의자로 가치 있는 일을 해내지만, 화(火)의 속도감이 부족해 마감 기한을 넘기거나 지나친 고민으로 건강을 해칠 수 있습니다. <b>수석 연구원이나 아카이브 관리자</b>가 적합하며, '완벽보다 완결'을 모토로 삼아 실행의 속도를 높이는 것이 미션입니다.",
        "조용한 카리스마로 사람들을 이끌지만, 목(木)의 소통력이 약해 팀원들에게 차가운 인상을 주거나 벽을 쌓을 수 있습니다. <b>고독한 리더나 전문직</b>이 어울리며, 자신의 비전을 대중의 언어로 번역하여 따뜻하게 전달하는 소통 기술을 연마하는 것이 과업입니다.",
        "상대의 마음을 읽는 능력이 귀신같으나, 수(水)의 침잠하는 기운 때문에 우울함이 올 때 바닥까지 내려갈 위험이 있습니다. <b>정신과 의사나 타로 상담사</b>가 잘 맞으며, 우울한 감정이 들 땐 생각하지 말고 몸을 움직이는 기계적 루틴을 가동하는 것이 생존 과업입니다.",
        "지혜를 공유할 고귀한 운명을 타고났으나, 금(金)의 자기 관리력이 결여되면 타인의 문제 해결에만 몰두하다 본인의 삶을 놓칠 수 있습니다. <b>대학교수나 대중 강연가</b>가 어울리며, 자신의 지식을 유료화하거나 체계화하여 사회적 부와 연결시키는 순환 구조를 만드는 것이 과업입니다.",
        "지혜의 화신으로 무궁무진한 잠재력을 가졌으나, 토(土)의 규율이 부족해 무질서한 생활에 빠지거나 중독(주색, 도박 등)에 취약할 수 있습니다. <b>자유로운 예술가나 명상 전문가</b>가 천직이며, 집착을 버리되 삶의 질서는 엄격히 유지하는 '중용의 미덕'을 실천하는 것이 최종 과업입니다."
    ]
};

const enPrescriptions12 = {
    "木": [
        "Dominated by the powerful drive of <b>Wood</b>, you possess pioneering traits but inherently lack the flexibility of Water, risking isolation through dogmatism. You excel at planning but struggle with emotional diplomacy. Ideal as a <b>Strategist or Entrepreneur</b>, your mission is to treat feedback as essential data to refine your designs.",
        "Overflowing with growth energy, you enjoy new challenges, but a lack of Earth's cohesion makes it difficult to finish what you start. You are an idea bank with a persistence problem. Ideal as an <b>Educator or Project Manager</b>, your task is to systematize routines and master the art of completion.",
        "Like a deeply rooted tree, you have firm convictions, but a lack of Metal's decisiveness makes you soft in boundary setting. You trust easily but may lose personal interest. Ideal for <b>HR or Welfare Specialization</b>, your task is to clarify boundaries and protect your sovereignty.",
        "Your vital energy fuels organizational growth, but without Fire's self-regulation, you risk burnout through excessive enthusiasm. You struggle with energy distribution. Ideal as a <b>Creative Designer or Planner</b>, your mission is to digitize and manage your energy output for long-term sustainability.",
        "The epitome of inner strength, you are independent but may lack integration energy, feeling like an island. Your expertise is unrivaled, yet collaboration stresses you. Ideal as a <b>Tech Architect or Researcher</b>, your soul's mission is to break out of isolation and build strategic networks.",
        "While you enjoy helping others, a weak Metal defense makes you vulnerable to exploitation. You are a natural nurturer. Ideal as a <b>Consultant or Mentor</b>, your task is to develop the decisiveness to say 'No' and protect your own resources.",
        "A fast learner who absorbs knowledge quickly, but a lack of Earth's stability makes it hard to turn that knowledge into wealth. You are strong in theory but weak in practical finance. Ideal as a <b>Scholar or Analyst</b>, your task is to develop the sense to convert knowledge into capital.",
        "A noble idealist valuing morality, yet a lack of Fire's practical expression makes you passive in self-promotion. You have talent but no PR. Ideal for <b>NGO Leadership or Artistry</b>, your task is to confidently prove your value using the language of the masses.",
        "Born with majestic leadership, you command organizations well, but a lack of Water's purification risks making enemies after success. You have charisma but need tolerance. Ideal as a <b>CEO or Politician</b>, your mission is to look after subordinates and turn enemies into allies.",
        "Your intuition for opportunity is sharp, yet excessive Wood competitiveness may drive away loved ones. You have a high desire for achievement but emotional hunger. Ideal for <b>Sales or Investment</b>, your mission is to calculate the value of coexistence over mere victory.",
        "You excel at drawing perfect blueprints, but a lack of Metal's organization leads to messy surroundings and lost cores. You see the big picture but miss details. Ideal as a <b>System Engineer or Urban Planner</b>, your mission is to master 'Simplification' and focus on the essence.",
        "You possess the energy to create an entire ecosystem, but a lack of Earth's mediation risks stifling others with your pace. Ideal as a <b>Content Producer or Art Director</b>, your final mission is to learn patience and respect the developmental speed of those around you."
    ],
    "火": [
        "Explosive passion is your weapon, but a lack of Water's calm makes your efficiency volatile based on mood. High immersion, low persistence. Ideal as a <b>Marketer or Ad Planner</b>, your task is to control your burning heart with a cold, consistent routine.",
        "A genius of inspiration, yet weak Metal discipline risks scattering ideas without manifestation. Ideal as an <b>Artist or Content Creator</b>, your mission is to archive every thought and endure until the final result is achieved.",
        "Possessing brilliant eloquence, but a lack of Earth's prudence risks self-sabotage through verbal errors. High sociability, low weight. Ideal as a <b>Broadcaster or Spokesperson</b>, your mission is to recognize that silence is sometimes the most powerful message.",
        "Sharp and quick, but weak Wood growth energy leads to broad but shallow knowledge. Ideal as a <b>Trend Analyst or Journalist</b>, your mission is to 'dig one well' deeply and build an unshakeable domain of expertise.",
        "Charming and persuasive, but a lack of Water's humility risks a reputation for arrogance. Good leadership, bad ego management. Ideal as a <b>Sales Leader or Politician</b>, your task is to establish authority through hard data while practicing humility.",
        "Highly sensitive and artistic, but a lack of Metal's realism makes you financially fragile. Ideal as a <b>Pure Artist or Spiritualist</b>, your mission is to manage your own invoices and build a solid financial foundation for your creativity.",
        "Adaptable and energetic, yet a lack of Earth's central axis leads to a nomadic, wandering identity. Talent exists, but purpose is blurry. Ideal as a <b>Freelancer or Travel Writer</b>, your task is to drop a firm philosophical anchor and define your baseline.",
        "Possessing immortal will, but a lack of Wood's mercy risks making you a cold-blooded achiever who sacrifices others. High results, lonely surroundings. Ideal as a <b>Professional Manager or Fund Manager</b>, your mission is to prove that gaining hearts is the true success.",
        "A prestige-centered life enlightening the world, but overheated Fire risks work addiction and health neglect. High status, inner burnout. Ideal as a <b>Public Official or Professor</b>, your mission is to master the 'Intentional Pause' to cool down your inner heat.",
        "A master of communication with a vast network, yet a lack of Water's deep insight risks prioritizing flashy connections over sincere bonds. Ideal as an <b>Event Planner or PR Specialist</b>, your task is to find depth through contemplation and enjoy your own solitude.",
        "Responsible and destined for the spotlight, but a lack of Metal's critique risks self-sabotage by falling for flattery. Ideal as a <b>Brand Director or Entertainer</b>, your task is to face cold evaluations as data and constantly reinvent yourself.",
        "Combining charisma and intellect, but a lack of Earth's tolerance leads to excluding those who don't meet your standards. Ideal as a <b>Critic or Lawyer</b>, your final task is to become a magnanimous leader who nurtures the weak."
    ],
    "土": [
        "Reliable and trustworthy, but a lack of Wood's pioneering spirit risks falling into stagnation or complacency. High stability, low innovation. Ideal in <b>Finance or Public Service</b>, your task is to try one new thing daily to prevent luck from expiring.",
        "Possessing immense tolerance, but weak Water precision makes you a 'nice person' who neglects their own interests for others. Ideal as a <b>Social Worker or Counselor</b>, your task is to organize your own space first and practice 'Healthy Egoism.'",
        "Connecting people with a warm heart, but a lack of Metal's decisiveness leads to carrying others' burdens alone. Ideal as a <b>Community Leader or HR Manager</b>, your mission is to set clear interpersonal boundaries and protect your own energy.",
        "Prudence is your asset, but weak Fire execution leads to missing timing due to over-perfectionism. Ready but reluctant to start. Ideal as an <b>Archivist or Curator</b>, your task is to practice launching projects when they are 80% ready.",
        "Acting as the pillar of an organization, but a lack of Wood's flexibility leads to a reputation for being stubborn or conservative. Ideal in <b>Audit or Security</b>, your mission is to accept new ideas without bias and become a mediator for organizational fluidity.",
        "Excellent in resource allocation, but weak Water creativity keeps you stuck in maintaining old systems. Ideal as a <b>Logistics Expert or COO</b>, your mission is to read hidden trends behind the data and upgrade existing systems.",
        "Possessing extraordinary persistence, but a lack of Fire's passion leads to working out of duty rather than joy, risking lethargy. Ideal as a <b>Long-term Project Manager or Artisan</b>, your mission is to reward yourself and find joy in the process.",
        "Performing best in stable environments, but weak Metal drive makes you fear leaving your comfort zone. Ideal as a <b>Real Estate Expert or Controller</b>, your mission is to see uncertainty as opportunity and develop the courage to take calculated risks.",
        "Possessing firm convictions, yet a lack of Water's communication risks being misunderstood or labeled as 'non-communicative.' Ideal as a <b>Strategist or Judge</b>, your mission is to share your philosophy through kind language and documentation.",
        "Dignified and cautious, but a lack of Wood's drive risks losing out to competitors due to slow decision-making. Ideal as a <b>Wealth Manager or Appraiser</b>, your task is to train your 'animal instinct' to move rapidly at critical moments.",
        "Precise in management and calculation, but a lack of Fire's emotional energy risks treating others like robots. High results, low loyalty. Ideal as an <b>Accountant or Data Analyst</b>, your task is to recognize the need for warmth and increase emotional investment.",
        "Destined to embrace the world like the earth, but a lack of Metal's sharp discernment risks loss by failing to judge the quality of those nearby. Ideal for <b>Philanthropy or Foundation Management</b>, your final task is to seek advice from wise mentors and remain flexible."
    ],
    "金": [
        "A natural competitor with unrivaled decisiveness, but a lack of Wood's mercy risks making you a cold-blooded loner. Ideal as a <b>Prosecutor or Pro Athlete</b>, your mission is to add a drop of humanity to your rigid principles to gain mass support.",
        "Top-tier analytical skills, but weak Water embrace leads to sharp criticism of others, resulting in self-isolation. Ideal as an <b>Auditor or Critic</b>, your mission is to always provide constructive alternatives and use language that heals.",
        "Possessing a heavy presence and strong justice, but a lack of Fire's sociability makes you a silent worker who struggles to express sincerity. Ideal as an <b>Engineer or Technical Official</b>, your mission is to raise the temperature with sincere praise and expression.",
        "Master of organization and system building, but weak Earth buffer leads to over-sensitivity toward minor errors, stressing yourself out. Ideal as a <b>QA Specialist or Coder</b>, your mission is to accept the 10% of imperfection and find mental peace.",
        "Righteous and rigid, but a lack of Water's flexibility makes you appear unyielding. Obsessed with right and wrong. Ideal as a <b>Lawyer or Activist</b>, your mission is to recognize and embrace the 'gray areas' of the world to achieve true justice.",
        "Strict with yourself to achieve high success, but weak Wood growth energy risks staying stuck in past glory. Ideal as an <b>Artisan or Senior Technician</b>, your mission is to constantly learn new fields and sharpen your 'old blade' to stay relevant.",
        "A charismatic leader, but excessive Fire-drive may stifle subordinates' creativity with your authority. Ideal as a <b>Military or Police Leader</b>, your mission is to master the leadership of 'softness concealing sharpness.'",
        "A brilliant artisan strong in detail, but a lack of Earth's broad vision risks missing the forest for the trees. Ideal as a <b>Goldsmith or Precision Engineer</b>, your mission is to periodically step back and observe macro trends.",
        "Noble and principled, yet a lack of Wood's flexibility makes you the core of organizational conflict. Ideal as a <b>Compliance Officer or Ethics Manager</b>, your task is to develop 'political sense' and compromise when necessary.",
        "Possessing cold, rational intellect, but weak Fire empathy leads to dry relationships and an inability to comfort others. Ideal as a <b>Financial Analyst or Surgeon</b>, your task is to develop the skill to read and heal the human heart.",
        "Reliable and solid, but a lack of Water's change energy risks rejecting innovation and remaining an isolated expert. Ideal as a <b>Security Designer or Metal Artist</b>, your mission is to digitize and modernize your classical values.",
        "Destined to be a legendary blade, but weak Earth foundation risks self-harm or lack of purpose. Ideal as a <b>Niche Expert or Columnist</b>, your mission is to build a solid foundation first and use your sharpness for the greater good."
    ],
    "水": [
        "A wise sage with deep insight, but weak Fire execution makes you a 'dreamer' who misses opportunities. Ideal as a <b>Scholar or Strategist</b>, your mission is to build a mechanical routine that turns thoughts into immediate action.",
        "Naturally imaginative, yet a lack of Earth's grounding leads to immersion in unrealistic ideals and emotional anxiety. Ideal as a <b>Writer or Psychologist</b>, your mission is to set clear financial goals and keep your feet on the ground.",
        "Enjoying philosophical thought, but weak Metal decisiveness leads to indecision in relationships and social friction. Ideal as a <b>Counselor or Humanist</b>, your mission is to document your thoughts and express them firmly.",
        "Adaptable like liquid, but weak Wood conviction risks losing your identity to others' opinions. Ideal as a <b>Diplomat or Trader</b>, your mission is to set an unshakeable 'Anchor' of core values and stay centered.",
        "Intuitive in reading invisible flows, yet weak Fire passion makes you reluctant to share your wisdom with the world. Ideal as an <b>Astrologer or Researcher</b>, your task is to structure your insights into concrete services or products.",
        "Excellent at tuning and mediating, but excessive Water energy leads to burnout by taking on everyone else's burdens. Ideal as a <b>Conductor or Mediator</b>, your task is to delegate authority and master the art of 'unloading.'",
        "Possessing deep reflection and noble spirit, but a lack of Earth realism risks financial hardship or detachment from reality. Ideal as a <b>Philosopher or Poet</b>, your mission is to maintain a strict daily routine and prioritize physical stability.",
        "A delicate perfectionist doing valuable work, but weak Fire speed risks missing deadlines or harming health through over-thinking. Ideal as a <b>Senior Researcher or Archivist</b>, your mission is to prioritize 'Completion over Perfection.'",
        "Leading with quiet charisma, but weak Wood communication makes you appear cold or unapproachable. Ideal as an <b>Isolated Leader or Specialist</b>, your task is to translate your vision into warm, accessible language.",
        "Possessing an uncanny ability to read others' minds, but deep Water energy risks sinking to the bottom when depression hits. Ideal as a <b>Psychiatrist or Tarot Reader</b>, your mission is to engage in physical movement as a mechanical routine when mood drops.",
        "Destined to share wisdom, but weak Metal self-management leads to neglecting your own life while solving others' problems. Ideal as a <b>Professor or Speaker</b>, your task is to monetize and systematize your knowledge for mutual growth.",
        "A genius of wisdom with infinite potential, but a lack of Earth's discipline risks a disordered life or vulnerability to addiction. Ideal as an <b>Artist or Meditation Expert</b>, your final mission is to practice the 'Virtue of Moderation' and maintain life order."
    ]
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
    1: "<b>[태초의 개척]</b> 강한 목(木)의 추진력이 집중되어 스스로 길을 여는 독립심이 독보적입니다. 다만, 이 명식은 구조적으로 수(水)의 유연함이 결여되어 독단에 빠질 태생적 취약점이 있으니 주변 조언을 데이터로 수용하십시오.",
    2: "<b>[분리의 적응]</b> 목(木)의 기운이 분산되어 환경 변화에 민감한 적응력을 보입니다. 하지만 토(土)의 응집력이 부족한 에너지 구조로 인해 마무리가 흔들리기 쉬우니, 루틴을 통해 강제로 지지대를 확보하는 것이 필수입니다.",
    3: "<b>[희망의 발복]</b> 화(火)의 기운이 상승하며 명예와 인기를 끌어당기는 발산력이 탁월합니다. 다만 금(金)의 결단력이 약한 기질을 타고나 허례허식에 에너지가 새어나갈 수 있으니 실속을 챙기는 전문성을 보완하십시오.",
    4: "<b>[파괴적 변동]</b> 화(火)의 열기가 과열되어 기존의 틀을 깨는 혁신성이 좋습니다. 반면 수(水)의 냉정함이 결핍된 구조적 특성상 감정 조절 실패로 위기를 자초할 위험이 있으니 점진적 안정을 제1목표로 삼으십시오.",
    5: "<b>[중용의 풍요]</b> 토(土)의 기운이 중심을 잡아 인덕과 재복이 안정적으로 흐릅니다. 다만 목(木)의 개척 정신이 결여되기 쉬운 기질이므로, 현실에 안주하지 않도록 꾸준한 자기 혁신을 통해 운의 정체를 막아야 합니다.",
    6: "<b>[신뢰의 계승]</b> 토(土)의 포용력이 강해 주변의 신뢰를 바탕으로 자산을 지키는 힘이 좋습니다. 반면 화(火)의 순발력이 부족한 엔진을 지녀 기회를 놓칠 수 있으니 현대적 트렌드를 적극적으로 수혈하십시오.",
    7: "<b>[강직한 성취]</b> 금(金)의 날카로움이 집중되어 전문적인 성취와 결단력이 독보적입니다. 그러나 목(木)의 자비심이 결핍되기 쉬운 차가운 기질이므로 대인관계의 장벽을 낮추기 위한 유연한 대화 기법을 연마하십시오.",
    8: "<b>[견고한 축적]</b> 금(金)의 기운이 내실을 다져 실익을 챙기고 자산의 토대를 쌓는 데 탁월합니다. 다만 수(水)의 소통 에너지가 숙명적으로 약해 고집스러운 이미지를 줄 수 있으니 정서적 교류를 주요 지표로 관리하십시오.",
    9: "<b>[직관적 공허]</b> 수(水)의 기운이 깊어 지능과 통찰력이 비상합니다. 하지만 화(火)의 현실적 열정이 부족한 구조적 한계로 고독감에 빠질 우려가 크니 당신의 아이디어를 실체화해 줄 현실적 파트너가 반드시 필요합니다.",
    10: "<b>[만물의 수용]</b> 수(水)의 포용력이 극대화되어 어떤 지식도 빠르게 흡수합니다. 반면 토(土)의 중심축이 결여된 에너지 구조상 성과가 공허하게 흩어질 수 있으니 매일 한 가지 목표에만 에너지를 집중하십시오.",
    11: "<b>[부흥의 새순]</b> 목(木)의 생명력이 재생되어 침체된 조직을 살려내는 활력이 강점입니다. 다만 초기 성취 후 화(火)의 절제력이 약해지면 자만심으로 운세가 꺾일 수 있으니 성취의 순간에 겸손을 시스템화하십시오.",
    12: "<b>[고립된 재능]</b> 목(木)의 기운이 위축되어 내적인 사고는 깊으나 금(金)의 결단력이 부족한 기질입니다. 재능에 비해 기회를 잡는 힘이 약해 이용당할 리스크가 있으니 자신만의 명확한 경계선을 설계하십시오.",
    13: "<b>[지혜의 달변]</b> 화(火)의 기운이 지성으로 변모하여 언변과 처세가 매우 뛰어납니다. 다만 수(水)의 깊이가 얕은 태생적 한계로 가벼워 보일 수 있으니 경청을 통해 신뢰를 쌓는 침묵의 기술을 병행하십시오.",
    14: "<b>[이면의 투시]</b> 화(火)의 열기가 분석으로 치치우쳐 사물의 이면을 꿰뚫습니다. 다만 토(土)의 정서적 완충지대가 부족한 예민한 기질을 타고나 스트레스를 자초하니 명상으로 뇌 에너지를 주기적으로 리셋하십시오.",
    15: "<b>[덕망의 포용]</b> 토(土)의 조화가 인덕으로 발현되어 만인을 이끄는 부드러운 카리스마가 강점입니다. 다만 목(木)의 공격적 추진력이 결여된 구조적 특성상 결정적 순간에 우유부단해질 수 있으니 단호함을 연습하십시오.",
    16: "<b>[자비의 재복]</b> 토(土)의 기운이 풍요를 불러와 재물이 스스로 쌓이는 안정된 복이 있습니다. 반면 금(金)의 냉철함이 부족한 기질적 약점으로 인해 타인의 부탁을 거절 못 하고 손해를 볼 수 있으니 공사를 엄격히 구분하십시오.",
    17: "<b>[강직한 돌파]</b> 금(金)의 기운이 투지로 발현되어 어떠한 고난도 정면 돌파합니다. 다만 목(木)의 유연함이 결여된 엔진을 지녀 부러지기 쉬운 성향이니 때로는 우회하는 것이 가장 빠른 길임을 명심하십시오.",
    18: "<b>[의지의 완성]</b> 금(金)의 기운이 신념으로 굳어져 한 우물을 파는 끈기가 강력합니다. 하지만 화(火)의 융통성이 부족한 구조적 한계로 고립될 우려가 있으니 외부 전문가의 피드백을 주기적으로 수용하십시오.",
    19: "<b>[예술적 고독]</b> 수(水)의 기운이 감성으로 흘러 예술적 천재성이 돋보입니다. 그러나 토(土)의 현실적 지지대가 약한 명식이므로 경제 기반이 흔들리기 쉬우니 현실적 토대를 먼저 구축한 뒤 창의성을 발휘하십시오.",
    20: "<b>[대양의 이상]</b> 수(水)의 기운이 바다처럼 넓어 원대한 이상을 품습니다. 다만 목(木)의 실행 에너지가 숙명적으로 결핍된 구조상 말뿐인 계획에 그칠 리스크가 크니 거대한 목표를 아주 작은 실행 단위로 쪼개십시오.",
    21: "<b>[두령의 위엄]</b> 목(木)의 에너지가 산처럼 솟아 리더십과 권위가 타고났습니다. 단점은 금(金)의 하향 지원 기운이 부족한 기질상 독선적으로 보일 수 있으니 아랫사람의 고충을 데이터로 살피는 덕장이 되십시오.",
    22: "<b>[기교의 단절]</b> 목(木)의 기운이 변칙적인 재능으로 발현되나 주변과의 토(土)적 화합이 어려운 구조입니다. 대인관계 갈등으로 성과가 폄하될 수 있으니 신중한 언행으로 불필요한 마찰을 줄이십시오.",
    23: "<b>[태양의 성취]</b> 화(火)의 열기가 정점에 달해 창의성과 명성이 폭발합니다. 단점은 수(水)의 조절 장치가 약한 태생적 한계로 인해 성공 후의 과열로 실수를 저지를 수 있으니 중요한 결정 전에는 냉각기를 가지십시오.",
    24: "<b>[축재의 연금술]</b> 화(火)의 에너지가 현실적 이익으로 변환되어 재물 축적에 천부적입니다. 하지만 금(金)의 절제력이 결여되면 탐욕으로 비칠 수 있으니 부의 품격을 높이기 위한 사회적 환원을 고려하십시오.",
    25: "<b>[지략의 조화]</b> 토(土)의 중재 능력이 지혜와 결합되어 어떤 위기도 유연하게 넘깁니다. 다만 목(木)의 솔직한 기운이 부족한 명식이므로 기회주의자로 오해받기 쉬우니 투명한 소통으로 신뢰를 쌓으십시오.",
    26: "<b>[영웅적 풍파]</b> 토(土)의 기운이 풍파를 겪으며 단단해지는 명식으로 위기에서 빛을 발합니다. 단점은 화(火)의 평온함이 결여되어 스스로 고난을 자처하는 성향이 강하니 에너지를 효율적으로 안배하십시오.",
    27: "<b>[냉철한 중단]</b> 금(金)의 기운이 비판으로 흘러 분석력은 최고 수준입니다. 하지만 수(水)의 포용력이 약한 구조적 특징으로 인해 사람을 잃기 쉬우니 비판의 언어를 대안의 언어로 변환하는 훈련이 필요합니다.",
    28: "<b>[대범한 파란]</b> 금(金)의 기운이 거대하게 팽창하여 큰 사업을 벌이는 담력이 좋습니다. 하지만 토(土)의 세밀한 관리력이 부족한 엔진을 지녀 기초가 부실해질 수 있으니 꼼꼼한 참모를 곁에 두십시오.",
    29: "<b>[신망의 평온]</b> 수(水)의 기운이 지혜로 승화되어 사회적 위치와 안정을 동시에 거머쥡니다. 다만 목(木)의 도전 에너지가 약해지는 기질상 현실에 안주하기 쉬우니 새로운 트렌드를 학습하여 운을 젊게 유지하십시오.",
    30: "<b>[역전의 파동]</b> 수(水)의 기운이 요동치며 성패가 드라마틱하게 갈립니다. 화(火)의 평정심이 결핍된 구조적 한계로 감정 기복이 심하니 마음의 중심을 잡아줄 확고한 철학적 기반을 구축하십시오.",
    31: "<b>[자수성가]</b> 목(木)의 생명력이 인복과 만나 주변의 도움으로 거대한 성취를 이룹니다. 단점은 수(水)의 주관이 약해질 수 있는 명식이므로 타인의 의견에 휘둘리지 않도록 자신만의 독보적 기준을 세우십시오.",
    32: "<b>[순풍의 행운]</b> 목(木)의 기운이 소통으로 발현되어 뜻밖의 기회와 재물이 따릅니다. 다만 금(金)의 성실함이 뒷받침되지 않으면 행운에 안주하다 실력을 잃을 수 있으니 잘 나갈 때 내실을 더 치열하게 다지십시오.",
    33: "<b>[제왕의 위엄]</b> 화(火)의 에너지가 최정점에 달해 야망과 실현력이 압도적입니다. 반면 수(水)의 겸손함이 결여되기 쉬운 명식이니 독선으로 적을 만들지 않도록 주변의 공로를 인정하는 태도를 기르십시오.",
    34: "<b>[인내의 연단]</b> 화(火)의 기운이 시련으로 작용하여 뼈를 깎는 인내가 요구되는 명식입니다. 토(土)의 긍정 에너지가 약해지면 비관주의에 빠질 수 있으니 긍정적 데이터에 집중하여 대기만성을 실현하십시오.",
    35: "<b>[평화의 수호]</b> 토(土)의 기운이 온화하게 흘러 주변을 편안하게 만드는 중재의 달인입니다. 다만 화(火)의 개척력이 부족한 구조적 한계로 큰 기회를 놓칠 수 있으니 가끔은 파격적인 시도를 하십시오.",
    36: "<b>[의리의 협객]</b> 토(土)의 기운이 헌신으로 변모하여 명예를 얻으나, 수(水)의 실속 에너지가 부족한 명식입니다. 남 좋은 일만 하다가 정작 자신의 기반을 놓치기 쉬우니 자신의 성공을 우선순위에 두십시오.",
    37: "<b>[장인의 전문성]</b> 금(金)의 기운이 집중되어 특정 분야의 최고 권위자가 됩니다. 독립성은 최상이나 목(木)의 공감력이 결여된 차가운 기질을 지녔으니 자신의 기술을 따뜻한 언어로 공유하십시오.",
    38: "<b>[성취의 문학]</b> 금(金)의 예리함이 감성과 만나 실무와 예술 양면에서 성과를 냅니다. 단점은 화(火)의 결과 중심성이 너무 강해 절차를 무시하거나 조급해질 수 있으니 과정의 공정성을 체크하십시오.",
    39: "<b>[찬란한 영광]</b> 수(水)의 지혜가 완성에 달해 부귀와 명예가 동시에 찾아옵니다. 가장 길한 수이나 토(土)의 경각심이 부족해지면 성공에 도취될 수 있으니 최고의 자리에 있을 때 최악의 상황을 대비하십시오.",
    40: "<b>[변동의 파란]</b> 수(水)의 요동이 심해 개척 의지는 강하나 기반이 늘 불안합니다. 화(火)의 중심 기운이 약한 구조상 투기적인 일로 공든 탑을 무너뜨릴 수 있으니 장기적인 안정 데이터를 신뢰하십시오.",
    41: "<b>[통솔의 거물]</b> 목(木)의 통솔력이 인덕과 결합되어 대기업이나 큰 조직을 이끕니다. 다만 금(金)의 자기 관리력이 약해질 수 있는 명식이니 지나친 책임감에 건강을 해치지 않도록 휴식을 설계하십시오.",
    42: "<b>[고행의 자력]</b> 목(木)의 기운이 억눌려 초반 고생이 많으나 자력으로 일어섭니다. 하지만 토(土)의 지지 기반이 약해 주변 도움을 기대하기 어려운 명식이니 포기하지 않는 자기 신뢰가 유일한 무기입니다.",
    43: "<b>[외화내빈]</b> 화(火)의 기운이 과시적으로 흘러 겉은 화려하나 실속이 부족합니다. 수(水)의 축적 에너지가 결여된 구조적 한계로 경제적 안정이 힘드니 보여지는 브랜드보다 내실 있는 자산을 우선하십시오.",
    44: "<b>[미궁의 혁신]</b> 화(火)의 에너지가 혼돈 속에 갇혀 고난이 많으나 극복 시 혁신가가 됩니다. 토(土)의 평정심이 결핍된 명식이니 멘탈 관리에 집중하여 부정적인 생각의 루프를 끊어내십시오.",
    45: "<b>[통합의 대성]</b> 토(土)의 기운이 만물을 통합하여 명예로운 성공을 이룹니다. 장점은 두터운 신망이나 목(木)의 비판적 안목이 결여될 수 있으니 주변의 달콤한 조언을 가려내는 안목을 기르십시오.",
    46: "<b>[방황의 통찰]</b> 토(土)의 기운이 흔들려 통찰은 좋으나 실천력이 약한 명식입니다. 금(金)의 응집력이 부족해 재능을 낭비하기 쉬우니 오직 한 가지 목표를 정해 깊게 파고드십시오.",
    47: "<b>[대기만성]</b> 금(金)의 견고함이 인내로 승화되어 말년에 거대한 부를 쌓습니다. 단점은 화(火)의 발산력이 약한 기질상 젊은 시절 고생이 길 수 있으니 현재의 시련을 거대한 성의 기초로 여기십시오.",
    48: "<b>[현명한 조언]</b> 금(金)의 예리함이 덕망과 만나 지도자의 스승 역할을 합니다. 다만 수(水)의 유연함이 부족한 명식이므로 자신의 잣대를 타인에게 강요하여 구설에 오르지 않도록 주의하십시오.",
    49: "<b>[유연한 변신]</b> 수(水)의 기운이 변화에 특화되어 생존력이 매우 좋습니다. 하지만 토(土)의 주관이 결핍되기 쉬운 명식이니 기회주의자로 보이지 않도록 당신만의 변치 않는 핵심 가치를 정립하십시오.",
    50: "<b>[위험한 협력]</b> 수(水)의 기운이 도박사적 기질로 흘러 한탕주의에 빠지기 쉽습니다. 화(火)의 이성적 통제가 약한 구조상 무리한 투자나 배신의 리스크가 크니 법적, 데이터적 근거를 우선하십시오.",
    51: "<b>[인생 사계]</b> 목(木)의 기운이 굴곡을 겪으며 성패가 빈번한 드라마틱한 운명입니다. 금(金)의 안정적 유지력이 부족한 기질상 늘 새로 시작해야 할 수 있으니 변화 자체를 기술로 승화시키십시오.",
    52: "<b>[준비된 도약]</b> 목(木)의 내실이 탄탄하여 기회가 오면 대업을 이룹니다. 하지만 수(水)의 휴식 기운이 결여된 명식이니 성공 가도에서 건강을 소홀히 하다가 모든 것을 놓치지 않도록 주의하십시오.",
    53: "<b>[내실 부족]</b> 화(火)의 기운이 겉으로만 쏠려 화려한 인맥 속에 진심이 부족합니다. 토(土)의 진중함이 결여된 명식으로 인해 사기를 당할 리스크가 크니 진솔한 소수의 관계에 집중하십시오.",
    54: "<b>[고난의 신의]</b> 화(火)의 기운이 억눌려 책임감은 강하나 환경이 도와주지 않는 형국입니다. 금(金)의 재복이 약한 구조상 무리한 확장은 패망의 지름길이니 내실을 닦으며 때를 기다리십시오.",
    55: "<b>[겸손의 광채]</b> 토(土)의 기운이 지혜 속에 숨어 있어 겸손할 때 광채가 납니다. 반면 목(木)의 과시욕이 고개를 들면 주변의 시기로 성공이 무너질 수 있으니 무거움을 브랜드로 삼으십시오.",
    56: "<b>[주저하는 재능]</b> 토(土)의 기운이 우유부단함으로 작용해 재능은 있으나 결정적 순간에 멈춥니다. 화(火)의 결단력이 부족한 명식의 한계를 극복하기 위해 완벽보다 빠른 실행을 습관화하십시오.",
    57: "<b>[질서의 개척]</b> 금(金)의 기운이 새 질서를 세우는 데 최적화되어 성공합니다. 하지만 수(水)의 포용력이 부족한 독단적 기질로 인해 성공 후 주변의 반발을 살 수 있으니 성과를 나누십시오.",
    58: "<b>[축적의 미학]</b> 금(金)의 기운이 끈기로 발현되어 자수성가하나 목(木)의 베풂이 부족한 명식입니다. 수전노라는 평으로 노년이 고립될 수 있으니 재물을 사회적 영향력으로 변환하십시오.",
    59: "<b>[인내력 결핍]</b> 수(水)의 기운이 방랑으로 흘러 재주는 많으나 끈기가 없습니다. 토(土)의 지탱력이 부족해 유혹에 약한 명식이니 강제적인 루틴과 데드라인을 외부 환경으로 설정하십시오.",
    60: "<b>[관계의 파란]</b> 수(水)의 기운이 요동쳐 인간관계의 배신과 갈등이 잦은 운명입니다. 화(火)의 안목이 부족한 명식이니 남의 일보다 본인의 내실을 다지는 것에 에너지를 집중하십시오.",
    61: "<b>[현명한 수장]</b> 목(木)의 지혜가 완성되어 조직의 핵심에서 존경을 받습니다. 단점은 금(金)의 냉정함이 부족해 정에 이끌려 공적인 일을 그르칠 수 있으니 원칙을 제1의 가치로 삼으십시오.",
    62: "<b>[연단의 헌신]</b> 목(木)의 기운이 희생으로 작용하여 남을 돕다 본인이 지칩니다. 토(土)의 자기방어 기운이 약한 명식이니 타인을 돕기 전 자신의 체력과 기반을 먼저 확보하십시오.",
    63: "<b>[원만한 결실]</b> 화(火)의 기운이 노력을 만나 부귀영화를 누립니다. 단점은 수(水)의 경각심이 약해지면 안일함에 빠져 내부부터 무너질 수 있으니 성공했을 때 더욱 긴장하며 관리하십시오.",
    64: "<b>[정체된 지혜]</b> 화(火)의 기운이 안개에 갇혀 잠재력 발휘가 어렵습니다. 금(金)의 정리 능력이 부족한 구조적 한계로 늘 어수선하니 단순화와 버리기 작업을 통해 도약의 에너지를 모으십시오.",
    65: "<b>[평온의 영광]</b> 토(土)의 기운이 완성되어 만인의 추앙을 받는 명예를 얻습니다. 가장 무서운 적은 목(木)의 오만함이니 높은 자리에 올랐을 때 아랫사람을 더 깍듯이 대우하십시오.",
    66: "<b>[위태로운 신용]</b> 토(土)의 기운이 흔들려 사람을 잘못 믿어 신용이 추락합니다. 수(水)의 유연함이 독이 되어 무리한 부탁을 들어주다 망할 수 있으니 보증이나 금전 거래는 절대 금물입니다.",
    67: "<b>[예술적 통솔]</b> 금(金)의 섬세함이 리더십과 만나 독창적인 조직을 이끕니다. 단점은 화(火)의 사교 에너지가 부족해 팀원들과 소통의 벽이 생기기 쉬우니 감정적 공유의 시간을 정기적으로 가지십시오.",
    68: "<b>[창업의 지략]</b> 금(金)의 기운이 전략으로 승화되어 무너지지 않는 시스템을 구축합니다. 다만 목(木)의 인간미가 결여된 명식상 주변을 숨 막히게 할 수 있으니 유머와 여유를 섞으십시오.",
    69: "<b>[불안한 리더]</b> 수(水)의 기운이 불안정해 꿈은 크나 실행 데이터가 부족한 명식입니다. 토(土)의 지지력이 없어 조급함으로 무리수를 두기 쉬우니 다시 기본기로 돌아가 내실을 닦으십시오.",
    70: "<b>[공허한 헌신]</b> 수(水)의 기운이 멸절로 흘러 뼈 빠지게 일해도 보상이 적은 형국입니다. 화(火)의 밝은 기운이 부족해 우울감에 빠질 수 있으니 봉사나 종교 활동을 통해 정신적 가치를 찾으십시오.",
    71: "<b>[완벽한 내실]</b> 목(木)의 기운이 전문성으로 응집되어 흔들리지 않는 부와 명예를 누립니다. 단점은 금(金)의 융통성이 결여되어 자기 기준에 안 맞는 사람을 배척하니 포용의 덕을 쌓으십시오.",
    72: "<b>[요동치는 열정]</b> 목(木)의 기운이 과열되어 추진력은 좋으나 성패 기복이 심합니다. 수(水)의 리스크 관리가 안 되어 감정적 투자로 손실을 보기 쉬운 명식이니 숫자에 근거하여 판단하십시오.",
    73: "<b>[질서의 마무리]</b> 화(火)의 기운이 지혜롭게 마감되어 새 시대를 엽니다. 단점은 토(土)의 현실 안주 기운이 강해지면 미래 권력을 놓칠 수 있으니 과거의 영광을 버리고 혁신을 계속하십시오.",
    74: "<b>[불우한 인내]</b> 화(火)의 에너지가 고난으로 작용해 시련이 잦은 명식입니다. 목(木)의 희망 에너지가 고갈되면 비관적 선택을 할 수 있으니 철학이나 마음 공부로 멘탈의 근육을 기르십시오.",
    75: "<b>[균형의 통치]</b> 토(土)의 기운이 완벽한 중용을 지켜 평화로운 안정을 창출합니다. 단점은 금(金)의 결단력이 부족해 결정적 타이밍을 놓칠 수 있으니 위기 시에는 단호한 결단을 내리십시오.",
    76: "<b>[에너지 분산]</b> 토(土)의 기운이 흩어져 실속 없이 에너지가 새어나갑니다. 수(水)의 응집력이 결여된 명식상 돈은 벌지만 모이지 않으니 자산 관리 전문가의 도움을 받는 것이 현명합니다.",
    77: "<b>[원칙의 투쟁]</b> 금(金)의 기운이 고집으로 발현되어 외부와 끊임없이 충돌합니다. 목(木)의 조화 기운이 약한 구조상 성패가 자주 엇갈리니 자신의 옳음보다 타인과의 상생을 우선하십시오.",
    78: "<b>[유비무환]</b> 금(金)의 기운이 조심성으로 흘러 초반 안정을 이룹니다. 다만 화(火)의 낙천적 에너지가 부족해 늘 걱정에 잠겨 과감한 도전을 못 하니 일어날 확률이 낮은 걱정은 데이터로 지우십시오.",
    79: "<b>[은둔의 지혜]</b> 수(水)의 깊은 지혜가 안개 속에 숨어 있어 인정을 늦게 받습니다. 토(土)의 자기 PR 기운이 약한 명식상 알아주는 이가 없어 고독할 수 있으니 적극적으로 세상에 비전을 알리십시오.",
    80: "<b>[종말의 성찰]</b> 수(水)의 기운이 끝자락에 닿아 정신적 고결함은 높으나 세속 운이 약한 명식입니다. 화(火)의 생기가 부족해 현실과 괴리될 수 있으니 소소한 일상의 기쁨을 찾아 활력을 얻으십시오.",
    81: "<b>[환희의 순환]</b> 모든 오행이 조화를 이루어 완벽한 마무리와 새로운 시작을 의미합니다. 가장 완벽한 길수이나 자만심(木)이 고개를 들면 다시 시련이 오니 받은 복을 나누는 삶이 유일한 개운법입니다."
};
const detailedDesc81En = {
    1: "<b>[Primordial Pioneer]</b> Dominated by strong Wood drive, creating unrivaled independence. However, this structure inherently lacks Water's flexibility, risking isolation through dogmatism. Integrate external feedback as essential data.",
    2: "<b>[Adaptive Flux]</b> Dispersed Wood energy allows fast environmental sensing. Yet, a structural lack of Earth's cohesion makes finishing projects difficult. Establish unshakeable routines to secure your foundation.",
    3: "<b>[Radiant Rise]</b> Rising Fire energy attracts fame and status. However, your innate Metal decisiveness is weak, risking energy waste on superficial appearances. Reinforce your practical expertise over form.",
    4: "<b>[Radical Shift]</b> Overheated Fire sparks innovation, but your energy structure lacks Water's calm. This inherent vulnerability risks emotional volatility. Prioritize gradual stability to prevent self-sabotage.",
    5: "<b>[Balanced Wealth]</b> Central Earth energy stabilizes fortune and social virtue. However, your structure is predisposed to a lack of Wood's pioneering drive. Avoid stagnation by consistently innovating your luck.",
    6: "<b>[Trusted Heritage]</b> Broad Earth energy builds deep communal trust. Yet, your inherent Fire agility is low, risking missed opportunities due to conservatism. Actively integrate modern trends into your methods.",
    7: "<b>[Steely Success]</b> Concentrated Metal energy grants expert decisiveness. However, your structure is prone to a lack of Wood's mercy, risking cold social friction. Strategically practice soft communication to lower barriers.",
    8: "<b>[Solid Accumulation]</b> Firm Metal energy excels at gathering assets. However, your inherent Water communication is weak, risking a reputation for stubbornness. Manage emotional bonds as key performance indicators.",
    9: "<b>[Intuitive Void]</b> Deep Water energy grants brilliant foresight. Yet, a structural lack of Fire's practical passion may lead to retreat into lonely idealism. You must secure a realistic partner to manifest your visions.",
    10: "<b>[Universal Vessel]</b> Vast Water energy absorbs all knowledge. However, the lack of Earth's central axis in your structure risks energy scattering. Focus your entire energy on a single core goal each day.",
    11: "<b>[Revival Sprout]</b> Renewed Wood vitality revives stagnant environments. Note that if Fire's self-regulation is weak after success, arrogance may break your luck. Systematize humility at your peak.",
    12: "<b>[Solitary Talent]</b> Contracted Wood energy creates intellectual depth but lacks Metal's decisiveness. Vulnerable to exploitation due to weak execution; design clear personal boundaries to protect your talent.",
    13: "<b>[Eloquent Wisdom]</b> Fire energy transforms into brilliant speech. However, your inherent Water depth is shallow, risking a loss of trust through superficiality. Practice the art of silence to build true authority.",
    14: "<b>[Piercing Insight]</b> Analytical Fire sees hidden truths, but your structure lacks Earth's emotional buffer. This innate sensitivity causes high stress. Periodically reset your brain through meditation and sleep.",
    15: "<b>[Benevolent Command]</b> Earth's harmony manifests as natural leadership. However, your lack of Wood's aggressive drive may cause indecision at critical turns. Practice firm decisiveness to secure your command.",
    16: "<b>[Compassionate Wealth]</b> Earth energy naturally attracts wealth. Yet, your inherent Metal logic is weak, risking personal loss due to an inability to say 'No'. Strictly separate business from personal sentiment.",
    17: "<b>[Rigid Breakthrough]</b> Metal energy manifests as invincible will. However, the lack of Wood's flexibility in your engine makes you prone to snapping under pressure. Recognize that detours are often shortcuts.",
    18: "<b>[Finished Will]</b> Firm Metal energy creates unstoppable persistence. However, the structural lack of Fire's adaptability risks isolation. Regularly integrate feedback from external experts to upgrade your conviction.",
    19: "<b>[Artistic Solitude]</b> Sensitive Water energy sparks genius. However, this structure lacks Earth's realistic support, making you financially fragile. Build a practical foundation before fully unleashing your creativity.",
    20: "<b>[Grand Ambition]</b> Vast Water energy creates high ideals. Yet, your inherent Wood execution energy is missing, risking empty results. Break grand visions into detailed, precise implementation checklists.",
    21: "<b>[Majestic Leader]</b> Rising Wood energy grants natural authority. However, your inherent Metal support for others is low, risking a reputation for arrogance. Lead through empathy and data-driven communication.",
    22: "<b>[Twisted Talent]</b> Complex Wood energy creates unique skills but lacks Earth's harmony. Social friction risks devaluing your achievements. Minimize unnecessary conflict through discrete and prudent conduct.",
    23: "<b>[Solar Success]</b> Peak Fire energy explodes into fame. However, your inherent Water cooling-mechanism is weak, risking ruin through passionate errors. Take intentional pauses before making major moves.",
    24: "<b>[Alchemical Wealth]</b> Fire energy manifests as fiscal mastery. Yet, a lack of Metal moderation may lead to greed. Elevate the dignity of your wealth through social contribution and ethical management.",
    25: "<b>[Strategic Harmony]</b> Intelligent Earth energy navigates crisis through wisdom. However, your lack of Wood's sincerity risks an opportunistic image. Build trust through transparent and honest communication.",
    26: "<b>[Heroic Storms]</b> Hardened Earth energy shines in crisis. However, your inherent lack of Fire's peace may lead to self-imposed struggles. Manage your energy efficiently by avoiding unnecessary battles.",
    27: "<b>[Cold Interruption]</b> Sharp Metal excels at analysis, but your structural lack of Water's embrace risks losing people. Transform critical language into constructive and encouraging advice.",
    28: "<b>[Bold Surge]</b> Massive Metal energy grants daring spirit. However, the lack of Earth's meticulous detail in your engine risks unstable foundations. Keep a meticulous practical partner to plug system holes.",
    29: "<b>[Calm Reputation]</b> Wise Water energy secures status and peace. Yet, your lack of Wood's drive for challenge risks stagnation. Keep your mindset young by actively learning new technologies and trends.",
    30: "<b>[Turnaround Wave]</b> Fluctuating Water energy creates a dramatic fate. However, the structural lack of Fire's composure causes emotional swings. Build a firm philosophical anchor to stabilize your mind.",
    31: "<b>[Self-Made Growth]</b> Wood vitality meets social support for self-made success. However, your inherent Water conviction is weak, risking loss of identity through over-reliance. Secure your unique expertise first.",
    32: "<b>[Lucky Breeze]</b> Wood energy manifests as social luck. Yet, if Metal's diligence is weak, you may rely solely on fleeting fortune. Intensify your efforts during good times to turn luck into skill.",
    33: "<b>[Imperial Majesty]</b> Peak Fire energy manifests ambition. However, the lack of Water's humility in your structure risks isolation. True authority is granted by others; stay grounded and acknowledge peers.",
    34: "<b>[Tempered Patience]</b> Fire trials require immense endurance. However, your lack of Earth's optimism risks surrender to deep pessimism. Believe the data: dawn is closest when dark; use positive affirmations.",
    35: "<b>[Peaceful Guardian]</b> Gentle Earth energy masters mediation and harmony. Yet, the structural lack of Fire's pioneer spirit risks missed opportunities. Occasionally step out of your comfort zone for a leap.",
    36: "<b>[Loyal Knight]</b> Earth energy manifests as dedication. However, your inherent Water practicality is weak, risking personal loss by over-helping. Prioritize your own success to make your altruism sustainable.",
    37: "<b>[Master Precision]</b> Concentrated Metal grants niche authority. However, your inherent Wood empathy is weak, risking a robotic reputation. Translate your knowledge into warm, accessible language to connect.",
    38: "<b>[Master of Achievement]</b> Metal precision meets powerful drive. However, over-dominant Fire-drive may risk ethical lapses or burnout. Maintain procedural justice as a core success metric.",
    39: "<b>[Radiant Glory]</b> Complete Water wisdom brings prestige and leaps. However, the lack of Earth's vigilance risks a sudden fall through complacency. Prepare for worst-case scenarios even at your peak.",
    40: "<b>[Turbulent Shifts]</b> Unstable Water energy drives pioneering but lacks Fire's center. Your structure risks ruin through speculative impulses. Rely on long-term stability data rather than intuition.",
    41: "<b>[Grand Commander]</b> Wood leadership meets human virtue. However, your inherent Metal self-preservation is weak, risking health collapse from duty. Include 'Well-being' in your core success indicators.",
    42: "<b>[Self-Reliant Trial]</b> Suppressed Wood energy requires self-made success after trials. However, the lack of Earth's support makes this a lonely path. View failure as learning data; stay persistent.",
    43: "<b>[Surface Radiance]</b> Showy Fire energy lacks Water's accumulation. Risk of financial instability despite high income. Allocate more energy to real asset building than social branding.",
    44: "<b>[Labyrinth Innovation]</b> Fire energy trapped in chaos requires breakthrough innovation. Lacks Earth's serenity, risking mental collapse. Focus on resilience training to navigate the tunnel of crisis.",
    45: "<b>[Grand Integration]</b> Earth energy unifies and succeeds. However, your lack of Wood's critical eye risks failure by trusting deceptive advisors. Build authority through transparent and honest communication.",
    46: "<b>[Insightful Wanderer]</b> Shaky Earth energy grants insight but lacks Metal's focus. Risk of wasted talent through constant shifting. Regain self-trust and dig deep into one single, major goal.",
    47: "<b>[Triumph of Grit]</b> Firm Metal energy creates late-life wealth. However, your lack of Fire's expansion means youth may be long and bitter. View current trials as the solid foundation of a grand castle.",
    48: "<b>[Wise Advisor]</b> Metal precision meets virtue for guiding others. However, your structural lack of Water's flexibility risks social woe by imposing strict moral standards. Give advice only when requested.",
    49: "<b>[Flexible Persona]</b> Adaptable Water energy survives crises with agility. However, the lack of Earth's conviction risks a reputation for opportunism. Document your unchanging core values to maintain consistency.",
    50: "<b>[Risky Partnership]</b> Speculative Water energy leads to gambling instincts. Lacks Fire's control, risking total loss via misplaced trust. Prioritize hard data and legal contracts over emotional impulse.",
    51: "<b>[Seasons of Life]</b> Shifting Wood energy creates frequent ups and downs. Lacks Metal's stability, causing fatigue from constant restarts. Use a nomadic mindset to turn adaptability into your true survival skill.",
    52: "<b>[Prepared Leap]</b> Solid Wood substance seizes success. However, your lack of Water's rest risks sudden health failure during peak achievement. Systematically include wellness checks in your schedule.",
    53: "<b>[Hollow Radiance]</b> Outward Fire energy lacks Earth's gravity. Risk of vulnerability to deception despite high sociality. Invest in a few deep, sincere bonds rather than many showy acquaintances.",
    54: "<b>[Faith in Hardship]</b> Suppressed Fire energy creates duty but lacks Metal's luck. Environmental constraints delay results. Build internal strength while waiting for the inevitable turnaround helper.",
    55: "<b>[Humble Radiance]</b> Hidden Earth wisdom shines through modesty. Dominant Wood-vanity invites jealousy, risking collapse. Use simplicity as your strategic brand to protect your monumental success.",
    56: "<b>[Hesitant Talent]</b> Earth energy creates indecision. Lacks Fire's decisiveness, risking a life of supporting roles. To overcome your structural limit, train yourself in rapid execution over perfection.",
    57: "<b>[Architect of Order]</b> Metal energy excels at forging new systems. However, your structural lack of Water's embrace risks social backlash. After success, immediately share rewards to maintain loyalty.",
    58: "<b>[Steady Accumulation]</b> Metal persistence builds a legacy of self-made wealth. Lacks Wood's generosity, risking a lonely old age. Exercise the 'wisdom of giving' to turn wealth into lasting influence.",
    59: "<b>[Lack of Patience]</b> Wandering Water energy lacks Earth's grit. High vulnerability to temptation or addiction. Establish a rigid, externally controlled life routine and deadline system to survive.",
    60: "<b>[Interpersonal Storms]</b> Turbulent Water energy attracts relationship friction. Lacks Fire's discernment, risking failure by prioritizing others' affairs over your own inner strength and growth.",
    61: "<b>[Wise Chieftain]</b> Refined Wood wisdom earns respect at the core. However, your lack of Metal's cold logic may risk letting emotion override duty. Lead by principles and results, not just feelings.",
    62: "<b>[Devotion Trial]</b> Sacrificial Wood energy exhausts the self while serving others. Lacks Earth's self-defense, risking health failure. You must be healthy to make your altruistic mission complete.",
    63: "<b>[Harmonious Harvest]</b> Consistent Fire effort brings harmonious wealth. However, if Water's vigilance is weak, you may fall into complacency. Set new peaks to keep your vital energy vibrant.",
    64: "<b>[Stagnant Potential]</b> Fire energy trapped in fog remains unexpressed. Lacks Metal's organization, risking missed success. Boldly simplify your surroundings to create the energy for a leap.",
    65: "<b>[Calm Eminence]</b> Perfected Earth energy brings honor and stable value. Wood-arrogance is the enemy; disregarding subordinates invites a fall. Maintain a low stance to ensure your legacy survives.",
    66: "<b>[Fragile Credit]</b> Shaky Earth energy invites misplaced trust and credit loss. Excessive Water-flexibility risks ruin via fraud. Hold cold, rigid principles in all fiscal and guarantee dealings.",
    67: "<b>[Creative Command]</b> Detailed Metal meets leadership for artistic achievement. Lacks Fire's sociality, risking isolation. Sincerely manage a few true bonds to ensure mental rest and support.",
    68: "<b>[Founding Strategy]</b> Strategic Metal builds unshakable systems. Lacks Wood's humanity, risking loss of loyalty through robotic management. Show human vulnerability occasionally to gain hearts.",
    69: "<b>[Anxious Visionary]</b> Unstable Water energy lacks execution data despite grand dreams. Lacks Earth's support, risking ruin via desperate gambles. Re-polish basic skills to prepare for your turnaround.",
    70: "<b>[Hollow Sacrifice]</b> Fading Water energy yields no reward for effort. Lacks Fire's brightness, risking depression. Find meaning in spiritual values or altruistic service to revitalize your existence.",
    71: "<b>[Impenetrable Essence]</b> Concentrated Wood expertise builds wealth. Lacks Metal's flexibility, risking conflict by excluding outliers. Humility is the castle wall protecting your expert success.",
    72: "<b>[Turbulent Passion]</b> Overheated Wood creates drive but extreme swings. Lacks Water's risk management. Base all decisions on hard data and numbers, not emotional impulse or momentary heat.",
    73: "<b>[Wise Conclusion]</b> Refined Fire energy bridges eras and closes cycles. Over-dominant Earth-complacency risks losing future power. Focus on the future, not yesterday's glory, to keep growing.",
    74: "<b>[Resilient Struggle]</b> Fire energy manifests as hardship and trial. Dwindling Wood-hope risks dark choices. Build strength through philosophy; your turnaround will be legendary.",
    75: "<b>[Balanced Reign]</b> Perfect Earth neutrality creates total stability. Lacks Metal's decisiveness, risking missed opportunities through hesitation. Show decisive charisma at critical turning points.",
    76: "<b>[Leaking Energy]</b> Scattered Earth energy lacks substance. Lacks Water's cohesion, risking a lifestyle of zero accumulation despite high income. Use professional asset management to plug the leaks.",
    77: "<b>[Struggle of Principles]</b> Metal stubbornness creates constant conflict. Lacks Wood's harmony, risking a weary life of battle. Prioritize coexistence over being 'right' to achieve lasting success.",
    78: "<b>[Constant Precaution]</b> Metal caution secures early success. Lacks Fire's optimism, risking limited achievement through excessive worry. Use data to erase irrational fears and take bold steps.",
    79: "<b>[Hidden Insight]</b> Deep Water wisdom remains unacknowledged in the mist. Lacks Earth's self-promotion, risking lonely resentment. Master the wisdom of seclusion to prepare for your eventual acknowledgment.",
    80: "<b>[Final Reflection]</b> Closing Water energy brings spiritual height but lacks Fire's vitality. Risk of detachment from reality. Connecting with the world through sharing revitalizes your existence.",
    81: "<b>[Infinite Bliss]</b> Harmonious Five Elements complete and restart the cycle. Wood-arrogance risks returning to trial; your task is a life of constant altruism to complete the divine blessing."
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
        desc: `성명학 분석 결과, 당신은 <b>${elInfo.name}</b>의 <b>${elInfo.trait}</b>이 두드러지는 명식입니다. 이로 인해 과거 생애에서 ${elInfo.reason}`, 
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
        desc: `성명학적 데이터 분석에 따르면 당신의 미래 에너지는 <b>${elInfo.name}</b>의 <b>${elInfo.trait}</b>이 지배적일 것으로 예측됩니다. 이로 인해 내세에서는 <b>${elInfo.role}</b> 임무를 맡게 될 것입니다.`, 
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
