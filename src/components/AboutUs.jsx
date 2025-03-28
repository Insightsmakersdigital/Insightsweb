"use client"

import React from 'react';
import Image from 'next/image';

const AboutMateDigital = () => {
  // Features/specialities
  const specialities = [
    {
      id: 1,
      title: "Creative Design",
      description: "Crafting visually stunning and engaging digital experiences that leave a lasting impression."
    },
    {
      id: 2,
      title: "Modern Technology",
      description: "Leveraging cutting-edge technologies to build future-proof solutions that scale with your business."
    },
    {
      id: 3,
      title: "Result Focused",
      description: "Delivering measurable outcomes through data-driven approaches and strategic implementation."
    },
    {
      id: 4,
      title: "Client Support",
      description: "Providing exceptional service with dedicated teams that respond quickly to your evolving needs."
    },
    {
      id: 5,
      title: "Strategic Thinking",
      description: "Approaching every project with a thoughtful strategy aligned with your business objectives."
    },
    {
      id: 6,
      title: "Global Expertise",
      description: "Drawing from worldwide talent and experience to bring diverse perspectives to your projects."
    }
  ];

  return (
    <div className="text-white min-h-screen mt-24">
      {/* First Section - About Mate Digital */}
      <div className="pt-20 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a18] via-[#0b1f1d] to-[#0a1a18] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Column on Left (replacing image) */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main video container */}
                <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(45,212,191,0.15)] relative aspect-video lg:aspect-square">
                  {/* Video replaces Image component */}
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/Videos/insightsmotion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-transparent mix-blend-multiply"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-teal-400/20 z-10"></div>
                <div className="absolute top-1/4 -right-8 w-16 h-16 rounded-full border border-teal-400/30 z-10"></div>
              </div>
            </div>
            
            {/* Content Column on Right */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-teal-300">Insights</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-100">
                  We're a passionate team of digital innovators, crafting experiences that connect, engage, and inspire. Founded in 2023, Insights has evolved into a creative powerhouse delivering cutting-edge solutions for businesses worldwide.
                </p>
                
                <p className="text-gray-300">
                  At Insights, we believe that exceptional digital experiences are built at the intersection of strategic thinking, creative design, and technical excellence. Our multidisciplinary team brings together diverse perspectives and expertise to tackle complex challenges and create meaningful solutions.
                </p>
                
                <p className="text-gray-300">
                  We partner with forward-thinking companies ranging from ambitious startups to established enterprises across industries including finance, healthcare, education, and e-commerce. Our collaborative approach ensures that we truly understand your business needs before crafting bespoke digital solutions that drive growth and engagement.
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {specialities.slice(0, 4).map((specialty) => (
                    <div key={specialty.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-7 h-7 bg-teal-900/70 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{specialty.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section - Why Choose Us */}
      <div className="py-20 bg-[#081614] relative" id="why-choose-us">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-800/50 to-transparent"></div>
        <div className="absolute top-20 right-0 w-32 h-32 rounded-full bg-teal-900/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-teal-800/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-teal-300">Us</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We combine strategic thinking, creative design, and technical excellence to deliver digital solutions that drive business growth and meaningful user experiences.
            </p>
          </div>
          
          {/* Specialities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((specialty) => (
              <div 
                key={specialty.id}
                className="bg-gradient-to-br from-[#0c211e] to-[#0a1a18] rounded-xl p-6 border border-teal-800/50 hover:border-teal-700/70 transition-all duration-300 group"
              >
                <div className="mb-4 w-12 h-12 bg-teal-900/70 rounded-xl flex items-center justify-center group-hover:bg-teal-800/80 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <a href="/contacts" className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-medium rounded-lg hover:from-teal-500 hover:to-teal-300 transition-all duration-300 shadow-lg shadow-teal-900/20">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMateDigital;