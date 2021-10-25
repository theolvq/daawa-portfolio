import React, { WheelEventHandler } from "react";
import Image from "next/image";
import profilePic from "../lib/images/profile-pic.jpg";
import profilePicShadow from "../lib/images/profile-pic-shadow.png";
import HeroBackground from "./HeroBackground";
import { SectionProps } from "../types";

const Hero: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <>
      <HeroBackground />
      <section
        id="hero"
        onWheel={handleScroll}
        className=" max-w-6xl min-h-screen mx-auto lg:py-32 py-8"
      >
        <div className="flex flex-col justify-between items-center gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="bg-gradient-to-br from-black to-cyan via-purple text-transparent bg-clip-text">
              Hi&#39;m Théo!
              <br /> Front-End Developer
            </h1>
          </div>
          <div className="relative ">
            <Image src={profilePic} alt={`Theo Leveque's Portrait`}></Image>
            <div className="background-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
