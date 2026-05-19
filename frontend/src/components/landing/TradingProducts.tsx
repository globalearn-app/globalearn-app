import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  LineChart,
  PieChart,
  Zap,
  Globe,
} from 'lucide-react';

export default function TradingProducts() {
  const [activeTab, setActiveTab] = useState('crypto');

  const products = {
    crypto: {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cryptocurrencies',
      description: 'Trade major cryptocurrencies with real-time market data',
      instruments: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Litecoin (LTC)', 'Ripple (XRP)', 'Cardano (ADA)', 'Polkadot (DOT)'],
      features: [
        '24/7 trading availability',
        'High volatility opportunities',
        'Real-time price updates',
        'Advanced order types',
      ],
      color: 'from-orange-600 to-red-600',
    },
    forex: {
      icon: <Globe className="w-8 h-8" />,
      title: 'Forex',
      description: 'Trade major currency pairs with competitive spreads',
      instruments: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD', 'NZD/USD'],
      features: [
        'High liquidity',
        ' Standard market hours',
        'Multiple currency pairs',
        'Economic calendar integration',
      ],
      color: 'from-green-600 to-teal-600',
    },
    indices: {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Indices',
      description: 'Trade major stock market indices worldwide',
      instruments: ['S&P 500 (US500)', 'NASDAQ-100 (NDX)', 'DAX (DE30)', 'FTSE 100 (UK100)', 'Nikkei 225 (JP225)', 'ASX 200 (AU200)'],
      features: [
        'Global market exposure',
        'Economic indicators',
        'Sector diversification',
        'Historical data analysis',
      ],
      color: 'from-blue-600 to-purple-600',
    },
    commodities: {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Commodities',
      description: 'Trade precious metals, energy, and agriculture',
      instruments: ['Gold (GOLD)', 'Silver (SILVER)', 'Crude Oil (WTI)', 'Natural Gas', 'Copper', 'Agricultural Products'],
      features: [
        'Hedging opportunities',
        'Supply/demand dynamics',
        'Geopolitical insights',
        'Seasonal trends',
      ],
      color: 'from-yellow-600 to-amber-600',
    },
    etfs: {
      icon: <PieChart className="w-8 h-8" />,
      title: 'ETFs',
      description: 'Access diversified portfolio instruments',
      instruments: ['SPY', 'QQQ', 'IWM', 'EEM', 'GLD', 'TLT'],
      features: [
        'Portfolio diversification',
        'Lower volatility',
        'Sector exposure',
        'Cost-effective trading',
      ],
      color: 'from-pink-600 to-rose-600',
    },
    cryptopairs: {
      icon: <Zap className="w-8 h-8" />,
      title: 'Crypto Pairs',
      description: 'Trade cryptocurrency pairs for advanced strategies',
      instruments: ['BTC/ETH', 'ETH/USDT', 'BNB/USDT', 'ADA/USDT', 'XRP/USDT', 'SOL/USDT'],
      features: [
        'Cross-pair trading',
        'Arbitrage opportunities',
        'Advanced strategies',
        'Real-time execution',
      ],
      color: 'from-cyan-600 to-blue-600',
    },
  };

  const activeProduct = products[activeTab as keyof typeof products];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trading Products
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore diverse markets and find the perfect assets for your trading strategy
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {Object.entries(products).map(([key, product]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === key
                  ? `bg-gradient-to-r ${product.color} text-white shadow-lg shadow-blue-500/30`
                  : 'bg-slate-800 text-gray-300 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Icon & Description */}
          <div className={`bg-gradient-to-br ${activeProduct.color} p-12 rounded-xl text-white flex flex-col justify-between`}>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                {activeProduct.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{activeProduct.title}</h3>
              <p className="text-lg text-white/90 mb-8">{activeProduct.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {activeProduct.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Instruments */}
          <div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-full">
              <h4 className="text-2xl font-bold text-white mb-6">Available Instruments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProduct.instruments.map((instrument, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700 px-4 py-3 rounded-lg border border-slate-600 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
                  >
                    <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {instrument}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-center">
                  <span className="font-bold">24/7 Trading:</span> Most products available around the clock with real-time execution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Start Trading Now
          </button>
        </div>
      </div>
    </div>
  );
}
