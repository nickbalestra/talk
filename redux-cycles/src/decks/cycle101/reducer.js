import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';
import { navy } from '../../styles/colors';

import code from './reducer.raw';
import whatAboutAsync from '../../images/whatAboutAsync.jpg';

preloader([
  whatAboutAsync
]);

const reducer = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,10], title: 'Anatomy of a reducer' },
      { loc: [3,4], note: 'Reducers are pure, synchronous functions' },
      { loc: [3,4], note: 'Reducers are pure, synchronous functions', image: whatAboutAsync },
    ]}
  />
);

export default reducer;
