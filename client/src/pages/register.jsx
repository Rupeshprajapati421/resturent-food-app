import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  // Form state
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    answer: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password, address, phone, answer } = formData;

    // Basic validation (do this before calling API)
    if (!userName || !email || !password || !address || !phone || !answer) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Enter a valid email');
      setSuccess('');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setSuccess('');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits');
      setSuccess('');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const msg = data?.message || 'Registration failed';
        setError(msg);
        setSuccess('');
        return;
      }

      setSuccess('Registration successful!');
      setError('');
      navigate('/');
    } catch (error) {
      console.log('register', error);
      setError('An error occurred. Please try again');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h2>

        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1 font-medium">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          
          <div>
            <label className="block text-gray-600 mb-1 font-medium">Security Answer</label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="Answer to your security question"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition mt-2"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?
          <a href="/login" className="text-yellow-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
