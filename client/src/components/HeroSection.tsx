import { HeroIllustration } from "./illustrations/HeroIllustration";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-headline">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connecting talent
                </span>
                <br />
                <span className="text-foreground">with opportunity</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-hero-tagline">
                for measurable growth
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl" data-testid="text-hero-description">
              Partner with Kaizen HR Consultants for expert human resources solutions
              that drive sustainable business success and empower your workforce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base"
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-2"
                onClick={() => scrollToSection("services")}
                data-testid="button-our-services"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-first md:order-last">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
