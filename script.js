(()=>{
  const loadCss=(href)=>{
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href=href;
    document.head.appendChild(css);
  };

  loadCss('mobile-enhancements.css?v=20260826-4');
  loadCss('motion-enhancements.css?v=20260826-1');

  const load=(src)=>new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src=src;
    s.onload=resolve;
    s.onerror=reject;
    document.head.appendChild(s);
  });

  load('script-core.js?v=20260826-4')
    .then(()=>load('experience-period-fix.js?v=20260826-4'))
    .then(()=>load('healthcare-slider.js?v=20260826-4'))
    .catch(console.error);
})();