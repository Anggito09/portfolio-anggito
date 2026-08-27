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

  const showcase=document.createElement('div');
  showcase.className='cityconnect-showcase';
  // Mirip BabyOps: sisain 2 dulu, nanti tinggal tambah <figure> lagi untuk upload baru
  showcase.innerHTML=`
    <div class="cityconnect-copy">
      <div class="cityconnect-award"><span>🏆</span><div><small>ACHIEVEMENT</small><strong>2nd Place · Smart City Competition</strong></div></div>
      <div class="cityconnect-actions">
        <a href="https://l1nk.dev/CityConnect" target="_blank" rel="noreferrer" class="cityconnect-btn primary">View Project <b>↗</b></a>
        <button type="button" class="cityconnect-btn gallery-jump">Explore Screens <b>↓</b></button>
      </div>
    </div>
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
  showcase.querySelector('.gallery-jump')?.addEventListener('click',()=>showcase.querySelector('.cityconnect-preview-grid')?.scrollIntoView({behavior:'smooth',block:'center'}));

  const style=document.createElement('style');
  style.textContent=`
    #projects .cityconnect-featured{grid-column:1/-1;position:relative;min-height:auto;padding:32px;border-color:rgba(96,165,250,.2);background:radial-gradient(circle at 88% 12%,rgba(59,130,246,.16),transparent 28%),radial-gradient(circle at 12% 92%,rgba(16,185,129,.09),transparent 30%),linear-gradient(135deg,#101b30 0%,#0f1a2c 50%,#101f28 100%);box-shadow:0 28px 70px rgba(2,8,23,.2)}
    #projects .cityconnect-featured:hover{border-color:rgba(96,165,250,.38);box-shadow:0 34px 78px rgba(2,8,23,.28)}
    #projects .cityconnect-featured>h3{font-size:clamp(1.8rem,3vw,2.55rem);line-height:1.08;margin-bottom:13px;max-width:800px}
    #projects .cityconnect-featured>p{max-width:900px;font-size:.95rem;line-height:1.72;color:#b5c2d8}
    #projects .cityconnect-featured>.project-topline{color:#7dd3fc}
    #projects .cityconnect-showcase{display:grid;grid-template-columns:270px minmax(0,1fr);gap:24px;align-items:stretch;margin:24px 0 4px}
    #projects .cityconnect-copy{display:flex;flex-direction:column;justify-content:space-between;gap:18px;padding:19px;border:1px solid rgba(125,211,252,.12);border-radius:19px;background:linear-gradient(160deg,rgba(15,35,59,.78),rgba(8,22,37,.56));box-shadow:inset 0 1px 0 rgba(255,255,255,.025)}
    #projects .cityconnect-award{display:flex;align-items:center;gap:12px;padding:13px;border-radius:15px;background:rgba(251,191,36,.055);border:1px solid rgba(251,191,36,.13)}
    #projects .cityconnect-award>span{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:13px;background:rgba(251,191,36,.1);font-size:1.25rem}
    #projects .cityconnect-award small{display:block;margin-bottom:2px;font-size:.55rem;font-weight:900;letter-spacing:.14em;color:#fbbf24}
    #projects .cityconnect-award strong{display:block;font-size:.77rem;line-height:1.35;color:#eaf3ff}
    #projects .cityconnect-actions{display:grid;gap:9px}
    #projects .cityconnect-btn{appearance:none;border:1px solid rgba(255,255,255,.1);min-height:42px;padding:10px 13px;border-radius:12px;background:rgba(255,255,255,.04);color:#e9f2ff;font:inherit;font-size:.76rem;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:.22s ease}
    #projects .cityconnect-btn:hover{transform:translateY(-2px);border-color:rgba(125,211,252,.35);background:rgba(125,211,252,.07)}
    #projects .cityconnect-btn.primary{border-color:rgba(96,165,250,.28);background:linear-gradient(135deg,#60a5fa,#67e8f9);color:#071423;box-shadow:0 10px 26px rgba(59,130,246,.18)}
    /* Mirip BabyOps preview - 1:1 style */
    #projects .cityconnect-preview{position:relative;margin:0;padding:22px 20px 18px;overflow:hidden;border:1px solid rgba(103,232,249,.12);border-radius:24px;background:linear-gradient(145deg,rgba(15,28,50,.9),rgba(8,17,34,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.16)}
    #projects .cityconnect-preview::before{content:"";position:absolute;width:280px;height:280px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(103,232,249,.12),transparent 68%);pointer-events:none}
    #projects .cityconnect-preview-head{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:8px 16px;margin-bottom:18px;padding:0 2px}
    #projects .cityconnect-preview-title{display:flex;align-items:center;flex-wrap:wrap;gap:8px 12px}
    #projects .cityconnect-preview-title span{font-size:.64rem;font-weight:900;letter-spacing:.16em;color:#67e8f9}
    #projects .cityconnect-preview-title strong{font-size:1.02rem;color:#f8fbff;letter-spacing:-.01em}
    #projects .cityconnect-preview-head small{grid-column:1/2;max-width:820px;font-size:.73rem;line-height:1.6;color:#93a6c2}
    #projects .cityconnect-preview-head small code{padding:1px 5px;border-radius:6px;background:rgba(255,255,255,.06);color:#c4d4ea;font-size:.68rem}
    #projects .cityconnect-scroll-hint{grid-column:2;grid-row:1/3;align-self:center;padding:7px 11px;border:1px solid rgba(103,232,249,.13);border-radius:999px;background:rgba(103,232,249,.055);font-size:.62rem;font-weight:700;letter-spacing:.04em;color:#8ea6c4;white-space:nowrap}
    #projects .cityconnect-scroll-hint b{margin-left:5px;color:#67e8f9;font-size:.82rem}
    #projects .cityconnect-preview-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(180px,16vw,210px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(103,232,249,.28) rgba(255,255,255,.035);align-items:start}
    #projects .cityconnect-preview-grid::-webkit-scrollbar{height:7px}
    #projects .cityconnect-preview-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}
    #projects .cityconnect-preview-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(103,232,249,.28),rgba(167,139,250,.28));border-radius:999px}
    #projects .cityconnect-screen{scroll-snap-align:start;margin:0;min-width:0;padding:12px 10px 11px;border:1px solid rgba(148,163,184,.13);border-radius:20px;background:linear-gradient(180deg,rgba(17,30,54,.72),rgba(5,14,29,.8));box-shadow:0 10px 24px rgba(2,8,23,.12);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease,background .28s ease;cursor:zoom-in}
    #projects .cityconnect-screen:hover{transform:translateY(-5px);border-color:rgba(103,232,249,.32);background:linear-gradient(180deg,rgba(19,36,63,.95),rgba(7,18,37,.95));box-shadow:0 18px 36px rgba(2,8,23,.27)}
    #projects .cityconnect-device{display:flex;align-items:center;justify-content:center;min-height:330px;padding:4px;border-radius:15px;background:radial-gradient(circle at 50% 45%,rgba(103,232,249,.055),transparent 63%);overflow:hidden}
    #projects .cityconnect-screen img{display:block;width:auto;max-width:100%;height:322px;object-fit:contain;border-radius:12px;filter:drop-shadow(0 12px 18px rgba(2,8,23,.28));transition:transform .28s ease,filter .28s ease}
    #projects .cityconnect-screen:hover img{transform:scale(1.025);filter:drop-shadow(0 15px 24px rgba(2,8,23,.34))}
    #projects .cityconnect-screen figcaption{min-height:44px;display:flex;align-items:center;justify-content:center;gap:7px;padding:9px 4px 0;font-size:.7rem;line-height:1.35;font-weight:750;text-align:center;color:#a9b8cc}
    #projects .cityconnect-screen figcaption b{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:7px;background:rgba(103,232,249,.13);border:1px solid rgba(103,232,249,.18);font-size:.51rem;color:#67e8f9}
    #projects .cityconnect-screen.image-unavailable{background:linear-gradient(145deg,#111d31,#0a1424)}
    #projects .cityconnect-preview-grid:focus-visible{outline:2px solid rgba(103,232,249,.45);outline-offset:3px;border-radius:14px}
    .cityconnect-lightbox{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(1,5,14,.91);backdrop-filter:blur(11px);animation:cityLightIn .18s ease}
    .cityconnect-lightbox img{max-width:min(1120px,92vw);max-height:88vh;object-fit:contain;border-radius:16px;box-shadow:0 30px 90px rgba(0,0,0,.5)}
    .cityconnect-lightbox button{position:fixed;right:24px;top:20px;width:42px;height:42px;border:1px solid rgba(255,255,255,.16);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.5rem;cursor:pointer}
    @keyframes cityLightIn{from{opacity:0}to{opacity:1}}
    @media(max-width:900px){#projects .cityconnect-featured{padding:27px}#projects .cityconnect-showcase{grid-template-columns:1fr}#projects .cityconnect-copy{display:grid;grid-template-columns:1fr auto;align-items:center}#projects .cityconnect-actions{grid-template-columns:1fr 1fr;min-width:300px}#projects .cityconnect-preview{padding:18px 16px 15px;border-radius:21px}#projects .cityconnect-preview-head{grid-template-columns:1fr;margin-bottom:15px}#projects .cityconnect-preview-head small{grid-column:1}#projects .cityconnect-scroll-hint{display:none}#projects .cityconnect-preview-grid{grid-auto-columns:176px;gap:11px}#projects .cityconnect-device{min-height:310px}#projects .cityconnect-screen img{height:302px}}
    @media(max-width:600px){#projects .cityconnect-featured{padding:20px 15px;border-radius:19px}#projects .cityconnect-featured>h3{font-size:1.65rem}#projects .cityconnect-featured>p{font-size:.84rem}#projects .cityconnect-copy{display:block;padding:14px}#projects .cityconnect-actions{grid-template-columns:1fr 1fr;min-width:0;margin-top:12px}#projects .cityconnect-preview{margin-top:4px;padding:15px 12px 13px;border-radius:18px}#projects .cityconnect-preview-title{gap:6px 9px}#projects .cityconnect-preview-title strong{font-size:.93rem}#projects .cityconnect-preview-head small{font-size:.67rem;line-height:1.55}#projects .cityconnect-preview-grid{grid-auto-columns:160px;gap:10px;padding-bottom:11px}#projects .cityconnect-screen{padding:9px 8px 9px;border-radius:17px}#projects .cityconnect-device{min-height:282px}#projects .cityconnect-screen img{height:274px;border-radius:10px}#projects .cityconnect-screen figcaption{min-height:40px;font-size:.64rem}.cityconnect-lightbox{padding:16px}.cityconnect-lightbox button{right:14px;top:14px}}
    @media(prefers-reduced-motion:reduce){#projects .cityconnect-screen,#projects .cityconnect-screen img,#projects .cityconnect-btn{transition:none!important}.cityconnect-lightbox{animation:none!important}}
  `;
  document.head.appendChild(style);
})();