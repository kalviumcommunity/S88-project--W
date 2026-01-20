import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (userData: any) =>
    api.post('/auth/register', userData),
  logout: () => localStorage.removeItem('token'),
};

export const householdAPI = {
  submitReport: (data: any) =>
    api.post('/household/report', data),
  getReports: (userId: string) =>
    api.get(`/household/reports/${userId}`),
  getScore: (userId: string) =>
    api.get(`/household/score/${userId}`),
};

export const communityAPI = {
  getReports: () =>
    api.get('/community/reports'),
  verifyReport: (reportId: string, verified: boolean) =>
    api.post(`/community/verify/${reportId}`, { verified }),
  getLeaderboard: () =>
    api.get('/community/leaderboard'),
};

export const authorityAPI = {
  getDashboard: () =>
    api.get('/authority/dashboard'),
  getAnalytics: () =>
    api.get('/authority/analytics'),
  getComplaints: () =>
    api.get('/authority/complaints'),
};

export default api;
