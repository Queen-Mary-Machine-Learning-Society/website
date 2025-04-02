"use client";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white p-10 relative">
      
      {/* Back Button (Top Left) */}
      <Link href="/what-we-do">
        <button className="absolute top-6 left-6 bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group">
          <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
            </svg>
          </div>
          <p className="translate-x-2">Go Back</p>
        </button>
      </Link>

      {/* Page Content */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl font-bold mb-6">AI/ML Events at QMML</h1>
        <p className="text-lg mb-8">
          QMML fosters a vibrant community through events that promote learning, networking, and knowledge exchange in Machine Learning.
        </p>

        {/* Event: Kaggle Seasons Workshop 10 */}
        <div className="max-w-3xl bg-neutral-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Kaggle Seasons Workshop 10</h2>
          <div className="mb-6">
            <p>📅 <strong>Thursday, 6th March 2025</strong></p>
            <p>📍 David Sizer LT, Bancroft Building</p>
            <p>🕕 6-8 PM</p>
            <p className="text-sm mt-4">In this workshop, we will explore Python packages, Kaggle's data package features, strategies for winning data competitions, and the first Kaggle industry competition. Speakers: Karl Johannes & Maxim Khovansky.</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8">
          <Link href="/register">
            <button className="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300">
              Join Us Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
