import { igUrl, cc } from './site';

export type EventBeat = {
  id: string;
  /** Display date on the timeline chip, e.g. "Nov 2024" */
  when: string;
  label: string;
  title: string;
  blurb: string;
  images: { src: string; alt: string }[];
  instagram: string;
};

/**
 * Notable nights from @cultural.crossroads event posts only.
 * Rentals catalogue images stay on /cc/rentals — never mixed here.
 */
export const eventBeats: EventBeat[] = [
  {
    id: 'stage-2024',
    when: 'Dec 2024',
    label: 'Stage night',
    title: 'Couple seats & florals',
    blurb:
      'A held stage — banana leaves, hanging florals, and gold seats. One of the earlier rooms on the grid.',
    images: [
      { src: '/assets/events/stage-2024/2024-12-30.jpg', alt: 'Stage with couple seats and hanging florals' },
      { src: '/assets/events/housewarming/01-EYE04922.jpg', alt: 'Table and florals detail' },
      { src: '/assets/events/housewarming/03-EYE04927.jpg', alt: 'Room held wide' },
      { src: '/assets/events/housewarming/05-EYE04932.jpg', alt: 'Décor moment' },
    ],
    instagram: igUrl(cc.instagram),
  },
  {
    id: 'sahil-pavani',
    when: 'Feb 2025',
    label: 'Wedding floor',
    title: 'Sahil & Pavani',
    blurb:
      'Outdoor wedding night — named backdrop, floral arch, couple seat under the trees. Haldi-scale rooms in the same season.',
    images: [
      { src: '/assets/events/sahil-pavani/2025-02-11.jpg', alt: 'Sahil and Pavani stage at night' },
      { src: '/assets/events/haldi-ogha/arch.jpg', alt: 'Haldi arch walk' },
      { src: '/assets/events/haldi-ogha/stage.jpg', alt: 'Haldi stage seating' },
      { src: '/assets/events/haldi-ogha/canopy.jpg', alt: 'Haldi canopy' },
      { src: '/assets/events/haldi-ogha/seating.jpg', alt: 'Guest seating under décor' },
    ],
    instagram: igUrl(cc.instagram),
  },
  {
    id: 'birthday-avni',
    when: 'Apr 2025',
    label: 'Birthday',
    title: "Avni's birthday land",
    blurb:
      'Pastel stage, unicorns, marquee letters, rainbow entry — a full birthday room, not a catalogue piece.',
    images: [
      { src: '/assets/events/birthday-avni/2025-04-02.jpg', alt: "Avni birthday stage and entry" },
      { src: '/assets/events/cradle/2025-08-08.jpg', alt: 'Cradle ceremony stage with florals' },
      { src: '/assets/events/cradle/2026-10-21.jpg', alt: 'Cradle ceremony welcome board' },
      { src: '/assets/events/half-saree/2025-07-28.jpg', alt: 'Garden fairy lights at night' },
    ],
    instagram: igUrl(cc.instagram),
  },
  {
    id: 'half-saree',
    when: 'Jul 2025',
    label: 'Half saree',
    title: "Sri Jasya's ceremony",
    blurb:
      'Welcome board, lotus florals, and the night lit under the trees — family milestone rooms through July.',
    images: [
      { src: '/assets/events/half-saree/2025-07-09.jpg', alt: 'Half saree welcome board' },
      { src: '/assets/events/half-saree/2025-07-28.jpg', alt: 'Hanging fairy lights between trees' },
      { src: '/assets/events/half-saree/2025-07-29.jpg', alt: 'July night décor still' },
      { src: '/assets/events/half-saree/2025-07-19a.jpg', alt: 'Ceremony décor detail' },
      { src: '/assets/events/half-saree/2025-07-10.jpg', alt: 'July gathering still' },
    ],
    instagram: igUrl(cc.instagram),
  },
  {
    id: 'housewarming',
    when: 'Aug 2025',
    label: 'Housewarming',
    title: 'Door to the last tray',
    blurb:
      'Balusu housewarming — toran, passage, marigold arch, pooja, women’s table. Stills from the Instagram décor dump.',
    images: [
      { src: '/assets/events/housewarming-ig/01-the-door.jpg', alt: 'Housewarming door with toran' },
      { src: '/assets/events/housewarming-ig/02-the-arrival.jpg', alt: 'Housewarming arrival' },
      { src: '/assets/events/housewarming-ig/04-the-arch.jpg', alt: 'Marigold arch' },
      { src: '/assets/events/housewarming-ig/06-the-pooja.jpg', alt: 'Pooja corner' },
      { src: '/assets/events/housewarming-ig/05-the-table.jpg', alt: 'Women’s table' },
      { src: '/assets/events/housewarming-ig/11-the-last-detail.jpg', alt: 'Last detail of the night' },
      { src: '/assets/events/cradle/2025-08-23.jpg', alt: 'August room corner with florals' },
    ],
    instagram: igUrl(cc.instagram),
  },
  {
    id: 'later-rooms',
    when: '2026',
    label: 'Later rooms',
    title: 'Cradles, doors & details',
    blurb:
      'Cradle ceremonies, dressed doors, and the small florals that finish a room — still on the same Instagram trail.',
    images: [
      { src: '/assets/events/cradle/2025-08-08.jpg', alt: 'Wooden cradle on floral stage' },
      { src: '/assets/events/door-details/2026-02-19.jpg', alt: 'Door dressed with florals and candles' },
      { src: '/assets/events/door-details/2026-02-18.jpg', alt: 'Small floral details collage' },
      { src: '/assets/events/cradle/2026-10-21.jpg', alt: 'Arush cradle ceremony welcome' },
      { src: '/assets/events/door-details/2026-10-22.jpg', alt: 'Pillars and stage florals' },
      { src: '/assets/events/cradle/2025-08-16.jpg', alt: 'Puja altar with marigold arch' },
    ],
    instagram: igUrl(cc.instagram),
  },
];

export type RentalItem = {
  id: string;
  title: string;
  use: string;
  meta: string;
  alt: string;
  image: string;
  instagram: string;
};

/** Built from CC Rentals Instagram catalogue posts (stock Template 5). Lives on /cc/rentals only. */
export const rentalItems: RentalItem[] = [
  {
    id: '01-silver-okhli-musal',
    title: 'Silver Okhli & Musal',
    use: 'Haldi · rituals · wedding décor',
    meta: 'Ceremonial · ~4 ft',
    alt: 'Silver ceremonial okhli and musal set',
    image: '/assets/rentals/01-silver-okhli-musal.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '02-wood-silver-ural',
    title: 'Wood & Silver Ural Set',
    use: 'Nalangu · rituals · entry décor',
    meta: 'Ceremonial · ~3.5 ft',
    alt: 'Wood and silver decorative ural',
    image: '/assets/rentals/02-wood-silver-ural.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '03-silver-sil-batta',
    title: 'Silver Sil Batta',
    use: 'Haldi · mehendi · ritual props',
    meta: '~14 × 12 in',
    alt: 'Ornate silver sil batta',
    image: '/assets/rentals/03-silver-sil-batta.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '04-carved-console-arch',
    title: 'Carved Console with Arch',
    use: 'Altar · florals · photo corner',
    meta: '~5.5 × 3.5 ft',
    alt: 'Carved wooden console with arched frame',
    image: '/assets/rentals/04-carved-console-arch.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '05-carved-room-divider',
    title: 'Carved Room Divider',
    use: 'Backdrop · privacy · stage wings',
    meta: '4 panels · ~6 × 7 ft',
    alt: 'Four-panel carved wooden room divider',
    image: '/assets/rentals/05-carved-room-divider.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '06-cane-settee',
    title: 'Cane-Back Settee',
    use: 'Couple seat · mandap · lounge',
    meta: '~4.5 × 3 ft',
    alt: 'Vintage cane-back wooden settee',
    image: '/assets/rentals/06-cane-settee.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '07-tiled-pedestal-stands',
    title: 'Tiled Pedestal Stands',
    use: 'Florals · cakes · décor levels',
    meta: 'Set of 3 · 2.5 / 2 / 1.5 ft',
    alt: 'Three wooden pedestal stands with tile insets',
    image: '/assets/rentals/07-tiled-pedestal-stands.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
  {
    id: '08-brass-floor-vases',
    title: 'Brass Floor Vases',
    use: 'Aisles · entrances · tall florals',
    meta: 'Set of 6 · ~2.5 to 1.5 ft',
    alt: 'Six graduated brass floor vases',
    image: '/assets/rentals/08-brass-floor-vases.png',
    instagram: igUrl(cc.rentalsInstagram),
  },
];
