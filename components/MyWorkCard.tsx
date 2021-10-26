import React from "react";
import Image from "next/image";
import screenshot from "../lib/images/weather-app-desktop-4:3.png";

const MyWorkCard = () => {
  return (
    <section className="relative sm:flex even:flex-row-reverse items-center space-y-4 gap-8 lg:gap-16 sm:my-16 mx-8 lg:mx-auto">
      <div className="sm:static absolute bottom-0 z-40 py-2 px-8 w-full bg-white-trans backdrop-filter backdrop-blur-md">
        <h3 className="text-purple tracking-widest">Project Title</h3>
        <p className="">React + TailwindCSS + OpenWeather API</p>
      </div>
      <div className="relative shadow-lg w-full rounded-xl">
        <Image
          src={screenshot}
          alt="Screenshot of a weather application"
          className="rounded-xl"
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default MyWorkCard;
