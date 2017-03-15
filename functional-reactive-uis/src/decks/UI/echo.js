import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

import echo from '../../images/echo.png';

preloader([
  echo
])


const echoUI = () => (
  <Slide transition={["fade"]} bgImage={echo}>
  </Slide>
);

export default echoUI;
