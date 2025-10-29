export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3" data-testid="footer-branding">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Kaizen HR Consultants</span>
          </div>

          <p className="text-sm text-muted-foreground" data-testid="text-footer-location">
            New York, NY | Professional HR Solutions
          </p>

          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Kaizen HR Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
