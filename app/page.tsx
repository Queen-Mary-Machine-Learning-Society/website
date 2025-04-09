"use client";
import WelcomeSection from '@/components/WelcomeSection';
import EventsSection from '@/components/EventsSection';
import AimsSection from '@/components/AimsSection';
import JoinUsSection from '@/components/JoinUsSection';
import CTBanner from '@/components/CTBanner';


export default function Home() {
  return (
    <div className="">
      <WelcomeSection />
      <EventsSection />
      <AimsSection />
      <JoinUsSection />
      <CTBanner/>
    </div>
  );
}