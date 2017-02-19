import React from 'react';

import {
  Slide,
  Heading,
  Appear,
  List,
  ListItem
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      Summary
    </Heading>

    <List ordered>
      <Appear><ListItem>Predictable code</ListItem></Appear>
      <Appear><ListItem>Program = pure function</ListItem></Appear>
      <Appear><ListItem>Typeof program agnostic (!GUI)</ListItem></Appear>
      <Appear><ListItem>Read/write effects with drivers</ListItem></Appear>
    </List>
  </Slide>
);

export default summary;
