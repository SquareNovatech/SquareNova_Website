import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TechnologiesSection from '../components/home/TechnologiesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <IndustriesSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}
