import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-about-heading">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subheading">
            Driven by excellence and committed to transforming human resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Vision Card */}
          <Card className="hover-elevate transition-all duration-200" data-testid="card-vision">
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl" data-testid="text-vision-title">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed" data-testid="text-vision-content">
                To be the most trusted HR partner, recognized for delivering
                innovative solutions that create lasting value and foster
                exceptional workplace cultures across industries.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="hover-elevate transition-all duration-200" data-testid="card-mission">
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl" data-testid="text-mission-title">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed" data-testid="text-mission-content">
                We empower organizations through strategic HR consulting,
                connecting exceptional talent with meaningful opportunities
                while ensuring compliance, efficiency, and sustainable growth
                for businesses of all sizes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
