import React from "react";
import Image from "next/image";
import profilePic from "../lib/images/profile-pic.jpg";
import HeroBackground from "./HeroBackground";
import { SectionProps } from "../types";

const Hero: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <>
      <section
        id="hero"
        onWheel={handleScroll}
        className="max-w-6xl h-screen mx-auto lg:py-32 pt-24 px-16 xl:px-12"
      >
        <HeroBackground />
        <div className="flex flex-col justify-between items-center  gap-8 lg:flex-row lg:items-end">
          <h1 className="bg-gradient-to-br from-black to-cyan via-purple text-transparent bg-clip-text">
            Hi I&#39;m Théo!
            <br /> Front-End Developer
          </h1>
          <div className="relative">
            <Image
              src={profilePic}
              alt={`Theo Leveque's Portrait`}
              placeholder="blur"
            />
            <div className="background-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
