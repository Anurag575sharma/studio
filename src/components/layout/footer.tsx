import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    {
      href: '#',
      icon: Twitter,
      label: 'Twitter',
    },
    {
      href: '#',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: '#',
      icon: Linkedin,
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 text-center md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12s5.148 11.5 11.5 11.5S23.5 18.352 23.5 12 18.352.5 12 .5zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
              <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
            </svg>
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
