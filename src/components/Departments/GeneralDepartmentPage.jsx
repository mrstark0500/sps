import { useState } from "react";
import Ge from "./../staff/teaching/Gs";

function DepartmentInfo() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10">
      <h2 className="text-3xl font-semibold text-gray-900">
        General Department
      </h2>

      <div className="w-24 h-0.5 bg-gray-300 mt-4 mb-8"></div>

      <p className="text-lg text-gray-700 leading-relaxed">
        The General Department supports foundational education across
        disciplines, strengthening core knowledge, communication skills,
        and ethical values essential for engineering students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="border rounded-lg p-6">
          <h4 className="font-medium mb-2">Vision</h4>
          <p className="text-gray-600">
            To build strong academic foundations and holistic development
            among students.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h4 className="font-medium mb-2">Mission</h4>
          <p className="text-gray-600">
            Deliver quality education in basic sciences and humanities,
            nurturing analytical thinking and ethical responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}

const GeneralDepartmentPage = () => {
  const [active, setActive] = useState("staff");

  return (
    <section className="min-h-screen bg-[#f6f5f2] mt-20 px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

        {/* LEFT SWITCH */}
        <div className="w-full md:w-64">
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col space-y-2">
            <button
              onClick={() => setActive("department")}
              className={`w-full px-6 py-4 text-left transition
                ${active === "department"
                  ? "bg-gray-100 font-semibold border-l-4 border-indigo-600"
                  : "hover:bg-gray-50"}`}
            >
              Department
            </button>

            <button
              onClick={() => setActive("staff")}
              className={`w-full px-6 py-4 text-left transition
                ${active === "staff"
                  ? "bg-gray-100 font-semibold border-l-4 border-indigo-600"
                  : "hover:bg-gray-50"}`}
            >
              Staff
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 overflow-auto">
          {active === "staff" ? <Ge /> : <DepartmentInfo />}
        </div>

      </div>
    </section>
  );
};

export default GeneralDepartmentPage;
