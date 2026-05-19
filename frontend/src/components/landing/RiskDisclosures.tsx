import React from 'react';
import { AlertCircle, TrendingDown, Clock } from 'lucide-react';

export default function RiskDisclosures() {
  const risks = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Virtual Fund Risk',
      description:
        'While trading uses virtual funds, losses can result in account depletion. Practice risk management strategies.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Market Volatility',
      description:
        'Cryptocurrency and forex markets are highly volatile. Prices can change rapidly, affecting your positions.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Leverage Risk',
      description:
        'Using leverage amplifies both gains and losses. Understand leverage implications before trading.',
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-red-950/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <AlertCircle className="w-8 h-8 text-red-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Risk Disclosures</h2>
        </div>

        <div className="space-y-6 mb-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-red-400 flex-shrink-0">{risk.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{risk.title}</h3>
                  <p className="text-gray-300">{risk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 p-8 rounded-lg border border-yellow-500/30 space-y-4">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Important Disclaimers</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>
                <strong>Virtual Trading Only:</strong> GlobalEarn is a practice platform using virtual funds. No real
                money is involved in any trades.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>
                <strong>Not Investment Advice:</strong> Our content is educational only and should not be considered
                investment advice. Consult with a financial advisor.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>
                <strong>Past Performance:</strong> Virtual trading results do not guarantee real-world trading success.
                Market conditions vary.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>
                <strong>Technology Risk:</strong> While we maintain high uptime, technical issues or outages may affect
                trading.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>
                <strong>Market Gaps:</strong> Weekend or holiday gaps in pricing may not reflect real market conditions.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-blue-900/30 border border-blue-500/30 rounded-lg text-center">
          <p className="text-blue-300">
            By using GlobalEarn, you acknowledge and accept all risks associated with virtual trading. Read our full{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Terms of Service
            </a>{' '}
            for complete legal information.
          </p>
        </div>
      </div>
    </div>
  );
}
