// All the wedding's facts live here. Edit this file to change what the site says.

// Calendar apps need an end time; the invitation gives none, so these assume three hours.
export const events = [
  {
    id: 'wedding',
    title: 'Wedding',
    date: 'Sunday, 20 December 2026',
    time: '12:00 PM',
    venue: 'Camelot Convention Centre',
    place: 'Alapuzzha',
    startUtc: '20261220T063000Z',
    endUtc: '20261220T093000Z',
    startIso: '2026-12-20T12:00:00+05:30',
    // Swap for the venue's exact Google Maps share link when confirmed.
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Camelot+Convention+Centre+Alappuzha+Kerala',
    mapLocation: 'Camelot Convention Centre, Alappuzha, Kerala',
  },
  {
    id: 'reception',
    title: 'Reception',
    date: 'Monday, 21 December 2026',
    time: '6:00 PM',
    venue: 'Walk Avenue Convention Centre',
    place: 'Thoppumpady, Kochi',
    startUtc: '20261221T123000Z',
    endUtc: '20261221T153000Z',
    startIso: '2026-12-21T18:00:00+05:30',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Walk+Avenue+Convention+Centre+Thoppumpady+Kochi',
    mapLocation: 'Walk Avenue Convention Centre, Thoppumpady, Kochi, Kerala',
  },
] as const;

export const calendarTitle = (title: string) => `${title} of Adhil Naufal & Sona Haris`;

export const families = [
  {
    name: 'Adhil Naufal',
    childOf: 'S/O',
    parents: 'PK Naufal & Asiya Naufal',
    grandchildOf: 'Grandson of',
    grandparents: 'Late Kunju Muhammad & Late Sabira',
  },
  {
    name: 'Sona Haris',
    childOf: 'D/O',
    parents: 'Haris Hassan & Saleena Haris',
    grandchildOf: 'Granddaughter of',
    grandparents: 'Late Hassan Koya & Late Khadeeja Beevi',
  },
];

export const siblings = 'Afraz · Nazneen · Nihala';

// To add music, put the file in public/ and set this, e.g. '/music.mp3'.
export const music: string | null = '/music.mp3';
