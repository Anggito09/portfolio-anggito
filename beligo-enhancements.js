(()=>{
  const cards=[...document.querySelectorAll('#projects .project-card')];
  const card=cards.find(item=>item.querySelector('h3')?.textContent.trim().toLowerCase()==='beligo');
  if(!card) return;

  card.classList.add('beligo-enhanced');

  const topline=card.querySelector('.project-topline');
  const title=card.querySelector('h3');
  const description=card.querySelector('p');
  const chips=card.querySelector('.chips');
  const link=card.querySelector('.text-link');

  if(topline) topline.textContent='E-Commerce · Price Intelligence · National Award';
  if(title) title.textContent='Beligo Smart Price Comparison & Shopping Decision Platform';
  if(description) description.textContent='A web-based shopping intelligence platform that helps Indonesian consumers compare product prices across multiple e-commerce sources, evaluate reviews, join product discussions, and discover recommendations aligned with their preferences and budget. Beligo is designed to make online product discovery more efficient, informed, and financially responsible.';
  if(chips) chips.innerHTML=['Price Comparison','Product Reviews','Smart Recommendation','Community Discussion','E-Commerce','Web Platform'].map(item=>`<span>${item}</span>`).join('');

  if(link){
    link.textContent='View Beligo Project ↗';
  }

  if(!card.querySelector('.beligo-award')){
    const award=document.createElement('div');
    award.className='beligo-award';
    award.innerHTML=`<span class="beligo-award-icon">🏆</span><div><small>ACHIEVEMENT</small><strong>3rd Place · National Business Plan Competition</strong><em>Product strategy, market value, and digital commerce innovation</em></div>`;
    if(description) description.after(award);
  }

  if(!card.querySelector('.beligo-details')){
    const details=document.createElement('div');
    details.className='beligo-details';
    details.innerHTML=`
      <div class="beligo-detail">
        <span class="beligo-detail-icon">01</span>
        <div><strong>Compare Smarter</strong><small>Consolidates product and pricing information to help users identify better-value purchasing options.</small></div>
      </div>
      <div class="beligo-detail">
        <span class="beligo-detail-icon">02</span>
        <div><strong>Decide with Confidence</strong><small>Combines product reviews and discussion spaces so purchasing decisions are supported by richer context.</small></div>
      </div>
      <div class="beligo-detail">
        <span class="beligo-detail-icon">03</span>
        <div><strong>Personalized Discovery</strong><small>Surfaces relevant recommendations based on user preferences, needs, and financial considerations.</small></div>
      </div>`;
    if(chips) card.insertBefore(details,chips);
    else card.appendChild(details);
  }

  if(!card.querySelector('.beligo-objectives')){
    const objectives=document.createElement('div');
    objectives.className='beligo-objectives';
    objectives.innerHTML=`
      <div class="beligo-objectives-head"><span>PRODUCT OBJECTIVES</span><strong>Built for informed and efficient online shopping</strong></div>
      <div class="beligo-objective-grid">
        <span><b>01</b><small>Support smarter purchasing decisions through transparent price comparison.</small></span>
        <span><b>02</b><small>Reduce product-search friction by combining prices, reviews, and community insight.</small></span>
        <span><b>03</b><small>Bring multi-store information and decision-support features into one experience.</small></span>
      </div>`;
    const details=card.querySelector('.beligo-details');
    if(details) details.after(objectives);
  }

  const style=document.createElement('style');
  style.textContent=`
    #projects .beligo-enhanced{grid-column:span 2;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(52,211,153,.22)!important;background:radial-gradient(circle at 92% 7%,rgba(16,185,129,.13),transparent 29%),radial-gradient(circle at 7% 94%,rgba(245,158,11,.08),transparent 31%),linear-gradient(145deg,rgba(8,27,31,.98),rgba(8,17,29,.99))!important;box-shadow:0 24px 60px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
    #projects .beligo-enhanced::after{content:"";position:absolute;inset:-48%;z-index:-1;background:conic-gradient(from 150deg,transparent 0 75%,rgba(52,211,153,.07) 82%,rgba(251,191,36,.05) 89%,transparent 95%);animation:beligoAmbientSpin 18s linear infinite;pointer-events:none}
    #projects .beligo-enhanced .project-topline{display:inline-flex;align-items:center;width:fit-content;padding:7px 11px;border:1px solid rgba(52,211,153,.2);border-radius:999px;background:rgba(16,185,129,.07);color:#6ee7b7;letter-spacing:.1em;font-size:.7rem;font-weight:800;animation:beligoBadgeFloat 4.8s ease-in-out infinite}
    #projects .beligo-enhanced h3{max-width:850px;margin-top:15px;font-size:clamp(1.8rem,3vw,3rem);line-height:1.07;letter-spacing:-.045em;text-wrap:balance;background:linear-gradient(100deg,#fff 10%,#d1fae5 40%,#6ee7b7 67%,#fcd34d 92%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:beligoTitleReveal .85s cubic-bezier(.2,.75,.2,1) both,beligoTitleFlow 8.5s ease-in-out 1s infinite}
    #projects .beligo-enhanced>p{max-width:960px;margin-top:16px;font-size:.96rem;line-height:1.8;text-align:justify!important;text-justify:inter-word;color:#afc1ca;animation:beligoFadeUp .8s .12s both}
    #projects .beligo-award{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(251,191,36,.2);border-radius:15px;background:linear-gradient(135deg,rgba(251,191,36,.09),rgba(245,158,11,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:beligoFadeUp .75s .2s both}
    #projects .beligo-award::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:beligoAwardShine 4s ease-in-out infinite}
    #projects .beligo-award-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(251,191,36,.12);font-size:1.25rem}
    #projects .beligo-award small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#fbbf24}#projects .beligo-award strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#fff4c7}#projects .beligo-award em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#aebbd0}
    #projects .beligo-details{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0 16px}
    #projects .beligo-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(148,163,184,.13);border-radius:16px;background:rgba(255,255,255,.025);transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:beligoFadeUp .7s both}
    #projects .beligo-detail:nth-child(2){animation-delay:.08s}#projects .beligo-detail:nth-child(3){animation-delay:.16s}#projects .beligo-detail:hover{transform:translateY(-4px);border-color:rgba(52,211,153,.3);background:rgba(16,185,129,.045);box-shadow:0 14px 30px rgba(2,8,23,.18)}
    #projects .beligo-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(16,185,129,.15),rgba(245,158,11,.09));border:1px solid rgba(52,211,153,.17);color:#6ee7b7;font-size:.66rem;font-weight:800;animation:beligoIconGlow 3.2s ease-in-out infinite}#projects .beligo-detail:nth-child(2) .beligo-detail-icon{animation-delay:.5s}#projects .beligo-detail:nth-child(3) .beligo-detail-icon{animation-delay:1s}
    #projects .beligo-detail strong{display:block;font-size:.86rem;line-height:1.35;color:#f8fbff}#projects .beligo-detail small{display:block;margin-top:5px;font-size:.72rem;line-height:1.55;color:#91a7b7;text-align:justify;text-justify:inter-word}
    #projects .beligo-objectives{margin:9px 0 18px;padding:16px;border:1px solid rgba(52,211,153,.13);border-radius:17px;background:linear-gradient(145deg,rgba(16,185,129,.035),rgba(245,158,11,.025));animation:beligoFadeUp .75s .18s both}
    #projects .beligo-objectives-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:13px}#projects .beligo-objectives-head span{font-size:.58rem;font-weight:900;letter-spacing:.14em;color:#34d399}#projects .beligo-objectives-head strong{font-size:.78rem;color:#dce8e8;font-weight:700;text-align:right}
    #projects .beligo-objective-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}#projects .beligo-objective-grid span{display:grid;grid-template-columns:27px 1fr;gap:9px;align-items:start;padding:10px;border-radius:12px;background:rgba(255,255,255,.025);border:1px solid rgba(148,163,184,.08)}#projects .beligo-objective-grid b{display:grid;place-items:center;width:25px;height:25px;border-radius:8px;background:rgba(52,211,153,.08);color:#6ee7b7;font-size:.58rem}#projects .beligo-objective-grid small{font-size:.67rem;line-height:1.5;color:#91a7b7;text-align:justify;text-justify:inter-word}
    #projects .beligo-enhanced .chips{margin-top:7px}#projects .beligo-enhanced .chips span{transition:transform .22s ease,border-color .22s ease,background .22s ease}#projects .beligo-enhanced .chips span:hover{transform:translateY(-2px);border-color:rgba(52,211,153,.28);background:rgba(16,185,129,.06)}
    #projects .beligo-enhanced .text-link{display:inline-flex;margin-top:14px;color:#6ee7b7;transition:transform .22s ease,color .22s ease}#projects .beligo-enhanced .text-link:hover{transform:translateX(4px);color:#a7f3d0}
    @keyframes beligoTitleReveal{from{opacity:0;transform:translateY(18px);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}@keyframes beligoTitleFlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}@keyframes beligoFadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes beligoBadgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes beligoAmbientSpin{to{transform:rotate(360deg)}}@keyframes beligoAwardShine{0%,66%,100%{transform:translateX(-130%)}82%{transform:translateX(130%)}}@keyframes beligoIconGlow{0%,100%{box-shadow:0 0 0 rgba(52,211,153,0)}50%{box-shadow:0 0 14px rgba(52,211,153,.28),0 0 0 4px rgba(52,211,153,.06)}}
    @media(max-width:900px){#projects .beligo-enhanced{grid-column:1/-1}#projects .beligo-enhanced h3{font-size:clamp(1.65rem,6.8vw,2.45rem)}#projects .beligo-details,#projects .beligo-objective-grid{grid-template-columns:1fr;gap:9px}#projects .beligo-details{margin-top:20px}#projects .beligo-detail{grid-template-columns:34px 1fr;padding:13px}#projects .beligo-enhanced>p{font-size:.9rem;line-height:1.72;text-align:justify!important;hyphens:auto}#projects .beligo-objectives-head{align-items:flex-start;flex-direction:column;gap:5px}#projects .beligo-objectives-head strong{text-align:left}}
    @media(max-width:560px){#projects .beligo-enhanced{padding:20px!important;border-radius:20px!important}#projects .beligo-enhanced .project-topline{font-size:.61rem;letter-spacing:.08em;padding:6px 9px}#projects .beligo-enhanced h3{font-size:1.72rem;line-height:1.08;margin-top:13px}#projects .beligo-enhanced>p{font-size:.84rem;line-height:1.68}#projects .beligo-award{width:100%;padding:10px 12px}#projects .beligo-award strong{font-size:.72rem}#projects .beligo-detail strong{font-size:.8rem}#projects .beligo-detail small{font-size:.68rem}#projects .beligo-objectives{padding:13px}#projects .beligo-objective-grid small{font-size:.65rem}}
    @media(prefers-reduced-motion:reduce){#projects .beligo-enhanced::after,#projects .beligo-enhanced h3,#projects .beligo-enhanced .project-topline,#projects .beligo-enhanced>p,#projects .beligo-award,#projects .beligo-detail,#projects .beligo-objectives,#projects .beligo-detail-icon{animation:none!important;transition:none!important}}
  `;
  document.head.appendChild(style);
})();
