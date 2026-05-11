import { 
  Banknote, 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  PanelsTopLeft, 
  ShoppingBag,
  Truck,
  Cpu,
  Home,
  Plane,
  Store,
  Timer,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const industries = [
  { 
    icon: Banknote, 
    name: "FinTech", 
    body: "Secure payment gateways, real-time dashboards, fraud detection, and banking API integrations.",
    tags: ["PCI-DSS", "Real-time", "Secure"]
  },
  { 
    icon: HeartPulse, 
    name: "HealthTech", 
    body: "Patient management, telemedicine scheduling, secure records, and privacy-aware workflows.",
    tags: ["HIPAA Ready", "Telemed", "EHR"]
  },
  { 
    icon: GraduationCap, 
    name: "EdTech", 
    body: "Learning management systems, live classes, student tracking, and interactive content.",
    tags: ["LMS", "Live Streaming", "Gamification"]
  },
  { 
    icon: ShoppingBag, 
    name: "eCommerce", 
    body: "High-performance stores, inventory, checkout, order tracking, and logistics sync.",
    tags: ["Headless", "High-Volume", "Global"]
  },
  { 
    icon: PanelsTopLeft, 
    name: "SaaS Platforms", 
    body: "Subscription platforms, analytics, user roles, integrations, and complex billing flows.",
    tags: ["Multi-tenant", "Scalable", "API-First"]
  },
  { 
    icon: Truck, 
    name: "Logistics", 
    body: "Fleet management, route optimization, real-time tracking, and supply chain automation.",
    tags: ["Real-time Tracking", "GIS", "IoT"]
  },
  { 
    icon: Cpu, 
    name: "AI & Automation", 
    body: "Custom AI agents, LLM integrations, predictive analytics, and workflow automation tools.",
    tags: ["Generative AI", "MLOps", "Agents"]
  },
  { 
    icon: Home, 
    name: "Real Estate", 
    body: "Property listings, virtual tours, lead management, and property management systems.",
    tags: ["IDX/MLS", "Virtual Tours", "CRM"]
  },
  { 
    icon: Plane, 
    name: "Travel & Booking", 
    body: "Booking engines, reservation systems, itinerary management, and travel API sync.",
    tags: ["GDS Integration", "Dynamic Pricing"]
  },
  { 
    icon: Store, 
    name: "Marketplaces", 
    body: "Multi-vendor platforms, bidding systems, review engines, and escrow payments.",
    tags: ["Vendor Portals", "Escrow", "Trust"]
  },
  { 
    icon: Timer, 
    name: "On-Demand", 
    body: "Delivery platforms, service matching, real-time tracking, and automated dispatching.",
    tags: ["Live Tracking", "Matching Algo"]
  },
  { 
    icon: Building2, 
    name: "Enterprise", 
    body: "Custom ERP, CRM, internal tools, and large-scale operational infrastructure.",
    tags: ["SSO", "Internal Tools", "Legacy Sync"]
  },
];

export const Industries = () => (
  <section id="industries" className="section-y border-b border-border bg-background relative overflow-hidden">
    {/* Subtle decorative background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-accent/[0.02] blur-[120px]" />
    </div>

    <ScrollReveal className="container-tight relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Industry Solutions
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
          Software tailored to your <span className="text-accent italic">industry's workflows</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We don't believe in one-size-fits-all. We adapt architecture, security, and UX to the unique needs and growth models of your specific market.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((item, i) => (
          <div 
            key={i} 
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink transition-colors group-hover:text-accent">{item.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground/80">{item.body}</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary/50 border border-border text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-[10px] font-bold text-accent/60 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="h-3 w-3" /> Built for Scale
                </span>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
        <div className="h-px w-24 bg-border/50" />
        <p className="text-sm font-medium text-muted-foreground italic">
          Don't see your industry? We specialize in custom solutions for unique business models.
        </p>
        <a href="#contact" className="text-sm font-bold text-accent hover:underline flex items-center gap-1">
          Discuss your project roadmap <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </ScrollReveal>
  </section>
);
