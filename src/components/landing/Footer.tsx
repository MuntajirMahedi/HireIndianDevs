export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-tight flex flex-col items-center justify-between gap-6 py-6 lg:flex-row lg:gap-4">
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-ink">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[9px] font-black text-white ring-1 ring-white/10" aria-hidden>
          HID
        </span>
        <span className="text-sm">HireIndianDevs</span>
      </div>
      
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-muted-foreground">
        <a href="#services" className="transition-colors hover:text-ink">Services</a>
        <a href="#pricing" className="transition-colors hover:text-ink">Pricing</a>
        <a href="#process" className="transition-colors hover:text-ink">Process</a>
        <a href="#technologies" className="transition-colors hover:text-ink">Technologies</a>
        <a href="#industries" className="transition-colors hover:text-ink">Industries</a>
        <a href="#faq" className="transition-colors hover:text-ink">FAQ</a>
        <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
      </nav>

      <div className="text-[11px] font-medium text-muted-foreground/80 whitespace-nowrap">
        © {new Date().getFullYear()} HireIndianDevs. All rights reserved.
      </div>
    </div>
  </footer>
);
