(()=>{
  const periods=['2026 — Present','2025 — 2026','2025','2024','2024','2023 — 2024'];
  document.querySelectorAll('#experience .timeline article .timeline-meta').forEach((meta,index)=>{
    if(periods[index]) meta.textContent=periods[index];
  });

  const style=document.createElement('style');
  style.textContent=`
    #experience .timeline article{grid-template-columns:180px minmax(0,1fr)!important;gap:30px!important}
    #experience .timeline-meta{white-space:nowrap!important;line-height:1.35!important;align-self:start!important;padding-top:2px}
    @media(max-width:900px){
      #experience .timeline article{grid-template-columns:1fr!important;gap:8px!important}
      #experience .timeline-meta{white-space:normal!important}
    }
  `;
  document.head.appendChild(style);
})();