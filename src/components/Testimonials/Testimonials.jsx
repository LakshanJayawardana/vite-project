// src/components/Testimonials/Testimonials.js
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      rating: 5,
      text: "Outstanding work on our company website. Professional, fast, and exactly what we needed."
    },
    {
      name: "Mike Chen",
      company: "Local Business",
      rating: 5,
      text: "SEO results were amazing! Our traffic increased by 200% within 3 months."
    },
    {
      name: "Emily Davis",
      company: "E-commerce Store",
      rating: 5,
      text: "The WordPress site exceeded our expectations. Great communication throughout the project."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md-text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: '32rem', margin: '0 auto' }}>
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;