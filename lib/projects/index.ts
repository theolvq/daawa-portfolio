import spacestagram from '../images/spacestagram-desktop-4:3.jpg';
import weatherApp from '../images/weather-app-desktop-4:3.jpg';

const projects = [
  {
    title: 'Weather App',
    description:
      'A weather app built with Open Weather API, search for your city!',
    technologies: ['React', 'Tailwind', 'Next.js', 'Open Weather API'],
    image: weatherApp,
    repoUrl: 'https://github.com/daawascript/weather-app',
    hostedUrl: 'https://weather-app.theoleveque.com',
  },
  {
    title: 'Spacestagram',
    description:
      'Instagram-like feed build with the NASA Astronomy Picture Of the Day API. Infinite Scrolling so you could litterally spend your day scrolling!',
    technologies: ['TypeScript', 'React', 'Styled-Components', 'NASA API'],
    image: spacestagram,
    repoUrl: 'https://github.com/daawascript/spacestagram',
    hostedUrl: 'http://spacestagram.theoleveque.com',
  },
  {
    title: 'Paint App',
    description:
      'A paint app built with Next and Konva during a hackathon organized by Mintbean.',
    technologies: ['React', 'Tailwind', 'Next', 'Konva'],
    image: weatherApp,
    repoUrl: 'https://github.com/daawascript/paint-app-mintbean-hackathon',
    hostedUrl: 'https://paint-app.theoleveque.com',
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
