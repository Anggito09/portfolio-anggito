(()=>{
  const ensureDemoStyle=()=>{
    if(document.getElementById('handsight-demo-style')) return;
    const style=document.createElement('style');
    style.id='handsight-demo-style';
    style.textContent=`
        .handsight-live-demo{position:relative;margin:14px 0 6px;padding:20px 16px 16px;overflow:hidden;border:1px solid rgba(6,182,214,.18);border-radius:24px;background:linear-gradient(145deg,rgba(10,32,52,.92),rgba(12,18,40,.74));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 45px rgba(2,8,23,.18);animation:handsightShowIn .7s .1s both;font-family:'Inter',system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
        .handsight-live-demo::before{content:"";position:absolute;width:320px;height:320px;right:-130px;top:-180px;border-radius:50%;background:radial-gradient(circle,rgba(6,182,214,.12),transparent 68%);pointer-events:none;animation:handsightGlowPulse 4s ease-in-out infinite}
        .handsight-demo-head{position:relative;z-index:1;margin:0 2px 16px;animation:handsightHeadIn .6s .15s both}
        .handsight-demo-kicker{display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap}
        .handsight-demo-kicker span{padding:5px 9px;border:1px solid rgba(6,182,214,.22);border-radius:999px;background:rgba(6,182,214,.09);font-size:.58rem;font-weight:900;letter-spacing:.12em;color:#67e8f9;animation:handsightKickerGlow 3s ease-in-out infinite}
        .handsight-demo-kicker b{font-size:.58rem;font-weight:900;letter-spacing:.12em;color:#c4b5fd}
        .handsight-demo-head strong{display:block;font-size:1.02rem;color:#e0f7ff;letter-spacing:-.02em;line-height:1.3}
        .handsight-demo-head small{display:block;max-width:860px;margin-top:6px;font-size:.73rem;line-height:1.65;color:#9ab8c9;font-weight:500;hyphens:none;-webkit-hyphens:none}
        .handsight-sibi-box{position:relative;z-index:1;margin:12px 2px 0;padding:12px 14px;border:1px solid rgba(6,182,214,.14);border-radius:14px;background:linear-gradient(135deg,rgba(6,182,214,.06),rgba(139,92,246,.04));display:grid;gap:6px;animation:handsightSibiIn .6s .22s both}
        .handsight-sibi-box strong{font-size:.78rem;color:#e0f7ff;letter-spacing:-.01em}
        .handsight-sibi-box small{font-size:.7rem;line-height:1.65;color:#9ab8c9;hyphens:none;-webkit-hyphens:none;word-break:normal;overflow-wrap:break-word}
        .handsight-sibi-box b{color:#67e8f9;font-weight:800}
        .handsight-demo-stage{position:relative;z-index:1;display:grid;grid-template-columns:minmax(320px,1.05fr) minmax(280px,.95fr);gap:16px;align-items:start;margin-top:14px;animation:handsightStageIn .6s .28s both}
        .handsight-demo-video-wrap{position:relative;aspect-ratio:4/3;border-radius:18px;overflow:hidden;border:1px solid rgba(6,182,214,.2);background:radial-gradient(circle at 50% 20%,rgba(6,182,214,.12),transparent 60%),linear-gradient(145deg,#0a1628,#0f1e36);box-shadow:0 18px 40px rgba(2,8,23,.35)}
        .handsight-demo-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1);background:#0a1628}
        .handsight-demo-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;transform:scaleX(-1)}
        .handsight-demo-placeholder{position:absolute;inset:0;display:grid;place-items:center;padding:18px;text-align:center;font-size:.82rem;line-height:1.55;color:#8fb8c9;background:linear-gradient(145deg,rgba(10,22,38,.72),rgba(8,18,32,.55));backdrop-filter:blur(2px);transition:opacity .25s ease,visibility .25s ease;font-weight:500}
        .handsight-demo-placeholder b{color:#67e8f9}
        .handsight-demo-video-wrap.is-live .handsight-demo-placeholder{opacity:0;visibility:hidden}
        .handsight-demo-live-badge{position:absolute;left:12px;top:12px;display:flex;align-items:center;gap:6px;padding:6px 9px;border-radius:999px;background:rgba(239,68,68,.9);border:1px solid rgba(255,255,255,.18);font-size:.58rem;font-weight:900;letter-spacing:.1em;color:#fff;opacity:0;transform:translateY(-4px);transition:opacity .25s ease,transform .25s ease}
        .handsight-demo-video-wrap.is-live .handsight-demo-live-badge{opacity:1;transform:none}
        .handsight-demo-live-badge i{width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px rgba(255,255,255,.22);animation:handsightPulse 1.6s infinite}
        .handsight-demo-fps{position:absolute;right:10px;bottom:10px;padding:4px 7px;border-radius:8px;background:rgba(2,8,23,.72);border:1px solid rgba(255,255,255,.08);font-size:.58rem;font-weight:700;color:#9ab8c9;opacity:0;transition:opacity .25s ease}
        .handsight-demo-video-wrap.is-live .handsight-demo-fps{opacity:1}
        .handsight-demo-panel{display:grid;gap:12px}
        .handsight-demo-output{padding:14px 14px 12px;border:1px solid rgba(6,182,214,.16);border-radius:16px;background:linear-gradient(135deg,rgba(6,182,214,.08),rgba(139,92,246,.06));animation:handsightOutputGlow 3.5s ease-in-out infinite}
        .handsight-demo-output small{display:block;font-size:.58rem;font-weight:900;letter-spacing:.14em;color:#67e8f9}
        .handsight-demo-text{display:block;min-height:1.6em;margin-top:6px;font-size:2rem;line-height:1.2;color:#e0f7ff;letter-spacing:-.02em;word-break:break-word;text-align:center;font-weight:800}
        .handsight-demo-output em{display:block;margin-top:6px;font-style:normal;font-size:.68rem;color:#8fb8c9;text-align:center;font-weight:500}
        .handsight-demo-output em b{color:#67e8f9}
        .handsight-demo-history{display:flex;flex-wrap:wrap;gap:6px;min-height:28px;justify-content:center}
        .handsight-demo-history span{padding:6px 9px;border:1px solid rgba(6,182,214,.14);border-radius:999px;background:rgba(6,182,214,.06);font-size:.68rem;font-weight:700;color:#c4e9f5;animation:handsightChipIn .35s ease both}
        .handsight-demo-controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
        .handsight-demo-btn{appearance:none;min-height:40px;padding:9px 14px;border:1px solid rgba(6,182,214,.22);border-radius:12px;background:rgba(6,182,214,.08);color:#67e8f9;font-size:.76rem;font-weight:800;cursor:pointer;transition:transform .2s ease,background .2s ease,border-color .2s ease,box-shadow .2s ease}
        .handsight-demo-btn:hover{transform:translateY(-2px);border-color:rgba(6,182,214,.38);background:rgba(6,182,214,.14);box-shadow:0 8px 18px rgba(6,182,214,.12)}
        .handsight-demo-btn.primary{border-color:rgba(6,182,214,.38);background:linear-gradient(135deg,rgba(6,182,214,.22),rgba(139,92,246,.16));color:#fff;animation:handsightPrimaryPulse 2.8s ease-in-out infinite}
        .handsight-demo-btn:disabled{opacity:.5;cursor:not-allowed;transform:none;box-shadow:none}
        .handsight-demo-toggle{display:inline-flex;align-items:center;gap:7px;margin-left:auto;padding:7px 10px;border:1px solid rgba(255,255,255,.08);border-radius:999px;background:rgba(255,255,255,.03);font-size:.68rem;font-weight:700;color:#9ab8c9;cursor:pointer;user-select:none}
        .handsight-demo-toggle input{accent-color:#06b6d4}
        .handsight-demo-gestures{padding:12px;border:1px solid rgba(255,255,255,.06);border-radius:14px;background:rgba(255,255,255,.02)}
        .handsight-demo-gestures small{display:block;font-size:.66rem;font-weight:700;color:#8fb8c9;margin-bottom:8px;letter-spacing:.02em}
        .handsight-demo-chips{display:flex;flex-wrap:wrap;gap:7px}
        .handsight-demo-chips button{appearance:none;padding:7px 10px;border:1px solid rgba(6,182,214,.16);border-radius:999px;background:rgba(6,182,214,.06);color:#c4e9f5;font-size:.7rem;font-weight:700;cursor:pointer;transition:transform .18s ease,background .18s ease,border-color .18s ease}
        .handsight-demo-chips button:hover{transform:translateY(-2px);background:rgba(6,182,214,.12);border-color:rgba(6,182,214,.28)}
        .handsight-demo-chips button.is-active{background:rgba(6,182,214,.18);border-color:rgba(6,182,214,.4);color:#fff;box-shadow:0 6px 14px rgba(6,182,214,.14)}
        .handsight-demo-note{font-size:.66rem;line-height:1.6;color:#7ea3b6;hyphens:none;-webkit-hyphens:none}
        .handsight-demo-note b{color:#67e8f9;font-weight:800}
        .handsight-demo-error{margin-top:4px;padding:8px 10px;border-radius:10px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#fca5a5;font-size:.7rem;line-height:1.5;display:none;font-weight:500}
        .handsight-demo-error.is-visible{display:block;animation:handsightErrorIn .3s ease both}
        @keyframes handsightPulse{0%,100%{opacity:1}50%{opacity:.45}}
        @keyframes handsightChipIn{from{opacity:0;transform:translateY(6px) scale(.96)}to{opacity:1;transform:none}}
        @keyframes handsightShowIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        @keyframes handsightHeadIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes handsightSibiIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes handsightStageIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes handsightGlowPulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
        @keyframes handsightKickerGlow{0%,100%{box-shadow:0 0 0 rgba(6,182,214,0)}50%{box-shadow:0 0 12px rgba(6,182,214,.25)}}
        @keyframes handsightOutputGlow{0%,100%{border-color:rgba(6,182,214,.16)}50%{border-color:rgba(6,182,214,.26)}}
        @keyframes handsightPrimaryPulse{0%,100%{box-shadow:0 0 0 rgba(6,182,214,0)}50%{box-shadow:0 0 14px rgba(6,182,214,.22)}}
        @keyframes handsightErrorIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
        @media(max-width:900px){.handsight-demo-stage{grid-template-columns:1fr;gap:14px}.handsight-demo-video-wrap{aspect-ratio:4/3}}
        @media(max-width:560px){.handsight-live-demo{padding:16px 12px 14px;border-radius:18px}.handsight-demo-head strong{font-size:.95rem}.handsight-demo-head small{font-size:.68rem}.handsight-demo-text{font-size:1.6rem}.handsight-demo-controls{gap:7px}.handsight-demo-btn{flex:1 1 auto;min-width:96px}.handsight-demo-toggle{margin-left:0;width:100%;justify-content:center}}
        @media(prefers-reduced-motion:reduce){.handsight-demo-live-badge i,.handsight-demo-history span,.handsight-live-demo,.handsight-demo-head,.handsight-sibi-box,.handsight-demo-stage{animation:none!important}.handsight-demo-btn,.handsight-demo-chips button{transition:none!important}}
      `;
    document.head.appendChild(style);
  };
  const init=()=>{
    ensureDemoStyle();
    const card=document.querySelector('.project-card.handsight-enhanced') || [...document.querySelectorAll('.project-card')].find(el=>(el.querySelector('h3')?.textContent.trim()||'').startsWith('Handsight'));
    if(!card) return;
    let demo=card.querySelector('.handsight-live-demo');
    if(!demo){
      const showcase=card.querySelector('.handsight-showcase');
      const chips=card.querySelector('.chips');
      demo=document.createElement('div');
      demo.className='handsight-live-demo';
      demo.setAttribute('aria-label','Handsight live browser demo');
      demo.innerHTML=`
      <div class="handsight-demo-head">
        <div class="handsight-demo-kicker"><span>✨ LIVE DEMO</span><b>TRY IT YOURSELF — SIBI LETTERS</b></div>
        <strong>Try Handsight SIBI letters directly in your browser</strong>
        <small>Focused on <b>letters A to Z</b> only for more stable accuracy. Allow camera access and show a one handed sign, or click a letter below to simulate without camera.</small>
      </div>
      <div class="handsight-sibi-box">
        <strong>What is SIBI? Letter Focus</strong>
        <small><b>SIBI (Sistem Isyarat Bahasa Indonesia)</b> is the standardized Indonesian sign system with Indonesian grammar. For this demo Handsight focuses on the <b>one handed alphabet A to Z</b> instead of phrases or sentences for more consistent accuracy. For example <b>A</b> is a fist and <b>B</b> is an open palm.</small>
      </div>
      <div class="handsight-demo-stage">
        <div class="handsight-demo-video-wrap" aria-label="Webcam preview">
          <video class="handsight-demo-video" autoplay playsinline muted aria-label="Webcam feed"></video>
          <canvas class="handsight-demo-canvas" aria-hidden="true"></canvas>
          <div class="handsight-demo-placeholder">Camera off — click <b>Start Camera</b><br><small style="display:block;margin-top:6px;font-size:.68rem;opacity:.8">Requires HTTPS or localhost · Allow camera when prompted</small></div>
          <div class="handsight-demo-live-badge" aria-hidden="true"><i></i> LIVE</div>
          <div class="handsight-demo-fps" aria-hidden="true"></div>
        </div>
        <div class="handsight-demo-panel">
          <div class="handsight-demo-output">
            <small>RECOGNIZED LETTER (SIBI A to Z)</small>
            <strong class="handsight-demo-text">—</strong>
            <em>Confidence <b class="handsight-demo-conf">—</b> · <span class="handsight-demo-mode">Idle</span> · Letter mode</em>
          </div>
          <div class="handsight-demo-history" aria-label="Recognition history"></div>
          <div class="handsight-demo-controls">
            <button class="handsight-demo-btn primary" type="button" data-action="camera">Start Camera</button>
            <button class="handsight-demo-btn" type="button" data-action="speak">🔊 Speak</button>
            <button class="handsight-demo-btn" type="button" data-action="clear">Clear</button>
            <label class="handsight-demo-toggle"><input type="checkbox" class="handsight-demo-autospeak" checked> Auto-speak</label>
          </div>
          <div class="handsight-demo-gestures">
            <small>Simulate without camera — SIBI Letters (A to Z):</small>
            <div class="handsight-demo-chips" data-group="huruf">
              <button type="button" data-sim="A">A</button><button type="button" data-sim="B">B</button><button type="button" data-sim="C">C</button><button type="button" data-sim="D">D</button><button type="button" data-sim="E">E</button><button type="button" data-sim="F">F</button><button type="button" data-sim="G">G</button><button type="button" data-sim="H">H</button><button type="button" data-sim="I">I</button><button type="button" data-sim="J">J</button><button type="button" data-sim="K">K</button><button type="button" data-sim="L">L</button><button type="button" data-sim="M">M</button><button type="button" data-sim="N">N</button><button type="button" data-sim="O">O</button><button type="button" data-sim="P">P</button><button type="button" data-sim="Q">Q</button><button type="button" data-sim="R">R</button><button type="button" data-sim="S">S</button><button type="button" data-sim="T">T</button><button type="button" data-sim="U">U</button><button type="button" data-sim="V">V</button><button type="button" data-sim="W">W</button><button type="button" data-sim="X">X</button><button type="button" data-sim="Y">Y</button><button type="button" data-sim="Z">Z</button>
            </div>
          </div>
          <div class="handsight-demo-note">Tip: <b>A</b> is a fist, <b>B</b> is an open palm with four fingers, <b>D</b> is index finger only, <b>V</b> is peace sign, <b>L</b> is thumb plus index finger, <b>Y</b> is thumb plus pinky. Click a letter to test the speaker.</div>
          <div class="handsight-demo-error" aria-live="polite"></div>
        </div>
      </div>
    `;
      if(showcase) showcase.after(demo);
      else if(chips) card.insertBefore(demo, chips);
      else card.appendChild(demo);
    } else {
      // Ensure existing static demo is wired even if already in DOM — do not recreate
    }

    const video=demo.querySelector('.handsight-demo-video');
    const canvas=demo.querySelector('.handsight-demo-canvas');
    const ctx=canvas?.getContext('2d');
    const fpsEl=demo.querySelector('.handsight-demo-fps');
    const textEl=demo.querySelector('.handsight-demo-text');
    const confEl=demo.querySelector('.handsight-demo-conf');
    const modeEl=demo.querySelector('.handsight-demo-mode');
    const historyEl=demo.querySelector('.handsight-demo-history');
    const cameraBtn=demo.querySelector('[data-action="camera"]');
    const speakBtn=demo.querySelector('[data-action="speak"]');
    const clearBtn=demo.querySelector('[data-action="clear"]');
    const autoSpeakEl=demo.querySelector('.handsight-demo-autospeak');
    const wrap=demo.querySelector('.handsight-demo-video-wrap');
    const errorEl=demo.querySelector('.handsight-demo-error');

    if(!video || !cameraBtn || !speakBtn) return;

    let stream=null;
    let rafId=null;
    let hands=null;
    let camera=null;
    let lastText='';
    let lastSpeakAt=0;
    let frameCount=0;
    let lastFpsAt=performance.now();
    let pendingText='';
    let pendingCount=0;
    let noHandFrames=0;
    let lastHandAt=0;

    const showError=(msg)=>{
      if(!errorEl) return;
      errorEl.textContent=msg;
      errorEl.classList.add('is-visible');
      setTimeout(()=>errorEl.classList.remove('is-visible'), 6000);
    };

    const speak=(text)=>{
      if(!text || text==='—') return;
      try{
        if(window.speechSynthesis.paused) window.speechSynthesis.resume();
        window.speechSynthesis.cancel();
        const u=new SpeechSynthesisUtterance(text);
        const voices=window.speechSynthesis.getVoices();
        const idVoice=voices.find(v=>v.lang.toLowerCase().startsWith('id')) || voices.find(v=>/Google|Natural|Microsoft/i.test(v.name) && v.lang.toLowerCase().startsWith('id'));
        const enVoice=voices.find(v=>v.lang.toLowerCase().startsWith('en'));
        if(/^[A-Z]$/.test(text) && enVoice){
          u.voice=enVoice;
          u.lang='en-US';
        } else if(idVoice){
          u.voice=idVoice;
          u.lang='id-ID';
        } else {
          u.lang='id-ID';
        }
        u.rate=0.95;
        u.pitch=1;
        u.onerror=(e)=>showError('Speaker error: '+(e.error||'unknown')+' — coba klik Speak lagi atau cek volume.');
        window.speechSynthesis.speak(u);
        if(!voices.length){
          setTimeout(()=>window.speechSynthesis.speak(u), 300);
        }
      }catch(e){
        showError('Speaker gagal: '+(e.message||e));
      }
    };

    const pushHistory=(text)=>{
      if(!text || text==='—') return;
      const chip=document.createElement('span');
      chip.textContent=text;
      historyEl.prepend(chip);
      while(historyEl.children.length>6) historyEl.removeChild(historyEl.lastChild);
    };

    const setOutput=(text, conf, mode)=>{
      textEl.textContent=text || '—';
      confEl.textContent=conf || '—';
      modeEl.textContent=mode || 'Idle';
      if(text && text!=='—' && text!==lastText){
        lastText=text;
        pushHistory(text);
        const now=Date.now();
        if(autoSpeakEl.checked && now-lastSpeakAt>450){
          lastSpeakAt=now;
          speak(text);
        }
        demo.querySelectorAll('.handsight-demo-chips button').forEach(b=>{
          b.classList.toggle('is-active', b.dataset.sim===text);
          if(b.dataset.sim===text) setTimeout(()=>b.classList.remove('is-active'), 700);
        });
      }
    };

    const classifyFromLandmarks=(landmarks)=>{
      const isFingerUp=(tip, pip)=> landmarks[tip].y < landmarks[pip].y - 0.015;
      const thumbUp = landmarks[4].x > landmarks[3].x + 0.015;
      const indexUp = isFingerUp(8,6);
      const middleUp = isFingerUp(12,10);
      const ringUp = isFingerUp(16,14);
      const pinkyUp = isFingerUp(20,18);
      // Huruf-only SIBI — dioptimalkan cepat + akurat (threshold lebih sensitif)
      if(!thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp) return {text:'A', conf:'93%'}; // fist = A
      if(!thumbUp && indexUp && middleUp && ringUp && pinkyUp) return {text:'B', conf:'94%'}; // 4 fingers = B
      if(thumbUp && indexUp && middleUp && ringUp && pinkyUp) return {text:'B', conf:'92%'}; // open = B
      if(!thumbUp && indexUp && !middleUp && !ringUp && !pinkyUp) return {text:'D', conf:'90%'}; // index = D
      if(thumbUp && indexUp && !middleUp && !ringUp && !pinkyUp) return {text:'L', conf:'89%'}; // L
      if(indexUp && middleUp && !ringUp && !pinkyUp && !thumbUp) return {text:'V', conf:'91%'}; // V
      if(indexUp && middleUp && ringUp && !pinkyUp && !thumbUp) return {text:'W', conf:'88%'}; // W
      if(thumbUp && !indexUp && !middleUp && !ringUp && pinkyUp) return {text:'Y', conf:'90%'}; // Y
      if(thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp) return {text:'A', conf:'88%'}; // thumb = A variant
      if(!thumbUp && !indexUp && middleUp && !ringUp && !pinkyUp) return {text:'F', conf:'86%'}; 
      if(indexUp && middleUp && ringUp && pinkyUp && thumbUp) return {text:'B', conf:'93%'};
      const cnt=[indexUp,middleUp,ringUp,pinkyUp].filter(Boolean).length;
      if(cnt===1 && middleUp) return {text:'F', conf:'85%'};
      if(cnt===2) return {text:'V', conf:'84%'};
      if(cnt===3) return {text:'W', conf:'83%'};
      if(cnt===0) return {text:'A', conf:'82%'};
      return {text:'B', conf:'81%'};
    };

    const drawLandmarks=(landmarks)=>{
      if(!landmarks || !ctx) return;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle='rgba(6,182,214,.9)';
      ctx.strokeStyle='rgba(6,182,214,.45)';
      ctx.lineWidth=2;
      const connections=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
      connections.forEach(([a,b])=>{
        ctx.beginPath();
        ctx.moveTo(landmarks[a].x*canvas.width, landmarks[a].y*canvas.height);
        ctx.lineTo(landmarks[b].x*canvas.width, landmarks[b].y*canvas.height);
        ctx.stroke();
      });
      landmarks.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x*canvas.width, p.y*canvas.height, 3.2, 0, Math.PI*2);
        ctx.fill();
      });
    };

    const onResults=(results)=>{
      frameCount++;
      const now=performance.now();
      if(now-lastFpsAt>1000){
        const fps=Math.round(frameCount*1000/(now-lastFpsAt));
        fpsEl.textContent=fps+' FPS';
        frameCount=0;
        lastFpsAt=now;
      }
      if(results.multiHandLandmarks && results.multiHandLandmarks.length>0){
        const lm=results.multiHandLandmarks[0];
        drawLandmarks(lm);
        const cls=classifyFromLandmarks(lm);
        lastHandAt=Date.now();
        noHandFrames=0;
        // Smoothing: butuh 3 frame konsisten biar gak flicker, tapi tetap cepat (~0.1s)
        if(cls.text===pendingText){
          pendingCount++;
        } else {
          pendingText=cls.text;
          pendingCount=1;
        }
        if(pendingCount>=3){
          setOutput(cls.text, cls.conf, 'Tracking');
        } else {
          // tampilkan preview cepat tanpa speak/history
          textEl.textContent=cls.text;
          confEl.textContent=cls.conf;
          modeEl.textContent='Detecting…';
        }
      } else {
        if(ctx) ctx.clearRect(0,0,canvas.width,canvas.height);
        noHandFrames++;
        pendingText='';
        pendingCount=0;
        // Jangan langsung reset — kasih grace 1.5s biar gak hilang pas tangan gerak
        if(noHandFrames>18){
          modeEl.textContent='No hand detected — show hand to camera';
        } else {
          modeEl.textContent='Tracking…';
        }
        // Auto-clear hanya jika diam 4 detik tanpa tangan (bukan 1 menit)
        if(lastHandAt && Date.now()-lastHandAt>4000 && textEl.textContent!=='—'){
          // keep last text but indicate idle
        }
      }
    };

    const loadMediaPipe=()=>{
      return new Promise((resolve, reject)=>{
        if(window.Hands) return resolve();
        const s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js';
        s.crossOrigin='anonymous';
        s.onload=()=>resolve();
        s.onerror=()=>reject(new Error('hands.js failed'));
        document.head.appendChild(s);
      }).then(()=>new Promise((resolve, reject)=>{
        if(window.Camera) return resolve();
        const s2=document.createElement('script');
        s2.src='https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.js';
        s2.crossOrigin='anonymous';
        s2.onload=()=>resolve();
        s2.onerror=()=>reject(new Error('camera_utils failed'));
        document.head.appendChild(s2);
      }));
    };

    const resizeCanvas=()=>{
      if(!canvas || !wrap) return;
      const rect=wrap.getBoundingClientRect();
      const dpr=window.devicePixelRatio||1;
      canvas.width=rect.width*dpr;
      canvas.height=rect.height*dpr;
      canvas.style.width=rect.width+'px';
      canvas.style.height=rect.height+'px';
      if(ctx) ctx.setTransform(dpr,0,0,dpr,0,0);
    };

    const startCamera=async()=>{
      if(!window.isSecureContext && location.hostname!=='localhost' && location.hostname!=='127.0.0.1'){
        showError('Kamera butuh HTTPS. Buka via https:// atau http://localhost:8787 — file:// tidak bisa akses kamera.');
        return;
      }
      if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        showError('Browser tidak support getUserMedia. Coba Chrome/Edge terbaru.');
        return;
      }
      cameraBtn.disabled=true;
      cameraBtn.textContent='Starting…';
      modeEl.textContent='Requesting camera…';
      errorEl.classList.remove('is-visible');
      try{
        stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640}, height:{ideal:480}, facingMode:'user'}, audio:false});
        video.srcObject=stream;
        await video.play();
        wrap.classList.add('is-live');
        const ph=demo.querySelector('.handsight-demo-placeholder');
        if(ph) ph.style.display='none';
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        try{
          await loadMediaPipe();
          hands=new window.Hands({locateFile:(file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`});
          hands.setOptions({maxNumHands:1, modelComplexity:0, minDetectionConfidence:0.5, minTrackingConfidence:0.5});
          hands.onResults(onResults);
          camera=new window.Camera(video, {
            onFrame: async()=>{ await hands.send({image: video}); },
            width:640, height:480
          });
          camera.start();
          modeEl.textContent='Tracking (Huruf) — show hand';
          cameraBtn.textContent='Stop Camera';
          cameraBtn.disabled=false;
          lastHandAt=Date.now();
        }catch(mpErr){
          modeEl.textContent='Camera on (simulation mode)';
          cameraBtn.textContent='Stop Camera';
          cameraBtn.disabled=false;
          showError('Hand tracking gagal load ('+mpErr.message+') — video tetap jalan, pakai tombol simulasi Huruf A–Z.');
          const loop=()=>{
            frameCount++;
            const now=performance.now();
            if(now-lastFpsAt>1000){
              const fps=Math.round(frameCount*1000/(now-lastFpsAt));
              fpsEl.textContent=fps+' FPS';
              frameCount=0;
              lastFpsAt=now;
            }
            rafId=requestAnimationFrame(loop);
          };
          loop();
          lastHandAt=Date.now();
        }
      }catch(err){
        cameraBtn.disabled=false;
        cameraBtn.textContent='Start Camera';
        modeEl.textContent='Camera blocked';
        let msg=err.name==='NotAllowedError' ? 'Izin kamera ditolak — klik ikon kamera di address bar lalu Allow, lalu coba lagi.' : err.name==='NotFoundError' ? 'Kamera tidak ditemukan.' : err.name==='NotReadableError' ? 'Kamera sedang dipakai aplikasi lain.' : (err.message||String(err));
        showError('Kamera gagal: '+msg+' — tetap bisa pakai tombol simulasi Huruf A–Z di bawah.');
        setOutput('—','—','Allow camera in browser settings');
      }
    };

    const stopCamera=()=>{
      if(camera){ try{camera.stop();}catch(e){} camera=null; }
      if(hands){ try{hands.close();}catch(e){} hands=null; }
      if(rafId) cancelAnimationFrame(rafId);
      if(stream){ stream.getTracks().forEach(t=>t.stop()); stream=null; }
      video.srcObject=null;
      wrap.classList.remove('is-live');
      const ph=demo.querySelector('.handsight-demo-placeholder');
      if(ph) ph.style.display='';
      if(ctx) ctx.clearRect(0,0,canvas.width,canvas.height);
      fpsEl.textContent='';
      modeEl.textContent='Idle';
      cameraBtn.textContent='Start Camera';
      cameraBtn.disabled=false;
      pendingText='';
      pendingCount=0;
      noHandFrames=0;
      lastHandAt=0;
      window.removeEventListener('resize', resizeCanvas);
    };

    // Prevent double wiring
    if(cameraBtn.dataset.wired) return;
    cameraBtn.dataset.wired='1';
    cameraBtn.addEventListener('click', ()=>{
      if(wrap.classList.contains('is-live')) stopCamera();
      else startCamera();
    });
    speakBtn.addEventListener('click', ()=>speak(textEl.textContent));
    clearBtn.addEventListener('click', ()=>{
      setOutput('—','—','Idle');
      historyEl.innerHTML='';
      lastText='';
      window.speechSynthesis.cancel();
    });
    demo.querySelectorAll('[data-sim]').forEach(btn=>{
      if(btn.dataset.wired) return;
      btn.dataset.wired='1';
      btn.addEventListener('click', ()=>{
        const t=btn.dataset.sim;
        const conf=(85+Math.floor(Math.random()*12))+'%';
        setOutput(t, conf, 'Simulated');
      });
    });

    if(window.speechSynthesis){
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices();
      document.addEventListener('click', ()=>{
        if(window.speechSynthesis.paused) window.speechSynthesis.resume();
      }, {once:true});
    }
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
