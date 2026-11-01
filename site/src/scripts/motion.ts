import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll() {
  document
    .querySelectorAll<HTMLElement>(
      '.chapter .display, .chapter .lead, .chapter .body, .chapter .cta-row, .chapter .icon-row, .chapter .why-grid, .chapter .why-card, .chapter .plan-rail, .chapter .plan-item, .chapter .plan-preview, .chapter .intent-list, .chapter .contact-grid, .chapter .split-two, .chapter .path, .chapter .audience, .chapter .tl, .chapter .rental-grid, .chapter .rental-filters, .hero-wordmark, .hero-tagline, .hero-support, .hero-ctas, .cc-hero__logo, .cc-hero__line, .cc-hero__sub, .door, .route-board, .truck-stage',
    )
    .forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  const shell = document.querySelector<HTMLElement>('.page-shell');
  if (shell) {
    shell.style.opacity = '1';
    shell.style.transform = 'none';
  }
}

export async function initMotion() {
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Soft page wipe — only real route changes, never hash / external
  const wipe = document.querySelector<HTMLElement>('[data-wipe]');
  if (wipe && !reduced()) {
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const a = link as HTMLAnchorElement;
        const url = new URL(a.href, window.location.href);
        if (
          url.origin !== window.location.origin ||
          url.pathname === window.location.pathname ||
          a.target === '_blank' ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey
        ) {
          return;
        }
        e.preventDefault();
        wipe.classList.add('is-leaving');
        window.setTimeout(() => {
          window.location.href = a.href;
        }, 420);
      });
    });
  }

  // Always clear wipe if user lands via bfcache / back
  window.addEventListener('pageshow', () => {
    wipe?.classList.remove('is-leaving');
  });

  if (reduced()) {
    revealAll();
    return;
  }

  // Safety: never leave the page blank if motion stalls
  window.setTimeout(revealAll, 1800);

  try {
    const { default: Lenis } = await import('lenis');
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });
    document.documentElement.classList.add('lenis', 'lenis-smooth');
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    window.addEventListener('pagehide', () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    });
  } catch {
    /* Lenis optional */
  }

  const heroBits = document.querySelectorAll(
    '.hero-wordmark, .cc-hero__logo, .hero-tagline, .hero-support, .cc-hero__line, .cc-hero__sub, .hero-ctas .cta',
  );
  if (heroBits.length) {
    gsap.fromTo(
      heroBits,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform',
      },
    );
  }

  const heroBg = document.querySelector('.hero-bg, .cc-hero__bg');
  if (heroBg) {
    gsap.to(heroBg, {
      scale: 1.04,
      ease: 'none',
      scrollTrigger: {
        trigger: heroBg.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  document.querySelectorAll<HTMLElement>('.chapter').forEach((section) => {
    const bits = section.querySelectorAll(
      '.display, .lead, .body, .cta-row, .icon-row, .why-grid, .plan-rail, .plan-preview, .intent-list, .contact-grid, .split-two, .path, .audience, .tl, .rental-filters, .rental-grid, .subject-row, .cta-band',
    );
    if (!bits.length) return;
    gsap.fromTo(
      bits,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.06,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true,
        },
      },
    );
  });

  const doors = document.querySelectorAll('.door');
  if (doors.length) {
    gsap.fromTo(
      doors,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'transform',
      },
    );
  }

  const grain = document.querySelector('[data-grain]');
  if (grain) {
    gsap.to(grain, {
      opacity: 0.35,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }

  ScrollTrigger.refresh();
}
