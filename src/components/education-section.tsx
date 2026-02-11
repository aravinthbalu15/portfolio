import React from 'react';
import { education } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <Section id="education" className="bg-card">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-xl mx-auto">
        <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <education.icon className="h-6 w-6" />
            </span>
            <div>
              <CardTitle className="font-headline text-xl">{education.degree}</CardTitle>
              <p className="text-muted-foreground">{education.college}</p>
              <p className="text-sm text-muted-foreground">{education.years} | {education.cgpa}</p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </Section>
  );
};

export default EducationSection;
