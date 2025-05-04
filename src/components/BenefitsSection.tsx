
import React from "react";
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  FileText, 
  Heart, 
  LineChart 
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-forest-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative">
            Benefits of Vanraksh AI
            <span className="block w-20 h-1 bg-white mx-auto mt-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto opacity-80 mt-4 text-lg">
            Our intelligent forest surveillance systems provide multiple advantages for forest departments, conservation NGOs, wildlife reserves, and ecologists.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <ShieldCheck className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Enhanced Protection</h3>
            <p className="opacity-80">
              Detect illegal activities like logging and poaching before significant damage occurs, increasing the effectiveness of forest protection.
            </p>
          </div>
          
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <Clock className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Early Warning System</h3>
            <p className="opacity-80">
              Receive real-time alerts about potential threats, allowing for rapid response and intervention before disasters spread.
            </p>
          </div>
          
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <Users className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Resource Optimization</h3>
            <p className="opacity-80">
              Deploy forest guards and resources more efficiently by focusing on areas with confirmed threats rather than random patrolling.
            </p>
          </div>
          
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <FileText className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
            <p className="opacity-80">
              Gather valuable data for research, planning, and policy-making, contributing to long-term conservation strategies.
            </p>
          </div>
          
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <Heart className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Wildlife Protection</h3>
            <p className="opacity-80">
              Monitor animal movements and help prevent human-wildlife conflicts in fringe areas, protecting both wildlife and communities.
            </p>
          </div>
          
          <div className="bg-forest-600 bg-opacity-40 rounded-lg p-6 transition-all hover:bg-opacity-60">
            <LineChart className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Climate Resilience</h3>
            <p className="opacity-80">
              Support climate action by preventing deforestation and monitoring ecosystem changes that impact carbon sequestration.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="bg-white text-forest-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all text-lg inline-flex items-center">
            Partner with Us for Conservation Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
