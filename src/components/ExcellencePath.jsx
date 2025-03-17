"use client"
import React, { useState, useEffect } from 'react';

const CompanyServices = () => {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateIn(true);
  }, []);

  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center py-10 px-4">
      {/* Heading Section - Made more compact */}
      <div className="text-center mb-10 transition-all duration-700 transform opacity-0 translate-y-10" 
           style={{ opacity: animateIn ? 1 : 0, transform: animateIn ? 'translateY(0)' : 'translateY(10px)' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Premium Services</h1>
        <p className="text-lg text-teal-400">Elevate your business with our comprehensive solutions.</p>
      </div>

      {/* Bento Grid Layout - Made more compact */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Branding - Large Card with new animation */}
        <div className="md:col-span-8 bg-zinc-900 rounded-3xl p-6 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-900/20"
             style={{ 
               opacity: animateIn ? 1 : 0, 
               transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
             }}>
          <div className="flex flex-col md:flex-row gap-6 h-full">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 text-teal-600">Branding</h2>
              <p className="text-gray-400 mb-4 text-sm">Crafting unique brand identities that resonate with your audience and leave lasting impressions.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Logo Design & Identity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Brand Strategy</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Brand Guidelines</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Visual Identity Systems</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              {/* New Branding Visual with Improved Animation */}
              <div className="bg-zinc-800 rounded-xl overflow-hidden h-48 relative">
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-80"></div>
                
                {/* Animated logo construction elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Rotating outer circle */}
                  <div className="absolute w-36 h-36 border-2 border-teal-500/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
                  
                  {/* Pulsing middle circle */}
                  <div className="absolute w-28 h-28 border-2 border-teal-400/40 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
                  
                  {/* Inner logo shape */}
                  <div className="relative w-20 h-20">
                    {/* Triangle */}
                    <div className="absolute inset-0 bg-teal-500/80 clip-path-triangle animate-[float_3s_ease-in-out_infinite]"
                         style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    
                    {/* Circle overlay */}
                    <div className="absolute w-10 h-10 bg-purple-500/80 rounded-full top-6 left-5 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute h-8 w-8 bg-teal-600/60 rounded-md top-4 left-4 animate-[float_4s_ease-in-out_infinite] rotate-12"></div>
                <div className="absolute h-6 w-6 bg-purple-500/60 rounded-full bottom-6 left-10 animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
                <div className="absolute h-4 w-12 bg-indigo-500/60 rounded-md bottom-10 right-10 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Color palette swatches sliding across */}
                <div className="absolute top-3 right-0 h-4 w-full flex space-x-1 animate-[slideLeft_8s_linear_infinite]">
                  <div className="h-4 w-6 bg-teal-500 rounded-sm"></div>
                  <div className="h-4 w-6 bg-indigo-500 rounded-sm"></div>
                  <div className="h-4 w-6 bg-purple-500 rounded-sm"></div>
                  <div className="h-4 w-6 bg-blue-500 rounded-sm"></div>
                  <div className="h-4 w-6 bg-green-400 rounded-sm"></div>
                </div>
                
                {/* Moving design grid to show brand guidelines */}
                <div className="absolute bottom-2 left-0 h-8 w-full grid grid-cols-6 gap-1 px-2 animate-[slideRight_10s_linear_infinite]">
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm flex items-center justify-center">
                    <div className="h-4 w-4 bg-teal-500/70 rounded-sm"></div>
                  </div>
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm"></div>
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm flex items-center justify-center">
                    <div className="h-1 w-6 bg-teal-500/70 rounded-sm"></div>
                  </div>
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm"></div>
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm flex items-center justify-center">
                    <div className="h-4 w-4 bg-purple-500/70 rounded-full"></div>
                  </div>
                  <div className="h-8 w-full bg-zinc-700/50 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Marketing - Vertical Card - Made more compact */}
        <div className="md:col-span-4 bg-zinc-900 rounded-3xl p-6 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-900/20"
             style={{ 
               opacity: animateIn ? 1 : 0, 
               transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
               transitionDelay: '0.1s'
             }}>
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Digital Marketing</h2>
          <p className="text-gray-400 mb-3 text-sm">Driving targeted traffic and converting prospects.</p>
          
          {/* Marketing Analytics Visual with Animation - Made more compact */}
          <div className="bg-zinc-800 rounded-xl overflow-hidden mt-2 h-60">
            <div className="p-4 h-full flex flex-col">
              {/* Analytics Graph */}
              <div className="bg-zinc-700 rounded-md p-2 mb-3 flex-1">
                <div className="flex justify-between mb-1">
                  <div className="text-xs text-gray-400">Campaigns</div>
                  <div className="text-xs text-teal-400">+24.8%</div>
                </div>
                <div className="h-24 flex items-end space-x-1">
                  <div className="bg-teal-600 w-4 h-8 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
                  <div className="bg-teal-600 w-4 h-12 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                  <div className="bg-teal-600 w-4 h-6 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
                  <div className="bg-teal-600 w-4 h-16 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
                  <div className="bg-teal-600 w-4 h-10 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
                  <div className="bg-teal-600 w-4 h-18 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}></div>
                  <div className="bg-teal-600 w-4 h-20 rounded-t-md animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }}></div>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="grid grid-cols-4 gap-2">
                {/* Instagram Icon */}
<div className="w-5 h-5 bg-teal-600 rounded-sm flex items-center justify-center relative hover:shadow-lg hover:shadow-teal-600/50 transition-all duration-300">
  <svg 
    className="w-3 h-3 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
  </svg>
</div>

{/* Facebook Icon */}
<div className="w-5 h-5 bg-teal-600 rounded-sm flex items-center justify-center relative hover:shadow-lg hover:shadow-teal-600/50 transition-all duration-300">
  <svg 
    className="w-3 h-3 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</div>

{/* LinkedIn Icon */}
<div className="w-5 h-5 bg-teal-600 rounded-sm flex items-center justify-center relative hover:shadow-lg hover:shadow-teal-600/50 transition-all duration-300">
  <svg 
    className="w-3 h-3 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6 9H2V21H6V9Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</div>

{/* YouTube Icon */}
<div className="w-5 h-5 bg-teal-600 rounded-sm flex items-center justify-center relative hover:shadow-lg hover:shadow-teal-600/50 transition-all duration-300">
  <svg 
    className="w-3 h-3 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 22.9965 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Development - Small Card - Made more compact */}
        <div className="md:col-span-4 bg-zinc-900 rounded-3xl p-6 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-900/20"
             style={{ 
               opacity: animateIn ? 1 : 0, 
               transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
               transitionDelay: '0.2s'
             }}>
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Web Development</h2>
          <p className="text-gray-400 mb-3 text-sm">Building responsive, fast websites.</p>
          
          {/* Web Development Visual with Animation - Made more compact */}
          <div className="bg-zinc-800 rounded-xl overflow-hidden h-48">
            <div className="p-3 h-full flex flex-col">
              {/* Code Snippet with Typewriter Effect */}
              <div className="bg-zinc-700 rounded-md p-2 mb-2 flex-1 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-[pulse_3s_ease-in-out_infinite] opacity-50"></div>
                <div className="relative">
                  <div className="text-teal-400 mb-1 text-xs overflow-hidden whitespace-nowrap animate-[typing_3.5s_steps(40,end)_infinite]">&lt;div className="container"&gt;</div>
                  <div className="text-green-400 mb-1 text-xs">&nbsp;&nbsp;&lt;header className="header"&gt;</div>
                  <div className="text-yellow-400 mb-1 text-xs">&nbsp;&nbsp;&nbsp;&nbsp;&lt;nav&gt;...&lt;/nav&gt;</div>
                  <div className="text-green-400 mb-1 text-xs">&nbsp;&nbsp;&lt;/header&gt;</div>
                  <div className="text-teal-400 mb-1 text-xs">&nbsp;&nbsp;&lt;main className="content"&gt;</div>
                  <div className="text-pink-400 mb-1 text-xs">&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;...&lt;/section&gt;</div>
                  <div className="text-teal-400 mb-1 text-xs">&nbsp;&nbsp;&lt;/main&gt;</div>
                  <div className="text-teal-400 mb-1 text-xs">&lt;/div&gt;</div>
                </div>
              </div>
              
              {/* Browser Mockup */}
              <div className="bg-zinc-700 rounded-md h-12">
                <div className="h-4 bg-zinc-600 flex items-center px-2 rounded-t-md">
                  <div className="w-16 h-2 bg-zinc-800 rounded-full mr-auto"></div>
                  <div className="w-2 h-2 bg-zinc-800 rounded-full ml-1"></div>
                  <div className="w-2 h-2 bg-zinc-800 rounded-full ml-1"></div>
                </div>
                <div className="flex justify-center items-center h-8">
                  <div className="w-5 h-5 border-t-2 border-r-2 border-teal-500 rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Development - Medium Card - Made more compact */}
        <div className="md:col-span-8 bg-zinc-900 rounded-3xl p-6 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-900/20"
             style={{ 
               opacity: animateIn ? 1 : 0, 
               transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
               transitionDelay: '0.3s'
             }}>
          <div className="flex flex-col md:flex-row gap-4 h-full">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 text-teal-600">App Development</h2>
              <p className="text-gray-400 mb-3 text-sm">Creating intuitive mobile applications that connect your business directly to your customers.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>iOS & Android Apps</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Cross-Platform Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>App Maintenance & Updates</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              {/* App Development Visual with Animation - Made more compact */}
              <div className="relative w-48 h-48 flex justify-center items-center">
                {/* Animated Phone Mockup */}
                <div className="relative w-32 h-full animate-[float_6s_ease-in-out_infinite]">
                  <div className="absolute inset-0 bg-zinc-700 rounded-3xl"></div>
                  <div className="absolute inset-1 bg-zinc-900 rounded-3xl"></div>
                  <div className="absolute inset-2 bg-zinc-800 rounded-2xl flex flex-col p-2 overflow-hidden">
                    {/* App UI with animations */}
                    <div className="bg-teal-900 h-4 w-16 rounded-full mb-1 mx-auto animate-pulse"></div>
                    <div className="bg-teal-800/50 h-16 w-full rounded-lg mb-1 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" 
                           style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                    <div className="flex space-x-1 mb-1">
                      <div className="bg-teal-900/50 h-8 w-1/2 rounded-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" 
                             style={{ backgroundSize: '200% 100%', animationDelay: '0.2s' }}></div>
                      </div>
                      <div className="bg-teal-900/50 h-8 w-1/2 rounded-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" 
                             style={{ backgroundSize: '200% 100%', animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                    <div className="bg-teal-900/50 h-8 w-full rounded-lg mb-1 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" 
                           style={{ backgroundSize: '200% 100%', animationDelay: '0.6s' }}></div>
                    </div>
                    <div className="bg-teal-900/50 h-8 w-full rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" 
                           style={{ backgroundSize: '200% 100%', animationDelay: '0.8s' }}></div>
                    </div>
                    
                    {/* Navigation Bar */}
                    <div className="mt-auto bg-zinc-800 h-6 w-full rounded-full flex justify-around items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-sm animate-pulse"></div>
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-teal-500 rounded-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute w-8 h-8 bg-teal-500/20 rounded-full top-0 right-0 animate-[float_4s_ease-in-out_infinite]" 
                     style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-6 h-6 bg-teal-500/20 rounded-full bottom-8 left-0 animate-[float_5s_ease-in-out_infinite]" 
                     style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute w-4 h-4 bg-teal-500/20 rounded-full top-8 left-4 animate-[float_3s_ease-in-out_infinite]" 
                     style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations - Add to head or style tag */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
          50% { width: 100% }
          55% { width: 0 }
        }
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default CompanyServices;