import React from 'react';
import { skills } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <skillCategory.icon className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {skillCategory.list.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
