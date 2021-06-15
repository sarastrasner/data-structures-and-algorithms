'use strict';

const runningSum = require('./runningTotal');

describe('JAVASCRIPT: Running Sum of 1d Array', () => {
  it('it returns the correct sum', () => {
    let array = [1, 2, 3, 4];
    expect(runningSum(array)).toEqual([1, 3, 6, 10]);
  });


  it('it returns the correct sum', () => {
    let array = [3,1,2,10,1];
    expect(runningSum(array)).toEqual([3,4,6,16,17]);
  });
});
