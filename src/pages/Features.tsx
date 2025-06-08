
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Search, FileSpreadsheet, Clock, Users, Zap, Globe, MessageCircle, TrendingUp, Heart } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: <Search className="h-8 w-8 text-propwiz-green" />,
      title: "Deal Finder",
      description: "AI-powered off-market deal discovery that scans multiple sources to find hidden opportunities before they hit the public market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      benefits: ["Access to off-market deals", "Real-time property alerts", "Automated market scanning"]
    },
    {
      icon: <Users className="h-8 w-8 text-propwiz-green" />,
      title: "Lead Nurturing CRM",
      description: "Transform one-time leads into lifetime clients with automated follow-ups and personalized communication workflows.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      benefits: ["Automated lead nurturing", "Client relationship tracking", "Personalized communications"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-propwiz-green" />,
      title: "WhatsApp Automation",
      description: "Seamlessly integrate all your real estate activities through WhatsApp's familiar interface with voice and text commands.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      benefits: ["Voice-activated commands", "Instant deal analysis", "Client communication hub"]
    }
  ];

  const advancedFeatures = [
    {
      icon: <MessageCircle className="h-6 w-6 text-propwiz-green" />,
      title: "Voice-Activated Deal Search",
      description: "Simply speak your criteria in WhatsApp and get instant property matches."
    },
    {
      icon: <Zap className="h-6 w-6 text-propwiz-green" />,
      title: "Instant Deal Viability Alerts",
      description: "Get real-time notifications when properties meet your investment criteria."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-propwiz-green" />,
      title: "Professional Analysis Reports",
      description: "Generate comprehensive deal analysis in minutes, not hours."
    },
    {
      icon: <Globe className="h-6 w-6 text-propwiz-green" />,
      title: "Multilingual Support",
      description: "Communicate with clients in their preferred language automatically."
    },
    {
      icon: <Heart className="h-6 w-6 text-propwiz-green" />,
      title: "Beta Feedback Channel",
      description: "Direct access to our development team for feature requests and improvements."
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-propwiz-green" />,
      title: "Google Sheets Integration",
      description: "Auto-populate deal data to your spreadsheets for easy tracking and analysis."
    }
  ];

  // JSON-LD structured data for features
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "redealr Features",
    "description": "Comprehensive AI-powered real estate tools for agents and investors",
    "itemListElement": coreFeatures.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": feature.title,
      "description": feature.description,
      "image": feature.image
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresStructuredData) }}
      />

      <div className="font-inter min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-propwiz-dark mb-6">
              Empower Your Real Estate Success with Advanced Features
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Discover how redealr's WhatsApp-powered tools transform the way you find deals, nurture leads, and automate your real estate business
            </p>
            <Link to="/trial">
              <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-8 py-4 text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Try It Now - Free
              </Button>
            </Link>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
                Core Features That Drive Results
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Everything you need to transform your real estate business, all accessible through WhatsApp
              </p>
            </div>
            
            <div className="space-y-20">
              {coreFeatures.map((feature, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-propwiz-light rounded-full flex items-center justify-center mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-propwiz-dark">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{feature.description}</p>
                    <ul className="space-y-3 mb-8">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-propwiz-green rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link to="/trial">
                      <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                        Try This Feature
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-80 object-cover rounded-xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features Grid */}
        <section className="py-20 bg-gradient-to-br from-propwiz-green/5 to-propwiz-green/2">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Additional features that set redealr apart from the competition
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-propwiz-light rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-propwiz-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Get started with redealr in three simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-propwiz-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Connect WhatsApp</h3>
                <p className="text-gray-700">Link your WhatsApp account to redealr and start using voice or text commands instantly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-propwiz-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Set Your Criteria</h3>
                <p className="text-gray-700">Tell redealr what you're looking for - location, price range, property type, and investment goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-propwiz-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Get Results</h3>
                <p className="text-gray-700">Receive instant deal analysis, lead nurturing, and automated follow-ups - all through WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of real estate professionals who are already empowering their success with redealr
            </p>
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-propwiz-dark mb-4">Free Beta Access</h3>
              <p className="text-4xl font-bold text-propwiz-green mb-4">$0</p>
              <p className="text-gray-700 mb-6">Full access to all features during our beta period</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-propwiz-green mr-2" />
                  Unlimited deal searches
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-propwiz-green mr-2" />
                  CRM for up to 1000 leads
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-propwiz-green mr-2" />
                  WhatsApp automation
                </li>
              </ul>
              <Link to="/trial">
                <Button className="w-full bg-propwiz-green hover:bg-green-600 rounded-full py-3">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600">No credit card required • Cancel anytime</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Features;
