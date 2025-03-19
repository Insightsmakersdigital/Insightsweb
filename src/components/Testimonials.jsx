'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with Insights Marketers has been a game-changer for us. They understood exactly what our events needed and helped us reach the right audience. Their creativity and strategic planning made a real difference in our promotions. Highly recommend them.",
    name: "Sujith V",
    title: "Co-founder, Kannur Events",
    image: "/Clients/lg2.png"
  },
  {
    quote: "Insights Marketers helped bring Slotit to life in the digital space. They didn't just market our platform—they made sure people understood its value. Their approach was practical, effective, and result-oriented. We couldn't have asked for a better marketing partner",
    name: "Sabarinath P",
    title: "Founder & CEO Slotit",
    image: "/Clients/lg3.png"
  },
  {
    quote: "As a new business, we needed visibility, and Insights Marketers delivered. They helped us connect with adventure lovers and build a strong online presence. Their team is creative, responsive, and genuinely cares about your success.",
    name: "Jipin",
    title: "Founder Bougain kayak",
    image: "/Clients/lg1.png"
  },
  {
    quote: "Marketing in the tech space isn't easy, but Insights Marketers made it look effortless. They took the time to understand our business and crafted strategies that actually worked. Their expertise and dedication made a huge impact on our growth.",
    name: "Deepak",
    title: "Zeropi Tech Solutions pvt ltd",
    image: "/Clients/lg6.png"
  }
];

const HappyClientsSection = () => {
  return (
    <div 
      className="w-full py-20 px-4 relative overflow-hidden"
      style={{
        position: 'relative',
      }}
    >
      {/* Single large centered glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5eead4]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="text-white">Our </span>
          <span className="text-[#5eead4]">Happy Clients</span>
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          From various sectors, appreciate our personalized service and innovative
          solutions, fostering enduring partnerships grounded in mutual.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#0e1a16]/70 backdrop-blur-sm p-8 flex flex-col justify-between h-full hover:border-[#5eead4]/30 transition-all duration-300"
            >
              <div>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  {/* Display actual image */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClientsSection;