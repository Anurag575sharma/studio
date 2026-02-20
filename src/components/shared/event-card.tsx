import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { TEvent } from '@/lib/definitions';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

type EventCardProps = {
  event: TEvent;
  isPast?: boolean;
  cardId: string;
};

export function EventCard({ event, isPast = false, cardId }: EventCardProps) {
  return (
    <Card className={cn('flex h-full flex-col overflow-hidden', isPast ? 'opacity-80' : 'opacity-100')}>
      {event.imageUrl && event.imageUrl.startsWith('http') && (
        <div className="relative h-48 w-full">
          <Image src={event.imageUrl} alt={event.title} fill className="object-cover" />
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
        <Accordion type="single" collapsible>
          <AccordionItem value={cardId} className="border-none">
            <AccordionTrigger className="py-0 text-left text-sm text-muted-foreground hover:no-underline [&[data-state=open]>span]:hidden">
              <span>Read more</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-base text-muted-foreground">
              {event.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        {event.isUpcoming && event.registrationLink && event.registrationLink !== '#' ? (
          <Button asChild className="w-full">
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        ) : (
          <Badge variant="outline" className="w-full justify-center">
            {isPast ? 'Event Concluded' : 'Registrations Closed'}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
