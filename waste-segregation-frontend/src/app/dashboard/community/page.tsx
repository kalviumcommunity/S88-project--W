'use client';

import CommunityVerification from '@/components/community/VerificationPanel';

export default function CommunityDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome, Community Volunteer!</h1>
        <p className="text-gray-600 mt-2">Help verify reports and maintain community integrity</p>
      </div>

      <CommunityVerification />
    </div>
  );
}
