import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './inputs3.raw';

import hurra from '../../images/bonus.png';

preloader([
  hurra
]);

const inputs2 = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,13], title: 'A stream of strings?' },
      { loc: [0,13], title: '👍 or 👎 ?' }
    ]}
  />
);

export default inputs2;
