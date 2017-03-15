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
    <Heading margin="0 0 5px 0" size={1} fit caps bold textColor="primary">
      Building JS applications
    </Heading>
    <Heading size={1} fit bold textColor="primary">
      with Functional & Reactive streams
    </Heading>
    <Heading margin="20px 0" size={2} fit textColor="secondary">
      A fresh perspective on UI development
    </Heading>


  </Slide>
);

export default title;
