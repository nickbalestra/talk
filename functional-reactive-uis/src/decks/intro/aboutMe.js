import React from 'react';

import {
  Slide,
  Heading,
  Link
} from 'spectacle';

const aboutMe = () => (
  <Slide transition={['fade']} notes={`
    OpenTable trova un ristorante per + 21M diner/mese<br /><br />
    Azienda fatta da poco meno di 1000 persone, PriceLine<br /><br />
    Faccio parte del Global Platform Team. Mi occupo di JS/Node, graphql e OpenComponents.
    Progetto OS per la gestione di componenti FE a runtime (NPM + AWS Lambda)<br /><br />
  `}>
    <Heading margin="20px 0" size={3}  textColor="secondary" textAlign="left">
      Nick
    </Heading>
    <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Senior software engineer <Link href="https://www.opentable.com/about/">@OpenTable</Link>
    </Heading>
    {/*<Heading margin="0px 0 40px" size={6}  textColor="secondary" textAlign="left">
      Global Platform Team, London
    </Heading>*/}
    <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Co-author <Link                   href="https://github.com/cyclejs-community/create-cycle-app">create-cycle-app</Link> & <Link href="https://github.com/cyclejs-community/redux-cycles">redux-cycles</Link>
    </Heading>
     <Heading margin="20px 0" size={6}  textColor="secondary" textAlign="left">
      Follow me: <Link href="http://twitter.com/nickbalestra">@nickbalestra</Link>
    </Heading>
  </Slide>
);

export default aboutMe;
