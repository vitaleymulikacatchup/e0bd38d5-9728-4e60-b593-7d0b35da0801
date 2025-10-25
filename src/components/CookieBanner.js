import React from 'react';
import { X } from 'lucide-react';

const CookieBanner = ({ onClose }) => {
  return (
    <div className="cookie-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Our site uses cookies</h3>
            <p className="text-sm text-gray-600">
              Like most websites, we use cookies to make our site work the way you expect it to, improve your experience on our site, analyze site usage, and assist in our marketing efforts. By choosing "Accept All Cookies", you agree to the storing of all categories of cookies on your device. If you wish to accept or reject some categories of cookies, please click "Cookie Preferences."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Cookie Preferences
            </button>
            <button className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Reject All
            </button>
            <button className="px-4 py-2 text-sm bg-cloudflare-blue text-white rounded-md hover:bg-blue-700">
              Accept All Cookies
            </button>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;