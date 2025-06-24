import React from 'react';
import { Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hanslacida',
      icon: Linkedin,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@hanslacida',
      icon: Youtube,
    },
    {
      name: 'Email',
      url: 'mailto:hello@hanslacida.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to scale your business with data-driven advertising strategies? 
            Let's discuss how we can achieve exceptional ROI together.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-600 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                aria-label={link.name}
              >
                <Icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">
            © 2025 Hanzel Lacida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};