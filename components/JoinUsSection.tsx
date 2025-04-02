"use client";

export default function JoinUsSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-extrabold text-[#FFFFFF] mb-4">Join Us Now</h2>
      <p className="text-xl text-[#E5E5E5] mb-8">Be a part of Queen Mary Machine Learning Society and elevate your AI/ML journey.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Join via Student Union Website */}
        <div className="bg-[#FCA311] text-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Join via Student Union Website</h3>
          <p className="text-lg">Official membership for university students to access society benefits.</p>
        </div>

        {/* Github Repository */}
        <div className="bg-[#FCA311] text-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Github Repository</h3>
          <p className="text-lg">Access code, learning materials, and past competition solutions.</p>
        </div>

        {/* Network */}
        <div className="bg-[#FCA311] text-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Network</h3>
          <p className="text-lg">Connect with members and industry professionals.</p>
        </div>

        {/* Stay Updated */}
        <div className="bg-[#FCA311] text-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg">Follow us for event updates, behind the scenes, and community highlights.</p>
        </div>

        {/* Whatsapp Group */}
        <div className="bg-[#FCA311] text-[#FFFFFF] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Whatsapp Group</h3>
          <p className="text-lg">Join discussions, ask questions, and get event notifications in real time.</p>
        </div>
      </div>
    </section>
  );
}