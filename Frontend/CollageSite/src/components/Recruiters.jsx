import React from "react";
import img1 from "../assets/logo/cipla-logo.svg";
import img2 from "../assets/logo/Hitachi-Emblem.png";
import img3 from "../assets/logo/John-Deere-Simbolo.jpg";
import img4 from "../assets/logo/logo Cummins.jpg";
import img5 from "../assets/logo/p1.jpg";
import img6 from "../assets/logo/r.jpg";
import img7 from "../assets/logo/tata-consultancy-services-logo-tcs.png";
import img8 from "../assets/logo/p2.jpg";
import img9 from "../assets/logo/p3.jpg";
import img10 from "../assets/logo/p4.jpg";

function Recruiters() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl ml-4 sm:ml-8 mb-5 mt-10 sm:mt-20 font-bold">
        Top Recruiters in Industry
      </h1>

      <div className="pl-4 sm:pl-10 pr-4 sm:pr-10 mt-5 h-24 sm:h-40 md:h-50 bg-[#ebf9ff]/90 w-full overflow-hidden relative flex items-center">

        {/* MOVING STRIP */}
        <div className="absolute right-0 flex items-center gap-4 sm:gap-10 animate-[slide_32s_linear_infinite] px-2 sm:px-4">

          {[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Recruiter ${index + 1}`}
              className="h-10 sm:h-20 md:h-28 lg:h-32 object-contain"
            />
          ))}
        </div>

        {/* Slide animation */}
        <style>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-150%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Recruiters;
