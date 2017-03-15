import React from 'react';
import theme from './theme';
import merge from './utils/merge';

import { Deck } from 'spectacle';

import intro from './decks/intro';
import UI from './decks/UI';
// import cycle101 from './decks/cycle101';
// import reduxCycles from './decks/redux-cycles';
import FRP from './decks/F&RP';
import thanks from './decks/thanks';
import testing from './decks/testing';
// import ducks from './decks/ducks';
// import reduxVsRx from './decks/reduxVsRx';
// import summary from './decks/summary';
// import acknowledgement from './decks/acknowledgement';

const makeSlides = () => {
  const slides = merge(
    intro(),
    UI(),
    FRP(),
    // cycle101(),
    // reduxCycles(),
    // cyclesVsObservable(),
    testing(),
    // ducks(),
    // summary(),
    // reduxVsRx(),
    // acknowledgement(),
    thanks()
  );

  console.log('Number of slides:', slides.length);
  return slides;
};

const Presentation = () => (
  <Deck
    theme={theme}
    transition={[ ]}
    controls={false}
    progress="bar"
  >
    {makeSlides()}
  </Deck>
);

export default Presentation;
