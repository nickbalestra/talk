import {mockDOMSource} from '@cycle/dom';
import {select} from 'snabbdom-selector'
import {Counter} from '../src/counter';

describe('Counter', () => {
  it('increment & decrement according to clicks',(done) =>{
    const Time = mockTimeSource();

    const plus$    = Time.diagram(`---x--x-------x--x--|`);
    const minus$   = Time.diagram(`---------x----------|`);
    const count$   = Time.diagram(`0--1--2--1----2--3--|`);

    const DOM = mockDOMSource({
      '.add': {
        click: plus$
      },

      '.subtract': {
        click: minus$
      },
    });

    const counter = Counter({DOM});
    const count$ = counter.DOM
      .map(vtree => select('.count', vtree)[0].text);
    Time.assertEqual(count$, expectedCount$)

    Time.run(done);
  });
});