import React from "react";

const AdmissionPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto py-8 px-4">
        <section className="mb-8" id="overview">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to Our Admissions Page
          </h2>
          <p className="text-gray-600">
            We are excited to welcome new students to Beacon Public High School.
            Join us for a journey of academic excellence and holistic growth.
          </p>
        </section>

        <section className="mb-8" id="process">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Admission Process
          </h2>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Fill out the admission form.</li>
            <li>Submit the required documents.</li>
            <li>Pay the admission fee.</li>
            <li>Receive confirmation of admission.</li>
          </ol>
        </section>

        <section className="mb-8" id="eligibility">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-gray-600">
            Ensure the student meets the grade-specific age and academic
            requirements before applying.
          </p>
        </section>

        <section className="mb-8" id="fee-structure">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Fee Structure
          </h2>
          <p className="text-gray-600">
            For detailed information, please{" "}
            <a href="#" className="text-blue-500 hover:underline">
              download the fee structure
            </a>
            .
          </p>
        </section>

        <section className="mb-8" id="application-form">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Online Admission Form
          </h2>
          <form
            action="#"
            method="post"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="student-name"
                className="block text-gray-700 font-medium mb-2"
              >
                Student Name
              </label>
              <input
                type="text"
                id="student-name"
                name="student-name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-medium mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="grade"
                className="block text-gray-700 font-medium mb-2"
              >
                Grade Applying For
              </label>
              <select
                id="grade"
                name="grade"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Grade</option>
                <option value="nursery">Nursery</option>
                <option value="primary">Primary</option>
                <option value="middle">Middle</option>
                <option value="high">High School</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="parent-name"
                className="block text-gray-700 font-medium mb-2"
              >
                Parent/Guardian Name
              </label>
              <input
                type="text"
                id="parent-name"
                name="parent-name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-gray-700 font-medium mb-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="documents"
                className="block text-gray-700 font-medium mb-2"
              >
                Upload Documents
              </label>
              <input
                type="file"
                id="documents"
                name="documents"
                multiple
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the terms and conditions.
              </label>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Submit Application
            </button>
          </form>
        </section>

        <section className="mb-8" id="contact">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">Phone: 0301-2984495</p>
          <p className="text-gray-600">Email: bps345@gmail.com</p>
          <p className="text-gray-600">
            Address: Beacon Public High School, Bhiria City
          </p>
        </section>
      </div>
    </div>
  );
};

export default AdmissionPage;
