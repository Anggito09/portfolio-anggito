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
      #experience{overflow:hidden!important}
      #experience .container{width:min(var(--max),calc(100% - 28px))!important}
      #experience .timeline{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:16px!important;
        position:relative!important;
        padding:0!important;
        margin:0!important;
        border:0!important;
      }
      #experience .timeline::before,
      #experience .timeline::after{display:none!important;content:none!important}

      #experience .timeline article{
        display:block!important;
        grid-template-columns:none!important;
        gap:0!important;
        position:relative!important;
        overflow:hidden!important;
        width:100%!important;
        min-width:0!important;
        margin:0!important;
        padding:20px 18px 19px!important;
        border:1px solid rgba(125,177,255,.17)!important;
        border-left:1px solid rgba(125,177,255,.17)!important;
        border-radius:20px!important;
        background:linear-gradient(145deg,rgba(12,26,49,.97),rgba(8,18,35,.99))!important;
        box-shadow:0 14px 34px rgba(2,8,23,.18),inset 0 1px 0 rgba(255,255,255,.025)!important;
        animation:experienceMobileIn .7s cubic-bezier(.2,.75,.2,1) both!important;
        transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease!important;
      }
      #experience .timeline article:nth-child(2){animation-delay:.06s!important}
      #experience .timeline article:nth-child(3){animation-delay:.12s!important}
      #experience .timeline article:nth-child(4){animation-delay:.18s!important}
      #experience .timeline article:nth-child(5){animation-delay:.24s!important}
      #experience .timeline article:nth-child(6){animation-delay:.30s!important}

      #experience .timeline article::before{
        content:""!important;
        display:block!important;
        position:absolute!important;
        left:0!important;
        top:18px!important;
        width:3px!important;
        height:46px!important;
        border:0!important;
        border-radius:0 999px 999px 0!important;
        background:linear-gradient(180deg,var(--accent2),var(--accent))!important;
        box-shadow:0 0 16px rgba(103,232,249,.32)!important;
        transform:none!important;
      }
      #experience .timeline article::after{
        content:""!important;
        display:block!important;
        position:absolute!important;
        right:-58px!important;
        top:-64px!important;
        width:138px!important;
        height:138px!important;
        border-radius:50%!important;
        background:radial-gradient(circle,rgba(96,165,250,.11),transparent 68%)!important;
        border:0!important;
        pointer-events:none!important;
        animation:experienceGlow 5.5s ease-in-out infinite!important;
      }

      #experience .timeline-meta{
        display:inline-grid!important;
        grid-template-columns:auto!important;
        gap:2px!important;
        max-width:100%!important;
        width:fit-content!important;
        margin:0 0 15px!important;
        padding:7px 11px!important;
        border:1px solid rgba(103,232,249,.18)!important;
        border-radius:13px!important;
        background:rgba(103,232,249,.055)!important;
        line-height:1.3!important;
        font-size:.73rem!important;
        overflow:visible!important;
      }
      #experience .timeline-meta::before,
      #experience .timeline-meta::after{display:none!important;content:none!important}
      #experience .timeline-period{
        display:block!important;
        white-space:normal!important;
        color:#a8f3fb!important;
        font-size:.78rem!important;
        font-weight:800!important;
      }
      #experience .timeline-location{
        display:block!important;
        margin-top:2px!important;
        white-space:normal!important;
        color:#63dff2!important;
        font-size:.7rem!important;
        font-weight:700!important;
      }

      #experience .timeline article>div:last-child{
        min-width:0!important;
        width:100%!important;
        padding:0!important;
        margin:0!important;
        border:0!important;
      }
      #experience .timeline h3{
        margin:0 0 13px!important;
        font-size:1.04rem!important;
        line-height:1.36!important;
        letter-spacing:-.02em!important;
        text-align:left!important;
        text-wrap:balance!important;
      }
      #experience .timeline p{
        width:100%!important;
        max-width:none!important;
        margin:0!important;
        color:#a9bad3!important;
        font-size:.88rem!important;
        line-height:1.72!important;
        text-align:justify!important;
        text-justify:inter-word!important;
        hyphens:auto!important;
        -webkit-hyphens:auto!important;
        overflow-wrap:normal!important;
        word-break:normal!important;
      }
      #experience .chips{
        display:flex!important;
        flex-wrap:wrap!important;
        gap:7px!important;
        margin:17px 0 0!important;
        padding:0!important;
      }
      #experience .chips span{
        display:inline-flex!important;
        align-items:center!important;
        min-height:29px!important;
        padding:6px 10px!important;
        border:1px solid rgba(125,177,255,.17)!important;
        border-radius:999px!important;
        background:rgba(96,165,250,.045)!important;
        font-size:.65rem!important;
        line-height:1.15!important;
        white-space:nowrap!important;
      }

      #experience .timeline article:active{
        transform:scale(.992)!important;
        border-color:rgba(103,232,249,.28)!important;
      }

      .hero-copy .lead,
      #about .split>div:last-child,
      #about .split>div:last-child p,
      #projects .section-copy,
      #projects .project-card p,
      #research .research-card p,
      #achievements .education-card p,
      #achievements .achievement-grid p,
      #skills .skill-card p,
      #certificates .cert-card p{
        text-align:justify!important;
        text-justify:inter-word!important;
        hyphens:auto!important;
        -webkit-hyphens:auto!important;
      }
    }

    @media(max-width:560px){
      #experience .timeline{gap:14px!important}
      #experience .timeline article{padding:18px 16px 17px!important;border-radius:18px!important}
      #experience .timeline article::before{top:17px!important;height:42px!important}
      #experience .timeline-meta{margin-bottom:13px!important;padding:6px 10px!important}
      #experience .timeline-period{font-size:.74rem!important}
      #experience .timeline-location{font-size:.67rem!important}
      #experience .timeline h3{font-size:.99rem!important;line-height:1.34!important;margin-bottom:11px!important}
      #experience .timeline p{font-size:.84rem!important;line-height:1.68!important}
      #experience .chips{gap:6px!important;margin-top:15px!important}
      #experience .chips span{font-size:.61rem!important;padding:6px 8px!important;min-height:27px!important}
    }

    @keyframes experienceMobileIn{
      from{opacity:0;transform:translateY(18px) scale(.992)}
      to{opacity:1;transform:translateY(0) scale(1)}
    }
    @keyframes experienceGlow{
      0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.65}
      50%{transform:translate3d(-10px,8px,0) scale(1.08);opacity:1}
    }

    @media(prefers-reduced-motion:reduce){
      #experience .timeline article,
      #experience .timeline article::after{animation:none!important}
    }
  `;
  document.head.appendChild(style);
})();