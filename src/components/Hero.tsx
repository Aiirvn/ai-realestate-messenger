
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="py-8 lg:py-16 relative">
      <div className="relative z-10">
        {/* Updated tagline badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-propwiz-green font-medium text-sm mb-6 border border-propwiz-green/20 shadow-sm animate-fade-in">
          <MessageSquare className="w-4 h-4 mr-2 animate-pulse" />
          Deals at Your Fingertips
          <TrendingUp className="w-4 h-4 ml-2" />
        </div>
        
        {/* Updated headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-propwiz-dark leading-tight mb-6 animate-fade-in">
          Deals Delivered to Your <span className="text-propwiz-green bg-gradient-to-r from-propwiz-green to-green-500 bg-clip-text text-transparent">WhatsApp</span>
        </h1>
        
        {/* Enhanced subheadline */}
        <p className="text-lg mb-6 text-gray-700 max-w-lg animate-fade-in font-medium">
          Find and Nurture Real Estate Wins with AI-Powered Ease.
        </p>
        
        {/* New body copy */}
        <p className="text-base mb-8 text-gray-600 max-w-2xl animate-fade-in leading-relaxed">
          Imagine scoring your next real estate deal with a single text! 🏠 redealr.com uses AI to scour the market and deliver hot opportunities straight to your WhatsApp. Search instantly, nurture leads with personalized deal alerts, and close faster—all from the app you already love. Perfect for investors, flippers, and first-timers craving speed and simplicity.
        </p>
        
        {/* Standardized CTA section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
          <Link to="/signup#waitlist-top" className="group">
            <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-8 py-6 text-white flex items-center text-lg shadow-lg shadow-propwiz-green/20 hover:shadow-propwiz-green/30 transition-all transform hover:scale-105 hover:-translate-y-1 duration-300">
              <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Text 'Search [city]' Now
              <div className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">Start Winning</div>
            </Button>
          </Link>
        </div>
        
        {/* Updated social proof with community focus */}
        <div className="flex items-center space-x-4 animate-fade-in">
          <div className="flex -space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <div className="w-10 h-10 rounded-full bg-propwiz-green/20 border-2 border-white flex items-center justify-center shadow-md">
              <span className="text-propwiz-green font-semibold text-sm">+</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-propwiz-green">150+</span> real estate professionals winning deals
            </p>
            <div className="flex items-center mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs">★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">Join the WhatsApp community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
