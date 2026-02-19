import React, { useEffect } from 'react';

const DiplomaAdmission = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const documentsRequired = [
    'Indian Nationality Certificate / School leaving / Birth Certificate on which Nationality is mentioned',
    'Mark sheet of S.S.C. (Std. X)',
    'Latest School/ College leaving certificate after passing SSC (Standard X)',
    'ITI / HSC / HSC Vocational mark sheet and Leaving Certificate, if applicable',
    'Certificate of passing Intermediate Grade Drawing examination, if applicable',
    'Caste / Non Creamy layer/ Income Certificate as per your Category',
    'Relevant documents indicating candidature type',
    'For Persons with Physical Disability: Certificate from proper authority like civil surgeon',
    'For Sons and Daughters of Defense Personnel: Relevant Documents from competent authority'
  ];

  const eligibilityFirstYear = [
    'Candidate should be an Indian National',
    'Passed 10th Std./ SSC examination or its equivalent with at least 35% aggregate marks'
  ];

  const eligibilitySecondYear = [
    'Candidate should be an Indian National',
    'Passed 10+2 with Physics and Chemistry as compulsory subjects along with Mathematics/Biology',
    'OR 10+2 Science (with Mathematics as one of the Subjects)',
    'OR 10+2 Science with Technical',
    'OR 10+2 with Vocational',
    'OR 10th + (2 years ITI) with appropriate Trade'
  ];

  const faqs = [
    {
      question: 'I have applied for Non Creamy Layer certificate and have the receipt of the application. Shall I get the benefit of caste?',
      answer: 'No. The receipt is not accepted. If you have filled the Form as Category, then it shall convert to OPEN as NCL is not submitted and Candidate has to pay difference fee.'
    },
    {
      question: 'Which document is required to get benefits of TFWS?',
      answer: 'Valid Income Certificate of Parents having Annual Income up to 8 Lacs.'
    },
    {
      question: 'Where to apply for admission?',
      answer: <a href="https://poly25users.dtemaharashtra.gov.in/diploma25/" target="_blank" rel="noreferrer" className="text-indigo-600 underline">Click here</a>
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 mt-20 md:mt-28">
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Diploma Admission 2025-26</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Admission for First Year Post-SSC Diploma Courses in Engineering and Technology for Academic Year 2025-26.
          </p>
        </div>

        {/* Important Documents */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Important Documents Required For Admission</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {documentsRequired.map((doc, idx) => <li key={idx}>{doc}</li>)}
          </ul>
        </div>

        {/* Eligibility */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Conditions</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">First Year of Post SSC:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {eligibilityFirstYear.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Direct Second Year of Post SSC:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {eligibilitySecondYear.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Admission Coordinator */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Admission Coordinator</h2>
          <p className="text-gray-700">
            Name: <span className="font-medium">Mrs. Pawar S S (FC Coordinator)</span><br />
            Contact Number: <span className="font-medium">9881726261</span>
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ's</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Q: {faq.question}</h3>
              <p className="text-gray-700">A: {faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiplomaAdmission;
