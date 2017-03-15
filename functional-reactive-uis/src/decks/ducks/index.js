import preIntro from './preIntro';
import example from './example';
import rules from './rules';

const testing = () => [
  preIntro(),
  rules(),
  example(),
];

export default testing;
