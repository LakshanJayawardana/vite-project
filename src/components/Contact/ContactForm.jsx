import React, { useState } from 'react';
import './ContactForm.css'; // We'll create this next

const ContactForm = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult('Sending...');

    const formData = new FormData(event.target);
    
    // Replace with your actual access key from Web3Forms
    formData.append('access_key', '23e08b7d-116a-4dd7-b96a-acc58c98eccd');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('✅ Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        event.target.reset();
      } else {
        console.log('Error:', data);
        setResult('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      setResult('❌ Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Have a question or want to work together? We'd love to hear from you.</p>
      </div>

      <form onSubmit={onSubmit} className="contact-form">
        {/* Web3Forms required field */}
        <input type="hidden" name="access_key" value="23e08b7d-116a-4dd7-b96a-acc58c98eccd" />
        
        {/* Optional: Honeypot field for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

        {/* Name and Email in one row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isLoading}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={isLoading}
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            disabled={isLoading}
            placeholder="What's this regarding?"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            required
            disabled={isLoading}
            placeholder="Tell us about your project, question, or how we can help..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`submit-button ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {/* Result Message */}
      {result && (
        <div className={`result-message ${result.includes('✅') ? 'success' : 'error'}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default ContactForm;