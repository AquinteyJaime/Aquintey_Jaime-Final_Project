import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
    } else {
      alert("Message sent!");
    }
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 mr-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
