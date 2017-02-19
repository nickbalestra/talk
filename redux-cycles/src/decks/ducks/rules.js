import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem,
  Appear
} from 'spectacle';

const rules = () => (
  <Slide >
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      Rules. A module...
    </Heading>
     <List ordered>
      <Appear><ListItem>MUST export default a function called reducer()</ListItem></Appear>
      <Appear><ListItem>MUST export its action creators as functions</ListItem></Appear>
      <Appear><ListItem>MUST have action types in a spcific format</ListItem></Appear>
      <Appear><ListItem>MAY export its action types as UPPER_SNAKE_CASE</ListItem></Appear>
      <Appear><ListItem textColor="tertiary" textAlign="left">MAY exports its cycles as a single function called cycle()</ListItem></Appear>
    </List>




  </Slide>
);

export default rules;
