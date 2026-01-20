'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { authorityAPI } from '@/lib/api';

interface DashboardData {
  wardAnalytics: Array<{ ward: string; segregationRate: number }>;
  trends: Array<{ date: string; reports: number; compliance: number }>;
  defaulters: string[];
  totalComplaints: number;
}

export default function AuthorityDashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    wardAnalytics: [],
    trends: [],
    defaulters: [],
    totalComplaints: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await authorityAPI.getDashboard();
      setDashboardData(response.data);
    } catch (error) {
      console.error('Failed to load dashboard data');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Authority Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <p className="text-gray-700 text-sm font-medium">Total Reports</p>
          <p className="text-3xl font-bold text-green-600">1,234</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <p className="text-gray-700 text-sm font-medium">Compliance Rate</p>
          <p className="text-3xl font-bold text-blue-600">87%</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
          <p className="text-gray-700 text-sm font-medium">Active Complaints</p>
          <p className="text-3xl font-bold text-red-600">{dashboardData.totalComplaints}</p>
        </div>
      </div>

      {/* Ward-wise Segregation */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ward-wise Segregation Rate</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData.wardAnalytics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ward" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="segregationRate" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Trends */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Segregation Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardData.trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="reports" stroke="#3b82f6" />
            <Line type="monotone" dataKey="compliance" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Defaulters */}
      {dashboardData.defaulters.length > 0 && (
        <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Non-Compliant Zones</h3>
          <div className="space-y-2">
            {dashboardData.defaulters.map((zone, idx) => (
              <div key={idx} className="flex items-center gap-2 text-red-700">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {zone}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
