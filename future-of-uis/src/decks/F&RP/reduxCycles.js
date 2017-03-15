import React from 'react';
import WrappedCodeSlide from '../../CodeSlide';

import code from './reduxCycles.raw';

const reduxCycles = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,18], title: 'What about the arguments' },
      { loc: [1,7], note: 'Reacting to \'FETCH_USER\' actions' },
      { loc: [3,7], note: 'No request is being fired here' },
      { loc: [15,16], note: 'Sending commands to driver' },
      { loc: [8,13], note: 'Reacting to response with new action' },
      { loc: [14,15], note: 'Sending commands to driver' },
    ]}
  />
);

export default reduxCycles;
