'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean) as HTMLElement[];
      
      let current = 'home';
      const offset = 100;

      for (const section of sections) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - offset) {
              current = section.id;
          }
      }
      
      if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight - 2) { 
        const lastSection = navLinks[navLinks.length - 1];
        if (lastSection) {
            current = lastSection.href.substring(1);
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label:string }) => {
    const isActive = activeSection === href.substring(1);
    return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={cn(
        'group relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300',
        isActive
          ? 'text-primary'
          : 'text-foreground hover:text-primary'
      )}
    >
      {label}
      <span
        className={cn(
          'absolute bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300',
          isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
        )}
      />
    </Link>
  )};

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2 font-bold font-headline text-lg text-primary">
          <Code2 className="h-6 w-6" />
          <span>{personalInfo.name}</span>
        </Link>
        <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => <NavLink key={link.href} {...link} />)}
            </nav>
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 py-8">
                    <Link href="#home" className="flex items-center gap-2 font-bold font-headline text-lg text-primary mb-4" onClick={() => setOpen(false)}>
                      <Code2 className="h-6 w-6" />
                      <span>{personalInfo.name}</span>
                    </Link>
                    {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
