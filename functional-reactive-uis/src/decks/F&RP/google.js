import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Image,
  Appear,
  Heading
} from 'spectacle';

import google from '../../images/google-2.gif';

preloader([
  google
])


const googleUI = () => (
  <Slide transition={["fade"]} bgColor={'secondary'}>
  {/*<Appear>
  <Heading size={5} textColor="">
    What about its signature?
  </Heading>
  </Appear>*/}
   <Image margin="20% 0 0 0" src={google}
      width="50rem" />
      </Slide>
);

export default googleUI;
