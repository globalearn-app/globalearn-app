import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders learning and practicing their strategies on GlobalEarn
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Virtual funds, no risk</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Start trading instantly</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">50K+</div>
            <p className="text-gray-400">Active Traders</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">$1B+</div>
            <p className="text-gray-400">Virtual Volume</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <p className="text-gray-400">Trading Available</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 p-8 bg-slate-800/50 border border-slate-700 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Special Offer for New Members</h3>
          <p className="text-gray-300 mb-6">
            Sign up today and get <span className="text-blue-400 font-bold">$5,000 bonus virtual funds</span> plus exclusive access to our premium webinar series!
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Claim Your Bonus
          </button>
        </div>
      </div>
    </div>
  );
}
