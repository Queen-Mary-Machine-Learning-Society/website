import Image from 'next/image';
import React from 'react'

const images = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
  ];
  
  export default function Gallery() {
    return (
      <div className="max-w-6xl mx-auto p-4">
        {/* Title Section */}
        <div className="text-center text-white py-32">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-6">Gallery</h2>
          <p className="text-gray-400">A glimpse into our journey of learning, collaboration, and innovation</p>
        </div>
  
        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-4 mb-32">
          {images.map((src, index) => (
            <div key={index} className="mb-4 overflow-hidden rounded-lg">
              <Image 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                width={400} 
                height={300} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }