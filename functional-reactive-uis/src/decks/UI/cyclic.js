import React from 'react';

import {
  Slide,
 Heading,
 Appear,
 List,
 ListItem
} from 'spectacle';


const cyclic = () => (
  <Slide transition={["fade"]}>
    <Heading size={4}  textColor="secondary">
      UIs are cyclic patterns
    </Heading>
  </Slide>
);

export default cyclic;
