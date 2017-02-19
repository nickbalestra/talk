import React from 'react';
import theme from './theme';
import merge from './utils/merge';

import { Deck } from 'spectacle';

import intro from './decks/intro';
import redux101 from './decks/redux101';
import cycle101 from './decks/cycle101';
import reduxCycles from './decks/redux-cycles';
import cyclesVsObservable from './decks/reduxCyclesVsReduxObservable';
import thanks from './decks/thanks';
import testing from './decks/testing';
import ducks from './decks/ducks';
import reduxVsRx from './decks/reduxVsRx';
import summary from './decks/summary';

const makeSlides = () => {
  const slides = merge(
    intro(),
    redux101(),
    cycle101(),
    reduxCycles(),
    cyclesVsObservable(),
    testing(),
    ducks(),
    reduxVsRx(),
    summary(),
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
