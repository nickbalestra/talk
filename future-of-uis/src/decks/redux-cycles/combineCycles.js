import React from 'react';
import WrappedCodeSlide from '../../CodeSlide';
import code from './combineCycles.raw';

const combineCycles = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,16], title: 'combineCycles' },
      { loc: [0,1], note: 'import combineCycles utility' },
      { loc: [4,8], note: 'Combine any number of cycle apps together' }
    ]}
  />
);

export default combineCycles;
