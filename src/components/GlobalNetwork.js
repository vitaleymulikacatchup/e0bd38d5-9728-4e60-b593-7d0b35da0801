import React from 'react';

const GlobalNetwork = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            One global cloud network{' '}
            <span className="gradient-text">unlike any other</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Only Cloudflare offers an intelligent, global cloud network built from the ground up for security, speed and reliability.
          </p>
        </div>
        
        {/* Network Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-cloudflare-orange mb-2">330+</div>
            <div className="text-gray-600">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cloudflare-orange mb-2">120+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cloudflare-orange mb-2">25+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cloudflare-orange mb-2">100%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
        </div>

        {/* World Map Illustration */}
        <div className="relative bg-white rounded-2xl p-8 h-96 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl h-64">
              {/* Simplified world map representation */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 opacity-30 rounded-full transform scale-x-150"></div>
              {/* Network points */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;