import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    grade: "",
    parentName: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admissions",
        formData
      );
      // Display success toast
      toast.success("Application submitted successfully!");

      // Reset the form fields after successful submission
      setFormData({
        studentName: "",
        dob: "",
        grade: "",
        parentName: "",
        contact: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      <Toaster />
      <div className="container mx-auto py-8 px-4">
        <section className="mb-8" id="application-form">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Online Admission Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName} // Bind value to state
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob} // Bind value to state
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Grade Applying For
              </label>
              <select
                name="grade"
                value={formData.grade} // Bind value to state
                required
                onChange={handleChange}
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
              <label className="block text-gray-700 font-medium mb-2">
                Parent/Guardian Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName} // Bind value to state
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact} // Bind value to state
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                value={formData.address} // Bind value to state
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdmissionPage;
