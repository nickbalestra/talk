import React from 'react';

import {
  Slide,
  Heading,
  Link
} from 'spectacle';

const aboutMe = () => (
  <Slide transition={['fade']}>
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      Nick
    </Heading>
    <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Software engineer at <Link href="https://www.opentable.com/about/">OpenTable</Link>
    </Heading>
    <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Co-author <Link                   href="https://github.com/cyclejs-community/create-cycle-app">create-cycle-app</Link> & <Link href="https://github.com/cyclejs-community/redux-cycles">redux-cycles</Link>
    </Heading>
     <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Follow me: <Link href="http://twitter.com/nickbalestra">@nickbalestra</Link>
    </Heading>
  </Slide>
);

export default aboutMe;
