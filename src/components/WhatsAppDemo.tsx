
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type MessageType = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  properties?: Array<{
    id: number;
    image: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    capRate?: string;
  }>;
};

const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState('Find me a 2 bed in Miami under $500K');
  const [isTyping, setIsTyping] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change - only within the chat container
  useEffect(() => {
    if (chatContainerRef.current && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [messages]);

  // Initial messages
  useEffect(() => {
    const initialMessages: MessageType[] = [
      {
        id: 1,
        text: 'Hi there! I can help you find investment properties. Click the send button to search for "2 bed in Miami under $500K" 👇',
        sender: 'bot',
        timestamp: getCurrentTime()
      }
    ];
    
    setTimeout(() => {
      setMessages(initialMessages);
    }, 500);
  }, []);

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputValue.trim() === '' || messageSent) return;

    // Add user message
    const userMessage: MessageType = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessageSent(true);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      const botResponse: MessageType = {
        id: messages.length + 2,
        text: "I found 8 properties in Miami that match your criteria! Here are the top 3 with our proprietary investment metrics 👇",
        sender: 'bot',
        timestamp: getCurrentTime(),
        properties: [
          {
            id: 1,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
            price: '$485,000',
            location: 'Brickell, Miami',
            beds: 2,
            baths: 2,
            capRate: '8.2%'
          },
          {
            id: 2,
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: '$472,000',
            location: 'Downtown Miami',
            beds: 2,
            baths: 2,
            capRate: '7.8%'
          },
          {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            price: '$499,000',
            location: 'Wynwood, Miami',
            beds: 2,
            baths: 2.5,
            capRate: '7.5%'
          }
        ]
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-br from-propwiz-light to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* WhatsApp header */}
            <div className="bg-propwiz-light p-4 flex items-center border-b border-gray-100">
              <div className="w-10 h-10 bg-propwiz-green rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">P</span>
              </div>
              <div className="ml-3">
                <div className="font-medium text-propwiz-dark">Propwiz Assistant</div>
                <div className="text-xs text-gray-500">Online</div>
              </div>
            </div>
            
            {/* Chat area */}
            <div 
              ref={chatContainerRef} 
              className="p-4 h-96 overflow-y-auto bg-[#E5DDD5] bg-opacity-30 space-y-4 scroll-smooth"
            >
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.sender === 'user' 
                        ? 'bg-propwiz-light text-propwiz-dark rounded-tr-none' 
                        : 'bg-white text-propwiz-dark rounded-tl-none border border-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    
                    {message.properties && (
                      <div className="mt-3 space-y-2">
                        {message.properties.map(property => (
                          <div 
                            key={property.id}
                            className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                          >
                            <div className="flex gap-3">
                              <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                <img 
                                  src={property.image} 
                                  alt={`Property in ${property.location}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <p className="font-medium text-sm">{property.location}</p>
                                  {property.capRate && (
                                    <span className="bg-propwiz-green text-white text-xs px-2 py-0.5 rounded-full">
                                      {property.capRate} Cap
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-semibold">{property.price}</p>
                                <p className="text-xs text-gray-500">{property.beds} bed, {property.baths} bath</p>
                                <p className="text-xs text-propwiz-green mt-1">✓ Added to Google Sheet</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-400">{message.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%] animate-pulse">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSend} className="p-3 bg-white flex items-center gap-2 relative">
              <Input
                placeholder="Type your property search..."
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1 rounded-full bg-gray-50 border-gray-200 focus:border-propwiz-green"
                readOnly={messageSent}
              />
              <Button 
                type="submit" 
                size="icon" 
                className={`bg-propwiz-green text-white rounded-full hover:bg-propwiz-green/90 ${!messageSent ? 'animate-pulse' : ''}`}
                disabled={messageSent}
              >
                <Send size={18} />
              </Button>
              
              {!messageSent && (
                <div className="absolute -top-10 right-3 bg-black text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
                  Click send to search for properties 👇
                  <div className="absolute -bottom-1 right-5 h-3 w-3 bg-black rotate-45"></div>
                </div>
              )}
            </form>
            
            <div className="bg-white px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500">
                Chat with our AI to find your ideal investment property
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Properties are automatically added to your Google Sheet for easy tracking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
