
import React, { useEffect, useRef, useState } from "react";
import { Shield, Radar, TreeDeciduous } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: TreeDeciduous,
      title: "Our Mission",
      description: "To safeguard forests and wildlife using artificial intelligence, IoT-based sensors, and sustainable digital infrastructure designed for the toughest environments.",
      bgColor: "bg-forest-100",
      iconColor: "text-forest-600"
    },
    {
      icon: Radar,
      title: "Our Technology",
      description: "A blend of embedded electronics, wireless sensor networks, machine learning, and cloud-based analytics that function even in the most remote terrains.",
      bgColor: "bg-tech-100",
      iconColor: "text-tech-600"
    },
    {
      icon: Shield,
      title: "Our Impact",
      description: "Transforming conservation from reactive to proactive—detecting risks before they become disasters while supporting biodiversity preservation and climate resilience.",
      bgColor: "bg-earth-100",
      iconColor: "text-earth-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto w-fit">About Vanraksh AI Solutions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            Founded with a mission to protect India's natural habitats and globally critical ecosystems, we combine innovation with conservation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className={`card-feature ripple-effect transition-all duration-700 ${
                  isVisible ? `opacity-100 translate-y-0 animate-slide-in-stagger animate-delay-${(index + 1) * 200}` : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`${card.bgColor} p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
                  <IconComponent className={`h-8 w-8 ${card.iconColor} animate-leaf-sway`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-forest-700">{card.title}</h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className={`mt-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-forest-600 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
