'use strict';

let quickSort = require('./quickSort');

describe('Insertion Sort', () => {
  it('it sorts an array', () => {
    let array =[8,12,47,2,0];
    expect(quickSort(array)).toEqual([0,2,8,12,47]);
  });
});

