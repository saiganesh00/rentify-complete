import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to Rentify
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Simplifying Renting for Everyone
        </p>
        <p className="text-lg mb-8">
          Welcome to Rentify, your premier destination for hassle-free renting. We're on a mission to streamline the rental process and make finding your dream home as effortless as possible.
        </p>
        <p className="text-lg mb-8">
          At Rentify, we understand the challenges of searching for the perfect rental property. That's why we've built a platform that connects renters with their ideal homes quickly and efficiently. Whether you're searching for a cozy apartment in the heart of the city or a spacious house in the suburbs, Rentify has you covered.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-bold uppercase tracking-wide transition duration-300">
          Find Your Perfect Rental
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
