import { combineCycles } from 'redux-cycles';
import pongCycle from './pongCycle';
import logCycle from './logCycle'

const mainCycle = combineCycles(
  pongCycle,
  logCycle
);

export default mainCycle;