import { SectionWrapper } from "@/components/shared/section-wrapper";
import type { TGalleryImage } from "@/lib/definitions";
import Image from "next/image";

async function getImages(): Promise<TGalleryImage[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/gallery`, { cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function GalleryPage() {
  const images = await getImages();
  
  return (
    <SectionWrapper>
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A glimpse into our events, workshops, and team activities.
            </p>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8">
            {images.filter(image => image.url).map((image, index) => (
                <div key={image._id} className="group relative overflow-hidden rounded-lg break-inside-avoid shadow-lg animate-in fade-in-0 zoom-in-95 duration-500" style={{ animationDelay: `${index * 50}ms` }}>
                    <Image
                        src={image.url}
                        alt={image.title}
                        width={600}
                        height={800}
                        className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
  )
}
