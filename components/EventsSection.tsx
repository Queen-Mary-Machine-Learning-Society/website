"use client";
import EventsCarousel from './EventsCarousel';

export default function EventsSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-extrabold text-[#FFFFFF] mb-6">Upcoming and Recent Events</h2>
      <EventsCarousel />
      <div className="mt-10">
        <a href="#join-us" className="bg-[#FCA311] text-[#FFFFFF] py-3 px-8 rounded-full text-xl font-semibold hover:bg-[#000000] transition">
          Join Us Now!
        </a>
      </div>
    </section>
  );
}