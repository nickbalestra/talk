import React from 'react';

import {
  Slide,
  BlockQuote,
  Quote,
  Cite,
  Link
} from 'spectacle';


const prePreIntro = () => (
  <Slide>
    <BlockQuote>
      <Quote textSize="3rem">FRP is a superb way to manage the complexity of asynchronous apps<br /><br />You might want to explore something like Cycle, and even combine it with Redux. Let us know how it goes!</Quote>
      <Cite><Link href="https://github.com/reactjs/redux/blob/e44432ee7e16d8fe245af5acb36381d18130f97c/docs/introduction/PriorArt.md#rxjs" target="_blank">Official Redux Documentation</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default prePreIntro;


