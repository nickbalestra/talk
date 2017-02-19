import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';
import { navy } from '../../styles/colors';

import code from './trivialExample.raw';
import whatAboutAsync from '../../images/whatAboutAsync.png';

preloader([
  whatAboutAsync
]);

const trivialExample = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,11], title: 'A trivial example' },
      { loc: [1,3], note: 'Reacting to any \'PING\' action' },
      { loc: [4,5], note: 'Mapping the debounced \'PING\' to \'PONG\''},
      { loc: [6,9], note: 'Returning action commands to the driver'},
    ]}
  />
);

export default trivialExample;
