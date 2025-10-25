import React from 'react';
import { MapPin, Phone, Users } from 'lucide-react';

const GetStartedSection = () => {
  return (
    <section className="bg-gradient-orange py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get started with the connectivity cloud
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Optimized for free</h3>
            <p className="text-white opacity-90 mb-4">
              Get basic website performance and security with Cloudflare's free plan.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
              Sign up free
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Need help choosing?</h3>
            <p className="text-white opacity-90 mb-4">
              Get personalized recommendations from our team of experts.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
              Contact sales
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Talk to an expert</h3>
            <p className="text-white opacity-90 mb-4">
              Schedule a call with our team to discuss your specific needs.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
              Schedule call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;