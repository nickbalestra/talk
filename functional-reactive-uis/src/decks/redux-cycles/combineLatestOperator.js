import React from 'react';
import Playground from 'component-playground';

// Playground
import 'rxjs/add/operator/filter';
import { combineLatest } from '../../Diagrams';
// import { Observable } from 'rxjs/Observable';
import filterDiagramSrc from './snippets/filterDiagram.raw';
   import { Observable } from 'rxjs'
import OperatorDiagram from 'rxjs-diagrams'

// Somewhere in your components...
import {
  Slide,
  Heading
} from 'spectacle';

const filterOperator = () => (
  <Slide>
    <Heading size={4} textColor="secondary">
      .filter
    </Heading>


<OperatorDiagram
  label=".combineLatest((x, y) => [x, y])"
  transform={(a, b) => Observable.combineLatest(a, b, (x,y) => `[${x}, ${y}]`)}
  emissions={[
    [
      { x: 5, d: 1 },
      { x: 35, d: 2 },
      { x: 70, d: 3 }
    ], [
      { x: 10, d: 'A' },
      { x: 45, d: 'B' },
      { x: 80, d: 'C' }
    ]
  ]}
  end={80}
  completion={80}
/>

  </Slide>
);

export default filterOperator;
