
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wand2, Home, ArrowLeft } from "lucide-react";

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brokerage, setBrokerage] = useState('');
  const [links, setLinks] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Application submitted!",
        description: "We're reviewing your application and will be in touch soon.",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-br from-propwiz-light to-white py-16">
        <div className="container px-4 mx-auto">
          <Link to="/" className="inline-flex items-center text-propwiz-dark mb-8 hover:text-propwiz-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          {!submitted ? (
            <>
              <div className="max-w-2xl mx-auto mb-10">
                <div className="flex justify-center mb-8">
                  <div className="relative h-12 w-12">
                    <Wand2 className="h-12 w-12 text-propwiz-green transform rotate-12" />
                    <Home className="h-6 w-6 text-propwiz-green absolute bottom-0 left-3" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-propwiz-dark mb-4">Join the PropWiz Beta</h1>
                <p className="text-gray-600 text-center">Be among the first to use our AI-powered real estate search platform</p>
              </div>
              
              <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="brokerage">Brokerage (optional)</Label>
                    <Input 
                      id="brokerage" 
                      value={brokerage}
                      onChange={(e) => setBrokerage(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="links">Relevant Links (optional)</Label>
                    <Textarea 
                      id="links" 
                      value={links}
                      onChange={(e) => setLinks(e.target.value)}
                      placeholder="LinkedIn, website, etc."
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-propwiz-green hover:bg-opacity-90 rounded-full text-white py-6"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to receive updates about PropWiz.ai
                  </p>
                </form>
              </div>
            </>
          ) : (
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-propwiz-green/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-propwiz-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-propwiz-dark mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your application to join the PropWiz.ai beta has been submitted. Our team is reviewing your information and will be in touch shortly with next steps.
              </p>
              <Link to="/">
                <Button className="bg-propwiz-green hover:bg-opacity-90 rounded-full text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
