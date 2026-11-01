export const site = {
  name: 'OnTheWheels',
  legal: 'OnTheWheels Hospitality LLP',
  city: 'Hyderabad',
  email: 'onthewheels2k26@gmail.com',
  phoneDisplay: '96407 35454',
  phoneTel: '+919640735454',
  /** Parent studio IG — confirm before public push */
  instagram: null as string | null,
  tagline: 'Places, gatherings, and the software that runs them.',
  shortMark: 'Built to move.',
  homeSupport: 'Friends. Many plans. One roof in Hyderabad.',
  endorsement: 'An OnTheWheels venture',
} as const;

/** Cultural Crossroads portal — live handle */
export const cc = {
  name: 'Cultural Crossroads',
  instagram: 'cultural.crossroads',
  /** Rentals posts live on the same grid until a free rentals handle is claimed */
  rentalsInstagram: 'cultural.crossroads',
} as const;

export const igUrl = (handle: string) =>
  `https://www.instagram.com/${handle.replace('@', '')}/`;

export const mailto = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString()}`;
};

export const navLinks = [
  { href: '/cc', label: 'CC' },
  { href: '/18g', label: '18g' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
] as const;
