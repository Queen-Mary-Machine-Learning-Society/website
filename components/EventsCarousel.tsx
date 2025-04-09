"use client";
import { useState, useEffect } from 'react';
import { Event } from "../types/Event";
import { GetAllEvents } from "../app/repository/supabaseAnonServer";
import { FaArrowRight, FaCalendar, FaChevronLeft, FaChevronRight, FaClock, FaMapPin } from 'react-icons/fa';
import Link from 'next/link';


export default function EventsCarousel() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await GetAllEvents();
      setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const moveCarousel = (direction: number) => {
    const totalEvents = events.length;
    const newIndex = (currentIndex + direction + totalEvents) % totalEvents;
    setCurrentIndex(newIndex);
  };

  if (loading) {
    return (
      <div className="flex justify-center gap-8 py-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-80 h-96 bg-gray-900/50 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-[#FCA311]/20 transition-all duration-300"
        onClick={() => moveCarousel(-1)}
      >
        <FaChevronLeft className="w-8 h-8 text-[#FCA311]" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-[#FCA311]/20 transition-all duration-300"
        onClick={() => moveCarousel(1)}
      >
        <FaChevronRight className="w-8 h-8 text-[#FCA311]" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden py-12">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-full flex justify-center px-4"
            >
              <div className="relative group h-[600px] w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#FCA311]/30 transition-all duration-300 overflow-hidden">
                {/* Event Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#FCA311] mb-4">{event.title}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCalendar className="w-6 h-6 text-[#FCA311]" />
                      {new Date(event.time).toLocaleDateString('en-GB', {
                        weekday: 'long', day: 'numeric', month: 'long'
                      })}
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <FaClock className="w-6 h-6 text-[#FCA311]" />
                      {new Date(event.time).toLocaleTimeString([], {
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </div>

                    <div className="flex items-center gap-2 text-gray-300 col-span-2">
                      <FaMapPin className="w-6 h-6 text-[#FCA311]" />
                      {event.place}
                    </div>
                  </div>
                  <Link href="/events">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#FCA311]/10 hover:bg-[#FCA311]/20 text-[#FCA311] rounded-full transition-all duration-300">
                      <span>Learn More</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#FCA311] w-8' : 'bg-gray-700'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
