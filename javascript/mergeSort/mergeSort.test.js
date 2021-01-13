'use strict';

let mergeSort = require('./mergeSort');

describe('Insertion Sort', () => {
  it('it sorts an array', () => {
    let array =[8,12,47,2,0];
    expect(mergeSort._mergeSort(array)).toEqual([0,2,8,12,47]);
  });
});

