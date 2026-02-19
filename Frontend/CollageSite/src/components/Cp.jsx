import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Cp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    emailjs
      .send(
        "spscomputer2026@gmail.co", // replace with your EmailJS service ID
        "template_4eoxvhh", // replace with your EmailJS template ID
        formData,
        "wqrH36QdfjxKSEt8O" // replace with your EmailJS public key
      )
      .then(() => {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-40 bg-[#fdfcf9] p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-6 sm:p-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 tracking-wide">
            Get in Touch
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            We value your inquiry. Kindly fill the form below.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-400 transition text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-400 transition text-sm sm:text-base"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-400 transition text-sm sm:text-base"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-400 transition resize-none text-sm sm:text-base"
          />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 sm:px-10 py-2 sm:py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm sm:text-lg tracking-wide hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 sm:mt-10 text-center text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
          <p className="font-serif">123 Elite Street, Luxury City</p>
          <p className="font-serif">spscomputer2026@gmail.com</p>
          <p className="font-serif">+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Cp;
