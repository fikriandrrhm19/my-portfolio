import CertificatesSection from '@/components/sections/certificates';
import PageEndWave from '@/components/layouts/PageEndWave';

export const metadata = {
  title: 'Certificates',
};

export default function CertificatesPage() {
  return (
    <>
      <CertificatesSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}