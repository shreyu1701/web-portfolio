import React from "react";
import { motion } from "framer-motion"; // Importing motion
import Project from "../compounds/Projects";
import healthyFeast from "../assets/image/Healthy-Feast.png";
import codeedoc from "../assets/image/Codeedoc.png";
import homehealthdevicedatalogger from "../assets/image/Login.png";
import waytogreen from "../assets/image/WayToGreen.png";

function Portfolio() {
  return (
    <div id="portfolio" className="p-6 sm:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-4">
        Portfolio
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Animate each Project component on scroll */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }} // Animation on hover
        >
          <Project
            image={healthyFeast}
            title="Healthy Feast"
            description="A platform for healthy food recipes."
            website={"https://healthy-feast.vercel.app/"}
            sourceCode={"https://github.com/shreyu1701/healthyFeast/"}
            tags={["HTML", "CSS", "JavaScript", "ExpressJs", "NodeJs"]}
          />
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }} // Animation on hover
        >
          <Project
            image={codeedoc}
            title="Codeedoc"
            description="A platform for sharing code snippets."
            website={"https://codeedoc.vercel.app/"}
            sourceCode={"https://github.com/shreyu1701/codeedoc"}
            tags={["HTML", "TailwindCSS", "ReactJs"]}
          />
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }} // Animation on hover
        >
          <Project
            image={homehealthdevicedatalogger}
            title="Home Health Device Data Logger"
            description={
              "A device that logs health data and sends it to a server."
            }
            website={"https://tinyurl.com/Under-Maintenance"}
            sourceCode={
              "https://github.com/shreyu1701/Home-Health-Device-Data-Loggers"
            }
            tags={[
              "Java",
              "FXML",
              "Oracle Database",
              "Client-Server Architecture",
            ]}
          />
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Trigger the animation once when it comes into view
          transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }} // Animation on hover
        >
          <Project
            image={waytogreen}
            title="Way To Green"
            description="A platform for sharing eco-friendly tips."
            website={"https://waytogreen.vercel.app/"}
            sourceCode={"https://github.com/shreyu1701/Waytogreen"}
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
