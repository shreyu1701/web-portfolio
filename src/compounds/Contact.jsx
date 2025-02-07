import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [status, setStatus] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Client-side validation
  // const validateForm = () => {
  //   if (formData.name.length < 3) {
  //     setStatus({
  //       type: "error",
  //       message: "Name must be at least 3 characters.",
  //     });
  //     return false;
  //   }
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setStatus({
  //       type: "error",
  //       message: "Please enter a valid email address.",
  //     });
  //     return false;
  //   }
  //   if (formData.message.trim().length === 0) {
  //     setStatus({ type: "error", message: "Message cannot be empty." });
  //     return false;
  //   }
  //   return true;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus(null);

  //   // Validate the form
  //   if (!validateForm()) return;

  //   setIsLoading(true);

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_BASE_URL}/api/send-email`,
  //       {
  //         to: formData.email, // Replace with your recipient email
  //         subject: `Message from ${formData.name} (${formData.email})`,
  //         message: formData.message,
  //       }
  //     );

  //     if (response.data.success) {
  //       setStatus({ type: "success", message: "Message sent successfully!" });
  //       setFormData({ name: "", email: "", message: "" }); // Clear form
  //     } else {
  //       setStatus({ type: "error", message: response.data.message });
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     setStatus({
  //       type: "error",
  //       message: "Failed to send message. Please try again.",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div id="contact" className=" py-10">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Contact Info */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-4">
            Contact Me
          </h1>
          <p className="text-center text-gray-500 mb-4">
            Feel free to reach out to me via email or social media.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center text-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <a
              href="mailto:shreyanshkoladiyawork@gmail.com"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out"
            >
              shreyanshkoladiyawork@gmail.com
            </a>
            <span className="hidden sm:inline text-black">|</span>
            <a
              href="https://www.github.com/shreyu1701"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out"
            >
              GitHub
            </a>
            <span className="hidden sm:inline text-black">|</span>
            <a
              href="https://www.linkedin.com/in/shreyansh-koladiya-38a2b71a3"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out"
            >
              LinkedIn
            </a>
            <span className="hidden sm:inline text-black">|</span>
            <a
              href="https://www.instagram.com/shreyansh__1701"
              target="_blank"
              className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        {/* <motion.form
          onSubmit={handleSubmit}
          className=" p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 font-bold rounded-md transition duration-300 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </motion.form> */}
        {/* {status && (
          <div
            className={`mt-4 p-3 text-center rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )} */}
      </motion.div>
    </div>
  );
}

export default Contact;
