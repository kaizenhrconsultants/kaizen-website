import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TermsSection } from "@/components/TermsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <ServicesSection />
        <TermsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
