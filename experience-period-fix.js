(()=>{
  const periods=[
    ['Jun 2026 — Present','Jakarta, Indonesia'],
    ['Jun 2025 — Jun 2026','Karawang, Indonesia'],
    ['Feb 2025 — Jun 2025','Surabaya, Indonesia'],
    ['May 2024 — Oct 2024','Bandung, Indonesia'],
    ['Feb 2024 — Jun 2024','Jakarta, Indonesia'],
    ['Aug 2023 — Aug 2024','Jember, Indonesia']
  ];

  document.querySelectorAll('#experience .timeline article .timeline-meta').forEach((meta,index)=>{
    if(!periods[index]) return;
    meta.innerHTML=`<span class="timeline-period">${periods[index][0]}</span><span class="timeline-location">${periods[index][1]}</span>`;
  });

  const style=document.createElement('style');
  style.textContent=`
    #experience .timeline article{
      grid-template-columns:190px minmax(0,1fr)!important;
      gap:26px!important;
      align-items:start!important;
      padding:28px 0!important;
    }
    #experience .timeline-meta{
      max-width:190px!important;
      width:100%!important;
      line-height:1.4!important;
      align-self:start!important;
      padding-top:2px;
      font-size:.84rem!important;
      letter-spacing:0!important;
      overflow:visible!important;
    }
    #experience .timeline-period,
    #experience .timeline-location{display:block!important}
    #experience .timeline-period{white-space:nowrap!important;font-weight:700!important}
    #experience .timeline-location{margin-top:3px;white-space:nowrap!important;color:var(--accent2)!important;font-weight:700!important}
    #experience .timeline article>div:last-child{min-width:0!important}
    @media(min-width:1200px){
      #experience .timeline article{grid-template-columns:200px minmax(0,1fr)!important;gap:28px!important}
      #experience .timeline-meta{max-width:200px!important}
    }
    @media(max-width:900px){
      #experience .timeline article{grid-template-columns:1fr!important;gap:8px!important;padding:24px 0!important}
      #experience .timeline-meta{max-width:none!important;width:auto!important;font-size:.9rem!important}
      #experience .timeline-period,#experience .timeline-location{white-space:normal!important}
    }
  `;
  document.head.appendChild(style);
})();