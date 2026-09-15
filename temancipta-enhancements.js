(()=>{
  const card=[...document.querySelectorAll('#projects .project-card')].find((item)=>(item.querySelector('h3')?.textContent.trim()||'').startsWith('Temancipta'));
  if(!card || card.dataset.temancipta==='true') return;
  card.dataset.temancipta='true';
  card.classList.add('temancipta-enhanced');

  const style=document.createElement('style');
  style.textContent=`
    .project-card.temancipta-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(233,162,91,.28)!important;background:radial-gradient(circle at 90% 8%,rgba(233,162,91,.16),transparent 28%),radial-gradient(circle at 10% 94%,rgba(154,74,30,.12),transparent 30%),linear-gradient(145deg,rgba(43,29,18,.98),rgba(18,12,8,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
    .project-card.temancipta-enhanced::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(233,162,91,.08) 82%,rgba(18,183,106,.06) 88%,transparent 94%);animation:temanciptaAmbient 16s linear infinite;pointer-events:none}
    @keyframes temanciptaAmbient{to{transform:rotate(360deg)}}
    #projects .temancipta-badge{display:flex;align-items:center;gap:12px;margin:14px 0 12px;padding:12px 14px;border-radius:16px;border:1px solid rgba(233,162,91,.28);background:linear-gradient(135deg,rgba(154,74,30,.28),rgba(43,29,18,.55))}
    #projects .temancipta-badge-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#9a4a1e,#e9a25b);font-size:1.2rem;flex-shrink:0}
    #projects .temancipta-badge small{display:block;font-size:.62rem;letter-spacing:.12em;font-weight:800;color:#e9c9a6}
    #projects .temancipta-badge strong{display:block;color:#fff7f0}
    #projects .temancipta-badge em{display:block;font-style:normal;font-size:.78rem;color:#d8c3a8}
    #projects .temancipta-badge-link{margin-left:auto;color:#2b1d12;background:#e9a25b;border-radius:999px;padding:8px 12px;font-size:.78rem;font-weight:800;text-decoration:none;white-space:nowrap}
    #projects .temancipta-details{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:8px 0 14px}
    #projects .temancipta-detail{display:flex;gap:10px;padding:12px;border-radius:14px;border:1px solid rgba(233,162,91,.18);background:rgba(255,247,240,.04)}
    #projects .temancipta-detail-icon{min-width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;background:#9a4a1e;color:#fff7f0}
    #projects .temancipta-detail strong{display:block;color:#fff7f0;font-size:.86rem}
    #projects .temancipta-detail small{display:block;color:#d8c3a8;font-size:.76rem;line-height:1.45}
    #projects .temancipta-video{margin:4px 0 8px;border-radius:18px;overflow:hidden;border:1px solid rgba(233,162,91,.22);background:#100b07;box-shadow:0 18px 40px rgba(0,0,0,.35)}
    #projects .temancipta-video-head{display:flex;justify-content:space-between;gap:10px;padding:12px 14px 0;color:#e9c9a6;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    #projects .temancipta-video video{display:block;width:100%;max-height:420px;background:#000}
    #projects .temancipta-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    #projects .temancipta-actions a{display:inline-flex;align-items:center;padding:9px 13px;border-radius:999px;font-size:.8rem;font-weight:800;text-decoration:none}
    #projects .temancipta-actions .primary{background:linear-gradient(135deg,#9a4a1e,#e9a25b);color:#2b1d12}
    /* ===== SHOWCASE SLIDER ala Airnav/Mutant ===== */
    #projects .temancipta-showcase{position:relative;margin:12px 0 14px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(233,162,91,.2);border-radius:24px;background:linear-gradient(145deg,rgba(38,26,16,.92),rgba(18,12,8,.75));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18)}
    #projects .temancipta-showcase::before{content:"";position:absolute;width:300px;height:300px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(233,162,91,.14),transparent 68%);pointer-events:none}
    #projects .temancipta-showcase-head{position:relative;z-index:1;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 12px}
    #projects .temancipta-showcase-head>div{display:grid;gap:3px}
    #projects .temancipta-showcase-kicker{font-size:.69rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#e9a25b}
    #projects .temancipta-showcase-head strong{font-size:1.02rem;color:#fff7f0;letter-spacing:-.01em}
    #projects .temancipta-showcase-count{flex:none;padding:6px 10px;border-radius:999px;background:rgba(233,162,91,.1);border:1px solid rgba(233,162,91,.25);color:#e9c9a6;font-size:.72rem;font-weight:800}
    #projects .temancipta-showcase-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(260px,28vw,340px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(233,162,91,.35) rgba(255,255,255,.035)}
    #projects .temancipta-showcase-grid::-webkit-scrollbar{height:7px}
    #projects .temancipta-showcase-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}
    #projects .temancipta-showcase-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(233,162,91,.4),rgba(154,74,30,.4));border-radius:999px}
    #projects .temancipta-shot{scroll-snap-align:start;appearance:none;border:1px solid rgba(255,255,255,.07);padding:0;margin:0;text-align:left;background:rgba(255,255,255,.03);border-radius:16px;overflow:hidden;cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease}
    #projects .temancipta-shot:hover{transform:translateY(-5px);border-color:rgba(233,162,91,.4);box-shadow:0 18px 38px rgba(2,8,23,.3)}
    #projects .temancipta-shot:focus-visible{outline:3px solid rgba(233,162,91,.5);outline-offset:3px}
    #projects .temancipta-shot-media{display:block;position:relative;height:210px;overflow:hidden;background:rgba(20,14,8,.6)}
    #projects .temancipta-shot-media:after{content:'\\2197';position:absolute;right:10px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(8,5,2,.8);border:1px solid rgba(233,162,91,.3);color:#e9c9a6;font-size:.85rem;font-weight:800}
    #projects .temancipta-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease,filter .35s ease}
    #projects .temancipta-shot:hover .temancipta-shot-media img{transform:scale(1.03);filter:brightness(1.06)}
    #projects .temancipta-shot-copy{display:grid;gap:4px;padding:12px 13px 14px}
    #projects .temancipta-shot-copy b{font-size:.88rem;color:#fff3e6;line-height:1.2}
    #projects .temancipta-shot-copy small{font-size:.74rem;line-height:1.45;color:#c9a87f}
    #projects .temancipta-showcase-note{position:relative;z-index:1;margin:10px 3px 0;color:#a98a68;font-size:.72rem}
    .temancipta-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(8,5,2,.92);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;touch-action:none;overscroll-behavior:contain}
    .temancipta-lightbox.is-open{opacity:1;visibility:visible}
    .temancipta-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff;transform-origin:50% 50%;will-change:transform;touch-action:none;user-select:none;-webkit-user-select:none}
    .temancipta-zoom-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);padding:7px 12px;border-radius:999px;background:rgba(20,12,8,.8);border:1px solid rgba(255,255,255,.12);color:#e9c9a6;font-size:.66rem;font-weight:700;letter-spacing:.03em;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .25s ease}
    .temancipta-lightbox.is-open .temancipta-zoom-hint{opacity:1}
    .temancipta-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer;z-index:2}
    .temancipta-zoom-controls{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px}
    .temancipta-zoom-btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(20,12,8,.8);color:#fff;font-size:1.3rem;font-weight:800;line-height:1;cursor:pointer}
    @media(max-width:900px){#projects .temancipta-details{grid-template-columns:1fr 1fr}#projects .temancipta-showcase-grid{grid-auto-columns:280px}#projects .temancipta-shot-media{height:190px}}
    @media(max-width:760px){.project-card.temancipta-enhanced{grid-column:auto}#projects .temancipta-badge{flex-wrap:wrap}#projects .temancipta-badge-link{margin-left:0}#projects .temancipta-details{grid-template-columns:1fr}#projects .temancipta-showcase{padding:14px 12px 13px;border-radius:18px}#projects .temancipta-showcase-grid{grid-auto-columns:260px}#projects .temancipta-shot-media{height:180px}.temancipta-lightbox{padding:12px}.temancipta-lightbox img{max-width:96vw;max-height:84vh}.temancipta-lightbox-close{right:12px;top:12px}}
    @media(prefers-reduced-motion:reduce){.project-card.temancipta-enhanced::after{animation:none!important}}
  `;
  document.head.appendChild(style);

  const title=card.querySelector('h3');
  const badge=document.createElement('div');
  badge.className='temancipta-badge';
  badge.innerHTML=`<span class="temancipta-badge-icon">☕</span><div><small>LIVE PRODUCT · UMKM OPERATIONS</small><strong>Order → kitchen → TV call → finance → AI</strong><em>Cashier, queue display, finance &amp; insights in one app</em></div><a class="temancipta-badge-link" href="https://app.temancipta.workers.dev/" target="_blank" rel="noreferrer">Open live demo ↗</a>`;
  title.after(badge);

  const details=document.createElement('div');
  details.className='temancipta-details';
  details.innerHTML=`
    <div class="temancipta-detail"><span class="temancipta-detail-icon">01</span><div><strong>POS &amp; receipts</strong><small>3-step cashier, discount, tax/service, QRIS/bank, idempotent order IDs.</small></div></div>
    <div class="temancipta-detail"><span class="temancipta-detail-icon">02</span><div><strong>Kitchen + voice TV</strong><small>Status machine with SLA badges, search, and Indonesian queue announcements.</small></div></div>
    <div class="temancipta-detail"><span class="temancipta-detail-icon">03</span><div><strong>Operations analytics</strong><small>Peak hours, on-target %, slow/dead menus, staff speed — not vanity dashboards.</small></div></div>
    <div class="temancipta-detail"><span class="temancipta-detail-icon">04</span><div><strong>Grounded AI</strong><small>5-section cafe briefing from live numbers, with a rules fallback if the model fails.</small></div></div>`;
  badge.after(details);

  const video=document.createElement('div');
  video.className='temancipta-video';
  video.innerHTML=`
    <div class="temancipta-video-head"><span>Product walkthrough</span><span>Temancipta for UMKM</span></div>
    <video controls playsinline preload="metadata" aria-label="Temancipta product introduction video">
      <source src="assets/temancipta/temancipta-perkenalan.mp4" type="video/mp4">
    </video>`;
  details.after(video);

  const shots=[
    ['temancipta-login.png','Login','Role-based sign-in'],
    ['temancipta-kasir.png','Cashier','Point of sale & cart'],
    ['temancipta-bayar-tunai.png','Tunai','Cash payment'],
    ['temancipta-bayar-kartu.png','Kartu','Card / bank transfer'],
    ['temancipta-bayar-qris.png','QRIS','QR payment'],
    ['temancipta-dapur.png','Kitchen','Kitchen board & SLA alerts'],
    ['temancipta-riwayat.png','History','Orders & receipts'],
    ['temancipta-riwayat-2.png','History Detail','Wait-time breakdown'],
    ['temancipta-keuangan.png','Finance','Income & expenses'],
    ['temancipta-keuangan-1.png','Finance Charts','Weekly bars & trends'],
    ['temancipta-keuangan-3.png','Expenses','Cost tracking'],
    ['temancipta-analisis-ai.png','AI Insights','Operations briefing'],
    ['temancipta-analisis-ai-2.png','AI Details','Slow & dead menus'],
    ['temancipta-pengaturan.png','Settings','Targets, tax & staff'],
  ];
  const v='20260916-temancipta-slide';
  const gallery=document.createElement('div');
  gallery.className='temancipta-showcase';
  gallery.setAttribute('aria-label','Temancipta app screenshots');
  gallery.innerHTML=`<div class="temancipta-showcase-head"><div><span class="temancipta-showcase-kicker">Selected Interfaces</span><strong>Temancipta Cafe Operations Platform</strong></div><span class="temancipta-showcase-count">${String(shots.length).padStart(2,'0')} screens</span></div>
    <div class="temancipta-showcase-grid" tabindex="0" aria-label="Scrollable Temancipta screen gallery">`+shots.map(([f,t,d])=>`<button class="temancipta-shot" type="button" data-full="assets/temancipta/${f}" aria-label="Open ${t} preview"><span class="temancipta-shot-media"><img src="assets/temancipta/${f}?v=${v}" alt="Temancipta ${t} screen" loading="lazy" decoding="async"></span><span class="temancipta-shot-copy"><b>${t}</b><small>${d}</small></span></button>`).join('')+`</div>
    <div class="temancipta-showcase-note">Scroll to explore all screens — click an image for full size. Total ${shots.length} screens.</div>`;
  video.after(gallery);

  let lightbox=document.querySelector('.temancipta-lightbox');
  if(!lightbox){
    lightbox=document.createElement('div');
    lightbox.className='temancipta-lightbox';
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label','Temancipta screenshot preview');
    lightbox.innerHTML='<button class="temancipta-lightbox-close" type="button" aria-label="Close preview">×</button><img alt="Temancipta screenshot preview"><div class="temancipta-zoom-hint">Pinch to zoom · double-tap to zoom · scroll to zoom</div><div class="temancipta-zoom-controls"><button class="temancipta-zoom-btn" type="button" data-zoom="-">−</button><button class="temancipta-zoom-btn" type="button" data-zoom="+">+</button></div>';
    document.body.appendChild(lightbox);
    const img=lightbox.querySelector('img');
    let scale=1,tx=0,ty=0;
    const apply=()=>{img.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;};
    const reset=()=>{scale=1;tx=0;ty=0;img.style.transition='';apply();};
    const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';reset();};
    lightbox.querySelector('.temancipta-lightbox-close').addEventListener('click',close);
    document.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&lightbox.classList.contains('is-open')) close();});
    lightbox.addEventListener('wheel',(e)=>{
      if(!lightbox.classList.contains('is-open')) return;
      e.preventDefault();
      const f=e.deltaY<0?1.12:0.89;
      scale=Math.min(6,Math.max(1,scale*f));
      img.style.transition='transform .12s ease';
      apply();
    },{passive:false});
    const pointers={};
    let gesture=null,lastTap=0,suppressClose=false;
    lightbox.addEventListener('pointerdown',(e)=>{
      if(!lightbox.classList.contains('is-open')) return;
      pointers[e.pointerId]={x:e.clientX,y:e.clientY,moved:false};
      const ids=Object.keys(pointers);
      if(ids.length===2){
        const [a,b]=ids;
        gesture={type:'pinch',dist:Math.hypot(pointers[a].x-pointers[b].x,pointers[a].y-pointers[b].y),scale,tx,ty,mx:(pointers[a].x+pointers[b].x)/2,my:(pointers[a].y+pointers[b].y)/2};
        img.style.transition='';
      }else if(ids.length===1&&scale>1){
        gesture={type:'pan',x:e.clientX,y:e.clientY,tx,ty};
        img.style.transition='';
      }
    });
    window.addEventListener('pointermove',(e)=>{
      if(!lightbox.classList.contains('is-open')||!gesture||!pointers[e.pointerId]) return;
      pointers[e.pointerId]={x:e.clientX,y:e.clientY,moved:true};
      const ids=Object.keys(pointers);
      if(ids.length===2){
        const [a,b]=ids;
        const d=Math.hypot(pointers[a].x-pointers[b].x,pointers[a].y-pointers[b].y);
        const mx=(pointers[a].x+pointers[b].x)/2,my=(pointers[a].y+pointers[b].y)/2;
        scale=Math.min(6,Math.max(1,gesture.scale*(d/gesture.dist)));
        tx=gesture.tx+(mx-gesture.mx);ty=gesture.ty+(my-gesture.my);
        apply();
      }else if(ids.length===1&&gesture.type==='pan'){
        tx=gesture.tx+(e.clientX-gesture.x);ty=gesture.ty+(e.clientY-gesture.y);
        apply();
      }
      e.preventDefault();
    });
    const up=(e)=>{
      const p=pointers[e.pointerId];
      if(p) delete pointers[e.pointerId];
      if(p&&!p.moved&&Object.keys(pointers).length===0){
        const now=Date.now();
        if(now-lastTap<320){scale=scale>1?1:2.2;tx=0;ty=0;img.style.transition='transform .25s ease';apply();}
        lastTap=now;
      }
      if(p&&p.moved) suppressClose=true;
      gesture=null;
      if(!Object.keys(pointers).length) setTimeout(()=>{suppressClose=false;},80);
    };
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',up);
    lightbox.addEventListener('click',(e)=>{if(e.target===lightbox&&!suppressClose) close();});
    lightbox.querySelectorAll('.temancipta-zoom-btn').forEach((btn)=>{
      btn.addEventListener('click',()=>{
        scale=Math.min(6,Math.max(1,scale+(btn.dataset.zoom==='+'?0.6:-0.6)));
        img.style.transition='transform .15s ease';
        apply();
      });
    });
  }
  const lbImg=lightbox.querySelector('img');
  gallery.querySelectorAll('.temancipta-shot').forEach((fig)=>{
    fig.addEventListener('click',()=>{
      lbImg.src=fig.dataset.full+`?v=${v}`;
      lbImg.alt=fig.getAttribute('aria-label')||'Temancipta screenshot preview';
      lightbox.classList.add('is-open');
      document.body.style.overflow='hidden';
    });
  });
  gallery.querySelectorAll('.temancipta-shot img').forEach((im)=>{
    im.addEventListener('error',()=>{
      const src=im.getAttribute('src')||'';
      if(src.startsWith('assets/')){
        const clean=src.split('?')[0];
        im.src=`https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/${clean}?v=${v}`;
      }
    },{once:true});
  });

  const oldLink=card.querySelector('a.text-link');
  if(oldLink) oldLink.remove();
  const actions=document.createElement('div');
  actions.className='temancipta-actions';
  actions.innerHTML=`<a class="primary" href="https://app.temancipta.workers.dev/" target="_blank" rel="noreferrer">Live Demo ↗</a>`;
  gallery.after(actions);
})();
