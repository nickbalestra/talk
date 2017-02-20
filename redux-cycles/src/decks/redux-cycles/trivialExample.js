import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

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
      { loc: [1,4], note: 'Reacting to any \'PING\' action' },
      { loc: [5,8], note: 'Returning stream of commands to the action driver "Hey, dispatch(PONG)"'},
    ]}
  />
);

export default trivialExample;
