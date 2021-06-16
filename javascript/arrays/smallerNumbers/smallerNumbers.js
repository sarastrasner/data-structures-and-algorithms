const smallerNumbersThanCurrent = nums => {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map(num => sorted.indexOf(num));
};

module.exports = smallerNumbersThanCurrent;
