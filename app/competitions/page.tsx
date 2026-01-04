import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa";

export default function CompetitionsPage() {
  const workshops = [
    {
      title: "Kaggle Seasons Workshop 1",
      date: new Date("2024-11-15"),
      location: "Francis Bancroft Building 1.02.6",
      time: "6-7 PM",
      description: "Live coding session, demonstrating how to create a baseline Kaggle submission from scratch. Formed skill-based teams of four with dedicated Slack channels for collaboration. Concluded the workshop with a social icebreaker.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/01_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 2",
      date: new Date("2024-11-22"),
      location: "Francis Bancroft Building 1.02.6",
      time: "6-7 PM",
      description: "In-depth lecture evaluating how Kaggle problems can be approached. Sharing the approach that scored in the top 21%. The first Kaggle competition in the Kaggle Seasons circuit.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/02_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 3",
      date: new Date("2024-11-29"),
      location: "Francis Bancroft Building 1.02.6",
      time: "6-7 PM",
      description: "Presentation on data preprocessing – specifically encoding and missing data handling. Shared a detailed template for a Kaggle submission, based on simple logistic regression, mode imputation, and label encoding.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/03_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 4",
      date: new Date("2024-12-06"),
      location: "Francis Bancroft Building 1.02.6",
      time: "6-8 PM",
      description: "4-week AI/ML Challenge starts.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/04_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 5",
      date: new Date("2024-12-13"),
      location: "Francis Bancroft Building 1.02.6",
      time: "5-8 PM",
      description: "Christmas Hackathon.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/05_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 6",
      date: new Date("2025-02-06"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Introduction to gradient boosting algorithms, how they work, and their importance. Newcomers were assigned to new teams and all teams started the February Kaggle playground competition.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/06_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 7",
      date: new Date("2025-02-13"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Worked through examples of gradient boosting, introduced new members to competitive ML coding with a live coding session, implementing gradient boosting in Python. Teams continued working on the February Kaggle playground competition.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/07_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 8",
      date: new Date("2025-02-20"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Walkthrough of PCA and how to interpret principal components and variance along each axis. Teams continued their work on the February Kaggle Playground competition.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/08_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 9",
      date: new Date("2025-02-27"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Introduction to ensemble learning, bagging, boosting, and stacking. Teams finalized submissions for the February Kaggle Playground series.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/09_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 10",
      date: new Date("2025-03-06"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Introduction to Kaggle's brand-new package feature and Python packages. Launch of Kaggle industry competitions, marking the step-up from Kaggle Playground series to real-world challenges.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/10_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 11",
      date: new Date("2025-03-13"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Walkthrough of how to make the first submission in our first-ever Industry Competition.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/11_kaggle_seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 12 (Special Session)",
      date: new Date("2025-03-20"),
      location: "David Sizer LT, Bancroft Building",
      time: "5:00-7:00 PM",
      description: "Manu's ML Roadmap, Introduction to Fake News Detection, followed by a Mini Hackathon.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/12-Kaggle-Seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 13",
      date: new Date("2025-03-27"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Maximizing Kaggle resources for the Drawing with LLMs competition. Explored public notebooks, Kaggle models, and hidden gems in the forums.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/13_Kaggle_Seasons.pdf"
    },
    {
      title: "Kaggle Seasons Workshop 14",
      date: new Date("2025-04-03"),
      location: "David Sizer LT, Bancroft Building",
      time: "6-8 PM",
      description: "Beginner-friendly session introducing the Kaggle Playground Series and Kaggle Learn. Live coding session building a sample submission using the general Kaggle competition template.",
      pdfUrl: "https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/14_kaggle_seasons.pdf"
    }
  ];

  const sortedWorkshops = [...workshops].sort((a, b) => b.date.getTime() - a.date.getTime());

  const leaderboardData = [
    { rank: 1, team: "Cosine Singularity", level: 3, total: 8.5, feb25: 6, dec24: 0, nov24: 5 },
    { rank: 2, team: "JoFraMo", level: 2, total: 7, feb25: 4, dec24: 0, nov24: 6 },
    { rank: 3, team: "Herb", level: 2, total: 6, feb25: 2, dec24: 6, nov24: 4 },
    { rank: 4, team: "AgEmOl", level: 3, total: 5, feb25: 5, dec24: 0, nov24: 0 },
    { rank: 5, team: "Data Explorers", level: 1, total: 4, feb25: 4, dec24: 0, nov24: 0 },
    { rank: 6, team: "Convolutional Neural Noodles", level: 1, total: 3, feb25: 3, dec24: 0, nov24: 0 },
    { rank: 7, team: "Codeblaizers", level: 2, total: 1.7, feb25: 0, dec24: 5, nov24: 0 },
    { rank: 8, team: "Buckshots", level: 1, total: 1.5, feb25: 0, dec24: 0, nov24: 3 },
    { rank: 9, team: "Big Data Energy", level: 1, total: 1, feb25: 0, dec24: 0, nov24: 2 },
    { rank: 10, team: "Last Minute", level: 2, total: 1, feb25: 1, dec24: 0, nov24: 0 },
    { rank: 11, team: "AMIT_x7S", level: 1, total: 1, feb25: 1, dec24: 0, nov24: 0 },
    { rank: 12, team: "RKRA (ARR)", level: 1, total: 0.5, feb25: 0, dec24: 0, nov24: 1 },
    { rank: 13, team: "Tanisha Srivastava", level: 2, total: 0.5, feb25: 0, dec24: 0, nov24: 1 },
    { rank: 14, team: "The A-team", level: 1, total: 0, feb25: 0, dec24: 0, nov24: 0 },
    { rank: 15, team: "Dunder Mifflin", level: 3, total: 0, feb25: 0, dec24: 0, nov24: 0 },
    { rank: 16, team: "Nameless Team", level: 1, total: 0, feb25: 0, dec24: 0, nov24: 0 },
  ];

  return (
    <div className="min-h-screen bg-black/30 text-white relative overflow-hidden">
      {/* Back Button */}
      <Link href="/what-we-do" className="fixed top-6 mt-24 left-6 z-50">
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-[#FCA311]/20 transition-all duration-300 group">
          <svg
            className="w-6 h-6 text-[#FCA311] group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-gray-300 group-hover:text-[#FCA311] transition-colors">Back</span>
        </button>
      </Link>

      <div className="max-w-6xl mt-32 mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-16 text-center">
          AI/ML Competitions
        </h1>

        {/* Workshop Timeline */}
        <div className="relative pl-8 md:pl-16 mb-20">
          <div className="absolute left-0 md:left-8 top-0 w-1 h-full bg-gradient-to-b from-[#FCA311] to-[#FF6B00] rounded-full" />

          {sortedWorkshops.map((workshop, index) => (
            <div key={index} className="relative mb-12 ml-8 group">
              <div className="absolute -left-11 md:-left-14 top-6 w-8 h-8 bg-gray-900 border-4 border-[#FCA311] rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FCA311]" />

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FCA311]/30 p-8 transition-all duration-300">
                <div className="absolute top-2 right-3 text-[#FCA311] font-bold text-sm bg-gray-900/80 px-4 py-2 rounded-r-full">
                  {workshop.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </div>
                <h2 className="text-2xl font-bold text-[#FCA311] mb-4">{workshop.title}</h2>
                <div className="grid gap-2 text-gray-300">
                  <p>📅 {workshop.date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                  <p>📍 {workshop.location}</p>
                  <p>🕕 {workshop.time}</p>
                </div>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {workshop.description}
                </p>
                <Link href={workshop.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#FCA311]/10 hover:bg-[#FCA311]/20 text-[#FCA311] rounded-full transition-all duration-300">
                    <span>View Slides</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCA311] to-[#FF6B00] mb-8 text-center">
            Teams Leaderboard 2024/2025
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#FCA311]/20 to-[#FF6B00]/20">
                  <th className="p-4 text-left">Rank</th>
                  <th className="p-4 text-left">Team</th>
                  <th className="p-4 text-center">Level</th>
                  <th className="p-4 text-center">Total</th>
                  <th className="p-4 text-center">02/2025</th>
                  <th className="p-4 text-center">12/2024</th>
                  <th className="p-4 text-center">11/2024</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((team, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-[#FCA311]/10 transition-colors">
                    <td className="p-4 font-bold">
                      <span className={
                        `w-8 h-8 rounded-full flex items-center justify-center 
                        ${team.rank === 1 ? 'bg-gradient-to-r from-amber-400 to-yellow-600' :
                          team.rank === 2 ? 'bg-gradient-to-r from-slate-300 to-slate-500' :
                            team.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-800' :
                              'bg-gray-700'}`
                      }>
                        {team.rank}
                      </span>
                    </td>
                    <td className="p-4 font-semibold">{team.team}</td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(team.level)].map((_, i) => (
                          <FaStar key={i} className="w-5 h-5 text-[#FCA311]" />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold">{team.total}</td>
                    <td className="p-4 text-center">{team.feb25}</td>
                    <td className="p-4 text-center">{team.dec24}</td>
                    <td className="p-4 text-center">{team.nov24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
            <h3 className="text-[#FCA311] font-bold mb-2">Notes:</h3>
            <p className="text-gray-300 text-sm">
              Experience Level: Self-assessed experience level (based on our initial assessment form)<br />
              Total: Cumulative points earned throughout the current season (2024/2025)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}