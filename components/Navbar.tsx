'use client'; // Mark this component as a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'; // Import from next/navigation
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname instead of useRouter().pathname

  const handleLinkClick = (href: string) => {
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
          <li>
            <Link
              href="/"
              className={`relative overflow-hidden group ${pathname === '/' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                } transition-colors duration-300`}
              onClick={() => handleLinkClick('/')}
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/what-we-do"
              className={`relative overflow-hidden group ${pathname === '/what-we-do' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                } transition-colors duration-300`}
              onClick={() => handleLinkClick('/what-we-do')}
            >
              What We Do
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/our-team"
              className={`relative overflow-hidden group ${pathname === '/our-team' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                } transition-colors duration-300`}
              onClick={() => handleLinkClick('/our-team')}
            >
              Our Team
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`relative overflow-hidden group ${pathname === '/gallery' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                } transition-colors duration-300`}
              onClick={() => handleLinkClick('/gallery')}
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`relative overflow-hidden group ${pathname === '/contact' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'
                } transition-colors duration-300`}
              onClick={() => handleLinkClick('/contact')}
            >
              Get in Touch
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
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
          <li>
            <Link
              href="/"
              onClick={() => handleLinkClick('/')}
              className={`${pathname === '/' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'} transition-colors duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/what-we-do"
              onClick={() => handleLinkClick('/what-we-do')}
              className={`${pathname === '/what-we-do' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'} transition-colors duration-300`}
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              href="/our-team"
              onClick={() => handleLinkClick('/our-team')}
              className={`${pathname === '/our-team' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'} transition-colors duration-300`}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              onClick={() => handleLinkClick('/gallery')}
              className={`${pathname === '/gallery' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'} transition-colors duration-300`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => handleLinkClick('/contact')}
              className={`${pathname === '/contact' ? 'text-[#FCA311]' : 'hover:text-[#FCA311]'} transition-colors duration-300`}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}