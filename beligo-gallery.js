(()=>{
  const cards=[...document.querySelectorAll('#projects .project-card')];
  const card=cards.find(item=>item.classList.contains('beligo-enhanced')||item.querySelector('h3')?.textContent.toLowerCase().includes('beligo'));
  if(!card||card.querySelector('.beligo-gallery')) return;

  const shots=[
    ['01','Search & Discover','Start from Beligo’s product search experience.','assets/beligo/01-home.webp'],
    ['02','Keyword Search','Search a specific product and narrow the intent.','assets/beligo/02-search.webp'],
    ['03','Price Comparison','Compare marketplace prices before choosing.','assets/beligo/03-compare.webp'],
    ['04','Sorted Results','Use filters and sorting to surface better options.','assets/beligo/04-filter.webp'],
    ['05','Product Detail','Review product, price, delivery and rating details.','assets/beligo/05-detail.webp'],
    ['06','Checkout Success','Complete the transaction with a clear success state.','assets/beligo/06-payment.webp'],
    ['07','Product Reviews','Check ratings and review distribution before buying.','assets/beligo/07-review.webp'],
    ['08','Community Discussion','Ask questions and exchange recommendations with users.','assets/beligo/08-discussion.webp'],
    ['09','Food Discovery','Browse food categories and nearby popular choices.','assets/beligo/09-food-home.webp'],
    ['10','Order Summary','Review items, fees and total before placing an order.','assets/beligo/10-food-order.webp'],
    ['11','Delivery Setup','Confirm address, delivery time and fulfillment details.','assets/beligo/11-delivery.webp'],
    ['12','Order Processing','Show a reassuring transition while the order is handled.','assets/beligo/12-processing.webp'],
    ['13','Delivery Scheduled','Confirm the delivery window and next notification.','assets/beligo/13-scheduled.webp'],
    ['14','Merchant Partnership','Invite merchants to promote products through Beligo.','assets/beligo/14-merchant.webp']
  ];

  const gallery=document.createElement('section');
  gallery.className='beligo-gallery';
  gallery.innerHTML=`
    <div class="beligo-gallery-head">
      <div><span>PRODUCT WALKTHROUGH</span><strong>From discovery to checkout & delivery</strong></div>
      <small>14 screens · ordered by user flow</small>
    </div>
    <div class="beligo-gallery-track">
      ${shots.map(([num,title,desc,src])=>`
        <article class="beligo-shot">
          <div class="beligo-shot-frame"><img src="${src}" alt="Beligo — ${title}" loading="lazy" decoding="async"></div>
          <div class="beligo-shot-copy"><b>${num}</b><div><strong>${title}</strong><small>${desc}</small></div></div>
        </article>`).join('')}
    </div>`;

  const objectives=card.querySelector('.beligo-objectives');
  const chips=card.querySelector('.chips');
  if(objectives) objectives.after(gallery); else if(chips) card.insertBefore(gallery,chips); else card.appendChild(gallery);

  const style=document.createElement('style');
  style.textContent=`
    #projects .beligo-gallery{margin:24px 0 18px;padding:18px;border:1px solid rgba(129,230,170,.2);border-radius:20px;background:linear-gradient(145deg,rgba(15,23,32,.94),rgba(19,35,30,.9));overflow:hidden}
    #projects .beligo-gallery-head{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:16px}
    #projects .beligo-gallery-head>div{display:grid;gap:4px}
    #projects .beligo-gallery-head span{font-size:.69rem;font-weight:900;letter-spacing:.14em;color:#86efac}
    #projects .beligo-gallery-head strong{font-size:1.05rem;color:#f8fafc}
    #projects .beligo-gallery-head small{color:#94a3b8;white-space:nowrap}
    #projects .beligo-gallery-track{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
    #projects .beligo-shot{min-width:0;padding:10px;border:1px solid rgba(148,163,184,.16);border-radius:16px;background:rgba(255,255,255,.03);transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
    #projects .beligo-shot:hover{transform:translateY(-4px);border-color:rgba(134,239,172,.42);background:rgba(16,185,129,.045);box-shadow:0 16px 30px rgba(2,8,23,.22)}
    #projects .beligo-shot-frame{overflow:hidden;border-radius:12px;background:#fff;box-shadow:0 10px 24px rgba(0,0,0,.2)}
    #projects .beligo-shot-frame img{display:block;width:100%;aspect-ratio:359/608;object-fit:cover}
    #projects .beligo-shot-copy{display:grid;grid-template-columns:28px minmax(0,1fr);gap:9px;align-items:start;margin-top:10px}
    #projects .beligo-shot-copy>b{display:grid;place-items:center;width:28px;height:28px;border-radius:999px;background:linear-gradient(135deg,#34d399,#86efac);color:#062b16;font-size:.68rem;font-weight:900}
    #projects .beligo-shot-copy>div{display:grid;gap:3px;min-width:0}
    #projects .beligo-shot-copy strong{font-size:.8rem;line-height:1.25;color:#f8fafc}
    #projects .beligo-shot-copy small{font-size:.67rem;line-height:1.42;color:#94a3b8}
    @media(max-width:1050px){#projects .beligo-gallery-track{grid-template-columns:repeat(3,minmax(0,1fr))}}
    @media(max-width:760px){#projects .beligo-gallery{padding:14px;margin-top:20px}#projects .beligo-gallery-head{align-items:flex-start;flex-direction:column;gap:5px}#projects .beligo-gallery-head small{white-space:normal}#projects .beligo-gallery-track{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(180px,68vw);grid-template-columns:none;overflow-x:auto;padding:2px 2px 10px;scroll-snap-type:x mandatory;overscroll-behavior-inline:contain}#projects .beligo-shot{scroll-snap-align:start}#projects .beligo-shot-copy small{font-size:.65rem}}
    @media(max-width:420px){#projects .beligo-gallery-track{grid-auto-columns:minmax(175px,74vw)}#projects .beligo-gallery-head strong{font-size:.95rem}}
    @media(prefers-reduced-motion:reduce){#projects .beligo-shot{transition:none}}
  `;
  document.head.appendChild(style);
})();
