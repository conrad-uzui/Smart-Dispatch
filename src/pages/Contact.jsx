import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    businessName: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    businessType: "",
    expectedDeliveries: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formState);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful submission
      setSubmitStatus("success");
      setFormState({
        businessName: "",
        contactPerson: "",
        phoneNumber: "",
        email: "",
        businessType: "",
        expectedDeliveries: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-on-background">
              Get in Touch
            </h1>
            <p className="text-xl text-on-surface-variant">
              We're here to help you streamline your delivery operations.
              Whether you have questions about our service, need technical
              support, or want to discuss a custom solution, our team is ready
              to assist.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <p className="text-primary font-medium">
                  Thanks! We'll get back to you within 24 hours. You can also
                  reach us directly on WhatsApp at{" "}
                  <a
                    href="https://wa.me/233502826749"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +233 50 282 6749
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-error/10 border border-error/20 p-4 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                  error_outline
                </span>
                <p className="text-error font-medium">
                  Something went wrong. Please try again or reach us directly on{" "}
                  <a
                    href="https://wa.me/233502826749"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Contact Info & Form */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-on-background">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      business
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-background">
                      General Inquiries
                    </h3>
                    <p className="text-on-surface-variant">
                      +233 50 282 6749
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      support_agent
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-background">
                      Support
                    </h3>
                    <p className="text-on-surface-variant">
                      Available via WhatsApp — fastest response
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      phone
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-background">Phone</h3>
                    <p className="text-on-surface-variant">
                      +233 26 648 4287
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-background">Office</h3>
                    <p className="text-on-surface-variant">
                      Accra & Obuasi, Ghana
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/233502826749"
                  className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-primary">
                    whatsapp
                  </span>
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-on-background">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact form"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formState.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                      placeholder="Enter your business name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formState.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formState.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="businessType"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formState.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    >
                      <option value="">Select your business type</option>
                      <option value="restaurant">
                        Restaurant / Food Service
                      </option>
                      <option value="retail">Retail / E-commerce</option>
                      <option value="healthcare">Healthcare / Pharmacy</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="logistics">
                        Logistics / Distribution
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="expectedDeliveries"
                      className="mb-2 block font-medium text-on-surface-variant"
                    >
                      Expected Deliveries Per Day
                    </label>
                    <select
                      id="expectedDeliveries"
                      name="expectedDeliveries"
                      value={formState.expectedDeliveries}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    >
                      <option value="">Select expected volume</option>
                      <option value="1-5">1-5 deliveries</option>
                      <option value="6-20">6-20 deliveries</option>
                      <option value="21-50">21-50 deliveries</option>
                      <option value="51-100">51-100 deliveries</option>
                      <option value="100+">100+ deliveries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-medium text-on-surface-variant"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-y disabled:opacity-50"
                    placeholder="How can we help you? Feel free to ask any questions about our service..."
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors transform active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
