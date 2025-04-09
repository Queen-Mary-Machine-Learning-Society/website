"use client";
import EventsCarousel from './EventsCarousel';

export default function EventsSection() {
  return (
    <section className="relative py-20 text-center bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-12">
          Upcoming Events
        </h2>

        <EventsCarousel />

        <div className="mt-16 group relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FCA311] to-[#FF6B00] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <a
            href="https://www.qmsu.org/groups/qmml/"
            className="relative flex items-center justify-center gap-2 px-12 py-4 bg-gray-900 backdrop-blur-sm rounded-full text-xl font-semibold text-white hover:text-[#FCA311] transition-all duration-300"
          >
            <span>Join Upcoming Event</span>
            <svg
              className="w-6 h-6 animate-bounce-horizontal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute w-64 h-64 bg-[#FCA311] rounded-full blur-3xl -top-20 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 bg-[#007FFF] rounded-full blur-3xl -bottom-32 right-1/4 animate-pulse-slow-delayed"></div>
      </div>
    </section>
  );
}
