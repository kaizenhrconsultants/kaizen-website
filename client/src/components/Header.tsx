import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-lg px-3 py-2 -ml-3"
            data-testid="link-home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Kaizen HR</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              data-testid="link-services"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="link-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("terms")}
              data-testid="link-terms"
            >
              Terms
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact-nav"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("services")}
              data-testid="link-services-mobile"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
              data-testid="link-about-mobile"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("terms")}
              data-testid="link-terms-mobile"
            >
              Terms
            </Button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact-mobile"
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
