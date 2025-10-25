import React from 'react';
import { Zap, Globe, Target, Package, TrendingUp, Award } from 'lucide-react';

const HelpSection = () => {
  const helpItems = [
    {
      icon: Zap,
      title: 'Accelerate website performance'
    },
    {
      icon: Globe,
      title: 'Block bot traffic'
    },
    {
      icon: Target,
      title: 'Optimize video experiences'
    },
    {
      icon: Package,
      title: 'Deploy serverless code'
    },
    {
      icon: TrendingUp,
      title: 'Deploy AI on the edge'
    },
    {
      icon: Award,
      title: 'Eliminate egress fees for object storage'
    }
  ];

  return (
    <section className="bg-gradient-orange py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            How Cloudflare can help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <Icon className="w-8 h-8 text-cloudflare-orange mx-auto mb-4" />
                <h3 className="font-medium text-gray-900">{item.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-white text-cloudflare-orange font-medium px-8 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;