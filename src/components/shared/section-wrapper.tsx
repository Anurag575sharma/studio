import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent';
};

export function SectionWrapper({
  children,
  className,
  glowColor = 'primary',
}: SectionWrapperProps) {
  return (
    <section className={cn('relative overflow-hidden py-20 sm:py-28', className)}>
      <div
        className={cn(
          'absolute inset-0 -z-10',
          glowColor === 'primary' &&
            'bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1)_0%,transparent_40%)]',
          glowColor === 'accent' &&
            'bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.08)_0%,transparent_40%)]'
        )}
      ></div>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
