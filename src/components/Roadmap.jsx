const phases = [
  {
    phase: "Phase 1",
    title: "WhatsApp Dispatch",
    subtitle: "Live now",
    status: "available",
    description:
      "Core logistics automation delivered entirely over WhatsApp. No new app for customers or staff.",
    features: [
      "Inbound order parsing via WhatsApp Business API",
      "Automatic driver assignment",
      "Driver management & availability tracking",
      "Customer delivery notifications",
    ],
  },
  {
    phase: "Phase 2",
    title: "Business Dashboard",
    subtitle: "In development",
    status: "coming",
    description:
      "Self-service tools so business owners can manage their fleet, view delivery history, and onboard themselves.",
    features: [
      "Web dashboard for restaurants & retailers",
      "Business analytics & delivery reports",
      "Secure authentication & multi-user roles",
      "Self-service business onboarding",
    ],
  },
  {
    phase: "Phase 3",
    title: "Driver Mobile App",
    subtitle: "Planned",
    status: "planned",
    description:
      "A dedicated mobile experience so drivers can accept jobs, navigate, and prove delivery from their phone.",
    features: [
      "Native iOS & Android driver app",
      "Live GPS tracking for customers",
      "Push notifications for new jobs",
      "Multi-branch & multi-fleet support",
    ],
  },
  {
    phase: "Phase 4",
    title: "AI Optimisation",
    subtitle: "Future",
    status: "future",
    description:
      "Machine learning layered on top of live delivery data to predict demand, optimise routes, and cut cost-per-delivery.",
    features: [
      "AI-powered route & dispatch optimisation",
      "Predictive demand forecasting",
      "Fleet management & real-time analytics",
      "Third-party logistics integrations",
    ],
  },
];

const statusConfig = {
  available: {
    badge: "bg-primary/10 text-primary border border-primary/20",
    label: "Live Now",
    dot: "bg-primary",
    icon: "check_circle",
    iconClass: "text-primary",
    cardBorder: "border-primary/30",
    cardBg: "bg-white dark:bg-surface-container-high",
  },
  coming: {
    badge: "bg-secondary/10 text-secondary border border-secondary/20",
    label: "In Development",
    dot: "bg-secondary",
    icon: "construction",
    iconClass: "text-secondary",
    cardBorder: "border-outline-variant",
    cardBg: "bg-white dark:bg-surface-container-high",
  },
  planned: {
    badge: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    label: "Planned",
    dot: "bg-tertiary",
    icon: "psychology",
    iconClass: "text-tertiary",
    cardBorder: "border-outline-variant",
    cardBg: "bg-[#f7f9fc] dark:bg-surface-container",
  },
  future: {
    badge: "bg-surface-container-high text-on-surface-variant border border-outline-variant",
    label: "Future Vision",
    dot: "bg-on-surface-variant/40",
    icon: "auto_awesome",
    iconClass: "text-on-surface-variant",
    cardBorder: "border-outline-variant",
    cardBg: "bg-[#f7f9fc] dark:bg-surface-container",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-[#f7f9fc] dark:bg-on-background">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-label-sm uppercase tracking-widest font-semibold">
            Product Roadmap
          </span>
          <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight text-on-background mt-3 mb-4">
            Where we are, where we're going
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Smart Dispatch ships in focused phases — each one delivering real
            value before the next begins.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase) => {
            const s = statusConfig[phase.status];
            return (
              <div
                key={phase.phase}
                className={`rounded-2xl border p-6 ${s.cardBorder} ${s.cardBg} transition-shadow hover:shadow-md`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div>
                    <span className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                      {phase.phase}
                    </span>
                    <h3 className="text-[18px] font-bold text-on-background mt-0.5">{phase.title}</h3>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide flex-shrink-0 ${s.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </div>

                <p className="text-body-md text-on-surface-variant mb-5 leading-relaxed">
                  {phase.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[14px] text-on-surface-variant">
                      <span
                        className={`material-symbols-outlined text-[16px] mt-0.5 flex-shrink-0 ${s.iconClass}`}
                        style={phase.status === "available" ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        {s.icon}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}