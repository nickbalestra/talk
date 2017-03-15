import React from 'react';

import {
  Slide,
  BlockQuote,
  Quote,
  Cite,
  Link
} from 'spectacle';


const intro = () => (
  <Slide>
    <BlockQuote>
      <Quote italic>The Universe is under no obligation to make sense to you</Quote>
      <Cite><Link href="https://twitter.com/WorldAndScience/status/840578296500875265">"Neil DeGrasse Tyson"</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default intro;
