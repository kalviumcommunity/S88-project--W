'use client';

import AuthorityDashboard from '@/components/authority/Dashboard';

export default function AuthorityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Municipal Authority Dashboard</h1>
        <p className="text-gray-600 mt-2">Real-time monitoring and analytics for waste segregation</p>
      </div>

      <AuthorityDashboard />
    </div>
  );
}
