import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "WAPE transformed how we manage our construction sites. We went from scattered spreadsheets to a unified platform that gives us complete visibility over every project.",
    name: "Jean-Marc Dupont",
    role: "Director of Operations",
    company: "Batipro Construction",
  },
  {
    quote:
      "The quality management module alone saved us hundreds of hours in compliance reporting. WAPE is the ERP the construction industry has been waiting for.",
    name: "Sophie Lefèvre",
    role: "Quality Manager",
    company: "Groupe Structura",
  },
  {
    quote:
      "Since implementing WAPE, our cost overruns have dropped by 45% and project delivery times have improved significantly. It's a game-changer.",
    name: "Karim Benali",
    role: "CEO",
    company: "Atlas BTP Solutions",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            Trusted by Leading Construction Companies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card p-8 hover-lift flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-heading font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
