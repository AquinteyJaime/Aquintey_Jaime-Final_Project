import React, { useState } from 'react'; // ✅ FIX: add useState
import './App.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode 
      ? "bg-gray-900 text-white min-h-screen" 
      : "bg-gray-50 text-gray-900 min-h-screen"}>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      {/* Header */}
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold animate-pulse">
  My Portfolio
</h1>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

    </div>
  );
}

export default App;
