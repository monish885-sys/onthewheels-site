import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLAN_COPY: Record<string, string> = {
  cc: 'Hold more nights in Hyderabad — college, family, brand — with one house behind them.',
  '18g': 'Specialty coffee under trucks. A warm stop that keeps moving across the city.',
  soft: 'Tools proven on our own floor first. Named and offered out only when ready.',
};

export function initHomeStory() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Future plan rail
  const copy = document.querySelector<HTMLElement>('[data-plan-copy]');
  const glow = document.querySelector<HTMLElement>('.plan-preview__glow');
  document.querySelectorAll<HTMLButtonElement>('[data-plan]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-plan]').forEach((b) => b.classList.remove('is-on'));
      btn.classList.add('is-on');
      const key = btn.dataset.plan || 'cc';
      if (copy) {
        gsap.fromTo(
          copy,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
        );
        copy.textContent = PLAN_COPY[key] || PLAN_COPY.cc;
      }
      if (glow) {
        gsap.fromTo(glow, { x: 40, opacity: 0.3 }, { x: 0, opacity: 1, duration: 0.6 });
      }
    });
  });

  if (reduced) return;

  // Parallax giant words
  document.querySelectorAll('[data-parallax]').forEach((layer) => {
    const spans = layer.querySelectorAll('[data-float]');
    spans.forEach((span, i) => {
      gsap.to(span, {
        y: i % 2 === 0 ? -80 : 60,
        x: i % 2 === 0 ? 40 : -30,
        ease: 'none',
        scrollTrigger: {
          trigger: layer.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });

  // Why cards stagger
  gsap.from('.why-card', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.why-grid',
      start: 'top 80%',
      once: true,
    },
  });

  // Plan items slide
  gsap.from('.plan-item', {
    x: -24,
    opacity: 0,
    stagger: 0.08,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.plan-rail',
      start: 'top 82%',
      once: true,
    },
  });
}
