import css from './CSS.svg';
import git from './git.svg';
import graphql from './graphql.svg';
import html from './HTML.svg';
import jest from './jest.svg';
import js from './JavaScript.svg';
import MUI from './MUI.svg';
import next from './next.svg';
import react from './react.svg';
import redux from './redux.svg';
import sass from './sass.svg';
import styledComponents from './styled-components.png';
import tailwind from './tailwind.svg';
import ts from './TypeScript.svg';
import webpack from './webpack.svg';
import vite from './vitejs.svg';
import figma from './figma.svg';

const images = [
  html,
  js,
  ts,
  react,
  redux,
  next,
  css,
  tailwind,
  sass,
  styledComponents,
  MUI,
  webpack,
  vite,
  git,
  graphql,
  jest,
  figma,
];

const logos = images.map((image, index) => ({
  ...image,
  id: index + 1,
  name: image.src
    .replace(/^.*[\\/]/, '')
    .replace(/(?<=\.).*/, '')
    .replace(/\./, ''),
}));

export default logos;
