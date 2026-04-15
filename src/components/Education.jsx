import React from 'react';
import UC from '../UC.jpg'; // make sure this exists in src/

const Education = () => {
  return (
    <section className="section flex flex-col md:flex-row items-center gap-6">

     
      <img
        src={UC}
        alt="Education"
        className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-xl shadow-md border-2 border-blue-400"
      />

     
      <div>
        <h2 className="section-title">Education</h2>

        <div className="mt-4 text-gray-700 space-y-1">
          <p className="text-lg font-semibold">
            Bachelor of Science in Information Technology
          </p>
          <p>University of the Cordilleras﻿</p>
          <p className="text-sm text-gray-500">
            Currently pursuing my degree with a focus on Network Security.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Education;