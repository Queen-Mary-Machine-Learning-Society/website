import React from 'react'

import { FaUserCircle, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const CurrentTeam = () => {
  const leaders = [
    { name: "Muhammad Hussain", role: "President" },
    { name: "Kimia Jamshidi", role: "Manager" }
  ];

  const teamMembers = [
    { name: "Michael Brown", role: "Technical Lead" },
    { name: "Emma Wilson", role: "Events Coordinator" },
    { name: "James Miller", role: "Outreach Manager" },
    { name: "Sophia Davis", role: "Marketing Head" },
    { name: "Daniel Garcia", role: "Research Lead" },
    { name: "Olivia Martinez", role: "Workshop Coordinator" }
  ];

  return (
    <div className=" bg-black/30 py-20 px-6">
      <div className="max-w-7xl mx-auto my-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-12">
          Our Leadership
        </h2>

        {/* Leadership Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {leaders.map((leader, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FCA311] to-[#FF6B00] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <div className="flex flex-col items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FCA311]/30 transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaUserCircle className="text-6xl text-gray-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="p-1.5 rounded-full bg-[#FCA311] hover:bg-[#E69500]">
                      <FaLinkedin className="text-lg text-white" />
                    </a>
                    <a href="#" className="p-1.5 rounded-full bg-[#FCA311] hover:bg-[#E69500]">
                      <FaGithub className="text-lg text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#FCA311] mb-1">{leader.name}</h3>
                <p className="text-gray-300 text-base">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-12">
          Team Members
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FCA311] to-[#FF6B00] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <div className="flex flex-col items-center p-5 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FCA311]/30 transition-all duration-300">
                <div className="relative mb-3">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FaUserCircle className="text-4xl text-gray-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="p-1.5 rounded-full bg-[#FCA311] hover:bg-[#E69500]">
                      <FaLinkedin className="text-base text-white" />
                    </a>
                    <a href="#" className="p-1.5 rounded-full bg-[#FCA311] hover:bg-[#E69500]">
                      <FaEnvelope className="text-base text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#FCA311] mb-1">{member.name}</h3>
                <p className="text-gray-300 text-sm text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute w-48 h-48 bg-[#FCA311] rounded-full blur-3xl -top-32 left-1/4 animate-pulse-slow"></div>
          <div className="absolute w-48 h-48 bg-[#007FFF] rounded-full blur-3xl -bottom-32 right-1/4 animate-pulse-slow-delayed"></div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTeam;