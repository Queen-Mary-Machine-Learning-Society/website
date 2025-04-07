"use client";
import { useState, useEffect } from 'react';
import { Event } from "../types/Event";
import { GetAllEvents } from "../app/repository/supabaseAnonServer";


export default function EventsCarousel() {

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

  useEffect(() => {
    console.log(events);
  }, [events]);



  const [currentIndex, setCurrentIndex] = useState(0);


  const moveCarousel = (direction: number) => {
    const totalImages = events.length;
    const newIndex = (currentIndex + direction + totalImages) % totalImages;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {events.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-full">
              <h1 style={{color: "white"}}>{event.title}</h1>
              <div className="mb-6">
                <p style={{color: "white"}}>
                  📅 <strong>{new Date(event.time).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}</strong>
                </p>
                <p style={{color: "white"}}>📍 {event.place}</p>
                <p style={{color: "white"}}>🕕 {new Date(event.time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#000000] bg-opacity-50 text-[#FFFFFF] p-2 rounded-full hover:bg-opacity-75"
        onClick={() => moveCarousel(-1)}>
        &#8592;
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#000000] bg-opacity-50 text-[#FFFFFF] p-2 rounded-full hover:bg-opacity-75"
        onClick={() => moveCarousel(1)}>
        &#8594;
      </button>
    </div>
  );
}
