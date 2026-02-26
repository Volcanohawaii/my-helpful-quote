/* [Destiny Engineering Lab - Global Final Dataset] */

// 1. 분석 기초 데이터
const hangulElements = { 'ㄱ': '木', 'ㄲ': '木', 'ㅋ': '木', 'ㄴ': '火', 'ㄷ': '火', 'ㄸ': '火', 'ㄹ': '火', 'ㅌ': '火', 'ㅇ': '土', 'ㅎ': '土', 'ㅅ': '金', 'ㅆ': '金', 'ㅈ': '金', 'ㅉ': '金', 'ㅊ': '金', 'ㅁ': '水', 'ㅂ': '水', 'ㅃ': '水', 'ㅍ': '水' };
const alphabetElements = { 'A': '木', 'E': '木', 'I': '木', 'O': '木', 'U': '木', 'Y': '木', 'B': '水', 'P': '水', 'M': '水', 'F': '水', 'W': '水', 'C': '火', 'G': '火', 'J': '火', 'L': '火', 'S': '火', 'D': '土', 'N': '土', 'T': '土', 'H': '土', 'K': '金', 'R': '金', 'V': '金', 'X': '金', 'Q': '金', 'Z': '金' };

// 2. 성명학 수리 데이터 (1~25번 풀세트)
const nameNumerology = {
    1: { title: "기본격", desc: "스스로 길을 개척하는 강한 생명력입니다.", titleEn: "The Pioneer", descEn: "A strong drive to blaze your own trail independently." },
    2: { title: "조화격", desc: "타인과 협력하여 안정적인 기반을 닦습니다.", titleEn: "The Harmonizer", descEn: "Thriving in cooperation and creating balance." },
    3: { title: "희망격", desc: "밝고 긍정적인 에너지로 꾸준히 성장합니다.", titleEn: "The Optimist", descEn: "Bright, positive energy attracts growth." },
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
    14: { title: "기예격", desc: "예술적 감각이 뛰어나 독창적인 분야에서 성공합니다.", titleEn: "The Artist", descEn: "Unique creativity makes you stand out." },
    15: { title: "통솔격", desc: "덕망이 높고 많은 이들을 이끄는 리더가 됩니다.", titleEn: "The Leader", descEn: "Natural charisma and virtue position you at the head." },
    16: { title: "행운격", desc: "인복이 풍부하여 주변의 도움으로 번창합니다.", titleEn: "The Favored", descEn: "Surrounded by people who want you to succeed." },
    17: { title: "강건격", desc: "신념이 강하고 난관을 정면으로 돌파합니다.", titleEn: "The Fearless", descEn: "Unshakable faith overcomes any obstacle." },
    18: { title: "발전격", desc: "강한 의지로 난관을 뚫고 자수성가합니다.", titleEn: "The Self-Made", descEn: "Pure determination helps you achieve wealth." },
    19: { title: "직관격", desc: "감각이 예민하여 남들이 못 보는 기회를 잡습니다.", titleEn: "The Visionary", descEn: "Sense trends before they are obvious." },
    20: { title: "결단격", desc: "맺고 끊음이 확실하고 신뢰를 받는 성격입니다.", titleEn: "The Decisive", descEn: "Clear judgment makes you highly trusted." },
    21: { title: "두령격", desc: "만인을 통솔하는 기질로 크게 성공할 운입니다.", titleEn: "The Commander", descEn: "Born with authority to lead many." },
    22: { title: "원만격", desc: "성격이 부드러워 대인관계가 매우 원만합니다.", titleEn: "The Diplomat", descEn: "Gentle nature makes you a master of social harmony." },
    23: { title: "혁신격", desc: "변화를 두려워하지 않고 시대를 앞서갑니다.", titleEn: "The Innovator", descEn: "A trailblazer who embraces the future." },
    24: { title: "입신격", desc: "빈손으로 시작해도 점진적으로 큰 부를 이룹니다.", titleEn: "The Wealth-Builder", descEn: "Continuous growth leads to prosperity." },
    25: { title: "안강격", desc: "성격이 원만하고 평생 평안과 복을 누립니다.", titleEn: "The Blessed", descEn: "Balanced character ensures a life of peace." }
};

// 3. 전생 데이터 (30종)
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
    { job: "전장의 소식을 전하던 전령", desc: "밤낮없이 달려 약속을 지켰던 가장 책임감 있는 분이었습니다.", homework: "약속의 소중함을 끝까지 지키기" },
    { job: "불꽃놀이를 설계하던 화약 기술자", desc: "한순간의 찬란함을 위해 평생을 연구하던 연구자였습니다.", homework: "일상의 소소한 행복에서 빛을 찾기" },
    { job: "고대 이집트의 태양신 사제", desc: "태양의 열기를 기도로 승화시키던 신성한 인물이었습니다.", homework: "내면의 화를 다스리고 평온을 찾기" },
    { job: "유럽 성문을 지키던 문지기", desc: "성실하게 자리를 지켰으나 정작 본인의 세상 구경은 못 했군요.", homework: "낯선 곳으로 여행하며 시야 넓히기" },
    { job: "깊은 산속 도를 닦던 바위", desc: "수백 년간 산 정상에서 세상의 변화를 지켜보던 존재였습니다.", homework: "고집을 버리고 유연하게 대처하기" },
    { job: "알프스 산맥의 양치기", desc: "광활한 초원에서 양들과 함께 단순하고 순수한 삶을 살았습니다.", homework: "복잡한 생각 비우고 단순하게 살기" },
    { job: "고궁의 기와를 올리던 장인", desc: "수천 장의 기와를 올리며 누군가의 안식을 설계한 장인이었습니다.", homework: "기초부터 차근차근 다지는 인내심 갖기" },
    { job: "거상의 군마", desc: "용맹하게 달리며 부를 축적하는 데 큰 공을 세웠던 존재입니다.", homework: "자신의 건강과 몸을 소중히 아끼기" },
    { job: "사막의 오아시스 수호자", desc: "여행자들에게 생명수를 나누어 주던 자비로운 영혼이었습니다.", homework: "여유로운 마음으로 나눔의 기쁨 알기" },
    { job: "서부 시대 보안관", desc: "정의를 지키기 위해 고독한 싸움을 이어가던 영웅이었습니다.", homework: "올바른 가치관을 지키는 용기 내기" },
    { job: "비밀 지도를 지키던 검객", desc: "평생 지켜야 할 가치를 위해 검 한 자루로 세상을 살았습니다.", homework: "자신만의 원칙을 세우고 지키기" },
    { job: "바이킹 선단의 길잡이 까마귀", desc: "가장 높은 곳에서 바람의 방향을 읽어 배를 인도하던 영물이었습니다.", homework: "확신이 없을 때 본인의 직감을 믿기" },
    { job: "어느 발명가의 실패한 태엽 시계", desc: "비록 멈췄지만 발명가에게 큰 정교함과 영감을 주었던 기계였습니다.", homework: "실패를 두려워하지 않고 다시 도전하기" },
    { job: "황금 사막의 지도 제작자", desc: "정확한 선 하나로 사람들의 생명을 구하던 지리학자였습니다.", homework: "결과보다 과정을 즐기는 여유 갖기" },
    { job: "북극해를 건너던 쇄빙선 닻", desc: "거친 얼음을 깨고 길을 내던 단단한 의지의 소유자였습니다.", homework: "딱딱한 마음을 부드럽게 녹이는 연습" },
    { job: "고대 별을 읽던 천문학자", desc: "밤마다 하늘의 지도를 그리며 우주의 섭리를 고민했습니다.", homework: "인생의 큰 흐름을 바라보는 눈 갖기" },
    { job: "바다 건너온 보물을 파는 상인", desc: "사람들의 호기심을 자극하던 유연하고 눈치 빠른 인물이었습니다.", homework: "물질보다 정신적인 가치 찾기" },
    { job: "저잣거리의 이야기꾼", desc: "입담 하나로 온 마을 사람들의 마음을 적시던 인기인이었습니다.", homework: "진실한 언어의 힘을 올바르게 사용하기" },
    { job: "이름 모를 섬의 해녀", desc: "깊은 바다 밑에서 보석 같은 순간을 건져 올리던 지혜로운 이였습니다.", homework: "소중한 것은 늘 가까이에 있음을 깨닫기" },
    { job: "강가에서 세월을 낚던 강태공", desc: "물결을 보며 서두르지 않는 여유를 즐기던 현자였습니다.", homework: "결과보다 과정을 즐기는 법 익히기" },
    { job: "설산의 눈을 치우던 수도승", desc: "하얗게 내린 눈을 치우며 마음의 번뇌를 씻어냈습니다.", homework: "복잡한 머릿속을 수시로 정리하기" }
];

const pastLifeDataEn = pastLifeData.map(d => ({ job: "Ancient Identity", desc: "A unique soul who journeyed through the past.", homework: "Fulfill your karmic goal and light up the world." }));

// 4. 내세 데이터 (30종)
const reincarnationData = [
    { place: "스위스 알프스 목장", object: "명품 젖소", mission: "신선한 공기 3번 마시고 힐링하기" },
    { place: "실리콘밸리 천재의 서재", object: "기계식 키보드", mission: "위대한 아이디어가 세상에 나오도록 돕기" },
    { place: "강남 재벌집 거실", object: "사랑받는 품종묘", mission: "느긋하게 스트레칭 3번 하기" },
    { place: "제주도 푸른 바다", object: "자유로운 돌고래", mission: "좋아하는 노래 한 소절 부르기" },
    { place: "북유럽 도서관", object: "베스트셀러 책", mission: "책 한 페이지 읽으며 지식 충전하기" },
    { place: "우주의 빛나는 행성", object: "지지 않는 꽃", mission: "거울 보고 밝게 한번 웃어보기" },
    { place: "뉴욕 센트럴 파크", object: "여유로운 벤치", mission: "햇볕 5분 쬐기" },
    { place: "파리 에펠탑 근처 화방", object: "예술가의 붓", mission: "무언가 그려보기" },
    { place: "하와이 해변", object: "멋진 서핑보드", mission: "물 한 잔 마시기" },
    { place: "런던의 레코드 숍", object: "오래된 LP판", mission: "음악 끝까지 듣기" },
    { place: "미래의 화성 식민지", object: "최초의 사과나무", mission: "상큼한 과일 한 조각 먹기" },
    { place: "일본 온천 마을", object: "행복한 원숭이", mission: "따뜻한 물로 발의 피로 풀어주기" },
    { place: "몰디브 바다 아래", object: "아름다운 산호초", mission: "파란색 물건 보기" },
    { place: "동화 속 성곽 위", object: "솜사탕 구름", mission: "하늘 5초 바라보기" },
    { place: "유명한 빵집", object: "갓 구운 크루아상", mission: "맛있는 간식 먹기" },
    { place: "최고급 호텔", object: "폭신한 깃털 베개", mission: "자기 전 베개 정돈하기" },
    { place: "교토의 벚꽃 거리", object: "흩날리는 벚꽃잎", mission: "주변 꽃 구경하기" },
    { place: "남극의 얼음 기지", object: "아기 펭귄", mission: "동물 영상 보기" },
    { place: "연예인의 가방 속", object: "최애 립스틱", mission: "물건 하나 정성껏 닦기" },
    { place: "로마 광장", object: "멋진 조각상", mission: "내 장점 하나 떠올리기" },
    { place: "북극의 밤하늘", object: "가장 밝은 북극성", mission: "오늘 밤 별 찾아보기" },
    { place: "부자 동네 정원", object: "자율주행 잔디깎이", mission: "주변 정리 1분 하기" },
    { place: "티베트 사원", object: "맑은 종소리", mission: "차분한 음악 듣기" },
    { place: "대나무 숲", object: "인기 만점 판다", mission: "게으름 피워보기" },
    { place: "영화 촬영장", object: "주인공의 대본", mission: "단어 하나 적어보기" },
    { place: "산토리니 지붕 위", object: "느긋한 고양이", mission: "바다 사진 보기" },
    { place: "공기 맑은 숲", object: "바오밥나무", mission: "심호흡 3번 하기" },
    { place: "꿈의 놀이공원", object: "오색 풍선", mission: "좋은 상상 1분 하기" },
    { place: "대형 크루즈선", object: "모든 것을 보는 돛", mission: "여행지 검색하기" },
    { place: "소중한 사진첩", object: "사진 속 인물", mission: "행복한 기억 떠올리기" }
];

const reincarnationDataEn = reincarnationData.map(r => ({ place: "Future Realm", object: "Special Form", mission: "Complete your destiny." }));

// 5. 부작용 및 명언
const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "전생이 돌덩이였던 듯한 멍함", "양말 한 짝 영원히 실종", "냉장고 소스 유통기한 점검 강박", "뜬금없는 윙크 발사", "거울 속 내 모습에 취함", "왼쪽 콧구멍만 간지러움", "비둘기와 대화 시도", "이불 밖이 위험해 보임", "갑자기 윈드밀 가능할 것 같음", "알람 소리가 교향곡 같음", "횡단보도 흰색만 밟음", "나뭇잎에게 이름 지어줌", "손가락 하트 무의식 발사", "채소가 고기 맛으로 느껴짐", "웃음소리가 음하하로 변함", "모든 비밀을 아는 듯한 눈빛", "춤을 안 추면 몸이 근질거림", "지나가는 개미에게 훈수 둠", "공기는 무료임을 실감하며 감동", "모델 워킹으로 걷고 싶음", "내일 점심이 4K로 꿈에 나옴", "10년 전 흑역사 고화질 기억", "계단 한 칸씩 건너뛰는 활력", "지갑 가벼워도 부자인 척", "우주인과 교신 시도", "지나가는 고양이가 인사함", "세상이 라벤더색으로 보임", "냉장고 모든 소스 유통기한 확인", "혼자서 파티 개최", "가장 예쁜 쓰레기 은퇴식", "바람에게 윙크 날림", "신발 좌우 바꿔 신어보기", "들꽃에게 인생 고민 상담", "우아한 손짓으로 물 마시기", "거울 보며 본인 찬양 5번", "일기 한 줄을 시처럼 쓰기", "보라색 물건 보면 반가움", "양말 한 쪽만 신고 달리기", "세상이 나를 중심으로 도는 착각"];
const sideEffectsEn = sideEffects.map(s => "Mysterious Side Effect");
const quoteData = { "인생": [ { text: "모든 꽃은 저마다의 시간에 핀다." }, { text: "속도보다 중요한 것은 방향이다." }, { text: "지금 그대로 당신은 충분하다." }, { text: "어두운 밤일수록 별은 빛난다." }, { text: "어제보다 나은 오늘의 나를 사랑하라." }, { text: "삶이 있는 한 희망은 있다." }, { text: "행복은 선택하는 것이다." }, { text: "내일의 나를 만드는 것은 오늘의 인내다." }, { text: "길이 없으면 길을 찾아라." }, { text: "가장 어두운 밤도 해뜨기 직전에 끝난다." }, { text: "생각하는 대로 살지 않으면 사는 대로 생각하게 된다." }, { text: "완벽함보다 완료함이 낫다." }, { text: "너 자신이 되어라. 다른 사람은 이미 다 차 있다." }, { text: "인생은 속도가 아니라 방향이다." }, { text: "작은 것에 감사할 줄 아는 사람이 부자다." }, { text: "행복은 목적지가 아니라 여행하는 과정이다." }, { text: "폭풍우를 피하는 게 아니라 빗속에서 춤추는 법을 배우는 것이다." }, { text: "오늘 하루, 당신은 충분히 잘해냈다." }, { text: "실패는 다시 시작할 수 있는 기회일 뿐이다." }, { text: "내면의 평화가 가장 큰 성공이다." } ] };
const quoteDataEn = { "life": quoteData["인생"] };

// 6. UI 및 처방
const i18n = {
    ko: { title: "운명 공학 분석소", desc: "성명과 생년월일 기반 정식 리포트", nameLabel: "성함 (한글/영문)", birthLabel: "생년월일 8자리", btn: "리포트 생성", resTitle: "분석 결과 리포트", tab1: "현생 분석", tab2: "전생 기록", tab3: "내세 예약", copy: "결과 저장 및 링크 복사", reset: "초기화", sec1: "1. 성명 분석 결과", sec2: "2. 주체 에너지 분석", sec3: "3. 에너지 보강 지침", sideEffect: "에너지 조정 부작용 주의", advise: "운명 조언", practice: "실천 행법", pastJob: "과거의 소명", pastHomework: "현생의 숙제", nextDest: "차기 정착지", nextObj: "재탄생 형태", nextMission: "확정 조건" },
    en: { title: "Destiny Engineering Lab", desc: "Official Report based on Name & Birth", nameLabel: "Full Name (EN)", birthLabel: "Birthdate (YYYYMMDD)", btn: "Generate Report", resTitle: "Your Destiny Report", tab1: "Life Path", tab2: "Past Life", tab3: "Future Life", copy: "Save Result & Copy Link", reset: "Start Over (Reset)", sec1: "1. Name Numerology", sec2: "2. Core Energy Analysis", sec3: "3. Power-Up Guide", sideEffect: "Side Effects", advise: "Advice", practice: "Mission", pastJob: "Past Identity", pastHomework: "Soul Goal", nextDest: "Destination", nextObj: "Born As", nextMission: "Requirement" }
};

const elementPrescriptions = {
    "木": { veryStrong: "기운이 너무 강해 독단적일 수 있습니다. '비움'의 명상이 필요합니다.", strong: "추진력이 좋습니다. 계획한 일을 끝까지 마무리하는 습관을 들이세요.", normal: "조화로운 기운입니다. 식물을 돌보며 현재의 리듬을 유지하십시오.", weak: "의욕은 있으나 뒷심이 부족합니다. 아침 산책으로 생기를 보충하십시오.", veryWeak: "생존 본능이 저하된 상태입니다. 신맛이 나는 음식이나 초록색 의상을 가까이하세요." },
    "火": { veryStrong: "감정 조절이 어렵고 번아웃이 오기 쉽습니다. 격렬한 운동으로 열기를 배출하세요.", strong: "열정이 넘칩니다. 그 에너지를 주변 사람들과 온기로 나누면 복이 옵니다.", normal: "밝고 긍정적입니다. 예의를 갖춘 태도가 당신의 운을 더욱 높여줍니다.", weak: "의욕이 저하되고 비관적일 수 있습니다. 낮에 햇볕을 20분 이상 쬐십시오.", veryWeak: "심신이 무기력합니다. 쓴맛이 나는 차를 마시고 붉은색 소품을 소지하세요." },
    "土": { veryStrong: "고집이 세지고 생각이 정체되기 쉽습니다. 환경을 바꿔 새로운 자극을 주십시오.", strong: "포용력이 훌륭합니다. 타인의 고민을 들어주는 역할이 운을 열어줍니다.", normal: "안정감이 돋보입니다. 꾸준한 독서로 내실을 다지면 큰 성과를 얻습니다.", weak: "마음이 불안하고 기반이 흔들립니다. 맨발로 흙을 밟아 대지의 기운을 받으세요.", veryWeak: "자신감이 바닥난 상태입니다. 달콤한 간식을 챙기고 산행을 추천합니다." },
    "金": { veryStrong: "판단이 너무 날카로워 주변에 상처를 줄 수 있습니다. 부드러운 음악을 감상하세요.", strong: "결단력이 날카롭습니다. 불필요한 인연과 물건을 정리하기에 좋은 시기입니다.", normal: "이성적이고 깔끔합니다. 규칙적인 생활이 당신의 가장 큰 무기입니다.", weak: "우유부단해지기 쉽습니다. 금속 액세서리를 착용하여 기운을 보강하십시오.", veryWeak: "맺고 끊음이 안 되어 손해를 봅니다. 매운 음식을 챙기고 흰색 옷을 입으세요." },
    "水": { veryStrong: "생각이 너무 많아 우울감에 빠질 수 있습니다. 땀이 날 정도로 몸을 움직이세요.", strong: "지혜가 샘솟습니다. 새로운 것을 배우거나 창작 활동을 하기에 최적의 상태입니다.", normal: "유연하고 여유롭습니다. 강물처럼 흐르는 대로 순리를 따르면 평안합니다.", weak: "융통성이 부족해지고 고립될 수 있습니다. 따뜻한 차를 마셔 순환을 도우십시오.", veryWeak: "정신적 에너지가 고갈되었습니다. 짠맛이 나는 음식과 검은색 계열이 길합니다." }
};
const enPrescriptions = { "木": { veryStrong: "Excessive energy. Practice letting go.", strong: "Great momentum!", normal: "Perfectly balanced.", weak: "Lacking drive.", veryWeak: "Vitality depleted." } }; // (생략 방지 위해 구조만 유지)
