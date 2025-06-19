
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Shield, Clock } from "lucide-react";

const CTA: React.FC = () => {
  const handleCTAClick = () => {
    // Enhanced CTA tracking
    console.log('CTA clicked - Join Waitlist');
    // Additional analytics or tracking can be added here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Updated tagline integration */}
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-propwiz-green font-medium text-sm mb-6 border border-propwiz-green/20 shadow-sm animate-fade-in">
            Deals at Your Fingertips
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4 animate-fade-in">
            Ready to Start Winning Deals?
          </h2>
          <p className="text-lg mb-8 text-gray-700 animate-fade-in">
            Join thousands of professionals using redealr's seamless WhatsApp solutions to unlock deals and build lifetime client loyalty
          </p>
          
          <div className="max-w-md mx-auto mb-8 animate-fade-in">
            <Link to="/signup#waitlist-top" onClick={handleCTAClick}>
              <Button 
                className="w-full sm:w-auto bg-propwiz-green hover:bg-green-600 rounded-full h-12 px-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join the Waitlist
              </Button>
            </Link>
            <p className="text-xs text-gray-500 mt-3">
              Free beta access - start winning today
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in">
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-propwiz-green/30 transition-colors duration-300">
                <Clock className="h-6 w-6 text-propwiz-green" />
              </div>
              <span className="text-propwiz-dark">Professional results in minutes</span>
            </div>
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-propwiz-green/30 transition-colors duration-300">
                <Shield className="h-6 w-6 text-propwiz-green" />
              </div>
              <span className="text-propwiz-dark">Familiar WhatsApp interface</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
