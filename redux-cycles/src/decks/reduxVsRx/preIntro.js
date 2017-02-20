import React from 'react';

import {
  Slide,
  BlockQuote,
  Quote,
  Cite,
  Link
} from 'spectacle';


const preIntro = () => (
  <Slide>
    <BlockQuote>
      <Quote>Do you really need Redux if you already use Rx? Maybe not.</Quote>
      <Cite><Link href="https://github.com/reactjs/redux/blob/e44432ee7e16d8fe245af5acb36381d18130f97c/docs/introduction/PriorArt.md">Official Redux Documentation</Link>‏</Cite>
    </BlockQuote>
  </Slide>
);

export default preIntro;
