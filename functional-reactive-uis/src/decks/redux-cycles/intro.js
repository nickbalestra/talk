import React from 'react';

import {
  Slide,
  Heading,
  Link
} from 'spectacle';

const intro = () => (
  <Slide transition={['fade']}>
    <Heading size={1} fit bold textColor="secondary">
      Redux-cycles
    </Heading>

    <br />
    <Link href="https://github.com/cyclejs-community/redux-cycles">
      github.com/cyclejs-community/redux-cycles
    </Link>
  </Slide>
);

export default intro;
