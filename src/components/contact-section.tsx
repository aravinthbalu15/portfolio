import React from 'react';
import { contact } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionHeading>Get in Touch</SectionHeading>
      <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {Object.values(contact).map((item) => (
           <Button asChild key={item.value} size="lg" variant="outline" className="h-auto py-3 px-6">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <item.icon className="h-6 w-6" />
              <span className="text-lg">{item.value}</span>
            </a>
          </Button>
        ))}
      </div>
    </Section>
  );
};

export default ContactSection;
