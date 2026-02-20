import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Testimonials() {
  const testimonials = [
    {
      _id: '1',
      name: 'Harsh Lodhi',
      year: '2024',
      company: 'Qubits',
      image:
        'https://res.cloudinary.com/dauf7v7uz/image/upload/v1770452861/1768329126791_h8cimj.jpg',
      testimonial:
        'INSPIRE MANIT was a game-changer. It perfectly blended technical skill development with the timeless wisdom of the Bhagavad Gita, giving me a foundation for both my career and my life.',
    },
    {
      _id: '2',
      name: 'Anurag Sharma',
      year: '2026',
      company: 'Amazon',
      image:
        'https://res.cloudinary.com/dauf7v7uz/image/upload/v1770404586/1758282729902_renysy.jpg',
      testimonial:
        'Leading INSPIRE was an incredible journey. It taught me to balance technical projects with spiritual values, a lesson from the Gita that I apply daily in the corporate world.',
    },
    {
      _id: '3',
      name: 'Shishir Mishra',
      year: '2025',
      company: 'PSU',
      image: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1770404994/1747887154996_vnkfzv.jpg',
      testimonial:
        'Being part of INSPIRE was a transformative experience. The society provides a unique blend of technical knowledge and spiritual wisdom from the Bhagavad Gita, which has been crucial for my professional and personal development.',
    },
  ];

  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Words from Our Alumni
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Hear what our former members have to say about their experience.
        </p>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial._id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col">
                  <CardContent className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="mb-4 rounded-full"
                    />
                    <blockquote className="flex-grow text-base italic text-muted-foreground">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                    <footer className="mt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      {testimonial.company && (
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        Batch of {testimonial.year}
                      </p>
                    </footer>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionWrapper>
  );
}
