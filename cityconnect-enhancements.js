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
  showcase.innerHTML=`
    <div class="cityconnect-copy">
      <div class="cityconnect-award"><span>🏆</span><div><small>ACHIEVEMENT</small><strong>2nd Place · Smart City Competition</strong></div></div>
      <div class="cityconnect-actions">
        <a href="https://l1nk.dev/CityConnect" target="_blank" rel="noreferrer" class="cityconnect-btn primary">View Project <b>↗</b></a>
        <button type="button" class="cityconnect-btn gallery-jump">Explore Screens <b>↓</b></button>
      </div>
    </div>
    <div class="cityconnect-visuals" aria-label="CityConnect visual showcase">
      <button class="cityconnect-shot cityconnect-shot-main" type="button" data-src="assets/cityconnect-homepage.webp" aria-label="Open CityConnect homepage preview">
        <img src="assets/cityconnect-homepage.webp" alt="CityConnect homepage and air quality dashboard" loading="lazy">
        <span><b>01</b> Homepage & Air Quality</span>
      </button>
      <button class="cityconnect-shot" type="button" data-src="assets/cityconnect-cityspot.webp" aria-label="Open CityConnect city map preview">
        <img src="assets/cityconnect-cityspot.webp" alt="CityConnect city map and air quality feature" loading="lazy">
        <span><b>02</b> SpotCity</span>
      </button>
      <button class="cityconnect-shot" type="button" data-src="assets/cityconnect-cityevent.webp" aria-label="Open CityConnect community feature preview">
        <img src="assets/cityconnect-cityevent.webp" alt="CityConnect community and city information feature" loading="lazy">
        <span><b>03</b> Community</span>
      </button>
      <button class="cityconnect-shot cityconnect-shot-wide" type="button" data-src="assets/cityconnect-poster.webp" aria-label="Open CityConnect project poster">
        <img src="assets/cityconnect-poster.webp" alt="CityConnect project poster" loading="lazy">
        <span><b>04</b> Project Poster</span>
      </button>
      <button class="cityconnect-shot cityconnect-shot-award" type="button" data-src="assets/cityconnect-juara-2.webp" aria-label="Open CityConnect award documentation">
        <img src="assets/cityconnect-juara-2.webp" alt="CityConnect second place award documentation" loading="lazy">
        <span><b>05</b> Award Documentation</span>
      </button>
    </div>`;

  card.insertBefore(showcase,chips || null);

  const addFallback=(img)=>{
    img.addEventListener('error',()=>{
      const src=img.getAttribute('src')||'';
      if(src.startsWith('assets/')){
        img.src=`https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/${src}`;
      } else {
        img.closest('.cityconnect-shot')?.classList.add('image-unavailable');
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

  showcase.querySelectorAll('.cityconnect-shot').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const img=btn.querySelector('img');
      openLightbox(btn.dataset.src || img.src,img.alt);
    });
  });
  showcase.querySelector('.gallery-jump')?.addEventListener('click',()=>showcase.querySelector('.cityconnect-visuals')?.scrollIntoView({behavior:'smooth',block:'center'}));

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
    #projects .cityconnect-visuals{display:grid;grid-template-columns:1.45fr 1fr 1fr;grid-template-rows:168px 168px;gap:10px;min-width:0}
    #projects .cityconnect-shot{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:0;background:#091321;cursor:zoom-in;box-shadow:0 12px 28px rgba(2,8,23,.2);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease}
    #projects .cityconnect-shot:hover{transform:translateY(-4px);border-color:rgba(125,211,252,.35);box-shadow:0 18px 34px rgba(2,8,23,.3)}
    #projects .cityconnect-shot-main{grid-row:1/3}
    #projects .cityconnect-shot-wide{grid-column:2/3}
    #projects .cityconnect-shot-award{grid-column:3/4}
    #projects .cityconnect-shot img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .4s ease;filter:saturate(.96) contrast(1.01)}
    #projects .cityconnect-shot-main img{object-fit:contain;background:linear-gradient(145deg,#0b1728,#0c1e31);padding:8px}
    #projects .cityconnect-shot-wide img,#projects .cityconnect-shot-award img{object-fit:contain;background:#0b1627;padding:7px}
    #projects .cityconnect-shot:hover img{transform:scale(1.025)}
    #projects .cityconnect-shot::after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(transparent,rgba(3,10,22,.78));pointer-events:none}
    #projects .cityconnect-shot span{position:absolute;z-index:2;left:10px;right:10px;bottom:9px;display:flex;align-items:center;gap:7px;color:#f3f8ff;font-size:.63rem;font-weight:800;text-align:left}
    #projects .cityconnect-shot span b{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:7px;background:rgba(103,232,249,.13);border:1px solid rgba(103,232,249,.18);font-size:.51rem;color:#67e8f9}
    #projects .cityconnect-shot.image-unavailable{background:linear-gradient(145deg,#111d31,#0a1424)}
    #projects .cityconnect-shot.image-unavailable::before{content:'Preview unavailable';position:absolute;inset:0;display:grid;place-items:center;color:#71839d;font-size:.7rem;font-weight:700}
    .cityconnect-lightbox{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(1,5,14,.91);backdrop-filter:blur(11px);animation:cityLightIn .18s ease}
    .cityconnect-lightbox img{max-width:min(1120px,92vw);max-height:88vh;object-fit:contain;border-radius:16px;box-shadow:0 30px 90px rgba(0,0,0,.5)}
    .cityconnect-lightbox button{position:fixed;right:24px;top:20px;width:42px;height:42px;border:1px solid rgba(255,255,255,.16);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:1.5rem;cursor:pointer}
    @keyframes cityLightIn{from{opacity:0}to{opacity:1}}
    @media(max-width:900px){#projects .cityconnect-featured{padding:27px}#projects .cityconnect-showcase{grid-template-columns:1fr}#projects .cityconnect-copy{display:grid;grid-template-columns:1fr auto;align-items:center}#projects .cityconnect-actions{grid-template-columns:1fr 1fr;min-width:300px}#projects .cityconnect-visuals{grid-template-columns:1.4fr 1fr;grid-template-rows:190px 160px 160px}#projects .cityconnect-shot-main{grid-row:1/3}#projects .cityconnect-shot-wide{grid-column:1/2;grid-row:3}#projects .cityconnect-shot-award{grid-column:2/3;grid-row:3}}
    @media(max-width:600px){#projects .cityconnect-featured{padding:20px 15px;border-radius:19px}#projects .cityconnect-featured>h3{font-size:1.65rem}#projects .cityconnect-featured>p{font-size:.84rem}#projects .cityconnect-copy{display:block;padding:14px}#projects .cityconnect-actions{grid-template-columns:1fr 1fr;min-width:0;margin-top:12px}#projects .cityconnect-visuals{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:10px;padding:2px 2px 8px;scrollbar-width:none}#projects .cityconnect-visuals::-webkit-scrollbar{display:none}#projects .cityconnect-shot{flex:0 0 78%;height:260px;scroll-snap-align:start}#projects .cityconnect-shot-main{flex-basis:86%}#projects .cityconnect-shot img,#projects .cityconnect-shot-main img,#projects .cityconnect-shot-wide img,#projects .cityconnect-shot-award img{object-fit:contain;padding:7px;background:#0b1627}.cityconnect-lightbox{padding:16px}.cityconnect-lightbox button{right:14px;top:14px}}
    @media(prefers-reduced-motion:reduce){#projects .cityconnect-shot,#projects .cityconnect-shot img,#projects .cityconnect-btn{transition:none!important}.cityconnect-lightbox{animation:none!important}}
  `;
  document.head.appendChild(style);
})();