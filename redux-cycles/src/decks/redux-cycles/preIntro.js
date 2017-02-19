import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Image,
} from 'spectacle';

import reduxCyclesLogo from '../../images/reduxCyclesLogo.png';

preloader([
  reduxCyclesLogo
])

const preIntro = () => (
  <Slide bgColor="secondary" transition={['fade']}>
    <Image src={reduxCyclesLogo}
      width="30rem" />
  </Slide>
);

export default preIntro;
