import React from 'react';
import { MessageCircle, Mail, Phone, Clock, MapPin } from 'lucide-react';

export default function CustomerSupport() {
  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Instant support available 24/7',
      availability: 'Always On',
      responseTime: 'Less than 2 minutes',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Detailed responses to your inquiries',
      availability: '24/7',
      responseTime: 'Within 24 hours',
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Talk to our support team directly',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-600 to-green-700',
    },
  ];

  const faqs = [
    { question: 'How do I reset my password?', answer: 'Click "Forgot Password" on login page and follow instructions.' },
    { question: 'Can I cancel my subscription?', answer: 'Yes, anytime. Cancel in settings with no penalties.' },
    { question: 'Is my data secure?', answer: 'Yes, we use bank-level encryption and 2FA security.' },
    { question: 'How do I verify my account?', answer: 'Complete email verification during signup.' },
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Support Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help you succeed with multiple support channels
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${channel.color} p-8 rounded-xl text-white border border-opacity-20 border-white hover:shadow-xl hover:shadow-current/30 transition-all duration-300`}
            >
              <div className="mb-6">{channel.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{channel.title}</h3>
              <p className="text-white/90 mb-6">{channel.description}</p>

              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{channel.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    Response: {channel.responseTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Account Issues</option>
                  <option>Trading Questions</option>
                  <option>Billing</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Describe your issue..."
                />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-300">support@globalearn.com</p>
                  <p className="text-gray-400 text-sm mt-2">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (888) 555-0123</p>
                  <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Headquarters</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                  <p className="text-gray-400 text-sm mt-2">Global team serving worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="pb-4 border-b border-slate-700 last:border-b-0">
                <h4 className="text-blue-300 font-semibold mb-2">{item.question}</h4>
                <p className="text-gray-400 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-8 p-6 bg-blue-900/30 rounded-lg border border-blue-500/30 text-center">
          <p className="text-blue-300">
            <span className="font-bold">Support Status:</span> All systems operational. Average response time: 2 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
