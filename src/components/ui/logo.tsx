
import React from 'react';
import { Home } from "lucide-react";
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
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <Link to="/" className={`flex items-center hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <div className={`${sizeClasses[size]} bg-propwiz-green rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200`}>
        <Home className={`${iconSizeClasses[size]} text-white`} />
      </div>
      {showText && (
        <span className={`ml-2 font-bold ${textSizeClasses[size]} text-propwiz-dark`}>
          RE<span className="text-propwiz-green">Dealr</span>
        </span>
      )}
    </Link>
  );
};
