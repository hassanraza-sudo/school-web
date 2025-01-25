import React from "react";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-5xl text-white">Page Not Found</h1>
        <Link to="/" className="hover:underline text-white">
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default PagenotFound;
