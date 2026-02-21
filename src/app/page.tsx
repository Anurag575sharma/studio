import { About } from '@/components/home/about';
import { CountdownBanner } from '@/components/home/countdown-banner';
import { Hero } from '@/components/home/hero';
import { Team } from '@/components/home/team';
import { Testimonials } from '@/components/home/testimonials';
import { UpcomingEvents } from '@/components/home/upcoming-events';

export default function Home() {
  return (
    <>
      <CountdownBanner />
      <Hero />
      <About />
      <UpcomingEvents />
      <Testimonials />
      <Team />
    </>
  );
}
