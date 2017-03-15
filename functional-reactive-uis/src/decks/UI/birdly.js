import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide
} from 'spectacle';

import birdly from '../../images/birdly.jpg';

preloader([
  birdly
])


const birdlyUI = () => (
  <Slide transition={["fade"]} bgImage={birdly.replace("/", "")} />
);

export default birdlyUI;
