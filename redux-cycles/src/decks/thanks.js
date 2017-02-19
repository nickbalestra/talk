import React from 'react';
import styled from 'styled-components';
import preloader from 'spectacle/lib/utils/preloader';

import {
  Slide,
  Image,
  Layout,
  Fit,
  Fill,
  Link,
  Text,
  Heading
} from 'spectacle';

import bg from '../images/bg.png';

preloader([
  bg
]);

const Col = styled(Fill)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

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
