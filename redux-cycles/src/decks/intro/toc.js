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
      ├ fatigue++
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ talk is cheap
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ expectations
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ ducks on wheels
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      └ Summary
      </Heading>
    </Appear>
  </Slide>
);

export default toc;
