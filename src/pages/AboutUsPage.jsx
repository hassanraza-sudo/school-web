import React from "react";

const AboutUsPage = () => {
  return (
    <div className="about-us bg-gray-100 text-gray-800">
      <section className="school-description px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome to Beacon Public High School Bhiria City
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          At Beacon Public High School, we are dedicated to fostering a
          nurturing and inclusive learning environment. Our aim is to empower
          students to achieve academic excellence, develop critical thinking
          skills, and cultivate a strong sense of community and responsibility.
        </p>
        <p className="text-lg leading-relaxed">
          Since our founding, we have been committed to providing top-notch
          education and creating opportunities for every student to excel in
          academics, sports, and extracurricular activities. Join us in our
          mission to shape the leaders of tomorrow.
        </p>
      </section>

      <section className="mission bg-white px-6 py-8 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed">
          Our mission is to inspire and guide every student to reach their full
          potential, equipping them with the knowledge and skills needed to
          thrive in a dynamic world. We strive to promote a culture of respect,
          innovation, and lifelong learning.
        </p>
      </section>
      <section className="admin-message px-6 py-8 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Principal's Message
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-lg leading-relaxed">
              Welcome to Beacon Public High School, where every student is
              valued and nurtured. Our focus is on building a strong foundation
              for future success by combining academic rigor with a supportive
              environment. Together, let us inspire and prepare our students for
              a world full of opportunities.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We take pride in our achievements and invite you to be part of our
              journey toward excellence. Thank you for your trust and support.
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-48 h-48 mx-auto rounded-full"
              src="src\assets\images\Admin.jpg"
              alt="Admin"
            />
            <h3 className="text-xl font-bold mt-4">Mr. Amjad Hussain Mangi</h3>
            <p className="text-gray-600">Principal</p>
          </div>
        </div>
      </section>

      <section className="team px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="team-member text-center bg-white shadow-md p-4 rounded-lg">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="src\assets\images\Admin.jpg"
              alt="Principal"
            />
            <h3 className="text-xl font-bold">Mr. Amjad Hussain</h3>
            <p className="text-gray-800">Principal</p>
            <p className="text-gray-600">M.A English</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              Contact
            </button>
          </div>
          <div className="team-member text-center bg-white shadow-md p-4 rounded-lg">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://w7.pngwing.com/pngs/282/86/png-transparent-girl-lady-user-woman-famous-character-flat-icon.png"
              alt="Teacher"
            />
            <h3 className="text-xl font-bold">Ms. Rubina Hanif</h3>
            <p className="text-gray-800">Vice Principal</p>
            <p className="text-gray-600">M.A Urdu</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              Contact
            </button>
          </div>
          <div className="team-member text-center bg-white shadow-md p-4 rounded-lg">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://w7.pngwing.com/pngs/282/86/png-transparent-girl-lady-user-woman-famous-character-flat-icon.png"
              alt="Teacher"
            />
            <h3 className="text-xl font-bold">Ms. Durfisha Aslam</h3>
            <p className="text-gray-800">Science Teacher</p>
            <p className="text-gray-600">M.Sc. in Zoology</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              Contact
            </button>
          </div>
          <div className="team-member text-center bg-white shadow-md p-4 rounded-lg">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://w7.pngwing.com/pngs/282/86/png-transparent-girl-lady-user-woman-famous-character-flat-icon.png"
              alt="Teacher"
            />
            <h3 className="text-xl font-bold">Ms. Zahra Junejo</h3>
            <p className="text-gray-800">Co-ordinator</p>
            <p className="text-gray-600">M.A management science</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
