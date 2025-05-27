
import React from 'react';

const testimonials = [
  {
    quote: "REDealr helped me find my dream investment property within days. I just sent a WhatsApp message with what I wanted and got matched listings instantly!",
    author: "Sarah Johnson",
    role: "First-time Real Estate Investor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "As a serious investor, I need to quickly find properties that match specific criteria. REDealr saved me countless hours of searching.",
    author: "Michael Chen",
    role: "Real Estate Investor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "My clients love that I can create personalized property recommendations for them in seconds using REDealr.",
    author: "Jessica Rodriguez",
    role: "Real Estate Agent",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-propwiz-green/8">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join the growing community of satisfied RE<span className="font-semibold text-propwiz-green">Dealr</span> users
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col h-full border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-grow">
                <svg className="h-6 w-6 text-propwiz-green mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-propwiz-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
