'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Leaf, Users, BarChart3, Trophy } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      const userRole = localStorage.getItem('userRole');
      router.push(`/dashboard/${userRole}`);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-4xl">♻️</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900">WasteTrack</h1>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Gamifying Waste Segregation for Better Sustainability
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            A community-driven platform that motivates households and authorities to improve waste segregation practices through gamification, verification, and real-time monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-gray-800 font-bold border-2 border-gray-300 rounded-lg hover:border-green-600 transition text-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-600">
              <Leaf className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Household Reporting
              </h3>
              <p className="text-gray-700">
                Easy daily waste segregation reporting with photo proof verification
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-600">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Verification
              </h3>
              <p className="text-gray-700">
                Peer review system for authentic report validation by volunteers
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-l-4 border-purple-600">
              <BarChart3 className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Authority Dashboard
              </h3>
              <p className="text-gray-700">
                Real-time analytics and ward-wise segregation monitoring
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg p-8 border-l-4 border-yellow-600">
              <Trophy className="text-yellow-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gamification
              </h3>
              <p className="text-gray-700">
                Earn points, badges, and climb the community leaderboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Register & Login</h3>
                <p className="text-gray-700 mt-2">
                  Join as a household member, community volunteer, or municipal authority
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Report & Share</h3>
                <p className="text-gray-700 mt-2">
                  Log your daily waste segregation with photo proof
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Get Verified</h3>
                <p className="text-gray-700 mt-2">
                  Community volunteers verify your reports for authenticity
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Earn Rewards</h3>
                <p className="text-gray-700 mt-2">
                  Collect points, badges, and recognition for your efforts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 WasteTrack - Community-Driven Waste Segregation System
          </p>
        </div>
      </footer>
    </div>
  );
}
