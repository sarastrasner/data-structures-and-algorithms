'use strict';

const shuffle = require('./arrayShuffle');

describe('Shuffle the array', () => {
  it('it returns the correct array', () => {
    let array = [2,5,1,3,4,7];
    let length = array.length/2;
    expect(shuffle(array,length)).toEqual([2,3,5,4,1,7]);
  });


  it('it returns the correct array', () => {
    let array = [1,1,2,2];
    let length = array.length/2;
    expect(shuffle(array, length)).toEqual([1,2,1,2]);
  });
});

