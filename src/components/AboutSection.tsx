import { TrendingUp, Eye, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Process Optimization",
    desc: "Streamline workflows and eliminate inefficiencies across every phase of construction.",
  },
  {
    icon: Eye,
    title: "Real-time Visibility",
    desc: "Monitor project progress, resources, and budgets with live dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    desc: "Ensure regulatory compliance and maintain the highest quality standards.",
  },
  {
    icon: BarChart3,
    title: "Data-driven Decisions",
    desc: "Leverage powerful analytics to make smarter, faster decisions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About WAPE
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            Integrated Digital Transformation for Construction
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            WAPE delivers a comprehensive ERP solution purpose-built for the BTP
            industry, unifying project management, financial oversight, and
            quality control into a single, intelligent platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-6 hover-lift text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
