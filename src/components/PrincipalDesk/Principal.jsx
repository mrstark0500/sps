import React from "react";
import principal from "../../assets/principla.jpg"
const Principal = () => {
  return (
    <section className="bg-[#f8f6f2] py-16 px-6 md:px-20 mt-20 mb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
            Principal’s Desk
          </h1>
          <div className="w-24 h-0.5 bg-gray-700 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Principal Image */}
          <div className="flex justify-center">
            <div className="bg-white p-3 shadow-lg">
              <img
                src={principal} // replace with your image path
                alt="Principal"
                className="w-72 h-96 object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="text-gray-800">
            <h2 className="text-2xl font-serif mb-6">
              Message from the Principal
            </h2>

            <p className="leading-relaxed mb-5 text-lg">
              Welcome to our institution, a place where tradition meets
              excellence and education is shaped with values, discipline,
              and integrity. Our college stands as a pillar of academic
              distinction, nurturing young minds to become responsible
              professionals and conscientious citizens.
            </p>

            <p className="leading-relaxed mb-5 text-lg">
              We believe education is not merely the acquisition of knowledge,
              but the cultivation of character, leadership, and lifelong
              learning. Through dedicated faculty, modern infrastructure,
              and a student-centered approach, we strive to prepare our
              students for global challenges.
            </p>

            <p className="leading-relaxed mb-8 text-lg">
              I invite you to be a part of our academic journey and experience
              an environment that inspires growth, innovation, and excellence.
            </p>

            {/* Signature */}
            <div className="border-t border-gray-400 pt-6">
              <p className="font-serif text-xl text-gray-900">
                Mr. Phadtare M J
              </p>
              <p className="text-sm text-gray-600 tracking-wide">
                Principal
              </p>
              <p className="text-sm text-gray-600">
                XYZ College of Engineering
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Principal;
