import { createStore, applyMiddleware } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/xstream-run';
import pongCycle from './pongCycle';

const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;

const store = createStore(
  rootReducer,
  applyMiddleware(cycleMiddleware)
);

run(pongCycle, {
  ACTION: makeActionDriver()
})