import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './reduxObservable.raw';
import doctorWhoSad from '../../images/doctorWhoSad.gif';

preloader([
  doctorWhoSad
]);

const reduxObservable = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,8], title: 'With redux-observable' },
      { loc: [3,7], note: 'Firing a request' },
      { loc: [3,7], note: 'Imperative Code', image: doctorWhoSad },
    ]}
  />
);

export default reduxObservable;
