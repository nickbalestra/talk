import preIntro from './preIntro';
import intro from './intro';
import basicAPI from './basicAPI';
import trivialExample from './trivialExample';
import logger from './logger';
import combineCycles from './combineCycles';

const reduxCycles = () => [
  preIntro(),
  intro(),
  trivialExample(),
  basicAPI(),
  logger(),
  combineCycles(),
];

export default reduxCycles;
