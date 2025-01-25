import React from "react";

const EventsPage = () => {
  const events = [
    {
      title: "Science Exhibition",
      description:
        "An event to showcase innovative science projects by students, fostering creativity and critical thinking.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Kashmir Day",
      description:
        "A day to express solidarity with the people of Kashmir through special assemblies and activities.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Mother's Day",
      description:
        "A celebration to honor the contributions and sacrifices of mothers with heartfelt activities.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Annual Ceremony",
      description:
        "A grand celebration of the year's achievements, featuring awards, performances, and guest speakers.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Independence Day",
      description:
        "Commemorating the spirit of freedom with flag hoisting, cultural performances, and speeches.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Milad-un-Nabi (S.A.W.W)",
      description:
        "A spiritual gathering to celebrate the birth of Prophet Muhammad (S.A.W.W) with naats and discussions.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="events-page bg-gray-100 text-gray-800 px-6 py-8">
      {/* Header Section */}
      <section className="introduction text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">Events at Our School</h1>
        <p className="text-lg leading-relaxed">
          At Beacon Public High School Bhiria City, we celebrate a variety of
          events to foster learning, creativity, and community spirit. Here are
          some of the key events we cherish every year.
        </p>
      </section>

      {/* Events Grid Section */}
      <section className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Optional CTA Section */}
      <section className="cta-section bg-blue-600 text-white text-center py-8 mt-8">
        <h2 className="text-2xl font-semibold mb-2">
          Join Us in Upcoming Events!
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Stay connected and participate in our exciting upcoming events.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
          View Upcoming Events
        </button>
      </section>
    </div>
  );
};

export default EventsPage;
