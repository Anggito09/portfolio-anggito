(()=>{
  const init=()=>{
    const card=document.querySelector('#projects .kamerain-featured');
    if(!card || card.dataset.kamerainPolished==='true') return !!card;
    card.dataset.kamerainPolished='true';

    const visual=card.querySelector('.kamerain-visual');
    const copy=card.querySelector('.kamerain-copy');
    if(!visual || !copy) return true;

    const glowA=document.createElement('span');
    glowA.className='kamerain-orb orb-a';
    const glowB=document.createElement('span');
    glowB.className='kamerain-orb orb-b';
    const spark=document.createElement('span');
    spark.className='kamerain-spark';
    card.append(glowA,glowB,spark);

    if(!copy.querySelector('.kamerain-proof')){
      const proof=document.createElement('div');
      proof.className='kamerain-proof';
      proof.innerHTML='<span><b>LIVE</b> Business Project</span><i></i><span>Instax Rental Experience</span>';
      const actions=copy.querySelector('.kamerain-actions');
      (actions||copy).before(proof);
    }

    const style=document.createElement('style');
    style.textContent=`
      #projects .kamerain-featured{isolation:isolate;border:1px solid rgba(244,114,182,.3)!important;background:radial-gradient(circle at 83% 15%,rgba(244,114,182,.24),transparent 29%),radial-gradient(circle at 58% 105%,rgba(251,191,36,.11),transparent 34%),linear-gradient(135deg,#111527 0%,#17172d 44%,#2a1629 100%)!important;box-shadow:0 32px 90px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.04)!important;transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s ease,border-color .35s ease!important}
      #projects .kamerain-featured::after{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(120deg,transparent 5%,rgba(244,114,182,.58) 32%,rgba(251,191,36,.2) 48%,transparent 72%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.55;pointer-events:none;animation:kamerainBorder 7s linear infinite}
      #projects .kamerain-featured:hover{transform:translateY(-8px) scale(1.003)!important;box-shadow:0 42px 105px rgba(0,0,0,.34),0 0 70px rgba(244,114,182,.09)!important;border-color:rgba(244,114,182,.52)!important}
      #projects .kamerain-copy{animation:kamerainCopyIn .75s cubic-bezier(.2,.8,.2,1) both}
      #projects .kamerain-featured h3{background:linear-gradient(90deg,#fff 0%,#fff 42%,#fbcfe8 68%,#fda4af 100%);background-size:180% 100%;-webkit-background-clip:text;background-clip:text;color:transparent!important;text-shadow:0 12px 32px rgba(244,114,182,.08);animation:kamerainTitle 6s ease-in-out infinite}
      #projects .kamerain-kicker b{box-shadow:0 0 0 1px rgba(244,114,182,.06),0 0 24px rgba(244,114,182,.08);animation:kamerainBadge 2.8s ease-in-out infinite}
      #projects .kamerain-highlights span{position:relative;overflow:hidden;transition:transform .24s ease,border-color .24s ease,background .24s ease,color .24s ease!important}
      #projects .kamerain-highlights span::after{content:"";position:absolute;inset:0;transform:translateX(-120%);background:linear-gradient(100deg,transparent,rgba(255,255,255,.11),transparent);transition:transform .55s ease}
      #projects .kamerain-highlights span:hover{transform:translateY(-3px);border-color:rgba(244,114,182,.3);background:rgba(244,114,182,.08);color:#fff}
      #projects .kamerain-highlights span:hover::after{transform:translateX(120%)}
      #projects .kamerain-proof{display:flex;align-items:center;gap:10px;margin-top:18px;color:#93a4bd;font-size:.63rem;font-weight:750;letter-spacing:.04em}
      #projects .kamerain-proof span{display:flex;align-items:center;gap:6px}
      #projects .kamerain-proof b{padding:4px 7px;border-radius:999px;background:rgba(52,211,153,.1);border:1px solid rgba(52,211,153,.2);color:#6ee7b7;font-size:.54rem;letter-spacing:.12em;box-shadow:0 0 18px rgba(52,211,153,.09)}
      #projects .kamerain-proof i{width:26px;height:1px;background:linear-gradient(90deg,rgba(244,114,182,.55),rgba(244,114,182,0))}
      #projects .kamerain-btn{position:relative;overflow:hidden}
      #projects .kamerain-btn::after{content:"";position:absolute;top:-120%;left:-35%;width:32%;height:340%;transform:rotate(22deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.26),transparent);transition:left .6s ease}
      #projects .kamerain-btn:hover::after{left:115%}
      #projects .kamerain-btn.primary{animation:kamerainCta 3s ease-in-out infinite}
      #projects .kamerain-visual::before{content:"";position:absolute;left:8%;right:5%;bottom:1%;height:30%;border-radius:50%;background:radial-gradient(ellipse,rgba(244,114,182,.23),transparent 67%);filter:blur(22px);opacity:.7;pointer-events:none;animation:kamerainGlow 4s ease-in-out infinite}
      #projects .kamerain-browser{transform:perspective(1000px) rotateY(-2deg) rotateX(1deg) rotate(.2deg)!important;will-change:transform;animation:kamerainBrowserFloat 5s ease-in-out infinite;box-shadow:0 34px 80px rgba(1,4,14,.45),0 0 0 1px rgba(255,255,255,.03)!important}
      #projects .kamerain-browser::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 28%,rgba(255,255,255,.16) 45%,transparent 60%);transform:translateX(-135%);animation:kamerainScreenSheen 6.5s ease-in-out infinite}
      #projects .kamerain-featured:hover .kamerain-browser{animation-play-state:paused;transform:perspective(1000px) rotateY(0) rotateX(0) translateY(-7px) scale(1.015)!important}
      #projects .kamerain-product-row div{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
      #projects .kamerain-product-row div:hover{transform:translateY(-5px);border-color:#fbcfe8;box-shadow:0 10px 22px rgba(244,114,182,.12)}
      #projects .kamerain-product-row div:nth-child(1){animation:kamerainProduct 5s ease-in-out infinite 0s}
      #projects .kamerain-product-row div:nth-child(2){animation:kamerainProduct 5s ease-in-out infinite .35s}
      #projects .kamerain-product-row div:nth-child(3){animation:kamerainProduct 5s ease-in-out infinite .7s}
      #projects .kamerain-polaroid{animation:kamerainPolaroid 4.6s ease-in-out infinite!important;box-shadow:0 20px 48px rgba(0,0,0,.32)!important}
      #projects .polaroid-two{animation-delay:.8s!important}
      #projects .kamerain-orb{position:absolute;z-index:0;border-radius:50%;filter:blur(2px);pointer-events:none;opacity:.55}
      #projects .kamerain-orb.orb-a{width:230px;height:230px;right:-75px;top:-95px;background:radial-gradient(circle,rgba(244,114,182,.23),transparent 68%);animation:kamerainOrbA 8s ease-in-out infinite}
      #projects .kamerain-orb.orb-b{width:210px;height:210px;left:39%;bottom:-130px;background:radial-gradient(circle,rgba(251,191,36,.12),transparent 68%);animation:kamerainOrbB 9s ease-in-out infinite}
      #projects .kamerain-spark{position:absolute;right:47%;top:18%;z-index:0;width:5px;height:5px;border-radius:50%;background:#f9a8d4;box-shadow:32px 60px 0 rgba(251,191,36,.7),-18px 105px 0 rgba(244,114,182,.55),82px 145px 0 rgba(255,255,255,.4);animation:kamerainSpark 3.8s ease-in-out infinite}
      @keyframes kamerainCopyIn{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}
      @keyframes kamerainTitle{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}
      @keyframes kamerainBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
      @keyframes kamerainCta{0%,100%{box-shadow:0 10px 28px rgba(244,114,182,.22)}50%{box-shadow:0 14px 36px rgba(244,114,182,.36),0 0 22px rgba(244,114,182,.11)}}
      @keyframes kamerainBrowserFloat{0%,100%{transform:perspective(1000px) rotateY(-2deg) rotateX(1deg) translateY(0)}50%{transform:perspective(1000px) rotateY(-1deg) rotateX(.5deg) translateY(-8px)}}
      @keyframes kamerainScreenSheen{0%,55%{transform:translateX(-135%)}75%,100%{transform:translateX(135%)}}
      @keyframes kamerainProduct{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
      @keyframes kamerainPolaroid{0%,100%{translate:0 0}50%{translate:0 -7px}}
      @keyframes kamerainGlow{0%,100%{opacity:.48;transform:scale(.95)}50%{opacity:.78;transform:scale(1.05)}}
      @keyframes kamerainOrbA{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-22px,20px) scale(1.08)}}
      @keyframes kamerainOrbB{0%,100%{transform:translate(0,0)}50%{transform:translate(25px,-12px)}}
      @keyframes kamerainSpark{0%,100%{opacity:.35;transform:scale(.9)}50%{opacity:.9;transform:scale(1.25)}}
      @keyframes kamerainBorder{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(18deg)}100%{filter:hue-rotate(0deg)}}
      @media(max-width:950px){#projects .kamerain-proof{justify-content:flex-start}#projects .kamerain-spark{right:22%;top:44%}}
      @media(max-width:600px){#projects .kamerain-featured{box-shadow:0 24px 65px rgba(0,0,0,.28)!important}#projects .kamerain-proof{flex-wrap:wrap;gap:7px;font-size:.58rem}#projects .kamerain-proof i{display:none}#projects .kamerain-orb.orb-a{width:160px;height:160px}#projects .kamerain-browser{animation-duration:6s}#projects .kamerain-spark{display:none}}
      @media(prefers-reduced-motion:reduce){#projects .kamerain-featured::after,#projects .kamerain-copy,#projects .kamerain-featured h3,#projects .kamerain-kicker b,#projects .kamerain-btn.primary,#projects .kamerain-visual::before,#projects .kamerain-browser,#projects .kamerain-browser::after,#projects .kamerain-product-row div,#projects .kamerain-polaroid,#projects .kamerain-orb,#projects .kamerain-spark{animation:none!important}}
    `;
    document.head.appendChild(style);

    if(window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion:reduce)').matches){
      card.addEventListener('pointermove',e=>{
        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        card.style.setProperty('--kx',x.toFixed(3));
        card.style.setProperty('--ky',y.toFixed(3));
        visual.style.transform=`translate3d(${x*5}px,${y*4}px,0)`;
      });
      card.addEventListener('pointerleave',()=>{visual.style.transform='';});
    }

    return true;
  };

  if(!init()){
    const observer=new MutationObserver(()=>{if(init()) observer.disconnect();});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('load',init,{once:true});
  }
})();