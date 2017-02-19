import React from 'react';

import {
  Slide,
  BlockQuote,
  Quote,
  Cite,
  Link
} from 'spectacle';


const preReducer = () => (
  <Slide>
    <BlockQuote>
      <Quote>Reducers are pure functions that takes the previous state and an action and returns the new state</Quote>
      <Cite><Link href="http://www.slideshare.net/jayphelps/rxjs-redux-react-amazing">Jay Phelps</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preReducer;
