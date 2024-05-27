import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-2">
      <div className="container mx-auto">
        Rentify &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
