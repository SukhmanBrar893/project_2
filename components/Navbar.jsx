"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Club Logo" width={48} height={48} />
          <span className="text-xl font-bold text-blue-700 tracking-wide">
            Brar Sports Club
          </span>
        </div>
        <ul className="flex gap-8 text-blue-900 font-semibold text-lg">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/bookings" className="hover:text-blue-600 transition-colors">Book</Link>
          </li>
          <li>
            <Link href="/calendar" className="hover:text-blue-600 transition-colors">Calendar</Link>
          </li>
          <li>
            <Link href="/dashboard/athlete" className="hover:text-blue-600 transition-colors">Dashboard</Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-blue-600 transition-colors">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
