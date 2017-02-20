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
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      Takeaways
    </Heading>
    <List ordered>
      <Appear><ListItem>Predictable code for async in redux</ListItem></Appear>
      <Appear><ListItem>Use if you want Reactive && Declarative code</ListItem></Appear>
      <Appear><ListItem>No hard dependecy on a specific stream library <Link href="https://github.com/cyclejs-community/redux-cycles/pull/27" target="_blank"> #27</Link></ListItem></Appear>
      <Appear><ListItem>Don't use if already fully reactive (Cycle.js)</ListItem></Appear>
    </List>
  </Slide>
);

export default summary;
