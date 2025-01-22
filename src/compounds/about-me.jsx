import React from "react";
import image from "../assets/image/Shreyansh.jpg";

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-lg shadow-lg p-4 md:p-10 m-4 md:m-10 w-full max-w-7xl mx-auto"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-96 flex justify-center items-center">
        <img
          src={image}
          alt="Shreyansh Koladiya"
          className="w-full h-full rounded-lg"
        />
      </div>

      {/* About Me Text Section */}
      <div className="w-full md:w-1/2 md:ml-8 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          About Me
        </h1>
        <div className="text-base md:text-lg lg:text-xl">
          <p className="mb-4">
            I'm Shreyansh Koladiya, a web developer with 2+ years of experience.
            I specialize in creating dynamic, responsive, and accessible
            websites using 3D models and modern technologies like HTML, CSS,
            JavaScript, React, and React Three.js.
          </p>
          <p className="mb-4">
            I’m currently expanding my expertise in 3D web design and enjoy
            solving complex technical challenges.
          </p>
          <p className="mb-4">
            Highlight your education, certifications (if any), and a personal
            note about your passion for web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
