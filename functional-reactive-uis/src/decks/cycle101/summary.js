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
    <Heading margin="20px 0" size={1}  textColor="secondary">
      Summary
    </Heading>

    <List ordered margin="40px 0 0 23%">
      <Appear><ListItem>Predictable code for async</ListItem></Appear>
      <Appear><ListItem>Programs are pure function</ListItem></Appear>
      <Appear><ListItem>Read/write effects with drivers</ListItem></Appear>
      <Appear><ListItem>Typeof program agnostic (!GUI)</ListItem></Appear>
    </List>
  </Slide>
);

export default summary;
