
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-propwiz-light to-white py-16 lg:py-24 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-propwiz-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-16 w-80 h-80 bg-propwiz-green/5 rounded-full blur-3xl"></div>
        
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-propwiz-green/10 rounded-full text-propwiz-green font-medium text-sm mb-6">
            AI-Powered Real Estate Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-propwiz-dark leading-tight mb-6">
            Find <span className="text-propwiz-green">Investment-Ready</span> Properties in Seconds
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg mx-auto">
            Simply send a WhatsApp message like "Find me a 2 bed in Miami under $500K" and get instant results with proprietary investment metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-propwiz-green hover:bg-opacity-90 rounded-full px-8 py-6 text-white flex items-center text-lg shadow-lg shadow-propwiz-green/20 hover:shadow-propwiz-green/30 transition-all">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </Button>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-propwiz-green to-green-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <Button variant="outline" className="relative rounded-full px-8 py-6 border-propwiz-green text-propwiz-dark hover:bg-propwiz-light text-lg">
                See Demo
              </Button>
            </div>
          </div>
          <div className="mt-8 flex items-center space-x-4 justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">230+</span> real estate professionals trust PropWiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
