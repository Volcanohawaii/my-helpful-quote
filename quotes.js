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
    "당신이 타고난 목(木)의 본질은 척박한 땅을 뚫고 솟아오르는 강인한 생명력을 근간으로 합니다. 스스로 길을 개척하는 독립심과 추진력이 큰 장점이지만, 때로는 나무처럼 곧기만 하여 주변과의 유연한 타협이 부족할 수 있으니 의식적으로 타인의 시선을 빌려보려는 노력이 필요합니다.",
    "성장을 멈추지 않는 목(木)의 기운은 당신의 내면에 끊임없는 도전 정신과 향상심을 부여합니다. 목표를 향해 곧게 뻗어 나가는 성실함은 누구도 흉내 낼 수 없는 강점이나, 자칫 지나친 명예욕으로 스스로를 과하게 채찍질할 수 있으니 가끔은 쉼표를 찍어주는 여유를 가져보시기 바랍니다.",
    "자비로운 성품을 지닌 목(木)의 본질은 타인을 배려하고 잠재력을 이끌어내는 교육자적 기질을 만듭니다. 사람을 품는 따뜻한 포용력은 최고의 자산이지만, 거절을 못 하는 무른 마음 때문에 본인의 실속을 놓칠 수 있으니 '아니오'라고 말하는 단호함을 연습해볼 필요가 있습니다.",
    "당신의 깊은 내면에 자리 잡은 목(木)의 기운은 무질서 속에서 새로운 질서를 창조하는 설계자의 눈을 갖게 합니다. 기획력과 창의성이 매우 뛰어난 것이 장점이나, 때때로 생각만 앞서고 마무리가 흐릿해질 수 있으니 실행의 마지막 단계를 더 정밀하게 점검하는 습관이 큰 도움이 될 것입니다.",
    "위로 뻗어가는 목(木)의 상향 의지는 당신을 조직의 든든한 리더로 성장시키는 타고난 동력입니다. 책임감과 정의감이 투철한 것은 훌륭한 장점이지만, 자신의 엄격한 기준을 타인에게도 적용하여 주변을 피곤하게 만들 수 있으니 타인의 속도를 기다려주는 배려가 뒷받침되어야 합니다.",
    "당신이 품은 목(木)의 본질은 어떤 환경에서도 적응하며 싹을 틔우는 자생력을 의미합니다. 위기 상황에서 답을 찾아내는 능력이 장점이나, 한곳에 깊이 뿌리 내리지 못하고 새로운 자극만 찾아 방황할 수 있으니 지속성을 유지하려는 인내심을 길러보는 것이 좋습니다.",
    "곧은 대나무와 같은 목(木)의 절개는 당신의 고결한 타고난 인격을 대변합니다. 신념을 굽히지 않는 강직함은 큰 신뢰를 주는 장점이지만, 융통성이 부족하여 변화하는 시대 흐름에 뒤처질 우려가 있으니 새로운 가치를 편견 없이 수용해보려는 노력을 더해보십시오.",
    "생동감 넘치는 목(木)의 주파수는 주변에 활기를 불어넣고 인맥을 넓히는 사교적 본성으로 나타납니다. 친화력이 압도적인 장점이나, 사람을 너무 쉽게 믿어 배신으로 인한 상처를 입기 쉬우니 관계에서 적절한 거리감을 유지하는 지혜를 발휘하면 좋습니다.",
    "당신의 탄생 기운인 목(木)은 지적 호기심과 탐구심을 극대화하여 학문적 성취를 돕는 본질입니다. 깊이 있는 안목은 장점이지만, 현실적인 경제 관념보다 이상적인 가치에만 매몰되어 생활력이 약해질 수 있으니 실무적인 감각을 익히는 데에도 관심을 기울여 보십시오.",
    "부드러운 가지와 같은 목(木)의 유연함은 당신을 어떤 집단에서도 환영받는 중재자로 태어나게 했습니다. 갈등을 조율하는 능력이 장점이나, 결정적인 순간에 자기주장을 확실히 하지 못해 기회를 놓칠 수 있으니 본인의 권리를 분명히 밝히는 연습을 병행하면 좋습니다.",
    "당신이 가진 목(木)의 원동력은 불가능해 보이는 일에 깃발을 꽂는 개척자 정신 그 자체입니다. 대담한 실행력이 최고의 장점이지만, 뒷수습을 고려하지 않는 무모함이 때때로 큰 리스크를 초래할 수 있으니 시작 전에 리스크를 시뮬레이션해보는 신중함을 더해보시기 바랍니다.",
    "당신의 영혼에 깃든 목(木)의 에너지는 순수한 열정과 맑은 심성을 상징하는 타고난 본성입니다. 뒤끝이 없고 솔직한 성품이 장점이나, 감정 표현이 너무 직설적이라 의도치 않게 타인에게 상처를 줄 수 있으니 말하기 전 3초만 생각하는 여유를 가져보는 것이 좋습니다.",
    "뿌리 깊은 고목과 같은 목(木)의 본질은 흔들림 없는 안정감을 주변에 선사합니다. 묵직한 무게감이 주는 신뢰가 장점이나, 새로운 기술이나 변화를 받아들이는 속도가 너무 느려 고립될 수 있으니 주변의 젊은 생각들을 적극적으로 경청하는 노력이 필요합니다.",
    "당신은 목(木)의 상승 기류를 타고 항상 높은 곳을 지향하는 야심가적 본능이 있습니다. 비전을 제시하는 능력이 장점이나, 눈앞의 사소하지만 중요한 디테일을 놓쳐 큰 일을 그르칠 수 있으니 꼼꼼한 파트너와 협력하여 보완하는 지혜를 발휘해 보십시오.",
    "당신이 품은 목(木)의 섬세한 기운은 사물의 아름다움을 찾아내는 예술적 감각의 원천입니다. 심미안이 뛰어난 것이 장점이나, 정서적으로 예민하여 작은 비판에도 깊은 우울감에 빠지기 쉬우니 스스로를 보호할 수 있는 단단한 자아를 구축하려 노력하십시오.",
    "당신의 근본을 이루는 목(木)의 에너지는 타인의 고통을 외면하지 못하는 자비심을 만듭니다. 헌신적인 봉사 정신이 큰 장점이지만, 자신의 한계를 고려하지 않고 남을 돕다 번아웃을 겪을 수 있으니 스스로의 행복을 먼저 챙기는 이기심을 적절히 발휘해보는 것도 좋겠습니다.",
    "당신이 가진 목(木)의 기상은 정체된 물을 흐르게 하는 변화의 시작이자 본능입니다. 혁신적인 사고방식이 장점이나, 기존의 전통과 질서를 너무 쉽게 무시하여 갈등을 빚을 수 있으니 과거의 경험에서 지혜를 찾아내려는 온고지신의 태도를 보강해보십시오.",
    "당신의 타고난 목(木) 에너지는 정보를 분석하고 계통을 세우는 지적인 정교함을 의미합니다. 논리적 완결성이 장점이나, 비논리적인 감정의 영역을 이해하지 못해 인간관계가 메마를 수 있으니 공감의 언어를 배우려는 노력이 당신의 지성을 더욱 빛나게 할 것입니다.",
    "봄의 기운을 담은 목(木)의 본질은 당신을 늘 희망적이고 낙천적인 사람으로 태어나게 했습니다. 긍정적인 에너지는 주변을 밝게 하는 장점이나, 현실의 위험 요소를 간과하는 대책 없는 낙관주의가 우려되니 항상 대안을 마련해두는 습관을 지녀보시기 바랍니다.",
    "당신이 타고난 목(木)의 독립적 에너지는 누구의 도움 없이도 일가견을 이루게 하는 근원입니다. 홀로서기에 강한 면모가 장점이나, 협업이 필수적인 현대 사회에서 독선적으로 비칠 수 있으니 '우리'라는 가치를 함께 고민해보려는 노력이 필요합니다.",
    "당신의 내면의 목(木) 에너지는 명예를 목숨처럼 소중히 여기는 선비와 같은 기질을 부여합니다. 품격을 지키는 당당함이 장점이나, 체면을 중시하느라 실질적인 이익 앞에서 머뭇거려 손해를 볼 수 있으니 실리를 챙기는 영리한 태도를 병행하면 좋겠습니다.",
    "당신이 품은 목(木)의 본성은 상황의 핵심을 꿰뚫고 빠르게 대처하는 기민함을 만듭니다. 순발력이 뛰어난 것이 장점이나, 인내심이 다소 부족하여 결과가 조금만 늦어져도 쉽게 포기할 우려가 있으니 한 우물을 깊게 파보려는 집념을 길러보십시오.",
    "당신의 탄생 에너지인 목(木)은 지키고자 하는 대상을 위해 끝까지 저항하는 강직함을 의미합니다. 불의에 타협하지 않는 투지가 장점이나, 흑백논리에 갇혀 아군마저 적으로 돌릴 수 있으니 회색 지대의 가치를 인정하는 유연함을 갖추려 노력하십시오.",
    "당신이 가진 목(木)의 본질은 만물을 살리는 따스한 햇살 아래 자라는 숲과 같습니다. 조화와 균형을 중시하는 태도가 장점이나, 결정 장애에 가까운 우유부단함으로 기회를 놓칠 수 있으니 선택의 기준을 단순화하여 빠르게 결단하는 연습이 필요합니다.",
    "당신 내면의 목(木)의 에너지는 자신만의 독특한 세계관을 구축하게 하는 창조의 뿌리입니다. 독창적인 자기표현이 장점이나, 대중과의 소통 접점을 찾지 못해 외로워질 수 있으니 당신의 언어를 타인이 이해하기 쉽게 번역해보려는 노력을 해보십시오.",
    "당신의 근원을 지탱하는 목(木)의 힘은 어떤 압박에도 다시 일어서는 회복 탄력성입니다. 정신적 근성이 장점이나, 자신의 상처를 돌보지 않고 앞만 보고 달리면 건강을 해칠 수 있으니 몸과 마음의 신호에 더 예민하게 반응하는 시간을 가져보시기 바랍니다.",
    "당신이 품은 목(木)의 본질은 정보를 수집하고 전파하는 메신저의 성질을 띱니다. 소통의 중심이 되는 것이 장점이나, 가벼운 언행으로 비밀을 지키지 못해 신뢰를 잃을 수 있으니 말을 아끼고 행동으로 보여주려는 태도를 지향해보십시오.",
    "당신의 타고난 목(木) 에너지는 전통을 계승하면서도 새것을 창조하는 법고창신의 본능입니다. 노련함과 신선함을 동시에 갖춘 것이 장점이나, 양쪽 사이에서 정체성을 잃고 갈팡질팡할 수 있으니 본인만의 확고한 가치 중심을 세우려 노력하십시오.",
    "당신이 타고난 목(木)의 에너지는 사람들의 필요를 즉각 파악하여 채워주는 서비스 정신의 바탕입니다. 타인을 기쁘게 하는 능력이 장점이나, 자신의 욕구보다 타인의 만족에만 집착하여 자존감이 낮아질 수 있으니 스스로를 먼저 대접하는 연습을 해보십시오.",
    "당신의 영혼을 채운 목(木)의 본질은 무한한 잠재력을 가진 씨앗과 같습니다. 무엇이든 될 수 있는 가능성이 장점이나, 정작 하나를 깊게 파지 못하고 시간을 낭비할 수 있으니 지금 가장 중요한 한 가지에 집중하는 '선택과 집중'의 기술이 필요합니다."
  ],
  "화(火)": [
    "당신이 품은 화(火)의 본질은 태양처럼 세상을 밝히는 명랑함과 열정을 근간으로 합니다. 주변에 긍정적인 에너지를 전파하는 흡입력이 장점이나, 감정이 격해지면 앞뒤를 가리지 않고 폭발하는 성향이 있을 수 있으니 감정의 파도를 다스리는 명상적 습관을 가져보는 것도 좋겠습니다.",
    "화(火)의 타고난 에너지는 당신에게 어떤 자리에서든 주인공이 될 수 있는 스타성을 부여합니다. 자신을 당당하게 드러내는 자기표현력은 최고의 장점이지만, 타인의 주목을 받지 못하면 급격히 의욕을 잃을 수 있으니 혼자 있는 시간에도 스스로를 인정해주는 자존감을 키우려 노력하십시오.",
    "당신의 근본을 이루는 화(火)의 기운은 빠른 상황 판단과 빛의 속도와 같은 실행력을 타고나게 합니다. 단번에 결과를 도출하는 순발력이 장점이나, 디테일한 검토 없이 일을 벌여 수습에 애를 먹을 수 있으니 시작 단계에서 체크리스트를 활용하는 꼼꼼함을 보강해보시기 바랍니다.",
    "뜨겁게 타오르는 화(火)의 본질은 당신을 불의를 참지 못하는 정의의 사도로 만듭니다. 뜨거운 투쟁심과 용기가 큰 장점이지만, 유연함이 부족하여 공격적인 화법으로 적을 만들기 쉬우니 부드러운 언어로 진심을 전하는 기술을 익혀보려는 노력이 필요합니다.",
    "당신이 가진 화(火)의 주파수는 트렌드를 앞서가는 예리한 감각과 미적 통찰력의 원천입니다. 시대를 선도하는 세련미가 장점이나, 겉모습과 이미지에만 치중하여 내실이 비어 보일 수 있으니 보이지 않는 기초를 탄탄히 다지는 노력을 게을리하지 마십시오.",
    "내면에서 솟구치는 화(火)의 본능은 당신을 지치지 않는 열정가로 만듭니다. 목표를 향해 돌진하는 집중력이 장점이나, 목표 달성 후 찾아오는 깊은 허무함에 빠질 위험이 있으니 결과뿐만 아니라 과정을 즐기는 마음의 여유를 배워보십시오.",
    "당신이 품은 화(火)의 본질은 소통의 중심에서 온기를 전하는 사교의 명수임을 증명합니다. 사람 사이의 경계를 허무는 능력이 장점이나, 비밀 유지가 약하고 감정이 얼굴에 그대로 드러나 전략적 행동이 어려울 수 있으니 포커페이스를 유지하는 훈련이 가끔은 필요합니다.",
    "화(火)의 확산 에너지는 당신에게 방대한 인맥과 영향력을 선사하는 타고난 무기입니다. 카리스마가 장점이나, 사소한 일에도 자존심을 내세우다가 큰 이익을 놓칠 수 있으니 더 큰 목표를 위해 자신을 낮출 줄 아는 하심(下心)의 미덕을 길러보십시오.",
    "당신의 타고난 화(火) 기운은 어둠을 밝히는 등불처럼 지혜를 전파하는 교육적 자애로움을 의미합니다. 지식을 나누는 헌신이 장점이나, 자신의 생각이 정답이라고 믿는 오만함에 빠질 수 있으니 타인의 다른 의견을 경청하고 수용하려는 겸손함을 유지하려 노력하십시오.",
    "당신 내면의 화(火) 에너지는 상상을 현실로 만드는 화려한 기획력을 본능적으로 발휘하게 합니다. 창의성이 장점이나, 현실적인 예산이나 실무적 한계를 간과하는 몽상가적 기질이 우려되니 지극히 현실적인 조력자의 조언에 귀를 기울이는 태도가 중요합니다.",
    "화(火)의 변칙적인 불꽃 기운은 당신에게 유연한 사고와 위기 대처 능력을 부여하는 본질입니다. 임기응변이 뛰어난 것이 장점이나, 원칙과 규범을 가볍게 여겨 신뢰를 잃을 수 있으니 자신만의 확고한 도덕적 기준을 세우고 이를 지키려는 노력을 더해보십시오.",
    "당신이 타고난 화(火)의 본질은 순수하고 투명한 어린아이와 같은 심성을 의미합니다. 가식이 없는 정직함은 큰 장점이지만, 감정의 기복이 심하여 주변 사람들을 불안하게 할 수 있으니 스스로의 감정 상태를 객관적으로 관찰하는 일기를 써보는 것도 좋은 방법입니다.",
    "번개와 같은 화(火)의 영감은 당신에게 천재적인 직관력을 선사하는 근원입니다. 문제의 핵심을 찰나에 찌르는 통찰이 장점이나, 과정의 논리적 설명이 부족하여 주변의 동의를 얻기 힘들 수 있으니 자신의 직관을 타인이 이해하기 쉬운 언어로 설명하는 노력을 해보십시오.",
    "당신 영혼에 깃든 화(火)의 온기는 상처 입은 이들을 치유하는 자애로운 힐러의 타고난 기운입니다. 깊은 공감 능력이 장점이나, 타인의 부정적인 감정에 쉽게 전염되어 본인의 정신 건강이 위태로워질 수 있으니 타인의 고통과 자신의 일상을 분리하는 심리적 방어벽을 세우십시오.",
    "화(火)의 상향하는 불길은 당신을 끊임없이 더 높은 성공을 향해 달리게 하는 본능입니다. 승부욕이 장점인 엔진이지만, 성공을 위해 주변을 혹사시키는 폭군적 면모가 나타날 수 있으니 성공의 영광을 동료들과 기꺼이 나누려는 넉넉한 마음을 지니려 노력하십시오.",
    "당신의 근원을 이루는 화(火)의 에너지는 문명과 문화를 꽃피우는 예술적 본성을 돕습니다. 화려한 심미안이 장점이나, 현실적인 경제 관념이 부족하여 경제적 빈곤을 겪을 가능성이 있으니 자산 관리나 저축 등 실질적인 경제 활동에도 관심을 가져보시기 바랍니다.",
    "당신이 품은 화(火)의 본질은 단호하게 낡은 것을 태우고 새로움을 세우는 혁명적 기질입니다. 결단력이 장점이나, 충분한 준비 없이 판을 뒤집어 혼란을 가중할 수 있으니 개혁의 필요성만큼이나 수습의 계획도 치밀하게 세우려는 신중함을 보강하십시오.",
    "화(火)의 정열적인 에너지는 당신을 사랑과 헌신에 모든 것을 거는 인격체로 태어나게 했습니다. 뜨거운 진심이 장점이나, 한 번 마음이 식으면 극단적으로 냉정해지는 면이 있으니 인간관계에서 적절한 온도를 꾸준히 유지하려는 노력을 실천해 보십시오.",
    "당신의 타고난 화(火) 기운은 정보를 가공하고 소식을 알리는 미디어적 감각의 바탕입니다. 홍보 능력이 장점이나, 사실보다 과장된 포장에 집중하여 신뢰를 잃을 수 있으니 내실 있는 정보를 정직하게 전달하려는 태도를 최우선으로 하시기 바랍니다.",
    "내면의 화(火) 에너지는 당신을 예절과 격식을 소중히 여기는 신사로 만듭니다. 사회적 품격을 유지하는 태도가 장점이나, 남들에게 보여지는 이미지에 너무 집착하여 스스로의 삶이 피곤해질 수 있으니 타인의 시선에서 자유로워지는 연습을 해보십시오.",
    "화(火)의 폭발적인 추진력은 당신을 프로젝트의 강력한 행동 대장으로 이끄는 본능입니다. 결과물을 빠르게 뽑아내는 능력이 장점이나, 동료들의 속도를 배려하지 않아 고립될 수 있으니 팀워크의 조화가 성취보다 소중함을 잊지 마십시오.",
    "당신이 타고난 화(火)의 본질은 보이지 않는 주파수를 읽어내는 영적인 감각입니다. 예지력과 직관이 장점이나, 지극히 현실적인 행정 절차나 서류 업무에 무관심할 수 있으니 실무적인 디테일을 보완해줄 수 있는 꼼꼼한 파트너를 곁에 두십시오.",
    "당신 내면의 화(火)의 에너지는 지루한 반복을 거부하고 늘 새로운 것을 갈망하게 하는 근원입니다. 변화를 선도하는 능력이 장점이나, 한 우물을 파지 못해 전문가로서의 깊이가 부족해질 수 있으니 최소한 하나 이상의 분야에서는 정점을 찍겠다는 집념을 가져보십시오.",
    "화(火)의 화려한 불꽃 에너지는 당신에게 압도적인 카리스마와 연설 능력을 타고나게 합니다. 사람들의 마음을 움직이는 웅변이 장점이나, 말만 앞서고 실천이 따르지 않는다는 평가를 들을 수 있으니 약속한 것은 반드시 실행하는 신의를 보이십시오.",
    "당신의 본질인 화(火) 기운은 어떤 시련 앞에서도 다시 불씨를 살리는 불사조와 같은 생명력입니다. 위기 극복 능력이 장점이나, 고집이 너무 강해 부러질 때까지 멈추지 않는 무모함이 우려되니 상황에 따라 물러설 줄 아는 유연한 지혜를 기르십시오.",
    "화(火)의 따스한 빛은 당신을 주변의 갈등을 녹이는 평화주의자로 태어나게 했습니다. 조화로운 소통이 장점이나, 좋은 게 좋은 거라는 식의 안일한 대처로 문제를 키울 수 있으니 할 말은 정확히 하는 용기를 가져보려는 노력이 필요합니다.",
    "당신 영혼에 깃든 화(火)의 에너지는 모든 일을 즐거움으로 승화시키는 긍정의 마술이자 본성입니다. 낙천적인 태도가 장점이나, 진지함이 부족해 보여 중요한 자리에서 신뢰를 잃을 수 있으니 때와 장소에 맞는 격식을 갖추려는 정성을 들이십시오.",
    "당신이 품은 화(火)의 본질은 상황의 흐름을 한눈에 읽고 판을 짜는 지략적 머리입니다. 머리 회전이 빠른 것이 장점이나, 타인을 제 머리 위에서 조종하려는 교만함이 적을 만들 수 있으니 타인을 진심으로 존중하고 섬기는 하심의 리더십을 배우십시오.",
    "화(火)의 순수한 파동은 당신에게 도덕적인 고결함과 정의감을 타고나게 합니다. 깨끗한 가치관이 장점이나, 세상의 탁한 현실을 견디지 못해 예민해질 수 있으니 현실과 타협하기보다 현실을 정화하려는 넉넉한 인품을 기르려 노력하십시오.",
    "당신의 타고난 화(火) 기운은 찰나의 순간에 모든 것을 걸어 승부를 보는 모험가적 본능입니다. 과감한 배팅력이 장점이나, 도박에 가까운 무리수로 일생의 성취를 한순간에 날릴 수 있으니 철저한 리스크 계산 하에 움직이는 신중함을 더하십시오."
  ],
  "토(土)": [
    "당신이 타고난 토(土)의 본질은 대지처럼 모든 것을 품는 포용력과 묵직한 신용을 근간으로 합니다. 사람들의 신뢰를 얻는 안정감이 최고의 장점이지만, 때로는 변화에 대처하는 속도가 느려 기회를 놓칠 수 있으니 새로운 트렌드를 기꺼이 학습하려는 유연한 노력이 필요합니다.",
    "성실과 끈기를 상징하는 토(土)의 에너지는 당신을 조직의 든든한 버팀목으로 타고나게 했습니다. 맡은 바 책임을 다하는 완수 능력이 장점이나, 융통성이 부족하여 정해진 틀을 벗어나지 못하는 답답함을 줄 수 있으니 가끔은 규정보다 창의적인 해결책을 고민해보는 것도 좋겠습니다.",
    "당신의 근본을 이루는 토(土)의 기운은 중용의 지혜를 발휘하여 갈등을 봉합하는 중재자의 본능을 부여합니다. 화합을 이끄는 능력이 장점이나, 자기 목소리를 내야 할 때조차 침묵하여 권리를 뺏길 수 있으니 자신의 의사를 명확히 표현하는 연습을 해보시기 바랍니다.",
    "비옥한 대지와 같은 토(土)의 본질은 당신에게 타인을 양육하고 성공으로 이끄는 서포터의 능력을 줍니다. 이타적인 태도가 장점이지만, 거절을 못 해 남의 짐까지 짊어지다 스스로 지칠 수 있으니 타인의 문제와 자신의 삶 사이에 건강한 경계선을 세우려 노력하십시오.",
    "당신 내면의 토(土)의 에너지는 한 우물을 파서 깊이를 완성하는 전문가적 집념의 뿌리입니다. 흔들리지 않는 중심이 장점이나, 시야가 좁아져 거시적인 흐름을 놓치는 맹점이 있을 수 있으니 정기적으로 외부 세계와 소통하며 시야를 넓히는 시간을 가지십시오.",
    "당신이 품은 토(土)의 본질은 어떤 압박에도 흔들리지 않는 강철 같은 의지와 평정심을 의미합니다. 침착함이 장점이나, 감정 표현이 너무 없어 차갑고 무뚝뚝해 보일 수 있으니 가까운 사람들에게는 따뜻한 말 한마디로 마음을 전하는 노력을 아끼지 마십시오.",
    "토(土)의 응집하는 기운은 당신에게 자산을 축적하고 실속을 챙기는 실천적 경제 관념을 타고나게 합니다. 경제적 안정감이 장점이나, 안정을 최우선으로 하여 모험적인 큰 기회를 놓칠 수 있으니 가끔은 계산된 리스크를 감수해보는 용기가 필요합니다.",
    "당신의 영혼에 깃든 토(土)의 에너지는 전통을 소중히 여기고 본질을 지키는 수호자의 타고난 기질입니다. 근본을 잃지 않는 태도가 장점이나, 낡은 관습에 집착하여 새로운 변화를 배척할 우려가 있으니 변화의 물결을 타는 즐거움을 배워보려는 노력을 해보십시오.",
    "당신이 가진 토(土)의 주파수는 사물의 가치를 알아보고 부의 토대를 닦는 안목 있는 수완가의 본질을 의미합니다. 가치 발굴 능력이 장점이나, 의심이 많아 결정적인 인연을 놓칠 수 있으니 사람의 진심을 먼저 믿어보려는 열린 마음을 가져보는 것이 좋습니다.",
    "대륙을 잇는 대지와 같은 토(土)의 본질은 당신을 글로벌한 네트워크를 구축하는 중심축으로 만듭니다. 사람들을 연결하는 소통력이 장점이나, 본인의 깊은 속마음은 아무에게도 보여주지 않는 폐쇄성이 우려되니 진솔한 자기 고백을 통해 진정한 유대감을 쌓으려 노력하십시오.",
    "당신 내면의 토(土)의 에너지는 무질서 속에서 견고한 시스템을 구축하는 관리자적 재능의 바탕입니다. 안정화 능력이 장점이나, 절차와 형식에 너무 얽매여 창의성을 저해할 수 있으니 '왜 이 규칙이 필요한가'를 늘 질문하며 유연하게 운용하는 지혜를 기르십시오.",
    "당신이 품은 토(土)의 본질은 만물의 고통을 흡수하여 거름으로 만드는 숭고한 자비심을 상징합니다. 고결한 인격이 장점이나, 자신의 상처는 돌보지 않고 타인을 위해 희생만 하다 건강을 잃을 수 있으니 스스로를 돌보는 '자기 사랑'의 시간을 반드시 확보하십시오.",
    "토(土)의 묵직한 에너지는 당신을 어떤 유혹에도 흔들리지 않는 확고한 철학자로 태어나게 했습니다. 자기 주권이 확실한 것이 장점이나, 자신의 생각이 곧 정답이라고 고집하여 독선적으로 비칠 수 있으니 '내가 틀릴 수도 있다'는 가능성을 열어두는 겸손함을 기르십시오.",
    "당신이 타고난 토(土)의 본질은 높은 산처럼 세상을 멀리 내려다보는 거시적 통찰력을 의미합니다. 마스터플랜 설계가 장점이나, 당장 발등에 떨어진 사소한 실천을 소홀히 할 수 있으니 거창한 목표만큼이나 작은 습관을 유지하는 데에도 정성을 들이시기 바랍니다.",
    "당신의 근원을 지탱하는 토(土)의 힘은 사소한 것에서 거대한 가치를 만들어내는 온고지신의 타고난 정신입니다. 노련한 해결 능력이 장점이나, 과거의 성공 경험에만 안주하여 미래를 대비하지 못할 수 있으니 매일 자신을 새롭게 쇄신하려는 노력을 실천해 보십시오.",
    "토(土)의 평온한 기운은 당신을 늘 여유롭고 느긋한 성품의 소유자로 만듭니다. 주변을 편안하게 하는 본질이 장점이나, 나태함으로 인해 실행 타이밍을 놓치고 뒷북을 치는 경우가 잦을 수 있으니 마감 시간을 스스로 정해두고 엄격히 지키는 훈련을 하십시오.",
    "당신이 품은 토(土)의 본질은 도자기처럼 오랜 세월 단련되어 완성되는 우아한 기품을 의미합니다. 성숙한 매력이 장점이나, 완벽한 모습을 보여야 한다는 강박 때문에 남모를 스트레스가 심할 수 있으니 자신의 약점도 솔직하게 드러낼 수 있는 용기를 가져보십시오.",
    "토(土)의 비옥한 토양 에너지는 당신에게 지식과 정보를 수집하고 갈무리하는 탁월한 본능을 부여합니다. 아카이빙 능력이 장점이나, 정보 수집에만 매몰되어 정작 결과물을 내지 못할 수 있으니 배운 것을 즉시 성과로 연결하려는 실전적 감각을 보강하십시오.",
    "당신의 타고난 토(土) 기운은 법과 질서를 수호하며 공동체의 기틀을 바로잡는 법치 수호자적 본질입니다. 공정한 잣대가 장점이나, 예외 없는 적용으로 인정을 잃을 수 있으니 법의 정신 뒤에 숨은 인간적인 따스함을 먼저 고려하려 노력하십시오.",
    "당신 내면의 토(土)의 에너지는 사람들의 마음을 진정시키고 안식처를 제공하는 상담가적 타고난 자질입니다. 경청의 자세가 장점이나, 타인의 부정적인 에너지를 다 받아주다 본인의 멘탈이 무너질 수 있으니 감정의 찌꺼기를 씻어내는 정화의 시간을 꼭 가지십시오.",
    "당신이 가진 토(土)의 본질은 거대 조직의 배후에서 판을 짜고 지휘하는 킹메이커의 역량입니다. 치밀한 전략이 장점이나, 전면에 나서지 못하고 공로를 뺏기는 경우가 많을 수 있으니 자신의 가치를 당당히 홍보하고 성취를 주장하는 태도를 배우십시오.",
    "토(土)의 단단한 반석 에너지는 당신을 어떤 위기 상황에서도 변치 않는 의리의 소유자로 태어나게 했습니다. 두터운 우정이 장점이나, 배신당했을 때의 상처가 너무 커서 세상을 등질 위험이 있으니 사람에 대한 기대치를 낮추고 스스로의 힘으로 서려는 노력을 병행하십시오.",
    "당신의 타고난 토(土) 기운은 실질적인 부를 창출하기 위해 땅을 일구는 실전적 경제 전문가의 본질입니다. 근면함이 장점이나, 노동 가치에만 집착하여 자본의 레버리지를 활용하지 못할 수 있으니 현대적인 자산 증식 기술에도 관심을 가져보시기 바랍니다.",
    "당신이 품은 토(土)의 본질은 겉은 부드럽지만 속은 누구보다 단단한 외유내강의 전형입니다. 반전 매력이 장점이나, 속마음을 너무 숨긴 탓에 오해를 받아 가까운 이들과 거리가 생길 수 있으니 자신의 속 깊은 이야기를 먼저 건네는 다정함을 실천해 보십시오.",
    "토(土)의 정적인 에너지는 당신을 사색하고 명상하는 깊은 내면의 구도자적 본성으로 만듭니다. 높은 정신세계가 장점이나, 현실의 비즈니스나 인간관계에 무관심하여 생활이 곤궁해질 수 있으니 세속적인 성공도 정신 수양의 일부로 받아들이려 노력하십시오.",
    "당신 내면의 토(土)의 에너지는 무너져가는 것을 다시 세우고 보강하는 재생의 마법사 기질의 원천입니다. 복구 능력이 장점이나, 이미 끝난 일에 미련을 두어 새로운 시작을 늦출 수 있으니 과거를 깨끗이 잊고 미래를 향해 고개를 돌리는 연습이 필요합니다.",
    "당신이 타고난 토(土)의 본질은 모든 원소를 조화롭게 섞어 새로운 결과물을 만드는 융합의 힘입니다. 시너지를 내는 능력이 장점이나, 자기만의 확실한 색깔이 부족하여 주변에 휩쓸릴 수 있으니 타인의 생각에 앞서 본인의 기준을 먼저 세우는 습관을 지니십시오.",
    "토(土)의 묵직한 무게감은 당신을 말보다는 행동으로 가치를 증명하는 묵직한 인격체로 타고나게 했습니다. 신중한 언행이 장점이나, 소통이 너무 느려 답답함을 유발할 수 있으니 자신의 진행 상황을 중간중간 공유하는 친절함을 베풀어 보시기 바랍니다.",
    "당신의 근원을 이루는 토(土)의 에너지는 세상을 지탱하는 보이지 않는 인프라와 같은 본질입니다. 묵묵히 기여하는 헌신이 장점이나, 자신의 가치를 홍보하지 않아 정당한 보상을 받지 못할 수 있으니 가끔은 자신의 성과를 화려하게 드러내는 쇼맨십도 필요합니다.",
    "당신이 품은 토(土)의 본질은 어떠한 기후에도 변하지 않는 사막의 고독한 강인함입니다. 자립 능력이 장점이나, 타인의 도움을 불필요한 간섭으로 여겨 성장을 차단할 수 있으니 타인의 지혜를 빌려 더 높이 올라가는 지혜를 배워보려 노력하십시오."
  ],
  "금(金)": [
    "당신이 타고난 금(金)의 본질은 시련 속에서 단단하게 벼려진 날카로운 결단력과 결기를 근간으로 합니다. 해결사 능력이 장점이나, 지나치게 냉정하여 주변에 상처를 줄 수 있으니 자신의 결단에 따뜻한 배려를 한 스푼 섞으려는 노력을 더해 보십시오.",
    "정의와 원칙을 상징하는 금(金)의 에너지는 당신을 청렴하고 흔들리지 않는 완벽주의자로 태어나게 했습니다. 도덕적 고결함이 장점이나, 흑백논리에 갇혀 유연함을 잃을 수 있으니 세상의 다양한 색깔을 인정하고 수용해보려는 넓은 마음을 가져보시기 바랍니다.",
    "당신의 근본을 이루는 금(金)의 기운은 말보다 행동으로 가치를 증명하는 실전가의 타고난 무기입니다. 실무 능력이 압도적인 장점이나, 감성적인 소통이 필요한 곳에서도 원칙만 내세워 갈등을 빚을 수 있으니 마음과 마음이 만나는 대화에 정성을 쏟아 보십시오.",
    "정련된 보석과 같은 금(金)의 본질은 당신에게 미세한 결함도 용납하지 않는 디테일의 눈을 부여합니다. 완벽한 마무리가 최고의 장점이나, 사소한 것에 목숨을 걸다 큰 흐름을 놓칠 수 있으니 나무보다 숲을 보려는 거시적 안목을 기르려 노력하십시오.",
    "당신 내면의 금(金)의 에너지는 조직의 기강을 바로잡고 전진하게 하는 카리스마 넘치는 지휘관의 기질입니다. 위엄 있는 태도가 장점이나, 부하 직원들을 향한 독설로 원망을 살 수 있으니 비판보다 격려로 사람을 움직이는 부드러운 리더십을 익혀보십시오.",
    "당신이 품은 금(金)의 본질은 방대한 수치를 분석하여 리스크를 예측하는 냉철한 전략가임을 의미합니다. 정확한 분석력이 장점이나, 숫자 뒤에 숨겨진 사람의 마음을 읽지 못해 소외될 수 있으니 데이터만큼이나 인간관계의 온도에도 신경을 쓰시기 바랍니다.",
    "금(金)의 견고한 방어력은 당신에게 시스템의 본질을 지켜내는 강력한 보안 본능을 부여합니다. 핵심을 수호하는 힘이 장점이나, 외부의 새로운 의견을 배척하여 정체될 수 있으니 낯선 정보에 대해서도 일단은 들어보는 개방적인 태도를 가져보십시오.",
    "당신의 영혼에 깃든 금(金)의 에너지는 스스로를 채찍질하며 한계에 도전하는 불굴의 의지를 타고나게 합니다. 정신적 근성이 장점이나, 타인에게도 고통스러운 기준을 강요할 수 있으니 각자의 한계를 존중해주는 자비심을 기르려 노력하십시오.",
    "당신의 금(金) 주파수는 위기 상황에서 생명을 구하고 혼란을 수습하는 결정권자의 본질을 의미합니다. 명검 같은 능력이 장점이나, 평온한 일상에서는 삶의 의미를 찾지 못해 무기력해질 수 있으니 소소한 취미를 통해 일상의 즐거움을 발견해보는 노력을 하십시오.",
    "단단한 원석과 같은 금(金)의 본성은 당신을 한 번 결심한 것은 끝까지 밀어붙이는 뚝심의 소유자로 만듭니다. 우직한 성실함이 장점이나, 방향이 잘못되었을 때 멈추지 못해 큰 손실을 입을 수 있으니 정기적으로 자신의 방향을 의심하고 점검하는 지혜가 필요합니다.",
    "당신 내면의 금(金)의 에너지는 옥석을 구분하여 잠재력에 투자하는 공정한 평가자의 눈을 타고나게 합니다. 미래를 읽는 안목이 장점이나, 당장 수익이 나지 않는 가치를 너무 일찍 버릴 수 있으니 가능성의 씨앗이 자랄 때까지 기다려주는 인내심을 길러보십시오.",
    "당신이 품은 금(金)의 본질은 복잡한 현상을 단순화하여 명쾌한 해결책을 제시하는 지혜로운 혁신가입니다. 효율적 설계 능력이 장점이나, 관료주의적 절차를 무시하여 조직과 충돌할 수 있으니 최소한의 형식은 존중하려는 사회적 유연성을 보강해 보시기 바랍니다.",
    "금(金)의 독립적 에너지는 당신을 누구에게도 휘둘리지 않고 신념을 관철하는 강력한 주권자로 태어나게 했습니다. 주체성이 장점이나, 강직함이 독선이 되어 고립될 우려가 있으니 주변과 화합하며 제국을 넓혀가는 포용적인 정치를 배워보려는 노력이 필요합니다.",
    "당신이 타고난 금(金)의 본질은 법과 정의를 엄격히 집행하여 사회의 품격을 수호하는 고결한 공직자의 기운입니다. 질서 확립 능력이 장점이나, 법전에만 매몰되어 인본주의적 가치를 놓칠 수 있으니 법의 정신보다 법의 목적(사람)을 먼저 생각하십시오.",
    "당신의 근원을 지탱하는 금(金)의 힘은 세상의 난제를 논리적으로 해결하는 정밀 소자와 같은 타고난 지성입니다. 알고리즘 설계 능력이 장점이나, 모순된 상황을 견디지 못해 히스테리적 반응을 보일 수 있으니 세상의 부조리조차 삶의 한 단면으로 인정해보십시오.",
    "금(金)의 예리한 통찰은 당신을 진실과 거짓을 가려내는 날카로운 프로파일러의 본질로 만듭니다. 진실 규명 능력이 장점이나, 타인의 어두운 면만 들여다보며 냉소적으로 변할 수 있으니 사람들의 선한 의지를 믿어보려는 따뜻한 노력을 멈추지 마십시오.",
    "당신이 품은 금(金)의 본질은 핵심 기밀을 수호하고 은밀하게 과업을 완수하는 보안 인재의 기질입니다. 기밀 유지 능력이 장점이나, 비밀이 너무 많아 가까운 이들과 소외될 수 있으니 가족과 친구들에게는 마음의 빗장을 조금 열어두는 다정함을 보이십시오.",
    "금(金)의 서늘한 감성은 당신을 시대를 풍자하고 권력을 견제하는 날카로운 논설가로 타고나게 합니다. 문장력이 장점이나, 자신의 펜이 파괴적인 비난에만 쓰일 우려가 있으니 비판 뒤에는 반드시 세상을 살릴 대안을 덧붙이는 건설적인 태도를 갖추십시오.",
    "당신의 타고난 금(金) 기운은 거대 조직의 기강을 세우고 국가의 비전을 설계하는 총괄 설계자의 본질입니다. 국정 설계 능력이 장점이나, 자존심이 꺾일 때 갑작스럽게 은둔할 위험이 있으니 어떤 풍파에도 끝까지 자리를 지키는 끈기를 길러보시기 바랍니다.",
    "당신 내면의 금(金)의 에너지는 역사에 남을 성취와 절대적 가치를 실현하는 전설적 명장의 기질을 만듭니다. 불멸의 가치 창조가 장점이나, 세속적 욕망을 무시하여 주변 사람들을 힘들게 할 수 있으니 현실의 행복과 조화를 이루려는 노력을 실천해 보십시오.",
    "당신의 금(金) 본질은 위기의 순간 가장 먼저 달려가 조직을 구하는 명검과 같은 수호자의 모습입니다. 정의감이 최고의 장점이나, 독단적 판단으로 공적 자산에 손실을 끼칠 수 있으니 반드시 절차를 밟고 동의를 구하는 신중함을 잊지 마십시오.",
    "금(金)의 맑은 샘물 에너지는 차가운 바위 속에서 솟아나듯 순수한 지성과 깨끗한 영혼을 의미합니다. 통찰력이 장점이나, 현실의 탁한 인간관계를 견디지 못해 스스로를 가둘 수 있으니 진흙 속에서 피는 연꽃처럼 세상과 어울리는 법을 배워보십시오.",
    "당신의 타고난 금(金) 본성은 정해진 목표를 향해 미사일처럼 날아가 정확히 타격하는 정밀 타격형 인재의 속성입니다. 실천력이 장점이나, 목표 이외의 가치들을 파괴하며 전진할 수 있으니 과정에서의 생명 존중과 조화에 더 많은 정성을 들이시기 바랍니다.",
    "당신이 품은 금(金)의 본질은 단단한 금속이 서로 부딪치며 소리를 내듯 명쾌하고 직선적인 커뮤니케이션입니다. 결론부터 말하는 명확함이 장점이나, 배려 없는 화법으로 인덕을 깎아먹을 수 있으니 말하기 전 상대의 감정을 먼저 살피십시오.",
    "금(金)의 변치 않는 보석 에너지는 당신을 한 번 맺은 인연에 대해 지조와 절개를 지키는 의리의 소유자로 태어나게 했습니다. 충성심이 장점이나, 과거의 의리에만 매몰되어 도태될 수 있으니 새로운 시대의 가치와 끊임없이 소통하려 노력하십시오.",
    "당신 내면의 금(金)의 에너지는 불필요한 감정을 제거하고 기계처럼 완벽하게 작동하는 무결점의 인격체를 추구하게 합니다. 실수 없는 완벽함이 장점이나, 인간미 없는 로봇 같다는 평을 들을 수 있으니 자신의 실수조차 웃어넘길 수 있는 넉넉함을 가져보십시오.",
    "당신이 타고난 금(金)의 본질은 가장 차가운 땅에서 피어난 꽃처럼 극한의 환경에서 꽃피우는 인내의 힘입니다. 시련 속에서 빛나는 것이 장점이나, 평온한 삶에서는 무기력해질 수 있으니 스스로 새로운 과제를 부여하며 끊임없이 도전하는 삶을 사십시오.",
    "금(金)의 예리한 칼날 에너지는 당신을 복잡한 이해관계를 단숨에 정리하는 효율성의 화신으로 만듭니다. 맺고 끊음이 장점이나, 사람의 정이 필요한 순간에도 선을 그어 비정함을 느끼게 할 수 있으니 가끔은 손해를 보더라도 품어주는 미덕을 연습하십시오.",
    "당신의 근원을 이루는 금(金)의 에너지는 빛나는 금속처럼 자신을 연마하고 단련하여 명성을 얻게 하는 본능입니다. 자기 관리가 장점이나, 완벽에 대한 강박으로 주변을 압박할 수 있으니 '느슨함'이 주는 의외의 창의성을 즐겨보는 노력을 해보십시오.",
    "당신이 품은 금(金)의 본질은 찰나의 영감을 포착하여 비즈니스로 연결하는 날카로운 안목입니다. 수익 창출 능력이 장점이나, 도덕적 가치보다 눈앞의 결과에만 집중할 위험이 있으니 올바른 기업가 정신을 세우는 데 더 많은 노력을 기울이시기 바랍니다."
  ],
  "수(水)": [
    "당신이 타고난 수(水)의 본질은 보이지 않는 물자와 자본의 흐름을 읽어 부를 창출하는 지혜로운 책사 기운을 근간으로 합니다. 통찰력이 장점이나, 생각이 너무 많아 실행 타이밍을 놓칠 수 있으니 '단순함'의 가치를 믿고 일단 뛰어들어보는 용기를 더해보십시오.",
    "만물의 성장을 돕는 생명의 근원인 수(水)의 에너지는 당신을 타인을 인도하는 자비로운 가이드로 태어나게 했습니다. 길잡이 역할이 장점이나, 정작 자신의 삶은 방황하며 내적 혼란을 겪을 수 있으니 주기적으로 자신만의 고요한 '침묵의 시간'을 가져보시기 바랍니다.",
    "당신의 근본을 이루는 수(水)의 기운은 이해관계를 유연하게 조율하여 이익을 극대화하는 외교적 중재 능력입니다. 화합을 이끄는 것이 장점이나, 기회주의자로 오해받을 우려가 있으니 자신의 확고한 가치 철학을 먼저 세상에 공표한 뒤 소통하려 노력하십시오.",
    "변화의 파도를 타는 수(水)의 본질은 당신에게 시장을 선점하고 기회를 낚아채는 선구자적 에너지를 부여합니다. 선견지명이 장점이나, 내면의 중심이 흔들릴 때 걷잡을 수 없이 무너질 위험이 있으니 흔들리지 않는 자기 암시와 마인드 컨트롤 훈련이 필요합니다.",
    "당신 내면의 수(水)의 에너지는 리스크를 정밀하게 계산하고 이동 경로를 설계하는 전략적 지능의 뿌리입니다. 정교한 기획력이 장점이나, 숫자와 데이터로만 세상을 보려다 인간미를 잃을 수 있으니 사람의 온기가 담긴 아날로그적 감성도 함께 챙기려 노력하십시오.",
    "당신이 품은 수(水)의 본질은 사건의 본질을 꿰뚫고 가공되지 않은 진실을 전달하는 투명한 분석가임을 의미합니다. 진실 발굴 능력이 장점이나, 비밀을 폭로하는 과정에서 불필요한 적을 만들 수 있으니 진실을 전달하는 '방식'에 더 많은 배려와 지혜를 담으십시오.",
    "수(水)의 지식 연금술 에너지는 당신에게 지혜를 자산으로 바꾸는 놀라운 본능을 부여합니다. 플랫폼 기획력이 장점이나, 머릿속 지식을 현실의 근육으로 실행하는 힘이 부족할 수 있으니 몸으로 부딪히는 실전 경험을 더 많이 쌓으려는 노력이 뒷받침되어야 합니다.",
    "당신의 영혼에 깃든 수(水)의 본질은 과열된 경쟁 속에서도 냉정을 유지하며 거대 자본을 주도하게 합니다. 승부사 기질이 장점이나, 돈의 흐름에만 집착하여 고독한 부자가 될 수 있으니 가장 가까운 사람의 마음을 얻는 것을 부의 척도로 삼아 보십시오.",
    "당신의 수(水) 주파수는 조직의 품격과 인재의 흐름을 최적화하는 인자한 리더십의 본원입니다. 매니지먼트 능력이 장점이나, 자신의 비전을 대중의 언어로 설명하는 소통력이 부족할 수 있으니 쉬운 비유와 따뜻한 대화법을 익히는 데 정성을 들이시기 바랍니다.",
    "전 세계를 잇는 운하와 같은 수(水)의 본질은 당신을 거대한 유통 체계를 구축하고 질서를 세우는 물류의 달인으로 만듭니다. 시스템 설계가 장점이나, 동선이 꼬일 때 병적으로 예민해질 수 있으니 예측 불가능한 변수조차 즐기는 대범한 마음을 기르려 노력하십시오.",
    "당신 내면의 수(水)의 에너지는 지혜의 빛으로 대중을 계몽하고 사회적 격을 높이는 지식 리더의 자질입니다. 교육적 성품이 장점이나, 지식이 부족한 대중을 무시하는 엘리트 의식에 빠질 수 있으니 모든 이가 나의 스승이라는 겸허한 마음을 평생 유지하십시오.",
    "당신이 품은 수(水)의 본질은 조직 내 갈등을 씻어내고 평화를 유지하는 정화와 치유의 힘을 상징합니다. 정서적 정화 능력이 장점이나, 타인의 부정적인 에너지를 다 받아주다 정작 본인이 먼저 병들 수 있으니 자신만의 감정 배출구를 반드시 만들어 두십시오.",
    "수(水)의 지략적 본성은 당신을 극한의 압박 속에서도 오아시스 같은 해답을 찾아내는 해결사로 만듭니다. 수습 능력이 장점이나, 모든 책임을 홀로 짊어지는 독박 운명이 우려되니 동료들의 역량을 믿고 권한을 과감히 위임하는 지혜를 발휘하십시오.",
    "당신의 타고난 수(水) 기운은 가치 있는 지혜를 기록하여 미래의 이정표를 세우는 기록의 수호자입니다. 기록 보존 능력이 장점이나, 과거 데이터에만 매몰되어 현실 변화를 읽지 못할 수 있으니 미래학 책을 즐겨 읽으며 내일의 파도를 미리 예측하는 노력을 하십시오.",
    "당신 내면의 수(水)의 에너지는 소수 정예와 깊은 신뢰를 쌓고 하이엔드 자산을 증식시키는 럭셔리 보좌관 기질입니다. 선별력이 장점이나, 대중과의 소통을 거부하는 선민의식으로 적이 생길 수 있으니 평범한 사람들의 일상에도 관심을 갖는 유연함을 갖추십시오.",
    "당신이 가진 수(水)의 본질은 시공간을 초월하는 영감으로 새로운 서사를 창조하는 신비로운 아티스트의 모습입니다. 창의성이 장점이나, 현실 행정이나 경제 계산에 어린아이처럼 무능할 수 있으니 현실의 틀을 관리해줄 유능한 대리인을 반드시 곁에 두십시오.",
    "수(水)의 깊은 심연 에너지는 법의 자구를 넘어 그 정신을 해석하고 인권을 수호하는 타고난 법의 정수를 부여합니다. 정의감이 장점이나, 법보다 감성이 앞서 공정성을 의심받을 수 있으니 판결 전에 자신의 감정을 객관화하는 훈련을 꾸준히 해보십시오.",
    "당신의 타고난 수(水) 본성은 인간 심리를 분석하여 디지털 시대의 지도를 그리는 데이터 전략가의 기질입니다. 프로파일링 능력이 장점이나, 차가운 수치에 매몰되어 따뜻한 체온을 잊을 수 있으니 가끔은 숫자 없는 아날로그 여행을 떠나 사람 냄새를 맡으십시오.",
    "당신이 품은 수(水)의 본질은 사라져가는 것들에 숨을 불어넣어 다시 살려내는 재생의 마법사와 같습니다. 브랜딩 능력이 장점이나, 대중의 빠른 변화 속도를 따라가지 못해 힘겨울 수 있으니 새로운 세대의 감각을 편견 없이 배우려는 태도를 견지하십시오.",
    "수(水)의 지식 구도자 에너지는 당신에게 우주의 원리를 깨닫고 근본 해답을 탐구하는 깊은 철학적 사고를 부여합니다. 지적 깊이가 장점이나, 세속적 성공을 비웃다가 경제적 결핍에 빠질 수 있으니 물질적인 풍요 역시 영적 성장의 수단임을 이해하십시오.",
    "당신 내면의 수(水)의 에너지는 인생의 허무를 지혜로 승화시켜 사색의 가치를 전파하는 인문학적 스승의 자질입니다. 내면 탐구 능력이 장점이나, 현대 사회에서 낙오자라는 불안감을 수시로 느낄 수 있으니 자신만의 속도가 곧 정답임을 스스로에게 매일 속삭여주십시오.",
    "당신이 타고난 수(水)의 본질은 인류의 지적 유산을 체계화하여 공유하는 지식의 대양과 같은 거물입니다. 박학다식함이 장점이나, 지식을 사리사욕을 위해 쓰려는 이들에게 이용당할 수 있으니 자신의 지혜가 어디로 흐르는지 냉철하게 감시하는 눈을 가지십시오.",
    "수(水)의 독창성 에너지는 당신에게 미지의 영역을 개척하여 세상을 놀라게 할 천재적 본능을 선사합니다. 기발함이 장점이나, 세상을 향해 벽을 쌓고 단절을 선택할 위험이 있으니 당신의 천재성을 대중의 언어로 번역해주는 가교 역할을 할 사람을 찾으십시오.",
    "당신의 타고난 수(水) 본질은 국제 정세의 해답을 찾아내는 지략가이자 글로벌 유통 시장의 리더 기질입니다. 지휘 능력이 장점이나, 복잡할수록 단순한 원칙을 놓쳐 대패할 위험이 있으니 가장 기본이 되는 정직과 신용의 가치를 늘 상기하려 노력하십시오.",
    "당신 내면의 수(水)의 에너지는 깊은 바다처럼 속을 알 수 없는 비밀스러움과 거대한 잠재력을 지니게 합니다. 무게감이 장점이나, 지나친 폐쇄성으로 가족과도 소외될 수 있으니 당신의 깊은 심연을 사랑하는 이들에게는 기꺼이 보여주는 용기를 내십시오.",
    "수(水)의 침투 에너지는 당신에게 어디든 스며들어 정보를 빼내고 판을 흔드는 첩보원적 기민함을 부여합니다. 민첩함이 장점이나, 정체성이 불분명해져 혼란을 겪을 수 있으니 고요히 혼자 있는 시간을 통해 '진짜 나'를 되찾는 작업을 매일 실천하십시오.",
    "당신이 품은 수(水)의 본질은 얼어붙은 땅 밑에서 봄을 기다리는 수분처럼 거대한 인내와 희망의 상징입니다. 때를 기다리는 힘이 장점이나, 너무 오래 기다리다 기회를 썩히는 우유부단함이 우려되니 행동해야 할 때는 폭포처럼 쏟아지는 과감함을 배우십시오.",
    "수(水)의 변칙적인 기운은 당신에게 사람들의 욕망을 자극하여 거대한 유행을 만들어내는 트렌드의 술사적 자질을 줍니다. 심리 파악이 장점이나, 본인의 삶 역시 휘발적으로 흐를 수 있으니 고전의 가치에서 변치 않는 인생의 축을 찾아보려 노력하십시오.",
    "당신 내면의 수(水)의 에너지는 모든 더러운 것을 씻어내어 맑게 만드는 정화의 샘물과 같은 고결함을 만듭니다. 도덕성이 장점이나, 추악한 현실을 견디지 못해 히스테리적 반응을 보일 수 있으니 세상의 불완전함조차 사랑으로 품으려는 넓은 기량을 기르십시오.",
    "당신이 타고난 수(水)의 본질은 극한의 고독 속에서 지혜의 진주를 빚어내는 고고한 철학자의 기운입니다. 높은 정신적 성취가 장점이나, 경제 기반과 유대감이 늘 취약할 수 있으니 현실의 땅 위에 발을 굳게 딛고 세속의 삶도 소중히 가꾸려는 실용적 태도를 갖추십시오."
  ]
};
// 4. [📜 현생의 과업] 영문 기질 (Hanja 제거 완료)
 const birthCoreEn = {
  "목(木)": [
    "Your innate Wood essence is rooted in a powerful vitality that pushes through the toughest soil to reach for the light. This natural independence and pioneering drive are your greatest assets, yet like a sturdy tree, you may sometimes lack the flexibility to compromise; remember that even the strongest oak must bend in the wind to thrive.",
    "The unstoppable energy of Wood within you grants a restless spirit of challenge and self-improvement. Your integrity in branching toward your goals is unrivaled, but be careful not to lash yourself too hard with ambition; allow yourself the grace to appreciate the height you have already reached.",
    "Possessing a benevolent Wood nature, you have a natural gift for nurturing others and unlocking their hidden potential. While your inclusive warmth is your greatest treasure, your inability to say 'no' can lead to self-neglect; practice the art of firm boundaries to protect your own roots.",
    "Deep within you lies the Wood energy of a master designer, capable of creating order out of chaos. Your planning and creativity are exceptional, though you may sometimes find your branches spreading too thin before the fruit is ripe; focus on the final stages of execution to see your visions truly flourish.",
    "The upward drive of your Wood essence is the natural engine that grows you into a dependable leader. Your sense of responsibility and justice are noble traits, but imposing your strict standards on others can stifle their growth; remember that a forest thrives when every tree grows at its own pace.",
    "Your Wood essence signifies a resilient self-sufficiency that can sprout in any environment. Your ability to find answers in a crisis is a gift, but you may struggle to stay rooted in one place as you constantly seek new stimuli; cultivate the patience to see a single path through to the end.",
    "Like a straight bamboo, your Wood nature represents a high-minded and unwavering integrity. Your strength in your convictions earns great trust, but a lack of flexibility may leave you behind as times change; try to embrace new values without prejudice to keep your spirit evergreen.",
    "The vibrant frequency of Wood in your spirit manifests as a social nature that breathes life into any circle. Your affinity for others is an overwhelming strength, but because you trust so easily, you are prone to deep wounds; exercise the wisdom of keeping a healthy distance in your relationships.",
    "Your birth energy of Wood maximizes intellectual curiosity, aiding in great academic and spiritual achievements. Your deep insight is your power, but becoming too immersed in idealistic values over practical reality can weaken your foundation; stay grounded by engaging with the functional side of life.",
    "The flexibility of a willow branch in your Wood nature makes you a welcomed mediator in any group. Your ability to harmonize conflict is a gift, but failing to assert yourself in decisive moments can cost you opportunities; practice stating your own rights as clearly as you help others.",
    "Your Wood drive is the very spirit of a pioneer planting a flag where others see only impossibility. Your bold execution is your greatest asset, but a recklessness that ignores the aftermath can lead to unnecessary risks; add a layer of careful simulation before you begin your next leap.",
    "The Wood energy in your soul symbolizes pure passion and a clear, honest heart. Your transparent nature is a breath of fresh air, but your directness can inadvertently wound those around you; take a three-second pause before speaking to ensure your words are as kind as your intent.",
    "Like a deep-rooted ancient tree, your Wood essence provides an unwavering sense of stability to everyone around you. This weight of trust is your strength, but you may become isolated if you are too slow to adopt change; actively listen to younger perspectives to keep your branches reaching high.",
    "You ride the rising currents of Wood with the natural instinct of an achiever aiming for the summit. Your ability to present a grand vision is a gift, but overlooking small yet vital details can lead to setbacks; partner with those who see the 'micro' while you focus on the 'macro'.",
    "The delicate Wood energy you carry is the source of an artistic sense that finds beauty in the unseen. Your aesthetic eye is exceptional, but being emotionally sensitive can make you vulnerable to criticism; work on building a sturdy inner ego that protects your creative spirit.",
    "The Wood energy at your core creates a compassion that cannot ignore the suffering of others. Your devotion is a great strength, but helping others beyond your limits can lead to burnout; remember that you must water your own roots first before you can shade the world.",
    "Your Wood spirit is the very instinct for change that makes stagnant waters flow again. Your innovative thinking is a gift, but dismissing tradition too easily can create unnecessary friction; try to find the wisdom within the past to better inform your vision for the future.",
    "Your innate Wood energy represents an intellectual precision in analyzing info and establishing systems. Your logical completeness is a strength, but ignoring the non-logical realm of emotion can leave your relationships dry; learning the language of empathy will make your intellect truly shine.",
    "Infused with the spirit of spring, your Wood essence makes you a hopeful and optimistic person. Your positive energy brightens your surroundings, but be wary of a reckless optimism that overlooks risks; develop a habit of preparing 'Plan B' to protect your bright dreams.",
    "The independent Wood energy you were born with is the root of your ability to succeed without needing to lean on others. This self-reliance is a strength, but you may appear dogmatic in collaborative environments; try to embrace the value of 'we' to reach heights you cannot reach alone.",
    "Your inner Wood energy grants you the temperament of a noble scholar who values honor above all else. Your dignity is your pride, but hesitating before practical gains to save face can lead to loss; balance your high ideals with a touch of practical savvy.",
    "Your Wood nature creates a mental agility that pierces the core of a situation for a rapid response. Your quick wit is a gift, but a lack of patience may cause you to give up if results are not immediate; cultivate the grit to dig one well deep until the water flows.",
    "The Wood energy of your birth signifies a fierce rigidity for the sake of what you wish to protect. Your refusal to compromise with injustice is a strength, but being trapped in black-and-white logic can turn allies into foes; try to see the value in the gray areas of life.",
    "Your Wood essence is like a forest growing under the warm sun, providing life to all. Your focus on harmony is a strength, but indecisiveness can cause you to miss key windows of opportunity; simplify your criteria for choosing to sharpen your decision-making.",
    "The Wood energy within you is the root of a creation that builds a unique worldview. Your original self-expression is a gift, but you may feel lonely if the world doesn't understand you; try 'translating' your unique language so that others can appreciate your vision.",
    "The Wood strength supporting your core is a resilience that rises again after any pressure. This mental grit is a strength, but ignoring your own wounds while running forward can harm your health; take time to listen more sensitively to the signals of your own mind and body.",
    "Your Wood nature has the quality of a messenger who collects and spreads information. Being at the center of communication is a gift, but careless words can leak secrets and cost you trust; aim for a silent dignity where your actions speak louder than your words.",
    "Your innate Wood energy is the instinct of creating something new while inheriting the old. Your balance of seasoned experience and freshness is a strength, but you may vacillate between the two; establish a firm value-center of your own to find your true path.",
    "Your Wood energy is the basis of a service spirit that quickly senses and fills the needs of others. Making others happy is a gift, but obsessing over their satisfaction can lower your own self-esteem; practice the art of treating yourself with the same care you give to the world.",
    "The Wood essence filling your soul is like a seed with infinite potential. The fact that you can become anything is your power, but you may waste time by not digging deep into one thing; learn the art of 'selection and focus' on what matters most right now."
  ],
  "화(火)": [
    "Your Fire essence is rooted in a brilliance and passion that brightens the world like the sun. Your magnetic pull of positive energy is your greatest asset, but when emotions run high, you may explode without caution; cultivate a meditative habit to manage your emotional tides.",
    "The innate energy of Fire grants you a star-like quality that makes you the protagonist in any setting. Your confident self-expression is a supreme gift, but you may feel a deep void if you don't receive attention; work on building a self-esteem that recognizes its own value in solitude.",
    "The Fire at your core grants a quick judgment and execution that moves at the speed of light. Your agility in producing results is a strength, but starting things without a detailed review can lead to trouble later; bolster your plans with a meticulous checklist.",
    "Burning with a fierce Fire essence, you are a natural warrior for justice who cannot tolerate unfairness. Your courage is a gift, but a lack of flexibility can create enemies through aggressive speech; learn the art of conveying truth through gentle language.",
    "The Fire frequency you carry is the source of a sharp aesthetic insight and trend-setting sense. Your sophistication is a strength, but focusing only on image can make you appear hollow; do not neglect to build a solid foundation beneath your brilliant exterior.",
    "The Fire instinct surging within makes you a tireless enthusiast. Your focus on reaching goals is a strength, but the deep void and exhaustion after achieving them can be a trap; learn to appreciate the process as much as the result to find lasting peace.",
    "Your Fire essence proves you are a master of social grace who brings warmth to the center of any group. Your ability to break down barriers is a gift, but your emotions are so visible that strategic action can be difficult; occasionally, a 'poker face' is necessary for your protection.",
    "The expansive energy of Fire is a natural weapon that grants you vast networks and influence. Your charisma is a strength, but prioritizing pride over small matters can cost you major gains; cultivate the virtue of humility to keep your eyes on the larger prize.",
    "Your innate Fire energy signifies an educational benevolence that spreads wisdom like a lamp in the dark. Your devotion to sharing knowledge is a strength, but believing your thoughts are the only answer can be a pitfall; stay humble by listening to the diverse perspectives of others.",
    "Your inner Fire energy instinctively exerts a brilliant planning power that turns imagination into reality. Your creativity is a gift, but ignoring practical budgets or limitations can make you a dreamer; value the advice of realistic partners to ground your visions.",
    "The irregular sparks of Fire within you grant a flexible mind and the ability to handle crises. Your quick improvisation is a strength, but dismissing rules can cost you trust; establish your own firm moral compass and strive to stick to it.",
    "The Fire essence you were born with signifies a pure heart, much like a transparent child. Your lack of pretense is a gift, but your emotional fluctuations can unsettle those around you; try keeping a journal to objectively observe your own emotional states.",
    "Like a bolt of lightning, your Fire inspiration grants you a genius-level intuition. Your ability to pierce the core of a problem is a strength, but a lack of logical process can make it hard to gain consensus; try 'translating' your flashes of insight into language others can follow.",
    "The Fire warmth in your soul is the innate energy of a benevolent healer who comforts the wounded. Your deep empathy is a gift, but absorbing others' negative emotions can put your own health at risk; build a mental barrier to separate their pain from your life.",
    "The rising flames of Fire are the instinct that keeps you running toward higher success. Your competitive spirit is a powerful engine, but it can turn into a tyranny that exhausts those around you; try to share the glory of your success generously with your allies.",
    "The Fire energy at your core aids an artistic nature that allows culture and civilization to bloom. Your aesthetic sense is a strength, but a lack of practical financial sense can lead to struggle; stay involved in the functional side of life, such as asset management and savings.",
    "Your Fire essence is a revolutionary temperament that decisively burns away the old to establish the new. Your resolve is a strength, but flipping the table without enough preparation can increase chaos; bolster your bold changes with a meticulous plan for the aftermath.",
    "The passionate energy of Fire has birthed you as a person who bets everything on love and devotion. Your sincerity is a strength, but a coldness that never looks back once the flame dies can be extreme; try to maintain a steady, sustainable warmth in your relationships.",
    "Your innate Fire energy is the basis of a media-like sense for processing info and spreading news. Your promotion skills are a strength, but focusing on flashy packaging over truth can cost you trust; prioritize honest communication with substance at its core.",
    "Your inner Fire energy makes you a gentleman who values etiquette and decorum. Your social grace is a strength, but obsessing over your image can make your life exhausting; practice the art of being yourself, even if it's not 'perfect' in others' eyes.",
    "The explosive drive of Fire leads you to be a powerful action leader in any project. Your ability to produce results quickly is a strength, but ignoring your team's pace can isolate you; remember that harmony is often more vital than speed in the long run.",
    "The Fire essence you were born with is a spiritual sense that reads invisible frequencies. Your intuition is a strength, but you may be indifferent to practical administrative or paper tasks; keep a meticulous partner nearby to fill in these essential details.",
    "Your inner Fire energy is the source that rejects boring repetition and always yearns for the new. Your ability to lead change is a strength, but a lack of depth from not digging one well can be a pitfall; aim for mastery in at least one area of your life.",
    "The brilliant flames of Fire grant you an overwhelming charisma and oratorical power. Your ability to move hearts with speech is a strength, but you may be judged as 'all talk and no action'; show your integrity by always following through on your promises.",
    "Your Fire essence is a phoenix-like vitality that revives even from the ashes of trial. Your crisis management is a strength, but a stubbornness that won't stop until it breaks can be reckless; learn the flexible wisdom of knowing when to step back.",
    "The warm light of Fire has birthed you as a peacemaker who melts the conflicts of those around you. Your harmonious communication is a strength, but avoiding hard truths for the sake of 'getting along' can grow the problem; have the courage to speak clearly when needed.",
    "The Fire energy in your soul is the natural instinct for positivity that turns all tasks into joy. Your optimistic attitude is a strength, but a perceived lack of seriousness can cost you trust in vital moments; take care to show proper decorum and gravity when the situation calls for it.",
    "Your Fire essence is a strategic mind that reads the flow of a situation to set the board. Your quick wit is a strength, but a pride that seeks to manipulate others can create enemies; learn the leadership of humility that sincerely serves and respects others.",
    "The pure vibration of Fire grants you a natural moral integrity and sense of justice. Your clean values are a strength, but an inability to tolerate the messy reality of the world can make you irritable; grow your capacity to embrace the imperfect world with love.",
    "Your innate Fire energy is a pioneer's instinct that bets everything on a single moment. Your bold betting power is a strength, but a reckless gamble can ruin a lifetime's achievement in an instant; add a layer of careful risk calculation to your daring spirit."
  ],
  "토(土)": [
    "Your innate Earth essence is rooted in an inclusive embrace like the land itself and a heavy, reliable credit. This stability is your greatest strength, but a slowness to adapt to change can cause you to miss opportunities; make a conscious effort to learn and grow with new trends.",
    "Symbolizing sincerity and persistence, Earth's energy has birthed you as a sturdy pillar for any organization. Your ability to complete what you start is a strength, but a lack of flexibility can make you appear rigid; occasionally, try seeking a creative solution over the 'written rule'.",
    "Your core Earth energy grants the instinct of a mediator who uses the wisdom of the middle path to seal conflicts. Your ability to lead harmony is a strength, but you may lose your rights by staying silent when you should speak up; practice stating your intentions clearly.",
    "Like fertile soil, your Earth essence grants the ability to nurture others toward success. Your altruism is a strength, but an inability to say 'no' can lead you to carry others' burdens until you burn out; build a healthy boundary between their problems and your life.",
    "Your inner Earth energy is the root of a professional tenacity that digs one well until it's finished. Your unshakable center is a strength, but a narrow vision that misses the macro flow can be a pitfall; take time to regularly engage with the world to broaden your view.",
    "Your Earth essence signifies an iron will and composure that doesn't shake under any pressure. Your calm is a strength, but a lack of emotional expression can make you appear cold; don't hesitate to show warmth to those close to you through kind words.",
    "The condensing energy of Earth grants you a practical economic sense for accumulating assets. This stability is a strength, but prioritizing safety can cause you to hesitate before great opportunities; occasionally, have the courage to take a calculated risk.",
    "The Earth energy in your soul is the innate temperament of a guardian who values tradition and essence. Your integrity is a strength, but obsessing over old habits can make you reject change; try to learn the joy of riding the wave of transformation.",
    "Your Earth frequency is the essence of a savvy expert who recognizes value and builds the foundation for wealth. Your eye for value is a strength, but suspicion can cost you vital connections; try having an open heart that trusts the sincerity of others first.",
    "Like the land that connects continents, your Earth essence makes you a central axis for building global networks. Your communication is a strength, but a closed nature regarding your own deep feelings can be a pitfall; try building true intimacy through sincere self-disclosure.",
    "Your inner Earth energy is the basis of a managerial talent for building sturdy systems out of chaos. Your stabilizing power is a strength, but being too tied to form can stifle creativity; always ask 'why' a rule is needed to apply it with flexible wisdom.",
    "Your Earth essence symbolizes a sublime mercy that absorbs the pain of all things to turn it into fertilizer. Your high-minded character is a strength, but sacrificing yourself for others without self-care can harm your health; secure time for 'self-love' and recovery.",
    "Earth's heavy energy has birthed you as a firm philosopher unshaken by any temptation. Your self-sovereignty is a strength, but insisting only your way is right can make you appear dogmatic; cultivate the humility to admit you might be wrong.",
    "Your innate Earth essence signifies a macro insight that looks down upon the world like a high mountain. Your master planning is a strength, but neglecting the small, daily actions can be a pitfall; put as much care into small habits as you do into grand goals.",
    "The Earth strength supporting your core is the innate spirit of 'honoring the old to create the new.' Your seasoned problem-solving is a strength, but resting only on past success can leave you behind; make an effort to renew yourself every single day.",
    "Earth's peaceful energy makes you a person of a relaxed and steady temperament. Your nature of making others comfortable is a strength, but a tendency toward sloth can cause you to miss the timing for action; set your own deadlines and stick to them strictly.",
    "Your Earth essence signifies an elegant dignity that is perfected through long years of discipline, much like a ceramic masterpiece. Your mature charm is a strength, but the obsession with being 'perfect' can be stressful; have the courage to show your flaws as well.",
    "Earth's fertile soil energy grants an exceptional instinct for collecting and archiving knowledge. Your archival skill is a strength, but becoming immersed only in info without producing results can be a pitfall; bolster your practical sense to turn learning into success.",
    "Your innate Earth energy is a legal guardian's essence that protects rules to straighten the community's foundation. Your fair yardstick is a strength, but a lack of mercy in your application can be cold; consider the human warmth behind the spirit of the law.",
    "Your inner Earth energy is the innate talent of a counselor who calms hearts and provides sanctuary. Your listening is a strength, but absorbing others' negative energy can crush your own mental health; secure time to wash away the emotional residue of others.",
    "Your Earth essence is the capacity of a 'kingmaker' who sets the board and leads from behind the scenes of a giant organization. Your strategy is a strength, but being unable to stand in front can cost you credit; learn to assertively brand your own value.",
    "Earth's sturdy rock energy has birthed you as a person of loyalty who doesn't change even in a crisis. Your deep friendship is a strength, but the wound from betrayal is so large it can lead to cynicism; build your own strength while lowering expectations of others.",
    "Your innate Earth energy is the essence of a practical economic expert who tills the land to create real wealth. Your diligence is a strength, but ignoring the leverage of capital can be a pitfall; take an interest in modern asset-building technologies as well.",
    "Your Earth essence is the epitome of 'iron hand in a velvet glove'—soft on the outside, but stronger than anyone on the inside. This reversal is a strength, but hiding your heart can cause misunderstandings; try to share your deeper thoughts with those close to you.",
    "Earth's static energy makes you a seeker of deep inner reflection and meditation. Your high mental state is a strength, but indifference to practical business can make life difficult; try to see secular success as part of your spiritual discipline.",
    "Your inner Earth energy is the source of a 'regeneration mage' temperament that rebuilds what is broken. Your recovery skill is a strength, but lingering on what is finished can delay new starts; practice letting go of the past to turn toward the future.",
    "Your innate Earth essence is the power of fusion that mixes all elements to create new results. Your ability to create synergy is a strength, but a lack of your own distinct color can be a pitfall; establish your own standards before looking to others.",
    "Earth's heavy weight has birthed you as a person of gravity who proves value through action rather than words. Your prudent speech is a strength, but being too slow to communicate can be frustrating; be kind enough to share your progress along the way.",
    "The Earth energy forming your core is a hidden infrastructure that supports the world. Your silent devotion is a strength, but not promoting your own value can lead to being under-compensated; occasionally, a bit of showmanship to highlight your work is needed.",
    "Your Earth essence is a lonely strength, like the desert that doesn't change in any weather. Your self-sufficiency is a strength, but viewing help as an interference can block your growth; learn the wisdom of using others' insights to reach higher."
  ],
  "금(金)": [
    "Your innate Metal essence is rooted in a sharp resolve and grit forged through trial. Your problem-solving power is your strength, but being too cold can wound those around you; try adding a touch of warm consideration to your decisive moves.",
    "Symbolizing justice and principle, Metal's energy has birthed you as a sturdy perfectionist who doesn't shake. Your moral integrity is a strength, but black-and-white logic can leave you rigid; cultivate a broad heart that recognizes the world's many colors.",
    "The Metal energy at your core is the natural weapon of a practical person who proves value through action. Your execution is an overwhelming strength, but insisting only on rules can create conflict in emotional settings; put effort into conversations that connect heart to heart.",
    "Your Metal essence is like a refined gem, granting you an eye for detail that tolerates no flaw. Your perfect finish is your greatest asset, but dying for the small things can cost you the macro flow; strive to cultivate a macro vision that sees the forest for the trees.",
    "Your inner Metal energy is the innate temperament of a charismatic commander who straightens the discipline of an organization. Your dignified attitude is a strength, but harsh criticism can earn you resentment; learn a soft leadership that moves people through encouragement.",
    "Your Metal essence signifies a cold strategist who analyzes vast numbers to predict risk. Your precise analysis is a strength, but failing to read the hearts behind the numbers can isolate you; pay attention to the emotional temperature of your relationships.",
    "Metal's sturdy defense grants you a powerful security instinct for protecting the essence of a system. Your power to guard the core is a strength, but rejecting new outside opinions can lead to stagnation; try having an open mind that at least listens to unfamiliar info.",
    "The Metal energy in your soul birthed an indomitable will that challenges limits through self-discipline. Your mental grit is a strength, but imposing your painful standards on others can be tyrannical; cultivate a mercy that respects each individual's limits.",
    "Your Metal frequency is the essence of a decision-maker who saves lives and settles chaos in a crisis. This sword-like ability is a strength, but you may feel listless in a peaceful daily life; try to find joy in the mundane through small hobbies.",
    "Like a sturdy raw ore, your Metal nature makes you a person of grit who sees a decision through to the end. Your honest diligence is a strength, but not stopping when the direction is wrong can lead to loss; have the wisdom to regularly check your path.",
    "Your inner Metal energy birthed the eye of a fair evaluator who distinguishes gems from rocks to invest in potential. Your foresight is a strength, but discarding value that doesn't immediately pay off can be a pitfall; cultivate the patience to wait for seeds to grow.",
    "Your Metal essence is a wise innovator who simplifies complex phenomena to offer clear solutions. Your efficient design skill is a strength, but dismissing protocol can cause conflict; bolster your social flexibility by respecting minimal formalities.",
    "Metal's independent energy birthed you as a powerful sovereign who carries out convictions without influence. Your subjectivity is a strength, but rigidity can lead to isolation; learn the inclusive politics of expanding your empire through harmony.",
    "Your innate Metal essence is the energy of a noble official who strictly enforces justice to protect the community's dignity. Your order-establishing skill is a strength, but being immersed only in the text can miss human values; think of the person before the law.",
    "The Metal strength at your core is an innate intelligence like a precision element that logically solves the world's puzzles. Your algorithm design is a strength, but a hysterical reaction to contradiction can be a pitfall; try to accept the world's messiness as part of life.",
    "Metal's sharp insight makes you a sharp profiler who distinguishes truth from lies. Your truth-finding skill is a strength, but focusing only on the dark side of others can make you cynical; never stop your warm efforts to believe in people's good intent.",
    "Your Metal essence is the temperament of a security talent who guards core secrets and silverly completes tasks. Your secrecy is a strength, but having too many secrets can isolate you from family; show a tenderness that opens the door of your heart to loved ones.",
    "Metal's cool sensitivity birthed you as a sharp commentator who satirizes the era and checks power. Your writing is a strength, but a pen used only for destructive criticism can be a pitfall; add a constructive alternative to your sharp critiques.",
    "Your innate Metal energy is the essence of a master designer who sets the discipline of a giant organization. Your national-level design skill is a strength, but a pride that makes you hide away when hurt is a risk; cultivate the tenacity to stay through any storm.",
    "Your inner Metal energy creates the temperament of a legendary master who realizes absolute value and achievement. Your creation of immortal value is a strength, but ignoring secular happiness can hurt those close to you; strive for harmony with daily life.",
    "Your Metal essence is a protector like a fine sword that runs to save the organization in a crisis. Your sense of justice is a supreme strength, but making arbitrary decisions can cause loss to public assets; always follow protocol and seek consensus.",
    "Metal's clear spring energy, rising from cold rock, signifies a pure intelligence and clean soul. Your insight is a strength, but an inability to tolerate the world's mess can lead to isolation; learn to mingle with the world like a lotus in the mud.",
    "Your innate Metal nature is the quality of a precision-strike talent that flies toward a set goal like a missile. Your execution is a strength, but destroying other values in your path can be cruel; put more care into life-respect and harmony during the process.",
    "Your Metal essence is a clear and direct communication, like metal clashing against metal. Your clarity in starting with the conclusion is a strength, but a lack of consideration can cost you connections; check the other's emotions before you speak.",
    "Metal's unchanging gem energy has birthed you as a person of loyalty who keeps faith with those you've connected with. Your devotion is a strength, but a lack of reading the times can leave you behind; make an effort to communicate with the values of the new era.",
    "Your inner Metal energy birthed an innate nature that pursues a flawless personality, operating perfectly like a machine. Your error-free work is a strength, but being seen as a 'robot' can be a pitfall; have the grace to laugh at your own mistakes.",
    "Your innate Metal essence is the power of patience that blooms in extreme environments, like a flower in cold soil. Your shine in trials is a strength, but you may become listless in a peaceful life; challenge yourself by setting new tasks for growth.",
    "Metal's sharp blade energy makes you an avatar of efficiency who settles complex interests in an instant. Your decisiveness is a strength, but drawing a line too sharply can be heartless; practice the virtue of embracing others even if it means a small loss.",
    "The Metal strength at your core is the instinct for self-discipline that polishes yourself to gain fame. Your self-management is a strength, but an obsession with perfection can pressure those around you; try to enjoy the unexpected creativity that 'looseness' brings.",
    "Your Metal essence is a sharp eye that captures flashes of inspiration to connect them to business. Your profit-creating skill is a strength, but focusing only on results over ethical value is a risk; put more effort into establishing a righteous entrepreneurial spirit."
  ],
  "수(水)": [
    "Your innate Water essence is rooted in a wise strategist's energy for reading the flow of goods and capital. Your insight is a strength, but overthinking can cost you the timing for execution; add the courage to jump in, believing in the value of 'simplicity'.",
    "Helping the growth of all things, Water's energy has birthed you as a benevolent guide and healer. Your role as a guide is a strength, but you may struggle with your own direction; secure your own quiet 'time of silence' regularly.",
    "The Water energy at your core is the innate essence of a diplomatic mediator who flexibly tunes interests to maximize profit. Your ability to lead harmony is a strength, but you may be judged as an opportunist; declare your firm values to the world first.",
    "Riding the waves of change, your Water essence grants a pioneering energy for seizing market opportunities. Your foresight is a strength, but the risk of collapsing when your center shakes is real; you need a mind-control routine to stay steady.",
    "Your inner Water energy is the root of a strategic intelligence for precisely calculating risk and designing paths. Your planning is a strength, but seeing the world only through data can lose the human touch; try to include the warm temperature of people in your views.",
    "Your Water essence signifies a transparent analyst who pierces the essence and delivers unvarnished truth. Your truth-finding skill is a strength, but creating unnecessary enemies in the process is a risk; add more care and wisdom to how you deliver truth.",
    "Water's knowledge-alchemy energy grants an amazing instinct for turning wisdom into assets. Your platform planning is a strength, but a lack of 'execution muscle' to turn thoughts into reality can be a pitfall; bolster your practical experience by hitting the field.",
    "The Water essence in your soul keeps you calm even in overheated competition, allowing you to lead giant capital. Your competitor's spirit is a strength, but obsessing only on money can make you a lonely rich person; make winning hearts your measure of wealth.",
    "Your Water frequency is the basis of a benevolent leadership for optimizing organizational dignity and talent flow. Your management skill is a strength, but a lack of communication to explain your vision can isolate you; refine your warm speaking style.",
    "Like a canal connecting the world, your Water essence makes you a master of logistics who builds giant distribution systems. Your system design is a strength, but becoming pathologically sensitive when paths tangle can be a pitfall; learn to enjoy unpredictable variables.",
    "Your inner Water energy is the innate talent of a knowledge leader who enlightens the public and raises social class. Your educational nature is a strength, but an elite mindset that dismisses others' lack of knowledge can be an arrogance; stay humble always.",
    "Your Water essence symbolizes the power of purification and healing that washes away organizational conflict. Your emotional cleansing is a strength, but absorbing all the negative energy of others can make you sick; create your own 'emotional outlet' for release.",
    "Water's strategic nature makes you a problem solver who finds oasis-like answers even under extreme pressure. Your settlement skill is a strength, but the risk of carrying all responsibility alone is real; exercise the wisdom of delegating power to your team.",
    "Your innate Water energy is a guardian of records who archives wisdom to set future milestones. Your preservation skill is a strength, but being immersed only in past data can miss real change; regularly read future-trends books to predict tomorrow's waves.",
    "Your inner Water energy is the basis of a luxury aide temperament for building deep trust with an elite few and growing high-end assets. Your selectivity is a strength, but an elite mindset can create enemies; stay interested in the daily lives of ordinary people.",
    "Your Water essence is a mysterious artist who creates new narratives through inspiration that transcends space and time. Your creativity is a strength, but being incompetent in practical admin or finance can be a pitfall; keep a capable agent nearby to manage the 'real world'.",
    "Water's deep abyss energy grants the innate essence of a legal master who interprets the spirit of the law to protect rights. Your sense of justice is a strength, but feeling before the law can cause doubt about your fairness; practice objectifying your emotions.",
    "Your innate Water nature is a data strategist's temperament for analyzing human psychology to map the digital era. Your profiling skill is a strength, but becoming immersed in cold numbers can lose the warmth of people; take 'number-free' analog trips occasionally.",
    "Your Water essence is like a regeneration mage who breathes life back into things that are disappearing. Your branding skill is a strength, but struggling to keep up with the public's rapid change is a risk; keep a mind that learns from new generations without prejudice.",
    "Water's knowledge-seeker energy grants a deep philosophical instinct for realizing cosmic principles and exploring core answers. Your intellectual depth is a strength, but dismissing secular success can lead to poverty; understand that wealth is also a tool for growth.",
    "Your inner Water energy is the innate talent of a humanities teacher who turns life's void into wisdom to spread the value of reflection. Your inner exploration is a strength, but a recurring fear of being a 'dropout' is a risk; whisper to yourself that your pace is the right one.",
    "Your innate Water essence is a giant of knowledge, like an ocean that systematizes and shares the world's intellectual heritage. Your erudition is a strength, but you may be used by those seeking your wisdom for selfish gain; keep a cold eye on where your wisdom flows.",
    "Water's originality energy grants a genius instinct for opening unknown territory and surprising the world. Your quirkiness is a strength, but building a wall and choosing isolation is a risk; find someone who can 'translate' your genius into the world's language.",
    "Your innate Water essence is a strategist's mind for finding answers to international affairs and a global leader's temperament. Your command is a strength, but missing simple principles when things get complex can lead to loss; always remember the value of honesty.",
    "Your inner Water energy grants a nature with a deep sea's mystery and giant potential. Your weight and prudence are strengths, but an excessive closed nature can isolate you from family; have the courage to show your deep abyss to those you love.",
    "Water's infiltration energy grants an innate agility like a scout who seeps in anywhere to gather info and shake the board. Your nimbleness is a strength, but a blurred identity is a risk; practice 'returning to self' daily through quiet, solitary time.",
    "Your Water essence is a symbol of great patience and hope, like the moisture under frozen ground waiting for spring. Your power to wait is a strength, but wasting opportunities by waiting too long is a risk; learn the bold decisiveness of a waterfall when it's time.",
    "Water's irregular energy grants an alchemist's talent for trends, stimulating public desire to create giant fads. Your psychological insight is a strength, but your own life may flow away like a fad; look for the unchanging axis of life in classical values.",
    "Your inner Water energy creates a noble integrity like a clear spring that washes all dirt to make it clean. Your morality is a strength, but a hysterical reaction to the world's mess can be a pitfall; grow your capacity to embrace the imperfect world with love.",
    "Your innate Water essence is a high-minded philosopher's energy for forging pearls of wisdom in extreme solitude. Your mental achievement is a strength, but a weak economic foundation and social connection is a risk; stay grounded and cherish your secular life too."
  ]
};

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start",risk:"rigidity"},{key:"Harmony",core:"cooperation",risk:"dependency"},{key:"Growth",core:"expansion",risk:"scattered"},{key:"Foundation",core:"stability",risk:"stagnation"},{key:"Center",core:"balance",risk:"control"},{key:"Duty",core:"responsibility",risk:"overload"},{key:"Research",core:"analysis",risk:"isolation"},{key:"Result",core:"wealth",risk:"greed"},{key:"Completion",core:"closure",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];



/* [1] 글로벌 + 트렌디 한글 하이브리드 음절 (성명학 발음 오행 밸런스 적용) */
const syllableKo1 = [
    // 세련된 현대 한글 (목, 화, 토, 금, 수 오행 골고루 배분)
    "서", "지", "도", "민", "시", "유", "승", "주", "태", "건", "규", "진", "현", "재", "은", "하", "단", "온", "윤", "이", "아", "채", "소", "해", "다", "루", "리", "겸", "담", "설", "결",
    // 신비로운 글로벌/판타지 감성
    "알", "엘", "렌", "벤", "켈", "멜", "제", "카", "피", "샨", "레", "미", "데", "세", "벨", "테", "로", "마", "클", "플"
];

const syllableKo2 = [
    // 부드럽고 여운이 남는 한글 끝음절
    "준", "훈", "우", "아", "윤", "하", "은", "수", "연", "희", "빈", "율", "찬", "린", "솜", "봄", "겸", "담", "람", "결", "재", "진", "솔", "늘", "환", "영", "호",
    // 이국적이고 신비로운 끝음절
    "토", "라", "나", "리", "엘", "온", "로", "스", "넬", "드", "테", "샤", "루", "니", "벨", "룬", "안", "엔", "오", "타", "데", "미", "칸", "얀"
];

/* [1-2] 영문판 전생/내세 이름 조합용 글로벌 음절 (서구권/판타지/SF 감성) */
const nameRootEn = [
    "Al", "El", "Lu", "Val", "Kor", "Syr", "Fen", "Gal", "Mor", "Aza", 
    "Ze", "Kae", "Quin", "Rhys", "Syl", "Ny", "Xan", "Vyr", "Cae", "Dae", 
    "Jae", "Kael", "Lor", "Or", "Thal", "Oli", "Eme", "Ar", "No", "Ma", "Ili"
];

const nameTailEn = [
    "bert", "cia", "rion", "dor", "lis", "th", "wyn", "x", "z", "us", 
    "ia", "en", "is", "a", "o", "mir", "dred", "vyn", "ra", "las", 
    "mus", "n", "sa", "el", "ron", "via", "cas", "line", "cus", "an", "thor"
];

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

const eraPastEn = [
    "Around 250 AD", "Around 1350 BC", "Around 1050 AD", "Around 1650 AD", "Around 1450 AD", 
    "Around 850 AD", "Around 1510 AD", "Around 1750 BC", "Around 450 BC", "Around 1900 AD", 
    "Around 1150 AD", "Around 1780 AD", "Around 650 AD", "Around 510 BC", "Around 1490 AD", 
    "Around 950 AD", "Around 1250 AD", "Around 450 AD", "Around 2500 BC", "Around 750 AD"
];

const regionPastEn = [
    "Near the Colosseum, Roman Empire", "Lower Nile, Ancient Egypt", "Inside Luoyang, Song Dynasty", "Near Kyoto, Edo Shogunate", "Tenochtitlan, Aztec Empire", 
    "Scandinavian Coast, Northern Europe", "Florence, Renaissance Italy", "Gardens of Babylon, Mesopotamia", "Athens Square, Ancient Greece", "Yukjo-geori, Korean Empire", 
    "Gaegyeong Market, Goryeo Dynasty", "Hanyang Fortress, Joseon Dynasty", "Yucatan Jungle, Mayan Civilization", "Persepolis, Persian Empire", "Near Machu Picchu, Inca Empire", 
    "Constantinople, Byzantine Empire", "Seine Riverbank, Medieval Paris", "Ganges Riverside, Ancient India", "Uruk Temple, Sumerian Civilization", "Seorabeol Center, Silla Kingdom"
];

const eraNextKo = ["은하 연합 시대", "네오-서울 자치국", "화성 개척 시대", "에테르 차원기", "해저 돔 시티", "공중 부유섬 시대", "사이버펑크 암흑기", "성간 식민지 시대", "포스트-휴먼 시대", "디지털 클라우드기", "안드로메다 연맹", "양자 도약 시대", "테라포밍기"];
const regionNextKo = ["섹터 7", "중앙 허브", "올림푸스 기지", "차원 게이트 00", "아쿠아리스", "클라우드-9", "네온 스트리트", "타이탄 정거장", "안드로메다 게이트", "제 4 거주구역", "뉴 런던 Hub", "가상현실 그리드", "심해 캡슐"];

const eraNextEn = [
    "Galactic Alliance Era", "Neo-Seoul Sovereign State", "Mars Frontier Era", "Ether Dimension Era", "Underwater Dome City", 
    "Floating Sky Island Era", "Cyberpunk Dark Age", "Interstellar Colony Era", "Post-Human Era", "Digital Cloud Era", 
    "Andromeda Federation", "Quantum Leap Era", "Terraforming Era"
];

const regionNextEn = [
    "Sector 7", "Central Hub", "Olympus Base", "Dimension Gate 00", "Aquarius", 
    "Cloud-9", "Neon Street", "Titan Station", "Andromeda Gate", "Residential Zone 4", 
    "New London Hub", "VR Grid", "Deep Sea Capsule"
];
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
