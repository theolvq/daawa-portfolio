import weatherApp from "../images/weather-app-desktop-4:3.jpg";
import spacestagram from "../images/spacestagram-desktop-4:3.jpg";
import portfolio from "../images/portfolio-desktop-4:3.jpg";

const projects = [
  {
    title: "Spacestagram",
    description:
      "Instagram-like feed build with the NASA Astronomy Picture Of the Day API. Infinite Scrolling so you could litterally spend your day scrolling!",
    technologies: ["TypeScript", "React", "Styled-Components", "NASA API"],
    image: spacestagram,
    repoUrl: "https://github.com/daawascript/spacestagram",
    hostedUrl: "http://spacestagram.theoleveque.com",
  },
  {
    title: "My Personal Website",
    description:
      "My website to showcase my projects and be found by awesome people like you!",
    technologies: ["TypeScript", "React", "Next", "Tailwind"],
    image: portfolio,
    repoUrl: "https://github.com/daawascript/daawa-portfolio",
    hostedUrl: "#hero",
  },
  {
    title: "Weather App",
    description:
      "A weather app built with Open Weather API, search for your city!",
    technologies: ["React", "Tailwind", "Firebase", "Open Weather API"],
    image: weatherApp,
    repoUrl: "https://github.com/daawascript/weather-app",
    hostedUrl: "https://weather-app.theoleveque.com",
  },
];

export default projects;

// {
//   title: '',
//     description: '',
//     technologies: [],
//     image: ''
//   repoUrl: ''
//   hostedUrl: ''
// }
