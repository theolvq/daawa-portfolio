import React from "react";
import { SectionProps } from "../types";
import MyWorkCard from "./MyWorkCard";

const MyWork: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <section id="my-work" onWheel={handleScroll} className="max-w-6xl mx-auto">
      <h2 className="uppercase py-16 text-center">My Work</h2>
      <div>
        <MyWorkCard />
        <MyWorkCard />
        <MyWorkCard />
        <MyWorkCard />
      </div>
    </section>
  );
};

export default MyWork;
