import {
  CalendarDays,
  DollarSign,
  ClipboardCheck,
  FileText,
  Activity,
  Wrench,
} from "lucide-react";

const modules = [
  {
    icon: CalendarDays,
    title: "Project Planning & Scheduling",
    desc: "Create detailed project timelines, assign tasks, and track milestones with Gantt charts and real-time progress updates.",
  },
  {
    icon: DollarSign,
    title: "Budget & Cost Control",
    desc: "Monitor budgets in real-time, track expenses by project phase, and generate financial forecasts to prevent cost overruns.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & Compliance Management",
    desc: "Automate quality inspections, manage checklists, and ensure compliance with industry standards and regulations.",
  },
  {
    icon: FileText,
    title: "Document & Plan Tracking",
    desc: "Centralize all project documents, blueprints, and revisions with version control and instant team access.",
  },
  {
    icon: Activity,
    title: "Site Progress Monitoring",
    desc: "Track on-site activities with photo logs, progress reports, and GPS-enabled monitoring for complete visibility.",
  },
  {
    icon: Wrench,
    title: "Resource & Equipment Management",
    desc: "Optimize allocation of personnel, materials, and equipment across multiple sites to reduce waste and downtime.",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Core Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            Everything You Need, in One Platform
          </h2>
          <p className="text-muted-foreground text-lg">
            Six powerful modules working together to deliver complete
            construction management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={m.title} className="glass-card p-8 hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <m.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
