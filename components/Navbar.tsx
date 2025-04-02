"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#14213D] text-[#FFFFFF] py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#FFFFFF]">QMML logo</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#home" className="hover:text-[#FCA311] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/what-we-do" className="hover:text-[#FCA311] transition">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="#our-team" className="hover:text-[#FCA311] transition">
              Our Team
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-[#FCA311] transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#FCA311] transition">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
