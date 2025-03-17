import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#091a18] to-[#050d0c] text-white py-10 px-5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0  opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5eead4]/5 blur-[150px] -z-1"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#5eead4]/3 blur-[130px] -z-1"></div>
      
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5eead4]/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Large Logo with glow effect */}
          <div className="relative mb-8 group">
            {/* Animated glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#5eead4]/10 to-[#5eead4]/5 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
            
            {/* Logo with shadow */}
            <Image 
              src="/Images/logo.png" 
              alt="Radison" 
              width={130} 
              height={130}
              className="relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Reflection effect */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-[#5eead4]/5 via-[#5eead4]/15 to-[#5eead4]/5 blur-md rounded-full"></div>
          </div>
          
          {/* Social Icons with glow effects */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* LinkedIn */}
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/insightsmarketers?igsh=MXhmajY0MjRuYWk3aw%3D%3D&utm_source=qr" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/16AB2364kh/?mibextid=wwXIfr" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/917012151014" className="group relative">
              <div className="absolute inset-0 bg-[#5eead4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#5eead4" className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
          </div>
          
          {/* Glowing divider */}
          <div className="relative w-24 h-px mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5eead4]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5eead4]/30 to-transparent blur-sm"></div>
          </div>
          
          {/* Enhanced Copyright Notice */}
          <div className="text-center relative">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} All Rights Reserved by <span className="bg-gradient-to-r from-[#5eead4] to-[#5eead4]/70 bg-clip-text text-transparent font-medium">Insights</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;