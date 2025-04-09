"use client";

export default function AimsSection() {
  return (
    <section className="relative py-20 text-center bg-gradient-to-d from-[#d57c00] to-[#210d25]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-6">Our Core Missions</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Empowering the next generation of AI/ML leaders through innovative programs and community engagement
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Competitive Edge",
              description: "Sharpen your skills through national ML competitions and hackathons with expert mentorship",
              icon: "🏆"
            },
            {
              title: "Collaborative Learning",
              description: "Join interdisciplinary teams to solve real-world problems using machine learning",
              icon: "🤝"
            },
            {
              title: "Career Pathways",
              description: "Connect with industry leaders through exclusive workshops and networking events",
              icon: "🚀"
            }
          ].map((aim, index) => (
            <div
              key={index}
              className="relative flex h-[16em] w-full items-center justify-center rounded-[1.5em] border border-[#FCA311]/30 bg-[#141414] p-[1.5em] transition-all duration-300 hover:border-[#FCA311]/60 hover:bg-[#1f1f1f]"
            >
              <div className="group absolute inset-0 flex items-center justify-center overflow-hidden rounded-[1.5em] p-6">
                {/* Orange heading that disappears on hover */}
                <h3 className="absolute text-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {aim.title}
                </h3>

                {/* Hover content that appears */}
                <div className="absolute flex h-[4em] w-[4em] items-center justify-center rounded-full bg-[#FCA311]/20 text-2xl transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-[1em]">
                  <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white mb-2">{aim.title}</h3>
                    <p className="text-sm text-gray-300">{aim.description}</p>
                    <button className="mt-4 text-xs font-semibold text-[#FCA311] hover:text-[#E69500] transition-colors">
                      Explore Programs →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-[#ffffff11]">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-4">Industry Connections</h3>
            <p className="text-gray-300">
              Partnered with leading AI companies to provide exclusive internship opportunities and tech talks
            </p>
          </div>
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-[#ffffff11]">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-4">Global Reach</h3>
            <p className="text-gray-300">
              Our members have competed in 15+ international competitions with 12 award-winning projects
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-48 h-48 bg-[#FCA311] rounded-full blur-3xl -top-20 -left-20 mix-blend-screen"></div>
        <div className="absolute w-48 h-48 bg-purple-500 rounded-full blur-3xl -bottom-20 -right-20 mix-blend-screen"></div>
      </div>
    </section>
  );
}