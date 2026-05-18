export default function About() {
  const skills = [
    { label: "HTML & CSS" },
    { label: "JavaScript" },
    { label: "Reactjs" },
    { label: "Tailwind CSS" },
    { label: "Git & GitHub" },
    { label: "Nodejs" },
    { label: "Expressjs" },
    { label: "Mongodb" },
  ];

  return (
    <section
      id="About"
      className="relative overflow-hidden py-[100px] px-6 bg-[#050d1a] font-['DM_Sans',sans-serif]"
    >
      {/* Background decoration */}
      <div className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[80px] -right-[80px] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block tracking-[4px] text-[11px] font-semibold text-cyan-500 mb-3 uppercase">
            GET TO KNOW ME
          </span>
          <h2 className="font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-sky-50 m-0 mb-4 leading-[1.1]">
            About{" "}
            <span className="bg-gradient-to-br from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="block w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4]" />
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left — Bio Card (Only Text) */}
          <div className="bg-white/5 border border-cyan-500/15 rounded-[20px] p-8 md:p-9 backdrop-blur-md animate-fade-up delay-100">
            <div className="relative w-20 h-20 mb-5">
              <div className="absolute inset-[-6px] rounded-full border-2 border-cyan-500 opacity-50 animate-[pulse-ring_2.5s_ease-out_infinite]" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                <span className="font-['Syne',sans-serif] text-3xl font-extrabold text-white">
                  A
                </span>
              </div>
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#050d1a] shadow-[0_0_8px_#22c55e]" />
            </div>

            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-sky-100 mb-1.5">
              Front-End Developer
            </h3>
            <p className="text-sm text-slate-400 mb-5 flex items-center gap-1">
              <span className="text-base">📍</span>
              Oghi, District Mansehra, KPK
            </p>

            <p className="text-[0.95rem] text-slate-400 leading-[1.8] m-0">
              I’m a MERN stack developer who builds end-to-end web applications
              using React, Node.js, Express, and MongoDB. I focus on creating
              responsive, intuitive user interfaces backed by scalable and
              well-structured backend systems. I enjoy solving real-world
              problems through clean code, thoughtful architecture, and modern
              web technologies.
            </p>
          </div>

          {/* Right — Skills & Stats */}
          <div className="flex flex-col gap-8 animate-fade-up delay-200">
            {/* Compact Skills Section */}
            <div>
              <h3 className="font-['Syne',sans-serif] text-lg font-bold text-sky-100 mb-4 tracking-wide">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-indigo-500/20 rounded-xl hover:border-cyan-500/50 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                      {s.label}
                    </span>
                    {/* <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                      {s.level}%
                    </span> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row (Forced into a single line with flex-row) */}
            <div className="flex flex-row w-full gap-3">
              {[
                { num: "10+", label: "Projects Built" },
                { num: "3+", label: "Years Coding" },
                { num: "100%", label: "Passion Driven" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 flex flex-col items-center justify-center p-4 bg-white/5 border border-indigo-500/20 rounded-2xl"
                >
                  <span className="font-['Syne',sans-serif] text-2xl font-extrabold bg-gradient-to-br from-cyan-500 to-indigo-400 bg-clip-text text-transparent">
                    {s.num}
                  </span>
                  <span className="text-[0.7rem] text-slate-500 text-center mt-1 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: .6; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
}
