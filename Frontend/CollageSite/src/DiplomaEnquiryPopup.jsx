import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function DiplomaEnquiryPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "spscomputer2026@gmail.co",
      "template_4eoxvhh",
      e.target,
      "wqrH36QdfjxKSEt8O"
    )
    .then(() => {
      alert("Enquiry submitted successfully!");
      setShow(false);
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });

    e.target.reset();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-40 bg-black/40 backdrop-blur-sm">
      
      <div className="bg-[#fbfaf8] rounded-xl shadow-2xl w-full max-w-md p-8 relative">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-serif text-center text-[#3b0f1e] mb-2">
          Diploma Admission Enquiry
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Get guidance about diploma courses & admissions
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Student Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#5b1f2e]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <select
            name="course"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Select Diploma Course</option>
            <option>Computer Engineering</option>
            <option>Mechanical Engineering</option>
            <option>ENTC</option>
            <option>Automobile Engineering</option>
            <option>Chemical Engineering</option>
            <option>Electric Engineering</option>
        
          </select>

          <button
            type="submit"
            className="w-full bg-[#5b1f2e] text-white py-2 rounded-md hover:bg-[#3b0f1e] transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
