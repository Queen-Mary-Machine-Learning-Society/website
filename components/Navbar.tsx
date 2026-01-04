'use client'; // Mark this component as a client component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import from next/navigation
import { FaBars, FaTimes } from 'react-icons/fa';
import { siteConfig } from '@/lib/config';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname instead of useRouter().pathname

  const handleLinkClick = () => {
    setMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="bg-black-600/20 backdrop-blur-md drop-shadow-lg text-white py-3 px-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-col space-x-2">
          <Image src="/images/logo.png" alt="QMML Logo" width={100} height={100} priority className="h-14 w-auto" />
          <span className="text-lg font-bold">QMML</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {siteConfig.navigation.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative overflow-hidden group ${pathname === link.href ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                  } transition-colors duration-300`}
                onClick={() => handleLinkClick()}
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-4 text-white font-medium bg-[#04060b] pb-4">
          {siteConfig.navigation.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick()}
                className={`${pathname === link.href ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                  } transition-colors duration-300`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}