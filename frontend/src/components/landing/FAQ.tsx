import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is GlobalEarn a real money trading platform?',
      answer:
        'No, GlobalEarn is a virtual trading simulator using practice/demo accounts. All trading is done with virtual funds, so there is no real financial risk. This allows you to learn trading strategies risk-free.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Sign up for free, choose a trading tier, and start trading immediately with virtual funds. No deposits required. You can upgrade to premium tiers for advanced features anytime.',
    },
    {
      question: 'What trading hours do you operate?',
      answer:
        'GlobalEarn operates 24/7 for cryptocurrency trading. Traditional market hours apply to Forex, Commodities, and Indices (typically 9 AM - 5 PM EST weekdays).',
    },
    {
      question: 'Can I withdraw my profits?',
      answer:
        'Since all trading is virtual with practice accounts, profits cannot be withdrawn as real money. However, you can track your performance and use it to develop real trading strategies.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use bank-level encryption (TLS 1.3), two-factor authentication, and comply with international data protection regulations. Your data is never shared with third parties.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'The Starter tier is completely free with all basic features. Premium tiers range from $9.99 to $199.99 per month with additional tools and features.',
    },
    {
      question: 'What support is available?',
      answer:
        'Free tier gets email support. Silver and higher get priority support, live chat, and dedicated account managers for Elite tier. We also offer webinars, tutorials, and community forums.',
    },
    {
      question: 'Can I use trading bots?',
      answer:
        'Yes! Platinum and Diamond tiers include exclusive trading bots. Elite tier offers custom bot development and integration with our API.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Yes, GlobalEarn is fully responsive and works perfectly on mobile devices. Native iOS and Android apps are coming soon.',
    },
    {
      question: 'Can I upgrade or downgrade my tier?',
      answer:
        'Absolutely! You can change your tier anytime. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-300">
          Find answers to common questions about GlobalEarn
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
            >
              <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="px-6 py-4 bg-slate-700/20 border-t border-slate-700">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <p className="text-center text-blue-300">
          <span className="font-bold">Still have questions?</span> Contact our support team via live chat or email for immediate assistance.
        </p>
      </div>
    </div>
  );
}
