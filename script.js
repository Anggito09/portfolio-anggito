(()=>{
  const loadCss=(href)=>{
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href=href;
    document.head.appendChild(css);
  };

  loadCss('mobile-enhancements.css?v=20260827-1');
  loadCss('motion-enhancements.css?v=20260827-1');

  const load=(src)=>new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src=src;
    s.onload=resolve;
    s.onerror=reject;
    document.head.appendChild(s);
  });

  load('script-core.js?v=20260827-1')
    .then(()=>load('experience-period-fix.js?v=20260827-2'))
    .then(()=>load('healthcare-slider.js?v=20260827-1'))
    .then(()=>loadCss('healthcare-section-enhancements.css?v=20260827-1'))
    .then(()=>load('babyops-enhancements.js?v=20260827-2'))
    .then(()=>load('babyops-gallery.js?v=20260827-5'))
    .then(()=>load('cityconnect-enhancements.js?v=20260827-9'))
    .then(()=>load('cityconnect-gallery-complete.js?v=20260827-4'))
    .then(()=>load('beligo-enhancements.js?v=20260827-1'))
    .then(()=>load('beligo-gallery.js?v=20260827-1'))
    .then(()=>load('kamerain-enhancements.js?v=20260827-10'))
    .then(()=>load('kamerain-polish.js?v=20260827-1'))
    .catch(console.error);
})();