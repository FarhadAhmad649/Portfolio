import React from "react";
import contact from "../assets/contact.jpg";

function Contact() {
  return (
    <section
      id="Contact"
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
            GET IN TOUCH
          </span>
          <h2 className="font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-sky-50 m-0 mb-4 leading-[1.1]">
            Contact{" "}
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

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left Side: Info & Image */}
          <div className="flex flex-col gap-6 animate-fade-up delay-100">
            <div>
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-sky-100 mb-2">
                Let's Connect
              </h3>
              <p className="text-[0.95rem] text-slate-400 leading-[1.8]">
                Feel free to reach out for collaborations, full-stack
                opportunities, or just to say hi. I'm always open to discussing
                new projects and creative ideas.
              </p>
            </div>

            {/* Image Box */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={contact}
                alt="Contact placeholder"
                className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-2">
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white/5 border border-cyan-500/15 rounded-[24px] p-8 backdrop-blur-md animate-fade-up delay-200">
            <form className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#050d1a]/50 border border-indigo-500/20 rounded-xl px-4 py-3 text-sky-50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#050d1a]/50 border border-indigo-500/20 rounded-xl px-4 py-3 text-sky-50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-[#050d1a]/50 border border-indigo-500/20 rounded-xl px-4 py-3 text-sky-50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your project..."
                  rows="5"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
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
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
}

export default Contact;
