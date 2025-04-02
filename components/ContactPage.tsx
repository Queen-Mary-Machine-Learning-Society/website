"use client";

import { FaInstagram, FaTwitter } from "react-icons/fa";


export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-300">
            327 Mile End Rd, London E1 4NS
          </p>
          <p className="text-lg text-gray-300">Email: qmml@qmsu.org</p>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="text-[#FCA311] text-2xl hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#FCA311] text-2xl hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCA311]" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCA311]" />
            <textarea placeholder="Message" className="w-full p-3 bg-gray-800 text-white rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#FCA311]"></textarea>
            <button type="submit" className="w-full bg-[#FCA311] text-white py-3 rounded-md font-bold hover:bg-[#E69500] transition-transform transform hover:scale-105">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Sponsors & Collaborations */}
      <div className="mt-16 text-center space-y-8">
        <h3 className="text-3xl font-semibold">Our Sponsors</h3>
        <div className="flex justify-center space-x-10">
          <div className="bg-gray-800 p-6 rounded-lg w-40">Sponsor 1</div>
          <div className="bg-gray-800 p-6 rounded-lg w-40">Sponsor 2</div>
          <div className="bg-gray-800 p-6 rounded-lg w-40">Sponsor 3</div>
        </div>

        <h3 className="text-3xl font-semibold">Collaborate with Us</h3>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Want to partner with QMML? Get in touch to explore exciting opportunities!
        </p>
      </div>
    </section>
  );
}