'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/members', label: 'Members' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/branches', label: 'Branches' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Register' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className = '' }: { href: string; label: string; className?: string }) => (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        pathname === href && 'text-primary',
        className
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
      {pathname === href && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"></span>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg"
            alt="Inspire MANIT Logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="hidden font-bold sm:inline-block text-lg">INSPIRE MANIT</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2">
                   <Image
                      src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg"
                      alt="Inspire MANIT Logo"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  <span className="font-bold text-lg">INSPIRE MANIT</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-lg" />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
