import { Monitor, HeadphonesIcon, Settings } from "lucide-react";

const pillars = [
  {
    icon: Monitor,
    title: "Digital Platform",
    desc: "A centralized, cloud-based platform that connects every aspect of your construction operations — from planning to delivery.",
  },
  {
    icon: HeadphonesIcon,
    title: "Continuous Support & Training",
    desc: "Dedicated onboarding, training programs, and ongoing support to ensure your teams get the most out of WAPE.",
  },
  {
    icon: Settings,
    title: "Process Optimization Expertise",
    desc: "Our consultants work with you to identify bottlenecks and implement best practices tailored to your operations.",
  },
];

const IntegratedApproachSection = () => {
  return (
    <section id="approach" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            A Unique Integrated Approach
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            WAPE is not just software — it's a complete digital transformation
            solution that combines technology, expertise, and support to drive
            lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="text-center glass-card p-10 hover-lift"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                <p.icon className="text-primary-foreground" size={30} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproachSection;
