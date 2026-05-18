import React from "react";
import projects from "../assets/projects";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative min-h-screen py-20 px-6 bg-[#050d1a] font-['DM_Sans',sans-serif] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[80px] -right-[80px] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block tracking-[4px] text-[11px] font-semibold text-cyan-500 mb-3 uppercase">
            MY LATEST WORK
          </span>
          <h2 className="font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-sky-50 m-0 mb-4 leading-[1.1]">
            Featured{" "}
            <span className="bg-gradient-to-br from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="block w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4]" />
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white/5 border border-cyan-500/15 rounded-[24px] overflow-hidden backdrop-blur-md hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                {/* Dark gradient overlay to blend image into the dark card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] to-transparent z-10 opacity-80" />

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0a192f] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <svg
                      className="w-12 h-12 text-cyan-500/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Hover Action Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#050d1a]/40 backdrop-blur-sm">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow relative z-20 -mt-6">
                <h3 className="font-['Syne',sans-serif] font-bold text-xl text-sky-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-slate-400 leading-[1.6] mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Optional: Render tech stack pills if you add a 'tech' array to your projects.js data */}
                {item.tech && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-indigo-500/20 rounded-md text-xs font-medium text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
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
