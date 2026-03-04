// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   Set initial hidden states before any
   animation runs (avoids flash of content)
───────────────────────────────────────── */
gsap.set(".hero-title .line", { opacity: 0, y: 50 });

/* ─────────────────────────────────────────
   Navbar entrance
───────────────────────────────────────── */
gsap.to("#navbar", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.2,
});

/* ─────────────────────────────────────────
   Hero section — staggered entrance
───────────────────────────────────────── */
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .to(".hero-tag", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: 0.4,
  })
  .to(
    ".hero-title .line",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
    },
    "-=0.3"
  )
  .to(
    ".hero-subtitle",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
    },
    "-=0.3"
  )
  .to(
    ".hero-buttons",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
    },
    "-=0.3"
  );

// Floating cards animation
gsap.to(".floating-card", {
  opacity: 1,
  x: 0,
  y: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "back.out(1.4)",
  delay: 1.0,
});

// Floating idle animation (loop)
gsap.to(".card-a", {
  y: "-12px",
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".card-b", {
  y: "10px",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5,
});

gsap.to(".card-c", {
  y: "-8px",
  duration: 2.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1,
});

// Background circles subtle pulse
gsap.to(".circle-1", {
  scale: 1.15,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".circle-2", {
  scale: 1.2,
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1,
});

gsap.to(".circle-3", {
  scale: 1.1,
  x: 30,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 2,
});

/* ─────────────────────────────────────────
   Stats Bar — scroll-triggered counter
───────────────────────────────────────── */
const stats = document.querySelectorAll(".stat");

ScrollTrigger.create({
  trigger: ".stats-bar",
  start: "top 80%",
  onEnter: () => {
    gsap.to(stats, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animated counters
    document.querySelectorAll(".stat-num").forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      gsap.to(el, {
        innerHTML: target,
        duration: 1.8,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        delay: 0.3,
      });
    });
  },
});

/* ─────────────────────────────────────────
   Features — scroll-triggered card stagger
───────────────────────────────────────── */
ScrollTrigger.create({
  trigger: ".features",
  start: "top 75%",
  onEnter: () => {
    gsap.to(".section-header", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(".feature-card", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    });
  },
});

// Ensure section headers start hidden
gsap.set(".section-header", { opacity: 0, y: 40 });

/* ─────────────────────────────────────────
   About Section — scroll-triggered entrance
───────────────────────────────────────── */
ScrollTrigger.create({
  trigger: ".about",
  start: "top 75%",
  onEnter: () => {
    gsap.to(".about-content .section-tag, .about-content .section-title, .about-text, .about-list, .about-content .btn", {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    });
    gsap.to(".about-box", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)",
    });
  },
});

// Set initial states for about section
gsap.set(
  ".about-content .section-tag, .about-content .section-title, .about-text, .about-list, .about-content .btn",
  { opacity: 0, x: 50 }
);
gsap.set(".about-box", { opacity: 0, y: 30 });

/* ─────────────────────────────────────────
   Showcase Section — scroll-triggered + hover
───────────────────────────────────────── */
ScrollTrigger.create({
  trigger: ".showcase",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".showcase .section-header", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(".showcase-item", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.4)",
      delay: 0.2,
    });
  },
});

// Hover interactions on showcase boxes
const showcaseItems = document.querySelectorAll(".showcase-item");

showcaseItems.forEach((item, index) => {
  const box = item.querySelector(".showcase-box");
  const color = item.dataset.color;

  const eases = ["power3.inOut", "bounce.out", "elastic.out(1, 0.4)", "back.out(2)"];
  const anims = [
    { x: 60, duration: 0.5 },
    { y: -60, duration: 0.6 },
    { rotation: 360, scale: 1.2, duration: 0.8 },
    { scale: 1.4, rotation: -20, duration: 0.5 },
  ];

  item.addEventListener("mouseenter", () => {
    gsap.to(box, {
      ...anims[index],
      background: color,
      ease: eases[index],
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(box, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
      duration: 0.6,
      ease: "power2.out",
    });
  });
});

/* ─────────────────────────────────────────
   Contact Section — scroll-triggered
───────────────────────────────────────── */
ScrollTrigger.create({
  trigger: ".contact",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".contact-inner .section-tag, .contact-inner .section-title, .contact-text", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    });
    gsap.to(".contact-code", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });
    gsap.to(".contact-inner .btn", {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.4)",
      delay: 0.6,
    });
  },
});

// Set initial states for contact
gsap.set(
  ".contact-inner .section-tag, .contact-inner .section-title, .contact-text",
  { opacity: 0, y: 30 }
);
gsap.set(".contact-inner .btn", { opacity: 0, scale: 0.85 });

/* ─────────────────────────────────────────
   Navbar — background change on scroll
───────────────────────────────────────── */
ScrollTrigger.create({
  start: "top -60",
  onUpdate: (self) => {
    const navbar = document.getElementById("navbar");
    if (self.direction === 1) {
      navbar.style.background = "rgba(10, 10, 15, 0.95)";
    } else {
      navbar.style.background = "rgba(10, 10, 15, 0.85)";
    }
  },
});

/* ─────────────────────────────────────────
   Feature cards — subtle hover lift
───────────────────────────────────────── */
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
  });
});

/* ─────────────────────────────────────────
   Smooth scroll for nav links (native)
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
