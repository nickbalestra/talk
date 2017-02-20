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
          <Link textColor="secondary" href="https://github.com/cyclejs-community/redux-cycles" target="_blank">
            github.com/cyclejs-community/redux-cycles
          </Link>
        </Text>
        <br />
        <Text>
          <Link textColor="primary" href="https://twitter.com/nickbalestra" target="_blank">
            @nickbalestra
          </Link>
        </Text>

  </Slide>
);

export default thanksSlide;
