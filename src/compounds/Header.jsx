import React, { useState } from "react";
import logo from "../assets/logo/SK-logo-50px-Black.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="p-4 px-10">
      <div className="flex items-center justify-between mb-8">
        <a href="/">
          <img src={logo} alt="SK Logo" />
        </a>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="sm:hidden focus:outline-none fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row items-center sm:space-x-4 fixed sm:static top-16 right-4 bg-white p-4 sm:p-0 rounded-lg shadow-lg sm:shadow-none z-40`}
        >
          <a
            href="#portfolio"
            className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Portfolio
          </a>
          <a
            href="#aboutme"
            className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            About me
          </a>
          <a
            href="#services"
            className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Contact me
          </a>

          {/* dark mode */}
          {/* <Switcher /> */}
        </nav>
        <button className="max-sm:block focus:outline-none pr-6">
          <a
            href="https://drive.google.com/file/d/1SMyfHeWB1FLjs9FO8KK0oy5ZSsapXcoU/view?usp=sharing"
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
