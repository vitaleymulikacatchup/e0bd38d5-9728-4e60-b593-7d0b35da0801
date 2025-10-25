import React from 'react';

const CompaniesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Leading companies rely on{' '}
            <span className="gradient-text">Cloudflare</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connect users and apps securely
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Keep your people safe and productive as they access any device, from any location with Zero Trust and SASE built for any scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get started
              </button>
              <button className="btn-outline">
                Learn more
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <p className="text-lg mb-4">
                "Discord is where the world builds relationships. Cloudflare helps us deliver on that mission, connecting our internal engineering team to the tools they need. With Cloudflare, we can keep focusing every ounce of our critical energy on empowering our healthy and positive community."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                <div>
                  <div className="font-medium">Mark Smith</div>
                  <div className="text-sm opacity-90">VP of Infrastructure, Discord</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">BROADCOM</div>
          </div>
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">SHOPIFY</div>
          </div>
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">DOORDASH</div>
          </div>
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">GARMIN</div>
          </div>
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">SOFI</div>
          </div>
          <div className="flex items-center justify-center h-12">
            <div className="text-xl font-bold text-gray-600">THOMSON</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;