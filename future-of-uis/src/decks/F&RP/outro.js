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
      <Quote italic>Talk is cheap.<br />Show me the code.</Quote>
      <Cite><Link href="https://en.wikipedia.org/wiki/Linus_Torvalds">"Linus Torvalds"</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preIntro;
