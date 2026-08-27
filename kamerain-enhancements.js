(()=>{
  const cards=[...document.querySelectorAll('#projects .project-card')];
  const card=cards.find(el=>el.querySelector('h3')?.textContent.trim().toLowerCase()==='kamerain');
  if(!card || card.classList.contains('kamerain-featured')) return;

  card.classList.add('kamerain-featured');
  card.innerHTML=`
    <div class="kamerain-copy">
      <div class="kamerain-kicker"><span>BUSINESS · LIVE PROJECT</span><i></i><b>KameraIn</b></div>
      <h3>KameraIn — Instax Rental Website</h3>
      <p>A curated Instax rental platform designed to make analog photography more accessible in Jember and beyond. Customers can explore the complete camera catalog, compare flexible rental durations and film packages, check service coverage and pricing details, browse a curated gallery of real customer moments, and complete their booking instantly via WhatsApp with fast, friendly support and clear guidance.</p>
      <div class="kamerain-highlights">
        <span>Product Catalog</span><span>Rental Pricing</span><span>Gallery</span><span>WhatsApp Booking</span>
      </div>
      <div class="kamerain-actions">
        <a class="kamerain-btn primary" href="https://anggito09.github.io/kamerain/" target="_blank" rel="noreferrer">Visit Website <b>↗</b></a>
        <a class="kamerain-btn" href="https://github.com/Anggito09/kamerain" target="_blank" rel="noreferrer">GitHub <b>↗</b></a>
        <a class="kamerain-btn" href="https://www.instagram.com/kamerain09/" target="_blank" rel="noreferrer">Instagram <b>↗</b></a>
      </div>
    </div>
    <div class="kamerain-visual" aria-label="KameraIn project visual preview">
      <div class="kamerain-browser">
        <div class="kamerain-browserbar"><span></span><span></span><span></span><em>kamerain.id — instax experience</em></div>
        <div class="kamerain-hero-shot">
          <img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/gallery/prints-in-park.webp" alt="Instax prints in the park — KameraIn rental moments" loading="lazy">
          <div class="kamerain-logo-chip"><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/kamerain-logo-v2.webp" alt="KameraIn logo" loading="lazy"></div>
          <div class="kamerain-live"><i></i>LIVE</div>
        </div>
        <div class="kamerain-product-row kamerain-product-row-4">
          <div><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/instax-mini-12-mint-v2.png" alt="Instax Mini 12 Mint" loading="lazy"><span>Mini 12</span></div>
          <div><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/instax-mini-13.png" alt="Instax Mini 13" loading="lazy"><span>Mini 13</span></div>
          <div><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/instax-mini-41.png" alt="Instax Mini 41" loading="lazy"><span>Mini 41</span></div>
          <div><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/instax-mini-evo.png" alt="Instax Mini Evo" loading="lazy"><span>Mini Evo</span></div>
        </div>
      </div>
      <div class="kamerain-polaroid polaroid-one"><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/gallery/instax-prints.webp" alt="Instax photo prints" loading="lazy"></div>
      <div class="kamerain-polaroid polaroid-two"><img src="https://raw.githubusercontent.com/Anggito09/kamerain/main/public/gallery/snow-couple.webp" alt="KameraIn customer moment" loading="lazy"></div>
    </div>`;

  const style=document.createElement('style');
  style.textContent=`
    #projects .kamerain-featured{grid-column:1/-1;position:relative;display:grid;grid-template-columns:minmax(0,.92fr) minmax(360px,.95fr);gap:28px;align-items:center;min-height:380px;padding:28px;overflow:hidden;border-color:rgba(244,114,182,.22);background:radial-gradient(circle at 82% 16%,rgba(244,114,182,.17),transparent 30%),radial-gradient(circle at 58% 100%,rgba(251,191,36,.08),transparent 35%),linear-gradient(135deg,#16172c 0%,#16172d 42%,#28152a 100%);box-shadow:0 28px 70px rgba(0,0,0,.22)}
    #projects .kamerain-featured::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,rgba(255,255,255,.025),transparent 35%);pointer-events:none}
    #projects .kamerain-featured:hover{transform:translateY(-5px);border-color:rgba(244,114,182,.4);box-shadow:0 34px 80px rgba(0,0,0,.28)}
    #projects .kamerain-copy{position:relative;z-index:2;max-width:560px}
    #projects .kamerain-kicker{display:flex;align-items:center;gap:9px;margin-bottom:12px;font-size:.66rem;font-weight:900;letter-spacing:.13em;color:#f9a8d4}
    #projects .kamerain-kicker i{width:28px;height:1px;background:linear-gradient(90deg,#f472b6,transparent)}
    #projects .kamerain-kicker b{padding:4px 8px;border:1px solid rgba(244,114,182,.2);border-radius:999px;background:rgba(244,114,182,.07);font-size:.62rem;letter-spacing:.07em;color:#fbcfe8}
    #projects .kamerain-featured h3{margin:4px 0 13px;font-size:clamp(1.8rem,3vw,2.55rem);line-height:1.05;letter-spacing:-.04em;color:#fff}
    #projects .kamerain-featured p{max-width:590px;margin:0;color:#b9c4d9;font-size:.95rem;line-height:1.78;text-align:justify;text-justify:inter-word;hyphens:auto;-webkit-hyphens:auto;animation:kamerainFadeUp .75s .14s both}
    #projects .kamerain-highlights{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
    #projects .kamerain-highlights span{padding:7px 10px;border:1px solid rgba(255,255,255,.08);border-radius:999px;background:rgba(255,255,255,.035);font-size:.68rem;font-weight:700;color:#d9e2f0}
    #projects .kamerain-actions{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px}
    #projects .kamerain-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:42px;padding:10px 14px;border:1px solid rgba(255,255,255,.11);border-radius:12px;background:rgba(255,255,255,.045);font-size:.77rem;font-weight:800;color:#eef4ff;transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
    #projects .kamerain-btn:hover{transform:translateY(-2px);border-color:rgba(244,114,182,.38);background:rgba(244,114,182,.08)}
    #projects .kamerain-btn.primary{border-color:rgba(244,114,182,.32);background:linear-gradient(135deg,#f472b6,#fb7185);color:#27101d;box-shadow:0 10px 28px rgba(244,114,182,.22)}
    #projects .kamerain-btn.primary:hover{background:linear-gradient(135deg,#f9a8d4,#fb7185);box-shadow:0 14px 34px rgba(244,114,182,.3)}
    #projects .kamerain-visual{position:relative;z-index:1;min-height:320px;padding:8px 8px 12px 8px;display:flex;align-items:center;justify-content:center}
    #projects .kamerain-browser{position:relative;width:min(100%,560px);border:1px solid rgba(255,255,255,.11);border-radius:20px;overflow:hidden;background:#f8fafc;box-shadow:0 28px 60px rgba(1,4,14,.32);transform:rotate(.35deg);transition:transform .35s ease,box-shadow .35s ease}
    #projects .kamerain-featured:hover .kamerain-browser{transform:rotate(0deg) translateY(-3px);box-shadow:0 38px 80px rgba(1,4,14,.44)}
    #projects .kamerain-browserbar{height:34px;display:flex;align-items:center;gap:6px;padding:0 11px;background:#fff;border-bottom:1px solid #e5e7eb}
    #projects .kamerain-browserbar span{width:7px;height:7px;border-radius:50%;background:#e5e7eb}
    #projects .kamerain-browserbar span:first-child{background:#fb7185}#projects .kamerain-browserbar span:nth-child(2){background:#fbbf24}#projects .kamerain-browserbar span:nth-child(3){background:#34d399}
    #projects .kamerain-browserbar em{margin-left:auto;font-style:normal;font-size:.55rem;font-weight:700;color:#94a3b8;letter-spacing:.06em}
    #projects .kamerain-hero-shot{position:relative;height:215px;overflow:hidden;background:#0f1020}
    #projects .kamerain-hero-shot>img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 38%;filter:saturate(1.04) contrast(1.02);transition:transform .7s cubic-bezier(.2,.7,.2,1)}
    #projects .kamerain-featured:hover .kamerain-hero-shot>img{transform:scale(1.04)}
    #projects .kamerain-hero-shot::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,8,20,.08),transparent 42%,rgba(10,8,20,.22));pointer-events:none}
    #projects .kamerain-hero-4{height:auto;min-height:205px;padding:16px 14px 14px;background:linear-gradient(145deg,#ffffff 0%,#fdf2f8 42%,#fce7f3 100%);display:flex;align-items:center;justify-content:center}
    #projects .kamerain-hero-4::after{display:none}
    #projects .kamerain-4grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;width:100%;max-width:520px}
    #projects .kamerain-4grid div{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 6px;border:1px solid #f1e6ee;border-radius:14px;background:#fff;box-shadow:0 6px 18px rgba(244,114,182,.08);transition:transform .28s ease,box-shadow .28s ease}
    #projects .kamerain-4grid div:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(244,114,182,.14)}
    #projects .kamerain-4grid img{width:72px;height:78px;object-fit:contain}
    #projects .kamerain-4grid span{font-size:.58rem;font-weight:800;color:#7a3a4a;letter-spacing:.02em}
    #projects .kamerain-logo-chip{position:absolute;left:15px;bottom:14px;z-index:2;width:112px;height:54px;display:flex;align-items:center;justify-content:center;padding:6px 8px;border:1px solid rgba(255,255,255,.58);border-radius:14px;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);box-shadow:0 9px 24px rgba(0,0,0,.14)}
    #projects .kamerain-logo-chip img{max-width:100%;max-height:100%;object-fit:contain}
    #projects .kamerain-live{position:absolute;right:13px;top:12px;z-index:2;display:flex;align-items:center;gap:6px;padding:6px 9px;border-radius:999px;background:rgba(15,23,42,.74);backdrop-filter:blur(8px);font-size:.52rem;font-weight:900;letter-spacing:.1em;color:#fff}
    #projects .kamerain-live i{width:6px;height:6px;border-radius:50%;background:#34d399;box-shadow:0 0 0 4px rgba(52,211,153,.15);animation:kamerainPulse 1.8s infinite}
    #projects .kamerain-product-row{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;padding:11px;background:#fff}
    #projects .kamerain-product-row.kamerain-product-row-4{grid-template-columns:repeat(4,1fr)}
    #projects .kamerain-product-row div{height:83px;display:grid;grid-template-columns:64px 1fr;align-items:center;gap:6px;padding:5px;border:1px solid #eef2f7;border-radius:12px;background:#fafafa;transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;animation:kamerainCardIn .55s both}
    #projects .kamerain-product-row div:nth-child(2){animation-delay:.07s}#projects .kamerain-product-row div:nth-child(3){animation-delay:.14s}#projects .kamerain-product-row div:nth-child(4){animation-delay:.21s}
    #projects .kamerain-product-row div:hover{transform:translateY(-3px);border-color:rgba(244,114,182,.18);box-shadow:0 10px 22px rgba(244,114,182,.08)}
    #projects .kamerain-product-row img{width:58px;height:70px;object-fit:contain}
    #projects .kamerain-product-row span{font-size:.58rem;font-weight:800;color:#475569}
    #projects .kamerain-polaroid{position:absolute;z-index:3;width:100px;padding:7px 7px 18px;background:#fff;box-shadow:0 16px 38px rgba(0,0,0,.28);transition:transform .35s ease}
    #projects .kamerain-polaroid img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover}
    #projects .polaroid-one{left:-3px;bottom:3px;transform:rotate(-8deg)}
    #projects .polaroid-two{right:-7px;top:5px;transform:rotate(7deg)}
    #projects .kamerain-featured:hover .polaroid-one{transform:rotate(-5deg) translate(-2px,-3px)}#projects .kamerain-featured:hover .polaroid-two{transform:rotate(4deg) translate(2px,-3px)}
    #projects .kamerain-kicker{animation:kamerainFadeUp .6s both}#projects .kamerain-featured h3{animation:kamerainFadeUp .7s .07s both}#projects .kamerain-featured p{animation:kamerainFadeUp .7s .14s both}#projects .kamerain-highlights{animation:kamerainFadeUp .7s .21s both}#projects .kamerain-actions{animation:kamerainFadeUp .7s .28s both}
    @keyframes kamerainPulse{0%,100%{opacity:1}50%{opacity:.45}}@keyframes kamerainCardIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes kamerainFadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    @media(max-width:950px){#projects .kamerain-featured{grid-template-columns:1fr;gap:24px;padding:28px}#projects .kamerain-copy{max-width:none}#projects .kamerain-visual{min-height:330px;padding:6px 28px 10px}#projects .kamerain-browser{width:min(100%,650px)}}
    @media(max-width:600px){#projects .kamerain-featured{padding:21px 16px 18px;border-radius:19px;gap:18px}#projects .kamerain-kicker{font-size:.58rem;flex-wrap:wrap}#projects .kamerain-featured h3{font-size:1.65rem}#projects .kamerain-featured p{font-size:.84rem;line-height:1.65}#projects .kamerain-actions{display:grid;grid-template-columns:1fr 1fr}#projects .kamerain-btn.primary{grid-column:1/-1}#projects .kamerain-visual{min-height:240px;padding:4px 8px 10px}#projects .kamerain-browser{border-radius:15px}#projects .kamerain-browserbar{height:29px}#projects .kamerain-hero-shot{height:165px}#projects .kamerain-hero-4{min-height:150px;padding:10px 8px}#projects .kamerain-4grid{gap:6px}#projects .kamerain-4grid div{padding:6px 4px}#projects .kamerain-4grid img{width:48px;height:54px}#projects .kamerain-4grid span{font-size:.5rem}#projects .kamerain-product-row{gap:5px;padding:7px}#projects .kamerain-product-row.kamerain-product-row-4{grid-template-columns:repeat(2,1fr)}#projects .kamerain-product-row div{height:61px;grid-template-columns:43px 1fr;padding:3px}#projects .kamerain-product-row img{width:40px;height:52px}#projects .kamerain-product-row span{font-size:.5rem}#projects .kamerain-logo-chip{width:86px;height:42px;left:9px;bottom:9px}#projects .kamerain-live{right:8px;top:8px;font-size:.45rem}#projects .kamerain-polaroid{display:none}}
    @media(prefers-reduced-motion:reduce){#projects .kamerain-browser,#projects .kamerain-polaroid,#projects .kamerain-hero-shot>img,#projects .kamerain-live i{transition:none!important;animation:none!important}}
  `;
  document.head.appendChild(style);
})();