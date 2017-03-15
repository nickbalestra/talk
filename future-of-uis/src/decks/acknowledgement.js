import React from 'react';

import {
  Slide,
  Heading,
  Appear,
  List,
  ListItem,
  Link
} from 'spectacle';

const Acknowledgement = () => (
  <Slide >
    <Heading margin="20px 0" size={3}  textColor="secondary">
      Acknowledgements
    </Heading>
    <List margin="40px 0 0 23%">
      <Appear><ListItem><Link href="https://twitter.com/lmatteis" target="_blank">@lmatteis</Link> & <Link href="https://twitter.com/goshakkk" target="_blank">@goshakkk</Link></ListItem></Appear>
      <Appear><ListItem><Link href="https://twitter.com/_jayphelps" target="_blank">@_jayphelps</Link></ListItem></Appear>
      <Appear><ListItem><Link href="https://twitter.com/_philpl" target="_blank">@_philpl</Link></ListItem></Appear>
    </List>
  </Slide>
);

export default Acknowledgement;
