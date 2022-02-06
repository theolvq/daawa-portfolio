import weatherApp from './weather-app.jpg';
import spacestagram from './spacestagram.jpg';

const projects = [
  {
    title: 'Weather App',
    description:
      'A weather app built with Open Weather API, search for your city!',
    technologies: ['React', 'Tailwind', 'Next.js', 'Open Weather API'],
    image: weatherApp,
    alt: 'Screenshot of the Weather App',
    repoUrl: 'https://github.com/daawascript/weather-app',
    hostedUrl: 'https://weather-app.theoleveque.com',
  },
  {
    title: 'Spacestagram',
    description:
      'Instagram-like feed build with the NASA Astronomy Picture Of the Day API. Infinite Scrolling so you could litterally spend your day scrolling!',
    technologies: ['TypeScript', 'React', 'Styled-Components', 'NASA API'],
    image: spacestagram,
    alt: 'Screenshot of the Spacestagram App',
    repoUrl: 'https://github.com/daawascript/spacestagram',
    hostedUrl: 'http://spacestagram.theoleveque.com',
  },
];

export default projects;
