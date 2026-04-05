const elements = ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"];

const i18n = {
    ko: {
        title: "수리성명학 데이터 분석", desc: "81수리 체계 성명의 파동과 탄생 시계열 지표를 바탕으로 당신의 시그니처 에너지 구조가 도출됩니다.",
        nameLabel: "성명", birthLabel: "양력 8자리(19901208)", hourLabel: "생시(시간) 선택", btn: "리포트 생성하기",
        loadSeal: "분석중", loadTitle: "당신의 운명 에너지를 조합 중...", loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", tab2Btn: "전생 기록", tab3Btn: "내세 예약",
        sec1: "📊 운명 시그니처 분석", sec2: "💊 에너지 균형 처방",
        pastDest: "전생 활동 중심지", pastJob: "전생의 직업", pastHomework: "전생의 과업",
        nextDest: "내세 활동 중심지", nextObj: "내세의 직업", nextMission: "내세의 임무",
        logicTitle: "◈ Destiny Lab 분석 방법론",
        l1Title: "〰️ 소리 주파수 분석 (Name Vibrations)",
        l1Desc: "성명을 고유 주파수를 가진 에너지로 변환합니다. 발음 오행이 개인의 기운에 간섭하는 데이터를 수치화했습니다.",
        l2Title: "🗓️ 시계열 지표 대입 (Solar Term Time-series)",
        l2Desc: "탄생 순간의 배경을 '선천적 변수'로 설정합니다. 탄생 순간의 에너지 밀도를 분석하여 당신의 근원을 도출합니다.",
        l3Title: "🧬 81수리 상호작용 엔진",
        l3Desc: "선천적 기운과 후천적 성명 에너지의 조합 알고리즘으로 현생-전생-내세의 데이터를 연산합니다."
    },
    en: {
        title: "Suri Numerology Analysis", desc: "Analyzes the 81-numerology system based on name vibrations and birth indicators.",
        nameLabel: "Name", birthLabel: "Birthdate (YYYYMMDD)", hourLabel: "Select Birth Hour", btn: "Generate Report",
        loadSeal: "Analyzing", loadTitle: "Combining your destiny energy...", loadDesc: "Please wait a moment.",
        tab1Btn: "Current Life", tab2Btn: "Past Life", tab3Btn: "Afterlife",
        sec1: "📊 Destiny Signature", sec2: "💊 Balance Remedy",
        pastDest: "Past Activity Center", pastJob: "Past Occupation", pastHomework: "Past Mission",
        nextDest: "Future Domain", nextObj: "Future Occupation", nextMission: "Future Assignment",
        logicTitle: "◈ Destiny Lab Methodology",
        l1Title: "〰️ Name Vibrations",
        l1Desc: "Converts names into energy with unique frequencies. We quantify how phonetic elements interfere with an individual's aura.",
        l2Title: "🗓️ Solar Term Time-series",
        l2Desc: "Sets the seasonal background at birth as an 'innate variable.' We derive your primal environment by analyzing 24 solar terms.",
        l3Title: "🧬 81-Suri Interaction Engine",
        l3Desc: "Calculates past and future scenarios using algorithms derived from the 'Harmony & Conflict' of innate and acquired energies."
    }
};


const hangulElements = { 'ㄱ':'목(木)','ㄲ':'목(木)','ㄴ':'화(火)','ㄷ':'화(火)','ㄸ':'화(火)','ㄹ':'화(火)','ㅁ':'토(土)','ㅂ':'토(土)','ㅃ':'토(土)','ㅅ':'금(金)','ㅆ':'금(金)','ㅇ':'토(土)','ㅈ':'금(金)','ㅉ':'금(金)','ㅊ':'금(金)','ㅋ':'목(木)','ㅌ':'화(火)','ㅍ':'토(土)','ㅎ':'토(土)' };
const alphabetElements = { 'A':'목(木)','B':'목(木)','C':'화(火)','D':'화(火)','E':'토(土)','F':'토(土)','G':'금(金)','H':'금(金)','I':'수(水)','J':'수(水)','K':'목(木)','L':'목(木)','M':'화(火)','N':'화(火)','O':'토(土)','P':'토(土)','Q':'금(金)','R':'금(金)','S':'수(水)','T':'수(水)','U':'목(木)','V':'목(木)','W':'화(火)','X':'화(火)','Y':'토(土)','Z':'토(土)' };

// 2. [📜 현생의 과업] 핵심 기질 (한국어 30종 x 5오행)
const birthCoreKo = {
    "목(木)": [
        "당신의 근원은 정체된 환경을 뚫고 솟아오르는 목(木)의 독립심과 자생력을 영혼의 코어로 품고 있습니다. 이 나무의 기운은 타인의 간섭을 밀어내고 스스로 주도권을 쥐어 개척하는 힘을 발휘하지만, 지나친 독단은 주변과의 마찰을 부를 수 있습니다.",
        "당신이 타고난 목(木)의 근본 에너지는 멈추지 않는 확장과 실전적 지도력을 상징하며 삶의 동력이 됩니다. 이론보다 현장에서 직접 발로 뛰며 성과를 내는 나무의 생명력을 즐기며, 완벽주의를 조금 내려놓을 때 비로소 유연한 성장이 가능합니다.",
        "사주 시계열 데이터상 당신은 목(木)의 상황 연결 능력을 통해 질서를 잡는 강직한 중재 에너지를 타고났습니다. 명확한 기준을 세우는 나무의 직진성이 탁월하지만, 무질서하거나 감정적 호소에만 휘둘리는 상황에서는 큰 스트레스를 받습니다.",
        "당신의 영혼은 극한의 압박 속에서도 해답을 찾아내 뚫고 나오는 목(木)의 강인한 생존력을 상징합니다. 시련을 성장의 발판으로 삼는 나무의 해결사적 기질이 있으나, 때로는 타인의 도움을 거부하는 고립된 사고에 갇히기도 합니다.",
        "당신의 코어는 사물의 본질을 설계하고 원칙을 고수하는 목(木)의 논리적 설계 능력을 의미합니다. 이성적 판단이 매우 빠르고 나무처럼 곧게 뻗어나가려 하지만, 비논리적인 감정을 강요받는 상황에서는 체질적인 거부감을 느낍니다.",
        "당신은 타인의 잠재력을 발견하여 올바른 길로 안내하는 목(木)의 네비게이터 기질을 타고났습니다. 사람의 강점을 나무의 가지처럼 즉각 파악하지만, 변화 의지가 없는 사람을 상대할 때는 에너지가 급격히 소진됩니다.",
        "당신은 정보를 체계화하여 실용적 자산으로 전환하는 목(木)의 비즈니스적 지혜를 품고 있습니다. 가치 있는 정보를 나무의 뿌리처럼 선별하는 데 능하나, 실효성 없는 이론 공부에는 흥미를 느끼지 못합니다.",
        "당신은 고결한 이상을 실현하며 사회에 강력한 영향력을 주고자 하는 목(木)의 상향 에너지를 가졌습니다. 명예를 중시하며 정의로운 아름다움을 추구하지만, 저속한 이기주의 앞에서는 나무의 강직함 때문에 분노를 숨기지 못합니다.",
        "당신의 에너지는 조직 전체의 흐름을 한눈에 장악하고 통제하는 목(木)의 거시적 리더십을 의미합니다. 큰 판을 짜는 나무의 기상이 능숙하지만, 사소한 잡무에 매몰되는 환경에서는 본연의 빛을 잃습니다.",
        "당신은 찰나의 기회를 포착하여 승리로 이끄는 목(木)의 예리한 직관을 품고 태어났습니다. 리스크를 즐기는 나무의 승부사적 기질이 있으나, 결과가 느린 업무에서는 쉽게 인내심을 잃는 단점이 있습니다.",
        "당신의 기질은 흔들리지 않는 중심을 바탕으로 군더더기를 걷어내는 목(木)의 정밀 분석력을 의미합니다. 결점 없는 시스템을 선호하며, 나무처럼 곧게 뻗지 못하고 타협하는 적당주의와는 절대 공존할 수 없습니다.",
        "당신은 보이지 않는 곳에서 거대한 시스템을 지탱하는 목(木)의 인내심을 가진 소유자입니다. 내실 있는 성장을 추구하는 나무의 속성이 강하지만, 겉만 화려하고 기초가 부실한 환경에서는 심한 불안감을 느낍니다.",
        "당신은 극한의 역경을 견디고 기어이 성공의 싹을 틔우는 목(木)의 강력한 자생력을 가졌습니다. 시련 속에서 단단해지는 나무 타입이나, 타인에게 지나치게 엄격한 잣대를 들이대는 경향이 있습니다.",
        "당신은 결실의 가치를 미리 파악하고 질서를 수호하는 목(木)의 냉철한 판단력을 가졌습니다. 투명성을 지키는 나무의 수호자 성향이 강해 공정성이 결여된 조직에서는 버티기 힘들어합니다.",
        "당신은 파편화된 정보를 하나로 묶어 가치를 극대화하는 목(木)의 갈무리 능력을 타고났습니다. 무질서 속에서 규칙을 찾아내는 나무의 마디와 같은 지혜가 능하며, 마무리가 불분명한 일 처리를 극도로 싫어합니다.",
        "당신은 미세한 틈조차 놓치지 않는 목(木)의 장인 정신과 하이엔드 감각을 타고났습니다. 오차 없는 정밀함을 추구하는 나무의 섬세함을 추구하지만, 디테일을 무시하는 투박한 방식에는 적응하지 못합니다.",
        "당신의 에너지는 사회적 균형을 수호하고 공정한 가치를 실천하는 목(木)의 정의감을 상징합니다. 약속과 규칙을 준수하는 나무의 고결함이 있으나, 권력에 의해 원칙이 훼손되는 상황에서는 극심한 정신적 고통을 겪습니다.",
        "당신은 서늘한 지성으로 다가올 위기를 대비하는 목(木)의 치밀한 전략가입니다. 리스크를 예측하는 나무의 안목이 뛰어나지만, 대책 없는 낙관주의자들과는 소통에 큰 어려움을 겪습니다.",
        "당신은 조직의 기강을 수호하며 부정을 경계하는 목(木)의 강인한 가디언 기질을 가졌습니다. 신념이 확고한 나무의 성품을 지녔지만, 때로는 자신의 신념을 굽혀야 하는 상황에서 큰 자괴감을 느낍니다.",
        "당신은 인간사와 비즈니스 이면에 숨겨진 본질을 꿰뚫어 보는 목(木)의 통찰력을 가졌습니다. 근본 원인을 나무의 뿌리부터 탐구하는 것을 즐기며, 피상적인 대화만 오가는 얕은 관계는 지양합니다.",
        "당신은 사람의 마음을 움직여 위기 상황에서 희망을 주는 목(木)의 섬세한 조력자의 힘을 가졌습니다. 정서적 교감을 중시하는 나무의 온기를 가졌으나, 인간미 없는 기계적 소통 환경에서는 숨이 막혀 합니다.",
        "당신은 세상을 깨우는 지식을 보급하고 포용하는 목(木)의 거대한 교육자적 기운을 품고 있습니다. 지혜를 나누는 리더십이 탁월하며, 배움에 대한 열망이 없는 메마른 환경에서는 회의감을 느낍니다.",
        "당신은 어둠 속에서 가능성을 발견하고 새로운 패러다임을 제안하는 목(木)의 선지자적 에너지를 가졌습니다. 창의적 대안 제시에 능한 나무의 유연함이 있으나, 보수적이고 완고한 집단과는 사사건건 충돌합니다.",
        "당신은 극한의 시련 속에서도 실질적인 성취를 일구어내는 목(木)의 집념 어린 실행가입니다. 불가능에 도전하는 나무의 생명력을 즐기지만, 의지가 약한 사람들과의 협업은 고역으로 여깁니다.",
        "당신은 조용하지만 묵직하게 상황 전체를 관망하며 기회를 노리는 목(木)의 매복 명수입니다. 드러내지 않는 나무의 강인함이 있으나, 자신을 과도하게 포장해야 하는 자리는 체질적으로 기피합니다.",
        "당신은 주변의 에너지를 흡수하여 자신의 것으로 만드는 목(木)의 놀라운 학습 능력을 가졌습니다. 적응력이 뛰어나고 성장이 빠르지만, 자신만의 고유한 나무 색깔을 잃어버릴까 하는 두려움이 늘 존재합니다.",
        "당신은 타협하지 않는 순수성을 바탕으로 한 분야의 정점을 찍는 목(木)의 구도자적 기질이 있습니다. 명예를 중시하는 대나무의 절개가 있으나, 세속적인 욕망만 가득한 곳에서는 환멸을 느끼기 쉽습니다.",
        "당신은 감각적인 직관으로 트렌드의 앞면을 읽어내는 목(木)의 현대적 감각을 타고났습니다. 변화무쌍한 환경을 즐기는 어린 나무의 기상이 있으나, 정해진 루틴에 갇힌 반복 업무는 영혼을 갉아먹는 일이라 생각합니다.",
        "당신은 타인의 고통을 자신의 것처럼 느끼는 목(木)의 깊은 자비심을 가진 소유자입니다. 헌신적 리더십을 발휘하는 나무의 품이 넓지만, 자신의 호의를 이용하려는 무례한 사람들에게 큰 상처를 받습니다.",
        "당신은 무에서 유를 창조하는 목(木)의 창업가적 기질과 근원적인 생명력을 품고 있습니다. 개척 정신이 투철한 나무의 에너지가 강하나, 기반이 이미 닦여있는 안정된 조직에서는 오히려 권태를 느낍니다."
    ],
    "화(火)": [
        "당신의 영혼은 만물을 깨우는 태양의 열정과 화(火)의 확산 에너지를 품고 태어났습니다. 주변을 밝히는 존재감이 뚜렷한 불의 기운은 사람들을 매료시키지만, 감정 조절이 안 될 때 스스로를 태워버리는 경향이 있습니다.",
        "당신은 끊임없이 변화하고 소통하는 화(火)의 불꽃 성질을 가진 인격체입니다. 시각적인 감각과 직관이 뛰어나 트렌드를 선도하는 불의 기질이 있으나, 결과가 더디면 금세 흥미를 잃고 열정이 식어버리는 단점이 있습니다.",
        "사주 데이터상 당신은 어둠 속의 등불처럼 지혜를 전파하는 화(火)의 화려한 지성을 타고났습니다. 논리적인 변론에 능하고 예절을 중시하는 불의 예의가 있으나, 무례하거나 무지한 상대를 만날 때 극도의 혐오감을 느깁니다.",
        "당신은 과열된 분위기를 단숨에 반전시키는 화(火)의 강력한 폭발력을 소유하고 있습니다. 위기 상황에서 전면에 나서는 불의 용기가 가상하나, 가끔 앞뒤 가리지 않는 성급함으로 일을 그르치기도 합니다.",
        "당신의 기질은 문명과 예술을 꽃피우는 화(火)의 화려한 표현력을 의미합니다. 심미안이 탁월하고 세련된 삶을 추구하는 불의 화려함이 있으나, 현실적인 경제 관념이 부족해 화려한 겉모습 뒤에 빈곤을 숨길 우려가 있습니다.",
        "당신은 사람과 사람 사이의 온기를 더하는 화(火)의 사교 명수입니다. 모임의 중심에서 활력을 불어넣는 불의 활발함이 강하지만, 정작 본인은 타인의 시선에 지나치게 신경 쓰느라 진정한 자아를 잃어버릴 때가 많습니다.",
        "당신은 지적인 탐구심과 종교적인 경건함을 동시에 지닌 화(火)의 촛불과 같은 존재입니다. 내면 성찰에 능한 불의 심성을 가졌으나, 외부의 공격적인 자극에 심리적으로 매우 취약한 면모를 보이기도 합니다.",
        "당신의 코어는 세상을 변혁시키는 화(火)의 혁명적인 뜨거움을 상징합니다. 부조리에 맞서는 불의 투쟁심이 강하지만, 유연함이 부족하여 아군마저 적으로 돌리는 강직함이 독이 되어 돌아오기도 합니다.",
        "당신은 정보의 확산과 미디어적 감각이 매우 뛰어난 화(火)의 등불입니다. 소식을 알리고 가공하는 불의 기민함에 능하나, 깊이 있는 고찰보다는 넓고 얕은 지식에 머무르기 쉬운 단점이 있습니다.",
        "당신은 순수하고 투명한 열정으로 한 목표에 매진하는 화(火)의 집중력을 소유하고 있습니다. 순수한 몰입이 장점인 불의 에너지이나, 목표가 사라졌을 때 찾아오는 허무함과 우울감의 깊이가 매우 깊습니다.",
        "당신의 에너지는 무대를 장악하고 대중을 압도하는 화(火)의 스타성을 상징합니다. 자신을 드러내는 데 거리낌이 없는 불의 발산력이 있으나, 주목받지 못하는 상황에서는 존재의 의미를 잃고 방황합니다.",
        "당신은 차가운 냉기를 녹이는 온화함과 포용력을 지닌 화(火)의 난로와 같은 사람입니다. 주변을 편안하게 하는 불의 온기를 가졌으나, 자신의 정당한 권리를 주장해야 할 때도 양보만 하다가 손해를 봅니다.",
        "당신은 상상을 현실로 시각화하는 능력이 탁월한 화(火)의 비주얼 리더입니다. 공간과 이미지 연출에 능한 불의 감각이 있으나, 보이지 않는 시스템의 디테일을 놓치는 경향이 있습니다.",
        "당신의 기질은 타오르는 불꽃처럼 경계를 넘나드는 화(火)의 자유로운 영혼을 의미합니다. 구속을 싫어하며 역동적인 삶을 추구하는 불의 성질이 있으나, 한곳에 뿌리를 내리지 못하는 불안정함이 따릅니다.",
        "당신은 감성이 풍부하고 드라마틱한 서사를 창조하는 화(火)의 스토리텔러입니다. 공감을 이끌어내는 힘이 큰 불의 전파력이 장점이지만, 감정의 과잉으로 인해 객관적인 판단력을 잃을 때가 잦습니다.",
        "당신의 코어는 어떠한 역경도 빛으로 승화시키는 화(火)의 숭고한 희생 정신을 상징합니다. 공동체를 위해 헌신하는 불의 따뜻함이 있으나, 자신의 희생이 당연시될 때 내면에서 조용히 무너집니다.",
        "당신은 날카로운 비판과 통찰로 사회의 모순을 꼬집는 화(火)의 지식인적 기질이 있습니다. 논쟁에서 지지 않는 예리한 불의 이성이 있으나, 정작 대안 없는 비난에 머무를 위험이 존재합니다.",
        "당신은 뜨거운 열정 속에 차가운 계산을 숨긴 지략가적 화(火) 에너지의 소유자입니다. 승부처를 아는 영리한 불의 감각이 있으나, 사람을 도구로 보는 태도가 주변을 떠나게 만들 수 있습니다.",
        "당신은 보이지 않는 주파수를 읽어내는 화(火)의 영적인 감각과 직관이 발달했습니다. 예지력이 뛰어난 불의 통찰이 있으나, 현실 세계의 복잡한 절차와 행정에는 무관심하거나 무능하기 쉽습니다.",
        "당신의 기질은 차분하게 열기를 갈무리하여 결실로 인도하는 화(火)의 인내 불꽃입니다. 성숙한 리더십을 보이는 불의 절제력이 있지만, 변화가 필요한 시점에도 과거의 방식을 고수하려 합니다.",
        "당신은 한 번 정한 길을 끝까지 타오르게 하는 화(火)의 지독한 집념을 가진 소유자입니다. 인간 승리의 주인공이 되기 좋은 불의 기상을 가졌으나, 주변 사람들을 자신의 속도에 맞추느라 혹사시킵니다.",
        "당신은 따뜻한 온기로 얼어붙은 마음을 녹이는 화(火)의 치유자적 에너지를 가졌습니다. 상담과 위로에 능한 불의 자애로움이 있으나, 정작 자신의 상처는 돌보지 못해 마음의 병을 키우기도 합니다.",
        "당신의 코어는 화려함 속에 고독을 즐기는 화(火)의 고고한 예술가적 성품을 의미합니다. 독보적 세계관이 있는 불의 예술성이 있으나, 대중과의 소통 접점을 찾지 못해 외로움을 자처합니다.",
        "당신은 찰나의 영감을 포착하여 비즈니스로 연결하는 감각적인 화(火)의 실전가입니다. 돈의 흐름을 읽는 불의 눈이 밝으나, 도덕적 가치보다 수익을 앞세우는 유혹에 취약한 면모가 있습니다.",
        "당신은 조직의 기강을 바로잡고 열정적인 문화를 전파하는 화(火)의 행동 대장입니다. 추진력이 압도적인 불의 엔진을 가졌으나, 섬세한 조율이 필요한 업무에서는 거친 일 처리로 원성을 삽니다.",
        "당신의 에너지는 무에서 유를 창조하는 화(火)의 창조주 불꽃과 같습니다. 기획력이 탁월한 불의 아이디어가 장점이지만, 아이디어 단계에서 멈추고 실행을 타인에게 떠넘기는 경향이 있습니다.",
        "당신은 소수 정예와 깊은 유대를 맺고 그들을 지키는 화(火)의 의리 불꽃입니다. 내 편에게는 한없이 따뜻한 불이지만, 적이라고 판단되는 순간 무자비하게 태워버리는 냉혹함이 있습니다.",
        "당신의 기질은 어떠한 환경에도 굴하지 않고 자신을 빛내는 화(火)의 자생적 스타성입니다. 밑바닥에서도 다시 일어서는 불의 생명력이 있으나, 자존심이 너무 강해 남의 도움을 받지 못합니다.",
        "당신은 세상을 관조하며 진리를 전파하는 구도자적 화(火) 기운을 가졌습니다. 지혜의 깊이가 깊은 불의 통찰이 장점이나, 현실의 경제적 결핍에 무감각하여 주변을 힘들게 할 수 있습니다.",
        "당신은 가장 어두운 순간에 태어난 희망의 불씨처럼 화(火)의 강인한 생명력을 가졌습니다. 시련이 클수록 빛나는 불꽃이지만, 평온한 일상에서는 오히려 매너리즘에 빠져 방황합니다."
    ],
    "토(土)": [
        "당신은 모든 생명을 품고 균형을 잡아주는 토(土)의 묵직한 대지 기운을 코어로 가졌습니다. 신용을 목숨처럼 여기는 흙의 신의가 두텁지만, 변화를 극도로 싫어하는 보수성이 발목을 잡을 수 있습니다.",
        "당신의 영혼은 만물을 양육하고 사람을 키워내는 토(土)의 비옥한 토양 성질입니다. 포용력과 인내심이 장점인 흙의 마음을 가졌으나, 거절을 못 하는 성격 탓에 타인의 짐까지 짊어지고 고통받습니다.",
        "사주 데이터상 당신은 흔들리지 않는 신념으로 거대 프로젝트의 기틀을 닦는 토(土)의 설계자입니다. 계획성이 철저한 흙의 견고함이 장점이나, 돌발 상황이 닥치면 유연하게 대처하지 못하고 얼어버립니다.",
        "당신은 갈등을 흡수하고 평화를 정착시키는 토(土)의 중재자적 기질이 매우 강합니다. 화합을 이끌어내는 흙의 포용력이 크지만, 정작 자신의 목소리를 내야 할 때 침묵하여 권리를 놓치기도 합니다.",
        "당신의 코어는 비효율을 걷어내고 시스템을 안정적으로 운영하는 토(土)의 실무 관리 대가입니다. 내실을 기하는 흙의 속성이 강하지만, 새로운 기술이나 트렌드 도입에는 보수적인 면모를 보입니다.",
        "당신은 한 우물을 파서 깊이를 완성하는 토(土)의 집념 어린 전문가적 기질을 타고났습니다. 책임감이 압도적인 흙의 성실함이 무기이나, 시야가 좁아져 전체의 흐름을 놓치는 맹점이 있습니다.",
        "당신은 자산의 숨겨진 가치를 읽어내고 부의 토대를 닦는 토(土)의 안목 있는 수완가입니다. 경제적 감각이 좋은 흙의 실속이 장점이나, 모험보다는 안정을 택해 큰 기회를 놓칠 때가 많습니다.",
        "당신의 기질은 자신만의 철학을 확립하여 대중의 나침반이 되어주는 토(土)의 묵직한 멘토입니다. 존경받는 흙의 삶을 추구하나, 가끔은 자신의 생각이 정답이라고 고집하는 독선이 나타납니다.",
        "당신은 전통의 가치를 보존하고 시대의 유산을 지켜내는 토(土)의 안목 있는 수호자입니다. 본질 수호에 능한 흙의 고집이 있으나, 구태의연한 방식에 집착하여 시대 뒤떨어진다는 평을 듣기도 합니다.",
        "당신의 에너지는 감정에 휘둘리지 않고 자원을 오차 없이 관리하는 토(土)의 치밀한 브레인입니다. 숫자와 통계에 강한 흙의 이성이 장점이나, 인간적인 감정의 변수를 무시하는 차가움이 있습니다.",
        "당신은 소외된 이들을 품고 세상의 온도를 높이는 토(土)의 따뜻한 사회적 혁신가입니다. 박애주의적인 흙의 성품을 가졌으나, 정작 자신의 가족이나 가까운 사람들에게는 소홀하기 쉽습니다.",
        "당신의 코어는 어떠한 압박에도 흔들리지 않는 토(土)의 강철 같은 의지와 안전의 파수꾼입니다. 질서 수호에 사명감을 느끼는 흙의 기질이 강하나, 규정 위반에 대해 지나치게 결벽에 가까운 태도를 보입니다.",
        "당신은 물자의 흐름을 최적화하고 공급망을 장악하는 토(土)의 물류적 지혜를 가진 소유자입니다. 효율 극대화에 능한 흙의 실용주의가 장점이나, 동료들의 정서적 피로도를 계산하지 못해 갈등을 빚습니다.",
        "당신은 방대한 자료를 체계화하고 영구히 보존하는 토(土)의 지식 창고지기입니다. 아카이빙 능력이 탁월한 흙의 보존력이 무기이나, 자료 수집에만 매몰되어 정작 실행이 늦어지는 경우가 많습니다.",
        "당신은 섬세한 손길로 가치를 창조하고 아름다움을 선물하는 토(土)의 장인적 살림꾼입니다. 기술적 완성도가 높은 흙의 정교함이 장점이지만, 대중적인 시장성보다는 자신의 만족을 우선시하는 경향이 있습니다.",
        "당신의 기질은 첨예한 이해관계를 상생의 길로 이끄는 토(土)의 평화 협상 달인입니다. 공평한 분배를 중시하는 흙의 정의감을 가졌으나, 모두를 만족시키려다 자신만 희생하는 결론을 맺기 일쑤입니다.",
        "당신은 대지 속 보석을 찾아내듯 탁월한 심미안과 가치 판단력을 가진 토(土)의 인재입니다. 감정 안목이 좋은 흙의 감각이 무기이나, 의심이 많아 좋은 인연이나 기회 앞에서 주춤하다 놓치기도 합니다.",
        "당신의 에너지는 국가와 조직의 기틀을 바로잡고 원칙을 세우는 토(土)의 법치 수호자입니다. 기강 확립에 능한 흙의 단호함이 있지만, 예외 없는 적용 탓에 융통성 없다는 원성을 자주 듣습니다.",
        "당신은 세상을 지탱하는 근본 원리를 탐구하고 지식의 기초를 다지는 토(土)의 학자적 구도자입니다. 지적 깊이가 깊은 흙의 사유가 장점이나, 현실 경제 활동에는 무감각하여 생활고를 겪을 위험이 있습니다.",
        "당신의 코어는 사람들의 불안을 잠재우고 평온을 선사하는 토(土)의 정신적 안식처입니다. 치유와 상담에 능한 흙의 포용력이 있으나, 타인의 부정적인 감정에 쉽게 전염되어 번아웃을 겪기도 합니다.",
        "당신은 수많은 사람을 교육하고 키워내는 토(土)의 거대한 교육 공동체 기둥입니다. 인프라 구축에 능한 흙의 기반이 장점이지만, 자신의 철학을 강요하는 꼰대적 기질이 나타나지 않도록 경계해야 합니다.",
        "당신의 기질은 보이지 않는 곳에서 거대한 판을 짜고 성공시키는 토(土)의 뛰어난 지략가입니다. 배후 설계에 능한 흙의 전략이 장점이나, 전면에 나서지 못해 자신의 공로를 빼앗기는 경우가 잦습니다.",
        "당신은 시련 속에서도 변치 않는 신뢰를 바탕으로 조직의 근간을 지키는 토(土)의 가디언입니다. 의리가 두터운 흙의 성품을 가졌으나, 믿었던 사람에게 배신당했을 때 받는 타격이 남들보다 수십 배 큽니다.",
        "당신의 에너지는 실질적인 부를 창출하기 위해 땅을 일구는 토(土)의 실전적 경제가입니다. 근면 성실함이 무기인 흙의 노동력이 장점이나, 창의적인 발상보다 노동의 가치에만 집중하는 한계가 있습니다.",
        "당신은 겉은 부드러우나 속은 누구보다 단단한 토(土)의 외유내강 전형입니다. 위기에서 진가를 발휘하는 흙의 뚝심이 있으나, 평소에는 지나치게 자신을 낮추어 저평가받는 경향이 있습니다.",
        "당신의 코어는 혼란 속에서도 평정심을 유지하며 상황을 정리하는 토(土)의 침착한 해결사입니다. 수습 능력이 좋은 흙의 뒤처리가 장점이나, 일이 터지기 전에는 먼저 움직이지 않는 나태함이 있습니다.",
        "당신은 보수적인 틀 안에서 가장 현대적인 가치를 뽑아내는 토(土)의 온고지신 리더입니다. 조화 능력이 좋은 흙의 융합력이 무기이나, 양쪽의 눈치를 보느라 결정이 지체되는 단점이 있습니다.",
        "당신의 기질은 묵묵히 자신의 자리를 지키며 때를 기다리는 토(土)의 신중한 승부사입니다. 기다림의 미학을 아는 흙의 인내가 장점이나, 타이밍을 너무 늦게 잡아 큰 기회를 놓치기도 합니다.",
        "당신은 사소한 것에서 커다란 가치를 만들어내는 토(土)의 소박하지만 강한 생명력입니다. 실속 관리에 능한 흙의 실리가 무기이나, 큰 기상보다는 눈앞의 현실에 안주하기 쉬운 면이 있습니다.",
        "당신의 에너지는 만물의 고통을 흡수하여 거름으로 만드는 토(土)의 숭고한 대지 성품입니다. 희생적 리더십을 보이는 흙의 덕망이 있으나, 스스로를 돌보지 않아 건강을 잃을 위험이 큽니다."
    ],
    "금(金)": [
        "당신은 시련 속에서 단단하게 벼려진 날카로운 금(金)의 결단력과 결기를 코어로 품고 태어났습니다. 혼란을 잠재우고 질서를 바로잡는 칼의 기운이 강하지만, 냉정함이 지나쳐 주변에 상처를 줍니다.",
        "당신의 영혼은 새 기운을 정돈하고 부정한 것을 걸러내는 금(金)의 완벽주의적 정의감입니다. 청렴함이 무기인 서슬 퍼런 칼날의 기운이 있으나, 비판적인 시각이 강해 적을 많이 만드는 단점이 있습니다.",
        "사주 데이터상 당신은 말보다 행동으로 가치를 증명하는 금(金)의 실천가 무기를 가졌습니다. 실무 능력이 압도적인 도끼의 추진력이 장점이나, 감성적인 소통이 필요한 곳에서도 원칙만 내세워 갈등을 빚습니다.",
        "당신은 무질서 속에서 핵심 규칙을 찾아내는 금(金)의 논리적 분석력을 소유하고 있습니다. 시스템 정비에 능한 송곳 같은 기밀함이 장점이나, 데이터 없는 감정적 주장을 경멸하여 불통의 리더가 되기 쉽습니다.",
        "당신의 코어는 사회적 약속을 철저히 지키는 금(金)의 흔들림 없는 정의 파수꾼입니다. 명예 수호에 사명감을 느끼는 바위의 견고함이 있으나, 회색 지대를 인정하지 않는 흑백논리로 주변을 피곤하게 합니다.",
        "당신은 한 치의 오차도 허용하지 않는 금(金)의 정교한 손길과 숙련된 장인의 에너지를 타고났습니다. 명품을 완성하는 보석의 섬세함이 있으나, 기술의 가치를 모르는 저급한 환경에서는 자폭하듯 무너집니다.",
        "당신의 기질은 조직을 효율적으로 통솔하여 승리로 이끄는 금(金)의 카리스마 넘치는 지휘관입니다. 기강 확립에 능한 칼날의 위엄이 장점이나, 우유부단한 부하들을 공개적으로 무안 주는 독설가 기질이 있습니다.",
        "당신은 미세한 결함까지 찾아내어 완벽을 완성하는 금(金)의 디테일 화신입니다. 현미경적 정밀함이 무기인 핀셋 같은 기질이 있으나, 사소한 것에 목숨을 걸다 큰 판을 놓치는 우를 범하기도 합니다.",
        "당신의 에너지는 조직 내 모순을 바로잡고 청렴한 가치를 수호하는 금(金)의 고결한 감찰관입니다. 부정한 관행을 거부하는 강철의 결기가 있으나, 윗물과 타협하지 못해 권력에서 밀려나기 쉽습니다.",
        "당신은 방대한 수치를 분석하여 리스크를 예측하는 금(金)의 냉철한 전략가입니다. 승기를 잡는 지략이 좋은 원석의 무게감이 장점이나, 숫자 뒤에 숨겨진 사람의 마음을 읽지 못해 인심을 잃습니다.",
        "당신의 코어는 어떠한 풍파에도 시스템의 본질을 지켜내는 금(金)의 강력한 보안 방어력입니다. 기술 수호에 능한 장벽의 성질이 강하지만, 새로운 기술 트렌드 유입에 폐쇄적일 수 있다는 리스크가 있습니다.",
        "당신은 스스로를 채찍질하며 한계에 도전하는 금(金)의 불굴 의지와 강인한 정신력의 소유자입니다. 투사적 기질이 있는 강철의 혼이 장점이나, 타인에게도 고통스러운 기준을 강요하는 폭군이 되기도 합니다.",
        "당신은 위기 상황에서 생명을 구하고 혼란을 잠재우는 금(金)의 결단력 있는 해결사입니다. 긴박함 속에서 빛나는 명검의 기운이 있으나, 평온하고 지루한 일상에서는 삶의 의미를 찾지 못해 방황합니다.",
        "당신의 기질은 옥석을 정확히 구분하여 잠재력에 투자하는 금(金)의 공정한 평가자입니다. 미래 보석을 발굴하는 안목이 탁월하지만, 당장의 수익이 나지 않는 가치에는 냉담하게 돌아서는 면모가 있습니다.",
        "당신의 에너지는 복잡한 현상을 단순화하여 명쾌한 해결책을 제시하는 금(金)의 지혜로운 혁신가입니다. 프로세스 개선에 능한 가위 같은 절단력이 장점이나, 관료주의적 절차를 무시해 조직과 충돌합니다.",
        "당신은 누구에게도 휘둘리지 않고 신념을 관철하는 금(金)의 강력한 독립심 소유자입니다. 개척자 정신이 투철한 무쇠의 기질이 장점이나, 자신의 강직함이 독선이 되어 고립된 제국을 건설할 위험이 있습니다.",
        "당신의 코어는 법과 정의를 엄격히 집행하여 사회 품격을 수호하는 금(金)의 고결한 공직자 기운입니다. 질서 확립에 능한 법전의 엄격함이 있으나, 법의 자구에만 매몰되어 인본주의를 놓칠 우려가 큽니다.",
        "당신은 세상의 난제를 수학적으로 해결하는 금(金)의 논리적 완결성을 추구하는 인재입니다. 알고리즘 설계에 능한 정밀 소자의 감각이 있으나, 모순된 상황을 보면 발작에 가까운 거부감을 보입니다.",
        "당신의 기질은 진실과 거짓을 가려내어 미궁에 빠진 사건의 실마리를 찾는 금(金)의 프로파일러입니다. 진실 규명에 능한 예리한 칼날 지성이 장점이나, 타인의 어두운 내면을 너무 많이 봐서 메마르기 쉽습니다.",
        "당신의 에너지는 핵심 기밀을 철저히 수호하고 은밀하게 과업을 완수하는 금(金)의 보안 인재입니다. 기밀 유지가 탁월한 금고의 성질을 가졌으나, 비밀이 너무 많아 진심 어린 소통이 어려운 고독이 따릅니다.",
        "당신은 냉철한 감성으로 시대를 풍자하고 권력을 견제하는 금(金)의 날카로운 논설가입니다. 문장력이 예리한 펜촉의 기운이 장점이나, 자신의 펜이 파괴적인 비난에만 쓰이지 않도록 경계해야 합니다.",
        "당신의 코어는 거대 조직의 기강을 세우고 국가 비전을 설계하는 금(金)의 총괄 설계자 역량입니다. 국정 설계에 능한 바위산의 무게감이 있으나, 당리당략에 휘둘릴 때 자존심이 꺾여 은둔을 선택하기도 합니다.",
        "당신은 역사에 기록될 독보적 성취와 절대적 가치를 실현하는 금(金)의 전설적 명장입니다. 불멸의 가치를 창조하는 금속 공예가적 기질이 있으나, 현실적인 세속 욕망을 무시해 주변을 고생시킬 수 있습니다.",
        "당신의 기질은 위기의 순간 가장 먼저 달려가 조직을 구하는 금(金)의 명검이자 수호자입니다. 정의 수호에 목숨을 거는 검객의 혼이 장점이나, 절차 무시와 독단적 판단으로 공적 자산에 손실을 끼치기도 합니다.",
        "당신의 에너지는 차가운 바위 속에서 솟아나는 맑은 샘물처럼 금(金)의 순수한 지성을 의미합니다. 통찰력이 깊은 수정의 감각이 장점이나, 현실의 탁한 인간관계를 견디지 못해 결벽증적인 성향을 보입니다.",
        "당신은 정해진 목표를 향해 미사일처럼 날아가 명중시키는 금(金)의 정밀 타격형 인재입니다. 실천력이 최고인 화살의 기운이 장점이나, 방향이 잘못 설정되었을 때 멈추지 못해 대형 사고를 낼 수 있습니다.",
        "당신의 코어는 단단한 금속이 서로 부딪치며 소리를 내듯 금(金)의 명쾌한 커뮤니케이션을 선호합니다. 결론부터 말하는 명확함이 있으나, 배려 없는 화법으로 아끼는 인맥을 잃기도 하는 리스크가 있습니다.",
        "당신의 기질은 한 번 제련되면 변치 않는 보석처럼 금(金)의 지조와 절개를 지키는 성품입니다. 충성심이 강한 황금의 속성이 장점이나, 시대 변화에 발맞추지 못하고 과거의 의리에 매몰될 위험이 있습니다.",
        "당신의 에너지는 불필요한 감정을 걷어내고 기계처럼 완벽하게 작동하는 금(金)의 무결점 인격체입니다. 실수 없는 완벽함이 장점인 정밀 기계의 속성이 있으나, 주변에서 인간미 없다는 평을 듣습니다.",
        "당신은 가장 차가운 땅에서 피어난 꽃처럼 금(金)의 극한 환경에서 피어나는 강인한 인내의 소유자입니다. 시련 속에서 빛나는 서리의 기운이 있으나, 고난이 없는 편안한 삶에서는 오히려 기운을 못 씁니다."
    ],
    "수(水)": [
        "당신은 보이지 않는 물자와 자본의 흐름을 읽어 부를 창출하는 수(水)의 지혜로운 기운을 코어로 가졌습니다. 글로벌 책사적 안목이 있는 바다의 속성이 있으나, 생각이 너무 많아 실행 타이밍을 놓치기도 합니다.",
        "당신의 영혼은 만물의 성장을 돕는 생명의 근원이자 수(水)의 자비로운 가이드 성질입니다. 타인을 인도하는 샘물의 역할에 능하나, 정작 자신의 삶의 방향은 갈팡질팡 정하지 못해 방황하곤 합니다.",
        "사주 데이터상 당신은 이해관계를 유연하게 조율하여 이익을 극대화하는 수(水)의 외교적 중재 화신입니다. 화합에 능한 물의 순응성이 장점이나, 이득을 위해 박쥐처럼 입장을 바꾸는 기회주의자로 오해받기도 합니다.",
        "당신은 변화의 파도를 타고 가장 먼저 기회를 선점하는 수(水)의 시장 선구자적 에너지를 가졌습니다. 선견지명이 탁월한 파도의 기운이 있으나, 내면의 중심이 흔들릴 때 걷잡을 수 없이 방황하는 기복이 있습니다.",
        "당신의 코어는 리스크를 정밀히 계산하고 자원의 이동 경로를 설계하는 수(水)의 전략적 지능입니다. 설계 능력이 좋은 운하의 지혜가 있으나, 직관을 무시하고 오직 수치로만 세상을 보려다 낭패를 봅니다.",
        "당신은 사건의 본질을 꿰뚫고 가공되지 않은 진실을 전달하는 수(水)의 투명한 분석가입니다. 진실 발굴에 능한 맑은 물의 지성이 장점이나, 비밀을 폭로하는 과정에서 불필요한 적을 많이 만드는 단점이 있습니다.",
        "당신의 기질은 지식과 정보를 수집하여 부의 자산으로 바꾸는 수(水)의 지식 연금술사입니다. 플랫폼 기획에 능한 호수의 포용력이 있으나, 머릿속 지식을 현실 자본으로 바꾸는 실전 근육이 부족할 때가 많습니다.",
        "당신은 과열된 경쟁 속에서도 냉정을 유지하며 거대 자본을 주도하는 수(水)의 지략가입니다. 승부사적 기질이 좋은 깊은 바다의 기운이 있으나, 사람의 마음보다 돈의 흐름에만 집착하여 고독한 부자가 되기 쉽습니다.",
        "당신의 에너지는 조직 전체의 품격과 인재의 흐름을 최적화하는 수(水)의 인자한 리더십입니다. 매니지먼트에 능한 강물의 포용력이 장점이지만, 비전을 대중의 언어로 번역하는 소통력이 부족해 소외될 수 있습니다.",
        "당신은 전 세계를 잇는 거대한 유통 체계를 구축하고 시스템의 질서를 세우는 수(水)의 물류 달인입니다. 공급망 설계에 능한 물길의 감각이 있으나, 동선이 고여서 썩는 상황을 보면 병적으로 예민해져 히스테리를 부립니다.",
        "당신의 코어는 지혜의 빛으로 대중을 계몽하고 사회의 품격을 높이는 수(水)의 고결한 지식 리더입니다. 교육자적 성품이 좋은 이슬의 감성이 있으나, 지식이 부족한 대중을 무시하는 오만함이 나타날 수 있습니다.",
        "당신의 기질은 조직 내 갈등을 씻어내고 평화를 유지하는 수(水)의 정화와 치유 힘을 의미합니다. 정서적 정화에 능한 약수터의 기운이 있으나, 부정적인 에너지를 다 받아주다가 본인이 먼저 병드는 약점이 있습니다.",
        "당신은 극한의 압박 속에서도 시원한 오아시스를 만들어 해답을 주는 수(水)의 지혜로운 지략가입니다. 수습 능력이 좋은 사막의 우물 같은 존재이나, 주변에 의지하려는 사람만 모여들어 독박 책임을 지는 경우가 많습니다.",
        "당신의 에너지는 가치 있는 지혜를 기록하여 미래의 이정표를 세우는 수(水)의 기록 수호자입니다. 기록 보존에 능한 먹물의 지혜가 있으나, 과거의 데이터에만 매몰되어 현실의 급격한 변화를 읽지 못할 위험이 있습니다.",
        "당신은 소수 정예와 깊은 신뢰를 쌓고 하이엔드 자산을 증식시키는 수(水)의 럭셔리 보좌관입니다. 선별력이 좋은 깊은 산속 옹달샘의 기운이 있으나, 일반 대중과의 소통을 거부하는 선민의식으로 적이 생기기 쉽습니다.",
        "당신은 시공간을 초월하는 영감으로 새로운 서사를 창조하는 수(水)의 신비로운 아티스트입니다. 영혼을 울리는 창작에 능한 비안개의 감성이 있으나, 현실의 경제적 계산이나 행정 절차에는 어린아이처럼 무능합니다.",
        "당신의 코어는 법의 자구를 넘어 그 정신을 해석하고 인권을 수호하는 수(水)의 법학적 정수입니다. 인권 보호에 능한 해수의 정의감이 있으나, 법전의 논리보다 감성이 앞서 판결의 공정성을 의심받기도 합니다.",
        "당신은 인간 심리를 수학적으로 분석하여 디지털 시대의 지도를 그리는 수(水)의 데이터 전략가입니다. 프로파일링에 능한 차가운 얼음 지성이 장점이나, 수치에 매몰되어 사람의 따뜻한 체온을 잊기 쉽습니다.",
        "당신의 기질은 사라져가는 것들에 숨을 불어넣어 다시 살려내는 수(水)의 재생 마법사입니다. 복원과 브랜딩에 능한 만조의 에너지가 있으나, 새것에만 열광하는 대중의 변화 속도를 따라가기 힘겨워합니다.",
        "당신의 에너지는 우주의 원리를 깨닫고 근본 해답을 탐구하는 수(水)의 지식 구도자입니다. 철학적 깊이가 깊은 심해의 사유가 장점이나, 현실 세계의 세속적 성공을 비웃다가 스스로 빈곤의 늪에 빠질 수 있습니다.",
        "당신의 코어는 인생의 허무를 지혜로 승화시켜 사색의 가치를 전파하는 수(水)의 인문학적 스승입니다. 내면 탐구에 능한 안개의 성찰이 장점이지만, 쉼 없이 돌아가는 현대 사회에서 낙오자라는 불안감을 느낍니다.",
        "당신은 인류의 지적 유산을 체계화하여 공유하는 수(水)의 지식 대양이자 거물입니다. 백과사전적 지식이 풍부한 호수의 정보력이 있으나, 자신의 지식을 사리사욕을 위해 쓰려는 모리배들에게 이용당하기 쉽습니다.",
        "당신의 기질은 미지의 영역을 개척하여 세상을 놀라게 할 수(水)의 독창성 소유자입니다. 천재적 영감이 있는 폭포의 기상이 있으나, 자신의 비범함을 이해하지 못하는 세상을 향해 벽을 쌓는 단절이 따릅니다.",
        "당신의 에너지는 국제 정세의 해답을 찾아내는 지략가이자 수(水)의 글로벌 유통 리더입니다. 판을 짜는 지휘 능력이 좋은 조류의 흐름을 가졌으나, 상황이 복잡해질수록 단순한 원칙을 놓쳐 대패할 위험이 있습니다.",
        "당신은 깊은 심해처럼 속을 알 수 없는 비밀스러움과 수(水)의 거대한 잠재력을 지닌 인물입니다. 신중함이 무기인 깊은 소(沼)의 기운이 있으나, 지나친 폐쇄성으로 인해 가장 가까운 사람과도 소외되는 외로움을 겪습니다.",
        "당신은 침투력이 좋아 어디든 스며들어 정보를 빼내고 판을 흔드는 수(水)의 첩보원적 기질이 있습니다. 기민함이 좋은 가랑비의 속성이 있으나, 정체성이 불분명해져 스스로 누구인지 혼란을 겪는 일이 잦습니다.",
        "당신의 코어는 얼어붙은 땅 밑에서 봄을 기다리는 수분처럼 수(水)의 인내와 희망 상징입니다. 때를 기다리는 힘이 큰 지하수의 기운이 있으나, 너무 오래 기다리다가 기회를 썩히는 우유부단함이 있습니다.",
        "당신은 사람들의 욕망을 자극하여 거대한 유행을 만들어내는 수(水)의 트렌드 술사입니다. 대중 심리 파악에 능한 파도의 변칙성이 장점이나, 본인의 삶 역시 유행처럼 덧없이 흘러가기 쉬운 단점이 있습니다.",
        "당신의 기질은 모든 더러운 것을 씻어내어 맑게 만드는 수(水)의 정화 샘물과 같습니다. 도덕적 고결함을 추구하는 수정 같은 마음이 있으나, 세상의 더러운 꼴을 못 견뎌 히스테리적인 성향을 보일 수 있습니다.",
        "당신의 에너지는 극한의 고독 속에서 지혜의 진주를 빚어내는 수(水)의 고독한 철학자입니다. 정신적 성취는 위대한 심해의 사유이나, 현실적인 유대감과 경제적 기반이 늘 취약하여 삶이 위태로울 수 있습니다."
    ]
};

const nameSynergyKo = [
    "이름의 근원적인 목(木)의 파동이 당신의 기질에 강력한 자생력을 부여하여,", // 1
    "성명의 유연한 목(木)의 에너지가 당신의 기운을 다각도로 흐르며 적응하게 만들어,", // 2
    "만물 소생의 화(火)의 주파수가 당신의 잠재력을 태양처럼 찬란하게 꽃피워주어,", // 3
    "과열된 화(火)의 파동이 타고난 기운에 파괴적 혁신과 예기치 못한 풍파를 유발하여,", // 4
    "조화로운 토(土)의 기운이 당신의 강한 기질을 대지처럼 부드럽게 중재하여,", // 5
    "풍요로운 토(土)의 결실 에너지가 당신의 삶에 흔들리지 않는 강력한 동력이 되어,", // 6
    "강직하고 단호한 금(金)의 기운이 당신의 중심을 칼날처럼 강력하게 잡아주어,", // 7
    "끈기 있는 금(金)의 주파수가 당신의 실행력에 무쇠 같은 지치지 않는 지구력을 더해,", // 8
    "예리하고 깊은 수(水)의 파동이 당신의 기운을 통찰의 심연으로 예민하게 자극하여,", // 9
    "공허한 수(水)의 주파수가 당신의 실천력을 수렴시키고 내실을 다지는 효과를 내어,", // 10
    "새 시대를 여는 목(木)의 갱생 기운이 삶에 나무처럼 새로운 활로를 열어주어,", // 11
    "유약한 목(木)의 파동이 당신의 진취적인 기상을 풀잎처럼 다소 약화시켜,", // 12
    "지혜롭고 영민한 화(火)의 파동이 당신의 지적 능력을 빛처럼 극한으로 끌어올려,", // 13
    "흩어지는 화(火)의 파동이 타고난 집중력을 연기처럼 방해하는 요소로 작용하여,", // 14
    "덕망 높은 토(土)의 인덕 기운이 당신의 대인관계에 비옥한 대지 같은 날개를 달아주어,", // 15
    "대기만성형 토(土)의 묵직한 에너지가 당신의 성공 기반을 바위처럼 단단히 다져주어,", // 16
    "강한 신념의 금(金)의 투지 주파수가 당신의 목표 의식을 검처럼 예리하게 벼려,", // 17
    "만능의 금(金)의 재주와 활력이 다재다능함을 실무적 성과로 날카롭게 연결하여,", // 18
    "고독한 수(水)의 날카로운 주파수가 주변과의 조화를 차가운 얼음처럼 일시적으로 저해하여,", // 19
    "정지된 수(水)의 기운 파동이 당신의 역동적인 흐름을 깊은 늪처럼 가로막는 장애가 되어,", // 20
    "강력한 목(木)의 지도자 기운이 당신의 권위와 명예를 거목처럼 드높이는 동력이 되어,", // 21
    "중도에 꺾이는 목(木)의 파동이 당신의 끈질긴 집념을 가지처럼 흔들어 놓는 부작용을 내어,", // 22
    "태양 같은 화(火)의 열정 에너지가 당신의 기질을 불꽃처럼 대중 앞에 화려하게 드러내어,", // 23
    "점진적인 화(火)의 성장 기운이 당신의 삶을 안정적인 궤도로 따뜻하게 인도하여,", // 24
    "예리한 토(土)의 지혜와 기교가 문제 해결 능력을 대지의 요철을 메우듯 비약적으로 높여주어,", // 25
    "영웅적이지만 굴곡진 토(土)의 파동이 삶에 거친 산맥 같은 극적인 반전을 불러와,", // 26
    "독단적인 금(金)의 기운 파동이 당신의 강한 자존심을 강철처럼 과도하게 부추겨,", // 27
    "파란만장한 금(金)의 에너지 파동이 당신의 평온한 일상을 수시로 날카롭게 뒤흔들어,", // 28
    "지혜로운 수(水)의 전략가 주파수가 당신의 사고방식에 물결 같은 날카로움을 더해,", // 29
    "길과 흉이 교차하는 수(水)의 에너지가 당신의 운명에 파도 같은 예측 불가능성을 더해,", // 30
    "자수성가의 목(木)의 강력한 의지가 당신의 자생력을 뿌리처럼 무엇보다 극대화하여,", // 31
    "요행과 풍파의 목(木)의 파동이 당신의 성실한 노력을 바람에 흩날리듯 허무하게 흩뜨려 놓아,", // 32
    "승천하는 화(火)의 용 같은 기상이 당신의 기질에 압도적인 불의 카리스마를 덧입혀,", // 33
    "파괴적인 화(火)의 파동 에너지가 타고난 재능을 화마처럼 한순간에 무너뜨릴 위험을 내포하여,", // 34
    "평화와 조화의 토(土)의 주파수가 당신의 거친 삶을 평원처럼 평온하게 다독여주어,", // 35
    "명예로운 토(土)의 파동 에너지가 당신의 품격과 자부심을 태산처럼 한층 드높여주어,", // 36
    "사람을 끄는 금(金)의 주파수가 당신 주변에 보석을 찾는 이들을 자석처럼 불러 모아,", // 37
    "예술적인 금(金)의 감수성이 당신의 창의적 영감을 정밀 세공하듯 크게 증폭시켜,", // 38
    "쇠퇴의 수(水)의 기운 파동이 활기찬 에너지를 깊은 바다 밑으로 무겁게 가라앉혀,", // 39
    "변화무쌍한 수(水)의 에너지가 당신의 삶에 소용돌이 같은 예상치 못한 변동을 유발하여,", // 40
    "선견지명의 목(木)의 지혜가 당신의 안목을 새순처럼 미래 지향적으로 확장시켜,", // 41
    "시련의 목(木)의 주파수가 당신의 강인한 기질을 겨울 나무처럼 아주 혹독하게 시험하여,", // 42
    "명성을 떨치는 화(火)의 파동이 당신의 이름을 태양처럼 세상 널리 알리는 계기가 되어,", // 43
    "중도에 부러지는 화(火)의 파동이 공들여 쌓은 탑을 번개처럼 위태롭게 자극하여,", // 44
    "대박과 횡재의 토(土)의 에너지가 당신이 일군 결실을 황금 벌판처럼 더욱 풍성하게 만들어,", // 45
    "불운의 토(土)의 씨앗이 당신의 밝은 기운을 흙먼지처럼 일시적으로 가리우는 그늘이 되어,", // 46
    "개척과 승리의 금(金)의 파동이 당신 앞에 놓인 장애물을 도끼처럼 단숨에 격파하여,", // 47
    "덕을 베푸는 금(金)의 주파수가 당신의 명예를 순금처럼 더욱 고결하고 아름답게 만들어,", // 48
    "허망한 수(水)의 파동 에너지가 실질적인 성과를 물거품처럼 신기루처럼 흩어지게 만들어,", // 49
    "고립과 중단의 수(水)의 에너지가 당신의 사회적 활동을 얼어붙은 강물처럼 위축시켜,", // 50
    "완벽한 성공의 목(木)의 기운이 당신의 삶을 거목의 꼭대기인 최고의 위치로 밀어 올려주어,", // 51
    "불완전한 목(木)의 파동 기운이 당신의 확고한 계획에 잦은 가지치기 같은 수정을 강요하여,", // 52
    "겉은 화려한 화(火)의 빈 기운이 실속보다는 불꽃같은 겉치레에 치중하게 만들어,", // 53
    "횡액과 고난의 화(火)의 주파수가 예기치 못한 화재 같은 암초를 삶의 도처에 배치하여,", // 54
    "만사가 형통하는 토(土)의 길한 에너지가 당신의 앞길을 평탄한 대로처럼 환하게 밝혀주어,", // 55
    "미완의 토(土)의 기운이 당신의 성취를 결정적인 순간에 진흙처럼 멈추게 하는 작용을 하여,", // 56
    "강한 고집의 금(金)의 주파수가 당신의 유연함을 방해하는 날카로운 칼날 같은 아집이 되어,", // 57
    "후반의 금(金)의 길운이 당신의 초반 고난을 숫돌처럼 깨끗이 씻어내는 정화제가 되어,", // 58
    "허영의 수(水)의 파동이 당신의 현실적인 판단력을 안개처럼 흐리게 만드는 요인이 되어,", // 59
    "어둠 속 수(水)의 방황 에너지가 당신의 목표를 깊은 밤의 바다처럼 일시적으로 상실하게 만들어,", // 60
    "명예와 지위의 목(木)의 기운이 당신을 조직의 뿌리이자 핵심 인물로 부상시켜,", // 61
    "고독과 쇠퇴의 목(木)의 주파수가 당신의 활발한 기운을 낙엽처럼 쓸쓸하게 가라앉혀,", // 62
    "성공과 번영의 화(火)의 파동이 당신의 노력을 반짝이는 보석 같은 결실로 바꿔놓아,", // 63
    "파괴와 침체의 화(火)의 에너지가 타고난 생명력을 태워버리는 독소가 되어,", // 64
    "평온한 성공의 토(土)의 기운이 당신의 삶을 풍요로운 안식처인 대지로 인도하여,", // 65
    "불안정한 토(土)의 영웅적 에너지가 당신을 잦은 먼지 구덩이 같은 시비에 휘말리게 하여,", // 66
    "천부적 재능의 금(金)의 주파수가 당신의 가치를 세상에 보석처럼 확실히 증명해주어,", // 67
    "시비와 갈등의 금(金)의 파동이 당신의 소중한 인맥 관계에 칼자국 같은 균열을 내어,", // 68
    "성공 뒤의 수(水)의 침체 파동이 당신의 안일함을 경고하는 차가운 얼음물 같은 신호가 되어,", // 69
    "고독과 허망의 수(水)의 에너지가 당신의 내면을 깊은 심해처럼 이유 없이 공허하게 만들어,", // 70
    "불굴의 목(木)의 재기 기운이 어떤 절망 속에서도 새순처럼 당신을 다시 일으켜 세워,", // 71
    "평범함 속 목(木)의 불운 주파수가 당신의 비범한 재능을 덩굴 속에 무색하게 묻히게 하여,", // 72
    "행운과 복록의 화(火)의 파동이 당신의 삶에 햇살 같은 끊임없는 기회를 제공해주어,", // 73
    "무능과 태만의 화(火)의 파동이 타고난 기획력을 실천으로 옮기지 못하게 불씨를 꺼뜨려,", // 74
    "명예로운 토(土)의 성공 기운이 당신의 노후를 황금빛 대지의 영광으로 가득 채워,", // 75
    "이별과 고난의 토(土)의 에너지가 당신의 소중한 인연들을 흙탕물처럼 멀어지게 하여,", // 76
    "강한 투지의 금(金)의 주파수가 당신을 해당 분야의 독보적인 강철 명장으로 성장시켜,", // 77
    "길과 흉이 반반인 금(金)의 파동이 당신의 삶을 끊임없는 칼날 위의 도전장으로 만들어,", // 78
    "정신적 공허의 수(水)의 파동이 현실의 풍요로움을 바닷물처럼 한순간에 무색하게 만들어,", // 79
    "급격한 변화의 수(水)의 기운이 당신의 운명을 폭풍우처럼 극단적으로 요동치게 만들어,", // 80
    "만물의 완성인 수(水)의 에너지가 모든 과업을 대해(大海)의 찬란한 결말로 인도하여" // 81
];


const transitionKo = "이처럼 당신의 성명은 선천적 기질에 강력한 시너지를 주지만, 동시에 예상치 못한 에너지의 편중이나 부작용을 유발하기도 합니다. 이러한 편중된 효과를 지혜롭게 다스리고 운명의 밸런스를 완성하기 위해, 아래 제시된 당신만의 약점 보완 처방을 적극적으로 실천하시기 바랍니다.";

// 4. [📜 현생의 과업] 영문 기질 (Hanja 제거 완료)
const birthCoreEn = {
    "목(木)": [
        "Your soul harbors the Wood energy of independence and self-reliance, thriving as you break through stagnant environments. This primal spirit allows you to take the lead in pioneering new paths, though excessive dogmatism may cause friction with others.",
        "Your fundamental Wood energy symbolizes unceasing expansion and practical leadership. You find joy in achieving results directly in the field rather than in theory, and flexible growth becomes possible only when you let go of perfectionism.",
        "Based on seasonal data, you possess a strong Wood energy that establishes order through coordination. While your ability to set clear standards is outstanding, you may feel immense stress in disordered or overly emotional situations.",
        "You symbolize the resilient Wood energy that finds answers even under extreme pressure. You possess a problem-solving temperament that uses trials as stepping stones, though you sometimes trap yourself in isolated thinking.",
        "Your core signifies a logical design ability rooted in Wood energy that adheres to principles. Rational judgment is your forte and you strive for upright growth, but you feel resistance when forced into illogical emotional dynamics.",
        "You are a natural navigator with Wood energy, discovering potential in others and guiding them. You grasp strengths as quickly as branches grow, but your energy drains when dealing with those who lack the will to change.",
        "You possess business wisdom fueled by Wood energy, converting information into practical assets. You excel at selecting valuable information like deep roots, but find no interest in theoretical studies without utility.",
        "You possess an upward Wood energy aimed at realizing noble ideals and exerting social influence. You value honor and righteous beauty, yet cannot hide your disdain for vulgar selfishness due to your inherent integrity.",
        "Your energy signifies macroscopic leadership with Wood's expansive vision. You are skilled at planning large projects, but your natural light fades when buried in petty, repetitive tasks.",
        "You were born with sharp intuition fueled by Wood energy to seize fleeting opportunities. You have a competitor's temperament that enjoys risk, but you tend to lose patience with slow-moving processes.",
        "Your temperament signifies precise analytical power based on Wood's unwavering center. You prefer flawless systems and cannot coexist with mediocre compromise that hinders straight growth.",
        "You support massive systems from behind the scenes with Wood's enduring patience. You pursue steady growth, but feel intense anxiety in flashy environments with weak, hollow foundations.",
        "You have the strength to endure extreme adversity and sprout success through Wood's self-sustaining power. You are the type to harden through trials, but tend to apply overly strict standards to others.",
        "You possess cool judgment rooted in Wood energy to foresee the value of results. Your strong guardian nature makes it hard to endure organizations lacking transparency and order.",
        "You are a master of finishing tasks by uniting fragmented info with Wood's organizational wisdom. You are good at finding rules in disorder, and you despise unclear job processing.",
        "You were born with Wood's craftsmanship and a high-end sense that misses not even a fine crack. You pursue error-free precision but struggle with crude, detail-ignoring work styles.",
        "Your energy symbolizes justice and social balance protected by Wood's noble spirit. You obey promises and rules, but suffer mentally when principles are compromised by those in power.",
        "You are a meticulous strategist with Wood's cool intelligence, preparing for upcoming crises. You excel at predicting risks, but struggle communicating with groundless optimists.",
        "You have a guardian temperament rooted in Wood energy, protecting discipline and guarding against corruption. Your conviction is firm, but you feel deep self-reproach when forced to bend it.",
        "You possess Wood's deep insight into the hidden essence of human affairs. You enjoy exploring root causes from the ground up and avoid shallow relationships that offer only empty talk.",
        "You move hearts and give hope through Wood's delicate supporting energy. You value emotional connection, but feel suffocated in cold, mechanical communication environments.",
        "You harbor great educator energy rooted in Wood, spreading knowledge and embracing others. Your leadership in sharing wisdom is outstanding, but you feel skeptical when learning is absent.",
        "You have prophetic Wood energy to discover potential in the dark and propose new paradigms. You excel at creative alternatives, but clash with conservative, stubborn groups.",
        "You are a persistent executor who achieves practical results through Wood's vitality. You enjoy challenging the impossible, but find collaborating with weak-willed people a chore.",
        "You quietly observe situations for opportunity with Wood's master-of-ambush temperament. You have hidden strength, but avoid positions requiring excessive self-promotion.",
        "You have amazing learning ability to absorb surrounding energy through Wood's growth trait. You adapt well and grow fast, but always harbor a fear of losing your unique identity.",
        "You have a seeker's temperament rooted in Wood's purity to reach the peak of a field. You value honor and bamboo-like integrity, yet feel disillusioned in places full of worldly desires.",
        "You read trends with sensuous intuition through the modern sense of Wood energy. You enjoy changing environments, but find repetitive routines to be soul-crushing.",
        "You are an owner of deep mercy, feeling others' pain as your own through Wood's broad heart. You show sacrificial leadership, but are hurt by rude people exploiting your kindness.",
        "You harbor an entrepreneurial temperament to create something from nothing with Wood's life force. You have pioneering spirit, but feel boredom in well-established, stable organizations."
    ],
    "화(火)": [
        "Your soul harbors the passion of the sun and the expansive Fire energy of brilliance. This light presence fascinates people, but you tend to burn out when your emotions are left unchecked.",
        "You are a person with the properties of a flame, characterized by constant change and communication through Fire energy. You lead trends with visual sense, but lose interest if results are delayed.",
        "Based on birth data, you possess a brilliant intelligence that spreads wisdom like a lamp through Fire energy. You are good at logical debate, but feel disdain for rude or ignorant people.",
        "You possess a powerful explosive force that instantly reverses a heavy atmosphere through Fire energy. Your courage in a crisis is commendable, but your haste sometimes ruins the work.",
        "Your temperament signifies a brilliant expressive power that makes art bloom through Fire energy. You have an outstanding aesthetic eye, but your lack of economic sense may hide poverty.",
        "You are a master of sociability who adds warmth between people through Fire energy. You bring vitality to groups, but often lose your true self by caring too much about others' opinions.",
        "You are like a candle with both intellectual curiosity and religious reverence through Fire energy. You are good at inner reflection but psychologically vulnerable to aggressive stimuli.",
        "Your core symbolizes the revolutionary heat of Fire that transforms the world. Your fighting spirit is strong, but your lack of flexibility can turn allies into enemies.",
        "You are a lamp of the era with excellent media sense fueled by Fire energy. You excel at processing news, but tend to stay in broad and shallow knowledge rather than deep contemplation.",
        "You possess the focus to pursue a goal with pure passion through Fire energy. Pure immersion is your strength, but the emptiness when a goal vanishes can lead to profound depression.",
        "Your energy symbolizes stardom that dominates the stage through Fire's radiation. You have no hesitation in revealing yourself, but wander aimlessly when you are not in the spotlight.",
        "You are like a heater with the gentleness to melt cold air through Fire's warmth. You make those around you comfortable, but often lose out by only yielding when you should claim your rights.",
        "You are a visual leader with an outstanding ability to visualize imagination through Fire energy. You are skilled at directing space, but tend to overlook the details of invisible systems.",
        "Your temperament signifies a free soul that crosses boundaries like a flame through Fire energy. You hate restraint and pursue a dynamic life, but instability follows from not taking root.",
        "You are a storyteller who creates dramatic narratives through Fire's communicative power. Your power to draw empathy is great, but you often lose objective judgment due to emotional excess.",
        "Your core symbolizes a noble sacrificial spirit that sublimates adversity into light through Fire energy. You devote yourself to others, but collapse when your sacrifice is taken for granted.",
        "You have an intellectual temperament that pinpoints social contradictions through Fire's sharp reason. You have a sharpness in debate, but risk staying in criticism without alternatives.",
        "You possess strategist energy with cold calculation hidden in hot Fire passion. You know the winning point, but a tendency to see people as tools may drive your allies away.",
        "You have developed a spiritual intuition to read invisible frequencies through Fire's insight. Your foresight is great, but you are likely to be incompetent in complex real-world procedures.",
        "Your temperament is a flame of patience that leads to fruit through Fire's restraint. You show mature leadership, but try to stick to old ways even when change is urgently needed.",
        "You possess a fierce tenacity that keeps you burning on a path through Fire's spirit. You are likely to be the hero of human triumph, but you overwork those around you to match your speed.",
        "You possess healer energy that melts frozen hearts through Fire's benevolence. You are good at comfort, but often neglect your own wounds, letting mental fatigue grow in silence.",
        "Your core signifies a noble artistic character that enjoys solitude through Fire's art. You have a unique worldview, but struggle to find a point of communication with the public.",
        "You are a sensuous practitioner who captures fleeting inspiration for business through Fire's eye. You see money flow well, but are vulnerable to the temptation of profit over values.",
        "You are an action leader who rectifies discipline and spreads passion through Fire's engine. Your drive is overwhelming, but you draw resentment for crude work in delicate tasks.",
        "Your energy is like the flame of a creator that creates something from nothing through Fire's idea. Your planning is excellent, but you tend to pass execution to others at the idea stage.",
        "You are a flame of loyalty who forms deep bonds and protects them through Fire's heat. You are warm to your side, but burn enemies mercilessly once you judge them as such.",
        "Your temperament is a self-sustaining stardom that shines anywhere through Fire's vitality. You rise again even from the bottom, but your pride is too strong to accept help from others.",
        "You possess a seeker's energy that contemplates the world and spreads truth through Fire's insight. Your wisdom is deep, but you can make others suffer due to economic indifference.",
        "You possess strong vitality like an ember of hope born in the dark through Fire's life force. You shine more as trials grow, but wander in boredom during repetitive daily life."
    ],
    "토(土)": [
        "Your soul harbors the heavy Earth energy of balance and credit, embracing all life. You value trust as your ultimate principle, but conservatism that hates change often holds you back.",
        "Your soul has the property of fertile soil that nurtures all things through Earth energy. Inclusion and patience are your strengths, but you suffer by carrying others' burdens.",
        "Based on birth data, you are a designer who lays foundations with the sturdiness of Earth energy. Your planning is thorough, but you freeze when sudden situations arise.",
        "You have a strong mediator temperament that settles peace through Earth's inclusive power. You lead harmony, but sometimes miss your rights by remaining silent when you should speak.",
        "Your core is a master of practical management who stabilizes systems through Earth energy. You are good at internal substance but conservative in introducing new technologies.",
        "You possess a persistent expert temperament that digs one well through Earth's diligence. Your responsibility is overwhelming, but your vision narrows, missing the overall flow.",
        "You are a resourceful person with an eye for reading the hidden value of assets through Earth energy. You have an economic sense, but miss big opportunities by choosing stability.",
        "Your temperament is a heavy mentor who becomes a compass for others through Earth energy. You pursue a respected life, but sometimes show dogmatism by insisting on your own way.",
        "You are an insightful guardian who preserves traditional values through Earth's persistence. You are good at protecting essence, but are criticized for clinging to outdated ways.",
        "Your energy is a meticulous brain that manages resources through Earth's reason. You are strong in numbers, but have a coldness that ignores human emotional variables.",
        "You are a warm social innovator who embraces the marginalized through Earth's character. You are philanthropic, but tend to neglect your own family in the process.",
        "Your core is an unshakable will and a guardian of safety through Earth energy. You feel a mission in maintaining order, but show an obsessive attitude toward regulation violations.",
        "You possess logistical wisdom that optimizes the flow of goods through Earth's pragmatism. You are good at efficiency, but cause conflict by failing to calculate emotional fatigue.",
        "You are a warehouse keeper of knowledge who systematizes vast data through Earth's preservation. Your archiving is outstanding, but execution is often delayed due to data collection.",
        "You are a craftsman-like housekeeper who creates value through Earth's precision. Technical perfection is your pride, but you tend to prioritize your own satisfaction over marketability.",
        "Your temperament is a master of negotiation who leads to coexistence through Earth's sense of justice. You value fair distribution, but often end up sacrificing yourself for others.",
        "You possess an outstanding aesthetic, like finding jewels in the ground through Earth energy. Your appraisal eye is good, but you miss good opportunities because you are too suspicious.",
        "Your energy is a guardian of the rule of law that rectifies organizations through Earth's resolve. You are good at discipline, but often hear complaints of being inflexible.",
        "You are a scholarly seeker who builds the foundation of knowledge through Earth's contemplation. Your intellectual depth is great, but you risk financial hardship due to economic indifference.",
        "Your core is a spiritual haven that soothes anxiety through Earth's inclusion. You are good at healing, but catch others' negative emotions easily and suffer burnout.",
        "You are a pillar of an educational community that grows many people through Earth energy. You are good at infrastructure, but must guard against becoming a stubborn traditionalist.",
        "Your temperament is an outstanding strategist who plans projects behind the scenes through Earth energy. You are good at back-end design, but often have your merits stolen by others.",
        "You are a guardian who protects the organization's roots based on trust through Earth's character. Your loyalty is deep, but the hit you take from betrayal is greater than others.",
        "Your energy is a practical economist who tills the land to create wealth through Earth energy. Diligent sincerity is your weapon, but you have a limit of focusing only on labor.",
        "You are the epitome of 'soft outside, hard inside' through Earth's perseverance. You show your true value in a crisis, but tend to be undervalued because you lower yourself too much.",
        "Your core is a calm problem solver who organizes situations in chaos through Earth energy. Your cleanup ability is good, but you have a laziness of not moving until a problem occurs.",
        "You are a leader who extracts modern values within a conservative framework through Earth's fusion. Your harmony is a weapon, but decision-making is often delayed.",
        "Your temperament is a cautious competitor who waits for the right time through Earth's patience. You know the aesthetics of waiting, but sometimes wait too long and miss opportunities.",
        "You possess a humble but strong vitality that creates value from small things through Earth energy. You are good at substance, but tend to settle for immediate reality over grand vision.",
        "Your energy is the noble character of the earth that turns pain into fertilizer through Earth energy. You show sacrificial leadership, but risk losing health by not taking care of yourself."
    ],
    "금(金)": [
        "Your soul harbors a sharp core of determination and integrity through Metal energy. You are a problem solver who restores order, but your coldness can hurt those around you.",
        "Your soul symbolizes a perfectionist sense of justice that filters out the corrupt through Metal energy. Integrity is your weapon, but you make many enemies due to your critical view.",
        "You possess the weapon of a practitioner who proves value through action through Metal energy. Practical ability is your strength, but you cause conflict by only pushing principles.",
        "You possess logical analytical power to find core rules in disorder through Metal energy. You are good at system maintenance, but easily become a non-communicating leader.",
        "Your core is an unshakable guardian of justice who strictly keeps promises through Metal energy. You protect honor, but tire those around you with black-and-white logic.",
        "You were born with the energy of a skilled craftsman and a delicate hand through Metal energy. You are good at completing luxury, but collapse in low-quality environments.",
        "Your temperament is a charismatic commander who efficiently leads through Metal energy. You establish discipline, but have a sharp-tongued tendency toward subordinates.",
        "You are the incarnation of detail who finds even minute flaws through Metal energy. Microscopic precision is your weapon, but you risk missing the big picture on small things.",
        "Your energy is a noble inspector who corrects contradictions through Metal energy. You refuse corrupt practices, but are likely to be pushed out for not compromising with power.",
        "You are a cold strategist who analyzes numerical data to predict risk through Metal energy. Your tactics are good, but you lose people's hearts by failing to read emotions.",
        "Your core symbolizes a strong security defense that protects essence through Metal energy. You are good at technical protection, but can be closed to the influx of new trends.",
        "You possess an indomitable will and strong mental power through Metal energy. You have a fighter's temperament, but can become a tyrant who forces standards on others.",
        "You are a decisive problem solver who saves lives in crisis through Metal energy. You shine in tension, but wander aimlessly in boring daily life without meaning.",
        "Your temperament is a fair evaluator who correctly distinguishes potential through Metal energy. You are good at unearthing future jewels, but show a cold side to values without profit.",
        "Your energy is a wise innovator who simplifies complex phenomena through Metal energy. You are good at process improvement, but frequently clash with organizations over procedures.",
        "You possess a strong independence to carry out your conviction through Metal energy. Pioneering spirit is your weapon, but your rigidity risks building an isolated empire.",
        "Your core is the energy of a noble official who strictly executes justice through Metal energy. You are good at order, but risk missing humanism by being buried in the law.",
        "You are a talent who pursues logical perfection to solve problems through Metal energy. You are good at algorithm design, but show a strong reaction to contradictory situations.",
        "Your temperament is a profiler who distinguishes truth from lies through Metal energy. You are good at truth clarification, but easily become emotionally dry.",
        "Your energy is a security talent who strictly protects core secrets through Metal energy. Secret maintenance is outstanding, but a loneliness follows from the difficulty of communication.",
        "You are a sharp editorialist who pinpoints social contradictions through Metal energy. Your writing is sharp, but you must guard against your pen being used only for criticism.",
        "Your core is the capacity of a general designer who establishes discipline through Metal energy. You are good at design, but sometimes choose seclusion when your pride is hurt.",
        "You are a legendary master who realizes achievements recorded in history through Metal energy. You create immortality, but can make others suffer by ignoring worldly desires.",
        "Your temperament is a sword and guardian that rushes first to save others through Metal energy. You risk your life for justice, but also cause loss through procedural neglect.",
        "Your energy signifies pure intelligence like a clear spring from a rock through Metal energy. Insight is your gift, but you show fastidious tendencies in relationships.",
        "You are a precision-strike talent who flies like a missile toward a goal through Metal energy. Execution is top-tier, but you cause accidents by not stopping when the direction is wrong.",
        "Your core prefers clear communication like solid metals clashing through Metal energy. You have the clarity to speak from the conclusion, but also lose networks due to lack of consideration.",
        "Your temperament is one of integrity, like a jewel that never changes through Metal energy. Loyalty is your bond, but there is a risk of being buried in past obligations.",
        "Your energy is a flawless personality that operates perfectly through Metal energy. Error-free perfection is a strength, but you are judged as a machine-like person.",
        "You possess a strong patience that blooms in extreme environments through Metal energy. You shine in trials, but cannot use your energy well in a comfortable life."
    ],
    "수(水)": [
        "Your soul harbors the wise Water energy that reads the flow of capital to create wealth. You have a global strategist's eye, but sometimes miss the execution timing.",
        "Your soul has the property of a benevolent guide who helps all things grow through Water energy. You are good at the guide role, but wander aimlessly in your own life.",
        "You are the incarnation of diplomatic mediation who flexibly adjusts interests through Water energy. You are good at harmony, but often misunderstood as an opportunist.",
        "You possess the entrepreneurial energy to catch the wave of change through Water energy. Your foresight is outstanding, but you experience fluctuations when your center is shaken.",
        "Your core is a strategic intelligence that precisely calculates risks through Water energy. Your design is good, but you suffer losses by trying to see the world only through numbers.",
        "You are a transparent analyst who delivers raw truth through Water energy. You are good at truth uncovering, but make many enemies in the process of exposing secrets.",
        "Your temperament is an alchemist of knowledge who turns info into wealth through Water energy. You are good at planning, but often lack the practical muscle to execute.",
        "You are a strategist who maintains composure in competition through Water energy. Your competitor temperament is good, but you risk becoming a lonely rich person.",
        "Your energy is a benevolent leadership that optimizes the flow of talents through Water energy. You are good at management, but may be alienated due to a lack of communication.",
        "You are a master of logistics who builds huge distribution systems through Water energy. You are good at supply chain design, but become sensitive when seeing a tangled flow.",
        "Your core is a noble knowledge leader who enlightens the public through Water energy. Your educator nature is good, but arrogance toward the unlearned may appear.",
        "Your temperament signifies the power of healing that washes away conflicts through Water energy. You are good at purification, but catch illness by accepting all negative energy.",
        "You are a wise strategist who creates an oasis under extreme pressure through Water energy. Your cleanup ability is good, but you often take all responsibility for others.",
        "Your energy is a guardian of records who sets up milestones through Water energy. You are good at preservation, but risk failing to read current changes by being buried in data.",
        "You are a luxury aide who builds deep trust through Water energy. Your selection eye is good, but you easily make enemies due to an elitism that rejects others.",
        "You are a mysterious artist who creates narratives through Water energy. You are good at soul-stirring creation, but are as incompetent as a child in realistic procedures.",
        "Your core is the essence of law that protects human rights through Water energy. You are good at protection, but the fairness of your judgment is sometimes doubted.",
        "You are a data strategist who mathematically analyzes psychology through Water energy. Profiling is your strength, but you easily forget human warmth while buried in statistics.",
        "Your temperament is a master of regeneration who breathes life into vanishing things through Water energy. You are good at restoration, but struggle to keep up with the public.",
        "Your energy is a seeker of knowledge who explores fundamental answers through Water energy. Your philosophical depth is great, but you fall into poverty while laughing at success.",
        "Your core is an intellectual mentor who spreads the value of contemplation through Water energy. Good at inner exploration, but feel anxiety as an outcast in a fast society.",
        "You are a giant of knowledge who shares the human heritage through Water energy. Encyclopedic knowledge is your gift, but you are easily exploited by schemers.",
        "Your temperament is an owner of originality who will surprise the world through Water energy. You have genius inspiration, but a disconnection follows as you build walls.",
        "Your energy is a strategist and global leader who finds answers through Water energy. Your directing power is good, but you risk defeat by missing simple principles.",
        "You are a person of mysteriousness and huge potential through Water energy. Prudence is your weapon, but you experience loneliness from excessive secrecy.",
        "You have a spy temperament, penetrating anywhere to extract info through Water energy. Agility is your gift, but your identity becomes unclear, leading to confusion.",
        "Your core is a symbol of patience, like moisture waiting for spring through Water energy. Your power to wait is great, but indecisiveness often lets opportunities rot.",
        "You are a trend wizard who creates huge fads through Water energy. You are good at parsing public psychology, but your own life risks flowing away pointlessly.",
        "Your temperament is like a purifying spring that washes all filth through Water energy. You pursue noble-mindedness, but can show hysteria toward the dirty world.",
        "Your energy is a lonely philosopher who crafts pearls of wisdom through Water energy. Spiritual achievement is great, but life is precarious because foundations are weak."
    ]
};

// 5. [성명 시너지] 영문 81개 풀 데이터 (Hanja 제거 완료)
const nameSynergyEn = [
    "The fundamental vibration of Wood in your name grants powerful self-reliance to your innate temperament,", // 1
    "The flexible Wood energy of your name allows your spirit to adapt and flow in multiple directions,", // 2
    "The life-reviving frequency of Fire within your name brings your potential into brilliant bloom like the sun,", // 3
    "The overheated Fire vibrations of your name induce disruptive innovation and frequent fluctuations,", // 4
    "The harmonious Earth energy of your name gently mediates your strong temperament like the ground,", // 5
    "The abundant Earth energy of harvest becomes an unwavering driving force in your life,", // 6
    "The rigid and resolute energy of Metal strongly anchors your inner center like a sharp blade,", // 7
    "The persistent Metal frequency adds tireless endurance and iron-like strength to your execution,", // 8
    "The sharp and deep Water vibrations sensitively stimulate your spirit toward the abyss of insight,", // 9
    "The quiet Water frequency converges your practical actions and solidifies your inner substance,", // 10
    "The reviving Wood energy of a new era opens a new path in your life like a growing tree,", // 11
    "The fragile Wood vibrations slightly weaken your progressive spirit like a delicate leaf,", // 12
    "The wise and brilliant Fire vibrations maximize your intellectual capacity to the limit of light,", // 13
    "The dispersing Fire wave acts as an obstacle that scatters your concentration like smoke,", // 14
    "The virtuous Earth energy of your name gives wings to your relationships like fertile soil,", // 15
    "The heavy Earth energy of a late bloomer solidifies your foundation of success like a rock,", // 16
    "The fighting spirit of Metal within your name sharpens your sense of purpose like a sword,", // 17
    "The versatile Metal vitality connects your diverse talents to practical results with precision,", // 18
    "The sharp Water frequency temporarily hinders harmony like cold ice freezing the surroundings,", // 19
    "The stagnant Water vibrations become an obstacle that blocks your dynamic flow like a deep swamp,", // 20
    "The powerful leadership of Wood elevates your authority and honor like a majestic giant tree,", // 21
    "The breaking Wood vibrations shake your persistent tenacity like a snapping branch,", // 22
    "The passionate Fire energy reveals your temperament brilliantly to the public like a flame,", // 23
    "The gradual growth of Fire energy leads your life onto a warm and stable trajectory,", // 24
    "The sharp Earth wisdom increases your problem-solving skills as if smoothing the ground,", // 25
    "The turbulent Earth vibrations bring dramatic reversals to your life like a rugged mountain range,", // 26
    "The dogmatic Metal vibrations fuel your strong pride with the hardness of steel,", // 27
    "The eventful Metal vibrations frequently shake your peaceful daily life with a sharp edge,", // 28
    "The frequency of a wise Water strategist adds a wave-like sharpness to your thinking,", // 29
    "The energy of fluctuating Water adds wave-like unpredictability to your ultimate destiny,", // 30
    "The powerful Wood will for self-made success maximizes your self-reliance from the roots,", // 31
    "The turbulent Wood vibrations scatter your sincere efforts like seeds in a gale,", // 32
    "The ascending Fire spirit adds overwhelming charisma and the power of a solar emperor,", // 33
    "The destructive Fire vibrations carry the risk of collapsing your innate talent like a forest fire,", // 34
    "The peaceful Earth frequency soothes your rough life like a vast and quiet plain,", // 35
    "The honorable Earth vibrations further elevate your dignity and pride like a high peak,", // 36
    "The magnetic Metal frequency attracts those seeking value to your side like a magnet for gems,", // 37
    "The artistic Metal sensitivity greatly amplifies your creative inspiration like a refined craft,", // 38
    "The declining Water vibrations heavily sink your active energy into the deep sea,", // 39
    "The ever-changing Water energy induces frequent fluctuations in your life like a whirlpool,", // 40
    "The wise Wood foresight expands your perspective toward the future like a new sprout,", // 41
    "The harsh Wood vibrations severely test your strong temperament like a tree in winter,", // 42
    "The brilliant Fire vibrations spread your reputation far and wide like the noon sun,", // 43
    "The breaking Fire vibrations precariously stimulate your hard-built tower like a bolt of lightning,", // 44
    "The Earth energy of wealth makes your achievements as abundant as a golden field,", // 45
    "The seeds of Earth misfortune temporarily shadow your bright aura like a dust storm,", // 46
    "The Metal vibrations of victory instantly crush the obstacles before you like an axe,", // 47
    "The virtuous Metal frequency makes your honor even more noble and beautiful like pure gold,", // 48
    "The vain Water energy makes practical achievements vanish like sea foam or a mirage,", // 49
    "The isolated Water energy shrinks your social activities like a frozen river in winter,", // 50
    "The perfect Wood success pushes your life to the summit like the top of a giant tree,", // 51
    "The incomplete Wood vibrations force frequent corrections to your plans like pruning branches,", // 52
    "The empty Fire energy makes you focus on appearances over substance like a hollow flame,", // 53
    "The accidental Fire frequency places unexpected reefs in your life like a sudden blaze,", // 54
    "The auspicious Earth energy brightens your future path like a smooth and level road,", // 55
    "The unfinished Earth vibrations stop your achievements at the decisive moment like thick mud,", // 56
    "The stubborn Metal frequency becomes an ego that hinders flexibility like a cold blade,", // 57
    "The late-life Metal luck becomes a purifier that washes away early hardships like a whetstone,", // 58
    "The vain Water vibrations become a factor that blurs your realistic judgment like a thick fog,", // 59
    "The wandering Water energy temporarily causes you to lose your goal in the dark of night,", // 60
    "The Wood energy of status elevates you as the root and key figure of your organization,", // 61
    "The lonely Wood frequency sadly sinks your active energy like falling autumn leaves,", // 62
    "The prosperous Fire vibrations turn your efforts into golden fruit under the bright sun,", // 63
    "The stagnant Fire energy becomes a toxin that burns away your innate vitality,", // 64
    "The peaceful Earth energy leads your life to a haven of abundance and stable ground,", // 65
    "The unstable Earth energy leads you into frequent disputes and social dust storms,", // 66
    "The talented Metal frequency proves your value to the world like a shining jewel,", // 67
    "The conflicting Metal vibrations cause frequent cracks in your precious network like blade marks,", // 68
    "The stagnant Water vibrations warn you against complacency like a wave of cold ice water,", // 69
    "The lonely Water energy makes your inner self feel empty like the deep, silent abyss,", // 70
    "The indomitable Wood recovery raises you again from despair like a new spring bud,", // 71
    "The unfortunate Wood frequency causes your talent to be buried in the vines of mediocrity,", // 72
    "The lucky Fire vibrations provide sun-like opportunities throughout your entire life,", // 73
    "The lazy Fire vibrations hinder your planning from action by extinguishing the initial spark,", // 74
    "The honorable Earth success fills your later years with the glory of a golden field,", // 75
    "The difficult Earth energy distances you from precious relationships like muddy water,", // 76
    "The resolute Metal frequency grows you into an unrivaled master of steel in your field,", // 77
    "The half-and-half Metal vibrations make your life a field of endless challenges on a blade's edge,", // 78
    "The spiritual Water vibrations make realistic abundance feel meaningless like seawater,", // 79
    "The radical Water energy causes your destiny to fluctuate extremely like a thunderstorm,", // 80
    "The completing Water energy leads all your tasks to a brilliant finale in the great ocean" // 81
];

const transitionEn = "In this way, your name provides a powerful synergy to your innate temperament, but can also induce unexpected energy biases or side effects. To manage these effects and complete the balance of your destiny, please actively practice the weakness compensation prescriptions provided below.";



const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start",risk:"rigidity"},{key:"Harmony",core:"cooperation",risk:"dependency"},{key:"Growth",core:"expansion",risk:"scattered"},{key:"Foundation",core:"stability",risk:"stagnation"},{key:"Center",core:"balance",risk:"control"},{key:"Duty",core:"responsibility",risk:"overload"},{key:"Research",core:"analysis",risk:"isolation"},{key:"Result",core:"wealth",risk:"greed"},{key:"Completion",core:"closure",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];



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
