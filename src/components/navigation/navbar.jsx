"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b border-gray-100" role="banner">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 font-mono tracking-tight hover:text-[#ea4c89] transition-colors"
            aria-label="Bits - Component Library Home"
          >
            UIBits
          </Link>
          {/* <nav
            className="hidden md:flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Explore
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Hire a Designer
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <Link
              href="/libraries"
              className="text-gray-700 hover:text-gray-900"
            >
              Libraries
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Find Jobs
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
          </nav> */}
        </div>
        {/* <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden md:block text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Sign up
          </Link>
          <Link
            href="#"
            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
          >
            Log in
          </Link>
        </div> */}
        <div className="flex items-center gap-3">
          <Link
            href="https://forms.gle/K4FcBCnG1PQNo1tm7"
            target="_blank"
            rel="noopener noreferrer"
            // className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-200 ml-auto"
            className="underline"
          >
            Join us
          </Link>
        </div>
      </div>
    </header>
  );
}
