import React from "react";
import { useState } from "react";
import logo from "../assets/logo/SK-logo-50px-Black.svg";
import Switcher from "./switcher";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 px-10">
      <div className="flex items-center justify-between max-sm:flex-row max-lg:flex-row mb-8">
        <a className="" href="/">
          <img src={logo} alt="SK Logo" />
        </a>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="sm:hidden focus:outline-none fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex max-sm:flex-col sm:items-center sm:space-x-4 max-sm:fixed max-sm:top-16 max-sm:right-4 max-sm:z-40 max-sm:bg-white max-sm:p-4 max-sm:rounded-lg max-sm:shadow-lg`}
        >
          <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:transition-transform hover:transform hover:scale-105">
            <a href="#aboutme"> About me </a>
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:transition-transform hover:transform hover:scale-105">
            Portfolio
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:transition-transform hover:transform hover:scale-105">
            Services
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:transition-transform hover:transform hover:scale-105">
            Contact me
          </button>
          <Switcher />
        </div>
      </div>
    </div>
  );
}

export default Header;
