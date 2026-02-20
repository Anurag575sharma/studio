import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import type { TMember } from '@/lib/definitions';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

async function getMembers(): Promise<TMember[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/members`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch members');
  }
  return res.json();
}

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <SectionWrapper>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The talented individuals who make INSPIRE MANIT a hub of creativity and innovation.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.filter(member => member.imageUrl).map((member, index) => (
          <div
            key={member._id}
            className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Card className="group overflow-hidden text-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative h-72 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-primary">{member.role}</p>
                   <div className="mt-4 flex justify-center gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                     <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
