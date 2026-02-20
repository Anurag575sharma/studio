import Link from 'next/link';
import dbConnect from '@/lib/db-connect';
import Event from '@/lib/models/Event';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { EventCard } from '@/components/shared/event-card';
import { Button } from '@/components/ui/button';
import type { TEvent } from '@/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

async function getUpcomingEvents() {
  noStore();
  await dbConnect();
  const events = await Event.find({ isUpcoming: true })
    .sort({ date: 1 })
    .limit(3)
    .lean();
  return JSON.parse(JSON.stringify(events)) as TEvent[];
}

export async function UpcomingEvents() {
  const events = await getUpcomingEvents();

  return (
    <SectionWrapper glowColor="accent">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Upcoming Events
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Join our upcoming workshops, competitions, and seminars.
        </p>
      </div>

      {events.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={event._id}
              className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted-foreground">No upcoming events at the moment. Stay tuned!</p>
      )}

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
