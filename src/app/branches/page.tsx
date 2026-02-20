import Image from "next/image";
import { SpotlightCard } from "@/components/branches/spotlight-card";
import { SectionWrapper } from "@/components/shared/section-wrapper";

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
                description="The filmmaking and creative arts wing. RangManch is where stories come to life through film, photography, and visual arts. We handle all creative aspects of INSPIRE's events."
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
                description="Our social initiative dedicated to education for all. Avantikulam volunteers work to bridge educational gaps in the community, teaching and mentoring underprivileged students."
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
