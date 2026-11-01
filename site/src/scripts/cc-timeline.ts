import gsap from 'gsap';

export function initCcTimeline() {
  const root = document.querySelector<HTMLElement>('[data-timeline]');
  if (!root) return;

  const beats = [...root.querySelectorAll<HTMLButtonElement>('[data-beat]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
  const fill = root.querySelector<HTMLElement>('[data-tl-fill]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const show = (index: number) => {
    const i = Math.max(0, Math.min(beats.length - 1, index));
    beats.forEach((b, n) => b.classList.toggle('is-active', n === i));
    panels.forEach((p, n) => {
      const on = n === i;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
    if (fill) {
      fill.style.width = beats.length <= 1 ? '100%' : `${(i / (beats.length - 1)) * 100}%`;
    }

    const active = panels[i];
    if (active && !reduced) {
      gsap.fromTo(
        active.querySelectorAll('.tl-shot, .tl-copy > *'),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: 'power2.out' },
      );
    }
  };

  beats.forEach((btn) => {
    btn.addEventListener('click', () => show(Number(btn.dataset.beat) || 0));
  });

  root.querySelector('[data-tl-prev]')?.addEventListener('click', () => {
    const cur = beats.findIndex((b) => b.classList.contains('is-active'));
    show(cur - 1);
  });
  root.querySelector('[data-tl-next]')?.addEventListener('click', () => {
    const cur = beats.findIndex((b) => b.classList.contains('is-active'));
    show(cur + 1);
  });

  window.addEventListener('keydown', (e) => {
    if (!root.matches(':hover') && !root.contains(document.activeElement)) return;
    const cur = beats.findIndex((b) => b.classList.contains('is-active'));
    if (e.key === 'ArrowRight') show(cur + 1);
    if (e.key === 'ArrowLeft') show(cur - 1);
  });

  // Image rail drag / wheel inside active panel
  root.querySelectorAll<HTMLElement>('[data-shot-rail]').forEach((rail) => {
    let down = false;
    let startX = 0;
    let startScroll = 0;
    rail.addEventListener('pointerdown', (e) => {
      down = true;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      rail.setPointerCapture(e.pointerId);
    });
    rail.addEventListener('pointermove', (e) => {
      if (!down) return;
      rail.scrollLeft = startScroll - (e.clientX - startX);
    });
    const up = () => {
      down = false;
    };
    rail.addEventListener('pointerup', up);
    rail.addEventListener('pointercancel', up);
  });

  show(0);
}

export function initRentalsFilter() {
  const grid = document.querySelector('[data-rentals]');
  if (!grid) return;
  const cards = [...grid.querySelectorAll<HTMLElement>('[data-rental]')];
  const filters = [...document.querySelectorAll<HTMLButtonElement>('[data-rental-filter]')];

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.rentalFilter || 'all';
      filters.forEach((b) => b.classList.toggle('is-active', b === btn));
      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').toLowerCase();
        const show = key === 'all' || tags.includes(key);
        card.hidden = !show;
        if (show && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          gsap.fromTo(card, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
        }
      });
    });
  });
}
