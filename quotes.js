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
/* [현생 과업: 오행 역학 통합 분석 시스템 - 데이터 강화 버전] */
const elementPrescriptions12 = {
    "목(木)": [
        "독보적인 <b>목(木)</b>의 추진력과 척박한 땅에서도 길을 찾아내는 선구자적 기질이 당신의 최대 강점입니다. 타인보다 한발 앞서 트렌드를 읽고 구조를 설계하는 능력이 탁월합니다. 다만 수(水)의 유연함이 부족하면 독단에 빠질 수 있으니 협력자의 데이터를 수용하는 것이 과업입니다. 추천 직업: <b>전략가, 벤처 창업가, 신규 비즈니스 디벨로퍼, 성장 해커, 군사 전략가, 제품 책임자(PO)</b>.",
        "폭발적인 성장의 에너지가 넘치며, 불가능해 보이는 목표에 도전하여 생명력을 불어넣는 창조적 활력이 뛰어납니다. 아이디어 뱅크로서 조직에 활기를 주지만, 토(土)의 응집력이 약하면 마무리가 흐려질 수 있습니다. 루틴을 시스템화하는 것이 성공의 열쇠입니다. 추천 직업: <b>교육 혁신가, 스타트업 액셀러레이터, 신규 프로젝트 매니저, 문화 트렌드세터, 커리큘럼 설계자, 창의력 코치</b>.",
        "뿌리 깊은 나무처럼 흔들리지 않는 주관과 대중을 품는 포용력 있는 리더십을 타고났습니다. 신뢰를 바탕으로 한 인적 네트워크 구축에 능하며 도덕적 권위를 가집니다. 금(金)의 결단력을 보완하여 공과 사의 경계를 명확히 하는 것이 과업입니다. 추천 직업: <b>인사 관리 전문가(HR), 비영리 단체 임원, 컴플라이언스 오피서, 사회복지 정책가, 재단 이사장, 조직 문화 컨설턴트</b>.",
        "위로 뻗어가는 생동감이 강해 침체된 조직에 즉각적인 변화를 일으키는 혁신가 기질이 강점입니다. 미적 감각과 직관이 예리하여 시각적, 감성적 성과를 잘 냅니다. 화(火)의 조절력을 길러 에너지를 효율적으로 배분하는 법을 익히십시오. 추천 직업: <b>크리에이티브 디렉터, UI/UX 디자인 리드, 전시 기획자, 브랜드 전략가, 광고 컨셉 아키텍트, 공간 디자이너</b>.",
        "외유내강의 전형으로 내밀한 독립심과 논리적 설계 능력이 독보적입니다. 보이지 않는 시스템의 본질을 꿰뚫어 보고 완벽한 설계를 구축하는 아키텍트의 능력을 갖췄습니다. 고립에서 벗어나 사회적 네트워크를 확장하는 것이 영혼의 숙제입니다. 추천 직업: <b>기술 아키텍트, 수석 연구원, 시스템 엔지니어, 전문 기술 컨설턴트, 보안 분석가, 데이터 모델러</b>.",
        "상생의 기운이 강력하여 타인의 잠재력을 발견하고 성장을 돕는 교육적 재능과 자비심이 당신의 무기입니다. 따뜻한 카리스마로 주변을 정화하지만, 자기 방어 기제인 금(金)을 보완하여 단호함을 갖추는 것이 생존 과업입니다. 추천 직업: <b>경영 컨설턴트, 커리어 멘토, 심리 상담 전문가, 교육 행정가, 기업 교육 강사, 갈등 중재자</b>.",
        "지식 습득 능력이 경이로워 방대한 정보를 체계화하고 가르치는 데 탁월한 두뇌를 가졌습니다. 학습한 내용을 실용적 가치로 변환하는 힘이 좋습니다. 토(土)의 안정감을 보완하여 지식을 자본으로 전환하는 실전 감각을 키우십시오. 추천 직업: <b>학자, 투자 분석가, 지식 큐레이터, 퀀트 매니저, 정보 아키텍트, 비즈니스 인텔리전스(BI) 전문가</b>.",
        "고결한 이상주의자로 도덕적 가치와 철학적 깊이를 세상에 전파하는 정신적 리더의 기운을 지녔습니다. 세상을 치유하는 예술적 감수성이 풍부합니다. 화(火)의 발산력을 길러 자신의 가치를 대중의 언어로 당당히 증명하십시오. 추천 직업: <b>예술가, NGO 리더, 철학 강의자, 윤리 경영관, 공공 캠페이너, 문화 비평가</b>.",
        "조직을 장악하는 강력한 두령의 기운과 위엄을 타고나 거대 조직을 안정적으로 이끄는 카리스마가 독보적입니다. 높은 통찰력으로 전체를 조망합니다. 수(水)의 정화 작용을 통해 적을 친구로 만드는 포용력을 갖추는 것이 핵심 과업입니다. 추천 직업: <b>정치인, CEO, 지역 본부장, 전략 사령관, 위기 관리 책임자, 행정 고위직</b>.",
        "기회를 포착하는 직관이 동물적으로 발달했으며, 승부사적 기질로 자산의 가치를 증폭시키는 능력이 탁월합니다. 목표를 향한 집요함이 승리를 부릅니다. 목(木)의 경쟁심을 조절하여 공존의 가치를 먼저 계산하는 법을 배우십시오. 추천 직업: <b>전략 투자자, 벤처 캐피털리스트(VC), 고가 자산 영업 전문가, 비즈니스 디벨로퍼, 협상 전문가, M&A 전문가</b>.",
        "완벽한 설계도를 그리는 정밀함과 거시적 안목을 동시에 갖춰 복잡한 시스템을 단순화하는 데 천부적 재능이 있습니다. 구조적 모순을 찾아내 해결합니다. 금(金)의 정리 능력을 극대화하여 디테일한 마무리까지 완수하는 것이 과업입니다. 추천 직업: <b>도시 설계자, 물류 시스템 엔지니어, 공급망 전략가(SCM), 소프트웨어 아키텍트, 공정 제어 전문가, 산업 디자이너</b>.",
        "스스로 하나의 생태계를 창조할 만큼 거대한 에너지와 예술적 감독 능력을 타고난 마스터의 운명입니다. 주변 사람들을 이끌어 거대 담론을 완성합니다. 토(土)의 중재 능력을 보완하여 타인의 속도를 존중하고 기다리는 인내를 배우십시오. 추천 직업: <b>예술 감독, 총괄 프로듀서(EP), 영화 감독, 글로벌 프로젝트 리더, 박물관 수석 큐레이터, 콘텐츠 총괄 이사</b>."
    ],
    "화(火)": [
        "폭발적인 열정과 좌중을 압도하는 에너지가 당신의 무기입니다. 마케팅적 감각과 대중을 선동하는 힘이 뛰어나 트렌드를 주도합니다. 수(水)의 냉정함을 보완하여 감정 기복을 제어하고 차가운 루틴을 지키는 것이 과업입니다. 추천 직업: <b>퍼포먼스 마케터, 카피라이터, 광고 기획자, 트렌드 분석가, 미디어 플래너, 홍보 전문가(PR)</b>.",
        "영감이 샘솟는 재주꾼으로 상상력을 시각화하고 결과물로 만들어내는 창의적인 표현력이 독보적입니다. 세상에 없던 가치를 제안합니다. 금(金)의 규율을 보완하여 모든 생각을 기록하고 끝까지 완수하는 끈기를 갖추십시오. 추천 직업: <b>콘텐츠 크리에이터, 웹툰 작가, 시나리오 작가, 비주얼 아티스트, 게임 디자이너, 멀티미디어 감독</b>.",
        "군중을 매료시키는 화려한 언변과 순발력을 타고나 조직의 얼굴 역할을 수행하는 데 탁월합니다. 소셜 미디어와 무대 위에서 빛납니다. 토(土)의 신중함을 보완하여 말의 무게를 지키고 침묵의 기술을 익히는 것이 성공의 비결입니다. 추천 직업: <b>아나운서, 방송인, 기업 대변인, 대외협력 책임자, 동기부여 강연가, 전문 사회자</b>.",
        "빠른 정보 처리 속도와 지적 호기심으로 세상의 모든 이슈를 빠르게 분석하고 전달하는 능력이 강점입니다. 정보의 흐름을 장악합니다. 목(木)의 지속성을 보완하여 얕은 지식에 머물지 말고 자신만의 전문 영토를 구축하십시오. 추천 직업: <b>데이터 저널리스트, 테크 리포터, 시장 조사 전문가, 뉴스 큐레이터, 지식 전략가, 정보 분석관</b>.",
        "설득력 있는 카리스마와 뚜렷한 존재감으로 사람들을 선동하고 목표로 이끄는 강력한 리더십이 돋보입니다. 군중 속에서도 가장 밝게 빛납니다. 수(水)의 겸손함을 보완하여 객관적 증거로 권위를 세우고 고개를 숙이는 법을 배우십시오. 추천 직업: <b>정치 리더, 선거 전략가, 영업 이사, 브랜드 앰배서더, 프랜차이즈 대표, 정당 대변인</b>.",
        "풍부한 감성과 탁월한 예술적 안목으로 세상의 미학적 기준을 높이는 재능을 가졌습니다. 타인의 감정을 어루만지는 능력이 뛰어납니다. 금(金)의 현실 감각을 보완하여 경제적 토대를 스스로 구축하고 실무 능력을 기르십시오. 추천 직업: <b>순수 예술가, 갤러리 관장, 인테리어 디자이너, 아트 디렉터, 예술 심리 치료사, 플로리스트</b>.",
        "변화무쌍한 환경에서도 즉각적으로 에너지를 변환하여 적응하는 유연성과 다재다능함이 당신의 경쟁력입니다. 어디서나 활력을 줍니다. 토(土)의 중심축을 보완하여 자신만의 확고한 철학적 닻을 내리고 정체성을 확립하십시오. 추천 직업: <b>디지털 노마드, 여행 작가, 글로벌 현지 조사원, 프리랜서 컨설턴트, 이벤트 연출가, 엔터테인먼트 매니저</b>.",
        "불멸의 의지와 목표를 향해 돌진하는 열정으로 불가능을 가능케 하는 압도적인 실천력이 강점입니다. 승부처에서 가장 강합니다. 목(木)의 자비심을 보완하여 사람의 마음을 얻는 것이 진정한 성공임을 증명하는 것이 과업입니다. 추천 직업: <b>헤지펀드 매니저, 구조조정 전문가, 프로 게이머 에이전트, 투자 유치 전문가, 리스크 매니저, 전문 경영인</b>.",
        "태양처럼 세상을 밝히는 명예 지향적인 삶으로 대중의 존경을 받는 높은 자리에 오를 기운이 강합니다. 정의감이 투철합니다. 화(火)의 과열을 막기 위해 의도적인 휴식과 명상을 통해 내면의 화기를 다스리는 것이 미션입니다. 추천 직업: <b>대학교수, 고위 공직자, 정책 입안자, 수석 법관, 학술 연구소장, 과학 기술 지도자</b>.",
        "소통의 달인으로 광범위한 네트워크를 관리하며 사람과 기회를 연결하는 허브 역할에 천부적 소질이 있습니다. 인맥이 곧 자산입니다. 수(水)의 통찰력을 보완하여 화려한 인맥보다 진실한 인연에 집중하고 자아의 깊이를 더하십시오. 추천 직업: <b>글로벌 파트너십 헤드, 셀러브리티 에이전트, 커뮤니티 리더, 대규모 컨벤션 기획자, 인사이트 컨설턴트, 네트워킹 전략가</b>.",
        "책임감이 강하고 자신을 브랜드화하여 대중의 시선을 끄는 스타성이 뛰어나며, 조직의 품격을 높이는 능력이 좋습니다. 보여지는 감각이 탁월합니다. 금(金)의 비판력을 보완하여 주변의 아첨을 걸러내고 자신을 끊임없이 재창조하십시오. 추천 직업: <b>브랜드 디렉터, 패션 디자이너, 광고 모델, 럭셔리 마케팅 총괄, 아트 큐레이터, 이미지 컨설턴트</b>.",
        "강력한 카리스마와 지성을 겸비하여 대중의 사고를 선도하고 비판적인 시각으로 새로운 기준을 제시하는 능력이 탁월합니다. 지적 우월감을 가집니다. 토(土)의 포용력을 보완하여 타인의 부족함을 품고 함께 성장하는 대인이 되는 것이 과업입니다. 추천 직업: <b>사회 비평가, 칼럼니스트, 법률 분석가, 수석 논설위원, 고등 교육 기관장, 철학 저술가</b>."
    ],
    "토(土)": [
        "듬직하고 신뢰감을 주는 성품으로 조직의 근간을 지탱하는 안정감이 당신의 최대 강점입니다. 변치 않는 성실함으로 신뢰를 얻습니다. 목(木)의 개척 정신을 수혈하여 변화하는 시대에 뒤처지지 않도록 매일 새로운 시도를 하는 것이 과업입니다. 추천 직업: <b>은행원, 공무원, 감정평가사, 신용 분석가, 국토 정보 전문가, 행정 관리자</b>.",
        "만물을 기르는 어머니와 같은 포용력과 인내심으로 타인의 아픔을 어루만지고 조직을 화합시키는 치유의 기운이 뛰어납니다. 수(水)의 정밀함을 보완하여 남 좋은 일만 하지 말고 자신의 실속과 자산을 먼저 정돈하십시오. 추천 직업: <b>사회 복지사, 전문 상담가, 간호 관리자, 노무사, 커뮤니티 매니저, 심리 치료사</b>.",
        "따뜻한 심성으로 사람과 사람 사이를 잇는 다리 역할을 하며, 갈등을 중재하고 평화로운 환경을 조성하는 능력이 좋습니다. 금(金)의 결단력을 보완하여 거절해야 할 때를 알고 자신의 에너지를 보호하는 법을 익히십시오. 추천 직업: <b>HR 매니저, 커뮤니티 개발자, 심리 조정관, 웨딩 플래너, 가사 상속 변호사, 인권 활동가</b>.",
        "극도의 신중함과 철저한 준비성으로 실패 없는 계획을 수립하고 소중한 가치를 아카이빙하는 관리 능력이 탁월합니다. 기록의 달인입니다. 화(火)의 실행력을 보완하여 80%의 준비 상태에서도 과감히 세상에 내놓는 연습을 하십시오. 추천 직업: <b>기록물 관리사, 박물관 큐레이터, 도서관장, 아카이브 전문가, 공정 관리 매니저, 품질 보증 분석가</b>.",
        "한번 정한 원칙을 끝까지 고수하는 강직함과 책임감으로 조직의 기둥 역할을 수행하며 절대적인 신뢰를 쌓습니다. 목(木)의 유연함을 보완하여 타인의 새로운 아이디어를 열린 마음으로 수용하는 중재자가 되십시오. 추천 직업: <b>감사원, 보안 전문가, 안전 관리 이사, 윤리 경영 책임자, 부동산 신탁 전문가, 자산 관리인</b>.",
        "리소스 배분과 운영 관리에 타고난 재능이 있어 기존 시스템을 안정적으로 유지하고 효율을 극대화하는 관리 능력이 뛰어납니다. 수(水)의 창의성을 보완하여 데이터 뒤의 트렌드를 읽어내고 시스템을 혁신적으로 업그레이드하십시오. 추천 직업: <b>COO(최고 운영 책임자), 물류 총괄 전문가, 운영 이사, 공급망 매니저, 생산 관리 책임자, 도시 행정가</b>.",
        "어떤 고난에도 굴하지 않는 끈기와 인내심으로 장기적인 프로젝트를 결국 완수해내는 집념이 당신의 강점입니다. 장인의 기질을 가졌습니다. 화(火)의 열정을 보완하여 과정 자체를 즐기고 자신에게 작은 보상을 주어 활력을 유지하십시오. 추천 직업: <b>장기 프로젝트 PM, 무형문화재 이수자, 수석 엔지니어, 전문 기술 장인, 연구 단지 책임자, 장기 투자 전략가</b>.",
        "안정적인 환경에서 최상의 퍼포먼스를 내며 부동산이나 자산의 가치를 판단하고 지키는 현실적인 안목이 매우 뛰어납니다. 흔들리지 않는 기반을 닦습니다. 금(金)의 도전 기운을 보완하여 안전지대를 벗어나 불확실성에 베팅할 수 있는 담력을 키우십시오. 추천 직업: <b>부동산 개발업자, 토지 분석가, 관제사, 자산 운용가, 보존 과학자, 신탁 운용 매니저</b>.",
        "확고한 신념과 묵직한 존재감으로 자기만의 세계를 구축하고 대중에게 방향성을 제시하는 정신적 지주의 기운이 강합니다. 수(水)의 소통력을 보완하여 자신의 철학을 친절한 언어로 공유하고 대중의 동의를 이끌어내십시오. 추천 직업: <b>전략 수립 전문가, 헌법 법관, 철학자, 종교 지도자, 사상가, 정책 자문 위원</b>.",
        "품격 있는 신중함과 전통적인 가치를 중시하는 안목으로 귀중한 자산의 진위를 가리고 보존하는 데 탁월한 능력을 가졌습니다. 목(木)의 추진력을 보완하여 결정적인 순간에 본능을 믿고 빠르게 움직이는 동물적 감각을 기르십시오. 추천 직업: <b>골동품 감정사, 럭셔리 컬렉터, 문화재 보존 전문가, 자산 승계 컨설턴트, 옥션 매니저, 미술 시장 분석가</b>.",
        "수치 계산과 관리 능력이 소수점 단위까지 정확하며, 감정에 휘둘리지 않고 조직의 효율을 극대화하는 이성적인 관리가 특징입니다. 화(火)의 감성 에너지를 보완하여 사람의 마음에도 온기가 필요함을 인정하고 정서적 투자를 늘리십시오. 추천 직업: <b>회계사, 세무 분석가, 데이터 과학자, 리스크 컨설턴트, 통계 학자, 예산 기획 실장</b>.",
        "대지처럼 만물을 품는 위대한 운명으로 사람을 키우고 사회적 가치를 실현하는 데 숭고한 사명감을 가진 리더입니다. 금(金)의 날카로운 안목을 보완하여 사람의 옥석을 가려내고 고집을 버려 진정한 지혜를 가진 멘토를 찾으십시오. 추천 직업: <b>자선 재단 이사장, 교육 재단 운영자, 사회적 기업가, 대학 총장, 장학 재단 이사, 공익 문화 사업가</b>."
    ],
    "금(金)": [
        "타고난 승부사로 결단력과 용기가 독보적이며, 위기의 순간에 가장 먼저 앞장서서 문제를 해결하는 용장 기질이 강점입니다. 목(木)의 자비심을 한 방울 섞어 칼날 같은 원칙에 인간미를 더함으로써 대중의 절대적 지지를 얻으십시오. 추천 직업: <b>검사, 프로 운동선수, 외과 전문의, 위기 돌파 컨설턴트, 형사, 기업 사냥꾼(M&A)</b>.",
        "핵심을 꿰뚫는 분석력과 논리적 비판 능력이 신의 경지에 도달해 있어 오류를 잡아내고 완벽을 기하는 데 최상의 능력을 발휘합니다. 수(水)의 포용력을 보완하여 비판 뒤에 건설적 대안을 제시하는 '사람을 살리는 언어'를 사용하십시오. 추천 직업: <b>회계 감사, 문학 비평가, 품질 관리 실장, 시스템 보안 전문가, 조사관, 기술 분석가</b>.",
        "묵직한 존재감과 강한 정의감으로 말보다 행동으로 증명하며, 한번 시작한 일은 끝까지 밀어붙이는 굳건함이 당신의 무기입니다. 화(火)의 사교성을 보완하여 짧고 간결하되 진심이 담긴 칭찬으로 주변의 온도를 높이는 노력을 하십시오. 추천 직업: <b>설계 엔지니어, 기술직 공무원, 법 집행관, 정밀 가공 전문가, 보안 아키텍트, 금속 공학자</b>.",
        "정리 능력이 탁월하여 무질서한 상태에서 완벽한 시스템과 질서를 구축하는 능력이 좋습니다. 군더더기 없는 성과를 냅니다. 토(土)의 완충력을 보완하여 10%의 불완전함을 인정하고 스스로에게 여백을 허용하는 마음의 여유를 가지십시오. 추천 직업: <b>데이터 엔지니어, 공정 시스템 설계자, 프로그래머, 생산 자동화 전문가, 테크니컬 라이터, 아카이브 빌더</b>.",
        "강직한 성품과 법과 원칙을 수호하는 엄격함으로 사회적 정의를 실현하고 질서를 세우는 데 최고의 재능을 보입니다. 수(水)의 유연함을 보완하여 세상에는 흑백 외에도 수많은 회색 지대가 있음을 인정하고 포용하는 것이 과업입니다. 추천 직업: <b>판사, 인권 변호사, 윤리 심의관, 규제 대응 전문가, 법률 자문가, 세무 조사관</b>.",
        "스스로에게 매우 엄격하여 특정 분야의 마스터가 되는 전문가적 성취가 높으며, 완벽한 기술력을 보유하는 것에 자부심을 가집니다. 목(木)의 성장 기운을 보완하여 끊임없이 새로운 기술을 배우고 자신을 리셋하여 낡은 칼이 되지 않도록 하십시오. 추천 직업: <b>전문 장인, 고위 기술 고문, 나노 공학자, 시계 명장, 반도체 설계자, 정밀 물리 학자</b>.",
        "카리스마 있는 리더십과 군대를 지휘하는 듯한 조직 관리력으로 대규모 조직을 효율적으로 통제하고 목표를 달성하게 합니다. 화(火)의 발산력을 조절하여 부드러움 속에 예리함을 감추는 '외유내강'의 리더십을 완성하십시오. 추천 직업: <b>군 장교, 경찰 간부, 대기업 임원, 작전 사령관, 보안 총 책임자(CSO), 법무법인 파트너</b>.",
        "장인 정신이 빛나고 아주 미세한 디테일까지 잡아내는 예리한 안목으로 명품 결과를 만들어내는 데 탁월합니다. 토(土)의 거시적 안목을 보완하여 나무만 보지 말고 숲 전체의 흐름과 트렌드를 주기적으로 살피는 훈련을 하십시오. 추천 직업: <b>보석 세공사, 정밀 기계 공학자, 안과 의사, 고급 하드웨어 디자이너, 현미경 분석가, 금속 조각가</b>.",
        "고결한 성품으로 정의를 실천하며, 조직 내의 비리와 모순을 바로잡는 강직한 내부 수호자 역할을 훌륭히 수행합니다. 목(木)의 융통성을 보완하여 타협할 줄 아는 정치적 감각을 길러 당신의 정의가 실제로 실현될 수 있게 하십시오. 추천 직업: <b>준법 감시인, 감사 실장, 화이트 해커, 투명 경영 위원, 윤리 감사관, 공공 기관 심사관</b>.",
        "이성적이고 차가운 지성으로 데이터를 분석하여 미래 리스크를 예측하고 최적의 해답을 제시하는 냉철한 브레인입니다. 화(火)의 공감 엔진을 장착하여 데이터 뒤에 숨겨진 사람의 마음을 읽고 치유하는 기술을 습득하십시오. 추천 직업: <b>금융 리스크 분석가, 외과 수술 리더, 알고리즘 개발자, 기술 가치 평가사, 범죄 심리 분석가, 손해 사정사</b>.",
        "믿음직하고 견고한 인물로 어떤 풍파에도 흔들리지 않고 시스템을 수호하며 자신의 가치를 지켜내는 견고함이 강점입니다. 수(水)의 변화 에너지를 수용하여 최신 디지털 트렌드를 적극적으로 반영하고 자신의 고전적 가치를 현대화하십시오. 추천 직업: <b>인프라 설계자, 금속 공예가, 정보 보안 총괄, 제조 공정 아키텍트, 금전 거래 보안관, 하드웨어 엔지니어</b>.",
        "천하의 명검과 같은 날카로운 재능과 강렬한 카리스마로 세상의 문제를 단번에 베어내고 새로운 방향을 제시하는 운명입니다. 토(土)의 단단한 지지 기반을 닦아 자신의 예리함을 세상을 위해 바르게 쓰고 스스로 상처 입지 않도록 관리하십시오. 추천 직업: <b>특수직 전문가, 칼럼니스트, 기업 전략 고문, 수석 비평가, 무기 체계 설계자, 고도의 사정 기관원</b>."
    ],
    "수(水)": [
        "지혜로운 현자의 통찰력과 보이지 않는 흐름을 읽는 깊은 사고력이 당신의 최대 강점입니다. 전략의 근원을 설계합니다. 화(火)의 실행력을 수혈하여 머릿속의 거대한 지도를 즉각 행동으로 옮기는 기계적인 루틴을 구축하는 것이 과업입니다. 추천 직업: <b>전략 컨설턴트, 미래 학자, 수석 연구원, 정책 기획자, 인문학 사상가, 알고리즘 설계자</b>.",
        "천부적인 상상력과 인간 심연을 꿰뚫는 감수성으로 사람들의 마음을 움직이는 독창적인 서사를 만들어내는 힘이 있습니다. 토(土)의 지지력을 보완하여 현실적인 경제 목표와 체크리스트를 만들어 발을 지면에 붙이는 법을 배우십시오. 추천 직업: <b>소설가, 심리학자, 시나리오 작가, 예술 심리 치료사, 마케팅 전략가, 영화 연출가</b>.",
        "철학적 사고와 심오한 대화를 통해 진리를 탐구하며, 인간관계의 본질을 이해하고 조언하는 상담가적 자질이 뛰어납니다. 금(金)의 결단력을 보완하여 자신의 결론을 명확히 문서화하고 단호하게 표현하는 결단력을 갖추십시오. 추천 직업: <b>정신과 의사, 철학 강의자, 고등 종교 교육자, 전문 상담가, 인문 비평가, 라이프 코치</b>.",
        "어떤 환경에도 유연하게 적응하며 경계를 넘나드는 정보 수집력과 외교적 수완이 당신의 강력한 경쟁력입니다. 목(木)의 주관을 강화하여 타인의 의견에 휩쓸리지 않도록 자신만의 변치 않는 핵심 가치(Anchor)를 설정하십시오. 추천 직업: <b>외교관, 국제 무역가, 다국적 기업 협상가, 글로벌 소싱 매니저, 문화 교류 대사, 해외 시장 개척자</b>.",
        "직관력이 경이로워 보이지 않는 흐름과 미래의 기운을 남보다 먼저 읽어내는 영적인 통찰력이 강점입니다. 화(火)의 열정을 길러 자신의 직관과 지혜를 구체적인 서비스나 상품으로 구조화하여 사회적 실체로 만드십시오. 추천 직업: <b>미래 전략가, 트렌드 워처, 점성술 분석가, 직관 컨설턴트, 문화 인류학자, 수석 데이터 과학자</b>.",
        "복잡한 이해관계를 조율하고 중재하여 최적의 합의점을 찾아내는 부드러운 카리스마와 포용력이 독보적입니다. 수(水)의 과다함을 경계하여 모든 짐을 혼자 지지 말고 권한을 위임하는 '덜어내기' 기술을 익히십시오. 추천 직업: <b>오케스트라 지휘자, 노사 조정관, 국제 기구 행정관, 옴부즈맨, 총무 이사, 프로젝트 총괄 코디네이터</b>.",
        "깊이 있는 성찰과 고결한 정신 세계를 추구하며, 세속적인 욕심보다 진리의 가치를 우선하는 정신적 지조가 강점입니다. 토(土)의 현실 기반을 강화하여 규칙적인 생활과 경제적 안정을 최우선 지표로 삼고 현실의 성을 쌓으십시오. 추천 직업: <b>종교학자, 시인, 명상 센터 운영자, 독립 서점 대표, 사찰/수도원 관리자, 자연주의 사상가</b>.",
        "섬세한 완벽주의와 방대한 데이터를 아카이빙하고 분류하는 치밀함으로 가치 있는 정보를 보존하는 능력이 탁월합니다. 화(火)의 속도감을 보완하여 '완벽보다 완결'을 모토로 삼아 실행의 속도를 높이고 마감 시간을 엄수하십시오. 추천 직업: <b>수석 아카이브 관리자, 기록 과학자, 고문서 해독가, 도서 정보 학자, 빅데이터 큐레이터, 사료 분석가</b>.",
        "고요한 카리스마와 신비로운 카리스마로 사람들을 조용히 설득하고 따르게 하는 내밀한 리더십의 소유자입니다. 목(木)의 소통 기술을 연마하여 자신의 원대한 비전을 대중의 언어로 번역해 따뜻하게 전달하는 법을 배우십시오. 추천 직업: <b>정신적 리더, 전문 연구소장, 특수 분야 교수, 비공개 전략가, 고위 정책 자문, 영성 지도자</b>.",
        "상대의 무의식을 읽어내는 능력이 탁월하여 마음의 병을 진단하고 본질적인 치유책을 제시하는 능력이 귀신같습니다. 수(水)의 침잠하는 우울 기운을 다스리기 위해 감정에 빠질 때 즉시 몸을 움직이는 기계적인 루틴을 가동하십시오. 추천 직업: <b>정신 분석가, 타로 상담 마스터, 임상 심리사, 최면 치료사, 호스피스 전문가, 영성 상담가</b>.",
        "고결한 지혜를 공유하여 대중을 계몽하고 사회의 정신적 품격을 높일 귀한 운명을 타고났습니다. 지식의 나눔이 운을 엽니다. 금(金)의 자기 관리력을 보완하여 자신의 지식을 유료화하거나 체계화하여 사회적 부와 연결시키십시오. 추천 직업: <b>대학교수, 대중 강연가, 지식 유튜버, 교육 콘텐츠 제작자, 베스트셀러 작가, 사설 교육 원장</b>.",
        "지혜의 화신으로 무궁무진한 잠재력과 유연함을 가졌으며, 어떤 제약도 뛰어넘는 사고의 자유로움이 당신의 천재성입니다. 토(土)의 규율을 보완하여 무질서한 생활을 경계하고 삶의 질서를 엄격히 유지하는 중용의 미덕을 실천하십시오. 추천 직업: <b>자유 예술가, 명상 전문가, 창의적 철학자, 프리랜서 저술가, 대안 학교 교장, 정신 세계 탐험가</b>."
    ]
};
/* [Life Mission: Integrated Element Dynamics Analysis - Enhanced Global Dataset] */
const enPrescriptions12 = {
    "Wood": [
        "Your unrivaled drive and pioneering spirit, finding paths even in barren lands, are your greatest <b>Wood</b> strengths. You possess an exceptional ability to read trends and design structures ahead of others. Your mission is to integrate feedback from collaborators to avoid dogmatism. Recommended Careers: <b>Strategist, Venture Founder, New Business Developer, Growth Hacker, Military Strategist, Product Owner (PO)</b>.",
        "Overflowing with growth energy, you have the creative vitality to breathe life into seemingly impossible goals. As an idea bank, you energize organizations, but must guard against fading persistence. Systematizing routines is your key to success. Recommended Careers: <b>Educational Reformer, Startup Accelerator, New Project Manager, Trendsetter, Curriculum Designer, Creativity Coach</b>.",
        "Like a deeply rooted tree, you possess unshakable convictions and a benevolent leadership that embraces the masses. You excel at building trust-based networks and hold moral authority. Your task is to define boundaries clearly to protect your sovereignty. Recommended Careers: <b>HR Specialist, NGO Executive, Compliance Officer, Social Welfare Policy Maker, Foundation Chairperson, Culture Consultant</b>.",
        "Your vital energy fuels immediate change in stagnant organizations, making you a natural innovator. Your aesthetic sense and intuition are sharp, leading to great emotional and visual results. Master the art of energy distribution to prevent burnout. Recommended Careers: <b>Creative Director, UI/UX Design Lead, Exhibition Planner, Brand Strategist, Ad Concept Architect, Space Designer</b>.",
        "The epitome of inner strength, your independent spirit and logical design capabilities are unrivaled. You have the 'Architect's Mind' to see the essence of invisible systems. Your mission is to break out of isolation and expand your strategic social network. Recommended Careers: <b>Tech Architect, Chief Researcher, System Engineer, Technical Consultant, Security Analyst, Data Modeler</b>.",
        "With powerful nurturing energy, your talent for discovering others' potential and your compassion are your primary weapons. You purify your surroundings with warmth, but must develop decisiveness to say 'No'. Recommended Careers: <b>Management Consultant, Career Mentor, Psychological Counselor, Education Administrator, Corporate Trainer, Conflict Mediator</b>.",
        "A brilliant learner who organizes vast information and teaches it exceptionally well. You excel at converting knowledge into practical value. Your task is to develop financial sense to turn your insights into capital. Recommended Careers: <b>Scholar, Investment Analyst, Knowledge Curator, Quant Manager, Information Architect, BI (Business Intelligence) Specialist</b>.",
        "A noble idealist, you possess the energy of a spiritual leader who spreads moral values and philosophical depth. Your artistic sensitivity heals the world. Confidently prove your worth using the language of the masses. Recommended Careers: <b>Artist, NGO Leader, Philosophy Lecturer, Ethics Manager, Public Campaigner, Culture Critic</b>.",
        "Born with majestic leadership and dignity, your charisma in leading large organizations is unparalleled. You view the world from a high-altitude perspective. Your mission is to use diplomacy to turn enemies into allies. Recommended Careers: <b>Politician, CEO, Regional Director, Strategic Commander, Crisis Manager, Senior Administrator</b>.",
        "Your intuition for opportunity is instinctively developed, and your ability to amplify asset value through a competitive spirit is extraordinary. Persistence in goals brings victory. Learn the value of coexistence over mere win-lose scenarios. Recommended Careers: <b>Strategic Investor, Venture Capitalist (VC), Luxury Asset Sales Expert, Business Developer, Negotiation Expert, M&A Specialist</b>.",
        "Combining precision in blueprints with a macro vision, you have a natural talent for simplifying complex systems. You identify and solve structural contradictions. Focus on completing the finest details to master your craft. Recommended Careers: <b>Urban Planner, Logistics Engineer, SCM Strategist, Software Architect, Process Control Expert, Industrial Designer</b>.",
        "Destined as a master with the energy to create entire ecosystems and direct grand artistic visions. You lead others to complete massive discourses. Learn to respect the pace of others and practice strategic patience. Recommended Careers: <b>Artistic Director, Executive Producer (EP), Film Director, Global Project Leader, Chief Curator, Content Director</b>."
    ],
    "Fire": [
        "Explosive passion and the energy to overwhelm an audience are your weapons. Your marketing sense and ability to mobilize people make you a trend leader. Your task is to control emotional volatility with cold, consistent routines. Recommended Careers: <b>Performance Marketer, Copywriter, Ad Planner, Trend Analyst, Media Planner, PR Specialist</b>.",
        "A genius of inspiration, your creative expression in visualizing imagination and manifesting it into results is unique. You propose values that never existed. Master the discipline to archive thoughts and finish what you start. Recommended Careers: <b>Content Creator, Webtoon Artist, Screenwriter, Visual Artist, Game Designer, Multimedia Director</b>.",
        "Possessing brilliant eloquence and quick wit, you are exceptional as the face of an organization. You shine on stages and across social media. Success lies in keeping the weight of your words and mastering the art of silence. Recommended Careers: <b>Announcer, Broadcaster, Corporate Spokesperson, External Relations Lead, Motivational Speaker, Professional MC</b>.",
        "With fast information processing and intellectual curiosity, you excel at analyzing and delivering global issues rapidly. You command the flow of info. Build a deep domain of expertise rather than staying in shallow knowledge. Recommended Careers: <b>Data Journalist, Tech Reporter, Market Research Expert, News Curator, Knowledge Strategist, Intelligence Analyst</b>.",
        "Charming charisma and a distinct presence make you a powerful leader who attracts and guides people toward goals. You shine brightest in any crowd. Establish authority through hard data while practicing humility. Recommended Careers: <b>Political Leader, Election Strategist, Sales Director, Brand Ambassador, Franchise CEO, Party Spokesperson</b>.",
        "Highly sensitive and artistic, you have the talent to raise the world's aesthetic standards. You excel at touching people's hearts. Build a solid financial foundation for your creativity and master practical management. Recommended Careers: <b>Fine Artist, Gallery Director, Interior Designer, Art Director, Art Therapist, Florist</b>.",
        "Your competitiveness lies in your adaptability and versatility to immediately transform energy in shifting environments. You bring vitality wherever you go. Drop a firm philosophical anchor to define your baseline. Recommended Careers: <b>Digital Nomad, Travel Writer, Global Field Researcher, Freelance Consultant, Event Producer, Entertainment Manager</b>.",
        "Possessing immortal will and passion, your overwhelming execution energy makes the impossible possible. You are strongest at the point of decision. Prove that winning hearts is the ultimate form of success. Recommended Careers: <b>Hedge Fund Manager, Restructuring Expert, Pro-Gamer Agent, Investment Attraction Lead, Risk Manager, Professional Manager</b>.",
        "A prestige-centered life enlightening the world; you have the energy to reach high positions of public respect. Your sense of justice is firm. Master the 'Intentional Pause' to cool your inner heat and maintain long-term health. Recommended Careers: <b>Professor, Public Official, Policy Maker, Chief Justice, Academic Director, Science & Tech Leader</b>.",
        "A master of communication with a vast network, you have a natural gift for acting as a hub connecting people and opportunities. Connections are your assets. Prioritize sincere bonds over flashy ones and deepen your self-reflection. Recommended Careers: <b>Global Partnership Head, Celebrity Agent, Community Leader, Convention Planner, Insight Consultant, Networking Strategist</b>.",
        "Possessing high responsibility and the 'Star Power' to brand yourself, you excel at attracting attention and elevating organizational prestige. Use cold self-evaluation as data to constantly reinvent yourself. Recommended Careers: <b>Brand Director, Fashion Designer, Ad Model, Luxury Marketing Head, Art Curator, Image Consultant</b>.",
        "Combining charisma and intellect, you lead public thought and excel at proposing new standards through critical insight. You hold intellectual superiority. Become a magnanimous leader who nurtures the weak. Recommended Careers: <b>Social Critic, Columnist, Legal Analyst, Chief Editorial Writer, Education Head, Philosophical Author</b>."
    ],
    "Earth": [
        "Reliable and trustworthy, your ability to stabilize the core of an organization is your primary <b>Earth</b> strength. Your task is to prevent stagnation by trying one new thing daily to keep your luck vibrant. Recommended Careers: <b>Banker, Public Official, Appraiser, Credit Analyst, Land Info Expert, Admin Manager</b>.",
        "With immense maternal tolerance and patience, you excel at healing others' pain and harmonizing organizations. Guard against self-sacrifice; organize your own assets and space first to remain sustainable. Recommended Careers: <b>Social Worker, Professional Counselor, Nursing Manager, Labor Attorney, Community Manager, Psychotherapist</b>.",
        "Acting as a bridge between people with a warm heart, you excel at mediating conflict and creating peaceful environments. Set clear boundaries to protect your energy and learn to say 'No' when necessary. Recommended Careers: <b>HR Manager, Community Developer, Psychological Arbitrator, Wedding Planner, Probate Lawyer, Human Rights Activist</b>.",
        "Extreme prudence and meticulous preparation make you exceptional at planning without failure and archiving valuable assets. You are a master of records. Practice launching projects when they are 80% ready to master timing. Recommended Careers: <b>Archivist, Museum Curator, Librarian, Records Expert, Process Manager, QA Analyst</b>.",
        "A pillar of responsibility, you build absolute trust by adhering to principles. Your task is to become a mediator who accepts new ideas without bias to increase organizational fluidity. Recommended Careers: <b>Auditor, Security Expert, Safety Director, Ethics Officer, Real Estate Trust Expert, Asset Custodian</b>.",
        "Excellent in resource allocation and operational management, you excel at maintaining system stability while maximizing efficiency. Read hidden trends behind the data to upgrade existing systems innovatively. Recommended Careers: <b>COO, Logistics Expert, Operations Director, SCM Manager, Production Lead, Urban Administrator</b>.",
        "Unrivaled persistence and endurance allow you to complete long-term projects through sheer willpower. You have the 'Master's Spirit'. Reward yourself for small achievements to maintain joy and vitality in the process. Recommended Careers: <b>Long-term Project PM, Heritage Specialist, Lead Engineer, Tech Artisan, Research Lab Head, Long-term Strategist</b>.",
        "Performing best in stable environments, your realistic eye for judging and protecting the value of real estate or assets is superb. Build unshakeable foundations. Develop the courage to take calculated risks outside your comfort zone. Recommended Careers: <b>Real Estate Developer, Land Analyst, Controller, Asset Manager, Conservation Scientist, Trust Manager</b>.",
        "Firm convictions and a heavy presence make you a spiritual pillar who provides direction to the masses. Share your philosophy through kind language and documentation to earn public consensus. Recommended Careers: <b>Strategy Expert, Constitutional Judge, Philosopher, Religious Leader, Thinker, Policy Advisor</b>.",
        "Dignified prudence and an eye for traditional values allow you to distinguish and preserve the true worth of precious assets. Train your 'animal instinct' to move rapidly at critical moments. Recommended Careers: <b>Antiques Appraiser, Luxury Collector, Conservation Expert, Succession Consultant, Auction Manager, Art Market Analyst</b>.",
        "Precise in management and calculation to the decimal point; your rational control maximizes efficiency without being swayed by emotion. Recognize the need for human warmth and increase emotional investment in your peers. Recommended Careers: <b>Accountant, Tax Analyst, Data Scientist, Risk Consultant, Statistician, Budget Director</b>.",
        "Embracing the world like the earth, you are a leader with a noble mission to nurture people and realize social values. Use sharp discernment to judge character and seek advice from wise mentors. Recommended Careers: <b>Philanthropy Chairperson, Education Foundation Head, Social Entrepreneur, University President, Scholarship Director, Public Arts Producer</b>."
    ],
    "Metal": [
        "A natural competitor with unrivaled decisiveness; you are a 'Valiant Leader' who solves problems first in times of crisis. Add a drop of humanity to your rigid principles to gain mass support. Recommended Careers: <b>Prosecutor, Pro Athlete, Surgeon, Crisis Consultant, Detective, M&A Specialist</b>.",
        "Your analytical and critical abilities are divine, making you top-tier at identifying errors and pursuing perfection. Transform your critical language into constructive alternatives that heal rather than hurt. Recommended Careers: <b>Auditor, Literary Critic, Quality Control Head, Security Specialist, Investigator, Tech Analyst</b>.",
        "Possessing a heavy presence and strong justice, you prove yourself through action rather than words. You push through until the end. Raise the organizational temperature with sincere, concise praise for your peers. Recommended Careers: <b>Design Engineer, Technical Official, Law Enforcement, Precision Machinist, Security Architect, Metallurgist</b>.",
        "Exceptional organizational skills allow you to build perfect systems and order from chaos. You produce lean, efficient results. Accept the 10% of imperfection and find mental peace to allow for creativity. Recommended Careers: <b>Data Engineer, Process Architect, Programmer, Automation Expert, Technical Writer, Archive Builder</b>.",
        "Righteous and rigid, you excel at realizing social justice and establishing order through strict adherence to laws and principles. Recognize and embrace the 'gray areas' of the world to achieve true justice. Recommended Careers: <b>Judge, Human Rights Lawyer, Ethics Auditor, Regulatory Expert, Legal Consultant, Tax Investigator</b>.",
        "Strict with yourself to achieve mastery, you possess elite technical skills and take great pride in your expertise. Constantly learn new technologies to prevent your 'blade' from becoming obsolete. Recommended Careers: <b>Master Artisan, Senior Tech Advisor, Nano-Engineer, Watchmaker, Semiconductor Designer, Precision Physicist</b>.",
        "Charismatic leadership and organization management reminiscent of a military commander allow you to control large groups efficiently. Master the leadership of 'softness concealing sharpness'. Recommended Careers: <b>Military Officer, Police Executive, Corporate Director, Operations Commander, CSO, Law Firm Partner</b>.",
        "Brilliant craftsmanship and a keen eye for the smallest details allow you to produce 'Masterpiece' results. Periodically step back to observe macro trends and ensure you aren't missing the forest for the trees. Recommended Careers: <b>Goldsmith, Precision Engineer, Ophthalmologist, Luxury Hardware Designer, Micro-Analyst, Metal Sculptor</b>.",
        "A noble guardian who practices justice and corrects corruption within organizations. Develop 'political sense' to ensure your justice is actually realized through compromise when necessary. Recommended Careers: <b>Compliance Officer, Audit Head, White Hat Hacker, Transparency Lead, Ethics Auditor, Public Inspector</b>.",
        "A rational brain analyzing data to predict future risks and propose optimal solutions. Install an 'Empathy Engine' to read and heal the human hearts hidden behind the hard data. Recommended Careers: <b>Financial Risk Analyst, Surgical Lead, Algorithm Developer, Tech Valuator, Criminologist, Loss Adjuster</b>.",
        "Reliable and solid; you protect systems against any storm and maintain your values with unshakeable fortitude. Integrate digital trends to modernize your classical values and remain relevant. Recommended Careers: <b>Infrastructure Architect, Metal Artist, Info Security Lead, Manufacturing Architect, Fiscal Guardian, Hardware Engineer</b>.",
        "Destined to be a legendary blade with sharp talent and intense charisma to cut through global problems. Build a solid foundation first and ensure your sharpness is used for the greater good without harming yourself. Recommended Careers: <b>Special Operations Expert, Columnist, Strategy Advisor, Senior Critic, Weapons Systems Designer, High-level Inspector</b>."
    ],
    "Water": [
        "Possessing the insight of a wise sage and the ability to read invisible flows, you design the origin of strategy. Build mechanical routines to turn your grand mental maps into immediate action. Recommended Careers: <b>Strategy Consultant, Futurist, Chief Researcher, Policy Planner, Humanities Thinker, Algorithm Designer</b>.",
        "Naturally imaginative with a sensitivity to the human abyss, you have the power to create original narratives that move hearts. Learn to ground your feet by setting clear financial goals and checklists. Recommended Careers: <b>Novelist, Psychologist, Screenwriter, Art Therapist, Marketing Strategist, Film Director</b>.",
        "Exploring truth through philosophical thought and profound dialogue; you are a natural counselor who understands human nature. Document your conclusions clearly and develop the decisiveness to express them firmly. Recommended Careers: <b>Psychiatrist, Philosophy Lecturer, Religious Educator, Professional Counselor, Humanities Critic, Life Coach</b>.",
        "Your strong competitiveness lies in your diplomatic skill and ability to collect info across boundaries. Strengthen your convictions to ensure you don't lose your identity (Anchor) to others' opinions. Recommended Careers: <b>Diplomat, International Trader, Multinational Negotiator, Global Sourcing Manager, Cultural Ambassador, Market Pioneer</b>.",
        "Possessing an uncanny ability to read future energies and invisible flows ahead of others. Structure your intuition into concrete services or products to give them social substance. Recommended Careers: <b>Future Strategist, Trend Watcher, Astrology Analyst, Intuition Consultant, Anthropologist, Chief Data Scientist</b>.",
        "Possessing soft charisma and tolerance to mediate complex interests and find optimal consensus. Guard against taking on every burden alone; master the art of 'unloading' by delegating authority. Recommended Careers: <b>Conductor, Labor Mediator, International Admin, Ombudsman, General Director, Lead Coordinator</b>.",
        "Pursuing deep reflection and a noble spiritual world; your strength is prioritizing truth over worldly greed. Build a solid reality by prioritizing a strict routine and economic stability. Recommended Careers: <b>Religion Scholar, Poet, Meditation Center Owner, Independent Bookstore CEO, Monastery Manager, Naturalist Thinker</b>.",
        "Possessing delicate perfectionism and the meticulousness to archive and classify vast data. Prioritize 'Completion over Perfection' to increase your execution speed and meet deadlines. Recommended Careers: <b>Chief Archivist, Records Scientist, Paleographer, Info Scientist, Big Data Curator, Historical Analyst</b>.",
        "The owner of quiet, mysterious charisma who silently persuades others. Learn to translate your grand vision into warm, accessible language to lead more effectively. Recommended Careers: <b>Spiritual Leader, Lab Director, Specialized Professor, Confidential Strategist, Senior Policy Advisor, Mystic Guide</b>.",
        "Exceptional at reading the subconscious and diagnosing deep-seated emotional issues. To manage deep Water-melancholy, trigger mechanical routines to move your body as soon as emotion hits. Recommended Careers: <b>Psychoanalyst, Tarot Master, Clinical Psychologist, Hypnotherapist, Hospice Expert, Spiritual Counselor</b>.",
        "Destined to share noble wisdom and enlighten the masses. Sharing knowledge opens your luck. Monetize or systematize your insights to connect your wisdom with social wealth. Recommended Careers: <b>University Professor, Public Speaker, Knowledge YouTuber, Educational Content Producer, Bestselling Author, Academy Director</b>.",
        "An incarnation of wisdom with infinite potential and flexibility. Your genius is the freedom of thought that transcends any constraint. Practice moderation and maintain life order through discipline. Recommended Careers: <b>Free Artist, Meditation Expert, Creative Philosopher, Freelance Author, Alternative School Principal, Spiritual Explorer</b>."
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
        
        // [수정] 배열이 들어오면 첫 번째 오행만 딱 하나만 처리합니다. (그래야 4개가 안 나옵니다)
        const el = Array.isArray(lackEls) ? lackEls[0] : lackEls;
        const elIdx = { "목(木)": 0, "화(火)": 3, "토(土)": 6, "금(金)": 9, "수(水)": 12, "수(수)": 12 };
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
