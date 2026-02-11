'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Eye, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const HeroSection = () => {
  const roles = useMemo(() => personalInfo.title.split(' | '), []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 120;
    const deletingSpeed = 60;
    const pauseDuration = 2000;

    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(t => t.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    } else { // is typing
      const currentRole = roles[roleIndex];
      if (text.length < currentRole.length) {
        timer = setTimeout(() => {
          setText(t => currentRole.slice(0, t.length + 1));
        }, typingSpeed);
      } else {
        // Pause after typing is complete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center text-center">
      <Image
        src="https://images.unsplash.com/photo-1550439062-609e1531270e"
        alt="Developer desk with code on screen"
        fill
        priority
        className="object-cover"
        data-ai-hint="coding desk"
      />
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-grow text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="mt-4 font-headline text-xl font-medium text-foreground sm:text-2xl md:text-3xl min-h-[4rem] md:min-h-[2.25rem]">
              <span>{text}</span>
              <span className="animate-blink font-light text-muted-foreground">|</span>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
