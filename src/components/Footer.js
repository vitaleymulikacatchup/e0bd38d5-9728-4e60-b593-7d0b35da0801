import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cloudflare-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pb-8 border-b border-gray-700">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <div className="w-8 h-8 bg-cloudflare-orange rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">CLOUDFLARE</span>
          </div>
          <div className="flex items-center space-x-2 text-cloudflare-orange">
            <Phone className="w-4 h-4" />
            <span>Contact sales +44 20 3514 6970</span>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">GETTING STARTED</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Free plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Small business plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">For enterprises</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Get a recommendation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Request a demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Connectivity cloud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Application services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SASE and workspace security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Network services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developer platform</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Help center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developers Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lost account access?</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">COMPLIANCE</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Compliance resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trust</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">GDPR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Responsible AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Transparency report</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About Cloudflare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Network map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Logos & press kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Diversity, equity, & inclusion</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 mb-4 lg:mb-0">
            © 2024 Cloudflare, Inc. | Privacy policy | Terms of service | Report Security Issues | Trademark
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;