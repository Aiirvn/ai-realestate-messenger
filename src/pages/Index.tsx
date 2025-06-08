
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import StreamlinedTestimonials from '@/components/StreamlinedTestimonials';
import SEOContent from '@/components/SEOContent';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-inter overflow-hidden">
      <Navbar />
      <div className="bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
            <Hero />
            <WhatsAppDemo />
          </div>
        </div>
      </div>
      <HowItWorks />
      <Features />
      <SEOContent />
      <StreamlinedTestimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
