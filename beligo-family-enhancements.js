(()=>{
  const cards=[...document.querySelectorAll('#projects .project-card')];
  const findByTitle=(t)=>cards.find(c=>c.querySelector('h3')?.textContent.trim().toLowerCase()===t.toLowerCase());

  const configs=[
    {
      key:'Beligo',
      topline:'BUSINESS · NATIONAL AWARD · LIVE PLATFORM',
      title:'Beligo — Smart Price Comparison & Shopping Decision Platform',
      desc:'A web-based smart price comparison and personalized recommendation platform that helps users find the best deals across multiple marketplaces based on preferences and budget. The platform analyzes product data, user preferences, and price trends to deliver tailored shopping guidance. Awarded 3rd Place at the National Business Plan Competition.',
      chips:['Smart Price Comparison','Recommendation Engine','Multi-Marketplace','Web Platform','Business Award'],
      link:'https://l1nk.dev/BeligoNasional'
    },
    {
      key:'AirNav Assist',
      topline:'ENTERPRISE SYSTEM · INTERNAL PLATFORM',
      title:'AirNav Assist — Integrated Internal Platform for AirNav Indonesia',
      desc:'An integrated internal platform for AirNav Indonesia Tanjungpinang Branch featuring internal news, video-based learning, organizational structure, e-logbook, and performance checks. Built to streamline internal communication, knowledge sharing, and operational workflows across branch units with a centralized, role-based system.',
      chips:['Enterprise Portal','E-Logbook','Video Learning','Org Structure','Performance Check'],
      link:'https://l1nk.dev/AirNavAssist'
    },
    {
      key:'Mutant',
      topline:'HR INFORMATION SYSTEM · WORKFLOW AUTOMATION',
      title:'Mutant — Employee Mutation Management System',
      desc:'An employee mutation management system for AirNav Indonesia that streamlines transfer requests and approvals, position mapping, and personnel data integration. Designed to support transparent, traceable, and efficient HR workflows with structured approval flows and centralized employee data.',
      chips:['HRIS','Mutation Workflow','Approval Flow','Position Mapping','Personnel Data'],
      link:'https://mutant.punkestu.my.id/'
    },
    {
      key:'Handsight',
      topline:'COMPUTER VISION · ACCESSIBILITY',
      title:'Handsight — Real-Time Sign Language to Speech Translator',
      desc:'A real-time sign-to-speech translation prototype that converts Indonesian sign language gestures into spoken words using MobileNetV2, cvzone, OpenCV, and gTTS. Built to bridge communication gaps and support more inclusive, accessible interaction through computer vision.',
      chips:['Computer Vision','MobileNetV2','OpenCV','cvzone','gTTS','Accessibility'],
      link:'https://l1nk.dev/Handsight'
    }
  ];

  const themeMap={
    'Beligo':'beligo',
    'AirNav Assist':'airnav',
    'Mutant':'mutant',
    'Handsight':'handsight'
  };

  configs.forEach(cfg=>{
    const card=findByTitle(cfg.key);
    if(!card || card.dataset.beligoFamily==='true') return;
    card.dataset.beligoFamily='true';
    const theme=themeMap[cfg.key]||'beligo';
    card.classList.add('beligo-family-card',`theme-${theme}`);

    const topline=card.querySelector('.project-topline');
    const title=card.querySelector('h3');
    const desc=card.querySelector('p');
    const chips=card.querySelector('.chips');
    const link=card.querySelector('.text-link');

    if(topline) topline.textContent=cfg.topline;
    if(title) title.textContent=cfg.title;
    if(desc) desc.textContent=cfg.desc;
    if(chips) chips.innerHTML=cfg.chips.map(c=>`<span>${c}</span>`).join('');
    if(link){
      link.href=cfg.link;
      link.textContent='View Project ↗';
      link.target='_blank';
      link.rel='noreferrer';
    } else if(cfg.link){
      const a=document.createElement('a');
      a.className='text-link';
      a.href=cfg.link;
      a.target='_blank';
      a.rel='noreferrer';
      a.textContent='View Project ↗';
      card.appendChild(a);
    }
  });

  const style=document.createElement('style');
  style.textContent=`
    #projects .beligo-family-card{position:relative;overflow:hidden;isolation:isolate;border-color:rgba(96,165,250,.14)!important;background:linear-gradient(145deg,rgba(15,28,53,.96),rgba(10,21,41,.96))!important;box-shadow:0 14px 32px rgba(2,8,23,.10);transition:transform .32s cubic-bezier(.2,.7,.2,1),border-color .32s ease,box-shadow .32s ease,background .32s ease}
    #projects .beligo-family-card::before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 22%,rgba(96,165,250,.055) 48%,transparent 74%);transform:translateX(-120%);transition:transform .65s ease;pointer-events:none}
    #projects .beligo-family-card:hover{transform:translateY(-6px);border-color:rgba(96,165,250,.28)!important;box-shadow:0 22px 48px rgba(2,8,23,.16)}
    #projects .beligo-family-card:hover::before{transform:translateX(120%)}
    #projects .beligo-family-card .project-topline{display:inline-flex;align-items:center;width:fit-content;padding:6px 10px;border:1px solid rgba(96,165,250,.18);border-radius:999px;background:rgba(96,165,250,.07);color:#93c5fd;font-size:.66rem;font-weight:800;letter-spacing:.09em;animation:beligoToplineFloat 4.2s ease-in-out infinite}
    #projects .beligo-family-card h3{margin:12px 0 12px;font-size:clamp(1.18rem,2.2vw,1.45rem);line-height:1.28;letter-spacing:-.025em;background:linear-gradient(100deg,#fff 15%,#dbeafe 45%,#93c5fd 75%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:beligoTitleIn .6s cubic-bezier(.2,.7,.2,1) both, beligoTitleFlow 7s ease-in-out infinite}
    #projects .beligo-family-card p{margin:0;color:#aebed5;font-size:.92rem;line-height:1.72;text-align:justify!important;text-justify:inter-word;hyphens:auto;-webkit-hyphens:auto;animation:beligoFadeUp .65s .08s both}
    #projects .beligo-family-card .chips{margin-top:14px}
    #projects .beligo-family-card .chips span{transition:transform .22s ease,border-color .22s ease,background .22s ease,color .22s ease}
    #projects .beligo-family-card .chips span:hover{transform:translateY(-2px);border-color:rgba(96,165,250,.28);background:rgba(96,165,250,.09);color:#fff}
    #projects .beligo-family-card .text-link{margin-top:16px;transition:transform .22s ease}
    #projects .beligo-family-card:hover .text-link{transform:translateX(3px)}
    #projects .beligo-family-card .project-topline,#projects .beligo-family-card h3,#projects .beligo-family-card p,#projects .beligo-family-card .chips,#projects .beligo-family-card .text-link{position:relative;z-index:1}
    /* Harmonious differentiated accents — same base, different tints (Beligo warm, AirNav teal, Mutant violet, Handsight emerald) */
    #projects .beligo-family-card.theme-beligo{border-color:rgba(251,191,36,.18)!important;background:linear-gradient(145deg,rgba(30,32,52,.97),rgba(20,26,46,.97))!important}
    #projects .beligo-family-card.theme-beligo .project-topline{border-color:rgba(251,191,36,.2);background:rgba(251,191,36,.08);color:#fde68a}
    #projects .beligo-family-card.theme-beligo h3{background:linear-gradient(100deg,#fff 15%,#fef3c7 42%,#fde68a 72%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
    #projects .beligo-family-card.theme-beligo:hover{border-color:rgba(251,191,36,.28)!important;box-shadow:0 22px 48px rgba(251,191,36,.08),0 22px 48px rgba(2,8,23,.16)}
    #projects .beligo-family-card.theme-beligo .chips span:hover{border-color:rgba(251,191,36,.28);background:rgba(251,191,36,.09)}
    #projects .beligo-family-card.theme-airnav{border-color:rgba(45,212,191,.16)!important;background:linear-gradient(145deg,rgba(14,32,46,.97),rgba(10,26,42,.97))!important}
    #projects .beligo-family-card.theme-airnav .project-topline{border-color:rgba(45,212,191,.2);background:rgba(45,212,191,.08);color:#5eead4}
    #projects .beligo-family-card.theme-airnav h3{background:linear-gradient(100deg,#fff 15%,#ccfbf1 42%,#5eead4 72%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
    #projects .beligo-family-card.theme-airnav:hover{border-color:rgba(45,212,191,.28)!important;box-shadow:0 22px 48px rgba(45,212,191,.08),0 22px 48px rgba(2,8,23,.16)}
    #projects .beligo-family-card.theme-airnav .chips span:hover{border-color:rgba(45,212,191,.28);background:rgba(45,212,191,.09)}
    #projects .beligo-family-card.theme-mutant{border-color:rgba(167,139,250,.16)!important;background:linear-gradient(145deg,rgba(24,26,52,.97),rgba(18,22,46,.97))!important}
    #projects .beligo-family-card.theme-mutant .project-topline{border-color:rgba(167,139,250,.2);background:rgba(167,139,250,.08);color:#c4b5fd}
    #projects .beligo-family-card.theme-mutant h3{background:linear-gradient(100deg,#fff 15%,#ede9fe 42%,#c4b5fd 72%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
    #projects .beligo-family-card.theme-mutant:hover{border-color:rgba(167,139,250,.28)!important;box-shadow:0 22px 48px rgba(167,139,250,.08),0 22px 48px rgba(2,8,23,.16)}
    #projects .beligo-family-card.theme-mutant .chips span:hover{border-color:rgba(167,139,250,.28);background:rgba(167,139,250,.09)}
    #projects .beligo-family-card.theme-handsight{border-color:rgba(52,211,153,.16)!important;background:linear-gradient(145deg,rgba(14,32,42,.97),rgba(10,28,38,.97))!important}
    #projects .beligo-family-card.theme-handsight .project-topline{border-color:rgba(52,211,153,.2);background:rgba(52,211,153,.08);color:#6ee7b7}
    #projects .beligo-family-card.theme-handsight h3{background:linear-gradient(100deg,#fff 15%,#d1fae5 42%,#6ee7b7 72%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
    #projects .beligo-family-card.theme-handsight:hover{border-color:rgba(52,211,153,.28)!important;box-shadow:0 22px 48px rgba(52,211,153,.08),0 22px 48px rgba(2,8,23,.16)}
    #projects .beligo-family-card.theme-handsight .chips span:hover{border-color:rgba(52,211,153,.28);background:rgba(52,211,153,.09)}
    @keyframes beligoTitleIn{from{opacity:0;transform:translateY(12px);filter:blur(6px)}to{opacity:1;transform:none;filter:blur(0)}}
    @keyframes beligoTitleFlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
    @keyframes beligoFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
    @keyframes beligoToplineFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
    @media(max-width:900px){#projects .beligo-family-card h3{font-size:clamp(1.15rem,4.8vw,1.35rem)}#projects .beligo-family-card p{font-size:.88rem;line-height:1.68;text-align:justify!important}}
    @media(max-width:600px){#projects .beligo-family-card{padding:22px!important}#projects .beligo-family-card .project-topline{font-size:.61rem}#projects .beligo-family-card h3{font-size:1.18rem}#projects .beligo-family-card p{font-size:.84rem}}
    @media(prefers-reduced-motion:reduce){#projects .beligo-family-card .project-topline,#projects .beligo-family-card h3,#projects .beligo-family-card p{animation:none!important}#projects .beligo-family-card,#projects .beligo-family-card .chips span,#projects .beligo-family-card .text-link{transition:none!important}#projects .beligo-family-card::before{transition:none!important}}
  `;
  document.head.appendChild(style);
})();
