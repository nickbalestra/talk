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
      { loc: [0,30], title: 'Testing' },
      { loc: [8,10], note: 'a bunch of clicks' },
      { loc: [10,11], note: 'Should result in the count to update' },
      { loc: [12,21], note: 'Mocking the sources' },
      { loc: [22,23], note: 'Invoke the app' },
      { loc: [23,26], note: 'Simply check that output streams match your expectactions' },
      { loc: [39,40], note: '4 seconds few millisecs' },
      { loc: [39,40], note: 'time traveling for testing', image: dan },
    ]}
  />
);

export default test;
