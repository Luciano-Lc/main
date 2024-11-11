"use client"


import React from 'react';
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
              Book Club
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/book" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              My Books
            </Link>
            <div className="w-64">
              <SearchField />
            </div>
            <UserButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary p-2"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4">
              <Link
                href="/book"
                className="block text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2"
              >
                My Books
              </Link>
              <div className="px-3">
                <SearchField />
              </div>
              <div className="px-3 py-2">
                <UserButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}