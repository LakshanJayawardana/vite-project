// src/components/Contact/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Contact form submitted! In a real implementation, this would send the message.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="form-input form-textarea"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-full"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;