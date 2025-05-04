
import React from "react";
import { Shield, Radar, TreeDeciduous } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto w-fit">About Vanraksh AI Solutions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            Founded with a mission to protect India's natural habitats and globally critical ecosystems, we combine innovation with conservation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card-feature">
            <div className="bg-forest-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TreeDeciduous className="h-8 w-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-forest-700">Our Mission</h3>
            <p className="text-gray-600">
              To safeguard forests and wildlife using artificial intelligence, IoT-based sensors, and sustainable digital infrastructure designed for the toughest environments.
            </p>
          </div>
          
          <div className="card-feature">
            <div className="bg-tech-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Radar className="h-8 w-8 text-tech-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-forest-700">Our Technology</h3>
            <p className="text-gray-600">
              A blend of embedded electronics, wireless sensor networks, machine learning, and cloud-based analytics that function even in the most remote terrains.
            </p>
          </div>
          
          <div className="card-feature">
            <div className="bg-earth-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-earth-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-forest-700">Our Impact</h3>
            <p className="text-gray-600">
              Transforming conservation from reactive to proactive—detecting risks before they become disasters while supporting biodiversity preservation and climate resilience.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-forest-600">
          <h3 className="text-2xl font-bold mb-4 text-forest-700">Our Vision</h3>
          <p className="text-gray-600 text-lg">
            We're more than a tech company—we are nature's silent guardian. Our work supports wildlife protection, climate resilience, biodiversity preservation, and the prevention of human-wildlife conflict in fringe communities. By providing forest stakeholders with advanced situational awareness, we enable more effective patrol planning, timely interventions, and long-term ecological research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
