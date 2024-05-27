import React from 'react';

const PropertyItem = ({ property }) => {
  const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = property;

  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-bold mb-2">{place}</h2>
      <p>Area: {area}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Nearby Hospitals: {nearbyHospitals}</p>
      <p>Nearby Colleges: {nearbyColleges}</p>
      {/* Add other property details */}
    </div>
  );
};

export default PropertyItem;
