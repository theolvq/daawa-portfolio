import css from './css.svg';
import git from './git.svg';
import graphql from './graphql.svg';
import html from './HTML.svg';
import jest from './jest.svg';
import js from './JS.svg';
import MUI from './MUI.svg';
import next from './next.svg';
import react from './react.svg';
import redux from './redux.svg';
import sass from './sass.svg';
import styledComponents from './styled-components.png';
import tailwind from './tailwind.svg';
import ts from './TS.svg';
import webpack from './webpack.svg';
import vite from './vitejs.svg';

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
];

const logos = images.map((image, index) => ({
  ...image,
  id: index + 1,
}));

export default logos;
