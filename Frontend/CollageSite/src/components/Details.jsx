import React from "react";
import { useNavigate } from "react-router-dom";

function Details({ title, intake, directSecondYear, image }) {
  const navigate = useNavigate();

  return (
    <div className="w-80 h-105 mb-5 bg-gray-200 border-4 border-black rounded-2xl overflow-hidden m-4 text-black shadow-md hover:shadow-lg transition-all duration-300">
      
      {/* Image */}
      <img
        className="w-full h-50 object-cover rounded-xl"
        src={image}
        alt={title}
      />

      {/* Info */}
      <h1 className="font-semibold text-2xl mt-3 p-4">{title}</h1>
      <h4 className="pl-4">Intake: {intake}</h4>
      <h4 className="pl-4">
        Direct 2nd Year Available: {directSecondYear ? "Yes" : "No"}
      </h4>

      {/* Buttons */}
      <div className="flex gap-3 pl-4 mt-4">
        {/* Apply Now → Contact page */}
        <button
          onClick={() =>
            navigate("/contact", {
              state: { department: title },
            })
          }
          className="bg-blue-400 px-4 py-2 mb-2 rounded-lg hover:bg-blue-800 text-white transition"
        >
          Apply Now
        </button>

        {/* Learn More → LearnMore route */}
        <button
          onClick={() => navigate("/learnmore")}
          className="bg-white text-black mb-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Details;
