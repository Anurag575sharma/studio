'use client';

import { useEffect, useState } from 'react';
import { events as allEvents } from '@/lib/seed-data';
import { Button } from '@/components/ui/button';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Find the soonest upcoming event
const upcomingEvent = allEvents
  .filter((event) => event.isUpcoming)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

export function CountdownBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (!upcomingEvent) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(upcomingEvent.date) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Event has started or passed
        setTimeLeft(null);
        setIsVisible(false);
      }
    };

    // Set initial time to avoid flash of empty content on client
    calculateTimeLeft();
    
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  if (!isVisible || !upcomingEvent || !timeLeft) {
    return null;
  }

  const timeParts = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="relative bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center text-center md:justify-between flex-wrap gap-y-2 gap-x-4">
          <div className="flex-1 text-center md:text-left">
            <p className="font-medium text-foreground">
              <span className="hidden md:inline">Our next event, <span className="font-bold">{upcomingEvent.title}</span>, is starting soon!</span>
              <span className="md:hidden font-bold">{upcomingEvent.title} is starting!</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-x-4 order-last md:w-auto md:order-none">
              {timeParts.map(part => (
                  <div key={part.label} className="text-center">
                      <div className="text-2xl font-bold tracking-tight">{String(part.value).padStart(2, '0')}</div>
                      <div className="text-xs font-mono uppercase text-muted-foreground">{part.label}</div>
                  </div>
              ))}
          </div>
          <div className="flex items-center justify-end">
            <Button asChild size="sm" className="hidden sm:flex">
                <Link href="/events">
                   View Event <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8" onClick={() => setIsVisible(false)}>
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
