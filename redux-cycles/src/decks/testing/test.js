import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './test.raw';
import jestResult from '../../images/jestResult.png';
import dan from '../../images/danAbramov.gif';

preloader([
  jestResult,
  dan
]);

const test = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,42], title: 'Testing cycles' },
      { loc: [4,9], note: 'a bunch of actions' },
      { loc: [29,30], note: 'a stream of actions' },
      { loc: [34,35], note: 'After debounce time (800ms)' },
      { loc: [16,22], note: 'Should fire request' },
      { loc: [27,40], note: 'Test all the sources/sinks' },
      { loc: [38,39], note: '200ms * 10 = 2 seconds' },
      { loc: [38,39], note: '2 seconds in 15ms', image: jestResult },
      { loc: [38,39], note: 'time traveling for testing', image: dan },
    ]}
  />
);

export default test;
