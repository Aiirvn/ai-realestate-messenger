
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/42265438-8a38-4517-b267-5a935ec12eca.png" 
            alt="Propwiz.ai Logo" 
            className="h-10 mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-propwiz-dark hover:text-propwiz-green font-medium transition">How It Works</a>
          <a href="#features" className="text-propwiz-dark hover:text-propwiz-green font-medium transition">Features</a>
          <a href="#testimonials" className="text-propwiz-dark hover:text-propwiz-green font-medium transition">Testimonials</a>
        </div>
        <Button className="bg-propwiz-green hover:bg-opacity-90 rounded-full px-6 text-white">
          Start Free Beta
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

