import Link from 'next/link';
import React from 'react'

export default function CTABanner() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0A0A0A] to-[#2d2d2d] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="relative z-10 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-4">
                        Ready to Transform Your ML Journey?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Join 1000+ members accelerating their machine learning careers right now
                    </p>
                </div>

                {/* Animated Button */}
                <button className="group relative min-h-[6rem] min-w-[18rem] bg-neutral-900 border border-white/10 rounded-2xl p-4 overflow-hidden transition-all duration-500 hover:border-[#FCA311]/50 hover:shadow-[0_0_40px_10px_rgba(252,163,17,0.1)]">
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Gradient Background Elements */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FCA311] rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700"></div>
                        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#007FFF] rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 delay-150"></div>
                    </div>

                    {/* Button Content */}
                    <div className="relative z-10 flex items-center justify-center gap-3">
                        <Link className='flex items-center gap-3 ' href="https://www.qmsu.org/groups/qmml/">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] group-hover:from-white group-hover:to-gray-200 transition-colors duration-300">
                                Join Society Now
                            </span>
                            <svg
                                className="w-6 h-6 text-[#FCA311] group-hover:text-white transition-colors duration-300"
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
                        </Link>

                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(252,163,17,0.15)_0%,_transparent_70%)]"></div>
                    </div>

                    {/* Floating Animation */}
                    <div className="absolute inset-0 -z-20 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-float"></div>
                        <div className="absolute w-3 h-3 bg-[#FCA311] rounded-full top-1/3 right-1/4 animate-float-delayed"></div>
                        <div className="absolute w-2.5 h-2.5 bg-[#007FFF] rounded-full bottom-1/4 left-1/3 animate-float"></div>
                    </div>
                </button>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute w-[40vw] h-[40vw] bg-[#FCA311] rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
                <div className="absolute w-[40vw] h-[40vw] bg-[#007FFF] rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow-delayed"></div>
            </div>
        </section>
    );
}
