import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      category: 'BLOG',
      title: 'Cloudflare named a Leader in Forrester Wave for DDoS 2024',
      action: 'Read report'
    },
    {
      category: 'REPORT',
      title: 'Cloudflare named a Leader in Forrester Wave for DDoS 2024',
      action: 'Read report'
    },
    {
      category: 'ANNOUNCEMENT',
      title: 'Announcing Cloudflare\'s pay-per-use tools',
      action: 'Learn more'
    },
    {
      category: 'WEBINAR',
      title: 'Join our expert-led webinar on cloud migration and security',
      action: 'Register'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            News and resources
          </h2>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-4 py-2 bg-cloudflare-orange text-white rounded-md font-medium">
              What's new
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-cloudflare-orange">
              Reports
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-cloudflare-orange">
              Library
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-cloudflare-orange">
              Events
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gradient-orange rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-32 bg-orange-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-white opacity-80 mb-2">
                  {item.category}
                </div>
                <h3 className="text-white font-medium mb-4 leading-tight">
                  {item.title}
                </h3>
                <button className="text-white text-sm font-medium hover:underline">
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cloudflare-orange rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;