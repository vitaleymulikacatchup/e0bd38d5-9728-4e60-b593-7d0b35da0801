import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Connect Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Connect your people, apps and AI agents
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Modernize your network and secure your workforce against sophisticated attacks, with browsing controls and phishing. Accelerate your journey to Zero Trust with our SASE platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary">
                Contact sales
              </button>
              <button className="btn-outline">
                Learn more
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Related</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-sm text-cloudflare-orange hover:underline">Cloudflare Zero Trust (SASE)</a>
                <a href="#" className="text-sm text-cloudflare-orange hover:underline">AI and SASE security</a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="relative">
                {/* Cloud illustration */}
                <div className="w-32 h-20 bg-cloudflare-orange rounded-full opacity-80 mx-auto mb-4"></div>
                <div className="flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-cloudflare-orange rounded-full opacity-60"></div>
                  <div className="w-8 h-8 bg-cloudflare-orange rounded-full opacity-60"></div>
                  <div className="w-8 h-8 bg-cloudflare-orange rounded-full opacity-60"></div>
                </div>
                {/* Connection lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-cloudflare-orange border-dashed rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Protect Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Protect and accelerate websites and AI-enabled apps
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Use our industry-leading WAF, DDoS, and bot protection to protect your websites, APIs, and AI applications while accelerating performance with our ultra-fast global network that spans 330+ cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary">
                Start for free
              </button>
              <button className="btn-outline">
                Compare plans
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Related</p>
              <p className="text-sm text-gray-600">Cloudflare named a Leader in Forrester Wave for DDoS 2024</p>
            </div>
          </div>
          <div className="lg:order-1">
            <div className="bg-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
              {/* Speedometer illustration */}
              <div className="relative">
                <div className="w-32 h-16 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-t-full relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-800 origin-bottom rotate-45"></div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-2xl font-bold text-gray-900">Fast</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Build and secure AI agents
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Agents are the future of AI, and Cloudflare is the best place to get started. Use our Agent Framework and orchestration tools to run the models you choose and deploy them globally with our ultra-fast, cost-effective inference that removes GPU bottlenecks and accelerates the features of your apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary">
                Start building today
              </button>
              <button className="btn-outline">
                Developer docs
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Related</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-sm text-cloudflare-orange hover:underline">Build AI apps quickly</a>
                <a href="#" className="text-sm text-cloudflare-orange hover:underline">Build AI Agents</a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-8 h-80 flex items-center justify-center">
              {/* Code/AI illustration */}
              <div className="bg-blue-900 rounded-lg p-6 w-64 h-48 relative">
                <div className="space-y-2">
                  <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-300 rounded w-1/2"></div>
                  <div className="h-2 bg-blue-400 rounded w-5/6"></div>
                  <div className="h-2 bg-blue-300 rounded w-2/3"></div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;