import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';

import {
  Slide,
  Link,
  Text,
  Heading
} from 'spectacle';

import bg from '../images/bg.png';

preloader([
  bg
]);



const thanksSlide = () => (
  <Slide bgImage={bg} transition={['fade']}>

        <Heading fit size={4}>
          Thank you!
        </Heading>

        <br />

        <Text>

        </Text>
        <br />
        <Text>
          <Link textColor="secondary" href="https://twitter.com/nickbalestra" target="_blank">
            @nickbalestra
          </Link>
        </Text>

  </Slide>
);

export default thanksSlide;
