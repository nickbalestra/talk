import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './program.raw';
import kat from '../../images/kat.png';

preloader([
  kat
]);

const program = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,15], title: 'Anatomy of a program' },
      { loc: [0,1], note: 'Streams of events from the outside world' },
      { loc: [11,14], note: 'Streams of commands to be perfomed on the outside world' },
      { loc: [1,5], note: 'HTTP responses' },
      { loc: [6,14], note: 'HTTP requests to be performed' },
      { loc: [11,14], note: 'Key in sinks => relative driver' },
      { loc: [1,10] },
      { loc: [1,10], note: 'Code order doesn\'t matter in FRP', image: kat },
    ]}
  />
);

export default program;
