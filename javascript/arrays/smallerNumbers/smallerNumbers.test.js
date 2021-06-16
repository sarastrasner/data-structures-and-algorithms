'use strict';

const smallerNumbersThanCurrent = require('./smallerNumbers');

describe('Smaller Numbers Than Current', () => {
  it('it returns the correct of numbers', () => {
    let array = [8,1,2,2,3];
    expect(smallerNumbersThanCurrent(array)).toEqual([4,0,1,1,3]);
  });

  it('it returns the correct of numbers', () => {
    let array = [6,5,4,8];
    expect(smallerNumbersThanCurrent(array)).toEqual( [2,1,0,3]);
  });

  it('it returns the correct of numbers', () => {
    let array = [3,3,3,3];
    expect(smallerNumbersThanCurrent(array)).toEqual([0,0,0,0]);
  });
});
