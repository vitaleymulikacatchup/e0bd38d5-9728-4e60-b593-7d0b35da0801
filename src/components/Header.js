import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cloudflare-orange rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">CLOUDFLARE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Platform</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Developers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Partners</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>Contact sales +44 20 3514 6970</span>
            </div>
            <button className="text-gray-700 hover:text-cloudflare-orange">Log in</button>
            <button className="btn-primary">Sign up</button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cloudflare-orange"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Platform</a>
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Products</a>
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Developers</a>
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Partners</a>
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Resources</a>
              <a href="#" className="text-gray-700 hover:text-cloudflare-orange">Company</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full btn-primary mb-2">Sign up</button>
                <button className="w-full btn-outline">Log in</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;