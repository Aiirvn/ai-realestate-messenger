
import React from 'react';
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="text-gray-600 mt-4 max-w-xs">
              AI-powered real estate deal finder via WhatsApp, making investment property discovery easier than ever before.
            </p>
          </div>
          
          <div>
            <Link to="/signup" className="text-propwiz-green hover:text-green-600 font-medium transition-colors duration-200">
              Join the Waitlist
            </Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} redealr. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/signup" className="text-gray-500 hover:text-propwiz-green text-sm transition-colors duration-200">Join Waitlist</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
