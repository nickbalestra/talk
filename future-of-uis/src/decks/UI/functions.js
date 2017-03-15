import React from 'react';

import {
  Slide,
 Heading,
 Appear,
 List,
 ListItem
} from 'spectacle';


const func = () => (
  <Slide transition={['fade']}>
    <Heading size={4} textColor="secondary">
      UIs are functions
    </Heading>
  </Slide>
);

export default func;
