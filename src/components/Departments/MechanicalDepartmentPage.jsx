import { useState } from "react";
import Mo from "../staff/teaching/Me";

function MechanicalDepartmentInfo() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
        Department of Mechanical Engineering
      </h2>

      <div className="w-24 h-0.5 bg-gray-300 mt-4 mb-8"></div>

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        The Department of Mechanical Engineering emphasizes strong fundamentals,
        practical skills, and innovation to prepare students for diverse
        engineering challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
        <div className="border rounded-lg p-5 sm:p-6">
          <h4 className="font-medium mb-2 text-gray-900">Vision</h4>
          <p className="text-gray-600">
            To produce skilled mechanical engineers with creativity,
            responsibility, and leadership qualities.
          </p>
        </div>

        <div className="border rounded-lg p-5 sm:p-6">
          <h4 className="font-medium mb-2 text-gray-900">Mission</h4>
          <p className="text-gray-600">
            Deliver quality education through modern practices, industry
            exposure, and ethical values.
          </p>
        </div>
      </div>
    </div>
  );
}

const MechanicalDepartmentPage = () => {
  const [active, setActive] = useState("staff");

  return (
    <section className="min-h-screen bg-[#f6f5f2] mt-20 px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-10">

        {/* LEFT SWITCH */}
        <div className="w-full md:w-64">
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col">
            <button
              onClick={() => setActive("department")}
              className={`w-full px-5 sm:px-6 py-3 sm:py-4 text-left transition
                ${active === "department"
                  ? "bg-gray-100 font-semibold border-l-4 border-indigo-600"
                  : "hover:bg-gray-50"}`}
            >
              Department
            </button>

            <button
              onClick={() => setActive("staff")}
              className={`w-full px-5 sm:px-6 py-3 sm:py-4 text-left transition
                ${active === "staff"
                  ? "bg-gray-100 font-semibold border-l-4 border-indigo-600"
                  : "hover:bg-gray-50"}`}
            >
              Staff
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {active === "staff" ? <Mo /> : <MechanicalDepartmentInfo />}
        </div>

      </div>
    </section>
  );
};

export default MechanicalDepartmentPage;
