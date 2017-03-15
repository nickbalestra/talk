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
      <Quote italic>Cycle.js is an interesting and unusual way of represting real-world programs.</Quote>
      <Cite><Link href="https://github.com/cyclejs-community/redux-cycles#whats-this-cycle-thing-anyway" target="_blank">"Gosha Arinich"</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preIntro;
