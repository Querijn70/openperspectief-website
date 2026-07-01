import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import RecognizableSection from "@/components/home/RecognizableSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientsSection from "@/components/home/ClientsSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <RecognizableSection />
      <ServicesSection />
      <ClientsSection />
      <SustainabilitySection />
      <ContactSection />
    </>
  );
}
