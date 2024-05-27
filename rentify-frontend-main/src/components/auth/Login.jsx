import React, { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken'; // Import setAuthToken function
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token } = res.data; // Extract token from response data
      setAuthToken(token); // Set authentication token
      console.log(res.data); // Handle token
      navigate('/properties');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} className="block w-full border rounded px-4 py-2" required />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
