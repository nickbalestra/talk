import React from 'react';
import WrappedCodeSlide from '../../CodeSlide';
import preloader from 'spectacle/lib/utils/preloader';

import code from './runAndDrivers.raw';
import cycle from '../../images/cycle.png';

preloader([
  cycle
]);

const runAndDrivers = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,9], title: 'Running programs' },
      { loc: [0,1], note: 'Import cycle.js core' },
      { loc: [1,2], note: 'Import needed drivers' },
      { loc: [3,8], note: 'Define drivers (Spoiler: think of actions, state)' },
      { loc: [8,9], note: 'Start the reactive loop' },
      { loc: [8,9], note: 'Start the reactive loop', image: cycle },
    ]}
  />
);

export default runAndDrivers;
