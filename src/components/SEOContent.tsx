
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, TrendingUp, Users, Star, ChevronRight } from "lucide-react";

const SEOContent: React.FC = () => {
  return (
    <>
      {/* Article Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
                How redealr's AI Chatbot Revolutionizes Real Estate Deals in 2025
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                Discover how redealr's AI chatbot finds off-market deals, analyzes properties, 
                nurtures leads with CRM, and automates follow-ups on WhatsApp for real estate professionals.
              </p>
              <div className="relative mx-auto max-w-2xl mb-6">
                <img 
                  src="https://redealr.com/images/whatsapp-analysis.jpg"
                  alt="redealr WhatsApp analysis interface showing property data and AI insights"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <Link to="/features">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                  Explore Features
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-propwiz-green/5 to-propwiz-green/2">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-propwiz-dark mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">
                  How does redealr find off-market deals?
                </h3>
                <p className="text-gray-700">
                  redealr's AI scans multiple listing sources and connects directly through WhatsApp to identify 
                  and analyze off-market properties in real-time, giving you access to deals before they hit the public market.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">
                  Can I automate client follow-up with redealr?
                </h3>
                <p className="text-gray-700">
                  Yes! redealr includes a powerful CRM system that automatically nurtures leads and schedules 
                  follow-ups through WhatsApp, ensuring no potential client falls through the cracks.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-700">
                  Absolutely! You can try redealr's AI chatbot and automation tools completely free. 
                  Start building client loyalty today with our beta access.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/trial">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                  Start Free Trial
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-propwiz-dark mb-12">
              Powerful Features for Real Estate Professionals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src="https://redealr.com/images/deal-finder.jpg"
                    alt="Deal Finder - AI-powered tool for finding off-market real estate opportunities"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Deal Finder</h3>
                <p className="text-gray-700">
                  AI-powered tool that scans and identifies off-market real estate opportunities before they hit the market.
                </p>
              </div>
              <div className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src="https://redealr.com/images/crm-dashboard.jpg"
                    alt="Lead Nurturing CRM - Automated system for managing client relationships"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Lead Nurturing CRM</h3>
                <p className="text-gray-700">
                  Automated system for managing and nurturing client relationships, turning leads into lifetime clients.
                </p>
              </div>
              <div className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src="https://redealr.com/images/whatsapp-auto.jpg"
                    alt="Automation Tools - WhatsApp integration for seamless property analysis"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Automation Tools</h3>
                <p className="text-gray-700">
                  WhatsApp integration for seamless property analysis and client communication automation.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/features">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-8 py-3 text-lg">
                  View All Features
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review Snippet Section */}
      <section className="py-16 bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-propwiz-dark mb-8">
              What Real Estate Professionals Say
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Saved me hours with its AI deal finder and CRM! The automation tools are incredible for real estate professionals."
              </blockquote>
              <cite className="text-propwiz-green font-semibold">- Jane D., Real Estate Agent</cite>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">4.8/5</span> rating from <span className="font-semibold">100+</span> reviews
              </div>
            </div>
            <div className="mt-8">
              <Link to="/reviews">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                  Read All Reviews
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOContent;
