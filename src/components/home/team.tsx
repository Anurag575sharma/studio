import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import type { TMember } from '@/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';
import dbConnect from '@/lib/db-connect';
import Member from '@/lib/models/Member';

async function getCoreTeam(): Promise<TMember[]> {
  noStore();
  try {
    await dbConnect();
    const coreMembers = await Member.find({ isCore: true }).limit(3).lean();
    // The result from lean() will have ObjectId for _id, which is not serializable for client components props.
    // We can use JSON stringify and parse to convert it to a string.
    return JSON.parse(JSON.stringify(coreMembers));
  } catch (error) {
    console.error('Error fetching core team:', error);
    return [];
  }
}

export async function Team() {
  const teamMembers = await getCoreTeam();

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

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.filter(member => member.image).map((member, index) => (
           <div
              key={member._id}
              className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
            <Card className="group overflow-hidden text-center">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-primary">{member.role}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin size={20} />
                    </a>
                     <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/members">View All Members</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
