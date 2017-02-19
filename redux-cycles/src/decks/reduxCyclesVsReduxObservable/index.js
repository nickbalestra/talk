import preIntro from './preIntro';
import intro from './intro';
import reduxObservable from './reduxObservable';
import reduxCycles from './reduxCycles';
import advancedExample from './advancedExample';

const reduxCyclesVsReduxObservable = () => [
  preIntro(),
  intro(),
  reduxObservable(),
  reduxCycles(),
  advancedExample()
];

export default reduxCyclesVsReduxObservable;
