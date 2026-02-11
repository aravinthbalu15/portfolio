import React from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Section, SectionHeading } from './section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 p-4 flex justify-end gap-2">
              <Button asChild variant="ghost" size="sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
