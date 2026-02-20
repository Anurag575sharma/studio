'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { TEvent } from '@/lib/definitions';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

type EventCardProps = {
  event: TEvent;
  isPast?: boolean;
};

export function EventCard({ event, isPast = false }: EventCardProps) {
  return (
    <Dialog>
      <Card
        className={cn(
          'flex h-full flex-col overflow-hidden',
          isPast ? 'opacity-90' : 'opacity-100'
        )}
      >
        {event.imageUrl && event.imageUrl.startsWith('http') && (
          <div className="relative h-48 w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {event.description}
          </p>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2 pt-4">
          <DialogTrigger asChild>
            <Button variant="secondary">Read More</Button>
          </DialogTrigger>
          {event.isUpcoming &&
          event.registrationLink &&
          event.registrationLink !== '#' ? (
            <Button asChild>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          ) : (
            <Badge variant="outline" className="flex justify-center py-2.5">
              {isPast ? 'Event Concluded' : 'Registrations Closed'}
            </Badge>
          )}
        </CardFooter>
      </Card>

      <DialogContent className="max-w-md">
        <DialogHeader>
          {event.imageUrl && event.imageUrl.startsWith('http') && (
            <div className="relative mb-4 h-56 w-full">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
          )}
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </DialogHeader>
        <div className="mt-4 max-h-[40vh] overflow-y-auto pr-2 text-muted-foreground">
          <p>{event.description}</p>
        </div>
        {event.isUpcoming &&
          event.registrationLink &&
          event.registrationLink !== '#' && (
            <div className="mt-6">
              <Button asChild size="lg" className="w-full">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
      </DialogContent>
    </Dialog>
  );
}
