import React from "react";
import Image from "next/image";
import Link from "next/link";
import cacheImg from "../public/assets/projects/cache.png";
import weatherImg from "../public/assets/projects/weatherly2.png";
import rpsImg from "../public/assets/projects/rps.png";
import lmsImg from "../public/assets/projects/uml.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherImg}
            projectUrl="https://github.com/brij-desaii/weatherApp"
            techStack="React JS"
          />
          <ProjectItem
            title="Rock Paper Scissors"
            backgroundImg={rpsImg}
            projectUrl="https://github.com/brij-desaii/rock-paper-scissors"
            techStack="Vanilla JavaScript"
          />
          <ProjectItem
            title="Course Management System"
            backgroundImg={lmsImg}
            projectUrl="https://github.com/brij-desaii/FakeLMS"
            techStack="JDBC(Java), MySQL"
          />
          <ProjectItem
            title="Cache Simulator"
            backgroundImg={cacheImg}
            projectUrl="/https://github.com/brij-desaii/Cache-Simulator"
            techStack="Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
