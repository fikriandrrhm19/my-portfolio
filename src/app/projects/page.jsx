import ProjectsSection from '@/components/sections/projects';
import PageEndWave from '@/components/layouts/PageEndWave';

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}