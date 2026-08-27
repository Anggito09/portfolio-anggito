(()=>{
  const card=document.querySelector('#projects .project-card');
  // Lampu ala BabyOps — bohlam kecil di tengah atas dengan glow
  if(card && !card.querySelector('.healthcare-lamp-bulb')){
    const bulb=document.createElement('div');
    bulb.className='healthcare-lamp-bulb';
    bulb.setAttribute('aria-hidden','true');
    card.prepend(bulb);
  }
  const old=card?.querySelector('.healthcare-evidence');
  if(!old) return;

  const slides=[
    {src:'assets/healthcare-field-01.webp',caption:'Hospital Coordination · Implementation Discussion'},
    {src:'assets/healthcare-field-02.webp',caption:'Hospital Coordination · Stakeholder Session'},
    {src:'assets/healthcare-field-03.webp',caption:'SIMRS Implementation · Hospital User Training & Coordination'},
    {src:'assets/healthcare-field-04.webp',caption:'Implementation Workshop · Hospital Stakeholder Discussion'},
    {src:'assets/healthcare-field-05.webp',caption:'System Configuration · On-Site Technical Assistance'},
    {src:'assets/healthcare-field-06.webp',caption:'Technical Coordination · Integration & Implementation Review'},
    {src:'assets/healthcare-field-07.webp',caption:'On-Site Support · Operational & Technical Team'},
    {src:'assets/healthcare-field-08.webp',caption:'Hospital Operations · Field Observation & Service Area'}
  ];
  let current=0;
  let autoplayTimer=null;

  const figure=document.createElement('figure');
  figure.className='healthcare-evidence healthcare-carousel';
  figure.innerHTML=`
    <div class="healthcare-carousel-shell" tabindex="0" aria-label="Healthcare field documentation carousel">
      <button class="healthcare-nav healthcare-prev" type="button" aria-label="Previous photo">‹</button>
      <button class="healthcare-carousel-media" type="button" aria-label="Open current documentation photo"><img alt="" decoding="async"></button>
      <button class="healthcare-nav healthcare-next" type="button" aria-label="Next photo">›</button>
    </div>
    <figcaption><strong class="healthcare-caption-title"></strong><span>Selected professional field documentation from hospital implementation, coordination, training, integration, and operational support.</span></figcaption>
    <div class="healthcare-carousel-meta"><div class="healthcare-dots" aria-label="Choose documentation photo"></div><span class="healthcare-counter"></span></div>`;
  old.replaceWith(figure);

  const img=figure.querySelector('.healthcare-carousel-media img');
  const title=figure.querySelector('.healthcare-caption-title');
  const counter=figure.querySelector('.healthcare-counter');
  const dots=figure.querySelector('.healthcare-dots');

  slides.forEach(({src})=>{const preload=new Image();preload.src=src;});

  const render=(index,direction=1)=>{
    current=(index+slides.length)%slides.length;
    img.classList.remove('slide-in-left','slide-in-right');
    void img.offsetWidth;
    img.src=slides[current].src;
    img.alt=slides[current].caption;
    title.textContent=slides[current].caption;
    counter.textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    [...dots.children].forEach((dot,i)=>dot.classList.toggle('is-active',i===current));
    img.classList.add(direction<0?'slide-in-left':'slide-in-right');
  };

  const stopAutoplay=()=>{if(autoplayTimer){clearInterval(autoplayTimer);autoplayTimer=null;}};
  const startAutoplay=()=>{
    stopAutoplay();
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoplayTimer=setInterval(()=>render(current+1,1),5200);
  };

  slides.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='healthcare-dot';
    dot.setAttribute('aria-label',`Go to photo ${i+1}`);
    dot.addEventListener('click',()=>{render(i,i<current?-1:1);startAutoplay();});
    dots.appendChild(dot);
  });

  figure.querySelector('.healthcare-prev').addEventListener('click',()=>{render(current-1,-1);startAutoplay();});
  figure.querySelector('.healthcare-next').addEventListener('click',()=>{render(current+1,1);startAutoplay();});
  const shell=figure.querySelector('.healthcare-carousel-shell');
  shell.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'){e.preventDefault();render(current-1,-1);startAutoplay();}
    if(e.key==='ArrowRight'){e.preventDefault();render(current+1,1);startAutoplay();}
  });
  let startX=0;
  shell.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;stopAutoplay();},{passive:true});
  shell.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)render(current+(dx<0?1:-1),dx<0?1:-1);startAutoplay();},{passive:true});
  shell.addEventListener('mouseenter',stopAutoplay);
  shell.addEventListener('mouseleave',startAutoplay);
  shell.addEventListener('focusin',stopAutoplay);
  shell.addEventListener('focusout',startAutoplay);

  figure.querySelector('.healthcare-carousel-media').addEventListener('click',()=>{
    stopAutoplay();
    const overlay=document.createElement('div');
    overlay.className='project-lightbox healthcare-slider-lightbox';
    const full=document.createElement('img');
    full.src=slides[current].src;
    full.alt=slides[current].caption;
    overlay.appendChild(full);
    overlay.addEventListener('click',()=>{overlay.remove();startAutoplay();});
    document.body.appendChild(overlay);
  });

  const style=document.createElement('style');
  style.textContent=`
    #projects .healthcare-carousel{width:min(78%,820px);margin:24px auto 18px;padding:11px;border:1px solid rgba(103,232,249,.22);border-radius:20px;background:linear-gradient(145deg,rgba(7,16,31,.84),rgba(13,25,48,.64));box-shadow:0 18px 42px rgba(2,8,23,.22);overflow:hidden}
    #projects .healthcare-carousel-shell{position:relative;display:grid;place-items:center;height:390px;border-radius:14px;overflow:hidden;background:radial-gradient(circle at 50% 35%,rgba(74,144,226,.12),transparent 48%),rgba(2,8,23,.82);outline:none}
    #projects .healthcare-carousel-shell:focus-visible{box-shadow:0 0 0 2px var(--accent2)}
    #projects .healthcare-carousel-media{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border:0;padding:0;background:transparent;cursor:zoom-in;overflow:hidden}
    #projects .healthcare-carousel-media img{display:block;width:100%;height:100%;max-width:100%;object-fit:contain!important;object-position:center;aspect-ratio:auto!important;filter:none!important;transform:none!important}
    #projects .healthcare-nav{position:absolute;top:50%;z-index:4;transform:translateY(-50%);width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:rgba(3,10,24,.76);color:#fff;font-size:2rem;line-height:1;display:grid;place-items:center;cursor:pointer;backdrop-filter:blur(8px);transition:transform .2s ease,background .2s ease,border-color .2s ease}
    #projects .healthcare-nav:hover{transform:translateY(-50%) scale(1.07);background:rgba(15,35,64,.92);border-color:rgba(103,232,249,.52)}
    #projects .healthcare-prev{left:14px}#projects .healthcare-next{right:14px}
    #projects .healthcare-carousel figcaption{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;padding:14px 8px 7px}
    #projects .healthcare-carousel figcaption strong{font-size:.82rem;color:#f8fbff;white-space:normal}
    #projects .healthcare-carousel figcaption span{font-size:.72rem;line-height:1.5;color:var(--muted);text-align:right;max-width:430px}
    #projects .healthcare-carousel-meta{display:flex;align-items:center;justify-content:space-between;padding:4px 8px 3px;gap:16px}
    #projects .healthcare-dots{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
    #projects .healthcare-dot{width:8px;height:8px;border:0;border-radius:999px;padding:0;background:rgba(255,255,255,.24);cursor:pointer;transition:.25s ease}
    #projects .healthcare-dot.is-active{width:24px;background:var(--accent2);box-shadow:0 0 12px rgba(103,232,249,.35)}
    #projects .healthcare-counter{font-size:.7rem;font-weight:700;letter-spacing:.12em;color:var(--muted);white-space:nowrap}
    #projects .slide-in-right{animation:healthcareSlideRight .34s ease both}#projects .slide-in-left{animation:healthcareSlideLeft .34s ease both}
    @keyframes healthcareSlideRight{from{opacity:.18;transform:translateX(16px) scale(.992)}to{opacity:1;transform:none}}
    @keyframes healthcareSlideLeft{from{opacity:.18;transform:translateX(-16px) scale(.992)}to{opacity:1;transform:none}}
    @media(max-width:900px){#projects .healthcare-carousel{width:90%}#projects .healthcare-carousel-shell{height:330px}}
    @media(max-width:600px){#projects .healthcare-carousel{width:100%;padding:8px;margin:18px 0 14px;border-radius:16px}#projects .healthcare-carousel-shell{height:265px}#projects .healthcare-nav{width:36px;height:36px;font-size:1.7rem}#projects .healthcare-prev{left:8px}#projects .healthcare-next{right:8px}#projects .healthcare-carousel figcaption{display:block;padding:12px 6px 6px}#projects .healthcare-carousel figcaption span{display:block;text-align:left;margin-top:5px}}
    @media(prefers-reduced-motion:reduce){#projects .slide-in-right,#projects .slide-in-left{animation:none}#projects .healthcare-nav,#projects .healthcare-dot{transition:none}}
  `;
  document.head.appendChild(style);
  render(0,1);
  startAutoplay();
})();