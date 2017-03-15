import React from 'react';

import {
  Slide,
  BlockQuote,
  Quote,
  Cite,
  Link
} from 'spectacle';


const preIntro = () => (
  <Slide>
    <BlockQuote>
      <Quote italic>Writing tests with marble diagrams is pretty much the coolest thing ever.</Quote>
      <Cite><Link href="https://twitter.com/robwormald/status/675902034873225216">"Rob Wormald"</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preIntro;
