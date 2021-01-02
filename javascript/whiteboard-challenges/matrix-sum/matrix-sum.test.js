const matrixSum = require('./matrix-sum');

describe('matrix sum', () => {
  it('can add up a matrix of numbers', ()=>{
    let input = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
    expect(matrixSum(input)).toEqual([6, 15, 18]);
  });

  it('can add up a matrix of numbers, including negative number', ()=>{
    let input = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];
    expect(matrixSum(input)).toEqual([6, 5, 20]);
  });


});
