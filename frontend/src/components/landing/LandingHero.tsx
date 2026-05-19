import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
          <span className="text-blue-400 text-sm font-semibold">🎯 #1 Trading Simulator Platform</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Master Trading
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Risk-Free
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Practice trading with virtual funds, learn professional strategies, and build your trading skills with GlobalEarn's premium simulator platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/signup">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
              Get Started Free →
            </button>
          </Link>
          <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            Watch Demo
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-blue-500/50 transition-all">
            <div className="text-blue-400 mb-3 flex justify-center">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold mb-2">Instant Access</h3>
            <p className="text-gray-400 text-sm">Start trading in seconds with no setup required</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-blue-500/50 transition-all">
            <div className="text-green-400 mb-3 flex justify-center">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold mb-2">Premium Tools</h3>
            <p className="text-gray-400 text-sm">Advanced charting and AI-powered trading signals</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-blue-500/50 transition-all">
            <div className="text-purple-400 mb-3 flex justify-center">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold mb-2">Community</h3>
            <p className="text-gray-400 text-sm">Learn from 50K+ traders worldwide</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-blue-500/50 transition-all">
            <div className="text-yellow-400 mb-3 flex justify-center">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold mb-2">No Risk</h3>
            <p className="text-gray-400 text-sm">100% virtual funds - practice without fear</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>No Credit Card Required</span>
          </div>
        </div>
      </div>

      {/* Hero Image/Video Placeholder */}
      <div className="mt-16 w-full max-w-6xl">
        <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-500/30 transition-colors cursor-pointer">
              <span className="text-4xl">▶</span>
            </div>
            <p className="text-gray-300 font-semibold">Watch Platform Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
