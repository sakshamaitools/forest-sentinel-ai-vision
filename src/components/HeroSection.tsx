
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay and Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-nature-overlay"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 floating-particles z-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className={`max-w-3xl text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-1200 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Revolutionizing Forest Surveillance with Intelligent Sensing
          </h1>
          <p className={`text-lg md:text-xl mb-8 opacity-90 transition-all duration-1200 delay-400 ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Protecting forests and wildlife through cutting-edge AI, IoT sensors, and sustainable digital infrastructure.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-1200 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a href="#features" className="btn-primary px-8 py-3 text-lg flex items-center gap-2 ripple-effect">
              Our Solutions <ArrowRight size={18} className="animate-gentle-bounce" />
            </a>
            <a href="#contact" className="bg-white text-forest-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 text-lg hover:shadow-lg hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
