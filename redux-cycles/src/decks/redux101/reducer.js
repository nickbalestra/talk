import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';
import { navy } from '../../styles/colors';

import code from './reducer.raw';
import whatAboutAsync from '../../images/whatAboutAsync.png';

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
      { loc: [3,4], note: 'Reducers are synchronous' },
      { loc: [3,4], note: 'Reducers are synchronous', image: whatAboutAsync },
    ]}
  />
);

export default reducer;
