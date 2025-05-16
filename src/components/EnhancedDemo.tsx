
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, FileSpreadsheet, AreaChart, Lightbulb } from "lucide-react";

const EnhancedDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sheets' | 'analytics' | 'insights'>('sheets');
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-propwiz-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-propwiz-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-propwiz-green/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-propwiz-green/10 rounded-full text-propwiz-green font-medium text-sm mb-4">
            ADVANCED FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">Powerful Tools for Real Estate Investors</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            PropWiz helps you find, analyze, and track properties with proprietary investment metrics
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full">
              <button 
                onClick={() => setActiveTab('sheets')} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center ${
                  activeTab === 'sheets' ? 'bg-propwiz-green text-white shadow-md' : 'text-gray-700'
                }`}
              >
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Google Sheets
              </button>
              <button 
                onClick={() => setActiveTab('analytics')} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center ${
                  activeTab === 'analytics' ? 'bg-propwiz-green text-white shadow-md' : 'text-gray-700'
                }`}
              >
                <AreaChart className="mr-2 h-4 w-4" />
                Market Analytics
              </button>
              <button 
                onClick={() => setActiveTab('insights')} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center ${
                  activeTab === 'insights' ? 'bg-propwiz-green text-white shadow-md' : 'text-gray-700'
                }`}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                AI Insights
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Google Sheets Tab */}
            <div className={`transition-all duration-500 ${
              activeTab === 'sheets' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
                    <Button className="rounded-full bg-propwiz-green hover:bg-propwiz-green/90 flex items-center justify-center mb-4">
                      <Play className="h-6 w-6 text-white" />
                    </Button>
                    <h3 className="text-lg font-semibold text-propwiz-dark">Automatic Property Tracking</h3>
                    <p className="text-sm text-gray-500 mt-1">Properties are instantly added to your Google Sheet</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-200">
                  <h4 className="font-semibold text-propwiz-dark mb-2">Track important metrics:</h4>
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
            
            {/* Analytics Tab */}
            <div className={`transition-all duration-500 ${
              activeTab === 'analytics' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
                <div className="bg-propwiz-green/10 p-3 border-b border-gray-200 flex items-center">
                  <div className="w-8 h-8 mr-2 flex items-center justify-center">
                    <AreaChart className="w-5 h-5 text-propwiz-green" />
                  </div>
                  <span className="font-medium text-gray-700">Market Performance Analytics</span>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-64 bg-white p-4">
                  <div className="h-full flex items-center justify-center">
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Button className="rounded-full bg-propwiz-green hover:bg-propwiz-green/90 mb-3">
                          <Play className="h-5 w-5 text-white" />
                        </Button>
                        <p className="text-sm">See market trend analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-200">
                  <h4 className="font-semibold text-propwiz-dark mb-2">Compare markets with:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Growth projections</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Historical performance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Rental yield data</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Competitive analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Insights Tab */}
            <div className={`transition-all duration-500 ${
              activeTab === 'insights' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
                <div className="bg-propwiz-green/10 p-3 border-b border-gray-200 flex items-center">
                  <div className="w-8 h-8 mr-2 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-propwiz-green" />
                  </div>
                  <span className="font-medium text-gray-700">AI-Powered Investment Insights</span>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-64 bg-white p-4">
                  <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center p-6">
                      <Button className="rounded-full bg-propwiz-green hover:bg-propwiz-green/90 mb-4">
                        <Play className="h-5 w-5 text-white" />
                      </Button>
                      <h3 className="font-semibold mb-2">Proprietary AI Analysis</h3>
                      <p className="text-sm text-gray-600">See how our AI identifies investment opportunities others miss</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-200">
                  <h4 className="font-semibold text-propwiz-dark mb-2">AI-powered features:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Risk assessment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Opportunity scoring</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Future value projections</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-propwiz-green mr-2"></div>
                      <span>Market sentiment analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              "The PropWiz AI found me properties with investment potential I would have missed" - Professional Investor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDemo;
