(()=>{
  const card=document.querySelector('#projects .project-card.babyops-enhanced');
  if(!card || card.querySelector('.babyops-preview')) return;

  const preview=document.createElement('section');
  preview.className='babyops-preview';
  preview.setAttribute('aria-label','BabyOps app screens');
  preview.innerHTML=`
    <div class="babyops-preview-head">
      <span>APP PREVIEW</span>
      <strong>BabyOps Mobile Experience</strong>
      <small>Selected BabyOps screens covering splash, onboarding, baby needs, mother education, and the Home experience.</small>
    </div>
    <div class="babyops-preview-grid">
      <figure class="babyops-screen">
        <img src="assets/babyops/babyops-splash.webp" alt="BabyOps splash screen" loading="lazy">
        <figcaption>Splash Screen</figcaption>
      </figure>
      <figure class="babyops-screen">
        <img src="assets/babyops/babyops-onboarding-cry.webp" alt="BabyOps onboarding screen explaining baby cry recognition" loading="lazy">
        <figcaption>Cry Recognition</figcaption>
      </figure>
      <figure class="babyops-screen">
        <img src="assets/babyops/babyops-onboarding-happy.webp" alt="BabyOps onboarding screen about understanding baby needs" loading="lazy">
        <figcaption>Baby Needs</figcaption>
      </figure>
      <figure class="babyops-screen">
        <img src="assets/babyops/babyops-onboarding-mother.webp" alt="BabyOps onboarding screen for mother education" loading="lazy">
        <figcaption>Mother Education</figcaption>
      </figure>
      <figure class="babyops-screen babyops-home-screen">
        <img src="assets/babyops/babyops-home.webp" alt="BabyOps Home screen with disease history and education content" loading="lazy">
        <figcaption>Home</figcaption>
      </figure>
    </div>`;

  const cryGrid=card.querySelector('.babyops-cry-grid');
  const chips=card.querySelector('.chips');
  if(cryGrid) cryGrid.after(preview);
  else if(chips) card.insertBefore(preview,chips);
  else card.appendChild(preview);

  const style=document.createElement('style');
  style.textContent=`
    #projects .babyops-preview{
      position:relative;
      margin:22px 0 20px;
      padding:18px;
      overflow:hidden;
      border:1px solid rgba(148,163,184,.13);
      border-radius:20px;
      background:linear-gradient(145deg,rgba(255,255,255,.035),rgba(139,92,246,.025));
      box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
      animation:babyopsPreviewIn .75s .16s both;
    }
    #projects .babyops-preview::before{
      content:"";
      position:absolute;
      width:220px;
      height:220px;
      right:-110px;
      top:-140px;
      border-radius:50%;
      background:rgba(103,232,249,.07);
      filter:blur(8px);
      pointer-events:none;
    }
    #projects .babyops-preview-head{
      position:relative;
      z-index:1;
      display:flex;
      flex-wrap:wrap;
      align-items:baseline;
      gap:8px 12px;
      margin-bottom:16px;
    }
    #projects .babyops-preview-head span{
      font-size:.64rem;
      font-weight:800;
      letter-spacing:.14em;
      color:#67e8f9;
    }
    #projects .babyops-preview-head strong{
      font-size:1rem;
      color:#f8fbff;
    }
    #projects .babyops-preview-head small{
      flex-basis:100%;
      max-width:760px;
      font-size:.72rem;
      line-height:1.55;
      color:#8fa2bd;
    }
    #projects .babyops-preview-grid{
      position:relative;
      z-index:1;
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      gap:14px;
    }
    #projects .babyops-screen{
      margin:0;
      padding:10px 10px 8px;
      border:1px solid rgba(167,139,250,.14);
      border-radius:18px;
      background:rgba(2,8,23,.28);
      transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease,background .28s ease;
    }
    #projects .babyops-screen:hover{
      transform:translateY(-5px);
      border-color:rgba(103,232,249,.28);
      background:rgba(8,17,33,.68);
      box-shadow:0 16px 30px rgba(2,8,23,.22);
    }
    #projects .babyops-screen img{
      display:block;
      width:100%;
      height:clamp(230px,25vw,350px);
      object-fit:contain;
      border-radius:13px;
      filter:drop-shadow(0 12px 20px rgba(2,8,23,.24));
    }
    #projects .babyops-screen figcaption{
      padding-top:8px;
      font-size:.68rem;
      font-weight:700;
      text-align:center;
      color:#9fb0c7;
    }
    @keyframes babyopsPreviewIn{
      from{opacity:0;transform:translateY(14px)}
      to{opacity:1;transform:none}
    }
    @media(max-width:1100px){
      #projects .babyops-preview-grid{
        grid-template-columns:repeat(5,minmax(150px,1fr));
        overflow-x:auto;
        scroll-snap-type:x mandatory;
        padding:2px 2px 8px;
        scrollbar-width:none;
      }
      #projects .babyops-preview-grid::-webkit-scrollbar{display:none}
      #projects .babyops-screen{scroll-snap-align:start}
      #projects .babyops-screen img{height:300px}
    }
    @media(max-width:560px){
      #projects .babyops-preview{margin:18px 0;padding:14px;border-radius:17px}
      #projects .babyops-preview-head{margin-bottom:13px}
      #projects .babyops-preview-head strong{font-size:.92rem}
      #projects .babyops-preview-head small{font-size:.68rem}
      #projects .babyops-preview-grid{grid-template-columns:repeat(5,148px);gap:10px}
      #projects .babyops-screen{padding:8px 8px 7px;border-radius:15px}
      #projects .babyops-screen img{height:272px;border-radius:11px}
      #projects .babyops-screen figcaption{font-size:.64rem}
    }
    @media(prefers-reduced-motion:reduce){
      #projects .babyops-preview{animation:none!important}
      #projects .babyops-screen{transition:none!important}
    }
  `;
  document.head.appendChild(style);
})();