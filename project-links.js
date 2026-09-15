(()=>{
  // Tombol pill Live + GitHub ala BabyOps untuk semua kartu proyek.
  // BabyOps & Beligo sudah punya tombol sendiri -> di-skip agar tidak dobel.
  const LINKS={
    'airnav':[['🚀 Live Site ↗','http://airnavassist.my.id/']],
    'handsight':[['GitHub ↗','https://github.com/Anggito09/Handsight']],
    'kamerain':[['🚀 Live Site ↗','https://anggito09.github.io/kamerain/'],['GitHub ↗','https://github.com/Anggito09/kamerain']],
  };
  const ACCENT={
    'cityconnect':['linear-gradient(135deg,#60a5fa,#67e8f9)','#06121f'],
    'airnav':['linear-gradient(135deg,#2dd4bf,#7dd3fc)','#062b26'],
    'mutant':['linear-gradient(135deg,#a78bfa,#67e8f9)','#12102b'],
    'handsight':['linear-gradient(135deg,#06b6d4,#8b5cf6)','#06121f'],
    'ambulance':['linear-gradient(135deg,#fb7185,#fbbf24)','#2b0a12'],
    'kamerain':['linear-gradient(135deg,#f472b6,#fbbf24)','#2b0a1c'],
  };
  const keyOf=(title)=>{
    const t=(title||'').toLowerCase();
    if(t.startsWith('babyops')||t==='beligo'||t.startsWith('beligo ')) return null;
    if(t.startsWith('cityconnect')) return 'cityconnect';
    if(t.startsWith('airnav')) return 'airnav';
    if(t.startsWith('mutant')) return 'mutant';
    if(t.startsWith('handsight')) return 'handsight';
    if(t.startsWith('smart ambulance')) return 'ambulance';
    if(t.startsWith('kamerain')) return 'kamerain';
    return null;
  };
  const init=()=>{
    document.querySelectorAll('#projects .project-card').forEach((card)=>{
      const key=keyOf(card.querySelector('h3')?.textContent.trim());
      if(!key || card.querySelector('.unified-links')) return;
      const items=LINKS[key];
      if(!items) return;
      const [bg,fg]=ACCENT[key]||['linear-gradient(135deg,#22d3ee,#818cf8)','#06121f'];
      const wrap=document.createElement('div');
      wrap.className='unified-links';
      wrap.innerHTML=items.map(([label,href],i)=>i===0
        ?`<a class="unified-live" style="background:${bg};color:${fg}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`
        :`<a class="unified-github" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join('');
      const title=card.querySelector('h3');
      const anchor=card.querySelector('.handsight-subtitle,.mutant-project-subtitle,.ambulance-project-subtitle,.kamerain-copy');
      if(anchor && (key==='handsight'||key==='mutant'||key==='ambulance')) anchor.after(wrap);
      else if(title) title.after(wrap);
      else card.prepend(wrap);
    });
  };
  if(!document.getElementById('unified-links-style')){
    const style=document.createElement('style');
    style.id='unified-links-style';
    style.textContent=`
      #projects .unified-links{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 2px;position:relative;z-index:1}
      #projects .unified-links a{display:inline-flex;align-items:center;gap:6px;padding:9px 16px;border-radius:999px;font-size:.78rem;font-weight:800;text-decoration:none;transition:transform .22s ease,filter .22s ease,box-shadow .22s ease}
      #projects .unified-links a:hover{transform:translateY(-2px);filter:brightness(1.08)}
      #projects .unified-live{box-shadow:0 10px 26px rgba(2,8,23,.25)}
      #projects .unified-github{border:1px solid rgba(148,163,184,.3);background:rgba(255,255,255,.04);color:#e2e8f0}
    `;
    document.head.appendChild(style);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
