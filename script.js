(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='mobile-enhancements.css?v=20260826-3';
  document.head.appendChild(css);

  const load=(src)=>new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src=src;
    s.onload=resolve;
    s.onerror=reject;
    document.head.appendChild(s);
  });

  load('script-core.js?v=20260826-3')
    .then(()=>load('experience-period-fix.js?v=20260826-3'))
    .then(()=>load('healthcare-slider.js?v=20260826-3'))
    .catch(console.error);
})();