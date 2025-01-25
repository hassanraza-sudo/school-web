import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg">
            <strong>Phone:</strong> 03012984495
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:bpsbc345@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              bpsbc345@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.youtube.com/@BeaconBhiriaVision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/BPS.345/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Beacon Public School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
