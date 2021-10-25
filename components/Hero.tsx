import React, { WheelEventHandler } from "react";
import Image from "next/image";
import profilePic from "../lib/images/profile-pic.jpg";
import profilePicShadow from "../lib/images/profile-pic-shadow.png";
import HeroBackground from "./HeroBackground";

interface HeroProps {
  handleScroll: WheelEventHandler<HTMLElement>;
}

const Home: React.FC<HeroProps> = ({ handleScroll }) => {
  return (
    <>
      <HeroBackground />
      <section
        id="top"
        onWheel={handleScroll}
        className="max-w-6xl min-h-screen mx-auto py-32"
      >
        <div className="flex justify-between items-end">
          <div>
            <h1 className=" bg-gradient-to-br from-black to-cyan via-purple text-transparent bg-clip-text">
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

export default Home;
