import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './logger.raw';
import loggerResult from '../../images/logger.png';

preloader([
  loggerResult
]);

const logger = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,16], title: 'Action and state drivers' },
      { loc: [1,3], note: 'Reacting to any non-LOG actions' },
      { loc: [3,4], note: 'Combining the action stream with a state stream' },
      { loc: [4,5], note: 'Log to the console our stream state' },
      { loc: [4,5], note: 'Log to the console our stream state',image: loggerResult },
      { loc: [5,6], note: 'Map to a stream of "log action"' },
      { loc: [7,10], note: 'Return a stream of \'LOG\' actions to be dispatched' }
    ]}
  />
);

export default logger;
