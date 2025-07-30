'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoHeroSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-48"
    >
      {/* Base background matching the image - centered dark gradient */}
      <div className="absolute inset-0 z-0">
        {/* Dark radial background centered in the screen */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, #0f2320 0%, #091b18 50%, #06120f 100%)'
          }}
        ></div>
        
        {/* ENHANCED: Center glow effect - more vibrant and centered, responsive sizes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          {/* Large outer glow - creates a base layer */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] lg:w-[1400px] h-[800px] md:h-[1200px] lg:h-[1400px] rounded-full blur-[100px] md:blur-[180px] animate-pulse-center"
            style={{
              background: 'radial-gradient(circle, rgba(45, 212, 191, 0.25) 0%, rgba(20, 184, 166, 0.18) 40%, transparent 70%)'
            }}
          ></div>
          
          {/* Main glow layer - more vibrant and intense */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] rounded-full blur-[80px] md:blur-[150px] animate-pulse-center-alt"
            style={{
              background: 'radial-gradient(circle, rgba(45, 212, 191, 0.35) 0%, rgba(20, 184, 166, 0.25) 50%, transparent 75%)'
            }}
          ></div>
          
          {/* Secondary glow with cyan accent for color variation */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[800px] h-[500px] md:h-[600px] lg:h-[800px] rounded-full blur-[60px] md:blur-[120px] animate-pulse-core"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.30) 0%, rgba(14, 165, 233, 0.22) 50%, transparent 75%)'
            }}
          ></div>
          
          {/* Inner mid-layer glow - more brightness */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] rounded-full blur-[50px] md:blur-[100px] animate-glow-intense"
            style={{
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.40) 0%, rgba(6, 182, 212, 0.30) 60%, transparent 80%)'
            }}
          ></div>
          
          {/* ENHANCED: Bright core glow - most intense */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] lg:w-[350px] h-[200px] md:h-[300px] lg:h-[350px] rounded-full blur-[40px] md:blur-[70px] animate-core-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(94, 234, 212, 0.50) 0%, rgba(45, 212, 191, 0.35) 60%, transparent 90%)'
            }}
          ></div>
          
          {/* ENHANCED: Ultra-bright center point */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] md:w-[120px] lg:w-[150px] h-[80px] md:h-[120px] lg:h-[150px] rounded-full blur-[25px] md:blur-[40px] animate-center-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(165, 243, 252, 0.65) 0%, rgba(94, 234, 212, 0.45) 60%, transparent 90%)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 z-[1] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Center content container */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 overflow-visible">
        {/* Text content - centered */}
        <motion.div 
          className="text-center mb-16 relative"
          style={{ 
            opacity: textOpacity,
            y: textY
          }}
        >
          {/* ENHANCED: Large background glow behind the entire content - more vibrant and perfectly centered, responsive */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[180%] md:w-[200%] lg:w-[220%] h-[150%] sm:h-[180%] md:h-[200%] lg:h-[220%] bg-gradient-to-br from-teal-900/50 via-cyan-800/40 to-blue-700/50 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse-ultra"></div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight relative">
            <span className="relative z-10">Mark Your<br />
             <span className="text-[#4fd1c5] relative">
              Signature
            </span></span>
            {/* ENHANCED: Prominent glow effect behind text - responsive */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[130%] md:w-[140%] lg:w-[150%] h-[120%] sm:h-[130%] md:h-[140%] lg:h-[150%] bg-gradient-to-r from-teal-900/50 via-cyan-800/40 to-blue-700/50 rounded-full blur-[40px] md:blur-[70px] -z-10 animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[110%] md:w-[115%] lg:w-[120%] h-[140%] sm:h-[150%] md:h-[160%] lg:h-[170%] bg-gradient-to-b from-teal-800/50 via-cyan-700/40 to-transparent rounded-[50%] blur-[30px] md:blur-[60px] -z-10 animate-pulse-medium"></div>
          </h1>
          
          <p className="mt-6 text-lg text-center text-gray-300 max-w-3xl mx-auto relative z-10">
          mpower your business with expert digital marketing, innovative branding, and custom web development solutions from a leading digital agency in Kochi, Kerala, driving growth across India, the USA and Dubai.
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[120%] md:w-[130%] lg:w-[140%] h-[180%] sm:h-[200%] md:h-[210%] lg:h-[220%] bg-gradient-to-t from-teal-900/15 via-transparent to-transparent rounded-full blur-[25px] md:blur-[40px] -z-10"></span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="relative overflow-hidden bg-gradient-to-r from-teal-700 to-teal-900 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 group shadow-lg shadow-teal-900/20"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              <span className="absolute -inset-[100%] w-[300%] h-[300%] -z-10 rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></span>
              {/* Button glow effect */}
              <span className="absolute -inset-1 rounded-full bg-teal-400/70 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
            </a>
          </div>
        </motion.div>

        {/* Video/Image container */}
        <motion.div 
          className="w-full max-w-5xl mx-auto rounded-t-3xl overflow-hidden relative"
          style={{ 
            scale: videoScale
          }}
        >
          {/* ENHANCED: Glow border effect */}
          <div className="absolute -inset-0.5 rounded-t-3xl blur-md animate-border-glow"></div>
          
          <div className="w-full aspect-[16/9] bg-white/5 backdrop-blur-sm rounded-t-3xl overflow-hidden shadow-2xl relative z-10">
            {/* Replace with actual video or image */}
            <video 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/Videos/insightsvd2.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay gradient for video */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a15]/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced animation keyframes */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        
        @keyframes twinkle-bright {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        
        @keyframes glow-primary {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        
        @keyframes glow-secondary {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes glow-tertiary {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          33% { opacity: 0.6; transform: scale(1.08); }
          66% { opacity: 0.7; transform: scale(0.95); }
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        
        @keyframes shine {
          to {
            left: 100%;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        
        @keyframes pulse-ultra {
          0%, 100% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        
        @keyframes pulse-radial {
          0%, 100% { opacity: 0.4; background-size: 100% 100%; }
          50% { opacity: 0.7; background-size: 150% 150%; }
        }
        
        @keyframes pulse-center {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes pulse-center-alt {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.9); }
        }
        
        @keyframes pulse-core {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes core-pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
        }
        
        @keyframes center-pulse {
          0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .animate-twinkle-bright {
          animation: twinkle-bright 5s ease-in-out infinite;
        }
        
        .animate-glow-primary {
          animation: glow-primary 8s ease-in-out infinite;
        }
        
        .animate-glow-secondary {
          animation: glow-secondary 12s ease-in-out infinite;
        }
        
        .animate-glow-tertiary {
          animation: glow-tertiary 15s ease-in-out infinite;
        }
        
        .animate-border-glow {
          animation: border-glow 4s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 6s infinite linear;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 8s ease-in-out infinite;
        }
        
        .animate-pulse-ultra {
          animation: pulse-ultra 10s ease-in-out infinite;
        }
        
        .animate-pulse-radial {
          animation: pulse-radial 8s ease-in-out infinite;
        }
        
        .animate-pulse-center {
          animation: pulse-center 8s ease-in-out infinite;
        }
        
        .animate-pulse-center-alt {
          animation: pulse-center-alt 12s ease-in-out infinite;
        }
        
        .animate-pulse-core {
          animation: pulse-core 6s ease-in-out infinite;
        }
        
        .animate-core-pulse {
          animation: core-pulse 4s ease-in-out infinite;
        }
        
        .animate-center-pulse {
          animation: center-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VideoHeroSection;