import { Quote, Star, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote: "The developers integrated quickly with our team and helped us launch our MVP 3 weeks faster than planned. Their technical depth in React and Node is exceptional.",
    name: "Alex Rivera",
    role: "CTO @ TechFlow",
    avatar: "AR",
    rating: 5,
    tag: "MVP Launch"
  },
  {
    quote: "Clear communication and strong technical execution. We've scaled our remote team from 2 to 10 engineers in just two months. A truly reliable engineering partner.",
    name: "Sarah Chen",
    role: "Product Lead @ ScaleUp",
    avatar: "SC",
    rating: 5,
    tag: "Team Scaling"
  },
  {
    quote: "A reliable development partner for scaling client projects without the overhead of in-house hiring. They understand architecture and long-term maintenance perfectly.",
    name: "James Wilson",
    role: "Director @ DigitalCraft",
    avatar: "JW",
    rating: 5,
    tag: "Agency Partner"
  },
];

const metrics = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Avg. Hiring Time", value: "24-72h" },
  { label: "Expert Engineers", value: "100+" },
];

export const Testimonials = () => (
  <section className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Decorative background glows */}
    <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
    <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

    <ScrollReveal className="container-tight relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Client Confidence
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Built for teams that need <span className="text-accent italic">reliable delivery</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Startups, agencies, and businesses choose us when they need dependable development support without inflated costs or hiring delays.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <div 
            key={i} 
            className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-sm ring-1 ring-accent/20">
                {item.avatar}
              </div>
              <div className="flex gap-0.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <Quote className="absolute right-8 top-8 h-8 w-8 text-accent/5 transition-colors group-hover:text-accent/10" />
            
            <blockquote className="relative z-10 text-base font-medium leading-relaxed text-ink">
              "{item.quote}"
            </blockquote>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div>
                <div className="text-sm font-bold text-ink">{item.name}</div>
                <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">{item.role}</div>
              </div>
              <div className="px-2 py-0.5 rounded-md bg-accent/5 border border-accent/10 text-[10px] font-bold text-accent">
                {item.tag}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust metrics footer */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-ink mb-1">{m.value}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-accent" />
                {m.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-30 grayscale transition-all hover:opacity-70 hover:grayscale-0">
          <span className="text-sm font-bold tracking-widest uppercase">Trusted by Startups</span>
          <span className="h-1.5 w-1.5 rounded-full bg-border hidden md:block" />
          <span className="text-sm font-bold tracking-widest uppercase">Scaleup Agencies</span>
          <span className="h-1.5 w-1.5 rounded-full bg-border hidden md:block" />
          <span className="text-sm font-bold tracking-widest uppercase">Enterprise Teams</span>
        </div>
      </div>
    </ScrollReveal>
  </section>
);
