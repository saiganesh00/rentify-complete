import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-xl font-bold">Rentify</Link>
        {/* <span className="text-white text-xl font-bold">Rentify</span> */}
        {/* Add links to Login and Register */}
        <div className="float-right">
          <Link to="/login" className="text-white mx-4">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
