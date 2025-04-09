"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaMapMarker, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black/40 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start my-20">
        {/* Left Column - Contact Info & Form */}
        <div className="space-y-12 relative">
          {/* Floating Contact Card */}
          <div className="relative group bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_40px_5px_rgba(252,163,17,0.1)] transition-all duration-500">
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#FCA311]/30 transition-all duration-500" />

            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-[#FCA311]/10">
                  <FaMapMarker className="text-2xl text-[#FCA311]" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Our Location</p>
                  <p className="text-gray-300">327 Mile End Rd, London E1 4NS</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-[#FCA311]/10">
                  <FaEnvelope className="text-2xl text-[#FCA311]" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Email Us</p>
                  <p className="text-gray-300">qmmml@qmsu.org</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-6 pt-4">
                {[
                  { icon: FaInstagram, color: '#E1306C', link: 'https://www.instagram.com/qmmachinelearning/' },
                  { icon: FaLinkedin, color: '#0A66C2', link: 'https://www.linkedin.com/company/qmml/' },
                  { icon: FaGithub, color: 'white', link: 'https://github.com/manu-2213/QMUL_MLSociety' }
                ].map((Social, index) => (
                  <Link key={index} href={Social.link} className="p-3 rounded-full z-10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <Social.icon className="text-2xl" style={{ color: Social.color }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-[#FCA311] mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 bg-gray-900/50 text-white rounded-xl border border-white/10 focus:border-[#FCA311]/50 focus:ring-2 focus:ring-[#FCA311]/20 transition-all outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-gray-900/50 text-white rounded-xl border border-white/10 focus:border-[#FCA311]/50 focus:ring-2 focus:ring-[#FCA311]/20 transition-all outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full p-4 bg-gray-900/50 text-white rounded-xl border border-white/10 focus:border-[#FCA311]/50 focus:ring-2 focus:ring-[#FCA311]/20 transition-all outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FCA311] to-[#FF6B00] text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#FCA311]/20 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="h-[880px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3977153515647!2d-0.0408689235724342!3d51.52341091131406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db4a201f7e1%3A0x9dd87bca48711e01!2sQueen%20Mary%20University%20of%20London!5e0!3m2!1sen!2suk!4v1716422066969!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="max-w-7xl mx-auto mt-32">
        <h3 className="text-4xl font-bold text-center text-[#FCA311] mb-16">Our Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-32 bg-gray-900/50 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm hover:border-[#FCA311]/30 transition-all duration-300"
            >
              <span className="text-gray-400 font-semibold">Partner {index + 1}</span>
            </div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-[#FCA311] mb-6">Collaborate With Us</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hands with QMML to shape the future of machine learning education and innovation
          </p>
          <button className="bg-gradient-to-r from-[#FCA311] to-[#FF6B00] text-white px-12 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#FCA311]/20 transition-all duration-300 animate-pulse-slow">
            Start Partnership
          </button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute w-[40vw] h-[40vw] bg-[#FCA311] rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-[40vw] h-[40vw] bg-[#007FFF] rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow-delayed"></div>
      </div>
    </section>
  );
}