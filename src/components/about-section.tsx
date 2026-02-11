import React from 'react';
import { personalInfo } from '@/lib/data';
import { Section, SectionHeading } from './section';

const AboutSection = () => {
  return (
    <Section id="about" className="text-center">
      <SectionHeading>About Me</SectionHeading>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
        {personalInfo.introduction}
      </p>
    </Section>
  );
};

export default AboutSection;
