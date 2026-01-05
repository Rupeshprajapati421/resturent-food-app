import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Email and password are required');
      setSuccess('');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data?.message || 'Login failed';
        setError(msg);
        setSuccess('');
        setLoading(false);
        return;
      }

      setSuccess('Login successful! Redirecting...');
      setError('');
      setLoading(false);
      setTimeout(() => navigate('/'), 800);
    } catch (err) {
      console.error('login', err);
      setError('An error occurred. Please try again.');
      setSuccess('');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?
          <a href="/register" className="text-yellow-400 hover:underline">Register </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
