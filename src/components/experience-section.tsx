import React from 'react';
import { experience } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-card">
      <SectionHeading>Experience</SectionHeading>
      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
             <CardHeader className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 p-6 bg-muted/30">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <exp.icon className="h-6 w-6" />
                </span>
              </div>
              <div>
                <CardTitle className="font-headline text-2xl mb-1">{exp.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
