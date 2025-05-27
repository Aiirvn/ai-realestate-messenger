
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
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <Link to="/" className={`flex items-center hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-propwiz-green to-green-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
        {/* Custom geometric pattern for uniqueness */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className={`${iconSizeClasses[size]} font-bold text-white tracking-tight`}>
            <span className="font-extrabold">RE</span>
          </div>
        </div>
        {/* Small accent dot */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
      </div>
      {showText && (
        <span className={`ml-3 font-bold ${textSizeClasses[size]} text-propwiz-dark tracking-tight`}>
          RE<span className="text-propwiz-green">Dealr</span>
        </span>
      )}
    </Link>
  );
};
