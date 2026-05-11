export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-tight flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
      <div className="flex items-center gap-2 font-bold tracking-tight text-ink">
        <span className="inline-block h-5 w-5 rounded-sm bg-primary" aria-hidden />
        HireIndianDevs
      </div>
      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-ink">Services</a>
        <a href="#pricing" className="hover:text-ink">Pricing</a>
        <a href="#process" className="hover:text-ink">Process</a>
        <a href="#technologies" className="hover:text-ink">Technologies</a>
        <a href="#industries" className="hover:text-ink">Industries</a>
        <a href="#faq" className="hover:text-ink">FAQ</a>
        <a href="#contact" className="hover:text-ink">Contact</a>
      </nav>
      <p className="text-xs text-muted-foreground">Copyright {new Date().getFullYear()} HireIndianDevelopers. All rights reserved.</p>
    </div>
  </footer>
);
