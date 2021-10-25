import React, { useRef, WheelEventHandler } from "react";
import { SectionProps } from "../types";
import TechList from "./TechList";
import WhyMeList from "./WhyMeList";

const WhyMe: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <section onWheel={handleScroll} id="why-me">
      <div className="bg-black text-white text-center py-16">
        <h2 className="uppercase py-16">Why Me?</h2>
        <WhyMeList />

        <h3 className="pb-32">The Tech I Work With</h3>
      </div>
      <div className="flex flex-col items-center">
        <TechList />
      </div>
    </section>
  );
};

export default WhyMe;
