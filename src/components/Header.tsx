"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center"> Your Logo
          {/* <Image src="/path-to-your-logo.png" alt="Logo" width={40} height={40} /> */}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
            About
          </Link>
          <Link href="/services" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
            Services
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[hsl(var(--background))] md:hidden shadow-lg">
            <nav className="flex flex-col items-center space-y-4 py-6">
              <Link href="/" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
                About
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
                Services
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-[hsl(var(--primary))]">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
