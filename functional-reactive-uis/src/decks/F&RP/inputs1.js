import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './inputs1.raw';
import promise from '../../images/promise.svg';

preloader([
  promise
]);


const inputs = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,4], title: 'A promise?' },
      { loc: [0,4], title: '👍 or 👎 ?' },
      { loc: [0,4], title: '👍 or 👎 ?', image: promise }
    ]}
  />
);

export default inputs;
