(()=>{
  const init=()=>{
    const card=[...document.querySelectorAll('.project-card')].find((item)=>item.querySelector('h3')?.textContent.trim().startsWith('AirNav Assist'));
    if(!card || card.querySelector('.airnav-showcase')) return;

    card.classList.add('airnav-card-enhanced');

    // Preserve new Live Site / Preview / GitHub links in .airnav-links — only remove legacy l1nk.dev link if present
    const legacyLink=card.querySelector('.text-link[href*="l1nk.dev"]');
    if(legacyLink) legacyLink.remove();

    const title=card.querySelector('h3');
    if(title){
      title.classList.add('airnav-title');
      if(!card.querySelector('.airnav-project-subtitle')){
        const subtitle=document.createElement('div');
        subtitle.className='airnav-project-subtitle';
        subtitle.textContent='Integrated Internal Platform for AirNav Indonesia';
        title.insertAdjacentElement('afterend', subtitle);
      }
    }

    // Header badge ala BabyOps/Beligo — identitas enterprise + link GitHub
    const desc=card.querySelector('p');
    if(desc && !card.querySelector('.airnav-badge')){
      const badge=document.createElement('div');
      badge.className='airnav-badge';
      badge.innerHTML=`<span class="airnav-badge-icon">🛫</span><div><small>ENTERPRISE SYSTEM · LIVE INTERNAL PLATFORM</small><strong>AirNav Indonesia — Tanjungpinang Branch</strong><em>Laravel internal platform: news, e-logbook, video learning, org structure &amp; performance check</em></div><span style="display:flex;gap:8px;margin-left:auto;flex-wrap:wrap"><a class="airnav-badge-link" href="http://airnavassist.my.id/" target="_blank" rel="noreferrer">Live Site ↗</a><a class="airnav-badge-link" href="https://github.com/Anggito09/airnav" target="_blank" rel="noreferrer">GitHub ↗</a></span>`;
      desc.after(badge);
    }

    // Header detail ala BabyOps/CityConnect — 3 poin premium untuk AirNav
    const chips=card.querySelector('.chips');
    if(!card.querySelector('.airnav-details')){
      const details=document.createElement('div');
      details.className='airnav-details';
      details.innerHTML=`
        <div class="airnav-detail">
          <span class="airnav-detail-icon">01</span>
          <div><strong>Enterprise Portal</strong><small>Internal news, organizational structure, and role-based access in one centralized platform.</small></div>
        </div>
        <div class="airnav-detail">
          <span class="airnav-detail-icon">02</span>
          <div><strong>E-Logbook & Video Learning</strong><small>Digital work logging and video-based learning to support unit competency.</small></div>
        </div>
        <div class="airnav-detail">
          <span class="airnav-detail-icon">03</span>
          <div><strong>Performance & Workflow</strong><small>Performance checks and structured workflows across Tanjungpinang branch units.</small></div>
        </div>`;
      card.insertBefore(details, chips || null);
    }

    const screens=[
      {src:'assets/airnav/airnav-login.webp', title:'Login & Authentication', desc:'Entry point to the internal platform.', alt:'AirNav Assist login screen'},
      {src:'assets/airnav/airnav-beranda.webp', title:'Home', desc:'Main user dashboard with activity summary.', alt:'AirNav Assist home screen'},
      {src:'assets/airnav/airnav-artikel.webp', title:'Articles', desc:'Internal knowledge article list.', alt:'AirNav Assist articles screen'},
      {src:'assets/airnav/airnav-artikel-2.webp', title:'Article Detail', desc:'Article detail page for full reading.', alt:'AirNav Assist article detail screen'},
      {src:'assets/airnav/airnav-pembelajaran.webp', title:'Learning', desc:'Video learning and course modules.', alt:'AirNav Assist learning screen'},
      {src:'assets/airnav/airnav-pembelajaran-fix.webp', title:'Learning — Updated', desc:'Improved learning module view.', alt:'AirNav Assist learning updated screen'},
      {src:'assets/airnav/airnav-elogbook.webp', title:'E-Logbook', desc:'Daily electronic work logging.', alt:'AirNav Assist e-logbook screen'},
      {src:'assets/airnav/airnav-elogbook-2.webp', title:'E-Logbook Detail', desc:'Entry details and logbook history.', alt:'AirNav Assist e-logbook detail screen'},
      {src:'assets/airnav/airnav-test-list.webp', title:'Test List', desc:'Competency test and evaluation list.', alt:'AirNav Assist test list screen'},
      {src:'assets/airnav/airnav-test-list-2.webp', title:'Test List Variant', desc:'Variant of the test list view.', alt:'AirNav Assist test list variant screen'},
      {src:'assets/airnav/airnav-test-content.webp', title:'Test Content', desc:'Question content and test materials.', alt:'AirNav Assist test content screen'},
      {src:'assets/airnav/airnav-test-hasil.webp', title:'Test Results', desc:'Results, scores, and evaluation.', alt:'AirNav Assist test results screen'},
      {src:'assets/airnav/airnav-akun.webp', title:'Account', desc:'Profile management and account settings.', alt:'AirNav Assist account screen'},
      {src:'assets/airnav/airnav-admin-artikel.webp', title:'Admin: Articles', desc:'Manage and publish articles.', alt:'AirNav Assist admin articles screen'},
      {src:'assets/airnav/airnav-admin-pembelajaran.webp', title:'Admin: Learning', desc:'Manage learning modules.', alt:'AirNav Assist admin learning screen'},
      {src:'assets/airnav/airnav-admin-elogbook.webp', title:'Admin: E-Logbook', desc:'Manage and verify e-logbook.', alt:'AirNav Assist admin e-logbook screen'},
      {src:'assets/airnav/airnav-admin-pengguna.webp', title:'Admin: Users', desc:'Manage user data and roles.', alt:'AirNav Assist admin users screen'},
      {src:'assets/airnav/airnav-admin-test.webp', title:'Admin: Tests', desc:'Manage question bank and tests.', alt:'AirNav Assist admin tests screen'},
    ];

    const showcase=document.createElement('div');
    showcase.className='airnav-showcase';
    showcase.setAttribute('aria-label','AirNav Assist interface showcase');
    const v='20260827-airnav-dark';
    showcase.innerHTML=`
      <div class="airnav-showcase-head">
        <div>
          <span class="airnav-showcase-kicker">Selected Interfaces</span>
          <strong>AirNav Assist Web Platform</strong>
        </div>
        <span class="airnav-showcase-count">${String(screens.length).padStart(2,'0')} screens</span>
      </div>
      <div class="airnav-showcase-grid" tabindex="0" aria-label="Scrollable AirNav screen gallery">
        ${screens.map(s=>`
        <button class="airnav-shot" type="button" data-full="${s.src}" aria-label="Buka tampilan ${s.title}">
          <span class="airnav-shot-media"><img src="${s.src}?v=${v}" alt="${s.alt}" loading="lazy" decoding="async"></span>
          <span class="airnav-shot-copy"><b>${s.title}</b><small>${s.desc}</small></span>
        </button>`).join('')}
      </div>
      <div class="airnav-showcase-note">Scroll to explore all screens — click an image for full size. Total ${screens.length} screens (user + admin).</div>
    `;

    if(chips) card.insertBefore(showcase,chips);
    else card.appendChild(showcase);

    if(!document.getElementById('airnav-showcase-style')){
      const style=document.createElement('style');
      style.id='airnav-showcase-style';
      style.textContent=`
        /* ===== CARD THEME — dark teal ala BabyOps/CityConnect ===== */
        .project-card.airnav-card-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(45,212,191,.22)!important;background:radial-gradient(circle at 90% 8%,rgba(45,212,191,.13),transparent 28%),radial-gradient(circle at 10% 94%,rgba(59,130,246,.09),transparent 30%),linear-gradient(145deg,rgba(13,31,44,.98),rgba(8,22,36,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
        .project-card.airnav-card-enhanced::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(45,212,191,.07) 82%,rgba(59,130,246,.06) 88%,transparent 94%);animation:airnavAmbientSpin 16s linear infinite;pointer-events:none}
        .airnav-card-enhanced .airnav-project-subtitle{margin:-2px 0 14px;font-size:.9rem;font-weight:800;letter-spacing:.02em;color:#7ee8d6;text-shadow:0 0 18px rgba(45,212,191,.25);animation:airnavSubtitleGlow 3.6s ease-in-out infinite}
        /* ===== TITLE ANIMATION — premium kinetic ===== */
        .airnav-card-enhanced .airnav-title{position:relative;display:inline-block;background:linear-gradient(100deg,#fff 6%,#ccfbf1 22%,#5eead4 42%,#38bdf8 62%,#93c5fd 78%,#fff 92%);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:airnavTitleShine 4.2s linear infinite,airnavTitleFloat 3.8s ease-in-out infinite,airnavTitleIn .85s cubic-bezier(.2,.7,.2,1) both;filter:drop-shadow(0 0 14px rgba(45,212,191,.28))}
        .airnav-card-enhanced .airnav-title::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:3px;border-radius:999px;background:linear-gradient(90deg,#2dd4bf,#38bdf8,#60a5fa,transparent);transform:scaleX(0);transform-origin:left;animation:airnavTitleLine 2.4s ease-in-out infinite}
        .airnav-card-enhanced .airnav-title:hover{filter:drop-shadow(0 0 18px rgba(45,212,191,.6)) brightness(1.08)}
        /* ===== DESC — justify tanpa hyphen ===== */
        .airnav-card-enhanced .airnav-desc{max-width:980px;margin:10px 0 6px!important;font-size:.95rem!important;line-height:1.78!important;color:#cfe8e4!important;text-align:justify!important;text-justify:inter-word!important;hyphens:none!important;-webkit-hyphens:none!important;word-break:normal!important;overflow-wrap:break-word!important;animation:airnavDescIn .7s .18s both}
        /* ===== LIVE SITE CTA — standout ===== */
        .airnav-live-primary{position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(45,212,191,.18),rgba(59,130,246,.14))!important;border-color:rgba(45,212,191,.32)!important;color:#7ee8d6!important;animation:airnavLivePulse 2.8s ease-in-out infinite}
        .airnav-live-primary::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.18) 50%,transparent 70%);transform:translateX(-130%);animation:airnavLiveShine 3.2s ease-in-out infinite;pointer-events:none}
        /* ===== HEADER BADGE (ala BabyOps/Beligo award) ===== */
        #projects .airnav-badge{position:relative;overflow:hidden;display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(45,212,191,.22);border-radius:15px;background:linear-gradient(135deg,rgba(45,212,191,.09),rgba(59,130,246,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025);animation:airnavBadgeIn .75s .2s both}
        #projects .airnav-badge::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.13) 50%,transparent 65%);transform:translateX(-130%);animation:airnavAwardShine 4s ease-in-out infinite}
        #projects .airnav-badge-icon{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(45,212,191,.12);font-size:1.25rem}
        #projects .airnav-badge small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#2dd4bf}
        #projects .airnav-badge strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#eafff9}
        #projects .airnav-badge em{display:block;margin-top:2px;font-style:normal;font-size:.62rem;color:#93b8b3}
        #projects .airnav-badge-link{flex:none;margin-left:auto;padding:7px 11px;border:1px solid rgba(45,212,191,.25);border-radius:999px;background:rgba(45,212,191,.1);color:#7ee8d6;font-size:.68rem;font-weight:800;text-decoration:none;transition:transform .22s ease,background .22s ease,color .22s ease}
        #projects .airnav-badge-link:hover{transform:translateY(-2px);background:rgba(45,212,191,.18);color:#d3fff7}
        /* ===== DETAIL CARDS (header ala BabyOps) ===== */
        #projects .airnav-details{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0 18px}
        #projects .airnav-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(45,212,191,.14);border-radius:16px;background:linear-gradient(145deg,rgba(16,42,56,.55),rgba(8,26,40,.45));transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:airnavDetailIn .7s both}
        #projects .airnav-detail:nth-child(2){animation-delay:.08s}#projects .airnav-detail:nth-child(3){animation-delay:.16s}
        #projects .airnav-detail:hover{transform:translateY(-4px);border-color:rgba(45,212,191,.34);background:linear-gradient(145deg,rgba(19,52,68,.8),rgba(10,34,50,.7));box-shadow:0 14px 30px rgba(2,8,23,.2)}
        #projects .airnav-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(45,212,191,.16),rgba(59,130,246,.12));border:1px solid rgba(45,212,191,.18);color:#5eead4;font-size:.66rem;font-weight:800;animation:airnavIconGlow 3s ease-in-out infinite}
        #projects .airnav-detail:nth-child(2) .airnav-detail-icon{animation-delay:.5s}#projects .airnav-detail:nth-child(3) .airnav-detail-icon{animation-delay:1s}
        #projects .airnav-detail strong{display:block;font-size:.86rem;line-height:1.35;color:#f0fbf9}#projects .airnav-detail small{display:block;margin-top:5px;font-size:.72rem;line-height:1.55;color:#93b8b3}
        /* ===== SHOWCASE — dark premium panel ===== */
        .airnav-showcase{position:relative;margin:4px 0 18px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(45,212,191,.16);border-radius:24px;background:linear-gradient(145deg,rgba(14,32,46,.9),rgba(7,19,32,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18);animation:airnavPreviewGlow 4.5s ease-in-out infinite}
        .airnav-showcase::before{content:"";position:absolute;width:300px;height:300px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(45,212,191,.14),transparent 68%);pointer-events:none;animation:airnavGlowPulse 4s ease-in-out infinite}
        .airnav-showcase::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 25%,rgba(45,212,191,.06) 50%,transparent 75%);transform:translateX(-140%);animation:airnavPreviewSheen 5s ease-in-out infinite;pointer-events:none}
        .airnav-showcase-head{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 12px}
        .airnav-showcase-head>div{display:grid;gap:3px}.airnav-showcase-kicker{font-size:.69rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#5eead4}.airnav-showcase-head strong{font-size:1.02rem;color:#f0fbf9;letter-spacing:-.01em}
        .airnav-showcase-count{flex:none;padding:6px 10px;border-radius:999px;background:rgba(45,212,191,.1);border:1px solid rgba(45,212,191,.2);color:#7ee8d6;font-size:.72rem;font-weight:800;animation:airnavBadgeFloat 4.2s ease-in-out infinite}
        .airnav-showcase-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(260px,28vw,340px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(45,212,191,.3) rgba(255,255,255,.035)}
        .airnav-showcase-grid::-webkit-scrollbar{height:7px}.airnav-showcase-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}.airnav-showcase-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(45,212,191,.35),rgba(59,130,246,.35));border-radius:999px}
        .airnav-shot{scroll-snap-align:start;appearance:none;border:0;padding:0;margin:0;text-align:left;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;animation:airnavScreenIn .6s cubic-bezier(.2,.7,.2,1) both,airnavScreenFloat 3.8s ease-in-out infinite}
        .airnav-shot:nth-child(1){animation-delay:.04s,0s}.airnav-shot:nth-child(2){animation-delay:.08s,.2s}.airnav-shot:nth-child(3){animation-delay:.12s,.4s}.airnav-shot:nth-child(4){animation-delay:.16s,.6s}.airnav-shot:nth-child(5){animation-delay:.2s,.8s}.airnav-shot:nth-child(6){animation-delay:.24s,1s}.airnav-shot:nth-child(n+7){animation-delay:.28s,1.2s}
        .airnav-shot:hover{transform:translateY(-5px);border-color:rgba(45,212,191,.3);box-shadow:0 18px 38px rgba(2,8,23,.3)}
        .airnav-shot:focus-visible{outline:3px solid rgba(45,212,191,.45);outline-offset:3px}
        .airnav-shot-media{display:block;position:relative;height:210px;overflow:hidden;background:rgba(8,20,32,.55)}
        .airnav-shot-media:after{content:'↗';position:absolute;right:10px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(2,8,23,.78);border:1px solid rgba(45,212,191,.25);color:#7ee8d6;font-size:.85rem;font-weight:800;box-shadow:0 6px 18px rgba(2,8,23,.25)}
        .airnav-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease,filter .35s ease}
        .airnav-shot:hover .airnav-shot-media img{transform:scale(1.03);filter:brightness(1.06)}
        .airnav-shot-copy{display:grid;gap:4px;padding:12px 13px 14px}.airnav-shot-copy b{font-size:.88rem;color:#e8f6f3;line-height:1.2}.airnav-shot-copy small{font-size:.74rem;line-height:1.45;color:#8fb0ab}
        .airnav-showcase-note{position:relative;z-index:1;margin:10px 3px 0;color:#7f9d98;font-size:.72rem}
        /* ===== LIGHTBOX ===== */
        .airnav-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(2,6,23,.88);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;touch-action:none;overscroll-behavior:contain}
        .airnav-lightbox.is-open{opacity:1;visibility:visible}.airnav-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff;transform-origin:50% 50%;will-change:transform;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
        .airnav-zoom-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.78);border:1px solid rgba(255,255,255,.12);color:#cbd5e1;font-size:.66rem;font-weight:700;letter-spacing:.03em;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .25s ease}
        .airnav-lightbox.is-open .airnav-zoom-hint{opacity:1}.airnav-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer;z-index:2}.airnav-zoom-controls{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px}.airnav-zoom-btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.3rem;font-weight:800;line-height:1;cursor:pointer;transition:transform .15s ease,background .15s ease}.airnav-zoom-btn:hover{transform:scale(1.08);background:rgba(45,212,191,.25)}
        /* ===== KEYFRAMES ===== */
        @keyframes airnavAmbientSpin{to{transform:rotate(360deg)}}@keyframes airnavSubtitleGlow{0%,100%{opacity:.85;text-shadow:0 0 12px rgba(45,212,191,.18)}50%{opacity:1;text-shadow:0 0 22px rgba(45,212,191,.4)}}
        @keyframes airnavTitleShine{0%{background-position:0% 50%}100%{background-position:300% 50%}}@keyframes airnavTitleLine{0%{transform:scaleX(0);opacity:.3}45%{transform:scaleX(1);opacity:1}70%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}
        @keyframes airnavTitleFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}@keyframes airnavTitleIn{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}@keyframes airnavDescIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes airnavLivePulse{0%,100%{box-shadow:0 0 0 rgba(45,212,191,0)}50%{box-shadow:0 0 18px rgba(45,212,191,.28),0 0 0 6px rgba(45,212,191,.07)}}@keyframes airnavLiveShine{0%,62%,100%{transform:translateX(-130%)}78%{transform:translateX(130%)}}
        @keyframes airnavBadgeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes airnavAwardShine{0%,66%,100%{transform:translateX(-130%)}82%{transform:translateX(130%)}}
        @keyframes airnavDetailIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes airnavIconGlow{0%,100%{box-shadow:0 0 0 rgba(45,212,191,0)}50%{box-shadow:0 0 14px rgba(45,212,191,.3),0 0 0 4px rgba(45,212,191,.07)}}
        @keyframes airnavPreviewGlow{0%,100%{border-color:rgba(45,212,191,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18)}50%{border-color:rgba(45,212,191,.26);box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 22px 55px rgba(45,212,191,.09)}}
        @keyframes airnavGlowPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes airnavPreviewSheen{0%,70%,100%{transform:translateX(-140%)}85%{transform:translateX(140%)}}
        @keyframes airnavBadgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes airnavScreenIn{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}@keyframes airnavScreenFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        /* ===== RESPONSIVE ===== */
        @media(max-width:900px){#projects .airnav-details{grid-template-columns:1fr;gap:9px;margin-top:20px}#projects .airnav-detail{grid-template-columns:34px 1fr;padding:13px}.airnav-showcase{padding:16px 14px 13px;border-radius:21px}.airnav-showcase-grid{grid-auto-columns:280px}.airnav-shot-media{height:190px}}
        @media(max-width:760px){.project-card.airnav-card-enhanced{grid-column:auto}.airnav-badge{width:100%;padding:10px 12px}.airnav-badge-link{margin-left:0}.airnav-showcase{margin:12px -2px 14px;padding:14px 12px 13px;border-radius:18px}.airnav-showcase-grid{grid-auto-columns:260px;gap:12px}.airnav-shot-media{height:180px}.airnav-showcase-head{align-items:center}.airnav-showcase-count{font-size:.66rem}.airnav-lightbox{padding:12px}.airnav-lightbox img{max-width:96vw;max-height:84vh}.airnav-lightbox-close{right:12px;top:12px}}
        @media(max-width:430px){.airnav-showcase-grid{grid-auto-columns:240px}.airnav-shot-media{height:165px}.airnav-showcase-head strong{font-size:.92rem}.airnav-project-subtitle{font-size:.84rem!important}}
        @media(prefers-reduced-motion:reduce){.project-card.airnav-card-enhanced::after,.airnav-card-enhanced .airnav-project-subtitle,.airnav-card-enhanced .airnav-title,.airnav-card-enhanced .airnav-title::after,#projects .airnav-badge,#projects .airnav-detail,#projects .airnav-detail-icon,.airnav-showcase,.airnav-showcase::before,.airnav-showcase::after,.airnav-showcase-count,.airnav-shot{animation:none!important;transition:none!important}}
      `;
      document.head.appendChild(style);
    }

    let lightbox=document.querySelector('.airnav-lightbox');
    if(!lightbox){
      lightbox=document.createElement('div');
      lightbox.className='airnav-lightbox';
      lightbox.setAttribute('role','dialog');
      lightbox.setAttribute('aria-modal','true');
      lightbox.setAttribute('aria-label','AirNav Assist screenshot preview');
      lightbox.innerHTML='<button class="airnav-lightbox-close" type="button" aria-label="Tutup preview">×</button><img class="airnav-lightbox-img" alt="AirNav Assist screenshot preview"><div class="airnav-zoom-hint">Pinch to zoom · double-tap to zoom · scroll to zoom</div><div class="airnav-zoom-controls"><button class="airnav-zoom-btn" type="button" data-zoom="-">−</button><button class="airnav-zoom-btn" type="button" data-zoom="+">+</button></div>';
      document.body.appendChild(lightbox);

      const img=lightbox.querySelector('img');
      let scale=1,tx=0,ty=0;
      const apply=()=>{img.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;};
      const reset=()=>{scale=1;tx=0;ty=0;img.style.transition='';apply();};
      const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';reset();};
      lightbox.querySelector('.airnav-lightbox-close').addEventListener('click',close);
      document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&lightbox.classList.contains('is-open')) close();});

      // Wheel zoom (desktop)
      lightbox.addEventListener('wheel',(event)=>{
        if(!lightbox.classList.contains('is-open')) return;
        event.preventDefault();
        const factor=event.deltaY<0?1.12:0.89;
        scale=Math.min(6,Math.max(1,scale*factor));
        img.style.transition='transform .12s ease';
        apply();
      },{passive:false});

      // Pointer Events — unified mouse drag + touch pinch/pan
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

      // Zoom buttons
      lightbox.querySelectorAll('.airnav-zoom-btn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
          scale=Math.min(6,Math.max(1,scale+(btn.dataset.zoom==='+'?0.6:-0.6)));
          img.style.transition='transform .15s ease';
          apply();
        });
      });
    }

    showcase.querySelectorAll('.airnav-shot').forEach((shot)=>{
      shot.addEventListener('click',()=>{
        const preview=lightbox.querySelector('img');
        preview.src=shot.dataset.full+'?v='+v;
        preview.alt=shot.querySelector('img')?.alt||'AirNav Assist screenshot preview';
        lightbox.classList.add('is-open');
        document.body.style.overflow='hidden';
      });
    });

    // fallback for broken images -> try raw github
    showcase.querySelectorAll('.airnav-shot img').forEach((img)=>{
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