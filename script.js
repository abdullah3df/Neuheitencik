:root{
  --bg:#0f1216; --panel:#11161b; --panel2:#0e1318;
  --ink:#fff8ea; --muted:#ffe4a3;
  --gold1:#FFD978; --gold2:#F8CF4A; --gold3:#D9A82E;
  --accent:#F4C64F; --accent2:#FFD978; --ring:#43340f;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background:
    radial-gradient(1600px 900px at 10% -20%, #141a21 0%, transparent 60%),
    radial-gradient(1200px 700px at 120% 0%, #0b1016 0%, transparent 55%),
    var(--bg);
  color:var(--ink);
  font-family:Outfit,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial;
  letter-spacing:.2px; line-height:1.6;
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
a{color:inherit; text-decoration:none}
.container{max-width:1200px; margin-inline:auto; padding-inline:20px}
.muted{color:var(--muted)}
.gradient{
  background:linear-gradient(90deg,var(--gold1),var(--gold3));
  -webkit-background-clip:text; background-clip:text; color:transparent
}

/* ===== NAV (3D look) ===== */
.nav{position:sticky; top:0; z-index:60; backdrop-filter:saturate(160%) blur(10px);
  background:linear-gradient(180deg,#0d1116cc,#0d111666);}
.nav-3d{
  perspective:900px;
  box-shadow: 0 8px 24px #0008, inset 0 1px 0 #ffffff10;
  border-bottom:1px solid #2c210a;
}
.nav-wrap{display:flex; align-items:center; justify-content:space-between; height:72px}
.brand{display:flex; align-items:center; gap:12px; font-weight:800}
.brand-mark{
  width:14px; height:14px; border-radius:50%;
  background:radial-gradient(circle at 30% 30%, var(--gold1), var(--gold3));
  box-shadow:0 0 18px #F8CF4A88;
  transform: translateZ(14px);
}
.menu{display:flex; gap:18px; align-items:center; transform: translateZ(12px)}
.menu .nav-link{
  position:relative; padding:10px 12px; font-weight:700; opacity:.95;
  transition:opacity .2s ease, transform .2s ease, filter .2s ease;
  text-shadow: 0 1px 0 #0004, 0 8px 24px #0006;
  transform: translateZ(4px);
}
.menu .nav-link:hover{
  opacity:1; transform: translateY(-2px) translateZ(8px);
  filter: drop-shadow(0 6px 14px rgba(248,207,74,.35));
}
.menu .nav-link::after{
  content:""; position:absolute; left:10px; right:10px; bottom:4px; height:3px; border-radius:3px;
  background:linear-gradient(90deg,var(--gold1),var(--gold3));
  transform:scaleX(.15); transform-origin:left; transition:transform .25s ease;
  box-shadow:0 4px 14px rgba(248,207,74,.35);
}
.menu .nav-link:hover::after,
.menu .nav-link.active::after{ transform:scaleX(1) }
.menu .nav-link.active{ color:white }

.cta{
  padding:12px 18px; border-radius:14px;
  background:linear-gradient(135deg,var(--gold1),var(--gold3));
  color:#241a05; font-weight:900; letter-spacing:.2px;
  box-shadow: 0 12px 32px rgba(217,168,46,.28), inset 0 1px 0 #fff6;
  transition: box-shadow .25s ease, transform .15s ease;
  transform: translateZ(10px);
}
.cta:hover{ transform: translateY(-2px) translateZ(12px); box-shadow: 0 18px 40px rgba(217,168,46,.36), inset 0 1px 0 #fff6}
.cta:active{ transform: translateY(0) translateZ(10px) }
/* glossy sheen */
.btn-gloss{ position: relative; overflow: hidden; }
.btn-gloss::after{
  content:""; position:absolute; top:-120%; left:-200%; width:160%; height:320%;
  background: linear-gradient( -30deg, transparent 44%, rgba(255,255,255,.35) 50%, transparent 56% );
  transform: rotate(8deg);
  transition: transform .6s cubic-bezier(.2,.7,.2,1);
}
.btn-gloss:hover::after{ transform: translate(220%, 0) rotate(8deg) }

/* ghost button */
.ghost{
  padding:11px 16px; border-radius:14px; font-weight:800; color:var(--ink);
  border:1px solid var(--ring); position:relative; transform: translateZ(8px);
  transition: transform .15s ease, box-shadow .25s ease, border-color .25s ease;
  box-shadow: 0 10px 24px #0006, inset 0 1px 0 #ffffff10;
}
.ghost:hover{
  transform: translateY(-2px) translateZ(10px);
  border-color:#6b5418; box-shadow:0 16px 36px #0008, 0 0 0 2px rgba(248,207,74,.12) inset;
}

/* mobile hamburger */
#nav-toggle{display:none}
.hamb{display:none; width:44px; height:44px; border-radius:14px; border:1px solid var(--ring); display:grid; place-items:center}
.bar{width:22px; height:2px; background:var(--ink); position:relative; transition:.2s}
.bar::before,.bar::after{content:""; position:absolute; left:0; width:22px; height:2px; background:var(--ink); transition:.2s}
.bar::before{top:-7px} .bar::after{top:7px}
#nav-toggle:checked + label .bar{background:transparent}
#nav-toggle:checked + label .bar::before{transform:translateY(7px) rotate(45deg)}
#nav-toggle:checked + label .bar::after{transform:translateY(-7px) rotate(-45deg)}
.menu-mobile{display:none}

/* ===== HERO ===== */
.hero{position:relative; overflow:clip}
.hero-wrap{display:grid; grid-template-columns:1.15fr .85fr; gap:30px; align-items:center; padding-block:84px}
.glow{
  position:absolute; right:-160px; top:-80px; width:760px; height:760px;
  background: radial-gradient(closest-side, #3a2b0d, transparent 68%);
  filter: blur(52px) brightness(1.2); opacity:.92; pointer-events:none
}
.pill{
  display:inline-flex; align-items:center; gap:8px; padding:8px 12px;
  border:1px solid var(--ring); border-radius:999px; color:var(--muted);
  background:#1a1406b3; box-shadow: inset 0 1px 0 #ffffff10;
}
.title{
  font-size:clamp(2.3rem,3.6vw,3.6rem); line-height:1.05; font-weight:800;
  margin:14px 0; letter-spacing:.3px; text-wrap:balance; text-shadow:0 1px 0 #0004
}
.lead{color:var(--muted); font-size:1.08rem; font-weight:500}
.actions{display:flex; gap:14px; margin-top:22px; flex-wrap:wrap}

.hero-card{
  background: linear-gradient(180deg,var(--panel),var(--panel2));
  border:1px solid #2b1f09; border-radius:24px; padding:24px;
  box-shadow: 0 18px 60px #000b, inset 0 1px 0 #ffffff10;
}
.card-3d{ transform: translateZ(6px); }

/* ===== SECTIONS ===== */
.sect{padding-block:76px}
.subtitle{font-size:2rem; margin:0 0 16px 0; position:relative}
.subtitle::after{
  content:""; position:absolute; left:0; bottom:-10px; width:80px; height:4px; border-radius:3px;
  background:linear-gradient(90deg,var(--gold1),var(--gold3)); box-shadow:0 6px 20px rgba(248,207,74,.35);
}
.grid{display:grid; grid-template-columns:repeat(3,1fr); gap:18px}
.card{
  background: linear-gradient(180deg,var(--panel),var(--panel2));
  border:1px solid #2b1f09; border-radius:18px; padding:22px;
  box-shadow:0 6px 30px #0009, inset 0 1px 0 #ffffff10;
}
.card.link:hover{ outline:1px solid var(--gold2); outline-offset:2px }

/* Steps */
.steps li{margin:.5rem 0}

/* ===== ROADMAP ===== */
.road{position:relative}
.road::before{content:""; position:absolute; left:calc(50% - 1px); top:0; bottom:0; width:2px; background:linear-gradient(180deg,var(--ring),transparent)}
.mile{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin:28px 0; align-items:center}
.mile .bubble{background:#1a1406; border:1px solid #2b1f09; border-radius:18px; padding:18px; box-shadow:0 6px 24px #0008, inset 0 1px 0 #ffffff10}
.mile .dot{width:14px; height:14px; border-radius:50%; background:var(--gold2); box-shadow:0 0 22px var(--gold2); margin-inline:auto}

/* FOOTER */
footer{background:#0d1116; border-top:1px solid var(--ring); padding-block:32px; color:var(--muted)}
.foot{display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap}

/* ===== REVEAL ===== */
.reveal{opacity:0; transform:translateY(24px) scale(.98); transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1; transform:none}

/* ===== RESPONSIVE ===== */
@media (max-width:980px){
  .hero-wrap{grid-template-columns:1fr; padding-block:68px}
  .glow{right:-220px; top:-120px; width:620px; height:620px}
}
@media (max-width:860px){
  .menu{display:none}
  .hamb{display:grid}
  .menu-mobile{display:grid; grid-template-rows:0fr; transition:grid-template-rows .3s ease; overflow: hidden;}
  #nav-toggle:checked ~ .menu-mobile{grid-template-rows:1fr}
  .menu-mobile .panel{overflow:hidden; animation: panelFade .35s ease both}
  .menu-mobile a{display:block; padding:14px 10px; border-top:1px solid var(--ring); background:#0d1116}
  @keyframes panelFade{from{opacity:0; transform:translateY(-6px)} to{opacity:1; transform:none}}
}
@media (max-width:760px){ .grid{grid-template-columns:1fr} }

/* reduce motion */
@media (prefers-reduced-motion: reduce){
  .menu .nav-link, .cta, .ghost, .reveal, .menu-mobile .panel{transition:none !important; animation:none !important}
    }
