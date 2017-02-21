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
      { loc: [5,10], note: 'a bunch of actions' },
      { loc: [17,23], note: 'Should fire a request' },
      { loc: [30,31], note: 'a stream of actions' },
      { loc: [35,36], note: 'After debounce time (800ms)' },
      { loc: [28,41], note: 'Test all the sources/sinks' },
      { loc: [39,40], note: '200ms * 10 = 2 seconds' },
      { loc: [39,40], note: '2 seconds in 15ms', image: jestResult },
      { loc: [39,40], note: 'time traveling for testing', image: dan },
    ]}
  />
);

export default test;
