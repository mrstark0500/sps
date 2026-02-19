import React from "react";

function Address() {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-start mt-16 lg:mt-36 px-4 sm:px-6 lg:px-12 gap-8 lg:gap-12">

      {/* Address Section */}
      <div className="text-left mt-4 lg:mt-12 w-full lg:w-1/2 max-w-full lg:max-w-xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
          Satara Polytechnic Satara
        </h1>

        <h2 className="text-gray-500 mt-1 text-sm sm:text-base md:text-lg">
          Satara Education Society's
        </h2>

        <p className="text-gray-500 mt-4 text-xs sm:text-sm md:text-base">
          With a legacy of over 40 years, SPS, Satara is one of the best Diploma engineering colleges in Satara,
          with a meritorious track record in academics, placements, and holistic growth,
          making it a veritable Cradle of Achievers.
        </p>

        <h3 className="mt-4 text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
          Location
        </h3>
        <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">
          near NH - 4, near Khindwadi, Songaon, Maharashtra 415519
        </p>

        <h3 className="mt-4 text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
          Office Hours
        </h3>
        <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base">
          11 AM – 5 PM
        </p>
      </div>

      {/* Map Section */}
      <div className="border-2 border-gray-300 shadow-lg w-full lg:w-1/2 h-48 sm:h-60 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.9407362147504!2d74.00682377441001!3d17.65296569510159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2399e87a8a1e3%3A0xaae19259100b0879!2sSatara%20Polytechnic%20satara%20songaon%20tarf%20Satara!5e0!3m2!1sen!2sin!4v1767094296214!5m2!1sen!2sin"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

export default Address;
