'use client';

import ReportForm from '@/components/household/ReportForm';
import SegregationScore from '@/components/household/SegregationScore';

export default function HouseholdDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome, Household Member!</h1>
        <p className="text-gray-600 mt-2">Track your waste segregation and earn rewards</p>
      </div>

      <SegregationScore />
      <ReportForm />
    </div>
  );
}
