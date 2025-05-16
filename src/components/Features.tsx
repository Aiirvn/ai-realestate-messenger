
import React, { useState } from 'react';
import { MessageSquare, FileSpreadsheet, Search, Database } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-propwiz-green" />,
    title: "Voice-Enabled Queries",
    description: "Send voice messages describing exactly what you're looking for - our AI understands natural language requests for specific investment criteria.",
    details: "Our advanced natural language processing allows you to search by cap rate, cash flow, ROI, and other investment metrics simply by asking - no complex forms required."
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-propwiz-green" />,
    title: "Google Sheets Integration",
    description: "All your property matches are automatically organized in your custom Google Sheet for easy tracking and analysis.",
    details: "Keep track of every property with customizable columns for investment metrics, property details, and comparison data. Share with clients or your investment team with one click."
  },
  {
    icon: <Search className="h-10 w-10 text-propwiz-green" />,
    title: "Smart Investment Filters",
    description: "Our AI remembers your investment preferences and applies them intelligently to future searches.",
    details: "Set your minimum cash flow requirements, cap rate thresholds, and other investment criteria once, and PropWiz will automatically apply them to every search - saving you hours of manual filtering."
  },
  {
    icon: <Database className="h-10 w-10 text-propwiz-green" />,
    title: "Proprietary Metrics",
    description: "Access exclusive property metrics and investment analytics not available on standard listing platforms.",
    details: "Our proprietary algorithms calculate true ROI potential, hidden value opportunities, and investment risk scores based on 20+ factors including neighborhood growth trends, rental demand, and price history."
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-propwiz-light rounded-full text-propwiz-green font-medium text-sm mb-4">
            INVESTOR-FOCUSED TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Powerful Investment Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find investment-ready properties with metrics and tools designed specifically for real estate professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer ${
                activeFeature === index ? 'border-propwiz-green ring-2 ring-propwiz-green/20' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-propwiz-light rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeFeature === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700">{feature.details}</p>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <span className="text-propwiz-green text-sm">
                  {activeFeature === index ? 'Show less' : 'Learn more'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
