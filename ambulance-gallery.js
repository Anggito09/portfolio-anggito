(()=>{
  const init=()=>{
    const card=[...document.querySelectorAll('.project-card')].find((item)=>item.querySelector('h3')?.textContent.trim().startsWith('Smart Ambulance'));
    if(!card || card.querySelector('.ambulance-showcase')) return;

    const screens=[
      {src:'assets/ambulance/ambulance-login.webp', title:'Login', desc:'Secure sign-in for patients and responders.', alt:'Smart Ambulance login screen'},
      {src:'assets/ambulance/ambulance-signup.webp', title:'Sign Up', desc:'Quick account registration.', alt:'Smart Ambulance sign up screen'},
      {src:'assets/ambulance/ambulance-home.webp', title:'Homepage', desc:'Main menu for booking and emergency access.', alt:'Smart Ambulance homepage screen'},
      {src:'assets/ambulance/ambulance-book.webp', title:'Book Ambulance', desc:'Request an ambulance for urgent needs.', alt:'Smart Ambulance book ambulance screen'},
      {src:'assets/ambulance/ambulance-emergency.webp', title:'Emergency Process', desc:'Streamlined emergency dispatch flow.', alt:'Smart Ambulance emergency process screen'},
      {src:'assets/ambulance/ambulance-emergency-confirm.webp', title:'Emergency Confirmation', desc:'Confirm emergency booking details.', alt:'Smart Ambulance emergency confirmation screen'},
      {src:'assets/ambulance/ambulance-success.webp', title:'Booking Success', desc:'Booking recorded and response dispatched.', alt:'Smart Ambulance booking success screen'},
      {src:'assets/ambulance/ambulance-tracking.webp', title:'Map Tracking', desc:'Real-time ambulance location tracking.', alt:'Smart Ambulance map tracking screen'},
      {src:'assets/ambulance/ambulance-face-reg.webp', title:'Face Registration', desc:'Patient identity registration via face capture.', alt:'Smart Ambulance face registration screen'},
      {src:'assets/ambulance/ambulance-face-verify.webp', title:'Face Verification', desc:'Secure patient verification on arrival.', alt:'Smart Ambulance face verification screen'},
      {src:'assets/ambulance/ambulance-face-capture.webp', title:'Face Capture', desc:'Camera-based patient identification.', alt:'Smart Ambulance face capture screen'},
      {src:'assets/ambulance/ambulance-profile.webp', title:'Profile', desc:'Account and personal data management.', alt:'Smart Ambulance profile screen'},
    ];

    const showcase=document.createElement('div');
    showcase.className='ambulance-showcase';
    showcase.setAttribute('aria-label','Smart Ambulance app showcase');
    const v='20260827-ambulance-v1';
    showcase.innerHTML=`
      <div class="ambulance-showcase-head">
        <div>
          <span class="ambulance-showcase-kicker">App Preview · Demo · Review</span>
          <strong>Smart Ambulance Mobile Experience</strong>
        </div>
        <span class="ambulance-showcase-count">${String(screens.length).padStart(2,'0')} screens</span>
      </div>
      <div class="ambulance-video">
        <div class="ambulance-video-frame">
          <iframe src="https://www.youtube.com/embed/vsSAr4rEcsM" title="Smart Ambulance Service Centre — demo & review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="ambulance-video-caption"><span>▶ APP DEMO & REVIEW</span><strong>Watch the Smart Ambulance application in action</strong></div>
      </div>
      <div class="ambulance-actions">
        <a class="ambulance-action-btn primary" href="https://github.com/mr-lunart/PPAP-CH2-PS284" target="_blank" rel="noreferrer">GitHub Repository ↗</a>
        <a class="ambulance-action-btn" href="assets/ambulance/ppap-fix.apk" download>Download APK ⬇</a>
      </div>
      <div class="ambulance-showcase-grid" tabindex="0" aria-label="Scrollable Smart Ambulance screen gallery">
        ${screens.map(s=>`
        <button class="ambulance-shot" type="button" data-full="${s.src}" aria-label="Open ${s.title} preview">
          <span class="ambulance-shot-media"><img src="${s.src}?v=${v}" alt="${s.alt}" loading="lazy" decoding="async"></span>
          <span class="ambulance-shot-copy"><b>${s.title}</b><small>${s.desc}</small></span>
        </button>`).join('')}
      </div>
      <div class="ambulance-showcase-note">Scroll to explore all screens — click an image for full size with zoom. Total ${screens.length} screens.</div>
    `;

    const chips=card.querySelector('.chips');
    const edge=card.querySelector('.ambulance-edge');
    if(edge) edge.after(showcase);
    else if(chips) card.insertBefore(showcase,chips);
    else card.appendChild(showcase);

    if(!document.getElementById('ambulance-showcase-style')){
      const style=document.createElement('style');
      style.id='ambulance-showcase-style';
      style.textContent=`
        .ambulance-showcase{position:relative;margin:6px 0 18px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(251,113,133,.16);border-radius:24px;background:linear-gradient(145deg,rgba(48,18,32,.9),rgba(20,12,28,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18);animation:ambulanceShowIn .7s both,ambulanceShowGlow 4.5s ease-in-out infinite}
        .ambulance-showcase::before{content:"";position:absolute;width:300px;height:300px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(244,63,94,.14),transparent 68%);pointer-events:none;animation:ambulanceGlowPulse 4s ease-in-out infinite}
        .ambulance-showcase::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 25%,rgba(244,63,94,.06) 50%,transparent 75%);transform:translateX(-140%);animation:ambulanceSheen 5s ease-in-out infinite;pointer-events:none}
        .ambulance-showcase-head{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 14px}
        .ambulance-showcase-head>div{display:grid;gap:3px}.ambulance-showcase-kicker{font-size:.69rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#fb7185}.ambulance-showcase-head strong{font-size:1.02rem;color:#fff0f2;letter-spacing:-.01em}
        .ambulance-showcase-count{flex:none;padding:6px 10px;border-radius:999px;background:rgba(251,113,133,.1);border:1px solid rgba(251,113,133,.2);color:#fda4af;font-size:.72rem;font-weight:800;animation:ambulanceFloat 4.2s ease-in-out infinite}
        .ambulance-video{position:relative;z-index:1;margin-bottom:16px}
        .ambulance-video-frame{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;border:1px solid rgba(251,113,133,.2);background:#0a0610;box-shadow:0 18px 40px rgba(2,8,23,.35)}
        .ambulance-video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
        .ambulance-video-caption{display:grid;gap:3px;margin:10px 2px 0}.ambulance-video-caption span{font-size:.55rem;font-weight:900;letter-spacing:.14em;color:#fb7185}.ambulance-video-caption strong{font-size:.8rem;color:#e8c9d0;font-weight:700}
        .ambulance-actions{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:9px;margin:2px 0 18px}
        .ambulance-action-btn{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:10px 16px;border:1px solid rgba(251,113,133,.28);border-radius:12px;background:rgba(244,63,94,.08);color:#fda4af;font-size:.78rem;font-weight:800;text-decoration:none;transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
        .ambulance-action-btn:hover{transform:translateY(-2px);border-color:rgba(251,113,133,.45);background:rgba(244,63,94,.16);box-shadow:0 10px 24px rgba(244,63,94,.14)}
        .ambulance-action-btn.primary{border-color:rgba(251,113,133,.4);background:linear-gradient(135deg,rgba(244,63,94,.2),rgba(59,130,246,.14));color:#fff}
        .ambulance-showcase-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(200px,22vw,240px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(251,113,133,.3) rgba(255,255,255,.035)}
        .ambulance-showcase-grid::-webkit-scrollbar{height:7px}.ambulance-showcase-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}.ambulance-showcase-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(244,63,94,.35),rgba(59,130,246,.35));border-radius:999px}
        .ambulance-shot{scroll-snap-align:start;appearance:none;border:0;padding:0;margin:0;text-align:left;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;animation:ambulanceScreenIn .6s cubic-bezier(.2,.7,.2,1) both,ambulanceScreenFloat 3.8s ease-in-out infinite}
        .ambulance-shot:nth-child(1){animation-delay:.04s,0s}.ambulance-shot:nth-child(2){animation-delay:.08s,.2s}.ambulance-shot:nth-child(3){animation-delay:.12s,.4s}.ambulance-shot:nth-child(4){animation-delay:.16s,.6s}.ambulance-shot:nth-child(5){animation-delay:.2s,.8s}.ambulance-shot:nth-child(6){animation-delay:.24s,1s}.ambulance-shot:nth-child(n+7){animation-delay:.28s,1.2s}
        .ambulance-shot:hover{transform:translateY(-5px);border-color:rgba(251,113,133,.3);box-shadow:0 18px 38px rgba(2,8,23,.3)}
        .ambulance-shot:focus-visible{outline:3px solid rgba(251,113,133,.45);outline-offset:3px}
        .ambulance-shot-media{display:block;position:relative;height:300px;overflow:hidden;background:rgba(16,10,24,.55)}
        .ambulance-shot-media:after{content:'↗';position:absolute;right:10px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(2,8,23,.78);border:1px solid rgba(251,113,133,.25);color:#fda4af;font-size:.85rem;font-weight:800;box-shadow:0 6px 18px rgba(2,8,23,.25)}
        .ambulance-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease,filter .35s ease}
        .ambulance-shot:hover .ambulance-shot-media img{transform:scale(1.03);filter:brightness(1.06)}
        .ambulance-shot-copy{display:grid;gap:4px;padding:12px 13px 14px}.ambulance-shot-copy b{font-size:.86rem;color:#fff0f2;line-height:1.2}.ambulance-shot-copy small{font-size:.72rem;line-height:1.45;color:#d9a3ad}
        .ambulance-showcase-note{position:relative;z-index:1;margin:10px 3px 0;color:#c08b96;font-size:.72rem}
        .ambulance-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(2,6,23,.88);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;touch-action:none;overscroll-behavior:contain}
        .ambulance-lightbox.is-open{opacity:1;visibility:visible}.ambulance-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff;transform-origin:50% 50%;will-change:transform;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
        .ambulance-zoom-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.78);border:1px solid rgba(255,255,255,.12);color:#cbd5e1;font-size:.66rem;font-weight:700;letter-spacing:.03em;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .25s ease}
        .ambulance-lightbox.is-open .ambulance-zoom-hint{opacity:1}.ambulance-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer;z-index:2}.ambulance-zoom-controls{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px}.ambulance-zoom-btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.3rem;font-weight:800;line-height:1;cursor:pointer;transition:transform .15s ease,background .15s ease}.ambulance-zoom-btn:hover{transform:scale(1.08);background:rgba(244,63,94,.25)}
        @keyframes ambulanceShowIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes ambulanceShowGlow{0%,100%{border-color:rgba(251,113,133,.16)}50%{border-color:rgba(251,113,133,.26)}}@keyframes ambulanceGlowPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes ambulanceSheen{0%,70%,100%{transform:translateX(-140%)}85%{transform:translateX(140%)}}@keyframes ambulanceFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes ambulanceScreenIn{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}@keyframes ambulanceScreenFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @media(max-width:900px){.ambulance-showcase{padding:16px 14px 13px;border-radius:21px}.ambulance-showcase-grid{grid-auto-columns:200px}.ambulance-shot-media{height:280px}}
        @media(max-width:760px){.ambulance-showcase{margin:12px -2px 14px;padding:14px 12px 13px;border-radius:18px}.ambulance-showcase-grid{grid-auto-columns:180px;gap:12px}.ambulance-shot-media{height:250px}.ambulance-showcase-head{align-items:center}.ambulance-showcase-count{font-size:.66rem}.ambulance-lightbox{padding:12px}.ambulance-lightbox img{max-width:96vw;max-height:84vh}.ambulance-lightbox-close{right:12px;top:12px}}
        @media(max-width:430px){.ambulance-showcase-grid{grid-auto-columns:160px}.ambulance-shot-media{height:220px}.ambulance-showcase-head strong{font-size:.92rem}.ambulance-video-frame{border-radius:14px}}
        @media(prefers-reduced-motion:reduce){.ambulance-showcase,.ambulance-showcase::before,.ambulance-showcase::after,.ambulance-showcase-count,.ambulance-shot{animation:none!important;transition:none!important}}
      `;
      document.head.appendChild(style);
    }

    let lightbox=document.querySelector('.ambulance-lightbox');
    if(!lightbox){
      lightbox=document.createElement('div');
      lightbox.className='ambulance-lightbox';
      lightbox.setAttribute('role','dialog');
      lightbox.setAttribute('aria-modal','true');
      lightbox.setAttribute('aria-label','Smart Ambulance screenshot preview');
      lightbox.innerHTML='<button class="ambulance-lightbox-close" type="button" aria-label="Close preview">×</button><img class="ambulance-lightbox-img" alt="Smart Ambulance screenshot preview"><div class="ambulance-zoom-hint">Pinch to zoom · double-tap to zoom · scroll to zoom</div><div class="ambulance-zoom-controls"><button class="ambulance-zoom-btn" type="button" data-zoom="-">−</button><button class="ambulance-zoom-btn" type="button" data-zoom="+">+</button></div>';
      document.body.appendChild(lightbox);

      const img=lightbox.querySelector('img');
      let scale=1,tx=0,ty=0;
      const apply=()=>{img.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;};
      const reset=()=>{scale=1;tx=0;ty=0;img.style.transition='';apply();};
      const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';reset();};
      lightbox.querySelector('.ambulance-lightbox-close').addEventListener('click',close);
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
          const [a,b]=ids;
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
          const [a,b]=ids;
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

      lightbox.querySelectorAll('.ambulance-zoom-btn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
          scale=Math.min(6,Math.max(1,scale+(btn.dataset.zoom==='+'?0.6:-0.6)));
          img.style.transition='transform .15s ease';
          apply();
        });
      });
    }

    showcase.querySelectorAll('.ambulance-shot').forEach((shot)=>{
      shot.addEventListener('click',()=>{
        const preview=lightbox.querySelector('img');
        preview.src=shot.dataset.full+'?v='+v;
        preview.alt=shot.querySelector('img')?.alt||'Smart Ambulance screenshot preview';
        lightbox.classList.add('is-open');
        document.body.style.overflow='hidden';
      });
    });

    showcase.querySelectorAll('.ambulance-shot img').forEach((img)=>{
      img.addEventListener('error',()=>{
        const src=img.getAttribute('src')||'';
        if(src.startsWith('assets/')){
          const clean=src.split('?')[0];
          img.src=`https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/${clean}?v=${v}`;
        }
      },{once:true});
    });
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();