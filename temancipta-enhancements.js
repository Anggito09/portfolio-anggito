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
    #projects .temancipta-gallery{margin:12px 0 4px}
    #projects .temancipta-gallery-head{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:10px}
    #projects .temancipta-gallery-head strong{color:#fff7f0;font-size:.92rem}
    #projects .temancipta-gallery-head small{color:#a98a68;font-size:.7rem}
    #projects .temancipta-gallery-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}
    #projects .temancipta-shot{margin:0;padding:0;border:1px solid rgba(233,162,91,.18);border-radius:14px;overflow:hidden;background:#100b07;cursor:zoom-in;transition:transform .22s ease,border-color .22s ease}
    #projects .temancipta-shot:hover{transform:translateY(-3px);border-color:rgba(233,162,91,.45)}
    #projects .temancipta-shot img{display:block;width:100%;height:150px;object-fit:cover;object-position:top}
    #projects .temancipta-shot figcaption{padding:8px 10px;font-size:.68rem;font-weight:700;color:#d8c3a8;text-align:center}
    .temancipta-lightbox{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(8,5,2,.92)}
    .temancipta-lightbox img{max-width:min(1100px,94vw);max-height:88vh;object-fit:contain;border-radius:14px}
    .temancipta-lightbox button{position:fixed;right:22px;top:18px;width:42px;height:42px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:rgba(20,12,8,.85);color:#fff;font-size:1.4rem;cursor:pointer}
    @media(max-width:900px){#projects .temancipta-details{grid-template-columns:1fr 1fr}}
    @media(max-width:760px){.project-card.temancipta-enhanced{grid-column:auto}#projects .temancipta-badge{flex-wrap:wrap}#projects .temancipta-badge-link{margin-left:0}#projects .temancipta-details{grid-template-columns:1fr}}
    @media(prefers-reduced-motion:reduce){.project-card.temancipta-enhanced::after{animation:none!important}}
  `;
  document.head.appendChild(style);

  const title=card.querySelector('h3');
  const badge=document.createElement('div');
  badge.className='temancipta-badge';
  badge.innerHTML=`<span class="temancipta-badge-icon">☕</span><div><small>LIVE PRODUCT · UMKM OPERATIONS</small><strong>Order → kitchen → TV call → finance → AI</strong><em>Cloudflare Workers · D1 · Workers AI · PBJT-aware receipts</em></div><a class="temancipta-badge-link" href="https://app.temancipta.workers.dev/" target="_blank" rel="noreferrer">Open live demo ↗</a>`;
  title.after(badge);

  const details=document.createElement('div');
  details.className='temancipta-details';
  details.innerHTML=`
    <div class="temancipta-detail"><span class="temancipta-detail-icon">01</span><div><strong>POS &amp; receipts</strong><small>3-step cashier, discount, PBJT/service, QRIS/bank, idempotent order IDs.</small></div></div>
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
    ['temancipta-pengaturan.png','Settings','Targets, PBJT & staff'],
  ];
  const gallery=document.createElement('div');
  gallery.className='temancipta-gallery';
  gallery.setAttribute('aria-label','Temancipta app screenshots');
  gallery.innerHTML=`<div class="temancipta-gallery-head"><strong>App Screens</strong><small>${shots.length} screens · click to zoom</small></div>
    <div class="temancipta-gallery-grid">`+shots.map(([f,t,d])=>`<figure class="temancipta-shot" data-full="assets/temancipta/${f}" aria-label="Open ${t} preview"><img src="assets/temancipta/${f}" alt="Temancipta ${t} screen" loading="lazy"><figcaption><b>${t}</b> — ${d}</figcaption></figure>`).join('')+`</div>`;
  video.after(gallery);

  const lightbox=document.createElement('div');
  lightbox.className='temancipta-lightbox';
  lightbox.setAttribute('aria-label','Temancipta screenshot preview');
  lightbox.style.display='none';
  lightbox.innerHTML='<button type="button" aria-label="Close preview">×</button><img alt="Temancipta screenshot preview">';
  document.body.appendChild(lightbox);
  const lbImg=lightbox.querySelector('img');
  const close=()=>{lightbox.style.display='none';};
  lightbox.querySelector('button').addEventListener('click',close);
  lightbox.addEventListener('click',(e)=>{if(e.target===lightbox) close();});
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape') close();});
  gallery.querySelectorAll('.temancipta-shot').forEach((fig)=>{
    fig.addEventListener('click',()=>{lbImg.src=fig.dataset.full;lbImg.alt=fig.getAttribute('aria-label')||'Temancipta screenshot preview';lightbox.style.display='flex';});
  });

  const oldLink=card.querySelector('a.text-link');
  if(oldLink) oldLink.remove();
  const actions=document.createElement('div');
  actions.className='temancipta-actions';
  actions.innerHTML=`<a class="primary" href="https://app.temancipta.workers.dev/" target="_blank" rel="noreferrer">Live Demo ↗</a>`;
  gallery.after(actions);
})();
