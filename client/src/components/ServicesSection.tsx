import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RecruitmentIcon,
  ConsultingIcon,
  ExecutiveSearchIcon,
  PayrollIcon,
  TrainingIcon,
  ComplianceIcon,
  PerformanceIcon,
  EmployeeRelationsIcon,
  BenefitsIcon,
  WorkforcePlanningIcon,
} from "./illustrations/ServiceIcons";

const services = [
  {
    id: "recruitment",
    title: "Recruitment & Staffing",
    description:
      "Connect with top talent through our comprehensive recruitment services, from sourcing to onboarding support.",
    Icon: RecruitmentIcon,
  },
  {
    id: "consulting",
    title: "HR Consulting",
    description:
      "Strategic guidance on organizational development, HR strategy, and process optimization for sustainable growth.",
    Icon: ConsultingIcon,
  },
  {
    id: "executive",
    title: "Executive Search",
    description:
      "Specialized recruitment for C-suite and senior leadership positions with rigorous vetting and assessment.",
    Icon: ExecutiveSearchIcon,
  },
  {
    id: "payroll",
    title: "Payroll Management",
    description:
      "Accurate, timely payroll processing with full compliance and integrated benefits administration.",
    Icon: PayrollIcon,
  },
  {
    id: "training",
    title: "Training & Development",
    description:
      "Customized learning programs to enhance skills, boost performance, and develop future leaders.",
    Icon: TrainingIcon,
  },
  {
    id: "compliance",
    title: "Compliance & Policy",
    description:
      "Navigate complex employment laws and regulations with expert policy development and audit support.",
    Icon: ComplianceIcon,
  },
  {
    id: "performance",
    title: "Performance Management",
    description:
      "Implement effective performance review systems, goal-setting frameworks, and productivity metrics.",
    Icon: PerformanceIcon,
  },
  {
    id: "relations",
    title: "Employee Relations",
    description:
      "Foster positive workplace culture through conflict resolution, engagement programs, and retention strategies.",
    Icon: EmployeeRelationsIcon,
  },
  {
    id: "benefits",
    title: "Benefits Administration",
    description:
      "Design and manage competitive benefits packages that attract and retain top talent.",
    Icon: BenefitsIcon,
  },
  {
    id: "workforce",
    title: "Workforce Planning",
    description:
      "Strategic planning for current and future workforce needs, including succession planning and analytics.",
    Icon: WorkforcePlanningIcon,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subheading">
            Comprehensive HR solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map(({ id, title, description, Icon }) => (
            <Card
              key={id}
              className="hover-elevate transition-all duration-200"
              data-testid={`card-service-${id}`}
            >
              <CardHeader className="space-y-4">
                <div data-testid={`icon-service-${id}`}>
                  <Icon className="w-16 h-16" />
                </div>
                <CardTitle className="text-xl md:text-2xl" data-testid={`text-service-title-${id}`}>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed" data-testid={`text-service-desc-${id}`}>
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
