import React from "react";
import Image from "next/image";
import { logos } from "../lib/logos";

const TechList = () => {
  return (
    <div className="relative mx-8 bottom-12 py-6 px-12 flex flex-wrap justify-center gap-4 bg-white max-w-max rounded-2xl shadow-lg">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="relative w-12 transform hover:-translate-y-4 transition-transform duration-200"
        >
          <Image src={logo} alt={`${logo.src}'s logo'`} objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default TechList;
