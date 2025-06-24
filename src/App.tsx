import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  const growthLinks = [
    {
      title: 'Zeldigital.com',
      description: 'End-to-End Google Ads & PPC Growth solutions for scaling businesses',
      url: 'https://zeldigital.com',
    },
    {
      title: 'KaizenStrategy.us',
      description: 'U.S.-based Business Consulting for strategic growth and optimization',
      url: 'https://kaizenstrategy.us',
    },
    {
      title: 'Paxhl.com',
      description: 'Free Tools, Templates, and Calculators for digital marketers',
      url: 'https://paxhl.com',
    },
  ];

  const adServicesLinks = [
    {
      title: 'PmaxShoppingAds.com',
      description: 'Specialized Shopping & Performance Max campaign management services',
      url: 'https://pmaxshoppingads.com',
    },
    {
      title: 'AdsThatConverts.digital',
      description: 'High-Conversion PPC Systems designed for maximum ROI',
      url: 'https://adsthatconverts.digital',
    },
    {
      title: 'Zel.digital',
      description: 'Shortlink & Campaign Redirect services for better tracking',
      url: 'https://zel.digital',
    },
  ];

  const portfolioLinks = [
    {
      title: 'HansLacida.com',
      description: 'Main Portfolio & Credentials showcasing years of expertise',
      url: 'https://hanslacida.com',
    },
    {
      title: 'HansMediaBuyer.com',
      description: 'Results-Driven Case Studies and proven campaign successes',
      url: 'https://hansmediabuyer.com',
    },
    {
      title: 'Blog.HansLacida.com',
      description: 'PPC Insights & Strategy Posts for the digital marketing community',
      url: 'https://blog.hanslacida.com',
    },
    {
      title: 'Beacons.ai/hanslacida',
      description: 'Media Portfolio & Booking Links in one convenient location',
      url: 'https://beacons.ai/hanslacida',
    },
  ];

  const musicMediaLinks = [
    {
      title: 'Zelhan.com',
      description: 'Composer Profile & Licensing Catalog for creative projects',
      url: 'https://zelhan.com',
    },
    {
      title: 'Zelhantv.com',
      description: 'Video Projects & Streaming Content for entertainment',
      url: 'https://zelhantv.com',
    },
    {
      title: 'Trilyonaryo.com',
      description: 'Digital Business & News Blog covering industry insights',
      url: 'https://trilyonaryo.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-inter">
      <DarkModeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      
      <Hero />
      
      <Section 
        title="Growth & Consulting" 
        emoji="🚀"
        className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {growthLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </Section>

      <Section 
        title="Specialized Ad Services" 
        emoji="🎯"
        className="bg-white dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adServicesLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </Section>

      <Section 
        title="Portfolio & Content" 
        emoji="💼"
        className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </Section>

      <Section 
        title="Music & Media" 
        emoji="🎵"
        className="bg-white dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicMediaLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;