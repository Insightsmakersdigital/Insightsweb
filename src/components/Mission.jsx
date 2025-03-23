'use client';

import React from 'react';

const SimpleMissionVision = () => {
  return (
    <div className="w-full bg-[#0a1512] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
          Our <span className='text-teal-600'>Mission</span> & <span className='text-teal-600'>Vision</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Driven by innovation and excellence, we are committed to transforming digital experiences and creating lasting value for our clients.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className=" border border-gray-800 rounded-2xl p-8 hover:border-teal-400/30 transition-all duration-300 shadow-lg">
            <div className="text-teal-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <span className="px-4 py-1 text-xs font-semibold bg-teal-400/20 text-teal-400 rounded-full mb-4 inline-block">
              Mission
            </span>
            
            <h3 className="text-white text-2xl font-bold mb-4">
              Empowering Digital Transformation
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
            At Insights, we help businesses grow by providing effective and result-driven digital marketing solutions. We focus on creating strategies that increase online presence, engage audiences, and drive success in a constantly changing digital world.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0e1a16] border border-gray-800 rounded-2xl p-8 hover:border-teal-400/30 transition-all duration-300 shadow-lg">
            <div className="text-teal-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            
            <span className="px-4 py-1 text-xs font-semibold bg-teal-400/20 text-teal-400 rounded-full mb-4 inline-block">
              Vision
            </span>
            
            <h3 className="text-white text-2xl font-bold mb-4">
              Shaping the Digital Future
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
            Our vision is to become a trusted leader in digital marketing, known for innovative and impactful strategies. We aim to help businesses of all sizes succeed online by delivering creative, data-driven, and reliable marketing solutions.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default SimpleMissionVision;