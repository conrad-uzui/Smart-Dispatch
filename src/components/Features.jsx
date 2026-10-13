const features = [
  {
    icon: "electric_rickshaw",
    accent: "primary",
    title: "Driver assignment in under 30 seconds",
    description:
      "The moment an order arrives, Smart Dispatch finds the nearest available driver and notifies them — no manual matching.",
  },
  {
    icon: "call_end",
    accent: "secondary",
    title: "Eliminate coordination calls",
    description:
      "Stop chasing riders over the phone. Every assignment, update, and status change happens automatically over WhatsApp.",
  },
  {
    icon: "sentiment_satisfied",
    accent: "tertiary",
    title: "Automatic customer updates",
    description:
      "Customers get confirmed, en-route, and delivered notifications without anyone on your staff typing a single message.",
  },
  {
    icon: "account_tree",
    accent: "primary",
    title: "One place for all deliveries",
    description:
      "Orders, drivers, and statuses tracked in one system — instead of scattered across WhatsApp threads and phone calls.",
  },
  {
    icon: "chat",
    accent: "secondary",
    title: "Zero new apps for your customers",
    description:
      "Customers order on the same WhatsApp they already use daily. No downloads, no logins, no friction.",
  },
  {
    icon: "trending_up",
    accent: "tertiary",
    title: "Built to grow with you",
    description:
      "Starting with WhatsApp dispatch today and expanding into a full dashboard, mobile driver app, and AI route optimisation as you scale.",
  },
];

const accentClasses = {
  primary: { bg: "bg-primary/10", icon: "text-primary" },
  secondary: { bg: "bg-secondary/10", icon: "text-secondary" },
  tertiary: { bg: "bg-tertiary/10", icon: "text-tertiary" },
};

const highlights = [
  { icon: "speed", label: "Avg. driver assignment", value: "< 30 sec" },
  { icon: "chat", label: "Platform customers already use", value: "WhatsApp" },
  { icon: "trending_up", label: "Versions on the roadmap", value: "4 phases" },
  { icon: "groups", label: "Business types supported", value: "Any delivery" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#f7f9fc] dark:bg-on-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-label-sm uppercase tracking-widest font-semibold">
            Features
          </span>
          <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight text-on-background mt-3 mb-4">
            Why businesses choose Smart Dispatch
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Every feature is designed around one principle: your staff should
            focus on customers, not logistics.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((f) => {
            const c = accentClasses[f.accent];
            return (
              <div
                key={f.title}
                className="bg-white dark:bg-surface-container-high rounded-2xl p-6 border border-outline-variant hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined ${c.icon} text-[22px]`}>{f.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold text-on-background mb-2 leading-snug">{f.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* Honest highlights strip */}
        <div className="bg-white dark:bg-surface-container-high rounded-2xl border border-outline-variant px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-outline-variant">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center text-center gap-1 px-4">
              <span className="material-symbols-outlined text-primary text-[24px] mb-1">{h.icon}</span>
              <div className="text-[22px] font-extrabold text-on-background tracking-tight">{h.value}</div>
              <div className="text-[12px] text-on-surface-variant font-medium">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
