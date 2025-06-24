import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  emoji?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ title, description, url, emoji }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          {emoji && <span className="text-2xl">{emoji}</span>}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
        </div>
        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </a>
  );
};