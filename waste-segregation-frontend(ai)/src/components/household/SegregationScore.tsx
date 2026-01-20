'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Award, TrendingUp } from 'lucide-react';

interface ScoreData {
  points: number;
  badges: string[];
  rank: number;
  trend: number;
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

export default function SegregationScore() {
  const [scoreData, setScoreData] = useState<ScoreData>({
    points: 0,
    badges: [],
    rank: 0,
    trend: 0,
  });

  const [chartData, setChartData] = useState([
    { name: 'Dry Waste', value: 35 },
    { name: 'Wet Waste', value: 45 },
    { name: 'Hazardous', value: 20 },
  ]);

  useEffect(() => {
    // Mock data - replace with API call
    setScoreData({
      points: 450,
      badges: ['Eco Warrior', 'Consistent Reporter', 'Community Helper'],
      rank: 12,
      trend: 8,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Score Card */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Your Score</h3>
          <TrendingUp className="text-green-600" size={24} />
        </div>
        
        <div className="mb-6">
          <p className="text-4xl font-bold text-green-600">{scoreData.points}</p>
          <p className="text-gray-600">Total Points Earned</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-700">Current Rank</span>
            <span className="font-bold text-blue-600">#{scoreData.rank}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Weekly Trend</span>
            <span className="font-bold text-green-600">+{scoreData.trend}%</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-yellow-600" size={24} />
          <h3 className="text-xl font-bold text-gray-800">Badges Earned</h3>
        </div>

        <div className="space-y-2">
          {scoreData.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
              <span className="text-2xl">🏆</span>
              <span className="text-gray-700 font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Distribution Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Waste Distribution (This Month)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
