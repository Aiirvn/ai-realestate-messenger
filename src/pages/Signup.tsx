import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, TrendingUp, ArrowLeft } from "lucide-react";
import { createClient } from '@supabase/supabase-js'; // Import Supabase client

// Initialize Supabase client with your Project URL and Anon API key
const supabase = createClient(
  'https://eeeqlbvndjcwkxuvqukm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZXFsYnZuZGpjd2t4dXZxdWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODAwMjgsImV4cCI6MjA2Mzg1NjAyOH0.3Wf2tnWQlZiopTIy9XteOB-9YuH8oGWY_Ibd8eLeyeA'
);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            brokerage: brokerage || null,
            relevant_links: links || null,
          },
        ]);

      if (error) {
        console.error('Error submitting lead:', error);
        toast({
          title: 'Submission Failed',
          description: 'There was an error submitting your application. Please try again.',
          variant: 'destructive',
        });
      } else {
        console.log('Lead submitted:', data);
        setSubmitted(true);
        toast({
          title: 'Application Submitted!',
          description: 'We’re reviewing your application and will be in touch soon.',
        });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      toast({
        title: 'Unexpected Error',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
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
                    <div className="absolute inset-0 w-10 h-10 bg-propwiz-green rounded-sm flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-propwiz-green rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-propwiz-dark mb-4">Join the REDealr Beta</h1>
                <p className="text-gray-600 text-center">Be among the first to use our AI-powered real estate deal finder</p>
              </div>
              
              <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
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
                        name="lastName"
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
                      name="email"
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
                      name="phone"
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
                      name="brokerage"
                      value={brokerage}
                      onChange={(e) => setBrokerage(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="links">Relevant Links (optional)</Label>
                    <Textarea 
                      id="links" 
                      name="links"
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
                Your application to join the REDealr beta has been submitted. Our team is reviewing your information and will be in touch shortly with next steps.
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