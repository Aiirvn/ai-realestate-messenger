
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCTAClick = () => {
    console.log('Navbar CTA clicked');
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className={`py-4 px-6 sticky top-0 z-20 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-propwiz-dark hover:text-propwiz-green font-medium transition-all duration-300 relative group py-2">
            <span>How It Works</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#features" className="text-propwiz-dark hover:text-propwiz-green font-medium transition-all duration-300 relative group py-2">
            <span>Features</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonials" className="text-propwiz-dark hover:text-propwiz-green font-medium transition-all duration-300 relative group py-2">
            <span>Testimonials</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <div className="flex items-center">
          <Link to="/signup" onClick={handleCTAClick}>
            <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white relative overflow-hidden group transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <span className="relative z-10">Join Waitlist</span>
              <span className="absolute inset-0 w-full h-0 bg-white/20 group-hover:h-full transition-all duration-300"></span>
            </Button>
          </Link>
          
          <button 
            className="ml-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 md:hidden transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-propwiz-dark" />
            ) : (
              <Menu className="h-5 w-5 text-propwiz-dark" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="p-4 space-y-3">
          <a 
            href="#how-it-works" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-green/10 rounded-lg transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-green/10 rounded-lg transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-green/10 rounded-lg transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Link
            to="/signup"
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-green/10 rounded-lg transition-colors duration-200 touch-manipulation"
            onClick={handleCTAClick}
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
