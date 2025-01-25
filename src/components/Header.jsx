import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 pb-10 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img
          src="src\assets\images\logoo.jpg" // Replace with your school logo path
          alt="Beacon Public High School Logo"
          className="h-12 w-12 rounded-full"
        />
        <h1 className="text-2xl font-bold text-center font-serif">
          BEACON PUBLIC HIGH SCHOOL BHIRIA CITY
        </h1>
      </div>
      <div className="text-center"></div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/admissions"
              className="hover:text-blue-600 transition duration-300"
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-blue-600 transition duration-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
