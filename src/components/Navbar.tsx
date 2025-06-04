
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white shadow-md py-2 backdrop-blur-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-forest-700 transition-transform duration-300 hover:scale-105">
          <img 
            src="/lovable-uploads/46c255c3-62a7-427d-8b60-8cc17494bd70.png" 
            alt="Vanraksh AI Logo" 
            className="h-8 w-8 animate-leaf-sway"
          />
          <span className="text-xl font-bold">Vanraksh AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-forest-600 after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">About</a>
          <a href="#features" className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-forest-600 after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Solutions</a>
          <a href="#benefits" className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-forest-600 after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Benefits</a>
          <a href="#contact" className="btn-primary ripple-effect">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animated-fade-in backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 p-2 rounded hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 p-2 rounded hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-forest-600 font-medium transition-all duration-300 hover:scale-105 p-2 rounded hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center ripple-effect"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
