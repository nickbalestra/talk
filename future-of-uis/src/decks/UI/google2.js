import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Image
} from 'spectacle';

import google from '../../images/google-2.gif';

preloader([
  google
])


const googleUI = () => (
  <Slide transition={["fade"]} bgColor={'secondary'}>
   <Image margin="20% 0 0 0" src={google}
      width="50rem" />
      </Slide>
);

export default googleUI;
