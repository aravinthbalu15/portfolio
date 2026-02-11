import React from 'react';
import { personalInfo } from '@/lib/data';
import { Section, SectionHeading } from './section';

const AboutSection = () => {
  return (
    <Section id="about" className="bg-card">
      <SectionHeading>About Me</SectionHeading>
      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-muted-foreground">
        {personalInfo.introduction}
      </p>
    </Section>
  );
};

export default AboutSection;
