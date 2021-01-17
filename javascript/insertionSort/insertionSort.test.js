'use strict';

let insertionSort = require('./insertionSort');

describe('Insertion Sort', () => {
  it('it sorts an array', () => {
    let array =[8,12,47,2,0];
    expect(insertionSort(array)).toEqual([0,2,8,12,47]);
  });
});

