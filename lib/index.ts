// import { Project } from '../types';

export const projects = [
  {
    id: 1,
    title: 'Nailboo - Underlining',

    techStack: ['Nextjs', 'Theme UI', 'Chord Commerce', 'Contentful'],
    url: 'https://nailboonails.com',
    category: 'ecommerce',
  },
  {
    id: 2,
    title: 'Omorpho',

    techStack: ['Gatsby', 'Theme UI', 'Chord Commerce', 'Contentful'],
    url: 'https://www.omorpho.com',
    category: 'ecommerce',
  },
  {
    id: 3,
    title: 'Blue Bottle Coffee',
    techStack: ['Nextjs', 'Tailwind', 'Chord Commerce', 'Sanity', 'Storybook'],
    url: 'https://bluebottlecoffee.com',
    category: 'ecommerce',
  },
];

export type Project = typeof projects[0];

export const footerLinks = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/theoleveque/',
    text: 'LinkedIn',
  },
  {
    id: 2,
    url: 'https://github.com/daawascript',
    text: 'GitHub',
  },
];

export type FooterLink = typeof footerLinks[0];
