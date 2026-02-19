import React from "react";
import Details from "./Details";
import Automobile from "../assets/website/auto.jpg";
import computer from "../assets/website/co.jpeg";
import Chemical from "../assets/website/Chemical.jpg";
import Entc from "../assets/website/entc.jpg";
import Mechanical from "../assets/website/mecanical.jpg";
import Electrical from "../assets/website/electrical.jpg";

const departments = [
  {
    title: "Computer Engineering",
    intake: 30,
    directSecondYear: true,
    image: computer,
   
  },
  {
    title: "ENTC",
    intake: 30,
    directSecondYear: true,
    image: Entc,
  },
  {
    title: "Mechanical Engineering",
    intake: 30,
    directSecondYear: true,
    image: Mechanical,
  },
  {
    title: "Chemical Engineering",
    intake: 45,
    directSecondYear: true,
    image: Chemical,
  },
  {
    title: "Electric Engineering",
    intake: 30,
    directSecondYear: true,
    image: Electrical,
  },
  {
    title: "Automobile Engineering",
    intake: 30,
    directSecondYear: true,
    image: Automobile,
  },
];

function Departments() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Departments</h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {departments.map((dept, index) => (
          <Details
            key={index}
            title={dept.title}
            intake={dept.intake}
            directSecondYear={dept.directSecondYear}
            image={dept.image}
         
          />
        ))}
      </div>
    </div>
  );
}

export default Departments;
