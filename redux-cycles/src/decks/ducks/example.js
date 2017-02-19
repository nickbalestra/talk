import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './example.raw';
import doctorWhoSad from '../../images/doctorWhoSad.gif';

preloader([
  doctorWhoSad
]);

const example = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,44], title: 'Example' },
      { loc: [7,13], note: 'MUST export default a function called reducer()' },
      { loc: [15,18], note: 'MUST export its action creators as functions' },
      { loc: [1,5], note: 'MUST have action types in a spcific format' },
      { loc: [40,44], note: 'MAY exports its cycles as a single function called cycle()' },
    ]}
  />
);

export default example;
