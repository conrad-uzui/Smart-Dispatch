const steps = [
  {
    number: "01",
    icon: "chat",
    iconFill: true,
    title: "Customer sends order via WhatsApp",
    description:
      "Customers message your business WhatsApp number with their order in plain language — no app download or sign-up required.",
    example: '"2 jollof rice, deliver to North Legon, gate 4"',
    accent: "primary",
  },
  {
    number: "02",
    icon: "auto_awesome",
    iconFill: true,
    title: "Smart Dispatch parses & assigns instantly",
    description:
      "The system reads the order, finds the nearest available driver, and creates a job — all in under 30 seconds.",
    example: "Driver Kwame assigned — 1.8 km away",
    accent: "secondary",
  },
  {
    number: "03",
    icon: "map",
    iconFill: false,
    title: "Customer tracks in real time, via WhatsApp",
    description:
      "Automated messages keep the customer informed at every stage — confirmed, en route, and delivered — without staff lifting a finger.",
    example: "Order #8472 delivered ✓",
    accent: "tertiary",
  },
];

const accentMap = {
  primary: {
    num: "bg-primary text-white",
    icon: "text-primary",
    iconBg: "bg-primary/10",
    example: "text-primary border-primary/20 bg-primary/5",
    line: "bg-primary/20",
  },
  secondary: {
    num: "bg-secondary text-white",
    icon: "text-secondary",
    iconBg: "bg-secondary/10",
    example: "text-secondary border-secondary/20 bg-secondary/5",
    line: "bg-secondary/20",
  },
  tertiary: {
    num: "bg-tertiary text-white",
    icon: "text-tertiary",
    iconBg: "bg-tertiary/10",
    example: "text-tertiary border-tertiary/20 bg-tertiary/5",
    line: "bg-tertiary/20",
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-on-background">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-label-sm uppercase tracking-widest font-semibold">
            How It Works
          </span>
          <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight text-on-background mt-3 mb-4">
            From order to doorstep in minutes
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            No new software for your customers. No training for your staff.
            Just WhatsApp, automated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[44px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px bg-outline-variant" />

          {steps.map((step) => {
            const c = accentMap[step.accent];
            return (
              <div key={step.number} className="relative">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black ${c.num} shadow-sm flex-shrink-0`}>
                    {step.number}
                  </div>
                </div>

                <h3 className="text-[17px] font-bold text-on-background mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Example bubble */}
                <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-[13px] font-medium ${c.example}`}>
                  <span
                    className={`material-symbols-outlined text-[15px] ${c.icon}`}
                    style={step.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {step.icon}
                  </span>
                  {step.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
