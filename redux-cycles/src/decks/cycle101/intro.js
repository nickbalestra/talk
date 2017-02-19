import React from 'react';

import {
  Slide,
  Heading,
  Link
} from 'spectacle';

const intro = () => (
  <Slide>
    <Heading size={1} fit bold textColor="secondary">
      Cycle 101
    </Heading>
    <Heading margin="20px 0" size={2} fit textColor="secondary">
      > F&R JavaScript framework for predictable code
    </Heading>

    <br />
    <Link href="http://cycle.js.org">
      cycle.js.org
    </Link>
  </Slide>
);

export default intro;
