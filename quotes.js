/* [Destiny Engineering Report - Global Final Dataset: 81 System] */

const i18n = {
    ko: {
        title: "운명공학 데이터 분석", 
        desc: "성명과 생일을 기반으로 고유한 에너지를 추출합니다.",
        nameLabel: "성명(예: 강화산)", 
        birthLabel: "양력생일(예: 19900101)", 
        btn: "리포트 생성하기",
        loadSeal: "분석중", 
        loadTitle: "당신의 운명 에너지를 조합 중...",
        loadDesc: "당신의 에너지 보강(補强)에 필요한 아이템을 이미지를 보며 잠시 기다려 주세요.",
        tab1Btn: "현생 분석", 
        tab2Btn: "전생 기록", 
        tab3Btn: "내세 예약",
        sec1: "에너지 분석 자료",  // (구 sec2)
        sec2: "약점 보완",         // (구 sec3)
        advise: "현생 조언", 
        practice: "실천 사항", 
        sideEffect: "과한 보충은 다음의 부작용이 있습니다.",
        tab2Title: "전생 분석 자료", 
        tab3Title: "내세 분석 자료", 
        pastJob: "전생의 직업", 
        pastHomework: "전생의 과업", 
        nextDest: "다음 목적지", 
        nextObj: "다음 생명(물)체", 
        nextMission: "내세 행복을 위한 수행"
    },
    en: {
        title: "Destiny Engineering Analysis", 
        desc: "We extract your signature energy from your name and birth date.",
        nameLabel: "Name (Full name)", 
        birthLabel: "Birth (YYYYMMDD)", 
        btn: "Generate Report",
        loadSeal: "Analyzing", 
        loadTitle: "Combining destiny energy...",
        loadDesc: "Please wait a moment while we assemble your reinforcement items.",
        tab1Btn: "Present-Life Analysis", 
        tab2Btn: "Past-Life Records", 
        tab3Btn: "Afterlife Reservation",
        sec1: "Energy Analysis Report", 
        sec2: "Energy Reinforcement", 
        advise: "Advice for This Life", 
        practice: "Action Items", 
        sideEffect: "Caution: Side Effects of Over-Supplementing",
        tab2Title: "Past-Life Analysis Report", 
        tab3Title: "Afterlife Analysis Report", 
        pastJob: "Past-Life Occupation", 
        pastHomework: "Past-Life Homework", 
        nextDest: "Next Destination", 
        nextObj: "Next Object", 
        nextMission: "Soul practice to guarantee afterlife happiness"
    }
};

const hangulElements = { 'ㄱ': '木','ㄲ': '木','ㅋ': '木', 'ㄴ': '火','ㄷ': '火','ㄸ': '火','ㄹ': '火','ㅌ': '火', 'ㅇ': '土','ㅎ': '土', 'ㅅ': '金','ㅆ': '金','ㅈ': '金','ㅉ': '金','ㅊ': '金', 'ㅁ': '水','ㅂ': '水','ㅃ': '水','ㅍ': '水' };
const alphabetElements = { 'A': '木','E': '木','I': '木','O': '木','U': '木','Y': '木', 'B': '水','P': '水','M': '水','F': '水','W': '水', 'C': '火','G': '火','J': '火','L': '火','S': '火', 'D': '土','N': '土','T': '土','H': '土', 'K': '金','R': '金','V': '金','X': '金','Q': '金','Z': '金' };

const baseKo = [{key:"개척",core:"시작·독립·결단",risk:"독단·조급"},{key:"조화",core:"협력·중재·관계",risk:"우유부단·의존"},{key:"발전",core:"성장·표현·확장",risk:"산만·과시"},{key:"기반",core:"안정·축적·관리",risk:"정체·완고"},{key:"중심",core:"균형·통합·리더십",risk:"완벽주의·통제"},{key:"책임",core:"의무·봉사·신뢰",risk:"과부담·걱정"},{key:"탐구",core:"분석·통찰·전문성",risk:"고립·냉정"},{key:"성과",core:"현실화·재물·결실",risk:"집착·과욕"},{key:"완성",core:"마무리·지혜·전환",risk:"허무·미련"}];
const baseEn = [{key:"Pioneer",core:"start·independence",risk:"rigidity"},{key:"Harmony",core:"cooperation·mediation",risk:"dependency"},{key:"Growth",core:"expansion·expression",risk:"scattered"},{key:"Foundation",core:"stability·management",risk:"stagnation"},{key:"Center",core:"balance·leadership",risk:"control"},{key:"Duty",core:"responsibility·trust",risk:"overload"},{key:"Research",core:"analysis·insight",risk:"isolation"},{key:"Result",core:"wealth·achievement",risk:"greed"},{key:"Completion",core:"closure·wisdom",risk:"emptiness"}];
const stageKo = ["발아","정립","강화","확장","정점","전환","정리","재도약","완결"];
const stageEn = ["Sprout","Settle","Strengthen","Expand","Peak","Shift","Refine","Rebound","Complete"];

/* [약점 보완: 서늘한 진단과 강력한 처방] */
const elementPrescriptions12 = {
    "木": [
        "뿌리가 뽑힌 나무의 형국입니다. 시작은 창대하나 끝이 흐지부지되어 인생의 결실이 없습니다. 당장 목표를 하나로 줄이고 '첫 행동'을 강제로 실행하십시오.",
        "생존력이 바닥났습니다. 계획만 짜다 세월을 다 보낼 운명입니다. 루틴을 군대처럼 고정하지 않으면 평생 남의 뒤치다꺼리만 하게 됩니다.",
        "성장의 동력이 꺼졌습니다. 주변에 휘둘려 당신만의 색깔이 사라진 상태입니다. 매일 아침 태양 아래에서 5분간 '나는 할 수 있다'고 스스로에게 선포하십시오.",
        "성장이 멈춘 기형적인 상태입니다. 가지를 쳐내지 못해 에너지가 분산되고 있습니다. 가장 중요한 것 3개만 남기고 나머지는 쓰레기통에 버리십시오.",
        "위태로운 고목의 모습입니다. 겉은 화려하나 속은 썩어가고 있습니다. 확장을 멈추고 '완료 기준'을 문장으로 정의하여 내실을 다지십시오.",
        "협업을 빙자한 의존이 심각합니다. 당신의 속도를 올리려면 남에게 맡기되, 반드시 당신이 직접 검수하는 체크포인트를 두어 주도권을 잡으십시오.",
        "숙련되지 않은 아마추어의 에너지가 흐릅니다. 반복 작업을 자동화하지 않으면 리소스만 축내다 지치게 됩니다. 시스템을 구축하십시오.",
        "마무리가 안 되는 만성적 고질병이 있습니다. 사용자 관점에서 흐름을 정리하지 않으면 당신의 노력은 아무도 몰라주는 헛수고가 됩니다.",
        "정점에 올랐으나 내려갈 준비가 안 됐습니다. 성과를 표준화하지 않으면 당신이 없을 때 모든 것이 무너집니다. 템플릿을 만드십시오.",
        "불필요한 욕심이 당신의 눈을 가리고 있습니다. 핵심만 남기고 덜어내십시오. 비워야 비로소 당신의 진가가 드러납니다.",
        "장기 로드맵이 없는 근시안적 태도가 문제입니다. 실행과 운영을 분리하십시오. 지금 당장의 이익보다 시스템의 영속성을 고민해야 합니다.",
        "완성을 넘어 궁극의 단계로 가야 합니다. 당신이 개입하지 않아도 굴러가는 시스템을 구축하십시오. 그것만이 당신의 운명을 구원합니다."
    ],
    "火": [
        "내면의 열정이 식어버린 냉혈한 상태입니다. 추진력이 없어 기회를 놓치기 일쑤입니다. 붉은색 아이템을 몸에 지니고 심박수를 강제로 올리십시오.",
        "말만 앞서고 기록이 없는 공허한 불꽃입니다. 메모하지 않으면 당신의 아이디어는 연기처럼 사라집니다. 기록을 생존 수단으로 삼으십시오.",
        "에너지가 무분별하게 발산되어 번아웃이 눈앞에 왔습니다. 하루를 블록으로 나누어 에너지 소비를 철저히 통제하십시오. 휴식도 명령입니다.",
        "흥분 포인트는 많으나 집중 포인트가 없습니다. 에너지가 흩어져 아무것도 태우지 못합니다. 집중할 대상을 단 하나로 좁히십시오.",
        "근거 없는 자신감이 화를 부릅니다. 설득과 표현은 좋으나 데이터가 부족합니다. 당신의 주장에 반드시 '숫자'와 '증거'를 붙이십시오.",
        "일정이 무리하여 스스로를 태워 죽이고 있습니다. 무리한 일정은 독입니다. 번아웃이 오기 전에 강제로 멈추고 숨을 고르십시오.",
        "감정 기복이 운명을 갉아먹고 있습니다. 감정의 온도가 올라가면 즉시 운동이나 호흡으로 열을 식히십시오. 냉정함을 유지해야 삽니다.",
        "열정은 있으나 성과물이 없습니다. 끝까지 마무리하는 끈기가 부족합니다. 당신의 열정을 반드시 '결과물'로 증명해 보이십시오.",
        "주변을 다 태워버리는 독선적인 리더십이 문제입니다. 톤을 한 단계 낮추십시오. 겸손하지 않으면 당신의 불길은 고립될 뿐입니다.",
        "말을 줄이고 결과로 보여주십시오. 덜 말할수록 당신의 신뢰도는 올라갑니다. 침묵이 가장 강력한 에너지가 될 것입니다.",
        "영향력은 커졌으나 책임감이 비어 있습니다. 책임 범위를 명확히 하십시오. 권한 뒤에 숨겨진 의무를 다할 때 운이 열립니다.",
        "강한 불은 관리가 핵심입니다. 규칙 없는 불은 재앙입니다. 당신만의 철저한 규칙을 만드십시오. 통제된 불만이 세상을 바꿉니다."
    ],
    "土": [
        "디딜 땅이 없는 허공의 운명입니다. 기반이 흔들리니 아무리 쌓아도 모래성처럼 무너집니다. 오늘 할 일 딱 하나만 완료해 기반을 만드십시오.",
        "주변이 어지러워 운의 흐름이 막혔습니다. 정리정돈이 안 된 공간은 당신의 정신을 갉아먹습니다. 당장 주변을 치워 정체를 푸십시오.",
        "관계의 경계선이 무너져 이용당하기 쉬운 상태입니다. 거절하지 못하면 당신의 인생은 남의 짐을 대신 지다 끝납니다. 선을 그으십시오.",
        "미루는 습관이 운명을 좀먹고 있습니다. 완벽주의라는 핑계 뒤에 숨지 마십시오. 마감 시간을 정하고 무조건 끝내십시오.",
        "내 몫과 남의 몫을 구분하지 못해 과부하가 걸렸습니다. 책임을 분산하십시오. 모든 짐을 혼자 지려는 오만이 당신을 죽입니다.",
        "과도한 부담이 성장을 가로막는 정체를 만들었습니다. 당신의 자원을 배분하십시오. 독점하려다 모든 것을 잃게 될 수 있습니다.",
        "기초 체력과 수면이 엉망입니다. 몸이 무너지면 운도 무너집니다. 식사와 수면, 운동 세 요소를 강제로 고정하여 삶의 지지대를 만드십시오.",
        "변화가 두려워 썩어가는 고인물 상태입니다. 안정은 강점이나 정체는 독입니다. 작은 단위부터 변화를 시도하여 흐름을 만드십시오.",
        "조용히 끌고 가는 힘은 좋으나 소통이 부족합니다. 당신의 의도를 명확히 전달하십시오. 침묵은 오해를 낳고 오해는 기반을 무너뜨립니다.",
        "완벽한 안전은 환상입니다. 실패가 두려워 실험을 멈추지 마십시오. 흙은 섞여야 비옥해집니다. 새로운 시도를 허용하십시오.",
        "돈과 시간 관리가 안 되어 기반이 새고 있습니다. 자원을 철저히 관리하십시오. 새어나가는 구멍을 막지 않으면 미래는 없습니다.",
        "큰 흙은 흐름이 필요합니다. 정체된 에너지를 풀어주십시오. 고집을 버리고 유연함을 받아들일 때 대지(土)의 기운이 완성됩니다."
    ],
    "金": [
        "칼날이 무뎌진 식칼의 형국입니다. 결단력이 마모되어 이도 저도 아닌 삶을 삽니다. 기준을 단 하나만 정하고 그것만은 반드시 지키십시오.",
        "선택지가 너무 많아 결정 장애에 빠졌습니다. 결정을 못 하는 것은 실패보다 나쁩니다. 선택지를 반으로 줄이고 즉시 결정하십시오.",
        "말이 길어질수록 권위가 떨어집니다. 근거는 명확하게, 말은 짧게 하십시오. 당신의 언어에 금속의 날카로운 무게감을 실어야 합니다.",
        "정리되지 않은 삶은 날 선 칼을 휘두르는 것과 같습니다. 정리와 정산을 습관화하십시오. 루틴이 당신의 운명을 보호하는 갑옷이 됩니다.",
        "비판만 하고 대안이 없는 비겁한 태도가 문제입니다. 개선안을 함께 제시하십시오. 날카로움이 건설적으로 쓰일 때 비로소 신뢰를 얻습니다.",
        "규칙이 너무 많아 스스로를 옥죄고 있습니다. 핵심 규칙 3개만 남기고 나머지는 파괴하십시오. 유연하지 못한 금은 결국 부러집니다.",
        "날 선 언행으로 주변 사람을 다 베어버리고 있습니다. 관계에서 화가 치밀면 한 박자 쉬고 말하십시오. 당신의 칼날을 안으로 감추십시오.",
        "완성도는 좋으나 마무리가 늦습니다. 마감력은 금(金)의 생명입니다. 완벽보다 완결이 우선입니다. 제시간에 끝내는 연습을 하십시오.",
        "원칙에 매몰되어 상황 파악을 못 하고 있습니다. 유연함이 없는 원칙은 폭력입니다. 상황에 따른 적용법을 배워야 대인(大人)이 됩니다.",
        "상대의 감정을 데이터로만 취급하는 냉혈한입니다. 공감이 없는 논리는 사람을 떠나게 합니다. 따뜻한 가슴을 회복하지 않으면 고립됩니다.",
        "기준은 유지하되 유연성을 10%만 추가하십시오. 너무 팽팽한 활시위는 끊어지기 마련입니다. 당신의 엄격함에 여백을 두십시오.",
        "최고의 금은 공정함과 따뜻함의 균형입니다. 차가운 이성에 뜨거운 열정을 더하십시오. 그때 비로소 당신은 세상을 베는 명검이 됩니다."
    ],
    "水": [
        "생각의 늪에 빠져 허우적거리는 형국입니다. 실행 없는 고민은 정신적 자살입니다. 당장 생각을 멈추고 5분만 움직이십시오.",
        "정보 과부하로 불안이 영혼을 잠식했습니다. 정보 입력을 차단하고 내면의 소리에 귀를 기울이십시오. 단순해져야 불안이 사라집니다.",
        "깊이는 있으나 결론이 없습니다. 아무리 깊게 파도 물을 길어 올리지 못하면 무용지물입니다. 반드시 당신만의 결론을 서면으로 남기십시오.",
        "선택 회피로 인해 기회가 썩어가는 중입니다. 임시 결론이라도 세워 흐름을 만드십시오. 멈춘 물은 썩고 흐르는 물만이 생명을 얻습니다.",
        "통찰을 말로만 떠들고 구조화하지 못합니다. 당신의 머릿속 지도를 문서로 만드십시오. 구조화되지 않은 통찰은 망상에 불과합니다.",
        "멀티태스킹으로 감정 에너지가 고갈되었습니다. 한 번에 하나씩만 하십시오. 에너지가 분산되면 당신의 바다는 마르게 됩니다.",
        "과몰입으로 인해 일상적 감각이 마비되었습니다. 신호가 오면 즉시 산책하고 잠을 자서 리셋하십시오. 멈춰야 더 멀리 볼 수 있습니다.",
        "완성도는 마감에서 결정됩니다. 마감 시간 없는 작업은 영원히 끝나지 않습니다. 스스로에게 엄격한 마감 기한을 부여하십시오.",
        "영향력이 있으나 소극적인 태도가 가로막고 있습니다. 조용한 목소리라도 명확하게 전달하십시오. 당신의 영향력은 흐름을 타야 커집니다.",
        "감정의 바닥으로 내려가기 전에 루틴을 방패로 삼으십시오. 우울함이 몰려오면 기계적으로 움직여야 합니다. 그것만이 생존법입니다.",
        "지혜를 독점하지 말고 나누십시오. 고여있는 지혜는 독이 됩니다. 코칭이나 공유를 통해 당신의 운명을 순환시키십시오.",
        "물의 힘은 흐름입니다. 집착을 내려놓을수록 당신은 강해집니다. 움켜쥐려 하지 말고 흘려보내십시오. 바다는 모든 것을 받아들입니다."
    ]
};
/* [quotes.js - 영어판 날카로운 처방전 데이터] */
const enPrescriptions12 = {
    "木": [
        "You are like a tree with its roots pulled out. Great starts, zero finishes. Focus on ONE goal and take immediate action.",
        "Your survival instinct is depleted. You'll spend your life planning and never doing. Fix your routine like a soldier.",
        "Growth engine has stalled. You've lost your color by following others. Declare 'I am in control' every morning.",
        "Your energy is scattered like unpruned branches. You are wasting potential. Throw everything except the top 3 priorities into the trash.",
        "You are a hollow old tree. Fancy outside, rotting inside. Stop expanding and define your 'Completion Criteria' now.",
        "Dependency disguised as cooperation. To gain speed, outsource tasks but you MUST hold the final checkpoint yourself.",
        "Flowing with amateur energy. Without automating repetitive tasks, you will burn out doing nothing. Build a system.",
        "Chronic inability to finish. If you don't organize the flow from the user's view, your effort remains invisible.",
        "At the peak but unprepared for the fall. Without standardizing your results, everything collapses the moment you leave.",
        "Greed is blinding you. Strip away the excess. Only by emptying can your true value be revealed.",
        "Short-sightedness is your curse. Separate execution from operation. Think about the longevity of your system.",
        "Move beyond completion to the ultimate stage. Build a system that runs without you. This is your only salvation."
    ],
    "火": [
        "Cold-blooded with no inner passion. You are missing opportunities due to lack of drive. Carry something red and force your heart rate up.",
        "An empty flame with words but no records. Without memos, your ideas vanish like smoke. Use documentation as a survival tool.",
        "Energy is firing blindly toward burnout. Divide your day into strict blocks. Rest is not a choice; it is a command.",
        "High excitement, zero focus. You are burning everything yet heating nothing. Narrow your target down to exactly ONE.",
        "Groundless confidence will lead to disaster. Your persuasion lacks data. Attach 'Numbers' and 'Evidence' to every claim.",
        "You are burning yourself alive with an impossible schedule. Stop immediately and breathe before you turn into ash.",
        "Emotional instability is eating your destiny. When your temper rises, cool down with exercise immediately. Stay cold to survive.",
        "Passion without output. You lack the grit to finish. Prove your fire through 'Tangible Results' only.",
        "Dictatorial leadership that burns everyone around you. Lower your tone. Without humility, your flame will be isolated.",
        "Speak less, show results more. Your credibility rises with your silence. Silence will be your most powerful energy.",
        "Influence has grown, but responsibility is empty. Define your scope. Luck opens when you fulfill the duty behind your power.",
        "Uncontrolled fire is a catastrophe. Management is key. Create your own iron rules. Only controlled fire changes the world."
    ],
    "土": [
        "A destiny floating in mid-air with no ground. Without a foundation, everything you build will collapse like sand. Finish ONE task today.",
        "Luck is blocked by your messy surroundings. A cluttered space eats your spirit. Clean up immediately to break the stagnation.",
        "Boundary lines have collapsed; you are being used. If you can't say no, you'll spend life carrying others' burdens. Draw the line.",
        "Procrastination is rotting your destiny. Do not hide behind perfectionism. Set a deadline and finish it no matter what.",
        "Overloaded because you can't delegate. Distribute the weight. The arrogance of trying to carry everything alone will kill you.",
        "Excessive burden has created growth stagnation. Distribute your resources. Trying to monopolize everything will lead to losing it all.",
        "Basic health and sleep are in shambles. If the body breaks, luck breaks. Fix your meals and sleep to build a support pillar.",
        "Stagnant water rotting from fear of change. Stability is a strength, but stagnation is poison. Try small changes to create flow.",
        "Strong quiet power, but zero communication. Convey your intent clearly. Silence breeds misunderstanding and ruins your base.",
        "Perfect safety is an illusion. Do not stop experimenting for fear of failure. Soil needs mixing to be fertile. Allow new trials.",
        "Your foundation is leaking due to poor time and money management. Guard your resources. Without fixing the leaks, there is no future.",
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
        "Cold-blooded, treating others' emotions as mere data. Logic without empathy drives people away. Restore your heart or face isolation.",
        "Keep your standards but add 10% flexibility. A bowstring pulled too tight will snap. Leave some space in your rigidity.",
        "The best Metal is a balance of justice and warmth. Add passion to your cold logic. Only then will you become a legendary sword."
    ],
    "水": [
        "Drowning in a swamp of thoughts. Worry without action is mental suicide. Stop thinking and move for just 5 minutes.",
        "Anxiety has consumed your soul due to information overload. Block all inputs and listen to your inner voice. Simplify to survive.",
        "Deep but concludes nothing. No matter how deep you dig, it's useless if you can't draw water. Write down your final conclusion.",
        "Opportunities are rotting due to choice avoidance. Set even a temporary conclusion to create flow. Stagnant water spoils.",
        "Talking about insights without structuring them. Map your mind onto a document. Unstructured insight is just a delusion.",
        "Emotional energy depleted by multitasking. Do only ONE thing at a time. If energy scatters, your ocean will dry up.",
        "Daily senses paralyzed by hyper-fixation. When the signal hits, walk and sleep to reset. You must stop to see further.",
        "Perfection is decided at the deadline. Work without a deadline never ends. Impose strict time limits on yourself.",
        "Influence exists but is blocked by passivity. Even in a quiet voice, deliver your message clearly. Flow increases your power.",
        "Use routine as a shield before you hit the emotional floor. When depression hits, move mechanically. It is the only way.",
        "Do not monopolize wisdom; share it. Hoarded wisdom becomes poison. Circulate your destiny through coaching or sharing.",
        "The power of Water is flow. You grow stronger as you let go of obsession. Do not grasp; let it flow. The ocean accepts everything."
    ]
};

const syllableKo1 = ["하","연","도","가","서","윤","태","민","지","현","보","유","라","휘","린","겸","담","준","채","온"];
const syllableKo2 = ["서","린","호","민","윤","하","연","우","재","성","람","빛","솔","진","담","율","아","늘","준","온"];
const nameRootEn = ["Aren","Lyra","Kalen","Seren","Orin","Mira","Elian","Nova","Cairn","Sola","Riven","Lumen","Astra","Veyra","Neris","Kaia"];
const nameTailEn = ["is","a","en","or","el","yn","on","ia","us","ar","eth","iel","ara","eus","ir","ae"];

const epithetKoByElement = { "木": ["푸른", "수림의", "새순의", "개척의"], "火": ["홍련의", "태양의", "불꽃의", "열망의"], "土": ["대지의", "황토의", "기반의", "성채의"], "金": ["은빛의", "철율의", "서약의", "검의"], "水": ["물결의", "안개의", "심해의", "거울의"] };
const epithetEnByElement = { "木": ["Verdant", "Forest-born", "Sprouting", "Pathfinding"], "火": ["Crimson", "Solar", "Ember", "Flamebound"], "土": ["Earthforged", "Rooted", "Stoneward", "Citadel"], "金": ["Silver-edged", "Oathbound", "Ironlaw", "Steelforged"], "水": ["Tideborn", "Mistveiled", "Abyssal", "Mirror-souled"] };

const pastJobsKo = ["궁중의 신뢰로운 기록관", "산중 서당의 지혜로운 훈장님", "전장의 발빠른 전령", "약초를 다루는 전설적인 명의", "거친 파도를 누비는 해상 무역상", "아름다운 향기를 설계하는 조향사", "희귀한 귀금속을 다루는 장인 대장장이", "고요한 사찰의 신성한 수행자", "별자리와 행성의 궤적을 쫓는 관측자"];
const pastJobsEn = ["A Trusted Archivist", "A Wise Scholar", "A Swift Messenger", "A Legendary Physician", "An Adventurous Merchant", "A Master Perfumer", "A Master Smith", "A Sacred Practitioner", "A Celestial Observer"];

const nextPlacesKo = ["수만 권의 지혜가 잠든 도서관 서재", "끝없는 수평선을 비추는 바다 위 등대", "구름이 맞닿은 평화로운 산악 목장", "인류의 미지를 연구하는 최첨단 미래 연구소", "꽃과 기계가 공존하는 환상적인 정원 도시", "영감이 쏟아지는 비밀스러운 예술 작업실", "별들 사이를 고요히 항해하는 우주 정거장", "새벽 물안개가 피어오르는 고요한 호숫가", "빛과 이야기가 살아 숨 쉬는 영화 촬영장"];
const nextPlacesEn = ["A Grand Library", "A Lonely Lighthouse", "A Peaceful Mountain Ranch", "A Future Lab", "A Fantastic Garden City", "A Secret Art Studio", "A Silent Space Station", "A Serene Lakeside", "A Cinematic Set"];

const nextObjectPoolsKo = { thing: ["황금 책", "나침반", "마법 상자"], animal: ["흰 늑대", "올빼미", "돌고래"], human: ["치유사", "기사"], deity: ["안내자", "정령"], insect: ["반딧불이"], microbe: ["미생물"], nature: ["조류", "바람길"] };
const nextObjectPoolsEn = { thing: ["Golden Book", "Compass"], animal: ["White Wolf", "Owl"], human: ["Healer", "Guardian"], deity: ["Guide", "Spirit"], insect: ["Firefly"], microbe: ["Microbe"], nature: ["Current", "Windpath"] };

const sideEffects = ["디저트 무한 흡입 주의", "모든 말끝에 토 달기", "전생이 바위였던 듯한 멍함", "양말 한 짝 영원히 실종", "냉장고 소스 유통기한 점검 강박", "뜬금없는 윙크 발사", "거울 속 내 모습에 취함", "왼쪽 콧구멍만 간지러움", "안경 쓰고 안경 찾기", "리모컨을 손에 쥐고 30분간 방황", "편의점 신상 과자 무조건 사야 함", "자기 전에 갑자기 이불킥", "길 가다 마주친 고양이에게 존댓말", "핸드폰 들고 핸드폰 찾기", "엘리베이터 버튼 여러 번 누르기", "장바구니에 담기만 하고 안 사기", "갑자기 분위기 싸해지는 아재개그", "남의 집 강아지랑 눈싸움하기", "배달 앱 메뉴 고르다 1시간 경과", "물건 사러 가서 엉뚱한 것만 사 오기", "혼자서 내적 댄스 폭발", "중요한 순간에만 터지는 딸꾹질", "이어폰 끼고 노래 안 틀기", "양치하다가 멍 때리기", "새벽 2시에 갑자기 방 정리하기", "비 안 오는데 우산 챙기기", "말할 때 손동작 과해짐", "아무도 없는데 인사하기", "카페 진동벨 들고 카운터 가서 주문하기", "약속 장소 다 와서 집 가고 싶어짐"];
const sideEffectsEn = ["Dessert cravings", "Talking back", "Zoning out", "Lost socks", "OCD over sauce dates", "Involuntary winking", "Reflection obsession", "Itchy left nostril", "Finding glasses on head", "Remote search", "Snack buying", "Late-night cringe", "Talking to cats", "Phone search", "Elevator button panic", "Cart filling", "Dad jokes", "Dog staring", "Menu paralysis", "Buying wrong items", "Inner dance", "Timed hiccups", "Listening to nothing", "Brushing teeth space-out", "2 AM cleaning", "Sunny umbrella", "Over-gesturing", "Stranger waving", "Pager fail", "Home wanting"];

function pickFrom(arr, k){ return arr[Math.abs(k) % arr.length]; }
function get81CoreKo(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseKo[a].key, stage:stageKo[b], core:baseKo[a].core, risk:baseKo[a].risk}; }
function get81CoreEn(n){ const a=(n-1)%9, b=Math.floor((n-1)/9); return {base:baseEn[a].key, stage:stageEn[b], core:baseEn[a].core, risk:baseEn[a].risk}; }

function makePastNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+m)}${pickFrom(syllableKo2, n+m+7)}${pickFrom(["공","랑","도령","낭","장","선생"], n)} · ${pickFrom(epithetKoByElement[s]||["운명의"], n)} ${info.base}의 ${info.stage}`; }
function makePastNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+m)}${pickFrom(nameTailEn, n+5)} · ${pickFrom(epithetEnByElement[s]||["Fated"], n)} ${info.base} (${info.stage})`; }
function makePastNameReasonKo(n, s, l, m){ return `${s} 기운의 특성이 반영된 전생의 고유 호칭입니다.`; }
function makePastNameReasonEn(n, s, l, m){ return `An ancient title reflecting your dominant ${s} energy.`; }

function makeNextLifeNameKo(n, s, l, m){ const info=get81CoreKo(n); return `${pickFrom(syllableKo1, n+10)}${pickFrom(syllableKo2, n+15)} · ${pickFrom(epithetKoByElement[l]||["새로운"], n+7)} ${info.base}의 ${info.stage}`; }
function makeNextLifeNameEn(n, s, l, m){ const info=get81CoreEn(n); return `${pickFrom(nameRootEn, n+20)}${pickFrom(nameTailEn, n+25)} · ${pickFrom(epithetEnByElement[l]||["Renewed"], n+13)} ${info.base} (${info.stage})`; }
function makeNextNameReasonKo(n, s, l, m){ return `부족한 기운(${l})을 보완한 다음생의 이름입니다.`; }
function makeNextNameReasonEn(n, s, l, m){ return `A future name designed to balance your ${l} energy.`; }

function pickCategoryByElement(s, l, n) { 
    const map = { "木": ["nature", "animal"], "火": ["deity", "insect"], "土": ["thing", "nature"], "金": ["thing", "microbe"], "水": ["animal", "nature"] };
    const base = map[s] || ["thing", "animal"];
    return base[n % base.length];
}

const elementAttributesKo = { "木": { name: "나무", trait: "성장" }, "火": { name: "불", trait: "열정" }, "土": { name: "흙", trait: "안정" }, "金": { name: "쇠", trait: "결단" }, "水": { name: "물", trait: "지혜" } };
const elementAttributesEn = { "木": { name: "Wood", trait: "Growth" }, "火": { name: "Fire", trait: "Passion" }, "土": { name: "Earth", trait: "Stability" }, "金": { name: "Metal", trait: "Logic" }, "水": { name: "Water", trait: "Wisdom" } };
const reasonKo = { "木": "성장과 확장의 기운이 짙습니다.", "火": "표현과 확산의 기운이 짙습니다.", "土": "기반과 포용의 기운이 짙습니다.", "金": "원칙과 결단의 기운이 짙습니다.", "水": "통찰과 유연의 기운이 짙습니다." };
const reasonEn = { "木": "Trace of growth and planning.", "火": "Trace of passion and energy.", "土": "Trace of stability and care.", "金": "Trace of order and integrity.", "水": "Trace of wisdom and flow." };

const nameNumerology = (() => {
    const out = {};
    const detailedDesc = {
        "개척": `무에서 유를 창조하는 시작의 에너지가 강합니다. 남들이 가지 않은 길을 열어갈 때 가장 큰 성취를 맛보는 선구자적 기질이 있습니다.`,
        "조화": `관계와 균형의 에너지가 핵심입니다. 사람 사이를 연결하는 탁월한 감각이 있으며, 협력을 통해 혼자보다 훨씬 큰 결실을 맺습니다.`,
        "발전": `확장과 표현의 기운이 넘칩니다. 자신의 아이디어를 세상에 전파하는 능력이 뛰어나며, 끊임없는 변화를 통해 성장하는 운명입니다.`,
        "기반": `안정과 내실을 기하는 힘이 강합니다. 화려함보다 실속을 챙기며, 한번 쌓아 올린 성은 쉽게 무너지지 않는 단단한 지속력을 가집니다.`,
        "중심": `통합과 리더십의 기운입니다. 전체를 조망하고 관리하는 능력이 뛰어나며, 조직 내에서 중추적인 리더 역할을 수행할 잠재력이 큽니다.`,
        "책임": `신뢰와 헌신의 에너지가 깊습니다. 주어진 소임을 끝까지 완수하는 책임감이 강하며, 많은 이들에게 신뢰를 얻어 명예로운 자리에 오릅니다.`,
        "탐구": `분석과 통찰의 기운이 날카롭습니다. 현상의 이면을 꿰뚫어 보는 지혜가 있으며, 특정 분야의 전문 지식을 쌓아 독보적인 위치에 오릅니다.`,
        "성과": `실행과 결과의 에너지가 뚜렷합니다. 현실적인 수완이 좋아 목표한 바를 반드시 물질적, 구체적 성과로 만들어내는 추진력이 강점입니다.`,
        "완성": `마무리와 지혜의 기운이 성숙합니다. 삶의 마디를 잘 정리하고 다음 단계로 도약하는 전환의 힘이 좋으며, 타의 귀감이 되는 완성도를 가집니다.`
    };
    const detailedDescEn = {
        "Pioneer": `Strong pioneer spirit to create something from nothing. You find success when opening new paths and leading others.`,
        "Harmony": `Focuses on balance and connection. You possess an excellent sense of mediation and achieve greater results through teamwork.`,
        "Growth": `Bursting with energy for expansion. You excel at expressing ideas and are destined to grow through constant self-evolution.`,
        "Foundation": `Solid power for stability and substance. You build a lasting legacy through meticulous management and inner strength.`,
        "Center": `The essence of leadership and integration. You have the potential to oversee organizations as a pivotal and central figure.`,
        "Duty": `Deep sense of trust and responsibility. Your commitment earns people's faith, leading you to positions of high honor.`,
        "Research": `Sharp analytical and intuitive power. Your wisdom allows you to see the core truth, making you an expert in your field.`,
        "Result": `Clear drive for tangible outcomes. You possess the practical skills to turn your visions into concrete physical achievements.`,
        "Completion": `Mature energy of closure and wisdom. You have the power to transition gracefully and build a life of high integrity.`
    };
    for (let n = 1; n <= 81; n++) {
        const infoKo = get81CoreKo(n);
        const infoEn = get81CoreEn(n);
        out[n] = { 
            title: `${String(n).padStart(2,"0")}수·${infoKo.base}(${infoKo.stage})`, 
            desc: `<b>[특성]</b> ${detailedDesc[infoKo.base]}<br><b>[상태]</b> 현재 에너지는 '${infoKo.stage}'의 흐름을 타고 있습니다.`,
            titleEn: `No.${n} ${infoEn.base} (${infoEn.stage})`,
            descEn: `<b>[Traits]</b> ${detailedDescEn[infoEn.base]}<br><b>[Status]</b> Currently in the '${infoEn.stage}' phase.`
        };
    }
    return out;
})();

const pastLifeData = Array.from({ length: 81 }, (_, i) => {
    const a = i % 9; 
    return { job: pastJobsKo[a], desc: `${baseKo[a].core} 흐름의 전생 흔적입니다.`, homework: `${baseKo[a].risk}을(를) 조절하며 평정심 유지하기.` };
});

const pastLifeDataEn = Array.from({ length: 81 }, (_, i) => {
    const a = i % 9;
    return { job: pastJobsEn[a], desc: `Energy of ${baseEn[a].core} in your past life.`, homework: `Balance your ${baseEn[a].risk} energy.` };
});

const reincarnationData = Array.from({ length: 81 }, (_, i) => {
    const a = i % 9; const b = Math.floor(i / 9);
    return { place: nextPlacesKo[b], mission: `${baseKo[a].core} 에너지를 ‘${stageKo[b]}’ 국면으로 승화하기.` };
});

const reincarnationDataEn = Array.from({ length: 81 }, (_, i) => {
    const a = i % 9; const b = Math.floor(i / 9);
    return { place: nextPlacesEn[b], mission: `Sublimating ${baseEn[a].core} energy into '${stageEn[b]}' stage.` };
});
const quoteData = { "인생": [{ text: "모든 꽃은 저마다의 시간에 핀다." }] };
const quoteDataEn = { "life": [{ text: "Every flower blooms in its own time." }] };;
