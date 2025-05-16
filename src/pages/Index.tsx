
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import EnhancedDemo from '@/components/EnhancedDemo';

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="bg-gradient-to-br from-propwiz-light to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
            <Hero />
            <WhatsAppDemo />
          </div>
        </div>
      </div>
      <HowItWorks />
      <Features />
      <EnhancedDemo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
