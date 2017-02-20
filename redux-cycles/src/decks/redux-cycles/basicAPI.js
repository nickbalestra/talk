import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './basicAPI.raw';
import cycleActions from '../../images/cycleActions.png';

preloader([
  cycleActions
]);

const basicApi = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,16], title: 'basic API' },
      { loc: [0,1], note: 'Redux imports' },
      { loc: [1,2], note: 'Redux-cycles core API' },
      { loc: [2,3], note: 'Cycle core API to be used with xstream' },
      { loc: [3,4], note: 'Our cycle program' },
      { loc: [5,12], note: 'Instantiate store and middleware' },
      { loc: [13,16], note: 'Start the cycle reactive loop' },
      { loc: [13,16], note: 'Start the cycle reactive loop', image: cycleActions },
    ]}
  />
);

export default basicApi;
