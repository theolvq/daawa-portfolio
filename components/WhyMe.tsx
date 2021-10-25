import React, { useRef, WheelEventHandler } from "react";
import TechList from "./TechList";
import WhyMeList from "./WhyMeList";

interface WhyMeProps {
  handleScroll: WheelEventHandler<HTMLElement>;
}

const WhyMe: React.FC<WhyMeProps> = ({ handleScroll }) => {
  return (
    <section onWheel={handleScroll} id="about">
      <div className="bg-black text-white text-center py-16">
        <h2 className="uppercase py-16">Why Me?</h2>
        <WhyMeList />

        <h3>The Tech I Work With</h3>
      </div>
      <div className="flex flex-col items-center">
        <TechList />
      </div>
    </section>
  );
};

export default WhyMe;
