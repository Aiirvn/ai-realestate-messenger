
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Logo } from "@/components/ui/logo";

const WhatsAppDemo: React.FC = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    setIsLoading(true);
    setShowResponse(false);
    
    // Simulate typing delay
    setTimeout(() => {
      setIsLoading(false);
      setShowResponse(true);
    }, 2000);
  };

  const properties = [
    {
      address: "Brickell, Miami",
      price: "$485,000",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop",
      capRate: "8.2%",
      type: "2 bed, 2 bath"
    },
    {
      address: "Downtown Miami", 
      price: "$472,000",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
      capRate: "7.8%",
      type: "2 bed, 2 bath"
    },
    {
      address: "Wynwood, Miami",
      price: "$499,000", 
      image: "https://images.unsplash.com/photo-1483058712412-e9573fc25ebb?w=300&h=200&fit=crop",
      capRate: "7.5%",
      type: "2 bed, 2.5 bath"
    }
  ];

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* WhatsApp Header with Logo */}
        <div className="bg-propwiz-green text-white p-4 flex items-center">
          <Logo size="sm" showText={false} className="mr-3" />
          <div>
            <h3 className="font-semibold text-lg">redealr Assistant</h3>
            <p className="text-sm opacity-90">Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-[500px] bg-gray-50 p-4 overflow-y-auto">
          {!showResponse && !isLoading ? (
            <>
              <div className="mb-6">
                <div className="max-w-sm p-4 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm text-gray-800">Ready to find your next deal? Text 'Find me a 2/2 in Miami' and I'll deliver hot opportunities straight to your WhatsApp! 🏠🔥</p>
                  <p className="text-xs mt-2 text-gray-500">1:51 PM</p>
                </div>
              </div>
              
              {/* Banner */}
              <div className="bg-gray-800 text-white rounded-xl p-3 mb-6 relative">
                <p className="text-sm text-center">
                  Click send to search for deals 👇
                </p>
                <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-800"></div>
              </div>
            </>
          ) : isLoading ? (
            <>
              <div className="mb-4">
                <div className="max-w-sm p-4 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm text-gray-800">Ready to find your next deal? Text 'Find me a 2/2 in Miami' and I'll deliver hot opportunities straight to your WhatsApp! 🏠🔥</p>
                  <p className="text-xs mt-2 text-gray-500">1:51 PM</p>
                </div>
              </div>
              
              <div className="mb-4 flex justify-end">
                <div className="max-w-sm p-3 rounded-2xl bg-propwiz-green text-white rounded-br-md">
                  <p className="text-sm">Find me a 2/2 in Miami</p>
                  <p className="text-xs mt-1 text-white/70">1:51 PM</p>
                </div>
              </div>

              {/* Loading State */}
              <div className="mb-4">
                <div className="max-w-sm p-4 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-propwiz-green rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-propwiz-green rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-propwiz-green rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <p className="text-sm text-gray-600">Scouring the market for hot deals...</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <div className="max-w-sm p-4 rounded-2xl bg-white rounded-bl-md shadow-sm">
                  <p className="text-sm text-gray-800">Ready to find your next deal? Text 'Find me a 2/2 in Miami' and I'll deliver hot opportunities straight to your WhatsApp! 🏠🔥</p>
                  <p className="text-xs mt-2 text-gray-500">1:51 PM</p>
                </div>
              </div>
              
              <div className="mb-4 flex justify-end">
                <div className="max-w-sm p-3 rounded-2xl bg-propwiz-green text-white rounded-br-md">
                  <p className="text-sm">Find me a 2/2 in Miami</p>
                  <p className="text-xs mt-1 text-white/70">1:51 PM</p>
                </div>
              </div>

              {properties.map((property, index) => (
                <div key={index} className="mb-4">
                  <div className="max-w-sm bg-white rounded-2xl rounded-bl-md shadow-sm overflow-hidden">
                    <div className="flex p-3">
                      <img 
                        src={property.image} 
                        alt={property.address}
                        className="w-16 h-16 rounded-lg object-cover mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{property.address}</p>
                            <p className="text-lg font-bold text-gray-900">{property.price}</p>
                            <p className="text-xs text-gray-600">{property.type}</p>
                          </div>
                          <div className="bg-propwiz-green text-white px-2 py-1 rounded-full text-xs font-medium">
                            {property.capRate} Cap
                          </div>
                        </div>
                        <p className="text-xs text-propwiz-green mt-2 flex items-center">
                          🔥 Hot deal delivered!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-4">
                <p className="text-xs text-gray-500 text-right">1:51 PM</p>
              </div>
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value="Find me a 2/2 in Miami"
              readOnly
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm bg-white text-gray-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-propwiz-green text-white rounded-full p-3 hover:bg-green-600 transition-colors disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Find your next deal with a single text
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
