import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './inputs0.raw.js';

const inputs = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,1], title: 'A string?' },
      { loc: [0,1], title: '👍 or 👎 ?' },
    ]}
  />
);

export default inputs;
