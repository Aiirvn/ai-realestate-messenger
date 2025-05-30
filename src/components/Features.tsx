
import React, { useState } from 'react';
import { MessageSquare, FileSpreadsheet, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-10 w-10 text-propwiz-green" />,
    title: "Minutes, Not Hours",
    description: "Deliver professional-grade property analysis instantly via WhatsApp - impress clients with speed and thoroughness.",
    details: "Complete comprehensive deal analysis including cap rates, cash flow projections, ROI calculations, and market comparisons in under 3 minutes. Your clients will be amazed by your efficiency."
  },
  {
    icon: <Users className="h-10 w-10 text-propwiz-green" />,
    title: "Turn Leads into Lifetime Clients",
    description: "Provide such exceptional value that clients keep coming back and refer others to you.",
    details: "When you consistently deliver professional insights quickly, clients trust you as their go-to expert. Build a reputation that generates repeat business and referrals automatically."
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-propwiz-green" />,
    title: "Professional Reports",
    description: "Generate polished analysis reports that make you look like the expert you are.",
    details: "Automatically formatted Google Sheets with professional metrics, comparables, and investment projections. Share directly with clients or use for your own deal tracking."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-propwiz-green" />,
    title: "Client-Ready Communication",
    description: "Get deal summaries formatted perfectly for sharing with clients via text, email, or presentation.",
    details: "Every analysis comes with clear, jargon-free summaries that clients can easily understand. Present complex data in a way that builds confidence and trust."
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-propwiz-light rounded-full text-propwiz-green font-medium text-sm mb-4">
            PROFESSIONAL ADVANTAGE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Stand Out from the Competition</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Deliver professional-grade analysis that builds trust and keeps clients coming back
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
