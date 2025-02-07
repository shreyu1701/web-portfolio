import React from "react";
import { motion } from "framer-motion";
import webdevelopment from "../assets/image/Web-Development.jpg";
import uiuxdesign from "../assets/image/UI-UX-Design.jpg";
import digitalmarketing from "../assets/image/Digital-Marketing.jpg";

function Services() {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id="services"
      className="services px-4 sm:px-6 lg:px-8 py-12 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the component is in view
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-4"
        variants={itemVariants}
      >
        Our Services
      </motion.h1>
      <motion.div
        className=" grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
      >
        {/* Web Development */}
        <motion.div
          className="shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow transform hover:scale-105"
          variants={itemVariants}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
        >
          <img
            src={webdevelopment}
            alt="Web Development"
            className="w-full h-64 sm:h-80 md:h-72 lg:h-64 xl:h-72 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Web Development
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We create responsive websites using modern technologies like HTML,
            CSS, JavaScript, React, and React Three.js.
          </p>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          className="shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow transform hover:scale-105"
          variants={itemVariants}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
        >
          <img
            src={uiuxdesign}
            alt="UI/UX Design"
            className="w-full h-64 sm:h-80 md:h-72 lg:h-64 xl:h-72 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            UI/UX Design
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We create user-friendly and visually appealing designs using Figma,
            Adobe XD, and Sketch.
          </p>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div
          className=" shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow transform hover:scale-105"
          variants={itemVariants}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
        >
          <img
            src={digitalmarketing}
            alt="Digital Marketing"
            className="w-full h-64 sm:h-80 md:h-72 lg:h-64 xl:h-72 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Digital Marketing
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We provide digital marketing services to help you reach your target
            audience and increase your online presence.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
