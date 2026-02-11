import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn('w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out', className)}>
      {children}
    </section>
  );
};

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-bold font-headline text-center sm:text-4xl text-primary mb-12">
      {children}
    </h2>
  );
};
