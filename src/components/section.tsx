'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id, children, className }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to animate once
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        // Trigger the animation when the element is 100px from the bottom of the viewport
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={cn(
        'w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8',
        'transition-all duration-700 ease-out',
        // Apply animation classes when in view
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        className
      )}
    >
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
