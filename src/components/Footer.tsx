import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-forest-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/05799120-a191-457e-ae50-ab9fd4110976.png" alt="Vanraksh AI Logo" className="h-7 w-7" />
              <span className="text-xl font-bold">Vanraksh AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Intelligence Rooted in Nature
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Motion Detection</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Environmental Monitoring</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">AI Threat Classification</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Wildfire Detection</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              
              
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">&copy; {currentYear} Vanraksh AI Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6">
              <li><Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;