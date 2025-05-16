
import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-16 bg-propwiz-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-propwiz-dark mb-4">See Propwiz in Action</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch how easy it is to find properties with just a WhatsApp message
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-4 max-w-lg w-full">
            <div className="aspect-w-9 aspect-h-16 relative bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              {/* This would normally contain a GIF or video demo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-propwiz-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-propwiz-dark">Demo Video</h3>
                  <p className="text-sm text-gray-500">Watch our WhatsApp property search in action</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-propwiz-green rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">U</div>
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  <p>Find me a 3 bedroom house in Austin with a pool under $800k</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 flex-row-reverse">
                <div className="w-8 h-8 bg-propwiz-green rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">P</div>
                <div className="bg-propwiz-green bg-opacity-10 rounded-lg p-3 text-sm">
                  <p>I found 5 properties matching your criteria in Austin! Here's the first one:</p>
                  <div className="mt-2 bg-white rounded-lg p-2 text-xs">
                    <p className="font-semibold">3 bed, 2.5 bath in North Austin</p>
                    <p>$785,000 - Pool, modern kitchen, 2,400 sqft</p>
                    <p className="underline text-propwiz-green mt-1">View details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

