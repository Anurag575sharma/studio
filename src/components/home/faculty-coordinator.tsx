import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';

export function FacultyCoordinator() {
  return (
    <SectionWrapper glowColor="accent">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-md aspect-[3/4] animate-in fade-in-0 zoom-in-95 duration-500 lg:order-first lg:mx-0 lg:max-w-none">
           <Image
            src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771694609/WhatsApp_Image_2026-02-21_at_18.06.48_n21oz6.jpg"
            alt="Dr. Savita Dixit, Faculty Coordinator"
            fill
            className="rounded-2xl object-cover object-top shadow-2xl"
           />
        </div>
        <div className="order-first lg:order-last">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Guiding Light
          </h2>
           <p className="mt-6 text-2xl font-bold tracking-tight text-accent">
            Dr. Savita Dixit
          </p>
          <p className="text-lg text-muted-foreground -mt-1">
            Faculty Coordinator, INSPIRE MANIT
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Under the expert guidance of our respected faculty coordinator, Dr. Savita Dixit, INSPIRE MANIT thrives as a hub of innovation and cultural enrichment. Her mentorship empowers us to bridge technical knowledge with timeless values, fostering a community of principle-centered leaders and visionaries.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
