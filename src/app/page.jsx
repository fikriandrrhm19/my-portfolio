import HeroSection from '@/components/sections/home/HeroSection';
import AboutMeSection from '@/components/sections/home/AboutMeSection';
import SkillsSection from '@/components/sections/home/SkillsSection';
import ExperienceSection from '@/components/sections/home/ExperienceSection';
import ContactCTASection from '@/components/sections/home/ContactCTASection';
import PageEndWave from '@/components/layouts/PageEndWave';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-light-bg-primary dark:bg-dark-bg-primary">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactCTASection />
      <ExperienceSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </div>
  );
}