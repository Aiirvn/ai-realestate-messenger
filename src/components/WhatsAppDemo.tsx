
import React, { useState } from 'react';
import { MessageSquare, Send, ArrowDown } from 'lucide-react';

const WhatsAppDemo: React.FC = () => {
  const [showResponse, setShowResponse] = useState(false);

  const handleSendMessage = () => {
    setShowResponse(true);
  };

  const properties = [
    {
      address: "123 Ocean Drive, Miami Beach, FL",
      price: "$485,000",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop",
      dealScore: "9.2/10",
      capRate: "8.5%",
      type: "2BR/2BA"
    },
    {
      address: "456 Biscayne Blvd, Miami, FL", 
      price: "$475,000",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
      dealScore: "8.8/10",
      capRate: "7.9%",
      type: "2BR/2BA"
    },
    {
      address: "789 Collins Ave, Miami Beach, FL",
      price: "$495,000", 
      image: "https://images.unsplash.com/photo-1483058712412-e9573fc25ebb?w=300&h=200&fit=crop",
      dealScore: "8.5/10",
      capRate: "7.2%",
      type: "2BR/2BA"
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* WhatsApp Header */}
        <div className="bg-propwiz-green text-white p-4 flex items-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">redealr AI</h3>
            <p className="text-xs opacity-90">Online now</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-96 bg-gray-50 p-4 overflow-y-auto">
          {!showResponse ? (
            <>
              <div className="mb-4">
                <div className="max-w-xs p-3 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm">👋 Hi! I'm your AI real estate assistant. I can help you find deals, analyze properties, and manage leads!</p>
                  <p className="text-xs mt-1 text-gray-500">2:33 PM</p>
                </div>
              </div>
              
              {/* Banner */}
              <div className="bg-propwiz-green/10 border border-propwiz-green/20 rounded-xl p-3 mb-4">
                <p className="text-sm text-propwiz-green font-medium text-center">
                  👆 Click Send to see the magic happen!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <div className="max-w-xs p-3 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm">👋 Hi! I'm your AI real estate assistant. I can help you find deals, analyze properties, and manage leads!</p>
                  <p className="text-xs mt-1 text-gray-500">2:33 PM</p>
                </div>
              </div>
              
              <div className="mb-4 flex justify-end">
                <div className="max-w-xs p-3 rounded-2xl bg-propwiz-green text-white rounded-br-md">
                  <p className="text-sm">Find me 2 bedroom 2 bathroom deals in Miami for under 500k</p>
                  <p className="text-xs mt-1 text-white/70">2:34 PM</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="max-w-xs p-3 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm">🏡 Found 3 amazing deals in Miami! Here are your options:</p>
                  <p className="text-xs mt-1 text-gray-500">2:35 PM</p>
                </div>
              </div>

              {properties.map((property, index) => (
                <div key={index} className="mb-4">
                  <div className="max-w-xs bg-white rounded-2xl rounded-bl-md shadow-sm overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.address}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-propwiz-dark">{property.price}</p>
                      <p className="text-xs text-gray-600 mb-2">{property.address}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-propwiz-green font-medium">Deal Score: {property.dealScore}</span>
                        <span className="text-gray-600">Cap Rate: {property.capRate}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{property.type}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-4">
                <div className="max-w-xs p-3 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm">📊 Want detailed analysis on any of these properties? Just ask!</p>
                  <p className="text-xs mt-1 text-gray-500">2:36 PM</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value="Find me 2 bedroom 2 bathroom deals in Miami for under 500k"
              readOnly
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm bg-gray-50 text-gray-700"
            />
            <div className="relative">
              {!showResponse && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-propwiz-green animate-bounce">
                  <ArrowDown className="h-4 w-4" />
                </div>
              )}
              <button
                onClick={handleSendMessage}
                className="bg-propwiz-green text-white rounded-full p-2 hover:bg-green-600 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {!showResponse ? 'Click Send to see AI-powered deal discovery in action!' : 'Experience real-time property analysis!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
