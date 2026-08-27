(()=>{
  const cards=[...document.querySelectorAll('#projects .project-card')];
  const card=cards.find(el=>el.querySelector('h3')?.textContent.trim()==='CityConnect');
  if(!card || card.classList.contains('cityconnect-featured')) return;

  card.classList.add('cityconnect-featured');
  card.querySelector('.cityconnect-gallery')?.remove();

  const topline=card.querySelector('.project-topline');
  const title=card.querySelector('h3');
  const desc=card.querySelector('p');
  const chips=card.querySelector('.chips');
  const oldLink=card.querySelector('.text-link');

  if(topline) topline.textContent='SMART CITY · AWARD WINNING PROJECT';
  if(title) title.textContent='CityConnect — Smart City Platform for Jember';
  if(desc) desc.textContent='An integrated Smart City concept designed to improve urban connectivity, safety, environmental awareness, community participation, and local tourism through digital services including air-quality monitoring, public reporting, community forums, and city information.';
  if(chips) chips.innerHTML=['Smart City','Air Quality','Community Platform','Public Reporting','UX/UI','Award Winning'].map(x=>`<span>${x}</span>`).join('');
  if(oldLink) oldLink.remove();

  if(!card.querySelector('.cityconnect-award')){
    const award=document.createElement('div');
    award.className='cityconnect-award';
    award.innerHTML=`<span>🏆</span><div><small>ACHIEVEMENT</small><strong>2nd Place · Smart City Competition</strong></div>`;
    if(desc) desc.after(award);
  }

  if(!card.querySelector('.cityconnect-details')){
    const details=document.createElement('div');
    details.className='cityconnect-details';
    details.innerHTML=`
      <div class="cityconnect-detail">
        <span class="cityconnect-detail-icon">01</span>
        <div><strong>Air Quality Intelligence</strong><small>Real-time AQI monitoring with visual dashboards for environmental awareness.</small></div>
      </div>
      <div class="cityconnect-detail">
        <span class="cityconnect-detail-icon">02</span>
        <div><strong>Community & Safety</strong><small>Public reporting, community forums, and collaborative urban management.</small></div>
      </div>
      <div class="cityconnect-detail">
        <span class="cityconnect-detail-icon">03</span>
        <div><strong>City Discovery</strong><small>Integrated tourism and local information to connect citizens with their city.</small></div>
      </div>`;
    const awardEl=card.querySelector('.cityconnect-award');
    if(awardEl) awardEl.after(details);
    else if(desc) desc.after(details);
  }

  const showcase=document.createElement('div');
  showcase.className='cityconnect-showcase';
  // Mirip BabyOps 1:1 — tanpa tombol View Project / Explore Screens, sisain 2 dulu
  showcase.innerHTML=`
    <div class="cityconnect-preview" aria-label="CityConnect app screens">
      <div class="cityconnect-preview-head">
        <div class="cityconnect-preview-title"><span>APP PREVIEW</span><strong>CityConnect Mobile Experience</strong></div>
        <small>Preview awal 2 layar — tambah screens baru dengan upload ke <code>assets/</code> lalu duplikat &lt;figure&gt; di bawah.</small>
        <div class="cityconnect-scroll-hint" aria-hidden="true">Scroll to explore <b>→</b></div>
      </div>
      <div class="cityconnect-preview-grid" tabindex="0" aria-label="Scrollable CityConnect screen gallery">
        <figure class="cityconnect-screen" data-src="assets/cityconnect-homepage.webp" aria-label="Open CityConnect homepage preview">
          <div class="cityconnect-device"><img src="assets/cityconnect-homepage.webp" alt="CityConnect homepage and air quality dashboard" loading="lazy"></div>
          <figcaption>Homepage & Air Quality</figcaption>
        </figure>
        <figure class="cityconnect-screen" data-src="assets/cityconnect-cityspot.webp" aria-label="Open CityConnect city map preview">
          <div class="cityconnect-device"><img src="assets/cityconnect-cityspot.webp" alt="CityConnect city map and air quality feature" loading="lazy"></div>
          <figcaption>SpotCity</figcaption>
        </figure>
        <!-- TAMBAH SCREEN BARU DI SINI — contoh:
        <figure class="cityconnect-screen" data-src="assets/cityconnect-cityevent.webp"><div class="cityconnect-device"><img src="assets/cityconnect-cityevent.webp" alt="..."></div><figcaption>Community</figcaption></figure>
        <figure class="cityconnect-screen" data-src="assets/cityconnect-poster.webp"><div class="cityconnect-device"><img src="assets/cityconnect-poster.webp" alt="..."></div><figcaption>Project Poster</figcaption></figure>
        <figure class="cityconnect-screen" data-src="assets/cityconnect-juara-2.webp"><div class="cityconnect-device"><img src="assets/cityconnect-juara-2.webp" alt="..."></div><figcaption>Award Documentation</figcaption></figure>
        -->
      </div>
    </div>`;

  card.insertBefore(showcase,chips || null);

  const addFallback=(img)=>{
    img.addEventListener('error',()=>{
      const src=img.getAttribute('src')||'';
      if(src.startsWith('assets/')){
        img.src=`https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/${src}`;
      } else {
        img.closest('.cityconnect-screen')?.classList.add('image-unavailable');
      }
    },{once:true});
  };
  showcase.querySelectorAll('img').forEach(addFallback);

  const openLightbox=(src,alt)=>{
    const overlay=document.createElement('div');
    overlay.className='cityconnect-lightbox';
    overlay.innerHTML=`<button type="button" aria-label="Close preview">×</button><img src="${src}" alt="${alt.replace(/"/g,'&quot;')}">`;
    const img=overlay.querySelector('img');
    addFallback(img);
    const close=()=>overlay.remove();
    overlay.addEventListener('click',e=>{if(e.target===overlay) close();});
    overlay.querySelector('button').addEventListener('click',close);
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
    document.body.appendChild(overlay);
  };

  showcase.querySelectorAll('.cityconnect-screen').forEach(fig=>{
    fig.addEventListener('click',()=>{
      const img=fig.querySelector('img');
      openLightbox(fig.dataset.src || img.src,img.alt);
    });
  });

  const style=document.createElement('style');
  style.textContent=`
    #projects .cityconnect-featured{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;min-height:auto;padding:32px;border-color:rgba(96,165,250,.2);background:radial-gradient(circle at 88% 12%,rgba(59,130,246,.16),transparent 28%),radial-gradient(circle at 12% 92%,rgba(16,185,129,.09),transparent 30%),linear-gradient(135deg,#101b30 0%,#0f1a2c 50%,#101f28 100%);box-shadow:0 28px 70px rgba(2,8,23,.2)}
    #projects .cityconnect-featured::after{content:"";position:absolute;inset:-45%;z-index:-1;background:conic-gradient(from 180deg,transparent 0 76%,rgba(59,130,246,.07) 82%,rgba(103,232,249,.06) 88%,transparent 94%);animation:cityAmbientSpin 16s linear infinite;pointer-events:none}
    #projects .cityconnect-featured:hover{border-color:rgba(96,165,250,.38);box-shadow:0 34px 78px rgba(2,8,23,.28)}
    #projects .cityconnect-featured .project-topline{display:inline-flex;align-items:center;width:fit-content;padding:7px 11px;border:1px solid rgba(125,211,252,.2);border-radius:999px;background:rgba(59,130,246,.07);color:#7dd3fc;letter-spacing:.1em;font-size:.7rem;font-weight:800;animation:cityBadgeFloat 4.6s ease-in-out infinite}
    #projects .cityconnect-featured>h3{max-width:800px;margin-top:15px;font-size:clamp(1.8rem,3vw,2.55rem);line-height:1.08;margin-bottom:13px;background:linear-gradient(100deg,#fff 12%,#dbeafe 42%,#93c5fd 67%,#67e8f9 88%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:cityTitleReveal .85s cubic-bezier(.2,.75,.2,1) both, cityTitleFlow 8s ease-in-out 1s infinite}
    #projects .cityconnect-featured>p{max-width:900px;margin-top:16px;font-size:.95rem;line-height:1.72;color:#b5c2d8;text-align:justify!important;text-justify:inter-word;animation:cityFadeUp .8s .12s both}
    /* CityConnect now 1:1 BabyOps — no side buttons, award like BabyOps */
    #projects .cityconnect-showcase{display:block;margin:24px 0 4px}
    #projects .cityconnect-award{display:flex;align-items:center;gap:13px;width:fit-content;max-width:100%;margin:18px 0 4px;padding:12px 15px;border:1px solid rgba(251,191,36,.2);border-radius:15px;background:linear-gradient(135deg,rgba(251,191,36,.09),rgba(245,158,11,.035));box-shadow:inset 0 1px 0 rgba(255,255,255,.025)}
    #projects .cityconnect-award>span{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;border-radius:12px;background:rgba(251,191,36,.12);font-size:1.25rem}
    #projects .cityconnect-award small{display:block;font-size:.53rem;font-weight:900;letter-spacing:.14em;color:#fbbf24}
    #projects .cityconnect-award strong{display:block;margin-top:2px;font-size:.79rem;line-height:1.35;color:#fff4c7}
    /* Header details ala BabyOps — 3 poin premium untuk CityConnect */
    #projects .cityconnect-details{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0 16px}
    #projects .cityconnect-detail{display:grid;grid-template-columns:36px minmax(0,1fr);gap:11px;align-items:start;padding:15px;border:1px solid rgba(125,211,252,.13);border-radius:16px;background:linear-gradient(145deg,rgba(15,35,59,.55),rgba(8,22,37,.45));transition:transform .28s ease,border-color .28s ease,background .28s ease,box-shadow .28s ease;animation:cityDetailIn .7s both}
    #projects .cityconnect-detail:nth-child(2){animation-delay:.08s}#projects .cityconnect-detail:nth-child(3){animation-delay:.16s}
    #projects .cityconnect-detail:hover{transform:translateY(-4px);border-color:rgba(125,211,252,.32);background:linear-gradient(145deg,rgba(17,45,75,.75),rgba(10,30,51,.65));box-shadow:0 14px 30px rgba(2,8,23,.18)}
    #projects .cityconnect-detail-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,rgba(96,165,250,.15),rgba(103,232,249,.10));border:1px solid rgba(125,211,252,.16);color:#7dd3fc;font-size:.66rem;font-weight:800;animation:cityIconGlow 3s ease-in-out infinite}
    #projects .cityconnect-detail:nth-child(2) .cityconnect-detail-icon{animation-delay:.5s}#projects .cityconnect-detail:nth-child(3) .cityconnect-detail-icon{animation-delay:1s}
    #projects .cityconnect-detail strong{display:block;font-size:.86rem;line-height:1.35;color:#f8fbff}#projects .cityconnect-detail small{display:block;margin-top:5px;font-size:.72rem;line-height:1.55;color:#8fb8d8}
    @keyframes cityDetailIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes cityIconGlow{0%,100%{box-shadow:0 0 0 rgba(96,165,250,0)}50%{box-shadow:0 0 14px rgba(96,165,250,.25),0 0 0 4px rgba(96,165,250,.07)}}
    /* Mirip BabyOps preview - 1:1 style */
    #projects .cityconnect-preview{position:relative;margin:0;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(103,232,249,.12);border-radius:24px;background:linear-gradient(145deg,rgba(15,28,50,.9),rgba(8,17,34,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.16)}
    #projects .cityconnect-preview::before{content:"";position:absolute;width:280px;height:280px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(103,232,249,.12),transparent 68%);pointer-events:none}
    #projects .cityconnect-preview-head{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:8px 16px;margin-bottom:16px;padding:0 2px}
    #projects .cityconnect-preview-title{display:flex;align-items:center;flex-wrap:wrap;gap:8px 12px}
    #projects .cityconnect-preview-title span{font-size:.64rem;font-weight:900;letter-spacing:.16em;color:#67e8f9}
    #projects .cityconnect-preview-title strong{font-size:1.02rem;color:#f8fbff;letter-spacing:-.01em}
    #projects .cityconnect-preview-head small{grid-column:1/2;max-width:820px;font-size:.72rem;line-height:1.6;color:#93a6c2}
    #projects .cityconnect-preview-head small code{padding:1px 5px;border-radius:6px;background:rgba(255,255,255,.06);color:#c4d4ea;font-size:.68rem}
    #projects .cityconnect-scroll-hint{grid-column:2;grid-row:1/3;align-self:center;padding:7px 11px;border:1px solid rgba(103,232,249,.13);border-radius:999px;background:rgba(103,232,249,.055);font-size:.62rem;font-weight:700;letter-spacing:.04em;color:#8ea6c4;white-space:nowrap}
    #projects .cityconnect-scroll-hint b{margin-left:5px;color:#67e8f9;font-size:.82rem}
    #projects .cityconnect-preview-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(158px,13.5vw,175px);gap:10px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 12px;scrollbar-width:thin;scrollbar-color:rgba(103,232,249,.28) rgba(255,255,255,.035);align-items:start;justify-content:start}
    #projects .cityconnect-preview-grid::-webkit-scrollbar{height:7px}
    #projects .cityconnect-preview-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}
    #projects .cityconnect-preview-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(103,232,249,.28),rgba(167,139,250,.28));border-radius:999px}
    /* Hapus background putih — samain BabyOps biar mengambang clean */
    #projects .cityconnect-screen{scroll-snap-align:start;margin:0;min-width:0;padding:6px 6px 8px;border:0;border-radius:0;background:transparent;box-shadow:none;transition:transform .28s ease,filter .28s ease;cursor:zoom-in}
    #projects .cityconnect-screen:hover{transform:translateY(-6px);border-color:transparent;background:transparent;box-shadow:none}
    #projects .cityconnect-device{display:flex;align-items:center;justify-content:center;min-height:auto;padding:0;border-radius:0;background:transparent;overflow:visible}
    #projects .cityconnect-screen img{display:block;width:auto;max-width:100%;height:322px;object-fit:contain;border-radius:22px;background:transparent;filter:drop-shadow(0 18px 28px rgba(2,8,23,.38)) drop-shadow(0 6px 12px rgba(2,8,23,.22));transition:transform .28s ease,filter .28s ease}
    #projects .cityconnect-screen:hover img{transform:translateY(-2px) scale(1.02);filter:drop-shadow(0 22px 36px rgba(2,8,23,.45)) drop-shadow(0 8px 16px rgba(2,8,23,.28))}
    #projects .cityconnect-screen figcaption{min-height:44px;display:flex;align-items:center;justify-content:center;gap:7px;padding:9px 4px 0;font-size:.7rem;line-height:1.35;font-weight:750;text-align:center;color:#a9b8cc}
    #projects .cityconnect-screen figcaption b{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:7px;background:rgba(103,232,249,.13);border:1px solid rgba(103,232,249,.18);font-size:.51rem;color:#67e8f9}
    #projects .cityconnect-screen.image-unavailable{background:linear-gradient(145deg,#111d31,#0a1424)}
    #projects .cityconnect-preview-grid:focus-visible{outline:2px solid rgba(103,232,249,.45);outline-offset:3px;border-radius:14px}
    .cityconnect-lightbox{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(1,5,14,.91);backdrop-filter:blur(11px);animation:cityLightIn .18s ease}
    .cityconnect-lightbox img{max-width:min(1120px,92vw);max-height:88vh;object-fit:contain;border-radius:16px;box-shadow:0 30px 90px rgba(0,0,0,.5)}
    .cityconnect-lightbox button{position:fixed;right:24px;top:20px;width:42px;height:42px;border:1px solid rgba(255,255,255,.16);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.5rem;cursor:pointer}
    @keyframes cityLightIn{from{opacity:0}to{opacity:1}}@keyframes cityAmbientSpin{to{transform:rotate(360deg)}}@keyframes cityBadgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes cityTitleReveal{from{opacity:0;transform:translateY(18px);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}@keyframes cityTitleFlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}@keyframes cityFadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    @media(max-width:900px){#projects .cityconnect-featured{padding:27px}#projects .cityconnect-details{grid-template-columns:1fr;gap:9px;margin-top:20px}#projects .cityconnect-detail{grid-template-columns:34px 1fr;padding:13px}#projects .cityconnect-preview{padding:16px 14px 13px;border-radius:21px}#projects .cityconnect-preview-head{grid-template-columns:1fr;margin-bottom:14px}#projects .cityconnect-preview-head small{grid-column:1}#projects .cityconnect-scroll-hint{display:none}#projects .cityconnect-preview-grid{grid-auto-columns:155px;gap:10px}#projects .cityconnect-device{min-height:310px}#projects .cityconnect-screen img{height:302px}}
    @media(max-width:600px){#projects .cityconnect-featured{padding:20px 15px;border-radius:19px}#projects .cityconnect-featured>h3{font-size:1.65rem}#projects .cityconnect-featured>p{font-size:.84rem}#projects .cityconnect-preview{margin-top:4px;padding:14px 10px 12px;border-radius:18px}#projects .cityconnect-preview-title{gap:6px 9px}#projects .cityconnect-preview-title strong{font-size:.93rem}#projects .cityconnect-preview-head small{font-size:.67rem;line-height:1.55}#projects .cityconnect-preview-grid{grid-auto-columns:140px;gap:8px;padding-bottom:10px}#projects .cityconnect-screen{padding:8px 6px 7px;border-radius:16px}#projects .cityconnect-device{min-height:282px}#projects .cityconnect-screen img{height:274px;border-radius:10px}#projects .cityconnect-screen figcaption{min-height:40px;font-size:.64rem}.cityconnect-lightbox{padding:16px}.cityconnect-lightbox button{right:14px;top:14px}}
    @media(prefers-reduced-motion:reduce){#projects .cityconnect-featured::after,#projects .cityconnect-featured .project-topline,#projects .cityconnect-featured>h3,#projects .cityconnect-featured>p,#projects .cityconnect-detail,#projects .cityconnect-detail-icon,#projects .cityconnect-screen,#projects .cityconnect-screen img{animation:none!important;transition:none!important}.cityconnect-lightbox{animation:none!important}}
  `;
  document.head.appendChild(style);
})();