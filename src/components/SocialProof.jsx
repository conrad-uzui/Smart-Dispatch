const problems = [
  {
    icon: "call",
    text: "Staff spend hours a day on the phone finding available riders",
  },
  {
    icon: "cancel",
    text: "Customers don't get updates and call back asking about their order",
  },
  {
    icon: "error_outline",
    text: "Orders get lost between WhatsApp threads, calls, and scraps of paper",
  },
];

const gains = [
  {
    icon: "check_circle",
    iconFill: true,
    text: "Driver assigned automatically — staff just confirm the order",
    accent: "text-primary",
  },
  {
    icon: "notifications_active",
    iconFill: true,
    text: "Customers get WhatsApp updates at every stage, hands-free",
    accent: "text-primary",
  },
  {
    icon: "dashboard",
    iconFill: false,
    text: "All orders and drivers tracked in one system, not scattered chats",
    accent: "text-primary",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-on-background text-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-fixed text-label-sm uppercase tracking-widest font-semibold">
            The Problem We Solve
          </span>
          <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-white mt-3">
            Manual delivery coordination is broken
          </h2>
          <p className="text-body-lg text-surface-variant mt-4 max-w-2xl mx-auto">
            Restaurants, pharmacies, and shops across Africa manage deliveries
            through a tangle of phone calls, WhatsApp texts, and guesswork.
            Smart Dispatch replaces all of that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Before */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-error text-[14px]">close</span>
              </div>
              <span className="text-sm font-bold text-surface-bright uppercase tracking-wide">Before Smart Dispatch</span>
            </div>
            <div className="space-y-3">
              {problems.map((p) => (
                <div key={p.text} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="material-symbols-outlined text-error/80 text-[20px] mt-0.5 flex-shrink-0">{p.icon}</span>
                  <p className="text-[14px] text-surface-variant leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </div>
              <span className="text-sm font-bold text-surface-bright uppercase tracking-wide">With Smart Dispatch</span>
            </div>
            <div className="space-y-3">
              {gains.map((g) => (
                <div key={g.text} className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
                  <span
                    className={`material-symbols-outlined text-[20px] mt-0.5 flex-shrink-0 ${g.accent}`}
                    style={g.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {g.icon}
                  </span>
                  <p className="text-[14px] text-surface-variant leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
