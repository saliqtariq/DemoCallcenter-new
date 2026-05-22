import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ClientLogosSection } from '@/components/ClientLogosSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { BlogSection } from '@/components/BlogSection';
import { SiteFooter } from '@/components/SiteFooter';

export default function Page() {
  return (
    <div className="font-sans antialiased bg-white min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientLogosSection />
      <CaseStudiesSection />
      <BlogSection />
      <SiteFooter />
    </div>
  );
}
