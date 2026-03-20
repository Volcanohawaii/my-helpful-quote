/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

const i18n = {
    ko: {
        title: "운명공학 데이터 분석", 
        desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
        nameLabel: "성명(예: 강화산)", 
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
        title: "Destiny Engineering Analysis", 
        desc: "We extract your signature energy from your name and birth date.",
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
        nextObj: "Object", 
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
const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin"];
const nameTailEn = ["is","a","en","or","el"];

const epithetKoByElement = { "木": ["푸른"], "火": ["태양의"], "土": ["대지의"], "金": ["은빛의"], "水": ["물결의"] };
const epithetEnByElement = { "木": ["Verdant"], "火": ["Solar"], "土": ["Earth"], "金": ["Silver"], "水": ["Tide"] };

const detailedDesc = {
    "개척": "무에서 유를 창조하는 시작의 에너지가 강합니다. 선구자적 기질이 있습니다.",
    "조화": "관계와 균형의 에너지가 핵심입니다. 협력을 통해 결실을 맺습니다.",
    "발전": "확장과 표현의 기운이 넘칩니다. 끊임없이 변화하며 성장합니다.",
    "기반": "안정과 내실을 기하는 힘이 강합니다. 단단한 지속력을 가집니다.",
    "중심": "통합과 리더십의 기운입니다. 중추적인 역할을 수행할 운명입니다.",
    "책임": "신뢰와 헌신의 에너지가 깊습니다. 명예로운 자리에 오릅니다.",
    "탐구": "분석과 통찰의 기운이 날카롭습니다. 독보적인 지식을 쌓습니다.",
    "성과": "실행과 결과의 에너지가 뚜렷합니다. 추진력이 강점입니다.",
    "완성": "마무리와 지혜의 기운이 성숙합니다. 타의 귀감이 되는 완성도를 가집니다."
};

const elementAttributesKo = { "木": { name: "나무" }, "火": { name: "불" }, "土": { name: "흙" }, "金": { name: "쇠" }, "水": { name: "물" } };
const elementAttributesEn = { "木": { name: "Wood" }, "火": { name: "Fire" }, "土": { name: "Earth" }, "金": { name: "Metal" }, "水": { name: "Water" } };

const nameNumerology = (() => {
    const out = {};
    for (let n = 1; n <= 81; n++) {
        const a = (n - 1) % 9; const b = Math.floor((n - 1) / 9);
        out[n] = { 
            title: `${String(n).padStart(2,"0")}수·${baseKo[a].key}(${stageKo[b]})`, 
            desc: `<b>[특성]</b> ${detailedDesc[baseKo[a].key]}<br><b>[상태]</b> '${stageKo[b]}'의 흐름입니다.`,
            titleEn: `No.${n} ${baseEn[a].key} (${stageEn[b]})`,
            descEn: `In the '${stageEn[b]}' phase.`
        };
    }
    return out;
})();

const pastLifeData = Array.from({ length: 81 }, (_, i) => { return { job: "전생의 지식인", desc: "기록과 통찰의 삶.", homework: "결핍을 채우는 연습." }; });
const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => { return { job: "Scholar", desc: "Life of insight.", homework: "Fill the void." }; });
const reincarnationData = Array.from({ length: 81 }, (_, i) => { return { place: "호숫가", mission: "내면의 평화 완성." }; });
const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => { return { place: "Lakeside", mission: "Inner peace." }; });

function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function makePastNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)}`; }
function makePastNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)}`; }
function makeNextLifeNameKo(n, s, l, m){ return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)}`; }
function makeNextLifeNameEn(n, s, l, m){ return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)}`; }
function pickCategoryByElement(s, l, n) { return "nature"; }
