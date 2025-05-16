
import React from 'react';
import { MessageSquare, Search, FileSpreadsheet } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-10 w-10 text-propwiz-green" />,
    title: "Send a voice/text request",
    description: "Simply send a WhatsApp message describing what you're looking for in natural language."
  },
  {
    icon: <Search className="h-10 w-10 text-propwiz-green" />,
    title: "Get matched listings",
    description: "Our AI instantly searches using proprietary metrics to find the best properties matching your criteria."
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-propwiz-green" />,
    title: "Auto-populate to Google Sheets",
    description: "Listings are automatically organized in your Google Sheet for easy tracking and analysis."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-white to-propwiz-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Finding your ideal investment property has never been this efficient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="mx-auto flex items-center justify-center w-16 h-16 bg-propwiz-light rounded-full mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-propwiz-dark">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
