import React from 'react';

import {
  Slide,
  Heading,
  Appear,
  List,
  ListItem,
  Link
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading margin="20px 0" size={1}  textColor="secondary">
      Takeaways
    </Heading>
    <List ordered margin="40px 0 0 10%">
      <Appear><ListItem>Predictable code for async in redux</ListItem></Appear>
      <Appear><ListItem>Use if you want Reactive && Declarative code</ListItem></Appear>
      <Appear><ListItem>No hard dependency on a specific stream library <Link href="https://github.com/cyclejs-community/redux-cycles/pull/27" target="_blank"> #27</Link></ListItem></Appear>
    </List>

    <Appear>
      <Heading  margin="60px 0" size={6} textColor="tertiary" >
      One more thing...
      </Heading>
    </Appear>
  </Slide>
);

export default summary;
