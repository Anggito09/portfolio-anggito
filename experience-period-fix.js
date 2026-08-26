(()=>{
  const periods=[
    'Jun 2026 — Present · Jakarta, Indonesia',
    'Jun 2025 — Jun 2026 · Karawang, Indonesia',
    'Feb 2025 — Jun 2025 · Surabaya, Indonesia',
    'May 2024 — Oct 2024 · Bandung, Indonesia',
    'Feb 2024 — Jun 2024 · Jakarta, Indonesia',
    'Aug 2023 — Aug 2024 · Jember, Indonesia'
  ];

  document.querySelectorAll('#experience .timeline article .timeline-meta').forEach((meta,index)=>{
    if(periods[index]) meta.textContent=periods[index];
  });

  const style=document.createElement('style');
  style.textContent=`
    #experience .timeline article{
      grid-template-columns:minmax(320px,34%) minmax(0,1fr)!important;
      gap:34px!important;
      align-items:start!important;
    }
    #experience .timeline-meta{
      max-width:none!important;
      width:100%!important;
      white-space:nowrap!important;
      line-height:1.45!important;
      align-self:start!important;
      padding-top:2px;
      font-size:.86rem!important;
      letter-spacing:0!important;
    }
    #experience .timeline article>div:last-child{min-width:0!important}
    @media(max-width:1180px){
      #experience .timeline article{grid-template-columns:300px minmax(0,1fr)!important;gap:28px!important}
      #experience .timeline-meta{white-space:normal!important}
    }
    @media(max-width:900px){
      #experience .timeline article{grid-template-columns:1fr!important;gap:8px!important}
      #experience .timeline-meta{white-space:normal!important;width:auto!important;font-size:.9rem!important}
    }
  `;
  document.head.appendChild(style);
})();