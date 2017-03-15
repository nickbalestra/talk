import preIntro from './preIntro';
import intro from './intro';
import inputs0 from './inputs0';
import inputs from './inputs1';
import inputs2 from './inputs2';
import inputs3 from './inputs3';
import inputs4 from './inputs4';
import google from './google';
import outro from './outro';
import reduxCycles from './reduxCycles';
import advancedExample from './advancedExample';
import summary from './summary';
const reduxCyclesVsReduxObservable = () => [
  google(),
  inputs0(),
  inputs(),
  inputs2(),
  // inputs3(),
   preIntro(),
  inputs4(),

  summary(),
  outro(),
  // reduxObservable(),
  // reduxCycles(),
  // advancedExample()
];

export default reduxCyclesVsReduxObservable;
