import React from 'react';
import WrappedCodeSlide from '../../CodeSlide';

import code from './action.raw';

const action = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,4], title: 'Anatomy of an action' },
    ]}
  />
);

export default action;
