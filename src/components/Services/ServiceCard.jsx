// src/components/Services/ServiceCard.js
import React from 'react';

const ServiceCard = ({ service }) => {
  const CheckCircleIcon = () => (
    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#10b981' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="card service-card">
      <div className="mb-6" style={{ color: '#2563eb' }}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-4 text-gray-700" style={{ marginBottom: '0.5rem' }}>
            <CheckCircleIcon />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;