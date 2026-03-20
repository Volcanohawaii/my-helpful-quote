/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

const i18n = {
    ko: {
        title: "수리성명학 데이터 분석", 
        desc: "고대 수리학의 81격 체계와 성명의 파동을 결합하여 당신의 선천적 운명을 정밀 연산합니다.",
        nameLabel: "성함(예: 강화산)", 
        birthLabel: "양력생일(예: 19901208)", 
        btn: "리포트 생성하기",
        loadSeal: "분석중", 
        loadTitle: "당신의 운명 에너지를 조합 중...",
        loadDesc: "잠시 기다려 주세요.",
        tab1Btn: "현생 분석", 
        tab2Btn: "전생 기록", 
        tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료", 
        sec2: "약점 보완 전략", 
        advise: "현생 조언", 
        practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", 
        tab3Title: "내세 분석 자료", 
        pastJob: "전생의 직업", 
        pastHomework: "전생의 과업", 
        nextDest: "다음 목적지", 
        nextObj: "다음 생명체", 
        nextMission: "내세 행복을 위한 수행"
    },
    en: {
        title: "Suri Seongmyeonghak Analysis", 
        desc: "Precisely calculates your innate destiny by combining the ancient 81-Numerology system with the vibrations of your name.",
        nameLabel: "Name", 
        birthLabel: "Birth (YYYYMMDD)", 
        btn: "Generate Report",
        loadSeal: "Analyzing", 
        loadTitle: "Combining energy...",
        loadDesc: "Please wait a moment.",
        tab1Btn: "Fortune", 
        tab2Btn: "Past Life", 
        tab3Btn: "Afterlife",
        sec1: "Energy Analysis", 
        sec2: "Reinforcement", 
        advise: "Advice", 
        practice: "Practice", 
        sideEffect: "Side Effects",
        tab2Title: "Past-Life Report", 
        tab3Title: "Afterlife Report", 
        pastJob: "Occupation", 
        pastHomework: "Homework", 
        nextDest: "Destination", 
        nextObj: "Next Life Being", 
        nextMission: "Mission"
    }
};

const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

/* [약점 보완 조언: 성명공학 정밀 처방전 - 12단계] */
const elementPrescriptions12 = {
    "木": [
        "뿌리가 뽑힌 나무의 형국입니다. 시작은 창대하나 결실이 없으니, 당장 목표를 하나로 좁히고 강제적인 실행력을 투입하십시오.",
        "생존력이 바닥난 상태입니다. 계획만 짜다 세월을 보낼 운명이니, 루틴을 군대처럼 고정하여 생각할 틈 없이 움직이십시오.",
        "성장의 동력이 꺼졌습니다. 주변에 휘둘려 당신만의 색깔이 사라졌으니, 매일 아침 태양 아래에서 스스로의 주권을 선포하십시오.",
        "성장이 멈춘 기형적인 상태입니다. 가지를 쳐내지 못해 에너지가 분산되니, 가장 소중한 것 3개 외에는 모두 쓰레기통에 버리십시오.",
        "위태로운 고목의 모습입니다. 겉은 화려하나 속이 비었으니, 확장을 멈추고 '완료의 기준'을 문장으로 정의하여 내실을 다지십시오.",
        "협업을 빙자한 의존이 심각합니다. 당신의 속도를 올리려면 남에게 맡기되, 반드시 당신이 직접 검수하는 체크포인트를 두십시오.",
        "숙련되지 않은 아마추어의 기운이 흐릅니다. 반복 작업을 자동화하지 않으면 리소스만 축내게 되니 시스템을 구축하십시오.",
        "마무리가 안 되는 만성적 질환이 있습니다. 사용자 관점에서 흐름을 정리하지 않으면 당신의 노력은 아무도 몰라주는 헛수고가 됩니다.",
        "정점에 올랐으나 내려갈 준비가 안 됐습니다. 성과를 표준화하지 않으면 당신이 부재할 때 모든 공든 탑이 무너집니다.",
        "불필요한 욕심이 눈을 가리고 있습니다. 핵심 가치 하나만 남기고 나머지는 덜어내십시오. 비워야 비로소 당신의 진가가 빛납니다.",
        "장기 로드맵이 없는 근시안적 태도가 문제입니다. 실행과 운영을 분리하십시오. 지금 당장의 이익보다 시스템의 영속성을 고민하십시오.",
        "완성을 넘어 궁극의 단계로 가야 합니다. 당신이 개입하지 않아도 스스로 굴러가는 생태계를 구축하십시오. 그것이 당신의 구원입니다."
    ],
    "火": [
        "열정이 식어버린 냉혈한 상태입니다. 추진력이 없어 기회를 놓치니, 붉은색 아이템을 지니고 심박수를 강제로 올리는 운동을 하십시오.",
        "기록이 없는 공허한 불꽃입니다. 메모하지 않으면 당신의 아이디어는 증발합니다. 기록을 단순한 습관이 아닌 생존 수단으로 삼으십시오.",
        "에너지가 무분별하게 발산되어 번아웃 직전입니다. 하루를 철저히 블록으로 나누어 에너지 소비를 통제하고 휴식을 명령으로 받아들이십시오.",
        "흥분 포인트는 많으나 집중 포인트가 없습니다. 에너지가 분산되어 아무것도 태우지 못하니, 대상 하나를 정해 전력을 다하십시오.",
        "근거 없는 자신감이 화를 부릅니다. 설득력은 좋으나 데이터가 부족하니, 모든 주장에 반드시 '숫자'와 '증거'를 결합하십시오.",
        "일정의 과부하로 스스로를 태워버릴 위기입니다. 무리한 일정은 독입니다. 번아웃이 오기 전에 의도적인 멈춤과 호흡을 고정하십시오.",
        "감정의 기복이 운명을 갉아먹고 있습니다. 감정 온도가 올라가면 즉시 언행을 중단하고 냉수욕이나 명상으로 열을 식혀야 삽니다.",
        "열정은 있으나 손에 잡히는 성과물이 없습니다. 끝까지 밀어붙이는 인내심이 부족하니, 반드시 '완성된 결과물'로 당신을 증명하십시오.",
        "주변을 다 태워버리는 독선적 리더십이 문제입니다. 톤을 한 단계 낮추십시오. 겸손하지 않으면 당신의 불길은 고립될 뿐입니다.",
        "말을 줄이고 오직 결과로 보여주십시오. 덜 말할수록 당신의 신뢰도는 수직 상승합니다. 침묵이 당신의 가장 강력한 연료입니다.",
        "영향력은 커졌으나 책임감이 비어 있습니다. 책임의 범위를 명확히 하십시오. 권한 뒤에 숨겨진 의무를 다할 때 운의 문이 열립니다.",
        "강한 불은 관리가 핵심입니다. 규칙 없는 불은 재앙입니다. 당신만의 철저한 철칙을 만드십시오. 통제된 불만이 세상을 바꿉니다."
    ],
    "土": [
        "디딜 땅이 없는 허공의 운명입니다. 기반이 흔들리니 아무리 쌓아도 무너집니다. 오늘 할 일 딱 하나만 완료해 지지대를 만드십시오.",
        "주변이 어지러워 운의 통로가 막혔습니다. 정리정돈이 안 된 공간은 당신의 정신을 갉아먹으니, 당장 물리적 공간부터 청소하십시오.",
        "관계의 경계선이 무너져 이용당하기 쉽습니다. 거절하지 못하면 당신의 인생은 남의 짐을 대신 지다 끝납니다. 선을 그으십시오.",
        "미루는 습관이 운명을 좀먹고 있습니다. 완벽주의라는 핑계 뒤에 숨지 마십시오. 마감 시간을 선포하고 무조건 80% 상태에서 끝내십시오.",
        "내 몫과 남의 몫을 구분하지 못해 과부하가 걸렸습니다. 책임을 분산하십시오. 모든 짐을 혼자 지려는 오만이 당신을 파괴합니다.",
        "과도한 부담이 성장을 가로막고 있습니다. 당신의 리소스를 배분하십시오. 혼자 독점하려다가는 모든 기반이 함께 무너질 수 있습니다.",
        "기초 체력과 수면이 엉망입니다. 몸의 지지대가 무너지면 운도 무너집니다. 식사와 수면 시간을 기계적으로 고정하여 삶을 지탱하십시오.",
        "변화가 두려워 썩어가는 고인물 상태입니다. 안정은 강점이나 정체는 독입니다. 아주 작은 단위부터 변화를 시도하여 흐름을 만드십시오.",
        "조용히 끌고 가는 힘은 좋으나 소통이 부족합니다. 당신의 의도를 명확히 문서화하십시오. 침묵은 오해를 낳고 기반을 약화시킵니다.",
        "완벽한 안전은 환상입니다. 실패가 두려워 실험을 멈추지 마십시오. 흙은 섞여야 비옥해집니다. 새로운 자극과 사람을 허용하십시오.",
        "자금과 시간 관리가 안 되어 기반이 새고 있습니다. 자원을 철저히 계산하십시오. 새어나가는 구멍을 막지 않으면 미래는 없습니다.",
        "큰 대지는 흐름이 필요합니다. 정체된 에너지를 풀어주십시오. 고집을 버리고 유연함을 받아들일 때 비로소 대지의 운명이 완성됩니다."
    ],
    "金": [
        "칼날이 무뎌진 식칼의 형국입니다. 결단력이 마모되어 이도 저도 아닌 삶을 삽니다. 기준을 단 하나만 정하고 칼같이 지키십시오.",
        "선택지가 너무 많아 결정 장애에 빠졌습니다. 결정을 미루는 것은 실패보다 나쁩니다. 선택지를 반으로 줄이고 즉시 결단하십시오.",
        "말이 길어질수록 당신의 권위는 추락합니다. 근거는 명확하게, 말은 짧게 하십시오. 언어에 금속의 날카로운 무게감을 실어야 합니다.",
        "정리되지 않은 삶은 날 선 칼을 휘두르는 것과 같습니다. 정산과 정리를 습관화하십시오. 루틴이 당신의 운명을 보호하는 갑옷입니다.",
        "비판만 하고 대안이 없는 태도가 문제입니다. 개선안을 반드시 함께 제시하십시오. 날카로움이 건설적으로 쓰일 때 신뢰를 얻습니다.",
        "규칙이 너무 많아 스스로를 옥죄고 있습니다. 핵심 규칙 3개만 남기고 나머지는 파괴하십시오. 유연하지 못한 금은 부러지기 마련입니다.",
        "날 선 언행으로 주변을 다 베어버리고 있습니다. 분노가 치밀면 한 박자 쉬고 말하십시오. 당신의 칼날을 안으로 감추는 법을 배우십시오.",
        "완성도는 좋으나 마무리가 늘 늦습니다. 마감력은 금(金)의 생명입니다. 완벽보다 완결이 우선임을 명심하고 제시간에 끝내십시오.",
        "원칙에 매몰되어 상황 파악을 못 하고 있습니다. 유연함이 없는 원칙은 폭력입니다. 상황에 따른 적용법을 배워야 대인이 됩니다.",
        "상대의 감정을 데이터로만 취급하는 냉혈함이 문제입니다. 공감 없는 논리는 고립을 부릅니다. 따뜻한 가슴을 회복하지 않으면 무너집니다.",
        "기준은 유지하되 유연성을 10%만 추가하십시오. 너무 팽팽한 활시위는 끊어집니다. 당신의 엄격함에 인간적인 여백을 두어야 합니다.",
        "최고의 명검은 공정함과 따뜻함의 균형에서 나옵니다. 차가운 이성에 뜨거운 열정을 더하십시오. 그때 비로소 세상을 베는 명검이 됩니다."
    ],
    "水": [
        "생각의 늪에 빠져 허우적거리는 형국입니다. 실행 없는 고민은 정신적 자살입니다. 당장 생각을 멈추고 5분만 기계적으로 움직이십시오.",
        "정보 과부하로 불안이 영혼을 잠식했습니다. 모든 입력을 차단하고 내면의 소리에만 집중하십시오. 단순해져야 불안이 사라집니다.",
        "깊이는 있으나 결론이 없습니다. 아무리 깊게 파도 물을 길어 올리지 못하면 무용지물입니다. 당신의 결론을 반드시 서면으로 남기십시오.",
        "회피와 미룸으로 기회가 썩어가고 있습니다. 임시 결론이라도 좋으니 마디를 지어 흐름을 만드십시오. 멈춘 물은 반드시 오염됩니다.",
        "통찰을 말로만 떠들고 구조화하지 못합니다. 당신 머릿속의 지도를 문서로 그리십시오. 구조화되지 않은 통찰은 망상에 불과합니다.",
        "멀티태스킹으로 에너지가 고갈되었습니다. 한 번에 딱 하나씩만 처리하십시오. 에너지가 분산되면 당신의 바다는 결국 마르게 됩니다.",
        "과몰입으로 일상적 감각이 마비되었습니다. 신호가 오면 즉시 산책이나 수면으로 뇌를 리셋하십시오. 멈춰야 비로소 더 멀리 보입니다.",
        "완성도는 마감에서 결정됩니다. 마감 시간 없는 작업은 영원히 끝나지 않습니다. 스스로에게 엄격한 마감 기한을 부여하고 지키십시오.",
        "영향력은 있으나 소극적인 태도가 문제입니다. 조용한 목소리라도 명확하게 뜻을 전달하십시오. 흐름을 타야 영향력이 커집니다.",
        "감정의 바닥으로 내려가기 전에 루틴을 방패로 삼으십시오. 우울함이 몰려오면 기계적으로 움직여야 합니다. 그것만이 생존법입니다.",
        "지혜를 독점하지 말고 적극적으로 나누십시오. 고인 지혜는 독이 됩니다. 공유를 통해 당신의 운명을 사회적으로 순환시키십시오.",
        "물의 힘은 유연한 흐름에서 나옵니다. 집착을 내려놓을수록 당신은 강해집니다. 움켜쥐려 하지 말고 흘려보낼 때 바다를 얻습니다."
    ]
};

/* [영어판: Destiny Engineering Analysis - 12 Tiers] */
const enPrescriptions12 = {
    "木": [
        "Like a rootless tree, you start grandly but yield no fruit. Narrow your focus to a single goal and deploy forced execution immediately.",
        "Survival instincts are depleted. You'll spend life planning but never doing. Fix your routine like a soldier and move without thinking.",
        "Growth engine has stalled. You've lost your color by following others. Declare your sovereignty every morning under the sun.",
        "Abnormal growth pattern detected. Energy is scattered. Throw everything away except your top 3 priorities to regain focus.",
        "You are a hollow old tree. Fancy outside, empty inside. Stop expanding and define your 'Standards of Completion' in writing.",
        "Dependency disguised as cooperation. To gain speed, outsource but maintain a strict checkpoint that you personally inspect.",
        "Flowing with amateur energy. Without automating repetitive tasks, you are wasting resources. Build a system, not just effort.",
        "Chronic inability to finish. If you don't organize the flow from the user's view, your hard work remains invisible and futile.",
        "Reached the peak but unprepared for the descent. Standardize your results, or everything will collapse the moment you are absent.",
        "Excessive greed is blinding you. Strip away everything except one core value. Only by emptying can your true worth shine.",
        "Short-sightedness is the issue. Separate execution from operation. Think about the longevity of the system over immediate gain.",
        "Move beyond completion to the ultimate stage. Build an ecosystem that runs without you. This is your true salvation."
    ],
    "火": [
        "Cold-blooded with no inner passion. Missing opportunities due to lack of drive. Carry red items and force your heart rate up with exercise.",
        "An empty flame without records. Your ideas evaporate without documentation. Treat writing as a survival tool, not just a habit.",
        "Energy is firing blindly toward burnout. Divide your day into strict blocks to control consumption. Rest is a command.",
        "High excitement but zero focus. Scattered energy heats nothing. Choose one target and commit your entire force to it.",
        "Groundless confidence leads to disaster. Your persuasion is good but lacks data. Attach 'Numbers' and 'Evidence' to every claim.",
        "On the verge of self-combustion due to overload. Impossible schedules are poison. Fix intentional pauses before you burn out.",
        "Emotional swings are eating your destiny. If your temperature rises, stop all actions immediately and cool down with meditation.",
        "Passion exists but no tangible output. Lack of grit to finish. Prove your worth only through 'Finished Results'.",
        "Dictatorial leadership burning everyone around you. Lower your tone. Without humility, your flame will only be isolated.",
        "Speak less, show results more. Your credibility rises with your silence. Silence is your most powerful fuel.",
        "Influence has grown, but responsibility is empty. Define your scope of duty. Luck opens when you fulfill your hidden obligations.",
        "Strong fire requires management. Fire without rules is a catastrophe. Create your iron rules. Controlled fire changes the world."
    ],
    "土": [
        "A destiny floating in mid-air with no ground. Without a foundation, all builds will collapse. Finish one task today to create a support.",
        "Luck is blocked by messy surroundings. A cluttered space eats your spirit. Clean your physical environment immediately.",
        "Boundary lines have collapsed; you are being used. If you can't say no, your life ends carrying others' burdens. Draw the line.",
        "Procrastination is rotting your destiny. Do not hide behind perfectionism. Set a deadline and finish at 80% no matter what.",
        "Overloaded because you can't delegate. Distribute the weight. The arrogance of trying to carry everything alone will destroy you.",
        "Excessive burden is stopping growth. Distribute your resources. Trying to monopolize everything will lead to total collapse.",
        "Basic health and sleep are in shambles. If the body breaks, luck breaks. Fix your meals and sleep mechanically to support life.",
        "Stagnant water rotting from fear of change. Stability is a strength, but stagnation is poison. Create flow with tiny changes.",
        "Strong quiet power, but zero communication. Document your intent clearly. Silence breeds misunderstanding and weakens your base.",
        "Perfect safety is an illusion. Do not stop experimenting for fear of failure. Soil needs mixing to be fertile. Allow new stimuli.",
        "Your foundation is leaking due to poor time and money management. Calculate resources strictly. Without fixing leaks, there is no future.",
        "Great Earth needs flow. Release your stagnant energy. Give up stubbornness and accept flexibility to complete your destiny."
    ],
    "金": [
        "A kitchen knife with a dull blade. Your decisiveness is worn out. Set ONE standard and stick to it at all costs.",
        "Paralyzed by too many options. Indecision is worse than failure. Cut your choices in half and decide instantly.",
        "Authority drops as your words get longer. Be clear and brief. Put the sharp weight of metal into your language.",
        "An unorganized life is like swinging a sharp blade randomly. Habitualize sorting and accounting. Routine is your armor.",
        "Cowardly attitude—criticizing without offering alternatives. Provide solutions. Sharpness only gains trust when used constructively.",
        "Strangling yourself with too many rules. Keep only the 3 core rules and destroy the rest. Inflexible metal eventually snaps.",
        "Cutting everyone down with sharp words. If anger rises, wait a beat before speaking. Hide your blade inside.",
        "High quality but too slow. Speed of completion is the life of Metal. Finish is better than perfect. Practice finishing on time.",
        "Buried in principles, failing to read the room. Principles without flexibility are violence. Learn to adapt to become a true leader.",
        "Cold-blooded, treating others' emotions as mere data. Logic without empathy drives people away. Restore your heart or you will collapse.",
        "Keep your standards but add 10% flexibility. A bowstring pulled too tight will snap. Leave some space in your rigidity.",
        "The best Metal is a balance of justice and warmth. Add passion to your cold logic. Only then will you become a legendary sword."
    ],
    "水": [
        "Drowning in a swamp of thoughts. Worry without action is mental suicide. Stop thinking and move mechanically for 5 minutes.",
        "Anxiety has consumed your soul due to information overload. Block all inputs and listen to your inner voice. Simplify to survive.",
        "Deep but concludes nothing. No matter how deep you dig, it's useless if you can't draw water. Write down your final conclusion.",
        "Opportunities are rotting due to avoidance. Set even a temporary conclusion to create flow. Stagnant water spoils.",
        "Talking about insights without structuring them. Map your mind onto a document. Unstructured insight is just a delusion.",
        "Emotional energy depleted by multitasking. Do only ONE thing at a time. If energy scatters, your ocean will dry up.",
        "Daily senses paralyzed by hyper-fixation. When the signal hits, walk or sleep to reset. You must stop to see further.",
        "Perfection is decided at the deadline. Work without a deadline never ends. Impose strict time limits on yourself.",
        "Influence exists but is blocked by passivity. Even in a quiet voice, deliver your message clearly. Flow increases your power.",
        "Use routine as a shield before you hit the emotional floor. When depression hits, move mechanically. It is the only way.",
        "Do not monopolize wisdom; share it. Hoarded wisdom becomes poison. Circulate your destiny through sharing.",
        "The power of Water is flow. You grow stronger as you let go of obsession. Do not grasp; let it flow. The ocean accepts everything."
    ]
};

/* [부작용: 성명공학적 에너지 간섭 현상] */
const sideEffects = [
    "완벽한 타이밍을 기다리다 기회를 놓치는 '만성적 신중함' 주의",
    "집중력이 최고조일 때 자신도 모르게 턱을 괴는 비대칭 습관",
    "운명 데이터 동기화 지연으로 인한 월요일 오전의 일시적 무기력",
    "인지 과부하로 인해 핸드폰을 손에 들고 핸드폰을 찾는 현상",
    "칭찬을 들으면 갑자기 고장 난 인공지능처럼 행동이 어색해짐",
    "결정적인 순간에만 발동하는 근거 없는 근 자신감과 뒤늦은 이불킥",
    "새벽 2시, 갑자기 인생의 진리를 깨달은 것 같은 근거 없는 명석함",
    "에너지 과몰입으로 인한 신상 과자 및 디저트 무한 흡입 현상",
    "중요한 발표 직전, 갑자기 주변의 모든 소음이 입체적으로 들림",
    "대화 중 상대의 말실수를 데이터 오류처럼 정정하고 싶은 강박",
    "잘 모르는 길에서 지도 앱을 보며 반대 방향으로 당당히 걷기",
    "카페 진동벨을 귀에 대고 전화를 받으려는 인지적 오류",
    "자기 전 오늘 했던 대화를 복기하며 시나리오를 수정하는 습관",
    "이어폰을 끼고 노래를 틀지 않은 채 30분간 명상에 빠짐",
    "중요한 메일을 보낸 후 1초 만에 오타를 발견하는 예리한 사후 통찰",
    "에너지 방전 시 고양이 사진이나 영상에 과도하게 집착함",
    "냉장고 문을 열고 내가 왜 열었는지 3초간 데이터 로딩 현상",
    "사람이 많은 곳에서 갑자기 내적 댄스가 폭발하려는 충동",
    "안경을 머리에 쓰고 안경이 없어졌다며 주변을 초토화함",
    "약속 장소에 도착하자마자 집에 가고 싶어지는 '에너지 회귀' 본능",
    "평소엔 멀쩡하다가 좋아하는 사람 앞에서만 언어 회로가 꼬임",
    "배달 앱 메뉴를 1시간 동안 분석하다 결국 어제 먹은 것 주문",
    "비가 오지 않는데도 우산을 챙겨 나가는 과도한 방어 기제",
    "모든 물건의 위치가 직각이어야 마음이 편안해지는 수평 강박",
    "한번 꽂힌 노래 한 곡을 데이터가 마모될 때까지 무한 반복 재생",
    "새벽에 갑자기 방 구조를 바꾸며 '새로운 인생'을 설계하려는 의지",
    "길 가다 마주친 강아지와 눈싸움을 하며 교감을 시도함",
    "쇼핑 카트에 물건을 가득 담고 결제 직전 심리적 만족감만 얻고 퇴장",
    "남들은 신경 안 쓰는 사소한 디테일에 꽂혀 밤을 지새움",
    "에너지 과부하로 인해 모든 문장의 끝에 '아마도'를 붙이는 불확실성"
];

/* [Afterlife Analysis Report - Side Effects English] */
const sideEffectsEn = [
    "Chronic deliberation that misses the bus while waiting for the 'perfect' stop.",
    "Asymmetrical jaw-resting habit during peak cognitive synchronization.",
    "Temporary Monday morning lethargy caused by destiny data sync latency.",
    "Cognitive overload resulting in searching for your phone while holding it.",
    "Freezing like a glitched AI when receiving unexpected compliments.",
    "Spontaneous bursts of groundless confidence followed by late-night regrets.",
    "Illusory enlightenment regarding the truth of life at 2 AM.",
    "Infinite craving for new snacks and desserts due to energy overconsumption.",
    "Auditory hyper-sensitivity to background noise right before crucial moments.",
    "Compulsive urge to correct others' typos as if they were data errors.",
    "Confidently walking in the exact opposite direction while looking at a map.",
    "Attempting to answer a phone call using a cafe vibrating pager.",
    "Post-social scenario editing: Replaying today's conversations in bed.",
    "Accidental 30-minute meditation while wearing headphones with no music.",
    "Post-send enlightenment: Spotting a typo 1 second after hitting 'Send'.",
    "Excessive obsession with cat videos when internal energy is depleted.",
    "3-second data loading lag after opening the refrigerator door.",
    "Sudden urge to perform an internal dance routine in crowded places.",
    "Searching the entire house for glasses that are already on your head.",
    "The 'Energy Regression' instinct: Wanting to go home the moment you arrive.",
    "Language circuit failure occurring exclusively in front of your crush.",
    "Analyzing a delivery menu for an hour only to order the usual.",
    "Hyper-defensive mechanism: Carrying an umbrella on a perfectly sunny day.",
    "Horizontal obsession: Needing every object to be aligned at right angles.",
    "Infinite loop: Playing a single song until the digital data wears out.",
    "Sudden 3 AM urge to rearrange furniture for a 'new life' layout.",
    "Attempting deep spiritual communication via staring contests with dogs.",
    "Adding items to a cart only to gain psychological satisfaction without buying.",
    "Hyper-fixation on minor details that no one else even notices.",
    "Linguistic uncertainty: Adding 'maybe' to the end of every sentence."
];
/* [Destiny Engineering - Name DNA: Numerology-based Syllables] */

// 한국어 이름 접두사: 깊이와 울림이 있는 고전적 음절 (Prestige Syllables)
const syllableKo1 = [
    "휘", "린", "겸", "담", "온", "율", "가", "서", "도", "해", 
    "준", "채", "윤", "설", "예", "태", "희", "진", "현", "명",
    "하", "연", "지", "민", "선", "우", "람", "솔", "별", "안"
];

// 한국어 이름 접미사: 조화와 마무리를 상징하는 음절 (Harmonizing Syllables)
const syllableKo2 = [
    "우", "재", "준", "솔", "아", "늘", "담", "린", "온", "율",
    "호", "민", "성", "윤", "하", "연", "빈", "경", "석", "찬",
    "진", "수", "현", "주", "의", "겸", "로", "엘", "안", "비"
];

// 영어 이름 어근: 영적 에너지와 원소를 상징하는 고어/라틴 어근 (Ethereal Roots)
const nameRootEn = [
    "Aether", "Lumen", "Vesper", "Caelum", "Eon", "Zion", "Kyros", "Nova", "Astra", "Solis",
    "Terra", "Aqua", "Ignis", "Ventus", "Physis", "Ethos", "Pathos", "Logos", "Chronos", "Gaia",
    "Riven", "Lumi", "Seren", "Orin", "Kalen", "Lyra", "Mira", "Elian", "Sola", "Aura"
];

// 영어 이름 접미사: 이름의 격을 완성하는 신화적 어미 (Mythic Tails)
const nameTailEn = [
    "is", "os", "ium", "on", "eth", "iel", "eus", "ara", "ia", "us",
    "as", "er", "en", "el", "yn", "ar", "ir", "ae", "is", "ax"
];

/* [Destiny Engineering - Elemental Epithets: High-Resolution Expansion] */

const epithetKoByElement = { 
    "木": ["푸른", "수림의", "새벽의", "새순의", "청룡의", "개척의", "상승하는", "뿌리 깊은", "창공의", "활기찬"], 
    "火": ["태양의", "홍련의", "불꽃의", "찬란한", "열망의", "적호의", "광휘의", "용솟음치는", "심장의", "불멸의"], 
    "土": ["대지의", "황금의", "기반의", "태산의", "성채의", "중심의", "포용하는", "흔들림 없는", "풍요로운", "영겁의"], 
    "金": ["은빛의", "서리발", "백금의", "철율의", "서약의", "검의", "고결한", "날카로운", "단단한", "정의로운"], 
    "水": ["물결의", "심해의", "안개의", "지혜의", "북해의", "거울의", "유연한", "끝없는", "고요한", "영묘한"] 
};

const epithetEnByElement = { 
    "木": ["Verdant", "Forest-born", "Dawn", "Sprouting", "Azure", "Pathfinding", "Rising", "Deep-rooted", "Celestial", "Vibrant"], 
    "火": ["Solar", "Crimson", "Ember", "Radiant", "Passionate", "Blazing", "Luminous", "Surging", "Heart-bound", "Immortal"], 
    "土": ["Earthforged", "Golden", "Rooted", "Citadel", "Foundational", "Central", "Embracing", "Steadfast", "Prosperous", "Eternal"], 
    "金": ["Silver-edged", "Frost-clad", "Platinum", "Iron-willed", "Sacred", "Steel-forged", "Noble", "Sharp-eyed", "Solid", "Righteous"], 
    "水": ["Tideborn", "Abyssal", "Mistveiled", "Wise", "Deep-sea", "Mirror-souled", "Fluid", "Boundless", "Serene", "Mystical"] 
};

const detailedDesc81 = {
    1: "태초의 빛이 만물을 깨우는 형상입니다. 독립심과 개척 정신이 강하며 스스로 길을 열어 대업을 성취합니다.",
    2: "뿌리가 흔들리는 고립의 기운입니다. 재능은 있으나 주변과의 조화가 깨지기 쉬우니 내실을 다져야 합니다.",
    3: "새순이 돋아 하늘로 뻗어가는 생명력의 정점입니다. 지혜와 명예가 따르며 입신양명의 기운이 강합니다.",
    4: "거친 파도가 앞길을 가로막는 흐름입니다. 파괴와 창조가 공존하니 성급한 확장보다는 기초가 우선입니다.",
    5: "만물이 조화롭게 무르익어 복이 들어오는 형국입니다. 인덕과 재복이 함께하며 성공이 따르는 길수입니다.",
    6: "조상의 덕이 흐르고 대를 이어 번영하는 파동입니다. 책임감이 강하며 신뢰를 바탕으로 안정을 누립니다.",
    7: "강철 같은 의지와 면밀함으로 목표를 관철합니다. 독립심이 강해 자수성가하며 전문가의 위치에 오릅니다.",
    8: "흙 속의 황금을 찾아내어 빛을 발하는 명식입니다. 꾸준한 노력 끝에 재물을 모으고 지키는 힘이 탁월합니다.",
    9: "능력은 천재적이나 운명의 부침이 심한 기운입니다. 고독한 탐구자의 길을 걷기 쉬우니 평정심이 숙제입니다.",
    10: "재주는 비상하나 안개가 자욱해 방향을 잃기 쉽습니다. 공허함을 경계하고 명확한 목표를 세워야 합니다.",
    11: "메마른 땅에 비가 내려 새 생명이 움트듯, 가문을 부흥시키고 새로운 가치를 창출하는 개척자의 운명입니다.",
    12: "홀로 거친 세상에 서야 하는 고립의 흐름입니다. 내면의 힘을 기르고 유연함을 배워야 성장을 완성합니다.",
    13: "하늘이 내린 총명함과 지혜가 머무는 자리입니다. 어떤 문제든 명쾌한 해답을 찾아내며 귀감이 됩니다.",
    14: "에너지가 분산되어 안정이 필요한 파동입니다. 마음의 중심을 잡고 환경을 정돈하는 것이 최우선 과제입니다.",
    15: "복과 인덕이 함께하니 전체를 조망하고 이끄는 리더의 기운입니다. 부귀와 명예가 따르는 상서로운 수입니다.",
    16: "덕망으로 사람의 마음을 얻어 대업을 완수합니다. 많은 이들의 신뢰를 얻어 명예로운 자리에 오를 명식입니다.",
    17: "강직한 의지와 날카로운 논리로 진리를 탐구합니다. 전문성이 독보적이나 부드러움을 더해야 완벽해집니다.",
    18: "굳건한 추진력으로 현실적인 결실을 맺습니다. 역경을 기회로 바꾸며 반드시 성과를 증명해내는 운명입니다.",
    19: "재능은 비상하나 고독의 기운이 흐르는 영혼입니다. 현실과의 조화를 찾고 지혜를 나누는 것이 삶의 열쇠입니다.",
    20: "이상은 높으나 기반이 약해 중도 좌절하기 쉬운 형국입니다. 내실을 다지고 성급함을 경계해야 번영합니다.",
    21: "우뚝 솟은 산처럼 흔들림 없는 두령의 기운입니다. 독립심과 권위가 따르며 조직의 핵심을 담당할 운명입니다.",
    22: "재주는 많으나 관계가 불안정해 이용당하기 쉬운 흐름입니다. 중심을 잡고 거절의 선을 지키는 법을 익히십시오.",
    23: "태양 같은 열정으로 자신의 아이디어를 세상에 발산합니다. 끊임없는 변화를 통해 명성과 성장을 얻게 됩니다.",
    24: "성실한 축적과 철저한 관리로 황금빛 결실을 맺습니다. 물질적 풍요와 지속적인 안정력을 동시에 갖춥니다.",
    25: "비상한 재치와 유연함으로 혼돈 속에서 질서를 찾습니다. 많은 이들을 올바른 방향으로 이끄는 중추적 사명입니다.",
    26: "영웅적 기질을 가졌으나 파란이 많은 담금질의 형국입니다. 시련을 이겨낼 때 비로소 진가가 드러나는 명식입니다.",
    27: "예리한 통찰력이 있으나 고립으로 인해 중단되기 쉬운 흐름입니다. 따뜻한 마음을 회복해야 운이 열립니다.",
    28: "거친 바다를 항해하는 선장처럼 파란곡절이 많습니다. 집착을 버리고 흐름을 타야 큰 성과를 거둡니다.",
    29: "지혜와 완성도를 통해 세상의 신망을 얻는 원숙한 운명입니다. 전환의 시기를 슬기롭게 넘겨 도약합니다.",
    30: "길흉이 교차하여 부침이 심한 형국입니다. 다시 일어서는 개척의 에너지는 좋으나 내실을 더 기해야 합니다.",
    31: "관계의 에너지를 통해 무에서 유를 창조합니다. 협력을 바탕으로 혼자보다 거대한 결실을 맺는 명식입니다.",
    32: "순풍에 돛을 단 듯 예기치 못한 기회가 찾아옵니다. 유연한 소통을 통해 운명의 크기를 무한히 확장합니다.",
    33: "제왕의 위엄과 강력한 리더십을 지녔습니다. 화려함 뒤의 책임을 다할 때 비로소 대업이 완성됩니다.",
    34: "폭풍이 닥쳐 기반이 흔들리는 고난의 형국입니다. 기초 체력을 기르고 내실을 다져 삶을 지탱해야 합니다.",
    35: "대지처럼 포용력이 넓고 평온한 운명입니다. 조직의 안정적인 중심축 역할을 하며 평화를 유지합니다.",
    36: "덕으로 사람의 마음을 얻어 명예를 지키는 에너지입니다. 헌신을 통해 사회적 신뢰와 높은 보상을 얻습니다.",
    37: "이면을 꿰뚫는 통찰과 장인 정신으로 전문성을 인정받습니다. 고결한 독립성을 유지하며 지식을 쌓습니다.",
    38: "강력한 추진력으로 이상을 현실로 만듭니다. 구체적인 결과물로 본인의 가치를 증명해내는 성취의 운명입니다.",
    39: "원을 완벽히 닫고 다음 차원으로 도약하는 지혜입니다. 부귀와 영광을 누리며 타의 귀감이 되는 명식입니다.",
    40: "개척의 기운이 있으나 성급함으로 인해 요동칩니다. 평정심을 유지하고 기반을 다져야 번영을 유지합니다.",
    41: "조직을 대업으로 이끄는 강력한 통솔력의 파동입니다. 협력을 통해 거대한 성과를 현실화하는 운명입니다.",
    42: "아이디어는 화려하나 시련이 많은 담금질의 시기입니다. 변화를 두려워하지 말고 성장의 발판으로 삼으십시오.",
    43: "겉은 화려하나 속이 비기 쉬운 외화내빈의 명식입니다. 기초를 단단히 다지고 실속을 챙기는 지혜가 필요합니다.",
    44: "리더십은 있으나 방향을 잃고 헤매는 마장의 기운입니다. 통찰력을 길러 혼돈 속에서 질서를 찾아야 합니다.",
    45: "책임감과 조상의 덕이 결합되어 전체를 통합합니다. 이타적인 헌신으로 높은 명예와 신뢰를 얻게 됩니다.",
    46: "통찰력은 있으나 방황으로 인해 독립성을 잃기 쉽습니다. 중심을 잡고 유연함을 회복해야 운이 풀립니다.",
    47: "인내 끝에 결실을 맺어 생의 참된 의미를 깨닫는 운명입니다. 구체적인 성과로 가치를 증명하는 명식입니다.",
    48: "만물을 통합하는 리더십으로 타인을 이끄는 중추적 사명을 지녔습니다. 지혜로운 조언자로 존경받는 운명입니다.",
    49: "변화가 극심하여 길흉이 상반되는 흐름입니다. 환경 변화에 민감하게 대응하며 내실을 다지는 것이 생존법입니다.",
    50: "협력의 파동은 좋으나 성패가 교차하여 불안정합니다. 평정심을 유지하고 기반을 튼튼히 해야 무너지지 않습니다.",
    51: "성장의 기운은 넘치나 인생의 사계를 모두 경험하는 형국입니다. 역경을 통해 대기만성형으로 성장합니다.",
    52: "견고한 내실과 기회 포착 능력이 결합된 강한 운입니다. 철저한 자기관리로 대업을 성취하는 지지대를 갖습니다.",
    53: "겉은 번듯하나 실속이 부족해 성패가 교차합니다. 외양보다는 내실을 중시해야 중심을 잡을 수 있습니다.",
    54: "책임감은 강하나 기반이 무너져 계획이 틀어지기 쉽습니다. 기초부터 다시 점검하고 신의를 지키십시오.",
    55: "통찰은 예리하나 겉치레에 치중해 실속이 없는 명식입니다. 따뜻한 가슴과 유연함을 길러야 사람을 얻습니다.",
    56: "성과를 내는 힘은 좋으나 결정적인 순간에 주저하기 쉽습니다. 추진력과 현실 감각을 조화시켜 마침표를 찍으십시오.",
    57: "시련을 극복하고 새로운 질서를 세우는 개척의 파동입니다. 고난 끝에 귀감이 되는 성취를 이루는 명식입니다.",
    58: "성실히 축적하여 중년 이후 자수성가하는 안정된 운입니다. 인내의 시간 끝에 거대한 결실을 맺게 됩니다.",
    59: "변화의 기운은 강하나 의지가 약해 방향을 잃기 쉽습니다. 루틴을 고정하고 명확한 목표에 집중해야 합니다.",
    60: "내실은 있으나 상하 관계의 불안으로 흔들리는 형국입니다. 기반을 단단히 하고 자기관리에 집중하십시오.",
    61: "지혜가 충만하여 조직의 핵심 축 역할을 수행합니다. 혼돈 속에서도 길을 찾아내는 현명한 지도자의 운명입니다.",
    62: "책임감은 깊으나 내우외환으로 쇠퇴하기 쉬운 흐름입니다. 유연함을 기르고 이타적인 태도로 위기를 넘기십시오.",
    63: "예리한 통찰과 꾸준한 성과가 만나 부귀영화를 누립니다. 인내 끝에 최고의 결실을 보는 원만한 명식입니다.",
    64: "지혜는 있으나 변화무쌍한 운명으로 인해 정체되기 쉽습니다. 슬기롭게 정리하고 도약의 발판을 마련하십시오.",
    65: "창조의 파동이 완성과 만나 만물이 평온해지는 운명입니다. 안정 속에서 자신의 가치를 널리 알리는 명식입니다.",
    66: "협력의 기운은 좋으나 예기치 못한 실수로 망신을 살 수 있습니다. 중심을 잡고 거절의 선을 분명히 하십시오.",
    67: "화려한 표현력을 바탕으로 대업을 완수하고 태평성대를 누립니다. 역경을 딛고 영혼의 고저를 높이는 운명입니다.",
    68: "견고한 내실과 탁월한 지모가 결합된 창업자의 명식입니다. 흔들리지 않는 지지대를 구축해 성공을 유지합니다.",
    69: "리더십은 있으나 기반이 약해 정체되기 쉬운 기운입니다. 기초 체력을 보강하고 통찰력을 길러 위기를 대비하십시오.",
    70: "신의는 깊으나 공허함이 서려 계획이 무너지기 쉽습니다. 헌신적인 태도로 명예를 얻어야 삶이 풀립니다.",
    71: "통찰력과 흔들리지 않는 내실이 결합된 완벽한 명식입니다. 전문성을 바탕으로 안정적인 부와 명예를 누립니다.",
    72: "추진력은 좋으나 성패의 기복이 심한 형국입니다. 현실 감각을 잃지 말고 리스크를 관리하는 지혜가 필요합니다.",
    73: "지혜롭게 마무리를 짓고 새로운 질서를 세우는 개척의 운명입니다. 스스로의 힘으로 높은 가치를 증명해냅니다.",
    74: "시작의 에너지는 좋으나 만사가 불우한 마장의 흐름입니다. 역경 속에서 스스로 길을 찾는 인내력이 생존법입니다.",
    75: "균형의 파동을 통해 완벽한 안정을 창출하는 통솔의 기운입니다. 협력을 통해 거대한 결실을 손에 거머쥡니다.",
    76: "표현력은 좋으나 내우외환으로 이산하기 쉬운 영혼입니다. 중심을 잡고 성장을 완성하는 데 집중하십시오.",
    77: "내실은 있으나 성패가 교차하여 운명이 요동칩니다. 기초를 단단히 하고 지지대를 보강해야 무너지지 않습니다. ",
    78: "조직을 이끄는 힘은 좋으나 선길후흉의 기운이 있습니다. 통찰력과 중심을 잃지 않아야 번영을 유지합니다.",
    79: "신의는 있으나 안개 속에서 헤매는 정체불명의 운입니다. 유연함을 기르고 명확한 목표를 세워야 명예를 얻습니다.",
    80: "통찰력은 깊으나 종말의 기운으로 은둔하기 쉬운 명식입니다. 유연함을 회복하고 세상과의 접점을 유지하십시오.",
    81: "궁극의 지혜와 환희가 만나 복덕원만한 완성의 명식입니다. 부귀를 누리며 타의 귀감이 되는 최고의 운명입니다."
};

const detailedDesc81En = {
    1: "Primordial light awakening existence. A strong pioneer spirit that creates paths where none exist, achieving great success.",
    2: "Shaky roots and isolation. Talent exists, but internal harmony is crucial to prevent scattering of energy.",
    3: "Vitality reaching for the sky. Wisdom and fame accompany your name, leading to high recognition and honor.",
    4: "Rough waves blocking the path. Destruction and creation coexist; focus on foundations before expansion.",
    5: "Perfect ripeness where blessings overflow. Abundant luck and virtue lead to a life of shared success.",
    6: "Inherited virtue and lasting prosperity. A strong sense of duty makes you a trusted pillar of any group.",
    7: "Iron-willed strategy achieving goals with precision. Born to be self-made, reaching the peak of expertise.",
    8: "Finding gold hidden in the earth. Exceptional power to accumulate and protect wealth through steady effort.",
    9: "Brilliant but turbulent energy. A lonely seeker's path; maintaining inner peace is your life's homework.",
    10: "Extraordinary wit clouded by mist. Avoid emptiness by setting crystal-clear goals to find your path.",
    11: "New creation igniting parched land. A pioneer resurrected to find original value and lead a revival.",
    12: "Standing alone against rough waves. Cultivate inner strength and accept fluidity to complete your growth.",
    13: "Divine wisdom and brilliance. A radiant mind finding perfect solutions and serving as a beacon for others.",
    14: "Scattered energy requiring stability. Finding your inner center and organizing your space is priority one.",
    15: "Fortunate command and virtue. You command respect and integrate your environment with great reputation.",
    16: "Winning hearts with honor and virtue. Destined for a prestigious life through the trust of many.",
    17: "Sharp logic like frost, seeking truth. Peerless expertise is yours, but must master emotional connection.",
    18: "Firm will manifesting tangible success. Transforming adversity into concrete achievements through drive.",
    19: "Brilliant yet solitary soul. Finding harmony with reality and sharing wisdom is the key to your life.",
    20: "High ideals on shaky foundations. Avoid premature expansion and focus on substance to prosper.",
    21: "Majestic like a peak, leading with authority. An independent leader, but add compassion to be great.",
    22: "Great talent but fragile boundaries. Protect your center and learn to say 'No' to protect your soul.",
    23: "Solar passion radiating ideas. Achieving fame and growth through constant evolution and movement.",
    24: "Meticulous management achieving golden ripeness. Possessing an indestructible base and lasting strength.",
    25: "Brilliant wit finding order in chaos. Guiding others to the correct path as a central axis of destiny.",
    26: "Heroic vibration tested by storms. Your true worth is revealed when you conquer trials with integrity.",
    27: "Sharp insight prone to interruption by isolation. Restore empathy to open the gates of your fate.",
    28: "Navigating waves like a captain through storms. Let go of obsession and ride the flow to succeed.",
    29: "Established reputation and high integrity. Excelling at refining life's turning points to leap higher.",
    30: "Mixed fate with sharp ups and downs. Great pioneer energy, but needs more internal solidity.",
    31: "Creating from nothing through unity. Achieving monumental success by harmonizing human connections.",
    32: "Opportunities arising like a favorable breeze. Elevating your soul through fluid communication.",
    33: "Imperial majesty and powerful leadership. Fulfill your heavy duties to complete your great work.",
    34: "Rough storms disrupting fate. Prioritize substance and solidify foundations to withstand the pressure.",
    35: "Fortress-like stoic strength and peace. Serving as a trusted axis to maintain organizational harmony.",
    36: "Winning hearts with virtue amid trials. Gaining social trust and high rewards through dedication.",
    37: "Expert precision piercing appearances for truth. Maintaining high integrity and soulful independence.",
    38: "Manifesting visions into concrete triumphs. Proving your worth through tangible, practical success.",
    39: "Closing the cycle to leap higher. Achieving ultimate completion and serving as a beacon of light.",
    40: "Pioneer fire but prone to sudden shifts. Maintain serenity and solidify bases to maintain prosperity.",
    41: "Powerful command leading collective triumphs. Harmonizing connections into concrete achievements.",
    42: "Radiant ideas tested by trials. Do not fear change; use it as a stepping stone for growth.",
    43: "Outer radiance but inner decay. Prioritize solid foundations over spectacle to find true stability.",
    44: "Leader's fire but lost in a labyrinth. Seek order in chaos to find your true direction.",
    45: "Duty and merit integrating universal unity. Gaining high honor through selfless dedication.",
    46: "Insight prone to delusion and wandering. Regain your center and fluidity to unlock your path.",
    47: "Proving worth through tangible success. Finding life's meaning through grit and final results.",
    48: "Ultimate completion guiding others. A trusted mentor guiding universal harmony and peace.",
    49: "Extreme changes and mixed fate. Adapt quickly and solidify inner substance to survive and thrive.",
    50: "Good unity but unstable fluctuations. Maintain serenity and solid bases to prevent collapse.",
    51: "Abundant growth experiencing all seasons. Growing through trials into a self-made powerhouse.",
    52: "Fortress-like solidity catching opportunities. Achieving great works through meticulous management.",
    53: "Outer show but inner poverty. Prioritize substance over appearance to hold your center.",
    54: "Strong duty but shaky foundations. Re-examine your base and keep faith to overcome obstacles.",
    55: "Sharp insight but hollow spectacle. Cultivate warmth and fluidity to win people over.",
    56: "Strong drive but prone to indecision. Harmonize execution with reality to reach the finish line.",
    57: "Pioneer waves resurrecting from trials. Achieving exemplary success after enduring hardship.",
    58: "Accumulating wealth through steady effort. Reaching golden ripeness in later years via grit.",
    59: "Strong change but weak will. Fix your routine and focus on clear goals to find your way.",
    60: "Inner substance but unstable relations. Solidify your base and focus on self-management.",
    61: "Divine wisdom guiding the core axis. A wise leader finding order and guiding universal harmony.",
    62: "Deep duty tested by internal woes. Use fluidity and altruism to navigate through crises.",
    63: "Sharp insight meeting steady results. Achieving ultimate success and wealth through patience.",
    64: "Wisdom prone to stagnation by fate. Refine your turning points to prepare for the next leap.",
    65: "Primordial creation meeting completion. Radiating your value from a place of peace.",
    66: "Unity waves prone to fatal errors. Guard your center and set clear boundaries to protect yourself.",
    67: "Radiant expression achieving supreme peace. Elevating your soul's altitude through trials.",
    68: "Fortress solidity and brilliant strategy. Building an indestructible legacy for lasting success.",
    69: "Leader's fire but prone to standstill. Reinforce basic strength and insight for the future.",
    70: "Deep faith but prone to emptiness. Gain honor through dedication to unlock your path.",
    71: "Master's precision and stoic strength. Enjoying stable wealth and peerless expertise.",
    72: "Strong drive but sharp fluctuations. Use wisdom to manage risks and keep a sense of reality.",
    73: "Pioneer fire closing cycles wisely. Proving high value through your own creative will.",
    74: "Pioneer fire lost in misery. Survival depends on the grit to find your own path amid trials.",
    75: "Universal harmony creating total peace. Achieving monumental results through cooperation.",
    76: "Radiant expression prone to dispersion. Focus on guarding your center to complete growth.",
    77: "Inner substance but turbulent fate. Reinforce your base to prevent collapse during shifts.",
    78: "Leader's fire with mixed outcomes. Maintain insight and center to keep prosperity alive.",
    79: "Deep faith lost in the mist. Cultivate fluidity and clear goals to earn your honor.",
    80: "Deep insight prone to seclusion. Restore fluidity and keep connection with the world.",
    81: "Ultimate bliss meeting divine completion. Reaching the peak of success as a beacon of light."
};

/* [Destiny Engineering - Monthly Energy Matrix] */
const birthMonthData = {
    1: { 
        ko: "맹추위를 뚫고 솟아오르는 '동토의 생명력'을 가졌습니다. 어떤 척박한 환경에서도 결국 결과를 만들어내는 강인함이 특징이며, 당신의 성명학적 격과 결합될 때 타인보다 한 박자 빠른 '선구자적 도약'을 이루게 됩니다.",
        en: "Possesses the 'Vitality of Frozen Earth' piercing through deep winter. Characterized by resilience that yields results in any environment, combined with your name numerology, it triggers a 'pioneer leap' faster than others."
    },
    2: { 
        ko: "만물이 기지개를 켜는 '초봄의 유연함'을 품고 있습니다. 적응력이 뛰어나고 창의적인 파동이 강하며, 성명학적 수리가 길수일 경우 당신의 아이디어가 세상에 화려하게 꽃피는 '발현의 속도'가 극대화됩니다.",
        en: "Embraces the 'Flexibility of Early Spring' as all things awaken. With high adaptability and creative vibration, when paired with lucky name numerology, the 'speed of manifestation' for your ideas is maximized."
    },
    3: { 
        ko: "대지를 적시는 봄비와 같은 '성장의 자양분'을 타고났습니다. 주변을 성장시키는 포용력이 장점이며, 당신의 이름에 담긴 리더십과 결합될 때 많은 이들이 따르는 '거대한 숲'과 같은 명예를 얻게 됩니다.",
        en: "Born as the 'Nutrient of Growth' like spring rain soaking the earth. Your magnanimity nurtures others; combined with leadership in your name, you achieve honor like a 'vast forest' where many seek refuge."
    },
    4: { 
        ko: "화려하게 피어나는 '만개의 에너지'를 지녔습니다. 자신을 드러내고 가치를 증명하는 파동이 강하며, 성명학적 성과격과 결합될 때 당신의 가치가 물질적인 부와 명성으로 즉각 전환되는 흐름을 보입니다.",
        en: "Possesses the 'Energy of Full Bloom' radiating brilliance. With a strong drive to prove your worth, combined with success-oriented name numerology, your value translates into immediate material wealth and fame."
    },
    5: { 
        ko: "뜨거운 태양 아래 무르익는 '초여름의 열정'이 삶을 구성합니다. 추진력이 독보적이며, 성명학적 중심격과 결합될 때 조직의 핵심에서 만물을 통솔하는 '태양의 리더십'을 완벽히 구현하게 됩니다.",
        en: "Life is driven by the 'Passion of Early Summer' ripening under the sun. With peerless drive, combined with center-focused name numerology, you perfectly embody 'solar leadership' commanding the core of any organization."
    },
    6: { 
        ko: "만물을 성장시키는 '풍요의 절정'에 서 있는 기운입니다. 에너지가 넘치고 확산성이 좋으며, 성명학적 조화격과 결합될 때 사람과 자본을 끌어모아 거대한 결실을 맺는 '성공의 자석' 역할을 합니다.",
        en: "Stands at the 'Peak of Abundance' fueling the growth of all things. Vibrant and expansive, combined with harmony-based name numerology, you act as a 'success magnet' attracting people and capital."
    },
    7: { 
        ko: "단단하게 굳어가는 '열매의 견고함'을 지닌 명식입니다. 내실이 탄단하고 실속을 중시하며, 성명학적 기반격과 만나면 어떤 풍파에도 흔들리지 않는 '인생의 절대적 지지대'를 구축하는 삶을 살게 됩니다.",
        en: "A destiny possessing the 'Firmness of Fruit' as it hardens. Valuing substance and stability, paired with foundational name numerology, you build an 'absolute support system' for life that withstands any storm."
    },
    8: { 
        ko: "황금빛 들판을 완성하는 '결실의 파동'이 흐릅니다. 현실 감각이 탁월하고 수확의 기운이 강하며, 성명학적 완성격과 결합될 때 평생의 노력이 거대한 부귀로 변모하는 '궁극의 마침표'를 찍게 됩니다.",
        en: "The 'Vibration of Harvest' flows, completing the golden fields. With exceptional realism, combined with completion-based name numerology, your lifelong efforts culminate in 'ultimate prosperity'."
    },
    9: { 
        ko: "서리발처럼 날카로운 '숙살(肅殺)의 기운'을 품고 있습니다. 옳고 그름을 가리는 통찰력이 예리하며, 성명학적 탐구격과 만날 때 누구도 넘볼 수 없는 '독보적인 전문성'의 정점에 오르는 운명입니다.",
        en: "Embraces the 'Energy of Frosty Resolution' sharp as a blade. With keen insight to discern truth, paired with research-based name numerology, you ascend to the 'pinnacle of peerless expertise'."
    },
    10: { 
        ko: "만물이 저장되는 '창고의 지혜'를 지닌 기운입니다. 생각이 깊고 전략적이며, 성명학적 책임격과 결합될 때 신의를 바탕으로 대업을 완수하여 후세에 이름을 남기는 '명예로운 기록'의 삶이 흐릅니다.",
        en: "Possesses the 'Wisdom of Storage' where all things are gathered. Deeply strategic, combined with duty-based name numerology, you fulfill grand tasks through integrity, leading to a 'legacy of honor'."
    },
    11: { 
        ko: "어둠 속에서 빛을 기다리는 '근원의 지혜'를 타고났습니다. 통찰력이 깊고 직관이 뛰어나며, 성명학적 독립격과 결합될 때 대중의 흐름에 휩쓸리지 않고 자신만의 '신성한 왕국'을 세우는 선각자가 됩니다.",
        en: "Born with 'Primal Wisdom' waiting for light in the dark. Highly intuitive, combined with independent name numerology, you become a visionary building your own 'sacred kingdom' regardless of public trends."
    },
    12: { 
        ko: "모든 차원을 융합하고 새로움을 준비하는 '침묵의 힘'이 서려 있습니다. 완성도가 높고 인내심이 강하며, 성명학적 성공격과 결합될 때 보이지 않는 곳에서 승리를 쟁취하는 '지략가의 운명'을 완성합니다.",
        en: "Imbued with the 'Power of Silence' fusing dimensions for rebirth. Possessing high integrity and patience, paired with success-based name numerology, you complete the 'destiny of a strategist' winning from the shadows."
    }
};

// [1. 오행 기본 속성 데이터]
const elementAttributesKo = { "木": { name: "나무" }, "火": { name: "불" }, "土": { name: "흙" }, "金": { name: "쇠" }, "水": { name: "물" } };
const elementAttributesEn = { "木": { name: "Wood" }, "火": { name: "Fire" }, "土": { name: "Earth" }, "金": { name: "Metal" }, "水": { name: "Water" } };

// [2. 81수리 고유 격 명칭 (Title)]
const luckyTitles81 = { 1: "기본격(基本格)-만사휴태", 2: "동요격(動搖格)-분리파란", 3: "도약격(跳躍格)-입신양명", 4: "부정격(不定格)-파괴멸망", 5: "복덕격(福德格)-성공발전", 6: "계승격(繼承格)-덕후유복", 7: "강건격(剛健格)-주도면밀", 8: "수전격(守錢格)-자수성가", 9: "궁박격(窮迫格)-불의재난", 10: "공허격(空虛格)-다재다능", 11: "신성격(新成격)-재래부흥", 12: "박약격(薄弱格)-고립무원", 13: "지혜격(智慧格)-총명발달", 14: "이산격(離散格)-파괴번뇌", 15: "통솔격(統率格)-복수쌍전", 16: "덕망격(德望格)-재물유복", 17: "건창격(健暢格)-강직투쟁", 18: "발전격(發展格)-의지견고", 19: "고난격(苦난格)-병약고독", 20: "허망격(虛망格)-중도좌절", 21: "두령격(頭領格)-독립권위", 22: "중절격(中折격)-부부운박", 23: "공명격(功명格)-위세당당", 24: "입신격(立身격)-축재풍부", 25: "건창격(健暢格)-재치민활", 26: "영웅격(英雄格)-파란만장", 27: "중단격(中斷格)-좌절중단", 28: "파란격(波瀾格)-파란곡절", 29: "성공격(成功格)-신망두터", 30: "부침격(浮沈格)-길흉상반", 31: "융창격(隆昌격)-자수성가", 32: "순풍격(順風格)-의외득재", 33: "제왕격(帝王格)-위풍당당", 34: "파멸격(破滅格)-파란곡절", 35: "안강격(安康格)-평범온화", 36: "협객격(俠客格)-파란만장", 37: "인덕격(仁德格)-유의유덕", 38: "복록격(福祿格)-문학예술", 39: "장성격(將星格)-부귀번영", 40: "파란격(波瀾格)-변화무쌍", 41: "고봉격(高峰格)-대업성취", 42: "고행격(苦行格)-자력갱생", 43: "성쇠격(盛衰격)-외화내빈", 44: "마장격(魔障격)-미궁속황", 45: "대성격(大成격)-만물통합", 46: "미망격(迷妄格)-방황고민", 47: "출세격(출세격)-득의만면", 48: "유덕격(유덕격)-지도역량", 49: "변화격(변화격)-길흉상반", 50: "부침격(부침격)-성패교차", 51: "춘추격(춘추격)-성패상반", 52: "약진격(약진격)-기회포착", 53: "내빈격(내빈격)-외화내빈", 54: "패망격(패망격)-백계무책", 55: "미달격(미달격)-외양내허", 56: "부족격(부족격)-진퇴유곡", 57: "재기격(재기격)-시련극복", 58: "후복격(후복격)-자수성가", 59: "불우격(불우격)-의지박약", 60: "동요격(동요격)-상하불안", 61: "재화격(재화격)-지혜충만", 62: "쇠퇴격(쇠퇴격)-내우외환", 63: "성공격(성공격)-부귀영광", 64: "침체격(침체격)-변화무쌍", 65: "휘황격(휘황격)-만물평온", 66: "망신격(망신격)-내우외환", 67: "승리격(승리격)-천하태평", 68: "창업격(창업격)-지모탁월", 69: "정체격(정체격)-병약곤궁", 70: "공허격(공허격)-멸망멸절", 71: "안정격(안정격)-내실충실", 72: "상반격(상반격)-길흉상반", 73: "평범격(평범격)-자수성가", 74: "불우격(불우격)-만사불우", 75: "안정격(안정격)-평화온화", 76: "이산격(이산격)-내우외환", 77: "성패격(성패격)-길흉상반", 78: "선길격(선길격)-평범온화", 79: "불운격(불운격)-정체불명", 80: "종말격(종말격)-은둔생활", 81: "환희격(환희격)-복덕원만" };
const luckyTitles81En = { 1: "Origin-Harmony", 2: "Turbulence-Conflict", 3: "Ascent-Fame", 4: "Chaos-Decay", 5: "Prosperity-Success", 6: "Heritage-Virtue", 7: "Fortitude-Strategy", 8: "Resilience-Glory", 9: "Adversity-Crisis", 10: "Void-Talent", 11: "Revival-Beginning", 12: "Frailty-Struggle", 13: "Brilliance-Growth", 14: "Dispersion-Anxiety", 15: "Command-Fortune", 16: "Prestige-Virtue", 17: "Integrity-Struggle", 18: "Expansion-Will", 19: "Hardship-Path", 20: "Illusion-Journey", 21: "Sovereignty-Power", 22: "Interruption-Bonds", 23: "Majesty-Power", 24: "Accumulation-Wealth", 25: "Sharpness-Wit", 26: "Hero-Storm", 27: "Cease-Obstacle", 28: "Surge-Waves", 29: "Success-Reputation", 30: "Flux-Fate", 31: "Bloom-Success", 32: "Breeze-Gain", 33: "Imperial-Majesty", 34: "Ruin-Storm", 35: "Serenity-Life", 36: "Wanderer-Journey", 37: "Benevolence-Merit", 38: "Artistry-Wealth", 39: "General-Victory", 40: "Change-Shift", 41: "Summit-Achievement", 42: "Penance-Relief", 43: "Fluctuation-Radiance", 44: "Obstacle-Fate", 45: "Mastery-Unity", 46: "Delusion-Wandering", 47: "Triumph-Satisfaction", 48: "Mentor-Power", 49: "Transformation-Fate", 50: "Wave-Fluctuation", 51: "Seasons-Fate", 52: "Leap-Opportunity", 53: "Hidden-Poverty", 54: "Failure-Zero Strategy", 55: "Surface-Vacuity", 56: "Dilemma-Trapped", 57: "Recovery-Trials", 58: "Rebound-Success", 59: "Misfortune-Weakness", 60: "Shaking-Unstable", 61: "Treasure-Wealth", 62: "Decline-Troubles", 63: "Glory-Honor", 64: "Stagnation-Uncertainty", 65: "Radiance-Peace", 66: "Scandal-Error", 67: "Victory-Peace", 68: "Founder-Strategy", 69: "Standstill-Poverty", 70: "Emptiness-Decay", 71: "Stability-Strength", 72: "Division-Fortune", 73: "Simplicity-Creation", 74: "Misery-Hardship", 75: "Calm-Soul", 76: "Departure-Woes", 77: "Balance-Fate", 78: "Omen-Success", 79: "Mist-Undefined", 80: "Hermit-Secluded", 81: "Bliss-Completion" };

// [3. 성명공학 분석 엔진 (핵심 오류 수정 완료)]
const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a = (n - 1) % 9;
        const b = Math.floor((n - 1) / 9);
        // ✅ 오류 해결: enMain 변수를 여기서 정의합니다.
        const enMain = luckyTitles81En[n].split('-')[0];
        out[n] = { 
            title: `${luckyTitles81[n]} · ${baseKo[a].key}(${stageKo[b]})`, 
            desc: `<b>[운명 격]</b> ${luckyTitles81[n]}<br><b>[상세 분석]</b> ${detailedDesc81[n]}`,
            titleEn: `${enMain} · ${baseEn[a].key}(${stageEn[b]})`,
            descEn: `<b>[Type]</b> ${enMain}<br><b>[Analysis]</b> ${detailedDesc81En[n]}`
        };
    }
    return out;
})();

// [4. 전생 데이터 확장 (81개 조합)]
const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const mods = ["고독하게 하늘을 읽는", "무너진 질서를 바로잡던", "금지된 진리를 탐구하던", "미학적 가치에 집착했던", "자유를 찾아 대륙을 유랑하던", "침묵 속에 칼날을 갈던", "치밀하게 왕국을 설계하던", "자비로운 마음으로 생명을 품던", "거친 파도를 잠재우던", "운명의 실타래를 풀던", "금기를 깨고 경계를 넘나들던", "기록되지 않은 역사를 쓰던", "차가운 이성으로 세상을 보던", "뜨거운 열정으로 영혼을 태우던", "보이지 않는 곳에서 빛을 지키던"];
    const jobs = ["천문 기록관", "대제국의 설계자", "비단길의 대상", "약초 치유사", "잊혀진 성의 파수꾼", "운명의 조율사", "고대의 서지학자", "영혼의 안무가", "강철의 연금술사", "심해의 항해사", "꿈의 기록가", "철학자의 조언자", "새벽의 파수꾼", "보석 세공사", "바람의 전령사"];
    const descs = ["밤마다 망루에 올라 별의 변주를 기록하며 세상의 질서를 유지했습니다.", "폐허 위에 황금비율의 도시를 설계하며 사람들에게 안식처를 선사했습니다.", "모래바람 속에서도 나침반을 놓지 않고 문명을 연결하는 다리가 되었습니다.", "이름 없는 풀꽃의 치유력을 믿으며 가장 낮은 곳에서 고통을 돌보았습니다.", "주인 없는 성을 지키며 마지막까지 신의를 다하다 전설로 남았습니다.", "사람들의 얽힌 인연을 실타래처럼 풀며 보이지 않는 균형을 맞추었습니다.", "먼지 쌓인 고문서 속에서 인류의 잊혀진 지혜를 찾아 다음 세대에 전했습니다.", "몸짓 하나에 영혼의 울림을 담아 메마른 가슴에 감동의 비를 내렸습니다.", "인간 내면을 정화하는 궁극의 공식을 평생 찾아 헤맸습니다.", "아무도 가본 적 없는 심해의 심연을 탐험하며 지도의 빈칸을 채워 나갔습니다.", "타인의 꿈속으로 들어가 흩어진 기억의 조각들을 하나로 모으는 일을 했습니다.", "권력자들의 곁에서 날카로운 통찰로 국가의 중대사를 조언하던 현자였습니다.", "모두가 포기한 경계에서 끝까지 등불을 밝히며 새벽이 오기를 기다렸습니다.", "원석의 거친 단면에서 찬란한 빛을 이끌어내듯 사람의 가치를 발견했습니다.", "바람을 타고 흐르는 소식들을 모아 세상의 소외된 곳에 진실을 전했습니다."];
    const homeworks = ["자신의 지식을 자비로 바꾸는 연습", "지배보다 공존하는 지혜 배우기", "물질 뒤의 공허함을 채우는 법", "타인을 돌보듯 자신도 사랑하기", "과도한 책임감에서 벗어나는 법", "완벽주의를 버리고 흐름에 몸 맡기기", "과거의 지혜를 현대어로 재해석하기", "표현의 화려함보다 진심의 무게 견디기", "집착을 비워냄으로써 완성되는 진리", "미지의 두려움을 호기심으로 승화하기", "타인의 시선에서 자유로워지는 훈련", "침묵의 가치를 생활 속에서 실천하기", "결과보다 과정을 즐기는 마음 갖기", "차가운 이성에 따뜻한 온기 더하기", "스스로를 가두던 고정관념 파괴하기"];
    return { job: `${mods[i % mods.length]} ${jobs[Math.floor(i / 3) % jobs.length]}`, desc: descs[Math.floor(i / 2) % descs.length], homework: homeworks[i % homeworks.length] };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const mods = ["A Solitary", "A Rigorous", "A Forbidden", "An Aesthetic", "A Wandering", "A Silent", "A Meticulous", "A Compassionate", "A Fearless", "A Mystic", "A Rebellious", "A Visionary", "A Serene", "A Radiant", "A Hidden"];
    const jobs = ["Astronomy Clerk", "Empire Architect", "Silk Road Merchant", "Herbal Healer", "Sentinel of Ruins", "Arbiter of Fate", "Ancient Bibliographer", "Soul Choreographer", "Steel Alchemist", "Deep Sea Navigator", "Dream Archivist", "Sage Advisor", "Dawn Watcher", "Gem Carver", "Wind Herald"];
    const descs = ["You recorded star trajectories from a lonely tower.", "You designed cities of golden ratios on ruins.", "You never lost the compass in sandstorms.", "You cared for the suffering with the power of wildflowers.", "You guarded a masterless castle with unwavering loyalty.", "You balanced the world by unraveling threads of fate.", "You found forgotten wisdom in dusty scrolls.", "You poured the resonance of the soul into gestures.", "You sought the formula to purify the human heart.", "You explored the abyss, filling the gaps in the world map.", "You entered dreams to collect fragments of memory.", "You advised on great matters of state with insight.", "You kept the lamp burning, waiting for dawn.", "You discovered human value in rough gemstones.", "You brought truth to the isolated via the wind."];
    const homeworks = ["Knowledge into compassion.", "Coexistence over dominance.", "Filling the hidden void.", "Healing your own soul.", "Letting go of heavy duty.", "Flowing with fate.", "Modernizing old wisdom.", "Enduring weight of truth.", "Completing through letting go.", "Fear into curiosity.", "Freedom from others' eyes.", "Value of silence.", "Process over results.", "Warmth to cold logic.", "Breaking stereotypes."];
    return { job: `${mods[i % mods.length]} ${jobs[Math.floor(i / 3) % jobs.length]}`, desc: descs[Math.floor(i / 2) % descs.length], homework: homeworks[i % homeworks.length] };
});

// [5. 내세 데이터: 장소, 생명체, 미션의 고해상도 조합]
const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const places = [
        "수정 도서관 (우주 아카이브)", "에테르 데이터 센터", "비의 정원", "바람의 고원", "고요한 사찰", 
        "빛의 연산소", "산호 초원", "구름 위의 섬", "철학자의 숲", "창조의 광장", 
        "영원의 해변", "안개의 도시", "무지개 폭포", "별의 요람", "지혜의 탑", 
        "시간의 회랑", "은하수의 끝", "새벽의 숲", "거울의 호수", "황금 사막", "천상의 정원"
    ];
    const objects = [
        "지혜를 분류하는 수호자", "백색 왜성의 정원사", "차원의 균형을 맞추는 조율사", "빛의 파동을 기록하는 자", "영혼의 궤적을 그리는 화가",
        "에너지를 정화하는 연금술사", "시간의 흐름을 지키는 파수꾼", "기억의 조각을 모으는 수집가", "진리를 노래하는 전령사", "생명의 코드를 설계하는 공학자",
        "꿈의 경계를 지키는 안내자", "평화의 파동을 송출하는 안테나", "우주의 질서를 세우는 설계자", "진화의 방향을 결정하는 관찰자", "감정의 입자를 조절하는 조율사"
    ];
    const missions = [
        "우주의 모든 신성한 기억을 분류하고 보존하십시오.", "메마른 영혼에 생명수를 뿌려 다시 피어나게 하십시오.", "자유를 잃은 자들에게 보이지 않는 길을 안내하십시오.", "세상에 평화의 파동을 전하는 안테나가 되십시오.", "미래를 밝힐 새로운 에너지원을 연산하십시오.", 
        "바다의 생태계를 치유하고 생명을 조율하십시오.", "보이지 않는 곳에서 우주의 진리를 수호하십시오.", "잊혀진 근원적 질문들에 대한 해답을 찾으십시오.", "예술과 기술이 융합된 새로운 세계를 설계하십시오.", "순환하는 시간의 균형을 맞추는 저울이 되십시오.",
        "혼란에 빠진 영혼들이 쉴 수 있는 안식처를 지으십시오.", "지상의 모든 작고 소중한 목소리를 기록하십시오.", "어둠 속에서 길 잃은 별들을 올바른 궤도로 인도하십시오.", "무너진 가치관 위에 새로운 질서의 기둥을 세우십시오.", "잠든 지혜를 깨워 무지함을 물리치십시오."
    ];

    return { 
        place: places[i % places.length], 
        object: objects[Math.floor(i / 2) % objects.length], // ✅ 사라졌던 생명체 데이터 복구
        mission: missions[Math.floor(i / 3) % missions.length] 
    };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const places = [
        "Crystal Library (Cosmic Archive)", "Ether Data Center", "Garden of Rain", "Plateau of Wind", "Silent Temple", 
        "Lab of Light", "Coral Meadow", "Cloud Island", "Philosopher's Forest", "Creation Square", 
        "Eternal Beach", "Mist City", "Rainbow Fall", "Star Cradle", "Tower of Wisdom", 
        "Corridor of Time", "Galaxy's End", "Forest of Dawn", "Mirror Lake", "Golden Desert", "Celestial Garden"
    ];
    const objects = [
        "Guardian of Universal Wisdom", "Gardener of White Dwarfs", "Arbiter of Dimensional Balance", "Recorder of Light Vibrations", "Painter of Soul Trajectories",
        "Alchemist of Energy Purification", "Sentinel of the Timeline", "Collector of Memory Fragments", "Herald of Sacred Truth", "Engineer of Life Codes",
        "Guide of Dream Borders", "Antenna of Peace Waves", "Architect of Cosmic Order", "Observer of Evolutionary Paths", "Tuner of Emotional Particles"
    ];
    const missions = [
        "Classify and preserve all sacred cosmic memories.", "Sprinkle life water on dry souls to bloom again.", "Guide the invisible path for those who lost freedom.", "Become an antenna transmitting waves of peace.", "Discover and calculate future energy sources.", 
        "Heal the marine ecosystem and harmonize life.", "Guard the unseen truths of the universe.", "Find answers to forgotten primal questions.", "Design a new world where art and tech merge.", "Become a scale balancing the cycle of time.",
        "Build a sanctuary for troubled souls to rest.", "Record every small and precious earthly voice.", "Guide stars lost in the dark back to their orbit.", "Build pillars of new order on fallen values.", "Wake the sleeping wisdom to defeat ignorance."
    ];

    return { 
        place: places[i % places.length], 
        object: objects[Math.floor(i / 2) % objects.length], // ✅ Next Life Being restored
        mission: missions[Math.floor(i / 3) % missions.length] 
    };
});
// [6. 헬퍼 함수]
function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function makePastNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)}`; }
function makePastNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)}`; }
function makeNextLifeNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)}`; }
function makeNextLifeNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)}`; }
function pickCategoryByElement(s, l, n) { return "nature"; }
