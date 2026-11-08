import type { APIRoute } from 'astro';
import { events, calendarTitle } from '../../data/wedding';

export const getStaticPaths = () => events.map((e) => ({ params: { id: e.id }, props: { e } }));

const esc = (s: string) => s.replace(/([,;\\])/g, '\\$1');

export const GET: APIRoute = ({ props }) => {
  const { e } = props as { e: (typeof events)[number] };
  const body = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Adhil and Sona//Wedding//EN', 'BEGIN:VEVENT',
    `UID:${e.id}@adhil-sona`, 'DTSTAMP:20261108T000000Z', `DTSTART:${e.startUtc}`, `DTEND:${e.endUtc}`,
    `SUMMARY:${esc(calendarTitle(e.title))}`, `LOCATION:${esc(e.mapLocation)}`, 'END:VEVENT', 'END:VCALENDAR', '',
  ].join('\r\n');
  return new Response(body, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
};
