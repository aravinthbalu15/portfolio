import React from 'react';
import Link from 'next/link';
import { contact, footer } from '@/lib/data';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-card">
      <Separator />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-lg font-semibold text-muted-foreground md:text-left">
            {footer.tagline}
          </p>
          <div className="flex items-center gap-2">
            {Object.values(contact).map((item) => (
              <Button asChild key={item.href} variant="ghost" size="icon">
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.value}>
                  <item.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
