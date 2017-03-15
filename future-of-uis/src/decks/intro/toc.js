import React from 'react';

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

const toc = () => (
  <Slide notes={`
    2 premesse prima di iniziare<br /><br />
    - Libro Manning, Co-autore, Test ch1
    <br /><br />
     - Interrompetemi = Sticker
    <br /><br />
  `}>
    <Heading margin="20px 0" size={3}  textColor="secondary" textAlign="left">
      Agenda
    </Heading>
    {/*<Appear>
      <Heading textColor="secondary" margin="20px 0" size={6}  textAlign="left">
      ├ Setting the stage
      </Heading>
    </Appear>*/}
    <Appear>
      <Heading  margin="20px 0" size={6} textAlign="left" textColor="secondary" >
      ├ Developing UIs for an uncertain world
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ Putting UIs into context
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ F&RP to the rescue
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ Talk is cheap
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      ├ Extra Bonus (Testing)
      </Heading>
    </Appear>
    <Appear>
      <Heading margin="20px 0px 20px -6px" size={6}  textColor="secondary" textAlign="left">
      └ Q&A
      </Heading>
    </Appear>
  </Slide>
);

export default toc;
