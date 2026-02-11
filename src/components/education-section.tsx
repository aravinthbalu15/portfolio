import React from 'react';
import { education, achievements, certifications } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const EducationSection = () => {
  return (
    <Section id="education" className="bg-card">
      <SectionHeading>Education & Certifications</SectionHeading>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Education & Achievements Column */}
        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <education.icon className="h-5 w-5" />
              </span>
              <div>
                <CardTitle className="font-headline text-xl">{education.degree}</CardTitle>
                <p className="text-muted-foreground">{education.college}</p>
                <p className="text-sm text-muted-foreground">{education.years} | {education.cgpa}</p>
              </div>
            </CardHeader>
          </Card>
          
          <div className="space-y-4">
             <h3 className="text-2xl font-bold font-headline text-primary">Achievements</h3>
            {achievements.map((item, index) => (
              <Card key={index} className="flex items-center p-4">
                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="font-medium text-foreground">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-headline text-primary">Certifications</h3>
          <Card>
            <CardContent className="p-6 space-y-4">
              {certifications.map((cert, index) => (
                <React.Fragment key={cert.title}>
                  <div className="flex items-center gap-4">
                    <span className="text-primary">
                      <cert.icon className="h-5 w-5" />
                    </span>
                    <p className="font-medium text-foreground">{cert.title}</p>
                  </div>
                  {index < certifications.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
