'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut, Home, Users, BarChart3 } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    router.push('/login');
  };

  const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : null;

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">♻️</span>
            </div>
            WasteTrack
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6">
            {userRole === 'household' && (
              <>
                <Link href="/dashboard/household" className="flex items-center gap-1 hover:opacity-80 transition">
                  <Home size={20} />
                  Dashboard
                </Link>
                <Link href="/report" className="flex items-center gap-1 hover:opacity-80 transition">
                  Report Waste
                </Link>
              </>
            )}
            {userRole === 'community' && (
              <>
                <Link href="/dashboard/community" className="flex items-center gap-1 hover:opacity-80 transition">
                  <Users size={20} />
                  Verify Reports
                </Link>
                <Link href="/leaderboard" className="flex items-center gap-1 hover:opacity-80 transition">
                  Leaderboard
                </Link>
              </>
            )}
            {userRole === 'authority' && (
              <>
                <Link href="/dashboard/authority" className="flex items-center gap-1 hover:opacity-80 transition">
                  <BarChart3 size={20} />
                  Analytics
                </Link>
                <Link href="/complaints" className="flex items-center gap-1 hover:opacity-80 transition">
                  Complaints
                </Link>
              </>
            )}
          </div>

          {/* Logout Button */}
          {userRole && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
            >
              <LogOut size={20} />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
