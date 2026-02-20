import { SectionWrapper } from '@/components/shared/section-wrapper';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          About INSPIRE MANIT
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Aspire To Inspire Until You Expire
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-last lg:order-first">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Vision
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-4 text-xl italic text-foreground">
            &ldquo;We voluntarily work to bejewel youths with wisdom and values to enable them to lead a principle-centered life.&rdquo;
          </blockquote>
          <p className="mt-4 text-lg text-muted-foreground">
            We organize technical camps and cultural events focusing on the overall growth and well-being of students while promoting Indian culture and its diversity. We bridge the gap between technical excellence and artistic expression.
          </p>
        </div>
        <div className="relative h-96 w-full animate-in fade-in-0 zoom-in-95 duration-500">
           <Image
            src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601365/AboutUsImage_aes6yz.jpg"
            alt="Team working together"
            fill
            className="rounded-2xl object-cover shadow-2xl"
           />
        </div>
      </div>
    </SectionWrapper>
  );
}
