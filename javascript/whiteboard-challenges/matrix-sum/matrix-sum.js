//write a function to add up the sum of each row in a matrix (array of arrays) of arbitrary size, and return an array with the appropriate values.
//https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-04/interview-02.html

//[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]	[6, 15, 18]

const matrixSum = matrix =>matrix.map((subArray => subArray.reduce((a,b) => a + b, 0)));

module.exports = matrixSum;
