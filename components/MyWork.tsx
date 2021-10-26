import React from "react";
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
        <MyWorkCard />
        <MyWorkCard />
        <MyWorkCard />
        <MyWorkCard />
      </div>
    </section>
  );
};

export default MyWork;
