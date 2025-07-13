import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed z-40 w-full bg-[#eaeaff] text-blue-900 py-4 border-b border-blue-200/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        <Link href="/" className="text-xl font-mono font-semibold tracking-tighter hover:text-blue-700 transition">
          Intelli-Shop
        </Link>
        <nav className="flex items-center">
          <Link
            href="/demo"
            className="ml-6 text-blue-700 font-mono font-medium hover:text-blue-900 hover:underline transition"
          >
            Demo
          </Link>
          <Link
            href="/how-it-works"
            className="ml-6 text-blue-700 font-mono font-medium hover:text-blue-900 hover:underline transition"
          >
            How it works
          </Link>
        </nav>
      </div>
    </header>
  );
}
