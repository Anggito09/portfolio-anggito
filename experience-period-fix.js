(()=>{
  const periods=['2026 — Present','2025 — 2026','2025','2024','2024','2023 — 2024'];
  document.querySelectorAll('#experience .timeline article .timeline-meta').forEach((meta,index)=>{
    if(periods[index]) meta.textContent=periods[index];
  });
})();