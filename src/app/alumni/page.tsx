import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import type { TAlumni } from '@/lib/definitions';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: 'Alumni',
  description: 'Meet the honorable and successful alumni of INSPIRE MANIT and read their testimonials.',
};

async function getAlumni(): Promise<TAlumni[]> {
  noStore();
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://inspiremanit.in';
    const res = await fetch(`${baseUrl}/api/alumni`, { cache: 'no-store' });
    if (!res.ok) {
      console.error('Failed to fetch alumni from API');
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch alumni:', error);
    return [];
  }
}

export default async function AlumniPage() {
  const alumni = await getAlumni();

  return (
    <SectionWrapper>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          The Hall of Heritage
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Meet the honorable alumni of our society.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {alumni.filter(person => person.image).map((person, index) => (
          <div
            key={person._id}
            className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Card className="flex h-full flex-col text-center">
              <CardContent className="flex flex-1 flex-col p-6">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                {person.role && person.company && (
                  <p className="text-sm text-primary">{person.role} @ {person.company}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  Batch of {person.year}
                  {person.branch && ` | ${person.branch.toUpperCase()}`}
                </p>
                {person.testimonial && (
                  <blockquote className="mt-4 flex-grow border-l-2 border-primary pl-4 text-left text-muted-foreground italic">
                    &ldquo;{person.testimonial}&rdquo;
                  </blockquote>
                )}
                <div className="mt-4 flex justify-center">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
