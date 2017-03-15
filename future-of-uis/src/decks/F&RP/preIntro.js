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
      <Quote italic>Everything can be modelled as a stream. ;) Yet people are still afraid of using them everywhere.</Quote>
      <Cite><Link href="https://twitter.com/andrestaltz/status/691613273062555648">"André Staltz‏"</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preIntro;
