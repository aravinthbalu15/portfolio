import React from 'react';
import { achievements } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card } from '@/components/ui/card';

const AchievementsSection = () => {
  return (
    <Section id="achievements" className="bg-card">
      <SectionHeading>Achievements</SectionHeading>
      <div className="max-w-2xl mx-auto space-y-4">
        {achievements.map((item, index) => (
          <Card key={index} className="flex items-center p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">
              <item.icon className="h-5 w-5" />
            </span>
            <p className="font-medium text-foreground">{item.title}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default AchievementsSection;
