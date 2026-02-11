import React from 'react';
import { education } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <Section id="education" className="bg-card">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                <edu.icon className="h-6 w-6" />
              </span>
              <div>
                <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.years} | {edu.score}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
