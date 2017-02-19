import { cloneElement } from 'react';

const merge = (...arrs) => (
  Array.prototype.concat.apply([], arrs)
    .map((element, i) => cloneElement(element, {
      key: i
    }))
);

export default merge;
