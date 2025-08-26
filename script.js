// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Close mobile menu when clicking links
function navOff(){ document.getElementById('nav-toggle').checked = false; }

// Reveal on scroll + STAGGER
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

const ioReveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      if(!prefersReduced){
        const idx = [...revealEls].indexOf(e.target);
        e.target.style.transitionDelay = (idx * 60) + 'ms';
      }
      e.target.classList.add('in');
      ioReveal.unobserve(e.target);
    }
  });
},{ threshold: .12 });

revealEls.forEach(el=>ioReveal.observe(el));

// Scrollspy (active nav)
const sections = [...document.querySelectorAll('section.sect, header.hero')];
const navLinks = [...document.querySelectorAll('.nav-link')];

function setActive(id){
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
}
const ioSpy = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id = e.target.getAttribute('id') || 'home';
      setActive(id);
    }
  });
},{ rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(sec=>ioSpy.observe(sec));

// Subtle parallax for elements with .parallax
const parallaxEls = document.querySelectorAll('.parallax');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY || window.pageYOffset;
  parallaxEls.forEach(el=>{
    const speed = parseFloat(el.dataset.speed || '0.1');
    el.style.transform = `translateY(${y * speed}px)`;
  });
}, {passive:true});
