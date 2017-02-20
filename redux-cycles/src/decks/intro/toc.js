import React from 'react';

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

const toc = () => (
  <Slide>
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      TOC
    </Heading>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ redux 101
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ cycle 101
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ redux-cycles
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ rationale
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ code examples
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ testing
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ structuring
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      └ takeways
      </Heading>
    </Appear>
  </Slide>
);

export default toc;
