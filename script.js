const links=document.querySelectorAll('nav a');const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${entry.target.id}`));}});},{rootMargin:'-20% 0px -65% 0px',threshold:0});sections.forEach(section=>observer.observe(section));

// Professional English copy for the hero section.
const hero=document.querySelector('.hero');
if(hero){
  const eyebrow=hero.querySelector('.eyebrow');
  const title=hero.querySelector('h1');
  const lead=hero.querySelector('.lead');
  const actions=hero.querySelectorAll('.hero-actions a');
  const stats=hero.querySelectorAll('.stats > div');
  const focusItems=hero.querySelectorAll('.focus-item');

  if(eyebrow) eyebrow.textContent='Technology · Data · Digital Solutions';
  if(title) title.innerHTML='Building digital solutions that <span>work for people.</span>';
  if(lead) lead.textContent="I'm Anggito Karta Wijaya, an Information Technology professional with experience in system implementation, requirements analysis, service integration, data processing, and digital solution development. I work across business needs, user expectations, and technical teams to deliver solutions that are practical, reliable, and meaningful.";
  if(actions[0]) actions[0].textContent='View My Work';

  const statContent=[
    ['System Implementation','Requirements analysis, testing, training, and rollout'],
    ['Data & Technology','Analytics, AI, automation, and integration'],
    ['User & Business Focus','Problem solving, documentation, and coordination']
  ];
  stats.forEach((item,index)=>{
    if(statContent[index]) item.innerHTML=`<strong>${statContent[index][0]}</strong><span>${statContent[index][1]}</span>`;
  });

  const focusContent=[
    ['Implementation & Systems','Turning operational requirements into reliable, ready-to-use solutions.'],
    ['Data & Digital Technology','Using data, integration, and technology to improve decisions and workflows.'],
    ['Product & User Experience','Connecting user needs with practical, measurable implementations.']
  ];
  focusItems.forEach((item,index)=>{
    if(!focusContent[index]) return;
    const strong=item.querySelector('strong');
    const small=item.querySelector('small');
    if(strong) strong.textContent=focusContent[index][0];
    if(small) small.textContent=focusContent[index][1];
  });

  // Keep the headline visually balanced and clearly left-aligned on desktop and mobile.
  const heroLayoutStyle=document.createElement('style');
  heroLayoutStyle.textContent=`
    .hero-copy h1{max-width:11.5ch!important;text-align:left!important;text-wrap:balance;line-height:1.01!important;letter-spacing:-.055em!important;font-size:clamp(3rem,5.35vw,5.25rem)!important}
    .hero-copy h1 span{display:inline}
    .hero-copy .lead{max-width:720px;text-align:left}
    .hero-copy .eyebrow{text-align:left}
    @media(max-width:900px){.hero-copy h1{max-width:13ch!important;font-size:clamp(2.8rem,9vw,4.8rem)!important}}
    @media(max-width:560px){.hero-copy h1{max-width:100%!important;font-size:clamp(2.55rem,12vw,3.75rem)!important;line-height:1.04!important}}
  `;
  document.head.appendChild(heroLayoutStyle);
}

const animatedElements=document.querySelectorAll('.section, .project-card, .research-card, .achievement-grid article, .skill-card, .cert-card, .education-card, .contact-card');
animatedElements.forEach((element,index)=>{element.dataset.animate='';element.style.transitionDelay=`${Math.min(index%6,4)*70}ms`;});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.12});
animatedElements.forEach(element=>revealObserver.observe(element));

// Use profile photo uploaded in the repository root.
const profilePhoto=document.querySelector('.profile-photo');
if(profilePhoto){profilePhoto.src='anggito-profile.jpg';}

// Gentle scroll reveal for sections/cards. Respects reduced-motion preferences.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  const revealTargets=[...document.querySelectorAll('.section-heading,.split,.timeline article,.project-card,.research-card,.education-card,.achievement-grid article,.skill-card,.cert-card,.contact-card')];
  revealTargets.forEach((element,index)=>{
    element.classList.add('reveal-on-scroll');
    element.style.transitionDelay=`${Math.min((index%4)*55,165)}ms`;
  });
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -45px'});
  revealTargets.forEach(element=>revealObserver.observe(element));
}

// CityConnect visual gallery
const cityConnectCard=[...document.querySelectorAll('.project-card')].find(card=>card.querySelector('h3')?.textContent.trim()==='CityConnect');
if(cityConnectCard){
  const gallery=document.createElement('div');
  gallery.className='project-gallery cityconnect-gallery';
  gallery.innerHTML=`
    <button class="project-shot project-shot-wide" type="button" aria-label="Lihat dokumentasi Juara II CityConnect"><img src="assets/cityconnect-juara-2.webp" alt="Dokumentasi tim CityConnect meraih Juara II Braincore.id" loading="lazy"></button>
    <button class="project-shot project-shot-poster" type="button" aria-label="Lihat poster CityConnect"><img src="assets/cityconnect-poster.webp" alt="Poster CityConnect berisi tujuan, manfaat, dan fitur aplikasi Smart City" loading="lazy"></button>
    <button class="project-shot" type="button" aria-label="Lihat CityConnect Homepage"><img src="assets/cityconnect-homepage.webp" alt="CityConnect homepage dan dashboard kualitas udara" loading="lazy"></button>
    <button class="project-shot" type="button" aria-label="Lihat CityConnect SpotCity"><img src="assets/cityconnect-cityspot.webp" alt="CityConnect SpotCity dan peta kualitas udara" loading="lazy"></button>
    <button class="project-shot" type="button" aria-label="Lihat CityConnect CityTalk"><img src="assets/cityconnect-cityevent.webp" alt="CityConnect CityTalk dan forum komunitas" loading="lazy"></button>`;
  const chips=cityConnectCard.querySelector('.chips');
  cityConnectCard.insertBefore(gallery,chips);

  const style=document.createElement('style');
  style.textContent=`
    .project-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0 8px}.project-shot{border:1px solid var(--line);border-radius:14px;padding:8px;background:#0b1020;cursor:zoom-in;overflow:hidden;transition:.2s transform,.2s border-color}.project-shot:hover{transform:translateY(-3px);border-color:rgba(138,180,255,.45)}.project-shot img{display:block;width:100%;height:165px;object-fit:contain}.project-shot-wide{grid-column:1/-1}.project-shot-wide img{height:190px}.project-shot-poster img{height:220px}.project-lightbox{position:fixed;inset:0;z-index:100;background:rgba(3,7,18,.9);display:flex;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(10px)}.project-lightbox img{max-width:min(94vw,900px);max-height:90vh;object-fit:contain;filter:drop-shadow(0 30px 70px rgba(0,0,0,.45))}.project-lightbox::after{content:'Klik untuk menutup';position:absolute;bottom:22px;color:#fff;font-size:.8rem;opacity:.7}@media(max-width:560px){.project-gallery{grid-template-columns:1fr;gap:8px}.project-shot,.project-shot-wide{grid-column:auto}.project-shot{padding:6px}.project-shot img,.project-shot-wide img,.project-shot-poster img{height:auto;max-height:300px}}`;
  document.head.appendChild(style);

  gallery.querySelectorAll('.project-shot').forEach(button=>button.addEventListener('click',()=>{
    const overlay=document.createElement('div');overlay.className='project-lightbox';
    const img=document.createElement('img');img.src=button.querySelector('img').src;img.alt=button.querySelector('img').alt;
    overlay.appendChild(img);overlay.addEventListener('click',()=>overlay.remove());document.body.appendChild(overlay);
  }));
}