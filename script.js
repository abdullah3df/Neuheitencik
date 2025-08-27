/* =========
   CIK — Community Chick Meme Coin
   Global Styles
========= */
:root{
  --bg1:#fff9e6; --bg2:#fff0c7; --bg3:#ffe075;
  --gold:#f4c84f; --gold-mid:#f0bd3a; --gold-dark:#d19a22;
  --ink:#221a05; --muted:#6e5c24; --ring:#e6cf8a;
  --shadow:0 18px 60px rgba(0,0,0,.12);
  --radius:18px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; font-family:"Outfit",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;
  line-height:1.65; color:var(--ink);
  background:
    radial-gradient(1200px 700px at 18% -10%, var(--bg2) 0%, transparent 60%),
    radial-gradient(1200px 700px at 115% 0%, var(--bg3) 0%, transparent 55%),
    radial-gradient(circle at 30% 20%, var(--bg1) 0%, var(--bg2) 40%, var(--bg3) 100%);
}
a{color:inherit; text-decoration:none}
img{max-width:100%; height:auto; display:block}
.container{max-width:1100px; margin:auto; padding:0 18px}

/* ========= NAV ========= */
nav{
  position:sticky; top:0; z-index:1000;
  backdrop-filter: blur(8px) saturate(140%);
  background:linear-gradient(180deg,#fff8eccc,#fff8e666);
  border-bottom:1px solid var(--ring)
}
.nav-wrap{display:flex;justify-content:space-between;align-items:center;height:64px}
.brand{font-weight:900;display:flex;align-items:center;gap:8px}
.dot{
  width:14px;height:14px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%,#fff6cc,var(--gold));
  box-shadow:0 0 12px #f4c84f88
}
.menu{display:flex;gap:16px; align-items:center}
.menu a{
  color:#221a05; font-weight:700; position:relative; opacity:.95; transition:.2s;
}
.menu a:hover{opacity:1;transform:translateY(-2px)}
.menu a::after{
  content:"";position:absolute;left:6px;right:6px;bottom:4px;height:3px;border-radius:3px;
  background:linear-gradient(90deg,#f4c84f,#d19a22);
  transform:scaleX(.15);transform-origin:left;transition:.25s
}
.menu a:hover::after{transform:scaleX(1)}

/* ========= HERO ========= */
header{padding:62px 0 30px}
.badge{
  display:inline-block;padding:8px 12px;border:1px solid var(--ring);border-radius:999px;
  background:#fffdf7cc;color:var(--muted);font-weight:700
}
h1{margin:16px 0 6px;font-size:clamp(2.1rem,6vw,3.4rem);font-weight:900;letter-spacing:.2px}

/* animated headline letters */
h1 .letter{
  display:inline-block;opacity:0;transform:translateY(16px) rotate(-2deg);
  animation:floatIn .8s forwards;animation-delay:var(--d);
  background:linear-gradient(90deg,var(--gold),var(--gold-dark));
  -webkit-background-clip:text; background-clip:text; color:transparent
}
h1.ready .letter{opacity:1}
h1 .letter:hover{animation:wiggle .6s; filter:drop-shadow(0 4px 16px rgba(210,154,34,.45))}

@keyframes floatIn{
  from{opacity:0;transform:translateY(18px) rotate(-5deg) scale(.96)}
  to{opacity:1;transform:none}
}
@keyframes wiggle{
  0%{transform:none}
  40%{transform:translateY(-6px) rotate(2deg)}
  100%{transform:none}
}

.lead{color:var(--muted); font-weight:700; margin:4px 0 18px}
.actions{display:flex;gap:12px;flex-wrap:wrap}
.btn{
  padding:12px 18px;border-radius:14px;font-weight:800;transition:.2s;
  box-shadow:var(--shadow),inset 0 1px 0 #fff6
}
.btn-ghost{border:1px solid var(--ring);background:#fffaf0cc;color:var(--muted)}
.btn-ghost:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,0,0,.12)}

/* ========= CARDS / GRID ========= */
.grid{
  display:grid;gap:16px;margin:24px 0;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr))
}
.card{
  background:#fffefb;border:1px solid var(--ring);
  border-radius:var(--radius);padding:18px;
  box-shadow:var(--shadow)
}
.card h3{margin:6px 0 10px}
.card p{
  margin:0 0 12px;color:#4e3f18;
  overflow-wrap:break-word; word-break:break-word;
}

/* Buy button */
.btn-primary{
  background:linear-gradient(135deg,var(--gold),var(--gold-mid),var(--gold-dark));
  color:#2b2207
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 18px 42px rgba(209,154,34,.32),inset 0 1px 0 #fff6}
.card.buy .btn-primary{width:100%;display:block;text-align:center}

/* Disclaimer look */
.card.disclaimer{background:#fff1ea;border-color:#f2c3b0}
.card.disclaimer h3{color:#8b2f1f}
.card.disclaimer p{color:#6b3a2a}

/* ========= Chick SVG above Buy button ========= */
.chick-anim{
  width:64px; height:64px; margin:6px auto 10px;
  filter: drop-shadow(0 6px 14px rgba(209,154,34,.35));
  animation: floaty 3s ease-in-out infinite;
}
.chick-tilt{
  width:64px; height:64px; display:block; transform-origin:50% 55%;
  animation: tilt 4s ease-in-out infinite;
}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes tilt{0%,100%{transform:rotate(0)}25%{transform:rotate(3deg)}75%{transform:rotate(-3deg)}}
.card.buy:hover .chick-anim{ animation-duration:2.2s }

/* ========= ACCOUNTS SECTION ========= */
#accounts{padding:30px 0}

/* ========= FOOTER ========= */
footer{
  margin-top:30px;padding:18px 0;text-align:center;
  font-size:.9rem;color:var(--muted);border-top:1px solid var(--ring)
}

/* ========= RESPONSIVE ========= */
@media (max-width:900px){
  .menu{gap:12px}
}
@media (max-width:640px){
  .nav-wrap{height:60px}
  /* keep menu visible on small screens */
  .menu{display:flex}
  h1{font-size:clamp(1.8rem,7vw,3rem)}
  .grid{grid-template-columns:1fr}
}

/* ========= REDUCED MOTION ========= */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{ animation:none !important; transition:none !important }
}
