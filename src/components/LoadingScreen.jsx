"use client";
import { useState, useEffect } from 'react';

const InsightLoader = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [zoom, setZoom] = useState(1);
  
  const fullText = "INSIGHTS";
  
  // Handle the typing effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 200);
      
      return () => clearTimeout(typingTimer);
    } else {
      // When typing is complete, wait a moment and set typing complete
      const completeTimer = setTimeout(() => {
        setTypingComplete(true);
      }, 500);
      
      return () => clearTimeout(completeTimer);
    }
  }, [displayText]);
  
  // Handle zoom transition after typing is complete
  useEffect(() => {
    if (typingComplete) {
      // Start zoom effect
      const zoomTimer = setTimeout(() => {
        setZoom(2.5); // Zoom to 2.5x size
        
        // After zoom completes, hide the loader
        const exitTimer = setTimeout(() => {
          setIsVisible(false);
        }, 1200);
        
        return () => clearTimeout(exitTimer);
      }, 200);
      
      return () => clearTimeout(zoomTimer);
    }
  }, [typingComplete]);

  if (!isVisible) return children;

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black"></div>
      
      {/* Main content with zoom transition */}
      <div 
        className="relative text-center transition-all duration-1000 ease-in-out"
        style={{
          transform: `scale(${zoom})`,
          opacity: zoom > 2 ? 1 - ((zoom - 2) / 1.5) : 1 // Fade out during final part of zoom
        }}
      >
        <h1 className="text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
          {displayText}
          <span 
            className={`inline-block w-2 h-12 bg-teal-400 ml-1 ${typingComplete ? 'opacity-0' : 'animate-pulse'}`}
            style={{ transition: 'opacity 0.3s ease-out' }}
          ></span>
        </h1>
      </div>
    </div>
  );
};

export default InsightLoader;