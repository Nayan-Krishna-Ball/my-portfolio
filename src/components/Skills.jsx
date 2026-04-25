import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("experience");
  const skillsData = [
    { name: "React.js", percent: 85, color: "bg-blue-500" },
    { name: "Next.js", percent: 80, color: "bg-black" },
    { name: "JavaScript", percent: 90, color: "bg-yellow-400" },
    { name: "Tailwind CSS", percent: 80, color: "bg-cyan-400" },
    { name: "Node.js", percent: 75, color: "bg-red-500" },
    { name: "Express.js", percent: 80, color: "bg-gray-700" },
    { name: "MongoDB", percent: 70, color: "bg-green-600" },
    { name: "Git & GitHub", percent: 90, color: "bg-orange-500" },
  ];

  const experienceData = [
    {
      role: "Frontend Developer (Projects)",
      company: "Self Learning & Personal Projects",
      years: "2023 - Present",
    },
    {
      role: "Full Stack Projects",
      company: "E-commerce & Chat Applications",
      years: "2025 - Present",
    },
  ];

  const educationData = [
    {
      role: "BSc in Computer Science & Engineering",
      company: "Premier University, Chittagong",
      years: "2018 - 2022",
    },
    {
      role: "Web Development (Self Learning)",
      company: "Online Platforms & Practice",
      years: "2022 - Present",
    },
  ];

  return (
    <div className="py-24 pb-20" id="skill">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Skills */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Skills & Experience
            </h1>

            <p className="mb-8 text-[#555] leading-relaxed text-sm">
              I work with modern web technologies to build fast, scalable, and
              user-friendly applications. Here are some of the tools and
              technologies I use regularly.
            </p>

            <h3 className="text-xl font-semibold mb-6 text-dark">My Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {skillsData.map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <div className="flex justify-between mb-2">
                    <h6 className="font-bold text-dark">{skill.name}</h6>
                    <h6 className="font-bold text-dark">{skill.percent}%</h6>
                  </div>
                  <div className="h-[5px] rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${skill.color}`}
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tabs */}
          <div className="lg:w-1/2">
            <div className="flex mb-8 bg-gray-100 rounded-xl overflow-hidden">
              <button
                className={`w-1/2 py-3 text-sm font-medium ${
                  activeTab === "experience"
                    ? "bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`w-1/2 py-3 text-sm font-medium ${
                  activeTab === "education"
                    ? "bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            <div className="space-y-6">
              {(activeTab === "experience"
                ? experienceData
                : educationData
              ).map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border hover:shadow-md transition"
                >
                  <h5 className="font-bold text-dark text-lg">{item.role}</h5>
                  <p className="text-primary text-sm font-medium">
                    {item.years}
                  </p>
                  <p className="text-[#555] text-sm">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
