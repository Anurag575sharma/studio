import Image from "next/image";
import { SpotlightCard } from "@/components/branches/spotlight-card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Youtube, Instagram } from 'lucide-react';

export default function BranchesPage() {
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
                description="The official Filmmaking society of MANIT BHOPAL. We don't just capture moments; we craft narratives that resonate. In collaboration with INSPIRE MANIT, we push the boundaries of student cinema."
                socials={[
                  { href: 'https://youtube.com/@Rangmanch-NITBHOPAL', icon: Youtube, label: 'YouTube' },
                  { href: 'https://instagram.com/rangmanch_nitb/', icon: Instagram, label: 'Instagram' }
                ]}
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
                description="Avantikulam is a mission-driven project aimed at democratizing elite education. Providing free, high-quality resources for NTSE, Olympiad, and JEE/NEET aspirants from underprivileged backgrounds."
                socials={[
                  { href: 'https://youtube.com/@avantikulameducation5825', icon: Youtube, label: 'YouTube' },
                  { href: 'https://instagram.com/nitb_avantikulam/', icon: Instagram, label: 'Instagram' }
                ]}
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
