import React from 'react';
import WrappedCodeSlide from '../../CodeSlide';

import code from './example.raw';

const example = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,3], title: 'Some say it\'s a two-liner' },
      { loc: [4,5], note: 'subscribe()' }
    ]}
  />
);

export default example;
