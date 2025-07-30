import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
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
  const [isLloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const data = {
      name,
      email,
      phone,
      message,
    };

    try {
      const res = await axios.post(
        "https://backed.meetmehedi.dev/api/contact/send",
        data
      );

      console.log(res);

      if (res.data.success) {
        toast.success("Message Send Successfully!");

        setIsLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      toast.success(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="container mx-auto px-5 py-10">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center"
      >
        <p className="text-bttonColour ">Get In Touch</p>
        <h1 className="text-4xl font-semibold">Contact Me</h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center">
        <div className="basis-64 flex flex-col gap-4">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="px-10 py-5 bg-boxColour rounded-md text-center"
          >
            <MdOutlineMarkEmailUnread className="text-3xl block mx-auto mb-3" />
            <p>Email</p>
            <p className="truncate">mdmehedihassan0022@gmail.com</p>
            <a
              href="mailto:mdmehedihassan0022@gmail.com"
              className="text-bttonColour"
            >
              Write Me
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="px-10 py-5 bg-boxColour rounded-md text-center"
          >
            <FaPhoneVolume className="text-3xl block mx-auto mb-3" />
            <p>Whats App</p>
            <p>+8801621905416</p>
            <a
              href="https://wa.me/8801621905416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bttonColour"
            >
              Write Me
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="px-10 py-5 bg-boxColour rounded-md text-center"
          >
            <FaLinkedinIn className="text-3xl block mx-auto mb-3" />
            <p>Linkedin</p>
            <p>@md-mehedi-hassan0022</p>
            <a
              href="https://www.linkedin.com/in/md-mehedi-hassan0022/"
              target="_blank"
              className="text-bttonColour"
            >
              Follow Me
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="basis-100"
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 ease-in-out transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#0A0A0F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Full Name
              </label>
            </div>

            {/* Email Address */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 ease-in-out transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#0A0A0F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email Address
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <input
                type="tel"
                id="phone_number"
                name="phone"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="phone_number"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 ease-in-out transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#0A0A0F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Phone Number
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 ease-in-out transform -translate-y-4 scale-75 top-[1rem] z-10 origin-[0] bg-white dark:bg-[#0A0A0F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}

            {isLloading ? (
              <button
                disabled
                type="submit"
                className="flex gap-2 items-center justify-center bg-[#e20c4b] hover:bg-[#c40a40] focus:ring-2 focus:ring-offset-2 focus:ring-[#e20c4b] text-white px-[1.4rem] mt-5 py-4 cursor-wait rounded transition duration-200"
              >
                <p>Sending....</p>
              </button>
            ) : (
              <button
                type="submit"
                className="flex gap-2 items-center justify-center bg-[#e20c4b] hover:bg-[#c40a40] focus:ring-2 focus:ring-offset-2 focus:ring-[#e20c4b] text-white px-[1.4rem] mt-5 py-4 cursor-pointer rounded transition duration-200"
              >
                <TbSend2 />
                <p>Send Message</p>
              </button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
