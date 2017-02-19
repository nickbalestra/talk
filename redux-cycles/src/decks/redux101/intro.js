import React from 'react';

import {
  Slide,
  Heading,
  Link
} from 'spectacle';

const intro = () => (
  <Slide>
    <Heading size={1} fit bold textColor="secondary">
      Redux 101
    </Heading>
    <Heading margin="20px 0" size={2} fit textColor="secondary">
      > Predictable state container for JavaScript apps
    </Heading>

    <br />
    <Link href="http://redux.js.org">
      redux.js.org
    </Link>
  </Slide>
);

export default intro;
