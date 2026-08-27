(()=>{
  const card=document.querySelector('#projects .project-card.babyops-enhanced');
  if(!card || card.querySelector('.babyops-preview')) return;

  const preview=document.createElement('section');
  preview.className='babyops-preview';
  preview.setAttribute('aria-label','BabyOps app screens');
  preview.innerHTML=`
    <div class="babyops-preview-head">
      <div class="babyops-preview-title">
        <span>APP PREVIEW</span>
        <strong>BabyOps Mobile Experience</strong>
      </div>
      <small>Selected BabyOps screens covering onboarding, Home, cry recognition, symptom-based diagnosis with result guidance, and health education articles.</small>
      <div class="babyops-scroll-hint" aria-hidden="true">Scroll to explore <b>→</b></div>
    </div>
    <div class="babyops-preview-grid" tabindex="0" aria-label="Scrollable BabyOps screen gallery">
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-splash.webp" alt="BabyOps splash screen" loading="lazy"></div><figcaption>Splash Screen</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-onboarding-cry.webp" alt="BabyOps onboarding screen explaining baby cry recognition" loading="lazy"></div><figcaption>Cry Recognition</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-onboarding-happy.webp" alt="BabyOps onboarding screen about understanding baby needs" loading="lazy"></div><figcaption>Baby Needs</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-onboarding-mother.webp" alt="BabyOps onboarding screen for mother education" loading="lazy"></div><figcaption>Mother Education</figcaption></figure>
      <figure class="babyops-screen babyops-home-screen"><div class="babyops-device"><img src="assets/babyops/babyops-home-v2.webp" alt="BabyOps Home screen with disease history and education content" loading="lazy"></div><figcaption>Home</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-record.webp" alt="BabyOps cry recording screen" loading="lazy"></div><figcaption>Cry Recording</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-record-result.webp" alt="BabyOps cry recognition result screen" loading="lazy"></div><figcaption>Recognition Result</figcaption></figure>
      <figure class="babyops-screen"><div class="babyops-device"><img src="assets/babyops/babyops-solution.webp" alt="BabyOps recommended solution screen" loading="lazy"></div><figcaption>Guided Solution</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-diagnosis-main.webp" alt="BabyOps diagnosis feature showing symptom categories" loading="lazy"></div><figcaption><span>DIAGNOSIS</span>Symptom Categories</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-diagnosis-eye.webp" alt="BabyOps eye symptom selection modal" loading="lazy"></div><figcaption><span>DIAGNOSIS</span>Symptom Selection</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-diagnosis-eye-options.webp" alt="BabyOps eye symptom dropdown options" loading="lazy"></div><figcaption><span>DIAGNOSIS</span>Eye Symptoms</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-diagnosis-result.webp" alt="BabyOps diagnosis result with Bronchiolitis information and suggested solution" loading="lazy"></div><figcaption><span>DIAGNOSIS</span>Result & Guidance</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-education.webp" alt="BabyOps education and health article library screen" loading="lazy"></div><figcaption><span>EDUCATION</span>Article Library</figcaption></figure>
      <figure class="babyops-screen babyops-feature-screen"><div class="babyops-device"><img src="assets/babyops/babyops-education-detail.webp" alt="BabyOps health education article detail screen" loading="lazy"></div><figcaption><span>EDUCATION</span>Article Detail</figcaption></figure>
    </div>`;

  const cryGrid=card.querySelector('.babyops-cry-grid');
  const chips=card.querySelector('.chips');
  if(cryGrid) cryGrid.after(preview);
  else if(chips) card.insertBefore(preview,chips);
  else card.appendChild(preview);

  const style=document.createElement('style');
  style.textContent=`
    #projects .babyops-preview{position:relative;margin:24px 0 20px;padding:22px 20px 18px;overflow:hidden;border:1px solid rgba(103,232,249,.12);border-radius:24px;background:linear-gradient(145deg,rgba(15,28,50,.9),rgba(8,17,34,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.16);animation:babyopsPreviewIn .75s .16s both}
    #projects .babyops-preview::before{content:"";position:absolute;width:280px;height:280px;right:-120px;top:-170px;border-radius:50%;background:radial-gradient(circle,rgba(103,232,249,.12),transparent 68%);pointer-events:none}
    #projects .babyops-preview-head{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:8px 16px;margin-bottom:18px;padding:0 2px}
    #projects .babyops-preview-title{display:flex;align-items:center;flex-wrap:wrap;gap:8px 12px}
    #projects .babyops-preview-title span{font-size:.64rem;font-weight:900;letter-spacing:.16em;color:#67e8f9}
    #projects .babyops-preview-title strong{font-size:1.02rem;color:#f8fbff;letter-spacing:-.01em}
    #projects .babyops-preview-head small{grid-column:1/2;max-width:820px;font-size:.73rem;line-height:1.6;color:#93a6c2}
    #projects .babyops-scroll-hint{grid-column:2;grid-row:1/3;align-self:center;padding:7px 11px;border:1px solid rgba(103,232,249,.13);border-radius:999px;background:rgba(103,232,249,.055);font-size:.62rem;font-weight:700;letter-spacing:.04em;color:#8ea6c4;white-space:nowrap}
    #projects .babyops-scroll-hint b{margin-left:5px;color:#67e8f9;font-size:.82rem}
    #projects .babyops-preview-grid{position:relative;z-index:1;display:grid;grid-auto-flow:column;grid-auto-columns:clamp(180px,16vw,210px);gap:14px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:4px 4px 14px;scrollbar-width:thin;scrollbar-color:rgba(103,232,249,.28) rgba(255,255,255,.035)}
    #projects .babyops-preview-grid::-webkit-scrollbar{height:7px}
    #projects .babyops-preview-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.035);border-radius:999px}
    #projects .babyops-preview-grid::-webkit-scrollbar-thumb{background:linear-gradient(90deg,rgba(103,232,249,.28),rgba(167,139,250,.28));border-radius:999px}
    #projects .babyops-screen{scroll-snap-align:start;margin:0;min-width:0;padding:12px 10px 11px;border:1px solid rgba(148,163,184,.13);border-radius:20px;background:linear-gradient(180deg,rgba(17,30,54,.72),rgba(5,14,29,.8));box-shadow:0 10px 24px rgba(2,8,23,.12);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease,background .28s ease}
    #projects .babyops-screen:hover{transform:translateY(-5px);border-color:rgba(103,232,249,.32);background:linear-gradient(180deg,rgba(19,36,63,.95),rgba(7,18,37,.95));box-shadow:0 18px 36px rgba(2,8,23,.27)}
    #projects .babyops-feature-screen{border-color:rgba(103,232,249,.18);background:linear-gradient(180deg,rgba(12,31,54,.86),rgba(5,16,33,.86))}
    #projects .babyops-device{display:flex;align-items:center;justify-content:center;min-height:330px;padding:4px;border-radius:15px;background:radial-gradient(circle at 50% 45%,rgba(103,232,249,.055),transparent 63%);overflow:hidden}
    #projects .babyops-screen img{display:block;width:auto;max-width:100%;height:322px;object-fit:contain;border-radius:12px;filter:drop-shadow(0 12px 18px rgba(2,8,23,.28));transition:transform .28s ease,filter .28s ease}
    #projects .babyops-screen:hover img{transform:scale(1.025);filter:drop-shadow(0 15px 24px rgba(2,8,23,.34))}
    #projects .babyops-screen figcaption{min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:9px 4px 0;font-size:.7rem;line-height:1.35;font-weight:750;text-align:center;color:#a9b8cc}
    #projects .babyops-screen figcaption span{display:block;margin-bottom:4px;font-size:.52rem;font-weight:900;letter-spacing:.12em;color:#67e8f9}
    #projects .babyops-preview-grid:focus-visible{outline:2px solid rgba(103,232,249,.45);outline-offset:3px;border-radius:14px}
    @keyframes babyopsPreviewIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    @media(min-width:1500px){#projects .babyops-preview-grid{grid-auto-columns:210px}#projects .babyops-device{min-height:350px}#projects .babyops-screen img{height:342px}}
    @media(max-width:900px){#projects .babyops-preview{padding:18px 16px 15px;border-radius:21px}#projects .babyops-preview-head{grid-template-columns:1fr;margin-bottom:15px}#projects .babyops-preview-head small{grid-column:1}#projects .babyops-scroll-hint{display:none}#projects .babyops-preview-grid{grid-auto-columns:176px;gap:11px}#projects .babyops-device{min-height:310px}#projects .babyops-screen img{height:302px}}
    @media(max-width:560px){#projects .babyops-preview{margin:18px 0;padding:15px 12px 13px;border-radius:18px}#projects .babyops-preview-title{gap:6px 9px}#projects .babyops-preview-title strong{font-size:.93rem}#projects .babyops-preview-head small{font-size:.67rem;line-height:1.55}#projects .babyops-preview-grid{grid-auto-columns:160px;gap:10px;padding-bottom:11px}#projects .babyops-screen{padding:9px 8px 9px;border-radius:17px}#projects .babyops-device{min-height:282px}#projects .babyops-screen img{height:274px;border-radius:10px}#projects .babyops-screen figcaption{min-height:40px;font-size:.64rem}#projects .babyops-screen figcaption span{font-size:.48rem}}
    @media(prefers-reduced-motion:reduce){#projects .babyops-preview{animation:none!important}#projects .babyops-screen,#projects .babyops-screen img{transition:none!important}}
  `;
  document.head.appendChild(style);
})();