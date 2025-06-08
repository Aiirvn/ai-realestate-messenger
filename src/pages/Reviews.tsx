import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MessageSquare, TrendingUp, Users } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Reviews: React.FC = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    rating: 5,
    comment: ''
  });

  // Limited to top 5 reviews for better performance and focus
  const reviews = [
    {
      id: 1,
      name: "Jane D.",
      role: "Real Estate Agent",
      rating: 5,
      comment: "redealr saved me hours with its AI deal finder and CRM! The automation tools are incredible for real estate professionals.",
      date: "2025-06-05",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Real Estate Investor",
      rating: 5,
      comment: "Finding off-market deals has never been easier. The WhatsApp integration is genius - everything I need in one place.",
      date: "2025-06-03",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah Rodriguez",
      role: "Property Manager",
      rating: 5,
      comment: "The lead nurturing CRM turned my one-time clients into lifetime relationships. My business has grown 300% since using redealr.",
      date: "2025-06-01",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Real Estate Broker",
      rating: 4,
      comment: "Professional-grade analysis in minutes, not hours. My clients are consistently impressed with the speed and quality of insights.",
      date: "2025-05-28",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Investment Advisor",
      rating: 5,
      comment: "The automation tools have revolutionized my follow-up process. No more missed opportunities - everything happens seamlessly.",
      date: "2025-05-25",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', newReview);
    // Here you would typically send the review to your backend
    alert('Thank you for your review! It will be published after moderation.');
    setNewReview({ name: '', role: '', rating: 5, comment: '' });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // JSON-LD structured data for reviews
  const reviewsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "redealr",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.comment,
      "datePublished": review.date
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsStructuredData) }}
      />

      <div className="font-inter min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-propwiz-green/8 to-propwiz-green/3">
          <div className="container px-4 mx-auto text-center">
            {/* New tagline badge */}
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-propwiz-green font-medium text-sm mb-6 border border-propwiz-green/20 shadow-sm">
              Unlock Deals, Build Loyalty—All on WhatsApp
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-propwiz-dark mb-6">
              What Real Estate Professionals Say About RE<span className="text-propwiz-green">Dealr</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join thousands of agents and investors who are unlocking deals and building loyalty with our WhatsApp solutions
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-propwiz-dark">4.8/5</span>
              <span className="text-gray-600">from 100+ reviews</span>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-propwiz-dark">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.comment}"</p>
                  <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">Showing top 5 reviews from 100+ satisfied users</p>
            </div>
          </div>
        </section>

        {/* Review Submission Form */}
        <section id="waitlist-top" className="py-16 bg-gradient-to-br from-propwiz-green/5 to-propwiz-green/2">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-propwiz-dark mb-8">
                Share Your REDealr Experience
              </h2>
              <form onSubmit={handleSubmitReview} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-propwiz-green focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      value={newReview.role}
                      onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                      placeholder="e.g., Real Estate Agent"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-propwiz-green focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-propwiz-green focus:border-transparent"
                    placeholder="Tell us about your experience with redealr..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-propwiz-green hover:bg-green-600 rounded-full py-3">
                  Submit Review
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-propwiz-green text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Unlock Deals and Build Loyalty?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of professionals already using redealr</p>
            <Link to="/signup#waitlist-top">
              <Button className="bg-white text-propwiz-green hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold">
                <MessageSquare className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
