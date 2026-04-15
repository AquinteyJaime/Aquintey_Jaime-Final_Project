import React from 'react';
import Profile from '../Profile.jfif'; // make sure this file exists in src/

const AboutMe = () => {
  return (
    <section className="section flex flex-col md:flex-row items-center gap-6">

      {/* Profile Image */}
      <img
        src={Profile}
        alt="My Profile"
        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md border-4 border-blue-500"
      />

      {/* Text Content */}
      <div>
        <h2 className="section-title">About Me</h2>
        
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          I am currently studying Information Technology and developing my skills in Network Security and programming.
        </p>
      </div>

    </section>
  );
};

export default AboutMe;