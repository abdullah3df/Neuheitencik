// ===== Footer year =====
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

/* ===== Preloader: Egg -> Chick at 100% ===== */
(function(){
  const progressEl = document.getElementById("progress");
  const eggEl = document.getElementById("egg");
  const preloader = document.getElementById("preloader");
  if (!progressEl || !eggEl || !preloader) return;

  let progress = 0;
  const step = () => {
    progress += 2;                 // سرعة الزيادة (2%)
    if (progress > 100) progress = 100;
    progressEl.textContent = progress + "%";

    if (progress === 100) {
      eggEl.textContent = "🐥";
      eggEl.style.transform = "scale(1.2)";
      setTimeout(() => {
        preloader.style.transition = "opacity 0.6s ease";
        preloader.style.opacity = "0";
        setTimeout(() => { preloader.style.display = "none"; }, 600);
      }, 800);
    } else {
      setTimeout(step, 80);        // كل 80ms
    }
  };
  // بدء العدّاد فور تحميل DOM
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
  let i = 0; // letter index for stagger

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

/* ===== Cards: small ripple feedback ===== */
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
