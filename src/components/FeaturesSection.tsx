
import React, { useEffect, useRef, useState } from "react";
import { 
  Radio, 
  ThermometerSnowflake, 
  Cpu, 
  Wifi, 
  AlertTriangle, 
  Smartphone 
} from "lucide-react";

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
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

  const features = [
    {
      icon: Radio,
      title: "Motion & Vibration Detection",
      description: "Using microwave Doppler radar and accelerometers to detect human presence, machinery, and even chainsaw vibrations before trees are felled."
    },
    {
      icon: ThermometerSnowflake,
      title: "Environmental Monitoring",
      description: "Temperature, humidity, and air quality sensors that track forest health and detect early signs of potential wildfires."
    },
    {
      icon: Cpu,
      title: "AI-Based Threat Classification",
      description: "Advanced algorithms distinguish between human activities, animal movements, and natural occurrences, minimizing false alarms."
    },
    {
      icon: AlertTriangle,
      title: "Wildfire Detection",
      description: "IR thermopiles and smoke analysis provide early detection of forest fires, allowing for faster response times."
    },
    {
      icon: Wifi,
      title: "LoRa & LTE Communication",
      description: "Long-range wireless communication forms a secure, self-healing mesh network that functions even in disconnected terrains."
    },
    {
      icon: Smartphone,
      title: "Real-Time Alerts & Dashboard",
      description: "Mobile alerts and comprehensive analytics for rangers and administrators, enabling immediate response to threats."
    }
  ];

  return (
    <section id="features" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto w-fit">Our Intelligent Solutions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            At the heart of Vanraksh AI lies our forest-grade sensor network—designed to be hidden, durable, and highly effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={index}
                className={`feature-card card-feature border-t-4 border-forest-500 sensor-pulse transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <IconComponent className="h-10 w-10 text-forest-600 mb-4 pulse-glow animate-leaf-sway" />
                <h3 className="text-xl font-bold mb-2 text-forest-700">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-forest-50 rounded-lg p-6 border border-forest-100 max-w-3xl transition-all duration-700 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-bold text-forest-700 mb-4">What Sets Us Apart</h3>
            <p className="text-gray-700">
              Unlike bulky camera-based systems that are prone to damage and require power-hungry networks, our solution is designed for stealth, endurance, and scalability. With advanced pattern recognition and smart filtering, our systems minimize false alarms while delivering high-accuracy threat assessments tailored for forest environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
