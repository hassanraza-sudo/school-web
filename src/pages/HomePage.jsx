import React, { useState, useEffect } from "react";

function HomePage() {
  const images = [
    "src/assets/images/School photo.jpg",
    "src/assets/images/School photo 2.jpg",
    "src/assets/images/School photo 1.jpg",
    "src/assets/images/School photo 3.jpg",
    "src/assets/images/School photo 4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Image Carousel Section */}
      <div className="relative w-full max-w-5xl h-[100vh] mx-auto py-4 bg-white shadow-md rounded-md overflow-hidden group">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4 py-6 mt-8 space-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col space-y-4">
            <button
              className="bg-gray-400 text-white font-semibold text-xl py-4 px-8 border-2 border-gray-700 w-full hover:bg-gray-800 transition duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = "/admissions")}
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
