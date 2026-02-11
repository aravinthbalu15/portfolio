import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import EducationSection from '@/components/education-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import HackathonsSection from '@/components/hackathons-section';
import CertificationsSection from '@/components/certifications-section';
import AchievementsSection from '@/components/achievements-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import BackToTopButton from '@/components/back-to-top-button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
