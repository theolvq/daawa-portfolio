import spacestagram from '../../public/images/spacestagram-desktop-4:3.jpg';
import weatherApp from '../../public/images/weather-app-desktop-4:3.jpg';

const projects = [
  {
    title: 'Weather App',
    description:
      'A weather app built with Open Weather API, search for your city!',
    technologies: ['React', 'Tailwind', 'Next.js', 'Open Weather API'],
    image: '/public/images/weather-app-desktop-4:3.jpg',
    repoUrl: 'https://github.com/daawascript/weather-app',
    hostedUrl: 'https://weather-app.theoleveque.com',
  },
  {
    title: 'Spacestagram',
    description:
      'Instagram-like feed build with the NASA Astronomy Picture Of the Day API. Infinite Scrolling so you could litterally spend your day scrolling!',
    technologies: ['TypeScript', 'React', 'Styled-Components', 'NASA API'],
    image: '/public/images/spacestagram-desktop-4:3.jpg',
    repoUrl: 'https://github.com/daawascript/spacestagram',
    hostedUrl: 'http://spacestagram.theoleveque.com',
  },
];

export default projects;
