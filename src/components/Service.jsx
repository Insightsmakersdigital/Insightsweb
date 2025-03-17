"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  // Handle opening the modal with selected service
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent scrolling on the body when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        window.removeEventListener('keydown', handleEsc);
        // Make sure we re-enable scrolling when component unmounts
        if (typeof document !== 'undefined') {
          document.body.style.overflow = 'auto';
        }
      };
    }
    
    return () => {};
  }, []);

  // Service card icons mapped by ID
  const serviceIcons = {
    webdev: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    appdev: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    seo: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14.5L19.5 18.5M10.5 18.5C6.63401 18.5 3.5 15.366 3.5 11.5C3.5 7.63401 6.63401 4.5 10.5 4.5C14.366 4.5 17.5 7.63401 17.5 11.5C17.5 15.366 14.366 18.5 10.5 18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    smm: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 16L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 6.5L16 8L17.5 9.5L19 8L17.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    ppc: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 14C16.3954 14 15.5 13.1046 15.5 12C15.5 10.8954 16.3954 10 17.5 10C18.6046 10 19.5 10.8954 19.5 12C19.5 13.1046 18.6046 14 17.5 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 14C5.39543 14 4.5 13.1046 4.5 12C4.5 10.8954 5.39543 10 6.5 10C7.60457 10 8.5 10.8954 8.5 12C8.5 13.1046 7.60457 14 6.5 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    branding: (
      <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 18H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6L21 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 6L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  const services = [
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Custom, responsive websites built to drive business growth with modern technologies.',
      longDescription: 'We develop custom websites that are visually appealing, responsive across all devices, and optimized for performance and conversion. Our web development services utilize the latest technologies to create scalable solutions that meet your specific business needs and help you reach your goals.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Frontend & Backend Development',
        'CMS Implementation',
        'Web Application Development',
        'Performance Optimization',
        'Responsive Design'
      ]
    },
    {
      id: 'appdev',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
      longDescription: 'Our mobile application development services deliver intuitive, feature-rich apps for iOS and Android platforms. We focus on creating seamless user experiences with attention to performance, usability, and scalability to ensure your app stands out in the marketplace.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Solutions',
        'App Prototyping',
        'UI/UX Design',
        'App Maintenance',
        'App Store Optimization'
      ]
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      description: 'Create a distinctive brand identity that captures your essence and connects with your audience.',
      longDescription: 'We help you develop a distinctive brand identity that captures your company\'s essence and connects with your audience. Our branding services ensure consistency across all touchpoints, building recognition and trust with your customers.',
      features: [
        'Brand Strategy',
        'Visual Identity Design',
        'Brand Guidelines',
        'Brand Messaging',
        'Rebranding',
        'Logo Design',
        'Brand Positioning'
      ]
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      description: 'Improve visibility in search results to drive targeted organic traffic to your website.',
      longDescription: 'Our comprehensive SEO strategies help your business climb search engine rankings and attract qualified traffic. We combine technical expertise with content optimization and link building strategies to deliver sustainable results that increase your online visibility.',
      features: [
        'On-page SEO',
        'Off-page SEO',
        'Technical SEO',
        'Keyword Research',
        'Local SEO Optimization',
        'SEO Audits',
        'Competitor Analysis'
      ]
    },
    {
      id: 'content',
      title: 'Content Marketing',
      description: 'Strategic content creation that builds your brand authority and engages your audience.',
      longDescription: 'We create and distribute valuable, relevant content that attracts and engages your target audience. Our content marketing strategies are designed to establish your authority in your industry while driving conversions and customer loyalty.',
      features: [
        'Content Strategy & Planning',
        'Blog Writing & Management',
        'Video Content Creation',
        'Infographics & Visual Content',
        'Content Distribution',
        'Content Audits',
        'Content Performance Analysis'
      ]
    },
    {
      id: 'smm',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and drive engagement through effective social media strategies.',
      longDescription: 'Our social media marketing services help you connect with your audience on the platforms they use most. We create engaging content and implement strategic campaigns that build brand awareness, foster community, and generate leads.',
      features: [
        'Social Media Strategy',
        'Account Setup & Management',
        'Content Creation & Curation',
        'Community Management',
        'Social Media Advertising',
        'Influencer Outreach',
        'Performance Reporting'
      ]
    },
    {
      id: 'ppc',
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted ad campaigns that deliver immediate visibility and measurable results.',
      longDescription: 'Our PPC services help you achieve immediate visibility and targeted reach through strategic ad campaigns. We manage your budget efficiently to maximize ROI, continuously optimizing campaigns based on performance data and market trends.',
      features: [
        'Google Ads Management',
        'Social Media Ads',
        'Remarketing Campaigns',
        'Landing Page Optimization',
        'Performance Tracking',
        'Competitor Analysis',
        'Conversion Rate Optimization'
      ]
    },
   
  ];

  return (
    <section className="relative b text-white py-24 mt-10 overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-teal-500 bg-opacity-20 text-teal-300 mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-teal-400">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer end-to-end digital solutions customized to help your business
            thrive in today's competitive digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => openServiceModal(service)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative  bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/20 group"
            >
              {/* Card inner with gradient border */}
              <div className="p-8 border border-slate-700 rounded-xl h-full flex flex-col relative z-10 group-hover:border-teal-500/30 transition-colors duration-300">
                {/* Service icon */}
                <div className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                  {serviceIcons[service.id]}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <motion.div 
                  className="flex items-center text-teal-400 mt-auto"
                  animate={{ x: hoveredService === service.id ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">Explore service</span>
                  <svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.div>
                
                {/* Decorative gradient corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/contacts" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium transition-transform duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1"
          >
            <span>Discuss Your Project</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              {/* Modal content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start mb-8">
                  <div className="mr-6 p-3 bg-teal-500 bg-opacity-20 rounded-lg text-teal-400">
                    {serviceIcons[selectedService.id]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-white">{selectedService.title}</h2>
                    <div className="h-1 w-16 bg-teal-500 mb-4"></div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4 text-teal-400">Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedService.longDescription}</p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-6 text-teal-400">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start p-4 bg-slate-700 bg-opacity-40 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Process Steps */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-6 text-teal-400">Our Process</h3>
                  <div className="relative">
                    {/* Process line */}
                    <div className="absolute top-0 left-6 ml-px bottom-0 w-0.5 bg-teal-600 bg-opacity-30"></div>
                    
                    {/* Process steps */}
                    {['Discovery', 'Strategy', 'Implementation', 'Testing', 'Launch & Support'].map((step, index) => (
                      <motion.div 
                        key={index}
                        className="relative pl-12 pb-8 last:pb-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 }}
                      >
                        <div className="absolute left-0 top-0 bg-teal-500 rounded-full w-4 h-4 mt-1.5 border-4 border-slate-800"></div>
                        <h4 className="text-lg font-medium text-white mb-2">{step}</h4>
                        <p className="text-gray-400">
                          {index === 0 && "We learn about your business goals and target audience."}
                          {index === 1 && "We develop a custom plan tailored to your specific needs."}
                          {index === 2 && "Our team executes the strategy with precision and care."}
                          {index === 3 && "Rigorous testing ensures everything works flawlessly."}
                          {index === 4 && "We launch your project and provide ongoing support."}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h4 className="text-gray-200 font-medium mb-1">Ready to get started?</h4>
                      <p className="text-gray-400 text-sm">Let's discuss how we can help your business grow.</p>
                    </div>
                    <Link 
                      href="/contacts" 
                      className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg transition-all duration-300 font-medium text-center inline-flex items-center hover:shadow-lg hover:shadow-teal-600/20"
                    >
                      Get Started with {selectedService.title}
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;