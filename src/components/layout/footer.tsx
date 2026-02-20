import { Linkedin, Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Footer() {
  const socialLinks = [
    {
      href: 'https://linkedin.com/company/inspiremanit/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://instagram.com/inspiremanit/',
      icon: Instagram,
      label: 'Instagram',
    },
    {
      href: 'https://youtube.com/@inspiremanit',
      icon: Youtube,
      label: 'YouTube',
    },
     {
      href: 'https://facebook.com/inspiremanit/',
      icon: Facebook,
      label: 'Facebook',
    },
     {
      href: 'mailto:inspiremanit@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 text-center md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg"
              alt="Inspire MANIT Logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            <span className="font-bold text-lg">INSPIRE MANIT</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Innovation. Skill. Performance. Inspiration.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button key={label} variant="ghost" size="icon" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-6 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} INSPIRE MANIT. All Rights Reserved.
      </div>
    </footer>
  );
}
