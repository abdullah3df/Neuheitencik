// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

/* ===== Animated headline: WORDS then LETTERS (no mid-word wrap) ===== */
(function () {
  const title = document.getElementById('animatedTitle');
  if (!title) return;

  const text = title.textContent.trim().replace(/\s+/g, ' ');
  title.textContent = '';

  const reduce = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const words = text.split(' ');
  let i = 0; // letter index for staggered delay

  words.forEach((w, wi) => {
    const wSpan = document.createElement('span');
    wSpan.className = 'word';

    [...w].forEach((ch) => {
      const l = document.createElement('span');
      l.className = 'letter';
      l.style.setProperty('--d', `${i * 50}ms`);
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

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (!nav.contains(e.target)) closeMenu();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ===== Cards: Tilt 3D + Ripple ===== */
(function(){
  const cards = Array.from(document.querySelectorAll('.card.interactive'));
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach(card => {
    // Tilt
    if (!reduce) {
      const maxTilt = 8;
      const reset = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', (e)=>{
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        const rx = ((y/r.height) - .5) * -maxTilt;
        const ry = ((x/r.width)  - .5) *  maxTilt;
        card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener('mouseleave', reset);
      card.addEventListener('blur', reset);
    }

    // Ripple
    card.addEventListener('pointerdown', (e)=>{
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const ripple = document.createElement('span');
      ripple.className = 'card-ripple';
      ripple.style.left = x + 'px';
      ripple.style.top  = y + 'px';
      card.appendChild(ripple);
      ripple.addEventListener('animationend', ()=> ripple.remove());
    }, {passive:true});
  });
})();
