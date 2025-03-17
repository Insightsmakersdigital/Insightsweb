'use client';

import React, { useState } from 'react';

const DigitalPresenceCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    // Reset the field
    setEmail('');
    // You would typically send this to your backend or email service
  };

  return (
    <div className="w-full bg-[#0a1512] py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Ready to Boost</span>
          <br />
          <span className="text-white">Your </span>
          <span className="text-teal-400">Digital Presence?</span>
        </h2>
        
        {/* Description */}
        <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Whether you're a startup ready to make your mark or an established business aiming to amplify your digital strategy, our team is here to guide you.
        </p>

        <a href="/contacts">
        <button
            
            className="py-4 px-8 bg-teal-400 hover:bg-teal-500 text-[#0a1512] font-semibold rounded-full transition-colors duration-300"
          >
            Get started
          </button>
          </a>
        
       
      </div>
    </div>
  );
};

export default DigitalPresenceCTA;