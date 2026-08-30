(()=>{
  const init=()=>{
    const card=[...document.querySelectorAll('.project-card')].find((item)=>item.querySelector('h3')?.textContent.trim().startsWith('Smart Ambulance'));
    if(!card || card.classList.contains('ambulance-enhanced')) return;

    card.classList.add('ambulance-enhanced');

    const oldLink=card.querySelector('.text-link');
    if(oldLink) oldLink.remove();

    const title=card.querySelector('h3');
    if(title){
      title.classList.add('ambulance-title');
      if(!card.querySelector('.ambulance-project-subtitle')){
        const subtitle=document.createElement('div');
        subtitle.className='ambulance-project-subtitle';
        subtitle.textContent='AI-powered Online Ambulance Booking & Emergency Response';
        title.insertAdjacentElement('afterend', subtitle);
      }
    }

    const desc=card.querySelector('p');
    if(desc && !card.querySelector('.ambulance-badge')){
      const badge=document.createElement('div');
      badge.className='ambulance-badge';
      badge.innerHTML=`<span class="ambulance-badge-icon">🚑</span><div><small>MOBILE HEALTHCARE · AI + CLOUD + MOBILE</small><strong>Online Ambulance Booking &amp; Emergency Response</strong><em>Face recognition · location tracking · real-time monitoring · 24/7 free booking</em></div>`;
      desc.after(badge);
    } else if(card.querySelector('.ambulance-badge')){
      card.querySelector('.ambulance-badge-link')?.remove();
    }

    if(!card.querySelector('.ambulance-background')){
      const bg=document.createElement('div');
      bg.className='ambulance-background';
      bg.innerHTML=`<div class="ambulance-bg-head"><span>BACKGROUND &amp; PURPOSE</span></div><p>Built to close Indonesia emergency response gap where only about half of 1.5 million annual emergencies reach hospital care, Smart Ambulance replaces slow and less accessible phone calls with fast and visible online booking. It digitizes ambulance dispatch to shorten response time during the critical golden period, delivering faster medical assistance and better survival outcomes.</p>`;
      const badge=card.querySelector('.ambulance-badge');
      (badge||desc).after(bg);
    }

    const chips=card.querySelector('.chips');
    if(!card.querySelector('.ambulance-details')){
      const details=document.createElement('div');
      details.className='ambulance-details';
      details.innerHTML=`
        <div class="ambulance-detail">
          <span class="ambulance-detail-icon">01</span>
          <div><strong>Face Recognition</strong><small>Secure patient identification during booking and pickup.</small></div>
        </div>
        <div class="ambulance-detail">
          <span class="ambulance-detail-icon">02</span>
          <div><strong>Location Tracking</strong><small>Dispatches the nearest available ambulance in real time.</small></div>
        </div>
        <div class="ambulance-detail">
          <span class="ambulance-detail-icon">03</span>
          <div><strong>Real-time Monitoring</strong><small>Patient condition is monitored live during transport.</small></div>
        </div>
        <div class="ambulance-detail">
          <span class="ambulance-detail-icon">04</span>
          <div><strong>24/7 Booking</strong><small>Free-of-charge ambulance booking available around the clock.</small></div>
        </div>`;
      card.insertBefore(details, chips || null);
    }

    if(!card.querySelector('.ambulance-edge')){
      const edge=document.createElement('div');
      edge.className='ambulance-edge';
      edge.innerHTML=`<span class="ambulance-edge-icon">⚡</span><div><small>COMPETITIVE ADVANTAGE</small><strong>Benchmarked ~90% ahead</strong><em>of Jaki, Go Ambulance &amp; Laika through ML, Cloud Computing &amp; Mobile Development testing.</em></div>`;
      const details=card.querySelector('.ambulance-details');
      (details||chips).after(edge);
    }

    if(!document.getElementById('ambulance-style')){
      const style=document.createElement('style');
      style.id='ambulance-style';
      style.textContent=`
        .project-card.ambulance-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(251,113,133,.22)!important;background:radial-gradient(circle at 90% 8%,rgba(244,63,94,.14),transparent 28%),radial-gradient(circle at 10% 94%,rgba(59,130,246,.09),transparent 30%),linear-gradient(145deg,rgba(40,14,26,.98),rgba(18,10,22,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
        .project-card.ambulance-enhanced::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(244,63,94,.07) 82%,rgba(59,130,246,.06) 88%,transparent 94%);animation:ambulanceAmbientSpin 16s linear infinite;pointer-events:none}
        .ambulance-enhanced .ambulance-project-subtitle{margin:-2px 0 14px;font-size:.9rem;font-weight:800;letter-spacing:.02em;color:#fda4af;text-shadow:0 0 18px rgba(244,63,94,.25);animation:ambulanceSubtitleGlow 3.6s ease-in-out infinite}
        .ambulance-enhanced .ambulance-title{position:relative;display:inline-block;background:linear-gradient(100deg,#fff 8%,#ffe4e6 30%,#fda4af 50%,#93c5fd 70%,#fff 92%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:ambulanceTitleShine 5.5s linear infinite}
        .ambulance-enhanced .ambulance-title::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:3px;border-radius:999px;background:linear-gradient(90deg,#fb7185,#60a5fa,transparent);transform:scaleX(0);transform-origin:left;animation:ambulanceTitleLine 2.6s ease-in-out infinite}
        .ambulance-enhanced .ambulance-title:hover{filter:drop-shadow(0 0 16px rgba(244,63,94,.55))}
        #projects .ambulance-badge{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(251,113,133,.22);border-radius:15px;background:linear-gradient(135deg,rgba(244,63,94,.09),rgba(59,130,246,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:ambulanceBadgeIn .75s .2s both}
        #projects .ambulance-badge::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:ambulanceAwardShine 4s ease-in-out infinite}
        #projects .ambulance-badge-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(244,63,94,.12);font-size:1.25rem}
        #projects .ambulance-badge small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#fb7185}
        #projects .ambulance-badge strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#fff0f2}
        #projects .ambulance-badge em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#d9a3ad}
        #projects .ambulance-badge-link{flex:none;margin-left:auto;padding:7px 11px;border:1px solid rgba(251,113,133,.25);border-radius:999px;background:rgba(244,63,94,.1);color:#fda4af;font-size:.68rem;font-weight:800;text-decoration:none;transition:transform .22s ease,background .22s ease,color .22s ease}
        #projects .ambulance-badge-link:hover{transform:translateY(-2px);background:rgba(244,63,94,.18);color:#ffe4e6}
        #projects .ambulance-background{margin:16px 0 4px;padding:14px 16px;border:1px solid rgba(251,113,133,.13);border-radius:16px;background:linear-gradient(145deg,rgba(244,63,94,.035),rgba(59,130,246,.025));animation:ambulanceBadgeIn .75s .26s both}
        #projects .ambulance-bg-head{font-size:.58rem;font-weight:900;letter-spacing:.14em;color:#fb7185;margin-bottom:8px}
        #projects .ambulance-background p{margin:0;font-size:.86rem;line-height:1.72;color:#d9b6bd;text-align:justify;text-justify:inter-word;hyphens:none;-webkit-hyphens:none;word-break:normal;overflow-wrap:break-word}
        #projects .ambulance-details{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:22px 0 16px}
        #projects .ambulance-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(251,113,133,.14);border-radius:16px;background:linear-gradient(145deg,rgba(60,20,36,.55),rgba(28,14,32,.45));transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:ambulanceDetailIn .7s both}
        #projects .ambulance-detail:nth-child(2){animation-delay:.08s}#projects .ambulance-detail:nth-child(3){animation-delay:.16s}#projects .ambulance-detail:nth-child(4){animation-delay:.24s}
        #projects .ambulance-detail:hover{transform:translateY(-4px);border-color:rgba(251,113,133,.34);background:linear-gradient(145deg,rgba(70,24,42,.8),rgba(36,18,40,.7));box-shadow:0 14px 30px rgba(2,8,23,.2)}
        #projects .ambulance-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(244,63,94,.16),rgba(59,130,246,.12));border:1px solid rgba(251,113,133,.18);color:#fda4af;font-size:.66rem;font-weight:800;animation:ambulanceIconGlow 3s ease-in-out infinite}
        #projects .ambulance-detail:nth-child(2) .ambulance-detail-icon{animation-delay:.5s}#projects .ambulance-detail:nth-child(3) .ambulance-detail-icon{animation-delay:1s}#projects .ambulance-detail:nth-child(4) .ambulance-detail-icon{animation-delay:1.5s}
        #projects .ambulance-detail strong{display:block;font-size:.84rem;line-height:1.35;color:#fff0f2}#projects .ambulance-detail small{display:block;margin-top:5px;font-size:.7rem;line-height:1.55;color:#d9a3ad}
        #projects .ambulance-edge{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:6px 0 18px;padding:12px 15px;border:1px solid rgba(251,191,36,.2);border-radius:15px;background:linear-gradient(135deg,rgba(251,191,36,.09),rgba(244,63,94,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:ambulanceBadgeIn .75s .3s both}
        #projects .ambulance-edge::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:ambulanceAwardShine 4s ease-in-out infinite}
        #projects .ambulance-edge-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(251,191,36,.12);font-size:1.25rem}
        #projects .ambulance-edge small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#fbbf24}
        #projects .ambulance-edge strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#fff4c7}
        #projects .ambulance-edge em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#e3c9a8}
        #projects .ambulance-enhanced .chips{margin-top:7px}#projects .ambulance-enhanced .chips span{transition:transform .22s ease,border-color .22s ease,background .22s ease}#projects .ambulance-enhanced .chips span:hover{transform:translateY(-2px);border-color:rgba(251,113,133,.28);background:rgba(244,63,94,.06)}
        @keyframes ambulanceAmbientSpin{to{transform:rotate(360deg)}}@keyframes ambulanceSubtitleGlow{0%,100%{opacity:.85;text-shadow:0 0 12px rgba(244,63,94,.18)}50%{opacity:1;text-shadow:0 0 22px rgba(244,63,94,.4)}}
        @keyframes ambulanceTitleShine{0%{background-position:0% 50%}100%{background-position:260% 50%}}@keyframes ambulanceTitleLine{0%{transform:scaleX(0);opacity:.3}45%{transform:scaleX(1);opacity:1}70%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}
        @keyframes ambulanceBadgeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes ambulanceAwardShine{0%,66%,100%{transform:translateX(-130%)}82%{transform:translateX(130%)}}
        @keyframes ambulanceDetailIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes ambulanceIconGlow{0%,100%{box-shadow:0 0 0 rgba(244,63,94,0)}50%{box-shadow:0 0 14px rgba(244,63,94,.3),0 0 0 4px rgba(244,63,94,.07)}}
        @media(max-width:900px){#projects .ambulance-details{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:20px}#projects .ambulance-detail{grid-template-columns:34px 1fr;padding:13px}}
        @media(max-width:760px){.project-card.ambulance-enhanced{grid-column:auto}.ambulance-badge,.ambulance-edge{width:100%;padding:10px 12px}.ambulance-badge-link{margin-left:0}}
        @media(max-width:560px){#projects .ambulance-details{grid-template-columns:1fr;gap:9px}#projects .ambulance-background p{font-size:.82rem}}
        @media(prefers-reduced-motion:reduce){.project-card.ambulance-enhanced::after,.ambulance-enhanced .ambulance-project-subtitle,.ambulance-enhanced .ambulance-title,.ambulance-enhanced .ambulance-title::after,#projects .ambulance-badge,#projects .ambulance-background,#projects .ambulance-detail,#projects .ambulance-detail-icon,#projects .ambulance-edge{animation:none!important;transition:none!important}}
      `;
      document.head.appendChild(style);
    }
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();