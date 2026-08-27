(()=>{
  const init=()=>{
    const card=[...document.querySelectorAll('.project-card')].find((item)=>item.querySelector('h3')?.textContent.trim()==='AirNav Assist');
    if(!card || card.querySelector('.airnav-showcase')) return;

    card.classList.add('airnav-card-enhanced');

    const title=card.querySelector('h3');
    if(title){
      const subtitle=document.createElement('div');
      subtitle.className='airnav-project-subtitle';
      subtitle.textContent='Integrated Internal Platform for AirNav Indonesia';
      title.insertAdjacentElement('afterend', subtitle);
    }

    const showcase=document.createElement('div');
    showcase.className='airnav-showcase';
    showcase.setAttribute('aria-label','AirNav Assist interface showcase');
    showcase.innerHTML=`
      <div class="airnav-showcase-head">
        <div>
          <span class="airnav-showcase-kicker">Selected Interfaces</span>
          <strong>AirNav Assist Web Platform</strong>
        </div>
        <span class="airnav-showcase-count">06 screens</span>
      </div>
      <div class="airnav-showcase-grid">
        <button class="airnav-shot airnav-shot-login" type="button" data-full="assets/airnav/airnav-login.webp" aria-label="Buka tampilan Login AirNav Assist">
          <span class="airnav-shot-media"><img src="assets/airnav/airnav-login.webp" alt="Tampilan login AirNav Assist" loading="lazy" decoding="async"></span>
          <span class="airnav-shot-copy"><b>Login & Authentication</b><small>Entry point pengguna ke platform internal.</small></span>
        </button>
        <button class="airnav-shot airnav-shot-admin" type="button" data-full="assets/airnav/airnav-admin.webp" aria-label="Buka rangkuman dashboard admin AirNav Assist">
          <span class="airnav-shot-media"><img src="assets/airnav/airnav-admin.webp" alt="Rangkuman dashboard admin AirNav Assist untuk Artikel, Pembelajaran, Test, E-Logbook, dan Pengguna" loading="lazy" decoding="async"></span>
          <span class="airnav-shot-copy"><b>Admin Management Suite</b><small>Artikel · Pembelajaran · Test · E-Logbook · Pengguna</small></span>
        </button>
      </div>
      <div class="airnav-showcase-note">Klik gambar untuk melihat screenshot dalam ukuran penuh.</div>
    `;

    const chips=card.querySelector('.chips');
    if(chips) card.insertBefore(showcase,chips);
    else card.appendChild(showcase);

    if(!document.getElementById('airnav-showcase-style')){
      const style=document.createElement('style');
      style.id='airnav-showcase-style';
      style.textContent=`
        .project-card.airnav-card-enhanced{grid-column:1/-1;overflow:hidden;position:relative}
        .airnav-card-enhanced .airnav-project-subtitle{margin:-2px 0 14px;color:var(--muted,#64748b);font-size:.9rem;font-weight:700;letter-spacing:.01em}
        .airnav-showcase{margin:20px 0 18px;padding:16px;border:1px solid rgba(59,130,246,.16);border-radius:20px;background:linear-gradient(145deg,rgba(248,250,252,.98),rgba(239,246,255,.9));box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}
        .airnav-showcase-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 2px 12px}
        .airnav-showcase-head>div{display:grid;gap:3px}.airnav-showcase-kicker{font-size:.69rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#3565c9}.airnav-showcase-head strong{font-size:1rem;color:#0f172a}.airnav-showcase-count{flex:none;padding:6px 9px;border-radius:999px;background:#e8efff;color:#3156b3;font-size:.72rem;font-weight:800}
        .airnav-showcase-grid{display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:14px}
        .airnav-shot{appearance:none;border:0;padding:0;margin:0;text-align:left;background:#fff;border-radius:16px;overflow:hidden;cursor:zoom-in;box-shadow:0 12px 32px rgba(15,23,42,.08);transition:transform .28s ease,box-shadow .28s ease}
        .airnav-shot:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(15,23,42,.14)}
        .airnav-shot:focus-visible{outline:3px solid rgba(59,130,246,.4);outline-offset:3px}
        .airnav-shot-media{display:block;position:relative;height:250px;overflow:hidden;background:#eef2ff}
        .airnav-shot-media:after{content:'↗';position:absolute;right:12px;top:12px;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:rgba(15,23,42,.78);color:#fff;font-weight:800;box-shadow:0 6px 18px rgba(15,23,42,.2)}
        .airnav-shot-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .45s ease}
        .airnav-shot:hover .airnav-shot-media img{transform:scale(1.025)}
        .airnav-shot-login .airnav-shot-media img{object-fit:contain;background:#dcefee;padding:8px}
        .airnav-shot-copy{display:grid;gap:4px;padding:13px 14px 15px}.airnav-shot-copy b{font-size:.9rem;color:#111827}.airnav-shot-copy small{font-size:.78rem;line-height:1.45;color:#64748b}
        .airnav-showcase-note{margin:10px 3px 0;color:#7b8798;font-size:.72rem}
        .airnav-lightbox{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;background:rgba(2,6,23,.88);backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease}
        .airnav-lightbox.is-open{opacity:1;visibility:visible}.airnav-lightbox img{max-width:min(1180px,94vw);max-height:88vh;width:auto;height:auto;border-radius:14px;box-shadow:0 28px 80px rgba(0,0,0,.45);background:#fff}.airnav-lightbox-close{position:fixed;right:22px;top:20px;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.65rem;cursor:pointer}
        @media(max-width:760px){.project-card.airnav-card-enhanced{grid-column:auto}.airnav-showcase{margin:16px -2px 14px;padding:12px;border-radius:16px}.airnav-showcase-grid{grid-template-columns:1fr}.airnav-shot-media{height:210px}.airnav-showcase-head{align-items:center}.airnav-showcase-count{font-size:.66rem}.airnav-lightbox{padding:12px}.airnav-lightbox img{max-width:96vw;max-height:84vh}.airnav-lightbox-close{right:12px;top:12px}}
        @media(max-width:430px){.airnav-shot-media{height:190px}.airnav-showcase-head strong{font-size:.92rem}.airnav-project-subtitle{font-size:.82rem!important}}
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
      lightbox.innerHTML='<button class="airnav-lightbox-close" type="button" aria-label="Tutup preview">×</button><img alt="AirNav Assist screenshot preview">';
      document.body.appendChild(lightbox);
      const close=()=>{lightbox.classList.remove('is-open');document.body.style.overflow='';};
      lightbox.querySelector('.airnav-lightbox-close').addEventListener('click',close);
      lightbox.addEventListener('click',(event)=>{if(event.target===lightbox) close();});
      document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&lightbox.classList.contains('is-open')) close();});
    }

    showcase.querySelectorAll('.airnav-shot').forEach((shot)=>{
      shot.addEventListener('click',()=>{
        const preview=lightbox.querySelector('img');
        preview.src=shot.dataset.full;
        preview.alt=shot.querySelector('img')?.alt||'AirNav Assist screenshot preview';
        lightbox.classList.add('is-open');
        document.body.style.overflow='hidden';
      });
    });
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();