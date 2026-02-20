import Image from "next/image";
import { SpotlightCard } from "@/components/branches/spotlight-card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Youtube, Instagram, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Branches',
  description: 'Explore the specialized wings of INSPIRE MANIT: RangManch for filmmaking and Avantikulam for democratizing education.',
};

export default function BranchesPage() {
  const rangManchDetails = (
    <div>
      <p className="text-sm font-bold text-accent">Visionaries Behind the Lens</p>
      <p className="mt-4 text-muted-foreground">
        The official Filmmaking society of MANIT BHOPAL. We don't just capture moments; we craft narratives that resonate. In collaboration with INSPIRE MANIT, we push the boundaries of student cinema.
      </p>
      <div className="mt-6 space-y-3">
        <a href="https://youtube.com/@Rangmanch-NITBHOPAL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
          <Youtube className="h-5 w-5" />
          <span>Watch our latest short films and documentaries.</span>
          <ExternalLink className="h-4 w-4 ml-auto" />
        </a>
        <a href="https://instagram.com/rangmanch_nitb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
          <Instagram className="h-5 w-5" />
          <span>Behind the scenes and cinematic updates.</span>
          <ExternalLink className="h-4 w-4 ml-auto" />
        </a>
      </div>
    </div>
  );

  const avantikulamDetails = (
    <div>
      <p className="text-sm font-bold text-accent">Igniting Potential</p>
      <p className="mt-4 text-muted-foreground">
        Avantikulam is a mission-driven project aimed at democratizing elite education. We provide free, high-quality resources for NTSE, Olympiad, and JEE/NEET aspirants from underprivileged backgrounds.
      </p>
      <div className="mt-6 space-y-3">
        <a href="https://youtube.com/@avantikulameducation5825" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
          <Youtube className="h-5 w-5" />
          <span>Access our free educational lectures.</span>
          <ExternalLink className="h-4 w-4 ml-auto" />
        </a>
        <a href="https://www.instagram.com/_nitb_avantikulam_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
          <Instagram className="h-5 w-5" />
          <span>Stay updated with our latest workshops.</span>
          <ExternalLink className="h-4 w-4 ml-auto" />
        </a>
      </div>
    </div>
  );
  
  return (
    <SectionWrapper>
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Branches
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Specialized wings of INSPIRE MANIT focusing on niche domains of creativity and social impact.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
             <SpotlightCard
                title="RangManch"
                description="The official Filmmaking society of MANIT BHOPAL. We don't just capture moments; we craft narratives that resonate."
                socials={[
                  { href: 'https://youtube.com/@Rangmanch-NITBHOPAL', iconName: 'youtube', label: 'YouTube' },
                  { href: 'https://instagram.com/rangmanch_nitb/', iconName: 'instagram', label: 'Instagram' }
                ]}
                detailsContent={rangManchDetails}
             >
                <Image
                    src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601603/rangManchLogo_d12i1b.jpg"
                    alt="RangManch Logo"
                    width={800}
                    height={600}
                    className="h-full w-full object-contain p-8"
                />
             </SpotlightCard>

             <SpotlightCard
                title="Avantikulam"
                description="A mission-driven project aimed at democratizing elite education for underprivileged students."
                socials={[
                  { href: 'https://youtube.com/@avantikulameducation5825', iconName: 'youtube', label: 'YouTube' },
                  { href: 'https://www.instagram.com/_nitb_avantikulam_/', iconName: 'instagram', label: 'Instagram' }
                ]}
                detailsContent={avantikulamDetails}
             >
                 <Image
                    src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601496/avantikulamLogo_hrywz9.jpg"
                    alt="Avantikulam Logo"
                    width={800}
                    height={600}
                    className="h-full w-full object-contain p-8"
                />
             </SpotlightCard>
        </div>
    </SectionWrapper>
  )
}
