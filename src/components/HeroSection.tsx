import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium">
                🏗️ Built for Construction Industry
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight animate-fade-up-delay-1">
              Transform Construction Management with{" "}
              <span className="gradient-text">Smart Digital Control</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed animate-fade-up-delay-2">
              WAPE centralizes your projects, quality management, planning, and
              financial tracking into one powerful platform — giving you full
              visibility and control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play size={18} />
                Discover the Platform
              </Button>
            </div>

            {/* <div className="flex items-center gap-8 pt-4 animate-fade-up-delay-3">
              {[
                { value: "500+", label: "Projects Managed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "40%", label: "Time Saved" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-heading font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-foreground/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative animate-fade-up-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src={dashboardMockup}
                alt="WAPE ERP Dashboard showing project tracking, KPIs, and site progress monitoring"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
