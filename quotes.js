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

/* [현생 과업: 오행 역학 통합 분석 시스템 - 텍스트 강화 통합본] */
const elementPrescriptions12 = {
    "목(木)": [
        "어떤 환경에서도 스스로 길을 만들어내는 독보적인 자생력과 목표를 향해 거침없이 뻗어나가는 에너지가 당신의 가장 큰 무기입니다. 강한 추진력으로 선구자적 기질이 뚜렷한 당신은 <b>벤처 창업가, 신규 비즈니스 디렉터, 혹은 건축 설계나 헤어 디자이너</b>로서 무에서 유를 창조할 때 큰 성취를 거둡니다. 타인의 피드백을 수용하여 설계를 수정하는 유연함이 당신의 핵심 과업입니다.",
        "타인의 마음을 움직이는 선한 영향력과 멈추지 않는 호기심으로 주변에 새로운 생명력을 불어넣는 창조적 활력이 뛰어납니다. 당신의 기질은 <b>교육 서비스, 전문 강사, 스타트업 액셀러레이터, 혹은 문화 트렌드세터와 콘텐츠 기획자</b>로서 대중의 흐름을 리드할 때 가장 빛납니다. 루틴을 시스템화하여 끝까지 완수하는 습관이 성공의 열쇠입니다.",
        "뿌리 깊은 나무처럼 흔들리지 않는 신념과 대중을 따뜻하게 품어 안는 포용력 있는 리더십이 당신 영혼의 자산입니다. <b>인사 관리(HR), 비영리 단체 리더, 공인중개사, 혹은 조직 문화 컨설턴트</b>로서 사람 사이의 질서를 세우는 역할을 수행하십시오. 공과 사의 경계를 명확히 하여 본인의 주권을 지키는 것이 가장 큰 과업입니다.",
        "위로 뻗어가는 강인한 생명력과 침체된 분위기를 단숨에 반전시키는 혁신적인 감각은 조직의 활력을 불어넣는 엔진이 됩니다. <b>크리에이티브 디렉터, 공간 디자이너, 전시 기획자, 혹은 브랜드 전략가</b>로서 본인의 역량을 무한히 발휘하십시오. 자신의 에너지를 수치화하여 효율적으로 배분하는 법을 익히는 것이 필수적입니다.",
        "내면의 단단한 독립심과 복잡한 시스템의 본질을 꿰뚫는 논리적 설계 능력은 누구도 흉내 낼 수 없는 강점입니다. <b>기술 아키텍트, 수석 연구원, 시스템 엔지니어, 혹은 데이터 모델러</b>로서 세상을 설계할 때 탁월한 성과가 따릅니다. 고립에서 벗어나 전략적 네트워크를 구축하여 당신의 가치를 세상과 공유하십시오.",
        "세상을 이롭게 하는 상생의 기운과 타인의 잠재력을 귀신같이 찾아내어 성장을 돕는 자비심이 당신의 운명을 지탱합니다. <b>경영 컨설턴트, 커리어 멘토, 심리 상담 전문가, 혹은 라이프 코치</b>로서 타인의 삶을 변화시킬 때 진정한 가치를 느낍니다. '아니오'라고 말할 수 있는 단호함을 갖추는 것이 당신의 주권을 지키는 길입니다.",
        "지식을 스폰지처럼 흡수하는 비범한 습득 능력과 방대한 정보를 일목요연하게 체계화하여 실용적 가치로 뽑아내는 힘이 뛰어납니다. <b>학자, 정보 분석가, 퀀트 매니저, 혹은 지식 큐레이터</b>로서 독보적인 전문성을 인정받게 됩니다. 머릿속의 지식을 현실의 자본으로 전환하는 실전 감각을 익히는 것이 당신의 핵심 과업입니다.",
        "고결한 이상주의자로서 도덕적 가치를 수호하며 세상을 치유하는 예술적 감수성과 통찰력이 당신의 가장 아름다운 강점입니다. <b>예술가, NGO 리더, 철학 강의자, 혹은 공공 캠페이너나 환경 활동가</b>로서 사회에 울림을 줄 때 행복합니다. 대중의 언어로 자신의 가치를 당당히 증명하는 것이 당신의 사명입니다.",
        "강력한 두령의 기운과 조직을 한 손에 장악하는 카리스마, 그리고 멀리 내다보는 거시적 안목이 당신을 높은 자리에 오르게 합니다. <b>정치 리더, CEO, 행정 고위직, 전략 사령관, 혹은 대규모 사업체 운영자</b>로서 큰 흐름을 주도하십시오. 높은 자리에 있을수록 낮은 곳을 살피며 포용력을 갖추는 것이 진정한 성공입니다.",
        "기회를 포착하는 직관이 예리하고 승부사적 기질을 바탕으로 자산의 가치를 무한히 증폭시키는 탁월한 경영 감각을 타고났습니다. <b>전략 투자자, 벤처 캐피털리스트, 전문 협상가, 혹은 자산 영업 전문가</b>로서 큰 부와 명예를 얻을 수 있습니다. 승리보다 공존의 가치를 먼저 계산하는 법을 배울 때 운은 더 커집니다.",
        "완벽한 설계도를 그리는 정밀함과 복잡한 상황을 단순한 핵심으로 요약해내는 천부적인 시스템 정리 능력이 당신의 최대 무기입니다. <b>도시 설계자, 공급망(SCM) 전략가, 소프트웨어 아키텍트, 혹은 공정 최적화 전문가</b>로서 활약하십시오. 불필요한 것을 쳐내고 본질에 집중할 때 당신의 결과물은 명품이 됩니다.",
        "스스로 하나의 생태계를 창조할 만큼 거대한 에너지와 예술적인 감각으로 거대 담론을 완성해내는 리더의 기질을 타고났습니다. <b>예술 감독, 총괄 프로듀서, 영화 감독, 콘텐츠 총괄, 혹은 대형 전시기획자</b>로서 역량을 펼치십시오. 타인의 속도를 존중하고 기다려주는 인내를 배울 때 전성기가 찾아옵니다."
    ],
    "화(火)": [
        "폭발적인 열정과 좌중을 압도하는 에너지, 대중을 한순간에 매료시키는 마케팅적 감각은 당신이 가진 강력한 천부적 재능입니다. <b>퍼포먼스 마케터, 카피라이터, 광고 기획자, 홍보 전문가, 혹은 스타일리스트</b>로서 트렌드의 중심에 서십시오. 뜨거운 가슴을 차가운 루틴으로 통제하는 법을 배우는 것이 당신의 핵심 과업입니다.",
        "영감이 샘솟는 재주꾼이자 상상력을 시각화하여 세상에 없던 가치를 제안하는 비주얼적 표현력이 당신의 영혼을 빛나게 합니다. <b>웹툰 작가, 비주얼 아티스트, 게임 디자이너, 유튜버, 혹은 방송 구성 작가</b>로서 독창적인 세계를 구축하십시오. 모든 아이디어를 기록하고 끝까지 매듭짓는 끈기가 당신을 완성합니다.",
        "군중을 매료시키는 화려한 언변과 뛰어난 순발력으로 어떤 자리에서도 주인공이 되는 존재감과 사교성이 당신의 최대 무기입니다. <b>방송인, 아나운서, 기업 대변인, 동기부여 강연가, 혹은 이벤트 MC</b>로서 대중 앞에 설 때 운이 따릅니다. 때로는 침묵이 가장 강력한 메시지임을 깨닫고 무게감을 지키는 것이 과업입니다.",
        "빛의 속도와 같은 정보 처리 능력과 지적 호기심으로 세상의 변화를 누구보다 빠르게 포착하여 대중에게 전달하는 안목이 뛰어납니다. <b>데이터 저널리스트, 테크 리포터, 시장 조사 전문가, 혹은 트렌드 분석가</b>로서 독보적인 영역을 개척하십시오. 한 우물을 깊게 파서 대체 불가능한 권위를 구축하는 것이 성공의 열쇠입니다.",
        "설득력 있는 카리스마와 뚜렷한 존재감으로 목표를 향해 돌진하게 만드는 강력한 통치력과 실행력이 당신의 강점입니다. <b>영업 본부장, 선거 전략가, 영업 이사, 혹은 글로벌 브랜드 앰배서더</b>로서 큰 성취를 거두십시오. 숫자의 힘과 객관적 증거로 권위를 세우고 고개를 숙이는 법을 익히는 것이 당신의 과업입니다.",
        "풍부한 감수성과 탁월한 미적 안목으로 세상의 보이지 않는 가치를 아름답게 형상화하는 미학적 재능이 당신의 삶을 풍요롭게 합니다. <b>인테리어 디자이너, 아트 디렉터, 갤러리 관장, 스타일리스트, 혹은 뷰티 디렉터</b>로서 아름다움을 창조하십시오. 현실의 경제적 기반을 스스로 닦는 감각이 당신의 자유를 보장합니다.",
        "변화무쌍한 환경에서도 즉각적으로 자신을 변모시키는 적응력과 다재다능함으로 어디서나 활력을 주는 에너지가 당신의 경쟁력입니다. <b>디지털 노마드, 여행 작가, 글로벌 현지 조사원, 프리랜서 컨설턴트, 혹은 에어비앤비 호스트</b>로서 자유로운 삶을 영위하십시오. 자신만의 확고한 철학적 닻을 내려 기준점을 세우는 것이 과업입니다.",
        "불멸의 의지와 목표를 향해 돌진하는 뜨거운 열정으로 불가능해 보이는 일도 결국 현실로 만들어내는 압도적인 실천력이 강점입니다. <b>헤지펀드 매니저, 구조조정 전문가, 기업 사냥꾼, 전문 경영인, 혹은 소방관이나 경찰</b>로서 큰 사명을 수행하십시오. 사람의 마음을 얻는 것이 진짜 성공임을 스스로 증명하는 것이 과업입니다.",
        "태양처럼 세상을 밝히는 고결한 명예와 높은 위치에서 정의를 실현하고자 하는 숭고한 의지가 당신의 최대 강점입니다. <b>대학교수, 고위 공직자, 법관, 과학 기술 지도자, 혹은 의료기관 리더</b>로서 명예로운 삶을 사십시오. 의도적인 멈춤과 휴식을 통해 내면의 열기를 다스리는 것이 당신의 건강과 직결됩니다.",
        "소통의 달인으로서 광범위한 네트워크를 관리하며 사람과 기회를 연결하는 허브 역할에 천부적인 소질을 타고났습니다. <b>글로벌 파트너십 헤드, 에이전트, 커뮤니티 리더, 혹은 네트워킹 전략가나 공간 대여 서비스 운영자</b>로서 최고의 수완을 발휘하십시오. 화려한 조명 뒤에서 자아의 깊이를 더하는 사색이 필요합니다.",
        "강력한 책임감과 자신을 하나의 브랜드로 만들어내는 스타성으로 대중의 시선을 사로잡고 조직의 가치를 드높이는 감각이 뛰어납니다. <b>브랜드 디렉터, 패션 디자이너, 이미지 컨설턴트, 럭셔리 마케팅 총괄, 혹은 광고 모델</b>로서 정점에 서십시오. 냉정한 자기 객관화를 통해 스스로를 끊임없이 재창조하는 것이 당신의 과업입니다.",
        "강력한 카리스마와 지성을 겸비하여 대중의 사고를 선도하고 비판적인 시각으로 새로운 기준을 제시하는 능력이 당신의 무기입니다. <b>사회 비평가, 칼럼니스트, 법률 분석가, 철학 저술가, 혹은 정치 평론가</b>로서 세상을 일깨우십시오. 타인의 부족함을 품고 함께 성장하는 대인이 되는 것이 당신의 최종 과업입니다."
    ],
    "토(土)": [
        "듬직하고 신뢰감 주는 성품으로 조직의 근간을 지탱하며 주변 사람들에게 정서적인 안정을 주는 존재감이 당신의 최대 강점입니다. <b>은행원, 공무원, 감정평가사, 혹은 행정 관리나 사무직 리더</b>로서 안정적인 기반을 구축하십시오. 매일 새로운 것을 시도하며 운의 정체를 막는 것이 당신의 핵심 과업입니다.",
        "만물을 기르는 대지처럼 넓은 포용력과 인내심으로 타인의 아픔을 어루만지고 공동체를 화합시키는 기운이 뛰어납니다. <b>의료 행정가, 사회 복지사, 간호 관리자, 심리 치료사, 혹은 요양 보호 관리자</b>로서 숭고한 가치를 실현하십시오. 자신의 공간을 먼저 정돈하고 남을 돕는 '건강한 이기주의'를 배워야 합니다.",
        "따뜻한 심성으로 사람과 사람 사이를 잇는 다리 역할을 수행하며, 갈등을 중재하고 평화로운 환경을 조성하는 능력이 좋습니다. <b>HR 매니저, 웨딩 플래너, 인권 활동가, 커뮤니티 개발자, 혹은 파티 플래너</b>로서 대인관계의 중심이 되십시오. 인간관계의 명확한 경계선을 긋고 본인의 에너지를 보호하는 것이 성공의 비결입니다.",
        "극도의 신중함과 철저한 준비성으로 실패 없는 계획을 수립하고, 소중한 기록이나 가치를 보존하고 관리하는 능력이 탁월합니다. <b>기록물 관리사, 박물관 큐레이터, 박물관장, 품질 보증(QA) 분석가, 혹은 사서</b>로서 전문성을 인정받으십시오. 80%의 준비 상태에서 과감히 세상에 내놓는 연습을 하는 것이 과업입니다.",
        "확고한 원칙과 책임감을 바탕으로 조직의 기둥 역할을 수행하며, 한 번 정한 약속은 끝까지 고수하는 신뢰도가 당신의 무기입니다. <b>감사원, 보안 전문가, 안전 관리 책임자, 자산 관리인, 혹은 법무사</b>로서 신용을 구축하십시오. 타인의 새로운 아이디어를 유연하게 수용하는 중재자가 될 때 당신의 가치는 배가됩니다.",
        "리소스 배분과 운영 관리에 탁월한 재능을 가졌으며, 시스템을 안정적으로 유지하면서 효율을 극대화하는 역량이 뛰어납니다. <b>COO, 물류 총괄 전문가, 공급망 매니저, 도시 행정가, 혹은 대형 마트 관리자</b>로서 실무의 정점에 서십시오. 데이터 뒤의 숨겨진 트렌드를 읽어내어 시스템을 업그레이드하는 것이 당신의 가치입니다.",
        "어떤 시련에도 굴하지 않는 끈기와 인내심으로 장기적인 프로젝트를 완수해내는 집념과 장인의 정신이 당신의 강점입니다. <b>장기 프로젝트 PM, 수석 엔지니어, 전문 기술 장인, 혹은 토목 설계사나 도예가</b>로서 한 분야의 대가가 되십시오. 사소한 성취를 기념하고 자신에게 보상을 주어 즐겁게 일하는 법을 익혀야 합니다.",
        "안정적인 환경에서 최고의 퍼포먼스를 발휘하며, 부동산이나 실질적인 자산의 가치를 판단하고 지켜내는 안목이 뛰어납니다. <b>부동산 개발자, 건물주, 임대 사업가, 토지 분석가, 혹은 신탁 운용 매니저</b>로서 흔들리지 않는 기초를 닦으십시오. 불확실성을 기회로 보고 과감히 베팅하는 담력을 키우는 것이 과업입니다.",
        "확고한 신념과 묵직한 존재감을 바탕으로 자기만의 철학적 세계를 구축하고 대중에게 올바른 방향을 제시하는 기운이 강합니다. <b>사상가, 정책 자문 위원, 전략 수립 전문가, 헌법 법관, 혹은 교육 센터장</b>으로서 존경받는 삶을 사십시오. 자신의 철학을 친절한 언어로 공유하여 대중의 동의를 얻어내는 것이 과업입니다.",
        "품격 있는 신중함과 전통적인 가치를 중시하는 안목으로 귀중한 자산의 진위를 가려내고 보존하는 감각이 탁월합니다. <b>골동품 감정사, 문화재 보존 전문가, 옥션 매니저, 미술 시장 분석가, 혹은 박물관 큐레이터</b>로서 명성을 얻으십시오. 결정적인 순간에 본능을 믿고 빠르게 움직이는 동물적 감각을 훈련해야 합니다.",
        "관리 능력과 수치 계산이 소수점 단위까지 정확하며, 감정에 휘둘리지 않고 효율을 극대화하는 치밀한 운영 능력이 강점입니다. <b>회계사, 세무 분석가, 데이터 과학자, 예산 기획 실장, 혹은 금융 리스크 매니저</b>로서 실무의 핵심을 담당하십시오. 사람의 마음에도 따뜻한 온기와 정서적 투자가 필요함을 인정해야 합니다.",
        "대지처럼 만물을 품는 위대한 운명을 타고나 사람을 키우고 사회적 가치를 실현하는 데 숭고한 사명감을 가진 리더입니다. <b>자선 재단 이사장, 사회적 기업가, 대학 총장, 종교 지도자, 혹은 마을 공동체 리더</b>로서 활동하십시오. 지혜로운 멘토를 찾아 조언을 구하는 유연함을 갖추는 것이 성공의 열쇠입니다."
    ],
    "금(金)": [
        "타고난 승부사로서 결단력과 용기가 타의 추종을 불허하며, 위기의 순간에 앞장서서 문제를 해결하는 용장 기질이 강점입니다. <b>검사, 경찰 간부, 소방 간부, 프로 운동선수, 혹은 외과 전문의</b>로서 승부처를 장악하십시오. 칼날 같은 원칙에 따뜻한 인간미를 더해 대중의 지지를 얻는 것이 당신의 평생 과업입니다.",
        "핵심을 꿰뚫는 분석력과 논리적인 비판 능력이 뛰어나며, 오류를 잡아내고 완벽함을 추구하는 데 최상의 능력을 발휘합니다. <b>회계 감사, 문학 비평가, 품질 관리 실장, 시스템 보안 전문가, 혹은 요리 비평가</b>로서 독보적 권위를 가지십시오. 비판 뒤에 반드시 건설적인 대안을 제시하여 사람을 살리는 언어를 써야 합니다.",
        "묵직한 존재감과 정의감을 바탕으로 말보다 행동으로 가치를 증명하며, 시작한 일은 끝을 보는 굳건함이 당신의 무기입니다. <b>설계 엔지니어, 기술직 공무원, 법 집행관, 보안 아키텍트, 혹은 하드웨어 엔지니어</b>로서 실질적인 성과를 내십시오. 진심이 담긴 짧은 칭찬으로 주변의 온도를 높이는 것이 성공의 비결입니다.",
        "정리 능력이 신적인 수준이며, 무질서한 상태에서 완벽한 시스템과 질서를 구축하여 군더더기 없는 성과를 내는 능력이 탁월합니다. <b>데이터 엔지니어, 생산 자동화 전문가, 공정 설계자, 아카이브 빌더, 혹은 전문 정리 수납 전문가</b>로서 두각을 나타내십시오. 10%의 불완전함을 인정하고 정서적 안정을 찾는 법을 배워야 합니다.",
        "강직한 성품과 법과 원칙을 수호하는 엄격함으로 사회적 정의를 실현하고 질서를 세우는 데 최고의 재능을 보입니다. <b>판사, 인권 변호사, 윤리 심의관, 규제 대응 전문가, 혹은 노무사</b>로서 정의의 파수꾼이 되십시오. 세상에는 수많은 회색 지대가 있음을 인정하고 포용하는 유연함이 당신의 품격을 높여줍니다.",
        "스스로에게 매우 엄격하여 높은 성취를 이루는 전문가적 소질이 다분하며, 완벽한 기술력을 보유하는 것에 강한 자부심을 가집니다. <b>나노 공학자, 정밀 물리학자, 고위 기술 고문, 전문 장인, 혹은 정밀 시계 세공사</b>로서 대가의 반열에 오르십시오. 끊임없이 새로운 분야를 배우고 자신을 리셋하여 낡은 칼이 되지 않도록 벼르십시오.",
        "카리스마 있는 지도자로서 대규모 조직을 효율적으로 통제하고 목표를 달성하게 만드는 능력이 강점입니다. <b>군 장교, 경찰 간부, 대기업 임원, 작전 사령관, 혹은 경호 전문가</b>로서 큰 권력을 쥐게 될 때 가장 강력합니다. 부드러움 속에 예리함을 감추는 '외유내강'의 리더십을 완성하는 것이 당신의 과업입니다.",
        "장인 정신이 빛나고 아주 미세한 디테일까지 잡아내는 예리한 안목으로 명품과 같은 결과를 만들어내는 데 탁월합니다. <b>보석 세공사, 정밀 기계 공학자, 안과 전문의, 마이크로 분석가, 혹은 덴탈 테크니션</b>으로서 독보적 성취를 거두십시오. 주기적으로 일에서 벗어나 거시적인 트렌드를 살피는 안목을 길러야 합니다.",
        "고결한 성품으로 원칙을 지키며, 조직 내의 비리와 모순을 바로잡아 투명한 환경을 만드는 강직한 내부 수호자입니다. <b>준법 감시인(Compliance), 화이트 해커, 투명 경영 위원, 공공 기관 감사관, 혹은 사이버 수사관</b>으로서 활약하십시오. 10%의 유연성을 발휘해 타협할 줄 아는 정치적 감각이 필요합니다.",
        "이성적이고 차가운 지성으로 데이터를 분석하여 리스크를 예측하고 해답을 제시하는 냉철한 브레인의 소유자입니다. <b>금융 리스크 분석가, 알고리즘 개발자, 기술 가치 평가사, 범죄 심리 분석가, 혹은 프로파일러</b>로서 전문성을 발휘하십시오. 사람의 마음 데이터를 읽는 능력을 길러 정서적 공감을 보강하는 것이 과업입니다.",
        "믿음직하고 견고한 인물로서 어떤 풍파에도 흔들리지 않고 시스템을 수호하며 자신의 가치를 지켜내는 힘이 강점입니다. <b>인프라 설계자, 금속 공예가, 정보 보안 총괄, 하드웨어 엔지니어, 혹은 기계 설비 전문가</b>로서 세상을 지탱하십시오. 최신 기술과 디지털 트렌드를 적극 수용하여 자신의 가치를 현대화하십시오.",
        "천하의 명검과 같은 날카로운 재능과 강렬한 카리스마로 세상의 복잡한 문제를 단번에 베어내는 거물급 운명을 타고났습니다. <b>특수직 전문가, 칼럼니스트, 기업 전략 고문, 고도의 사정 기관원, 혹은 전문 외과 의사</b>로서 큰 획을 그으십시오. 뜨거운 열정과 단단한 기초를 먼저 닦아 당신의 예리함을 바르게 쓰는 것이 필수입니다."
    ],
    "수(水)": [
        "지혜로운 현자의 통찰력과 보이지 않는 흐름을 읽는 깊은 사고력은 복잡한 상황에서도 해답을 찾아내는 당신만의 재능입니다. <b>전략 컨설턴트, 미래 학자, 정책 기획자, 사상가, 혹은 대형 서점 운영자</b>로서 지혜를 전파하십시오. 머릿속의 지도를 즉각 행동으로 옮기는 기계적인 루틴을 구축하는 것이 당신의 핵심 과업입니다.",
        "천부적인 상상력과 인간 심연을 꿰뚫는 감수성으로 사람들의 마음을 움직이는 독창적인 서사를 만들어내는 능력이 뛰어납니다. <b>소설가, 심리학자, 시나리오 작가, 예술 심리 치료사, 혹은 작사가</b>로서 자아를 실현하십시오. 명확한 경제적 목표를 세우고 발을 지면에 붙여 현실 감각을 유지하는 것이 중요합니다.",
        "철학적인 사고와 심오한 대화를 통해 진리를 탐구하며, 인간관계의 본질을 이해하고 타인에게 조언하는 자질이 뛰어납니다. <b>정신과 의사, 종교 교육가, 전문 상담가, 라이프 코치, 혹은 대학 교수</b>로서 타인의 영혼을 치유하십시오. 자신의 결론을 명확히 문서화하고 단호하게 표현하는 것이 성공의 비결입니다.",
        "어떤 환경에도 물처럼 유연하게 적응하며 경계를 넘나드는 정보 수집력과 외교적 수완은 당신을 주인공으로 만듭니다. <b>외교관, 국제 무역가, 다국적 기업 협상가, 해외 시장 개척자, 혹은 글로벌 통번역가</b>로서 활약하십시오. 자신만의 변치 않는 핵심 가치를 설정하고 중심을 지키는 것이 당신의 과업입니다.",
        "직관력이 경이로워 미래의 기운을 남보다 먼저 읽어내는 영적인 통찰력이 당신의 삶을 안내하는 무기입니다. <b>트렌드 워처, 점성술 분석가, 수석 데이터 과학자, 미래 전략 수립가, 혹은 투자 분석가</b>로서 비전을 제시하십시오. 직관을 구체적인 서비스나 상품으로 구조화하여 사회적 기여도를 높여야 합니다.",
        "복잡한 이해관계를 조율하고 중재하여 최적의 합의점을 찾아내는 부드러운 카리스마와 포용력은 당신의 자산입니다. <b>노사 조정관, 국제 기구 행정관, 오케스트라 지휘자, 총괄 코디네이터, 혹은 노동 전문 변호사</b>로서 역량을 발휘하십시오. 권한을 타인에게 위임하는 '덜어내기' 기술을 배우는 것이 과업입니다.",
        "깊이 있는 성찰과 고결한 정신을 바탕으로 세상을 관조하며 진리를 탐구하는 정신적 지조가 당신을 특별하게 만듭니다. <b>종교학자, 시인, 명상 센터 운영자, 독립 서점 대표, 혹은 공간 대여/에어비앤비 호스트</b>로서 휴식을 제공하십시오. 규칙적인 생활로 뇌를 리셋하고 현실의 안정을 최우선으로 관리해야 합니다.",
        "섬세한 완벽주의와 방대한 데이터를 아카이빙하고 분류하는 치밀함은 가치를 영구히 보존하는 신의 손과 같습니다. <b>수석 아카이브 관리자, 기록 과학자, 고문서 해독가, 빅데이터 큐레이터, 혹은 디지털 포렌식 전문가</b>로서 활약하십시오. '완벽보다 완결'을 모토로 삼아 실행의 속도를 높이는 것이 과업입니다.",
        "고요한 카리스마로 사람들을 조용히 설득하고 따르게 만드는 내밀한 리더십과 신비로운 매력은 당신의 힘입니다. <b>정신적 리더, 전문 연구소장, 특수 분야 교수, 영성 지도자, 혹은 한의사</b>로서 추앙받는 삶을 사십시오. 자신의 비전을 대중의 언어로 번역하여 따뜻하게 전달하는 소통 기술을 연마하십시오.",
        "상대의 무의식을 읽어내는 능력이 예리하여 마음의 병을 진단하고 본질적인 치유책을 제시하는 것이 당신의 사명입니다. <b>정신 분석가, 타로 상담 마스터, 임상 심리사, 영성 상담가, 혹은 최면 치료사</b>로서 고통받는 이들을 구하십시오. 우울감이 올 땐 생각보다 몸을 먼저 움직이는 기계적 루틴이 필수입니다.",
        "고결한 지혜를 공유하여 대중을 계몽하고 사회의 정신적 품격을 높일 귀한 운명을 타고났습니다. <b>대학교수, 대중 강연가, 지식 유튜버, 베스트셀러 작가, 혹은 문화 평론가</b>로서 지식 나눔을 실천하십시오. 자신의 지식을 체계화하여 사회적 부와 연결시키는 선순환 구조를 만드는 것이 당신의 과업입니다.",
        "지혜의 화신으로서 무궁무진한 잠재력과 사고의 자유로움은 당신을 시대를 앞서가는 천재적인 인물로 만듭니다. <b>자유 예술가, 명상 전문가, 창의적 철학자, 정신 세계 탐험가, 혹은 미래형 라이프스타일 제안자</b>로서 한계를 시험하십시오. 삶의 질서를 엄격히 유지하는 '중용의 미덕'을 실천하는 것이 최종 과업입니다."
    ]
};

const enPrescriptions12 = {
    "목(木)": [
        "Your unrivaled self-reliance to forge a path in any environment and your relentless drive toward goals are your most powerful weapons. As a pioneer with strong momentum, you will achieve immense success as a <b>Venture Founder, New Business Director, Architect, or Hair Designer</b>. Treating external feedback as essential data to refine your designs is your core mission.",
        "Your creative vitality, characterized by a positive influence that moves hearts and a never-ending curiosity, is truly exceptional. You find your true calling as an <b>Educational Reformer, Professional Lecturer, Startup Accelerator, or Content Strategist</b>. Systematizing your routines to master the art of completion is the key to your lifelong success.",
        "An unshakeable conviction like a deeply rooted tree and a benevolent leadership are the most noble assets of your soul. You are perfectly suited for roles as an <b>HR Specialist, NGO Leader, Licensed Realtor, or Culture Consultant</b>. Clarifying the boundaries between public and private to protect your sovereignty is your most significant task.",
        "A resilient vital energy and an innovative sense that instantly reverses stagnant atmospheres act as the engine of your success. You can unleash your full potential as a <b>Creative Director, Space Designer, Exhibition Planner, or Brand Strategist</b>. Learning to digitize and distribute your energy efficiently is essential for your growth.",
        "Your unshakeable independence and the ability to pierce through the essence of complex systems are strengths no one can replicate. You will produce extraordinary results as a <b>Technical Architect, Chief Researcher, System Engineer, or Data Modeler</b>. Break out of isolation and build strategic networks to share your value with the world.",
        "A powerful energy of coexistence that benefits the world and a compassionate heart that discoveries and nurtures potential in others sustain your destiny. You find true value as a <b>Management Consultant, Career Mentor, Psychological Counselor, or Life Coach</b>. Developing the firm decisiveness to say 'No' is the only way to protect your sovereignty.",
        "An extraordinary ability to absorb knowledge like a sponge and the power to systematize vast information into practical value define your intellectual brilliance. You will be recognized as a peerless expert as a <b>Scholar, Investment Analyst, Quant Manager, or Knowledge Curator</b>. Developing the practical sense to convert knowledge into capital is your core mission.",
        "As a noble idealist who protects moral values, your artistic sensitivity and the depth of your philosophical insight are your most beautiful strengths. You find your greatest happiness as an <b>Artist, NGO Leader, Philosophy Lecturer, or Public Campaigner</b>. Confidently proving your worth using the language of the masses is your primary mission.",
        "A majestic drive and the charisma to command an entire organization propulsion you to high positions. You are destined to lead as a <b>Political Leader, CEO, High-level Administrator, or Strategic Commander</b>. Practicing the tolerance to look after those in lower positions is the ultimate key to your enduring success.",
        "Your intuition for opportunity is sharp, and you possess an instinctively developed managerial sense to infinitely amplify assets. You can acquire great wealth and honor as a <b>Strategic Investor, Venture Capitalist, Professional Negotiator, or Luxury Asset Sales Expert</b>. Learning to calculate the value of coexistence over mere victory will expand your fortune.",
        "Precision in drawing perfect blueprints and a natural talent for summarizing complex situations into simple systems are your greatest weapons. You will stand out as an <b>Urban Planner, SCM Strategist, Software Architect, or Process Optimization Expert</b>. By cutting away the unnecessary and focusing on the essence, your work becomes a masterpiece.",
        "Born with the majestic energy to create an entire ecosystem and the artistic direction to complete grand discourses, you are a natural-born master. You will reach your prime as an <b>Artistic Director, Executive Producer, Film Director, or Content Director</b>. Learning the patience to respect and wait for the pace of others is your final mission."
    ],
    "화(火)": [
        "Explosive passion and an overwhelming energy, coupled with an exceptional marketing sense that fascinates an audience in an instant, are your powerful talents. You will find your strongest luck as a <b>Performance Marketer, Copywriter, Ad Planner, or Stylist</b>. Learning to control your burning heart with cold, consistent routines is your core task.",
        "A genius of inspiration and a visual expressionist who proposes values that never existed before, your creative power makes your soul shine. You excel as a <b>Webtoon Artist, Visual Artist, Game Designer, or YouTuber</b>. Mastering the persistence to archive every thought and reach the finish line is what will complete your destiny.",
        "Brilliant eloquence and quick wit that make you the protagonist in any setting define your social charisma as your primary weapon. You find your luck rising rapidly as a <b>Broadcaster, Announcer, Corporate Spokesperson, or Motivational Speaker</b>. Recognizing that silence is sometimes the most powerful message is your key to authority.",
        "An intellectual curiosity and info-processing speed like the speed of light allow you to capture global shifts faster than anyone else. You are advantaged in pioneering unique domains as a <b>Data Journalist, Tech Reporter, Market Researcher, or Trend Analyst</b>. Digging one well deeply to build irreplaceable authority is your path to success.",
        "Charming charisma and a distinct presence make you a powerful leader who can mobilize people toward grand goals. You are fully capable of achieving greatness as a <b>Sales Director, Election Strategist, or Global Brand Ambassador</b>. Establishing authority through hard data while practicing the virtue of humility is your mission.",
        "Rich sensitivity and an exceptional aesthetic eye for giving beautiful form to invisible values enrich your life. You earn fame as an <b>Interior Designer, Art Director, Gallery Director, or Beauty Director</b>. Managing your own financial foundation with a realistic sense is what will guarantee your creative freedom.",
        "The adaptability and versatility to transform yourself instantly in shifting environments make your vital energy your greatest edge. You find success as a <b>Digital Nomad, Travel Writer, Global Field Researcher, or Airbnb Host</b>. Dropping a firm philosophical anchor to define your baseline is your most important life mission.",
        "Possessing an immortal will and a burning passion to turn seemingly impossible goals into reality, your overwhelming execution is your hallmark. You are destined for high-stakes roles as a <b>Hedge Fund Manager, Restructuring Expert, Fire Official, or Police Leader</b>. Proving that gaining hearts is the true success is your final mission.",
        "The noble honor of enlightening the world and a sublime will to realize justice from a respected position are your greatest strengths. You are perfectly suited for an honorable life as a <b>University Professor, Public Official, Chief Justice, or Medical Director</b>. Mastering the intentional pause to cool your inner heat is directly linked to your well-being.",
        "A master of communication with a natural gift for acting as a hub that connects people and opportunities across a vast network. You excel as a <b>Global Partnership Head, Agent, Community Leader, or Space Rental Entrepreneur</b>. Finding depth through solitude and self-reflection behind the spotlight is your core task.",
        "High responsibility and the star power to brand yourself and elevate organizational prestige are your outstanding strengths. You reach your peak as a <b>Brand Director, Fashion Designer, Image Consultant, or Luxury Marketing Executive</b>. Facing cold self-evaluation as data to constantly reinvent yourself is your mission.",
        "Combining charisma and intellect, you excel at leading public thought and proposing new standards through critical insight. You hold unshakeable authority as a <b>Social Critic, Columnist, Legal Analyst, or Political Commentator</b>. Becoming a magnanimous leader who nurtures the weak is your ultimate life mission."
    ],
    "토(토)": [
        "Reliable and trustworthy, your heavy presence stabilizes the core of an organization and provides emotional security to those around you. You reveal your true value as a <b>Banker, Public Official, Administrative Lead, or Office Strategist</b>. Trying one new thing daily to prevent your luck from stagnating is your core mission.",
        "Possessing immense tolerance and patience like the earth that nurtures all life, your healing energy for group harmony is remarkable. You excel in noble roles as a <b>Medical Administrator, Social Worker, Nursing Manager, or Psychotherapist</b>. Practicing healthy egoism by organizing your own space first is essential for your survival.",
        "Acting as a bridge between people with a warm heart, you possess the emotional capacity to mediate conflict and create peace. You shine at the center of social bonds as an <b>HR Manager, Wedding Planner, Human Rights Activist, or Event Coordinator</b>. Setting clear interpersonal boundaries to protect your energy is your success secret.",
        "Extreme prudence and meticulous preparation allow you to create failure-proof plans and manage valuable archives. You will be recognized for peerless expertise as a <b>Museum Curator, Archivist, QA Analyst, or Professional Librarian</b>. Practicing the launch of projects when they are 80% ready is your primary task.",
        "A pillar of responsibility, you build absolute trust through unshakeable principles and the grit to keep every promise made. You earn great honor as an <b>Auditor, Security Expert, Safety Director, or Asset Custodian</b>. Your value doubles when you become a mediator who accepts new ideas without bias.",
        "Possessing a natural talent for resource allocation, you excel at maintaining system stability while maximizing efficiency. Your value is proven at the peak of practice as a <b>COO, Logistics Expert, SCM Manager, or Urban Administrator</b>. Reading hidden trends behind data to upgrade systems is your unique contribution.",
        "Unrivaled persistence and a master's spirit allow you to complete long-term projects through sheer willpower. You are capable of becoming a legend as a <b>Long-term Project PM, Lead Engineer, Civil Designer, or Master Artisan</b>. Rewarding yourself for small achievements to maintain joy is a necessary habit.",
        "Performing best in stable environments, your realistic eye for judging and protecting the value of assets or real estate is superb. Wealth accumulates rapidly as a <b>Real Estate Developer, Property Owner, Rental Entrepreneur, or Trust Manager</b>. Developing the courage to take calculated risks is your path to growth.",
        "Firm convictions and a heavy presence make you a spiritual pillar who provides direction and unshakeable values to the masses. You earn deep respect as a <b>Thinker, Policy Advisor, Strategy Expert, or Constitutional Judge</b>. Sharing your philosophy through kind language to gain public consensus is your mission.",
        "Dignified prudence and an eye for traditional values allow you to distinguish and preserve the true worth of precious assets. You earn a noble reputation as an <b>Antiques Appraiser, Auction Manager, Art Market Analyst, or Heritage Specialist</b>. Training your animal instinct to move rapidly at critical moments is essential.",
        "Precise in management and calculation to the decimal point, your rational and meticulous operation maximizes organizational efficiency. You shine as an <b>Accountant, Tax Analyst, Data Scientist, or Budget Director</b>. Recognizing the need for warmth to increase emotional investment in others is your task.",
        "Destined to embrace the world like the earth, you are a true leader with a noble mission to nurture people and realize social values. You reach your zenith as a <b>Philanthropy Chairperson, University President, Social Entrepreneur, or Community Leader</b>. Seeking advice from wise mentors to remain flexible is your key to success."
    ],
    "금(金)": [
        "A natural competitor with unrivaled decisiveness, you possess the valiant leader spirit to solve problems first in times of crisis. You explode into success as a <b>Prosecutor, Police Executive, Pro Athlete, or Surgeon</b>. Adding a drop of humanity to your rigid principles to gain mass support is your lifelong mission.",
        "Analytical and critical abilities of a divine level allow you to identify errors and pursue absolute system perfection. You hold unrivaled authority as an <b>Auditor, Literary Critic, Quality Control Head, or Security Specialist</b>. Transforming critical language into constructive alternatives that heal is your mission.",
        "Possessing a heavy presence and strong justice, you prove your worth through action rather than words and push through until the end. You earn deep respect as a <b>Design Engineer, Technical Official, Law Enforcement Officer, or Hardware Architect</b>. Raising the organizational temperature with sincere, concise praise is your success secret.",
        "Exceptional organizational skills allow you to build perfect systems and order from chaos, producing lean and efficient results. You stand out in organizing the world as a <b>Data Engineer, Automation Expert, Process Architect, or Archive Builder</b>. Accepting 10% of imperfection to find mental peace is your core task.",
        "Righteous and rigid, you excel at realizing social justice and establishing order through strict adherence to laws and principles. You reach great honor as a <b>Judge, Human Rights Lawyer, Ethics Auditor, or Regulatory Expert</b>. Recognizing and embracing the gray areas of the world will elevate your dignity.",
        "Strict with yourself to achieve mastery, you possess elite technical skills and take great pride in your expert achievements. You are capable of reaching grandmaster status as a <b>Nano-Engineer, Precision Physicist, Master Technician, or Senior Tech Advisor</b>. Constantly resetting yourself by learning new fields is your key to staying sharp.",
        "Charismatic leadership and organization management reminiscent of a military commander allow you to control large groups efficiently. You are most powerful as a <b>Military Officer, Corporate Executive, Operations Commander, or Security Director</b>. Mastering the leadership of softness concealing sharpness is your core task.",
        "Brilliant craftsmanship and a keen eye for the smallest details allow you to produce masterpiece results with unmatched quality. You achieve unique success as a <b>Goldsmith, Precision Engineer, Ophthalmologist, or Micro-Analyst</b>. Periodically stepping back to observe macro trends is essential for your long-term vision.",
        "A noble guardian who practices justice and corrects corruption within organizations to create a transparent environment. You shine as a <b>Compliance Officer, White Hat Hacker, Public Inspector, or Cyber Investigator</b>. Developing the political sense to compromise when necessary will help you achieve your grand goals.",
        "A rational brain analyzing vast data to predict future risks and propose optimal solutions with cold, sharp intellect. You earn a grand reputation as a <b>Financial Risk Analyst, Algorithm Developer, Criminologist, or Profiler</b>. Developing the skill to read the human hearts behind the data is your primary task.",
        "Reliable and solid, you protect systems against any storm and maintain your values with unshakeable fortitude and presence. You thrive in sustaining the world as an <b>Infrastructure Architect, Metal Artist, Info Security Head, or Hardware Engineer</b>. Modernizing your values by integrating digital trends is your mission.",
        "Destined to be a legendary blade with sharp talent and intense charisma to cut through global problems and propose new directions. You are capable of making history as a <b>Special Operations Expert, Strategy Advisor, High-level Investigator, or Specialist Surgeon</b>. Building a solid foundation first is the essential condition for your success."
    ],
    "수(水)": [
        "The insight of a wise sage and the ability to read invisible flows are your unique talents for finding essential answers. You find great luck as a <b>Strategy Consultant, Futurist, Policy Planner, or Thinker</b>. Building mechanical routines to turn your grand mental maps into immediate action is your core mission.",
        "A gift for storytelling that moves hearts with a natural imagination and sensitivity to the human abyss creates narratives that didn't exist before. Your fame grows as a <b>Novelist, Psychologist, Screenwriter, Art Therapist, or Lyricist</b>. Grounding your feet by setting clear financial goals is essential to maintain your reality.",
        "Exploring truth through philosophical thought and profound dialogue, you possess the natural qualities of a counselor who understands nature. You shine brightest healing souls as a <b>Psychiatrist, Religious Educator, Professional Counselor, or Life Coach</b>. Documenting your conclusions clearly to express them firmly is your success secret.",
        "Adaptable like liquid in any environment, your diplomatic skill and ability to collect info across boundaries make you a global protagonist. You are optimized for borderless activity as a <b>Diplomat, International Trader, Multinational Negotiator, or Market Pioneer</b>. Setting an unshakeable anchor of core values is your mission.",
        "Possessing an uncanny ability to read future energies and invisible flows ahead of others, your spiritual insight is your guide. You leave a great legacy as a <b>Trend Watcher, Astrology Analyst, Chief Data Scientist, or Investment Strategist</b>. Structuring your intuition into concrete products or services is your task.",
        "Soft charisma and the tolerance to mediate complex interests and find optimal consensus are irreplaceable skills for balance. You reach your peak as a <b>Labor Mediator, International Administrator, Lead Coordinator, or Specialized Attorney</b>. Mastering the art of unloading by delegating authority is your core task.",
        "Pursuing deep reflection and a noble spiritual world, your strength is prioritizing truth over worldly greed as you contemplate life. You find fulfillment as a <b>Religion Scholar, Poet, Meditation Center CEO, or Airbnb/Rental Entrepreneur</b>. Prioritizing physical stability and a strict routine is essential for your peace.",
        "Delicate perfectionism and the meticulousness to archive and classify vast data act as the hand of god in preserving information. You will occupy a page of history as a <b>Chief Archivist, Records Scientist, Paleographer, or Big Data Curator</b>. Increasing your execution speed with the motto 'Completion over Perfection' is your mission.",
        "The owner of quiet, mysterious charisma who silently persuades others, your internal leadership is the force that elevates you. You are perfectly suited for a life of respect as a <b>Spiritual Leader, Lab Director, Specialized Professor, or Medical Professional</b>. Translating your grand vision into warm, accessible language is your mission.",
        "Exceptional at reading the subconscious and diagnosing deep-seated emotional issues, spiritual healing is your innate calling. Your destiny opens as you save others as a <b>Psychoanalyst, Tarot Master, Clinical Psychologist, or Hypnotherapist</b>. Triggering mechanical body movement as soon as mood drops is your essential routine.",
        "Destined to share noble wisdom and enlighten the masses, your words possess the power to change others' lives. You achieve wealth when you share knowledge as a <b>University Professor, Public Speaker, Knowledge YouTuber, or Bestselling Author</b>. Connecting your insights with social wealth is your core task.",
        "An incarnation of wisdom with infinite potential and a freedom of thought that transcends any constraint, you are a genius ahead of your time. You find greatness as a <b>Free Artist, Meditation Expert, Creative Philosopher, or Lifestyle Innovator</b>. Maintaining life order through the virtue of moderation is your final mission."
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

const solarTermData = {
    0: { 
        ko: "만물이 생명의 불꽃을 깊은 곳에 응축하여 추위를 견디는 시기입니다. 이 시기에 태어난 당신은 어떤 극한의 환경에서도 본연의 빛을 잃지 않는 고결한 생존 본능과 집념을 부여받았습니다. 겉으로는 침착하고 고요해 보이지만 내면에는 거대한 판을 흔들 수 있는 뜨거운 에너지가 용트림하고 있는 외유내강의 전형입니다.", 
        en: "A time when all things condense the flame of life deep within to endure the cold. Born during this period, you are endowed with a noble survival instinct and tenacity that never loses its brilliance. While appearing calm and poised, you are the epitome of inner strength, harboring a fiery energy capable of shifting grand scales." 
    },
    1: { 
        ko: "차가운 땅을 뚫고 태초의 생명이 솟아오르는 시작의 기운이 지배하는 때입니다. 당신은 무(無)에서 유(有)를 설계하는 탁월한 선구자적 감각을 지녔으며, 남들이 보지 못하는 가능성을 먼저 발견하고 발을 내딛는 과감한 추진력이 삶의 모든 영역에 긍정적인 파동을 일으킵니다.", 
        en: "A time dominated by the quickening of primordial life piercing through the frozen earth. You possess an exceptional pioneering sense for designing something from nothing, and your bold drive to discover and step into unseen possibilities creates positive waves in all areas of your life." 
    },
    2: { 
        ko: "겨울의 얼음이 녹아 대지를 적시는 유연한 생명력이 흐르는 시기입니다. 이 기운을 타고난 당신은 굳어있는 상황을 부드럽게 해소하는 천부적인 중재 능력을 갖추었으며, 어떤 환경에서도 물처럼 유연하게 적응하여 최선의 결과를 도출해내는 탁월한 처세와 공감 능력이 돋보입니다.", 
        en: "A period where the melting winter ice flows as flexible vital energy into the earth. Born with this vibration, you have a natural talent for resolving rigid situations and an outstanding ability to adapt like water in any environment, drawing out the best results through social wit and empathy." 
    },
    3: { 
        ko: "잠들었던 대지가 천둥소리에 깨어나 폭발적으로 도약하는 역동적인 때입니다. 당신은 정체된 분위기를 단숨에 반전시키는 강력한 혁신가적 기질을 가졌으며, 남들이 망설일 때 가장 먼저 행동으로 옮기는 용기는 주변 사람들을 이끌고 새로운 차원의 변화를 만들어내는 원동력이 됩니다.", 
        en: "A dynamic time when the dormant earth awakens with a thunderous roar to take an explosive leap. You possess a powerful innovator's temperament that can reverse stagnation in an instant, and your courage to act while others hesitate serves as the engine that leads people and creates new dimensions of change." 
    },
    4: { 
        ko: "밤과 낮의 길이가 같아지며 목(木)의 에너지가 가장 순수하고 균형 있게 집중되는 정점의 시기입니다. 당신은 굽히지 않는 소신과 타인을 성장시키는 고귀한 교육적 자질을 타고났으며, 본인의 가치관을 명확히 세워 흔들림 없이 나아가는 강직한 성품은 만인의 귀감이 됩니다.", 
        en: "The peak moment when day and night are equal, and Wood energy is concentrated in its purest balance. You are born with unyielding convictions and a noble gift for nurturing growth in others, and your rigid integrity in pursuing clear values makes you a role model for all." 
    },
    5: { 
        ko: "하늘과 땅이 맑아지며 만물의 형체가 선명해지는 청명한 이상이 펼쳐지는 때입니다. 당신은 티 없이 맑은 통찰력과 높은 도덕적 기준을 부여받았으며, 복잡한 세상의 본질을 꿰뚫어 보고 가장 정의로운 길을 제시하는 현명한 가이드로서의 역할을 수행하게 됩니다.", 
        en: "A time of clear ideals when the sky and earth become lucid, and the forms of all things become distinct. Endowed with untainted insight and high moral standards, you act as a wise guide who pierces through the complexity of the world to show the most righteous path." 
    },
    6: { 
        ko: "봄의 생명력이 대지의 풍요로 변모하며 실질적인 결실을 준비하는 지혜가 모이는 시기입니다. 당신은 성장의 에너지를 현실적인 자산과 성과로 바꾸는 탁월한 경영 능력을 가졌으며, 변화하는 환경에 맞춰 본인을 최적화하는 유연한 감각은 당신을 어떤 분야에서도 승리하게 만듭니다.", 
        en: "A period where spring vitality transforms into earthly abundance, gathering the wisdom to prepare for practical fruits. You possess exceptional managerial skills to turn growth energy into realistic assets and achievements, and your flexible sense for optimizing yourself ensures victory in any field." 
    },
    7: { 
        ko: "초여름의 싱그러운 열기가 만물을 일깨우며 이상향을 향해 돌진하는 시기입니다. 당신은 주변의 기운을 한순간에 고조시키는 뜨거운 열정과 긍정적인 파동을 지녔으며, 존재만으로도 조직에 활력을 불어넣고 대중을 매료시키는 태양과 같은 강력한 존재감을 발휘합니다.", 
        en: "A time when the fresh heat of early summer awakens all things to dash toward a utopia. You possess a burning passion and positive vibrations that instantly elevate the energy around you, commanding a powerful presence like the sun that energizes organizations and fascinates the masses." 
    },
    8: { 
        ko: "만물이 자라나 조금씩 채워지기 시작하며 내실을 기하는 충만한 때입니다. 당신은 성급한 성공보다 차근차근 기초를 다져 거대한 성을 쌓는 신중함과 끈기를 가졌으며, 성실함을 바탕으로 쌓아 올린 당신의 명성과 자산은 세월이 흘러도 결코 흔들리지 않는 견고함을 자랑합니다.", 
        en: "A fulfilling time when all things grow and begin to fill, focusing on internal substance. You possess the prudence and grit to build a grand castle by strengthening foundations step by step rather than seeking haste, and the reputation and assets you build on sincerity remain unshakeable over time." 
    },
    9: { 
        ko: "씨를 뿌리고 거둘 때를 아는 명확한 통찰과 몰입이 필요한 시기입니다. 당신은 한 가지 목표가 정해지면 놀라운 집중력을 발휘하여 정밀한 결과물을 만들어내는 전문가적 기질을 가졌으며, 본인의 분야에서 대체 불가능한 권위를 구축하여 세상을 이끄는 핵심 인재로 활동합니다.", 
        en: "A period requiring clear insight and immersion, knowing exactly when to sow and reap. Once a goal is set, you demonstrate incredible focus and a professional temperament to produce precision results, establishing irreplaceable authority and acting as a core talent who leads the world." 
    },
    10: { 
        ko: "태양의 에너지가 정점에 달해 세상을 가장 밝게 비추는 광채의 시기입니다. 당신은 화려한 자기표현과 빠른 상황 판단력으로 좌중을 압도하는 선천적인 스타성을 부여받았으며, 창의적인 시각으로 세상을 재해석하고 본인의 이름을 브랜드화하여 큰 명예를 얻는 운명을 타고났습니다.", 
        en: "The moment of radiance when solar energy reaches its zenith, lighting up the world at its brightest. Endowed with innate star quality that overwhelms an audience through brilliant self-expression and fast judgment, you are destined to achieve grand honor by rebranding the world with your creative vision." 
    },
    11: { 
        ko: "본격적인 무더위 속에서 대지가 열기를 견디며 결실을 익혀가는 인내의 시기입니다. 당신은 어떤 극한의 압박 속에서도 평정심을 유지하며 장기적인 프로젝트를 완수해내는 무서운 집념을 가졌으며, 고난을 거칠수록 더욱 원숙해지는 인격은 많은 이들의 존경과 신뢰를 이끌어냅니다.", 
        en: "A time of endurance where the earth bears the heat to ripen its fruits. You possess fearsome grit to complete long-term projects while maintaining composure under extreme pressure, and your character, which matures through hardship, draws deep respect and trust from those around you." 
    },
    12: { 
        ko: "뜨거운 열기가 단단한 대지를 구워 귀한 그릇을 만드는 형국입니다. 당신은 화려한 발산보다는 실질적인 가치를 보존하고 지키는 묵직한 힘을 가졌으며, 위기의 순간에 흩어진 에너지를 하나로 모으는 중재 능력이 탁월하여 공동체의 중심을 잡는 기둥 역할을 수행합니다.", 
        en: "A state where intense heat bakes the hard earth into a precious vessel. You possess the heavy power to preserve and protect practical values rather than flashy expression, and your exceptional ability to unify scattered energy during crisis makes you the pillar that stabilizes your community." 
    },
    13: { 
        ko: "서늘한 가을바람과 함께 불필요한 것을 쳐내고 본질만을 남기는 단호함의 시기입니다. 당신은 세상을 냉철하게 분석하여 자신만의 질서를 세우는 심판자의 기운을 타고났으며, 정의롭지 못한 것에 타협하지 않는 강직함은 당신을 어떤 유혹에도 흔들리지 않는 인물로 만듭니다.", 
        en: "A time of decisiveness, where the cool autumn wind cuts away the unnecessary to leave only the essence. Born with the aura of a judge who establishes order through cold analysis, your rigid integrity and refusal to compromise with injustice make you unshakeable against any temptation." 
    },
    14: { 
        ko: "더위가 가시고 만물이 평온을 찾으며 질서를 회복하는 시기입니다. 당신은 복잡한 감정에 휘둘리지 않는 차가운 이성과 정확한 판단력을 가졌으며, 흐트러진 시스템을 바로잡고 효율적인 환경을 구축하는 데 탁월한 능력을 발휘하여 조직의 효율을 극대화하는 브레인 역할을 합니다.", 
        en: "A period when heat fades and all things find peace, restoring order. Possessing a cold rationality and accurate judgment detached from emotion, you excel at optimizing disorganized systems and building efficient environments, serving as the brain that maximizes organizational performance." 
    },
    15: { 
        ko: "맑은 이슬이 맺히듯 고결한 정신과 도덕적 완벽함을 지향하는 때입니다. 당신은 섬세한 감수성과 높은 미적 안목으로 세상을 조율하는 예술적 기질을 가졌으며, 명품과 같은 완성도를 추구하는 당신의 손길은 평범한 것을 특별한 가치로 변화시키는 힘이 있습니다.", 
        en: "A moment aiming for noble spirit and moral perfection, like the forming of pure dew. You possess an artistic temperament to harmonize the world with delicate sensitivity and a high aesthetic eye, and your pursuit of masterpiece-level quality has the power to transform the ordinary into the extraordinary." 
    },
    16: { 
        ko: "금(金)의 기운이 가장 선명하게 집중되어 만물이 견고한 결실을 맺는 정점의 시기입니다. 당신은 약속을 생명처럼 여기는 강직한 신용과 티 없는 이성으로 완벽한 성취를 일구어내며, 본인의 전문성을 바탕으로 쌓아 올린 사회적 위치는 누구도 넘볼 수 없는 단단함을 가집니다.", 
        en: "The peak moment when Metal energy is clearly concentrated, and all things bear solid fruit. You achieve perfect success through crystal-clear reason and integrity that treats promises as sacred, and the social status you build on your expertise possesses an impregnable solidity." 
    },
    17: { 
        ko: "찬 이슬이 맺히며 지혜가 응축되어 사물의 깊은 속을 꿰뚫는 시기입니다. 당신은 인간의 내면을 깊이 있게 파고드는 분석력과 미래를 예측하는 통찰력을 부여받았으며, 세월이 흐를수록 깊어지는 당신의 내공은 주변 사람들에게 묵직하고 신비로운 카리스마로 다가갑니다.", 
        en: "A time when wisdom condenses like cold dew, piercing through the hidden depths of all things. Endowed with the analytical power to dig deep into the human psyche and the foresight to predict the future, your internal power deepens over time, manifesting as a heavy and mysterious charisma." 
    },
    18: { 
        ko: "서리가 내리기 전 만물을 갈무리하여 대지의 뿌리로 에너지를 모으는 시기입니다. 당신은 방대한 데이터를 분류하고 핵심적인 가치를 보존하는 능력이 탁월하며, 조직의 보이지 않는 뿌리 역할을 수행하며 세상을 지탱하는 전문가로서 명성을 떨치게 됩니다.", 
        en: "A period of gathering all things before the frost hits, focusing energy into the roots of the earth. You excel at classifying vast data and preserving core values, earning fame as a specialist who serves as the invisible root and sustains the world from the shadows." 
    },
    19: { 
        ko: "만물이 활동을 멈추고 깊은 휴식에 들어가는 수(水)의 태동기입니다. 당신은 조용하지만 심오한 지혜를 가졌으며, 보이지 않는 곳에서 거대한 판을 설계하는 전략가적 기질이 좋습니다. 당신의 생각은 깊고 넓어 위기의 순간에 모두를 구원할 결정적인 해답을 제시합니다.", 
        en: "The quickening of Water energy, as all things stop activity to enter deep rest. Though quiet, you possess profound wisdom and a master strategist's temperament for designing grand schemes from the shadows. Your thoughts are so deep and vast that you provide the decisive answers to save everyone in times of crisis." 
    },
    20: { 
        ko: "첫눈처럼 과거의 허물을 덮고 본질적인 가치에만 집중하게 하는 정화의 때입니다. 당신은 정적인 환경에서 최고의 창의력을 발휘하는 맑은 영혼을 가졌으며, 불필요한 군더더기를 제거하고 핵심만을 남기는 당신의 정리 능력은 세상을 더 단순하고 아름답게 변화시킵니다.", 
        en: "A time of purification that covers the flaws of the past like the first snow, focusing only on essential values. You possess a pure soul that reaches its creative peak in quiet environments, and your ability to remove clutter to leave only the core transforms the world into something simpler and more beautiful." 
    },
    21: { 
        ko: "세상을 하얗게 덮는 눈처럼 모든 차별을 없애고 만물을 품어 안는 자비의 시기입니다. 당신은 무한한 포용력과 인덕을 지녔으며, 보이지 않는 곳에서 묵묵히 선행을 실천하는 고귀한 성품은 상처받은 사람들의 마음을 치유하고 공동체를 하나로 묶는 강력한 힘이 됩니다.", 
        en: "A time of compassion that embraces all without discrimination, like snow covering the landscape in white. Possessing infinite tolerance and social virtue, your noble nature of practicing good deeds from the shadows becomes a powerful force that heals wounded hearts and unifies communities." 
    },
    22: { 
        ko: "어둠이 가장 깊은 곳에서 새로운 빛의 탄생을 예고하는 수(水)의 정점입니다. 당신은 인간의 심연을 꿰뚫는 철학적 사유와 위기 상황에서 정답을 찾아내는 비범한 능력을 타고났으며, 당신이 세상에 던지는 한마디는 길 잃은 영혼들에게 이정표가 되는 선구자적 가치를 지닙니다.", 
        en: "The peak of Water, heralding the birth of a new light from the deepest darkness. Born with a philosophical mind that pierces the human abyss and an extraordinary ability to find answers in crisis, the words you cast upon the world serve as a pioneering lighthouse for lost souls." 
    },
    23: { 
        ko: "맹추위 속에서도 봄의 시작을 준비하며 과거를 완전히 정돈하는 정화와 도약의 때입니다. 당신은 완숙한 지혜와 강인한 생명력을 동시에 보유하고 있으며, 한 사이클을 마무리하고 새로운 차원으로 넘어가기 위한 거대한 폭발력을 내면에 숨기고 있는 신비로운 존재입니다.", 
        en: "A time of purification and leaps, preparing for the start of spring amidst the great cold while completely organizing the past. You possess both mature wisdom and resilient vitality, a mysterious being hiding a massive explosive potential to conclude one cycle and leap into the next dimension." 
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
    20: "<b>수(水)의 범람과 이상</b> 거대한 바다와 같은 에너지가 잠재되어 있으나 이를 가둘 제방(土)이 부족한 형국입니다. 지능은 비상하나 실행력이 분산되는 특성이 있습니다. <b>장점</b>은 원대한 이상과 넓은 포용력이지만, <b>단점</b>으로는 에너지가 흩어져 중도 좌절할 기운이 서려 있습니다. 목(木)의 실행 에너지를 빌려 거대한 목표를 아주 작은 단위로 쪼개어 정복하십시오.",
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
    79: "<b>수(수)의 은둔과 지혜</b> 깊은 골짜기의 샘물처럼 지혜는 깊으나 알아주는 이가 없어 고독하게 세월을 보내는 기운입니다. <b>장점</b>은 명예를 탐하지 않는 고결함과 전문 지식이지만, <b>단점</b>으로는 토(土)의 자기 홍보력이 약해 능력을 썩히기 쉽습니다. 당신의 깊은 통찰을 세상과 나누십시오. 적극적으로 홍보할 때 당신의 명성이 비로소 흐릅니다.",
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
