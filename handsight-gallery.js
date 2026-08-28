(()=>{
  const ensureShowcaseStyle=()=>{
    if(document.getElementById('handsight-showcase-style')) return;
    const style=document.createElement('style');
    style.id='handsight-showcase-style';
    style.textContent=`
        .handsight-showcase{position:relative;margin:6px 0 18px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(6,182,214,.16);border-radius:24px;background:linear-gradient(145deg,rgba(12,38,58,.9),rgba(14,18,40,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18);animation:handsightShowIn .7s both,handsightShowGlow 4.5s ease-in-out infinite}
        .handsight-showcase::before{content:"";position:absolute;width:300px;height:300px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(6,182,214,.14),transparent 68%);pointer-events:none;animation:handsightGlowPulse 4s ease-in-out infinite}
        .handsight-showcase::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 25%,rgba(6,182,214,.06) 50%,transparent 75%);transform:translateX(-140%);animation:handsightSheen 5s ease-in-out infinite;pointer-events:none}
        .handsight-showcase-head{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 14px}
        .handsight-showcase-head>div{display:grid;gap:3px}.handsight-showcase-kicker{font-size:.69rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#67e8f9}.handsight-showcase-head strong{font-size:1.02rem;color:#e0f7ff;letter-spacing:-.01em}
        .handsight-showcase-count{flex:none;padding:6px 10px;border-radius:999px;background:rgba(6,182,214,.1);border:1px solid rgba(6,182,214,.2);color:#67e8f9;font-size:.72rem;font-weight:800;animation:handsightFloat 4.2s ease-in-out infinite}
        .handsight-audio{position:relative;z-index:1;margin:0 0 14px;padding:14px 14px 12px;border:1px solid rgba(6,182,214,.18);border-radius:16px;background:linear-gradient(135deg,rgba(6,182,214,.08),rgba(139,92,246,.06));box-shadow:inset 0 1px 0 rgba(255,255,255,.03)}
        .handsight-audio-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:10px}
        .handsight-audio-head span{font-size:.58rem;font-weight:900;letter-spacing:.14em;color:#67e8f9}
        .handsight-audio-head strong{font-size:.78rem;color:#e0f7ff;font-weight:700}
        .handsight-audio-player{width:100%;height:42px;border-radius:10px;accent-color:#06b6d4}
        .handsight-audio small{display:block;margin-top:8px;font-size:.66rem;color:#9ab8c9}
        .handsight-actions{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:9px;margin:2px 0 18px}
        .handsight-action-btn{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:10px 16px;border:1px solid rgba(6,182,214,.28);border-radius:12px;background:rgba(6,182,214,.08);color:#67e8f9;font-size:.78rem;font-weight:800;text-decoration:none;transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
        .handsight-action-btn:hover{transform:translateY(-2px);border-color:rgba(6,182,214,.45);background:rgba(6,182,214,.16);box-shadow:0 10px 24px rgba(6,182,214,.14)}
        .handsight-action-btn.primary{border-color:rgba(6,182,214,.4);background:linear-gradient(135deg,rgba(6,182,214,.2),rgba(139,92,246,.14));color:#fff}
        .handsight-showcase-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(200px,22vw,240px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(6,182,214,.3) rgba(255,255,255,.035)}
        .handsight-showcase-grid::-webkit-scrollbar{height:7px}.handsight-showcase-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}.handsight-showcase-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(6,182,214,.35),rgba(139,92,246,.35));border-radius:999px}
        .handsight-shot{scroll-snap-align:start;appearance:none;border:0;padding:0;margin:0;text-align:left;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;animation:handsightScreenIn .6s cubic-bezier(.2,.7,.2,1) both,handsightScreenFloat 3.8s ease-in-out infinite}
        .handsight-shot:nth-child(1){animation-delay:.04s,0s}.handsight-shot:nth-child(2){animation-delay:.08s,.2s}.handsight-shot:nth-child(3){animation-delay:.12s,.4s}.handsight-shot:nth-child(4){animation-delay:.16s,.6s}.handsight-shot:nth-child(5){animation-delay:.2s,.8s}
        .handsight-shot:hover{transform:translateY(-5px);border-color:rgba(6,182,214,.3);box-shadow:0 18px 38px rgba(2,8,23,.3)}
        .handsight-shot:focus-visible{outline:3px solid rgba(6,182,214,.45);outline-offset:3px}
        .handsight-shot-media{display:block;position:relative;height:300px;overflow:hidden;background:rgba(10,22,38,.55)}
        .handsight-shot-media:after{content:'↗';position:absolute;right:10px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(2,8,23,.78);border:1px solid rgba(6,182,214,.25);color:#67e8f9;font-size:.85rem;font-weight:800;box-shadow:0 6px 18px rgba(2,8,23,.25)}
        .handsight-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease,filter .35s ease}
        .handsight-shot:hover .handsight-shot-media img{transform:scale(1.03);filter:brightness(1.06)}
        .handsight-shot-copy{display:grid;gap:4px;padding:12px 13px 14px}.handsight-shot-copy b{font-size:.86rem;color:#e0f7ff;line-height:1.2}.handsight-shot-copy small{font-size:.72rem;line-height:1.45;color:#9ab8c9}
        .handsight-showcase-note{position:relative;z-index:1;margin:10px 3px 0;color:#8fb8c9;font-size:.72rem}
        .handsight-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(2,6,23,.88);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;touch-action:none;overscroll-behavior:contain}
        .handsight-lightbox.is-open{opacity:1;visibility:visible}.handsight-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff;transform-origin:50% 50%;will-change:transform;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
        .handsight-zoom-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.78);border:1px solid rgba(255,255,255,.12);color:#cbd5e1;font-size:.66rem;font-weight:700;letter-spacing:.03em;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .25s ease}
        .handsight-lightbox.is-open .handsight-zoom-hint{opacity:1}.handsight-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer;z-index:2}.handsight-zoom-controls{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px}.handsight-zoom-btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.3rem;font-weight:800;line-height:1;cursor:pointer;transition:transform .15s ease,background .15s ease}.handsight-zoom-btn:hover{transform:scale(1.08);background:rgba(6,182,214,.25)}
        @keyframes handsightShowIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes handsightShowGlow{0%,100%{border-color:rgba(6,182,214,.16)}50%{border-color:rgba(6,182,214,.26)}}@keyframes handsightGlowPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes handsightSheen{0%,70%,100%{transform:translateX(-140%)}85%{transform:translateX(140%)}}@keyframes handsightFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes handsightScreenIn{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}@keyframes handsightScreenFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @media(max-width:900px){.handsight-showcase{padding:16px 14px 13px;border-radius:21px}.handsight-showcase-grid{grid-auto-columns:200px}.handsight-shot-media{height:280px}}
        @media(max-width:760px){.handsight-showcase{margin:12px -2px 14px;padding:14px 12px 13px;border-radius:18px}.handsight-showcase-grid{grid-auto-columns:180px;gap:12px}.handsight-shot-media{height:250px}.handsight-showcase-head{align-items:center}.handsight-showcase-count{font-size:.66rem}.handsight-lightbox{padding:12px}.handsight-lightbox img{max-width:96vw;max-height:84vh}.handsight-lightbox-close{right:12px;top:12px}}
        @media(max-width:430px){.handsight-showcase-grid{grid-auto-columns:160px}.handsight-shot-media{height:220px}.handsight-showcase-head strong{font-size:.92rem}.handsight-audio-head strong{font-size:.72rem}}
        @media(prefers-reduced-motion:reduce){.handsight-showcase,.handsight-showcase::before,.handsight-showcase::after,.handsight-showcase-count,.handsight-shot{animation:none!important;transition:none!important}}
      `;
    document.head.appendChild(style);
  };
  const init=()=>{
    ensureShowcaseStyle();
    const card=document.querySelector('.project-card.handsight-enhanced') || [...document.querySelectorAll('.project-card')].find((item)=>(item.querySelector('h3')?.textContent.trim()||'').startsWith('Handsight'));
    if(!card) return;
    const v='20260828-handsight-v5';
    let showcase=card.querySelector('.handsight-showcase');
    if(!showcase){
      const screens=[
        {src:'assets/handsight/handsight-01.png', title:'Live Detection', desc:'Real-time hand tracking & gesture capture via webcam.', alt:'Handsight live hand detection screen'},
        {src:'assets/handsight/handsight-02.png', title:'Sign Classification', desc:'MobileNetV2 classifies gesture into sign-language label.', alt:'Handsight sign classification screen'},
        {src:'assets/handsight/handsight-03.png', title:'Text Output', desc:'Recognized sign instantly converted to readable text.', alt:'Handsight text output screen'},
        {src:'assets/handsight/handsight-04.png', title:'Speech Synthesis', desc:'gTTS generates natural speech from recognized text.', alt:'Handsight speech synthesis screen'},
        {src:'assets/handsight/handsight-05.png', title:'Pipeline Overview', desc:'End-to-end flow: camera → model → speech.', alt:'Handsight pipeline overview screen'},
      ];
      showcase=document.createElement('div');
      showcase.className='handsight-showcase';
      showcase.setAttribute('aria-label','Handsight app showcase');
      showcase.innerHTML=`
      <div class="handsight-showcase-head">
        <div>
          <span class="handsight-showcase-kicker">App Preview · Real-time Demo</span>
          <strong>Handsight Live Experience</strong>
        </div>
        <span class="handsight-showcase-count">${String(screens.length).padStart(2,'0')} screens + audio</span>
      </div>
      <div class="handsight-audio">
        <div class="handsight-audio-head"><span>🔊 REAL SPEECH OUTPUT</span><strong>Tap play to hear the actual gTTS result from Handsight</strong></div>
        <audio class="handsight-audio-player" controls preload="metadata" aria-label="Handsight speech synthesis demo audio">
          <source src="assets/handsight/handsight-demo.mp3?v=${v}" type="audio/mpeg">
          <source src="hasil/suara.mp3?v=${v}" type="audio/mpeg">
          Your browser does not support audio playback.
        </audio>
        <small>Generated by gTTS from recognized sign-language text — real output from the prototype.</small>
      </div>
      <div class="handsight-actions">
        <a class="handsight-action-btn primary" href="https://github.com/Anggito09/Handsight" target="_blank" rel="noreferrer">GitHub Repository ↗</a>
        <a class="handsight-action-btn" href="assets/handsight/handsight-demo.mp3" download>Download Audio ⬇</a>
      </div>
      <div class="handsight-showcase-grid" tabindex="0" aria-label="Scrollable Handsight screen gallery">
        ${screens.map(s=>`
        <button class="handsight-shot" type="button" data-full="${s.src}" aria-label="Open ${s.title} preview">
          <span class="handsight-shot-media"><img src="${s.src}?v=${v}" alt="${s.alt}" loading="lazy" decoding="async"></span>
          <span class="handsight-shot-copy"><b>${s.title}</b><small>${s.desc}</small></span>
        </button>`).join('')}
      </div>
      <div class="handsight-showcase-note">Scroll to explore — click any screenshot for full-size with pinch-to-zoom. Audio is the real gTTS output.</div>
    `;
      const chips=card.querySelector('.chips');
      const details=card.querySelector('.handsight-details');
      if(details) details.after(showcase);
      else if(chips) card.insertBefore(showcase,chips);
      else card.appendChild(showcase);
    }



    const wireLightbox=()=>{
      let lightbox=document.querySelector('.handsight-lightbox');
      if(!lightbox){
        lightbox=document.createElement('div');
        lightbox.className='handsight-lightbox';
        lightbox.setAttribute('role','dialog');
        lightbox.setAttribute('aria-modal','true');
        lightbox.setAttribute('aria-label','Handsight screenshot preview');
        lightbox.innerHTML='<button class="handsight-lightbox-close" type="button" aria-label="Close preview">×</button><img class="handsight-lightbox-img" alt="Handsight screenshot preview"><div class="handsight-zoom-hint">Pinch to zoom · double-tap to zoom · scroll to zoom</div><div class="handsight-zoom-controls"><button class="handsight-zoom-btn" type="button" data-zoom="-">−</button><button class="handsight-zoom-btn" type="button" data-zoom="+">+</button></div>';
        document.body.appendChild(lightbox);
        const img=lightbox.querySelector('img');
        let scale=1,tx=0,ty=0;
        const apply=()=>{img.style.transform=`translate(`+tx+`px,`+ty+`px) scale(`+scale+`)`;};
        const reset=()=>{scale=1;tx=0;ty=0;img.style.transition='';apply();};
        const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';reset();};
        lightbox.querySelector('.handsight-lightbox-close').addEventListener('click',close);
        document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&lightbox.classList.contains('is-open')) close();});
        lightbox.addEventListener('wheel',(event)=>{
          if(!lightbox.classList.contains('is-open')) return;
          event.preventDefault();
          const factor=event.deltaY<0?1.12:0.89;
          scale=Math.min(6,Math.max(1,scale*factor));
          img.style.transition='transform .12s ease';
          apply();
        },{passive:false});
        const pointers={};
        let gesture=null;
        let lastTap=0;
        let suppressClose=false;
        const onPointerDown=(event)=>{
          if(!lightbox.classList.contains('is-open')) return;
          pointers[event.pointerId]={x:event.clientX,y:event.clientY,moved:false};
          const ids=Object.keys(pointers);
          if(ids.length===2){
            const a=ids[0],b=ids[1];
            gesture={type:'pinch',dist:Math.hypot(pointers[a].x-pointers[b].x,pointers[a].y-pointers[b].y),scale,tx,ty,mx:(pointers[a].x+pointers[b].x)/2,my:(pointers[a].y+pointers[b].y)/2};
            img.style.transition='';
          }else if(ids.length===1&&scale>1){
            gesture={type:'pan',x:event.clientX,y:event.clientY,tx,ty};
            img.style.transition='';
          }
        };
        const onPointerMove=(event)=>{
          if(!lightbox.classList.contains('is-open')||!gesture) return;
          if(!pointers[event.pointerId]) return;
          pointers[event.pointerId]={x:event.clientX,y:event.clientY,moved:true};
          const ids=Object.keys(pointers);
          if(ids.length===2){
            const a=ids[0],b=ids[1];
            const d=Math.hypot(pointers[a].x-pointers[b].x,pointers[a].y-pointers[b].y);
            const mx=(pointers[a].x+pointers[b].x)/2;
            const my=(pointers[a].y+pointers[b].y)/2;
            if(gesture.type==='pinch'){
              scale=Math.min(6,Math.max(1,gesture.scale*(d/gesture.dist)));
              tx=gesture.tx+(mx-gesture.mx);
              ty=gesture.ty+(my-gesture.my);
            }else{
              gesture={type:'pinch',dist:d,scale,tx,ty,mx,my};
            }
            apply();
          }else if(ids.length===1){
            if(gesture.type==='pan'){
              tx=gesture.tx+(event.clientX-gesture.x);
              ty=gesture.ty+(event.clientY-gesture.y);
            }else{
              gesture={type:'pan',x:event.clientX,y:event.clientY,tx,ty};
            }
            apply();
          }
          if(ids.length>=1) event.preventDefault();
        };
        const onPointerUp=(event)=>{
          const p=pointers[event.pointerId];
          if(p) delete pointers[event.pointerId];
          if(p&&!p.moved&&Object.keys(pointers).length===0){
            const now=Date.now();
            if(now-lastTap<320){
              scale=scale>1?1:2.2;
              tx=0;ty=0;
              img.style.transition='transform .25s ease';
              apply();
            }
            lastTap=now;
          }
          if(p&&p.moved) suppressClose=true;
          gesture=null;
          if(Object.keys(pointers).length===0) setTimeout(()=>{suppressClose=false;},80);
        };
        lightbox.addEventListener('pointerdown',onPointerDown);
        window.addEventListener('pointermove',onPointerMove);
        window.addEventListener('pointerup',onPointerUp);
        window.addEventListener('pointercancel',onPointerUp);
        lightbox.addEventListener('click',(event)=>{if(event.target===lightbox&&!suppressClose) close();});
        lightbox.querySelectorAll('.handsight-zoom-btn').forEach((btn)=>{
          btn.addEventListener('click',()=>{
            scale=Math.min(6,Math.max(1,scale+(btn.dataset.zoom==='+'?0.6:-0.6)));
            img.style.transition='transform .15s ease';
            apply();
          });
        });
      }
      const openLightbox=(src, alt)=>{
        const lb=document.querySelector('.handsight-lightbox');
        const img=lb.querySelector('img');
        img.src=src;
        img.alt=alt||'Handsight screenshot preview';
        lb.classList.add('is-open');
        document.body.style.overflow='hidden';
      };
      return {lightbox, openLightbox};
    };
    const {openLightbox}=wireLightbox();
    // Wire clicks for both static (index.html) and dynamic showcase
    showcase.querySelectorAll('.handsight-shot').forEach((shot)=>{
      if(shot.dataset.handsightWired) return;
      shot.dataset.handsightWired='1';
      shot.addEventListener('click',()=>{
        const src=(shot.dataset.full||shot.querySelector('img')?.getAttribute('src')||'').split('?')[0]+'?v='+v;
        const alt=shot.querySelector('img')?.alt||'Handsight screenshot preview';
        openLightbox(src, alt);
      });
    });
    showcase.querySelectorAll('.handsight-shot img').forEach((img)=>{
      if(img.dataset.handsightImgWired) return;
      img.dataset.handsightImgWired='1';
      img.addEventListener('error',()=>{
        const src=img.getAttribute('src')||'';
        if(src.startsWith('assets/')){
          const clean=src.split('?')[0];
          img.src='https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/'+clean+'?v='+v;
        }
      },{once:true});
    });
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
