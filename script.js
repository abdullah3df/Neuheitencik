/* ================================
   CIK — Frontend helpers
   - Year
   - Animated Headline
   - Smooth Scroll
   - Scroll Spy (active nav link)
   - External links hardening
================================ */

// 1) Year in footer
(function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

// 2) Animated Headline (letters wave)
(function animatedHeadline() {
  const title = document.getElementById("animatedTitle");
  if (!title) return;

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const text = title.textContent.trim();
  title.textContent = "";

  // Build spans
  [...text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "letter";
    // delay via CSS var
    span.style.setProperty("--d", `${i * 50}ms`);
    span.textContent = ch;
    title.appendChild(span);
  });

  // Kick in opacity transitions on next frame
  requestAnimationFrame(() => title.classList.add("ready"));

  // Respect reduced motion
  if (reduceMotion) {
    title.querySelectorAll(".letter").forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = 1;
      el.style.transform = "none";
    });
  }
})();

// 3) Smooth scrolling for internal anchors
(function smoothScroll() {
  const supportsNative = "scrollBehavior" in document.documentElement.style;

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - 70; // offset for sticky nav

    if (supportsNative) {
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // fallback
      window.scrollTo(0, top);
    }
    // optional focus for accessibility
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
})();

// 4) Scroll Spy — highlight current section link
(function scrollSpy() {
  const links = Array.from(document.querySelectorAll(".menu a[href^='#']"));
  if (!links.length) return;

  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href");
    const sec = document.querySelector(id);
    if (sec) map.set(sec, a);
  });

  const setActive = (a) => {
    links.forEach((l) => l.removeAttribute("aria-current"));
    if (a) a.setAttribute("aria-current", "page");
  };

  // Use IntersectionObserver where available
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const a = map.get(entry.target);
            setActive(a);
          }
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0 }
    );
    map.forEach((_a, sec) => io.observe(sec));
  } else {
    // Fallback: check on scroll
    const onScroll = () => {
      let best = null;
      let bestDist = Infinity;
      map.forEach((a, sec) => {
        const rect = sec.getBoundingClientRect();
        const d = Math.abs(rect.top - 80);
        if (rect.top <= 120 && d < bestDist) {
          bestDist = d;
          best = a;
        }
      });
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();

// 5) Harden external links (security)
(function hardenExternal() {
  document.querySelectorAll('a[target="_blank"]').forEach((a) => {
    const rel = (a.getAttribute("rel") || "").split(" ").filter(Boolean);
    if (!rel.includes("noopener")) rel.push("noopener");
    a.setAttribute("rel", rel.join(" "));
  });
})();

// 6) Optional: add small shadow to nav when scrolling
(function navShadow() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 8) {
      nav.style.boxShadow = "0 6px 18px rgba(0,0,0,.08)";
    } else {
      nav.style.boxShadow = "none";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
