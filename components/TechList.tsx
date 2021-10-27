import React from "react";
import Image from "next/image";
import { logos } from "../lib/logos";

const TechList = () => {
  return (
    <div className="relative bottom-32 sm:bottom-20 lg:bottom-12 py-6 px-8 mx-4 flex flex-wrap justify-center gap-2 bg-white-trans backdrop-filter backdrop-blur-md max-w-6xl rounded-2xl shadow-lg">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="w-14 m-auto transform hover:-translate-y-4 transition-transform duration-200"
        >
          <Image
            src={logo}
            alt={`${logo.src}'s logo'`}
            objectFit="cover"
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
};

export default TechList;
