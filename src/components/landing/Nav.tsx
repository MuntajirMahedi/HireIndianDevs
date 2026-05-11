import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { handleNavClick } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 transition-all duration-500 ease-out ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div 
        className={`relative overflow-hidden rounded-full border transition-all duration-500 ${
          scrolled 
            ? "border-white/10 bg-ink/90 shadow-2xl backdrop-blur-xl py-2" 
            : "border-border bg-background/50 py-3 backdrop-blur-sm shadow-sm"
        } px-4 md:px-8`}
      >
        <div className="flex h-11 items-center justify-between gap-4">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-bold tracking-tight">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full font-black shadow-sm transition-colors ${
              scrolled ? "bg-white text-ink" : "bg-ink text-white"
            }`}>
              H
            </div>
            <span className={`hidden text-sm font-black uppercase tracking-tight sm:inline ${
              scrolled ? "text-white" : "text-ink"
            }`}>HireIndianDevs</span>
          </a>

          <nav className="hidden items-center gap-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={(e) => handleNavClick(e, l.href)}
                className={`text-[12px] font-bold uppercase tracking-widest transition-all hover:scale-105 ${
                  scrolled ? "text-white/70 hover:text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className={`hidden h-10 rounded-full px-6 text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 md:inline-flex ${
              scrolled 
                ? "bg-white text-ink hover:bg-white/90" 
                : "bg-ink text-white hover:bg-ink/90"
            }`}>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-2"
              >
                Start Hiring
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>

            <button
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled ? "bg-white/10 text-white hover:bg-white/20" : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-3 animate-in fade-in slide-in-from-top-4 overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-3 backdrop-blur-2xl lg:hidden shadow-2xl">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  handleNavClick(e, l.href);
                }}
                className="rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70 transition-all active:bg-white/10 active:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 border-t border-white/5 p-3">
              <Button asChild className="w-full h-12 rounded-2xl bg-white text-[11px] font-black uppercase tracking-widest text-ink hover:bg-white/90">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(e, "#contact");
                  }} 
                  className="flex items-center justify-center gap-2"
                >
                  Start Hiring Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
