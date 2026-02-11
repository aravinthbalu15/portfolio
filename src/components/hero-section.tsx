import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Eye, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center text-center">
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="container relative z-10 mx-auto max-w-4xl px-4 animate-in fade-in zoom-in-95 duration-700">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 font-headline text-xl font-medium text-foreground sm:text-2xl md:text-3xl">
          {personalInfo.title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {personalInfo.introduction.split('.').slice(0, 1).join('.') + '.'}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#projects">
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={personalInfo.resume} download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
