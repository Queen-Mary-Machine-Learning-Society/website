"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Event } from "../../types/Event";
import { GetAllEvents } from "../repository/supabaseAnonServer";
import { FaArrowRight, FaClock, FaMapPin } from "react-icons/fa";
import CTABanner from "@/components/CTBanner";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await GetAllEvents();
      setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  
  return (
    <div className="min-h-screen bg-black/30 text-white relative overflow-hidden">

      {/* Enhanced Back Button */}
      <Link href="/what-we-do" className="fixed top-6 mt-24 left-6 z-50">
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-[#FCA311]/20 transition-all duration-300 group">
          <svg
            className="w-6 h-6 text-[#FCA311] group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-gray-300 group-hover:text-[#FCA311] transition-colors">Back</span>
        </button>
      </Link>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mt-32 py-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-16 text-center">
          AI/ML Events Timeline
        </h1>
        
        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 w-1 h-full bg-gradient-to-b from-[#FCA311] to-[#FF6B00] rounded-full" />

          {loading ? (
            // Loading Skeleton
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="relative mb-12 ml-8">
                <div className="absolute -left-11 md:-left-14 top-6 w-8 h-8 bg-gray-900 border-4 border-[#FCA311] rounded-full animate-pulse" />
                <div className="h-48 bg-gray-900/50 rounded-2xl animate-pulse" />
              </div>
            ))
          ) : (
            events.map((event) => (
              <div key={event.id} className="relative mb-12 ml-8 group">
                {/* Timeline Circle */}
                <div className="absolute -left-11 md:-left-14 top-6 w-8 h-8 bg-gray-900 border-4 border-[#FCA311] rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FCA311]" />

                {/* Event Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FCA311]/30 p-8 transition-all duration-300 overflow-hidden">
                  {/* Event Date */}
                  <div className="absolute top-6 right-3  text-[#FCA311] font-bold text-sm bg-gray-900/80 px-4 py-2 rounded-r-full">
                    {new Date(event.time).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </div>

                  {/* Event Content */}
                  <div className="flex flex-col md:flex-row gap-8">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full md:w-64 h-48 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[#FCA311] mb-4">{event.title}</h2>

                      <div className="flex flex-col gap-2 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <FaClock className="w-5 h-5 text-[#FCA311]" />
                          {new Date(event.time).toLocaleTimeString([], {
                            hour: '2-digit', minute: '2-digit'
                          })}
                        </div>

                        <div className="flex items-center gap-2">
                          <FaMapPin className="w-5 h-5 text-[#FCA311]" />
                          {event.place}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">{event.content}</p>

                      <button className="flex items-center gap-2 px-6 py-3 bg-[#FCA311]/10 hover:bg-[#FCA311]/20 text-[#FCA311] rounded-full transition-all duration-300">
                        <span>View Details</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
