"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from "../lib/supabase";

function Form() {
  const [form, setForm] = useState({
    title: '',
    eventType: '',
    time: '',
    place: '',
    content: ''
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          title: form.title,
          event_type: form.eventType,
          time: form.time,
          place: form.place,
          content: form.content,
        },
      ]);
  
    if (error) {
      console.error("Submission failed:", error.message);
      alert("Error submitting form!");
    } else {
      alert("Event submitted successfully!");
      setForm({
        title: '',
        eventType: '',
        time: '',
        place: '',
        content: '',
      });
    }
  };
  

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {isClient && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/qmml-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="relative z-10 flex justify-center items-center min-h-screen bg-black/40">
        <div className="max-w-xl mx-auto p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-6">Submit New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Event Type</label>
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              >
                <option value="" disabled>Select type</option>
                <option value="Education">Education</option>
                <option value="Competitions">Competitions</option>
                <option value="Events">Events</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Time</label>
              <input
                type="datetime-local"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Place</label>
              <input
                type="text"
                name="place"
                value={form.place}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Content</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                className="w-full border rounded-xl p-2 h-24"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-xl py-2 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
