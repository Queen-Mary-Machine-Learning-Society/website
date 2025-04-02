"use client";
import WelcomeSection from '@/components/WelcomeSection';
import EventsSection from '@/components/EventsSection';
import AimsSection from '@/components/AimsSection';
import JoinUsSection from '@/components/JoinUsSection';


export default function Home() {
  return (
    <div className="bg-[#14213D]">
      <WelcomeSection />
      <EventsSection />
      <AimsSection />
      <JoinUsSection />
    </div>
  );
}