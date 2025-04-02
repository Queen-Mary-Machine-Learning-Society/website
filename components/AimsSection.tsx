"use client";

export default function AimsSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-extrabold text-[#FFFFFF] mb-4">Our Aims</h2>
      <p className="text-xl text-[#E5E5E5] mb-8">To foster AI/ML excellence by encouraging</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        <div className="text-3xl font-extrabold text-[#FCA311]"># Competitiveness</div>
        <div className="text-3xl font-extrabold text-[#FCA311]"># Teamwork</div>
        <div className="text-3xl font-extrabold text-[#FCA311]"># Career Growth</div>
      </div>

      <p className="text-lg text-[#E5E5E5] mb-4">To connect members with industry leaders</p>
      <p className="text-lg text-[#E5E5E5]">To expand members' reach in global competitions</p>
    </section>
  );
}