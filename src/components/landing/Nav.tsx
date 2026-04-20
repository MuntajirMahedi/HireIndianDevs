import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-ink/95 px-4 backdrop-blur-md shadow-2xl md:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo Section */}
          <a href="#top" className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-black text-ink shadow-sm" aria-hidden>
              HID
            </span>
            <span className="hidden text-sm sm:inline md:text-base">HireIndianDevs</span>
          </a>

          {/* Navigation Links - Absolutely Centered on Desktop */}
          <nav className="hidden items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-white/70 transition-all hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden h-9 rounded-full bg-white px-5 text-[11px] font-bold text-ink hover:bg-white/90 md:inline-flex">
              <a href="#contact" className="flex items-center gap-2">
                Hire Developers
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </a>
            </Button>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="mt-2 animate-in fade-in slide-in-from-top-2 overflow-hidden rounded-3xl border border-white/10 bg-ink/98 p-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition-all active:bg-white/10 active:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 border-t border-white/5 p-2">
              <Button asChild className="w-full rounded-2xl bg-white px-5 text-[11px] font-bold text-ink hover:bg-white/90">
                <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 py-6">
                  Hire Developers
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
