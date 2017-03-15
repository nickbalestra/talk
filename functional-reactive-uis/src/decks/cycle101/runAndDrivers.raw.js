import { run } from '@cycle/xstream-run';
import { makeHTTPDriver } from '@cycle/http';
import program from './program';

const drivers = {
  HTTP: makeHTTPDriver()
};

run(program, drivers);