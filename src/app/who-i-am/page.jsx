import WhoIAmHeroSection from '@/components/sections/who-i-am/WhoIAmHeroSection';
import EducationSection from '@/components/sections/who-i-am/EducationSection';
import WhatIDoSection from '@/components/sections/who-i-am/WhatIDoSection';
import ConnectWithMeSection from '@/components/sections/who-i-am/ConnectWithMeSection';
import PageEndWave from '@/components/layouts/PageEndWave';

export const metadata = {
  title: 'About Me',
};

export default function WhoIAmPage() {
  return (
    <>
      <WhoIAmHeroSection />
      <EducationSection />
      <WhatIDoSection />
      <ConnectWithMeSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}
