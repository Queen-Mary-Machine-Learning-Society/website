"use client";
import Link from "next/link";

export default function EducationPage() {
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
        <h1 className="text-4xl font-bold mb-6">AI/ML Education at QMML</h1>
        <p className="text-lg mb-8">
          We offer hands-on, inclusive, and interdisciplinary learning in Machine Learning through workshops, tutorials, and practical sessions.
        </p>

        {/* Event 1: LSTMs and Stock Prediction Demo */}
        <div className="max-w-3xl bg-neutral-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Lesson 12: LSTMs and Stock Prediction Demo</h2>
          <div className="mb-6">
            <p>📅 <strong>Thursday, 13th March 2025</strong></p>
            <p>📍 David Sizer LT, Bancroft Building</p>
            <p>🕕 5-6 PM</p>
            <p className="text-sm mt-4">Learn how to use Long Short-Term Memory (LSTM) networks to predict stock prices. A hands-on demo on how to create a machine learning model for time-series forecasting.</p>
          </div>
        </div>

        {/* Event 2: Introduction to Machine Learning */}
        <div className="max-w-3xl bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Lesson 1: Introduction to Machine Learning</h2>
          <div className="mb-6">
            <p>📅 <strong>Friday, 25th October 2024</strong></p>
            <p>📍 Francis Bancroft Building, 1.02.6</p>
            <p>🕕 5-6 PM</p>
            <p className="text-sm mt-4">Get introduced to the core concepts of Machine Learning, including supervised and unsupervised learning, algorithms, and model evaluation techniques.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
