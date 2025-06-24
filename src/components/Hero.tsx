import React from 'react';
import { Calendar, Mail, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl animate-float overflow-hidden border-4 border-white dark:border-gray-700">
            <img 
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/2911101/658305_560330.png"
              alt="Hanzel Lacida - Google Ads Strategist"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hanzel Lacida
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <p className="font-semibold">Veteran Google Ads Strategist • 20x ROAS • $300K+/mo Spend</p>
            <p>Hans Media Buyer | Ex–Paid Search Manager | GA4 + PMax Expert</p>
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Trusted by U.S. founders, agencies, and high-growth brands to scale their digital presence 
            and maximize their advertising ROI through strategic PPC campaigns.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="https://tidycal.com/hanslacida/10-private-strategy-session-with-hans"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar className="mr-2 h-5 w-5" />
            📅 Book a Call
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <a
            href="mailto:hello@hanslacida.com"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-50 dark:hover:bg-gray-700"
          >
            <Mail className="mr-2 h-5 w-5" />
            📧 Email Me
          </a>
        </div>
      </div>
    </section>
  );
};
