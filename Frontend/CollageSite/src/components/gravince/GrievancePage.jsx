import React, { useEffect } from 'react';

export default function GrievancePage() {
  const committeeMembers = [
    { name: 'Mr. R.S Jagtap', designation: 'Student Counseling Commitee', position: 'Student Counseling Commitee' },
    { name: 'Ms. K.S Sable', designation: 'HOD-CO', position: 'Women Grievance Cell' },
    { name: 'Mr. U.S Patil', designation: 'Vice Principal', position: 'Internal Quality Assurance' },
    { name: 'Mrs. A.T Salunkhe', designation: 'HOD - ENTC', position: 'Student Health Care Commitee' },
    { name: 'Mr. V.A Bhosale', designation: 'Head', position: 'Student Grievance Cell' },
    { name: 'Mr. A.V Gaikwad', designation: 'HOD-AUTO. ', position: 'Anti Ragging Commitee' },
    { name: 'Mrs. S.S Pawar', designation: 'HOD-GS', position: 'Internal Complaint Commitee' },
  ];

  const functionsList = [
    'Accept written grievances from students and staff related to the system.',
    'Create and implement a mechanism to handle the reported grievances.',
    'Forward the findings to the Management if necessary for further action.',
    'Listen, record and scrutinize the grievances submitted by the Staff and Students and take necessary steps immediately.',
    'Attend to the grievances based on authenticity and gravity of the criticisms made.',
    'Represent the grievances to the concerned section which may include maintenance, transport, academic, amenities etc.',
    'Convene periodical meetings to discuss whether the grievances have been settled.',
    'Follow-up of these matters at regular intervals till their final disposal.',
    'Maintain strict confidentiality, if necessary.',
  ];

  // Scroll to top automatically when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 px-4 mt-20 md:mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            College Grievance Redressal Cell
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Ensuring a secure and harmonious environment for all Staff and Students. Our committee works as per UGC guidelines to address grievances efficiently.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-3">
            The grievances received by the Principal are forwarded to the concerned Committee members who review the issues depending upon their seriousness.
          </p>
          <p className="text-gray-700">
            The Committee strives to create a harmonious and conducive atmosphere. Staff can mail their grievances at{' '}
            <span className="text-indigo-600 font-medium">feedback@tcsc.edu.in</span>.
          </p>
        </div>

        {/* Functions Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Functions of the Grievance Redressal Committee
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {functionsList.map((func, idx) => (
              <li key={idx}>{func}</li>
            ))}
          </ul>
        </div>

        {/* Committee Members Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Composition of College Grievance Redressal Cell
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-[600px] w-full bg-white border border-gray-200 rounded-xl text-sm sm:text-base">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="text-left py-2 px-4">Sr. No.</th>
                  <th className="text-left py-2 px-4">Name</th>
                  <th className="text-left py-2 px-4">Designation</th>
                  <th className="text-left py-2 px-4">Position</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="py-2 px-4">{idx + 1}</td>
                    <td className="py-2 px-4 font-medium text-gray-800">{member.name}</td>
                    <td className="py-2 px-4 text-gray-700">{member.designation}</td>
                    <td className="py-2 px-4 text-gray-700">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {committeeMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 p-4 rounded-xl shadow-sm flex flex-col gap-2"
              >
                <div className="flex justify-between">
                  <span className="font-semibold">Sr. No.</span>
                  <span>{idx + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Name</span>
                  <span>{member.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Designation</span>
                  <span>{member.designation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Position</span>
                  <span>{member.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Grievance Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Student Grievances</h2>
          <p className="text-gray-700 mb-3">
            All students enrolled at Satara Polytechnic Satara have the right to appeal any academic matter in which they feel unfairly treated, such as disputes over grades, course requirements, faculty or staff conduct, fines, and administrative policies.
          </p>
          <p className="text-gray-700 mb-3">
            Students may file a grievance with the College Grievance Redressal Cell (CGRC) if problems are not resolved informally. A Student Representative will assist students in presenting their case.
          </p>
          <p className="text-gray-700">
            Students can contact the Chairperson of CGRC in the college office or file grievances online.
          </p>
        </div>
      </div>
    </section>
  );
}
