
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const topReviews = [
  {
    quote: "redealr saved me hours with its AI deal finder and CRM! The automation tools are incredible for real estate professionals.",
    author: "Jane D.",
    role: "Real Estate Agent",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
  },
  {
    quote: "Finding off-market deals has never been easier. The WhatsApp integration is genius - everything I need in one place.",
    author: "Michael Chen",
    role: "Real Estate Investor", 
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    quote: "The lead nurturing CRM turned my one-time clients into lifetime relationships. My business has grown 300% since using redealr.",
    author: "Sarah Rodriguez",
    role: "Property Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
  }
];

const StreamlinedTestimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-propwiz-green/8">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">What Users Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join the growing community of satisfied redealr users unlocking deals and building loyalty
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topReviews.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col h-full border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-propwiz-dark">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 flex-grow">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/reviews"
            className="inline-flex items-center px-6 py-3 bg-propwiz-green text-white rounded-full hover:bg-green-600 transition-all duration-300"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StreamlinedTestimonials;
