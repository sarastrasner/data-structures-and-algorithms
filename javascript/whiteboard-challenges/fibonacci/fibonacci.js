//Generate the nth Fibonacci number, 2 different ways.
//Write a function to accepts an integer, and returns the nth number in the Fibonacci sequence.
// https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-04/interview-01.html

const fibonacci = n => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;
