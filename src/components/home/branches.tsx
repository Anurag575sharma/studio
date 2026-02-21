import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Branches() {
  const branches = [
    {
      name: 'RangManch',
      description:
        'The official filmmaking society. We craft narratives that resonate and push the boundaries of student cinema.',
      logo: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601603/rangManchLogo_d12i1b.jpg',
    },
    {
      name: 'Avantikulam',
      description:
        'A mission-driven project aimed at democratizing elite education for underprivileged students.',
      logo: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601496/avantikulamLogo_hrywz9.jpg',
    },
  ];

  return (
    <SectionWrapper glowColor="accent">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our Specialized Wings
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore the creative and social initiatives that are part of INSPIRE
          MANIT.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {branches.map((branch, index) => (
          <div
            key={branch.name}
            className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Card className="h-full overflow-hidden text-center">
              <CardHeader>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted/50 p-4">
                  <Image
                    src={branch.logo}
                    alt={`${branch.name} Logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl text-accent">
                  {branch.name}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {branch.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/branches">Explore All Branches</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
