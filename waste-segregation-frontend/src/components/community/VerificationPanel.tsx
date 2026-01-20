'use client';

import { useState, useEffect } from 'react';
import { communityAPI } from '@/lib/api';
import { ThumbsUp, AlertCircle, CheckCircle } from 'lucide-react';

interface Report {
  id: string;
  householdName: string;
  dryWaste: number;
  wetWaste: number;
  hazardousWaste: number;
  photo: string;
  status: 'pending' | 'verified' | 'rejected';
  notes: string;
  submittedAt: string;
}

export default function CommunityVerification() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await communityAPI.getReports();
      setReports(response.data);
    } catch (error) {
      setMessage('Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (reportId: string, verified: boolean) => {
    try {
      await communityAPI.verifyReport(reportId, verified);
      setReports((prev) =>
        prev.map((r) =>
          r.id === reportId ? { ...r, status: verified ? 'verified' : 'rejected' } : r
        )
      );
      setMessage(`Report ${verified ? 'verified' : 'rejected'} successfully!`);
    } catch (error) {
      setMessage('Failed to process verification');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading reports...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Verify Community Reports</h2>

      {message && (
        <div className="flex items-center gap-2 p-4 bg-blue-50 text-blue-800 rounded-lg">
          <CheckCircle size={20} />
          {message}
        </div>
      )}

      <div className="grid gap-4">
        {reports
          .filter((r) => r.status === 'pending')
          .map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{report.householdName}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(report.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Dry Waste</p>
                  <p className="text-xl font-bold text-green-600">{report.dryWaste} kg</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Wet Waste</p>
                  <p className="text-xl font-bold text-blue-600">{report.wetWaste} kg</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Hazardous</p>
                  <p className="text-xl font-bold text-red-600">{report.hazardousWaste} kg</p>
                </div>
              </div>

              {report.notes && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{report.notes}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleVerify(report.id, true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition"
                >
                  <CheckCircle size={20} />
                  Verify
                </button>
                <button
                  onClick={() => handleVerify(report.id, false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
                >
                  <AlertCircle size={20} />
                  Reject
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
