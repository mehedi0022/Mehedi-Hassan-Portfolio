import { TbSend2 } from "react-icons/tb";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowRight, FaBagShopping, FaCheck, FaCopy } from "react-icons/fa6";
import contactOptions from "../data/contactOptions.json";
import paymentMethods from "../data/paymentMethods.json";
import { fadeIn } from "../utils/varients";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(
    contactOptions.projectTypes[0],
  );
  const [budget, setBudget] = useState(contactOptions.budgetRanges[0]);
  const [timeline, setTimeline] = useState(contactOptions.timelineOptions[0]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formattedMessage = [
      `Project Type: ${projectType}`,
      `Budget Range: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      message,
    ].join("\n");

    const data = {
      name,
      email,
      phone,
      message: formattedMessage,
    };

    try {
      const res = await axios.post(
        "https://portfoliobackend-tau.vercel.app/api/contact/send-message",
        data,
      );

      if (res.data.success) {
        toast.success("Message Sent Successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setProjectType(contactOptions.projectTypes[0]);
        setBudget(contactOptions.budgetRanges[0]);
        setTimeline(contactOptions.timelineOptions[0]);
        setMessage("");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (label, text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} info copied`);
    } catch {
      toast.error("Copy failed. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#e20c4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e20c4b]/20 bg-[#e20c4b]/10 px-4 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#e20c4b]" />
            <span className="text-[#f3b6c8] text-[11px] font-semibold tracking-[0.24em] uppercase">
              Project Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s plan your next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              website project properly
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-8">
            Fill out a better project brief so I can understand your goals,
            budget, and timeline before we start.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(22,22,29,1)_100%)] p-8 md:p-10 shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#e20c4b] via-[#ff8a65] to-purple-600"></div>

            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
                  Project Brief Form
                </p>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Tell me what you need
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-7 max-w-2xl">
                  The more details you share here, the faster I can suggest the
                  right package and delivery plan.
                </p>
              </div>
              <div className="hidden md:flex w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] items-center justify-center text-[#e20c4b] text-xl font-bold">
                01
              </div>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  id="name"
                  label="Full Name"
                  value={name}
                  onChange={setName}
                  type="text"
                  required
                />
                <FormField
                  id="email"
                  label="Email Address"
                  value={email}
                  onChange={setEmail}
                  type="email"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  id="phone"
                  label="Phone / WhatsApp"
                  value={phone}
                  onChange={setPhone}
                  type="tel"
                />
                <SelectField
                  id="project-type"
                  label="Project Type"
                  value={projectType}
                  onChange={setProjectType}
                  options={contactOptions.projectTypes}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <SelectField
                  id="budget"
                  label="Budget Range"
                  value={budget}
                  onChange={setBudget}
                  options={contactOptions.budgetRanges}
                />
                <SelectField
                  id="timeline"
                  label="Preferred Timeline"
                  value={timeline}
                  onChange={setTimeline}
                  options={contactOptions.timelineOptions}
                />
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                  Helpful details to include
                </p>
                <div className="flex flex-wrap gap-3">
                  <InfoChip text="Number of pages" />
                  <InfoChip text="Reference websites" />
                  <InfoChip text="Design style" />
                  <InfoChip text="Features you need" />
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="7"
                  className="block w-full rounded-2xl border border-white/10 bg-[#0f0f13] px-5 pb-3 pt-7 text-base text-white appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-5 top-4 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
                >
                  Describe your project, goals, and any special requirements
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#e20c4b] to-[#b30a3b] text-white font-bold text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Project Inquiry <TbSend2 className="text-xl" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[32px] border border-[#e20c4b]/20 bg-[linear-gradient(180deg,rgba(226,12,75,0.14)_0%,rgba(22,22,29,1)_100%)] p-8 shadow-2xl shadow-red-900/10">
              <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
                {contactOptions.directOrder.eyebrow}
              </p>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                {contactOptions.directOrder.title}
              </h3>
              <p className="text-gray-300 text-sm leading-7 mb-6">
                {contactOptions.directOrder.description}
              </p>

              <div className="space-y-3 mb-7">
                {contactOptions.directOrder.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/15 px-4 py-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#e20c4b]/12 border border-[#e20c4b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-[#e20c4b] text-[11px]" />
                    </div>
                    <p className="text-sm text-gray-200 leading-6">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={contactOptions.directOrder.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#e20c4b] hover:bg-[#c40a40] text-white font-semibold transition-all duration-300"
              >
                <FaBagShopping className="text-lg" />
                <span>{contactOptions.directOrder.ctaLabel}</span>
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-[#16161d] p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                {paymentMethods.paymentTitle}
              </p>
              <p className="text-gray-400 text-sm leading-6 mb-5">
                {paymentMethods.paymentDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {paymentMethods.methods.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCopy(item.label, item.copyText)}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-gray-300 hover:border-[#e20c4b]/30 hover:bg-[#e20c4b]/8 transition-all duration-300"
                  >
                    <span className="font-medium text-white">{item.label}</span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                      <FaCopy className="text-[11px]" />
                      Copy
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                Best for projects like
              </p>
              <div className="flex flex-wrap gap-3">
                {contactOptions.projectTypes.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="block w-full rounded-2xl border border-white/10 bg-[#0f0f13] px-5 pb-3 pt-7 text-base text-white appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors"
      placeholder=" "
    />
    <label
      htmlFor={id}
      className="absolute left-5 top-4 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
    >
      {label}
    </label>
  </div>
);

const SelectField = ({ id, label, value, onChange, options }) => (
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-2xl border border-white/10 bg-[#0f0f13] px-5 pb-3 pt-7 text-base text-white appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] transition-colors"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <label
      htmlFor={id}
      className="absolute left-5 top-4 -translate-y-3 scale-75 text-sm text-gray-500 z-10"
    >
      {label}
    </label>
  </div>
);

const InfoChip = ({ text }) => (
  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-gray-300">
    {text}
  </span>
);

export default Contact;
