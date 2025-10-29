export function TermsSection() {
  return (
    <section id="terms" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-terms-heading">
            Terms & Conditions
          </h2>
        </div>

        <div className="space-y-8 text-foreground/80">
          <div className="space-y-3" data-testid="term-services">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-services-title">1. Services Agreement</h3>
            <p className="leading-relaxed" data-testid="text-term-services-content">
              Kaizen HR Consultants provides professional human resources consulting services
              to businesses. All services are subject to a formal agreement outlining scope,
              deliverables, timelines, and compensation.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-confidentiality">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-confidentiality-title">2. Confidentiality</h3>
            <p className="leading-relaxed" data-testid="text-term-confidentiality-content">
              We maintain strict confidentiality regarding all client information, employee
              data, and business operations. Our consultants adhere to professional standards
              and execute non-disclosure agreements as required.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-compliance">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-compliance-title">3. Compliance</h3>
            <p className="leading-relaxed" data-testid="text-term-compliance-content">
              All services are provided in accordance with applicable federal, state, and local
              employment laws and regulations. Clients remain responsible for final employment
              decisions and legal compliance within their organizations.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-payment">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-payment-title">4. Payment Terms</h3>
            <p className="leading-relaxed" data-testid="text-term-payment-content">
              Payment terms are specified in individual service agreements. Standard terms
              require payment within 30 days of invoice. Late payments may incur additional
              fees as outlined in the service contract.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-liability">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-liability-title">5. Limitation of Liability</h3>
            <p className="leading-relaxed" data-testid="text-term-liability-content">
              Kaizen HR Consultants provides advisory services based on industry best practices
              and professional expertise. Final hiring and employment decisions rest with the
              client organization. We are not liable for employment outcomes or personnel decisions.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-ip">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-ip-title">6. Intellectual Property</h3>
            <p className="leading-relaxed" data-testid="text-term-ip-content">
              All methodologies, frameworks, and materials developed by Kaizen HR Consultants
              remain our intellectual property. Client-specific deliverables are licensed for
              the client's internal use as specified in the service agreement.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-termination">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-termination-title">7. Termination</h3>
            <p className="leading-relaxed" data-testid="text-term-termination-content">
              Either party may terminate services with written notice as specified in the
              service agreement. Clients are responsible for payment of all services rendered
              through the termination date.
            </p>
          </div>

          <div className="space-y-3" data-testid="term-modifications">
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-term-modifications-title">8. Modifications</h3>
            <p className="leading-relaxed" data-testid="text-term-modifications-content">
              Kaizen HR Consultants reserves the right to modify these terms and conditions
              at any time. Clients will be notified of significant changes. Continued use of
              our services constitutes acceptance of updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
