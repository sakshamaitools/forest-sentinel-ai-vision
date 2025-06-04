
import React, { useEffect, useRef, useState } from "react";
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  FileText, 
  Heart, 
  LineChart 
} from "lucide-react";

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
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

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Enhanced Protection",
      description: "Detect illegal activities like logging and poaching before significant damage occurs, increasing the effectiveness of forest protection."
    },
    {
      icon: Clock,
      title: "Early Warning System",
      description: "Receive real-time alerts about potential threats, allowing for rapid response and intervention before disasters spread."
    },
    {
      icon: Users,
      title: "Resource Optimization",
      description: "Deploy forest guards and resources more efficiently by focusing on areas with confirmed threats rather than random patrolling."
    },
    {
      icon: FileText,
      title: "Data-Driven Insights",
      description: "Gather valuable data for research, planning, and policy-making, contributing to long-term conservation strategies."
    },
    {
      icon: Heart,
      title: "Wildlife Protection",
      description: "Monitor animal movements and help prevent human-wildlife conflicts in fringe areas, protecting both wildlife and communities."
    },
    {
      icon: LineChart,
      title: "Climate Resilience",
      description: "Support climate action by preventing deforestation and monitoring ecosystem changes that impact carbon sequestration."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-forest-700 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative">
            Benefits of Vanraksh AI
            <span className="block w-20 h-1 bg-white mx-auto mt-2 animate-grow-line"></span>
          </h2>
          <p className="max-w-3xl mx-auto opacity-80 mt-4 text-lg">
            Our intelligent forest surveillance systems provide multiple advantages for forest departments, conservation NGOs, wildlife reserves, and ecologists.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={index}
                className={`benefit-card bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all duration-700 hover:bg-opacity-60 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <IconComponent className="h-12 w-12 text-white mb-4 pulse-glow animate-gentle-bounce" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-80">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="bg-white text-forest-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 text-lg inline-flex items-center hover:scale-105 hover:shadow-lg ripple-effect">
            Partner with Us for Conservation Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
