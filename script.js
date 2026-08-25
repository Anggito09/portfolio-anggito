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

  // Keep headings balanced while making descriptive copy neatly justified.
  const heroLayoutStyle=document.createElement('style');
  heroLayoutStyle.textContent=`
    .hero-copy h1{max-width:11.5ch!important;text-align:left!important;text-wrap:balance;line-height:1.01!important;letter-spacing:-.055em!important;font-size:clamp(3rem,5.35vw,5.25rem)!important}
    .hero-copy h1 span{display:inline}
    .hero-copy .lead{max-width:720px;text-align:justify;text-justify:inter-word;hyphens:auto}
    .hero-copy .eyebrow{text-align:left}
    @media(max-width:900px){.hero-copy h1{max-width:13ch!important;font-size:clamp(2.8rem,9vw,4.8rem)!important}.hero-copy .lead{text-align:left;hyphens:none}}
    @media(max-width:560px){.hero-copy h1{max-width:100%!important;font-size:clamp(2.55rem,12vw,3.75rem)!important;line-height:1.04!important}}
  `;
  document.head.appendChild(heroLayoutStyle);
}

// More universal and polished About section copy.
const aboutSection=document.querySelector('#about');
if(aboutSection){
  const eyebrow=aboutSection.querySelector('.eyebrow');
  const title=aboutSection.querySelector('h2');
  const paragraphs=aboutSection.querySelectorAll('.split > div:last-child p');

  if(eyebrow) eyebrow.textContent='About Me';
  if(title) title.textContent='Curious, adaptable, and focused on creating practical solutions.';
  if(paragraphs[0]) paragraphs[0].textContent='I am an Information Systems graduate with a strong interest in technology, digital transformation, data, and problem solving. I enjoy understanding how people work, identifying what can be improved, and turning ideas or requirements into solutions that are clear, useful, and practical.';
  if(paragraphs[1]) paragraphs[1].textContent='My experience spans professional projects, research, product development, and collaborative initiatives. I am comfortable working across technical and non-technical teams, learning new environments quickly, and contributing wherever technology can create meaningful value.';

  const aboutStyle=document.createElement('style');
  aboutStyle.textContent=`
    #about .split{align-items:start}
    #about .split>div:last-child{text-align:justify;text-justify:inter-word;hyphens:auto}
    #about .split>div:last-child p{max-width:720px;margin-left:auto;line-height:1.8}
    #about h2{max-width:560px;text-wrap:balance;line-height:1.08}
    @media(max-width:900px){#about .split>div:last-child{text-align:left;hyphens:none}#about .split>div:last-child p{margin-left:0;max-width:760px}}
  `;
  document.head.appendChild(aboutStyle);
}

// Refined professional experience copy with consistent positioning across implementation roles.
const experienceSection=document.querySelector('#experience');
if(experienceSection){
  const eyebrow=experienceSection.querySelector('.section-heading .eyebrow');
  const heading=experienceSection.querySelector('.section-heading h2');
  const articles=experienceSection.querySelectorAll('.timeline article');

  if(eyebrow) eyebrow.textContent='Experience';
  if(heading) heading.textContent='Professional & Academic Experience';

  const experienceContent=[
    {
      period:'2026 — Present',
      title:'Junior Implementor — PT Periksa Solusi Indonesia',
      description:'Deliver end-to-end system implementation for healthcare organizations, covering requirements analysis, configuration, functional testing, user training, rollout support, documentation, and post-implementation coordination. Work closely with users, hospital IT teams, and internal technical teams to ensure systems, integrations, and operational workflows are implemented effectively.',
      chips:['System Implementation','Healthcare IT','Integration','Functional Testing','User Training']
    },
    {
      period:'2025 — 2026',
      title:'Technical & Functional Implementor — PT Alfatih Solusindo Technology',
      description:'Managed end-to-end implementation and functional configuration of healthcare information systems across multiple hospitals, covering clinical, administrative, finance, pharmacy, logistics, and supporting-service modules. Responsibilities also included onboarding new client data into databases, validating and maintaining master data, preparing operational reports and data visualizations, supporting Odoo-related processes, troubleshooting, user assistance, documentation, and coordination for system and radiology/PACS integrations.',
      chips:['System Implementation','Database & Client Data','Reporting & Visualization','Odoo','Healthcare IT','PACS & Radiology']
    },
    {
      period:'2025',
      title:'Coding & AI Instructor — Teach Code',
      description:'Facilitated practical learning in programming and artificial intelligence, helping learners understand technical concepts through structured exercises, project-based activities, and hands-on guidance.',
      chips:['Coding','Artificial Intelligence','Teaching','Mentoring']
    },
    {
      period:'2024',
      title:'Facilitator — Google Career Certificates × Telkom',
      description:'Supported participants in the Advanced Data Analytics learning program by facilitating discussions, monitoring learning progress, clarifying technical concepts, and encouraging consistent completion of project-based coursework.',
      chips:['Data Analytics','Facilitation','Mentoring','Google']
    },
    {
      period:'2024',
      title:'R&D / Learning & Curriculum — PT Algonacci Sobat Nusantara',
      description:'Contributed to research and development activities, learning-material design, curriculum improvement, and technical mentoring to support structured and practical learning experiences for internal and client-facing programs.',
      chips:['Research & Development','Curriculum','Learning Design','Mentoring']
    },
    {
      period:'2023 — 2024',
      title:'Head of Artificial Intelligence Laboratory — Universitas Jember',
      description:'Led academic and operational activities within the Artificial Intelligence Laboratory, supporting practical classes, student projects, research initiatives, and collaborative learning in artificial intelligence and data-related topics.',
      chips:['Leadership','Artificial Intelligence','Research','Academic Support']
    }
  ];

  articles.forEach((article,index)=>{
    const item=experienceContent[index];
    if(!item) return;
    const period=article.querySelector('.timeline-meta');
    const title=article.querySelector('h3');
    const description=article.querySelector('p');
    if(period) period.textContent=item.period;
    if(title) title.textContent=item.title;
    if(description) description.textContent=item.description;

    let chips=article.querySelector('.chips');
    if(!chips){
      chips=document.createElement('div');
      chips.className='chips';
      article.querySelector('div:last-child')?.appendChild(chips);
    }
    chips.innerHTML=item.chips.map(chip=>`<span>${chip}</span>`).join('');
  });

  const experienceStyle=document.createElement('style');
  experienceStyle.textContent=`
    #experience .section-heading h2{max-width:760px;text-wrap:balance}
    #experience .timeline p{text-align:justify;text-justify:inter-word;hyphens:auto;max-width:860px;line-height:1.8}
    #experience .timeline h3{line-height:1.35}
    @media(max-width:900px){#experience .timeline p{text-align:left;hyphens:none}}
  `;
  document.head.appendChild(experienceStyle);
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