import { About } from '@/components/home/about';
import { CountdownBanner } from '@/components/home/countdown-banner';
import { Hero } from '@/components/home/hero';
import { Branches } from '@/components/home/branches';
import { Testimonials } from '@/components/home/testimonials';
import { UpcomingEvents } from '@/components/home/upcoming-events';
import { FacultyCoordinator } from '@/components/home/faculty-coordinator';

export default function Home() {
  return (
    <>
      <CountdownBanner />
      <Hero />
      <About />
      <FacultyCoordinator />
      <UpcomingEvents />
      <Testimonials />
      <Branches />
    </>
  );
}
