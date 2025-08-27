// ===== Footer year =====
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

/* ===== Preloader: 0–60% crack, 100% hatch + feathers ===== */
(function(){
  const preloader  = document.getElementById("preloader");
  const progressEl = document.getElementById("progress");
  if (!preloader || !progressEl) return;

  // إذا كان fallback inline شغال، لا نكرر
  if (preloader.dataset.jsReady) return;
  preloader.dataset.jsReady = "1";

  let p = 0;
  function step(){
    p += 2; if (p > 100) p = 100;
    progressEl.textContent = p + "%";

    if (p >= 60 && !preloader.classList.contains('show-crack')){
      preloader.classList.add('show-crack');
    }

    if (p === 100){
      preloader.classList.add('hatch');

      // 🪶 Feathers on hatch (main script)
      for (let i = 0; i < 12; i++) {
        const feather = document.createElement('div');
        feather.className = 'feather';
        feather.textContent = '🪶';
        feather.style.left = Math.random() * 100 + 'vw';
        feather.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
        feather.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(feather);
        feather.addEventListener('animationend', () => feather.remove());
      }

      setTimeout(() => {
        preloader.style.transition = "opacity .6s ease";
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
          document.documentElement.classList.remove('no-scroll');
        }, 600);
      }, 950);
    } else {
      setTimeout(step, 80);
    }
  }
  step();
})();

/* ===== Animated headline: WORDS -> LETTERS (no mid-word wrap) ===== */
(function () {
  const title = document.getElementById('animatedTitle');
  if (!title) return;

  const text = title.textContent.trim().replace(/\s+/g, ' ');
  title.textContent = '';

  const reduce = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const words = text.split(' ');
  let i = 0;

  words.forEach((w, wi) => {
    const wSpan = document.createElement('span');
    wSpan.className = 'word';

    [...w].forEach((ch) => {
      const l = document.createElement('span');
      l.className = 'letter';
      l.style.setProperty('--d', `${i * 45}ms`);
      l.textContent = ch;
      wSpan.appendChild(l);
      i++;
    });

    title.appendChild(wSpan);
    if (wi !== words.length - 1) {
      title.appendChild(document.createTextNode(' '));
      i++;
    }
  });

  if (reduce) {
    title.querySelectorAll('.letter').forEach((el) => {
      el.style.animation = 'none';
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  } else {
    requestAnimationFrame(() => title.classList.add('ready'));
  }
})();

/* ===== Responsive Navbar: Hamburger toggle ===== */
(function(){
  const nav = document.querySelector('nav.nav');
  const btn = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  };
  const openMenu = () => {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
  };

  btn.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => { if (nav.classList.contains('open') && !nav.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();

/* ===== Cards: ripple feedback ===== */
(function(){
  document.querySelectorAll('.card.interactive').forEach(card=>{
    card.addEventListener('pointerdown',(e)=>{
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left, y=e.clientY-r.top;
      const bubble=document.createElement('span');
      bubble.style.cssText=`
        position:absolute; left:${x}px; top:${y}px;
        width:8px; height:8px; border-radius:50%;
        background:radial-gradient(circle,#ffffffaa 0%, #ffffff55 60%, transparent 70%);
        transform:translate(-50%,-50%) scale(0); pointer-events:none; opacity:1;
        transition:transform .6s ease, opacity .6s ease;
      `;
      card.appendChild(bubble);
      requestAnimationFrame(()=>{
        bubble.style.transform='translate(-50%,-50%) scale(14)';
        bubble.style.opacity='0';
      });
      bubble.addEventListener('transitionend', ()=> bubble.remove());
    },{passive:true});
  });
})();
