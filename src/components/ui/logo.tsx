
import React from 'react';
import { Link } from "react-router-dom";
import { MapPin, Home } from "lucide-react";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <Link to="/" className={`flex items-center hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <div className={`${sizeClasses[size]} bg-propwiz-green rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative`}>
        {/* Location pin shape effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-propwiz-green rounded-full"></div>
        
        {/* House icon */}
        <Home className={`${iconSizeClasses[size]} text-white`} />
      </div>
      {showText && (
        <span className={`ml-3 font-bold ${textSizeClasses[size]} text-slate-700 tracking-tight`}>
          re<span className="text-propwiz-green font-extrabold">dealr</span>
        </span>
      )}
    </Link>
  );
};
