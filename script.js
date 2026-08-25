const links=document.querySelectorAll('nav a');const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{link.style.color=link.getAttribute('href')===`#${entry.target.id}`?'#ffffff':'';});}});},{threshold:.35});sections.forEach(section=>observer.observe(section));

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