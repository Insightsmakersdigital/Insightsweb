"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const TeamSection = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Daniel Reed',
      role: 'Co-Founder, CEO',
      imageUrl: '/team1.png',
    },
    {
      id: 2,
      name: 'James Turner',
      role: 'Developer, Tech Lead',
      imageUrl: '/team1.png',
    },
    {
      id: 3,
      name: 'Michael Carter',
      role: 'Marketing, Organizer',
      imageUrl: '/team1.png',
    },
    {
      id: 4,
      name: 'Alex Johnson',
      role: 'UX Designer',
      imageUrl: '/team1.png',
    },
    {
      id: 5,
      name: 'Sara Williams',
      role: 'Product Manager',
      imageUrl: '/team1.png',
    },
    {
      id: 6,
      name: 'Robert Chen',
      role: 'Backend Developer',
      imageUrl: '/team1.png',
    },
  ];

  // Enhanced teal color palette - focused on first teal variant
  const colors = {
   
    cardBg: '#0A2E2A', // Dark rich teal
    infoBg: '#0D3D39', // Slightly lighter teal for info bar
    iconBg: '#0A2E2A', // Dark teal for icon background
    teal: {
      bright: '#14B8A6', // Bright teal (teal-500)
      medium: '#0D9488', // Medium teal (teal-600)
      deep: '#0F766E', // Deep teal (teal-700)
      glow: 'rgba(20, 184, 166, 0.7)', // Bright teal glow
      subtleGlow: 'rgba(20, 184, 166, 0.3)', // Subtle teal glow
    },
    text: {
      primary: '#F0FDFA', // Almost white with teal tint
      secondary: '#99F6E4', // Light teal for secondary text
    }
  };

  // Function to create enhanced teal glow styles
  const getEnhancedGlowStyle = (isHovered) => {
    if (isHovered) {
      return {
        boxShadow: `
          0 0 0 1px ${colors.teal.subtleGlow},
          0 0 15px 2px ${colors.teal.glow},
          0 0 30px 5px ${colors.teal.subtleGlow}
        `,
      };
    } else {
      return {
        boxShadow: `
          0 0 0 1px ${colors.teal.subtleGlow},
          0 0 7px 1px ${colors.teal.subtleGlow}
        `,
      };
    }
  };

  return (
    <div 
      className="py-16 px-6 min-h-screen"
      style={{ 
       
      }}
    >
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ 
            color: colors.text.primary,
            textShadow: `0 0 20px ${colors.teal.subtleGlow}`
          }}
        >
          Our Team
        </h2>
        <div 
          className="w-24 h-1 mx-auto mb-8 rounded-full"
          style={{ 
            backgroundColor: colors.teal.bright,
            boxShadow: `0 0 15px ${colors.teal.glow}`
          }}
        ></div>
        <p 
          className="text-lg max-w-2xl mx-auto"
          style={{ color: colors.text.secondary }}
        >
          Meet the talented professionals behind our success, driving innovation and excellence in everything we do.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="relative transform transition-all duration-500 ease-out"
            style={{
              transform: hoveredCard === member.id ? 'translateY(-12px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated glow border that intensifies on hover */}
            <div 
              className="absolute inset-0 rounded-[20px] transition-all duration-500"
              style={{
                ...getEnhancedGlowStyle(hoveredCard === member.id),
                padding: '1px',
              }}
            ></div>
            
            {/* Main card content */}
            <div className="relative flex flex-col overflow-hidden rounded-[20px] h-full">
              {/* Image container with subtle zoom animation on hover */}
              <div className="relative h-[380px] w-full overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredCard === member.id ? 'scale(1.07)' : 'scale(1)',
                  }}
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={member.id <= 3}
                  />
                </div>
                
                {/* White dot on the second card */}
                {member.id === 2 && (
                  <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full"></div>
                )}
                
                {/* Enhanced gradient overlay at the bottom to improve text readability */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${colors.cardBg}ee, ${colors.cardBg}00)`,
                    opacity: hoveredCard === member.id ? 0.9 : 0,
                  }}
                ></div>
              </div>
              
              {/* Info bar with LinkedIn icon */}
              <div 
                className="flex justify-between items-center px-6 py-4 transition-all duration-500"
                style={{ 
                  backgroundColor: colors.infoBg,
                  borderTop: `1px solid ${hoveredCard === member.id ? colors.teal.medium : 'transparent'}`,
                }}
              >
                <div>
                  <h3 
                    className="text-xl font-medium mb-0.5 transition-all duration-300"
                    style={{ 
                      color: colors.text.primary,
                      transform: hoveredCard === member.id ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-[15px] transition-all duration-300"
                    style={{ 
                      color: hoveredCard === member.id ? colors.text.secondary : 'rgba(153, 246, 228, 0.7)',
                      transform: hoveredCard === member.id ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    {member.role}
                  </p>
                </div>
                
                {/* LinkedIn icon with enhanced animation */}
                <div 
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCard === member.id ? colors.teal.medium : colors.iconBg,
                    boxShadow: hoveredCard === member.id
                      ? `0 0 20px 5px ${colors.teal.subtleGlow}`
                      : 'none',
                    transform: hoveredCard === member.id ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  <LinkedInIcon 
                    isHovered={hoveredCard === member.id}
                    colors={colors}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// LinkedIn Icon with enhanced animation
const LinkedInIcon = ({ isHovered, colors }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      style={{
        filter: isHovered ? `drop-shadow(0 0 3px ${colors.text.secondary})` : 'none',
      }}
    >
      <path 
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" 
        fill="none" 
        stroke={isHovered ? colors.text.secondary : colors.text.primary} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TeamSection;

