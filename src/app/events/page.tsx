import { EventCard } from '@/components/shared/event-card';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import type { TEvent } from '@/lib/definitions';

async function getEvents(): Promise<TEvent[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/events`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();
  const upcomingEvents = events.filter((e) => e.isUpcoming);
  const pastEvents = events.filter((e) => !e.isUpcoming);

  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Engage with our community through a variety of technical and creative events.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-muted-foreground">No upcoming events scheduled. Please check back soon!</p>
          )}
        </div>
      </SectionWrapper>
      
      <SectionWrapper glowColor="accent">
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Past Events
          </h2>
          {pastEvents.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event._id} event={event} isPast />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-muted-foreground">Our event archive is currently empty.</p>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
