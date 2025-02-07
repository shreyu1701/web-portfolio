import React from "react";
import { motion } from "framer-motion";
import Project from "../compounds/Projects";
import healthyFeast from "../assets/image/Healthy-Feast.png";
import codeedoc from "../assets/image/Codeedoc.png";
import homehealthdevicedatalogger from "../assets/image/Login.png";
import waytogreen from "../assets/image/WayToGreen.png";

function Portfolio() {
  return (
    <div id="portfolio" className="p-6 sm:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
        Portfolio
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            image: healthyFeast,
            title: "Healthy Feast",
            description: "A platform for healthy food recipes.",
            website: "https://healthy-feast.vercel.app/",
            sourceCode: "https://github.com/shreyu1701/healthyFeast/",
            tags: ["HTML", "CSS", "JavaScript", "ExpressJs", "NodeJs"],
          },
          {
            image: codeedoc,
            title: "Codeedoc",
            description: "A platform for sharing code snippets.",
            website: "https://codeedoc.vercel.app/",
            sourceCode: "https://github.com/shreyu1701/codeedoc",
            tags: ["HTML", "TailwindCSS", "ReactJs"],
          },
          {
            image: homehealthdevicedatalogger,
            title: "Home Health Device Data Logger",
            description:
              "A device that logs health data and sends it to a server.",
            website: "https://tinyurl.com/Under-Maintenance",
            sourceCode:
              "https://github.com/shreyu1701/Home-Health-Device-Data-Loggers",
            tags: [
              "Java",
              "FXML",
              "Oracle Database",
              "Client-Server Architecture",
            ],
          },
          {
            image: waytogreen,
            title: "Way To Green",
            description: "A platform for sharing eco-friendly tips.",
            website: "https://waytogreen.vercel.app/",
            sourceCode: "https://github.com/shreyu1701/Waytogreen",
            tags: ["HTML", "CSS", "JavaScript"],
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              transition: { type: "spring", stiffness: 120, damping: 15 },
            }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
