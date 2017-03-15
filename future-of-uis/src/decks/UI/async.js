import React from 'react';

import {
  Slide,
 Heading,
 Appear,
 List,
 ListItem
} from 'spectacle';


const async = () => (
  <Slide transition={['fade']}>
    <Heading size={4} textColor="secondary">
      UIs are asynchronous
    </Heading>
  </Slide>
);

export default async;
