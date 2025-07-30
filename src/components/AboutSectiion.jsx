"use client"
'use client';

import React, { useEffect } from 'react';

const AboutSection = () => {
  // Set up animation on component mount
  useEffect(() => {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of element is visible
      };
      
      // Create observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // When element is intersecting (visible)
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Once revealed, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Get all elements with reveal class
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        observer.observe(el);
      });
      
      // Cleanup
      return () => {
        revealElements.forEach(el => {
          observer.unobserve(el);
        });
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        el.classList.add('reveal-active');
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Subtle centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#5eead4]/10 blur-3xl"></div>
      
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Video with reduced height */}
          <div className="relative rounded-2xl overflow-hidden reveal reveal-left">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/20 to-transparent z-10"></div>
            
            {/* Video container - Fixed height */}
            <div className="w-full h-[320px] bg-gradient-to-br from-[#0e1a16] to-[#0e1a16]/70 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Video element with autoplay and loop */}
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
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0e1a16]/90 border border-gray-800 p-5 rounded-xl backdrop-blur-sm z-20 shadow-xl reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5eead4] text-2xl font-bold">5+</p>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-[#5eead4] text-2xl font-bold">100+</p>
                  <p className="text-gray-300 text-sm">Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="reveal reveal-right">
            <h2 className="text-4xl font-bold mb-5">
              <span className="text-white">About </span>
              <span className="text-[#5eead4]">Insights</span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
            We are a passionate team of digital innovators offering expert digital marketing, branding, and web development services. Since our inception, Insights has grown into a creative digital agency in Kochi, Kerala, delivering impactful and results-driven solutions for businesses across India, the USA and Dubai. We craft digital experiences that connect, engage and inspire audiences, helping brands thrive in today’s competitive online environment.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-8 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5eead4]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Creative Design</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5eead4]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Modern Technology</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5eead4]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Result Focused</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5eead4]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Client Support</span>
                </div>
              </div>
            </div>
            <a href="/about">
            <button className="px-7 py-3 bg-[#5eead4] text-[#0e1a16] font-semibold rounded-lg hover:bg-[#5eead4]/90 transition-all duration-300">
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Simple CSS animations */}
      <style jsx global>{`
        /* Base reveal styles */
        .reveal {
          opacity: 0;
          transition: all 0.8s ease;
        }
        
        /* Left side animation */
        .reveal-left {
          transform: translateX(-50px);
        }
        
        /* Right side animation */
        .reveal-right {
          transform: translateX(50px);
        }
        
        /* Up animation for stats card */
        .reveal-up {
          transform: translateY(30px);
        }
        
        /* Active state (triggered by intersection observer) */
        .reveal-active {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>
    </div>
  );
};

export default AboutSection;