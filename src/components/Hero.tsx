
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-propwiz-light py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-propwiz-dark leading-tight mb-4">
              Find Properties in Seconds via WhatsApp
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Simply send a message or voice note like "Find me a 2 bed 2 bath in Miami for under $500K" and instantly get back curated listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-propwiz-green hover:bg-opacity-90 rounded-full px-8 py-6 text-white flex items-center text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start on WhatsApp
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-propwiz-green text-propwiz-dark hover:bg-propwiz-light text-lg">
                See Demo
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-propwiz-green/10 rounded-3xl"></div>
              <div className="relative bg-white p-5 rounded-3xl shadow-lg border border-gray-200 animate-float">
                <div className="bg-propwiz-light rounded-t-xl p-3 flex items-center">
                  <div className="w-8 h-8 bg-propwiz-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Propwiz Assistant</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
                <div className="py-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-r-lg rounded-bl-lg p-3 max-w-xs">
                      <p className="text-sm">Find me a 2 bed 2 bath in Miami under $500K</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-propwiz-green/10 rounded-l-lg rounded-br-lg p-3 max-w-xs">
                      <p className="text-sm">I found 8 properties matching your criteria in Miami! Here are the top 3:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

