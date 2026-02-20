import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    name: 'Innovation Hub',
    description: 'We encourage and facilitate innovative projects and ideas, providing resources and mentorship.',
  },
  {
    name: 'Skill Development',
    description: 'Through workshops and events, we help members acquire and master new technical and soft skills.',
  },
  {
    name: 'Collaborative Community',
    description: 'A vibrant community of thinkers, creators, and leaders working together to solve real-world problems.',
  },
];

export function About() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-last lg:order-first">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            INSPIRE MANIT is more than just a college society; it&apos;s a launchpad for future innovators and leaders. We believe in learning by doing, and we provide a platform for students to explore their passions, build amazing things, and grow both personally and professionally.
          </p>
          <dl className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex gap-4">
                <dt>
                  <CheckCircle className="h-8 w-8 text-primary" />
                </dt>
                <dd>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
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
