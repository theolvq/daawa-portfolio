import React from "react";
import Image from "next/image";
import profilePic from "../lib/images/profile-pic.jpg";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto my-12">
      <div className="flex justify-between items-end ">
        <div>
          <h1 className=" bg-gradient-to-br from-black to-cyan via-purple text-transparent bg-clip-text">
            Hi&#39;m Théo!
            <br /> Front-End Developer
          </h1>
        </div>
        <div>
          <Image src={profilePic} alt={`Theo Leveque's Portrait`} />
        </div>
      </div>
    </section>
  );
};

export default Home;
