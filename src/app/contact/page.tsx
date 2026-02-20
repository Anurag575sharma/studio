import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Join Our Team
        </h1>
        <p className="mx-auto mt-4 text-lg text-muted-foreground">
          Want to be a part of INSPIRE MANIT? We are looking for passionate individuals to join our core team.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 text-center">
        <p className="max-w-md text-muted-foreground">
          If you are interested in joining the core team, please fill out the registration form by clicking the button below.
        </p>
        <Button asChild size="lg">
          <Link
            href="https://forms.gle/WBFQYs6nE1QKo1TE7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for Core Team
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
