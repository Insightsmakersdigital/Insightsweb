'use client';
import { useState, useEffect, useRef } from 'react';

export default function MinimalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef(null);
  const revealTimeoutRef = useRef(null);
  
  // Sample images - replace with your own
  const images = [
    { src: "/Posters/p1.png", alt: "Image 1" },
    { src: "/Posters/p2.png", alt: "Image 2" },
    { src: "/Posters/p3.png", alt: "Image 3" },
    { src: "/Posters/p4.png", alt: "Image 4" },
    { src: "/Posters/p5.png", alt: "Image 5" },
    { src: "/Posters/p6.png", alt: "Image 1" },
    { src: "/Posters/p7.png", alt: "Image 2" },
    { src: "/Posters/p1.png", alt: "Image 1" },
    { src: "/Posters/p2.png", alt: "Image 2" },
    { src: "/Posters/p3.png", alt: "Image 3" },
    { src: "/Posters/p4.png", alt: "Image 4" },
    { src: "/Posters/p5.png", alt: "Image 5" },
    { src: "/Posters/p6.png", alt: "Image 1" },
    { src: "/Posters/p7.png", alt: "Image 2" },
   
  ];

  // Initial reveal animation
  useEffect(() => {
    revealTimeoutRef.current = setTimeout(() => {
      setIsRevealed(true);
    }, 500);
    
    return () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovering && isRevealed) {
      autoPlayRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex, isHovering, isRevealed, images.length]);

  // Calculate position for each card
  const getCardStyle = (index) => {
    // Calculate the position relative to active index
    const position = (index - activeIndex + images.length) % images.length;
    
    // Adjust position to make a smooth circle
    let normalizedPosition = position;
    if (normalizedPosition > images.length / 2) {
      normalizedPosition = position - images.length;
    }
    
    // Base transforms for revealed state
    let translateX = normalizedPosition * 50; // Horizontal offset
    let translateZ = -Math.abs(normalizedPosition) * 150; // Z depth
    let translateY = -Math.abs(normalizedPosition) * 30; // Vertical offset
    let rotateY = normalizedPosition * 35; // Y rotation
    let scale = 1 - Math.abs(normalizedPosition) * 0.15; // Scale
    let opacity = 1 - Math.abs(normalizedPosition) * 0.3; // Opacity
    
    // Initial (hidden) position
    if (!isRevealed) {
      translateZ = -800;
      opacity = 0;
      scale = 0.8;
    }
    
    // Initial stagger effect based on index
    const staggerDelay = isRevealed ? 0 : index * 100;
    const transitionDelay = `${staggerDelay}ms`;
    
    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 5 - Math.abs(normalizedPosition),
      transitionDelay
    };
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden rounded-xl mt-6">
      <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
          Our <span className='text-teal-600'>Works</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Driven by innovation and excellence, we are committed to transforming digital experiences and creating lasting value for our clients.
          </p>
        </div>
      {/* Reveal overlay */}
      <div 
        className="absolute inset-0  z-20 transition-opacity duration-1000"
        style={{ 
          opacity: isRevealed ? 0 : 1,
          pointerEvents: isRevealed ? 'none' : 'auto'
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-white/50 text-3xl animate-pulse">
            <svg className="w-16 h-16 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      
      
      {/* 3D Carousel Container */}
      <div 
        className="absolute w-full h-full top-0 left-0 perspective-1500"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
          {/* Cards */}
          {images.map((image, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out-expo transform-style-3d"
                style={style}
                onClick={() => setActiveIndex(index)}
              >
                {/* Larger card with reveal animation */}
                <div 
                  className={`aspect-square w-80 md:w-96 rounded-lg overflow-hidden shadow-2xl transform-style-3d`}
                  style={{
                    boxShadow: isActive 
                      ? '0 35px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(99, 102, 241, 0.4)' 
                      : '0 30px 60px -15px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Image with hover effect */}
                  <div className="relative w-full h-full group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Reflection effect */}
               
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx global>{`
        .perspective-1500 {
          perspective: 1500px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Grid lines animation */
        .grid-lines {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: grid-movement 20s linear infinite;
        }
        
        @keyframes grid-movement {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }
      `}</style>
    </div>
  );
}