
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-nature-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 animate-fade-in-up">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Revolutionizing Forest Surveillance with Intelligent Sensing
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Protecting forests and wildlife through cutting-edge AI, IoT sensors, and sustainable digital infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#features" className="btn-primary px-8 py-3 text-lg flex items-center gap-2">
              Our Solutions <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-white text-forest-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all text-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
