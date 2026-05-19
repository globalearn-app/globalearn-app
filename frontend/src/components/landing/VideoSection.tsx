import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const videos = [
    {
      id: '1',
      title: 'Getting Started with GlobalEarn',
      description: 'Learn how to create an account and make your first trade',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      duration: '5:32',
    },
    {
      id: '2',
      title: 'Understanding Cryptocurrency Trading',
      description: 'Complete guide to trading Bitcoin, Ethereum, and other cryptocurrencies',
      videoId: 'ScMzIvxm_js',
      thumbnail: 'https://img.youtube.com/vi/ScMzIvxm_js/hqdefault.jpg',
      duration: '12:45',
    },
    {
      id: '3',
      title: 'Technical Analysis Basics',
      description: 'Master candlesticks, support & resistance, and trend lines',
      videoId: '9bZkp7q19f0',
      thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg',
      duration: '18:20',
    },
    {
      id: '4',
      title: 'Risk Management Strategies',
      description: 'Protect your portfolio with proper position sizing and stop losses',
      videoId: 'kffACKY-6-Q',
      thumbnail: 'https://img.youtube.com/vi/kffACKY-6-Q/hqdefault.jpg',
      duration: '8:15',
    },
    {
      id: '5',
      title: 'Trading Bot Setup & Automation',
      description: 'Set up automated trading bots to execute your strategies 24/7',
      videoId: '2Xc9gXyP24s',
      thumbnail: 'https://img.youtube.com/vi/2Xc9gXyP24s/hqdefault.jpg',
      duration: '15:08',
    },
    {
      id: '6',
      title: 'Forex Trading for Beginners',
      description: 'Introduction to currency pairs and forex market structure',
      videoId: 'jt0rvOVNJPE',
      thumbnail: 'https://img.youtube.com/vi/jt0rvOVNJPE/hqdefault.jpg',
      duration: '10:42',
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn from Our Video Tutorials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch expert-led tutorials to master trading strategies and platform features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Video Thumbnail */}
              <div className="relative bg-slate-900 overflow-hidden aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded text-sm font-semibold text-white">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            View All Tutorials
          </button>
        </div>

        {/* Educational Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center hover:border-blue-500/50 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-white font-semibold">Video Tutorials</p>
            <p className="text-gray-400 text-sm mt-2">Comprehensive trading education</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center hover:border-blue-500/50 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <p className="text-white font-semibold">Training Hours</p>
            <p className="text-gray-400 text-sm mt-2">Expert-led educational content</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center hover:border-blue-500/50 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">Weekly</div>
            <p className="text-white font-semibold">New Videos</p>
            <p className="text-gray-400 text-sm mt-2">Fresh content every week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
