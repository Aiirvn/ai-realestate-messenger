
import React from 'react';
import { Link } from "react-router-dom";
import { Wand2, Home } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="relative h-8 w-8">
                <Wand2 className="h-8 w-8 text-propwiz-green transform rotate-12" />
                <Home className="h-4 w-4 text-propwiz-green absolute bottom-1/4 -right-1" />
              </div>
              <span className="ml-2 font-bold text-xl text-propwiz-dark">PropWiz<span className="text-propwiz-green">.ai</span></span>
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              AI-powered real estate search via WhatsApp, making property discovery easier than ever before.
            </p>
          </div>
          
          <div>
            <Link to="/signup" className="text-propwiz-green hover:text-propwiz-green/80 font-medium">
              Join the Waitlist
            </Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Propwiz.ai. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/signup" className="text-gray-500 hover:text-propwiz-green text-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
