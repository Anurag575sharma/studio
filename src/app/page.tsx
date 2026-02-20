import { About } from '@/components/home/about';
import { Hero } from '@/components/home/hero';
import { Team } from '@/components/home/team';
import { Testimonials } from '@/components/home/testimonials';
import { UpcomingEvents } from '@/components/home/upcoming-events';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <UpcomingEvents />
      <Testimonials />
      <Team />
    </>
  );
}
