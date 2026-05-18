import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: (
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        { name: "React.js", details: "Hooks, Components, Routing" },
        { name: "JavaScript", details: "ES6+" },
        { name: "Tailwind CSS", details: "Utility-first framework" },
        { name: "Responsive UI", details: "Mobile-first design" },
      ],
    },
    {
      title: "Backend",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: [
        { name: "Node.js", details: "JavaScript runtime" },
        { name: "Express.js", details: "Web framework" },
        { name: "REST APIs", details: "Architecture & integration" },
        { name: "Authentication", details: "JWT, Security" },
      ],
    },
    {
      title: "Database",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: [
        { name: "MongoDB", details: "NoSQL database management" },
        { name: "Mongoose", details: "Schemas, Models, Queries" },
      ],
    },
    {
      title: "Tools",
      icon: (
        <svg
          className="w-6 h-6 text-rose-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        { name: "Git & GitHub", details: "Version control & collaboration" },
        { name: "Postman", details: "API testing & documentation" },
        { name: "VS Code", details: "Primary code editor" },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 bg-[#050d1a] font-['DM_Sans',sans-serif]"
    >
      {/* Background decoration */}
      <div className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[80px] -right-[80px] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-[1100px] w-full z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block tracking-[4px] text-[11px] font-semibold text-cyan-500 mb-3 uppercase">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-sky-50 m-0 mb-4 leading-[1.1]">
            My{" "}
            <span className="bg-gradient-to-br from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="block w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4]" />
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/5 border border-cyan-500/15 rounded-[24px] p-8 backdrop-blur-md hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-500 animate-fade-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-indigo-500/20">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-sky-50">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                      <h4 className="text-[1.05rem] font-semibold text-sky-100">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 pl-3.5">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </section>
  );
}
