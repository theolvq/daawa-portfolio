import React from "react";
import Image from "next/image";
import screenshot from "../lib/images/weather-app-desktop-4:3.png";
import projects from "../lib/projects";

interface CardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData;
    repoUrl: string;
    hostedUrl: string;
  };
}

const MyWorkCard: React.FC<CardProps> = ({ project }) => {
  const { title, description, technologies, image, repoUrl, hostedUrl } =
    project;
  return (
    <section className="card">
      <div className="pb-4 px-8 w-full">
        <h3 className="text-purple tracking-widest leading-none">{title}</h3>
        <p className="mb-8 text-sm hidden sm:block  ">{description}</p>
        <p className="sm:text-lg text-sm text-black font-semibold tracking-wide mb-8">
          {technologies.map((techno, index: Number) => (
            <span key={techno}>
              <span>{techno}</span> {index !== technologies.length - 1 && " / "}{" "}
            </span>
          ))}
        </p>
        <div className="flex gap-8 justify-center items-center">
          <a
            className="card-btn"
            href={hostedUrl}
            target={title !== "My Personal Website" ? "_blank" : "_top"}
            rel="noopener noreferrer"
          >
            Live Preview
          </a>{" "}
          <a
            className="card-btn"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
      <div className="relative w-full md:shadow-lg">
        <Image
          src={image}
          alt="Screenshot of a weather application"
          className="rounded-lg"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default MyWorkCard;
