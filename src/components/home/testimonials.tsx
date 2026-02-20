import dbConnect from '@/lib/db-connect';
import Alumni from '@/lib/models/Alumni';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { TAlumni } from '@/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

async function getAlumniTestimonials() {
  noStore();
  await dbConnect();
  const alumni = await Alumni.find({}).limit(5).lean();
  return JSON.parse(JSON.stringify(alumni)) as TAlumni[];
}

export async function Testimonials() {
  const testimonials = await getAlumniTestimonials();

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
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <Image
                      src={testimonial.imageUrl}
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
                      <p className="text-sm text-muted-foreground">Batch of {testimonial.batch}</p>
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
