import React from 'react';

const experiences = [
  {
    title: "Started Learning Web Development",
    year: "2024",
    description: "Began studying HTML, CSS, and JavaScript."
  },
  {
    title: "Academic Projects",
    year: "2025",
    description: "Worked on school projects applying Network Security and programming concepts."
  },
  {
    title: "Building React Portfolio",
    year: "2026",
    description: "Created my personal portfolio using React and Tailwind CSS."
  }
];

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>

      <div className="mt-6 border-l-4 border-blue-500 pl-6 space-y-6">

        {experiences.map((exp, index) => (
          <div key={index} className="relative">

            {/* Dot */}
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            {/* Content */}
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.year}</p>
            <p className="text-gray-700 mt-1">{exp.description}</p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
