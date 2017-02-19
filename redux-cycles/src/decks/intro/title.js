import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Heading,
  Link
} from 'spectacle';


import bg from '../../images/bg.png';

preloader([
  bg
])


const title = () => (
  <Slide bgImage={bg} transition={['fade']}>
    <Heading size={1} fit bold textColor="primary">
      Redux-cycles
    </Heading>
    <Heading margin="20px 0" size={2} fit textColor="secondary">
      Compose async actions in Redux using FRP
    </Heading>

    <br />
    <Link href="http://twitter.com/nickbalestra" textColor="primary">
      @NickBalestra
    </Link>
  </Slide>
);

export default title;
