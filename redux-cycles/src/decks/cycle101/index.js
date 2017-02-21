import intro from './intro';
import preIntro from './preIntro';
import preProgram from './preProgram';
import program from './program';
import summary from './summary';
import runAndDrivers from './runAndDrivers';

const redux101 = () => [
  preIntro(),
  intro(),
  preProgram(),
  program(),
  runAndDrivers(),
  summary()
];

export default redux101;
