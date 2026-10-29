import gsap from 'gsap';

const STOPS = [
  { id: 'banjara', t: 0.06 },
  { id: 'jubilee', t: 0.26 },
  { id: 'hitech', t: 0.48 },
  { id: 'gachibowli', t: 0.68 },
  { id: 'oldcity', t: 0.88 },
] as const;

export function initTruck() {
  const truck = document.querySelector<HTMLElement>('[data-truck]');
  const map = document.querySelector<HTMLElement>('[data-city-map]');
  const svg = map?.querySelector('svg');
  const road = svg?.querySelector<SVGPathElement>('.city-map__road');
  if (!truck || !map || !svg || !road) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  truck.classList.add('is-xy');

  const state = { t: STOPS[0].t };
  let loop: gsap.core.Tween | null = null;

  const place = () => {
    const len = road.getTotalLength();
    const pt = road.getPointAtLength(state.t * len);
    const ctm = svg.getScreenCTM();
    const mapRect = map.getBoundingClientRect();
    if (!ctm) return;

    // SVG user → screen → map-local %
    const screenX = ctm.a * pt.x + ctm.c * pt.y + ctm.e;
    const screenY = ctm.b * pt.x + ctm.d * pt.y + ctm.f;
    const x = ((screenX - mapRect.left) / mapRect.width) * 100;
    const y = ((screenY - mapRect.top) / mapRect.height) * 100;
    truck.style.left = `${x}%`;
    truck.style.top = `${y}%`;

    // Face travel direction
    const look = road.getPointAtLength(Math.min(len, state.t * len + 4));
    const sx2 = ctm.a * look.x + ctm.c * look.y + ctm.e;
    const facingRight = sx2 >= screenX;
    truck.style.transform = `translate(-50%, -50%) scaleX(${facingRight ? 1 : -1})`;

    let nearest = STOPS[0];
    let best = Infinity;
    STOPS.forEach((s) => {
      const d = Math.abs(s.t - state.t);
      if (d < best) {
        best = d;
        nearest = s;
      }
    });
    document.querySelectorAll('.city-stop').forEach((el) => {
      el.classList.toggle('is-active', el.getAttribute('data-stop') === nearest.id);
    });
  };

  const driveLoop = () => {
    if (reduced) return;
    loop?.kill();
    state.t = state.t >= 0.98 ? 0 : state.t;
    loop = gsap.to(state, {
      t: 1,
      duration: Math.max(6, (1 - state.t) * 32),
      ease: 'none',
      onUpdate: place,
      onComplete: () => {
        state.t = 0;
        driveLoop();
      },
    });
  };

  const goTo = (t: number) => {
    loop?.kill();
    gsap.to(state, {
      t,
      duration: reduced ? 0 : 1.35,
      ease: 'power2.inOut',
      onUpdate: place,
      onComplete: () => {
        if (!reduced) driveLoop();
      },
    });
  };

  document.querySelectorAll<HTMLElement>('[data-stop]').forEach((el) => {
    const activate = () => {
      const id = el.dataset.stop;
      const stop = STOPS.find((s) => s.id === id);
      if (stop) goTo(stop.t);
    };
    el.addEventListener('click', activate);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  });

  document.querySelector('[data-truck-play]')?.addEventListener('click', () => {
    driveLoop();
  });

  document.querySelector('[data-truck-pause]')?.addEventListener('click', () => {
    loop?.pause();
  });

  window.addEventListener('resize', place);

  place();
  if (!reduced) driveLoop();
}
