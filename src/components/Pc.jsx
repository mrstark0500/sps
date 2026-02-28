import React, { useEffect } from "react";

export default function PlacementCell() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const committeeMembers = [
    { sr: 1, name: "Mr. V.A. Bhosale", designation: "Head of Department", position: "Placement Officer" },
    { sr: 2, name: "Mr. U.S. Patil", designation: "Vice Principal", position: "Advisor" },
    { sr: 3, name: "Ms. K.S. Sable", designation: "HOD – CO", position: "Member" },
    { sr: 4, name: "Mrs. A.T. Salunkhe", designation: "HOD – ENTC", position: "Member" },
  ];

  const functionsList = [
    "Curate and conduct institutional campus recruitment initiatives.",
    "Foster long-term associations with reputed industries.",
    "Offer refined career counseling and professional mentorship.",
    "Deliver aptitude, etiquette, and interview mastery programs.",
    "Preserve detailed placement archives and corporate feedback.",
    "Encourage internships and structured industrial exposure.",
    "Guide students in résumé refinement and career positioning.",
  ];

  return (
    <div className="bg-neutral-100 py-16 px-4 md:px-16 mt-20 md:mt-28 mb-0">
      <div className="max-w-6xl mx-auto bg-[#fbfaf8] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-12 md:p-16">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-wide text-[#3b0f1e]">
            College Placement Cell
          </h1>
          <div className="w-28 h-[1.5px] bg-[#c2a36c] mx-auto my-5"></div>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
            Cultivating professional excellence through heritage values,
            strategic industry alliances, and refined career guidance.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-14 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b1f2e] mb-4">
            Introduction
          </h2>
          <p className="text-gray-800 leading-loose text-[17px]">
            The Placement Cell stands as a distinguished pillar of the institution,
            committed to shaping careers with discretion, discipline, and long-term
            vision. Through enduring industry relationships and structured
            professional preparation, students are guided toward meaningful and
            respectable careers under the stewardship of the Principal and Management.
          </p>
        </section>

        {/* Functions */}
        <section className="mb-16 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b1f2e] mb-6">
            Functions of the Placement Cell
          </h2>
          <ul className="space-y-4 text-gray-800 leading-relaxed list-disc list-inside text-[16.5px]">
            {functionsList.map((func, idx) => (
              <li key={idx}>{func}</li>
            ))}
          </ul>
        </section>

        {/* Composition Table - Responsive Cards for Mobile */}
        <section className="mb-16 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b1f2e] mb-6">
            Composition of the Placement Cell
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto border border-[#e6dcc8] rounded-lg bg-white">
            <table className="w-full text-sm text-gray-800">
              <thead className="bg-[#f3efe7] text-[#3b0f1e]">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Sr. No.</th>
                  <th className="px-6 py-4 text-left font-medium">Name</th>
                  <th className="px-6 py-4 text-left font-medium">Designation</th>
                  <th className="px-6 py-4 text-left font-medium">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee6d6]">
                {committeeMembers.map((member) => (
                  <tr key={member.sr} className="hover:bg-[#faf7f2] transition-colors">
                    <td className="px-6 py-4">{member.sr}</td>
                    <td className="px-6 py-4 font-medium">{member.name}</td>
                    <td className="px-6 py-4">{member.designation}</td>
                    <td className="px-6 py-4">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {committeeMembers.map((member) => (
              <div key={member.sr} className="bg-[#fdfaf7] border border-[#e6dcc8] rounded-lg p-4 shadow-sm">
                <p><span className="font-medium">Sr. No:</span> {member.sr}</p>
                <p><span className="font-medium">Name:</span> {member.name}</p>
                <p><span className="font-medium">Designation:</span> {member.designation}</p>
                <p><span className="font-medium">Position:</span> {member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Support */}
        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b1f2e] mb-4">
            Student Placement Support
          </h2>
          <p className="text-gray-800 leading-loose text-[17px]">
            Every student of Satara Polytechnic, Satara is entitled to discreet,
            professional placement guidance through the Placement Cell. Active
            participation in training programs and placement initiatives is
            strongly encouraged.
          </p>
          <p className="text-gray-800 mt-4 leading-loose text-[17px]">
            Students may approach the Placement Officer via the college office
            for career consultations and placement-related matters.
          </p>
        </section>

      </div>
    </div>
  );
}
