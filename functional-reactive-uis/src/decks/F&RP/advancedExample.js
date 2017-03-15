import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import WrappedCodeSlide from '../../CodeSlide';

import code from './advancedExample.raw';
import autocompleteFlow from '../../images/autocompleteFlow.gif';

preloader([
  autocompleteFlow
]);

const advancedExample = () => (
  <WrappedCodeSlide
    bgColor="primary"
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0,28], title: 'Less trivial example' },
      { loc: [1,10], note: 'Create a stream of search query' },
      { loc: [2,3], note: 'Reacting to \'SEARCHED_USER\' action'  },
      { loc: [3,4], note: 'Mapping over the query value'  },
      { loc: [4,5], note: 'Making sure query isn\'t an empty string'   },
      { loc: [5,6], note: 'Debouncing'   },
      { loc: [6,11], note: 'Terminating the stream in case a CLEARED_SEARCH_RESULT action is dispatched'   },
      { loc: [11,16], note: 'Create a stream of request commands' },
      { loc: [25,26], note: 'Pass the instructions to the driver' },
      { loc: [17,22], note: 'Reacting to the response'},
      { loc: [24,25], note: 'Passing the instructions to the driver' },
      { loc: [24,25], note: 'github.com/cyclejs/devtool', image: autocompleteFlow },
    ]}
  />
);

export default advancedExample;
