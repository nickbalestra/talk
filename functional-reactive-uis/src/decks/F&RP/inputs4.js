import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './inputs4.raw';

import stream from '../../images/stream.svg';
import stream2 from '../../images/stream2.svg';

preloader([
  stream,
  stream2
]);

const inputs2 = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,4], title: 'A stream of events?' },
      { loc: [0,4], title: '👍 or 👎 ?' },
      { loc: [0,4], title: '👍 or 👎 ?', image: stream },

      { loc: [4,5], title: '💯 👍 ', note: 'Look mum: a stream of strings!' },
    ]}
  />
);

export default inputs2;
