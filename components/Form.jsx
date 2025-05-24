"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabaseAnon } from "../app/repository/supabaseAnonServer";

function Form() {
  const [form, setForm] = useState({
    title: "",
    eventType: "",
    time: "",
    place: "",
    content: "",
    leader: "",
    imageFile: null,
    imageUrlInput: ""
  });

  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageOption, setImageOption] = useState("upload");
  const fileInputRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, imageFile: files[0], imageUrlInput: "" });
    } else if (name === "imageUrlInput") {
      setForm({ ...form, imageUrlInput: value, imageFile: null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = null;

    try {
      if (imageOption === "upload" && form.imageFile) {
        const fileExt = form.imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabaseAnon.storage
          .from("events-images")
          .upload(filePath, form.imageFile);

        if (uploadError) throw new Error(uploadError.message);

        const { data: publicUrlData } = supabaseAnon.storage
          .from("events-images")
          .getPublicUrl(filePath);

        imageUrl = publicUrlData?.publicUrl;
      }

      if (imageOption === "url" && form.imageUrlInput) {
        const response = await fetch(form.imageUrlInput);
        const blob = await response.blob();

        const url = new URL(form.imageUrlInput);
        const urlParts = url.pathname.split("/");
        const rawName = urlParts[urlParts.length - 1].split("?")[0];
        const fileExt = rawName.includes(".") ? rawName.split(".").pop() : "jpg";

        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabaseAnon.storage
          .from("events-images")
          .upload(filePath, blob);

        if (uploadError) throw new Error(uploadError.message);

        const { data: publicUrlData } = supabaseAnon.storage
          .from("events-images")
          .getPublicUrl(filePath);

        imageUrl = publicUrlData?.publicUrl;
      }

      const { error } = await supabaseAnon.from("events").insert([
        {
          title: form.title,
          event_type: form.eventType,
          time: form.time,
          place: form.place,
          content: form.content,
          leader: form.leader,
          image_url: imageUrl
        }
      ]);

      if (error) throw new Error(error.message);

      alert("Event submitted successfully!");

      setForm({
        title: "",
        eventType: "",
        time: "",
        place: "",
        content: "",
        leader: "",
        imageFile: null,
        imageUrlInput: ""
      });
      setImageOption("upload");
      if (fileInputRef.current) fileInputRef.current.value = "";

    } catch (err) {
      console.error("Submission failed:", err.message);
      alert("Failed to submit event: " + err.message);
    }

    setLoading(false);
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

      <div className="relative z-10 flex justify-center items-center min-h-screen bg-black/40 py-12">
        <div className="max-w-xl mx-auto p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-6">Submit New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Event Type</label>
              <select
                name="eventType"
                value={form.eventType || ""}
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
                value={form.time || ""}
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
                value={form.place || ""}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Leader</label>
              <input
                type="text"
                name="leader"
                value={form.leader || ""}
                onChange={handleChange}
                className="w-full border rounded-xl p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Content</label>
              <textarea
                name="content"
                value={form.content || ""}
                onChange={handleChange}
                className="w-full border rounded-xl p-2 h-24"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Image Source</label>
              <div className="flex gap-4 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="imageOption"
                    value="upload"
                    checked={imageOption === "upload"}
                    onChange={() => setImageOption("upload")}
                  />
                  Upload File
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="imageOption"
                    value="url"
                    checked={imageOption === "url"}
                    onChange={() => setImageOption("url")}
                  />
                  Use URL
                </label>
              </div>

              {imageOption === "upload" ? (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-2"
                  />
                  {form.imageFile && (
                    <img
                      src={URL.createObjectURL(form.imageFile)}
                      alt="Preview"
                      className="mt-3 w-full rounded-xl"
                    />
                  )}
                </>
              ) : (
                <>
                  <input
                    type="url"
                    name="imageUrlInput"
                    placeholder="Enter image URL"
                    value={form.imageUrlInput || ""}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-2"
                  />
                  {form.imageUrlInput && (
                    <img
                      src={form.imageUrlInput}
                      alt="Preview"
                      className="mt-3 w-full rounded-xl"
                    />
                  )}
                </>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-xl py-2 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;