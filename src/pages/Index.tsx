
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import HowItWorks from '@/components/HowItWorks';
import Demo from '@/components/Demo';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <WhatsAppDemo />
      <HowItWorks />
      <Features />
      <Demo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
