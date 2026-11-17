(()=>{
  const card=[...document.querySelectorAll('#projects .project-card')].find((item)=>(item.querySelector('h3')?.textContent.trim()||'').startsWith('Temancipta'));
  if(!card || card.dataset.temancipta==='true') return;
  card.dataset.temancipta='true';
  card.classList.add('temancipta-enhanced');

  const style=document.createElement('style');
  style.textContent=`
    .project-card.temancipta-enhanced{grid-column:1/-1;position:relative;isolation:isolate;overflow:hidden;border-color:rgba(233,162,91,.24)!important;background:radial-gradient(circle at 88% 6%,rgba(233,162,91,.12),transparent 30%),radial-gradient(circle at 8% 96%,rgba(154,74,30,.1),transparent 32%),linear-gradient(145deg,rgba(24,27,38,.98),rgba(12,15,24,.99))!important;box-shadow:0 26px 62px rgba(2,8,23,.22),inset 0 1px 0 rgba(255,255,255,.025)}
    #projects .temancipta-site{position:relative;margin:16px 0 4px;border:1px solid rgba(233,162,91,.22);border-radius:18px;overflow:hidden;background:rgba(8,10,16,.72);box-shadow:0 18px 44px rgba(2,8,23,.28)}
    #projects .temancipta-site-bar{display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,.035);border-bottom:1px solid rgba(233,162,91,.14)}
    #projects .temancipta-site-dots{display:flex;gap:5px;flex:none}
    #projects .temancipta-site-dots i{width:8px;height:8px;border-radius:50%;background:#e9a25b;opacity:.5}
    #projects .temancipta-site-dots i:nth-child(2){background:#e9c9a6}
    #projects .temancipta-site-dots i:nth-child(3){background:#8fbf9f}
    #projects .temancipta-site-url{flex:1;min-width:0;display:block;padding:6px 12px;border-radius:999px;background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.07);font-size:.76rem;font-weight:700;color:#d8c3a8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #projects .temancipta-site-open{flex:none;display:inline-flex;align-items:center;gap:4px;padding:8px 13px;border-radius:999px;background:linear-gradient(135deg,#9a4a1e,#e9a25b);color:#2b1d12;font-size:.76rem;font-weight:800;text-decoration:none;white-space:nowrap;transition:filter .2s ease,transform .2s ease}
    #projects .temancipta-site-open:hover{filter:brightness(1.08);transform:translateY(-1px)}
    #projects .temancipta-site-preview{position:relative;background:#faf6ef}
    #projects .temancipta-site-frame{display:block;width:100%;height:clamp(420px,56vh,640px);border:0;background:#faf6ef}
    #projects .temancipta-site-veil{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:16px;text-decoration:none;background:linear-gradient(180deg,transparent 58%,rgba(6,8,14,.5))}
    #projects .temancipta-site-veil span{display:inline-flex;align-items:center;gap:6px;padding:9px 15px;border-radius:999px;background:rgba(12,10,8,.86);border:1px solid rgba(233,162,91,.35);color:#f3e3cf;font-size:.78rem;font-weight:800;backdrop-filter:blur(6px);transform:translateY(4px);transition:transform .25s ease,background .25s ease}
    #projects .temancipta-site-veil:hover span{transform:translateY(0);background:rgba(20,14,8,.94)}
    #projects .temancipta-site-note{margin:10px 2px 0;font-size:.75rem;color:#a98a68}
    #projects .temancipta-site-note a{color:#e9c9a6;font-weight:700}
    @media(max-width:760px){
      .project-card.temancipta-enhanced{grid-column:auto}
      #projects .temancipta-site-frame{height:420px}
      #projects .temancipta-site-dots{display:none}
      #projects .temancipta-site-url{font-size:.72rem;padding:6px 10px}
      #projects .temancipta-site-open{padding:7px 11px;font-size:.72rem}
      #projects .temancipta-site-veil{padding:12px}
    }
  `;
  document.head.appendChild(style);

  card.querySelector('a.text-link')?.remove();

  const site=document.createElement('div');
  site.className='temancipta-site';
  site.innerHTML=`
    <div class="temancipta-site-bar">
      <span class="temancipta-site-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="temancipta-site-url">temancipta.site</span>
      <a class="temancipta-site-open" href="https://temancipta.site/" target="_blank" rel="noreferrer">Buka Website ↗</a>
    </div>
    <div class="temancipta-site-preview">
      <iframe class="temancipta-site-frame" src="https://temancipta.site/" title="TemanCipta — Kasir &amp; Antrean untuk Kafe Indonesia" loading="lazy" referrerpolicy="no-referrer"></iframe>
      <a class="temancipta-site-veil" href="https://temancipta.site/" target="_blank" rel="noreferrer" aria-label="Buka website TemanCipta di tab baru"><span>Buka temancipta.site ↗</span></a>
    </div>`;
  const chips=card.querySelector('.chips');
  if(chips) chips.after(site);
  else card.appendChild(site);

  const note=document.createElement('p');
  note.className='temancipta-site-note';
  note.innerHTML='Pratinjau langsung dari <a href="https://temancipta.site/" target="_blank" rel="noreferrer">temancipta.site</a> — klik pratinjau untuk membuka website.';
  site.after(note);
})();
