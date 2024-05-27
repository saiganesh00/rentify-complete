// Routes.js

import React from 'react';
import { Routes, Route } from "react-router-dom";
import PropertyList from './components/properties/PropertyList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HeroSection from './components/layout/HeroSection';
import AddProperty from './components/properties/AddProperty';
import UpdateProperty from './components/properties/UpdateProperty';
const RoutesMain = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HeroSection />} />
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />} />
      <Route exact path='/properties' element={<PropertyList />} />
      <Route exact path='addproperty' element={<AddProperty />} />
      <Route exact path='updateproperty' element={<UpdateProperty />} />
      
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default RoutesMain;
