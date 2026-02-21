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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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

      <DialogContent className="max-w-lg">
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
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
          <p className="text-muted-foreground">{event.description}</p>
          
          {event.subEvents && event.subEvents.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Event Components
              </h4>
              <Accordion type="single" collapsible className="w-full">
                {event.subEvents.map((subEvent) => (
                  <AccordionItem value={subEvent._id} key={subEvent._id}>
                    <AccordionTrigger>{subEvent.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4">
                        {subEvent.imageUrl && (
                          <div className="relative h-40 w-full">
                            <Image
                              src={subEvent.imageUrl}
                              alt={subEvent.title}
                              fill
                              className="rounded-md object-cover"
                            />
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {subEvent.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-col-reverse gap-2 border-t pt-4 sm:flex-row sm:justify-end">
          {event.isUpcoming &&
            event.registrationLink &&
            event.registrationLink !== '#' && (
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
