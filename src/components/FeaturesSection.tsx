
import React from "react";
import { 
  Radio, 
  ThermometerSnowflake, 
  Cpu, 
  Wifi, 
  AlertTriangle, 
  Smartphone 
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto w-fit">Our Intelligent Solutions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            At the heart of Vanraksh AI lies our forest-grade sensor network—designed to be hidden, durable, and highly effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-feature border-t-4 border-forest-500">
            <Radio className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">Motion & Vibration Detection</h3>
            <p className="text-gray-600">
              Using microwave Doppler radar and accelerometers to detect human presence, machinery, and even chainsaw vibrations before trees are felled.
            </p>
          </div>
          
          <div className="card-feature border-t-4 border-forest-500">
            <ThermometerSnowflake className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">Environmental Monitoring</h3>
            <p className="text-gray-600">
              Temperature, humidity, and air quality sensors that track forest health and detect early signs of potential wildfires.
            </p>
          </div>
          
          <div className="card-feature border-t-4 border-forest-500">
            <Cpu className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">AI-Based Threat Classification</h3>
            <p className="text-gray-600">
              Advanced algorithms distinguish between human activities, animal movements, and natural occurrences, minimizing false alarms.
            </p>
          </div>
          
          <div className="card-feature border-t-4 border-forest-500">
            <AlertTriangle className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">Wildfire Detection</h3>
            <p className="text-gray-600">
              IR thermopiles and smoke analysis provide early detection of forest fires, allowing for faster response times.
            </p>
          </div>
          
          <div className="card-feature border-t-4 border-forest-500">
            <Wifi className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">LoRa & LTE Communication</h3>
            <p className="text-gray-600">
              Long-range wireless communication forms a secure, self-healing mesh network that functions even in disconnected terrains.
            </p>
          </div>
          
          <div className="card-feature border-t-4 border-forest-500">
            <Smartphone className="h-10 w-10 text-forest-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-forest-700">Real-Time Alerts & Dashboard</h3>
            <p className="text-gray-600">
              Mobile alerts and comprehensive analytics for rangers and administrators, enabling immediate response to threats.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-forest-50 rounded-lg p-6 border border-forest-100 max-w-3xl">
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
