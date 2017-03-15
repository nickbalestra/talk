import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide
} from 'spectacle';

import google from '../../images/google-1.png';

preloader([
  google
])


const googleUI = () => (
  <Slide transition={["fade"]} bgImage={google} />
);

export default googleUI;
