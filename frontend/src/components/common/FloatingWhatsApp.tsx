import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">GlobalEarn Support</h3>
              <p className="text-xs text-green-100">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-700 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">👋 Hi there! How can we help you today?</p>
              <p className="text-xs text-gray-500 mt-1">Today 3:45 PM</p>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <form className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 text-sm"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 font-semibold"
      >
        <MessageCircle className="w-6 h-6" />
        {!isOpen && <span className="hidden sm:inline">WhatsApp</span>}
      </button>
    </div>
  );
}
