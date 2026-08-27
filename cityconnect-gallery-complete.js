(()=>{
  const init=()=>{
    const grid=document.querySelector('#projects .cityconnect-featured .cityconnect-preview-grid');
    if(!grid || grid.dataset.cityconnectComplete==='true') return !!grid;

    grid.dataset.cityconnectComplete='true';

    const figure=(src,alt,caption)=>{
      const el=document.createElement('figure');
      el.className='cityconnect-screen';
      el.dataset.src=src;
      el.setAttribute('aria-label',`Open ${caption} preview`);
      el.innerHTML=`<div class="cityconnect-device"><img src="${src}" alt="${alt}" loading="lazy"></div><figcaption>${caption}</figcaption>`;
      return el;
    };

    const existing=[...grid.querySelectorAll('.cityconnect-screen')];
    const home=existing.find(el=>(el.dataset.src||'').includes('cityconnect-homepage'));
    const spot=existing.find(el=>(el.dataset.src||'').includes('cityconnect-cityspot'));

    const login=figure('assets/cityconnect-login.webp','CityConnect login and account access screen','Login');
    const talk=figure('assets/cityconnect-citytalk.webp','CityConnect CityTalk community discussion feed','CityTalk');
    const event=figure('assets/cityconnect-cityevent.webp','CityConnect CityEvent community activity feed','CityEvent');

    // Urutan pengalaman mobile: Login → Homepage → SpotCity → CityTalk → CityEvent.
    grid.innerHTML='';
    [login,home,spot,talk,event].filter(Boolean).forEach(el=>grid.appendChild(el));
    grid.scrollLeft=0;

    const helper=document.querySelector('#projects .cityconnect-preview-head small');
    if(helper) helper.textContent='5 layar utama CityConnect — Login, Homepage, SpotCity, CityTalk, dan CityEvent.';

    const addFallback=(img)=>{
      img.addEventListener('error',()=>{
        const src=img.getAttribute('src')||'';
        if(src.startsWith('assets/')) img.src=`https://raw.githubusercontent.com/Anggito09/portfolio-anggito/main/${src}`;
        else img.closest('.cityconnect-screen')?.classList.add('image-unavailable');
      },{once:true});
    };

    const openLightbox=(src,alt)=>{
      const overlay=document.createElement('div');
      overlay.className='cityconnect-lightbox';
      overlay.innerHTML=`<button type="button" aria-label="Close preview">×</button><img src="${src}" alt="${String(alt).replace(/"/g,'&quot;')}">`;
      const image=overlay.querySelector('img');
      addFallback(image);
      const close=()=>overlay.remove();
      overlay.addEventListener('click',e=>{if(e.target===overlay) close();});
      overlay.querySelector('button')?.addEventListener('click',close);
      document.addEventListener('keydown',function esc(e){
        if(e.key==='Escape'){
          close();
          document.removeEventListener('keydown',esc);
        }
      });
      document.body.appendChild(overlay);
    };

    grid.querySelectorAll('img').forEach(addFallback);
    grid.querySelectorAll('.cityconnect-screen').forEach(el=>{
      el.addEventListener('click',()=>{
        const img=el.querySelector('img');
        if(img) openLightbox(el.dataset.src||img.src,img.alt);
      });
    });

    return true;
  };

  if(!init()){
    const observer=new MutationObserver(()=>{
      if(init()) observer.disconnect();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('load',init,{once:true});
  }
})();