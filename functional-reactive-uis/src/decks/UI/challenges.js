import React from 'react';

import {
  Slide,
 Heading,
 Appear,
 List,
 ListItem
} from 'spectacle';


const preAction = () => (
  <Slide>
    <Heading margin="20px 0" size={2}  textColor="secondary" textAlign="">
      Challenges
    </Heading>
     <List ordered>
      <Appear><ListItem>Write future-proof code for an ever-changing platform</ListItem></Appear>
      <Appear><ListItem>Build complex UIs able to support any kind of interaction.</ListItem></Appear>
    </List>
  </Slide>
);

export default preAction;
