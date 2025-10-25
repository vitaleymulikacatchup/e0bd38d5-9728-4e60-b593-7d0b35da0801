import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connect, protect, and build{' '}
              <span className="gradient-text">everywhere</span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Make employees, applications and networks faster and more secure everywhere, while reducing complexity and cost.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get started
              </button>
              <button className="btn-outline">
                Contact sales
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-orange rounded-full mx-auto opacity-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;