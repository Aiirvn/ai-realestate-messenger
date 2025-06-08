
import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const WhatsAppDemo: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      text: "👋 Hi! I'm your AI real estate assistant. Try asking me to find deals or analyze properties!",
      isBot: true,
      timestamp: "2:33 PM"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      text: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);

    // Generate bot response based on keywords
    let botResponse = "";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('deal') || lowerMessage.includes('property') || lowerMessage.includes('find')) {
      botResponse = "🏡 Found 3 off-market deals in your area!\n\n📍 123 Oak Street - $485K\n• 3BR/2BA, 1,850 sqft\n• Cap Rate: 8.2%\n• ROI: 15%\n\nWant detailed analysis? 📊";
    } else if (lowerMessage.includes('analyze') || lowerMessage.includes('analysis')) {
      botResponse = "📊 DEAL ANALYSIS COMPLETE\n\n🏠 Property: 123 Oak Street\n💰 Purchase: $485,000\n📈 ARV: $580,000\n\n💵 Monthly Cash Flow: +$1,350\n📈 ROI: 15.2%\n✅ Strong buy signal!";
    } else if (lowerMessage.includes('lead') || lowerMessage.includes('client')) {
      botResponse = "👥 LEAD MANAGEMENT ACTIVE\n\n🔥 Hot Leads (3):\n• Sarah M. - Investor, $500K budget\n• Mike Chen - First-time buyer\n• Lisa K. - Rental property\n\n📅 Follow-ups scheduled ✅";
    } else {
      botResponse = "I can help you find deals, analyze properties, or manage leads. What would you like to do? 🤝";
    }

    // Add bot response after a delay
    setTimeout(() => {
      const botMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, botMessage]);
    }, 1000);

    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
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
            <h3 className="font-semibold">redealr AI</h3>
            <p className="text-xs opacity-90">Online now</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-96 bg-gray-50 p-4 overflow-y-auto">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.isBot ? '' : 'flex justify-end'}`}>
              <div className={`max-w-xs p-3 rounded-2xl ${
                msg.isBot 
                  ? 'bg-white rounded-bl-md shadow-sm' 
                  : 'bg-propwiz-green text-white rounded-br-md'
              }`}>
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Try: 'Find deals in Miami' or 'Analyze this property'"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-propwiz-green"
            />
            <button
              onClick={handleSendMessage}
              className="bg-propwiz-green text-white rounded-full p-2 hover:bg-green-600 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Try asking about deals, analysis, or lead management!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
