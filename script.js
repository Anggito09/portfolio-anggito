(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='mobile-enhancements.css?v=20260826';
  document.head.appendChild(css);

  const load=(src)=>new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src=src;
    s.onload=resolve;
    s.onerror=reject;
    document.head.appendChild(s);
  });

  load('script-core.js')
    .then(()=>load('experience-period-fix.js'))
    .then(()=>load('healthcare-slider.js'))
    .catch(console.error);
})();