
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const REDealrLogo = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-8 w-8">
        {/* Building with trending arrow */}
        <div className="absolute inset-0 w-6 h-6 bg-propwiz-green rounded-sm flex items-center justify-center">
          <Building2 className="h-3.5 w-3.5 text-white" />
        </div>
        {/* Trending up arrow */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-propwiz-green rounded-full flex items-center justify-center">
          <TrendingUp className="h-2.5 w-2.5 text-white" />
        </div>
      </div>
      <span className="ml-2 font-bold text-xl text-propwiz-dark">RE<span className="text-propwiz-green">Dealr</span></span>
    </div>
  );
};

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
  
  return (
    <nav className={`py-4 px-6 sticky top-0 z-20 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <REDealrLogo />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-propwiz-dark hover:text-propwiz-green font-medium transition flex items-center space-x-1 group">
            <span>How It Works</span>
            <span className="h-0.5 w-0 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#features" className="text-propwiz-dark hover:text-propwiz-green font-medium transition flex items-center space-x-1 group">
            <span>Features</span>
            <span className="h-0.5 w-0 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonials" className="text-propwiz-dark hover:text-propwiz-green font-medium transition flex items-center space-x-1 group">
            <span>Testimonials</span>
            <span className="h-0.5 w-0 bg-propwiz-green group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <div className="flex items-center">
          <Link to="/signup">
            <Button className="bg-propwiz-green hover:bg-opacity-90 rounded-full px-6 text-white relative overflow-hidden group">
              <span className="relative z-10">Start Free Beta</span>
              <span className="absolute inset-0 w-full h-0 bg-white/20 group-hover:h-full transition-all duration-300"></span>
            </Button>
          </Link>
          
          <button 
            className="ml-4 p-2 rounded-full bg-gray-100 md:hidden"
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
      <div className={`fixed inset-x-0 top-[72px] bg-white border-t border-gray-100 shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="p-4 space-y-3">
          <a 
            href="#how-it-works" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-light rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-light rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-light rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Link
            to="/signup"
            className="block py-3 px-4 text-propwiz-dark hover:bg-propwiz-light rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
