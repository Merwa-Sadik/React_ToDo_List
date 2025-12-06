const BASE_URL = 'https://akil-backend.onrender.com';

export const signup = async (userData) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Signup failed');
  return data;
};

export const verifyEmail = async (email, otp) => {
  const response = await fetch(`${BASE_URL}/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, OTP: otp })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Verification failed');
  return data;
};

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Login failed');
  if (data.data?.accessToken) {
    localStorage.setItem('accessToken', data.data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.data));
  }
  return data;
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
};

export const getToken = () => localStorage.getItem('accessToken');

export const isAuthenticated = () => !!getToken();
