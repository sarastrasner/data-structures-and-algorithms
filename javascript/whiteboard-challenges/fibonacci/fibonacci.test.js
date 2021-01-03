const fibonacci = require('./fibonacci');

describe ('Fibonacci sequence', () => {
  it('calculates the correct Fibonacci sequence', () => {
    expect(fibonacci(0)).toBe(1);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(6)).toBe(13);
    expect(fibonacci(10)).toBe(89);
  });
});
