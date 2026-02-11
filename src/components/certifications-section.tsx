import React from 'react';
import { certifications } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CertificationsSection = () => {
  return (
    <Section id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="max-w-2xl mx-auto">
        <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
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
    </Section>
  );
};

export default CertificationsSection;
