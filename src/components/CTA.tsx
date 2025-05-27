
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Shield, RotateCcw } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-propwiz-green/10 to-propwiz-green/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4 animate-fade-in">
            Start Finding Deals Today
          </h2>
          <p className="text-lg mb-8 text-gray-700 animate-fade-in">
            Join our free beta program and start using RE<span className="font-semibold text-propwiz-green">Dealr</span> on WhatsApp instantly
          </p>
          
          <div className="max-w-md mx-auto mb-8 animate-fade-in">
            <Link to="/signup">
              <Button 
                className="w-full sm:w-auto bg-propwiz-green hover:bg-green-600 rounded-full h-12 px-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join the Waitlist
              </Button>
            </Link>
            <p className="text-xs text-gray-500 mt-3">
              By signing up, you agree to receive WhatsApp messages from RE<span className="font-semibold text-propwiz-green">Dealr</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in">
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-propwiz-green/30 transition-colors duration-300">
                <Shield className="h-6 w-6 text-propwiz-green" />
              </div>
              <span className="text-propwiz-dark">No credit card required</span>
            </div>
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-propwiz-green/30 transition-colors duration-300">
                <RotateCcw className="h-6 w-6 text-propwiz-green" />
              </div>
              <span className="text-propwiz-dark">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
