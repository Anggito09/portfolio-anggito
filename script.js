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

const experienceSection=document.querySelector('#experience');
if(experienceSection){
  const eyebrow=experienceSection.querySelector('.section-heading .eyebrow');
  const heading=experienceSection.querySelector('.section-heading h2');
  const articles=experienceSection.querySelectorAll('.timeline article');

  if(eyebrow) eyebrow.textContent='Experience';
  if(heading) heading.textContent='Professional & Academic Experience';

  const experienceContent=[
    {
      period:'Jun 2026 — Present · Jakarta, Indonesia',
      title:'Junior Implementor — PT Periksa Solusi Indonesia',
      description:'Deliver end-to-end SIMRS implementation for healthcare organizations, covering requirements analysis, system configuration, functional testing, user training, rollout support, documentation, troubleshooting, and post-implementation coordination. Support SATUSEHAT implementation and interoperability, assist healthcare facilities in preparing system-related requirements for accreditation, and coordinate integrations such as PACS, radiology worklists, BPJS services, and other operational interfaces with hospital users, IT teams, and internal technical teams.',
      chips:['SIMRS Implementation','SATUSEHAT','Accreditation Support','PACS & Radiology','BPJS Integration','User Training']
    },
    {
      period:'Jun 2025 — Jun 2026 · Subang / Jakarta, Indonesia',
      title:'Technical & Functional Implementor — PT Alfatih Solusindo Technology',
      description:'Managed end-to-end SIMRS implementation and functional configuration across multiple hospitals, including requirements analysis, system setup, testing, user training, troubleshooting, documentation, SATUSEHAT support, BPJS integration, and radiology/PACS integration. The role also involved direct database work for onboarding new client data, validating and maintaining master data, investigating data issues, and supporting data migration and setup activities. In addition, prepared operational reports and data visualizations and supported Odoo-related processes as part of broader hospital system implementation and client support.',
      chips:['SIMRS Implementation','SATUSEHAT','BPJS Integration','Database & Client Data','Reporting & Visualization','Odoo','PACS & Radiology']
    },
    {
      period:'2025',
      title:'Coding & AI Instructor — Teach Code',
      description:'Facilitated practical learning in programming and artificial intelligence, helping learners understand technical concepts through structured exercises, project-based activities, and hands-on guidance.',
      chips:['Coding','Artificial Intelligence','Teaching','Mentoring']
    },
    {
      period:'May 2024 — Oct 2024 · Indonesia',
      title:'Facilitator — Google Career Certificates × Telkom',
      description:'Supported participants in the Google Advanced Data Analytics program by helping them understand and complete Data Analytics and Machine Learning materials, while providing mentoring and technical guidance throughout the learning process. Facilitated case study-based and hands-on learning to strengthen practical and professional skills, monitored participant progress, and supported successful programme completion. A total of 81 participants completed the programme, representing an 80.20% pass rate.',
      chips:['Advanced Data Analytics','Machine Learning','Mentoring','Technical Guidance','Case Study Learning','Google × Telkom']
    },
    {
      period:'2024',
      title:'R&D / Learning & Curriculum — PT Algonacci Sobat Nusantara',
      description:'Contributed to research and development activities, learning-material design, curriculum improvement, and technical mentoring to support structured and practical learning experiences for internal and client-facing programs.',
      chips:['Research & Development','Curriculum','Learning Design','Mentoring']
    },
    {
      period:'2023 — 2024 · Jember, Indonesia',
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

const projectsSection=document.querySelector('#projects');
if(projectsSection){
  const eyebrow=projectsSection.querySelector('.section-heading .eyebrow');
  const heading=projectsSection.querySelector('.section-heading h2');
  const copy=projectsSection.querySelector('.section-heading .section-copy');
  const cards=projectsSection.querySelectorAll('.project-card');

  if(eyebrow) eyebrow.textContent='Featured Projects';
  if(heading) heading.textContent='Selected Work & Projects';
  if(copy) copy.textContent='A selection of projects that reflect my experience across healthcare technology, product development, artificial intelligence, and information systems.';

  const healthcareCard=cards[0];
  if(healthcareCard){
    const topline=healthcareCard.querySelector('.project-topline');
    const title=healthcareCard.querySelector('h3');
    const description=healthcareCard.querySelector('p');
    const chips=healthcareCard.querySelector('.chips');
    if(topline) topline.textContent='Healthcare Information Systems · Professional Experience';
    if(title) title.textContent='Hospital Information System Implementation & Interoperability';
    if(description) description.textContent='A consolidated portfolio of professional healthcare technology work delivered through PT Alfatih Solusindo Technology and PT Periksa Solusi Indonesia. The scope covers end-to-end SIMRS implementation, requirements analysis, system configuration, functional testing, user training, rollout support, troubleshooting, and operational coordination across healthcare facilities. Key integration areas include SATUSEHAT, BPJS services, PACS and radiology worklists, Orthanc/DICOM workflows, pharmacy and supporting-service modules, as well as system readiness for hospital operational and accreditation requirements.';
    if(chips) chips.innerHTML=['SIMRS Implementation','SATUSEHAT','BPJS Integration','PACS & Radiology','Orthanc & DICOM','Healthcare Interoperability','User Training'].map(chip=>`<span>${chip}</span>`).join('');
  }

  cards.forEach((card,index)=>{
    card.style.setProperty('--project-delay',`${Math.min(index,8)*70}ms`);
  });

  const projectsStyle=document.createElement('style');
  projectsStyle.textContent=`
    #projects{position:relative;overflow:hidden;isolation:isolate}
    #projects::before,#projects::after{content:"";position:absolute;border-radius:50%;pointer-events:none;z-index:-1;filter:blur(12px)}
    #projects::before{width:420px;height:420px;left:-220px;top:120px;background:radial-gradient(circle,rgba(96,165,250,.09),transparent 70%);animation:projectAmbient 10s ease-in-out infinite}
    #projects::after{width:340px;height:340px;right:-190px;bottom:80px;background:radial-gradient(circle,rgba(103,232,249,.07),transparent 70%);animation:projectAmbient 12s ease-in-out infinite reverse}
    #projects .section-heading{position:relative;max-width:860px}
    #projects .section-heading .eyebrow{display:inline-flex;align-items:center;gap:10px}
    #projects .section-heading .eyebrow::before{content:"";width:28px;height:1px;background:linear-gradient(90deg,var(--accent),var(--accent2));box-shadow:0 0 12px rgba(103,232,249,.22);animation:projectLine 3s ease-in-out infinite}
    #projects .section-heading h2{position:relative;display:inline-block;text-wrap:balance}
    #projects .section-heading h2::after{content:"";display:block;width:84px;height:3px;margin-top:16px;border-radius:99px;background:linear-gradient(90deg,var(--accent),var(--accent2));box-shadow:0 0 16px rgba(96,165,250,.16);transition:width .35s ease,box-shadow .35s ease}
    #projects .section-heading:hover h2::after{width:142px;box-shadow:0 0 24px rgba(103,232,249,.28)}
    #projects .section-copy{width:100%;max-width:700px;text-align:justify!important;text-justify:inter-word;hyphens:auto;line-height:1.75;letter-spacing:.002em}
    #projects .project-card{position:relative;overflow:hidden;transition:transform .34s cubic-bezier(.2,.7,.2,1),border-color .34s ease,box-shadow .34s ease,background .34s ease}
    #projects .project-card::before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 18%,rgba(96,165,250,.055) 48%,transparent 76%);transform:translateX(-120%);transition:transform .65s ease;pointer-events:none}
    #projects .project-card:hover{transform:translateY(-8px);border-color:rgba(103,232,249,.28);box-shadow:0 26px 60px rgba(2,8,23,.22)}
    #projects .project-card:hover::before{transform:translateX(120%)}
    #projects .project-topline{transition:letter-spacing .28s ease,color .28s ease}
    #projects .project-card:hover .project-topline{letter-spacing:.045em;color:var(--accent2)}
    #projects .project-card h3{transition:transform .28s ease,color .28s ease}
    #projects .project-card:hover h3{transform:translateX(3px);color:#fff}
    #projects .project-card.reveal-on-scroll{transition-delay:var(--project-delay)!important;transform:translateY(28px) scale(.985)}
    #projects .project-card.reveal-on-scroll.is-visible{transform:none}
    @keyframes projectAmbient{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.7}50%{transform:translate3d(24px,-20px,0) scale(1.08);opacity:1}}
    @keyframes projectLine{0%,100%{transform:scaleX(.72);opacity:.6}50%{transform:scaleX(1.18);opacity:1}}
    @media(max-width:900px){#projects .section-copy{max-width:100%;text-align:left!important;hyphens:none}#projects .project-card:hover{transform:translateY(-4px)}}
    @media(prefers-reduced-motion:reduce){#projects::before,#projects::after,#projects .section-heading .eyebrow::before{animation:none!important}#projects .project-card,#projects .project-card h3,#projects .project-topline{transition:none}#projects .project-card:hover{transform:none}}
  `;
  document.head.appendChild(projectsStyle);
}

const animatedElements=document.querySelectorAll('.section, .project-card, .research-card, .achievement-grid article, .skill-card, .cert-card, .education-card, .contact-card');
animatedElements.forEach((element,index)=>{element.dataset.animate='';element.style.transitionDelay=`${Math.min(index%6,4)*70}ms`;});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.12});
animatedElements.forEach(element=>revealObserver.observe(element));

const profilePhoto=document.querySelector('.profile-photo');
if(profilePhoto){profilePhoto.src='anggito-profile.jpg';}

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