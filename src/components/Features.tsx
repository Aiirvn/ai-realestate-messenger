
import React, { useState } from 'react';
import { MessageSquare, Clock, Users, Search } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 text-propwiz-green" />,
    title: "Unlock Off-Market Deals",
    description: "AI-powered deal discovery finds hidden opportunities before they hit the public market.",
    details: "Our advanced algorithms scan multiple sources 24/7 to identify off-market properties that match your investment criteria. Get alerts instantly via WhatsApp when new deals become available."
  },
  {
    icon: <Users className="h-10 w-10 text-propwiz-green" />,
    title: "Build Lifetime Client Loyalty", 
    description: "Transform one-time leads into lifelong relationships with intelligent nurturing workflows.",
    details: "Automated follow-up sequences, personalized communications, and value-added insights keep clients engaged. Build trust through consistent, professional interactions that generate referrals."
  },
  {
    icon: <Clock className="h-10 w-10 text-propwiz-green" />,
    title: "Professional Results in Minutes",
    description: "Deliver comprehensive property analysis instantly—impress clients with speed and thoroughness.",
    details: "Complete deal analysis including cap rates, cash flow projections, ROI calculations, and market comparisons in under 3 minutes. Professional-grade reports that position you as the expert."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-propwiz-green" />,
    title: "WhatsApp-Native Experience",
    description: "Everything happens in WhatsApp's familiar interface—no new apps to learn or download.",
    details: "Voice commands, group chats, document sharing, and automated responses all work seamlessly within WhatsApp. Your clients stay in their comfort zone while you deliver premium service."
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-propwiz-green/8 rounded-full text-propwiz-green font-medium text-sm mb-4">
            UNLOCK • BUILD • DELIVER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Deals at Your Fingertips</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional-grade real estate tools that work entirely within WhatsApp's familiar interface
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
                <div className="flex items-center justify-center w-12 h-12 bg-propwiz-green/8 rounded-full mr-4">
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
