'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  // Array of logo objects with image paths and alt text
  const logos = [
    { src: '/Clients/lg1.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg2.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg3.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg4.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg5.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg6.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg1.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg2.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg3.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg4.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg5.png', alt: 'Shopify', width: 120 },
    { src: '/Clients/lg6.png', alt: 'Shopify', width: 120 },
  ];

  const sliderTrackRef = useRef(null);

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    if (!sliderTrack) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Clone all items for the smooth infinite loop
    const logoItems = sliderTrack.querySelectorAll('.logo-item');
    const logoItemWidth = logoItems[0].offsetWidth;
    
    // Clone nodes for seamless looping
    logoItems.forEach(item => {
      const clone = item.cloneNode(true);
      sliderTrack.appendChild(clone);
    });

    // Set the animation duration based on number of logos and desired speed
    // More logos = longer duration to maintain same speed perception
    const totalLogos = logos.length;
    const secondsPerLogo = 2; // How many seconds each logo takes to move across
    const animationDuration = totalLogos * secondsPerLogo;
    
    // Apply the animation
    sliderTrack.style.animationDuration = `${animationDuration}s`;
    sliderTrack.classList.add('animate-slider');

    // Create a style element to add our custom animation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${logoItemWidth * totalLogos}px); }
      }
      .animate-slider {
        animation: slide ${animationDuration}s linear infinite;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      // Clean up by removing the style element
      document.head.removeChild(styleElement);
    };
  }, [logos.length]);

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Subtle central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full blur-[80px] bg-teal-500/10 z-0"></div>
      
      {/* Heading with enhanced styling */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-gray-400 text-xl font-medium">
          Trusted by leading companies
        </h2>
      </div>
      
      {/* Container for infinite scrolling logos */}
      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Gradient overlay on sides with opacity fade only */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0a1512] via-[#0a1512]/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0a1512] via-[#0a1512]/80 to-transparent z-10"></div>
        
        {/* Single continuous track for logos with proper spacing */}
        <div 
          ref={sliderTrackRef} 
          className="flex items-center whitespace-nowrap"
        >
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="logo-item flex items-center justify-center px-6 mx-4"
              style={{ minWidth: `${logo.width}px` }}
            >
              <div className="opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105">
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  width={logo.width}
                  height={45}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;