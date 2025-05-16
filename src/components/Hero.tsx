
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
        
        <div className="flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-2 bg-propwiz-green/10 rounded-full text-propwiz-green font-medium text-sm mb-6">
              AI-Powered Real Estate Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-propwiz-dark leading-tight mb-6">
              Find <span className="text-propwiz-green">Investment-Ready</span> Properties in Seconds
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Simply send a WhatsApp message like "Find me a 2 bed in Miami under $500K with 8% cap rate" and get instant results with proprietary investment metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="mt-8 flex items-center space-x-4">
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
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Animated elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-propwiz-green/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-propwiz-green/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="absolute -top-4 -left-4 w-full h-full bg-propwiz-green/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-5 rounded-3xl shadow-xl border border-gray-200 animate-float">
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
                      <p className="text-sm">Find me a 2 bed 2 bath in Miami under $500K with positive cash flow</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-propwiz-green/10 rounded-l-lg rounded-br-lg p-3 max-w-xs">
                      <p className="text-sm">I found 5 properties matching your investment criteria in Miami! Here are the top matches with their ROI metrics:</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white shadow-md rounded-lg p-3 max-w-xs border border-gray-100 transform hover:scale-105 transition-transform cursor-pointer">
                      <p className="text-xs font-semibold text-propwiz-green">Top Pick - 8.2% Cap Rate</p>
                      <p className="text-sm font-medium">2 bed, 2 bath in Brickell</p>
                      <p className="text-xs text-gray-600">$485,000 | Cash flow: +$320/mo</p>
                      <div className="mt-1 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-propwiz-green rounded-full" style={{width: '82%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center text-gray-500 mt-2">Your matches are also in your Google Sheet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
