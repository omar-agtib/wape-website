import { HardHat, Layers, BarChart2, Cloud, Smartphone } from "lucide-react";

const advantages = [
  {
    icon: HardHat,
    title: "Built for Construction",
    desc: "Designed from the ground up for the unique needs of the BTP industry.",
  },
  {
    icon: Layers,
    title: "ERP + Quality + Monitoring",
    desc: "The only platform combining full ERP capabilities with quality management and site monitoring.",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboards & KPIs",
    desc: "Instant insights through customizable dashboards with live data feeds.",
  },
  {
    icon: Cloud,
    title: "Scalable & Cloud-based",
    desc: "Grow without limits — our cloud infrastructure scales with your business.",
  },
  {
    icon: Smartphone,
    title: "User-friendly Interface",
    desc: "Intuitive design that your teams will adopt quickly, on desktop and mobile.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-wape" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why WAPE
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              The Competitive Edge Your Projects Deserve
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              WAPE isn't just another ERP. It's a purpose-built platform that
              understands the complexities of construction management and
              delivers solutions that actually work on-site.
            </p>

            <div className="space-y-6">
              {advantages.map((a, i) => (
                <div key={a.title} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <a.icon className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="p-10 md:p-14 space-y-8">
                {[
                  {
                    label: "Project Delivery Speed",
                    value: "40%",
                    suffix: "faster",
                  },
                  {
                    label: "Cost Overrun Reduction",
                    value: "60%",
                    suffix: "less",
                  },
                  { label: "Team Productivity", value: "3x", suffix: "boost" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-primary-foreground/70 text-sm font-medium">
                      {stat.label}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-heading font-bold text-accent">
                        {stat.value}
                      </span>
                      <span className="text-primary-foreground/50 text-sm">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
