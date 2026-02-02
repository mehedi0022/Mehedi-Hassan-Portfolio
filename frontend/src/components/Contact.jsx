import { TbSend2 } from "react-icons/tb";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = { name, email, phone, message };

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
        setMessage("");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* ==================== AMBIENT LIGHTING ==================== */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#e20c4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ==================== HEADER ==================== */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <span className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              Get In Touch
            </span>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Fill out the form below and I will get back
            to you shortly.
          </p>
        </motion.div>

        {/* ==================== CENTERED CONTACT FORM ==================== */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="w-full max-w-3xl bg-[#16161d] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Glow inside the form card */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e20c4b] to-purple-600"></div>

            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              {/* Grid for Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block px-5 pb-3 pt-6 w-full text-base text-white bg-[#0f0f13] rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block px-5 pb-3 pt-6 w-full text-base text-white bg-[#0f0f13] rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block px-5 pb-3 pt-6 w-full text-base text-white bg-[#0f0f13] rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
                >
                  Phone Number (Optional)
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="6"
                  className="block px-5 pb-3 pt-6 w-full text-base text-white bg-[#0f0f13] rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#e20c4b] peer transition-colors resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#e20c4b]"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e20c4b] to-[#b30a3b] text-white font-bold text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <TbSend2 className="text-xl" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
