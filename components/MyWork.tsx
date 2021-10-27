import React from "react";
import projects from "../lib/projects";
import { SectionProps } from "../types";
import MyWorkCard from "./MyWorkCard";

const MyWork: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <section
      id="my-work"
      onWheel={handleScroll}
      className="max-w-6xl mx-auto my-16 "
    >
      <h2>My Work</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <MyWorkCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default MyWork;
