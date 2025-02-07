import React from "react";
import { motion } from "framer-motion"; // Importing motion
import image from "../assets/image/Shreyansh.jpg";

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-lg shadow-lg p-6 md:p-10  sm:p-12 w-full"
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 h-64 md:h-96 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Trigger animation once when the image enters the viewport
        transition={{ duration: 5.0, type: "spring", stiffness: 50 }}
      >
        <img
          src={image}
          alt="Shreyansh Koladiya"
          className="w-full h-full rounded-lg"
        />
      </motion.div>

      {/* About Me Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:ml-8 text-center md:text-left mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Trigger animation once when the text enters the viewport
        transition={{ duration: 5.0, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          About Me
        </h1>
        <div className="text-base md:text-lg lg:text-xl">
          <p className="mb-4">
            Hi, I’m Shreyansh Koladiya, a passionate Web Developer with
            expertise in React framework. With over 2 years of experience in the
            IT industry, I specialize in crafting user-centric and visually
            appealing websites, delivering engaging and seamless digital
            experiences.
          </p>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">
            My Journey
          </h2>
          <p className="mb-4">
            I am currently pursuing a Postgraduate Diploma in Information
            Technology Solutions at Humber College. Throughout my career, I have
            worked on various major projects contributing to innovative and
            high-impact solutions. Additionally, I’ve been actively involved in
            volunteering work and Currently served as a Community Connector at
            Humber College, fostering engagement and collaboration.
          </p>
          <p className="mb-4">
            I am a lifelong learner, always seeking to expand my knowledge and
            skills in the ever-evolving
          </p>
          <h2 className="text-2xl text-orange-500 font-bold mb-4">
            Let’s Connect!
          </h2>
          <p className="mb-4">
            📬 Open to collaborations, freelance work, and networking
            opportunities! <br /> 🌐{" "}
            <a href="https://shreyanshkoladiya.com">shreyanshkoladiya.com</a>{" "}
            <br />
            📧{" "}
            <a href="mailto:shreyanshkoladiyawork@gmail.com">
              shreyanshkoladiyawork@gmail.com
            </a>{" "}
            <br />
            🔗{" "}
            <a href="www.linkedin.com/in/shreyansh-koladiya-38a2b71a3">
              LinkedIn - Shreyansh Koladiya
            </a>
            <br />
            🔗 <a href="https://github.com/shreyu1701">GitHub - Shreyu1701</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
