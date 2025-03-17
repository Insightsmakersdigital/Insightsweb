"use client"
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ProcessTimeline = () => {
  // Refs for each section to detect when they're in view
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  
  // Check if sections are in view
  const section1InView = useInView(section1Ref, { once: false, amount: 0.5 });
  const section2InView = useInView(section2Ref, { once: false, amount: 0.5 });
  const section3InView = useInView(section3Ref, { once: false, amount: 0.5 });
  const section4InView = useInView(section4Ref, { once: false, amount: 0.5 });
  
  // Animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  // Track active section for timeline progress
  const [activeSection, setActiveSection] = useState(0);
  
  // Update animations when sections come into view
  useEffect(() => {
    if (section1InView) {
      controls1.start("visible");
      setActiveSection(1);
    }
    if (section2InView) {
      controls2.start("visible");
      setActiveSection(2);
    }
    if (section3InView) {
      controls3.start("visible");
      setActiveSection(3);
    }
    if (section4InView) {
      controls4.start("visible");
      setActiveSection(4);
    }
  }, [controls1, controls2, controls3, controls4, section1InView, section2InView, section3InView, section4InView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className=" text-white min-h-screen py-20 px-4 md:px-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
        <div className="w-32 h-1 bg-teal-400 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300">
          We follow a structured approach to ensure quality results for every project
        </p>
      </div>

      {/* Timeline container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800">
          {/* Timeline progress indicator */}
          <div 
            className="w-1 bg-teal-400 transition-all duration-500"
            style={{ height: `${activeSection * 25}%` }}
          ></div>
        </div>

        {/* Section 1: Discovery */}
        <div ref={section1Ref} className="mb-24 relative">
          {/* Timeline circle */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${activeSection >= 1 ? 'bg-teal-600' : 'bg-gray-700'}`}>
            <span className="text-white font-bold text-xl">1</span>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="md:text-right md:pr-12 mt-24 md:mt-0"
              initial="hidden"
              animate={controls1}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-bold mb-4">Discovery</h3>
              <p className="text-gray-400">
                We start by understanding your brand, goals, and target audience to develop a strategic direction.
              </p>
            </motion.div>
            
            <motion.div 
              className=" rounded-lg p-6 shadow-lg"
              initial="hidden"
              animate={controls1}
              variants={fadeIn}
            >
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={0}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Brand Analysis</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={1}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Market Research</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={2}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Goal Definition</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Strategy & Planning */}
        <div ref={section2Ref} className="mb-24 relative">
          {/* Timeline circle */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${activeSection >= 2 ? 'bg-teal-600' : 'bg-gray-700'}`}>
            <span className="text-white font-bold text-xl">2</span>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="order-2 md:order-1 bg-teal-950 rounded-lg p-6 shadow-lg"
              initial="hidden"
              animate={controls2}
              variants={fadeIn}
            >
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={0}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Strategic Roadmap</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={1}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Resource Allocation</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={2}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Timeline Development</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 md:text-left md:pl-12 mt-24 md:mt-0"
              initial="hidden"
              animate={controls2}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-bold mb-4">Strategy & Planning</h3>
              <p className="text-gray-400">
                We develop a comprehensive plan with clear milestones to achieve your business objectives.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 3: Design & Development */}
        <div ref={section3Ref} className="mb-24 relative">
          {/* Timeline circle */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${activeSection >= 3 ? 'bg-teal-600' : 'bg-gray-700'}`}>
            <span className="text-white font-bold text-xl">3</span>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="md:text-right md:pr-12 mt-24 md:mt-0"
              initial="hidden"
              animate={controls3}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-bold mb-4">Design & Development</h3>
              <p className="text-gray-400">
                Our creative team brings your vision to life with cutting-edge design and robust development.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-teal-950 rounded-lg p-6 shadow-lg"
              initial="hidden"
              animate={controls3}
              variants={fadeIn}
            >
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={0}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Creative Design</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={1}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Content Creation</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={2}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Technical Implementation</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Section 4: Launch & Optimization */}
        <div ref={section4Ref} className="relative">
          {/* Timeline circle */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${activeSection >= 4 ? 'bg-teal-600' : 'bg-gray-700'}`}>
            <span className="text-white font-bold text-xl">4</span>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="order-2 md:order-1 bg-teal-950 rounded-lg p-6 shadow-lg"
              initial="hidden"
              animate={controls4}
              variants={fadeIn}
            >
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={0}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Testing & QA</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={1}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Deployment</span>
                </motion.li>
                <motion.li 
                  className="flex items-center" 
                  variants={listItemVariants}
                  custom={2}
                >
                  <svg className="w-5 h-5 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Performance Monitoring</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 md:text-left md:pl-12 mt-24 md:mt-0"
              initial="hidden"
              animate={controls4}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-bold mb-4">Launch & Optimization</h3>
              <p className="text-gray-400">
                We ensure a smooth launch and continuous improvement to maximize performance and results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;