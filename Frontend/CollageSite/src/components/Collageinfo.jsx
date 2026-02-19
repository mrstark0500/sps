import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/std1.png";

function Collageinfo() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-200">

      {/* ================= BLUE INFO BAR (ALWAYS INLINE) ================= */}
      <div className="flex w-full h-10">
        {/* LEFT BLUE */}
        <div className="w-1/2 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex items-center justify-end pr-2">
          <h4 className="font-bold">Latest News:</h4>
        </div>

        {/* RIGHT BLUE */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 overflow-hidden flex items-center">
          <p className="font-semibold whitespace-nowrap animate-[slide_20s_linear_infinite] text-white pl-2">
            Fee Structure For AY 2025-26 Approved By FRA | Two Days SYMPOSIUM
          </p>

          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
            `}
          </style>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="flex w-full max-[720px]:flex-col">

        {/* IMAGE */}
        <div className="w-1/2 max-[720px]:w-full flex items-center justify-center py-6">
          <img
            src={logo}
            alt="College"
            className="object-cover max-w-full"
          />
        </div>

        {/* TEXT */}
        <div className="w-1/2 max-[720px]:w-full flex flex-col">
          <h2 className="mt-10 ml-5 text-3xl font-bold max-[720px]:mt-4">
            The Cradle of Achievers
          </h2>

          <p className="ml-5 mt-5 mr-5 text-gray-700">
            In the early 1980s, establishing non-grant technical education in
            semi-urban regions like Satara was a formidable challenge. Access to
            quality professional education was limited, and the philosophy of
            self-financed institutions was still in its infancy. During this
            crucial period, with the blessings and guidance of Hon. Shri K. S.
            Patil (Ex. MLA), the foundation of our institute was laid in 1983
            under the aegis of Satara Education Society.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="w-fit ml-5 mt-5 mb-10 px-5 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collageinfo;
