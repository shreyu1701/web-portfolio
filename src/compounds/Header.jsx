import React, { useState, useEffect } from "react";
import logo from "../assets/logo/SK-logo-50px-Black.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="p-4 px-6 md:px-10 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            loading="lazy"
            alt="SK Logo"
            className="w-12 h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#portfolio"
            className="text-black font-medium hover:text-orange-500 transition"
          >
            Portfolio
          </a>
          <a
            href="#aboutme"
            className="text-black font-medium hover:text-orange-500 transition"
          >
            About Me
          </a>
          <a
            href="#services"
            className="text-black font-medium hover:text-orange-500 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-black font-medium hover:text-orange-500 transition"
          >
            Contact Me
          </a>
        </nav>

        {/* Resume Button (Visible on all screen sizes) */}
        <a
          href="https://drive.google.com/file/d/1SMyfHeWB1FLjs9FO8KK0oy5ZSsapXcoU/view?usp=sharing"
          className="hidden sm:inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-orange-500 transition-transform transform hover:scale-105"
        >
          Download Resume
        </a>

        {/* Floating Mobile Menu Button */}
        <button
          className={`md:hidden fixed top-4 right-4 p-2 rounded-full shadow-lg transition ${
            isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-8 h-8 text-black"
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
      </div>

      {/* Mobile Menu (Dropdown) */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center bg-white shadow-lg absolute top-16 left-0 w-full p-5 space-y-4 transition-all`}
      >
        <a
          href="#portfolio"
          className="text-black font-medium hover:text-orange-500 transition"
          onClick={toggleMenu}
        >
          Portfolio
        </a>
        <a
          href="#aboutme"
          className="text-black font-medium hover:text-orange-500 transition"
          onClick={toggleMenu}
        >
          About Me
        </a>
        <a
          href="#services"
          className="text-black font-medium hover:text-orange-500 transition"
          onClick={toggleMenu}
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-black font-medium hover:text-orange-500 transition"
          onClick={toggleMenu}
        >
          Contact Me
        </a>
        <a
          href="https://drive.google.com/file/d/1SMyfHeWB1FLjs9FO8KK0oy5ZSsapXcoU/view?usp=sharing"
          className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-orange-500 transition-transform transform hover:scale-105"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
