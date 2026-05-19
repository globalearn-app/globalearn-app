import React from 'react';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Lock, 
  TrendingUp 
} from 'lucide-react';

export default function WhyTradeWithUs() {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk-Free Learning',
      description: 'Practice with virtual funds and learn trading strategies without any financial risk.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning-Fast Execution',
      description: 'Ultra-low latency trading infrastructure ensures your orders execute instantly.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Professional Tools',
      description: 'Advanced charting, technical analysis, and AI-powered trading signals included.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Support',
      description: 'Join thousands of traders, share strategies, and learn from experienced professionals.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Bank-Level Security',
      description: 'Your data is protected with military-grade encryption and 2FA authentication.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Real-Time Market Data',
      description: 'Access live market data, charts, and economic calendars from global markets.',
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Trade With GlobalEarn?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our premium trading platform designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {reason.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to start your trading journey?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
}
