
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    console.log('CTA clicked - redirecting to signup');
  };

  return (
    <div className="py-8 lg:py-16 relative">
      <div className="relative z-10">
        {/* Updated tagline badge */}
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-propwiz-green font-medium text-xs sm:text-sm mb-6 border border-propwiz-green/20 shadow-sm animate-fade-in">
          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
          Deals at Your Fingertips
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
        </div>
        
        {/* Updated headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-propwiz-dark leading-tight mb-6 animate-fade-in">
          Deals Delivered to Your <span className="text-propwiz-green bg-gradient-to-r from-propwiz-green to-green-500 bg-clip-text text-transparent">WhatsApp</span>
        </h1>
        
        {/* Enhanced subheadline with pop effect */}
        <p className="text-lg sm:text-xl mb-6 text-gray-700 max-w-lg animate-fade-in font-semibold bg-gradient-to-r from-propwiz-green/20 to-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-propwiz-dark relative">
          <span className="relative z-10 bg-gradient-to-r from-propwiz-dark via-propwiz-green to-propwiz-dark bg-clip-text text-transparent animate-pulse">
            Find and Nurture Real Estate Wins with AI-Powered Ease.
          </span>
        </p>
        
        {/* Updated body copy */}
        <p className="text-sm sm:text-base mb-8 text-gray-600 max-w-2xl animate-fade-in leading-relaxed">
          Discover real estate deals fast with redealr.com's AI search on WhatsApp. Get instant property listings, nurture leads with tailored alerts, and close efficiently. Ideal for investors, flippers, and first-time buyers.
        </p>
        
        {/* Enhanced CTA section with improved functionality */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
          <Link to="/signup#waitlist-top" className="group" onClick={handleCTAClick}>
            <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-white flex items-center text-base sm:text-lg shadow-lg shadow-propwiz-green/20 hover:shadow-propwiz-green/30 transition-all transform hover:scale-105 hover:-translate-y-1 duration-300 w-full sm:w-auto touch-manipulation">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
              Start Finding Deals Now
            </Button>
          </Link>
        </div>
        
        {/* Updated social proof with community focus */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
          <div className="flex -space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face" 
              alt="Real Estate Professional" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
            />
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-propwiz-green/20 border-2 border-white flex items-center justify-center shadow-md">
              <span className="text-propwiz-green font-semibold text-xs sm:text-sm">+</span>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold text-propwiz-green">150+</span> real estate professionals winning deals
            </p>
            <div className="flex items-center justify-center sm:justify-start mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs">★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">Join the redealr community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
