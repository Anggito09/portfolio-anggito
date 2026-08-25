const links=document.querySelectorAll('nav a');const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{link.style.color=link.getAttribute('href')===`#${entry.target.id}`?'#ffffff':'';});}});},{threshold:.35});sections.forEach(section=>observer.observe(section));

// Use profile photo uploaded in the repository root.
const profilePhoto=document.querySelector('.profile-photo');
if(profilePhoto){profilePhoto.src='anggito-profile.jpg';}

// CityConnect visual gallery
const cityConnectCard=[...document.querySelectorAll('.project-card')].find(card=>card.querySelector('h3')?.textContent.trim()==='CityConnect');
if(cityConnectCard){
  const gallery=document.createElement('div');
  gallery.className='project-gallery cityconnect-gallery';
  gallery.innerHTML=`
    <button class="project-shot" type="button" aria-label="Lihat CityConnect Homepage"><img src="assets/cityconnect-homepage.webp" alt="CityConnect homepage dan dashboard kualitas udara" loading="lazy"></button>
    <button class="project-shot" type="button" aria-label="Lihat CityConnect SpotCity"><img src="assets/cityconnect-cityspot.webp" alt="CityConnect SpotCity dan peta kualitas udara" loading="lazy"></button>
    <button class="project-shot" type="button" aria-label="Lihat CityConnect CityTalk"><img src="assets/cityconnect-cityevent.webp" alt="CityConnect CityTalk dan forum komunitas" loading="lazy"></button>`;
  const chips=cityConnectCard.querySelector('.chips');
  cityConnectCard.insertBefore(gallery,chips);

  const style=document.createElement('style');
  style.textContent=`
    .project-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 4px}.project-shot{border:1px solid var(--line);border-radius:14px;padding:8px;background:#0b1020;cursor:zoom-in;overflow:hidden;transition:.2s transform,.2s border-color}.project-shot:hover{transform:translateY(-3px);border-color:rgba(138,180,255,.45)}.project-shot img{display:block;width:100%;height:180px;object-fit:contain}.project-lightbox{position:fixed;inset:0;z-index:100;background:rgba(3,7,18,.9);display:flex;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(10px)}.project-lightbox img{max-width:min(92vw,520px);max-height:90vh;object-fit:contain;filter:drop-shadow(0 30px 70px rgba(0,0,0,.45))}.project-lightbox::after{content:'Klik untuk menutup';position:absolute;bottom:22px;color:#fff;font-size:.8rem;opacity:.7}@media(max-width:560px){.project-gallery{gap:7px}.project-shot{padding:5px}.project-shot img{height:145px}}`;
  document.head.appendChild(style);

  gallery.querySelectorAll('.project-shot').forEach(button=>button.addEventListener('click',()=>{
    const overlay=document.createElement('div');overlay.className='project-lightbox';
    const img=document.createElement('img');img.src=button.querySelector('img').src;img.alt=button.querySelector('img').alt;
    overlay.appendChild(img);overlay.addEventListener('click',()=>overlay.remove());document.body.appendChild(overlay);
  }));
}