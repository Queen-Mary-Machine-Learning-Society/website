"use client";

import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#0A0A0A] to-[#141414] text-center p-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover bg-center opacity-25"></div>
      
      <h1 className="relative text-5xl font-extrabold text-white mb-6 tracking-wide">
        Welcome to <span className="text-[#FCA311]">Queen Mary Machine Learning Society</span>
      </h1>
      
      <p className="relative text-lg text-gray-300 max-w-2xl mb-10">
        QMML provides a space within QMUL for students and staff to come together and delve into Machine Learning.
      </p>
      
      {/* Text Links */}
      <div className="relative flex space-x-6 text-xl font-semibold text-[#FCA311]">
        <span className="hover:text-[#E69500] cursor-pointer">AI/ML Education</span>
        <span className="hover:text-[#E69500] cursor-pointer">AI/ML Competitions</span>
        <span className="hover:text-[#E69500] cursor-pointer">AI/ML Events</span>
      </div>
    </section>
  );
}
