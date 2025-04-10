"use client";

import Link from "next/link";

const joinUsLinks = [
  {
    title: "Student Union Portal",
    description: "Official membership with full society benefits",
    colors: "from-[#FCA311] via-[#FF6B00] to-[#FF3C00]",
    linkName: "Join Now",
    linkHref: "https://www.qmsu.org/groups/qmml/", // Replace with the actual link
  },
  {
    title: "GitHub Repository",
    description: "Access codebases & competition solutions",
    colors: "from-[#7CFC00] via-[#00FF00] to-[#00FF7F]",
    linkName: "Explore Code",
    linkHref: "https://github.com/manu-2213/QMUL_MLSociety", // Replace with the actual link
  },
  {
    title: "Professional Network",
    description: "Connect with industry leaders",
    colors: "from-[#007FFF] via-[#0055FF] to-[#0033FF]",
    linkName: "Connect",
    linkHref: "https://www.linkedin.com/company/qmml/", // Replace with the actual link
  },
  {
    title: "Instagram",
    description: "Event updates & community highlights",
    colors: "from-[#FF00FF] via-[#FF00AA] to-[#FF0066]",
    linkName: "Stay Updated",
    linkHref: "https://www.instagram.com/qmmachinelearning/", // Replace with the actual link
  },
  {
    title: "WhatsApp Community",
    description: "Real-time discussions & notifications",
    colors: "from-[#00FFFF] via-[#00AAFF] to-[#0066FF]",
    linkName: "Join Chat",
    linkHref: "YOUR_WHATSAPP_COMMUNITY_LINK", // Replace with the actual link
  },
  {
    title: "Workshops",
    description: "Hands-on sessions with experts",
    colors: "from-[#FFD700] via-[#FFAA00] to-[#FF7700]",
    linkName: "Learn More",
    linkHref: "https://www.instagram.com/qmmachinelearning/", // Replace with the actual link
  },
];

export default function JoinUsSection() {
  return (
    <section className="relative py-20 text-center bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-6">
          Join the ML Revolution
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Transform your ML journey with exclusive resources, networks, and opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {joinUsLinks.map((card, index) => (
            <div
              key={index}
              className="h-[12em] w-full bg-black/50 rounded-[1.5em] relative group p-6 overflow-hidden border border-white/10 hover:border-transparent transition-all duration-500"
            >
              {/* Animated gradient background */}
              <div className={`absolute -bottom-20 -left-20 h-40 w-40 bg-gradient-to-r ${card.colors} rounded-full opacity-40 group-hover:opacity-80 blur-2xl transition-all duration-700 group-hover:scale-150 -z-10`}></div>

              {/* Floating particles */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
                <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-float"></div>
                <div className="absolute w-3 h-3 bg-[#FCA311] rounded-full top-1/3 right-1/4 animate-float-delayed"></div>
                <div className="absolute w-2.5 h-2.5 bg-[#007FFF] rounded-full bottom-1/4 left-1/3 animate-float"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 group-hover:opacity-80 transition-opacity duration-500">
                {card.description}
              </p>

              {/* Animated button as a Link */}
              <Link href={card.linkHref} className="relative block overflow-hidden px-6 py-2 bg-black/30 rounded-full backdrop-blur-sm group-hover:bg-black/50 transition-all z-10 duration-500">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-colors duration-500">
                  {card.linkName}
                </span>
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.colors} rounded-full animate-spin-slow`}></div>
                </div>
              </Link>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute w-[30vw] h-[30vw] bg-[#FCA311] rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-[30vw] h-[30vw] bg-[#007FFF] rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow-delayed"></div>
      </div>
    </section>
  );
}
