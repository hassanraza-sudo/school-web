import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page bg-gray-100 text-gray-800 px-6 py-8">
      {/* Header Section */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed">
          We'd love to hear from you! Feel free to reach out with any questions,
          suggestions, or feedback.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Find Us Here
        </h2>
        <div className="map-container w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <iframe
            title="school-location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28760.139438336166!2d68.60070364999999!3d26.91127805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394bc3e50250850f%3A0x6f8de00d8fa774d7!2sBhiria%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1616733477037!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
