(()=>{
  const init=()=>{
    const card=[...document.querySelectorAll('.project-card')].find((item)=>item.querySelector('h3')?.textContent.trim().startsWith('Mutant'));
    if(!card || card.querySelector('.mutant-showcase')) return;

    card.classList.add('mutant-card-enhanced');

    const oldLink=card.querySelector('.text-link');
    if(oldLink) oldLink.remove();

    const title=card.querySelector('h3');
    if(title){
      title.classList.add('mutant-title');
      if(!card.querySelector('.mutant-project-subtitle')){
        const subtitle=document.createElement('div');
        subtitle.className='mutant-project-subtitle';
        subtitle.textContent='Employee Mutation Management System for AirNav Indonesia';
        title.insertAdjacentElement('afterend', subtitle);
      }
    }

    // Header badge ala AirNav/BabyOps
    const desc=card.querySelector('p');
    if(desc && !card.querySelector('.mutant-badge')){
      const badge=document.createElement('div');
      badge.className='mutant-badge';
      badge.innerHTML=`<span class="mutant-badge-icon">🔄</span><div><small>HR INFORMATION SYSTEM · LIVE INTERNAL PLATFORM</small><strong>AirNav Indonesia — Mutation Workflow</strong><em>Streamlined transfer requests, approvals, position mapping &amp; personnel data integration</em></div><a class="mutant-badge-link" href="https://mutant.punkestu.my.id/" target="_blank" rel="noreferrer">Visit ↗</a>`;
      desc.after(badge);
    }

    // Header detail ala AirNav — 3 poin premium
    const chips=card.querySelector('.chips');
    if(!card.querySelector('.mutant-details')){
      const details=document.createElement('div');
      details.className='mutant-details';
      details.innerHTML=`
        <div class="mutant-detail">
          <span class="mutant-detail-icon">01</span>
          <div><strong>Mutation Workflow</strong><small>Structured transfer requests and approvals with traceable status tracking.</small></div>
        </div>
        <div class="mutant-detail">
          <span class="mutant-detail-icon">02</span>
          <div><strong>Position Mapping</strong><small>Centralized employee and position data to support transparent HR decisions.</small></div>
        </div>
        <div class="mutant-detail">
          <span class="mutant-detail-icon">03</span>
          <div><strong>Approval Automation</strong><small>Role-based approval flows that keep every mutation accountable and documented.</small></div>
        </div>`;
      card.insertBefore(details, chips || null);
    }

    const screens=[
      {src:'assets/mutant/mutant-login.webp', title:'Login & Authentication', desc:'Entry point to the HRIS platform.', alt:'Mutant login screen'},
      {src:'assets/mutant/mutant-dashboard.webp', title:'Dashboard', desc:'Overview of mutation workflows and pending approvals.', alt:'Mutant dashboard screen'},
      {src:'assets/mutant/mutant-dashboard-admin.webp', title:'Admin Dashboard', desc:'Admin summary of employee and position data.', alt:'Mutant admin dashboard screen'},
      {src:'assets/mutant/mutant-home.webp', title:'Home', desc:'Main navigation hub for the mutation system.', alt:'Mutant home screen'},
      {src:'assets/mutant/mutant-akun.webp', title:'Account', desc:'Profile and account management.', alt:'Mutant account screen'},
      {src:'assets/mutant/mutant-akun-tambah.webp', title:'Add Account', desc:'Create new user accounts.', alt:'Mutant add account screen'},
      {src:'assets/mutant/mutant-akun-edit.webp', title:'Edit Account', desc:'Update account details and roles.', alt:'Mutant edit account screen'},
      {src:'assets/mutant/mutant-cabang.webp', title:'Branch Management', desc:'Manage branches and organizational units.', alt:'Mutant branch management screen'},
      {src:'assets/mutant/mutant-form-bandara.webp', title:'Airport Form', desc:'Airport and location data entry.', alt:'Mutant airport form screen'},
      {src:'assets/mutant/mutant-form-rotasi.webp', title:'Rotation Form', desc:'Employee rotation assignment form.', alt:'Mutant rotation form screen'},
    ];

    const showcase=document.createElement('div');
    showcase.className='mutant-showcase';
    showcase.setAttribute('aria-label','Mutant HR system interface showcase');
    const v='20260827-mutant-v1';
    showcase.innerHTML=`
      <div class="mutant-showcase-head">
        <div>
          <span class="mutant-showcase-kicker">Selected Interfaces</span>
          <strong>Mutant HRIS Web Platform</strong>
        </div>
        <span class="mutant-showcase-count">${String(screens.length).padStart(2,'0')} screens</span>
      </div>
      <div class="mutant-showcase-grid" tabindex="0" aria-label="Scrollable Mutant screen gallery">
        ${screens.map(s=>`
        <button class="mutant-shot" type="button" data-full="${s.src}" aria-label="Open ${s.title} preview">
          <span class="mutant-shot-media"><img src="${s.src}?v=${v}" alt="${s.alt}" loading="lazy" decoding="async"></span>
          <span class="mutant-shot-copy"><b>${s.title}</b><small>${s.desc}</small></span>
        </button>`).join('')}
      </div>
      <div class="mutant-showcase-note">Scroll to explore all screens — click an image for full size. Total ${screens.length} screens.</div>
    `;

    if(chips) card.insertBefore(showcase,chips);
    else card.appendChild(showcase);

    if(!document.getElementById('mutant-showcase-style')){
      const style=document.createElement('style');
      style.id='mutant-showcase-style';
      style.textContent=`
        /* ===== CARD THEME — dark violet ala AirNav ===== */
        .project-card.mutant-card-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(167,139,250,.22)!important;background:radial-gradient(circle at 90% 8%,rgba(139,92,246,.14),transparent 28%),radial-gradient(circle at 10% 94%,rgba(99,102,241,.09),transparent 30%),linear-gradient(145deg,rgba(20,18,44,.98),rgba(12,12,32,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
        .project-card.mutant-card-enhanced::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(167,139,250,.07) 82%,rgba(99,102,241,.06) 88%,transparent 94%);animation:mutantAmbientSpin 16s linear infinite;pointer-events:none}
        .mutant-card-enhanced .mutant-project-subtitle{margin:-2px 0 14px;font-size:.9rem;font-weight:800;letter-spacing:.02em;color:#c4b5fd;text-shadow:0 0 18px rgba(167,139,250,.25);animation:mutantSubtitleGlow 3.6s ease-in-out infinite}
        /* ===== TITLE ANIMATION ===== */
        .mutant-card-enhanced .mutant-title{position:relative;display:inline-block;background:linear-gradient(100deg,#fff 8%,#ede9fe 30%,#c4b5fd 50%,#a5b4fc 70%,#fff 92%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:mutantTitleShine 5.5s linear infinite}
        .mutant-card-enhanced .mutant-title::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:3px;border-radius:999px;background:linear-gradient(90deg,#a78bfa,#818cf8,transparent);transform:scaleX(0);transform-origin:left;animation:mutantTitleLine 2.6s ease-in-out infinite}
        .mutant-card-enhanced .mutant-title:hover{filter:drop-shadow(0 0 16px rgba(167,139,250,.55))}
        /* ===== HEADER BADGE ===== */
        #projects .mutant-badge{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(167,139,250,.22);border-radius:15px;background:linear-gradient(135deg,rgba(139,92,246,.09),rgba(99,102,241,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:mutantBadgeIn .75s .2s both}
        #projects .mutant-badge::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:mutantAwardShine 4s ease-in-out infinite}
        #projects .mutant-badge-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(139,92,246,.12);font-size:1.25rem}
        #projects .mutant-badge small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#a78bfa}
        #projects .mutant-badge strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#f3f0ff}
        #projects .mutant-badge em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#a9a3d6}
        #projects .mutant-badge-link{flex:none;margin-left:auto;padding:7px 11px;border:1px solid rgba(167,139,250,.25);border-radius:999px;background:rgba(139,92,246,.1);color:#c4b5fd;font-size:.68rem;font-weight:800;text-decoration:none;transition:transform .22s ease,background .22s ease,color .22s ease}
        #projects .mutant-badge-link:hover{transform:translateY(-2px);background:rgba(139,92,246,.18);color:#e5dbff}
        /* ===== DETAIL CARDS ===== */
        #projects .mutant-details{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0 18px}
        #projects .mutant-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(167,139,250,.14);border-radius:16px;background:linear-gradient(145deg,rgba(38,30,72,.55),rgba(20,18,46,.45));transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:mutantDetailIn .7s both}
        #projects .mutant-detail:nth-child(2){animation-delay:.08s}#projects .mutant-detail:nth-child(3){animation-delay:.16s}
        #projects .mutant-detail:hover{transform:translateY(-4px);border-color:rgba(167,139,250,.34);background:linear-gradient(145deg,rgba(46,38,88,.8),rgba(26,24,58,.7));box-shadow:0 14px 30px rgba(2,8,23,.2)}
        #projects .mutant-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(167,139,250,.16),rgba(99,102,241,.12));border:1px solid rgba(167,139,250,.18);color:#c4b5fd;font-size:.66rem;font-weight:800;animation:mutantIconGlow 3s ease-in-out infinite}
        #projects .mutant-detail:nth-child(2) .mutant-detail-icon{animation-delay:.5s}#projects .mutant-detail:nth-child(3) .mutant-detail-icon{animation-delay:1s}
        #projects .mutant-detail strong{display:block;font-size:.86rem;line-height:1.35;color:#f3f0ff}#projects .mutant-detail small{display:block;margin-top:5px;font-size:.72rem;line-height:1.55;color:#a9a3d6}
        /* ===== SHOWCASE ===== */
        .mutant-showcase{position:relative;margin:4px 0 18px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(167,139,250,.16);border-radius:24px;background:linear-gradient(145deg,rgba(28,24,58,.9),rgba(14,13,36,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18);animation:mutantPreviewGlow 4.5s ease-in-out infinite}
        .mutant-showcase::before{content:"";position:absolute;width:300px;height:300px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,.14),transparent 68%);pointer-events:none;animation:mutantGlowPulse 4s ease-in-out infinite}
        .mutant-showcase::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 25%,rgba(167,139,250,.06) 50%,transparent 75%);transform:translateX(-140%);animation:mutantPreviewSheen 5s ease-in-out infinite;pointer-events:none}
        .mutant-showcase-head{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 12px}
        .mutant-showcase-head>div{display:grid;gap:3px}.mutant-showcase-kicker{font-size:.69rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#c4b5fd}.mutant-showcase-head strong{font-size:1.02rem;color:#f3f0ff;letter-spacing:-.01em}
        .mutant-showcase-count{flex:none;padding:6px 10px;border-radius:999px;background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.2);color:#c4b5fd;font-size:.72rem;font-weight:800;animation:mutantBadgeFloat 4.2s ease-in-out infinite}
        .mutant-showcase-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(260px,28vw,340px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(167,139,250,.3) rgba(255,255,255,.035)}
        .mutant-showcase-grid::-webkit-scrollbar{height:7px}.mutant-showcase-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}.mutant-showcase-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(167,139,250,.35),rgba(99,102,241,.35));border-radius:999px}
        .mutant-shot{scroll-snap-align:start;appearance:none;border:0;padding:0;margin:0;text-align:left;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;animation:mutantScreenIn .6s cubic-bezier(.2,.7,.2,1) both,mutantScreenFloat 3.8s ease-in-out infinite}
        .mutant-shot:nth-child(1){animation-delay:.04s,0s}.mutant-shot:nth-child(2){animation-delay:.08s,.2s}.mutant-shot:nth-child(3){animation-delay:.12s,.4s}.mutant-shot:nth-child(4){animation-delay:.16s,.6s}.mutant-shot:nth-child(5){animation-delay:.2s,.8s}.mutant-shot:nth-child(6){animation-delay:.24s,1s}.mutant-shot:nth-child(n+7){animation-delay:.28s,1.2s}
        .mutant-shot:hover{transform:translateY(-5px);border-color:rgba(167,139,250,.3);box-shadow:0 18px 38px rgba(2,8,23,.3)}
        .mutant-shot:focus-visible{outline:3px solid rgba(167,139,250,.45);outline-offset:3px}
        .mutant-shot-media{display:block;position:relative;height:210px;overflow:hidden;background:rgba(16,14,38,.55)}
        .mutant-shot-media:after{content:'↗';position:absolute;right:10px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(2,8,23,.78);border:1px solid rgba(167,139,250,.25);color:#c4b5fd;font-size:.85rem;font-weight:800;box-shadow:0 6px 18px rgba(2,8,23,.25)}
        .mutant-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease,filter .35s ease}
        .mutant-shot:hover .mutant-shot-media img{transform:scale(1.03);filter:brightness(1.06)}
        .mutant-shot-copy{display:grid;gap:4px;padding:12px 13px 14px}.mutant-shot-copy b{font-size:.88rem;color:#efeafb;line-height:1.2}.mutant-shot-copy small{font-size:.74rem;line-height:1.45;color:#a29bcf}
        .mutant-showcase-note{position:relative;z-index:1;margin:10px 3px 0;color:#8f88bd;font-size:.72rem}
        /* ===== LIGHTBOX + ZOOM ===== */
        .mutant-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(2,6,23,.88);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;touch-action:none;overscroll-behavior:contain}
        .mutant-lightbox.is-open{opacity:1;visibility:visible}.mutant-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff;transform-origin:50% 50%;will-change:transform;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
        .mutant-zoom-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.78);border:1px solid rgba(255,255,255,.12);color:#cbd5e1;font-size:.66rem;font-weight:700;letter-spacing:.03em;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .25s ease}
        .mutant-lightbox.is-open .mutant-zoom-hint{opacity:1}.mutant-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer;z-index:2}.mutant-zoom-controls{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px}.mutant-zoom-btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.3rem;font-weight:800;line-height:1;cursor:pointer;transition:transform .15s ease,background .15s ease}.mutant-zoom-btn:hover{transform:scale(1.08);background:rgba(167,139,250,.25)}
        /* ===== KEYFRAMES ===== */
        @keyframes mutantAmbientSpin{to{transform:rotate(360deg)}}@keyframes mutantSubtitleGlow{0%,100%{opacity:.85;text-shadow:0 0 12px rgba(167,139,250,.18)}50%{opacity:1;text-shadow:0 0 22px rgba(167,139,250,.4)}}
        @keyframes mutantTitleShine{0%{background-position:0% 50%}100%{background-position:260% 50%}}@keyframes mutantTitleLine{0%{transform:scaleX(0);opacity:.3}45%{transform:scaleX(1);opacity:1}70%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}
        @keyframes mutantBadgeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes mutantAwardShine{0%,66%,100%{transform:translateX(-130%)}82%{transform:translateX(130%)}}
        @keyframes mutantDetailIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes mutantIconGlow{0%,100%{box-shadow:0 0 0 rgba(167,139,250,0)}50%{box-shadow:0 0 14px rgba(167,139,250,.3),0 0 0 4px rgba(167,139,250,.07)}}
        @keyframes mutantPreviewGlow{0%,100%{border-color:rgba(167,139,250,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18)}50%{border-color:rgba(167,139,250,.26);box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 22px 55px rgba(167,139,250,.09)}}
        @keyframes mutantGlowPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes mutantPreviewSheen{0%,70%,100%{transform:translateX(-140%)}85%{transform:translateX(140%)}}
        @keyframes mutantBadgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes mutantScreenIn{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}@keyframes mutantScreenFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        /* ===== RESPONSIVE ===== */
        @media(max-width:900px){#projects .mutant-details{grid-template-columns:1fr;gap:9px;margin-top:20px}#projects .mutant-detail{grid-template-columns:34px 1fr;padding:13px}.mutant-showcase{padding:16px 14px 13px;border-radius:21px}.mutant-showcase-grid{grid-auto-columns:280px}.mutant-shot-media{height:190px}}
        @media(max-width:760px){.project-card.mutant-card-enhanced{grid-column:auto}.mutant-badge{width:100%;padding:10px 12px}.mutant-badge-link{margin-left:0}.mutant-showcase{margin:12px -2px 14px;padding:14px 12px 13px;border-radius:18px}.mutant-showcase-grid{grid-auto-columns:260px;gap:12px}.mutant-shot-media{height:180px}.mutant-showcase-head{align-items:center}.mutant-showcase-count{font-size:.66rem}.mutant-lightbox{padding:12px}.mutant-lightbox img{max-width:96vw;max-height:84vh}.mutant-lightbox-close{right:12px;top:12px}}
        @media(max-width:430px){.mutant-showcase-grid{grid-auto-columns:240px}.mutant-shot-media{height:165px}.mutant-showcase-head strong{font-size:.92rem}.mutant-project-subtitle{font-size:.84rem!important}}
        @media(prefers-reduced-motion:reduce){.project-card.mutant-card-enhanced::after,.mutant-card-enhanced .mutant-project-subtitle,.mutant-card-enhanced .mutant-title,.mutant-card-enhanced .mutant-title::after,#projects .mutant-badge,#projects .mutant-detail,#projects .mutant-detail-icon,.mutant-showcase,.mutant-showcase::before,.mutant-showcase::after,.mutant-showcase-count,.mutant-shot{animation:none!important;transition:none!important}}
      `;
      document.head.appendChild(style);
    }

    let lightbox=document.querySelector('.mutant-lightbox');
    if(!lightbox){
      lightbox=document.createElement('div');
      lightbox.className='mutant-lightbox';
      lightbox.setAttribute('role','dialog');
      lightbox.setAttribute('aria-modal','true');
      lightbox.setAttribute('aria-label','Mutant screenshot preview');
      lightbox.innerHTML='<button class="mutant-lightbox-close" type="button" aria-label="Close preview">×</button><img class="mutant-lightbox-img" alt="Mutant screenshot preview"><div class="mutant-zoom-hint">Pinch to zoom · double-tap to zoom · scroll to zoom</div><div class="mutant-zoom-controls"><button class="mutant-zoom-btn" type="button" data-zoom="-">−</button><button class="mutant-zoom-btn" type="button" data-zoom="+">+</button></div>';
      document.body.appendChild(lightbox);

      const img=lightbox.querySelector('img');
      let scale=1,tx=0,ty=0;
      const apply=()=>{img.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;};
      const reset=()=>{scale=1;tx=0;ty=0;img.style.transition='';apply();};
      const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';reset();};
      lightbox.querySelector('.mutant-lightbox-close').addEventListener('click',close);
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

      lightbox.querySelectorAll('.mutant-zoom-btn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
          scale=Math.min(6,Math.max(1,scale+(btn.dataset.zoom==='+'?0.6:-0.6)));
          img.style.transition='transform .15s ease';
          apply();
        });
      });
    }

    showcase.querySelectorAll('.mutant-shot').forEach((shot)=>{
      shot.addEventListener('click',()=>{
        const preview=lightbox.querySelector('img');
        preview.src=shot.dataset.full+'?v='+v;
        preview.alt=shot.querySelector('img')?.alt||'Mutant screenshot preview';
        lightbox.classList.add('is-open');
        document.body.style.overflow='hidden';
      });
    });

    showcase.querySelectorAll('.mutant-shot img').forEach((img)=>{
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