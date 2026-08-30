(()=>{
  const ensureStyle=()=>{
    if(document.getElementById('handsight-style')) return;
    const style=document.createElement('style');
    style.id='handsight-style';
    style.textContent=`
        .project-card.handsight-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(6,182,214,.22)!important;background:radial-gradient(circle at 88% 10%,rgba(6,182,214,.14),transparent 28%),radial-gradient(circle at 10% 94%,rgba(139,92,246,.09),transparent 30%),linear-gradient(145deg,rgba(6,28,44,.98),rgba(10,18,36,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
        .project-card.handsight-enhanced::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(6,182,214,.07) 82%,rgba(139,92,246,.06) 88%,transparent 94%);animation:handsightAmbientSpin 16s linear infinite;pointer-events:none}
        .handsight-enhanced .handsight-subtitle{margin:-2px 0 14px;font-size:.9rem;font-weight:800;letter-spacing:.02em;color:#67e8f9;text-shadow:0 0 18px rgba(6,182,214,.25);animation:handsightSubtitleGlow 3.6s ease-in-out infinite}
        .handsight-enhanced .handsight-title{position:relative;display:inline-block;max-width:860px;background:linear-gradient(100deg,#fff 6%,#e0f2fe 22%,#67e8f9 42%,#38bdf8 62%,#c4b5fd 78%,#fff 92%);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:handsightTitleShine 4.2s linear infinite,handsightTitleFloat 3.8s ease-in-out infinite,handsightTitleIn .85s cubic-bezier(.2,.7,.2,1) both;filter:drop-shadow(0 0 14px rgba(6,182,214,.28))}
        .handsight-enhanced .handsight-title::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:3px;border-radius:999px;background:linear-gradient(90deg,#06b6d4,#38bdf8,#8b5cf6,transparent);transform:scaleX(0);transform-origin:left;animation:handsightTitleLine 2.4s ease-in-out infinite}
        .handsight-enhanced .handsight-title:hover{filter:drop-shadow(0 0 18px rgba(6,182,214,.6)) brightness(1.08)}
        .handsight-enhanced .handsight-desc{max-width:980px;margin:10px 0 6px!important;font-size:.95rem!important;line-height:1.78!important;color:#cfeef8!important;text-align:justify!important;text-justify:inter-word!important;hyphens:none!important;-webkit-hyphens:none!important;word-break:normal!important;overflow-wrap:break-word!important;animation:handsightDescIn .7s .18s both}
        #projects .handsight-badge{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(6,182,214,.22);border-radius:15px;background:linear-gradient(135deg,rgba(6,182,214,.09),rgba(139,92,246,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:handsightBadgeIn .75s .2s both}
        #projects .handsight-badge::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:handsightAwardShine 4s ease-in-out infinite}
        #projects .handsight-badge-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(6,182,214,.12);font-size:1.25rem}
        #projects .handsight-badge small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#67e8f9}
        #projects .handsight-badge strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#e0f7ff}
        #projects .handsight-badge em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#9ab8c9}
        #projects .handsight-badge-link{flex:none;margin-left:auto;padding:7px 11px;border:1px solid rgba(6,182,214,.25);border-radius:999px;background:rgba(6,182,214,.1);color:#67e8f9;font-size:.68rem;font-weight:800;text-decoration:none;transition:transform .22s ease,background .22s ease,color .22s ease}
        #projects .handsight-badge-link:hover{transform:translateY(-2px);background:rgba(6,182,214,.18);color:#e0f7ff}
        #projects .handsight-details{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:22px 0 16px}
        #projects .handsight-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(6,182,214,.14);border-radius:16px;background:linear-gradient(145deg,rgba(12,38,58,.55),rgba(14,24,48,.45));transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:handsightDetailIn .7s both}
        #projects .handsight-detail:nth-child(2){animation-delay:.08s}#projects .handsight-detail:nth-child(3){animation-delay:.16s}#projects .handsight-detail:nth-child(4){animation-delay:.24s}
        #projects .handsight-detail:hover{transform:translateY(-4px);border-color:rgba(6,182,214,.34);background:linear-gradient(145deg,rgba(14,48,72,.8),rgba(18,32,64,.7));box-shadow:0 14px 30px rgba(2,8,23,.2)}
        #projects .handsight-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(6,182,214,.16),rgba(139,92,246,.12));border:1px solid rgba(6,182,214,.18);color:#67e8f9;font-size:.66rem;font-weight:800;animation:handsightIconGlow 3s ease-in-out infinite}
        #projects .handsight-detail:nth-child(2) .handsight-detail-icon{animation-delay:.5s}#projects .handsight-detail:nth-child(3) .handsight-detail-icon{animation-delay:1s}#projects .handsight-detail:nth-child(4) .handsight-detail-icon{animation-delay:1.5s}
        #projects .handsight-detail strong{display:block;font-size:.84rem;line-height:1.35;color:#e0f7ff}#projects .handsight-detail small{display:block;margin-top:5px;font-size:.7rem;line-height:1.55;color:#9ab8c9}
        #projects .handsight-enhanced .chips{margin-top:7px}#projects .handsight-enhanced .chips span{transition:transform .22s ease,border-color .22s ease,background .22s ease}#projects .handsight-enhanced .chips span:hover{transform:translateY(-2px);border-color:rgba(6,182,214,.28);background:rgba(6,182,214,.06)}
        @keyframes handsightAmbientSpin{to{transform:rotate(360deg)}}@keyframes handsightSubtitleGlow{0%,100%{opacity:.85;text-shadow:0 0 12px rgba(6,182,214,.18)}50%{opacity:1;text-shadow:0 0 22px rgba(6,182,214,.4)}}
        @keyframes handsightTitleShine{0%{background-position:0% 50%}100%{background-position:300% 50%}}@keyframes handsightTitleLine{0%{transform:scaleX(0);opacity:.3}45%{transform:scaleX(1);opacity:1}70%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}
        @keyframes handsightTitleFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}@keyframes handsightTitleIn{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}@keyframes handsightDescIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes handsightBadgeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes handsightAwardShine{0%,66%,100%{transform:translateX(-130%)}82%{transform:translateX(130%)}}
        @keyframes handsightDetailIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes handsightIconGlow{0%,100%{box-shadow:0 0 0 rgba(6,182,214,0)}50%{box-shadow:0 0 14px rgba(6,182,214,.3),0 0 0 4px rgba(6,182,214,.07)}}
        @media(max-width:900px){#projects .handsight-details{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:20px}#projects .handsight-detail{grid-template-columns:34px 1fr;padding:13px}}
        @media(max-width:760px){.project-card.handsight-enhanced{grid-column:auto}#projects .handsight-badge{width:100%;padding:10px 12px}#projects .handsight-badge-link{margin-left:0}}
        @media(max-width:560px){#projects .handsight-details{grid-template-columns:1fr;gap:9px}}
        @media(prefers-reduced-motion:reduce){.project-card.handsight-enhanced::after,.handsight-enhanced .handsight-subtitle,.handsight-enhanced .handsight-title,.handsight-enhanced .handsight-title::after,#projects .handsight-badge,#projects .handsight-detail,#projects .handsight-detail-icon{animation:none!important;transition:none!important}}
      `;
    document.head.appendChild(style);
  };
  const init=()=>{
    const card=document.querySelector('.project-card.handsight-enhanced') || [...document.querySelectorAll('.project-card')].find((item)=>(item.querySelector('h3')?.textContent.trim()||'').startsWith('Handsight'));
    if(!card){ ensureStyle(); return; }
    if(card.classList.contains('handsight-enhanced')){ ensureStyle(); return; }
    card.classList.add('handsight-enhanced');

    const oldLink=card.querySelector('.text-link');
    if(oldLink) oldLink.remove();

    const topline=card.querySelector('.project-topline');
    if(topline) topline.textContent='COMPUTER VISION · REAL-TIME AI · ACCESSIBILITY';

    const title=card.querySelector('h3');
    if(title){
      title.classList.add('handsight-title');
      title.textContent='Handsight — Real-Time Sign Language to Speech Translator';
      if(!card.querySelector('.handsight-subtitle')){
        const sub=document.createElement('div');
        sub.className='handsight-subtitle';
        sub.textContent='Bridging sign language and spoken communication with on-device vision + speech synthesis';
        title.insertAdjacentElement('afterend', sub);
      }
    }

    const desc=card.querySelector('p');
    if(desc){
      desc.textContent='A real-time sign-language translation prototype that captures hand gestures via webcam, classifies them with a MobileNetV2 model through cvzone and OpenCV, and instantly converts the recognized text into natural speech using gTTS — designed to make everyday communication more inclusive and accessible.';
      if(!card.querySelector('.handsight-badge')){
        const badge=document.createElement('div');
        badge.className='handsight-badge';
        badge.innerHTML=`<span class="handsight-badge-icon">🤟</span><div><small>COMPUTER VISION · ACCESSIBILITY PROTOTYPE</small><strong>Sign → Text → Speech in real time</strong><em>MobileNetV2 · cvzone · OpenCV · gTTS · webcam pipeline</em></div><a class="handsight-badge-link" href="https://github.com/Anggito09/Handsight" target="_blank" rel="noreferrer">GitHub ↗</a>`;
        desc.after(badge);
      }
    }

    const chips=card.querySelector('.chips');
    if(chips){
      chips.innerHTML=['MobileNetV2','OpenCV','cvzone','gTTS','Real-time Inference','Accessibility'].map(x=>`<span>${x}</span>`).join('');
    }

    if(!card.querySelector('.handsight-details')){
      const details=document.createElement('div');
      details.className='handsight-details';
      details.innerHTML=`
        <div class="handsight-detail">
          <span class="handsight-detail-icon">01</span>
          <div><strong>Real-time Hand Tracking</strong><small>cvzone + OpenCV detects and crops hand regions from live webcam feed with low latency.</small></div>
        </div>
        <div class="handsight-detail">
          <span class="handsight-detail-icon">02</span>
          <div><strong>MobileNetV2 Classification</strong><small>Lightweight CNN classifies gesture images into sign-language labels optimized for real-time use.</small></div>
        </div>
        <div class="handsight-detail">
          <span class="handsight-detail-icon">03</span>
          <div><strong>Sign → Speech Pipeline</strong><small>Recognized text is synthesized into natural speech instantly via gTTS for audible output.</small></div>
        </div>
        <div class="handsight-detail">
          <span class="handsight-detail-icon">04</span>
          <div><strong>Inclusive by Design</strong><small>Built to reduce communication barriers between signers and non-signers in daily interactions.</small></div>
        </div>`;
      const badge=card.querySelector('.handsight-badge');
      const anchor=badge||card.querySelector('p');
      if(anchor) anchor.after(details);
      else card.insertBefore(details, chips || null);
    }

    ensureStyle();
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
