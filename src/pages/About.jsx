import Button from "../components/Button";

const businessTypes = [
  {
    icon: "restaurant",
    title: "Restaurants & Food Services",
    description:
      "Automatically dispatch riders for orders received via WhatsApp, phone, or other channels. Reduce delivery delays and give customers real-time updates.",
  },
  {
    icon: "medication",
    title: "Pharmacies & Healthcare",
    description:
      "Ensure timely delivery of medications and medical supplies with fast driver assignment and automatic patient notifications.",
  },
  {
    icon: "storefront",
    title: "Grocery & Retail Stores",
    description:
      "Streamline same-day delivery coordination. Stop calling around for available riders — Smart Dispatch finds one automatically.",
  },
  {
    icon: "shopping_bag",
    title: "Any Business That Delivers",
    description:
      "If your business receives orders and uses delivery riders, Smart Dispatch is built for you — regardless of industry or size.",
  },
];

const whyUs = [
  {
    icon: "automation",
    title: "Fully Automated Dispatch",
    description:
      "From order receipt to driver assignment, every step happens automatically. Your staff focuses on customers, not coordination.",
  },
  {
    icon: "chat",
    title: "Built on WhatsApp",
    description:
      "No new app for your customers. Smart Dispatch works through the WhatsApp Business Cloud API — the platform your customers already trust.",
  },
  {
    icon: "trending_up",
    title: "Designed to Scale",
    description:
      "Start simple with WhatsApp dispatch, then grow into dashboards, a driver mobile app, and AI-powered optimisation as your business expands.",
  },
];

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Hero */}
        <div className="text-center">
          <span className="text-primary text-label-sm uppercase tracking-widest font-semibold">About Us</span>
          <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight text-on-background mt-3 mb-5">
            About Smart Dispatch
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We're building the delivery operating system for businesses across
            Africa — starting with the tool every customer already has in their
            pocket: WhatsApp.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-7">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">flag</span>
            </div>
            <h2 className="text-[18px] font-bold text-on-background mb-3">Our Mission</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              To help businesses automate delivery operations through
              intelligent WhatsApp-based dispatch — eliminating manual
              coordination and reducing operational overhead.
            </p>
          </div>
          <div className="bg-secondary/5 border border-secondary/15 rounded-2xl p-7">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-secondary">visibility</span>
            </div>
            <h2 className="text-[18px] font-bold text-on-background mb-3">Our Vision</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              To become the logistics operating system for delivery businesses
              across Africa — powering seamless, reliable, and affordable
              last-mile delivery at scale.
            </p>
          </div>
        </div>

        {/* Who We Serve */}
        <div>
          <h2 className="text-[24px] font-bold text-on-background mb-8">Who we serve</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {businessTypes.map((type) => (
              <div
                key={type.title}
                className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">{type.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold text-on-background mb-2">{type.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-[24px] font-bold text-on-background mb-8">Why Smart Dispatch</h2>
          <div className="grid gap-7 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold text-on-background">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-outline-variant">
          <h2 className="text-[22px] font-bold text-on-background mb-4">
            Ready to transform your delivery operations?
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-7 max-w-xl mx-auto">
            Join our early access programme and be among the first businesses
            to run automated dispatch — free during the pilot.
          </p>
          <Button to="/contact" size="lg">
            Request Early Access
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Button>
        </div>
      </div>
    </section>
  );
}