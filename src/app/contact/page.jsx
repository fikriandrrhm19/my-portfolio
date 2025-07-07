import ContactSection from '@/components/sections/contact';
import PageEndWave from '@/components/layouts/PageEndWave';

export const metadata = {
  title: 'Contact Me',
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <PageEndWave prevSectionBgClass="bg-pink-50 dark:bg-dark-accent-secondary/10" />
    </>
  );
}
