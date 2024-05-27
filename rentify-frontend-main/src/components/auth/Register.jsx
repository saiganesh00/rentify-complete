import React, { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken'; // Import setAuthToken function
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: ''
  });

  const { firstName, lastName, email, phone, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    const navigate = useNavigate();
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      const { token } = res.data; // Extract token from response data
      setAuthToken(token); // Set authentication token
      console.log(res.data); // Handle token
      // Redirect logic can be done here if necessary
      navigate('/login');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input type="text" name="firstName" value={firstName} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" name="phone" value={phone} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select name="role" value={role} onChange={onChange} className="block w-full border rounded px-4 py-2" required>
            <option value="">Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Register;
