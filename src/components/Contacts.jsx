'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className=" mt-28 text-white py-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, rgba(20, 184, 166, 0.2) 40%, transparent 70%)'
          }}
        ></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-teal-400">Touch</span></h2>
          <p className="text-gray-300">
            Have questions or ready to start your project? Reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            
            {formStatus.submitted && (
              <div className="mb-6 p-4 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <p>{formStatus.message}</p>
              </div>
            )}
            
            {formStatus.error && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
                <p>{formStatus.message}</p>
              </div>
            )}
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-700/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-700/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-teal-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-700/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <a href="https://wa.me/917012151014">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>
            </form>
          </div>
          
          {/* Contact info and social media */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.877l-1.81 1.07a11.502 11.502 0 005.25 5.25l1.07-1.81a1 1 0 01.877-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                  <p className="text-base text-white">+91 70121 51014</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <p className="text-base text-white">info@insightmakers.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-400">Address</h4>
                  <p className="text-base text-white">123 Business Street,<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            {/* Social media section - Updated with teal theme */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/16AB2364kh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H15C13.67 2 12.4 2.5 11.46 3.44C10.53 4.38 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z"></path>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/insightsmarketers?igsh=MXhmajY0MjRuYWk3aw%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C14.72 2 15.05 2.01 16.11 2.06C17.18 2.11 17.91 2.28 18.55 2.53C19.21 2.78 19.77 3.12 20.33 3.68C20.89 4.23 21.23 4.79 21.48 5.45C21.73 6.09 21.9 6.82 21.95 7.89C22 8.95 22 9.28 22 12C22 14.72 21.99 15.05 21.94 16.11C21.89 17.18 21.72 17.91 21.47 18.55C21.22 19.21 20.88 19.77 20.32 20.33C19.77 20.89 19.21 21.23 18.55 21.48C17.91 21.73 17.18 21.9 16.11 21.95C15.05 22 14.72 22 12 22C9.28 22 8.95 21.99 7.89 21.94C6.82 21.89 6.09 21.72 5.45 21.47C4.79 21.22 4.23 20.88 3.67 20.32C3.11 19.77 2.77 19.21 2.52 18.55C2.27 17.91 2.1 17.18 2.05 16.11C2 15.05 2 14.72 2 12C2 9.28 2.01 8.95 2.06 7.89C2.11 6.82 2.28 6.09 2.53 5.45C2.78 4.79 3.12 4.23 3.68 3.67C4.23 3.11 4.79 2.77 5.45 2.52C6.09 2.27 6.82 2.1 7.89 2.05C8.95 2 9.28 2 12 2ZM12 7C10.67 7 9.4 7.53 8.46 8.46C7.53 9.4 7 10.67 7 12C7 13.33 7.53 14.6 8.46 15.54C9.4 16.47 10.67 17 12 17C13.33 17 14.6 16.47 15.54 15.54C16.47 14.6 17 13.33 17 12C17 10.67 16.47 9.4 15.54 8.46C14.6 7.53 13.33 7 12 7ZM18.5 6.75C18.5 6.41 18.37 6.09 18.13 5.87C17.91 5.63 17.59 5.5 17.25 5.5C16.91 5.5 16.59 5.63 16.37 5.87C16.13 6.09 16 6.41 16 6.75C16 7.09 16.13 7.41 16.37 7.63C16.59 7.87 16.91 8 17.25 8C17.59 8 17.91 7.87 18.13 7.63C18.37 7.41 18.5 7.09 18.5 6.75ZM12 9C12.8 9 13.56 9.32 14.12 9.88C14.68 10.44 15 11.2 15 12C15 12.8 14.68 13.56 14.12 14.12C13.56 14.68 12.8 15 12 15C11.2 15 10.44 14.68 9.88 14.12C9.32 13.56 9 12.8 9 12C9 11.2 9.32 10.44 9.88 9.88C10.44 9.32 11.2 9 12 9Z"></path>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42C22.42 5.94 22.18 5.51 21.84 5.16C21.5 4.81 21.07 4.55 20.59 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.41 4.42C2.93 4.55 2.5 4.81 2.16 5.16C1.82 5.51 1.58 5.94 1.46 6.42C1.14 8.21 1 10.33 1 12C1 13.67 1.14 15.79 1.46 17.58C1.58 18.06 1.82 18.49 2.16 18.84C2.5 19.19 2.93 19.45 3.41 19.58C5.12 20 12 20 12 20C12 20 18.88 20 20.59 19.58C21.07 19.45 21.5 19.19 21.84 18.84C22.18 18.49 22.42 18.06 22.54 17.58C22.86 15.79 23 13.67 23 12C23 10.33 22.86 8.21 22.54 6.42ZM9.75 15.5V8.5L15.5 12L9.75 15.5Z"></path>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 8C7.33 8 8 7.33 8 6.5C8 5.67 7.33 5 6.5 5C5.67 5 5 5.67 5 6.5C5 7.33 5.67 8 6.5 8ZM5 10H8V19H5V10ZM12.6 10H9.8V19H12.6V14.2C12.6 11.8 15.7 11.6 15.7 14.2V19H18.5V13.3C18.5 9 13.5 9.2 12.6 11.1V10Z"></path>
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/917012151014" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 hover:bg-teal-500/30 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 14.4L17.2 14.3L16.1 13.7C15.7 13.5 15.3 13.6 15 13.9L14.1 14.8C14 14.9 13.7 15 13.5 14.9C12.7 14.5 11.9 14 11.2 13.2C10.5 12.5 9.91 11.7 9.56 10.9C9.47 10.7 9.53 10.5 9.67 10.3L10.5 9.39999C10.8 9.09999 10.9 8.69999 10.7 8.29999L10.1 7.19999C10 6.99999 9.91 6.79999 9.79 6.59999C9.58 6.19999 9.18 5.99999 8.77 6.09999C8.28 6.19999 7.83 6.39999 7.41 6.59999C6.7 7.09999 6.14 7.79999 6.14 8.69999C6.16 9.59999 6.33 10.5 6.69 11.4C7.44 13.1 8.6 14.6 10.1 15.8C11.1 16.6 12.2 17.3 13.3 17.7C14.1 18 14.8 18.1 15.6 18C16.5 17.9 17.2 17.3 17.7 16.6C17.9 16.2 18.1 15.8 18.2 15.3C18.3 14.9 18 14.5 17.5 14.4Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation for background glow */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.05); }
        }
        
        .animate-pulse-center {
          animation: pulse-glow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;