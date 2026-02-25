/* 1. 분석 기초 데이터 */
const hangulElements = { 'ㄱ': '木', 'ㄲ': '木', 'ㅋ': '木', 'ㄴ': '火', 'ㄷ': '火', 'ㄸ': '火', 'ㄹ': '火', 'ㅌ': '火', 'ㅇ': '土', 'ㅎ': '土', 'ㅅ': '金', 'ㅆ': '金', 'ㅈ': '金', 'ㅉ': '金', 'ㅊ': '金', 'ㅁ': '水', 'ㅂ': '水', 'ㅃ': '水', 'ㅍ': '水' };
const alphabetElements = { 'A': '木', 'E': '木', 'I': '木', 'O': '木', 'U': '木', 'Y': '木', 'B': '水', 'P': '水', 'M': '水', 'F': '水', 'W': '水', 'C': '火', 'G': '火', 'J': '火', 'L': '火', 'S': '火', 'D': '土', 'N': '土', 'T': '土', 'H': '土', 'K': '金', 'R': '金', 'V': '金', 'X': '金', 'Q': '金', 'Z': '金' };

/* 2. 성명학 수리 데이터 (영문 번역 포함) */
const nameNumerology = {
    1: { title: "기본격", desc: "스스로 길을 개척하는 강한 생명력입니다.", titleEn: "The Pioneer", descEn: "You have a strong drive to blaze your own trail independently." },
    2: { title: "조화격", desc: "타인과 협력하여 안정적인 기반을 닦습니다.", titleEn: "The Harmonizer", descEn: "You thrive in cooperation and create balance in your surroundings." },
    3: { title: "희망격", desc: "밝고 긍정적인 에너지로 꾸준히 성장합니다.", titleEn: "The Optimist", descEn: "Your bright, positive energy attracts growth and new opportunities." },
    4: { title: "안정격", desc: "차분하게 내실을 기하며 평안한 삶을 삽니다.", titleEn: "The Anchor", descEn: "You have a grounded nature that builds a secure and stable life path." },
    5: { title: "성공격", desc: "지혜와 운이 따라주어 목표를 성취합니다.", titleEn: "The Achiever", descEn: "Luck and wisdom are on your side, guiding you toward success." },
    6: { title: "덕망격", desc: "성품이 온화하여 인복이 많고 대업을 이룹니다.", titleEn: "The Virtuous", descEn: "Your warm personality attracts great supporters who help you grow." },
    7: { title: "독립격", desc: "주관이 뚜렷하고 자신의 힘으로 성공합니다.", titleEn: "The Independent", descEn: "A strong self-will allows you to build your own legacy." },
    8: { title: "발전격", desc: "성실함을 바탕으로 명예를 쌓아갑니다.", titleEn: "The Rising Star", descEn: "Step-by-step diligence leads you to a position of great respect." },
    9: { title: "통찰격", desc: "사물의 이치를 꿰뚫는 눈이 있어 빛을 발합니다.", titleEn: "The Insightful", descEn: "Your sharp intuition allows you to see the core truth in all things." },
    10: { title: "유연격", desc: "위기를 기회로 바꾸는 재치가 뛰어납니다.", titleEn: "The Adaptable", descEn: "You have a natural wit to turn challenges into golden opportunities." },
    11: { title: "재생격", desc: "어려움이 닥쳐도 다시 일어나는 회복력이 강합니다.", titleEn: "The Resilient", descEn: "Your inner strength ensures you rise stronger after every setback." },
    12: { title: "성실격", desc: "한결같은 마음으로 정진하여 큰 결실을 맺습니다.", titleEn: "The Dedicated", descEn: "Consistency is your power, leading you to grand rewards." },
    13: { title: "총명격", desc: "지혜가 깊어 학문이나 예술로 성공합니다.", titleEn: "The Brilliant", descEn: "Intellectual sharpness paves your way to professional success." },
    14: { title: "기예격", desc: "예술적 감각이 뛰어나 독창적인 분야에서 성공합니다.", titleEn: "The Artist", descEn: "Your unique creativity will make you stand out in any creative field." },
    15: { title: "통솔격", desc: "덕망이 높고 많은 이들을 이끄는 리더가 됩니다.", titleEn: "The Leader", descEn: "Natural charisma and virtue position you at the head of others." },
    16: { title: "덕망격", desc: "인복이 풍부하여 주변의 도움으로 번창합니다.", titleEn: "The Favored", descEn: "You are surrounded by people who genuinely want to see you succeed." },
    17: { title: "강건격", desc: "신념이 강하고 난관을 정면으로 돌파합니다.", titleEn: "The Fearless", descEn: "Your unshakable faith allows you to overcome any obstacle." },
    18: { title: "발전격", desc: "강한 의지로 난관을 뚫고 자수성가합니다.", titleEn: "The Self-Made", descEn: "Through pure determination, you will achieve authority and wealth." },
    19: { title: "직관격", desc: "감각이 예민하여 남들이 못 보는 기회를 잡습니다.", titleEn: "The Visionary", descEn: "You sense trends and opportunities before they become obvious." },
    20: { title: "결단격", desc: "맺고 끊음이 확실하고 신뢰를 받는 성격입니다.", titleEn: "The Decisive", descEn: "Your clear judgment and integrity make you a highly trusted individual." },
    21: { title: "두령격", desc: "만인을 통솔하는 기질로 크게 성공할 운입니다.", titleEn: "The Commander", descEn: "Born with authority, you have the destiny to lead many." },
    22: { title: "원만격", desc: "성격이 부드러워 대인관계가 매우 원만합니다.", titleEn: "The Diplomat", descEn: "Your gentle nature makes you a master of social harmony." },
    23: { title: "혁신격", desc: "변화를 두려워하지 않고 시대를 앞서갑니다.", titleEn: "The Innovator", descEn: "A trailblazer who embraces change and leads into the future." },
    24: { title: "입신격", desc: "빈손으로 시작해도 점진적으로 큰 부를 이룹니다.", titleEn: "The Wealth-Builder", descEn: "Continuous growth leads you to significant prosperity." },
    25: { title: "안강격", desc: "성격이 원만하고 평생 평안과 복을 누립니다.", titleEn: "The Blessed", descEn: "Your balanced character ensures a life filled with peace." }
};

/* 3. 오행 속성 (공통) */
const elementAttributes = {
    "木": { color: "청색(Blue)", name: "나무(Wood)", trait: "성장과 기획 / Growth & Creativity" },
    "火": { color: "적색(Red)", name: "불(Fire)", trait: "열정과 예의 / Passion & Warmth" },
    "土": { color: "황색(Yellow)", name: "흙(Earth)", trait: "신용과 중용 / Stability & Trust" },
    "金": { color: "백색(White)", name: "쇠(Metal)", trait: "결단과 의리 / Logic & Precision" },
    "水": { color: "흑색(Black)", name: "물(Water)", trait: "지혜와 유연함 / Intuition & Wisdom" }
};

/* 4-1. 한국어 전용 처방 (K-정서) */
const elementPrescriptions = {
    "木": {
        strong: "기운이 과해 시작만 하고 끝을 못 맺을 수 있습니다. 일기를 쓰며 생각을 정리(설기)하십시오.",
        normal: "성장 기운이 안정적입니다. 베란다의 식물을 돌보며 현재의 리듬을 유지하십시오.",
        weak: "추진력이 약해진 상태입니다. 초록색 아이템을 몸에 지니거나 아침 산책으로 생기를 보충하십시오."
    },
    "火": {
        strong: "열정이 과해 번아웃의 위험이 있습니다. 차가운 물을 자주 마시고 열기를 식히는 휴식이 필요합니다.",
        normal: "에너지가 밝게 빛납니다. 사람들과 즐거운 대화를 나누며 온기를 공유하십시오.",
        weak: "의욕이 저하된 상태입니다. 낮 시간에 햇볕을 10분 이상 쬐어 심장의 에너지를 깨우십시오."
    },
    "土": {
        strong: "생각이 정체되어 답답함을 느낄 수 있습니다. 평소 안 가본 길로 산책하며 기분 전환을 하십시오.",
        normal: "안정감이 훌륭합니다. 도자기 그릇을 사용하거나 차분하게 독서하며 내실을 다지십시오.",
        weak: "기반이 흔들리는 기분일 수 있습니다. 맨발로 흙을 밟거나 노란색 음식을 섭취해 보강하십시오."
    },
    "金": {
        strong: "판단이 너무 날카로워져 주변과 충돌할 수 있습니다. 부드러운 음악을 들으며 마음을 녹이십시오.",
        normal: "결단력이 돋보이는 시기입니다. 서랍 정리나 불필요한 인맥을 정리하기 아주 좋습니다.",
        weak: "맺고 끊음이 안 되어 피곤할 수 있습니다. 금속 액세서리를 착용하거나 흰색 옷을 입어보십시오."
    },
    "水": {
        strong: "생각이 깊어져 우울감이 올 수 있습니다. 몸을 격렬하게 움직여 땀을 흘리는 처방이 길합니다.",
        normal: "지혜가 샘솟는 때입니다. 명상을 하거나 새로운 지식을 습득하며 흐름을 즐기십시오.",
        weak: "유연함이 부족해지는 시기입니다. 따뜻한 차를 마시거나 반신욕을 통해 순환을 도와야 합니다."
    }
};

/* 4-2. 영어 전용 처방 (US-정서) */
const enPrescriptions = {
    "木": { 
        strong: "Your creative energy is overflowing. Focus on finishing one project at a time rather than starting many.",
        normal: "Your growth potential is steady. Surround yourself with nature to keep your inspiration fresh.",
        weak: "Your drive needs a boost. Try wearing green or spending time in the early morning sun."
    },
    "火": { 
        strong: "Your passion is intense. Take a breath and cool down to avoid social burnout.",
        normal: "You radiate warmth and leadership. It's a great time to lead a team or inspire others.",
        weak: "Your motivation might be low. Engage in light cardio to get your energy moving again."
    },
    "土": { 
        strong: "Your stability is great, but don't be afraid of change. Try a new hobby this week.",
        normal: "You are a reliable anchor for those around you. Enjoy the comfort of your home base.",
        weak: "You might feel ungrounded. Spend time barefoot in the garden or eat earthy foods."
    },
    "金": { 
        strong: "Your judgment is sharp, but be careful not to be too critical of yourself or others.",
        normal: "Your logic is your greatest strength right now. Perfect time for organizing your life.",
        weak: "Decision-making might feel hard. Wear white or gold accessories to sharpen your resolve."
    },
    "水": { 
        strong: "Your intuition is deep. Don't overthink—move your body to stay out of a mood slump.",
        normal: "You are flowing smoothly through life's challenges. Keep learning and stay curious.",
        weak: "You might feel stuck. A warm bath or listening to jazz can help your emotions flow again."
    }
};

/* 5. 다국어 UI 텍스트 사전 */
const i18n = {
    ko: {
        title: "운명 공학 분석소", desc: "성명과 생년월일 기반 정식 리포트",
        nameLabel: "성함 (한글/영문)", birthLabel: "생년월일 8자리 (YYYYMMDD)", btn: "리포트 생성하기",
        resTitle: "운명 분석 결과 리포트", tab1: "현생 분석", tab2: "전생 기록", tab3: "내세 예약",
        copy: "결과 저장 및 링크 복사", reset: "새로운 운명 분석하기 (초기화)",
        sec1: "1. 성명 수리 분석 결과", sec2: "2. 주체 에너지 분석", sec3: "3. 에너지 보강 지침",
        sideEffect: "에너지 조정 부작용 주의", advise: "운명 조언", practice: "실천 행법"
    },
    en: {
        title: "Destiny Engineering Lab", desc: "Official Report based on Name & Birthdate",
        nameLabel: "Full Name (KO/EN)", birthLabel: "Birthdate (YYYYMMDD)", btn: "Generate Report",
        resTitle: "Destiny Analysis Report", tab1: "Life Path", tab2: "Past Life", tab3: "Future Life",
        copy: "Save Result & Copy Link", reset: "Analyze New Destiny (Reset)",
        sec1: "1. Name Numerology", sec2: "2. Core Energy Analysis", sec3: "3. Energy Power-Up Guide",
        sideEffect: "Temporary Side Effects", advise: "Life Advice", practice: "Daily Mission"
    }
};

/* === 3. 현생 처방 명언 === */
const quoteData = {
    "인생": [
        /* 기존 데이터 */
        { text: "모든 꽃은 저마다의 시간에 핀다." },
        { text: "어제로부터 배우고, 오늘을 살며, 내일을 희망하라." },
        { text: "가장 큰 영광은 넘어질 때마다 일어서는 것이다." },
        { text: "삶이 있는 한 희망은 있다." },
        { text: "아무것도 하지 않으면 아무 일도 일어나지 않는다." },
        { text: "완벽함보다 완료함이 낫다." },
        { text: "너 자신이 되어라. 다른 사람은 이미 다 차 있다." },
        { text: "내일의 나를 만드는 것은 오늘의 인내다." },

        /* 신규 추가 데이터 (지혜와 끈기) */
        { text: "행복은 목적지가 아니라 여행하는 과정에 있다." },
        { text: "가장 어두운 밤도 해 뜨기 직전에 끝난다." },
        { text: "남보다 뛰어난 것이 아니라, 과거의 나보다 뛰어난 것이 진정한 고귀함이다." },
        { text: "실패는 다시 시작할 수 있는 기회일 뿐이다. 이번엔 더 지혜롭게." },
        { text: "인생은 속도가 아니라 방향이다." },
        { text: "조금 늦어도 괜찮다. 당신은 당신만의 계절에 피어날 것이다." },
        { text: "폭풍우를 피하는 법을 배우는 게 아니라, 빗속에서 춤추는 법을 배워야 한다." },
        { text: "길이 없으면 길을 찾아라. 그래도 없으면 길을 만들어라." },

        /* 실천과 행동 중심 */
        { text: "생각하는 대로 살지 않으면, 사는 대로 생각하게 된다." },
        { text: "오늘의 1% 노력이 1년 뒤의 당신을 완전히 바꿀 것이다." },
        { text: "시작하는 방법은 말을 그만두고 행동하는 것이다." },
        { text: "한 걸음 한 걸음이 모여 결국 산을 옮긴다." },
        { text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 믿는 대로 될 것이다." },
        { text: "꿈을 꾸기에 너무 늦은 나이란 없다." },
        { text: "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다." },

        /* 위로와 성찰 */
        { text: "충분히 쉬는 것도 용기다. 멈추어야 비로소 보이는 것들이 있다." },
        { text: "당신의 가치는 타인의 시선이 아니라 당신의 내면이 결정한다." },
        { text: "모든 시련은 성장을 위한 거름이 된다." },
        { text: "마음의 평화는 외부의 상황이 아니라 내부의 선택에서 온다." },
        { text: "인생은 자전거와 같다. 균형을 잡으려면 계속 움직여야 한다." },
        { text: "오늘 하루, 당신은 충분히 잘해냈다." },
        { text: "작은 것에 감사할 줄 아는 사람이 가장 큰 부자다." }
    ]
};

/* === 4. 전생 데이터 (30개) === */
const pastLifeData = [
    { job: "달빛 아래 시를 쓰던 선비", desc: "인자한 성품으로 학문에 정진했으나 세상의 풍파는 피하려 했습니다.", homework: "나의 재능을 세상에 당당히 드러내기" },
    { job: "궁궐의 낮잠 자던 삼색 고양이", desc: "평화로운 기운으로 주변을 치유했으나 정작 자신의 사냥법은 잊었군요.", homework: "스스로 일어서는 독립심 기르기" },
    { job: "비밀 정원을 가꾸던 은둔 정원사", desc: "꽃들과 대화하며 조용히 자신만의 세계를 완성했습니다.", homework: "세상 밖으로 나와 사람들과 소통하기" },
    { job: "고려시대 차(茶)를 달이던 최고 장인", desc: "한 잔의 차에 온 우주를 담기 위해 평생을 바쳤습니다.", homework: "조급함을 버리고 기다림의 미학 배우기" },
    { job: "마을의 지혜로운 할머니 약사", desc: "풀뿌리와 꽃잎으로 이웃의 아픈 마음을 치유해 주었습니다.", homework: "배려하는 마음으로 주변 돌보기" },
    { job: "지구에서 가장 공기 맑은 숲의 파수꾼", desc: "수천 년을 살며 숲의 지혜를 지키던 존재였습니다.", homework: "새로운 변화를 두려워하지 않기" },
    { job: "장희빈의 비밀 향수를 만들던 조향사", desc: "사람의 마음을 홀리는 뜨거운 매력을 연구하느라 밤잠을 설쳤습니다.", homework: "누군가에게 휘둘리지 않는 주관 기르기" },
    { job: "궁중 무용의 주인공이었던 무용수", desc: "아름다운 몸짓으로 왕의 마음까지 사로잡았던 예술가였습니다.", homework: "자신의 열정을 올바른 곳에 쏟기" },
    { job: "성가대의 목소리 좋은 솔리스트", desc: "천상의 목소리로 사람들의 영혼을 뜨겁게 울리던 이였습니다.", homework: "나의 진실된 목소리를 당당하게 내뱉기" },
    { job: "전장의 소식을 전하던 파출소 전령", desc: "중요한 소식을 전하기 위해 밤낮없이 달렸던 책임감 있는 분이었습니다.", homework: "약속의 소중함을 끝까지 지키기" },
    { job: "불꽃놀이를 설계하던 화약 기술자", desc: "한순간의 찬란함을 위해 평생을 어둠 속에서 연구했습니다.", homework: "일상의 소소한 행복에서 빛을 찾기" },
    { job: "고대 이집트의 태양신을 모시던 사제", desc: "태양의 열기를 기도로 승화시키던 신성한 인물이었습니다.", homework: "내면의 화를 다스리고 평온을 찾기" },
    { job: "유럽 성문을 지키던 듬직한 문지기", desc: "성실하게 자리를 지켰으나 정작 본인의 성 밖 구경은 못 했군요.", homework: "낯선 곳으로 여행하며 시야 넓히기" },
    { job: "깊은 산속 도를 닦던 바위", desc: "수백 년 동안 한 자리를 지키며 세상의 변화를 지켜봤습니다.", homework: "고집을 버리고 유연하게 대처하기" },
    { job: "알프스 산맥의 평화로운 양치기", desc: "광활한 초원에서 양들과 함께 구름을 구경하며 살았습니다.", homework: "복잡한 생각 비우고 단순하게 살기" },
    { job: "고궁의 기와를 올리던 장인", desc: "수천 장의 기와를 올리며 누군가의 안식을 설계했습니다.", homework: "기초부터 차근차근 다지는 인내심 갖기" },
    { job: "대륙을 누비던 거상의 군마", desc: "용맹하게 달리며 부를 축적하는 데 큰 공을 세웠으나 발바닥이 고생했네요.", homework: "자신의 건강과 몸을 소중히 아끼기" },
    { job: "사막의 오아시스를 관리하던 수호자", desc: "여행자들에게 생명수를 나누어 주던 자비로운 사람이었습니다.", homework: "여유로운 마음으로 나눔의 기쁨 알기" },
    { job: "서부 시대 보안관의 낡은 배지", desc: "정의를 지키기 위해 누군가의 가슴 위에서 날카롭게 빛나고 있었습니다.", homework: "올바른 가치관을 지키는 용기 내기" },
    { job: "비밀 지도를 지키던 전설의 검객", desc: "평생 지켜야 할 가치를 위해 검 한 자루로 세상을 살았습니다.", homework: "자신만의 원칙을 세우고 지키기" },
    { job: "바이킹 선단의 길잡이 까마귀", desc: "가장 높은 곳에서 바람의 방향을 읽어 배를 인도했습니다.", homework: "확신이 없을 때 본인의 직감을 믿기" },
    { job: "어느 발명가의 실패한 태엽 시계", desc: "비록 멈췄지만 발명가에게 큰 정교함과 영감을 주었던 존재였습니다.", homework: "실패를 두려워하지 않고 다시 도전하기" },
    { job: "황금 사막의 지도를 그리던 지도 제작자", desc: "정확한 선 하나로 사람들의 생명을 구하던 이였습니다.", homework: "결과보다 과정을 즐기는 여유 갖기" },
    { job: "차가운 북극해를 건너던 쇄빙선의 닻", desc: "거친 얼음을 깨고 길을 내던 단단한 의지의 소유자였습니다.", homework: "딱딱한 마음을 부드럽게 녹이는 연습" },
    { job: "고대 이집트의 별을 읽던 천문학자", desc: "밤마다 하늘의 지도를 그리며 우주의 섭리를 깊게 고민했습니다.", homework: "작은 고민보다 인생의 큰 흐름 바라보기" },
    { job: "바다 건너온 보물을 파는 눈치 빠른 상인", desc: "물건 하나로 사람들의 호기심을 자극하던 유연한 인물이었습니다.", homework: "물질적인 것보다 정신적인 가치 찾기" },
    { job: "저잣거리의 소문난 이야기꾼", desc: "입담 하나로 온 마을 사람들의 마음을 적시던 인기인이었습니다.", homework: "진실한 언어의 힘을 올바르게 사용하기" },
    { job: "이름 모를 섬의 진주를 줍던 해녀", desc: "깊은 바다 밑에서 보석 같은 순간을 건져 올리던 지혜로운 이였습니다.", homework: "가장 소중한 것은 늘 가까이에 있음을 깨닫기" },
    { job: "해 질 녘 강가에서 세월을 낚던 강태공", desc: "물결을 보며 서두르지 않는 여유를 즐기던 현자였습니다.", homework: "결과보다 과정을 즐기는 법 익히기" },
    { job: "설산의 눈을 치우던 고독한 수도승", desc: "하얗게 내린 눈을 치우며 마음의 번뇌를 씻어냈습니다.", homework: "복잡한 머릿속을 수시로 정리하기" }
];

/* === 5. 환생 데이터 (30개) === */
const reincarnationData = [
    { place: "스위스 알프스의 부유한 목장", object: "종소리가 우아한 명품 젖소", mission: "오늘 창문을 열고 신선한 공기 3번 마시기" },
    { place: "실리콘밸리 천재 개발자의 서재", object: "기계식 키보드", mission: "스스로에게 '오늘 잘했어'라고 말해주기" },
    { place: "강남 한복판 재벌집 거실", object: "품종묘", mission: "스트레칭 3번 하기" },
    { place: "제주도 푸른 바다", object: "돌고래", mission: "좋아하는 노래 한 소절 부르기" },
    { place: "북유럽의 조용한 도서관", object: "베스트셀러 책", mission: "책 한 페이지 읽기" },
    { place: "우주의 빛나는 어느 행성", object: "지지 않는 꽃", mission: "거울 보고 웃기" },
    { place: "뉴욕 센트럴 파크", object: "여유로운 벤치", mission: "햇볕 5분 쬐기" },
    { place: "파리의 에펠탑 근처 화방", object: "예술가의 붓", mission: "무언가 그려보기" },
    { place: "하와이 해변", object: "서핑보드", mission: "물 한 잔 마시기" },
    { place: "런던의 레코드 숍", object: "오래된 LP판", mission: "음악 끝까지 듣기" },
    { place: "미래의 화성 기지", object: "최초의 사과나무", mission: "상큼한 과일 먹기" },
    { place: "일본 온천 마을", object: "행복한 원숭이", mission: "따뜻한 물로 족욕하기" },
    { place: "몰디브 바다 아래", object: "알록달록 산호초", mission: "파란색 물건 보기" },
    { place: "동화 속 성곽 위", object: "솜사탕 구름", mission: "하늘 5초 바라보기" },
    { place: "제일 맛있는 빵집", object: "갓 구운 크루아상", mission: "맛있는 간식 먹기" },
    { place: "최고급 호텔", object: "폭신한 깃털 베개", mission: "자기 전 베개 정돈하기" },
    { place: "교토의 벚꽃 거리", object: "흩날리는 벚꽃잎", mission: "주변 꽃 구경하기" },
    { place: "남극의 얼음 기지", object: "아기 펭귄", mission: "동물 영상 보기" },
    { place: "유명 연예인의 가방 속", object: "최애 립스틱", mission: "물건 하나 정성껏 닦기" },
    { place: "로마 광장", object: "멋진 조각상", mission: "장점 하나 떠올리기" },
    { place: "북극의 밤하늘", object: "가장 밝은 북극성", mission: "오늘 밤 별 찾아보기" },
    { place: "부자 동네 정원", object: "자율주행 잔디깎이", mission: "주변 정리 1분 하기" },
    { place: "티베트의 사원", object: "맑은 종소리", mission: "차분한 음악 듣기" },
    { place: "대나무 숲", object: "인기 만점 판다", mission: "게으름 피워보기" },
    { place: "영화 촬영장", object: "주인공의 대본", mission: "단어 하나 적어보기" },
    { place: "산토리니의 지붕 위", object: "느긋한 고양이", mission: "바다 사진 보기" },
    { place: "공기 맑은 숲", object: "바오밥나무", mission: "심호흡 3번 하기" },
    { place: "꿈의 놀이공원", object: "오색 풍선", mission: "좋은 상상 1분 하기" },
    { place: "대형 크루즈선", object: "모든 것을 보는 돛", mission: "여행지 검색하기" },
    { place: "소중한 사진첩", object: "사진 속 인물", mission: "행복한 기억 떠올리기" }
];

/* === 6. 보조 데이터 (행동/부작용) === */
const recommendations = [
    "비둘기와 눈싸움해서 기선제압하기", "거울 속의 나와 하이파이브 하기", "차가운 물 한 잔 마시기", "서랍 정리 5분", 
    "모든 대답 끝에 '기분 탓인가?' 붙이기", "스스로를 성공한 미식가로 지칭하기", "양말 한 짝만 신고 거실 돌기",
    "손가락 하트를 나무에게 날리기", "편의점 신상 간식 고르기", "샤워하며 폭포수 맞는 무림 고수 상상하기",
    "스스로에게 '너는 보석이야' 귓속말하기", "방바닥 닦으며 브레이크 댄스 시도하기", "하늘 보고 우주 기운 수신하기",
    "가장 예쁜 쓰레기 은퇴식 후 버리기", "좋아하는 노래 전주부터 집중해서 듣기", "냉장고 문 열고 멍하니 서있기",
    "비주류 손으로 양치하며 뇌 자극하기", "무중력 상태인 것처럼 천천히 걷기", "방구석 패션쇼 3분 하기",
    "바람에게 윙크 날리기", "신발 좌우 바꿔 신고 세상 편견 느껴보기", "개미에게 인생 방향 안내해주기",
    "햇볕 드는 창가에서 광합성 하기", "최대한 전문적으로 게으름 피워보기", "오늘 일정 낭독하기",
    "아끼는 물건 닦아주기", "나를 위한 파티 열기", "공기는 무료임을 느끼며 숨쉬기",
    "모델처럼 당당하게 10미터 걷기", "내일 메뉴 가상 분석하기", "디지털 업보 청산(앱 삭제)",
    "나는 바위다 자기 암시하기", "들꽃에게 이름 지어주기", "우아한 손짓으로 차 마시기",
    "참 멋지다고 5번 말하기", "일기 한 줄 문학적으로 쓰기", "보라색 물건 찾아보기"
];

const sideEffects = [
    "디저트가 미치도록 먹고 싶어짐", "모든 말끝마다 토를 달고 싶어짐", "전생에 돌덩이였음을 깨닫고 멍해짐",
    "왼쪽 콧구멍만 간지러워짐", "거울 속 내가 너무 눈부셔 선글라스 찾게 됨", "양말 한 짝 영원히 실종",
    "과도한 자신감으로 전생에 나라 구한 기분", "모든 노래가 내 인생 이야기처럼 들림", "강아지 빙의되어 '밥 줘' 외치고 싶음",
    "내가 천재라는 근거 없는 믿음", "화려한 조명 아래 춤추고 싶은 욕구", "고양이가 말을 거는 듯한 환청",
    "이불 속 중력이 강해져 못 나감", "알람 소리가 교향곡처럼 들림", "횡단보도 흰색 칸만 밟게 됨",
    "무의식 중에 손가락 하트 발사", "냉장고 모든 소스 유통기한 점검", "모든 음식이 0칼로리로 느껴짐",
    "숙면 중 춤 추기", "배경화면을 치킨 사진으로 바꾸고 싶음", "웃긴 노래가 머릿속 무한 재생",
    "입안에 가시 돋는 예쁜 척 중독", "나뭇잎에게 말 거는 다정다감", "윈드밀 돌 수 있을 것 같은 자신감",
    "공기밥 추가를 안 하면 서운함", "마법사 지팡이를 찾게 됨", "과도한 연예인병",
    "내일 점심이 4K로 꿈에 나옴", "10년 전 흑역사가 고해상도로 기억남", "음치임에도 노래방 용기 폭발",
    "세상이 라벤더색으로 보임", "갑자기 지갑 가벼워도 부자인 척함", "우주인과 통신 시도",
    "계단 한 칸씩 건너뛰고 싶은 활력", "채소가 고기 맛으로 느껴짐", "평범한 돌멩이를 주머니에 넣음",
    "만화 주인공처럼 대사 읊기", "웃음소리가 음하하로 바뀜", "모든 비밀을 아는 듯한 예지력",
    "오늘 하루가 영화처럼 상영됨", "춤을 안 추면 몸이 가려움"
];
/* === 3-E. US Inspirational Quotes (Western Perspective) === */
const quoteDataEn = {
    "life": [
        { text: "Every flower blooms in its own time." },
        { text: "Learn from yesterday, live for today, hope for tomorrow." },
        { text: "Our greatest glory is not in never falling, but in rising every time we fall." },
        { text: "Where there is life, there is hope." },
        { text: "If you do nothing, nothing happens." },
        { text: "Done is better than perfect." },
        { text: "Be yourself; everyone else is already taken." },
        { text: "Patience, not laziness, builds your tomorrow." },
        { text: "Happiness is not something ready-made; it comes from your own actions." },
        { text: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        { text: "The darker the night, the brighter the stars." },
        { text: "Success is a journey, not a destination." },
        { text: "Dream big and dare to fail." },
        { text: "Your time is limited, so don't waste it living someone else's life." },
        { text: "Everything you've ever wanted is on the other side of fear." }
    ]
};

/* === 4-E. Past Life Data (30 Items - Adventurous & Mystical) === */
const pastLifeDataEn = [
    { job: "A Poet Writing under the Moonlight", desc: "You pursued wisdom with a kind soul but preferred to avoid the world's chaos.", homework: "Stand tall and show your talents to the world." },
    { job: "A Royal Cat Napping in the Palace", desc: "You healed others with your peaceful energy but forgot how to hunt for yourself.", homework: "Develop independence and stand on your own feet." },
    { job: "A Hermit Gardener of a Secret Garden", desc: "You lived in your own beautiful world, talking only to the flowers.", homework: "Step out and connect with the people around you." },
    { job: "A Master Artisan of Ancient Pottery", desc: "You spent your whole life seeking the perfect shape in a single piece of clay.", homework: "Learn the beauty of waiting and let go of impatience." },
    { job: "A Wise Village Healer", desc: "You healed the broken hearts of your neighbors with herbs and kindness.", homework: "Continue to care for those around you with empathy." },
    { job: "A Guardian of the Pristine Forest", desc: "You were a being that guarded the ancient wisdom of nature for millennia.", homework: "Do not fear new changes; embrace the future." },
    { job: "A Perfumer Creating Secret Scents", desc: "You spent nights researching charms to enchant the hearts of others.", homework: "Develop a strong inner self that isn't easily swayed." },
    { job: "A Lead Dancer of the Royal Court", desc: "You were an artist who captured even the King's heart with your graceful moves.", homework: "Focus your passion on the right goals." },
    { job: "A Soulful Soloist of the Great Cathedral", desc: "You were one who moved people's souls with your heavenly voice.", homework: "Speak your truth boldly and clearly." },
    { job: "A Messenger Crossing the Battlefield", desc: "You were a responsible soul who ran day and night to deliver vital news.", homework: "Always keep your promises until the very end." },
    { job: "A Pyrotechnician Designing Fireworks", desc: "You researched in the dark for a lifetime just for a moment of brilliance.", homework: "Find light in the small, everyday moments of happiness." },
    { job: "A High Priest of the Sun God", desc: "You were a sacred figure who transformed the heat of the sun into prayers.", homework: "Manage your inner fire and find true peace." },
    { job: "A Stalwart Guard of the City Gates", desc: "You protected the city faithfully but never got to see what was outside.", homework: "Travel to unfamiliar places and broaden your horizons." },
    { job: "An Ancient Rock in the Deep Mountains", desc: "You watched the world change for centuries while staying in one place.", homework: "Let go of stubbornness and learn to be flexible." },
    { job: "A Peaceful Shepherd in the Alps", desc: "You lived looking at the clouds with your sheep in the vast meadows.", homework: "Clear your complex thoughts and live simply." },
    { job: "A Master Architect of Grand Palaces", desc: "You designed the sanctuary for others by laying thousands of tiles.", homework: "Have the patience to build everything from the ground up." },
    { job: "A Warhorse of a Great Merchant", desc: "You ran bravely to help accumulate wealth but your hooves suffered.", homework: "Take better care of your physical health and body." },
    { job: "A Guardian of a Desert Oasis", desc: "You were a merciful soul who shared life-giving water with weary travelers.", homework: "Understand the joy of sharing with a relaxed heart." },
    { job: "A Sheriff's Rusty Badge in the Old West", desc: "You shone sharply on someone's chest to protect justice and order.", homework: "Have the courage to stand up for your values." },
    { job: "A Legendary Swordsman of a Secret Map", desc: "You lived your life with a single blade to protect what truly mattered.", homework: "Set your own principles and stick to them." },
    { job: "A Viking Guide Raven", desc: "You read the wind from the highest point to lead the ships safely.", homework: "Trust your intuition when you lack certainty." },
    { job: "An Inventor's Failed Clockwork", desc: "Though you stopped ticking, you gave the inventor great precision and inspiration.", homework: "Do not fear failure; try again." },
    { job: "A Cartographer Mapping the Golden Desert", desc: "You saved lives with a single, accurate line on your maps.", homework: "Enjoy the process rather than just the result." },
    { job: "The Anchor of an Arctic Icebreaker", desc: "You had a solid will that broke through the harsh ice to make a path.", homework: "Practice softening your hardened heart." },
    { job: "An Astronomer Reading the Stars of Egypt", desc: "You pondered the laws of the universe while mapping the night sky.", homework: "Look at the big picture rather than small worries." },
    { job: "A Clever Merchant of Overseas Treasures", desc: "You were a flexible person who sparked curiosity with exotic goods.", homework: "Seek spiritual value rather than just material wealth." },
    { job: "A Famous Storyteller in the Marketplace", desc: "You were a popular soul who touched people's hearts with your words.", homework: "Use the power of your words truthfully and wisely." },
    { job: "A Pearl Diver of an Unknown Island", desc: "You were a wise soul who gathered jewel-like moments from the deep sea.", homework: "Realize that what is most precious is always near you." },
    { job: "A Wise Fisherman Watching the River", desc: "You were a sage who enjoyed the flow without rushing through time.", homework: "Learn the art of slow living and enjoying the journey." },
    { job: "A Solitary Monk Clearing Mountain Snow", desc: "You washed away the world's worries while clearing the white snow.", homework: "Regularly organize the clutter in your mind." }
];

/* === 5-E. Reincarnation Data (30 Items - Global Perspective) === */
const reincarnationDataEn = [
    { place: "A wealthy ranch in the Swiss Alps", object: "A luxury cow with an elegant bell", mission: "Open the window and breathe fresh air 3 times today." },
    { place: "A genius developer's studio in Silicon Valley", object: "A high-end mechanical keyboard", mission: "Tell yourself, 'You did a great job today.'" },
    { place: "A luxury penthouse in Manhattan", object: "A pampered cat that sleeps 20 hours a day", mission: "Lie down and stretch your legs fully." },
    { place: "The crystal blue waters of Maui", object: "A dolphin watching the surfers", mission: "Sing a line of your favorite song in the shower." },
    { place: "A cozy library in a Nordic village", object: "A beloved best-selling book", mission: "Read at least one page before bed." },
    { place: "A peaceful planet in a distant galaxy", object: "A glowing flower that never withers", mission: "Give yourself your brightest smile in the mirror." },
    { place: "A sunny bench in Central Park", object: "A trendy New Yorker's sunglasses", mission: "Get some Vitamin D in a sunny spot." },
    { place: "An art studio near the Eiffel Tower", object: "A paintbrush touched by an artist", mission: "Doodle or draw something, no matter how small." },
    { place: "An emerald beach in the Bahamas", object: "A surfboard riding the perfect wave", mission: "Purify your mind by looking at a glass of clear water." },
    { place: "An ancient record shop in London", object: "A vintage vinyl record of a masterpiece", mission: "Listen to your favorite song from start to finish." },
    { place: "A greenhouse in a future Mars colony", object: "The first Martian apple tree", mission: "Eat a slice of an apple or some fresh fruit." },
    { place: "A quiet hot spring village in Japan", object: "A happy monkey with a towel on its head", mission: "Take a warm foot bath or a relaxing shower." },
    { place: "Under a water villa in the Maldives", object: "A colorful and beautiful coral reef", mission: "Look at something blue to calm your mind." },
    { place: "A castle wall in a fairy tale kingdom", object: "A floating cotton candy cloud", mission: "Stare at the sky blankly for 5 seconds." },
    { place: "The world's most famous bakery", object: "A freshly baked, buttery croissant", mission: "Treat yourself to a delicious snack today." },
    { place: "A suite in a 7-star hotel", object: "A fluffy down pillow for travelers", mission: "Tuck yourself in comfortably tonight." },
    { place: "A street in Kyoto during cherry blossom season", object: "A petal falling on someone's shoulder", mission: "Take a walk and look at the flowers around you." },
    { place: "Near a research base in Antarctica", object: "A baby penguin sliding on its belly", mission: "Watch a cute animal video for a minute." },
    { place: "Inside a celebrity's designer bag", object: "A favorite lipstick that's always loved", mission: "Clean or organize one of your favorite items." },
    { place: "A historic plaza in Rome", object: "A magnificent statue witnessing history", mission: "Think of one great thing about yourself." },
    { place: "The night sky filled with the Aurora Borealis", object: "The brightest North Star", mission: "Look for a star out your window tonight." },
    { place: "A smart garden in a futuristic city", object: "An autonomous mower smelling fresh grass", mission: "Tidy up your surroundings for just 1 minute." },
    { place: "A peaceful temple on the Tibetan Plateau", object: "A clear bell ringing in the wind", mission: "Listen to some meditation or calm music." },
    { place: "A bamboo forest in a panda sanctuary", object: "A famous panda that gets to be lazy", mission: "Be as lazy as possible just for today." },
    { place: "A movie set for a Hollywood blockbuster", object: "The lead actor's script", mission: "Write down one inspiring word or sentence." },
    { place: "A white rooftop in Santorini", object: "A relaxed cat overlooking the sea", mission: "Look at a photo of the ocean or the sky." },
    { place: "An ancient forest with the cleanest air", object: "A wise Baobab tree living for millennia", mission: "Take 3 deep, slow breaths." },
    { place: "A theme park filled with children's laughter", object: "A colorful balloon flying high", mission: "Imagine something happy for 1 minute." },
    { place: "A giant cruise ship sailing the world", object: "A sail witnessing every voyage", mission: "Search for a travel destination you'd like to visit." },
    { place: "A cherished family photo album", object: "The person smiling brightest in the photo", mission: "Recall one happy memory from your past." }
];

/* === 6-E. US Action Recommendations & Side Effects (Witty & Western) === */
const recommendationsEn = [
    "Have a staring contest with a pigeon to show dominance.",
    "Give yourself a high-five in the mirror to sync your egos.",
    "Drink a glass of ice-cold water to lower your brain temp by 1 degree.",
    "Organize one messy drawer for exactly 5 minutes.",
    "Add '...or is it just me?' to every answer to create mystery.",
    "Refer to yourself as a 'Professional Foodie' today.",
    "Walk around the house with only one sock on to feel the art of imbalance.",
    "Open the window and try to 'read' the air quality with your skin.",
    "Blow a finger-heart to a random tree or flower.",
    "Pick the newest, weirdest snack at the convenience store.",
    "Imagine you are a martial arts master while taking a shower.",
    "Whisper 'You are a gem' to yourself 3 times.",
    "Try one breakdance move while cleaning the floor.",
    "When you hear a loud noise, mutter 'Is that a signal from destiny?'.",
    "Pick your 'prettiest piece of trash' and have a retirement ceremony before throwing it away.",
    "Check an old friend's profile and silently wish them well.",
    "Listen to your favorite song from the very first second to the last.",
    "Count how many loose threads are on your clothes right now.",
    "Silently salute every dog you pass on the street.",
    "Open the fridge and stand there for 5 seconds to find inner peace.",
    "Brush your teeth with your non-dominant hand to re-wire your brain.",
    "Walk to your next meeting as if there is zero gravity.",
    "Have a 3-minute fashion show in your room with tomorrow's outfit.",
    "Wink at the wind as it passes by.",
    "Wear your shoes on the wrong feet for 3 seconds to feel the world's prejudice.",
    "Drink water and imagine you are the lead in a dramatic soap opera.",
    "Change your phone wallpaper to a photo of the food you crave most.",
    "Give life directions to a passing ant.",
    "Photosynthesize by a sunny window to recharge your luck.",
    "Be 'professionally lazy' just for today.",
    "Read your daily schedule like you're reading a movie script.",
    "Clean your most prized possession to purify its energy.",
    "Silently tell a stranger 'Nice outfit' in your head.",
    "Host a party for one with your favorite 3 snacks.",
    "Look at the sky and feel the fact that 'Air is free'.",
    "Wink 10 times at yourself in the mirror while brushing teeth.",
    "Walk 30 feet like a supermodel with your hands in your pockets.",
    "Pre-analyze tomorrow's lunch menu with extreme detail.",
    "Draw eyes on your fingertips and have a conversation with them.",
    "Delete 3 unused apps to clear your digital karma.",
    "Give a star rating to the last video you watched.",
    "Lie down and suggest to yourself 'I am a rock'.",
    "Give a cool name to a wildflower on the street.",
    "Hold your coffee cup with the most elegant gesture possible.",
    "Mutter 'I'm so cool' 5 times without realizing it.",
    "Write one line of your diary using extreme poetic metaphors.",
    "Remember today's color is purple and find one purple object."
];

const sideEffectsEn = [
    "Sudden, uncontrollable craving for spicy tacos.",
    "Strong urge to end every sentence with '...lol'.",
    "Sudden realization that you were a rock in a past life.",
    "A slight, mysterious itch in only your left nostril.",
    "Intense curiosity to Google who 'Zhu Fu' is.",
    "Finding yourself so dazzling in the mirror you need sunglasses.",
    "Increased probability of one sock disappearing in the laundry forever.",
    "Excessive confidence that you saved the world in a past life.",
    "Feeling like every pop song lyric is about your life.",
    "Involuntary winking due to a slight eye twitch.",
    "Urge to bark 'Feed me!' at your roommates like a puppy.",
    "Groundless belief that you are the only genius who can save the world.",
    "Sudden urge to dance when a spotlight hits you.",
    "Auditory hallucination that a passing cat just said 'Hello'.",
    "Increased gravity making it impossible to get out of bed.",
    "Urge to walk around holding a bouquet like a movie lead.",
    "Hallucination that your alarm clock sounds like a heavenly choir.",
    "Obsession with only stepping on the white stripes of a crosswalk.",
    "Accidentally sending finger-hearts to your boss.",
    "Delusion that all the neighborhood cats treat you as their King.",
    "Sudden urge to check the expiration date of every sauce in the fridge.",
    "Danger of overeating because everything feels like 0 calories.",
    "Dreaming of dancing with a celebrity, ruining your deep sleep.",
    "Urge to change your phone wallpaper to a photo of fried chicken.",
    "Inability to function because a catchy song is looping in your head.",
    "A condition where you feel pain unless you act 'too cute'.",
    "The 'Kindness Side Effect' where you start talking to fallen leaves.",
    "Unfounded physical confidence that you can do a windmill spin.",
    "Feeling offended if you aren't offered a free refill.",
    "Searching for a magic wand because you're convinced you're a wizard.",
    "Excessive 'Celebrity Syndrome' feeling like everyone is watching you.",
    "Tomorrow's lunch appearing in your dreams in 4K resolution.",
    "Sudden high-definition memory of an embarrassing moment from 10 years ago.",
    "Increased courage to go to karaoke despite being tone-deaf.",
    "Visual improvement where the world looks like it has a lavender filter.",
    "Suddenly acting like a millionaire even when your wallet is empty.",
    "Delusion that you can actually communicate with pigeons.",
    "Trying to transmit telepathic signals to aliens.",
    "Physical vitality making you want to skip every other stair step.",
    "Taste bud mutation where vegetables suddenly taste like steak.",
    "Being mistaken for an angel because you're being too nice to everyone.",
    "Sudden happiness from just tying your shoelaces.",
    "A tendency to pick up ordinary rocks because they look like gems.",
    "An urge to recite lines like a protagonist in a cartoon.",
    "Your laugh changing to an 'Evil Villain' cackle.",
    "The illusion that you suddenly know everyone's secrets.",
    "Your day replaying in your head like a movie before you sleep.",
    "Extreme itchiness to dance if you don't hear a beat.",
    "Addiction to humming while walking down the street."
];
