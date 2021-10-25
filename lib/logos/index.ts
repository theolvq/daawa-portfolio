import css from "./css.svg";
import git from "./git.svg";
import graphql from "./graphql.svg";
import html from "./HTML.svg";
import jest from "./jest.png";
import js from "./JS.svg";
import MUI from "./MUI.svg";
import next from "./next.svg";
import react from "./react.svg";
import redux from "./redux.svg";
import sass from "./sass.svg";
import styledComponents from "./styled-components.png";
import tailwind from "./tailwind.svg";
import ts from "./TS.svg";
import webpack from "./webpack.svg";
import vite from "./vitejs.svg";
import image from "next/image";

const images = [
  html,
  js,
  ts,
  react,
  redux,
  css,
  sass,
  styledComponents,
  MUI,
  webpack,
  vite,
  git,
  graphql,
  jest,
];

export const logos = images.map((image, index) => ({ ...image, id: index }));

export const test = logos.map((logo) => {
  console.log(logo);
});
