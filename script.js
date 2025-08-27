// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Animated headline: split letters + delays
(function(){
  const title = document.getElementById('animatedTitle');
  if (!title) return;
  const text = title.textContent.trim();
  title.textContent = "";
  [...text].forEach((ch,i)=>{
    const span = document.createElement('span');
    span.className = 'letter';
    span.style.setProperty('--d', `${i*50}ms`);
    span.textContent = ch;
    title.appendChild(span);
  });
  requestAnimationFrame(()=>title.classList.add('ready'));
})();

// Cards: Tilt 3D + Ripple
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
