// src/components/Contact/Contact.js
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const MailIcon = () => (
    <svg className="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#93c5fd' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#93c5fd' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#93c5fd' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <section id="contact" className="py-20 contact-gradient text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md-text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl" style={{ color: '#dbeafe', maxWidth: '32rem', margin: '0 auto' }}>
            Ready to take your digital presence to the next level? Get in touch today!
          </p>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="flex items-center gap-4">
                <MailIcon />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon />
                <span>Your City, Your Country</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
