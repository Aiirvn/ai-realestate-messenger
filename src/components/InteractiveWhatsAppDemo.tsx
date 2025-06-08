
import React, { useState } from 'react';
import { MessageSquare, Send, Search, TrendingUp, MapPin } from 'lucide-react';

const demoResponses = {
  deals: {
    message: "🏡 Found 3 off-market deals in your area!\n\n📍 123 Oak Street - $485K\n• 3BR/2BA, 1,850 sqft\n• Cap Rate: 8.2%\n• Estimated ROI: 15%\n\n📍 456 Pine Avenue - $380K\n• 2BR/2BA, 1,200 sqft\n• Cap Rate: 9.1%\n• Estimated ROI: 18%\n\n📍 789 Maple Drive - $525K\n• 4BR/3BA, 2,100 sqft\n• Cap Rate: 7.8%\n• Estimated ROI: 14%\n\nWant detailed analysis on any of these? 📊",
    timestamp: "2:34 PM"
  },
  analysis: {
    message: "📊 DEAL ANALYSIS COMPLETE\n\n🏠 Property: 123 Oak Street\n💰 Purchase Price: $485,000\n📈 ARV: $580,000\n🔧 Repair Estimate: $35,000\n\n💵 FINANCIAL BREAKDOWN:\n• Monthly Rent: $3,200\n• Monthly Expenses: $1,850\n• Cash Flow: +$1,350/month\n• Cash-on-Cash ROI: 15.2%\n• Break-even: 18 months\n\n✅ RECOMMENDATION: Strong buy signal!\n\nGenerate detailed report? 📋",
    timestamp: "2:35 PM"
  },
  leads: {
    message: "👥 LEAD NURTURING ACTIVE\n\n🔥 Hot Leads (3):\n• Sarah M. - Investor, $500K budget\n• Mike Chen - First-time buyer\n• Lisa K. - Looking for rental property\n\n📅 Scheduled Follow-ups:\n• Call Sarah about Oak Street property\n• Send Mike financing options\n• Share rental analysis with Lisa\n\n📧 Automated emails sent: 12\n💬 WhatsApp messages: 8\n\nWant to review individual lead profiles? 👤",
    timestamp: "2:36 PM"
  }
};

const searchButtons = [
  {
    icon: <Search className="h-4 w-4" />,
    label: "Search Deals",
    key: "deals",
    color: "bg-blue-500"
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    label: "Analyze Property",
    key: "analysis", 
    color: "bg-green-500"
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Manage Leads",
    key: "leads",
    color: "bg-purple-500"
  }
];

const InteractiveWhatsAppDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  const handleButtonClick = (key: string) => {
    setActiveDemo(key);
    setShowResponse(false);
    
    // Simulate typing delay
    setTimeout(() => {
      setShowResponse(true);
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* WhatsApp Header */}
        <div className="bg-propwiz-green text-white p-4 flex items-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">REDealr AI</h3>
            <p className="text-xs opacity-90">Online now</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-96 bg-gray-50 p-4 overflow-y-auto">
          {/* Welcome Message */}
          <div className="mb-4">
            <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-xs shadow-sm">
              <p className="text-sm text-gray-800">
                👋 Hi! I'm your AI real estate assistant. What would you like to do today?
              </p>
              <p className="text-xs text-gray-500 mt-1">2:33 PM</p>
            </div>
          </div>

          {/* Demo Response */}
          {activeDemo && showResponse && (
            <div className="mb-4">
              <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800 whitespace-pre-line">
                  {demoResponses[activeDemo as keyof typeof demoResponses].message}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {demoResponses[activeDemo as keyof typeof demoResponses].timestamp}
                </p>
              </div>
            </div>
          )}

          {/* Loading indicator */}
          {activeDemo && !showResponse && (
            <div className="mb-4">
              <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-xs shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Buttons */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="grid grid-cols-1 gap-2 mb-3">
            {searchButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => handleButtonClick(button.key)}
                className={`${button.color} text-white rounded-full px-4 py-2 text-sm font-medium flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg`}
              >
                {button.icon}
                <span className="ml-2">{button.label}</span>
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">Click any button to see REDealr in action!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWhatsAppDemo;
