'use client';
import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type SpotlightCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  socials?: { href: string; icon: React.ElementType; label: string }[];
};

export function SpotlightCard({
  title,
  description,
  children,
  className,
  socials,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Card
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-accent/20',
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(var(--accent) / 0.15), transparent 40%)`,
        }}
      />
      <CardHeader>
        <CardTitle className="text-2xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="h-48 w-full overflow-hidden rounded-md">
            {children}
        </div>
        <div className="flex items-center justify-between">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Learn More</Button>
          {socials && socials.length > 0 && (
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                    <span className="sr-only">{label}</span>
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
