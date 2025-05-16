
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const CTA: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks for joining our beta!",
        description: "We'll send you a WhatsApp message to get started soon.",
      });
      setLoading(false);
      setPhone('');
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-propwiz-green/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">
            Start Finding Properties Today
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Join our free beta program and start using Propwiz.ai on WhatsApp instantly
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-12 rounded-full px-6"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-propwiz-green hover:bg-opacity-90 rounded-full h-12 px-8 text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Start Free Beta"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By signing up, you agree to receive WhatsApp messages from Propwiz.ai
            </p>
          </form>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-propwiz-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-propwiz-dark">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-propwiz-green/20 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-propwiz-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-propwiz-dark">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

