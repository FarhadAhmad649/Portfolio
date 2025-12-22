import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/menu_icon.svg";
import crossIcon from "../assets/cross_icon.svg";

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
  return (
    <>
      <div className="sticky top-0 z-30 backdrop-blur-lg h-15 w-full flex justify-between items-center bg-cyan-950 text-white">
        {/* Left Section */}
        <div className="font-bold ml-5 lg:ml-15  text-xl cursor-pointer">
          Farhad_Ahmad
        </div>

        {/* Middle Section */}
        <div className="hidden sm:hidden md:flex gap-3 lg:gap-6 sticky top-0 z-50 backdrop-blur-lg ">
          <a className="font-meduim hover:text-gray-300" href="#home">
            Home
          </a>
          <a className="font-meduim hover:text-gray-300" href="#about">
            About
          </a>
          <a className="font-meduim hover:text-gray-300" href="#projects">
            Projects
          </a>
          <a className="font-meduim hover:text-gray-300" href="#skills">
            Skills
          </a>
          <a className="font-meduim hover:text-gray-300" href="#contact">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 mr-5 lg:mr-15">
          {/* Mobile-Menu */}
          <div className="lg:hidden md:hidden cursor-pointer">
            <img
              className="size-7 "
              src={menuIcon}
              alt="Menu"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          showMobileMenu
            ? "fixed w-60 h-90 z-50 text-white bg-cyan-900 top-0 right-0 bottom-0 transition-all overflow-hidden"
            : "h-0 w-0 overflow-hidden"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            className="size-6"
            src={crossIcon}
            alt="Hide"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col gap-2 px-5 text-lg font-medium items-center mt-5">
          <a
            href="#navbar"
            className="px-5 py-2 rounded-full inline-block hover:shadow-lg active:bg-gray-50 active:text-black"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="px-5 py-2 rounded-full inline-block hover:shadow-lg active:bg-gray-50 active:text-black"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="px-5 py-2 rounded-full inline-block hover:shadow-lg active:bg-gray-50 active:text-black"
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-5 py-2 rounded-full inline-block hover:shadow-lg active:bg-gray-50 active:text-black"
            onClick={() => setShowMobileMenu(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full inline-block hover:shadow-lg active:bg-gray-50"
            onClick={() => setShowMobileMenu(false)}
          >
            Contact
          </a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
