import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
            DevServices
          </div>
          <div className="text-gray-400">
            © 2025 DevServices. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;