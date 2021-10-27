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
    <section className="relative sm:flex even:flex-row-reverse items-center space-y-4 gap-8 lg:gap-16 sm:my-16 mx-8 lg:mx-auto">
      <div className="sm:static absolute bottom-0 z-40 py-2 px-8 w-full bg-white-trans backdrop-filter backdrop-blur-md">
        <h3 className="text-purple tracking-widest leading-none">{title}</h3>
        <p className="mb-8 text-sm hidden sm:block  ">{description}</p>
        <p className="sm:text-lg text-sm text-black font-semibold tracking-wide mb-8">
          {technologies.map((techno, index: Number) => (
            <span key={techno}>
              <span>{techno}</span> {index !== technologies.length - 1 && " / "}{" "}
            </span>
          ))}
        </p>
        <div className="flex gap-8 justify-center">
          <a
            className="bg-cyan px-6 py-3 rounded-lg text-black font-semibold shadow-sm  hover:scale-110 hover:shadow-lg transition-all duration-150"
            href={hostedUrl}
            target={title !== "My Personal Website" ? "_blank" : "_top"}
            rel="noopener noreferrer"
          >
            Live Preview
          </a>{" "}
          <a
            className="bg-cyan px-6 py-3 rounded-lg text-black font-semibold shadow-sm  hover:scale-110 hover:shadow-lg transition-all duration-150"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
      <div className="relative shadow-lg w-full rounded-xl">
        <Image
          src={image}
          alt="Screenshot of a weather application"
          className="rounded-xl"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default MyWorkCard;
// title: "Weather App",
// description:
//   "A weather app built with Open Weather API, search for your city!",
// technologies: ["React", "Tailwind", "Open Weather API", "Firebase"],
// image: weatherApp,
// repoUrl: "",
// hostedUrl: "https://weather-app.theoleveque.com",
