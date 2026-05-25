import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#050d1a]/80 backdrop-blur-md border-b border-cyan-500/15 font-['DM_Sans',sans-serif] transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="relative inline-flex items-center justify-center cursor-pointer group p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />
            <img
              src={assets.logo}
              alt="logo"
              className="h-14 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[0.95rem] font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link.name}
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowMobileMenu(true)}
              className="text-cyan-500 hover:text-cyan-400 transition-colors focus:outline-none p-2 -mr-2"
              aria-label="Open Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Darkens the background) */}
      <div
        className={`fixed inset-0 bg-[#050d1a]/80 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMobileMenu(false)}
      />

      {/* Mobile Menu Drawer (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-[#0a1526] border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Header */}
        <div className="h-20 flex items-center justify-end px-6 border-b border-cyan-500/10">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none p-2 -mr-2 bg-white/5 rounded-full"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-2 p-6 font-['DM_Sans',sans-serif]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-300 px-4 py-3 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 active:scale-95"
              onClick={() => setShowMobileMenu(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-auto p-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>
      </div>

      {/* Ensure external fonts are loaded for this component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </>
  );
}

export default Navbar;
