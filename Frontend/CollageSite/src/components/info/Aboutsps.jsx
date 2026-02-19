import React, { useEffect } from "react";

const Aboutsps = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white mt-24 text-gray-800">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Over 40+ Years of Educational Excellence
        </h1>
        <p className="text-xl opacity-90">The Birth of a Legend</p>
      </div>

      {/* History */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <p className="text-lg leading-relaxed">
          In the early 1980s, establishing non-grant technical education in semi-urban regions like Satara was a formidable challenge. Access to quality professional education was limited, and the philosophy of self-financed institutions was still in its infancy. During this crucial period, with the blessings and guidance of Hon. Shri K. S. Patil (Ex. MLA), the foundation of our institute was laid in 1983 under the aegis of Satara Education Society.

          The vision was boldly carried forward by pioneering mentors of the Society—Hon. M. L. Wadikar, Late D. S. Kulkarni, Late H. L. Ekbote, and other dedicated educationists—who conceived and implemented progressive and revolutionary ideas to make quality education accessible in the region. Their efforts received strong support from Hon. Shri N. J. Palkar (Ex. Chairman, Satara Education Society, Satara) and were effectively translated into reality under the leadership of Shri G. M. Deshmukh, the first Principal of the institute
        </p>

        <p className="text-lg leading-relaxed">
          Through perseverance, commitment, and academic discipline, the institute steadily grew in stature and reputation. Today, it stands proudly as one of the leading institutes in the state, known for its academic excellence and strong value system. The entire faculty and staff take immense pride in carrying forward this rich legacy and upholding the vision laid down by our founders.
        </p>
      </div>

      {/* Quote */}
      <div className="bg-gray-100 py-16 text-center px-6">
        <blockquote className="text-2xl md:text-3xl font-semibold italic max-w-4xl mx-auto">
          “Jai Jagat,<br />Jai Bharat.”
        </blockquote>
      </div>

      {/* Institute Info */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">SPS, Satara</h2>
        <p className="text-lg leading-relaxed">
         Satara Polytechnic, officially known as Satara Education Society’s Satara Polytechnic, is a well-established technical institute located in Satara, Maharashtra, India. It has been providing quality technical education in the diploma stream for several decades.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="leading-relaxed">
              To be a globally acclaimed Institute in Technical Education and
              Research for holistic socio-economic development.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ensure 100% employability and diverse career opportunities</li>
              <li>Strengthen curriculum, pedagogy, assessment and faculty</li>
              <li>Promote research culture through projects and consultancy</li>
              <li>Develop socially responsible citizens</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 text-center">
        <div className="bg-gray-100 p-10 rounded-xl">
          <h4 className="text-5xl font-bold text-gray-900">6</h4>
          <p className="mt-2 text-lg">Diploma Courses Offered</p>
        </div>
        <div className="bg-gray-100 p-10 rounded-xl">
          <h4 className="text-5xl font-bold text-gray-900">200+</h4>
          <p className="mt-2 text-lg">Yearly Student Intake</p>
        </div>
      </div>

      {/* Programs */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Additional Highlights</h3>
          <p className="mb-6">
            World Bank Project TEQIP Phase-I under the Technical Education Quality
            Improvement Programme by Ministry of MSBT, Mumbai.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Code of Conduct</li>
            <li>Organisational Chart</li>
            <li>Mandatory Disclosures</li>
            <li>Distinctions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Aboutsps;
