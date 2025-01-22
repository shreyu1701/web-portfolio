import React from "react";
import Project from "../compounds/Projects";
import healthyFeast from "../assets/image/Healthy-Feast.png";
import codeedoc from "../assets/image/Codeedoc.png";
import homehealthdevicedatalogger from "../assets/image/Login.png";
import waytogreen from "../assets/image/WayToGreen.png";

function Portfolio() {
  return (
    <div className="p-6 sm:p-12">
      <h1 className="text-3xl font-bold text-center mb-8">Portfolio</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Project
          image={healthyFeast}
          title="Healthy Feast"
          description="A platform for healthy food recipes."
          website={"https://healthy-feast.vercel.app/"}
          sourceCode={"https://github.com/shreyu1701/healthyFeast/"}
          tags={["HTML", "CSS", "JavaScript", "ExpressJs", "NodeJs"]}
        />

        <Project
          image={codeedoc}
          title="Codeedoc"
          description="A platform for sharing code snippets."
          website={"https://codeedoc.vercel.app/"}
          sourceCode={"https://github.com/shreyu1701/codeedoc"}
          tags={["React", "TailwindCSS"]}
        />
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
            "Client-Server Architecture",
            "Oracle Database",
          ]}
        />
        <Project
          image={waytogreen}
          title="Way To Green"
          description="A platform for sharing eco-friendly tips."
          website={"https://waytogreen.vercel.app/"}
          sourceCode={"https://github.com/shreyu1701/Waytogreen"}
          tags={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </div>
  );
}

export default Portfolio;
