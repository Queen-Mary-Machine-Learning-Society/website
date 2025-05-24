"use client";
import Image from 'next/image'
import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] bg-gray-50 text-center p-10 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg4.webp"
          alt="Background"
          unoptimized={true}
          quality={100}
          width={400}
          height={300}
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-black opacity-1"></div>
      </div>

      {/* Main Content */}
      <div className="relative mt-22 z-10">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide">
          Welcome to <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00]">Queen Mary Machine Learning Society</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mb-10 mx-auto">
          QMML provides a space within QMUL for students and staff to come together and delve into Machine Learning.
        </p>

        {/* Animated Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { text: 'AI/ML Education', href: '/education' }, // Define href for each button
            { text: 'AI/ML Competitions', href: '/competitions' },
            { text: 'AI/ML Events', href: '/events' },
          ].map((item) => (
            <div key={item.text} className="relative group">
              <Link href={item.href} passHref> {/* Wrap the button with Link and use passHref */}
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FCA311] to-[#FF6B00] p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        {item.text}
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Join Society Banner */}
        <div className="group relative mx-auto max-w-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FCA311] to-[#FF6B00] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCA311]/30 transition-all duration-300">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00]">
                Ready to Join the Society?
              </h3>
              <Link target="_blank" href="https://www.qmsu.org/groups/qmml/">
                <button className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#FCA311] to-[#FF6B00] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  <span>Join Society Now</span>
                  <svg
                    className="w-5 h-5 animate-pulse-slow"
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
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-64 h-64 bg-[#1111fc] rounded-full blur-3xl -top-32 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 bg-[#007FFF] rounded-full blur-3xl -bottom-32 right-1/4 animate-pulse-slow-delayed"></div>
      </div>
    </section>
  );
}