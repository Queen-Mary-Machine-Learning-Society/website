"use client";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-[#FFFFFF] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Column: Queen Mary Machine Learning Society */}
        <div>
          <h3 className="text-2xl font-bold">Queen Mary Machine Learning Society</h3>
          <p className="mt-4">Learn, Compete, Excel</p>
        </div>

        {/* Middle Column: Our Team */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>
          <ul>
            <li>Current Committee</li>
            <li>Past Committee</li>
          </ul>
        </div>

        {/* Right Column: What We Do */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What We Do</h3>
          <ul>
            <li>AI/ML Education</li>
            <li>AI/ML Competitions</li>
            <li>AI/ML Events</li>
          </ul>
        </div>

        {/* Gallery Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <ul>
            <li><a href="#gallery" className="text-[#FCA311] hover:underline">View Our Gallery</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}