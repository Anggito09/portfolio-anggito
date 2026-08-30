(()=>{
  const init=()=>{
    const cards=[...document.querySelectorAll('#projects .project-card')];
    const card=cards.find(el=>el.querySelector('h3')?.textContent.trim().toLowerCase()==='kamerain');
    if(!card || card.dataset.kamerainRedesign==='true') return !!card;

    card.dataset.kamerainRedesign='true';
    card.classList.add('kamerain-featured');
    card.innerHTML=`
      <div class="kamerain-copy">
        <div class="kamerain-kicker"><span>BUSINESS · LIVE PROJECT</span><i></i><b>KameraIn</b></div>
        <h3>KameraIn — Instax Rental Website</h3>
        <p>A curated Instax rental platform designed to make analog photography more accessible. Customers can explore camera options, compare rental packages, check service coverage, and continue their booking directly through WhatsApp.</p>

        <div class="kamerain-highlights" aria-label="KameraIn key features">
          <span>Product Catalog</span>
          <span>Rental Pricing</span>
          <span>Gallery</span>
          <span>WhatsApp Booking</span>
        </div>

        <div class="kamerain-actions">
          <a class="kamerain-btn primary" href="https://anggito09.github.io/kamerain/" target="_blank" rel="noreferrer">Visit Website <b>↗</b></a>
          <a class="kamerain-btn" href="https://github.com/Anggito09/kamerain" target="_blank" rel="noreferrer">GitHub <b>↗</b></a>
          <a class="kamerain-btn" href="https://www.instagram.com/kamerain09/" target="_blank" rel="noreferrer">Instagram <b>↗</b></a>
        </div>
      </div>

      <div class="kamerain-visual" aria-label="KameraIn brand identity preview">
        <div class="kamerain-brand-panel">
          <span class="kamerain-brand-dot dot-a"></span>
          <span class="kamerain-brand-dot dot-b"></span>
          <span class="kamerain-brand-dot dot-c"></span>

          <div class="kamerain-brand-status"><i></i> LIVE BUSINESS</div>

          <div class="kamerain-logo-ring">
            <div class="kamerain-logo-wrap kamerain-logo-wrap--cute">
              <img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/kamerain-logo-v2.webp" alt="KameraIn logo" loading="lazy">
            </div>
            <span class="kamerain-cute-icon cute-1" aria-hidden="true">📸</span>
            <span class="kamerain-cute-icon cute-2" aria-hidden="true">✨</span>
            <span class="kamerain-cute-icon cute-3" aria-hidden="true">🎀</span>
            <span class="kamerain-cute-icon cute-4" aria-hidden="true">💖</span>
            <span class="kamerain-cute-icon cute-5" aria-hidden="true">🌸</span>
          </div>

          <div class="kamerain-brand-caption">
            <strong>Instax Rental Experience</strong>
            <span>Capture · Rent · Keep the moment</span>
          </div>

          <div class="kamerain-brand-footer">
            <span>Jember</span><i></i><span>Flexible Rental</span><i></i><span>Instant Booking</span>
          </div>
        </div>
      </div>`;

    const style=document.createElement('style');
    style.textContent=`
      #projects .kamerain-featured{
        grid-column:1/-1;position:relative;display:grid;
        grid-template-columns:minmax(0,.98fr) minmax(360px,.82fr);
        gap:46px;align-items:center;min-height:410px;padding:42px;
        overflow:hidden;border:1px solid rgba(244,114,182,.24);
        background:radial-gradient(circle at 86% 18%,rgba(244,114,182,.16),transparent 31%),linear-gradient(135deg,#101528 0%,#17182d 48%,#251526 100%);
        box-shadow:0 30px 80px rgba(0,0,0,.25);
      }
      #projects .kamerain-featured::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.035),transparent 32%)}
      #projects .kamerain-copy{position:relative;z-index:2;max-width:620px}
      #projects .kamerain-kicker{display:flex;align-items:center;gap:10px;margin-bottom:16px;font-size:.68rem;font-weight:900;letter-spacing:.13em;color:#f9a8d4}
      #projects .kamerain-kicker i{width:34px;height:1px;background:linear-gradient(90deg,#f472b6,transparent)}
      #projects .kamerain-kicker b{padding:5px 9px;border:1px solid rgba(244,114,182,.2);border-radius:999px;background:rgba(244,114,182,.07);font-size:.61rem;letter-spacing:.06em;color:#fbcfe8}
      #projects .kamerain-featured h3{margin:0 0 16px;font-size:clamp(2rem,3vw,2.75rem);line-height:1.05;letter-spacing:-.045em;color:#fff}
      #projects .kamerain-featured p{margin:0;max-width:610px;color:#b8c4d8;font-size:.96rem;line-height:1.78;text-align:justify!important;text-justify:inter-word!important;hyphens:none!important;-webkit-hyphens:none!important;word-break:normal!important;overflow-wrap:break-word!important}
      #projects .kamerain-highlights{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
      #projects .kamerain-highlights span{padding:7px 11px;border:1px solid rgba(255,255,255,.09);border-radius:999px;background:rgba(255,255,255,.035);font-size:.69rem;font-weight:700;color:#dce5f1}
      #projects .kamerain-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
      #projects .kamerain-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:10px 15px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.045);font-size:.78rem;font-weight:800;color:#eef4ff;transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
      #projects .kamerain-btn:hover{transform:translateY(-2px);border-color:rgba(244,114,182,.38);background:rgba(244,114,182,.08)}
      #projects .kamerain-btn.primary{border-color:rgba(244,114,182,.34);background:linear-gradient(135deg,#f472b6,#fb7185);color:#2b1020;box-shadow:0 12px 30px rgba(244,114,182,.22)}

      #projects .kamerain-visual{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;min-height:320px}
      #projects .kamerain-brand-panel{position:relative;width:min(100%,500px);min-height:318px;padding:36px;border:1px solid rgba(255,255,255,.58);border-radius:30px;background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(255,247,251,.96));box-shadow:0 32px 75px rgba(2,6,23,.34),inset 0 1px 0 rgba(255,255,255,.8);display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;transition:transform .35s ease,box-shadow .35s ease}
      #projects .kamerain-featured:hover .kamerain-brand-panel{transform:translateY(-5px);box-shadow:0 42px 90px rgba(2,6,23,.42),0 0 55px rgba(244,114,182,.10)}
      #projects .kamerain-brand-panel::before{content:"";position:absolute;width:260px;height:260px;border-radius:50%;right:-85px;top:-95px;background:radial-gradient(circle,rgba(244,114,182,.18),transparent 68%)}
      #projects .kamerain-brand-panel::after{content:"";position:absolute;width:210px;height:210px;border-radius:50%;left:-90px;bottom:-105px;background:radial-gradient(circle,rgba(251,191,36,.12),transparent 68%)}
      #projects .kamerain-brand-status{position:absolute;top:22px;right:24px;z-index:2;display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid #f3e8ee;border-radius:999px;background:rgba(255,255,255,.88);font-size:.56rem;font-weight:900;letter-spacing:.09em;color:#7a3a4a}
      #projects .kamerain-brand-status i{width:7px;height:7px;border-radius:50%;background:#34d399;box-shadow:0 0 0 4px rgba(52,211,153,.12);animation:kamerainPulse 1.8s infinite}
      #projects .kamerain-logo-ring{position:relative;z-index:2;width:168px;height:168px;display:grid;place-items:center;animation:kamerainRingFloat 3.8s ease-in-out infinite}
      #projects .kamerain-logo-wrap{position:relative;z-index:2;width:min(78%,310px);height:150px;display:flex;align-items:center;justify-content:center;padding:18px 24px;border-radius:24px;background:#fff;box-shadow:0 18px 42px rgba(72,28,55,.09),0 0 0 1px rgba(244,114,182,.08)}
      #projects .kamerain-logo-wrap--cute{width:128px;height:128px;min-width:128px;min-height:128px;padding:14px;border-radius:50%;border:2px solid #fce7f3;box-shadow:0 16px 36px rgba(244,114,182,.18),0 0 0 10px rgba(253,242,248,.92),0 0 0 18px rgba(252,231,243,.45);overflow:hidden;animation:kamerainLogoPop .7s .2s cubic-bezier(.34,1.56,.64,1) both}
      #projects .kamerain-logo-wrap--cute::after{content:"";position:absolute;inset:-2px;border-radius:50%;border:2px dashed rgba(244,114,182,.22);animation:kamerainDashedSpin 18s linear infinite;pointer-events:none}
      #projects .kamerain-logo-wrap--cute img{border-radius:50%}
      #projects .kamerain-logo-wrap img{display:block;max-width:100%;max-height:100%;object-fit:contain;filter:drop-shadow(0 10px 22px rgba(244,114,182,.10));transition:transform .35s ease}
      #projects .kamerain-featured:hover .kamerain-logo-wrap img{transform:scale(1.035)}
      #projects .kamerain-cute-icon{position:absolute;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid #fce7f3;box-shadow:0 6px 14px rgba(244,114,182,.14);font-size:.82rem;line-height:1;animation:kamerainIconFloat 3.2s ease-in-out infinite;pointer-events:none}
      #projects .kamerain-cute-icon.cute-1{left:-6px;top:16px;animation-delay:.1s}
      #projects .kamerain-cute-icon.cute-2{right:-8px;top:10px;width:28px;height:28px;font-size:.72rem;animation-delay:.4s}
      #projects .kamerain-cute-icon.cute-3{left:4px;bottom:4px;width:28px;height:28px;font-size:.72rem;background:#fff0f6;animation-delay:.7s}
      #projects .kamerain-cute-icon.cute-4{right:2px;bottom:14px;animation-delay:1s}
      #projects .kamerain-cute-icon.cute-5{right:38%;top:-10px;width:26px;height:26px;font-size:.68rem;animation-delay:1.3s}
      #projects .kamerain-brand-caption{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:5px;margin-top:19px;text-align:center}
      #projects .kamerain-brand-caption strong{font-size:.82rem;color:#52263a;letter-spacing:.01em}
      #projects .kamerain-brand-caption span{font-size:.63rem;color:#9b7184;letter-spacing:.05em}
      #projects .kamerain-brand-footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:20px;color:#a27b8d;font-size:.57rem;font-weight:750;letter-spacing:.04em}
      #projects .kamerain-brand-footer i{width:3px;height:3px;border-radius:50%;background:#f472b6}
      #projects .kamerain-brand-dot{position:absolute;z-index:1;border-radius:50%;background:#f9a8d4;opacity:.8}
      #projects .kamerain-brand-dot.dot-a{width:7px;height:7px;left:34px;top:34px}
      #projects .kamerain-brand-dot.dot-b{width:5px;height:5px;left:61px;top:55px;background:#fbbf24}
      #projects .kamerain-brand-dot.dot-c{width:6px;height:6px;right:44px;bottom:45px;background:#fb7185}
      @keyframes kamerainPulse{0%,100%{opacity:1}50%{opacity:.45}}
      @keyframes kamerainRingFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      @keyframes kamerainLogoPop{from{opacity:0;transform:scale(.72)}to{opacity:1;transform:scale(1)}}
      @keyframes kamerainDashedSpin{to{transform:rotate(360deg)}}
      @keyframes kamerainIconFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-7px) rotate(6deg)}}

      @media(max-width:980px){
        #projects .kamerain-featured{grid-template-columns:1fr;gap:32px;padding:34px}
        #projects .kamerain-copy{max-width:none}
        #projects .kamerain-visual{min-height:auto}
        #projects .kamerain-brand-panel{width:min(100%,620px);min-height:300px}
      }
      @media(max-width:600px){
        #projects .kamerain-featured{gap:26px;padding:24px 18px;min-height:0;border-radius:22px}
        #projects .kamerain-kicker{flex-wrap:wrap;font-size:.59rem}
        #projects .kamerain-kicker i{width:20px}
        #projects .kamerain-featured h3{font-size:1.9rem;line-height:1.08}
        #projects .kamerain-featured p{font-size:.88rem;line-height:1.65}
        #projects .kamerain-highlights{gap:7px}
        #projects .kamerain-highlights span{font-size:.62rem;padding:7px 9px}
        #projects .kamerain-actions{display:grid;grid-template-columns:1fr 1fr;margin-top:23px}
        #projects .kamerain-btn.primary{grid-column:1/-1}
        #projects .kamerain-brand-panel{min-height:270px;padding:30px 18px 24px;border-radius:24px}
        #projects .kamerain-brand-status{top:16px;right:16px;font-size:.49rem;padding:6px 8px}
        #projects .kamerain-logo-wrap{width:84%;height:132px;padding:16px 20px;border-radius:20px}
        #projects .kamerain-brand-caption strong{font-size:.76rem}
        #projects .kamerain-brand-caption span{font-size:.57rem}
        #projects .kamerain-brand-footer{font-size:.51rem;gap:6px}
      }
      @media(max-width:600px){
        #projects .kamerain-logo-ring{width:138px;height:138px}
        #projects .kamerain-logo-wrap--cute{width:108px;height:108px;min-width:108px;min-height:108px}
        #projects .kamerain-cute-icon{width:26px;height:26px;font-size:.68rem}
      }
      @media(prefers-reduced-motion:reduce){
        #projects .kamerain-brand-status i,#projects .kamerain-brand-panel,#projects .kamerain-logo-wrap img,#projects .kamerain-logo-ring,#projects .kamerain-cute-icon{animation:none!important;transition:none!important}
      }
    `;
    document.head.appendChild(style);
    return true;
  };

  if(!init()){
    const observer=new MutationObserver(()=>{if(init()) observer.disconnect();});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('load',init,{once:true});
  }
})();