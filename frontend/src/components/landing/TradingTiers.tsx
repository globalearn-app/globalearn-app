import React from 'react';
import { Check } from 'lucide-react';

export default function TradingTiers() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for beginners',
      color: 'from-slate-600 to-slate-700',
      features: [
        'Virtual trading account',
        '10 markets (Crypto, Forex, Indices)',
        'Basic charting tools',
        ' Community forum access',
        'Email support',
        'Paper trading only',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Silver',
      price: '$9.99',
      period: '/month',
      description: 'For casual traders',
      color: 'from-slate-500 to-slate-600',
      features: [
        'Everything in Starter',
        'Advanced technical indicators',
        'Watchlist & alerts',
        'Mobile app access',
        'Live chat support',
        'Trading journal',
      ],
      cta: 'Upgrade Now',
      popular: false,
    },
    {
      name: 'Gold',
      price: '$24.99',
      period: '/month',
      description: 'Most popular',
      color: 'from-yellow-600 to-yellow-700',
      features: [
        'Everything in Silver',
        'AI-powered trading signals',
        'Advanced backTesting',
        'Custom indicators',
        'Priority support',
        'Unlimited trading',
      ],
      cta: 'Upgrade Now',
      popular: true,
    },
    {
      name: 'Platinum',
      price: '$59.99',
      period: '/month',
      description: 'For active traders',
      color: 'from-gray-400 to-gray-500',
      features: [
        'Everything in Gold',
        'Automated trading bots',
        'Market scanner',
        'Advanced analytics',
        'Dedicated account manager',
        'API access',
      ],
      cta: 'Upgrade Now',
      popular: false,
    },
    {
      name: 'Diamond',
      price: '$99.99',
      period: '/month',
      description: 'For professionals',
      color: 'from-blue-600 to-blue-700',
      features: [
        'Everything in Platinum',
        'Multiple trading bots',
        'Custom API integration',
        'White-label options',
        'Priority API support',
        'Advanced risk management',
      ],
      cta: 'Upgrade Now',
      popular: false,
    },
    {
      name: 'Elite',
      price: '$199.99',
      period: '/month',
      description: 'Premium experience',
      color: 'from-purple-600 to-purple-700',
      features: [
        'Everything in Diamond',
        'Custom bot development',
        '24/7 VIP support',
        'Personalized strategy coaching',
        'Advanced market research',
        'Enterprise solutions',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trading Tiers for Every Level
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan that matches your trading needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-gradient-to-br ${tier.color} p-8 rounded-xl h-full flex flex-col border ${
                  tier.popular ? 'border-yellow-400/50 shadow-2xl shadow-yellow-500/20' : 'border-slate-600'
                } transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-200 text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-gray-300">{tier.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-grow mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-yellow-500/50'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Detailed Feature Comparison</h3>
          <div className="overflow-x-auto bg-slate-800 rounded-lg border border-slate-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="px-6 py-4 text-center text-white font-semibold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">Virtual Funds</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-6 py-4 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">Trading Bots</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-6 py-4 text-center text-gray-300">
                      {['Platinum', 'Diamond', 'Elite'].includes(tier.name) ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        '-'
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">API Access</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-6 py-4 text-center text-gray-300">
                      {['Platinum', 'Diamond', 'Elite'].includes(tier.name) ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        '-'
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Priority Support</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-6 py-4 text-center text-gray-300">
                      {['Gold', 'Platinum', 'Diamond', 'Elite'].includes(tier.name) ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        '-'
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
