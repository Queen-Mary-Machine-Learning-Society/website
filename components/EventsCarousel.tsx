"use client";
import { useState } from 'react';

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400"
  ];

  const moveCarousel = (direction: number) => {
    const totalImages = images.length;
    const newIndex = (currentIndex + direction + totalImages) % totalImages;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={src} alt={`Event ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
