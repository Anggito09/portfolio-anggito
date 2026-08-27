(()=>{
  const cards=document.querySelectorAll('#projects .project-card');
  const card=cards[1];
  if(!card) return;

  card.classList.add('babyops-enhanced');

  const topline=card.querySelector('.project-topline');
  const title=card.querySelector('h3');
  const description=card.querySelector('p');
  const chips=card.querySelector('.chips');
  const link=card.querySelector('.text-link');

  if(topline) topline.textContent='AI · Mobile · Award-Winning Project';
  if(title) title.textContent='BabyOps Infant Cry Intelligence & Health Screening';
  if(description) description.textContent='A mobile application designed to help new parents interpret infant cries using Dunstan Baby Language. The audio pipeline applies MFCC feature extraction and K-Nearest Neighbor classification, while a Forward Chaining expert-system module supports rule-based symptom screening. The product was developed iteratively using the Spiral model to support risk analysis, user feedback, testing, training, and continuous refinement.';
  if(chips) chips.innerHTML=['MFCC','K-Nearest Neighbor','Forward Chaining','Dunstan Baby Language','Spiral Model','Mobile AI'].map(item=>`<span>${item}</span>`).join('');
  if(link) link.remove();

  if(!card.querySelector('.babyops-details')){
    const details=document.createElement('div');
    details.className='babyops-details';
    details.innerHTML=`
      <div class="babyops-detail">
        <span class="babyops-detail-icon">01</span>
        <div><strong>Audio Intelligence</strong><small>MFCC extracts compact acoustic features and KNN classifies cry patterns.</small></div>
      </div>
      <div class="babyops-detail">
        <span class="babyops-detail-icon">02</span>
        <div><strong>Rule-Based Screening</strong><small>Forward Chaining evaluates observed symptoms against predefined expert rules.</small></div>
      </div>
      <div class="babyops-detail">
        <span class="babyops-detail-icon">03</span>
        <div><strong>Iterative Development</strong><small>The Spiral model supports prototyping, risk evaluation, user testing, release, and feedback.</small></div>
      </div>`;
    if(chips) card.insertBefore(details,chips);
    else card.appendChild(details);
  }

  if(!card.querySelector('.babyops-cry-grid')){
    const cryGrid=document.createElement('div');
    cryGrid.className='babyops-cry-grid';
    cryGrid.setAttribute('aria-label','Dunstan Baby Language cry categories');
    cryGrid.innerHTML=`
      <span><b>Neh</b><small>Hungry</small></span>
      <span><b>Owh</b><small>Sleepy</small></span>
      <span><b>Heh</b><small>Discomfort</small></span>
      <span><b>Eairh</b><small>Lower gas</small></span>
      <span><b>Eh</b><small>Needs burping</small></span>`;
    const details=card.querySelector('.babyops-details');
    if(details) details.after(cryGrid);
  }

  const style=document.createElement('style');
  style.textContent=`
    #projects .babyops-enhanced{
      grid-column:span 2;
      position:relative;
      isolation:isolate;
      overflow:hidden;
      border-color:rgba(139,92,246,.22)!important;
      background:
        radial-gradient(circle at 92% 8%,rgba(139,92,246,.13),transparent 28%),
        radial-gradient(circle at 8% 92%,rgba(103,232,249,.08),transparent 30%),
        linear-gradient(145deg,rgba(12,25,48,.98),rgba(8,17,33,.99))!important;
      box-shadow:0 24px 60px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025);
    }
    #projects .babyops-enhanced::after{
      content:"";
      position:absolute;
      inset:-45%;
      z-index:-1;
      background:conic-gradient(from 180deg,transparent 0 76%,rgba(139,92,246,.07) 82%,rgba(103,232,249,.06) 88%,transparent 94%);
      animation:babyopsAmbientSpin 16s linear infinite;
      pointer-events:none;
    }
    #projects .babyops-enhanced .project-topline{
      display:inline-flex;
      align-items:center;
      width:fit-content;
      padding:7px 11px;
      border:1px solid rgba(167,139,250,.2);
      border-radius:999px;
      background:rgba(139,92,246,.07);
      color:#c4b5fd;
      letter-spacing:.1em;
      font-size:.7rem;
      font-weight:800;
      animation:babyopsBadgeFloat 4.6s ease-in-out infinite;
    }
    #projects .babyops-enhanced h3{
      max-width:820px;
      margin-top:15px;
      font-size:clamp(1.8rem,3vw,3rem);
      line-height:1.07;
      letter-spacing:-.045em;
      text-wrap:balance;
      background:linear-gradient(100deg,#fff 12%,#dbeafe 42%,#c4b5fd 67%,#67e8f9 88%);
      background-size:220% 100%;
      -webkit-background-clip:text;
      background-clip:text;
      color:transparent;
      animation:babyopsTitleReveal .85s cubic-bezier(.2,.75,.2,1) both,babyopsTitleFlow 8s ease-in-out 1s infinite;
    }
    #projects .babyops-enhanced>p{
      max-width:940px;
      margin-top:16px;
      font-size:.96rem;
      line-height:1.8;
      text-align:justify!important;
      text-justify:inter-word;
      color:#afbed3;
      animation:babyopsFadeUp .8s .12s both;
    }
    #projects .babyops-details{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
      margin:24px 0 16px;
    }
    #projects .babyops-detail{
      display:grid;
      grid-template-columns:36px minmax(0,1fr);
      gap:11px;
      align-items:start;
      padding:15px;
      border:1px solid rgba(148,163,184,.13);
      border-radius:16px;
      background:rgba(255,255,255,.025);
      transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;
      animation:babyopsFadeUp .7s both;
    }
    #projects .babyops-detail:nth-child(2){animation-delay:.08s}
    #projects .babyops-detail:nth-child(3){animation-delay:.16s}
    #projects .babyops-detail:hover{
      transform:translateY(-4px);
      border-color:rgba(167,139,250,.28);
      background:rgba(139,92,246,.045);
      box-shadow:0 14px 30px rgba(2,8,23,.18);
    }
    #projects .babyops-detail-icon{
      display:grid;
      place-items:center;
      width:34px;
      height:34px;
      border-radius:11px;
      background:linear-gradient(135deg,rgba(139,92,246,.15),rgba(103,232,249,.10));
      border:1px solid rgba(167,139,250,.16);
      color:#c4b5fd;
      font-size:.66rem;
      font-weight:800;
    }
    #projects .babyops-detail strong{display:block;font-size:.86rem;line-height:1.35;color:#f8fbff}
    #projects .babyops-detail small{display:block;margin-top:5px;font-size:.72rem;line-height:1.55;color:#8fa2bd}
    #projects .babyops-cry-grid{
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      gap:8px;
      margin:8px 0 18px;
    }
    #projects .babyops-cry-grid span{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      min-height:66px;
      padding:9px 7px;
      border-radius:14px;
      border:1px solid rgba(103,232,249,.12);
      background:linear-gradient(145deg,rgba(103,232,249,.035),rgba(139,92,246,.035));
      transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;
    }
    #projects .babyops-cry-grid span:hover{transform:translateY(-3px) scale(1.015);border-color:rgba(103,232,249,.28);box-shadow:0 10px 24px rgba(2,8,23,.17)}
    #projects .babyops-cry-grid b{font-size:.82rem;color:#8be9f5;letter-spacing:.02em}
    #projects .babyops-cry-grid small{margin-top:4px;font-size:.61rem;color:#8fa2bd;text-align:center}
    #projects .babyops-enhanced .chips{margin-top:6px}
    #projects .babyops-enhanced .chips span{transition:transform .22s ease,border-color .22s ease,background .22s ease}
    #projects .babyops-enhanced .chips span:hover{transform:translateY(-2px);border-color:rgba(167,139,250,.28);background:rgba(139,92,246,.06)}

    @keyframes babyopsTitleReveal{from{opacity:0;transform:translateY(18px);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}
    @keyframes babyopsTitleFlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
    @keyframes babyopsFadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    @keyframes babyopsBadgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
    @keyframes babyopsAmbientSpin{to{transform:rotate(360deg)}}

    @media(max-width:900px){
      #projects .babyops-enhanced{grid-column:1/-1}
      #projects .babyops-enhanced h3{font-size:clamp(1.65rem,6.8vw,2.45rem)}
      #projects .babyops-details{grid-template-columns:1fr;gap:9px;margin-top:20px}
      #projects .babyops-detail{grid-template-columns:34px 1fr;padding:13px}
      #projects .babyops-cry-grid{grid-template-columns:repeat(5,minmax(58px,1fr));overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
      #projects .babyops-cry-grid::-webkit-scrollbar{display:none}
      #projects .babyops-enhanced>p{font-size:.9rem;line-height:1.72;text-align:justify!important;hyphens:auto}
    }
    @media(max-width:560px){
      #projects .babyops-enhanced{padding:20px!important;border-radius:20px!important}
      #projects .babyops-enhanced .project-topline{font-size:.61rem;letter-spacing:.08em;padding:6px 9px}
      #projects .babyops-enhanced h3{font-size:1.72rem;line-height:1.08;margin-top:13px}
      #projects .babyops-enhanced>p{font-size:.84rem;line-height:1.68}
      #projects .babyops-detail strong{font-size:.8rem}
      #projects .babyops-detail small{font-size:.68rem}
      #projects .babyops-cry-grid{grid-template-columns:repeat(5,72px);gap:7px}
      #projects .babyops-cry-grid span{min-height:62px}
    }
    @media(prefers-reduced-motion:reduce){
      #projects .babyops-enhanced::after,
      #projects .babyops-enhanced h3,
      #projects .babyops-enhanced .project-topline,
      #projects .babyops-enhanced>p,
      #projects .babyops-detail{animation:none!important;transition:none!important}
    }
  `;
  document.head.appendChild(style);
})();