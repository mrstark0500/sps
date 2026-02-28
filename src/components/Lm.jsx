import React, { useEffect } from "react";

import Automobile from "../assets/website/auto.jpg";
import computer from "../assets/website/co.jpeg";
import Chemical from "../assets/website/Chemical.jpg";
import Entc from "../assets/website/entc.jpg";
import Mechanical from "../assets/website/mecanical.jpg";
import Electrical from "../assets/website/electrical.jpg";

const branches = [
  {
    title: "Computer Engineering",
    image: computer,
    description:
      "Computer Engineering focuses on software development, programming, data structures, web technologies, networking, and cybersecurity. Students gain strong problem-solving skills and practical knowledge required for IT industries, startups, and higher studies in engineering.",
  },
  {
    title: "Electrical Engineering",
    image: Electrical,
    description:
      "Electrical Engineering deals with electrical systems, power generation, transmission, control systems, and electrical machines. This branch builds a strong foundation for careers in power plants, industries, automation, and government sectors.",
  },
  {
    title: "Chemical Engineering",
    image: Chemical,
    description:
      "Chemical Engineering combines chemistry, physics, and mathematics to convert raw materials into valuable products. Students learn industrial processes, safety standards, and production techniques used in pharmaceuticals, petrochemicals, and manufacturing industries.",
  },
  {
    title: "Mechanical Engineering",
    image: Mechanical,
    description:
      "Mechanical Engineering is one of the core branches of engineering. It covers design, manufacturing, thermodynamics, machines, and production technology. This branch opens opportunities in industries, workshops, automobile sectors, and higher technical education.",
  },
  {
    title: "Automobile Engineering",
    image: Automobile,
    description:
      "Automobile Engineering focuses on vehicle design, engines, transmission systems, maintenance, and emerging automotive technologies. Students develop hands-on skills required for automobile industries, service centers, and manufacturing units.",
  },
  {
    title: "Electronics & Telecommunication (ENTC)",
    image: Entc,
    description:
      "ENTC Engineering deals with electronics, communication systems, embedded systems, and digital technologies. This branch prepares students for careers in telecommunications, electronics manufacturing, automation, and modern communication industries.",
  },
];

function Lm() {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-12">
        Diploma Engineering Branches
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
        Our institute offers industry-oriented diploma programs designed to provide strong technical foundations, practical knowledge, and career-focused skills for future engineers.
      </p>

      {/* Branch Sections */}
      <div className="space-y-12 md:space-y-16">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={branch.image}
                alt={branch.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {branch.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {branch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lm;
