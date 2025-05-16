
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'sheets'>('whatsapp');
  
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-propwiz-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-propwiz-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-propwiz-green/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-propwiz-green/10 rounded-full text-propwiz-green font-medium text-sm mb-4">
            SEE IT IN ACTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Propwiz Streamlines Your Property Search</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch how easy it is to find investment-ready properties and track them automatically
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full">
              <button 
                onClick={() => setActiveTab('whatsapp')} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'whatsapp' ? 'bg-propwiz-green text-white shadow-md' : 'text-gray-700'
                }`}
              >
                WhatsApp Experience
              </button>
              <button 
                onClick={() => setActiveTab('sheets')} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'sheets' ? 'bg-propwiz-green text-white shadow-md' : 'text-gray-700'
                }`}
              >
                Google Sheets Integration
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className={`transition-all duration-500 ${
              activeTab === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl p-4 max-w-lg mx-auto overflow-hidden">
                <div className="bg-propwiz-light rounded-t-xl p-3 flex items-center">
                  <div className="w-8 h-8 bg-propwiz-green rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">P</div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Propwiz Assistant</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
                
                <div className="aspect-w-9 aspect-h-16 relative bg-gray-50 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                  {/* This would normally contain a GIF or video demo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <Button className="w-16 h-16 rounded-full bg-propwiz-green hover:bg-propwiz-green/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-propwiz-dark">WhatsApp Demo</h3>
                      <p className="text-sm text-gray-500 mt-2">See how our AI finds investment-ready properties</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3 p-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">U</div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      <p>Find me a 3 bedroom house in Austin with at least 7% cap rate under $800k</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-propwiz-green rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">P</div>
                    <div className="bg-propwiz-green bg-opacity-10 rounded-lg p-3 text-sm">
                      <p>I found 3 investment properties matching your criteria in Austin! Here's the best one:</p>
                      <div className="mt-2 bg-white rounded-lg p-2 text-xs">
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-semibold">3 bed, 2.5 bath in North Austin</p>
                          <span className="bg-propwiz-green/20 text-propwiz-green text-xs px-2 py-0.5 rounded-full">7.8% Cap</span>
                        </div>
                        <p>$745,000 | Cash flow: +$510/mo</p>
                        <p className="text-gray-500 mt-1 text-xs">Added to your Google Sheet ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${
              activeTab === 'sheets' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
                <div className="bg-green-50 p-3 border-b border-gray-200 flex items-center">
                  <div className="w-8 h-8 mr-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M19.07,7.17L19.93,8.03L14.03,14L19.07,19.04L18.24,19.93L13.14,14.89L9.04,19.04L8.17,18.17L12.28,14.03L8.17,9.96L9,9.13L13.14,13.27L19.07,7.17Z" fill="#1e8e3e" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Propwiz Investment Properties</span>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-64 flex items-center justify-center">
                  {/* This would normally contain a GIF or video of Google Sheets */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
                    <Button className="rounded-full bg-propwiz-green hover:bg-propwiz-green/90 flex items-center justify-center mb-4">
                      <Play className="h-6 w-6 text-white" />
                    </Button>
                    <h3 className="text-lg font-semibold text-propwiz-dark">Google Sheets Integration Demo</h3>
                    <p className="text-sm text-gray-500 mt-1">See how properties are automatically organized</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-200">
                  <h4 className="font-semibold text-propwiz-dark mb-2">Automatically track:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Cap rates & ROI</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Cash flow projections</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Investment metrics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Market comparisons</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              "I saved 5+ hours per week searching for investment properties" - Real Estate Investor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
