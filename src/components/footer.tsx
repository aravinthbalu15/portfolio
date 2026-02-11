import React from 'react';
import Link from 'next/link';
import { personalInfo, contact, footer } from '@/lib/data';
import { Separator } from './ui/separator';

const Footer = () => {
  const socialLinks = [contact.github, contact.linkedin, contact.email];

  return (
    <footer className="bg-card text-center">
      <Separator />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold font-headline text-primary">{personalInfo.name}</h3>
          <p className="text-lg text-muted-foreground">{personalInfo.title.split(' | ')[0]}</p>
          <p className="max-w-xl text-center text-muted-foreground mt-2">
            {footer.tagline}
          </p>
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((item, index) => (
              <React.Fragment key={item.href}>
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  aria-label={item.value}
                >
                  {item.value === personalInfo.email ? 'Email' : item.value}
                </a>
                {index < socialLinks.length - 1 && <span className="text-muted-foreground">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
