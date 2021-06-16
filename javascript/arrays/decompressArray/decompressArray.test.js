'use strict';

const decompress = require('./decompressArray');
let v1 = decompress.decompressRLElistv1;
let v2 = decompress.decompressRLElist;

describe('Testing Version 1', () => {
  it('it returns the correct array', () => {
    let nums = [1, 2, 3, 4];
    expect(v2(nums)).toEqual([2, 4, 4, 4]);
  });

  it('it returns the correct array', () => {
    let nums = [1, 1, 2, 3];
    expect(v2(nums)).toEqual([1, 3, 3]);
  });
});
