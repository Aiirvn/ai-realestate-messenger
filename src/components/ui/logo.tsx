
import React from 'react';
import { Link } from "react-router-dom";

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
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <Link to="/" className={`flex items-center hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-propwiz-green via-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden border border-green-400/20`}>
        {/* Sophisticated geometric pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-white/30 rounded-full"></div>
        </div>
        
        {/* Modern RE monogram */}
        <div className="relative z-10 flex items-center justify-center">
          <div className={`${iconSizeClasses[size]} font-black text-white tracking-tighter flex items-center`}>
            <span className="relative">
              R
              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-white rounded-full opacity-60"></span>
            </span>
            <span className="ml-0.5 relative">
              E
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-white/60"></span>
            </span>
          </div>
        </div>
        
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-lg"></div>
      </div>
      {showText && (
        <span className={`ml-3 font-bold ${textSizeClasses[size]} text-propwiz-dark tracking-tight`}>
          RE<span className="text-propwiz-green font-extrabold">Dealr</span>
        </span>
      )}
    </Link>
  );
};
