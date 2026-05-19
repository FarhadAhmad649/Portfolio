import React from "react";
import contact from "../assets/contact.jpg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

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
                href="https://wa.me/923429223649?text=Hello%20I%20visited%20your%20portfolio"
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                WhatsApp
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="https://www.facebook.com/yourusername"
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <FaFacebook className="w-5 h-5 text-green-500" />
                Facebook
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                <FaInstagram className="w-5 h-5 text-green-500" />
                Instagram
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white/5 border border-cyan-500/15 rounded-[24px] p-8 backdrop-blur-md animate-fade-up delay-200">
            <form className="space-y-2">
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
