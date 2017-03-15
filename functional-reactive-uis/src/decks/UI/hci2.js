import React from 'react';
import preloader from "spectacle/lib/utils/preloader";

import {
  Slide,
  Image,
} from 'spectacle';

import hciDiagram from '../../images/HCI-2.svg';

preloader([
  hciDiagram
])

const hci = () => (
  <Slide transition={['fade']}>
    <Image src={hciDiagram}
      height="40rem" />
  </Slide>
);

export default hci;