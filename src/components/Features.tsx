
import React from 'react';
import { MessageSquare, Users, Search, Circle } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-propwiz-green" />,
    title: "Voice-Enabled",
    description: "Send voice messages describing exactly what you're looking for - our AI understands natural language."
  },
  {
    icon: <Circle className="h-10 w-10 text-propwiz-green" />,
    title: "Works 24/7",
    description: "Get instant property recommendations any time of day or night, with no waiting."
  },
  {
    icon: <Search className="h-10 w-10 text-propwiz-green" />,
    title: "Smart Filters",
    description: "Our AI remembers your preferences and applies them intelligently to future searches."
  },
  {
    icon: <Users className="h-10 w-10 text-propwiz-green" />,
    title: "Zillow-Powered",
    description: "Access comprehensive listing data from top real estate platforms in one place."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Search smarter, not harder, with our advanced AI capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-propwiz-light rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-propwiz-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

