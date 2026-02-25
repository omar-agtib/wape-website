import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Ready to Digitize Your Construction Projects?
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
          Join hundreds of construction companies already transforming their
          operations with WAPE. Start your digital journey today.
        </p>
        <Button variant="hero" size="xl">
          Book a Demo
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
