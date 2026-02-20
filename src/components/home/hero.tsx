import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#00bcd4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <div className="mx-auto flex justify-center">
            <div className="relative animate-in fade-in-0 zoom-in-50 delay-300 duration-1000">
              <Image
                src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg"
                alt="Inspire MANIT Logo"
                width={96}
                height={96}
                className="h-24 w-24"
              />
            </div>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Aspire To Inspire Until You Expire
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            The official Society of MANIT Bhopal. Defining Culture, One Story at a Time. We bridge the gap between technical excellence and artistic expression.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/events">
                Explore Events <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
