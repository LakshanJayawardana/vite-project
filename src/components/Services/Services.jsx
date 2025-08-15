import React from 'react';
import { Code, Search, Globe, CheckCircle } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and responsive design principles.",
      features: ["Responsive Design", "Modern Frameworks", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies and technical optimizations.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Performance Tracking"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complete website solutions tailored to your needs.",
      features: ["Custom Themes", "Plugin Development", "E-commerce Integration", "Maintenance & Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;