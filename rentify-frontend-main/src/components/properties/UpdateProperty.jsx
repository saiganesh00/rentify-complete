import React, { useState, useContext, useEffect } from 'react';
import { PropertyContext } from "../../context/PropertyContext";

const UpdateProperty = ({ match }) => {
  const { properties, updateProperty } = useContext(PropertyContext);
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearbyHospitals: '',
    nearbyColleges: ''
  });

  useEffect(() => {
    const propertyToUpdate = properties.find(property => property._id === match.params.id);
    if (propertyToUpdate) {
      setFormData({
        place: propertyToUpdate.place,
        area: propertyToUpdate.area,
        bedrooms: propertyToUpdate.bedrooms,
        bathrooms: propertyToUpdate.bathrooms,
        nearbyHospitals: propertyToUpdate.nearbyHospitals,
        nearbyColleges: propertyToUpdate.nearbyColleges
      });
    }
  }, [match.params.id, properties]);

  const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateProperty({ _id: match.params.id, ...formData });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Update Property</h1>
      <form onSubmit={onSubmit}>
        {/* Input fields for updating property details */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Property</button>
      </form>
    </div>
  );
};

export default UpdateProperty;
