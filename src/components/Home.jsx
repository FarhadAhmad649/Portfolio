import React from "react";
import projectImage from "../assets/Profile_full.png";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-12 w-full max-w-6xl text-cyan-950">
        <div className="flex flex-col justify-center mt-4 sm:mt-0">
          <p className="text-base sm:text-lg text-cyan-950 opacity-60 mb-2 sm:mb-3">
            FRONT END WEB DEVELOPER
          </p>
          <h2 className="nameShadow text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-cyan-950 mb-2 sm:mb-3">
            Hi, I'm Farhad.
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold opacity-90 mb-2 sm:mb-3">
            I build modern, responsive web apps.
          </h3>
          <p className="mb-2 sm:mb-3">
            Passionate about clean UI, performance and accessible design.
            Seeking a front-end internship to grow and contribute
          </p>

          <div className="mt-4 mb-4 flex flex-wrap gap-2 sm:gap-3">
            <a
              className="px-5 py-2 border-2 border-gray-200 rounded-xl text-sm sm:text-base hover:bg-gray-100 transition"
              href="#Contact"
            >
              Contact Me
            </a>
            <a
              className="bg-cyan-950 px-5 py-2 rounded-xl text-white shadow-md text-sm sm:text-base hover:bg-cyan-900 transition"
              href="#Projects"
            >
              View Projects
            </a>
            <a
              className="px-5 py-2 border-2 border-gray-200 rounded-xl text-sm sm:text-base hover:bg-gray-100 transition"
              href="#Projects"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              className="underline cursor-pointer"
              href="https://github.com/FarhadAhmad649"
              target="_blank"
            >
              Github
            </a>
            <a
              className="underline cursor-pointer"
              href="farhadahmadhassanzai@gmail.com"
            >
              Email
            </a>
            <a
              className="underline cursor-pointer"
              href="https://www.linkedin.com/in/farhad-ahmad-597820336/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto border-2 rounded-3xl object-cover"
            src={projectImage}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
