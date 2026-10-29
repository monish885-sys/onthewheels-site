export const site = {
  name: 'OnTheWheels',
  legal: 'OnTheWheels Hospitality LLP',
  city: 'Hyderabad',
  email: 'onthewheels2k26@gmail.com',
  phoneDisplay: '96407 35454',
  phoneTel: '+919640735454',
  /** Set exact handle before public launch — interim placeholder */
  instagram: null as string | null,
  tagline: 'Places, gatherings, and the software that runs them.',
  shortMark: 'Built to move.',
  homeSupport: 'Friends. Many plans. One roof in Hyderabad.',
  endorsement: 'An OnTheWheels venture',
} as const;

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
