
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import type { TMember } from '@/lib/definitions';

async function getMembers(): Promise<TMember[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/members`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('Failed to fetch members');
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch members:', error);
    return [];
  }
}

export async function Team() {
  const allMembers: TMember[] = await getMembers();
  const teamMembers = allMembers.filter((member) => member.isCore).slice(0, 3);

  return (
    <SectionWrapper glowColor="accent">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Meet the Core Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The dedicated students working behind the scenes to bring you the best events and technical resources at MANIT.
        </p>
      </div>

      {teamMembers.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
             <div
                key={member._id}
                className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500 h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
              <Card className="group overflow-hidden text-center h-full flex flex-col">
                <CardContent className="p-0 flex flex-col flex-1">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="mt-1 text-primary">{member.role}</p>
                    </div>
                    <div className="mt-auto pt-4 flex justify-center gap-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
         <p className="mt-12 text-center text-muted-foreground">Core team members will be displayed here soon.</p>
      )}
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/members">View All Members</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
