import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
// import { PropertyContext } from '../../context/PropertyContext';

const PropertyList = () => {
  // const { properties, getProperties } = useContext(PropertyContext);

  // useEffect(() => {
  //   getProperties();
  // }, [getProperties]);

  const [properties, setProperties] = useState([]);

  useEffect(() => {
      func();
      async function func(){
        const res = await axios.get('http://localhost:5000/api/properties');
        setProperties(res.data);
        console.log(res.data);
        console.log(res.data.map((p) => p.price));
      }
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Properties</h1>
      <div className="grid grid-cols-3 gap-4">
        {properties.map(property => (
          <div key={property._id} className="border rounded p-4">
            <h2 className="text-xl font-bold mb-2">Rs. {property.price}</h2>
            <p>{property.description}</p>
            <p>No. Bed Rooms: {property.bedrooms}</p>
            <p>No. Bath Rooms: {property.bathrooms}</p>
            {/* Display other property details */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default PropertyList;
