import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export async function initMotion() {
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Soft page wipe on internal nav
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
          e.ctrlKey
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

  if (reduced()) {
    document
      .querySelectorAll<HTMLElement>(
        '.chapter .display, .chapter .lead, .chapter .body, .chapter .cta-row, .hero-wordmark, .hero-tagline, .hero-support, .hero-ctas',
      )
      .forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    return;
  }

  let lenis: { raf: (t: number) => void; destroy: () => void; on: Function } | null =
    null;

  try {
    const { default: Lenis } = await import('lenis');
    lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });
    document.documentElement.classList.add('lenis', 'lenis-smooth');
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } catch {
    /* Lenis optional */
  }

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (document.querySelector('.hero-wordmark')) {
    heroTl
      .from('.hero-wordmark', { y: 36, opacity: 0, duration: 1.05 }, 0.1)
      .from('.hero-tagline', { y: 28, opacity: 0, duration: 0.85 }, 0.35)
      .from('.hero-support', { y: 20, opacity: 0, duration: 0.75 }, 0.5)
      .from(
        '.hero-ctas .cta',
        { y: 16, opacity: 0, duration: 0.55, stagger: 0.08 },
        0.65,
      );

    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      gsap.to(heroBg, {
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }

  document.querySelectorAll<HTMLElement>('.chapter').forEach((section) => {
    const headline = section.querySelector('.display');
    const bodyBits = section.querySelectorAll(
      '.lead, .body, .cta-row, .icon-row, .why-grid, .plan-rail, .plan-preview, .intent-list, .contact-grid',
    );
    if (headline) {
      gsap.from(headline, {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });
    }
    if (bodyBits.length) {
      gsap.from(bodyBits, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      });
    }
  });

  const doors = document.querySelectorAll('.door');
  if (doors.length) {
    gsap.from(doors, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.2,
    });
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

  window.addEventListener('pagehide', () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    lenis?.destroy();
  });
}
