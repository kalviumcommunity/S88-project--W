'use client';

import { useState } from 'react';
import { householdAPI } from '@/lib/api';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ReportForm() {
  const [formData, setFormData] = useState({
    dryWaste: 0,
    wetWaste: 0,
    hazardousWaste: 0,
    notes: '',
    photo: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'notes' ? value : Number(value),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('dryWaste', String(formData.dryWaste));
      formDataToSend.append('wetWaste', String(formData.wetWaste));
      formDataToSend.append('hazardousWaste', String(formData.hazardousWaste));
      formDataToSend.append('notes', formData.notes);
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }

      await householdAPI.submitReport(formDataToSend);
      setMessageType('success');
      setMessage('Report submitted successfully! 🎉');
      setFormData({ dryWaste: 0, wetWaste: 0, hazardousWaste: 0, notes: '', photo: null });
    } catch (error) {
      setMessageType('error');
      setMessage('Failed to submit report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Report Daily Waste</h2>

      {message && (
        <div className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
          messageType === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {messageType === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Dry Waste */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dry Waste (kg)
            </label>
            <input
              type="number"
              name="dryWaste"
              min="0"
              step="0.1"
              value={formData.dryWaste}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="0"
            />
          </div>

          {/* Wet Waste */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wet Waste (kg)
            </label>
            <input
              type="number"
              name="wetWaste"
              min="0"
              step="0.1"
              value={formData.wetWaste}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="0"
            />
          </div>

          {/* Hazardous Waste */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hazardous Waste (kg)
            </label>
            <input
              type="number"
              name="hazardousWaste"
              min="0"
              step="0.1"
              value={formData.hazardousWaste}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="0"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={3}
            placeholder="Any additional details about the waste..."
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photo Proof
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            title="Upload a photo proof of waste"
            aria-label="Upload photo proof"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {formData.photo && (
            <p className="text-sm text-green-600 mt-2">✓ {formData.photo.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
}
