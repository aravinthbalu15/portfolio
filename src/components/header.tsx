'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(s => s);
      const homeSection = document.getElementById('home');
      
      let current = 'home';
      if (homeSection && window.scrollY < homeSection.offsetHeight) {
        current = 'home';
      } else {
        [...sections].reverse().forEach(section => {
          if (section && window.scrollY >= section.offsetTop - 100) {
            current = section.id;
          }
        });
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Button asChild variant="ghost" className={cn(
        "transition-colors duration-300",
        activeSection === href.substring(1) ? 'text-accent' : 'text-foreground hover:text-primary'
      )}
      onClick={() => setOpen(false)}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );

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
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
        </nav>
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
    </header>
  );
};

export default Header;
