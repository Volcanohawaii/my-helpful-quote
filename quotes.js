/* [Destiny Engineering Report - Global Final Dataset] */

// 1. 기초 오행 데이터
const hangulElements = { 'ㄱ': '木', 'ㄲ': '木', 'ㅋ': '木', 'ㄴ': '火', 'ㄷ': '火', 'ㄸ': '火', 'ㄹ': '火', 'ㅌ': '火', 'ㅇ': '土', 'ㅎ': '土', 'ㅅ': '金', 'ㅆ': '金', 'ㅈ': '金', 'ㅉ': '金', 'ㅊ': '金', 'ㅁ': '水', 'ㅂ': '水', 'ㅃ': '水', 'ㅍ': '水' };
const alphabetElements = { 'A': '木', 'E': '木', 'I': '木', 'O': '木', 'U': '木', 'Y': '木', 'B': '水', 'P': '水', 'M': '水', 'F': '水', 'W': '水', 'C': '火', 'G': '火', 'J': '火', 'L': '火', 'S': '火', 'D': '土', 'N': '土', 'T': '土', 'H': '土', 'K': '金', 'R': '金', 'V': '金', 'X': '金', 'Q': '金', 'Z': '金' };

// 2. 성명학 수리 25종 (영문 설명 포함)
const nameNumerology = {
    1: { title: "기본격", desc: "스스로 길을 개척하는 강한 생명력입니다.", titleEn: "The Pioneer", descEn: "A strong drive to blaze your own trail independently." },
    2: { title: "조화격", desc: "타인과 협력하여 안정적인 기반을 닦습니다.", titleEn: "The Harmonizer", descEn: "Thriving in cooperation and creating balance." },
    3: { title: "희망격", desc: "밝고 긍정적인 에너지로 꾸준히 성장합니다.", titleEn: "The Optimist", descEn: "Your bright, positive energy attracts opportunities." },
    4: { title: "안정격", desc: "차분하고 내실이 있어 평안한 삶을 삽니다.", titleEn: "The Anchor", descEn: "A grounded nature that builds a secure path." },
    5: { title: "성공격", desc: "지혜와 운이 따라주어 목표를 성취합니다.", titleEn: "The Achiever", descEn: "Luck and wisdom guide you toward success." },
    6: { title: "덕망격", desc: "성품이 온화하여 인복이 많고 대업을 이룹니다.", titleEn: "The Virtuous", descEn: "A warm personality attracts strong supporters." },
    7: { title: "독립격", desc: "주관이 뚜렷하고 자신의 힘으로 성공합니다.", titleEn: "The Independent", descEn: "Strong self-will builds your own legacy." },
    8: { title: "발전격", desc: "성실함을 바탕으로 명예를 쌓아갑니다.", titleEn: "The Rising Star", descEn: "Step-by-step diligence leads to respect." },
    9: { title: "통찰격", desc: "사물의 이치를 꿰뚫는 눈이 있어 빛을 발합니다.", titleEn: "The Insightful", descEn: "Sharp intuition allows you to see the core truth." },
    10: { title: "유연격", desc: "위기를 기회로 바꾸는 재치가 뛰어납니다.", titleEn: "The Adaptable", descEn: "Natural wit to turn challenges into opportunities." },
    11: { title: "재생격", desc: "어려움이 닥쳐도 다시 일어나는 회복력이 강합니다.", titleEn: "The Resilient", descEn: "Inner strength ensures you rise stronger." },
    12: { title: "성실격", desc: "한결같은 마음으로 정진하여 결실을 맺습니다.", titleEn: "The Dedicated", descEn: "Consistency leads you to grand rewards." },
    13: { title: "총명격", desc: "지혜가 깊어 학문이나 예술로 성공합니다.", titleEn: "The Brilliant", descEn: "Intellectual sharpness paves your way." },
    14: { title: "기예격", desc: "예술적 감각이 뛰어나 독창적인 분야에서 성공합니다.", titleEn: "The Artist", descEn: "Your unique creativity makes you stand out." },
    15: { title: "통솔격", desc: "덕망이 높고 많은 이들을 이끄는 리더가 됩니다.", titleEn: "The Leader", descEn: "Natural charisma and virtue position you at the head." },
    16: { title: "행운격", desc: "인복이 풍부하여 주변의 도움으로 번창합니다.", titleEn: "The Favored", descEn: "Surrounded by people who want you to succeed." },
    17: { title: "강건격", desc: "신념이 강하고 난관을 정면으로 돌파합니다.", titleEn: "The Fearless", descEn: "Unshakable faith overcomes any obstacle." },
    18: { title: "발전격", desc: "강한 의지로 난관을 뚫고 자수성가합니다.", titleEn: "The Self-Made", descEn: "Pure determination helps you achieve wealth." },
    19: { title: "직관격", desc: "감각이 예민하여 남들이 못 보는 기회를 잡습니다.", titleEn: "The Visionary", descEn: "Sense trends before they are obvious." },
    20: { title: "결단격", desc: "맺고 끊음이 확실하고 신뢰를 받는 성격입니다.", titleEn: "The Decisive", descEn: "Clear judgment and integrity make you trusted." },
    21: { title: "두령격", desc: "만인을 통솔하는 기질로 크게 성공할 운입니다.", titleEn: "The Commander", descEn: "Born with authority to lead many." },
    22: { title: "원만격", desc: "성격이 부드러워 대인관계가 매우 원만합니다.", titleEn: "The Diplomat", descEn: "A master of social harmony and networking." },
    23: { title: "혁신격", desc: "변화를 두려워하지 않고 시대를 앞서갑니다.", titleEn: "The Innovator", descEn: "A trailblazer who embraces the future." },
    24: { title: "입신격", desc: "빈손으로 시작해도 점진적으로 큰 부를 이룹니다.", titleEn: "The Wealth-Builder", descEn: "Continuous growth leads to prosperity." },
    25: { title: "안강격", desc: "성격이 원만하고 평생 평안과 복을 누립니다.", titleEn: "The Blessed", descEn: "Balanced character ensures a life of peace." }
};

// 3. 전생 데이터 10종 (한영 완벽 매칭)
const pastLifeData = [
    { job: "달빛 아래 시를 쓰던 선비", desc: "학문에 정진했으나 세상의 풍파는 피하려 했던 고결한 영혼이었습니다.", homework: "나의 재능을 세상에 당당히 드러내기" },
    { job: "궁궐의 낮잠 자던 삼색 고양이", desc: "평화로운 기운으로 주변을 치유했으나 자립심은 조금 부족했군요.", homework: "스스로 일어서는 독립심 기르기" },
    { job: "비밀 정원을 가꾸던 은둔 정원사", desc: "꽃들과 대화하며 조용히 자신만의 세계를 완성했습니다.", homework: "세상 밖으로 나와 사람들과 소통하기" },
    { job: "고려시대 차(茶)를 달이던 최고 장인", desc: "한 잔의 차에 온 우주를 담기 위해 평생을 바친 완벽주의자였습니다.", homework: "조급함을 버리고 기다림의 미학 배우기" },
    { job: "마을의 지혜로운 할머니 약사", desc: "풀뿌리와 꽃잎으로 이웃의 아픈 마음을 치유해 주던 성자였습니다.", homework: "배려하는 마음으로 주변 돌보기" },
    { job: "숲의 지혜를 지키던 파수꾼", desc: "수천 년을 살며 대자연의 흐름을 읽던 고대 숲의 수호신이었습니다.", homework: "새로운 변화를 두려워하지 않기" },
    { job: "장희빈의 비밀 조향사", desc: "사람의 마음을 홀리는 향기를 연구하던 매력적인 인물이었습니다.", homework: "누군가에게 휘둘리지 않는 주관 갖기" },
    { job: "궁중 무용의 주인공", desc: "아름다운 몸짓으로 왕의 마음까지 사로잡았던 전설의 무용수였습니다.", homework: "자신의 열정을 올바른 곳에 쏟기" },
    { job: "성가대의 목소리 좋은 솔리스트", desc: "천상의 목소리로 사람들의 영혼을 울리던 신의 목소리였습니다.", homework: "나의 진실된 목소리를 당당하게 내뱉기" },
    { job: "전장의 소식을 전하던 전령", desc: "밤낮없이 달려 약속을 지켰던 가장 책임감 있는 분이었습니다.", homework: "약속의 소중함을 끝까지 지키기" }
];

const pastLifeDataEn = [
    { job: "Scholar of the Silver Moon", desc: "A noble soul who sought wisdom in solitude but avoided life's chaos.", homework: "Boldly step out and show your true talents to the world." },
    { job: "The Palace Cat", desc: "A peaceful healer who brought comfort to royalty but lacked independence.", homework: "Develop a fierce independence and stand on your own feet." },
    { job: "Gardener of Secret Eden", desc: "An artist who built a private paradise while talking only to the flowers.", homework: "Step out of your sanctuary and connect with others." },
    { job: "Master of Celestial Tea", desc: "A perfectionist who spent lifetimes capturing the universe in a single cup.", homework: "Let go of urgency and master the art of divine patience." },
    { job: "Wise Village Herbalist", desc: "A saint-like figure who healed heartaches with roots and kindness.", homework: "Continue to nurture your empathy and care for those around you." },
    { job: "Guardian of Ancient Whispers", desc: "A timeless protector who read the natural flow of the world for millennia.", homework: "Do not fear the winds of change; embrace the unknown future." },
    { job: "Royal Court Perfumer", desc: "An enchanting creator who studied the scents that captivate souls.", homework: "Find your own center so you are never swayed by others." },
    { job: "Legendary Court Dancer", desc: "A graceful master who captured the King's heart with every move.", homework: "Direct your intense passion toward the highest good." },
    { job: "The Divine Soloist", desc: "A voice from the heavens that moved the spirits of everyone.", homework: "Speak your truth boldly and let your unique voice be heard." },
    { job: "The Battlefield Messenger", desc: "A soul of iron will who ran through fire to keep a single promise.", homework: "Treasure your integrity and keep your word until the end." }
];

// 4. 내세 데이터 10종
const reincarnationData = [
    { place: "스위스 알프스 목장", object: "명품 젖소", mission: "신선한 공기 마시며 평화로운 기운 전하기" },
    { place: "실리콘밸리 천재의 서재", object: "기계식 키보드", mission: "위대한 아이디어가 세상에 나오도록 돕기" },
    { place: "강남 재벌집 거실", object: "사랑받는 품종묘", mission: "존재만으로 주변에 행복을 선사하기" },
    { place: "제주도 푸른 바다", object: "자유로운 돌고래", mission: "파도를 타고 넓은 세계로 나아가기" },
    { place: "북유럽 도서관", object: "베스트셀러 책", mission: "지친 이들에게 지식과 위로를 전달하기" },
    { place: "우주의 빛나는 행성", object: "지지 않는 꽃", mission: "거울 보고 밝게 한번 웃어보기" },
    { place: "미래의 화성 식민지", object: "최초의 사과나무", mission: "척박한 땅에 푸른 생명의 희망 심기" },
    { place: "영화 촬영장", object: "주인공의 대본", mission: "아름다운 이야기가 완성되도록 영감 주기" },
    { place: "안드로메다 은하", object: "차원 여행자", mission: "우주의 평화를 잇는 가교 역할 수행하기" },
    { place: "산토리니 지붕 위", object: "느긋한 고양이", mission: "바다를 보며 삶의 여유를 가르쳐주기" }
];

const reincarnationDataEn = [
    { place: "Alps High-Ranch", object: "Elegant Bell-Cow", mission: "Breathe in mountain air and spread peaceful vibes." },
    { place: "Silicon Valley Studio", object: "Pro Mechanical Keyboard", mission: "Help world-changing ideas become a reality." },
    { place: "Manhattan Penthouse", object: "Beloved Pedigree Cat", mission: "Simply exist and bring ultimate joy to everyone." },
    { place: "Crystal Maui Shores", object: "Spirit Dolphin", mission: "Ride the cosmic waves and explore the vast world." },
    { place: "Nordic Grand Library", object: "Global Bestseller Book", mission: "Comfort weary souls with wisdom and stories." },
    { place: "A Glowing Planet", object: "Eternal Space Flower", mission: "Smile at your reflection in the stars." },
    { place: "Future Mars Colony", object: "First Apple Tree", mission: "Plant the hope of green life in a red world." },
    { place: "Hollywood Movie Set", object: "The Lead Actor's Script", mission: "Inspire the creation of a legendary story." },
    { place: "Andromeda Galaxy", object: "Dimensional Traveler", mission: "Become a bridge connecting different worlds." },
    { place: "Santorini Rooftops", object: "A Relaxed Blue-Eye Cat", mission: "Teach the world the art of leisure and calmness." }
];

// 5. 부작용 및 명언
const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "전생이 바위였던 듯한 멍함", "양말 한 짝 영원히 실종", "냉장고 소스 유통기한 점검 강박", "뜬금없는 윙크 발사", "거울 속 내 모습에 취함", "왼쪽 콧구멍만 간지러움"];
const sideEffectsEn = ["Unstoppable dessert cravings", "Urge to back-talk everyone", "Spells of rock-like zoning out", "Mysterious loss of one sock forever", "Obsessive checking of sauce dates", "Involuntary winking syndrome", "Dazzled by your own mirror image", "An itch in specifically your left nostril"];

const quoteData = { "인생": [ { text: "모든 꽃은 저마다의 시간에 핀다." }, { text: "속도보다 중요한 것은 방향이다." }, { text: "지금 그대로 당신은 충분하다." }, { text: "어두운 밤일수록 별은 빛난다." } ] };
const quoteDataEn = { "life": [ { text: "Every flower blooms in its own time." }, { text: "Direction is more important than speed." }, { text: "You are enough exactly as you are." }, { text: "The darker the night, the brighter the stars." } ] };

// 6. UI 및 처방
const i18n = {
    ko: { 
        title: "성명학 데이터 분석", desc: "이름의 파동 에너지와 사주의 요인을 결합하여 고유한 운명 기운을 추출합니다.", nameLabel: "성함 (한글/영문)", birthLabel: "양력 8자리 (1000-2150)", btn: "리포트 생성하기", reset: "초기화", tab1: "현생 분석", tab2: "전생 기록", tab3: "내세 예약", copy: "링크 복사", sec1: "[성명학적 결과 분석]", sec2: "[강점 오행의 기운]", sec3: "[부족 오행 보완법]", advise: "운명 조언", practice: "실천 행법", sideEffect: "과유불급 부작용", pastJob: "전생의 직업", pastHomework: "현생의 숙제", nextDest: "환생 장소", nextObj: "환생 형태", nextMission: "부여된 소명",
        loadSeal: "분석중", loadTitle: "운명의 에너지를 조합 중...", loadDesc: "잠시만 기다려 주세요."
    },
    en: { 
        title: "Destiny Engineering Lab", desc: "Extracts unique energy by combining name vibrations with seasonal factors.", nameLabel: "Full Name", birthLabel: "Birthdate (YYYYMMDD)", btn: "Generate Report", reset: "Reset", tab1: "Life Path", tab2: "Past Life", tab3: "Next Life", copy: "Copy Link", sec1: "[Numerology Result]", sec2: "[Core Energy Analysis]", sec3: "[Remedy Guide]", advise: "Life Advice", practice: "Mission", sideEffect: "Side Effects", pastJob: "Past Identity", pastHomework: "Soul Goal", nextDest: "Destination", nextObj: "Born As", nextMission: "Requirement",
        loadSeal: "Analyzing", loadTitle: "Combining Destiny Energies...", loadDesc: "Please wait a moment."
    }
};

const elementAttributesKo = { "木": { name: "나무", trait: "성장과 기획" }, "火": { name: "불", trait: "열정과 확산" }, "土": { name: "흙", trait: "안정과 포용" }, "金": { name: "쇠", trait: "결단과 원칙" }, "水": { name: "물", trait: "지혜와 유연함" } };
const elementAttributesEn = { "木": { name: "Wood", trait: "Growth & Creativity" }, "火": { name: "Fire", trait: "Passion & Leadership" }, "土": { name: "Earth", trait: "Stability & Trust" }, "金": { name: "Metal", trait: "Logic & Integrity" }, "水": { name: "Water", trait: "Wisdom & Flexibility" } };

const elementPrescriptions = {
    "木": { veryStrong: "기운이 과해 독단적일 수 있습니다. 명상이 필수입니다.", strong: "추진력이 훌륭합니다. 끝까지 마무리하세요.", normal: "안정적인 성장의 시기입니다. 리듬을 지키세요.", weak: "의욕 보충이 필요합니다. 아침 산책을 하세요.", veryWeak: "생기가 고갈된 상태입니다. 초록색 옷이 길합니다." },
    "火": { veryStrong: "번아웃이 오기 쉽습니다. 열기를 식히세요.", strong: "열정이 가득합니다. 에너지를 나누세요.", normal: "밝고 따뜻합니다. 예의를 갖추면 복이 옵니다.", weak: "의욕이 저하되었습니다. 햇볕을 20분간 쬐세요.", veryWeak: "무기력하기 쉽습니다. 붉은색 소품이 좋습니다." },
    "土": { veryStrong: "생각이 정체되기 쉽습니다. 환경을 바꾸세요.", strong: "포용력이 좋습니다. 남을 돕는 것이 운을 엽니다.", normal: "안정감이 훌륭합니다. 독서가 보약입니다.", weak: "기반이 흔들립니다. 맨발로 흙을 밟으세요.", veryWeak: "자신감이 바닥입니다. 달콤한 음식이 길합니다." },
    "金": { veryStrong: "판단이 날카로워 타인을 아프게 합니다.", strong: "결단력이 좋습니다. 정리에 좋은 때입니다.", normal: "이성적이고 깔끔합니다. 규칙적인 생활이 무기입니다.", weak: "우유부단해집니다. 금속 장신구를 하세요.", veryWeak: "경계심이 부족해 손해 봅니다. 흰색을 입으세요." },
    "水": { veryStrong: "우울감에 빠질 수 있습니다. 땀 나게 운동하세요.", strong: "지혜가 샘솟습니다. 창작 활동에 매진하세요.", normal: "유연하고 여유롭습니다. 순리대로 사세요.", weak: "융통성이 부족합니다. 따뜻한 차를 마시세요.", veryWeak: "에너지가 고갈되었습니다. 짠맛과 검은색이 길합니다." }
};

const enPrescriptions = {
    "木": { veryStrong: "Excessive energy. Daily meditation is a must.", strong: "Great momentum! Focus on finishing tasks.", normal: "Steady growth. Maintain your current rhythm.", weak: "Lacking drive. Take a morning walk daily.", veryWeak: "Vitality depleted. Wear green items." },
    "火": { veryStrong: "High burnout risk. Cool down your heat.", strong: "Radiant passion! Share your warmth.", normal: "Bright and positive. Politeness brings luck.", weak: "Unmotivated. Get 20 mins of sunlight.", veryWeak: "Deep exhaustion. Carry red accessories." },
    "土": { veryStrong: "Stubborn thoughts. Change your scenery.", strong: "Great empathy! Helping others opens doors.", normal: "Solid stability. Self-improvement via reading.", weak: "Ungrounded. Walk barefoot on the earth.", veryWeak: "Low confidence. Sweet snacks will help." },
    "金": { veryStrong: "Too critical. Soften your heart.", strong: "Sharp decisiveness! Perfect time to clean.", normal: "Rational and organized. Keep your routine.", weak: "Indecisive. Wear metallic jewelry.", veryWeak: "Weak boundaries. Wear white clothes." },
    "水": { veryStrong: "Prone to mood slumps. Exercise intensely.", strong: "Flowing wisdom! Dive into creative work.", normal: "Flexible and calm. Trust the natural flow.", weak: "Rigid flow. Sip warm tea regularly.", veryWeak: "Mentally drained. Black items are lucky." }
};

const nicknamesKo = { "木": { veryStrong: "숲을 삼키는 개척자", strong: "위대한 기획자", normal: "중재자", weak: "어린 싹", veryWeak: "나뭇가지" }, "火": { veryStrong: "태양의 화신", strong: "열정 리더", normal: "등불 수호자", weak: "작은 별빛", veryWeak: "재 속의 온기" }, "土": { veryStrong: "거대한 바위산", strong: "대지의 수호자", normal: "들판 관리자", weak: "모래 언덕", veryWeak: "먼지 속의 정령" }, "金": { veryStrong: "절대 심판자", strong: "신념의 검객", normal: "지성의 조각가", weak: "황금 세공사", veryWeak: "무명의 철학자" }, "水": { veryStrong: "심연의 소용돌이", strong: "지혜로운 항해사", normal: "계곡의 시냇물", weak: "감성 예술가", veryWeak: "고요한 연못" } };
const nicknamesEn = { "木": { veryStrong: "Unstoppable Pioneer", strong: "Grand Architect", normal: "Mediator", weak: "Dreaming Sprout", veryWeak: "Lonely Branch" }, "火": { veryStrong: "Explosive Sun", strong: "Solar Leader", normal: "Warm Guardian", weak: "Subtle Starlight", veryWeak: "Hidden Ember" }, "土": { veryStrong: "Immovable Mountain", strong: "Golden Guardian", normal: "Peaceful Manager", weak: "Soft Dune", veryWeak: "Spirit of Dust" }, "金": { veryStrong: "Absolute Judge", strong: "Knight of Integrity", normal: "Refined Sculptor", weak: "Flexible Goldsmith", veryWeak: "Humble Philosopher" }, "水": { veryStrong: "Great Vortex", strong: "Wise Navigator", normal: "Clear Stream", weak: "Sensitive Artist", veryWeak: "Silent Pond" } };
