# GSAP Animated Website

A modern, fully animated landing page built with [GreenSock Animation Platform (GSAP)](https://gsap.com/) — the industry-standard library for professional web animations.

![Preview](https://github.com/user-attachments/assets/9d59016c-f772-447b-9dab-34f8618d7d80)

## Features

- **Hero section** — staggered entrance animations (title lines, subtitle, CTA buttons)
- **Floating cards** — idle looping float animation
- **Background circles** — subtle pulsing parallax blobs
- **Stats bar** — scroll-triggered animated counters
- **Feature cards** — scroll-triggered stagger reveal + hover lift
- **About section** — slide-in content and code snippet boxes
- **Showcase** — interactive hover animations (tween, bounce, elastic, rotate)
- **Contact/CTA** — scroll-triggered entrance
- **Navbar** — entrance animation + scroll-aware background change

## Tech Stack

| Tool | Purpose |
|------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Custom properties, Grid, Flexbox |
| [GSAP 3](https://gsap.com/) | All animations |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Scroll-linked animations |

## Project Structure

```
GSAP/
├── index.html       # Page structure
├── style.css        # Styles & custom properties
├── script.js        # All GSAP animations
└── vendor/
    ├── gsap.min.js           # GSAP core (local copy)
    └── ScrollTrigger.min.js  # ScrollTrigger plugin (local copy)
```

## Getting Started

No build step required — open `index.html` in a browser or serve with any static server:

```bash
# Using Python (built-in)
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Learning Resources

- [GSAP Documentation](https://gsap.com/docs/v3/)
- [GSAP Cheatsheet](https://gsap.com/cheatsheet/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
