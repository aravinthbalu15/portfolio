import React from 'react';
import { hackathons } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HackathonsSection = () => {
  return (
    <Section id="hackathons" className="bg-card">
      <SectionHeading>Hackathons</SectionHeading>
      <div className="max-w-3xl mx-auto space-y-8">
        {hackathons.map((hackathon, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
             <CardHeader className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 p-6 bg-muted/30">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <hackathon.icon className="h-6 w-6" />
                </span>
              </div>
              <div>
                <CardTitle className="font-headline text-2xl mb-1">{hackathon.title}</CardTitle>
                 <p className="text-sm text-muted-foreground">{hackathon.date}</p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{hackathon.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HackathonsSection;
