"use client";

import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Get in Touch', href: '/contact' },
  ];

  const eventsLinks = [
    { label: 'AI/ML Education', href: '/education' },
    { label: 'AI/ML Competitions', href: '/competitions' },
    { label: 'AI/ML Events', href: '/events' },
  ];

  const socialMediaLinks = [
    { icon: <FaGithub className="text-xl text-[#FCA311]" />, href: 'https://github.com/manu-2213/QMUL_MLSociety' },
    { icon: <FaLinkedin className="text-xl text-[#FCA311]" />, href: 'https://www.linkedin.com/company/qmml/' },
    { icon: <FaInstagram className="text-xl text-[#FCA311]" />, href: 'https://www.instagram.com/qmmachinelearning/' },
  ];

  return (
    <footer className="relative bg-black/80 backdrop-blur-2xl pt-20 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10">
        {/* Society Info */}
        <div className="md:col-span-2 lg:col-span-2">
          <Image src="/images/logo.png" alt="QMML Logo" width={100} height={100} className="h-14 w-auto" />

          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-6">
            QMML Society
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Empowering the next generation of machine learning innovators
          </p>
          <div className="flex space-x-4">
            {socialMediaLinks.map((social, index) => (
              <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#FCA311] text-lg font-semibold mb-6">Explore</h4>
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-300 hover:text-[#FCA311] transition-colors duration-300 group">
                  {link.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#FCA311]"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Committees */}
        <div>
          <h4 className="text-[#FCA311] text-lg font-semibold mb-6">Events</h4>
          <ul className="space-y-4">
            {eventsLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-300 hover:text-[#FCA311] transition-colors duration-300 group">
                  {link.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#FCA311]"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#FCA311] text-lg font-semibold mb-6">Connect</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:qmmml@qmsu.org" className="text-gray-300 hover:text-[#FCA311] transition-colors duration-300 group">
                qmmml@qmsu.org
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#FCA311]"></span>
              </a>
              <a className="text-gray-700 " href="/login">
                Admin Portal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="max-w-7xl mx-auto my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FCA311]/50 to-transparent animate-pulse"></div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8">
        <p>© {new Date().getFullYear()} Queen Mary Machine Learning Society. All rights reserved.</p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute w-64 h-64 bg-[#FCA311] rounded-full blur-3xl -top-32 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 bg-[#007FFF] rounded-full blur-3xl -bottom-32 right-1/4 animate-pulse-slow-delayed"></div>
      </div>
    </footer>
  );
}
