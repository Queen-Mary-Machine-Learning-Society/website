"use client";

import Link from "next/link";

const cards = [
  { title: "AI/ML Education", description: "Gain in-depth knowledge through workshops, tutorials, and study groups.", link: "/education" },
  { title: "AI/ML Competition", description: "Participate in exciting AI/ML challenges to test and improve your skills.", link: "/competitions" },
  { title: "AI/ML Events", description: "Engage in AI/ML meetups, talks, and networking opportunities.", link: "/events" }
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full mt-32 py-20 px-4 sm:px-8  text-center overflow-hidden">
     
      <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-16">
        What We Do
      </h2>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="group relative w-72 h-72 perspective-1000 hover:scale-105 transition-transform duration-500"
          >
            {/* Card container */}
            <div className="relative w-full h-full preserve-3d">
              {/* Gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2a] shadow-2xl shadow-black/50"></div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#FCA311] rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${5 + i * 2}s infinite`
                    }}
                  ></div>
                ))}
              </div>

              {/* Hover effect layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FCA311] to-[#FF6B00] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative w-full h-full p-8 flex flex-col justify-center items-center gap-4 text-center backdrop-blur-sm">
                <div className="text-4xl mb-4">
                  <div className="inline-block bg-gradient-to-r from-[#FCA311] to-[#FF6B00] text-transparent bg-clip-text">
                    {index === 0 && "📚"}
                    {index === 1 && "🏆"}
                    {index === 2 && "🎤"}
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00]">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#FCA311] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="w-4 h-4 animate-bounce-horizontal"
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
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
