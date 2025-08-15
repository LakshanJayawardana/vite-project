// src/components/Hero/Hero.js
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const CodeIcon = () => (
    <svg className="icon-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <section id="home" className="pt-20 py-16 hero-gradient">
      <div className="container py-20">
        <div className="text-center">
          <div className="animate-bounce mb-4" style={{ display: 'inline-block', color: '#2563eb' }}>
            <CodeIcon />
          </div>
          <h1 className="text-5xl md-text-7xl font-bold text-gray-900 mb-6">
            Digital Solutions
            <span className="gradient-text" style={{ display: 'block' }}>
              That Deliver
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ maxWidth: '48rem', margin: '0 auto 2rem auto' }}>
            Professional web development, SEO optimization, and WordPress solutions 
            to help your business thrive in the digital world.
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="btn btn-primary"
            >
              Explore Services
              <ArrowRightIcon />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;