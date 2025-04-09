"use client";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaClock, FaMapPin } from "react-icons/fa";

export default function EducationPage() {
  const lessons = [
    {
      title: "Lesson 1: Introduction to Machine Learning",
      date: new Date("2024-10-25"),
      time: "5–6 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "An introduction to Machine Learning, its real-world applications, Python basics, and fundamental mathematical concepts."
    },
    {
      title: "Lesson 2: Simple Linear Regression",
      date: new Date("2024-11-01"),
      time: "6–7 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "Covers supervised learning, simple linear regression, and introduces the use of derivatives in practice."
    },
    {
      title: "Lesson 3: Multiple Linear Regression",
      date: new Date("2024-11-08"),
      time: "5–6 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "Explores feature scaling, model evaluation with MSC and R², and an intro to overfitting/underfitting."
    },
    {
      title: "Lesson 4: Neural Networks",
      date: new Date("2024-11-15"),
      time: "5–6 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "Introduction to neural networks, their architecture, activation functions, and a hands-on NumPy session."
    },
    {
      title: "Lesson 5: Neural Networks II",
      date: new Date("2024-11-22"),
      time: "5–6 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "Delves deeper into forward pass, loss functions, backpropagation, and an interactive workshop."
    },
    {
      title: "Lesson 6: Classification",
      date: new Date("2024-12-06"),
      time: "5–6 PM",
      location: "Francis Bancroft Building 1.02.6",
      description:
        "An overview of classification algorithms, evaluation metrics, and hands-on experience in building classifiers."
    },
    {
      title: "Lesson 7: Intro to Convolutional Neural Networks",
      date: new Date("2025-02-06"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "Introduction to CNNs, including architecture (LeNet to ResNet), real-world applications, and training strategies."
    },
    {
      title: "Lesson 8: Implementing Large Language Models",
      date: new Date("2025-02-13"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "Hands-on session covering LLMs, prompting, fine-tuning, deployment using OpenAI/Hugging Face APIs."
    },
    {
      title: "Lesson 9: RL to Beat the Market",
      date: new Date("2025-02-20"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "Explore reinforcement learning through the K-armed bandit problem and its application to trading strategies."
    },
    {
      title: "Lesson 10: Markov Decision Processes in RL",
      date: new Date("2025-02-27"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "Understanding MDPs, Bellman equations, policy iteration, and exploration strategies in RL."
    },
    {
      title: "Lesson 11: RNNs & LSTMs in PyTorch",
      date: new Date("2025-03-06"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "Introduction to RNNs and LSTMs with a focus on NLP and time-series using PyTorch."
    },
    {
      title: "Lesson 12: LSTMs and Stock Prediction Demo",
      date: new Date("2025-03-13"),
      time: "5–6 PM",
      location: "David Sizer LT, Bancroft Building",
      description:
        "A demo on how LSTMs are used in stock forecasting. Understand vanishing gradients and architecture tweaks."
    }
  ];
  const sortedLessons = [...lessons].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="min-h-screen bg-black/50 text-white relative overflow-hidden">
      {/* Back Button */}
      <Link href="/what-we-do" className="fixed mt-32 top-6 left-6 z-50">
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-[#FCA311]/20 transition-all duration-300 group">
          <svg className="w-6 h-6 text-[#FCA311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-gray-300 group-hover:text-[#FCA311] transition-colors">Back</span>
        </button>
      </Link>

      <div className="max-w-6xl mt-32 mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-4 text-center">
          AI/ML Education at QMML
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-20 text-center">
          Hands-on, inclusive learning through workshops, tutorials, and practical ML sessions
        </p>

        {/* Education Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 w-1 h-full bg-gradient-to-b from-[#FCA311] to-[#FF6B00] rounded-full" />

          {sortedLessons.map((lesson, index) => (
            <div key={index} className="relative mb-12 ml-8 group">
              {/* Timeline Circle */}
              <div className="absolute -left-11 md:-left-14 top-6 w-8 h-8 bg-gray-900 border-4 border-[#FCA311] rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FCA311]" />

              {/* Lesson Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FCA311]/30 p-8 transition-all duration-300 overflow-hidden">
                {/* Date Badge */}
                <div className="absolute top-6 right-3 text-[#FCA311] font-bold text-sm bg-gray-900/80 px-4 py-2 rounded-r-full">
                  {lesson.date.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </div>

                {/* Lesson Content */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#FCA311]">{lesson.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="w-6 h-6 text-[#FCA311]" />
                      {lesson.date.toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaClock className="w-6 h-6 text-[#FCA311]" />
                      {lesson.time}
                    </div>

                    <div className="flex items-center gap-2 md:col-span-2">
                      <FaMapPin className="w-6 h-6 text-[#FCA311]" />
                      {lesson.location}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {lesson.description}
                  </p>

                  <button className="flex items-center gap-2 px-6 py-3 bg-[#FCA311]/10 hover:bg-[#FCA311]/20 text-[#FCA311] rounded-full transition-all duration-300">
                    <span>View Materials</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute w-[40vw] h-[40vw] bg-[#FCA311] rounded-full blur-3xl -top-20 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-[40vw] h-[40vw] bg-[#007FFF] rounded-full blur-3xl -bottom-32 right-1/4 animate-pulse-slow-delayed"></div>
      </div>
    </div>
  );
}