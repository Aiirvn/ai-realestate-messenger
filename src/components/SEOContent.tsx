
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Star, ChevronRight, Bot, Target, Zap } from "lucide-react";

const SEOContent: React.FC = () => {
  return (
    <>
      {/* Article Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
                How redealr Delivers Real Estate Deals Straight to Your WhatsApp in 2025
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                Discover how redealr's AI-driven platform scours the market for hot opportunities 
                and delivers personalized deal alerts directly to your WhatsApp for faster closing.
              </p>
              <div className="relative mx-auto max-w-2xl mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-propwiz-green/10 to-propwiz-green/5 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto w-24 h-24 bg-propwiz-green/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-12 w-12 text-propwiz-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-propwiz-dark">AI-Powered WhatsApp Integration</h3>
                  </div>
                </div>
              </div>
              <Link to="/signup">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                  Join Waitlist
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
                  How does redealr deliver deals to my WhatsApp?
                </h3>
                <p className="text-gray-700">
                  redealr's AI continuously scours multiple listing sources and market data to identify 
                  hot opportunities, then delivers personalized deal alerts straight to your WhatsApp with 
                  all the key details you need to act fast.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">
                  Can I nurture leads and close deals faster with redealr?
                </h3>
                <p className="text-gray-700">
                  Absolutely! redealr includes powerful lead nurturing tools that automatically send 
                  personalized deal alerts to your clients through WhatsApp, keeping them engaged and 
                  helping you close deals faster than traditional methods.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">
                  Is redealr free to try?
                </h3>
                <p className="text-gray-700">
                  Yes! You can start finding and nurturing real estate deals completely free. 
                  Text 'Find me a 2/2 in Miami' to get started and experience AI-powered deal discovery today.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/signup">
                <Button className="bg-propwiz-green hover:bg-green-600 rounded-full px-6 py-3">
                  Start Finding Deals
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
              Powerful Tools for Real Estate Success
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-propwiz-green/10 to-propwiz-green/5 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-propwiz-green/10 rounded-full flex items-center justify-center mb-3">
                        <Bot className="h-8 w-8 text-propwiz-green" />
                      </div>
                      <span className="text-sm font-medium text-propwiz-dark">AI Deal Finder</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">AI Deal Finder</h3>
                <p className="text-gray-700">
                  AI-powered tool that scours the market and delivers hot real estate opportunities directly to your WhatsApp.
                </p>
              </div>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-propwiz-green/10 to-propwiz-green/5 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-propwiz-green/10 rounded-full flex items-center justify-center mb-3">
                        <Target className="h-8 w-8 text-propwiz-green" />
                      </div>
                      <span className="text-sm font-medium text-propwiz-dark">Lead Nurturing</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">Lead Nurturing System</h3>
                <p className="text-gray-700">
                  Automated system for nurturing client relationships with personalized deal alerts and faster closing.
                </p>
              </div>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-propwiz-green/10 to-propwiz-green/5 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-propwiz-green/10 rounded-full flex items-center justify-center mb-3">
                        <Zap className="h-8 w-8 text-propwiz-green" />
                      </div>
                      <span className="text-sm font-medium text-propwiz-dark">WhatsApp Integration</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-propwiz-dark mb-3">WhatsApp Integration</h3>
                <p className="text-gray-700">
                  Seamless WhatsApp integration for instant deal delivery and effortless client communication.
                </p>
              </div>
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
                "Saved me hours with its AI deal finder! Getting hot opportunities delivered straight to WhatsApp is a game-changer."
              </blockquote>
              <cite className="text-propwiz-green font-semibold">- Jane D., Real Estate Investor</cite>
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
