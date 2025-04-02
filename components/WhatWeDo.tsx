"use client";

import Link from "next/link";

const cards = [
  { title: "AI/ML Education", description: "Gain in-depth knowledge through workshops, tutorials, and study groups.", link: "/education" },
  { title: "AI/ML Competition", description: "Participate in exciting AI/ML challenges to test and improve your skills.", link: "/competitions" },
  { title: "AI/ML Events", description: "Engage in AI/ML meetups, talks, and networking opportunities.", link: "/events" }
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#0A0A0A] to-[#141414] text-white text-center">
      <h2 className="text-4xl font-bold mb-10">What We Do</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, index) => {
          const CardContent = (
            <div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 bg-neutral-950 rounded-xl">
              {/* Background Effects */}
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 opacity-90"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 opacity-90"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 opacity-90"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12 opacity-90"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44 opacity-90"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-600 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64 opacity-90"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-400 shadow-xl rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4 opacity-90"></div>

                            {/* Card Content */}
                            <div className="w-full h-full shadow-2xl shadow-neutral-950 p-3 bg-neutral-800 opacity-90 rounded-xl flex-col gap-2 flex justify-center text-center">
                <span className="text-neutral-50 font-bold text-xl italic">{card.title}</span>
                <p className="text-neutral-300 text-sm">{card.description}</p>
              </div>
            </div>
          );

          return card.link ? (
            <Link key={index} href={card.link}>
              {CardContent}
            </Link>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
}

