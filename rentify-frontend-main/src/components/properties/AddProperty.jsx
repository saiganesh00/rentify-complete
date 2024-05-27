import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    likes: 0,
  });

  const { title, description, location, price, bedrooms, bathrooms, likes } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/properties', formData);
      console.log(res.data); // Handle the response as needed
      navigate('/properties');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add Property</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={bedrooms}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={bathrooms}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
